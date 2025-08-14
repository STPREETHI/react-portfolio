import React from 'react';

const Skills = () => {
    return (
        <section id="skills" className="section">
            <h2>Skills & Tools</h2>
            <div className="skills-grid">
                <div className="skill-card">
                    <h3>Languages</h3>
                    <p>Python, HTML, CSS, SQL, C, R, Java</p>
                </div>
                <div className="skill-card">
                    <h3>Tools</h3>
                    <p>Jupyter, VSCode, Streamlit, Git, GitHub, MySQL</p>
                </div>
                <div className="skill-card">
                    <h3>Concepts</h3>
                    <p>Data Science, Machine Learning, Web Development, DSA</p>
                </div>
            </div>
        </section>
    );
};

export default Skills;