import Movies from '../Movies/Movies';

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row z-[-100]">
      <Movies />
    </div>
  );
};

export default Home;
