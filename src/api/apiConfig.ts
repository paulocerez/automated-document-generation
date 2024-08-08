import * as pd_api from 'pandadoc-node-client';

export const API_KEY = process.env.API_KEY

export const getApiInstance = (): pd_api.DocumentsApi => {
  const configuration = pd_api.createConfiguration({
    authMethods: { apiKey: `API-Key ${API_KEY}` }
  });
  return new pd_api.DocumentsApi(configuration);
};