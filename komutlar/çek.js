const {RichEmbed} = require("discord.js");
const ayarlar = require("../ayarlar.json");

module.exports.run = async(message,bot,args) => {

    if (!msg.member.hasPermission("MANAGE_MESSAGES")) {
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

let çek = üye.setVoiceChannel(message.author.voiceChannelID)
if(çek){
let s = new RichEmbed()
.setTitle("Başarılı")
.setDescription(`${üye} adlı kullanıcıyı yanına çektim.İyi sohbetler`)
.setTimestamp()
.setFooter(`Komutu Kullanan Yetkili ` + message.author.tag)
.setColor(ayarlar.renk)
message.channel.send(s).then(x => x.delete(5000));
}else{
let s = new RichEmbed()
.setTitle("Hata")
.setDescription(üye + " Adlı kullanıcı herhangi bir kanalda olmadığından dolayı yanına gelmedi")
.setFooter(`Komutu Kullanan Yetkili ` + message.author.tag)
.setTimestamp()
.setColor(ayarlar.renk)
message.channel.send(s).then(x => x.delete(5000));
}
};
module.exports.help = {
    "name":"çek"
}