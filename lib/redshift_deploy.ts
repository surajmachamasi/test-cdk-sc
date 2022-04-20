
import { Duration, Stack, StackProps } from 'aws-cdk-lib';
import { aws_redshift as redshift } from 'aws-cdk-lib';
import { Construct } from 'constructs';
export class RedShiftStack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
      super(scope, id, props);

      const cfnCluster = new redshift.CfnCluster(this, 'MyCfnCluster', {
        clusterType: 'clusterType',
        dbName: 'dbName',
        masterUsername: 'masterUsername',
        masterUserPassword: 'masterUserPassword',
        nodeType: 'nodeType',
      
        // the properties below are optional
        allowVersionUpgrade: false,
        aquaConfigurationStatus: 'aquaConfigurationStatus',
        automatedSnapshotRetentionPeriod: 123,
        availabilityZone: 'availabilityZone',
        availabilityZoneRelocation: false,
        availabilityZoneRelocationStatus: 'availabilityZoneRelocationStatus',
        classic: false,
        clusterIdentifier: 'clusterIdentifier',
        clusterParameterGroupName: 'clusterParameterGroupName',
        clusterSecurityGroups: ['clusterSecurityGroups'],
        clusterSubnetGroupName: 'clusterSubnetGroupName',
        clusterVersion: 'clusterVersion',
        deferMaintenance: false,
        deferMaintenanceDuration: 123,
        deferMaintenanceEndTime: 'deferMaintenanceEndTime',
        deferMaintenanceStartTime: 'deferMaintenanceStartTime',
        destinationRegion: 'destinationRegion',
        elasticIp: 'elasticIp',
        encrypted: false,
        enhancedVpcRouting: false,
        hsmClientCertificateIdentifier: 'hsmClientCertificateIdentifier',
        hsmConfigurationIdentifier: 'hsmConfigurationIdentifier',
        iamRoles: ['iamRoles'],
        kmsKeyId: 'kmsKeyId',
        loggingProperties: {
          bucketName: 'bucketName',
      
          // the properties below are optional
          s3KeyPrefix: 's3KeyPrefix',
        },
        maintenanceTrackName: 'maintenanceTrackName',
        manualSnapshotRetentionPeriod: 123,
        numberOfNodes: 123,
        ownerAccount: 'ownerAccount',
        port: 123,
        preferredMaintenanceWindow: 'preferredMaintenanceWindow',
        publiclyAccessible: false,
        resourceAction: 'resourceAction',
        revisionTarget: 'revisionTarget',
        rotateEncryptionKey: false,
        snapshotClusterIdentifier: 'snapshotClusterIdentifier',
        snapshotCopyGrantName: 'snapshotCopyGrantName',
        snapshotCopyManual: false,
        snapshotCopyRetentionPeriod: 123,
        snapshotIdentifier: 'snapshotIdentifier',
        tags: [{
          key: 'key',
          value: 'value',
        }],
        vpcSecurityGroupIds: ['vpcSecurityGroupIds'],
      });

    

    
    }
}