import React, { Component } from 'react';

import './App.css';

import SimpleForm from './SimpleForm/';
import URLForm from './SimpleForm/url';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  submit = values => {
    // print the form values to the console
    console.log(values);

    fetch('http://127.0.0.1:5000/findcommonletters', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Results ' + JSON.stringify(data))
        this.setState({
          res: JSON.stringify(data)
        })
      }
    ).catch(err => {
      console.error('Error: ', err)
    });
  }

  urlparse = values => {
    console.log(values);
    fetch('http://127.0.0.1:5000/soup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Results ' + JSON.stringify(data))
        this.setState({
          res: JSON.stringify(data)
        })
      }
    ).catch(err => {
      console.error('Error: ', err)
    });
  }
  
  render() {
    const { res } = this.state;
    return (
      <div className="App">
        <h1 className="content-subhead">API Call Example</h1>
        <div className="App-intro">
          <div className="container">
            <p className="App-intro">
            </p>
            <SimpleForm onSubmit={this.submit} />
            <URLForm onSubmit={this.urlparse} />
          </div>
      </div>
      <div className="res-block">
          	<div>
              <h3>Results:</h3>
              <pre>{res}</pre>
          	</div>
        </div>
      </div>
          );
        }
      }
      
      export default App;
