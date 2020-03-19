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
