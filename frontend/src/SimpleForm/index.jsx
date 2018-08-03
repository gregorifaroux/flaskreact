import React, { Component, ReactDOM, mountNode} from 'react';
import { Field } from 'redux-forms';

class SimpleForm extends React.Component{  
  render(){
      return (
        <div>
          <h1>Test</h1>
          <form className="form">
    <div className="field">
      <div className="control">
        <label className="label">First Name</label>
        <Field className="input" name="firstName" component="input" type="text" placeholder="First Name"/>
      </div>
    </div>
    </form>
        </div>
    ) 
   }
}

export default SimpleForm;