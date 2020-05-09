import React from "react";
import Layout from "@theme/Layout";
import styles from "./style.module.css";

function Resume() {
  return (
    <Layout>
      <div className="container padding-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2 markdown">
            <h1 className="center page-title">Resume</h1>
            <h2>Mohamed on Internet</h2>
            <p>
              <a
                href="https://github.com/mohamedsgap"
                target="_blank"
                rel="noopener"
              >
                GitHub
              </a>{" "}
              &middot;{" "}
              <a
                href="https://www.instagram.com/mohamedsgap/"
                target="_blank"
                rel="noopener"
              >
                Instagram
              </a>{" "}
              &middot;{" "}
              <a
                href="https://www.linkedin.com/in/mohamedsgap"
                target="_blank"
                rel="noopener"
              >
                LinkedIn
              </a>{" "}
              &middot;{" "}
              <a
                href="https://medium.com/@MohamedsGap"
                target="_blank"
                rel="noopener"
              >
                Medium
              </a>{" "}
              &middot;{" "}
              <a
                href="https://facebook.com/ImMohamedAbdelNasser"
                target="_blank"
                rel="noopener"
              >
                Facebook
              </a>{" "}
              &middot;{" "}
              <a
                href="https://twitter.com/mohamedsgap"
                target="_blank"
                rel="noopener"
              >
                Twitter
              </a>
            </p>

            <h2>Technical Skills</h2>
            <ul className={styles.skillsList}>
              <li>
                <strong>Languages:</strong> JavaScript, TypeScript, Python, HTML/CSS, SQL,
                C++
              </li>
              <li>
                <strong>Frameworks and Libraries:</strong> React.JS, React
                Native, Redux, Next.JS, Express.JS, Bootstrap, Jest.
              </li>
              <li>
                <strong>Tools:</strong> Git, Webpack, Cloud(AWS & Huawei), Basics of Docker and
                Kubernetes, Linux.
              </li>
            </ul>

            <h2>Education</h2>
            <h3>University of Benha</h3>
            <ul>
              <li>
                Pursuing a Bachelor's degree in Computer Science | 2016-2020
              </li>
              <li>GPA of 3.00/4 (as of July 2019)</li>
            </ul>
            <p>
              <strong>Relevant coursework:</strong> Data Structures, Object
              Oriented Programming, Algorithm Design and Analysis, Introduction
              to Computer Architecture and Assembly Language, Operating Systems,
              Artificial Intelligence, Image Processing, Networking, Compiler
              Design.
            </p>
            <h3>OpenClassrooms, Europe’s largest online education platform.</h3>
            <ul>
              <li>
                Pursuing a Bachelor’s-level diploma, Front-End Developer path |
                June 2019 - September 2020
              </li>
              <li>
                Learn to analyze projects, design technical architecture, create
                web projects, query databases, use tools simplify front-end
                code, implement tests, write project docs, optimize performance
                and create responsive interfaces.
              </li>
              <li>
                Take part in professional projects and weekly mentorship
                sessions.
              </li>
            </ul>
            <h3>Udacity, Cloud DevOps Nanodegree</h3>
            <ul>
              <li>
                Enroll in Udacity Cloud DevOps Nanodegree Program | March 2020 -
                September 2020
              </li>
              <li>Design and deploy infrastructure as code</li>
              <li>Deploy scaleable microservices using Kubernetes.</li>
              <li>
                Build and monitor CI/CD pipelines for different deployment
                strategies
              </li>
            </ul>
            <h3>Udacity, Front-End Developer Nanodegree</h3>
            <ul>
              <li>
                Completed Udacity Front-End Nanodegree Program | November 2017 -
                August 2018
              </li>
              <li>
                Built and developed a variety of websites and applications
              </li>
              <li>
                Connected web applications to backend server data using
                JavaScript
              </li>
              <li>
                Built competency automating application build and deployment
                using Webpack
              </li>
            </ul>

            <h2>Experience</h2>

            <h3>Cloud Computing Intern, Huawei ICT Academy-Egypt</h3>
            <em>April 2020 - Present | Cairo, Egypt</em>
            <p>Work and practice on  Huawei's solutions of cloud services, storage, big data and AI as HCIA & HCIP levels</p>

            <h3>Open Source Contribution</h3>
            <span>Passionate for all things web and open-source.</span>

            <ul>
              <li>
                Contributed to facebook/docusaurus.
              </li>
              <li>
                Contributed to facebook/react-native-website.
              </li>
              <li>
                Core Contributor at reactjs/ar.reactjs.org.
              </li>
              <li>
                Member of Kubernetes organization, because I
                kick start the Kubernetes localization in Arabic.
              </li>
              <li>
                Member of an organization called “SoftVenue”, build tools & localize docs for helping others.
              </li>
            </ul>

            <h2>Awards and Achievements</h2>
            <div className="row">
              <div className="col col--2">
                <h3>2020</h3>
              </div>
              <div className="col">
                <ul>
                  <li>
                    Selected as one of top 9 students out of total 500 students who participate in National Exam of Huawei ICT competition, 
                    so I Have an opportunity to compete on Platinum and diamond medal and reach the final in China.
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col col--2">
                <h3>2020</h3>
              </div>
              <div className="col">
                <ul>
                  <li>
                    Selected as one of the 15% top high-performers at the first 4-months of Udacity
                    Bertelsmann Challenge Scholarship of Cloud track, then Bertelsmann SE & CO.
                    funded my 6-months Cloud DevOps Nanodegree at Udacity.
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col col--2">
                <h3>2019</h3>
              </div>
              <div className="col">
                <ul>
                  <li>
                    Selected as one of the accepted 53 applicants worldwide to
                    pursue 12-months Front End Bachelor-level Diploma at
                    OpenClassrooms, fully funded by Facebook.
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
                    Selected as one of the 10% top high-performers at the first
                    3-months of Google Developer Challenge Scholarship, then
                    Google funded my 6-months Front End Nanodegree at Udacity.
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
