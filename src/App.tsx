// import { useState } from 'react'
import './App.css'
import Keyboard from './components/Keyboard'
import Text from './components/Text'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { HomeContainer } from "./container/HomeContainer"
import PredictionContainer from './container/PredictionContainer'
import ClueContainer from './container/ClueContainer'

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <>
        <div className='container-root'>
          <div className='item item-1'>
            <PredictionContainer />
          </div>
          <div className='item item-2'>
            <HomeContainer />
            <Text />
            <Keyboard />
          </div>
          <div className='item item-3'>
            <ClueContainer />
          </div>
        </div>
      </>
    </QueryClientProvider>
  )
}

export default App
