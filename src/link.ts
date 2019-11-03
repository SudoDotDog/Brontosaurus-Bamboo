/**
 * @author WMXPY
 * @namespace Bamboo
 * @description Link
 */

import * as Request from "request";

export class GreenLink {

    public static create(path: string, auth: string) {

        return new GreenLink(path, auth);
    }

    private readonly _path: string;
    private readonly _auth: string;

    private constructor(path: string, auth: string) {

        this._path = path;
        this._auth = auth;
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

                if (response.statusCode !== 200) {
                    reject(response.statusCode);
                    return;
                }

                resolve(responseBody);
            });
        });
    }

    public joinPath(...path: string[]): string {

        return [this._path, ...path].join('/');
    }

    private _getAuthentication(): string {

        return `bearer ${this._auth}`;
    }
}