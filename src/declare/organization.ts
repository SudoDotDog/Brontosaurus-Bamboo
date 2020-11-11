/**
 * @author WMXPY
 * @namespace Declare
 * @description Organization
 */

import { Basics, CommonRegisterAccountResponse } from "./common";

export type OrganizationLite = {

    readonly name: string;
};

export type InplodeOrganizationRequest = {

    readonly organizationName: string;
    readonly organizationTags: string[];
    readonly ownerInfos: Record<string, Basics>;
    readonly ownerUsername: string;
    readonly ownerNamespace: string;
    readonly ownerGroups: string[];
    readonly ownerTags: string[];

    readonly ownerPassword?: string;
    readonly ownerDisplayName?: string;
    readonly ownerEmail?: string;
    readonly ownerPhone?: string;
};

export type InplodeOrganizationResponse = {

    readonly organization: string;
    readonly account: string;
    readonly namespace: string;
    readonly tempPassword?: string;
};

export type QueryOrganizationRequest = {

    readonly activation?: 'active' | 'inactive';
    readonly tags?: string[];
};

export type QueryOrganizationElement = {

    readonly name: string;
};

export type QueryOrganizationResponse = {

    readonly organizations: QueryOrganizationElement[];
};

export type RegisterSubAccountRequest = {

    readonly organization: string;

    readonly username: string;
    readonly namespace: string;
    readonly userInfos: Record<string, Basics>;
    readonly userGroups: string[];
    readonly userTags: string[];

    readonly userDisplayName?: string;
    readonly userEmail?: string;
    readonly userPhone?: string;
};

export type RegisterSubAccountResponse = CommonRegisterAccountResponse;

export type VerifyOrganizationResponse = {

    readonly valid: false;
} | {

    readonly valid: true;
    readonly organization: OrganizationLite;
};

export type OrganizationAddTagRequest = {

    readonly organization: string;
    readonly tag: string;
};

export type OrganizationAddTagResponse = {

    readonly organization: string;
};

export type OrganizationRemoveTagRequest = {

    readonly organization: string;
    readonly tag: string;
};

export type OrganizationRemoveTagResponse = {

    readonly organization: string;
};
