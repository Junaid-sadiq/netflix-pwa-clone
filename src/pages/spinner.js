import React from 'react'

function Spinner() {
  return (
    <div className='spinner'>
      <div
        style={{
          display: 'grid',
          placeItems: 'center',
          backgroundColor: 'white',
          height: '100vh',
        }}
      >
        <img
          src='/images/spinner_gif.gif'
          alt='loading gif'
          style={{ marginTop: '50px', width: '60%' }}
        />
        <h1
          style={{
            color: 'gray',
            fontSize: '40px',
            fontWeight: 'bolder',
            marginBottom: '150px',
          }}
        >
          Loading
        </h1>
      </div>
    </div>
  )
}

export default Spinner
