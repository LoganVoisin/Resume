import React from 'react';
// import test from './imgs/download.jpg';
function Home() {
    return (
        <section className='home' id='home'>
            <div className='container'>
                <div className='row section-separator home-padding'>
                    <div className='col-2'>
                        <div className='header-info'>
                            <h2 id='h2-name'>Logan Voisin</h2>
                            <h3>Web Developer</h3>
                            <div>Hello! My name is Logan Voisin I am an Autistic web Developer. I'm looking for challenging opportunities and creative outlets. I would love nothing more than to be a part of your team&lt;3.</div>
                            <ul>
                                <li><a href='mailto:'>loganvoisin1223@gmail.com</a></li>
                                <li><a href='callto:'>+1 225-955-6052</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-2'>
                        <img id='head-img' src={require('./imgs/emily.jpg').default} alt={'Test'}></img>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;