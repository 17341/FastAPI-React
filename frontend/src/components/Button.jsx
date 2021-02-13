import PropTypes from 'prop-types'

const Button = ({ text, color, onClick }) => {
    return (
        <button onClick = {() =>onClick({text})}
         style ={{backgroundColor : color}} 
         className = 'button' 
         >
        {text}</button>
    )
}

Button.defaultProps = {
    color: 'red',
  }
  
  Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
  }
export default Button
