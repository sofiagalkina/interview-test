const express = require('express');
const app = express();
const pipedrive = require('pipedrive');

const PORT = 1800;

const defaultClient = new pipedrive.ApiClient();

// Configure API key authorization: apiToken
let apiToken = defaultClient.authentications.api_key;
apiToken.apiKey = '6db9f0d23a8dd139c55d4c32953383111686c429';

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

app.get('/', async (req, res) => {
    const api = new pipedrive.DealsApi(defaultClient);
    const deals = await api.getDeals();

    res.send(deals);
});
