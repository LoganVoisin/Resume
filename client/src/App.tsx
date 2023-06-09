import React from 'react';
import Nav from './Nav';
import Home from './Home';
import Skills from './Skills';
import Experience from './Experience';
import Portfolio from './Protfolio';
import Contact from './Contact';

function App () {
    return (
        <div>
            <Nav />
            <Home />
            <Skills />
            <Experience />
            <Portfolio />
            <Contact />
        </div>
    );
}

export default App;