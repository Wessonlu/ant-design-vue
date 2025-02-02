// Project: https://github.com/vueComponent/ant-design-vue
// Definitions by: akki-jat <https://github.com/akki-jat>
// Definitions: https://github.com/vueComponent/ant-design-vue/types

import { VNodeChild, CSSProperties } from 'vue';
import { AntdComponent } from './component';

export declare class Drawer extends AntdComponent {
  $props: {
    /**
     * Whether a close (x) button is visible on top right of the Drawer dialog or not.
     * @default true
     * @type boolean
     */
    closable?: boolean;

    /**
     * Whether to unmount child components on closing drawer or not.
     * @default false
     * @type boolean
     */
    destroyOnClose?: boolean;

    /**
     * Return the mounted node for Drawer.
     * @default 'body'
     * @type any ( HTMLElement| () => HTMLElement | string)
     */
    getContainer?: () => HTMLElement | string;

    /**
     * Whether to show mask or not.
     * @default true
     * @type boolean
     */
    mask?: boolean;

    /**
     * Clicking on the mask (area outside the Drawer) to close the Drawer or not.
     * @default true
     * @type boolean
     */
    maskClosable?: boolean;

    /**
     * Style for Drawer's mask element.
     * @default {}
     * @type object
     */
    maskStyle?: CSSProperties;

    /**
     * The title for Drawer.
     * @type any (string | slot)
     */
    title?: VNodeChild | JSX.Element;

    /**
     * Whether the Drawer dialog is visible or not.
     * @default false
     * @type boolean
     */
    visible?: boolean;

    /**
     * The class name of the container of the Drawer dialog.
     * @type string
     */
    wrapClassName?: string;

    /**
     * Style of wrapper element which **contains mask** compare to `drawerStyle`
     * @type object
     */
    wrapStyle?: CSSProperties;

    /**
     * Style of the popup layer element
     * @type object
     */
    drawerStyle?: CSSProperties;

    /**
     * Style of floating layer, typically used for adjusting its position.
     * @type object
     */
    bodyStyle?: CSSProperties;
    headerStyle?: CSSProperties;

    /**
     * Width of the Drawer dialog.
     * @default 256
     * @type string | number
     */
    width?: string | number;

    /**
     * placement is top or bottom, height of the Drawer dialog.
     * @type string | number
     */
    height?: string | number;

    /**
     * The z-index of the Drawer.
     * @default 1000
     * @type number
     */
    zIndex?: number;

    /**
     * The placement of the Drawer.
     * @default 'right'
     * @type string
     */
    placement?: 'top' | 'right' | 'bottom' | 'left';
    afterVisibleChange?: (visible?: boolean) => void;
    keyboard?: boolean;

    /**
     * Specify a callback that will be called when a user clicks mask, close button or Cancel button.
     */
    onClose?: (e?: Event) => void;
  };
}
