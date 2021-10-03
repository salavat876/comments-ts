import React from 'react';
import { Container } from "@material-ui/core";
import Form from "./components/Form";
import CommentList from "./components/CommentList";

function App() {
  return (
      <>
          <Container>
              <h1>Comments</h1>
              <Form/>
              <CommentList/>
          </Container>
      </>
  );
}


export default App;
