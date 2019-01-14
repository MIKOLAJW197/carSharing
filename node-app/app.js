var express = require('express');
var app = express();
var cors = require('cors');

app.use(cors());

app.use('/restful',require('./restful/default-router'))
app.use('/baza',require('./restful/routers/baza'))
app.use('/cennik',require('./restful/routers/cennik'))
app.use('/doladowanie_konta',require('./restful/routers/doladowanie_konta'))
app.use('/kolizja',require('./restful/routers/kolizja'))
app.use('/parking',require('./restful/routers/parking'))
app.use('/prace_techniczne',require('./restful/routers/prace_techniczne'))
app.use('/pracownik',require('./restful/routers/pracownik'))
app.use('/przejazd',require('./restful/routers/przejazd'))
app.use('/samochod',require('./restful/routers/samochod'))
app.use('/tankowanie',require('./restful/routers/tankowanie'))
app.use('/uzytkownik',require('./restful/routers/uzytkownik'))
app.use('/suma_doladowan',require('./restful/routers/suma_doladowan'))
app.use('/doladuj_wszystkim',require('./restful/routers/doladuj_wszystkim'))

app.get('/', function(req, res) {
  res.send('CarSharing API is live!');
});

app.listen(3000)