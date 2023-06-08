import React from 'react';

function Nav() {
    
    return (
        <header className='fixed-nav'>
            <div className='container'>
                <div className='row'>
                        <nav id='nav'>
                            <ul>
                                <li className='nav-item'> <a className='nav-link' href='#home'>Home</a> </li>
                                <li className='nav-item'> <a className='nav-link' href='#skills'>Skills</a> </li>
                                <li className='nav-item'> <a className='nav-link' href='#experience'>Experience</a> </li>
                                <li className='nav-item'> <a className='nav-link' href='#portfolio'>Portfolio</a> </li>
                                <li className='nav-item'> <a className='nav-link' href='#contact'>Contact</a> </li>
                            </ul>
                        </nav>
                </div>
            </div>
        </header>
    );
}

export default Nav;