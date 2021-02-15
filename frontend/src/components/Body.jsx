import Transcription from "./Transcription"
import Handwriting from "./Handwiriting"
import Voice from "./Voice"

const Body = ({ selectBody }) => {
  const postTranscription = async (output) => {
    try{
      const res = await fetch('http://localhost:8000/', {
        method: 'POST',
        mode : 'no-cors',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json',
        },
        body: JSON.stringify(output),
      })
      console.log('Result : '+ res)
    }
    catch (e){
      console.log(e)
    }
  }


  switch (selectBody.text) {
    case 'Transcription':
      return (<Transcription handleSubmit = {postTranscription}/>);
      break;
    case 'Handwriting Recognition':
      return (<Handwriting />)
      break;
    case 'Voice Recognition':
      return (<Voice />)
      break;
    default:
      return (<Transcription />);
  }
   
}

//We initialize the Body to the transcription part
Body.defaultProps = {
  selectBody: 'Transcription',
}

export default Body
