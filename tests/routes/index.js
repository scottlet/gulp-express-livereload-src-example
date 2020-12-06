/*global describe, it */
import sinon from 'sinon';
import { expect } from 'chai';
import index from '../../../app/routes/index';

describe('Routes', () => {
    describe('GET Index', () => {
        it('should respond', () => {
            const req = {};
            const res = {};
            const spy = sinon.spy();

            res.render = (path, opts) => {
                spy();
                expect(opts.testableProperty).to.equal(true);
                expect(opts.helpers.capitalise('Enjoy!')).to.equal('ENJOY!');
                expect(spy.calledOnce).to.equal(true);
            };

            index(req, res);
        });
    });
});
