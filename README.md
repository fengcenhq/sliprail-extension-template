# sliprail-extension-template

A reference template for Sliprail extensions.

## Install Extension

Click the button below to install this extension directly in Sliprail:

[![Install in Sliprail](https://img.shields.io/badge/Install_in_Sliprail-Click_Here-blue?style=for-the-badge)](https://sliprail.com/install?id=b26ae868-15ff-4c6a-af6e-9a58b6a66839)

**Note:** If Sliprail is not installed on your computer, the button will not work. Please download and install Sliprail from the [official website](https://sliprail.com) first.

## Included Shortcut Examples

- **Alert**: Shows a simple alert.
- **Notification**: Shows a notification with title and message.
- **Get Parameter**: Displays the provided shortcut parameter.
- **Window**: Opens a window and communicates via channel.
- **Singleton Window**: Reuses the first window if it exists; otherwise creates one.

## Getting Started

1. Clone this repository
2. Run `npm install` (only for `@sliprail/sdk` types and formatting tools; Sliprail does not install dependencies, so bundle any runtime dependency into the build output)
3. Edit `sliprail.json` (package name, description, icon and `extension.main`) and develop using `main.mjs` and `index.html` as references
4. With Sliprail running, run `jvs dev` in this directory to load the extension; it reloads after changes
5. Follow the [Sliprail extension documentation](https://sliprail.com/docs/developer/overview) to customize

## Package Structure

```text
sliprail-extension-template/
├── sliprail.json   # package config: id, displayName, description, icon, extension.main
├── main.mjs        # extension entry (ES module, default export)
├── index.html      # window page opened by the Window examples
└── icon.svg
```

Keep the `id` in `sliprail.json`; it identifies the extension and its data.

## API Docs

[https://sliprail.com/docs/sdk/api/](https://sliprail.com/docs/sdk/api/)

## License

MIT
