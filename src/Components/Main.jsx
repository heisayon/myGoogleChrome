import SearchBar from './SearchBar';
import logo from '../Assets/Updated LOGO.svg';

function Main() {
  return (
    <div>
      <main className="flex justify-center">
        <img className="mt-[8%] mb-[30px]" src={logo} alt="Google`s Logo" width="272px" height="92px" />

      </main>
      <SearchBar />
    </div>
  );
}

export default Main;
