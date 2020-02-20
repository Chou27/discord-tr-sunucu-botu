const {RichEmbed} = require("discord.js");
const ayarlar = require("../ayarlar.json");
const ms = require("ms");

module.exports.run = async(message,bot,args) => {
    const yetki = message.guild.roles.find(x => x.name === "")
    if(message.member.roles.has(yetki.id)){
let üye = meessage.mentions.members.first();
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

let süre = args[1] ? args[1] : "sınırsız"

let sebep = args[2] ? args[2] : "sebepsiz"

let sustur = üye.setMute(true)
if(sustur){
    message.delete()
let s = new RichEmbed()
.setTitle("Başarılı")
.setDescription(`${üye} adlı kullanıcı ${sebep} sebebiyle ${süre} ses kanallarından susturuldu`)
.setFooter(`Komutu Kullanan Yetkili ` + message.author.tag)
.setColor(ayarlar.renk)
.setTimestamp()
message.channel.send(s).then(x => x.delete(5000));
}


setTimeout(() => {
üye.setMute(false)
},ms(süre));
    }

};
module.exports.help = {
    "name":"sessustur"
}