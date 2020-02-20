const {RichEmbed} = require("discord.js");
const ayarlar = require("../ayarlar.json");

module.exports.run = async(message,bot,args) => {
    const Discord = require('discord.js')
    const moment = require('moment')
    const client = new Discord.Client();
    
    const botadi = bot.user.username
    
    exports.run = async (bot, msg, args) => {
       if(msg.channel.id === ayarlar.botkomut || msg.channel.id === ayarlar.kayıtkanalı){
    
            let simdikitarih = moment.utc(msg.createdAt).format('DD MM YYYY');
      
            let user = msg.mentions.users.first() || msg.author;
      
            let userinfo = {};
            userinfo.avatar= user.displayAvatarURL;
            userinfo.id = user.id;
            userinfo.od1 = msg.guild.members.get(user.id).user.presence.game || "Oynadığı bir oyun yok"
            userinfo.status = user.presence.status.toString()
            .replace("dnd", `Rahatsız Etmeyin`)
            .replace("online", `Çevrimiçi`)
            .replace("idle", `Boşta`)
            .replace("offline", `Çevrimdışı`)
     
            userinfo.bot = user.bot.toString()
            .replace("false", `Hayır`)
            .replace("true", `Evet`)
      
            userinfo.sonmesaj = user.lastMessage || "Son yazılan mesaj bulunamadı." || "Son yazılan mesaj gösterilemedi."
      
            userinfo.dctarih = moment.utc(msg.guild.members.get(user.id).user.createdAt).format('**YYYY** [Yılında] MMMM [Ayında] dddd [Gününde] (**DD/MM/YYYY**)')
    
            .replace("Monday", `**Pazartesi**`)
            .replace("Tuesday", `**Salı**`)
            .replace("Wednesday", `**Çarşamba**`)
            .replace("Thursday", `**Perşembe**`)
            .replace("Friday", `**Cuma**`)
            .replace("Saturday", `**Cumartesi**`)
            .replace("Sunday", `**Pazar**`)
    
            .replace("January", `**Ocak**`)
            .replace("February", `**Şubat**`)
            .replace("March", `**Mart**`)
            .replace("April", `**Nisan**`)
            .replace("May", `**Mayıs**`)
            .replace("June", `**Haziran**`)
            .replace("July", `**Temmuz**`)
            .replace("August", `**Ağustos**`)
            .replace("September", `**Eylül**`)
            .replace("October", `**Ekim**`)
            .replace("November", `**Kasım**`)
            .replace("December", `**Aralık**`)
            userinfo.dctarihkatilma = moment.utc(msg.guild.members.get(user.id).joinedAt).format('**YYYY** [Yılında] MMMM [Ayında] dddd [Gününde] (**DD/MM/YYYY**)')
    
            .replace("Monday", `**Pazartesi**`)
            .replace("Tuesday", `**Salı**`)
            .replace("Wednesday", `**Çarşamba**`)
            .replace("Thursday", `**Perşembe**`)
            .replace("Friday", `**Cuma**`)
            .replace("Saturday", `**Cumartesi**`)
            .replace("Sunday", `**Pazar**`)
    
            .replace("January", `**Ocak**`)
            .replace("February", `**Şubat**`)
            .replace("March", `**Mart**`)
            .replace("April", `**Nisan**`)
            .replace("May", `**Mayıs**`)
            .replace("June", `**Haziran**`)
            .replace("July", `**Temmuz**`)
            .replace("August", `**Ağustos**`)
            .replace("September", `**Eylül**`)
            .replace("October", `**Ekim**`)
            .replace("November", `**Kasım**`)
            .replace("December", `**Aralık**`)
          
            const uembed = new Discord.RichEmbed()
            .setAuthor(user.tag, userinfo.avatar)
            .setThumbnail(userinfo.avatar)
            .setTitle('Kullanıcı;')
            .addField(`Şu anda oynadığı oyun`, userinfo.od1, false)
            .addField(`Durum`, userinfo.status, false)
            .setColor(ayarlar.renk)
            .addField(`Katılım Tarihi (Sunucu)`, userinfo.dctarihkatilma, false)
            .addField(`Katılım Tarihi (Discord)`, userinfo.dctarih, false)
            .addField(`Kimlik:`, userinfo.id, true)
            .addField(`Botmu:`, userinfo.bot, true)
            .addField(`Roller:`, `${msg.guild.members.get(user.id).roles.filter(r => r.name !== "@everyone").map(r => r).join(' **|** ') || "**Bu kullanıcıda hiçbir rol bulunmuyor**"}`, false)
            .addField(`Son gönderdiği mesaj:`, userinfo.sonmesaj, false)
            .setFooter(`Vikings || Kullanıcı Bilgi Sistemi`)
            msg.channel.send(uembed)
         }else{
           msg.channel.send("Bu komut sadece Kayıt kanalı ve Bot komut kanalında çalışmaktadır :)")
         }
       }
      
    
    exports.conf = {
      enabled: true,
      guildOnly: true,
      aliases: [],
      permLevel: 0
    };
    
    exports.help = {
      name: 'bilgi',
      description: 'İstediğiniz kullanıcını bilgilerini gösterir.',
      usage: 'kullanıcı-bilgi'
    };
    
    
};
module.exports.help = {
    "name":"avatar"
}