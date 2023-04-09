import styled from 'styled-components';

export const StyledLayout = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1170px;
  margin: 0 auto;
  padding: 15px;
  /* background-color: red; */

  & .title {
    margin: 0;
    margin-bottom: 15px;
    text-align: center;
  }
`;
