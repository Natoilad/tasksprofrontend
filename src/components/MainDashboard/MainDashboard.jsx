import Column from 'components/Column/Column';
import { Btn, Conteiner } from './MainDashboard.styled,';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
const MainDashboard = () => {
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
        <Btn>Add another column</Btn>
      </Conteiner>
    </OverlayScrollbarsComponent>
  );
};
export default MainDashboard;
