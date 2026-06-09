import type { INodeProperties } from 'n8n-workflow';

export const supplementaryEndpointsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Supplementary Endpoints"
					]
				}
			},
			"options": [
				{
					"name": "Get Exchange Info",
					"value": "Get Exchange Info",
					"action": "Get exchange Info",
					"description": "Informations about the exchange.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/info"
						}
					}
				},
				{
					"name": "Get Server Time",
					"value": "Get Server Time",
					"action": "Get Server Time",
					"description": "Get the exchange server time.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/time"
						}
					}
				},
				{
					"name": "GET Summary",
					"value": "GET Summary",
					"action": "CMC summary information for all markets",
					"description": "CMC description information for all markets.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/summary"
						}
					}
				},
				{
					"name": "GET Cmcassets",
					"value": "GET Cmcassets",
					"action": "GET Cmcassets",
					"description": "CMC datafeed endpoint A1",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/cmcassets"
						}
					}
				},
				{
					"name": "GET Cmctickers",
					"value": "GET Cmctickers",
					"action": "GET Cmctickers",
					"description": "CMC datafeed endpoint A2",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/cmctickers"
						}
					}
				},
				{
					"name": "GET Cmcorderbook",
					"value": "GET Cmcorderbook",
					"action": "GET Cmcorderbook",
					"description": "CMC datafeed endpoint A3",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/cmcorderbook/{{$parameter[\"symbol\"]}}"
						}
					}
				},
				{
					"name": "GET Cmctrades",
					"value": "GET Cmctrades",
					"action": "GET Cmctrades",
					"description": "CMC datafeed endpoint A4",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/cmctrades/{{$parameter[\"symbol\"]}}"
						}
					}
				},
				{
					"name": "GET Markets",
					"value": "GET Markets",
					"action": "GET Markets",
					"description": "Get Markets Listing.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/markets"
						}
					}
				},
				{
					"name": "Trades",
					"value": "Trades",
					"action": "Trades",
					"description": "Get historical trades for a market.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/trades"
						}
					}
				},
				{
					"name": "GET Orderbook Snapshot",
					"value": "GET Orderbook Snapshot",
					"action": "Get an Orderbook Snapshot",
					"description": "Get market orderbook snapshot.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/orderbook/snapshot"
						}
					}
				},
				{
					"name": "GET Pairs",
					"value": "GET Pairs",
					"action": "GET Pairs",
					"description": "Details on cryptoassets traded on an exchange.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/pairs"
						}
					}
				},
				{
					"name": "GET Ticker",
					"value": "GET Ticker",
					"action": "GET Ticker",
					"description": "Market related statistics for single market for the last 24 hours.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/ticker/{{$parameter[\"symbol\"]}}"
						}
					}
				},
				{
					"name": "GET Tickers",
					"value": "GET Tickers",
					"action": "GET Tickers",
					"description": "Market related statistics for all markets for the last 24 hours.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tickers"
						}
					}
				},
				{
					"name": "GET Orderbook",
					"value": "GET Orderbook",
					"action": "Get Orderbook info",
					"description": "Order book depth of a given market pair, returns bids and asks",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/orderbook"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /info",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Supplementary Endpoints"
					],
					"operation": [
						"Get Exchange Info"
					]
				}
			}
		},
		{
			"displayName": "GET /time",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Supplementary Endpoints"
					],
					"operation": [
						"Get Server Time"
					]
				}
			}
		},
		{
			"displayName": "GET /summary",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Supplementary Endpoints"
					],
					"operation": [
						"GET Summary"
					]
				}
			}
		},
		{
			"displayName": "GET /cmcassets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Supplementary Endpoints"
					],
					"operation": [
						"GET Cmcassets"
					]
				}
			}
		},
		{
			"displayName": "GET /cmctickers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Supplementary Endpoints"
					],
					"operation": [
						"GET Cmctickers"
					]
				}
			}
		},
		{
			"displayName": "GET /cmcorderbook/{symbol}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Supplementary Endpoints"
					],
					"operation": [
						"GET Cmcorderbook"
					]
				}
			}
		},
		{
			"displayName": "Symbol",
			"name": "symbol",
			"required": true,
			"description": "ex 'BTC_USDT' or 'BTC/USDT'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Supplementary Endpoints"
					],
					"operation": [
						"GET Cmcorderbook"
					]
				}
			}
		},
		{
			"displayName": "GET /cmctrades/{symbol}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Supplementary Endpoints"
					],
					"operation": [
						"GET Cmctrades"
					]
				}
			}
		},
		{
			"displayName": "Symbol",
			"name": "symbol",
			"required": true,
			"description": "ex 'BTC_USDT' or 'BTC/USDT'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Supplementary Endpoints"
					],
					"operation": [
						"GET Cmctrades"
					]
				}
			}
		},
		{
			"displayName": "GET /markets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Supplementary Endpoints"
					],
					"operation": [
						"GET Markets"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"description": "Optional 'spot' or 'pool'",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Supplementary Endpoints"
					],
					"operation": [
						"GET Markets"
					]
				}
			}
		},
		{
			"displayName": "GET /trades",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Supplementary Endpoints"
					],
					"operation": [
						"Trades"
					]
				}
			}
		},
		{
			"displayName": "Market",
			"name": "market",
			"required": true,
			"description": "Market ID as given in the /markets api result",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "market",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Supplementary Endpoints"
					],
					"operation": [
						"Trades"
					]
				}
			}
		},
		{
			"displayName": "Since",
			"name": "since",
			"description": "Only display trades since this trade ID",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "since",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Supplementary Endpoints"
					],
					"operation": [
						"Trades"
					]
				}
			}
		},
		{
			"displayName": "GET /orderbook/snapshot",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Supplementary Endpoints"
					],
					"operation": [
						"GET Orderbook Snapshot"
					]
				}
			}
		},
		{
			"displayName": "Market",
			"name": "market",
			"required": true,
			"description": "Market ID as given in the /markets api result",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "market",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Supplementary Endpoints"
					],
					"operation": [
						"GET Orderbook Snapshot"
					]
				}
			}
		},
		{
			"displayName": "GET /pairs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Supplementary Endpoints"
					],
					"operation": [
						"GET Pairs"
					]
				}
			}
		},
		{
			"displayName": "GET /ticker/{symbol}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Supplementary Endpoints"
					],
					"operation": [
						"GET Ticker"
					]
				}
			}
		},
		{
			"displayName": "Symbol",
			"name": "symbol",
			"required": true,
			"description": "ex 'BTC/USDT' or 'BTC_USDT'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Supplementary Endpoints"
					],
					"operation": [
						"GET Ticker"
					]
				}
			}
		},
		{
			"displayName": "GET /tickers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Supplementary Endpoints"
					],
					"operation": [
						"GET Tickers"
					]
				}
			}
		},
		{
			"displayName": "GET /orderbook",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Supplementary Endpoints"
					],
					"operation": [
						"GET Orderbook"
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
						"Supplementary Endpoints"
					],
					"operation": [
						"GET Orderbook"
					]
				}
			}
		},
		{
			"displayName": "Depth",
			"name": "depth",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "depth",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Supplementary Endpoints"
					],
					"operation": [
						"GET Orderbook"
					]
				}
			}
		},
];
