import React, {Component} from 'react';
import './App.css';

class Subject extends Component {
  render(){
     return (
      <header>
        <h1>{this.props.title}</h1>
        {this.props.sub}
      </header>
     )
  }
}

class TOC extends Component {
  render(){
     return (
      <nav>
        <ul>
            <li href="1.html"><a>HTML</a></li>
            <li href="2.html"><a>CSS</a></li>
            <li href="3.html"><a>JavaScript</a></li>
        </ul>
      </nav>
     )
  }
}

class Content extends Component {
  render(){
     return (
      <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
      </article>
     )
  }
}


class App extends Component {
  render() {
    return(
      <div className='App'>
        <Subject title="WEB" sub="world wide web!"></Subject>
        <Subject title="REACT" sub="For UI!"></Subject>
        <TOC></TOC>
        <Content title="HTML" desc="HTML is HyperText Markup Language!"></Content>
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
}

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}
*/
export default App;
