import React from 'react';
import * as Style from './style';

const LoadTextModal = ({ setShowModal, setHaveText, haveText, text, setText, showModal }) => {
  return(
    <Style.ContainerModal style={{display: showModal == true ? 'flex' : 'none'}}>
      <div className="ContainerModal">
        <div className="HeaderContainer">
          <h1>Carregar texto</h1>
          <span onClick={() => { setShowModal(false); }}>X</span>
        </div>
        <div className="ContainerContentText">
          <textarea placeholder="Digite o texto aqui..." onChange={(e) => {setText(e.target.value)}}>{text}</textarea>
          <button
            style={{cursor: text == '' ? 'not-allowed' : 'pointer'}}
            onClick={() => {
              if(text == ''){
                return;
              }else{
                setHaveText(true);
                setShowModal(false);
              }
            }}
          >Carregar</button>
        </div>
      </div>
    </Style.ContainerModal>
  );
} 

export default LoadTextModal;