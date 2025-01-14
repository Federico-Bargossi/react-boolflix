import { useContext } from 'react'; 
import CountContext from '../contexts/CountCountext';

function Nav() {
  
  const { searchValue, setSearchValue, getMovies } = useContext(CountContext);

  return (
    <div>
      <form onSubmit={getMovies}>
        <input
          type="search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Cerca un film..."
        />
        <button type="submit">Cerca</button>
      </form>
    </div>
  );
}

export default Nav;
