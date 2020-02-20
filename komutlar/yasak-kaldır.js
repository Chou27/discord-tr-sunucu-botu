const {RichEmbed} = require("discord.js");
const ayarlar = require("../ayarlar.json");

module.exports.run = async(message,bot,args) => {
    const yetki = message.guild.roles.find(x => x.name === "")

 if(message.member.roles.has(yetki.id)){

    
  
        let member = await bot.fetchUser(args[0])
        if(!member) return message.channel.send("İdyi yaz")
      
      try{
        message.guild.unban(member, {reason:"null"})
        message.channel.send(`${member.tag} kullanıcısının banı açıldı`)
      } catch(e) {
        console.log(e.message)
      }
    }
}
};
module.exports.help = {
    "name":"yasak-kaldır"
}