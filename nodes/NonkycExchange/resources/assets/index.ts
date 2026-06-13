import type { INodeProperties } from 'n8n-workflow';

export const assetsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Assets"
					]
				}
			},
			"options": [
				{
					"name": "Asset Getlist",
					"value": "Asset Getlist",
					"action": "List assets",
					"description": "Get a list of assets available in nonkyc",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/asset/getlist"
						}
					}
				},
				{
					"name": "Asset Info",
					"value": "Asset Info",
					"action": "Get an asset info",
					"description": "Get an asset info by id or ticker",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/asset/info"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /asset/getlist",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Assets"
					],
					"operation": [
						"Asset Getlist"
					]
				}
			}
		},
		{
			"displayName": "GET /asset/info",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Assets"
					],
					"operation": [
						"Asset Info"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of an asset",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Assets"
					],
					"operation": [
						"Asset Info"
					]
				}
			}
		},
		{
			"displayName": "Ticker",
			"name": "ticker",
			"required": true,
			"description": "Ticker of an asset",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "ticker",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Assets"
					],
					"operation": [
						"Asset Info"
					]
				}
			}
		},
];
