# gitlab-ci-lint-es



Gitlab-ci cli to lint .gitlab-ci.yml files

## Usage

### Install
```Shell
npm install --save-dev gitlab-ci-lint-es
```

### CLI
```
  Usage: npx gitlab-ci-lint-es [options] <file>

  Options:

    -h, --help       output usage information
    -V, --version    output the version number
    -u, --url [URL]  Use alternative Gitlab URL
```

#### examples
* `.gitlab-ci.yml` is in the current directory
```
gitlab-ci-lint-es
```

* Alternative file
```
gitlab-ci-lint-es <filename>
```

* Alternative Gitlab url
```
gitlab-ci-lint-es --url https://git.my.corp
```

### API

```
import { lintFile } from 'gitlab-ci-lint-es';

gitlabCILint.lintFile('.gitlab-ci.yml')
  .then((result) => console.log(result))
```
