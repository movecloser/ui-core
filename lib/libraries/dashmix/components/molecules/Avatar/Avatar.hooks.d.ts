import { ComponentObjectPropsOptions } from '../../../../../contracts';
import { AvatarProps } from './Avatar.contracts';
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare const avatarProps: ComponentObjectPropsOptions<AvatarProps>;
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare const useAvatar: (props: AvatarProps) => {
    caption: import("@vue/composition-api").ComputedRef<string>;
    color: import("@vue/composition-api").ComputedRef<string>;
    sizeClass: import("../../../../../composables").UseSizeClassProvides;
};
