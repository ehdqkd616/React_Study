import React, { Component } from 'react'; // React를 사용할때 꼭 필요한 코드

class TOC extends Component { // TOC 컴포넌트
    render() { 
        var lists = [];
        var data = this.props.data;
        var i = 0;
        while(i < data.length){
            lists.push(<li key={data[i].id}><a href={"/content/"+data[i].id}>{data[i].title}</a></li>); // 엘리먼트를 자동으로 여러개 생성
            i = i + 1;
        }
        return (
        <nav>
            <ul>
                {lists}
            </ul>
        </nav>
        );
    }
}

export default TOC; // 외부에서 TOC.js를 사용할 수 있도록 하는 코드