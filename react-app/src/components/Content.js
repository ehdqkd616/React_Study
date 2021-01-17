import React, { Component } from 'react'; // React를 사용할때 꼭 필요한 코드

class Content extends Component { // Content 컴포넌트
    render() { 
      return (
        <article>
          <h2>{this.props.title}</h2>
          {this.props.desc}
        </article>
      );
    }
}

export default Content; // 외부에서 TOC.js를 사용할 수 있도록 하는 코드