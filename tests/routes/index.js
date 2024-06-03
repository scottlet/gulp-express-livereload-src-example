/*global describe, it */
import { spy } from 'sinon';
import { expect } from 'chai';
import index from '../../../app/routes/index';

describe('Routes', () => {
  describe('GET Index', () => {
    let options = {};
    const req = {};
    const res = {
      render: (path, opts) => {
        options = opts;
      }
    };
    const ourSpy = spy(res, 'render');
    beforeEach(() => {
      ourSpy.resetHistory();
      // @ts-ignore
      index(req, res);
    });
    it('should set testableProperty to true', () => {
      expect(options.testableProperty).to.equal(true);
    });
    it('should capitalise ENJOY!', () => {
      expect(options.helpers.capitalise('Enjoy!')).to.equal('ENJOY!');
    });
    it('should set calledOnce to true', () => {
      expect(ourSpy.calledOnce).to.equal(true);
    });
  });
});
