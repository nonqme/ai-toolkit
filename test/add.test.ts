import assert from 'node:assert';
import { describe, it } from 'node:test';

import { add } from '../src/index.js';

describe('add', () => {
  it('should return the sum of two numbers', () => {
    const result = add(1, 2);
    assert.strictEqual(result, 3);
  });

  it('should return the sum of two negative numbers', () => {
    const result = add(-1, -2);
    assert.strictEqual(result, -3);
  });

  it('should return the sum of a positive and a negative number', () => {
    const result = add(1, -2);
    assert.strictEqual(result, -1);
  });
});
