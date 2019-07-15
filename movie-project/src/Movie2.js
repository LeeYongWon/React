import React  from 'react';
import PropTypes from 'prop-types';

// class Movie2 extends Component {
//     static propTypes={
//         title:PropTypes.string.isRequired,
//         poster:PropTypes.string.isRequired
//     }
//     render() {
//         return (
//             <div>
//                 <h1>{`이곳은 Movie2 이 영화의 제목은 ${this.props.title}`}</h1>
//                 <MoviePoster2 poster={this.props.poster} />
//             </div>

//         );
//     }
// }
function Movie2({ title, poster }) {
    return (
        <div>
            <h1>{`이 영화의 제목은 ${title} 2`}</h1>
            <MoviePoster2 poster={poster} />
        </div>
    );
}
// class MoviePoster2 extends Component {
//     static propTypes={
//         poster:PropTypes.string.isRequired
//     }
//     render() {
//         return (
//             <img src={this.props.poster}></img>
//         );
//     }
// }
//MoivePoster2는 props만 가지고 state를 갖지 않기 때문에 function 으로 작성
function MoviePoster2({ poster }) {
    return (
        <img src={poster}></img>
    );
}

Movie2.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}
MoviePoster2.propTypes = {
    poster: PropTypes.string.isRequired
}
export default Movie2