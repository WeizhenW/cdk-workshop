import { aws_apigateway, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { ApiGateway } from 'aws-cdk-lib/aws-events-targets';

export class CdkWorkshopStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // define a lambda
    const hello = new lambda.Function(this, 'HelloHandler', {
      runtime: lambda.Runtime.NODEJS_16_X,
      code: lambda.Code.fromAsset('lambda'),
      handler: 'hello.handler'
    });

    // define an api gateway
    new aws_apigateway.LambdaRestApi(this, 'Endpoint', {
      handler: hello
    });
  }
}
