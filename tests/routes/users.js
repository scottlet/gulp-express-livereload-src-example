/*global describe, it */
import sinon from 'sinon';
import { expect } from 'chai';

import users from '../../../app/routes/users';

describe('Routes', () => {
    describe('GET Index', () => {
        it('should respond', () => {
            const req = {};
            const res = {};
            const spy = res.send = sinon.spy();

            users(req, res);
            expect(spy.calledOnce).to.equal(true);
        });
    });
});
