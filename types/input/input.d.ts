// Project: https://github.com/vueComponent/ant-design-vue
// Definitions by: akki-jat <https://github.com/akki-jat>
// Definitions: https://github.com/vueComponent/ant-design-vue/types

import { AntdComponent } from '../component';
import { InputGroup } from './input-group';
import { InputSearch } from './input-search';
import { TextArea } from './textarea';
import { Password } from './password';
import { VNodeChild } from 'vue';

export declare class Input extends AntdComponent {
  static Group: typeof InputGroup;
  static Search: typeof InputSearch;
  static TextArea: typeof TextArea;
  static Password: typeof Password;
  $props: {
    /**
     * The label text displayed after (on the right side of) the input field.
     * @type any (string | slot)
     */
    addonAfter?: VNodeChild | JSX.Element;

    /**
     * The label text displayed before (on the left side of) the input field.
     * @type any (string | slot)
     */
    addonBefore?: VNodeChild | JSX.Element;

    /**
     * The initial input content
     * @type string | number
     */
    defaultValue?: string | number;

    /**
     * Whether the input is disabled.
     * @default false
     * @type boolean
     */
    disabled?: boolean;

    /**
     * The ID for input
     * @type string
     */
    id?: string;

    /**
     * The prefix icon for the Input.
     * @type any (string | slot)
     */
    prefix?: VNodeChild | JSX.Element;

    /**
     * The size of the input box. Note: in the context of a form, the large size is used. Available: large default small
     * @default 'default'
     * @type string
     */
    size?: 'small' | 'large' | 'default';

    /**
     * The suffix icon for the Input.
     * @type any (string | slot)
     */
    suffix?: VNodeChild | JSX.Element;

    /**
     * The type of input, see: MDN (use Input.TextArea instead of type="textarea")
     * @default 'text'
     * @type string
     */
    type?: string;

    /**
     * The input content value
     * @type string | number
     */
    value?: string | number;
    /**
     * allow to remove input content with clear icon
     */
    allowClear?: boolean;
  }
}
