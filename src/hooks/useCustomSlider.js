import { IoMdArrowDropright, IoMdArrowDropleft } from 'react-icons/io';

import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';

const useCustomSlider = ({ data, title }) => {
  const imgPath = 'https://image.tmdb.org/t/p/w500';
  const dataRef = useRef(null);
  const [slideNumber, setSlideNumber] = useState(0);

  const dataLength = data.length - 1;

  const handleClick = (direction) => {
    let distance = dataRef.current.getBoundingClientRect().x;

    if (direction === 'left' && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      dataRef.current.style.transform = `translateX(${240 + distance}px)`;
    } else if (direction === 'right' && slideNumber < dataLength) {
      setSlideNumber(slideNumber + 1);
      dataRef.current.style.transform = `translateX(${-240 + distance}px)`;
    }
  };

  return (
    <div className="mt-[100px] relative mb-10">
      <h2 className="text-xl  pb-5 pl-5">{title}</h2>
      <IoMdArrowDropleft
        className="text-3xl text-white cursor-pointer
     absolute
      top-0
      left-0
      bottom-0
      m-auto
      z-[1000]
      bg-black bg-opacity-80
      rounded-md
    "
        onClick={() => handleClick('left')}
      />
      <div
        className="flex     w-max  items-center justify-center transition-all duration-500 ease-in-out  
    "
        ref={dataRef}
      >
        {data.map((movie) => (
          <Link to={`/movie/${movie?.id}`} className="ml-5" key={movie?.id}>
            <img
              src={`${imgPath}/${movie?.poster_path}`}
              alt={movie?.title}
              className="w-[220px] h-[250px] object-center rounded-md  z-0"
            />
          </Link>
        ))}
      </div>
      <IoMdArrowDropright
        className="text-3xl text-white cursor-pointer
     absolute
      top-0
      right-0
      bottom-0
      m-auto
      z-10
      bg-black bg-opacity-80
      rounded-md
    "
        onClick={() => handleClick('right')}
      />
    </div>
  );
};

export default useCustomSlider;
