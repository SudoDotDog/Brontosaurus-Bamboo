/**
 * @author WMXPY
 * @namespace Declare
 * @description Query
 */

export type QueryAccountRequest = {

    readonly organizations: string[];
    readonly groups: string[];
};

export type QueryAccountElement = {

    readonly username: string;
    readonly groups: string[];
    readonly displayName?: string;
};

export type QueryAccountResponse = {

    readonly accounts: QueryAccountElement[];
};

export type QueryOrganizationRequest = {

    readonly tags: string[];
};

export type QueryOrganizationResponse = {

    readonly names: string[];
};
