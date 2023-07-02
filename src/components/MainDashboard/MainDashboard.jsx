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

const MainDashboard = ({ columns }) => {
  // console.log(columns);
  const { openModal, closeModal } = useContext(ModalContext);

  const addColumnModal = () => {
    openModal({
      children: <ColumnModal
              title={'Add column'}
              butName={'Add'}
              handleClose={closeModal}
            />
    });
  }

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
                <Column title={column.title} id={column._id} />
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
