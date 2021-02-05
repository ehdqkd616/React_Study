import React, { Component } from 'react'; // Component 클래스 로딩, 필수적으로 들어가야 한다.

class Subject extends Component {
    render() { // class 안에 있는 function은 function 키워드를 생략한다
        return (
            <header>
                <h1><a href="/">{this.props.title}</a></h1>
                {this.props.sub}
            </header>
        );
    }
}

export default Subject;