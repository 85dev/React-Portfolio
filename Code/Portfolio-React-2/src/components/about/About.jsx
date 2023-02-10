import React from "react";
import './about.css';
import ME from '../../assets/me-5.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
    return (
        <section id="about">
            <h5>Get to Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div>
                        <img src={ME} alt="About Image" className="about__me"/>
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">

                        <article className="about__card">
                            <FaAward className="about__icon"/>
                            <h5>Experience</h5>
                            <small>1+ Year Working</small>
                        </article>

                        <article className="about__card">
                            <FiUsers className="about__icon"/>
                            <h5>Clients</h5>
                            <small>4+ Worldwide</small>
                        </article>

                        <article className="about__card">
                            <VscFolderLibrary className="about__icon"/>
                            <h5>Projects</h5>
                            <small>6 Completed</small>
                        </article> 

                    </div>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos vero laborum animi voluptas quam, tempore veritatis repudiandae, quidem obcaecati fugiat adipisci minima possimus qui vel dolore, ducimus voluptatum optio tempora!</p>

                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About