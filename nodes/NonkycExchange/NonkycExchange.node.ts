import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { assetsDescription } from './resources/assets';
import { marketsDescription } from './resources/markets';
import { poolsDescription } from './resources/pools';
import { accountPrivateDescription } from './resources/account-private';
import { supplementaryEndpointsDescription } from './resources/supplementary-endpoints';

export class NonkycExchange implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'nonkyc-exchange',
		name: 'N8nDevNonkycExchange',
		icon: { light: 'file:./nonkyc-exchange.svg', dark: 'file:./nonkyc-exchange.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'NonKYC privacy-focused cryptocurrency exchange for trading digital assets without identity verification requirements',
		defaults: { name: 'nonkyc-exchange' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevNonkycExchangeApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Assets",
					"value": "Assets",
					"description": "Public Asset endpoints"
				},
				{
					"name": "Markets",
					"value": "Markets",
					"description": "Public Market endpoints"
				},
				{
					"name": "Pools",
					"value": "Pools",
					"description": "Public Pool endpoints"
				},
				{
					"name": "Account Private",
					"value": "Account Private",
					"description": "Private exchange endpoints"
				},
				{
					"name": "Supplementary Endpoints",
					"value": "Supplementary Endpoints",
					"description": "Public exchange information"
				}
			],
			"default": ""
		},
		...assetsDescription,
		...marketsDescription,
		...poolsDescription,
		...accountPrivateDescription,
		...supplementaryEndpointsDescription
		],
	};
}
