// @ts-nocheck
// COPIED FROM UTILS.TS It's easier and safer for Volar to disable typechecking and let the return type inference do its job.

import { Plugin } from 'vue';

import { applyPolyfills, defineCustomElements } from '@mifotest/stencil-library/loader';

export const ComponentLibrary: Plugin = {
  async install() {
    applyPolyfills().then(() => {
      defineCustomElements();
    });
  },
};