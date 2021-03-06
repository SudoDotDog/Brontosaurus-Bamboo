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

export type ActivateAccountResponse = {

    readonly activate: boolean;
};

export type DeactivateAccountResponse = {

    readonly deactivate: boolean;
};

export type LimboAccountResponse = {

    readonly limbo: boolean;
    readonly tempPassword: string;
};

export type QueryAccountRequest = {

    readonly activation?: 'active' | 'inactive';
    readonly namespace?: string;

    readonly organizations?: string[];

    readonly groups?: string[];
    readonly groupsMode?: 'and' | 'or';

    readonly tags?: string[];
    readonly tagsMode?: 'and' | 'or';
};

export type QueryAccountElement = {

    readonly username: string;
    readonly namespace: string;
    readonly groups: string[];
    readonly tags: string[];
    readonly organization?: string;
    readonly displayName?: string;
    readonly email?: string;
    readonly phone?: string;
};

export type QueryAccountResponse = {

    readonly count: number;
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

export type UpdateAccountResponse = {

    readonly active: boolean;
    readonly saved: boolean;
    readonly username: string;
    readonly limbo: boolean;
    readonly twoFA: boolean;

    readonly avatar?: string;
    readonly email?: string;
    readonly phone?: string;
    readonly displayName?: string;
};

export type VerifyAccountResponse = {

    readonly valid: false;
} | {

    readonly valid: true;
    readonly account: AccountLite;
};
