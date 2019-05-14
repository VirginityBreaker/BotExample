var TelegramBot = require('node-telegram-bot-api');
var token = '780328457:AAHH3dnjDwri0-alNtX8VuNwVKwq1Pkz-n8';
var bot = new TelegramBot(token, {polling: true});

var response = {
    hello: '╔═══════════════════╗\n║     Вас вітає Telegram-бот:     ║\n║       @YourObserverBot           ║\n╠═══════════════════╣\n║    Чим можу допомогти?     ║\n╚═══════════════════╝',
  }

 bot.on("callback_query", (callbackQuery) => {
    const msg = callbackQuery.message;
    bot.answerCallbackQuery(callbackQuery.id)
        .then(() => bot.sendMessage(msg.chat.id, "You clicked!"));
});
 
bot.onText(/\/start/, function (msg) {
    var fromId = msg.from.id;
    bot.sendMessage(msg.chat.id,response.hello);
    bot.sendMessage(msg.chat.id,"What you want?", keyboards);
});


