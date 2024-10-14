// file src/lib/microsoftGraph.js
import * as msal from "@azure/msal-browser"

/**
 * List the requested scopes(aka. the requested permissions)
 */

const requestedScopes = {

    scopes: ["User.Read"]
}

const msalInstance = new msal.PublicClientApplication({

    auth:{
        clientId: process.env.VUE_APP_OAUTH_CLIENT_ID
    },
    cache: {
        cacheLocation: "sessionStorage"
    }
})


let isMsalInitialized = false;

async function initializeMsal() {
    if (!isMsalInitialized) {
        try {
            await msalInstance.initialize();
            isMsalInitialized = true;      
        } catch (error) {
            console.error('MSAL initialization failed:', error);
            throw error;
        }
    }
}


export async function signInAndGetUser() {
    try {
        await initializeMsal();
        const authResult = await msalInstance.loginPopup(requestedScopes);
        msalInstance.setActiveAccount(authResult.account);
        return authResult.account;
    } catch (error) {
        console.error('Sign-in failed:', error);
        throw error;
    }
}