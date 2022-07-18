import { useDispatch } from 'react-redux';

import { uiOpenModal } from '../../actions/ui';

export const AddNewFab = () => {
  const dispatch = useDispatch();

  const handleOpenModalWhenButtonClicked = () => {
    dispatch(uiOpenModal());
  };

  return (
    <button
      className='btn btn-primary fab'
      onClick={handleOpenModalWhenButtonClicked}
    >
      <i className='fas fa-plus'></i>
    </button>
  );
};
