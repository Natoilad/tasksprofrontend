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

const MainDashboard = () => {
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
        <ColumnList>
          <li>
            <Column title="Name of column" id="1" />
          </li>
          <li>
            <Column title="Name of column" id="1" />
          </li>
          <li>
            <Column title="Name of column" id="1" />
          </li>
          <li>
            <Column title="Name of column" id="1" />
          </li>
        </ColumnList>
        <Btn onClick={handleOpen}>Add another column</Btn>
        {open && (
          <ContainerModal
            handleClose={handleClose}
            open={open}
            component={
              <ColumnModal title={'Add column'} butName={"Add"} handleClose={handleClose} />
            }
          />
        )}
      </Conteiner>
    </ScrollBlock>
  );
};
export default MainDashboard;
