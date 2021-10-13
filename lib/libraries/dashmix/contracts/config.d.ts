/**
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
export interface DashmixDSLConfiguration {
    /**
     * The string that should be used to prefix each component's name.
     *
     * @default "Ds"
     */
    prefix?: string;
    /**
     * The object for uid package configuration
     * @see https://www.npmjs.com/package/vue-unique-id#plugin-options
     *
     * @default uniqueIdConfig
     */
    uidConfig?: Object;
}
