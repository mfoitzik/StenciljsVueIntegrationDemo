import { Config } from '@stencil/core';
import { vueOutputTarget } from '@stencil/vue-output-target';

export const config: Config = {
  namespace: 'stencil-library',
  extras: {
    enableImportInjection: true
  },
  outputTargets: [
    // By default, the generated proxy components will
    // leverage the output from the `dist` target, so we
    // need to explicitly define that output alongside the
    // Vue target
    {
      type: 'dist-custom-elements',
      // Output target config options here
      generateTypeDeclarations: true,
    },
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      collectionDir: 'collection',
    },
    vueOutputTarget({
      componentCorePackage: '@mifotest/stencil-library',
      proxiesFile: '../vue-library/lib/components.ts',
      loaderDir: '@mifotest/stencil-library/dist/components/my-component',
      includePolyfills: false,
      includeDefineCustomElements: false,
      includeImportCustomElements: true

    }),
  ],
};
