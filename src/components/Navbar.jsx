import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        let lastScroll = 0;
        const handleScroll = () => {
            const currentScroll = window.pageYOffset;
            if (currentScroll <= 0) {
                setIsVisible(true);
                setIsScrolled(false);
                return;
            }
            if (currentScroll > lastScroll && !isScrolled) {
                setIsVisible(false);
                setIsScrolled(true);
            } else if (currentScroll < lastScroll && isScrolled) {
                setIsVisible(true);
                setIsScrolled(false);
            }
            lastScroll = currentScroll;
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isScrolled]);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    const closeMenu = () => {
        setIsActive(false);
    };

    return (
        <nav className={`navbar ${!isVisible ? 'scrolled' : ''} ${isVisible ? 'visible' : ''}`}>
            <div className="logo">Preethi S.T</div>
            <ul className={`nav-links ${isActive ? 'active' : ''}`}>
                <li><a href="#about" onClick={closeMenu}>About</a></li>
                <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
                <li><a href="#interests" onClick={closeMenu}>Interests</a></li>
                <li><a href="#experience" onClick={closeMenu}>Experience</a></li>
                <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
                <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
            </ul>
            <div className={`hamburger ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    );
};

export default Navbar;