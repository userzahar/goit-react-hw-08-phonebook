import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ModalStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  & h3 {
    margin-right: 17px;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
  }
  & ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
  }
  & ul li {
    margin-right: 20px;
  }
  & ul li:last-child {
    margin-right: 0;
  }
`;
export const LinkStyled = styled(NavLink)`
  -webkit-box-align: center;
  align-items: center;
  appearance: none;
  background-color: rgb(252, 252, 253);
  border-radius: 4px;
  border-width: 0px;
  box-shadow: rgba(45, 35, 66, 0.4) 0px 2px 4px,
    rgba(45, 35, 66, 0.3) 0px 7px 13px -3px,
    rgb(214, 214, 231) 0px -3px 0px inset;
  box-sizing: border-box;
  color: rgb(54, 57, 90);
  cursor: pointer;
  display: inline-flex;
  font-family: 'JetBrains Mono', monospace;
  height: 25px;
  -webkit-box-pack: center;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  text-align: left;
  text-decoration: none;
  transition: box-shadow 0.15s ease 0s, transform 0.15s ease 0s;
  user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow, transform;
  font-size: 18px;
  margin-left: 4px;
  &:hover {
    box-shadow: rgba(45, 35, 66, 0.4) 0px 4px 8px,
      rgba(45, 35, 66, 0.3) 0px 7px 13px -3px,
      rgb(214, 214, 231) 0px -3px 0px inset;
    transform: translateY(-2px);
  }
`;
