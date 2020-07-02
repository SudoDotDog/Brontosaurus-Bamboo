/**
 * @author WMXPY
 * @namespace Declare
 * @description Namespace
 */

export type QueryNamespaceElement = {

    readonly name?: string;
    readonly namespace: string;
};

export type QueryNamespaceResponse = {

    readonly namespaces: QueryNamespaceElement[];
};

export type QueryNamespaceRequest = {

    readonly activation?: 'activate' | 'inactivate';
};
