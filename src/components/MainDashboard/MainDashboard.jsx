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

const MainDashboard = ({ columns }) => {
  // console.log(columns);
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
                <Column title={column.title} id={column._id} />
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
