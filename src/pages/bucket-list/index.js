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
              <li>Contribute more in open source projects</li>
              <li>Learn Docker and Kubernetes</li>
              <li>Build more side projects</li>
              <li>Finish BSc in Computer Science</li>
              <li>Complete my grad project successfully</li>
              <li>Complete Front End path on OpenClassrooms successfully</li>
              <li>Work as SWE at big tech company</li>
            </ul>
            <h3>In Progress</h3>
            <ul>
              <li>Study Front End path at OpenClassrooms</li>
              <li>Work on my grad project related to Blockchain</li>
              <li>Enroll in Udacity Bertelsmann Challenge | Cloud Track </li>
              <li>Take part in Huawei ICT Competition 2019-2020</li>
            </ul>
            <h3>Done</h3>
            <ul>
              <li>Accepted in Developer Circles from Facebook</li>
              <li>Completed Udacity Front End Nanodegree</li>
              <li>Started studying computer science at Benha university</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}


export default BucketList;

/*
const internetProfiles = {
  github: {
    label: 'GitHub',
    href: 'https://github.com/mohamedsgap',
  },
  linkedin: {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mohamedsgap',
  },
  medium: {
    label: 'Medium',
    href: 'https://medium.com/@MohamedsGap',
  },
  twitter: {
    label: 'Twitter',
    href: 'https://twitter.com/mohamedsgap',
  },
  instagram: {
    label: 'Instagram',
    href: 'https://www.instagram.com/mohamedsgap/',
  },
  facebook: {
    label: 'Facebook',
    href: 'https://www.facebook.com/ImMohamedAbdelNasser',
  },
};

*/

/*
module.exports = {
  themeConfig: {
    footer: {
      style: 'dark',
      links: [
        {},
        {
          title: 'Professional',
          items: [
            internetProfiles.github,
            internetProfiles.medium,
            internetProfiles.linkedin,
          ],
        },
        {
          title: 'Social',
          items: [
            internetProfiles.instagram,
            internetProfiles.twitter,
            internetProfiles.facebook,
          ],
        },
        {},
      ],
    }
  }
}
*/
