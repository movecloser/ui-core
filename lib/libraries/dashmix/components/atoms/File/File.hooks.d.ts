import { ComponentObjectPropsOptions } from '../../../../../contracts';
import { Size } from '../../../../../composables';
import { DashmixIconName } from '../Icon';
import { DashmixFileProps } from './File.contracts';
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export declare const dashmixFileProps: ComponentObjectPropsOptions<DashmixFileProps>;
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export declare const useDashmixFile: (props: DashmixFileProps) => {
    fileLoadError: import("@vue/composition-api").Ref<boolean>;
    hasThumbnail: import("@vue/composition-api").ComputedRef<boolean>;
    placeholderIcon: import("@vue/composition-api").ComputedRef<{
        name: DashmixIconName;
        size: Size;
    }>;
};
