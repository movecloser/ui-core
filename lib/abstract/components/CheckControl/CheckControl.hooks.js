"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCheckControl = exports.getAbstractCheckListProps = exports.getAbstractCheckControlProps = void 0;
const composition_api_1 = require("@vue/composition-api");
const composables_1 = require("../../../composables");
const InputControl_1 = require("../InputControl");
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
const getAbstractCheckControlProps = () => (Object.assign(Object.assign({}, InputControl_1.getAbstractBaseControlProps()), { 
    /**
     * Id of check control.
     */
    id: {
        type: String,
        required: false,
        default: null
    }, 
    /**
     * Label to display next to control.
     */
    label: {
        type: String,
        required: false,
        default: null
    }, 
    /**
     * Control's value, synced via `v-model`.
     */
    model: { required: true }, 
    /**
     * Determines whether the control allows selection of more than one option.
     */
    type: {
        type: String,
        required: false,
        default: 'checkbox'
    }, 
    /**
     * Array of the options available to select.
     */
    value: {
        required: false,
        default: true
    } }));
exports.getAbstractCheckControlProps = getAbstractCheckControlProps;
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
const getAbstractCheckListProps = () => (Object.assign(Object.assign({}, InputControl_1.getAbstractBaseControlProps()), { 
    /**
     * Control's value, synced via `v-model`.
     */
    model: { required: true }, 
    /**
     * Determines whether the control allows selection of more than one option.
     */
    multiple: {
        type: Boolean,
        required: false,
        default: false
    }, 
    /**
     * Array of the options available to select.
     */
    options: {
        type: Array,
        required: true
    } }));
exports.getAbstractCheckListProps = getAbstractCheckListProps;
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
const useCheckControl = (props, ctx) => {
    const { model, multiple } = composition_api_1.toRefs(props);
    const checked = composables_1.useSyncModel(model, ctx);
    const checkType = composition_api_1.computed(() => multiple.value ? 'checkbox' : 'radio');
    return { checked, checkType };
};
exports.useCheckControl = useCheckControl;
