// import logo from './logo.svg';
import React, { Component, Components } from 'react';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/welcome';
import Hello from './components/Hello';
import Message from './components/message';
import Count from './components/Count';
import Emp from './components/emp';
import FunctionClick from './components/functionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import StyleSheet from './components/StyleSheet';
import styles from './appStyles.module.css';
import Form from './components/Form';
import RefsDemo from './components/RefsDemo';
import RefClassDemo from './components/RefClassDemo';
import FocusInput from './components/FocusInput';
import { BrowserRouter as Router,Link,NavLink,Redirect,Prompt } from 'react-router-dom';
import Route from 'react-router-dom/Route';



function App() {
  return (
    // <Router>
      <div className="App">
        {/* Q6 */}
        {/* <ul>
          <li>
            <NavLink to="/" exact activeStyle={
              { color: 'White',background:'#E35885',padding: '30px' }
            }>HOME</NavLink>
          </li>
          <li>
            <NavLink to="/projects" exact activeStyle={
              { color: 'White',background:'#E35885',padding: '30px'  }
            }>PROJECTS</NavLink>
          </li>
          <li>
            <NavLink to="/services" exact activeStyle={
              { color: 'White',background:'#E35885',padding: '30px'  }
            }>SERVICES</NavLink>
          </li>
          <li>
            <NavLink to="/contact" exact activeStyle={
              { color: 'White',background:'#E35885',padding: '30px'  }
            }>CONTACT</NavLink>
          </li>
        </ul>
        <Route path="/" exact strict render={
          () => {
            return (<h3>You Choose <span className="highlight">HOME</span></h3>)
          }
        }/>
        <Route path="/projects" exact strict render={
          () => {
            return (<h3>You Choose <span className="highlight">PROJECTS</span></h3>)
          }
        }/>
        <Route path="/services" exact strict render={
          () => {
            return (<h3>You Choose <span className="highlight">SERVICES</span></h3>)
          }
        }/>
        <Route path="/contact" exact strict render={
          () => {
            return (<h3>You Choose <span className="highlight">CONTACT</span></h3>)
          }
        }/> */}




        {/* <RefsDemo></RefsDemo> */}
        {/* <RefClassDemo></RefClassDemo> */}
        {/* <FocusInput></FocusInput> */}
        {/* <Form></Form> */}

        {/* <h1 className={styles.success}>Success</h1>
      <StyleSheet primary={true}></StyleSheet> */}
        {/* <NameList></NameList> */}
        {/* <ParentComponent></ParentComponent> */}
        {/* <EventBind></EventBind> */}
        {/* <Greet name="luffy" heroName="Pirate King">
        <p>This is children properties </p>
      </Greet> */}

        {/* <ClassClick></ClassClick>
      <FunctionClick></FunctionClick>
      <Greet name="Sanji" heroName="Super Chef">
        <button type="submit">Submit</button>
      </Greet> */}
        {/* <Greet name="Copper" heroName="Docter Taunaki"></Greet> */}


        {/* <Welcome name="luffy" heroName="Pirate King">
        
      </Welcome>
      <Welcome name="Sanji" heroName="Super Chef"></Welcome>
      <Welcome name="Copper" heroName="Docter Taunaki"></Welcome> */}
        {/* <UserGreeting></UserGreeting> */}

        {/* <Message></Message> */}

        {/* <Count></Count> */}

        {/* <Emp></Emp> */}


        {/* <Hello></Hello> */}
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
    // </Router>
  );
}

export default App;
