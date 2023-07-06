import {
  PopUpColumnList,
  PopUpListItem,
  PopUpTransfer,
} from './TransferCard.styledModal';
import TransferCard from 'components/TransferCard/TransferCard';
import { useDispatch } from 'react-redux';
import { transferTask } from 'redux/tasks/tasks-operations';
const TransferCardModal = ({ columns, taskId: id, handleClose }) => {
  const dispatch = useDispatch();

  const handleTransfer = columnId => {
    dispatch(transferTask({ id, columnId }));
    handleClose();
  };
  return (
    <PopUpTransfer>
      <PopUpColumnList>
        {columns &&
          columns.map(column => (
            <PopUpListItem onClick={handleTransfer} key={id}>
              <TransferCard column={column} handleClick={handleTransfer} />
            </PopUpListItem>
          ))}
      </PopUpColumnList>
    </PopUpTransfer>
  );
};

export default TransferCardModal;
