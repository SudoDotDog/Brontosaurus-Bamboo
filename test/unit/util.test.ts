/**
 * @author WMXPY
 * @namespace Bamboo
 * @description Util
 * @override Unit
 */

import { expect } from 'chai';
import { validateGreenPath } from '../../src/util';

describe('Given [Util] Help Functions', (): void => {

    it('should be able to validate green path - 1', (): void => {

        const url: string = 'https://example.com';
        const url2: string = 'http://example.com';
        const url3: string = 'http://example.com/sub-path';

        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        expect(validateGreenPath(url)).to.be.true;
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        expect(validateGreenPath(url2)).to.be.true;
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        expect(validateGreenPath(url3)).to.be.true;
    });

    it('should be able to validate green path - 2', (): void => {

        const url: string = 'ftp://example.com';
        const url2: string = 'http/example.com';

        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        expect(validateGreenPath(url)).to.be.false;
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        expect(validateGreenPath(url2)).to.be.false;
    });
});
