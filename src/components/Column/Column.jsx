import Card from 'components/Card/Card';
import icon from '../../images/sprite.svg';
import HeaderColumn from 'components/HeaderColumn/HeaderColumn';
import { Btn, Conteiner, CardList, IconPlus, Wrap } from './Column.styled';

import { ModalContext } from '../../contexts/index';
import { useContext } from 'react';
import CardModal from 'components/Modals/CardModal/CardModal';
import { useSelector } from 'react-redux';
import { selectTasks } from 'redux/tasks/tasks-selectors';
import { getFilter } from 'redux/filter/filter-selectors';
import { useScrollbar } from 'hooks/useScrollbar';
// import { useMatchMedia } from 'hooks/useMatchMedia';
import { useRef } from 'react';

const Column = ({ columns, board, title, id }) => {
  const { tasks } = useSelector(selectTasks);
  const { openModal, closeModal } = useContext(ModalContext);
  const filter = useSelector(getFilter);
  const wrapper = useRef(null);
  const options = {
    scrollbars: {
      scrollbars: { autoHide: 'scroll' },
      overflow: {
        x: 'hidden',
      },
    },
  };
  // const { isMobile } = useMatchMedia();
  const hasScroll = tasks.length > 3;
  useScrollbar(wrapper, hasScroll, options);
  const addCardModal = () => {
    openModal({
      children: (
        <CardModal
          columnId={id}
          board={board}
          title={'Add card'}
          butName={'Add'}
          handleClose={closeModal}
        />
      ),
    });
  };
  const filteredTasks = tasks.filter(task => task.columnId === id);
  const filterPriority = () => {
    if (filter !== 'all') {
      return filteredTasks.filter(task => task.priority === filter);
    }
    return filteredTasks;
  };

  return (
    <Conteiner>
      <HeaderColumn boardId={board._id} title={title} columnId={id} />
      <Wrap ref={wrapper} hasScroll={hasScroll}>
        <CardList>
          {filterPriority().map(item => (
            <li key={item._id}>
              <Card columns={columns} columnId={id} task={item} />
            </li>
          ))}
        </CardList>
      </Wrap>

      <Btn onClick={addCardModal}>
        <IconPlus>
          <use href={icon + '#icon-plus'}></use>
        </IconPlus>
        Add another card
      </Btn>
    </Conteiner>
  );
};
export default Column;
