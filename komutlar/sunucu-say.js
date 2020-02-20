const {RichEmbed} = require("discord.js");
const ayarlar = require("../ayarlar.json");

module.exports.run = async(message,bot,args) => {

    var userCount = message.guild.memberCount;
    var onlineCount = message.guild.members.filter(m => m.presence.status === 'online').size
    var dnd = message.guild.members.filter(m => m.presence.status === 'dnd').size
    var idle = message.guild.members.filter(m => m.presence.status === 'idle').size
    var voiceCount = message.guild.members.filter(m => m.voiceChannel).size
    var tag = message.guild.members.filter(m => m.user.username.includes(ayarlar.sunucutag)).size
    
    let embed = new RichEmbed()
    .setTitle("Vikings")
    .setDescription(`
    
    **${ayarlar.sunucutag} Toplam üye sayısı : ${userCount}**
    
    **${ayarlar.sunucutag} Çevrim İçi üye sayısı : ${onlineCount + dnd + idle}**
    
    **${ayarlar.sunucutag} Seste olan üye sayısı : ${voiceCount}**
    
    **${ayarlar.sunucutag} İsminde tagımız olan kullanıcı sayısı : ${tag}**
    `)
    .setColor(ayarlar.renk)
    message.channel.send(embed);
    

};
module.exports.help = {
    "name":"sunucu-say"
}