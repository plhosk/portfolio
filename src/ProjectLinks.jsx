import React from 'react'

import './ProjectLinks.css'

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
    href: '/gameoflife/index.html',
    thumbnail300: '',
    description: 'Locally-hosted Game of Life (same as Codepen version)',
  },
]

const ProjectLinks = () => (
  <div>
    <div className="header">
      Portfolio Projects
    </div>
    <div className="listDiv">
      { projectList.length > 0 && (
        projectList.map(project => (
          <div className="itemDiv">
            <img className="thumbnail" src={project.thumbnail300} alt={project.title} />
            <div className="title"><a href={project.href}>{project.title}</a></div>
            <div className="description">{project.description}</div>
          </div>
        ))
      )}
    </div>
  </div>
)

export default ProjectLinks
