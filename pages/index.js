import styled from 'styled-components';
import {useRouter} from 'next/router';
import {useState} from 'react';

import BackgroundApp from '../src/components/BackgroundApp';
import QuizContainer from '../src/components/QuizContainer';
import Widget from '../src/components/Widget';
import db from '../db.json';
import GitHubCorner from '../src/components/GitHubCorner';
import Footer from '../src/components/Footer';
import QuizLogo from '../src/components/QuizLogo';
import Header from '../src/components/Header';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');

  return (
    <BackgroundApp bgImage ={db.bg}> 
      <Header></Header>
      <QuizContainer>
        <QuizLogo/>
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function (event){
              event.preventDefault();
              router.push(`/quiz?name=${name}`);
            }
          
          } > 
              <input onChange={function(element){
                setName(element.target.value);
              }} placeholder='Digite o Seu Nome' />
              <button type="submit" disabled={name.length === 0} >Jogar [{name}]</button>
            </form>
          </Widget.Content>
        </Widget>
        
        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>
            <p>lorem ipsum sit amet... </p>
          </Widget.Content>
        </Widget>
        <Footer/>
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/dteodoro" />
    </BackgroundApp>
  );
}
