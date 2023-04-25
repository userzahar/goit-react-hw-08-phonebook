import styled from 'styled-components';

export const Header = styled.header`
  background-color: rgb(213, 208, 204);
  height: 40px;
  padding-top: 8px;
  display: flex;
  justify-content: space-around;
`;

export const NavigationList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0;
  padding: 0;
  width: 490px;
  list-style: none;
  & a {
    text-decoration: none;
    font-weight: 700;
  }
  & a:hover {
    color: #000b5b;
  }
`;
