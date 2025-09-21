import React, { useState } from 'react';
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

  const handleImageLoad = (id: number) => {
    if (!loadedImages.includes(id)) {
      setLoadedImages(prev => [...prev, id]);
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

  return (
    <>
      <div className="project-showcase">
        {projects.map((project) => (
          <div className='project-card' key={project.id} onClick={() => openProject(project)}>
            <div className="image-container">
              <div className={`image-wrapper ${loadedImages.includes(project.id) ? 'loaded' : ''}`}>
                <img src={project.imageUrl} alt="" onLoad={() => handleImageLoad(project.id)} />
              </div>
              <div className="overlay">
                <div className="content-wrapper">
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                  <a className='project-link' onClick={(e) => { e.stopPropagation(); openProject(project); }}>
                    <i className="fas fa-external-link-alt"></i>
                    View Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Modal */}
      {selectedProject && (
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

      {/* Modal Overlay */}
      {isModalOpen && <div className="modal-overlay" onClick={closeProject}></div>}
    </>
  );
};

export default ProjectShowcase;