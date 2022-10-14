import {describe, expect, test} from '@jest/globals';
import {hello} from '../build/app';

describe('sum module', () => {
  test('returns the string hello', () => {
    expect(hello()).toBe('Hello World');
  });
});