import { downloadDocument } from '../utils/downloadPDF';
import { getApiInstance } from './apiConfig';

// active polling for docs status > see here: https://developers.pandadoc.com/docs/listen-document-status-changes

export async function pollDocumentStatus(documentId: string): Promise<void> {
  const apiInstance = getApiInstance();
  let status = '';
  const maxAttempts = 15;
  let attempts = 0;

  while (status !== 'document.completed' && attempts < maxAttempts) {
    await new Promise(resolve => setTimeout(resolve, 10000)); // 10 seconds delay before next status check
    const documentDetails = await apiInstance.getDocument({ id: documentId });
    status = documentDetails.status;
    console.log('Current document status:', status);
    attempts++;
  }

  if (status === 'document.completed') {
    await downloadDocument(documentId);
  } else {
    console.error('Document did not reach completed status within the expected time.');
  }
}