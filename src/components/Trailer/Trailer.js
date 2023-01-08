import React, { useRef } from 'react';
import Modal from '../Modal/Modal';

const Trailer = ({ link, closeTrailerHandler }) => {
  const trailerRef = useRef();
  const handler = () => {
    closeTrailerHandler();
  };

  return (
    <div ref={trailerRef} onClick={handler}>
      <Modal>
        <div className="flex justify-center items-center mt-20 relative w-full ">
          <iframe
            autoPlay
            height="600px"
            width="900px"
            frameBorder="0"
            title="Trailer"
            src={`https://www.youtube.com/embed/${link}`}
            allow="autoplay"
          />
        </div>
      </Modal>
    </div>
  );
};

export default Trailer;
