# Stenciljs Vue Integration Demo

This is a demo of the Stencil Js Vue integration walkthrough shown at [https://stenciljs.com/docs/vue](https://stenciljs.com/docs/vue)

I had a hard time getting this to work and hope this may help some people out.

Follow these steps to get this running:

1. Clone this repo
```sh
git clone https://github.com/mfoitzik/StenciljsVueIntegrationDemo.git
```

2. Install dependencies from root folder
```sh
npm install
```

3. Build stencil library (from packages/stencil-library folder)
```sh
npm run build
```

3. Build vue wrapper library (from packages/vue-library folder)
```sh
npm run build
```

4. Run Vue applicatiion (from packages/my-app folder)
```sh
npm run dev
```
