/**
 * @author WMXPY
 * @namespace Declare
 * @description Organization
 */

import { Basics } from "./common";

export type InplodeOrganizationRequest = {

    readonly organizationName: string;
    readonly organizationTags: string[];
    readonly ownerInfos: Record<string, Basics>;
    readonly ownerUsername: string;
    readonly ownerGroups: string[];
    readonly ownerTags: string[];

    readonly ownerDisplayName?: string;
    readonly ownerEmail?: string;
    readonly ownerPhone?: string;
};

export type InplodeOrganizationResponse = {

    readonly account: string;
    readonly organization: string;
    readonly tempPassword: string;
};

export type QueryOrganizationRequest = {

    readonly tags: string[];
};

export type QueryOrganizationResponse = {

    readonly names: string[];
};
