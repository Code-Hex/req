import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { Link } from 'react-router';
import Home from './app/App';


require('whatwg-fetch');

var navh = 70;
var titlex = navh / 2 - 16;
var style = {
  nav: {
    width: "100%",
    height: `${navh}px`,
    background: "url('/assets/images/top.png') right top no-repeat",
    borderBottom: "1px solid #d2d2d2",
    display: "inline-block",
  },
  title: {
    marginLeft: "70px",
    marginTop: `${titlex}px`,
  },
  footer: {
    borderTop: "1px solid #d2d2d2",
    paddingTop: "20px",
    textAlign: "center"
  }
};

const PageNav = React.createClass({
  render() {
    return (
      <nav style={ style.nav }>
        <h2 style={ style.title }>Req - HTTP Request Maker</h2>
      </nav>
    );
  }
});

const App = React.createClass({
    render() {
        return (
            <div>
              <PageNav />
              <Home />
              <div style={ style.footer }>
                Copyright &copy; 2016 &middot; (MIT) License &middot; Created by <a href="https://github.com/Code-Hex" target="_blank">CodeHex</a>
              </div>
            </div>
        );
    }
});

ReactDOM.render(<App />, document.getElementById('app'));