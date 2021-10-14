import { SetupContext } from '@vue/composition-api';
import { ComponentObjectPropsOptions } from '../../../contracts';
import { AbstractTableProps, UseTableProvides } from './Table.contracts';
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare const tableProps: ComponentObjectPropsOptions<AbstractTableProps>;
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare const useTable: (props: AbstractTableProps, ctx: SetupContext) => UseTableProvides;
