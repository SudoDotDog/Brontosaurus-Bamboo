/**
 * @author WMXPY
 * @namespace Bamboo
 * @description Bamboo
 * @override Unit
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { Bamboo } from '../../src/bamboo';

describe('Given {Bamboo} Class', (): void => {

    const chance: Chance.Chance = new Chance('bamboo-bamboo');

    it('should be able to construct', (): void => {

        const path: string = chance.string();
        const auth: string = chance.string();

        const bamboo: Bamboo = Bamboo.create(path, auth);

        expect(bamboo).to.be.instanceOf(Bamboo);
    });
});
