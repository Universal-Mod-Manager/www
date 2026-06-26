export const THEME_STORAGE_KEY = 'umm-theme';
export const DEFAULT_THEME = 'default';

export interface Theme {
  id: string;
  label: string;
  css: string;
}

const files = import.meta.glob('../assets/styles/umm/themes/*.css', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

function idFromPath(path: string): string {
  return path
    .split('/')
    .pop()!
    .replace(/\.css$/, '');
}

function labelFromId(id: string): string {
  return id.charAt(0).toUpperCase() + id.slice(1);
}

const overrides: Theme[] = Object.entries(files)
  .map(([path, css]) => {
    const id = idFromPath(path);
    return { id, label: labelFromId(id), css };
  })
  .sort((a, b) => a.label.localeCompare(b.label));

export const THEMES: Theme[] = [{ id: DEFAULT_THEME, label: 'Default', css: '' }, ...overrides];
