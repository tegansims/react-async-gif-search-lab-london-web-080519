import React, {Component} from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {

state = {
    gifs: [],
    text: 'dolphin'
}

componentDidMount(){
    fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.text}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(resp=>resp.json())
    .then(data => this.setState({gifs: data.data.slice(0,3)}))
}


handleTextChange = e => {this.setState({ text: e.target.value})}

handleFormSubmit = e => {
    e.preventDefault()
    fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.text}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(resp=>resp.json())
    .then(data => this.setState({gifs: data.data.slice(0,3)}))
    // .catch(alert('bad luck, no'))
}

render(){

    return <div>
        <GifSearch handleTextChange={this.handleTextChange} 
        handleFormSubmit={this.handleFormSubmit} 
        text={this.state.text}/>
        {this.state.gifs.map(gif=> <GifList id={gif.images.original.url} gif={gif}/>)}
        </div>
    }

}

export default GifListContainer;