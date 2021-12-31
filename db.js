const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://khaledtlili:khaled@cluster0.k2vfr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Mongo is UP.'))
    .catch(err => console.log('Mongo is Down. Raison :', err));