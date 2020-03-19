/**
 * @author WMXPY
 * @namespace Declare
 * @description Account History
 */

export type AccountActions = {

    CREATE: undefined;
    RESET_PASSWORD: undefined;
    UPDATE_CONTACT: undefined;
    UPDATE_GROUP: undefined;
};

export type AccountHistoryRecordRequest = {

    readonly type: keyof AccountActions;
    readonly byUsername: string;
    readonly byNamespace: string;
    readonly application: string;
    readonly content: string;
};

export type AccountHistoryRecordResponse = {

    readonly account: string;
};
