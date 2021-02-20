/* Codded by @xzendercage
Telegram: t.me/xzendercage
*/

const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');

Asena.addCommand({pattern: 'whatsasena', fromMe: true}, (async (message, match) => {

    await message.sendMessage('WhatsAsena First Userbot for WhatsApp! Thank you to all developers & supporters');

}));
