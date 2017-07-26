import React from 'react'

import './Projects.css'

const projectList = [
  /* template for project entry
  {
    title: '',
    href: '',
    thumbnail300: '',
    description: '',
  },
  */
  {
    title: "Conway's Game Of Life (React/Redux Example)",
    href: 'https://codepen.io/plhosk/pen/kkqdAa',
    thumbnail300: '',
    description: "A simple React/Redux implementation of Conway's Game of Life on Codepen",
  },
  {
    title: 'Game of Life (local)',
    href: '/gameoflife/gameoflife.html',
    thumbnail300: '',
    description: 'Locally-hosted Game of Life (same as Codepen version)',
  },
]

const Projects = () => (
  <div className="Projects-outer-div">
    <div className="Projects-header">
      Portfolio
    </div>
    <div className="Projects-list-div">
      { projectList.length > 0 && (
        projectList.map(project => (
          <div key={project.href} className="Projects-itemDiv">
            <img className="Projects-thumbnail" src={project.thumbnail300} alt={project.title} />
            <div className="Projects-title"><a href={project.href}>{project.title}</a></div>
            <div className="Projects-description">{project.description}</div>
          </div>
        ))
      )}
    </div>
  </div>
)

export default Projects
