import { Header, BoardName, FilterBtn } from './HeaderDashboard.styled';

import { ModalContext } from '../../contexts/index';
import { useContext } from 'react';
import { CreateBoardModal } from 'components/Modals/FilterModal/FilterModal';

const HeaderDashboard = ({ title, id }) => {
  
  const { openModal, closeModal } = useContext(ModalContext);

  const filtersModal = () => {
    openModal({
      children: <CreateBoardModal
              title={'Filters'}
              butName={'Edit'}
              handleClose={closeModal}
            />
    });
  }

  return (
    <Header>
      <BoardName>{title}</BoardName>
      <FilterBtn onClick={filtersModal}>Filters</FilterBtn>
    </Header>
  );
};
export default HeaderDashboard;
