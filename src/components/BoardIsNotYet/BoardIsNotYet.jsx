import { Wrapper, Text, Link } from './BoardIsNotYet.styled';

const BoardIsNotYet = () => {
  return (
    <Wrapper>
      <Text>
        Before starting your project, it is essential
        <Link> to create a board</Link> to visualize and track all the necessary
        tasks and milestones.This board serves as a powerful tool to organize
        the workflow and ensure effective collaboration among team members.
      </Text>
    </Wrapper>
  );
};

export default BoardIsNotYet;
