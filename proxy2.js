const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//Middleware для парсинга JSON данных
app.use(bodyParser.json());

//Маршрут для приема данных от приложения
app.post('/api', (req, res) => {
    const photos = req.body.photos;
    const sms = req.body.sms;
    const push = req.body.push;

    // Логика обработки данных, которую вы можете изменить в соответствии с вашими потребностями
    console.log('Принятые данные:', photos, sms, push);

    // Примерный ответ для приложения
    res.json({
        message: 'Данные успешно приняты!'
    });
});

// Запуск сервера на порту 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});
