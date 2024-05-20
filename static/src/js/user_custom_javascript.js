odoo.define('my_chatbot_integration.user_custom_javascript', function (require) {
    'use strict';

    const rpc = require('web.rpc');
    const ajax = require('web.ajax');

    // Function to initialize the Voiceflow chatbot
    async function initializeChatbot() {
        try {
            // 1. Get the user ID
            const userId = odoo.__session_info__.user_id;

            // 2. Call the Odoo API to get user information
            const response = await fetch('/your_odoo_api_endpoint', { // Replace with your endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user_id: userId,
                }),
            });

            if (!response.ok) {
                throw new Error(`Error fetching data: ${response.status}`);
            }

            const userInfo = await response.json();

            // 3. Initialize the Voiceflow chatbot with the user information
            // ... (Your Voiceflow initialization code here) ...

            // Example of using user information
            console.log("Connected user:", userInfo.name);

        } catch (error) {
            console.error("Error initializing chatbot:", error);
        }
    }

    // Call the initialization function when the DOM is ready
    document.addEventListener('DOMContentLoaded', initializeChatbot);
});
