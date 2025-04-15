import { TonConnect } from '@tonconnect/sdk';

// Initialize the connector
const connector = new TonConnect({
    manifestUrl: 'https://your-render-app-url.com/tonconnect-manifest.json'
});

// You'll need to create this manifest file in your public folder
