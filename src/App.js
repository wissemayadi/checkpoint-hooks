import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import {moviesData} from './MoviesData';
import Main from "./Components/Main/Main";
import Header from "./Components/Main/Header/header";
function App() {
  const [movies, setMovies] = useState(moviesData);
  const [searchName,setSearchName] = useState("");
  const [searchRate,setSearchRate] = useState(0);
  const AddNewMovie=(x)=>{
    setMovies([...movies,x]);
  };
  return (
    <div className="App">
      <Header 
      setSearchName={setSearchName}
      setSearchRate={setSearchRate}
      searchRate={searchRate}

      />
      <Main  movies={
          (searchName || searchRate)
            ? movies.filter(
                (el) =>
                  el.name
                    .toLowerCase()
                    .includes(searchName.toLowerCase().trim()) &&
                  el.rating >= searchRate
              )
            : movies
        }
      
      
      
      AddNewMovie={AddNewMovie}
      
      
      />
    </div>
  );
}

export default App;
