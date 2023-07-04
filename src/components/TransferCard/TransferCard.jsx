import {
  Wrapper,
  PopUpItemBtn,
  PopUpItemName,
  IconSvg,
} from './TransferCard.styled';
import icon from '../../images/sprite.svg';

const TransferCard = ({ column, handleClick }) => {
  const selectColumn = evt => {
    handleClick(column._id);
  };
  return (
    <Wrapper onClick={selectColumn}>
      <PopUpItemName>{column.title}</PopUpItemName>
      <PopUpItemBtn>
        <IconSvg>
          <use href={icon + '#icon-arrow-circle-broken-right'}></use>
        </IconSvg>
      </PopUpItemBtn>
    </Wrapper>
  );
};

export default TransferCard;
