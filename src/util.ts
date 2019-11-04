/**
 * @author WMXPY
 * @namespace Bamboo
 * @description Util
 */

export const validateGreenPath = (url: string): boolean => {

    return /https?:\/\/.+\..+/.test(url);
};

export const validateGreenAuth = (key: string): boolean => {

    const splited: string[] = key.split(':');
    return splited.length === 2;
};
