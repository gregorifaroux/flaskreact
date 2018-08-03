import React, { Component } from 'react';

import SimpleForm from './SimpleForm/';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(event.target)
    const data = new FormData(event.target);
    console.log(JSON.stringify(data))
    
    fetch('http://127.0.0.1:5000/', {
      method: 'POST',
      body: data,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
    })
    .then(response => response.json())
    .then(data =>  this.setState({
      res: JSON.stringify(data)
    })).catch(err => {
      console.error('Error: ', err)
    });
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
