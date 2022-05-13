import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: auto;
  margin-left: auto;
  margin-right: auto;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  margin-right: 10px;
  color: #000;
  font-size: 20px;
  font-weight: 500;
  text-shadow: 1px 1px 2px #000;
`;

export const Button = styled.button`
  font-size: 20px;
  font-weight: 600;
  display: inline-block;
  cursor: pointer;
  background-color: #fff;
  color: #4d0c03;
  text-transform: uppercase;
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 1px 10px;
  box-shadow: 5px 6px 4px #4d0c0370;
  text-shadow: 1px 1px 2px #4d0c03;

  &:hover {
    color: #fff;
    background-color: #d4240d;
    box-shadow: 1px 2px 1px #d6503e, 3px 5px 4px #f53c23, 5px 11px 8px #9c2818,
      10px 20px 15px #4d0c03;
    transition: all 400ms cubic-bezier(0.4, 0, 0.3, 1);
  }
`;
