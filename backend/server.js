const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;


mongoose.connect('mongodb://localhost:27017/crosmoke', { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB konekcija uspostavljena');
});

app.use(express.json());
app.use(cors());

require('./models/anketa');
require('./models/cigara');
require('./models/clan');
require('./models/grickanje');
require('./models/lizanje');
require('./models/meksanje');
require('./models/ostali_nacin');
require('./models/sezona');
require('./models/stavljanje');
require('./models/trik');
require('./models/vip_clan');
require('./models/vip_cigara');
require('./models/vip_sezona');

const anketeRouter=require('./routes/ankete');
const cigareRouter=require('./routes/cigare');
const clanoviRouter=require('./routes/clanovi');
const grickanjaRouter=require('./routes/grickanja');
const lizanjaRouter=require('./routes/lizanja');
const meksanjaRouter=require('./routes/meksanja');
const ostaliNaciniRouter=require('./routes/ostali_nacini');
const sezoneRouter=require('./routes/sezone');
const stavljanjaRouter=require('./routes/stavljanja');
const trikoviRouter=require('./routes/trikovi');

app.use('/ankete',anketeRouter);
app.use('/cigare',cigareRouter);
app.use('/clanovi',clanoviRouter);
app.use('/grickanje',grickanjaRouter);
app.use('/lizanje',lizanjaRouter);
app.use('/meksanje',meksanjaRouter);
app.use('/ostalinacini',ostaliNaciniRouter);
app.use('/sezone',sezoneRouter);
app.use('/stavljanje',stavljanjaRouter);
app.use('/trikovi',trikoviRouter);

app.listen(PORT, () => {
    console.log(`Server pokrenut na portu ${PORT}`);
});