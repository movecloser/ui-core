import { VueConstructor } from 'vue';
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export interface BootstrapDSLConfiguration {
    /**
     * Available SVG icons.
     */
    icons?: Record<string, VueConstructor>;
    /**
     * The string that should be used to prefix each component's name.
     *
     * @default "Bs"
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
