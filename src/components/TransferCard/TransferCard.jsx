import {
  Wrapper,
  Box,
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
      <Box>
        <PopUpItemName>{column.title}</PopUpItemName>
      <PopUpItemBtn>
        <IconSvg>
          <use href={icon + '#icon-arrow-circle-broken-right'}></use>
        </IconSvg>
        </PopUpItemBtn>
      </Box>
      
    </Wrapper>
  );
};

export default TransferCard;
