import './App.css';

import Footer from './components/Footer';
import Header from './components/header';
import MainSection from './components/mainSection/mainSection';
import Navigation from './components/navigation/navigation';


function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <MainSection />
      <Footer />
    </div>
  );
}

export default App;
