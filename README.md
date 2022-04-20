# jsii-identical-type-override-issue

## Relevant issue

https://github.com/aws/jsii/issues/3495

```
👾 build » compile | jsii --silence-warnings=reserved-word --no-fix-peer-dependencies
[2022-04-20T11:19:54.849] [ERROR] jsii/compiler - Type model errors prevented the JSII assembly from being created
error JSII5003: "package-b.ExtendedTestClass#methodWithExplicitTypes" changes the return type to "aws-cdk-lib.aws_cloudwatch.Metric | aws-cdk-lib.aws_cloudwatch.MathExpression" when overriding package-a.TestClass. Change it to "aws-cdk-lib.aws_cloudwatch.Metric | aws-cdk-lib.aws_cloudwatch.MathExpression"
error JSII5003: "package-b.ExtendedTestClass#methodWithUnionType" changes the return type to "aws-cdk-lib.aws_cloudwatch.Metric | aws-cdk-lib.aws_cloudwatch.MathExpression" when overriding package-a.TestClass. Change it to "aws-cdk-lib.aws_cloudwatch.Metric | aws-cdk-lib.aws_cloudwatch.MathExpression"
```

## How to run

```sh
cd package-a
yarn install
yarn build
```

```sh
cd ../package-b
yarn install
```

Due to https://github.com/aws/jsii/issues/3319, the local package dependency doesn't work out of the box.

Edit `node_modules/jsii/lib/project-info.js` and comment out the following lines:

```js
if (!semver.satisfies(actualVersion, declaration)) {
    throw new Error(`Declared dependency on version ${declaration} of ${name}, but version ${actualVersion} was found`);
}
```

```
yarn build
```
