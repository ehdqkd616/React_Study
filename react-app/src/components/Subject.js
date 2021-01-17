import React, { Component } from 'react'; // React를 사용할때 꼭 필요한 코드

class Subject extends Component { // Subject 컴포넌트
    render() { // class 안의 function은 키워드 생략 가능
      return (
        <header>
          <h1>{this.props.title}</h1> {/* {this.props.name} */}
          {this.props.sub} {/* {this.props.name} */}
        </header>
      );
    }
}

export default Subject; // 외부에서 TOC.js를 사용할 수 있도록 하는 코드