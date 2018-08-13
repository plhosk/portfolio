/* eslint-disable max-len */
import React from 'react'
import Img from 'react-image'
import { Spin } from 'antd'

import './WBI.css'


const WBI = () => (
  <div className="WBI-outer-div">
    <div className="WBI-flex-container">

      <div className="WBI-flex">
        <div className="WBI-image-div">
          <a href="screenshots/wbi_front.png" target="_blank">
            <Img
              className="WBI-thumbnail"
              src="screenshots/wbi_front.png"
              alt="WBI front page"
              loader={
                <div className="Projects-thumbnail-spinner">
                  <Spin size="large" />
                </div>
              }
            />
          </a>
        </div>
        <div className="WBI-text">
          <div>
            A project I developed for a bookstore chain in Edmonton, AB, this internal web app
            provides several key functions, such as forum-based employee communications,
            customer info management, email/SMS notifications, and product request tracking and reporting.
            <br /><br />
            The app consists of a front-end single-page-app written using React and Redux with Ant Design UI components,
            and a Node.js back-end interfacing with MySQL and MongoDB databases.
            This setup offers several benefits including real-time event-based updates, notifications
            and secure authentication.
          </div>
        </div>
      </div>

      <div className="WBI-flex">
        <div className="WBI-text">
          <div>
            Employees can quickly find books using a point-and-click search interface.
            Common actions are easily accessible and information is displayed clearly.
          </div>
        </div>
        <div className="WBI-image-div">
          <a href="screenshots/wbi_item_search.png" target="_blank">
            <Img
              className="WBI-thumbnail"
              src="screenshots/wbi_item_search.png"
              alt="WBI front page"
              loader={
                <div className="Projects-thumbnail-spinner">
                  <Spin size="large" />
                </div>
              }
            />
          </a>
        </div>
      </div>

      <div className="WBI-flex">
        <div className="WBI-image-div">
          <a href="screenshots/wbi_request_details.png" target="_blank">
            <Img
              className="WBI-thumbnail"
              src="screenshots/wbi_request_details.png"
              alt="WBI front page"
              loader={
                <div className="Projects-thumbnail-spinner">
                  <Spin size="large" />
                </div>
              }
            />
          </a>
        </div>
        <div className="WBI-text">
          <div>
            The development environment is set up with time-saving features such as linting,
            hot-reloading and Babel ES6+ transpilation.
            <br /><br />
            The app is built with Webpack and deployed to a cloud server using Dokku, an open-source Docker-based Heroku clone.
          </div>
        </div>
      </div>

    </div>
  </div>
)

export default WBI
