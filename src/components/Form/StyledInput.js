const { default: styled } = require('styled-components');

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  width: 100%;
  margin: 20px auto;
  & label {
    font-weight: bold;
    margin-bottom: 10px;
  }
`;
export const InputStyled = styled.input`
  position: relative;
  cursor: text;
  font-size: 14px;
  line-height: 20px;
  padding: 0 16px;
  height: 25px;
  background-color: #fff;
  border: 1px solid #d6d6e7;
  border-radius: 3px;
  color: rgb(35, 38, 59);
  box-shadow: inset 0 1px 4px 0 rgb(119 122 175 / 30%);
  overflow: hidden;
  transition: all 100ms ease-in-out;
  &:focus {
    border-color: #3c4fe0;
    box-shadow: 0 1px 0 0 rgb(35 38 59 / 5%);
  }
`;

// form input[type="text"],
// form input[type="tel"] {
//   padding: 10px;
//   border: none;
//   border-radius: 5px;
//   background-color: #f8f8f8;
//   box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
//   margin-bottom: 20px;
//   width: 100%;
// }

// form input[type="text"]:focus,
// form input[type="tel"]:focus {
//   outline: none;
//   box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
// }

// form button {
//   margin-top: 20px;
//   padding: 10px 20px;
//   background-color: #4CAF50;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   font-size: 16px;
//   font-weight: bold;
//   cursor: pointer;
//   transition: background-color 0.3s ease;
// }

// form button:hover {
//   background-color: #3e8e41;
// }
