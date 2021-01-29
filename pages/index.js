import styled from 'styled-components'

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
            <p>{db.description}</p>
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
