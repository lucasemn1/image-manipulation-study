import styled from 'styled-components';

export const ListOptions = styled.ul`
  position: absolute;
  right: 0;
  list-style: none;
  border-radius: 20px 0 0 20px;
  font-size: 12px;
`;

export const OptionItem = styled.li`
  padding: 20px; 
  color: #FFFFFF;
  text-align: right;
  display: flex;
  align-items: center;
  background-color: #2e2b2b;
  border-radius: inherit;
  transition: 0.1s;

  & > div {
    margin-left: 5px;
  }

  &:hover {
    background-color: #D55;
    transition: 0.1s;
    cursor: pointer;
  }
`;

export const ImageInput = styled.input`
  display: none;
`;