import React from 'react';
import Layout from '@theme/Layout';

function Resume() {
  return (
    <Layout>
      <div className="container padding-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2 markdown">
            <h1 className="center page-title">Resume</h1>
            <h2>Internet Profiles</h2>
            <p>
              <a
                href="https://github.com/mohamedsgap"
                target="_blank"
                rel="noopener"
              >
                GitHub
              </a>{' '}
              &middot;{' '}
              <a
                href="https://www.instagram.com/mohamedsgap/"
                target="_blank"
                rel="noopener"
              >
                Instagram
              </a>{' '}
              &middot;{' '}
              <a
                href="https://www.linkedin.com/in/mohamedsgap"
                target="_blank"
                rel="noopener"
              >
                LinkedIn
              </a>{' '}
              &middot;{' '}
              <a
                href="https://medium.com/@MohamedsGap"
                target="_blank"
                rel="noopener"
              >
                Medium
              </a>{' '}
              &middot;{' '}
              <a
                href="https://facebook.com/ImMohamedAbdelNasser"
                target="_blank"
                rel="noopener"
              >
                Facebook
              </a>{' '}
              &middot;{' '}
              <a
                href="https://twitter.com/mohamedsgap"
                target="_blank"
                rel="noopener"
              >
                Twitter
              </a>
            </p>

            <h2>Education</h2>
            <h3>University of Benha</h3>
            <ul>
              <li>2016 - 2020</li>
              <li>BSc in Computer Science.</li>
              <li>GPA: 3.0/4.0</li>  
            </ul>
            <p>
              <strong>Relevant coursework:</strong> Data Structures, Object Oriented Programming,
              Algorithm Design and Analysis, Introduction to Computer Architecture and
              Assembly Language, Operating Systems, Artificial Intelligence, Image
              Processing, Networking, Compiler Design.
            </p>
            <h3>OpenClassrooms</h3>
            <p>2019 - 2020</p>
            <p>
              Currently studying Front End Developer path on OpenClassrooms,
              Europe’s largest online education platform.
            </p>
            <ul>
              <li>Learn to analyze projects, design technical architecture, create web projects,
              query databases, use tools simplify front-end code, implement tests, write
              project docs, optimize performance and create responsive interfaces.
              </li>
              <li>
              Take part in professional projects and mentorship opportunities.
            </li>
            </ul>

            <h2>Professional Experience</h2>
            <h3>Web Developement Training, Developer Circles from Facebook</h3>
            <em>June 2019 - August 2019</em>
            <ul>
              <li>Bringing mock-ups to life in a beautiful and consistent manner</li>
              <li>Using best practices to structure HTML/CSS and JavaScript code as components</li>
              <li>Writing tests to ensure the site’s front-end accounts for all possible uses</li>
              <li>Ensuring the maintenance and growth of a site’s front-end</li>
              <li>Optimizing page loading time</li>
            </ul>    
            <h3>Front End Developer Nanodegree Program, Udacity</h3>
            <em>February 2018 - August 2018</em>
            <ul>
              <li>Learnt HTML, the foundational structure of all websites. Style with CSS and build my own personal portfolio website.</li>
              <li>Used the JavaScript programming language. Start working with common developer tools, including the Git version control system.</li>
              <li>Learnt about Accessibility, Object-Oriented JavaScript techniques, closures, the "this" keyword, and the new ES6 specification.</li>
              <li>Used APIs to fetch data for my applications. Begin building with Front End frameworks and build offline capable websites.</li>
              <li>Leverage the power of the React UI library. Convert an existing application to use React and build my own single page React app.</li>
            </ul>  

            <h2>Awards and Achievements</h2>
            <div className="row">
              <div className="col col--2">
                <h3>2019</h3>
              </div>
              <div className="col">
                <ul>
                  <li>
                  Selected as one of the accepted 53 applicants worldwide to pursue 12-months 
                  Front End Bachelor-level Diploma at OpenClassrooms, fully funded by Facebook.
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col col--2">
                <h3>2018</h3>
              </div>
              <div className="col">
                <ul>
                  <li>
                    Selected as one of the 10% top high-performers at the first 3-months of Google Developer 
                    Challenge Scholarship, then Google funded my 6-months Front End Nanodegree at Udacity
                  </li>
                </ul>  
              </div>      
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Resume;
