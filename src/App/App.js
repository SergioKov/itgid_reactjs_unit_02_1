import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="container">
        <Header/>
        <Main/>
        <Sidebar/>
        <Footer/>
    </div>
  );
}

export default App;