const {RichEmbed} = require("discord.js");
const ayarlar = require("../ayarlar.json");

module.exports.run = async(message,bot,args) => {

const yetki = message.guild.roles.find(x => x.name === "678230466825814023")

 if(message.member.roles.has(yetki.id)){
    
let üye = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if(!üye){
let s = new Discord.RichEmbed()
.setDescription("Lütfen Üyeyi etiketleyin ya da discord idsini(Kimliğini) yazınız ve tekrar komutu deneyiniz. :)")
.setColor(ayarlar.renk)
.setTimestamp()
.setThumbnail(message.author.avatarURL)
message.channel.send(s);
}
let sebep = args.join(" ") ? args.join(" ") : "sebepsiz ";
if(üye.id === message.author.id){
let em = new Discord.RichEmbed()
.setDescription("Kendini yasaklayamazsın.").setColor(ayarlar.renk).setThumbnail(message.author.avatarURL).setTimestamp()
return message.channel.send(em)
}

if (message.member.highestRole.calculatedPosition > message.member.highestRole.calculatedPosition - 1) {
let es = new Discord.RichEmbed()
.setDescription("Bu kişinin senin rollerinden/rolünden daha yüksek rolleri/rolü var.")
.setColor(ayarlar.renk)
.setThumbnail(message.author.avatarURL)
.setTimestamp()
message.channel.send(es);
}


let d = new Discord.RichEmbed()
.setDescription(message.guild.name + " Adlı sunucudan" + sebep + " sebebiyle" + message.author.username + " adlı yetkili tarafından yasaklandın.") 
.setTimestamp()
.setColor(ayarlar.renk)
üye.send(d)
message.guild.member(üye).ban(sebep);
let f = new Discord.RichEmbed()
.setDescription("~Yasaklandı~")
.addField("Yasaklanan Kullanıcı",üye.username)
.addField("Yasaklayan Yetkili",message.author.username)
.addField("Hangi Sebeple Yasaklandı",sebep)
.addField("Ne Zaman Yasaklandı",moment.utc(msg.createdAt).format('DD MM YYYY'))
.setColor(ayarlar.renk)
message.channel.send(f);
}
let kanal = ayarlar.banlog;

if(kanal){
let m = new Discord.RichEmbed()
.setDescription("Komut Kullanıldı")
.addField("Hangi Komut Kullanıldı:","yasakla",false)
.addField("Kim Kullandı:",msg.author.tag,false)
.addField("Kimi yasakladı:",üye.username)
.addField("Komut hangi kanalda kullanıldı:",msg.channel)
.addField("Ne Zaman Yasaklandı",moment.utc(msg.createdAt).format('DD MM YYYY'))
.setColor(ayarlar.renk)
.setTimestamp()
kanal.send(m);
}

};
module.exports.help = {
    "name":"yasakla"
}