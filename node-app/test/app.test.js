import test from 'node:test';
import assert from 'node:assert/strict';
import { add, multiply, formatGreeting } from '../src/math.js';

test('add function correctly sums two numbers', () => {
  assert.strictEqual(add(2, 3), 5);
  assert.strictEqual(add(-1, 1), 0);
});

test('multiply function correctly multiplies two numbers', () => {
  assert.strictEqual(multiply(3, 4), 12);
  assert.strictEqual(multiply(0, 5), 0);
});

test('formatGreeting creates expected greeting', () => {
  assert.strictEqual(formatGreeting('Nimbus CI'), 'Hello from Nimbus CI!');
});
