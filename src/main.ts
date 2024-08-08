async function main() {
    const documentId = await createAndSendDocument();
    await pollDocumentStatus(documentId)
}

main()