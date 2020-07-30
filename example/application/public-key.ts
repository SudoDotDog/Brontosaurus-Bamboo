/**
 * @author WMXPY
 * @namespace Bamboo_Application
 * @description Public Key
 * @override Example
 */

import { Bamboo } from "../../src/bamboo";
import { FetchPublicKeyResponse } from "../../src/declare/application";

(async () => {

    const key: string = process.env.KEY as string;
    const bamboo: Bamboo = Bamboo.create('http://localhost:8500', key);

    try {

        const result: FetchPublicKeyResponse = await bamboo.fetchPublicKey({

            applicationKey: 'BRONTOSAURUS_RED',
        });
        console.log(JSON.stringify(result, null, 2));
    } catch (err) {

        console.log(err);
    }
})();
