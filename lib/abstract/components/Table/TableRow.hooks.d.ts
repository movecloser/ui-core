import { SetupContext } from '@vue/composition-api';
import { ComponentObjectPropsOptions } from '../../../contracts';
import { TableFakeRowProps, TableRowProps, UseTableRowProvides } from './Table.contracts';
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare const tableFakeRowProps: ComponentObjectPropsOptions<TableFakeRowProps>;
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare const tableRowProps: ComponentObjectPropsOptions<TableRowProps>;
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare const useTableRow: (props: TableRowProps, ctx: SetupContext) => UseTableRowProvides;
