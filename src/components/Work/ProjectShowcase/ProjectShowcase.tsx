import React, { useState, useEffect } from 'react';
import './ProjectShowcase.scss';

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
}

interface ProjectShowcaseProps {
  projects: Project[];
}

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ projects }) => {
  const [loadedImages, setLoadedImages] = useState<number[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeProject, setActiveProject] = useState<number | null>(null);
  
  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkDevice();

    window.addEventListener('resize', checkDevice);

    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  const handleImageLoad = (id: number) => {
    if (!loadedImages.includes(id)) {
      setLoadedImages(prev => [...prev, id]);
    }
  };

  const handleProjectClick = (project: Project) => {
    if (isMobile) {
      if (activeProject === project.id) {
        window.open(project.projectUrl, '_blank', 'noopener,noreferrer');
      } else {
        setActiveProject(project.id);
      }
    } else {
      openProject(project);
    }
  };

  const handleProjectLinkClick = (e: React.MouseEvent, project: Project) => {
    e.stopPropagation();
    if (isMobile) {
      window.open(project.projectUrl, '_blank', 'noopener,noreferrer');
    } else {
      openProject(project);
    }
  };

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeProject = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedProject(null);
      document.body.style.overflow = 'auto';
    }, 300);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isMobile && activeProject !== null) {
        const target = e.target as Element;
        if (!target.closest('.project-card')) {
          setActiveProject(null);
        }
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobile, activeProject]);

  return (
    <>
      <div className="project-showcase">
        {projects.map((project) => (
          <div 
            className={`project-card ${activeProject === project.id ? 'active' : ''}`}
            key={project.id} 
            onClick={() => handleProjectClick(project)}
          >
            <div className="image-container">
              <div className={`image-wrapper ${loadedImages.includes(project.id) ? 'loaded' : ''}`}>
                <img src={project.imageUrl} alt="" onLoad={() => handleImageLoad(project.id)} />
              </div>
              <div className="overlay">
                <div className="content-wrapper">
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                  <a 
                    className='project-link' 
                    onClick={(e) => handleProjectLinkClick(e, project)}
                    target={isMobile ? '_blank' : '_self'}
                    rel={isMobile ? 'noopener noreferrer' : ''}
                  >
                    <i className="fas fa-external-link-alt"></i>
                    {isMobile ? 'Open Project' : 'View Project'}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Modal - Only show on desktop */}
      {!isMobile && selectedProject && (
        <div className={`project-modal ${isModalOpen ? 'open' : ''}`}>
          <div className="modal-header">
            <h3>{selectedProject.title}</h3>
            <button className="close-modal" onClick={closeProject}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="currentColor" d="M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59 7.11 5.7A1 1 0 0 0 5.7 7.11L10.59 12 5.7 16.89a1 1 0 1 0 1.41 1.41L12 13.41l4.89 4.89a1 1 0 0 0 1.41-1.41L13.41 12l4.89-4.89a1 1 0 0 0 0-1.4z"/>
              </svg>
            </button>
          </div>
          <div className="modal-content">
            <iframe 
              src={selectedProject.projectUrl} 
              title={selectedProject.title}
              loading="lazy"
            />
            <div className="modal-footer">
              <a 
                href={selectedProject.projectUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="external-link"
              >
                Visit Site
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Modal Overlay - Only show on desktop */}
      {!isMobile && isModalOpen && <div className="modal-overlay" onClick={closeProject}></div>}
    </>
  );
};

export default ProjectShowcase;