import { ComputedRef } from '@vue/composition-api';
import { RawLocation } from 'vue-router';
import { CanBeDisabled } from '../../../../../composables';
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export interface LinkProps extends CanBeDisabled {
    external: boolean;
    newTab: boolean;
    target: RawLocation;
}
export interface UseDashmixLinkProvides {
    aTarget: ComputedRef<string>;
    isExternal: ComputedRef<boolean>;
    onClick: () => void;
}
