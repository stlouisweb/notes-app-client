export default {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-api-prod-serverlessdeploymentbucket-1fsjyoqmvuljv"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://kjg8mr21gg.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_xfxD09T5e",
    APP_CLIENT_ID: "7rlefscsnip3p2931p7fb32ae9",
    IDENTITY_POOL_ID: "us-east-1:c87860c6-430d-4f03-831f-3d43424ab740"
  }
};
