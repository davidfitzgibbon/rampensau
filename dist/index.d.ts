export declare type FuncNumberReturn = (arg0: number) => number;
export declare type Vector2 = [number, number];
export declare type Vector3 = [number, number, number];
export declare type GenerateHSLRampArgument = {
    total?: number;
    hCenter?: number;
    hCycles?: number;
    sRange?: Vector2;
    lRange?: Vector2;
    sEasing?: FuncNumberReturn;
    lEasing?: FuncNumberReturn;
};
/**
 * Generates a color ramp based on the HSL color space.
 * @param {GenerateHSLRampArgument} args - The arguments to generate the ramp.
 * @returns {Array<number>} - The color ramp.
 */
export declare function generateHSLRamp({ total, hCenter, hCycles, sRange, sEasing, lRange, lEasing, }?: GenerateHSLRampArgument): Vector3[];
export declare const generateHSLRampParams: {
    total: {
        default: number;
        props: {
            min: number;
            max: number;
            step: number;
        };
    };
    hCenter: {
        default: number;
        props: {
            min: number;
            max: number;
            step: number;
        };
    };
    hCycles: {
        default: number;
        props: {
            min: number;
            max: number;
            step: number;
        };
    };
    minSaturation: {
        default: number;
        props: {
            min: number;
            max: number;
            step: number;
        };
    };
    maxSaturation: {
        default: number;
        props: {
            min: number;
            max: number;
            step: number;
        };
    };
    minLight: {
        default: number;
        props: {
            min: number;
            max: number;
            step: number;
        };
    };
    maxLight: {
        default: number;
        props: {
            min: number;
            max: number;
            step: number;
        };
    };
};
