import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class NonkycExchangeApi implements ICredentialType {
        name = 'N8nDevNonkycExchangeApi';

        displayName = 'Nonkyc Exchange API';

        icon: Icon = { light: 'file:../nodes/NonkycExchange/nonkyc-exchange.png', dark: 'file:../nodes/NonkycExchange/nonkyc-exchange.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Nonkyc Exchange API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-API-KEY': '={{$credentials.apiKey}}',
                        },
                },
        };


}
