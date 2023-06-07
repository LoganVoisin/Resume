import React from 'react';
import test from './imgs/download.jpg';
function Home() {
    return (
        <section className='home' id='home'>
            <div className='container'>
                <div className='row section-seperator'>
                    <div className='col-2'>
                       <h2>Logan Voisin</h2>
                       <h3>tetstststststs</h3>
                    </div>
                    <div className='col-2'>
                        <img src={test} alt={'Test'}></img>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;