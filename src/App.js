import notFound from './components/assets/Scarecrow.png'

function App() {
  return (
    <div className="page">
      <div className="wrapper">
        <nav className="nav">
          <h1 className="top">400 not found</h1>
        </nav>
        <div className="content">
          <img src={notFound} alt="" className="img" />
          <div className="block">
            <h3 className="title">I have bad news for you</h3>
            <p className="text">
              The page you are looking for might be removed or is temporarily unavailable
            </p>
            <button className='button'>back to homepage</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
