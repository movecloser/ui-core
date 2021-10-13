import { SetupContext } from '@vue/composition-api';
import { ComponentObjectPropsOptions } from '../../../../../contracts';
import { TypeaheadProps, UseTypeahead } from './Typeahead.contracts';
/**
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
export declare const typeaheadProps: ComponentObjectPropsOptions<TypeaheadProps>;
/**
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
export declare const useTypeahead: (props: TypeaheadProps, ctx: SetupContext) => UseTypeahead;
