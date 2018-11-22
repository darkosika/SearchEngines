import React from 'react';
import ReactDOM from 'react-dom';
import SearcBar from './searcbar';
import Unsplash from './api/unsplash'
import ImageList from './imageList';
class App extends React.Component{
    state={images:[]};
    onSearchSubmit=async term=>{
        console.log(term);
      const response= await Unsplash.get('/search/photos',{
            params:{query:term}
        });
        this.setState({images:response.data.results});
    };
render(){
    return (
    <div className="ui container">
    <SearcBar onSubmit={this.onSearchSubmit}/>
    <ImageList Images={this.state.images}/>
    </div>)
}
}
ReactDOM.render(<App/>,document.querySelector('#root'));