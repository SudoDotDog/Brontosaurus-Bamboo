/**
 * @author WMXPY
 * @namespace Bamboo
 * @description Bamboo
 */

import { LimboAccountResponse, QueryAccountRequest, QueryAccountResponse, RegisterAccountRequest, UpdateAccountRequest, UpdateAccountResponse, VerifyAccountResponse } from "./declare/account";
import { AccountGroupReplaceRequest, AccountGroupReplaceResponse } from "./declare/account-group";
import { AccountTagReplaceRequest, AccountTagReplaceResponse } from "./declare/account-tag";
import { FetchPublicKeyRequest, FetchPublicKeyResponse } from "./declare/application";
import { CommonAccountStatusDetailResponse, CommonRegisterAccountResponse, IdentityOptions, IdentityUsernameNamespace } from "./declare/common";
import { QueryDecoratorRequest, QueryDecoratorResponse } from "./declare/decorator";
import { QueryGroupRequest, QueryGroupResponse } from "./declare/group";
import { QueryNamespaceRequest, QueryNamespaceResponse } from "./declare/namespace";
import { InplodeOrganizationRequest, InplodeOrganizationResponse, QueryOrganizationRequest, QueryOrganizationResponse, RegisterSubAccountRequest, RegisterSubAccountResponse, VerifyOrganizationResponse } from "./declare/organization";
import { QueryTagRequest, QueryTagResponse } from "./declare/tag";
import { ValidateBridgeRequest, ValidateBridgeResponse, ValidateDirectRequest, ValidateDirectResponse } from "./declare/validate";
import { GreenLink } from "./link";
import { ParseCombinedResult, parseUsernameNamespaceCombined } from "./parse";

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

    public async replaceAccountTags(identity: IdentityOptions, body: AccountTagReplaceRequest): Promise<AccountTagReplaceResponse> {

        return await this._link.post<AccountTagReplaceResponse>(this._buildIdentityBody(identity, body), 'account', 'tag', 'replace');
    }

    public async replaceAccountGroups(identity: IdentityOptions, body: AccountGroupReplaceRequest): Promise<AccountGroupReplaceResponse> {

        return await this._link.post<AccountGroupReplaceResponse>(this._buildIdentityBody(identity, body), 'account', 'group', 'replace');
    }

    public async detailAccount(identity: IdentityOptions): Promise<CommonAccountStatusDetailResponse> {

        return await this._link.post<CommonAccountStatusDetailResponse>(this._buildIdentityBody(identity), 'account', 'detail');
    }

    public async limboAccount(identity: IdentityOptions): Promise<LimboAccountResponse> {

        return await this._link.post<LimboAccountResponse>(this._buildIdentityBody(identity), 'account', 'limbo');
    }

    public async queryAccount(body: QueryAccountRequest): Promise<QueryAccountResponse> {

        const fixedRequest: QueryAccountRequest = {
            organizations: [],
            groups: [],
            tags: [],
            ...body,
        };
        return await this._link.post<QueryAccountResponse>(fixedRequest, 'account', 'query');
    }

    public async registerAccount(identity: IdentityOptions, body: RegisterAccountRequest): Promise<CommonRegisterAccountResponse> {

        return await this._link.post<CommonRegisterAccountResponse>(this._buildIdentityBody(identity, body), 'account', 'register');
    }

    public async updateAccount(identity: IdentityOptions, body: UpdateAccountRequest): Promise<UpdateAccountResponse> {

        return await this._link.post<UpdateAccountResponse>(this._buildIdentityBody(identity, body), 'account', 'update');
    }

    public async verifyAccount(identity: IdentityOptions): Promise<VerifyAccountResponse> {

        return await this._link.post<VerifyAccountResponse>(this._buildIdentityBody(identity), 'account', 'verify');
    }

    public async fetchPublicKey(body: FetchPublicKeyRequest): Promise<FetchPublicKeyResponse> {

        return await this._link.post<FetchPublicKeyResponse>(body, 'application', 'public-key', 'fetch');
    }

    public async queryOrganization(body: QueryOrganizationRequest): Promise<QueryOrganizationResponse> {

        const fixedRequest: QueryOrganizationRequest = {
            tags: [],
            ...body,
        };
        return await this._link.post<QueryOrganizationResponse>(fixedRequest, 'organization', 'query');
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

    public async queryDecorator(body: QueryDecoratorRequest): Promise<QueryDecoratorResponse> {

        return await this._link.post<QueryDecoratorResponse>(body, 'decorator', 'query');
    }

    public async queryGroup(body: QueryGroupRequest): Promise<QueryGroupResponse> {

        return await this._link.post<QueryGroupResponse>(body, 'group', 'query');
    }

    public async queryNamespace(body: QueryNamespaceRequest): Promise<QueryNamespaceResponse> {

        return await this._link.post<QueryNamespaceResponse>(body, 'namespace', 'query');
    }

    public async queryTag(body: QueryTagRequest): Promise<QueryTagResponse> {

        return await this._link.post<QueryTagResponse>(body, 'tag', 'query');
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

    private _buildIdentityBody<T extends Record<string, any>>(identity: IdentityOptions, body?: T): T & IdentityUsernameNamespace {


        const filledBody: T = body ?? {} as T;
        if (identity.type === 'username-namespace') {
            return {
                username: identity.username,
                namespace: identity.namespace,
                ...filledBody,
            };
        }

        const parsed: ParseCombinedResult = parseUsernameNamespaceCombined(identity.combined);
        return {
            username: parsed.username,
            namespace: parsed.namespace,
            ...filledBody,
        };
    }
}
