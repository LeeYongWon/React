import React, {Component} from 'react';
import './Movie.css';

class Movie extends Component{
    render(){
        console.log(`Movie에서의 ${this.props.poster}`);
        return (
            <div>
                <h1>{`이 영화의 제목은 ${this.props.title}`}</h1>
                <Movieposter poster={this.props.poster} />
            </div>
            
        );
    }
}

class Movieposter extends Component{
    
    render(){
        console.log(`MoviePoseter에서의 ${this.props.poster}`);
        return(
            <div>
               <img src={this.props.poster}></img>
            </div>
        );
    }
}

export default Movie;