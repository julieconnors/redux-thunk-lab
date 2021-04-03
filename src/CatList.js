import React, { Component } from 'react';

class CatList extends Component {
    render() {
        return (
        <div>
            {this.props.catPics.map(cat => {
                return <img src={cat.url} alt="cat"></img>
            })}
        </div>
        )
    }
}

export default CatList;