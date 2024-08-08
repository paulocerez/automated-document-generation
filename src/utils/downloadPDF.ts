import { API_KEY } from "../api/apiConfig";

export async function downloadDocument(documentId: string): Promise<void> {
  const response = await fetch(`https://api.pandadoc.com/public/v1/documents/${documentId}/download`,
    {
      method: "GET",
      headers: {
        accept: 'application/json',
        Authorization: `API-Key ${API_KEY}`
      }
    }
  )

  if (response.ok) {
    const blob = await response.blob();
    const downloadUrl = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = downloadUrl;
    a.download = `${documentId}.pdf`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    console.log('Document downloaded as PDF');
  } else {
    console.error('Failed to download document:', response.statusText);
  }
}