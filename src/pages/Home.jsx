import { Box, HomeWrapper } from './PagesStyle.styled';

const { default: Board } = require('components/Board/Board');
const { Header } = require('components/Header/Header');
const { SidebarMain } = require('components/Sidebar/SidebarMain/SidebarMain');

const HomePage = () => {
  return (
    <HomeWrapper>
      <SidebarMain></SidebarMain>
      <Box>
        <Header></Header>
        <Board></Board>
      </Box>
    </HomeWrapper>
  );
};

export default HomePage;
