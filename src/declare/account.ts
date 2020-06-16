/**
 * @author WMXPY
 * @namespace Declare
 * @description Account
 */

import { Basics } from "./common";

export type AccountLite = {

    readonly username: string;
    readonly namespace: string;
    readonly displayName?: string;
};

export type LimboAccountResponse = {

    readonly limbo: boolean;
    readonly tempPassword: string;
};

export type QueryAccountRequest = {

    readonly organizations: string[];
    readonly groups: string[];
    readonly tags: string[];
};

export type QueryAccountElement = {

    readonly username: string;
    readonly namespace: string;
    readonly groups: string[];
    readonly displayName?: string;
};

export type QueryAccountResponse = {

    readonly accounts: QueryAccountElement[];
};

export type RegisterAccountRequest = {

    readonly userInfos: Record<string, Basics>;
    readonly userGroups: string[];
    readonly userTags: string[];

    readonly userDisplayName?: string;
    readonly userEmail?: string;
    readonly userPhone?: string;
};

export type UpdateAccountRequest = {

    readonly avatar?: string;
    readonly displayName?: string;
    readonly email?: string;
    readonly phone?: string;
};

export type VerifyAccountResponse = {

    readonly valid: false;
} | {

    readonly valid: true;
    readonly account: AccountLite;
};
