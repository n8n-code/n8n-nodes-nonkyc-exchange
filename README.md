# @n8n-dev/n8n-nodes-nonkyc-exchange

![nonkyc-exchange Banner](banner.svg)

[![npm version](https://img.shields.io/npm/v/@n8n-dev/n8n-nodes-nonkyc-exchange.svg)](https://www.npmjs.com/package/@n8n-dev/n8n-nodes-nonkyc-exchange)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

**Stop writing nonkyc-exchange API integrations by hand.**

Every time you connect n8n to nonkyc-exchange, you waste hours mapping endpoints, defining parameters, and debugging schemas. You copy-paste from docs, fix edge cases, and pray nothing breaks.

**What if connecting n8n to nonkyc-exchange took 5 minutes, not half a day?**

This node gives you **6+ resources** out of the box: **Assets**, **Markets**, **Pools**, **Account Private**, **Supplementary Endpoints**, and 1 more: with full CRUD operations, typed parameters, and zero manual configuration.

---

## What You Get

- **Zero boilerplate**: Resources, operations, and fields are pre-configured and ready to use
- **Full CRUD**: Create, read, update, and delete support where the API allows it
- **Typed parameters**: No more guessing field types
- **Built-in auth**: API key authentication, ready to go
- **Declarative**: Native n8n performance, no custom execute() overhead

---

## Install

```bash
npm install @n8n-dev/n8n-nodes-nonkyc-exchange
```

**Or in n8n:**
1. **Settings → Community Nodes → Install**
2. Search: `@n8n-dev/n8n-nodes-nonkyc-exchange`
3. Click **Install**

---

## Quick Start

1. Install the node (above)
2. Add credentials: **nonkyc-exchange API** → paste your API key
3. Drag the **nonkyc-exchange** node into your workflow
4. Pick a resource → pick an operation → done.

That's it. No configuration files. No code. It just works.

---

## Resources

<details>
<summary><b>Assets</b> (2 operations)</summary>

- Get List assets
- Get an asset info

</details>

<details>
<summary><b>Markets</b> (5 operations)</summary>

- Get List markets
- Get a market info
- Get a Market orderbook
- Get Market Candles
- Get List Market trades

</details>

<details>
<summary><b>Pools</b> (3 operations)</summary>

- Get List pools
- Get a pool info
- Get List pool trades

</details>

<details>
<summary><b>Account Private</b> (11 operations)</summary>

- Get Balance
- Get deposit address
- Post Create an order
- Post Cancel an order
- Post Cancel all open orders
- Post Make a withdrawal
- Get List account deposits
- Get List account withdrawals
- Get order info
- Get List account orders
- Get List account trades

</details>

<details>
<summary><b>Supplementary Endpoints</b> (14 operations)</summary>

- Get exchange Info
- Get Server Time
- Get CMC summary information for all markets
- Get Cmcassets
- Get Cmctickers
- Get Cmcorderbook
- Get Cmctrades
- Get Markets
- Get Trades
- Get an Orderbook Snapshot
- Get Pairs
- Get Ticker
- Get Tickers
- Get Orderbook info

</details>

---

## Why This Node?

**Without this node:**
- Hours of manual API integration
- Copy-pasting from nonkyc-exchange docs
- Debugging auth, pagination, error handling
- Maintaining your own client code

**With this node:**
- Install → configure → use. 5 minutes.
- Auto-generated from the official nonkyc-exchange OpenAPI spec
- Always up to date when the API changes
- Native n8n performance

---

## Auto-Generated
This node was auto-generated from the official **nonkyc-exchange** OpenAPI specification using
[@n8n-dev/n8n-openapi-node-ultimate](https://github.com/kelvinzer0/n8n-openapi-node-ultimate),
then validated against the live API so you get accurate types and real parameters, not guesswork.

When the nonkyc-exchange API updates, this node updates too.

---

## Support This Project

If this node saved you hours of work, consider supporting continued development, new APIs, better error handling, and faster updates.

[![Keep It Moving.](https://crypto-donate.insidexofficial.workers.dev/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0/badge)](https://n8n-code.github.io/membership/#/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0)

---

## License

MIT © [kelvinzer0](https://github.com/n8n-code)
