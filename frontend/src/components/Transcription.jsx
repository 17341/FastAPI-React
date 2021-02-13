const Transcription = () => {
    return (
      <form className='add-form' >
        <div>
          <label>Input File <br></br></label>
          <input
            type='file'
            accept="audio/*"
          />
        </div>
        <div className='form-control'>
          <label>Output File</label>
          <input
            type='text'
            placeholder='Add Name for File.word' 
          />
        </div>
        <div className='form-control'>
          <label>Speech Time Divider</label>
          <input
            type='number'
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