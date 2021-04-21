import styled, { keyframes } from 'styled-components';

const ShowModal = keyframes`
  0%{
    transform: scale(0.1); 
    opacity: 0.3;
  }
  50%{
    transform: scale(1.1); 
  }
  100%{
    transform: scale(1); 
    opacity: 1;
  }
`;

export const ContainerModal = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  background-color: #1111112d;
  top: 0px;
  left: 0px;
  display: none;
  justify-content: center;
  align-items: center;

  > .ContainerModal {
    width: 40%;
    padding: 12px;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0px 0px 15px 1px #1111112d;
    animation: ${ShowModal} .2s linear;

    > .HeaderContainer {
      width: 100%;
      border-bottom: solid 1px #ccc;
      padding: 10px;
      padding-top: 0px;
      margin-bottom: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      > h1 {
        color: #555;
        font-weight: bold;
        font-size: 1.2em;
      }

      > span {
        color: #555;
        font-weight: bold;
        font-size: 1.2em;
        cursor: pointer;
      }
    }

    > .ContainerContentText {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;

      > textarea {
        width: 100%;
        resize: none;
        border: solid 1px #ccc;
        border-radius: 5px;
        margin-bottom: 15px;
        padding: 12px;
        height: 150px;
      }

      > button {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        color: #fff;
        padding: 9px 0px;
        border-radius: 5px;
        font-size: 1.1em;
        background-color: #1d8fdb;

        :active {
          background-color: #156fab;
        }
      }
    }
  }
`;