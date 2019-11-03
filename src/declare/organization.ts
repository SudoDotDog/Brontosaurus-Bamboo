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

    readonly ownerDisplayName?: string;
    readonly ownerEmail?: string;
    readonly ownerPhone?: string;
};
