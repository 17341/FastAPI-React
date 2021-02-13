import Button from './Button'

const Header = ({ title, onSelect }) => {
  return (
    <header className = 'header'>
      <h1>{title}</h1>
      
      <Button onClick ={onSelect} text = "Transcription" color ='black'/>
      <Button onClick ={onSelect} text = "Handwriting Recognition" color ='black'/>
      <Button onClick ={onSelect} text = "Voice Recognition" color ='black'/>
      
    </header>
  )
}

export default Header
