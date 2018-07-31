import React, { Component } from 'react';
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

  

  render() {
    const { res } = this.state;
    return (
      <div className="App">
        <h1 className="content-subhead">API Call Example</h1>
        <div className="App-intro">
          <form onSubmit={this.handleSubmit} name="webapp" className="pure-form pure-form-aligned">

            <fieldset>
              <div className="pure-control-group">
                  <label htmlFor="sentence">Sentence:</label>
                  <input id="sentence" name="sentence" type="text" size="40"  placeholder="A sentence" required></input>
              </div>
              <div className="pure-control-group">
                  <label htmlFor="letters">Letters:</label>
                  <input id="letters" name="letters" type="text" size="10"  placeholder="Enter letters" required></input>
              </div>

              <div className="pure-control-group">
                <button className="pure-button">
                    Common letters
                </button>
                <button className="pure-button">
                  Count vowels
                </button>
              </div>
            </fieldset>



      </form>        
      </div>
      <div className="res-block">
          	<div>
              <h3>Results:</h3>
              <pre>FormData {res}</pre>
          	</div>
        </div>
      </div>
          );
        }
      }
      
      export default App;
