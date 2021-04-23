import React, { Component } from 'react';
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";
import './App.css';


// class Subject extends Component { 
//     render() { // class 안에 있는 function은 function 키워드를 생략한다
//     return ( 
//       <header>
//         <h1>{this.props.title}</h1>
//         {this.props.sub}
//       </header>
//     );
//   }
// }

// class TOC extends Component { 
//   render() {
//     return (
//       <nav>
//           <ul>
//               <li><a href="1.html">HTML</a></li>
//               <li><a href="2.html">CSS</a></li>
//               <li><a href="3.html">JavaScript</a></li>
//           </ul>
//       </nav>
//     );
//   }
// }

// class Content extends Component {
//   render() {
//     return ( 
//       <article>
//         <h2>{this.props.title}</h2>
//         {this.props.desc}
//       </article>
//     );
//   }
// }

class App extends Component
{ // 컴포넌트 생성 코드
    constructor(props)
    {
        super(props);
        this.state = {
            mode: 'welcome',
            subject: { title: 'WEB', sub: 'World Wid Web!' },
            welcome: { title: 'Welcome', desc: 'Hello, React!!' },
            contents: [
                { id: 1, title: 'HTML', desc: 'HTML is for information' },
                { id: 2, title: 'CSS', desc: 'CSS is for design' },
                { id: 3, title: 'JavaScript', desc: 'JavaScript is for interactive' }
            ]
        }
    } // render 함수 실행 전에 컴포넌트를 초기화 시켜주는 코드

    render()
    { // props나 state 값이 바뀌면 해당되는 컴포넌트의 render 함수가 다시 실행된다. 즉 화면이 다시 그려진다.
        var _title, _desc = null;
        if (this.state.mode === 'welcome') {
            _title = this.state.welcome.title;
            _desc = this.state.welcome.desc;
        } else if (this.state.mode === 'read') {
            _title = this.state.contents[0].title;
            _desc = this.state.contents[0].desc;
        }

        return ( // 반드시 리액트는 최상위 태그가 하나 이상 존재해야 한다.
            <div className="App">
                <Subject
                    title={this.state.subject.title}
                    sub={this.state.subject.sub}
                    onChangePage={function ()
                    {
                        alert('hihihi');
                    }.bind(this)}
                >
                </Subject>
                {/* <header>
          <h1><a href="/" onClick={function(e){
            e.preventDefault(); // 이벤트를 막는다. 페이지전환 혹은 리로드를 막는 것. 이벤트의 기본적인 동작을 막는다.
            // this.state.mode = 'welcome'; // event 함수 안에 있는 this는 아무것도 가리키지 않는다.  
            this.setState({ // bind(this)와 setState를 통해 state를 변경한다.
              mode:'welcome'
            });
            // render()함수 안에서 this는 render()를 포함하는 component 자체를 가리킨다.
            // event 함수 안에서 this의 값은 아무것도 가리키지 않기때문에 bind() 함수를 통해서 this 값을 초기화 시켜준다.
          }.bind(this)}>{this.state.subject.title}</a></h1> 
          {this.state.subject.sub}
        </header> */}
                <TOC data={this.state.contents}></TOC>

                <Content
                    title={_title} desc={_desc}>
                </Content>
            </div>
        );
    }
}

export default App;