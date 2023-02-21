import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import * as weather from './weather';

admin.initializeApp();

export const getYesterdayWeather = functions.https.onRequest(async (req, res) => {
    const { latitude, longitude } = req.query;
    if (!latitude || !longitude || typeof latitude !== 'number' || typeof longitude !== 'number') {
        res.status(400).send('Missing latitude or longitude');
        return;
    }
    const yesterdayWeather = await weather.getYesterdayWeather(parseFloat(latitude), parseFloat(longitude));
    res.send(yesterdayWeather);
});

