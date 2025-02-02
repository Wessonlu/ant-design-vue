// Project: https://github.com/vueComponent/ant-design-vue
// Definitions by: akki-jat <https://github.com/akki-jat>
// Definitions: https://github.com/vueComponent/ant-design-vue/types

import { AntdComponent } from '../component';
import { VNodeChild } from 'vue';

export declare class OptionGroup extends AntdComponent {
  $props: {
    /**
   * Key
   * @type string
   */
    key?: string;

    /**
     * Group label
     * @type any (string | slot)
     */
    label?: VNodeChild | JSX.Element;
  }

}
