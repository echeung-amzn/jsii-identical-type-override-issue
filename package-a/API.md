# API Reference <a name="API Reference" id="api-reference"></a>



## Classes <a name="Classes" id="Classes"></a>

### TestClass <a name="TestClass" id="package-a.TestClass"></a>

#### Initializers <a name="Initializers" id="package-a.TestClass.Initializer"></a>

```typescript
import { TestClass } from 'package-a'

new TestClass()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#package-a.TestClass.methodWithExplicitTypes">methodWithExplicitTypes</a></code> | *No description.* |
| <code><a href="#package-a.TestClass.methodWithUnionType">methodWithUnionType</a></code> | *No description.* |

---

##### `methodWithExplicitTypes` <a name="methodWithExplicitTypes" id="package-a.TestClass.methodWithExplicitTypes"></a>

```typescript
public methodWithExplicitTypes(metric: Metric | MathExpression): Metric | MathExpression
```

###### `metric`<sup>Required</sup> <a name="metric" id="package-a.TestClass.methodWithExplicitTypes.parameter.metric"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.Metric | aws-cdk-lib.aws_cloudwatch.MathExpression

---

##### `methodWithUnionType` <a name="methodWithUnionType" id="package-a.TestClass.methodWithUnionType"></a>

```typescript
public methodWithUnionType(metric: Metric | MathExpression): Metric | MathExpression
```

###### `metric`<sup>Required</sup> <a name="metric" id="package-a.TestClass.methodWithUnionType.parameter.metric"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.Metric | aws-cdk-lib.aws_cloudwatch.MathExpression

---





