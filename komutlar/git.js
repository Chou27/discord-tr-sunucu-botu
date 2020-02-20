const {RichEmbed} = require("discord.js");
const ayarlar = require("../ayarlar.json");

module.exports.run = async(message,bot,args) => {
    if (!msg.member.hasPermission("MOVE_MEMBERS")) {
        return msg.reply("❌ Bu Komutu sadece Taşıma yetkisine sahip kişiler kullanabilir")
            .then(m => m.delete(5000));
    }    
let üye = message.mentions.members.first()
if(!üye){
    message.delete()
let s = new RichEmbed()
.setTitle("Hata")
.setDescription("**Üyeyi etiketlemedin**")
.setTimestamp()
.setFooter(`Komutu Kullanan Yetkili ` + message.author.tag)
.setColor(ayarlar.renk)
message.channel.send(s).then(x => x.delete(5000));
}

let çek = message.author.setVoiceChannel(üye.voiceChannelID)
if(çek){
    message.delete()
let s = new RichEmbed()
.setTitle("Başarılı")
.setDescription(`${üye} adlı kullanıcının yanına gittin.İyi sohbetler`)
.setTimestamp()
.setFooter(`Komutu Kullanan Yetkili ` + message.author.tag)
.setColor(ayarlar.renk)
message.channel.send(s).then(x => x.delete(5000));
}else{
    message.delete()
let s = new RichEmbed()
.setTitle("Hata")
.setDescription(üye + " Adlı kullanıcı herhangi bir kanalda olmadığından dolayı yanına gidemedin")
.setFooter(`Komutu Kullanan Yetkili ` + message.author.tag)
.setTimestamp()
.setColor(ayarlar.renk)
message.channel.send(s).then(x => x.delete(5000));
}
};
module.exports.help = {
    "name":"git"
}