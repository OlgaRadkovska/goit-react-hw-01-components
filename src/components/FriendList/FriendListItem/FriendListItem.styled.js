import styled from 'styled-components';

export const StyledFriendListItem = styled.li`
  padding: 20px;
  display: flex;
  align-items: center;
  box-shadow: 0 0 5px black;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  & .status {
    margin-right: 20px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  & .online {
    margin-right: 20px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: green;
  }

  & .offline {
    margin-right: 20px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: red;
  }

  & .avatar {
    margin-right: 20px;
    width: 100px;
    height: 100px;
    border-radius: 5px;
    border: 1px solid black;
  }

  & .name {
    font-size: 32px;
    text-transform: none;
  }
`;
