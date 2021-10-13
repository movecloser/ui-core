import { AbstractCheckListProps } from '../../../../../abstract';
import { FormControlModelType } from '../../../../../contracts';
import { DashmixTheme } from '../../../contracts';
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export interface DashmixCheckListProps extends AbstractCheckListProps<FormControlModelType> {
    /**
     * Color mode.
     */
    theme: DashmixTheme;
}
