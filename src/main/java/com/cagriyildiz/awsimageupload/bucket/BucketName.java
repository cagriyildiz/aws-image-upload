package com.cagriyildiz.awsimageupload.bucket;

public enum BucketName {

    PROFILE_IMAGE("cagriyildiz-image-upload");

    private final String bucketName;

    BucketName(String bucketName) {
        this.bucketName = bucketName;
    }

    public String getBucketName() {
        return bucketName;
    }
}
