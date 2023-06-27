import icon from '../../images/sprite.svg';
import {
  ColumnName,
  Conteiner,
  Btn,
  IconEdit,
  Wrap,
} from './HeaderColumn.styled';

const HeaderColumn = ({ title, id }) => {
  return (
    <Conteiner>
      <ColumnName>{title}</ColumnName>
      <Wrap>
        <Btn>
          <IconEdit>
            <use href={icon + '#icon-pencil'}></use>
          </IconEdit>
        </Btn>
        <Btn>
          <IconEdit>
            <use href={icon + '#icon-trash'}></use>
          </IconEdit>
        </Btn>
      </Wrap>
    </Conteiner>
  );
};
export default HeaderColumn;
