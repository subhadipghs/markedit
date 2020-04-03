import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import Emoji from './component/emoji';
import './App.css';

function App({children}) {
  return (
    <Container id="width">
      <Header as='h1' className="App-header">
        MarkEdit
        <Emoji symbol="🔥" ariaLabel="fire" />
      </Header>
      {children}
    </Container>
  );
}

export default App;
