import Transcription from "./Transcription"
import Handwriting from "./Handwiriting"
import Voice from "./Voice"

const Body = ({ selectBody }) => {

  switch (selectBody.text) {
    case 'Transcription':
      return (<Transcription />);
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
