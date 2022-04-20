import { Duration, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Vpc } from 'aws-cdk-lib/aws-ec2';
import * as Kinesis from 'aws-cdk-lib/aws-kinesis';
import { BlockPublicAccess, Bucket, BucketAccessControl } from 'aws-cdk-lib/aws-s3';
import { aws_kinesisfirehose as kinesisfirehose } from 'aws-cdk-lib';
import { aws_athena as athena } from 'aws-cdk-lib';

export class AwsDeploymentStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
  const vpc = new Vpc(this,'myvpc',{
    maxAzs: 2
  })


  // kinesis data stream optional
  const kinesisStream = new  Kinesis.Stream(this, 'myfirstStream',{
    streamName: "my-awsome-stream",
    shardCount: 2,
    retentionPeriod: Duration.hours(2)
  });

  // s bucket 
  const s3bucket = new Bucket(this,"mybucket",{
    bucketName: "showcare-bucekt",
    versioned: true,
    blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
    accessControl: BucketAccessControl.BUCKET_OWNER_FULL_CONTROL,
  })

  // kinesis firehose with role arn with s3 configuration

  const amazonopensearchserviceDestinationConfigurationProperty: kinesisfirehose.CfnDeliveryStream.AmazonopensearchserviceDestinationConfigurationProperty = {
  indexName: 'indexName',
  roleArn: 'roleArn',
  s3Configuration: {
    bucketArn: 'bucketArn',
    roleArn: 'roleArn',

    // the properties below are optional
    bufferingHints: {
      intervalInSeconds: 123,
      sizeInMBs: 123,
    },
    cloudWatchLoggingOptions: {
      enabled: false,
      logGroupName: 'logGroupName',
      logStreamName: 'logStreamName',
    },
    compressionFormat: 'compressionFormat',
    encryptionConfiguration: {
      kmsEncryptionConfig: {
        awskmsKeyArn: 'awskmsKeyArn',
      },
      noEncryptionConfig: 'noEncryptionConfig',
    },
    errorOutputPrefix: 'errorOutputPrefix',
    prefix: 'prefix',
  },

  // the properties below are optional
  bufferingHints: {
    intervalInSeconds: 123,
    sizeInMBs: 123,
  },
  cloudWatchLoggingOptions: {
    enabled: false,
    logGroupName: 'logGroupName',
    logStreamName: 'logStreamName',
  },
  clusterEndpoint: 'clusterEndpoint',
  domainArn: 'domainArn',
  indexRotationPeriod: 'indexRotationPeriod',
  processingConfiguration: {
    enabled: false,
    processors: [{
      type: 'type',

      // the properties below are optional
      parameters: [{
        parameterName: 'parameterName',
        parameterValue: 'parameterValue',
      }],
    }],
  },
  retryOptions: {
    durationInSeconds: 123,
  },
  s3BackupMode: 's3BackupMode',
  typeName: 'typeName',
  vpcConfiguration: {
    roleArn: 'roleArn',
    securityGroupIds: ['securityGroupIds'],
    subnetIds: ['subnetIds'],
  },
};


//athena named query

const cfnNamedQuery = new athena.CfnNamedQuery(this, 'MyCfnNamedQuery', {
  database: 'database',
  queryString: 'queryString',

  // the properties below are optional
  description: 'description',
  name: 'name',
  workGroup: 'workGroup',
});



  }
}
