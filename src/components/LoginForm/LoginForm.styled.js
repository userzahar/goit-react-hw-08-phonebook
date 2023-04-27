import styled from 'styled-components';

export const FormLoginStyled = styled.form`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  flex-direction: column;
  align-items: center;
  & label {
    display: flex;
    flex-direction: column;
    margin: 10px 0;
  }
  & label input {
    height: 30px;
    padding: 5px;
    border: none;
    border-radius: 5px;
    background-color: #f8f8f8;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
  }

  & label input:focus {
    outline: none;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
  }

  & button {
    width: 179px;
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
  }
  & button:hover {
    box-shadow: rgba(45, 35, 66, 0.4) 0px 4px 8px,
      rgba(45, 35, 66, 0.3) 0px 7px 13px -3px,
      rgb(214, 214, 231) 0px -3px 0px inset;
    transform: translateY(-2px);
  }
`;
