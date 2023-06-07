import React from 'react';

function Nav() {
    return (
        <div className='container'>
            <div className='row'>
                    <nav id='nav'>
                        <ul>
                            <li className='nav-item'> <a className='nav-link' href='#'>test1</a> </li>
                            <li className='nav-item'> <a className='nav-link' href='#'>test2</a> </li>
                            <li className='nav-item'> <a className='nav-link' href='#'>test3</a> </li>
                            <li className='nav-item'> <a className='nav-link' href='#'>test4</a> </li>
                        </ul>
                    </nav>
            </div>
        </div>
    );
}

export default Nav;