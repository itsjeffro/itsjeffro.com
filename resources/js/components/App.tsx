import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from "./Navbar/Navbar";

function App() {
    return (
        <>
            <Navbar
                title={"ItsJeffro.com"}
            />
            <div className="container">
                <div className="content">
                    <div className="flex-center">
                        No posts at the moment.
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
