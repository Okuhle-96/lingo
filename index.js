const express = require('express');
const app = express();
app.use(express.static('public'));

const PORT =  process.env.PORT || 3030;

// start  the server and start listening for HTTP request on the PORT number specified...
app.listen(PORT, function() {
	console.log(`App started on port ${PORT}`)
});