/**
 * @author WMXPY
 * @namespace Declare
 * @description Common
 */

export declare type Basics = string | number | boolean;

export type CommonRegisterAccountResponse = {

    readonly account: string;
    readonly tempPassword: string;
};

export type CommonAccountDetailResponse = {

    readonly active: boolean;
    readonly username: string;

    readonly email?: string;
    readonly phone?: string;
    readonly displayName?: string;
};

export type CommonAccountStatusDetailResponse = {

    readonly twoFA: boolean;
    readonly limbo: boolean;
} & CommonAccountDetailResponse;
