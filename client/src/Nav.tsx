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
                                <li className='nav-item'> <a className='nav-link' href='#'>Portfolio</a> </li>
                                <li className='nav-item'> <a className='nav-link' href='#'>Contact</a> </li>
                            </ul>
                        </nav>
                </div>
            </div>
        </header>
    );
}

export default Nav;