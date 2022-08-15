import { v4 } from 'uuid';
import { S3 } from 'aws-sdk';



const s3Client = new S3();



async function handler(event: any, context: any) {
    const buckets = await s3Client.listBuckets().promise();
    return {
        statusCode: 200,
        body: `uuid string: ${v4()} & buckets: ${JSON.stringify(buckets.Buckets)}`
    }
}

export { handler }