import React from 'react';
// import test from './imgs/download.jpg';
function Skills() {
    return (
        <section className='skills' id='skills'>
            <div className='container'>
                <div className='row section-separator'>
                    <div className='col-2'>
                        <div className='img-border'>
                            <img id='head-img' src={require('./imgs/emily2.jpg').default} alt={'Test'}></img>
                        </div>
                    </div>
                    <div className='col-2'>
                        <div className='header-info'>
                            <h2 id='h2-name'>Logan Voisin</h2>
                            <h3>Web Developer</h3>
                            <ul>
                                <li><a href='mailto:'>loganvoisin1223@gmail.com</a></li>
                                <li><a href='callto:'>+1 225-955-6052</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;