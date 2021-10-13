import { Data } from '@vue/composition-api';
import { VueConstructor } from 'vue';
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export interface DashmixAccordionItem {
    component: VueConstructor;
    id: string;
    label: string | DashmixAccordionLabel;
    props?: Data;
}
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export interface DashmixAccordionProps extends Data {
    /**
     * The index of an item that should be opened by default.
     */
    defaultOpen?: number;
    /**
     * Index of the item that should be closed.
     *
     * ℹ️ **REMEMBER:** This prop relies on the `watch()` function.
     * In order to work properly it **has to be able to detect a change**
     * on the prop itself. To achieve that, you should first set its value to `-1`
     * and only then, **using the `$nextTick()` helper**, set the desired, target value.
     * This way you make sure that the value actually **changes**
     * and the `watch()` callback gets rightly called.
     */
    itemToClose?: number;
    /**
     * Index of the item that should be opened.
     *
     * ℹ️ **REMEMBER:** This prop relies on the `watch()` function.
     * In order to work properly it **has to be able to detect a change**
     * on the prop itself. To achieve that, you should first set its value to `-1`
     * and only then, **using the `$nextTick()` helper**, set the desired, target value.
     * This way you make sure that the value actually **changes**
     * and the `watch()` callback gets rightly called.
     */
    itemToOpen?: number;
    /**
     * Index of the item that should be toggled.
     *
     * ℹ️ **REMEMBER:** This prop relies on the `watch()` function.
     * In order to work properly it **has to be able to detect a change**
     * on the prop itself. To achieve that, you should first set its value to `-1`
     * and only then, **using the `$nextTick()` helper**, set the desired, target value.
     * This way you make sure that the value actually **changes**
     * and the `watch()` callback gets rightly called.
     */
    itemToToggle?: number;
    /**
     * The items to render.
     */
    items: DashmixAccordionItem[];
    /**
     * Determines whether the component should disallow opening more than one item at a time.
     */
    onlySingleOpen: boolean;
    /**
     * One of the predefined style presets.
     */
    type: DashmixAccordionType;
}
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export interface DashmixAccordionStylePreset {
    label: string;
    labelWrapper: string;
    main: string;
}
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export declare enum DashmixAccordionType {
    Default = "default"
}
export interface DashmixAccordionLabel {
    /**
     * Label component.
     */
    component: VueConstructor;
    /**
     * Properties of label component.
     */
    props: Data;
}
