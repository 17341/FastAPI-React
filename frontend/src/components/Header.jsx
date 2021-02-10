import Button from './Button'

const Header = ({ title }) => {
  return (
    <header className = 'header'>
      <h1>{title}</h1>
      <Button text = "Avalam" color ='black'/>
      <Button text = "Options" color ='black'/>
      <Button text = "Profile" color ='black'/>
    </header>
  )
}

export default Header
