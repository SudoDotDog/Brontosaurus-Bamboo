/**
 * @author WMXPY
 * @namespace Declare
 * @description Validate
 */

export type ValidateBridgeRequest = {

    readonly key: string;
};

export type ValidateBridgeResponse = {

    readonly valid: boolean;
    readonly name: string;
    readonly key: string;
};

export type ValidateDirectRequest = ValidateBridgeRequest;
export type ValidateDirectResponse = ValidateBridgeResponse;
