import React, { Component, Fragment } from 'react';
import NavbarPage from './components/NavbarPage';
import CardComponent from './components/CardComponent';
import TablePage from './components/TablePage';
import "@fortawesome/react-fontawesome";

class App extends Component {
  render() {
    return (
      <Fragment>
          <NavbarPage />
          <div className ="container">
            <CardComponent />
            <div className = "tableData">
              <TablePage />
            </div>
          </div>
      </ Fragment>
    );
  }
}

export default App;