import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <div className=''>
        <div id='content' className='flex justify-between mx-auto max-w-7xl px-4'>
          <Nav/>
          <Main/>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;
