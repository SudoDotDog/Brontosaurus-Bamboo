/**
 * @author WMXPY
 * @namespace Bamboo
 * @description Query
 * @override Example
 */

import { Bamboo } from "../src/bamboo";

(async () => {

    const key: string = process.env.KEY as string;
    const bamboo: Bamboo = Bamboo.create('http://localhost:8500', key);

    try {

        console.log(await bamboo.queryDecorator({ activation: 'inactive' }));
        console.log(await bamboo.queryGroup({}));
        console.log(await bamboo.queryNamespace({}));
        console.log(await bamboo.queryTag({}));
    } catch (err) {

        console.log(err);
    }
})();
