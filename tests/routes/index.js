'use strict';

/*global describe, it */
var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;

var index = require('../../../app/routes/index');

describe('Routes', () => {
    describe('GET Index', () => {
        it('should respond', () => {
            var req;
            var res;
            var spy;

            req = res = {};
            spy = sinon.spy();
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
