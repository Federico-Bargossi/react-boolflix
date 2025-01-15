import { useContext } from 'react';
import CountContext from '../contexts/CountCountext';
import style from "./nav.module.css"

function Nav() {

  const { searchValue, setSearchValue, getMovies } = useContext(CountContext);

  return (
    <div>
      <form onSubmit={getMovies} className={style.navcont}>
        <img className={style.net} src="/logoNet.jpg" alt="" />
        <div className={style.inputCont}>
          <input
          className={style.input}
            type="search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Digita per cercare un film..."
          />
          <button className={style.btn} type="submit">Cerca</button>
        </div>
      </form>
    </div>
  );
}

export default Nav;
