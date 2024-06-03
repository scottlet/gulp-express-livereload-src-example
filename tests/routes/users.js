/*global describe, it */
import { spy } from 'sinon';
import { expect } from 'chai';
import users from '../../../app/routes/users';

describe('Routes', () => {
  describe('GET Users', () => {
    let options = {};
    const req = {};
    const res = {
      send: (path, opts) => {
        options = opts;
      }
    };
    const ourSpy = spy(res, 'send');
    beforeEach(() => {
      ourSpy.resetHistory();
      // @ts-ignore
      users(req, res);
    });
    it('options should be undefined', () => {
      expect(options).to.equal(undefined);
    });

    it('should set calledOnce to true', () => {
      expect(ourSpy.calledOnce).to.equal(true);
    });
  });
});
