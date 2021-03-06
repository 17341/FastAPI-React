import { useState, useEffect } from 'react'

const Transcription = ({ handleSubmit }) => {

  const [input, setInput] = useState('')
  const [language, setLanguage] = useState("english")
  const [output, setOutput] = useState('')
  const [speech, setSpeech] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if ( !output  || !speech ) {
      alert('Please complete all the form')
      return
    }

    handleSubmit({ output })
     
    setInput('')
    setOutput('')
    setSpeech('')
  }
  
    return (
      <form onSubmit = {onSubmit} className='add-form' >
        <div>
          <label>Input File <br></br></label>
          <input
            type='file'
            value={input}
            accept="audio/*"
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <label>Language</label>
          <select value={language} onChange={(e) => setLanguage(e.target.value)}>
            <option value ="english">English</option>
            <option value ="french">French</option>
            <option value ="arabic">Arabic</option>
            <option value ="spanish">Spanish</option>
          </select> 
        </div>
        <div className='form-control'>
          <label>Output File</label>
          <input
            type='text'
            value={output}
            placeholder='Add Name for File.word' 
            onChange={(e) => setOutput(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <label>Speech Time Divider</label>
          <input
            type='number'
            value={speech}
            onChange={(e) => setSpeech(e.target.value)}
            placeholder='Choose number beetween 5 and 60' 
            min="5"
            max="60"
          />
        </div>
               
        <input type='submit' value='Confirm' className='button btn-block' />
      </form>
  
    )
  }

  export default Transcription