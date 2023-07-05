import { Header, BoardName, FilterBtn } from './HeaderDashboard.styled';
import icon from '../../images/sprite.svg';
import { ModalContext } from '../../contexts/index';
import { useContext } from 'react';
import { FilterModal } from 'components/Modals/FilterModal/FilterModal';

const HeaderDashboard = ({ title, id }) => {
  const { openModal, closeModal } = useContext(ModalContext);

  const filtersModal = () => {
    openModal({
      children: <FilterModal title={'Filters'} handleClose={closeModal} />,
    });
  };

  return (
    <Header>
      <BoardName>{title}</BoardName>
      <FilterBtn onClick={filtersModal}>
        <svg>
          <use href={icon + '#icon-filter'}>
          </use>
        </svg>
        Filters
      </FilterBtn>
    </Header>
  );
};
export default HeaderDashboard;
