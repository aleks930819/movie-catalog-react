import ReactDOM from 'react-dom';

const Modal = ({ children, action }) => {
  return ReactDOM.createPortal(
    <div className="w-full h-full bg-black/60 overflow-hidden fixed inset-0">
      <div className="flex justify-center flex-col items-center">
        <div>{children}</div>
        <div>{action}</div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;
