odoo.define('my_chatbot_integration.voiceflow_controller', function (require) {
    'use strict';

    const rpc = require('web.rpc'); // Odoo module for RPC calls
    const ajax = require('web.ajax'); // Odoo module for AJAX requests

    // Cache to store user information
    const userInfoCache = {};

    // Function to fetch user information from Odoo
    async function getUserInfo(userId) {
        try {
            // Check if the information is already cached
            if (userInfoCache[userId]) {
                return userInfoCache[userId];
            }

            // Fetch data from the res.users model
            const userInfo = await rpc.query({
                model: 'res.users',
                method: 'read',
                args: [[userId], ['name', 'email', 'phone', 'partner_id']], // Fields to fetch
            });

            if (!userInfo || userInfo.length === 0) {
                throw new Error("User not found.");
            }

            // Cache the user information
            userInfoCache[userId] = userInfo[0];

            return userInfo[0];
        } catch (error) {
            console.error("Error fetching user data:", error);
            throw error; // Rethrow the error for handling in the controller
        }
    }

    return {
        // API Endpoint for Voiceflow
        '/your_odoo_api_endpoint': async (req, res) => { // Replace with your endpoint
            try {
                const { user_id } = req.body;

                // Parameter validation
                if (!user_id) {
                    return res.status(400).json({ error: "Missing user ID." });
                }

                // Fetch user information
                const userInfo = await getUserInfo(user_id);

                // Return data in JSON format
                res.json(userInfo);
            } catch (error) {
                console.error("Error in controller:", error);
                res.status(500).json({ error: "Server error" });
            }
        },
    };
});
