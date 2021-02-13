import Transcription from "./Transcription"
import Handwriting from "./Handwiriting"
import Voice from "./Voice"

const Body = () => {
  const showBody = (e)=> {
    console.log({e});
    }
  return (
    <div>
      <Transcription />
      <Voice />
      <Handwriting />
    </div>
  )
}

export default Body
