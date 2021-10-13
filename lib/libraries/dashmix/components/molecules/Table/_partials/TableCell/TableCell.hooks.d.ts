import { ComponentObjectPropsOptions } from '../../../../../../../contracts';
import { DashmixTableCellProps } from './TableCell.contracts';
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 */
export declare const dashmixTableCellProps: ComponentObjectPropsOptions<DashmixTableCellProps>;
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export declare const useDashmixTableCell: (props: DashmixTableCellProps) => {
    gridColumnEnd: import("@vue/composition-api").ComputedRef<string>;
};
