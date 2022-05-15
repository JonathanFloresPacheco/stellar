// The SDK does not have tools for creating test accounts, so you'll have to
// make your own HTTP request.

// if you're trying this on Node, install the `node-fetch` library and
// uncomment the next line:
const fetch = require('node-fetch');
const StellarSDK = require('stellar-sdk');
const pair = StellarSDK.Keypair.random();
async function createTestAccountStellar() {
    try {
        const response = await fetch(
        `https://friendbot.stellar.org?addr=${encodeURIComponent(pair.publicKey())}`,
        );
        const responseJSON = await response.json();
        console.log("SUCCESS! You have a new account :)\n", responseJSON);
    } catch (e) {
        console.error("ERROR!", e);
    }
};

createTestAccountStellar();