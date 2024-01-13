import React from 'react';
import { FaHome, FaSearch, FaPlusSquare, FaHeart, FaUser } from 'react-icons/fa';
import styled from 'styled-components';

const BottomMenuContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
  box-shadow: 0px -2px 5px 0px rgba(0, 0, 0, 0.1);
`;

const BottomMenuItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => (props.active ? '#E11915' : '#999')};

  &:hover {
    color: #E11915;
  }
`;

const BottomMenu = () => {
  return (
    <BottomMenuContainer>
      <BottomMenuItem active>
        <FaHome size={20} />
      </BottomMenuItem>
      <BottomMenuItem>
        <FaSearch size={20} />
      </BottomMenuItem>
      <BottomMenuItem>
        <FaPlusSquare size={20} />
      </BottomMenuItem>
      <BottomMenuItem>
        <FaHeart size={20} />
      </BottomMenuItem>
      <BottomMenuItem>
        <FaUser size={20} />
      </BottomMenuItem>
    </BottomMenuContainer>
  );
};

export default BottomMenu;
