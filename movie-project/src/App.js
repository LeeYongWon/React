import React, {Component} from 'react';
import Moive from './Movie';
import Movie2 from './Movie2';
import './App.css';

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
 
 state ={
   greeting:'state greeting',
   movies:[
    {
      title:'Matrix',
      poster:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVn0G9GwGIx2o8_XCNvXjslCsn-okXRmI--J99_mLfbJslqCdW',
      
    },
    {
      title:'Full Metal jacket',
      poster:"https://m.media-amazon.com/images/M/MV5BNzkxODk0NjEtYjc4Mi00ZDI0LTgyYjEtYzc1NDkxY2YzYTgyXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY1200_CR85,0,630,1200_AL_.jpg"
    },
    {
      title:"Oldboy",
      poster:"https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg"
    },
    {
      title:"Star Wars",
      poster:"https://starwarsblog.starwars.com/wp-content/uploads/2019/01/SWCO19-artists-key-art-tall-B.jpg"
    }
  ]
 }

 componentDidMount(){
   console.log('ComponentDidMount')
  setTimeout(()=>{
    this.setState({
      movies :[
        ...this.state.movies,
        {
          title:"Trainspotting",
          poster:"https://starwarsblog.starwars.com/wp-content/uploads/2019/01/SWCO19-artists-key-art-tall-B.jpg"
        }
      ]
    })
  },4000);
 }
  render(){
    console.log('did render')
    return(
      <div className='App'>
        <div className='Movie'>
          {this.state.movies.map((data, index) =>{
            return <Moive title={data.title} poster={data.poster} key={index+1} />
            })};
        </div>
        <div className='Movie2'>
            {this.state.movies.map((moviedata, index)=>{
              return <Movie2 title={moviedata.title} poster ={moviedata.poster} key={index+1} />
            })};
        </div>
      </div>
    )
  }

}

export default App;
