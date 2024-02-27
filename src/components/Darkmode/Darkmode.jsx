import React, { useState } from 'react'
import './Darkmode.css'
import Toggle from './Toggle/Toggle';

const Darkmode = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <div className="App" data-theme={darkMode ? "dark" : "light"}>
        <Toggle isChecked={darkMode}
          handleChange={() => setDarkMode(!darkMode)} />
        <h1 className="heading">Hello world!</h1>
        <div className="box">
          <h2>It's 26 January today.</h2>
          </div>
      </div>
    </>
  );
};

export default Darkmode;
