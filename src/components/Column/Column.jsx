import Card from 'components/Card/Card';
import HeaderColumn from 'components/HeaderColumn/HeaderColumn';
import { Btn, Conteiner, ScrollBlock, CardList } from './Column.styled';
const options = {
  scrollbars: {
    scrollbars: { autoHide: 'scroll' },
    overflow: {
      x: 'hidden',
    },
  },
};

const Column = ({ title, id }) => {
  return (
    <Conteiner>
      <HeaderColumn title={title} />
      <ScrollBlock defer element="div" options={options}>
        <CardList>
          <li>
            <Card />
          </li>
          <li>
            <Card />
          </li>
          <li>
            <Card />
          </li>
          <li>
            <Card />
          </li>
        </CardList>
      </ScrollBlock>

      <Btn>Add another card</Btn>
    </Conteiner>
  );
};
export default Column;
