# XRAY Design documentation

The documentation site renders the current root `../DESIGN.md`, publishes immutable releases from
`../protocol`, and generates a machine-readable release manifest.

```sh
npm install
npm run dev
```

Build with `npm run build` and deploy the `wiki-xray-design-docs` Cloudflare Worker with
`npm run deploy`.
