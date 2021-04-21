import React, { useEffect, useState, useRef } from 'react';
import * as Style from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icon from '@fortawesome/free-solid-svg-icons';

const LoadTextModal = ({ setShowModal, setHaveText, haveText, text, setText, showModal }) => {

  const [ defaultText, setDefaultText ] = useState('');
  const inputText = useRef();

  const saveOnLocal = (TextInput) => {
    localStorage.setItem('TextInput', TextInput);
  }

  useEffect(() => {
    if(haveText == false){
      setDefaultText('');  
      inputText.current.value = '';
    }else{
      setDefaultText(localStorage.getItem('TextInput'));
    }
  })

  return(
    <Style.ContainerModal style={{display: showModal == true ? 'flex' : 'none'}}>
      <div className="ContainerModal">
        <div className="HeaderContainer">
          <h1>Carregar texto</h1>
          <FontAwesomeIcon onClick={() => { setShowModal(false); }} icon={Icon.faTimes} />
        </div>
        <div className="ContainerContentText">
          <textarea placeholder="Digite o texto aqui..." ref={inputText} defaultValue={defaultText} onChange={(e) => {
            setText(e.target.value);
          }} />
          <button
            style={{cursor: text == '' ? 'not-allowed' : 'pointer'}}
            onClick={() => {
              if(text == ''){
                return;
              }else{
                saveOnLocal(text);
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