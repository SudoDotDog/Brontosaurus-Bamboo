/**
 * @author WMXPY
 * @namespace Bamboo
 * @description Bamboo
 */

export class Bamboo {

    public static create(path: string, auth: string): Bamboo {

        return new Bamboo(path, auth);
    }

    private readonly _path: string;
    private readonly _auth: string;

    private constructor(path: string, auth: string) {

        this._path = path;
        this._auth = auth;
    }
}
