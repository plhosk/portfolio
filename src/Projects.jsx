import React from 'react'
import { Spin } from 'antd'
import Img from 'react-image'

import './Projects.css'

const projectList = [
  /* template for project entry
  {
    title: '',
    url: '',
    screenshot: '',
    description: '',
  },
  */
  {
    title: 'Interest',
    url: 'https://github.com/plhosk/interest',
    screenshot: '/screenshots/interest.png',
    description: 'Full-stack Pinterest-style image board. View images and post your own (GitHub)',
  },
  {
    title: 'Book Trader',
    url: 'https://github.com/plhosk/book-trader',
    screenshot: '/screenshots/book-trader.png',
    description: 'View, add and trade books with other users (GitHub)',
  },
  {
    title: 'Stock Sync - Web Sockets',
    url: 'https://github.com/plhosk/stock-sync',
    screenshot: '/screenshots/stock-sync.png',
    description: 'Create stock charts. Share changes instantly with other users using web sockets (GitHub)',
  },
  {
    title: 'Nightlife Coordination App',
    url: 'https://github.com/plhosk/nightlife',
    screenshot: '/screenshots/nightlife.png',
    description: 'Find bars in your area. See where others are going & set your destination (GitHub)',
  },
  {
    title: 'Voting App',
    url: 'https://github.com/plhosk/voting-app',
    screenshot: '/screenshots/voting-app.png',
    description: 'Full-stack online poll app. Vote on polls and submit your own (GitHub)',
  },
  {
    title: "Conway's Game Of Life",
    url: 'https://codepen.io/plhosk/full/kkqdAa/',
    screenshot: '/screenshots/gameoflife.png',
    description: "React + Redux implementation of Conway's Game of Life",
  },
  {
    title: 'Roguelike',
    url: 'https://codepen.io/plhosk/full/EgzBQg/',
    screenshot: '/screenshots/roguelike.png',
    description: 'Simple keyboard-controlled game written with React + Redux. Defeat the Archdemon to win!',
  },
  {
    title: 'D3 Scatterplot',
    url: 'https://codepen.io/plhosk/full/JbXdqK/',
    screenshot: '/screenshots/racetimes.png',
    description: 'Cycling race times: Alpe d\'Huez',
  },
  {
    title: 'Pomodoro Clock',
    url: 'https://codepen.io/plhosk/full/YGJddL/',
    screenshot: '/screenshots/pomodoro-clock.png',
    description: 'Maintain maximum focus and productivity by timing your work sessions and breaks',
  },
  {
    title: 'Wikipedia Explorer',
    url: 'https://codepen.io/plhosk/full/EgpVVa/',
    screenshot: '/screenshots/wikipedia-explorer.png',
    description: 'Search Wikipedia, read summaries, or click for a random article',
  },
  {
    title: 'Simon Game',
    url: 'https://codepen.io/plhosk/full/EgOEJB/',
    screenshot: '/screenshots/simon-game.png',
    description: 'Classic memory game',
  },
  {
    title: 'Markdown Previewer',
    url: 'https://codepen.io/plhosk/full/RGEGNo/',
    screenshot: '/screenshots/markdown-previewer.png',
    description: 'Write markdown and see the parsed result',
  },
  {
    title: 'Tic Tac Toe',
    url: 'https://codepen.io/plhosk/full/dpQWLA/',
    screenshot: '/screenshots/tictactoe.png',
    description: 'Can you defeat an AI that makes random moves? I hope so!',
  },
  {
    title: 'Javascript Calculator',
    url: 'https://codepen.io/plhosk/full/qarXjV/',
    screenshot: '/screenshots/calculator.png',
    description: 'Use your keyboard or mouse to perform calculations',
  },
  {
    title: 'Quote Machine',
    url: 'https://codepen.io/plhosk/full/ozqLda/',
    screenshot: '/screenshots/quote-machine.png',
    description: 'Reload to get a random inspirational quote',
  },
]

const Projects = () => (
  <div className="Projects-outer-div">
    <div className="Projects-blurb">
      Check out some of my demo projects below.
      They range from simple Javascript demos to full-stack
      React + Redux applications with a Node.js backend and MongoDB database.
    </div>
    <div className="Projects-list-div">
      { projectList.length > 0 && (
        projectList.map(project => (
          <a key={project.url} href={project.url}>
            <div
              className="Projects-item-div"
            >
              <Img
                className="Projects-thumbnail"
                src={project.screenshot}
                alt={project.title}
                loader={
                  <div className="Projects-thumbnail-spinner">
                    <Spin size="large" />
                  </div>
                }
              />
              <div className="Projects-title">
                {project.title}
              </div>
              <div className="Projects-description">
                {project.description}
              </div>
            </div>
          </a>
        ))
      )}
    </div>
  </div>
)

export default Projects
