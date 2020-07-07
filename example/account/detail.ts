/**
 * @author WMXPY
 * @namespace Bamboo_Account
 * @description Detail
 * @override Example
 */

import { Bamboo } from "../../src/bamboo";
import { CommonAccountDetailResponse } from "../../src/declare/common";

(async () => {

    const key: string = process.env.KEY as string;
    const bamboo: Bamboo = Bamboo.create('http://localhost:8500', key);

    try {

        const result: CommonAccountDetailResponse = await bamboo.detailAccount({

            type: 'username-namespace',

            username: 'admin',
            namespace: 'brontosaurus.admin',
        });
        console.log(JSON.stringify(result, null, 2));
    } catch (err) {

        console.log(err);
    }
})();
