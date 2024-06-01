/*global describe, it */
import { spy } from 'sinon';
import { expect } from 'chai';

import users from '../../../app/routes/users';

describe('Routes', () => {
  describe('GET Index', () => {
    it('should respond', () => {
      const req = {};
      const res = {};
      res.send = spy();

      // @ts-ignore
      users(req, res);
      expect(res.send.calledOnce).to.equal(true);
    });
  });
});
