export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-uploads-oci-dev-2"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://6rjfm74mpb.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_hCNoe4ORO",
    APP_CLIENT_ID: "3bqt1pu214ca0evo1jtdub8tlq",
    IDENTITY_POOL_ID: "us-east-1:9c000fde-778f-4dd4-9b7b-520084811045"
  }
};
