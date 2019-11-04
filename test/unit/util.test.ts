/**
 * @author WMXPY
 * @namespace Bamboo
 * @description Util
 * @override Unit
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { validateGreenPath } from '../../src/util';

describe('Given [Util] Help Functions', (): void => {

    const chance: Chance.Chance = new Chance('bamboo-util');

    it('should be able to validate green path - 1', (): void => {

        const url: string = 'https://example.com';
        const url2: string = 'http://example.com';
        const url3: string = 'http://example.com/sub-path';

        // tslint:disable-next-line: no-unused-expression
        expect(validateGreenPath(url)).to.be.true;
        // tslint:disable-next-line: no-unused-expression
        expect(validateGreenPath(url2)).to.be.true;
        // tslint:disable-next-line: no-unused-expression
        expect(validateGreenPath(url3)).to.be.true;
    });

    it('should be able to validate green path - 2', (): void => {

        const url: string = 'ftp://example.com';
        const url2: string = 'http/example.com';
        const url3: string = 'https://hello';

        // tslint:disable-next-line: no-unused-expression
        expect(validateGreenPath(url)).to.be.false;
        // tslint:disable-next-line: no-unused-expression
        expect(validateGreenPath(url2)).to.be.false;
        // tslint:disable-next-line: no-unused-expression
        expect(validateGreenPath(url3)).to.be.false;
    });
});
