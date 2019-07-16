import React, {Component} from 'react';
import Movie2 from './Movie2';
import './App.css';
import Movie from './Movie';


class App extends Component{
  /*
  life cycle
  - Render : componentWillMount() -> render() -> componentDidMount()

  - Update : componentWillReceiveProps(){
    이것은 컴포넌트가 새로운 props를 받았다는 뜻이다.
  } -> shouldCoponentUpdate(){
    리액트는 old props, 새로운 props를 살펴본 다음
    이전과 새로운 props가 다르면 리액트는 update==='true'라고 생각한다.
    이전 데이터와 새로운 데이터가 서로 달면 update가 발생한다.
  } -> componentWillUpdate(){
    컴포넌트가 업데이트 할 거라는 단계로 넘어간다.
  }
  -> render(){

  } -> componentDidUpdate(){
    
  }
  */
 //state를 만드는 방법
 
  state={

  }

 componentWillMount(){
  this._getMovies();
 }

_getMovies = async() => {
  const movies = await this._callApi()
  this.setState({
    movies
  })
}

_callApi = () =>{
  return fetch("https://yts.lt/api/v2/list_movies.json?sort_by=rating")
  .then(response => response.json())
  .then(json =>json.data.movies)
  .catch(err =>err) 
}
 _renderMovies = () => {
  const movies = this.state.movies.map(movie => {
    return <Movie title={movie.title} poster={movie.large_cover_image} key={movie.id} />
  })
  return movies;
 }

 _renderMovies2 = () =>{
    const movies =this.state.movies.map((movie) =>{
      return <Movie2 title={movie.title} poster={movie.large_cover_image} key={movie.id}/>
    })
    return movies;
 }

  render(){
    console.log('did render')
    return(
      <div className='App'>
        <div className='Movie'>
          {this.state.movies ? this._renderMovies() : 'loading'}
        </div>
        <div className='Movie2'>
          {this.state.movies ? this._renderMovies2() : 'loading'}
        </div>
      </div>
    )
  }

}

export default App;
