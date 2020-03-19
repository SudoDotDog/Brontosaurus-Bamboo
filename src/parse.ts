/**
 * @author WMXPY
 * @namespace Bamboo
 * @description Parse
 */

import { DEFAULT_BRONTOSAURUS_NAMESPACE } from "@brontosaurus/definition";

const joinCombinedBySeparator = (username: string, namespace: string, separator: string): string => {

    if (typeof namespace !== 'string') {
        return username;
    }
    if (namespace === DEFAULT_BRONTOSAURUS_NAMESPACE.DEFAULT) {
        return username;
    }
    return `${namespace}${separator}${username}`;
};

export const joinCombined = (username: string, namespace: string): string => {

    return joinCombinedBySeparator(username, namespace, '/');
};

export const joinURLFriendlyCombined = (username: string, namespace: string): string => {

    return joinCombinedBySeparator(username, namespace, '_');
};

export type ParseCombinedResult = {

    readonly method: 'regular' | 'url-friendly' | 'default';
    readonly username: string;
    readonly namespace: string;
};

export const parseUsernameNamespaceCombined = (combined: string): ParseCombinedResult => {

    const regularSplited: string[] = combined.split('/');
    if (regularSplited.length === 2) {

        return {
            method: 'regular',
            username: regularSplited[1],
            namespace: regularSplited[0],
        };
    }

    const urlFriendlySplited: string[] = combined.split('_');
    if (urlFriendlySplited.length === 2) {

        return {
            method: 'url-friendly',
            username: urlFriendlySplited[1],
            namespace: urlFriendlySplited[0],
        };
    }

    return {
        method: 'default',
        username: combined,
        namespace: DEFAULT_BRONTOSAURUS_NAMESPACE.DEFAULT,
    };
};
