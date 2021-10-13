"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFilterEditPopup = exports.useFilterEditPopupProps = void 0;
const composition_api_1 = require("@vue/composition-api");
const front_core_1 = require("@movecloser/front-core");
const Filters_helpers_1 = require("../Filters.helpers");
/**
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
exports.useFilterEditPopupProps = {
    config: {
        type: Object,
        required: true
    },
    dictionaries: {
        type: Object,
        required: true
    },
    hints: {
        type: Array,
        required: false,
        default: () => []
    },
    loading: {
        type: Boolean,
        required: false,
        default: false
    },
    value: {
        type: [Object, Array, String, Boolean, Number],
        required: true
    }
};
/**
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
const useFilterEditPopup = (props, ctx) => {
    const { value } = props;
    const { emit } = ctx;
    const definitions = composition_api_1.ref([...Filters_helpers_1.buildDefinitionsSet(value, props.config.type)]);
    const conjunction = composition_api_1.ref(Filters_helpers_1.resolveConjunctionOperator(definitions.value, front_core_1.ConjunctionOperator.Or));
    const conjunctionOptions = Filters_helpers_1.buildConjunctionOptions();
    composition_api_1.watch(() => definitions.value, (newDefinitions) => {
        emit('setValue', newDefinitions);
    });
    composition_api_1.watch(() => conjunction.value, (newConjunction) => {
        if (definitions.value.length > 1) {
            definitions.value = [...definitions.value].map((d, index) => {
                if (index > 0) {
                    d.conjunction = newConjunction;
                }
                return d;
            });
        }
    });
    const addClearDefinition = () => {
        definitions.value = [...definitions.value, Filters_helpers_1.buildDefinitionTemplate(conjunction.value)];
    };
    const onDefinitionChange = (changed, index) => {
        definitions.value = definitions.value.map((d, id) => {
            if (id === index) {
                return { ...d, ...changed };
            }
            return d;
        });
    };
    const onDefinitionRemove = (index) => {
        if (definitions.value.length > 1) {
            const set = [...definitions.value];
            set.splice(index, 1);
            definitions.value = set;
        }
    };
    const setNewConjunction = (newConjunction) => {
        conjunction.value = newConjunction;
    };
    return {
        addClearDefinition,
        conjunction,
        conjunctionOptions,
        definitions,
        onDefinitionChange,
        onDefinitionRemove,
        setNewConjunction
    };
};
exports.useFilterEditPopup = useFilterEditPopup;
