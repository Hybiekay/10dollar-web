import { Appwrite } from "appwrite";

const sdk = new Appwrite();

sdk
    .setEndpoint('hhttps://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('641cad6f2169798a4400') // Your project ID
;


export const account = sdk.account;