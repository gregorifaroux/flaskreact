import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 class="content-subhead">API Call Example</h1>
        <p className="App-intro">
          <form method="POST" action="/findcommonletters" name="webapp" class="pure-form pure-form-aligned">

            <fieldset>
              <div class="pure-control-group">
                  <label for="sentence">Sentence:</label>
                  <input id="sentence" type="text" size="40"  placeholder="A sentence"></input>
              </div>
              <div class="pure-control-group">
                  <label for="letters">Letters:</label>
                  <input id="letters" type="text" size="10"  placeholder="Enter letters"></input>
              </div>

              <div class="pure-control-group">
                <button type="submit" class="pure-button">
                    Common letters
                </button>
                <button type="submit" formaction="/countvowels" class="pure-button">
                  Count vowels
                </button>
              </div>
            </fieldset>



      </form>        
</p>
      </div>
          );
        }
      }
      
      export default App;
