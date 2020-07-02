/**
 * @author WMXPY
 * @namespace Declare
 * @description Tag
 */

export type QueryTagElement = {

    readonly name: string;
};

export type QueryTagResponse = {

    readonly tags: QueryTagElement[];
};

export type QueryTagRequest = {

    readonly activation?: 'active' | 'inactive';
};
