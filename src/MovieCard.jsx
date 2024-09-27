import React from "react";

const MovieCrad = ({MOVIE}) => {
    return(
        <div className="movie">
            <div>
                <p>
                    {MOVIE.Year}
                </p>
            </div>
            <div>
                <img src={MOVIE.Poster !== 'N/A' ? MOVIE.Poster : 'https://via.placeholder.com/400'} alt={MOVIE.Title}/>
            </div>
            <div>
                <span>{MOVIE.Type}</span>
                <h3>{MOVIE.Title}</h3>
            </div>
        </div>
    )
}

export default MovieCrad;