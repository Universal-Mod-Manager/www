const GITHUB = 'https://github.com';
const ORG = 'Universal-Mod-Manager';

export const APP_REPO = `${ORG}/desktop`;
export const WWW_REPO = `${ORG}/www`;

export const URLS = {
  org: `${GITHUB}/${ORG}`,
  repo: `${GITHUB}/${APP_REPO}`,
  releases: `${GITHUB}/${APP_REPO}/releases`,
  latestRelease: `${GITHUB}/${APP_REPO}/releases/latest`,
  issues: `${GITHUB}/${APP_REPO}/issues`,
  wwwRepo: `${GITHUB}/${WWW_REPO}`,
} as const;

export const FEATURE_ICONS = [
  'tabler:devices',
  'tabler:list-details',
  'tabler:toggle-left',
  'tabler:arrows-sort',
  'tabler:puzzle',
  'tabler:palette',
  'tabler:shield-lock',
  'tabler:cloud',
] as const;

export const PLATFORM_ICONS = [
  'tabler:brand-windows',
  'tabler:brand-apple',
  'tabler:brand-debian',
  'tabler:brand-steam',
] as const;

export const SECURITY_ICONS = ['tabler:eye', 'tabler:discount-check', 'tabler:shield-lock'] as const;
