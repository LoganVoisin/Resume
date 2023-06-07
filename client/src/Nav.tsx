import React from 'react';

function Nav() {
    
    return (
        <div className='container'>
            <div className='row'>
                    <nav id='nav'>
                        <ul>
                            <li className='nav-item'> <a className='nav-link' href='#'>Home</a> </li>
                            <li className='nav-item'> <a className='nav-link' href='#'>Skills</a> </li>
                            <li className='nav-item'> <a className='nav-link' href='#'>Portfolio</a> </li>
                            <li className='nav-item'> <a className='nav-link' href='#'>Contact</a> </li>
                        </ul>
                    </nav>
            </div>
        </div>
    );
}

export default Nav;