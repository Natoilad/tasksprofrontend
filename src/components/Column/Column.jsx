import Card from 'components/Card/Card';
import icon from '../../images/sprite.svg';
import HeaderColumn from 'components/HeaderColumn/HeaderColumn';
import {
  Btn,
  Conteiner,
  ScrollBlock,
  CardList,
  IconPlus,
} from './Column.styled';

import { ModalContext } from '../../contexts/index';
import { useContext } from 'react';
import CardModal from 'components/Modals/CardModal/CardModal';
import { useSelector } from 'react-redux';
import { selectTasks } from 'redux/tasks/tasks-selectors';
const options = {
  scrollbars: {
    scrollbars: { autoHide: 'scroll' },
    overflow: {
      x: 'hidden',
    },
  },
};

const Column = ({ title, id }) => {
  console.log(id);
  const realTasks = useSelector(selectTasks);
  console.log(realTasks);
  const tasks = ['1', '2', '3'];
  const { openModal, closeModal } = useContext(ModalContext);

  const addCardModal = () => {
    openModal({
      children: <CardModal
              title={'Add card'}
              butName={'Add'}
              handleClose={closeModal}
            />
    });
  }

  return (
    <Conteiner>
      <HeaderColumn title={title} />
      <ScrollBlock defer element="div" options={options}>
        <CardList>
          {tasks.map(item => (
            <li key={item}>
              <Card />
            </li>
          ))}
        </CardList>
      </ScrollBlock>

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
