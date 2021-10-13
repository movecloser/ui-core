import { AbstractCheckControlProps } from '../../../../../abstract';
import { FormControlModelType } from '../../../../../contracts';
import { DashmixTheme } from '../../../contracts';
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export interface DashmixCheckProps extends AbstractCheckControlProps<FormControlModelType> {
    /**
     * Color mode.
     */
    theme: DashmixTheme;
}
