import { MathExpression, Metric } from 'aws-cdk-lib/aws-cloudwatch';
import { MetricWithAlarmSupport, TestClass } from 'package-a';

export class ExtendedTestClass extends TestClass {
  /* override */ methodWithUnionType(metric: MetricWithAlarmSupport): MetricWithAlarmSupport {
    return metric;
  }

  /* override */ methodWithExplicitTypes(metric: Metric | MathExpression): Metric | MathExpression {
    return metric;
  }
}
