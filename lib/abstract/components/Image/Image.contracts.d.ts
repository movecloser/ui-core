import { ComputedRef, Data } from '@vue/composition-api';
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export interface AbstractImageProps extends Data {
    /**
     * Value for the `<img>'s` `[alt]` attribute.
     */
    alt: string;
    /**
     * Determines whether the image should be lazy loaded.
     */
    lazy: boolean;
    /**
     * Value for the `<img>'s` `[src]` attribute.
     */
    src: string;
    /**
     * Registry that binds the different images with their URL address,
     * where the object's keys represent the images' intrinsic WIDTH.
     */
    srcset?: SrcSet;
}
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export declare type SrcSet = {
    [key: number]: string;
};
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export interface UseSrcSetProvides {
    /**
     * Value for the `<img>'s` `[srcset]` attribute.
     */
    _srcset: ComputedRef<string> | undefined;
    /**
     * Value for the `<img>'s` `[sizes]` attribute.
     */
    sizes: ComputedRef<string> | undefined;
}
