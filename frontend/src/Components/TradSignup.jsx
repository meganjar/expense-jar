import React, { Component } from 'react'

export class TradSignup extends Component {
  render() {
    return (
      <div>TradSignup
        <label htmlFor='date'>email</label>
      <input
        type='string'
        
        id='email-signup'
        name='transactionDate'
        required
      />
      <label htmlFor='date'>email</label>
      <input
        type='string'
        id='pwd-signup'
        name='choose-password'
        required
      />
   
      </div>
    )
  }
}

export default TradSignup