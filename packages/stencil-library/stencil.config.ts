import { Config } from '@stencil/core';
import { vueOutputTarget } from '@stencil/vue-output-target';

export const config: Config = {
  namespace: 'stencil-library',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      collectionDir: 'collection',
    },
    {
      type: 'dist-custom-elements',
      generateTypeDeclarations: true,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    vueOutputTarget({
      componentCorePackage: '@mifotest/stencil-library',
      proxiesFile: '../vue-library/lib/components.ts',
      includeImportCustomElements: true
    }),
  ],
};
