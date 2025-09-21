import React from 'react';
import "./Work.scss";
import ProjectShowcase from './ProjectShowcase/ProjectShowcase';

const Work: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "Gadgets Eclipse",
      description: "An e-commerce platform for tech gadgets with modern UI/UX",
      imageUrl: "/image/Gadgets_Eclipse.png",
      projectUrl: "https://gadgets-eclipse.web.app/",
    },
    {
      id: 2,
      title: "Project Coming Soon",
      description: "A dashboard for analytics with real-time data visualization",
      imageUrl: "/image/project-soon.png",
      projectUrl: "https://example.com/aurora",
    },
  ];
  return (
    <div className="work-component">
      <div className="work_header_container">
        <span id="work" className="text_button">Projects</span>
        <h2 className="fs-h2">Innovative Solutions, Real Results</h2>
        <p className="p_paragraph">
          Explore a curated collection of our latest work — where thoughtful design meets cutting-edge development. <b>See how we bring bold ideas to life across web, mobile, and beyond.</b>
        </p>
      </div>

      <ProjectShowcase projects={projects} />
    </div>
  );
};

export default Work;