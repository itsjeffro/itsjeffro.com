import React from 'react';
import ReactDOM from "react-dom";
import Navbar from "../../components/Navbar/Navbar";

class Root extends React.Component<any, any> {
  render() {
    return (
      <>
        <Navbar title="Admin Panel" />
      </>
    );
  }
}

export default Root;

if (document.getElementById('root')) {
  ReactDOM.render(<Root />, document.getElementById('root'));
}
