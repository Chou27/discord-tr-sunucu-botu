const {RichEmbed} = require("discord.js");
const ayarlar = require("../ayarlar.json");

module.exports.run = async(message,bot,args) => {

    if(message.author.id === ayarlar.sahip){

        let mesaj = args.join(" ")
message.guild.members.forEach(member => {
    let s = new RichEmbed()
    .setDescription(mesaj)
    .setFooter(`Komutu Kullanan Sunucu Sahibi`)
    .setColor(ayarlar.renk)
    member.send(s);
});
    }
};
module.exports.help = {
    "name":"sunucu-duyur"
}