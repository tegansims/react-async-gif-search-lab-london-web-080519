import React, {Component} from 'react';

class GifList extends React.Component {

    render(){
        return <ul>
            <img src={this.props.gif.images.original.url} alt={this.props.gif.slug} width='200px'/>
            </ul>
    }

}

export default GifList;