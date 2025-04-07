import React, { Component } from 'react'

export class TradSignup extends Component {
  render() {
    return (
      <div>TradSignup
        <form onSubmit={handleSubmit} className='flex flex-col space-y-3'>
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
      </form>
   
      </div>
    )
  }
}

export default TradSignup