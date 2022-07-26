import AWS from "aws-sdk";
import fs from "fs";

const region = process.env.AWS_REGION;
const bucketName = process.env.BUCKET_NAME;
const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

const s3 = new AWS.S3({
  region,
  accessKeyId,
  secretAccessKey,
  signatureVersion: "v4",
});

export async function uploadFile(file) {
  const fileStream = fs.createReadStream(file.path);

  const params = {
    Bucket: bucketName,
    Body: fileStream,
    Key: file.filename,
    ContentType: "image/png",
  };

  const uploadURL = await s3.upload(params).promise();
  return uploadURL;
}

export async function deleteFile(key) {
  const params = {
    Bucket: bucketName,
    Key: key,
  };
  const data = await s3.deleteObject(params).promise();
  console.log("🚀 ~ file: s3.js ~ line 36 ~ deleteFile ~ data", data);
  return data;
}
