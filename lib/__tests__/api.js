import * as path from 'path';
import { fileURLToPath } from 'url';
import { lintFile } from '../api.js';

// eslint-disable-next-line no-underscore-dangle
const __dirname = path.dirname(fileURLToPath(import.meta.url));

describe('When file is valid', () => {
  test('returns valid status', () => lintFile(path.join(__dirname, 'good-gitlab-ci.yml'))
    .then((result) => {
      expect(result.status).toBe('valid');
    }));
  test('returns no errors', () => lintFile(path.join(__dirname, 'good-gitlab-ci.yml'))
    .then((result) => {
      expect(result.errors).toHaveLength(0);
    }));
});

describe('When file is invalid', () => {
  test('returns invalid status', () => lintFile(path.join(__dirname, 'bad-gitlab-ci.yml'))
    .then((result) => {
      expect(result.status).toBe('invalid');
    }));
  test('returns one error', () => lintFile(path.join(__dirname, 'bad-gitlab-ci.yml'))
    .then((result) => {
      expect(result.errors).toHaveLength(1);
      expect(result.errors[0]).toBe('jobs:job:variables config should be a hash of key value pairs');
    }));
});
