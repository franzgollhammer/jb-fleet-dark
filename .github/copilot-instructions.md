# Copilot Instructions for jb-fleet-dark

This repository contains a set of VS Code themes inspired by JetBrains Fleet, published as a VS Code extension.

## Build, Test, and Lint

- Install deps: `npm install`
- Package extension: `npm run package` (builds a `.vsix`)
- Publish flow: `npm run publish` (bumps patch version, sorts package.json, packages, then publishes via VSCE and OVSX using `OVSX_PAT`)
- Single step publish targets: `npm run publish:vsce` or `npm run publish:ovsx`
- Bump patch version only: `npm run upgrade-package-version` (script at `scripts/upgrade-package-version.js`)
- Lint/Test: No linters or tests are defined in package.json; nothing to run.

## Project Structure & Architecture

- Theme JSONs live in `themes/` (Fleet, Fleet Dark, Fleet Grey, Fleet Ocean, Fleet Palenight, Sphere). Each file follows the VS Code color theme schema and enables semanticHighlighting.
- `styles/markdown-preview.css` provides markdown preview overrides aligned to the theme token colors.
- Extension manifest is `package.json` (contributes themes + default Todo Tree highlight). Version bump and publishing scripts are defined here.
- `code-examples/` contains example theme showcase snippets (not part of build).
- Prebuilt `.vsix` artifacts are checked in for reference.
- No runtime code beyond the version bump script; the extension is declarative.

## Key Conventions

- Semantic highlighting is enabled in all themes; keep it on for consistent token colors.
- Theme variants should be added/updated in `themes/` and registered in `package.json` under `contributes.themes`.
- When adjusting colors, mirror changes across related UI surfaces (editor, widgets, gutters, markdown preview CSS) to maintain visual consistency.
- Publishing expects `OVSX_PAT` in the environment for Open VSX; VSCE uses your logged-in session.
- `CHANGELOG.md` tracks release notes; update it with meaningful entries when shipping new theme tweaks.

## How to Run/Verify Locally

- After packaging, install the VSIX in VS Code: `code --install-extension jb-fleet-dark-<version>.vsix` or via the VS Code Extensions UI.
- To preview changes while developing, use VS Code’s Extension Host (`F5`) after `npm install`; no additional build step is required beyond packaging.

## Issue & Contribution Notes

- GitHub issues are the canonical place for feedback. The README lists all theme variants and recommended settings (JetBrains Mono Nerd Font).

