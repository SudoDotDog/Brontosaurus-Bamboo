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

    readonly target: string;

    readonly type: keyof AccountActions;
    readonly by: string;
    readonly application: string;
    readonly content: string;
};

export type AccountHistoryRecordResponse = {

    readonly account: string;
};
