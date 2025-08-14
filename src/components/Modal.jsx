import React from 'react';

const Modal = ({ project, closeModal }) => {
    return (
        <div className="modal active" onClick={closeModal}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={closeModal}>&times;</button>
                <h3>{project.title}</h3>
                <div className="tech-stack">{project.techStack}</div>
                <div className="description">{project.description}</div>
                <div className="modal-buttons">
                    {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="modal-btn demo-btn">Live Demo</a>}
                    {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="modal-btn github-btn">GitHub Repo</a>}
                </div>
            </div>
        </div>
    );
};

export default Modal;