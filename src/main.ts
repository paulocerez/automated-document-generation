import { createAndSendDocument } from "./api/documentActions";
import { pollDocumentStatus } from "./api/documentStatus";

async function main() {
    const documentId = await createAndSendDocument();
    await pollDocumentStatus(documentId)
}

main()