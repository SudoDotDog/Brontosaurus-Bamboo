/**
 * @author WMXPY
 * @namespace Bamboo
 * @description Link
 * @override Unit
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { GreenLink } from '../../src/link';

describe('Given {GreenLink} Class', (): void => {

    const chance: Chance.Chance = new Chance('bamboo-link');

    it('should be able to construct', (): void => {

        const path: string = `https://${chance.string()}.com`;
        const auth: string = `${chance.string()}:${chance.string()}`;

        const link: GreenLink = GreenLink.create(path, auth);

        expect(link).to.be.instanceOf(GreenLink);
    });

    it('should be able to throw error - 1', (): void => {

        const path: string = chance.string();
        const auth: string = `${chance.string()}:${chance.string()}`;

        const exec = () => {

            GreenLink.create(path, auth);
        };
        expect(exec).to.be.throw('[Brontosaurus-Bamboo] Invalid Path');
    });

    it('should be able to throw error - 2', (): void => {

        const path: string = `https://${chance.string()}.com`;
        const auth: string = chance.string();

        const exec = () => {

            GreenLink.create(path, auth);
        };
        expect(exec).to.be.throw('[Brontosaurus-Bamboo] Invalid Auth');
    });
});
