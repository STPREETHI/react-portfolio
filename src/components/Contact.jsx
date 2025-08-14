import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="section">
            <h2>Contact</h2>
            <div className="contact-card">
                <p><strong>Phone:</strong> <a href="tel:+916382067209">+91 6382067209</a> (Contact no)</p>
                <p><strong>Email:</strong> <a href="mailto:stpreethi1808@gmail.com">stpreethi1808@gmail.com</a></p>
                <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/preethi-st-06a320280" target="_blank" rel="noopener noreferrer">linkedin.com/in/preethi-st</a></p>
                <p><strong>GitHub:</strong> <a href="https://github.com/STPREETHI" target="_blank" rel="noopener noreferrer">github.com/STPREETHI</a></p>
            </div>
            <div className="coding-profiles">
                <a href="https://www.geeksforgeeks.org/user/stpreethpek/" target="_blank" rel="noopener noreferrer" className="coding-profile">
                    <div className="coding-profile-icon">GFG</div>
                    <span>GeeksforGeeks</span>
                </a>
                <a href="https://leetcode.com/u/preethiST/" target="_blank" rel="noopener noreferrer" className="coding-profile">
                    <div className="coding-profile-icon">LC</div>
                    <span>LeetCode</span>
                </a>
            </div>
        </section>
    );
};

export default Contact;