import NotFoundMeme from '../../assets/not-found.gif';

const PageNotFound = () => {
  return (
    <div className="flex justify-center items-center text-center mt-12">
      <h2 className="text-lg">Page is not found... </h2>
      <img src={NotFoundMeme} alt='not found'/>
    </div>
  );
};

export default PageNotFound;
