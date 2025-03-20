import React from 'react'
import NewReceipt from '../Components/NewReceipt'

function HomePage() {
  return (
    <>
      <h1 className="text-4xl font-bold text-white mb-4">Add a receipt</h1>
      <NewReceipt />
    </>
  )
}

export default HomePage