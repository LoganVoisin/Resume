import React from 'react';
function Portfolio() {
    return (
        <section className='portfolio' id='portfolio'>
            <div className='container'>
                <div className='row section-separator'>
                    <div className='col-2'>
                        <div className='portfolio-container'>
                        <h2 className='h2-med'>Watch Party</h2>
                        <p>Simultaneously watch Youtube videos with others! Chat while you watch! Archive the parties to relive the memories!</p>
                            <img className='portfolio-img' src={require('./imgs/watchparty.jpg').default}></img>
                        </div>
                    </div>
                    <div className='col-2'>
                        <div className='portfolio-container'>
                            <h2 className='h2-med'>TBD</h2>
                            <p>This is where you make your mark!</p>
                            <img className='portfolio-img' src={require('./imgs/Make.jpg').default}></img>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;