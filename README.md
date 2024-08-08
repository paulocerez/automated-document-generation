This repo utilizes the PandaDoc API to automatically create, send, and download (if signature.status === complete) a PDF file based on a template created in the PandaDoc interface. Written in TypeScript.

In order to listen for document status updates, you have to create a webhook in the Webhooks section of PandaDoc, see here: https://developers.pandadoc.com/docs/listen-document-status-changes