import { TonConnect } from '@tonconnect/sdk';

// Initialize the connector (frontend only)
export const connector = new TonConnect({
    manifestUrl: 'https://your-app.com/tonconnect-manifest.json'
});

// Connection source for Telegram
export const tgConnectionSource = {
    jsBridgeKey: 'tonconnect',
    universalLink: 'https://your-universal-link.com'
};
