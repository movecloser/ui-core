import { SizeRegistry, ThemeRegistry } from '../../../../../composables';
import { DropdownAlignmentMap, DropdownPositionMap } from '../../../../../abstract/components/Dropdown';
import { DashmixTheme } from '../../../contracts';
import { PopperPositions } from './Dropdown.contracts';
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare const dashmixDropdownAlignClassRegistry: ThemeRegistry<DropdownAlignmentMap>;
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare const dashmixDropdownItemClassRegistry: ThemeRegistry<DashmixTheme>;
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare const dashmixDropdownPositionClassRegistry: ThemeRegistry<DropdownPositionMap>;
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare const dashmixDropdownPopperPositionRegistry: {
    bottom: PopperPositions;
    left: PopperPositions;
    right: PopperPositions;
    top: PopperPositions;
};
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare const dashmixDropdownSizeClassRegistry: SizeRegistry;
