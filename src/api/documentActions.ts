import { getApiInstance } from './apiConfig';
import * as pd_api from 'pandadoc-node-client';

// functions to create and send documents based on a template

export async function createAndSendDocument(): Promise<string> {
  const apiInstance = getApiInstance();
  const documentCreateRequest: pd_api.DocumentCreateRequest = {
    name: 'Your Document Name',
    templateUuid: process.env.TEMPLATE_ID,
    recipients: [
      {
        email: 'recipient@example.com',
        firstName: 'RecipientFirstName',
        lastName: 'RecipientLastName',
        role: 'user',
        signingOrder: 1,
      }
    ],
    metadata: {
      customData: '12345'
    }
  };

  const createdDocument = await apiInstance.createDocument({ documentCreateRequest });
  console.log('Document created with ID:', createdDocument.id);

  if (createdDocument.id) {
    await sendDocument(createdDocument.id);
    return createdDocument.id
  } else {
    console.error('Failed to create document');
    throw new Error('Failed to create document: No document ID returned');
  }
}

export async function sendDocument(documentId: string): Promise<void> {
  const apiInstance = getApiInstance();
  const documentSendRequest: pd_api.DocumentSendRequest = {
    silent: false,
    message: 'Please review and sign this document.'
  };

  await apiInstance.sendDocument({ id: documentId, documentSendRequest });
  console.log('Document sent to recipient');
}