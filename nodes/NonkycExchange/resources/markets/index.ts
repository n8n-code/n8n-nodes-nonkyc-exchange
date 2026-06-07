import type { INodeProperties } from 'n8n-workflow';

export const marketsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Markets"
					]
				}
			},
			"options": [
				{
					"name": "GET Market Getlist",
					"value": "GET Market Getlist",
					"action": "List markets",
					"description": "Get a list of markets available in nonkyc",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/market/getlist"
						}
					}
				},
				{
					"name": "Market Getbyid",
					"value": "Market Getbyid",
					"action": "Get a market info",
					"description": "Get market info by market id or market symbol",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/market/info"
						}
					}
				},
				{
					"name": "GET Market Orderbook",
					"value": "GET Market Orderbook",
					"action": "Get a Market orderbook",
					"description": "Get a market orderbook by market symbol or market id",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/market/orderbook"
						}
					}
				},
				{
					"name": "GET Market Candles",
					"value": "GET Market Candles",
					"action": "GET Market Candles",
					"description": "Get market candle ticks by market symbol",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/market/candles"
						}
					}
				},
				{
					"name": "GET Market Trades",
					"value": "GET Market Trades",
					"action": "List Market trades",
					"description": "Get the latest market trades",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/market/trades"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /market/getlist",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Markets"
					],
					"operation": [
						"GET Market Getlist"
					]
				}
			}
		},
		{
			"displayName": "GET /market/info",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Markets"
					],
					"operation": [
						"Market Getbyid"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Market id example '61d316e154a758877d2f689c'",
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
						"Markets"
					],
					"operation": [
						"Market Getbyid"
					]
				}
			}
		},
		{
			"displayName": "Symbol",
			"name": "symbol",
			"required": true,
			"description": "Market symbol such as 'TRX/USDT'",
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
						"Markets"
					],
					"operation": [
						"Market Getbyid"
					]
				}
			}
		},
		{
			"displayName": "GET /market/orderbook",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Markets"
					],
					"operation": [
						"GET Market Orderbook"
					]
				}
			}
		},
		{
			"displayName": "Market Id",
			"name": "marketId",
			"description": "the market id",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "marketId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Markets"
					],
					"operation": [
						"GET Market Orderbook"
					]
				}
			}
		},
		{
			"displayName": "Symbol",
			"name": "symbol",
			"required": true,
			"description": "the market symbol in this format 'BTC_USDT' or 'BTC/USDT'",
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
						"Markets"
					],
					"operation": [
						"GET Market Orderbook"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "limit the number of bids and the number of asks",
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
						"Markets"
					],
					"operation": [
						"GET Market Orderbook"
					]
				}
			}
		},
		{
			"displayName": "GET /market/candles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Markets"
					],
					"operation": [
						"GET Market Candles"
					]
				}
			}
		},
		{
			"displayName": "Symbol",
			"name": "symbol",
			"required": true,
			"description": "Market symbol ex 'BTC/USDT'",
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
						"Markets"
					],
					"operation": [
						"GET Market Candles"
					]
				}
			}
		},
		{
			"displayName": "From",
			"name": "from",
			"description": "Unix timestamp in seconds. ex 1696669429",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "from",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Markets"
					],
					"operation": [
						"GET Market Candles"
					]
				}
			}
		},
		{
			"displayName": "To",
			"name": "to",
			"description": "Unix timestamp in seconds. ex 1696669429",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "to",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Markets"
					],
					"operation": [
						"GET Market Candles"
					]
				}
			}
		},
		{
			"displayName": "Resolution",
			"name": "resolution",
			"required": true,
			"description": "Timeframe in minutes: 5, 15, 30, 60, 180, 240, 480, 720, 1440",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "resolution",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Markets"
					],
					"operation": [
						"GET Market Candles"
					]
				}
			}
		},
		{
			"displayName": "Count Back",
			"name": "countBack",
			"required": true,
			"description": "Number of candles to fetch",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "countBack",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Markets"
					],
					"operation": [
						"GET Market Candles"
					]
				}
			}
		},
		{
			"displayName": "First Data Request",
			"name": "firstDataRequest",
			"description": "0 for false, 1 for true",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "firstDataRequest",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Markets"
					],
					"operation": [
						"GET Market Candles"
					]
				}
			}
		},
		{
			"displayName": "GET /market/trades",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Markets"
					],
					"operation": [
						"GET Market Trades"
					]
				}
			}
		},
		{
			"displayName": "Symbol",
			"name": "symbol",
			"required": true,
			"description": "Market symbol ex BTC_USDT or BTC/USDT",
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
						"Markets"
					],
					"operation": [
						"GET Market Trades"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "Limit the number of results",
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
						"Markets"
					],
					"operation": [
						"GET Market Trades"
					]
				}
			}
		},
];
