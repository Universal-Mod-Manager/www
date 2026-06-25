import { APP_REPO } from '../data/site';

export interface Release {
  tag: string;
  name: string;
  url: string;
  publishedAt: string | null;
  body: string;
}

interface GitHubRelease {
  tag_name: string;
  name: string | null;
  html_url: string;
  published_at: string | null;
  body: string | null;
}

const LATEST_RELEASE_API = `https://api.github.com/repos/${APP_REPO}/releases/latest`;

export async function getLatestRelease(): Promise<Release | null> {
  try {
    const response = await fetch(LATEST_RELEASE_API, {
      headers: {
        Accept: 'application/vnd.github+json',
        'User-Agent': 'universal-mod-manager-www',
      },
    });

    if (!response.ok) return null;

    const data = (await response.json()) as GitHubRelease;
    return {
      tag: data.tag_name,
      name: data.name?.trim() || data.tag_name,
      url: data.html_url,
      publishedAt: data.published_at,
      body: data.body?.trim() ?? '',
    };
  } catch {
    return null;
  }
}
