import React from 'react'
import { Field, reduxForm } from 'redux-form'

let URLForm = props => {
  const { handleSubmit } = props

  return (
    <form onSubmit={handleSubmit} className="pure-form pure-form-aligned">
      <fieldset>
        <div className="pure-control-group">
          <label htmlFor="url">URL: </label>
          <Field name="url" component="input" type="text" />
        </div>
       <button type="submit" className="pure-button">Analyze URL</button>
      </fieldset>
    </form>
  )
}


URLForm = reduxForm({
  // a unique name for the form
  form: 'urlform'
})(URLForm)

export default URLForm