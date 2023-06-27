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

const options = {
  scrollbars: {
    scrollbars: { autoHide: 'scroll' },
    overflow: {
      x: 'hidden',
    },
  },
};

const Column = ({ title, id }) => {
 const [open, setOpen] = useState(false);
 const handleClose = () => setOpen(false);
 const handleOpen = () => setOpen(true);

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
