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

module.exports = {

  title: 'Mohamed Abdel Nasser',
  tagline: 'CS Student',
  url: 'https://mohamedsgap.github.io',
  baseUrl: '/',
  projectName: 'mohamedsgap.github.io',
  organizationName: 'mohamedsgap',
  favicon: 'https://mohamedsgap.blogspot.com/favicon.ico',
  themeConfig: {
    internetProfiles,
    navbar: {
      title: 'Mohamed',
      links: [
        { to: 'resume', label: 'Resume', position: 'left' },
        { to: 'bucket-list', label: 'Bucket List', position: 'left' },
        {
          href: 'https://github.com/mohamedsgap',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
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
  },
  presets: ['@docusaurus/preset-classic'],
};
