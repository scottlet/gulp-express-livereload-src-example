/*global describe, it */
import { spy } from 'sinon';
import { expect } from 'chai';
import index from '../../../app/routes/index';

describe('Routes', () => {
  describe('GET Index', () => {
    it('should respond', () => {
      const req = {};
      const res = {};
      const ourSpy = spy();

      res.render = (path, opts) => {
        spy();
        expect(opts.testableProperty).to.equal(true);
        expect(opts.helpers.capitalise('Enjoy!')).to.equal('ENJOY!');
        expect(ourSpy.calledOnce).to.equal(true);
      };

      // @ts-ignore
      index(req, res);
    });
  });
});
