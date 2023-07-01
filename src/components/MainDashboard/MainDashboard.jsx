import Column from 'components/Column/Column';
import {
  Btn,
  Conteiner,
  ScrollBlock,
  ColumnList,
} from './MainDashboard.styled,';
// import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import ContainerModal from 'components/Modals/ContainerModal';
import { useState } from 'react';
import ColumnModal from 'components/Modals/ColumnModal/ColumnModal';
// import { useSelector } from 'react-redux';
// import { selectContent, selectColumns } from 'redux/content/content-selectors';
const MainDashboard = ({ board, columns }) => {
  // const boards = useSelector(selectContent);
  // console.log(boards);
  // const columns = useSelector(selectColumns);
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

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
                <Column board={board} title={column.title} id={column._id} />
              </li>
            ))}
          </ColumnList>
        )}
        <Btn onClick={handleOpen}>Add another column</Btn>
        {open && (
          <ContainerModal
            handleClose={handleClose}
            open={open}
            component={
              <ColumnModal
                boardId={board._id}
                title={'Add column'}
                butName={'Add'}
                handleClose={handleClose}
              />
            }
          />
        )}
      </Conteiner>
    </ScrollBlock>
  );
};
export default MainDashboard;
