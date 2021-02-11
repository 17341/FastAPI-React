import Header from "./components/Header";
import Footer from "./components/Footer";
import Transcription from "./components/Transcription";

const App = () => {
  return (
    <div className='container'>
      <Header title= 'Pick one application : '/>
      <Transcription name = 'try'/>
      <Footer />
    </div>
  );
}

export default App;
