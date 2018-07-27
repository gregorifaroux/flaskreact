import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          <form method="POST" action="/findcommonletters" name="webapp" class="pure-form pure-form-aligned">

            <fieldset>
              <legend>Python</legend>
              <div class="pure-control-group">
                  <label for="sentence">Sentence:</label>
                  <input id="sentence" type="text" size="80"  placeholder="A sentence"></input>
              </div>
              <div class="pure-control-group">
                  <label for="letters">Letters:</label>
                  <input id="letters" type="text" size="10"  placeholder="Enter letters"></input>
              </div>

              <button type="submit" class="pure-button">
                  Common letters
              </button>

              <button type="submit" formaction="/countvowels" class="pure-button">
                Count vowels
              </button>
            </fieldset>



      </form>        
</p>
      </div>
          );
        }
      }
      
      export default App;
