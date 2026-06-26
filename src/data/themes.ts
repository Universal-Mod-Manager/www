export const THEME_STORAGE_KEY = 'umm-theme';
export const DEFAULT_THEME = 'default';

export interface Theme {
  id: string;
  label: string;
  /** Raw CSS overriding `--umm-*` tokens. Empty for the base ("default") theme. */
  css: string;
}

/**
 * Theme system mirroring the desktop app: a theme is a plain CSS file of
 * `--umm-*` variables. The base theme is always applied
 * (`~/assets/styles/umm/base.css`); each file dropped in `umm/themes/` becomes
 * a selectable override — exactly like the desktop `themes/` folder. Vendor a
 * desktop theme by copying its `.css` here; it shows up in the switcher with no
 * other change.
 */
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
