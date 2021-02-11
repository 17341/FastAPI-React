import Button from './Button'

const Header = ({ title }) => {
  return (
    <header className = 'header'>
      <h1>{title}</h1>
      
      <Button text = "Transcription" color ='black'/>
      <Button text = "Handwriting Recognition" color ='black'/>
      <Button text = "Voice Recognition" color ='black'/>
      
    </header>
  )
}

export default Header
