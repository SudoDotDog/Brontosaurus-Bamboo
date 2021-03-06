/**
 * @author WMXPY
 * @namespace Bamboo
 * @description Link
 */

import { HTTP_RESPONSE_CODE } from "@sudoo/magic";
import * as Request from "request";
import { validateGreenAuth, validateGreenPath } from "./util";

export class GreenLink {

    public static create(path: string, auth: string): GreenLink {

        if (!validateGreenPath(path)) {
            throw new Error('[Brontosaurus-Bamboo] Invalid Path');
        }

        if (!validateGreenAuth(auth)) {
            throw new Error('[Brontosaurus-Bamboo] Invalid Auth');
        }

        return new GreenLink(path, auth);
    }

    private readonly _path: string;
    private readonly _auth: string;

    private constructor(path: string, auth: string) {

        this._path = path;
        this._auth = auth;
    }

    public get<T>(...path: string[]): Promise<T> {

        return new Promise<T>((resolve: (result: T) => void, reject: (reason: any) => void) => {

            const options: Request.Options = {
                uri: this.joinPath(...path),
                headers: {
                    Authorization: this._getAuthentication(),
                },
                method: 'GET',
                json: {},
            };

            Request(options, (error: any, response: Request.Response, body: T) => {

                if (Boolean(error)) {
                    reject(error);
                    return;
                }

                if (response.statusCode !== HTTP_RESPONSE_CODE.OK) {
                    reject(response.statusCode);
                    return;
                }

                resolve(body);
            });
        });
    }

    public post<T>(body: Record<string, any>, ...path: string[]): Promise<T> {

        return new Promise<T>((resolve: (result: T) => void, reject: (reason: any) => void) => {

            const options: Request.Options = {
                uri: this.joinPath(...path),
                headers: {
                    Authorization: this._getAuthentication(),
                },
                method: 'POST',
                json: body,
            };

            Request(options, (error: any, response: Request.Response, responseBody: T) => {

                if (Boolean(error)) {
                    reject(error);
                    return;
                }

                if (response.statusCode !== HTTP_RESPONSE_CODE.OK) {
                    reject(responseBody);
                    return;
                }

                resolve(responseBody);
            });
        });
    }

    public joinPath(...path: string[]): string {

        const mappedPath: string[] = path.map((slice: string) => encodeURIComponent(slice));
        if (this._path[this._path.length - 1] === '/') {
            return this._path + mappedPath.join('/');
        }
        return [this._path, ...mappedPath].join('/');
    }

    private _getAuthentication(): string {

        return `bearer ${this._auth}`;
    }
}
