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

export const TAGLINE = 'One mod manager for every game, on every platform.';

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export const FEATURES: readonly Feature[] = [
  {
    title: 'Cross-platform',
    description: 'A single, consistent app on Windows, macOS, Linux and Steam Deck.',
    icon: 'tabler:devices',
  },
  {
    title: 'Per-game mod lists',
    description: 'Manage a dedicated mod list for each game, kept neatly separate.',
    icon: 'tabler:list-details',
  },
  {
    title: 'Enable & disable mods',
    description: 'Toggle any mod on or off without deleting it, so you can experiment freely.',
    icon: 'tabler:toggle-left',
  },
  {
    title: 'Drag & drop ordering',
    description: 'Reorder your mods by dragging them to get the load order just right.',
    icon: 'tabler:arrows-sort',
  },
  {
    title: 'Plugin per game',
    description: 'Each game is supported by its own plugin, so support grows independently.',
    icon: 'tabler:puzzle',
  },
  {
    title: 'Themes',
    description: 'Make the interface yours with swappable themes.',
    icon: 'tabler:palette',
  },
  {
    title: 'Sandboxed plugins',
    description: 'Plugins run sandboxed: only predefined actions, no arbitrary code or web calls.',
    icon: 'tabler:shield-lock',
  },
  {
    title: 'Cloud sync',
    description: 'Planned: keep your mod setup in sync across all your devices.',
    icon: 'tabler:cloud',
  },
];

export interface Platform {
  name: string;
  icon: string;
  steps: readonly string[];
}

export const PLATFORMS: readonly Platform[] = [
  {
    name: 'Windows',
    icon: 'tabler:brand-windows',
    steps: [
      'Download the latest Windows installer (.exe) from the GitHub releases page.',
      'Run the installer and follow the on-screen steps.',
      'Launch Universal Mod Manager from the Start menu.',
    ],
  },
  {
    name: 'macOS',
    icon: 'tabler:brand-apple',
    steps: [
      'Download the latest macOS package (.dmg) from the GitHub releases page.',
      'Open the .dmg and drag the app into your Applications folder.',
      'Launch it from Applications (allow it in System Settings on first run if prompted).',
    ],
  },
  {
    name: 'Linux',
    icon: 'tabler:brand-debian',
    steps: [
      'Download the latest Linux build (AppImage) from the GitHub releases page.',
      'Make it executable: chmod +x Universal-Mod-Manager.AppImage',
      'Run it: ./Universal-Mod-Manager.AppImage',
    ],
  },
  {
    name: 'Steam Deck',
    icon: 'tabler:brand-steam',
    steps: [
      'Switch to Desktop Mode.',
      'Download the latest Linux build (AppImage) from the GitHub releases page.',
      'Make it executable, run it, then add it to Steam as a non-Steam game for Gaming Mode.',
    ],
  },
];
