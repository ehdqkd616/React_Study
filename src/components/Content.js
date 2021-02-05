import React, { Component } from 'react'; // Component 클래스 로딩, 필수적으로 들어가야 한다.

class Content extends Component {
    render() {
        return (
            <article>
                <h2>{this.props.title}</h2>
                {this.props.desc}
            </article>
        );
    }
}

export default Content;