import { SetupContext } from '@vue/composition-api';
import { ComponentObjectPropsOptions } from '../../../../../contracts';
import { DashmixTableSearchBarProps, UseDashmixTableSearchBarProvides } from './TableSearchBar.contracts';
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
export declare const dashmixTableSearchBarProps: ComponentObjectPropsOptions<DashmixTableSearchBarProps>;
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
export declare const useDashmixTableSearchBar: (props: DashmixTableSearchBarProps, ctx: SetupContext) => UseDashmixTableSearchBarProvides;
