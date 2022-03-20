import styled from '@emotion/styled';

export const LeaveFeedback = styled.p`
  font-size: 24px; 
  font-weight: 900px;

`;
export const ButtonList = styled.ul`
padding: 0;
  list-style: none; 
  display: flex;

`;
export const ButtonItem = styled.li`

 &:not(:last-child) {
   margin-right: 10px;
 }
`;
export const Button = styled.button`
cursor: pointer;
width: 60px;
padding: 5px;
border: 1px solid gray;
border-radius: 3px;
`;