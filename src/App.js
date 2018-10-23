import React, { Component } from 'react';
import Header from "./components/Header";
// import Footer from "./components/Footer";
import Dashboard from "./components/dashboard/Dashboard";

class App extends Component {
  render() {
    return <div>
        <Header />
        <Dashboard />        
      </div>;
  }
}

export default App;
