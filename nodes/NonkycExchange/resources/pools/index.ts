import type { INodeProperties } from 'n8n-workflow';

export const poolsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Pools"
					]
				}
			},
			"options": [
				{
					"name": "Pool Getlist",
					"value": "Pool Getlist",
					"action": "List pools",
					"description": "Get list of liquidity pools available in nonkyc",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/pool/getlist"
						}
					}
				},
				{
					"name": "Get Pool",
					"value": "Get Pool",
					"action": "Get a pool info",
					"description": "Get liquidity pool by pool id or pool symbol",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/pool/info"
						}
					}
				},
				{
					"name": "GET Pool Trades",
					"value": "GET Pool Trades",
					"action": "List pool trades",
					"description": "Historical liquidity pool trade data for any given trading pair.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/pool/trades"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /pool/getlist",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pools"
					],
					"operation": [
						"Pool Getlist"
					]
				}
			}
		},
		{
			"displayName": "GET /pool/info",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pools"
					],
					"operation": [
						"Get Pool"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Pool id like '61d316e154a758877d2f689c'",
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
						"Pools"
					],
					"operation": [
						"Get Pool"
					]
				}
			}
		},
		{
			"displayName": "Symbol",
			"name": "symbol",
			"required": true,
			"description": "Pool symbol like 'BTC/USDT'",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "symbol",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pools"
					],
					"operation": [
						"Get Pool"
					]
				}
			}
		},
		{
			"displayName": "GET /pool/trades",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pools"
					],
					"operation": [
						"GET Pool Trades"
					]
				}
			}
		},
		{
			"displayName": "Ticker ID",
			"name": "ticker_id",
			"required": true,
			"description": "Can be either formatted as BTC_USDT or BTC/USDT",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "ticker_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pools"
					],
					"operation": [
						"GET Pool Trades"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pools"
					],
					"operation": [
						"GET Pool Trades"
					]
				}
			}
		},
];
