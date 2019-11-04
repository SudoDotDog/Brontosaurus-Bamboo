/**
 * @author WMXPY
 * @namespace Bamboo
 * @description Util
 */

export const validateGreenPath = (url: string): boolean => {

    return /https?:\/\/.+\..+/.test(url);
};
