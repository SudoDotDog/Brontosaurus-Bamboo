/**
 * @author WMXPY
 * @namespace Bamboo
 * @description Bamboo
 */

import { DetailAccountRequest, LimboAccountRequest, LimboAccountResponse, QueryAccountRequest, QueryAccountResponse, RegisterAccountRequest, UpdateAccountRequest, VerifyAccountRequest, VerifyAccountResponse } from "./declare/account";
import { AccountHistoryRecordRequest, AccountHistoryRecordResponse } from "./declare/account-history";
import { CommonAccountStatusDetailResponse, CommonRegisterAccountResponse } from "./declare/common";
import { InplodeOrganizationRequest, InplodeOrganizationResponse, QueryOrganizationRequest, QueryOrganizationResponse, RegisterSubAccountRequest, RegisterSubAccountResponse, VerifyOrganizationResponse } from "./declare/organization";
import { ValidateBridgeRequest, ValidateBridgeResponse, ValidateDirectRequest, ValidateDirectResponse } from "./declare/validate";
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

    public async accountHistoryRecord(body: AccountHistoryRecordRequest): Promise<AccountHistoryRecordResponse> {

        return await this._link.post<AccountHistoryRecordResponse>(body, 'account', 'history', 'record');
    }

    public async detailAccount(body: DetailAccountRequest): Promise<CommonAccountStatusDetailResponse> {

        return await this._link.post<CommonAccountStatusDetailResponse>(body, 'account', 'detail');
    }

    public async limboAccount(body: LimboAccountRequest): Promise<LimboAccountResponse> {

        return await this._link.post<LimboAccountResponse>(body, 'account', 'limbo');
    }

    public async queryAccount(body: QueryAccountRequest): Promise<QueryAccountResponse> {

        return await this._link.post<QueryAccountResponse>(body, 'account', 'query');
    }

    public async registerAccount(body: RegisterAccountRequest): Promise<CommonRegisterAccountResponse> {

        return await this._link.post<CommonRegisterAccountResponse>(body, 'account', 'register');
    }

    public async updateAccount(body: UpdateAccountRequest): Promise<CommonAccountStatusDetailResponse> {

        return await this._link.post<CommonAccountStatusDetailResponse>(body, 'account', 'update');
    }

    public async verifyAccount(body: VerifyAccountRequest): Promise<VerifyAccountResponse> {

        return await this._link.post<VerifyAccountResponse>(body, 'account', 'verify');
    }

    public async queryOrganization(body: QueryOrganizationRequest): Promise<QueryOrganizationResponse> {

        return await this._link.post<QueryOrganizationResponse>(body, 'organization', 'query');
    }

    public async inplodeOrganization(body: InplodeOrganizationRequest): Promise<InplodeOrganizationResponse> {

        return await this._link.post<InplodeOrganizationResponse>(body, 'organization', 'inplode');
    }

    public async registerSubAccount(body: RegisterSubAccountRequest): Promise<RegisterSubAccountResponse> {

        return await this._link.post<RegisterSubAccountResponse>(body, 'organization', 'register', 'sub-account');
    }

    public async verifyOrganization(name: string): Promise<VerifyOrganizationResponse> {

        return await this._link.get<VerifyOrganizationResponse>('organization', 'verify', name);
    }

    public async validateBridge(body: ValidateBridgeRequest): Promise<ValidateBridgeResponse> {

        return await this._link.post<ValidateBridgeResponse>(body, 'validate', 'bridge');
    }

    public async validateDirect(body: ValidateDirectRequest): Promise<ValidateDirectResponse> {

        return await this._link.post<ValidateDirectResponse>(body, 'validate', 'direct');
    }

    public joinPath(...path: string[]): string {

        return this._link.joinPath(...path);
    }
}
