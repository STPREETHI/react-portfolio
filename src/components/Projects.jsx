import React, { useState } from 'react';
import Modal from './Modal';

const projectsData = [
    {
        id: 'smart-parcel',
        title: 'Smart Parcel Optimization System',
        tech: 'Merge Sort, TSP, Dijkstra, Branch & Bound',
        description: 'An intelligent logistics optimization platform for efficient parcel delivery routing.',
        modal: {
            title: 'Smart Parcel Optimization System',
            techStack: 'Tech Stack: Merge Sort, TSP, Dijkstra Algorithm, Branch & Bound',
            description: "An intelligent logistics optimization platform that revolutionizes parcel delivery routing. This system combines multiple advanced algorithms including Merge Sort for efficient data organization, Traveling Salesman Problem (TSP) optimization for route planning, Dijkstra's algorithm for shortest path finding, and Branch & Bound techniques for optimal solution discovery. The platform significantly reduces delivery time and operational costs while improving customer satisfaction.",
            demoUrl: 'https://smartparceloptimizationsystem-cw672kk8qw2ncbdncrbwwv.streamlit.app/'
        }
    },
    {
        id: 'financial-ai',
        title: 'Financial Analytics AI Platform',
        tech: 'Python, Machine Learning, Real-time APIs',
        description: 'AI-powered financial analysis with real-time stock prediction and Black-Scholes pricing.',
        modal: {
            title: 'Financial Analytics AI Platform',
            techStack: 'Tech Stack: Python, Machine Learning, Real-time Stock APIs, Black-Scholes Model',
            description: 'A comprehensive AI-powered financial analysis platform that provides real-time stock market predictions and sophisticated pricing models. The system leverages machine learning algorithms for predictive analytics, integrates real-time market data APIs, and implements the Black-Scholes model for options pricing. This platform empowers traders and analysts with data-driven insights for informed investment decisions.',
            demoUrl: 'https://financial-analytics-ai-platform-rtgyctap44glwkaxtmrags.streamlit.app'
        }
    },
    {
        id: 'social-media',
        title: 'Social Media Engagement Predictor App',
        tech: 'ML Classification, Clustering, Forecasting',
        description: 'Machine learning application for predicting social media engagement patterns.',
        modal: {
            title: 'Social Media Engagement Predictor App',
            techStack: 'Tech Stack: Machine Learning Classification, Clustering Algorithms, Time Series Forecasting',
            description: 'An advanced machine learning application designed to predict social media engagement patterns with high accuracy. The system employs classification algorithms to categorize content performance, clustering techniques to identify user behavior patterns, and forecasting models to predict future engagement trends. This tool helps social media managers and content creators optimize their strategies for maximum reach and engagement.',
            githubUrl: 'https://github.com/STPREETHI/Social_Media_Engagement_Ptredictor'
        }
    },
    {
        id: 'crm-system',
        title: 'CRM Relationship Management System',
        tech: 'Java, MySQL, JSP',
        description: 'A comprehensive customer relationship management system for business operations.',
        modal: {
            title: 'CRM Relationship Management System',
            techStack: 'Tech Stack: Java, MySQL, JSP (JavaServer Pages)',
            description: 'A comprehensive Java-based customer relationship management system designed to streamline business operations and enhance customer interactions. The system handles client data management, communication tracking, sales pipeline monitoring, and provides detailed analytics for business insights. Built with robust database architecture using MySQL and dynamic web interfaces through JSP, this CRM solution improves customer retention and operational efficiency.',
            githubUrl: 'https://github.com/ashhwiithac22/Customer_Realtionship_Management-System'
        }
    }
];

const Projects = () => {
    const [activeModal, setActiveModal] = useState(null);

    const openModal = (projectId) => {
        const project = projectsData.find(p => p.id === projectId);
        setActiveModal(project.modal);
    };

    const closeModal = () => {
        setActiveModal(null);
    };

    return (
        <>
            <section id="projects" className="section">
                <h2>Projects</h2>
                <div className="projects-grid">
                    {projectsData.map(project => (
                        <div key={project.id} className="project-card" onClick={() => openModal(project.id)}>
                            <h3>{project.title}</h3>
                            <div className="tech-stack">{project.tech}</div>
                            <p>{project.description}</p>
                        </div>
                    ))}
                </div>
            </section>
            {activeModal && <Modal project={activeModal} closeModal={closeModal} />}
        </>
    );
};

export default Projects;