import { ColumnName, Conteiner, Btn } from './HeaderColumn.styled';

const HeaderColumn = ({ title, id }) => {
  return (
    <Conteiner>
      <ColumnName>{title}</ColumnName>
      <div>
        <Btn>edit</Btn>
        <Btn>delete</Btn>
      </div>
    </Conteiner>
  );
};
export default HeaderColumn;
