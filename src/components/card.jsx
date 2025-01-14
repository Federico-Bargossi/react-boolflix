import { useContext } from "react";
import CountContext from '../contexts/CountCountext';

function Card() {

    const { movie } = useContext(CountContext);
    const urlImg = "https://image.tmdb.org/t/p/w500/";

    const getFlag = (languageCode) => {
        
        if (languageCode === 'it') {
            return '/it.png';  // Bandiera italiana
        } else if (languageCode === 'en') {
            return '/en.png';  // Bandiera inglese
        } else {
            return '/placeholder.png';  // Bandiera di default 
        }
    };

    return (
        <div className="movies-container">
            {movie.length !== 0 ? (
                movie.map((curMovie, index) => (
                    <div key={index} className="movie-card">
                        <h3>{curMovie.title}</h3>
                        <p><strong>Titolo Originale:</strong> {curMovie.original_title}</p>
                        <img src={getFlag(curMovie.original_language)} alt="" />
                        <p><strong>Voto:</strong> {curMovie.vote_average}</p>
                        <img src={`${urlImg}${curMovie.poster_path}`} alt="" />
                    </div>
                ))
            ) : (
                <p>Nessun film trovato.</p>
            )}
        </div>
    );
}

export default Card;