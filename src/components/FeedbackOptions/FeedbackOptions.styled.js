import styled from 'styled-components';

const ListButtons = styled.ul`
  display: flex;
  list-style: none;
`;
const ItemButton = styled.li`
  margin-right: 20px;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 50px;
  background-color: aqua;
  color: rgb(4, 0, 255);
  border-radius: 4%;
  border: 2px solid blueviolet;
  font-size: 20px;
  text-transform: capitalize;
  cursor: pointer;
  :hover {
    background-color: #7777d6;
  }
`;

export { ListButtons, ItemButton, Button };
