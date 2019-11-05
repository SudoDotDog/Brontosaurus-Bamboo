/**
 * @author WMXPY
 * @namespace Declare
 * @description Account
 */

export type AccountLite = {

    readonly username: string;
    readonly displayName?: string;
};

export type DetailAccountResponse = {

    readonly username: string;
    readonly email?: string;
    readonly phone?: string;
    readonly displayName?: string;
};

export type LimboAccountRequest = {

    readonly username: string;
};

export type LimboAccountResponse = {

    readonly limbo: boolean;
    readonly tempPassword: string;
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

export type VerifyAccountResponse = {

    readonly valid: false;
} | {

    readonly valid: true;
    readonly account: AccountLite;
};
