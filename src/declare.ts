/**
 * @author WMXPY
 * @namespace Bamboo
 * @description Declare
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
