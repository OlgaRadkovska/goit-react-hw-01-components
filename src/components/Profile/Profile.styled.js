import styled from 'styled-components';

export const StyledProfile = styled.div`
  margin: 0 auto;
  padding-top: 30px;
  width: 300px;
  font-family: sans-serif;
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px black;
  text-transform: none;
  cursor: pointer;

  & .avatar {
    margin: 0 auto;
    margin-bottom: 40px;
    padding: 10px;
    width: 200px;
    border-radius: 50%;
    border: 1px solid black;
  }

  & .name {
    margin: 0;
    margin-bottom: 10px;
    padding: 0;
  }

  & .tag {
    margin: 0;
    margin-bottom: 10px;
    padding: 0;
    font-size: 16px;
    color: #989c9d;
  }

  & .location {
    margin: 0;
    margin-bottom: 30px;
    padding: 0;
    font-size: 16px;
    color: #989c9d;
  }

  & .stats {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    width: 300px;
    background-color: #f5f8fa;
  }

  & .stats__item {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-basis: 33.33%;
    padding: 25px 18px;
    border: 1px solid #cccccc;
  }

  & .label {
    margin-bottom: 5px;
    font-weight: 400;
    font-size: 16px;
    color: #989c9d;
  }

  & .quantity {
    font-family: sans-serif;
  }
`;
