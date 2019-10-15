import React, {Component} from 'react';

class GifSearch extends React.Component {

    render(){
        return (
        <div>
            <form onSubmit={this.props.handleFormSubmit}>
                Enter a Search Term:
                <input type='text' placeholder={this.props.text} value={this.props.text} name='thingToSearch' onChange={this.props.handleTextChange}></input>
                <button type='Submit'>Find gifs</button>
            </form>

        </div>
        )}

}

export default GifSearch;