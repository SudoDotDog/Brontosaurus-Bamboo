/**
 * @author WMXPY
 * @namespace Declare
 * @description Account
 */

export type DetailAccountResponse = {

    readonly username: string;
    readonly email?: string;
    readonly phone?: string;
    readonly displayName?: string;
};

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
