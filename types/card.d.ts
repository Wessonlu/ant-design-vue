// Project: https://github.com/vueComponent/ant-design-vue
// Definitions by: akki-jat <https://github.com/akki-jat>
// Definitions: https://github.com/vueComponent/ant-design-vue/types

import { VNodeChild, CSSProperties } from 'vue';
import { AntdComponent } from './component';
import { Meta } from './meta';

export type CardSize = 'default' | 'small';

export declare class Card extends AntdComponent {
  static Grid: any;
  static Meta: typeof Meta;

  $props: {
    tabBarExtraContent: any;
    /**
     * The action list, shows at the bottom of the Card.
     * @type any (slots)
     */
    actions: VNodeChild | JSX.Element;

    /**
     * Current TabPane's key
     * @type string
     */
    activeTabKey?: string;

    /**
     * Inline style to apply to the card head
     * @type object
     */
    headStyle?: CSSProperties;

    /**
     * Inline style to apply to the card content
     * @type object
     */
    bodyStyle?: CSSProperties;

    /**
     * Toggles rendering of the border around the card
     * @default true
     * @type boolean
     */
    bordered?: boolean;

    /**
     * Card cover
     * @type any (slot)
     */
    cover?: VNodeChild | JSX.Element;

    /**
     * Initial active TabPane's key, if activeTabKey is not set.
     * @type string
     */
    defaultActiveTabKey?: string;

    /**
     * Content to render in the top-right corner of the card
     * @type any (string | slot)
     */
    extra?: VNodeChild | JSX.Element;

    /**
     * Lift up when hovering card
     * @default false
     * @type boolean
     */
    hoverable?: boolean;

    /**
     * Shows a loading indicator while the contents of the card are being fetched
     * @default false
     * @type boolean
     */
    loading?: boolean;

    /**
     * List of TabPane's head, Custom tabs can be created with the scopedSlots property
     * @type Array<{key: string, tab: any, scopedSlots: {tab: string}}>
     */
    tabList?: Array<{ key: string; tab: any; slots: { tab: string } }>;

    /**
     * Card title
     * @type any (string | slot)
     */
    title?: VNodeChild | JSX.Element;

    /**
     * Card style type, can be set to inner or not set
     * @type string
     */
    type?: string;

    /**
     * Size of card
     * @type string
     */
    size?: CardSize;
  };
}
