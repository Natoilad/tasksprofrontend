import { Header, BoardName, FilterBtn } from './HeaderDashboard.styled';

const HeaderDashboard = ({ title, id }) => {
  return (
    <Header>
      <BoardName>{title}</BoardName>
      <FilterBtn>Filters</FilterBtn>
    </Header>
  );
};
export default HeaderDashboard;
