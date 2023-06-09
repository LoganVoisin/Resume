import React from 'react';
function Contact() {
    return (
        <section className='contact' id='contact'>
            <div className='container'>
                <div className='row section-separator contacts'>
                    <ul>
                        <li><a href='mailto:'><i className="fa fa-envelope"></i> loganvoisin1223@gmail.com</a></li>
                        <li><a href='callto:'><i className="fa fa-phone"></i> +1 225-955-6052</a></li>
                        <li><a href='https://www.linkedin.com/in/logan-voisin/'><i className="fa fa-linkedin-square" aria-hidden="true"></i> LinkedIn</a></li>
                        <li><a href='https://github.com/LoganVoisin'><i className="fa fa-github" aria-hidden="true"></i> Github</a></li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Contact;