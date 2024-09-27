import React, {useEffect, useState} from "react";
import './App.css'
import MovieCrad from "./MovieCard";
import SearchIcon from './search.svg'
const API_URL = 'http://www.omdbapi.com?apikey="Your API Key"';
// const Movie = {
//     "Title": String,
//     "Year": String,
//     "imdbID": String,
//     "Type": String,
//     "Poster": String
// }
const App = () => {

    const [Movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');
    const searchmovie = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        console.log(data.Search)
        setMovies(data.Search);
    }
    useEffect(() => {
        searchmovie(`spiderman`);
    }, []);

    return(
        <div className="app">
            <h1>Movie Land</h1>

            <div className="search">
                <input type="search" 
                       placeholder="Search Movie"  
                       value= {search}
                       onChange={(e) => setSearch(e.target.value)}
                />  {/* value= endgame*/}
                <img
                    src={SearchIcon}
                    alt="Search"
                    onClick={() => searchmovie(search)}
                />
            </div>
            {
                Movies?.length > 0
                    ? (
                        <div className="container">
                            {/* <div className="movie">
                                <div>
                                    <p>
                                        {Movie.Year}
                                    </p>
                                </div>
                                <div>
                                    <img src={Movie.Poster !== 'N/A' ? Movie.Poster : 'https://via.placeholder.com/400'} alt={Movie.Title}/>
                                </div>
                                <div>
                                    <span>{Movie.Type}</span>
                                    <h3>{Movie.Title}</h3>
                                </div>
                            </div> */}
                            {
                                Movies.map((MOVIE)=> (
                                    <MovieCrad MOVIE={MOVIE}/>
                                ))
                            }
                        </div>
                    ) :
                    (
                        <div className="empty">
                            <h2>Search Again</h2>
                        </div>
                    )
            }
        </div>
    );
}

export default App;
