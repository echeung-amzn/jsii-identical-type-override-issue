const { awscdk } = require('projen');

const CDK_VERSION = '2.18.0';

const project = new awscdk.AwsCdkConstructLibrary({
  name: 'package-a',
  repositoryUrl: 'https://github.com/echeung-amzn/jsii-identical-type-override-issue/tree/main/package-a',
  author: 'echeung-amzn',
  authorAddress: 'dummy@example.com',

  defaultReleaseBranch: 'main',
  majorVersion: 1,
  stability: 'experimental',

  cdkVersion: CDK_VERSION,

  srcdir: 'lib',
  testdir: 'test',
});

project.synth();
