import { Data } from '@vue/composition-api';
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export interface DashmixBoxProps extends Data {
    bodyClass: string;
    footerClass: string;
    footerMode: DashmixBoxMode;
    headerClass: string;
    headerMode: DashmixBoxMode;
    noBodyPadding: boolean;
    shadow: boolean;
}
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare type DashmixBoxMode = 'clean' | 'divided';
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare enum DashmixBoxModeMap {
    Clean = "clean",
    Divided = "divided"
}
