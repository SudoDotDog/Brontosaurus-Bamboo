/**
 * @author WMXPY
 * @namespace Declare
 * @description Group
 */

export type QueryGroupElement = {

    readonly name: string;
};

export type QueryGroupResponse = {

    readonly groups: QueryGroupElement[];
};

export type QueryGroupRequest = {

    readonly activation?: 'active' | 'inactive';
};
