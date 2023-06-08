import React from 'react';
function Experience() {
    return (
        <section className='experience' id='experience'>
            <div className='container'>
                <div className='row section-separator'>
                    <div className='col-2'>
                        <h2 className='h2-med'>Education</h2>
                        <div className='experience-education'>
                            <div className='experience-card'>
                                <h4>Operation Spark</h4>
                                <div>2019-2022</div>
                                <p>Operation spark is a coding Boot-Camp based out of New Orleans Louisiana. They teach their students how to do fullstack web development.</p>
                            </div>
                            <div className='experience-card'>
                                <h4>LAVCA</h4>
                                <div>2018-2022</div>
                                <p>Louisiana Virtual Charter Academy is an online Highschool based out of Baton Rough Louisiana.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-2'>
                        <div className='experience-work'>
                            <h2 className='h2-med'>Work</h2>
                            <div className='experience-education'>
                                <div className='experience-card'>
                                    <h4>Supreme Services</h4>
                                    <div>2023-2023</div>
                                    <p>Supreme Services is a local oil field company. I worked there as a Web Developer.</p>
                                </div>
                                <div className='experience-card'>
                                    <h4>Operation Spark</h4>
                                    <div>2022-2022</div>
                                    <p>Operation spark is a coding Boot-Camp based out of New Orleans Louisiana. They teach their students how to do fullstack web development. I worked as an intern there and as a help desk technician</p>
                                </div>
                                <div className='experience-card'>
                                    <h4>TBD</h4>
                                    <div>Future</div>
                                    <p>Maybe you could fill the void?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;