# UMM override themes

Drop a `<id>.css` file here to add a selectable theme — same as the desktop
app's `themes/` folder. Each file is vendored from `desktop/themes/*.css` and
overrides `--umm-*` tokens on `:root`:

```css
/* midnight.css -> appears as "Midnight" in the switcher */
:root {
  --umm-bg: #0c0c18;
  --umm-primary: #818cf8;
  /* … */
}
```

The file name is the theme id; its capitalized form is the label. The `:root`
selector is automatically scoped to `[data-theme='<id>']` at build time
(`ThemeStyles.astro`), so the dark/light toggle and the base theme
(`../base.css`) stay untouched. No file here = only the base "Default" theme.
