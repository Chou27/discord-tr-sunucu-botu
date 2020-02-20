const {RichEmbed} = require("discord.js");
const ayarlar = require("../ayarlar.json");

module.exports.run = async(message,bot,args) => {

const erkek = message.guild.roles.find(x => x.name === "")
const kayıtsız = message.guild.roles.find(x => x.name === "")
const kayıtcı = message.guild.roles.find(x => x.name === "678230466825814023")

 if(message.member.roles.has(yetki.id)){
if(message.channel.id === ayarlar.kayıtkanalı)return message.channel.send("Bu komutu burada kullanamazsın").then(x => x.delete(5000))

let üye = message.mentions.members.first();
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
let isim = args.join(" ") ? args.join(" ") : "";

if(!isim){
    message.delete()
    let s = new RichEmbed()
    .setTitle("Hata")
    .setDescription("Kullanıcının ismini yazmadın")
    .setTimestamp()
    .setColor(ayarlar.renk)
    .setFooter(`Komutu Kullanan Yetkili ` + message.author.tag)

    message.channel.send(s).then(x => x.delete(5000));
}

let verildi = üye.addRole(erkek) && üye.removeRole(kayıtsız) && üye.setNickname(isim);
if(verildi){
    message.delete()
let s = new RichEmbed()
.setTitle("Başarılı")
.setDescription(`${üye} Adlı kullanıcıya ${erkek} rolünü verdim`)
.setTimestamp()
.setColor(ayarlar.renk)
.setFooter(`Komutu Kullanan Yetkili ` + message.author.tag)
message.channel.send(s).then(x => x.delete(5000));
}
}
let log = ayarlar.kayıtlog;

let s2 = new RichEmbed()
.setTitle("Üye Kayıt Edildi")
.addField("Kayıt Edilen Üye",üye)
.addField("Kayıt Eden Yetkili",message.author)
log.send(s2);

};
module.exports.help = {
    "name":"erkek"
}