import React, { Component } from 'react';
import TOC from './components/TOC'; // TOC 파일을 로드
import Content from './components/Content'; // Content 파일을 로드
import Subject from './components/Subject'; // Subject 파일을 로드
import './App.css';

// class Subject extends Component { // Subject 컴포넌트
//   render() { // class 안의 function은 키워드 생략 가능
//     return (
//       <header>
//         <h1>WEB</h1>
//         world wide web!
//       </header>
//     );
//   }
// }

// class Subject extends Component { // Subject 컴포넌트
//   render() { // class 안의 function은 키워드 생략 가능
//     return (
//       <header>
//         <h1>{this.props.title}</h1> {/* {this.props.name} */}
//         {this.props.sub} {/* {this.props.name} */}
//       </header>
//     );
//   }
// }

// class TOC extends Component { // TOC 컴포넌트
//   render() { 
//     return (
//       <nav>
//         <ul>
//           <li><a href="1.html">HTML</a></li>
//           <li><a href="2.html">CSS</a></li>
//           <li><a href="3.html">JavaScript</a></li>
//         </ul>
//       </nav>
//     );
//   }
// }

// class Content extends Component { // Content 컴포넌트
//   render() { 
//     return (
//       <article>
//         <h2>{this.props.title}</h2>
//         {this.props.desc}
//       </article>
//     );
//   }
// }

// 유사 JavaScript이다. 자바스크립트 아님
class App extends Component { // App 컴포넌트

  constructor(props) { // render 함수보다 먼저 실행되면서 컴포넌트를 초기화 시켜주는 코드.
    super(props);
    this.state = {
      subject:{title:'WEB', sub:'World Wide Web!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is HyperText ...'},
        {id:2, title:'CSS', desc:'CSS is for design ...'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive ...'}
      ]
    }
  }

  render() {
    return (
      <div className="App">
        {/* <Subject title="WEB" sub="world wide web!"></Subject> {this.props.name} */}
        {/* <TOC></TOC> */}
        {/* <Content title="HTML" desc="HTML is HyperText Markup Language"></Content> {this.props.name} */}

        <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject> {/* {this.props.name} */}
        <TOC data={this.state.contents}></TOC>
        <Content title="HTML" desc="HTML is HyperText Markup Language"></Content> {/* {this.props.name} */}
      
      </div>
    );
  }
}

export default App;
