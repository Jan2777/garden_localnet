const express = require('express');
const { GardenFinanceSDK } = require('garden-finance-sdk');

const app = express();
const port = 3001;

// Initialize the SDK for localnet
const sdk = new GardenFinanceSDK({
  apiKey: 'your-localnet-api-key',
  network: 'localnet'
});

// Serve static files
app.use(express.static('src'));

// Endpoint to perform a swap
app.get('/swap', async (req, res) => {
  const amount = req.query.amount;

  try {
    const result = await sdk.swap({
      from: 'BTC',
      to: 'WBTC',
      amount: amount,
    });
    res.json({ success: true, result: result });
  } catch (error) {
    res.json({ success: false, error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Localnet server listening at http://localhost:${port}`);
});
