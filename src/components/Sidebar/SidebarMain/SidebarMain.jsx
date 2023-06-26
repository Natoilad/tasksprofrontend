import {
  SidebarWrapper,
  LogoBox,
  SidebarIcon,
  SidebarHeader,
  SideListName,
} from './SidebarMain.styled';
import icon from '../../../images/sprite.svg';
import { BoardCreateBtn } from 'components/Sidebar/BoardCreateBtn/BoardCreateBtn';
import { BoardList } from 'components/Sidebar/BoardList/BoardList';
import { AskHelp } from '../AskHelp/AskHelp';
import { LogOutBtn } from '../LogOutBtn/LogOutBtn';

export const SidebarMain = () => {
  return (
    <SidebarWrapper>
      <LogoBox>
        <SidebarIcon>
          <use href={icon + '#icon-icondarklogo'}></use>
        </SidebarIcon>
        <SidebarHeader>Task Pro</SidebarHeader>
      </LogoBox>
      <SideListName>My boards</SideListName>
      <BoardCreateBtn />
      <BoardList />
      <AskHelp></AskHelp>
      <LogOutBtn></LogOutBtn>
    </SidebarWrapper>
  );
};
