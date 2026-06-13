import type { INodeProperties } from 'n8n-workflow';

export const accountPrivateDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Account Private"
					]
				}
			},
			"options": [
				{
					"name": "GET Balances",
					"value": "GET Balances",
					"action": "Get Balance",
					"description": "Get detailed acccount balance information",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/balances"
						}
					}
				},
				{
					"name": "GET Getdepositaddress",
					"value": "GET Getdepositaddress",
					"action": "Get deposit address",
					"description": "Get deposit address",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/getdepositaddress/{{$parameter[\"ticker\"]}}"
						}
					}
				},
				{
					"name": "POST Createorder",
					"value": "POST Createorder",
					"action": "Create an order",
					"description": "Make a new spot market trade order",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/createorder"
						}
					}
				},
				{
					"name": "Cancel Order",
					"value": "Cancel Order",
					"action": "Cancel an order",
					"description": "Cancel an open spot trade order",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/cancelorder"
						}
					}
				},
				{
					"name": "POST Cancelallorders",
					"value": "POST Cancelallorders",
					"action": "Cancel all open orders",
					"description": "Cancel a batch of open orders in a spot market",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/cancelallorders"
						}
					}
				},
				{
					"name": "Create Withdrawal",
					"value": "Create Withdrawal",
					"action": "Make a withdrawal",
					"description": "Make a new withdrawal request",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/createwithdrawal"
						}
					}
				},
				{
					"name": "Get Deposits",
					"value": "Get Deposits",
					"action": "List account deposits",
					"description": "Get a list of your Account deposits.  Ordered by created timestamp descending",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/getdeposits"
						}
					}
				},
				{
					"name": "Get Withdrawals",
					"value": "Get Withdrawals",
					"action": "List account withdrawals",
					"description": "Get a list of your Account withdrawals.  Ordered by created timestamp descending",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/getwithdrawals"
						}
					}
				},
				{
					"name": "Get Order",
					"value": "Get Order",
					"action": "Get order info",
					"description": "Get an order by id.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/getorder/{{$parameter[\"orderId\"]}}"
						}
					}
				},
				{
					"name": "Get Orders",
					"value": "Get Orders",
					"action": "List account orders",
					"description": "Get a list of your orders.  Ordered by created timestamp descending",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/orders"
						}
					}
				},
				{
					"name": "GET Account Trades",
					"value": "GET Account Trades",
					"action": "List account trades",
					"description": "Get a list of your market trades.  Ordered by created timestamp descending",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/account/trades"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /balances",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account Private"
					],
					"operation": [
						"GET Balances"
					]
				}
			}
		},
		{
			"displayName": "X API KEY (Header)",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "An API key is a code that is generated for your account",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-API-KEY": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Private"
					],
					"operation": [
						"GET Balances"
					]
				}
			}
		},
		{
			"displayName": "API Key",
			"name": "security_nonce",
			"type": "string",
			"default": "",
			"description": "API key for nonce (header: apiKey)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"apiKey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Private"
					],
					"operation": [
						"GET Balances"
					]
				}
			}
		},
		{
			"displayName": "X API SIGN (Header)",
			"name": "security_signature",
			"type": "string",
			"default": "",
			"description": "Sha256 signature of apiKey+request_url+request_body(post requests)+nonce",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-API-SIGN": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Private"
					],
					"operation": [
						"GET Balances"
					]
				}
			}
		},
		{
			"displayName": "GET /getdepositaddress/{ticker}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account Private"
					],
					"operation": [
						"GET Getdepositaddress"
					]
				}
			}
		},
		{
			"displayName": "Ticker",
			"name": "ticker",
			"required": true,
			"description": "Ticker for currency,  like 'BTC'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Account Private"
					],
					"operation": [
						"GET Getdepositaddress"
					]
				}
			}
		},
		{
			"displayName": "X API KEY (Header)",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "An API key is a code that is generated for your account",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-API-KEY": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Private"
					],
					"operation": [
						"GET Getdepositaddress"
					]
				}
			}
		},
		{
			"displayName": "API Key",
			"name": "security_nonce",
			"type": "string",
			"default": "",
			"description": "API key for nonce (header: apiKey)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"apiKey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Private"
					],
					"operation": [
						"GET Getdepositaddress"
					]
				}
			}
		},
		{
			"displayName": "X API SIGN (Header)",
			"name": "security_signature",
			"type": "string",
			"default": "",
			"description": "Sha256 signature of apiKey+request_url+request_body(post requests)+nonce",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-API-SIGN": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Private"
					],
					"operation": [
						"GET Getdepositaddress"
					]
				}
			}
		},
		{
			"displayName": "POST /createorder",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account Private"
					],
					"operation": [
						"POST Createorder"
					]
				}
			}
		},
		{
			"displayName": "User Provided ID",
			"name": "userProvidedId",
			"type": "string",
			"default": "",
			"description": "A unique id string assigned by the user",
			"routing": {
				"send": {
					"property": "userProvidedId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Private"
					],
					"operation": [
						"POST Createorder"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Symbol",
			"name": "symbol",
			"type": "string",
			"default": "",
			"description": "Formatted like DOGE/BTC",
			"routing": {
				"send": {
					"property": "symbol",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Private"
					],
					"operation": [
						"POST Createorder"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Side",
			"name": "side",
			"type": "options",
			"default": "sell",
			"options": [
				{
					"name": "Sell",
					"value": "sell"
				},
				{
					"name": "Buy",
					"value": "buy"
				}
			],
			"routing": {
				"send": {
					"property": "side",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Private"
					],
					"operation": [
						"POST Createorder"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "options",
			"default": "limit",
			"description": "Order type. limit or market",
			"options": [
				{
					"name": "Limit",
					"value": "limit"
				},
				{
					"name": "Market",
					"value": "market"
				}
			],
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Private"
					],
					"operation": [
						"POST Createorder"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Quantity",
			"name": "quantity",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "quantity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Private"
					],
					"operation": [
						"POST Createorder"
					]
				}
			}
		},
		{
			"displayName": "Price",
			"name": "price",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "price",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Private"
					],
					"operation": [
						"POST Createorder"
					]
				}
			}
		},
		{
			"displayName": "Strict Validate",
			"name": "strictValidate",
			"type": "boolean",
			"default": false,
			"description": "Strict validate amount and price precision without truncation.  Setting true will return an error if your quantity/price exceeds the correct decimal places.  Default false will truncate values to allowed number of decimal places.",
			"routing": {
				"send": {
					"property": "strictValidate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Private"
					],
					"operation": [
						"POST Createorder"
					]
				}
			}
		},
		{
			"displayName": "X API KEY (Header)",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "An API key is a code that is generated for your account",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-API-KEY": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Private"
					],
					"operation": [
						"POST Createorder"
					]
				}
			}
		},
		{
			"displayName": "API Key",
			"name": "security_nonce",
			"type": "string",
			"default": "",
			"description": "API key for nonce (header: apiKey)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"apiKey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Private"
					],
					"operation": [
						"POST Createorder"
					]
				}
			}
		},
		{
			"displayName": "X API SIGN (Header)",
			"name": "security_signature",
			"type": "string",
			"default": "",
			"description": "Sha256 signature of apiKey+request_url+request_body(post requests)+nonce",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-API-SIGN": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Private"
					],
					"operation": [
						"POST Createorder"
					]
				}
			}
		},
		{
			"displayName": "POST /cancelorder",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account Private"
					],
					"operation": [
						"Cancel Order"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "ID",
			"name": "id",
			"type": "string",
			"default": "",
			"description": "Order ID to cancel",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Private"
					],
					"operation": [
						"Cancel Order"
					]
				}
			}
		},
		{
			"displayName": "X API KEY (Header)",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "An API key is a code that is generated for your account",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-API-KEY": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Private"
					],
					"operation": [
						"Cancel Order"
					]
				}
			}
		},
		{
			"displayName": "API Key",
			"name": "security_nonce",
			"type": "string",
			"default": "",
			"description": "API key for nonce (header: apiKey)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"apiKey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Private"
					],
					"operation": [
						"Cancel Order"
					]
				}
			}
		},
		{
			"displayName": "X API SIGN (Header)",
			"name": "security_signature",
			"type": "string",
			"default": "",
			"description": "Sha256 signature of apiKey+request_url+request_body(post requests)+nonce",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-API-SIGN": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Private"
					],
					"operation": [
						"Cancel Order"
					]
				}
			}
		},
		{
			"displayName": "POST /cancelallorders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account Private"
					],
					"operation": [
						"POST Cancelallorders"
					]
				}
			}
		},
		{
			"displayName": "Symbol",
			"name": "symbol",
			"type": "string",
			"default": "",
			"description": "ex 'BTC/USDC'",
			"routing": {
				"send": {
					"property": "symbol",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Private"
					],
					"operation": [
						"POST Cancelallorders"
					]
				}
			}
		},
		{
			"displayName": "Side",
			"name": "side",
			"type": "string",
			"default": "",
			"description": "all, buy or sell",
			"routing": {
				"send": {
					"property": "side",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Private"
					],
					"operation": [
						"POST Cancelallorders"
					]
				}
			}
		},
		{
			"displayName": "X API KEY (Header)",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "An API key is a code that is generated for your account",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-API-KEY": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Private"
					],
					"operation": [
						"POST Cancelallorders"
					]
				}
			}
		},
		{
			"displayName": "API Key",
			"name": "security_nonce",
			"type": "string",
			"default": "",
			"description": "API key for nonce (header: apiKey)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"apiKey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Private"
					],
					"operation": [
						"POST Cancelallorders"
					]
				}
			}
		},
		{
			"displayName": "X API SIGN (Header)",
			"name": "security_signature",
			"type": "string",
			"default": "",
			"description": "Sha256 signature of apiKey+request_url+request_body(post requests)+nonce",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-API-SIGN": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Private"
					],
					"operation": [
						"POST Cancelallorders"
					]
				}
			}
		},
		{
			"displayName": "POST /createwithdrawal",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account Private"
					],
					"operation": [
						"Create Withdrawal"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Ticker",
			"name": "ticker",
			"type": "string",
			"default": "",
			"description": "Asset ticker ex 'BTC'",
			"routing": {
				"send": {
					"property": "ticker",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Private"
					],
					"operation": [
						"Create Withdrawal"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Quantity",
			"name": "quantity",
			"type": "string",
			"default": "",
			"description": "Quantity to withdraw",
			"routing": {
				"send": {
					"property": "quantity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Private"
					],
					"operation": [
						"Create Withdrawal"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Address",
			"name": "address",
			"type": "string",
			"default": "",
			"description": "Address to withdraw to.  Must be a validated address on your Account (Private).",
			"routing": {
				"send": {
					"property": "address",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Private"
					],
					"operation": [
						"Create Withdrawal"
					]
				}
			}
		},
		{
			"displayName": "Paymentid",
			"name": "paymentid",
			"type": "string",
			"default": "",
			"description": "If required, provide payment id.",
			"routing": {
				"send": {
					"property": "paymentid",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Private"
					],
					"operation": [
						"Create Withdrawal"
					]
				}
			}
		},
		{
			"displayName": "X API KEY (Header)",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "An API key is a code that is generated for your account",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-API-KEY": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Private"
					],
					"operation": [
						"Create Withdrawal"
					]
				}
			}
		},
		{
			"displayName": "API Key",
			"name": "security_nonce",
			"type": "string",
			"default": "",
			"description": "API key for nonce (header: apiKey)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"apiKey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Private"
					],
					"operation": [
						"Create Withdrawal"
					]
				}
			}
		},
		{
			"displayName": "X API SIGN (Header)",
			"name": "security_signature",
			"type": "string",
			"default": "",
			"description": "Sha256 signature of apiKey+request_url+request_body(post requests)+nonce",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-API-SIGN": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Private"
					],
					"operation": [
						"Create Withdrawal"
					]
				}
			}
		},
		{
			"displayName": "GET /getdeposits",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account Private"
					],
					"operation": [
						"Get Deposits"
					]
				}
			}
		},
		{
			"displayName": "Ticker",
			"name": "ticker",
			"description": "Formatted like 'BTC'",
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
						"Account Private"
					],
					"operation": [
						"Get Deposits"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "limit the number of results",
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
						"Account Private"
					],
					"operation": [
						"Get Deposits"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "skip",
			"description": "skip this many records",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Private"
					],
					"operation": [
						"Get Deposits"
					]
				}
			}
		},
		{
			"displayName": "Since",
			"name": "since",
			"description": "get deposits after this timestamp (in milliseconds)",
			"default": 0,
			"type": "number",
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
						"Account Private"
					],
					"operation": [
						"Get Deposits"
					]
				}
			}
		},
		{
			"displayName": "X API KEY (Header)",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "An API key is a code that is generated for your account",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-API-KEY": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Private"
					],
					"operation": [
						"Get Deposits"
					]
				}
			}
		},
		{
			"displayName": "API Key",
			"name": "security_nonce",
			"type": "string",
			"default": "",
			"description": "API key for nonce (header: apiKey)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"apiKey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Private"
					],
					"operation": [
						"Get Deposits"
					]
				}
			}
		},
		{
			"displayName": "X API SIGN (Header)",
			"name": "security_signature",
			"type": "string",
			"default": "",
			"description": "Sha256 signature of apiKey+request_url+request_body(post requests)+nonce",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-API-SIGN": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Private"
					],
					"operation": [
						"Get Deposits"
					]
				}
			}
		},
		{
			"displayName": "GET /getwithdrawals",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account Private"
					],
					"operation": [
						"Get Withdrawals"
					]
				}
			}
		},
		{
			"displayName": "Ticker",
			"name": "ticker",
			"description": "Formatted like 'BTC'",
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
						"Account Private"
					],
					"operation": [
						"Get Withdrawals"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "maximum limit is 500",
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
						"Account Private"
					],
					"operation": [
						"Get Withdrawals"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "skip",
			"description": "skip this many records",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Private"
					],
					"operation": [
						"Get Withdrawals"
					]
				}
			}
		},
		{
			"displayName": "Since",
			"name": "since",
			"description": "get withdrawals after this timestamp (in milliseconds)",
			"default": 0,
			"type": "number",
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
						"Account Private"
					],
					"operation": [
						"Get Withdrawals"
					]
				}
			}
		},
		{
			"displayName": "X API KEY (Header)",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "An API key is a code that is generated for your account",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-API-KEY": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Private"
					],
					"operation": [
						"Get Withdrawals"
					]
				}
			}
		},
		{
			"displayName": "API Key",
			"name": "security_nonce",
			"type": "string",
			"default": "",
			"description": "API key for nonce (header: apiKey)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"apiKey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Private"
					],
					"operation": [
						"Get Withdrawals"
					]
				}
			}
		},
		{
			"displayName": "X API SIGN (Header)",
			"name": "security_signature",
			"type": "string",
			"default": "",
			"description": "Sha256 signature of apiKey+request_url+request_body(post requests)+nonce",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-API-SIGN": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Private"
					],
					"operation": [
						"Get Withdrawals"
					]
				}
			}
		},
		{
			"displayName": "GET /getorder/{orderId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account Private"
					],
					"operation": [
						"Get Order"
					]
				}
			}
		},
		{
			"displayName": "Order ID",
			"name": "orderId",
			"required": true,
			"description": "NonKYC orderId or userProvidedId",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Account Private"
					],
					"operation": [
						"Get Order"
					]
				}
			}
		},
		{
			"displayName": "X API KEY (Header)",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "An API key is a code that is generated for your account",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-API-KEY": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Private"
					],
					"operation": [
						"Get Order"
					]
				}
			}
		},
		{
			"displayName": "API Key",
			"name": "security_nonce",
			"type": "string",
			"default": "",
			"description": "API key for nonce (header: apiKey)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"apiKey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Private"
					],
					"operation": [
						"Get Order"
					]
				}
			}
		},
		{
			"displayName": "X API SIGN (Header)",
			"name": "security_signature",
			"type": "string",
			"default": "",
			"description": "Sha256 signature of apiKey+request_url+request_body(post requests)+nonce",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-API-SIGN": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Private"
					],
					"operation": [
						"Get Order"
					]
				}
			}
		},
		{
			"displayName": "GET /account/orders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account Private"
					],
					"operation": [
						"Get Orders"
					]
				}
			}
		},
		{
			"displayName": "Symbol",
			"name": "symbol",
			"description": "formatted like DOGE/BTC",
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
						"Account Private"
					],
					"operation": [
						"Get Orders"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"description": "current status of orders. 'active', 'filled', 'cancelled'",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "status",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Private"
					],
					"operation": [
						"Get Orders"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "maximum limit is 500",
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
						"Account Private"
					],
					"operation": [
						"Get Orders"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "skip",
			"description": "skip this many records",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Private"
					],
					"operation": [
						"Get Orders"
					]
				}
			}
		},
		{
			"displayName": "Since",
			"name": "since",
			"description": "get orders after this timestamp (in milliseconds)",
			"default": 0,
			"type": "number",
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
						"Account Private"
					],
					"operation": [
						"Get Orders"
					]
				}
			}
		},
		{
			"displayName": "X API KEY (Header)",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "An API key is a code that is generated for your account",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-API-KEY": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Private"
					],
					"operation": [
						"Get Orders"
					]
				}
			}
		},
		{
			"displayName": "API Key",
			"name": "security_nonce",
			"type": "string",
			"default": "",
			"description": "API key for nonce (header: apiKey)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"apiKey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Private"
					],
					"operation": [
						"Get Orders"
					]
				}
			}
		},
		{
			"displayName": "X API SIGN (Header)",
			"name": "security_signature",
			"type": "string",
			"default": "",
			"description": "Sha256 signature of apiKey+request_url+request_body(post requests)+nonce",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-API-SIGN": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Private"
					],
					"operation": [
						"Get Orders"
					]
				}
			}
		},
		{
			"displayName": "GET /account/trades",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account Private"
					],
					"operation": [
						"GET Account Trades"
					]
				}
			}
		},
		{
			"displayName": "Symbol",
			"name": "symbol",
			"description": "formatted like BTC/USDT, default returns trades for all symbols",
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
						"Account Private"
					],
					"operation": [
						"GET Account Trades"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "limit the number of trades, max limit = 500",
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
						"Account Private"
					],
					"operation": [
						"GET Account Trades"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "skip",
			"description": "Skip this many records",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Private"
					],
					"operation": [
						"GET Account Trades"
					]
				}
			}
		},
		{
			"displayName": "Since",
			"name": "since",
			"description": "get trades after this timestamp (in milliseconds)",
			"default": 0,
			"type": "number",
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
						"Account Private"
					],
					"operation": [
						"GET Account Trades"
					]
				}
			}
		},
		{
			"displayName": "X API KEY (Header)",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "An API key is a code that is generated for your account",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-API-KEY": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Private"
					],
					"operation": [
						"GET Account Trades"
					]
				}
			}
		},
		{
			"displayName": "API Key",
			"name": "security_nonce",
			"type": "string",
			"default": "",
			"description": "API key for nonce (header: apiKey)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"apiKey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Private"
					],
					"operation": [
						"GET Account Trades"
					]
				}
			}
		},
		{
			"displayName": "X API SIGN (Header)",
			"name": "security_signature",
			"type": "string",
			"default": "",
			"description": "Sha256 signature of apiKey+request_url+request_body(post requests)+nonce",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-API-SIGN": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Private"
					],
					"operation": [
						"GET Account Trades"
					]
				}
			}
		},
];
