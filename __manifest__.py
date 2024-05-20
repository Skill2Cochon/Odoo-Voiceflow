{
    'name': 'Chatbot Integration',
    'summary': 'Integrate a chatbot with Odoo',
    'version': '1.0',
    'author': 'Your Name or Your Company',
    'category': 'Extra Tools',
    'website': 'https://www.yourwebsite.com',  # Replace with your website
    'depends': ['base', 'web'],
    'data': [],
    'assets': {
        'web.assets_frontend': [
            'web/static/src/js/core/rpc.js',
            'web/static/src/js/core/ajax.js',
            'my_chatbot_integration/static/src/js/voiceflow_controller.js',
            # Add other JS files here if needed
        ],
    },
    'license': 'AGPL-3',
    'installable': True,
    'application': False,
    'auto_install': False,
}
