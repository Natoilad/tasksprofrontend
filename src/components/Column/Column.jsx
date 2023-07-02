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
import ContainerModal from 'components/Modals/ContainerModal';
import { useState } from 'react';
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

const Column = ({ board, title, id }) => {
  // console.log(id);
  const { tasks } = useSelector(selectTasks);

  // const tasks = ['1', '2', '3'];
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const filteredTasks = tasks.filter(task => task.columnId === id);
  return (
    <Conteiner>
      <HeaderColumn boardId={board._id} title={title} columnId={id} />
      <ScrollBlock defer element="div" options={options}>
        <CardList>
          {filteredTasks.map(item => (
            <li key={item._id}>
              <Card task={item} />
            </li>
          ))}
        </CardList>
      </ScrollBlock>

      <Btn onClick={handleOpen}>
        <IconPlus>
          <use href={icon + '#icon-plus'}></use>
        </IconPlus>
        Add another card
      </Btn>
      {open && (
        <ContainerModal
          handleClose={handleClose}
          open={open}
          component={
            <CardModal
              board={board}
              columnId={id}
              title={'Add card'}
              butName={'Add'}
              handleClose={handleClose}
            />
          }
        />
      )}
    </Conteiner>
  );
};
export default Column;
