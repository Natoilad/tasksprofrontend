import Column from 'components/Column/Column';
import {
  Btn,
  Conteiner,
  ScrollBlock,
  ColumnList,
} from './MainDashboard.styled,';
// import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { ModalContext } from '../../contexts/index';
import { useContext } from 'react';
import ColumnModal from 'components/Modals/ColumnModal/ColumnModal';

// import { useSelector } from 'react-redux';
// import { selectContent, selectColumns } from 'redux/content/content-selectors';
const MainDashboard = ({ board, columns }) => {
  // const boards = useSelector(selectContent);
  // console.log(boards);
  // const columns = useSelector(selectColumns);
  const { openModal, closeModal } = useContext(ModalContext);

  const addColumnModal = ({ board, columns }) => {
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
        <Btn onClick={addColumnModal}>Add another column</Btn>
      </Conteiner>
    </ScrollBlock>
  );
};
export default MainDashboard;
