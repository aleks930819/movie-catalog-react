import { useDispatch, useSelector } from 'react-redux';
import { handlePage } from '../../features/currentPage';
import { useGetMoviesQuery } from '../../store';
import Button from '../Button/Button';

const Pagination = ({  totalPages }) => {
  const dispatch = useDispatch();
  const { pageNumber } = useSelector((state) => state.page);

  if (totalPages === 0) {
    return null;
  }

  return (
    <div className="flex gap-5 justify-center items-center mt-7">
      <Button
        primary
        onClick={() =>
          pageNumber > 1 ? dispatch(handlePage('decrease')) : null
        }
      >
        Prev
      </Button>
      <p className="text-xl">{pageNumber}</p>
      <Button
        primary
        onClick={() =>
          pageNumber !== totalPages ? dispatch(handlePage('increase')) : null
        }
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
