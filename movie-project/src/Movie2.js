import React, { Component } from 'react';

class Movie2 extends Component {
    render() {
        return (
            <div>
                <h1>{`이곳은 Movie2 이 영화의 제목은 ${this.props.title}`}</h1>
                <MoviePoster2 poster={this.props.poster} />
            </div>

        );
    }
}

class MoviePoster2 extends Component {
    render() {
        return (
            <img src={this.props.poster}></img>
        );
    }
}
export default Movie2