var component = require('./component');
require('./css/main.css');

var app = document.createElement('div');

document.body.appendChild(app);

app.appendChild(component());
