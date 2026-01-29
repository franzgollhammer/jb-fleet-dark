# VS Code Fleet Themes

[![Version](https://img.shields.io/visual-studio-marketplace/v/franzgollhammer.jb-fleet-dark)](https://marketplace.visualstudio.com/items?itemName=franzgollhammer.jb-fleet-dark)
[![Installs](https://img.shields.io/visual-studio-marketplace/i/franzgollhammer.jb-fleet-dark)](https://marketplace.visualstudio.com/items?itemName=franzgollhammer.jb-fleet-dark)
[![Rating](https://img.shields.io/visual-studio-marketplace/r/franzgollhammer.jb-fleet-dark)](https://marketplace.visualstudio.com/items?itemName=franzgollhammer.jb-fleet-dark)
[![Open VSX](https://img.shields.io/open-vsx/v/franzgollhammer/jb-fleet-dark)](https://open-vsx.org/extension/franzgollhammer/jb-fleet-dark)

VS Code themes inspired by JetBrains Fleet Dark, with multiple variants.

![VS Code Fleet theme](./example.png)

## Installation

- **VS Code Marketplace**: [Install](https://marketplace.visualstudio.com/items?itemName=franzgollhammer.jb-fleet-dark)
- **Open VSX**: [Install](https://open-vsx.org/extension/franzgollhammer/jb-fleet-dark)
- **From VS Code**: Extensions → search "VS Code Fleet" → Install

## Activate a Theme

Open Command Palette → "Preferences: Color Theme" → choose one of:

- Fleet
- Fleet Dark
- Fleet Grey
- Fleet Ocean
- Fleet Palenight
- Sphere

## Recommended Settings (settings.json)

```json
{
	"workbench.colorTheme": "Fleet",
	"editor.fontFamily": "JetBrainsMono Nerd Font",
	"editor.fontSize": 13,
	"terminal.integrated.fontSize": 13,
	"editor.lineHeight": 1.7,
	"debug.console.lineHeight": 1.3,
	"terminal.integrated.lineHeight": 1.3,
	"editor.smoothScrolling": true,
	"editor.fontLigatures": true,
	"editor.cursorSmoothCaretAnimation": "on"
}
```

## Font

Install JetBrains Mono Nerd Font so ligatures and symbols render nicely:

- Download: https://www.nerdfonts.com/font-downloads (choose JetBrainsMono)
- After installing, set `editor.fontFamily` as in the settings above.

## Compatibility

Requires VS Code 1.82+.

## Links

- [GitHub](https://github.com/franzgollhammer/jb-fleet-dark)
- [Changelog](./CHANGELOG.md)
- [License](./License.md)

## Acknowledgements

Inspired by JetBrains Fleet.
