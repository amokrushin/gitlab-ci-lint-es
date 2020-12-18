import fs from 'fs';
import got from 'got';

export function lint(content, baseURL = 'https://gitlab.com') {
  return got({
    url: `${baseURL}/api/v4/ci/lint`,
    method: 'POST',
    json: {
      content,
    },
  }).json();
}

export function lintFile(filename, baseURL) {
  return fs.promises.readFile(filename).then((data) => lint(data.toString(), baseURL));
}
