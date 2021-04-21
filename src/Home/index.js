import React, { useState, useEffect } from 'react';
import * as Style from './style';
import ModalLoadText from '../components/LoadModal/index';

const Home = () => {
  
  const [ Text, setText ] = useState('');
  const [ haveText, setHaveText ] = useState(false);
  const [ showModal, setShowModal ] = useState(false);
  const [ Words, setWords ] = useState([]);

  const HendleSelectWord = (word) => {
    const dataWord = {
      word: word,
      mean: 'sei la po'
    };
    if(localStorage.getItem('WordsInformation')){
      let oldInformation = JSON.parse(localStorage.getItem('WordsInformation'));
      oldInformation.push(dataWord);
      localStorage.setItem('WordsInformation', JSON.stringify(oldInformation));
    }else{
      localStorage.setItem('WordsInformation', JSON.stringify([dataWord]));
    }
    UpdateList();
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
  }, [])

  return(
    <>
      <Style.ContianerGlobal>
        {haveText == true ? (
          <div className="ContainerSpec">
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
                            console.log(`${Words[s]} - ${spliter[k]}`);
                            return '#d6411c';
                          }
                        }
                      }else{
                        return false;
                      }
                    })() }} onClick={() => { HendleSelectWord(spliter[k]); }} >{spliter[k]} </span>
                  );
                }
                return splash;
              })()}</p>
            </div>
            <div className="ContainerSticked">
              <div className="Header">
                <h1>
                  Palavras marcadas: 
                </h1>
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
                        Descartar
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