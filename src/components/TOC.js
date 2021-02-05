import React, { Component } from 'react'; // Component 클래스 로딩, 필수적으로 들어가야 한다.

class TOC extends Component {
    render() {
        var lists = [];
        var data = this.props.data;
        var i = 0;
        
        while(i < data.length){
            lists.push(<li key={data[i].id}><a href={"/content/"+data[i].id}>{data[i].title}</a></li>)
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

export default TOC;