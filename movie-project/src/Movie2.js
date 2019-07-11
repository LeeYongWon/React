import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Movie2 extends Component {
    static propTypes={
        title:PropTypes.string.isRequired,
        poster:PropTypes.string.isRequired
    }
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
    static propTypes={
        poster:PropTypes.string.isRequired
    }
    render() {
        return (
            <img src={this.props.poster}></img>
        );
    }
}
export default Movie2