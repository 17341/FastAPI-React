import { useState, useEffect } from 'react'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";



const App = () => {
  const [body, setBody] = useState()
  // We pass the text as a paremeter coming from the header file, which is coming from the button itself.
  function showBody (text) {
    console.log(text);
    }
  return (
    <div className='container'>
      <Header title= 'Pick one application : ' onSelect ={showBody}/>
      <Body/>
      <Footer />
    </div>
  );
}

export default App
