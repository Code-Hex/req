import * as React from 'react';
import { Button, Form, FormField, Checkbox, FormInput, FormSelect, FormRow } from 'elemental';

var methods = ["get", "post", "put", "head", "delete", "patch"]
var style = {
  main: {
    margin: "0 auto",
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  form: {
    backgroundColor: "#ffffff",
    border: "1px solid #dedede",
    borderRadius: "0.3em 0",
    padding: "20px",
  }
};

export default class Home extends React.Component {
  constructor(props) {
      super(props);
      
      this.state = {
          message: 'Failed',
          method:  'GET',
          followRedirect: false,
      };
      this.changeMethod = this.changeMethod.bind(this);
      this.togglefollowRedirect = this.togglefollowRedirect.bind(this);
  }

  changeMethod(value) {
    console.log(value)
    this.setState({method: value});
  }

  togglefollowRedirect() {
    console.log("toggled:", !this.state.followRedirect)
    this.setState({followRedirect: !this.state.followRedirect})
  }
  
  componentDidMount() {
      fetch('/healthcheck')
          .then(x => x.json())
          .then(json => {
              this.setState({
                  message: json.message
              });
          })
  }
  
  render() {
      var options = methods.map((e) => {
        return { label: e.toUpperCase(), value: e }
      });

      const { message } = this.state;
      const { method  } = this.state;

      return (
          <main style={ style.main }>
            <div>method: { method.toUpperCase() }</div>
            <div>{ message }</div>
            <Form style={ style.form }>
              <h3>Destination</h3>
              <FormRow>
                <div style={{ padding:"0 0.375em", display: "block" }}>Follow redirects: <a href="#" style={{ textDecoration: "none" }} onClick={ this.togglefollowRedirect }>{ this.state.followRedirect ? "OFF" : "ON" }</a></div>
                <FormField width="one-sixth" htmlFor="basic-form-input-api">
                  <FormSelect options={ options } onChange={ this.changeMethod } />
                </FormField>
                <FormField width="one-half" htmlFor="basic-form-input-api-name">
                  <FormInput autoFocus type="text" placeholder="yourapi.com" name="api-name" />
                </FormField>
              </FormRow>
              <h3>Headers</h3>
              <FormRow>
                <FormField width="one-half" label="Key" htmlFor="key-name">
                  <FormInput placeholder="Key" name="key1" />
                </FormField>
                <FormField width="one-half" label="Value" htmlFor="value-name">
                  <FormInput placeholder="Value" name="value1" />
                </FormField>
              </FormRow>
              <h3>Parameters</h3>
              <FormRow>
                <FormField width="one-half" label="Key" htmlFor="key-name">
                  <FormInput placeholder="Key" name="key1" />
                </FormField>
                <FormField width="one-half" label="Value" htmlFor="value-name">
                  <FormInput placeholder="Value" name="value1" />
                </FormField>
              </FormRow>
            </Form>
          </main>
      );
  }
}