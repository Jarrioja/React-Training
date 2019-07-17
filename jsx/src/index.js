// Import the React and ReactDOM libraries
import React from 'react';
import ReacDOM from 'react-dom';



//Create a React Componet
const App = () => {
    const buttonText = "Click Me";

    return (
        <div>
            <label htmlFor="name" className="label">Enter Name:</label>
            <input type="text" name="" id="name" />
            <button style={{ backgroundColor: 'blue', color: 'white' }}>{buttonText}</button>
        </div>
    );
};

// Take the React componetn and show it on the  screen
ReacDOM.render(
    <App />,
    document.querySelector('#root')
);
