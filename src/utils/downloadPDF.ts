import fetch from "node-fetch";

const url: string = 'https://api.pandadoc.com/public/v1/documents';

interface Recipient {
  email: string;
  first_name: string;
  last_name: string;
}

interface RequestOptions {
  method: string;
  headers: {
    accept: string;
    Authorization: string;
    'Content-Type': string;
  };
  body: string;
}

async function createDocument(): Promise<void> {
  const options: RequestOptions = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      Authorization: process.env.API_KEY as string,
      'Content-Type': 'application/json',
    //   authorization: 'Bearer c8c933e938131ade9b1991cef3e2c49c4f526f72'
    },
    body: JSON.stringify({
      recipients: [
        {
          email: 'paulo.ramirez@octopusenergy.de',
          first_name: 'Paulo',
          last_name: 'Ramirez'
        }
      ],
      template_uuid: '7na2eHedVbeVkQ2aGL7B7d'
    })
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error('error:' + error);
  }
}

createDocument();