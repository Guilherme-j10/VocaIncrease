import styled, { keyframes } from 'styled-components';

const ShowCard = keyframes`
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

export const ContianerGlobal = styled.section`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  > .ContainerSpec {
    width: 100%;
    display: flex;
    padding: 3% 20%;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

    > .Options {
      width: 100%;
      margin-bottom: 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      > .buttonOptions {
        display: flex;
        justify-content: flex-start;
        align-items: center; 

        > button {
          background-color: #d6411c;
          margin-right: 10px;
          color: #fff;
          padding: 10px 14px;
          cursor: pointer;
          border-radius: 5px;
          transition: all linear .1s;

          > svg {
            margin-right: 10px;
          }

          :active {
            background-color: #ad2e0e;
            transform: scale(.9);
          }
        }
      }

      > h1 {
        margin-right: 30px;
        color: #ad2e0e;
        font-size: 1.1em;

        > svg {
          margin-right: 10px;
        }
      }
    }

    > .spaceText {
      width: 100%;
      max-height: 250px;
      overflow-y: scroll;
      padding-right: 10px;
      margin-bottom: 20px;

      ::-webkit-scrollbar {
        width: 5px;
        height: 5px;
      }
      ::-webkit-scrollbar-button {
        width: 0px;
        height: 0px;
      }
      ::-webkit-scrollbar-thumb {
        background: #ccc;
        border: 0px none #ffffff;
        border-radius: 100px;
      }
      ::-webkit-scrollbar-track {
        background: transparent;
        border: 0px none #ffffff;
        border-radius: 0px;
      }
      ::-webkit-scrollbar-corner {
        background: transparent;
      }


      > p {
        color: #666;
        font-size: 1.1em;

        > span {
          color: #666;
          cursor: pointer;

          :hover {
            color: #d6411c;
            text-shadow: 0px 0px 15px #d6411c;
          }
        }
      }
    }

    > .ContainerSticked {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;

      > .Header {
        width: 100%;

        > h1 {
          color: #444;
          font-size: 1.2em;
          font-weight: bold;
        }
      }

      > .ContainerContentCards {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        margin-top: 20px;

        > .LineCard {
          width: 100%;
          margin-bottom: 10px;
          background-color: #d6411c;
          padding: 10px;
          border-radius: 5px;
          animation: ${ShowCard} .2s linear;
          display: flex;
          justify-content: space-between;
          align-items: center;

          > .SideLeft {
            > h1 {
              color: #fff;
              font-size: 1.1em;
            }
          }

          > .SideRight {
            > button {
              background-color: #ffffff2d;
              padding: 8px 12px;
              color: #fff;
              border-radius: 5px;
              cursor: pointer;

              :active {
                background-color: #fff;
                color: #d6411c;
              }
            }
          }
        }

        > .LineCard:last-child {
          margin-bottom: 0px;
        }
      }
    }
  }

  > .ContainerButton {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    button {
      background-color: #d6411c;
      color: #fff;
      padding: 10px 12px;
      border-radius: 5px;
      font-size: 1em;
      box-shadow: 0px 0px 15px 1px #d6411c;
      cursor: pointer;
      transition: all linear .1s;

      :active {
        background-color: #ad2e0e;
        transform: scale(.9);
      }
    }
  }
`;