import {
  PopUpColumnList,
  PopUpListItem,
  PopUpTransfer,
  PopUpItemBtn,
  PopUpItemName,
  IconSvg,
} from './TransferCard.styled';
import icon from '../../../images/sprite.svg';

import { useDispatch } from 'react-redux';
import { updateTask } from 'redux/tasks/tasks-operations';
const TransferCard = ({ columns, columnId, isOpen }) => {
  const dispatch = useDispatch();
  const handleTransfer = () => {
    dispatch(updateTask({ columnId }));
  };
  return (
    <PopUpTransfer isOpen={isOpen}>
      <PopUpColumnList>
        {columns &&
          columns.map(column => (
            <PopUpListItem>
              <PopUpItemName>{column.title}</PopUpItemName>
              <PopUpItemBtn onClick={handleTransfer}>
                <IconSvg>
                  <use href={icon + '#icon-arrow-circle-broken-right'}></use>
                </IconSvg>
              </PopUpItemBtn>
            </PopUpListItem>
          ))}
      </PopUpColumnList>
    </PopUpTransfer>
  );
};

export default TransferCard;
