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
            frameBorder="0"
            title="Trailer"
            allowFullScreen
            src={`https://www.youtube.com/embed/${link}`}
            className="aspect-video w-full mt-10 lg:mt-0 lg:h-[600px] lg:w-[900px]"
          />
        </div>
      </Modal>
    </div>
  );
};

export default Trailer;
