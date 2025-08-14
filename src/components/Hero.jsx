import React, { useEffect } from 'react';

const Hero = () => {
    useEffect(() => {
        const hero = document.getElementById('hero');
        if (hero.childElementCount > 1) return; // Prevent adding particles multiple times

        const particleCount = 30;
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            const size = Math.random() * 5 + 3;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.animationDuration = `${Math.random() * 10 + 5}s`;
            particle.style.animationDelay = `${Math.random() * 5}s`;
            hero.appendChild(particle);
        }
    }, []);

    return (
        <section id="hero">
            <div className="hero-content">
                <img src="/images/pic.webp" alt="Preethi S.T Profile" className="profile-img" />
                <h1>Preethi S.T</h1>
                <p>Aspiring Data Scientist & AI Enthusiast</p>
                <a href="#projects" className="cta-btn">View My Work</a>
            </div>
        </section>
    );
};

export default Hero;