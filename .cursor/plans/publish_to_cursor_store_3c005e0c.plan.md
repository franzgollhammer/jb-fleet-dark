---
name: Publish to Cursor Store
overview: Publish your VS Code Fleet theme to the Cursor extension store by publishing it to OpenVSX, which Cursor uses as its extension registry.
todos:
  - id: create-openvsx-account
    content: Create OpenVSX account and namespace via GitHub OAuth
    status: pending
  - id: generate-token
    content: Generate OpenVSX access token
    status: pending
    dependencies:
      - create-openvsx-account
  - id: install-ovsx
    content: "Install ovsx CLI globally: npm install -g ovsx"
    status: pending
  - id: publish
    content: Publish extension to OpenVSX using ovsx CLI
    status: pending
    dependencies:
      - generate-token
      - install-ovsx
  - id: update-readme
    content: (Optional) Update README with Cursor/OpenVSX installation info
    status: pending
---

# Publish Theme to Cursor Extension Store (OpenVSX)

Cursor uses the **OpenVSX registry** as its extension library. To make your theme available in Cursor, you need to publish it to [open-vsx.org](https://open-vsx.org).

## Prerequisites

Your [package.json](package.json) is already properly configured with all required fields:

- `publisher`: "franzgollhammer"
- `name`, `displayName`, `version`, `description`
- `icon`, `repository`, `license`
- Theme contributions

## Steps to Publish

### 1. Create an OpenVSX Account

- Go to [open-vsx.org](https://open-vsx.org)
- Click "Log in with GitHub" (uses your GitHub account)
- Create a namespace matching your publisher name: `franzgollhammer`

### 2. Generate an Access Token

- In OpenVSX, go to your user settings
- Generate a new access token
- Save this token securely (you'll need it for publishing)

### 3. Install the ovsx CLI

```bash
npm install -g ovsx
```

### 4. Package the Extension

You already have vsce installed. Package the extension:

```bash
npm run package
```

This creates `jb-fleet-dark-1.0.12.vsix`.

### 5. Publish to OpenVSX

```bash
ovsx publish jb-fleet-dark-1.0.12.vsix -p YOUR_ACCESS_TOKEN
```

Or set the token as an environment variable:

```bash
export OVSX_PAT=YOUR_ACCESS_TOKEN
ovsx publish jb-fleet-dark-1.0.12.vsix
```

## Optional: Update README for Cursor Users

Add Cursor installation instructions to [README.md](README.md):

```markdown
## Installation

- **Cursor**: Open Extensions, search for "VS Code Fleet", then Install.
- **VS Code Marketplace**: https://marketplace.visualstudio.com/items?itemName=franzgollhammer.jb-fleet-dark
- **OpenVSX**: https://open-vsx.org/extension/franzgollhammer/jb-fleet-dark
```

## Optional: Add OpenVSX Publish Script

Add a script to [package.json](package.json) for easier future publishing:

```json
"publish:openvsx": "npm run package && ovsx publish jb-fleet-dark-*.vsix"
```

## Notes

- Your extension is already compatible with Cursor (it's a VS Code fork)
- After publishing, the extension will be searchable in Cursor's extension panel
- Future updates: bump version in package.json and re-publish
