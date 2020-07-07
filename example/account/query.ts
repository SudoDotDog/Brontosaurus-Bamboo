/**
 * @author WMXPY
 * @namespace Bamboo_Account
 * @description Query
 * @override Example
 */

import { Bamboo } from "../../src/bamboo";
import { QueryAccountResponse } from "../../src/declare/account";

(async () => {

    const key: string = process.env.KEY as string;
    const bamboo: Bamboo = Bamboo.create('http://localhost:8500', key);

    try {

        const result: QueryAccountResponse = await bamboo.queryAccount({

            // spell-checker:disable
            activation: 'inactive',
            namespace: 'com.namespace.new',
            organizations: ['testclient6'],
            // spell-checker:enable
        });
        console.log(JSON.stringify(result, null, 2));
    } catch (err) {

        console.log(err);
    }
})();
