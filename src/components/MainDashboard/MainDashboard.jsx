import Column from 'components/Column/Column';
import {
  Btn,
  Conteiner,
  ScrollBlock,
  ColumnList,
  IconPlus,
} from './MainDashboard.styled,';
// import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import icon from '../../images/sprite.svg';
import { ModalContext } from '../../contexts/index';
import { useContext } from 'react';
import ColumnModal from 'components/Modals/ColumnModal/ColumnModal';

const MainDashboard = ({ board, columns }) => {
  const { openModal, closeModal } = useContext(ModalContext);

  const addColumnModal = () => {
    openModal({
      children: (
        <ColumnModal
          boardId={board._id}
          title={'Add column'}
          butName={'Add'}
          handleClose={closeModal}
        />
      ),
    });
  };

  return (
    <ScrollBlock
      element="div"
      options={{
        overflow: {
          x: 'scroll',
          y: 'hidden',
        },
        scrollbars: {
          pointers: ['mouse', 'touch'],
          dragScroll: true,
        },
      }}
    >
      <Conteiner>
        {columns && (
          <ColumnList>
            {columns.map(column => (
              <li key={column._id}>
                <Column
                  columns={columns}
                  board={board}
                  title={column.title}
                  id={column._id}
                />
              </li>
            ))}
          </ColumnList>
        )}
        <Btn onClick={addColumnModal}>
          <IconPlus width="28" height="28">
            <use href={icon + '#icon-plus-black'}></use>
          </IconPlus>
          Add another column
        </Btn>
      </Conteiner>
    </ScrollBlock>
  );
};
export default MainDashboard;
