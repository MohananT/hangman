import { useState } from 'react'
import './App.css'
import HangManDrawing from './components/HangMan/HangManDrawing'
import Keyboard from './components/Keyboard'
import Text from './components/Text'
import Laws from './components/Laws'
import Clues from './components/Clues'

function App() {

  return (
    <>
      <div className='container'>
        <div className='item item-1'>
          <Laws />
        </div>
        <div className='item item-2'>
          <HangManDrawing />
          <Text />
          <Keyboard />
        </div>
        <div className='item item-3'>
          <Clues />
        </div>
      </div>
    </>
  )
}

export default App
