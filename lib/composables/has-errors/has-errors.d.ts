import { ComputedRef, Ref } from '@vue/composition-api';
import { ComponentObjectPropsOptions } from '../../contracts';
import { HasErrors } from './has-errors.contracts';
/**
 * Props partial.
 *
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare const hasErrorsProp: ComponentObjectPropsOptions<HasErrors>;
/**
 * @param errors - Component's `errors` reactive reference.
 *
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export declare const useHasErrors: (errors: Ref<string[]>) => ComputedRef<boolean>;
