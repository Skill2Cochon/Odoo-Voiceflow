# Chatbot Integration with Odoo

This Odoo module allows you to easily integrate a chatbot into your website. It provides an API for your chatbot to retrieve information about the logged-in user (name, email, etc.) from Odoo.

## Features

* **Odoo API:** Exposes an endpoint for your chatbot to retrieve the logged-in user's information.
* **User Information Cache:** Optimizes performance by avoiding redundant queries to the Odoo database.
* **Customization:** You can easily customize the chatbot's behavior by adding your own JavaScript code.

## Installation

1. **Download the module:** Download the source code of this module from GitHub.
2. **Place the module in Odoo:** Place the `my_chatbot_integration` folder in the `addons` directory of your Odoo installation.
3. **Update the module list:** Go to the "Apps" menu in Odoo and click on "Update Apps List".
4. **Install the module:** Search for "Chatbot Integration" in the module list and click on "Install".

## Configuration

1. **Configure the API endpoint:** In the `voiceflow_controller.js` file, replace `/your_odoo_api_endpoint` with the actual URL path of your endpoint.
2. **Customize the chatbot (optional):** Add your custom JavaScript code in the `user_custom_javascript.js` file to initialize and interact with your chatbot.

## Usage

1. **Initialize the chatbot:** In your frontend JavaScript code, call the `initializeChatbot()` function from the `user_custom_javascript.js` file to initialize the chatbot.
2. **Retrieve user information:** Use your chatbot's SDK or API to send requests to the `/your_odoo_api_endpoint` endpoint with the user's ID. You will receive a JSON object containing the user's information in return.

## Example Usage (Voiceflow)

In Voiceflow, you can create a "Code" action to call the Odoo API:

* **URL:** `/your_odoo_api_endpoint`
* **Method:** POST
* **Headers:** `Content-Type: application/json`
* **Body:** `{"user_id": {userId}}` (where `{userId}` is a variable containing the user's ID)

## License

This module is released under the AGPL-3 license.

## Contributors

* S2C

## Acknowledgments

* The Odoo community for their support and resources.
* The Voiceflow team for their chatbot creation tool.
