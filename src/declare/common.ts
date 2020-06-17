/**
 * @author WMXPY
 * @namespace Declare
 * @description Common
 */

export declare type Basics = string | number | boolean;

export type IdentityUsernameNamespace = {

    readonly username: string;
    readonly namespace: string;
};

export type IdentityCombined = {

    readonly combined: string;
};

export type IdentityOptions =
    ({
        readonly type: 'username-namespace';
    } & IdentityUsernameNamespace)
    | ({
        readonly type: 'combined';
    } & IdentityCombined);

export type CommonRegisterAccountResponse = {

    readonly account: string;
    readonly namespace: string;
    readonly tempPassword: string;
};

export type CommonAccountDetailResponse = {

    readonly active: boolean;
    readonly username: string;
    readonly namespace: string;

    readonly email?: string;
    readonly phone?: string;
    readonly displayName?: string;
};

export type CommonAccountStatusDetailResponse = {

    readonly twoFA: boolean;
    readonly limbo: boolean;

    readonly groups: string[];
    readonly tags: string[];
    readonly organization?: string;
} & CommonAccountDetailResponse;
