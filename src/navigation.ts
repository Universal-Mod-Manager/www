import { getPermalink } from './utils/permalinks';
import { URLS } from './data/site';

export const headerData = {
  links: [
    { text: 'Features', href: getPermalink('/features') },
    { text: 'Install', href: getPermalink('/install') },
    { text: 'Security', href: getPermalink('/security') },
  ],
  actions: [
    {
      text: 'Download',
      href: getPermalink('/install'),
      variant: 'primary' as const,
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Universal Mod Manager',
      links: [
        { text: 'Features', href: getPermalink('/features') },
        { text: 'Install', href: getPermalink('/install') },
        { text: 'Security', href: getPermalink('/security') },
      ],
    },
    {
      title: 'Project',
      links: [
        { text: 'App on GitHub', href: URLS.repo, target: '_blank' },
        { text: 'Releases', href: URLS.releases, target: '_blank' },
        { text: 'Issues', href: URLS.issues, target: '_blank' },
        { text: 'Website source', href: URLS.wwwRepo, target: '_blank' },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [{ ariaLabel: 'Github', icon: 'tabler:brand-github', href: URLS.org, target: '_blank' }],
  footNote: `
    Open source · Released under its respective licenses.
  `,
};
