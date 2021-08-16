function Page1(){

  return <h1>Esta é a página 1</h1>;

}

function Page2(){

  return <h1>Esta é a página 2</h1>;

}

function App() {

  let currentPage = 1;

  return (
    <div className="App">
      {currentPage === 1 ? <Page1/> : <Page2/>}
    </div>);
}

export default App;
