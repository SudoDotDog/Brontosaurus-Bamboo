/**
 * @author WMXPY
 * @namespace Bamboo
 * @description Bamboo
 */

import { QueryAccountRequest, QueryAccountResponse, QueryOrganizationRequest, QueryOrganizationResponse } from "./declare";
import { GreenLink } from "./link";

export class Bamboo {

    public static create(path: string, auth: string): Bamboo {

        return new Bamboo(path, auth);
    }

    private readonly _path: string;
    private readonly _auth: string;

    private readonly _link: GreenLink;

    private constructor(path: string, auth: string) {

        this._path = path;
        this._auth = auth;

        this._link = GreenLink.create(this._path, this._auth);
    }

    public async queryAccount(body: QueryAccountRequest): Promise<QueryAccountResponse> {

        const response: QueryAccountResponse = await this._link.post<QueryAccountResponse>(body, 'account', 'query');

        return response;
    }

    public async queryOrganization(body: QueryOrganizationRequest): Promise<QueryOrganizationResponse> {

        const response: QueryOrganizationResponse = await this._link.post<QueryOrganizationResponse>(body, 'organization', 'query');

        return response;
    }

    public joinPath(...path: string[]): string {

        return this._link.joinPath(...path);
    }
}
