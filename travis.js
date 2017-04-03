// consider using https://github.com/patrickkettner/travis-ping instead..

"use strict";

const shell = require('shelljs'),
  path = require('path'),
  got = require('got');


console.log(`Fetching Git commit hash...`);
console.log( path.join(__dirname, '.'));
const gitCommitRet = shell.exec('git rev-parse HEAD', {
  cwd: path.join(__dirname, '.')
});

if (0 !== gitCommitRet.code) {
  console.error('Error getting git commit hash');

  process.exit(-1);
}

const gitCommitHash = gitCommitRet.stdout.trim();

console.log(`Git commit: ${gitCommitHash}`);

console.log('Calling Travis...');


got.post(`https://api.travis-ci.org/repo/mappinghub%2Fviews/requests`, {
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Travis-API-Version": "3",
    "Authorization": `token ${process.env.TRAVIS_API_TOKEN}`,
  },
  body: JSON.stringify({
    request: {
      message: `Trigger build at mappinghub/views commit: ${gitCommitHash}`,
      branch: 'master',
    },
  }),
})
.then(() => {
  console.log("Triggered build of mappinghub/views");
})
.catch((err) => {
  console.error(err);

  process.exit(-1);
});
