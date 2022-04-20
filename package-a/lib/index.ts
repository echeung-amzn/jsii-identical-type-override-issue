import { MathExpression, Metric } from 'aws-cdk-lib/aws-cloudwatch';

export type MetricWithAlarmSupport = Metric | MathExpression;

export class TestClass {
  methodWithUnionType(metric: MetricWithAlarmSupport): MetricWithAlarmSupport {
    return metric;
  }

  methodWithExplicitTypes(metric: Metric | MathExpression): Metric | MathExpression {
    return metric;
  }
}
