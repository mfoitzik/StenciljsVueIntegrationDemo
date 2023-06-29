import { defineContainer } from './vue-component-lib/utils';
import { defineCustomElement as defineMyComponent } from '@mifotest/stencil-library/components/my-component.js';
export const MyComponent = defineContainer('my-component', defineMyComponent, [
    'first',
    'middle',
    'last'
]);
//# sourceMappingURL=components.js.map