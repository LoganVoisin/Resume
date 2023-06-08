import React from 'react';
// import test from './imgs/download.jpg';
function Skills() {
    return (
        <section className='skills' id='skills'>
            <div className='container'>
                <div className='row section-separator'>
                    <div className='col-2'>
                        <img id='head-img' src={require('./imgs/emily2.jpg').default} alt={'Test'}></img>
                    </div>
                    <div className='col-2'>
                        <div className='skills-text'>
                            <h2>Skills</h2>
                            <ul>
                                <li><span>JavaScrypt</span></li>
                                <li><span>TypeScrypt</span></li>
                                <li><span>CSS</span></li>
                                <li><span>HTML</span></li>
                                <li><span>React</span></li>
                                <li><span>Bootstrap</span></li>
                                <li><span>Node</span></li>
                                <li><span>Express</span></li>
                                <li><span>PHP</span></li>
                                <li><span>IIS</span></li>
                                <li><span>SSMS</span></li>
                                <li><span>WebSockets</span></li>
                                <li><span>Socket.io</span></li>
                                <li><span>MySQL</span></li>
                                <li><span>Mongoose</span></li>
                                <li><span>Material UI</span></li>
                                <li><span>Styled Components</span></li>
                                <li><span>SQL</span></li>
                                <li><span>Prisma</span></li>
                                <li><span>Git</span></li>
                                <li><span>Github</span></li>
                                <li><span>Agile</span></li>
                                <li><span>SCRUM</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;