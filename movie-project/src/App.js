import React, {Component} from 'react';
import Moive from './Movie';
import Movie2 from './Movie2';
import './App.css';
const movies =[
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

class App extends Component{
  render(){
    return(
      <div className='App'>
        <div className='Movie'>
          {movies.map((data) =>{
            return <Moive title={data.title} poster={data.poster} />
            })};
        </div>
        <div className='Movie2'>
            {movies.map(moviedata=>{
              return <Movie2 title={moviedata.title} poster ={moviedata.poster} />
            })};
        </div>
      </div>
    )
  }

}



export default App;
