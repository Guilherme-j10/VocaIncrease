import React, { useState, useEffect } from 'react';
import * as Style from './style';
import ModalLoadText from '../components/LoadModal/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icon from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const Home = () => {
  
  const [ Text, setText ] = useState('');
  const [ haveText, setHaveText ] = useState(false);
  const [ showModal, setShowModal ] = useState(false);
  const [ Words, setWords ] = useState([]);
  const [ Load, setLoad ] = useState(false);

  const HendleSelectWord = async (word) => {
    setLoad(true);
    try {
      const response = await axios.post('http://localhost:3232/translate', {
        word: word
      })
      if(response.data){
        const dataWord = {
          word: word,
          mean: response.data
        };
        if(localStorage.getItem('WordsInformation')){
          let oldInformation = JSON.parse(localStorage.getItem('WordsInformation'));
          oldInformation.push(dataWord);
          localStorage.setItem('WordsInformation', JSON.stringify(oldInformation));
        }else{
          localStorage.setItem('WordsInformation', JSON.stringify([dataWord]));
        }
        UpdateList();
        setLoad(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const UpdateList = () => {
    if(localStorage.getItem('WordsInformation')){
      setWords(JSON.parse(localStorage.getItem('WordsInformation')));
    }else{
      return;
    }
  }

  const removeWord = (index) => {
    let listWords = JSON.parse(localStorage.getItem('WordsInformation'));
    listWords.splice(index, 1);
    localStorage.setItem('WordsInformation', JSON.stringify(listWords));
    UpdateList();
  }

  useEffect(() => {
    UpdateList();

    if(localStorage.getItem('TextInput')){
      setText(localStorage.getItem('TextInput'));
      setHaveText(true);
    }else{
      setHaveText(false);
    }
  }, [])

  return(
    <>
      <Style.ContianerGlobal>
        {haveText == true ? (
          <div className="ContainerSpec">
            <div className="Options">
              <div className="buttonOptions">
                <button onClick={() => {
                  localStorage.removeItem('TextInput');
                  setHaveText(false);
                  setText('');
                }}>
                  <FontAwesomeIcon icon={Icon.faTrashAlt} />
                  Remover texto
                </button>
                <button onClick={() => {
                  setShowModal(true);
                }}>
                  <FontAwesomeIcon icon={Icon.faPen} />
                  Editar texto
                </button>
              </div>
              {Load == true ? (
                <h1>
                  <FontAwesomeIcon icon={Icon.faCircleNotch} spin />
                  Buscando palavra...
                </h1>
              ) : false}
            </div>
            <div className="spaceText">
              <p>{(() => {
                const spliter = Text.split(' ');
                let splash = [];
                for(let k in spliter){
                  splash.push(
                    <span key={k} style={{color: (() => {
                      if(Words.length > 0){
                        for(let s in Words){
                          if(Words[s].word == spliter[k]){
                            return '#d6411c';
                          }
                        }
                      }else{
                        return false;
                      }
                    })() }} onClick={() => { 
                      if(Load == false){
                        HendleSelectWord(spliter[k]);
                      }else{
                        return;
                      }
                    }} >{spliter[k]} </span>
                  );
                }
                return splash;
              })()}</p>
            </div>
            <div className="ContainerSticked">
              <div className="Header">
                {Words.length > 0 ? (
                  <h1>
                    Palavras marcadas: 
                  </h1>
                ) : false}
              </div>
              <div className="ContainerContentCards">
                {Words.map((value, index) => (
                  <div key={index} className="LineCard">
                    <div className="SideLeft">
                      <h1>
                        {value.word} - {value.mean}
                      </h1>
                    </div>
                    <div className="SideRight">
                      <button onClick={() => {
                        removeWord(index);
                      }}>
                        <FontAwesomeIcon icon={Icon.faTrashAlt} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="ContainerButton">
            <button onClick={() => { setShowModal(true); }}>
              Carregar texto
            </button>
          </div>
        )}
      </Style.ContianerGlobal>
      <ModalLoadText 
        showModal={showModal}
        text={Text}
        setText={setText}
        setShowModal={setShowModal}
        haveText={haveText}
        setHaveText={setHaveText}
      />
    </>
  );
}

export default Home;