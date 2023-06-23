import Column from 'components/Column/Column';
import { Btn, Conteiner } from './MainDashboard.styled,';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import * as React from 'react';
import ContainerModal from 'components/Modals/ContainerModal';
import { useState } from 'react';
import Card from 'components/Card/Card';

const MainDashboard = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <OverlayScrollbarsComponent
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
        <Column title="Name of column" id="1" />
        <Column title="Name of column" id="1" />
        <Column title="Name of column" id="1" />
        <Column title="Name of column" id="1" />
        <Btn onClick={handleOpen}>Add another column</Btn>
        {open && (
          <ContainerModal
            handleClose={handleClose}
            open={open}
            component={<Card />}
          />
        )}
      </Conteiner>
    </OverlayScrollbarsComponent>
  );
};
export default MainDashboard;
