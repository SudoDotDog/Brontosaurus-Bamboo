/**
 * @author WMXPY
 * @namespace Declare
 * @description Application
 */

export type FetchPublicKeyResponse = {

    readonly applicationKey: string;
    readonly publicKey: string;
};

export type FetchPublicKeyRequest = {

    readonly applicationKey: string;
};
