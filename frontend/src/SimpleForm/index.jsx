import React from 'react'
import { Field, reduxForm } from 'redux-form'

let SimpleForm = props => {
  const { handleSubmit } = props

  return (
    <form onSubmit={handleSubmit} className="pure-form pure-form-aligned">
      <fieldset>
        <div className="pure-control-group">
          <label htmlFor="sentence">Sentence: </label>
          <Field name="sentence" component="input" type="text" />
        </div>
        <div className="pure-control-group">
          <label htmlFor="letters">Letters: </label>
         <Field name="letters" component="input" type="text" />
       </div>
       <button type="submit" className="pure-button">Common Letters</button>
      </fieldset>
    </form>
  )
}


SimpleForm = reduxForm({
  // a unique name for the form
  form: 'contact'
})(SimpleForm)

export default SimpleForm