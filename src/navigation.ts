import { URLS } from './data/site';
import { getLocale } from './i18n';
import type { Locale } from './i18n';

export function getHeaderData(lang: Locale) {
  const loc = getLocale(lang);
  return {
    links: [
      { text: loc.nav.features, href: `/${lang}/features` },
      { text: loc.nav.install, href: `/${lang}/install` },
      { text: loc.nav.security, href: `/${lang}/security` },
    ],
    actions: [
      {
        text: loc.nav.download,
        href: `/${lang}/install`,
        variant: 'primary' as const,
      },
    ],
  };
}

export function getFooterData(lang: Locale) {
  const loc = getLocale(lang);
  return {
    links: [
      {
        title: loc.nav.footerAppTitle,
        links: [
          { text: loc.nav.features, href: `/${lang}/features` },
          { text: loc.nav.install, href: `/${lang}/install` },
          { text: loc.nav.security, href: `/${lang}/security` },
        ],
      },
      {
        title: loc.nav.footerProjectTitle,
        links: [
          { text: loc.nav.footerAppOnGithub, href: URLS.repo, target: '_blank' },
          { text: loc.nav.footerReleases, href: URLS.releases, target: '_blank' },
          { text: loc.nav.footerIssues, href: URLS.issues, target: '_blank' },
          { text: loc.nav.footerWebsiteSource, href: URLS.wwwRepo, target: '_blank' },
        ],
      },
    ],
    secondaryLinks: [],
    socialLinks: [{ ariaLabel: 'Github', icon: 'tabler:brand-github', href: URLS.org, target: '_blank' }],
    footNote: loc.nav.footerNote,
  };
}
