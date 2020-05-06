import React, {PureComponent} from 'react';
import './App.css';
import {Container, Navbar} from "react-bootstrap";
import {DataBrowser} from './components/data-browser';

interface IAppState {
  value: number
}

export default class App extends PureComponent {

  constructor(props: any) {
    super(props);
  }

  public render() {
    return <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <img src="/tapis-logo-navbar.png" height="40px" />
          Tapis Files
        </Navbar.Brand>
      </Navbar>
      <Container fluid>
        <DataBrowser/>
      </Container>
    </>
  }
}
