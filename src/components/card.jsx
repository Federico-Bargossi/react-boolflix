import { useContext } from "react";
import CountContext from '../contexts/CountCountext';
import style from "./card.module.css";

function Card() {
    const { movie } = useContext(CountContext);
    const urlImg = "https://image.tmdb.org/t/p/w500/";

    const getFlag = (languageCode) => {
        if (languageCode === 'it') {
            return '/it.png';  
        } else if (languageCode === 'en') {
            return '/en.png';  
        } else {
            return '/placeholder.png';  
        }
    };

    return (
        <div className={style.container}>
            {movie.length !== 0 ? (
                movie.map((curMovie, index) => (
                    <div key={index} className={style.card}>
                        {curMovie.poster_path === null ? (
                            <div>
                                <img src='/placeholder.png' alt="Film" />
                                <p className={style.cen}>Copertina del film non disponibile</p>
                            </div>
                        ) : (
                            <img src={`${urlImg}${curMovie.poster_path}`} alt={curMovie.title} />
                        )}
                        <div className={style.none}>
                            <h3>{curMovie.title}</h3>
                            <p><strong>Titolo Originale:</strong> {curMovie.original_title}</p>
                            <div className={style.flagCont}>
                                <p>Lingua:</p>
                                <img src={getFlag(curMovie.original_language)} alt="" className={style.flag} />
                            </div>
                            <p><strong>Voto:</strong> {curMovie.vote_average}</p>
                            <p>Descrizione: {curMovie.overview}</p>
                        </div>
                    </div>
                ))
            ) : (
                <h3>Cerca un film nella barra di ricerca.</h3>
            )}
        </div>
    );
}

export default Card;