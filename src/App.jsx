import { useState } from 'react';
import './App.css'
import Question from './pages/Question'
import ColorPicker from './components/ColorPicker'
import Answer from './components/Answer';
import Writing from './pages/writing'

function App() {
  const [currentPage, setCurrentPage] = useState('question')
  if (currentPage === 'Writing') {
    return <Writing />
  }
  return (
    <>
      <Question />
      <ColorPicker />

      <Answer onNext={() => setCurrentPage('Writing')} />
    </>
  )
}

export default App
