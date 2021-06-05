import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import Clear from './components/Clear';

function App () {

  // constructor(props) {
  //   super(props);
  
  //   this.state = {
  //      input: "",
  //      previouseNumber:"",
  //      currentNumber:"",
  //      operator:""
  //   };
  // }
  


  // addToInput = val => {
  //   this.setState({
  //     input: this.state.input + val
  //   });
  // };





  return (
    <div className="App">



      <div className="cal-wrapper">
        <div className="row">
          <Input></Input>
        </div>
        <div className="row">
          <Clear>Clear</Clear>
          <Button>÷</Button>
        </div>

        <div className="row">
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button>-</Button>
        </div>
        <div className="row">
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button>+</Button>
        </div>
        <div className="row">
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>=</Button>
        </div>
      </div>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
