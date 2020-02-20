const {RichEmbed} = require("discord.js");
const ayarlar = require("../ayarlar.json");

module.exports.run = async(message,bot,args) => {
if(message.channel.id === ayarlar.botkomut || message.channel.id === ayarlar.kayıtkanalı)return message.channel.send("Bu komut sadece bot komut kanalında geçerlidir").then(x => x.delete(5000));

    let üye = message.mentions.members.first() ? message.mentions.members.first() : message.author;
if(üye){
let s = new RichEmbed()
.setTitle(üye + " Avatarı")
.setImage(üye.displayAvatarURL)
.setColor(ayarlar.renk)
message.channel.send(s);
}
};
module.exports.help = {
    "name":"avatar"
}