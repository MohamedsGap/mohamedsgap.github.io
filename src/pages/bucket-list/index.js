import React from 'react';
import Layout from '@theme/Layout';

function BucketList() {
  return (
    <Layout>
      <div className="container padding-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2 markdown">
            <h1>Bucket List</h1>
            <h3>TODO</h3>
            <ul>
              <li>Get Accepted in Udacity Cloud DevOps Nanodegree</li>
              <li>Work as Freelancer Front-End Developer</li>
              <li>Contribute more in open source projects</li>
              <li>Build more side projects</li>
              <li>Finish BSc in Computer Science</li>
              <li>Complete my grad project successfully</li>
              <li>Get my certification of Front end path from OpenClassrooms</li>
              <li>Apply for NTL scholarship</li>
              <li>Apply for ITI scholarship</li>
              <li>Work as SWE at big tech company</li>
            </ul>
            <h3>In Progress</h3>
            <ul>
              <li>Study Front End path at OpenClassrooms</li>
              <li>Work on my grad project related to Blockchain</li>
              <li>Study Udacity Bertelsmann Challenge Cloud</li>
            </ul>
            <h3>Done</h3>
            <ul>
              <li>Accepted in Developer Circles from Facebook</li>
              <li>Completed Udacity Front-End Nanodegree</li>
              <li>Started studying computer science at Benha university</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default BucketList;
