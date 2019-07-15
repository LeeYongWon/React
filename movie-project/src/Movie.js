import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

// class Movie extends Component {
//     static propTypes = {
//         title: PropTypes.string.isRequired,
//         poster: PropTypes.string.isRequired
//     }

//     render() {
//         console.log(`Movie에서의 ${this.props.poster}`);
//         return (
//             <div>
//                 <h1>{`이 영화의 제목은 ${this.props.title}`}</h1>
//                 <Movieposter poster={this.props.poster} />
//             </div>

//         );
//     }
// }
function Movie({ title, poster }) {
    return (
        <div>
            <h1>{`이 영화의 제목은 ${title}  `}</h1>
            <Movieposter poster={poster} />
        </div>

    )
}
// class Movieposter extends Component {
//     static propTypes={
//         poster:PropTypes.string.isRequired
//     }
//     render() {
//         console.log(`MoviePoseter에서의 ${this.props.poster}`);
//         return (
//             <div>
//                 <img src={this.props.poster}></img>
//             </div>
//         );
//     }
// }

function Movieposter({ poster }) {
    return (
        <img src={poster}></img>
    )
}
Movie.propTypes ={
    title:PropTypes.string.isRequired
}
Movieposter.propTypes = {
    poster: PropTypes.string.isRequired
}

export default Movie;

