const botconfig = require("./ayarlar.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

fs.readdir("./komutlar/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Komut yok.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./komutlar/${f}`);
    console.log(`${f} yüklendi!`);
    bot.commands.set(props.help.name, props);
  });
});

bot.on("ready", async () => {
  console.log(`${bot.user.username} Çevrimiçi !`);
  bot.user.setActivity(botconfig.oynuyor, {type: "WATCHING"});

});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

});
bot.login(botconfig.token);

bot.on("userUpdate", async(old, nev) => {
    if(old.username !== nev.username) {
    if(!nev.username.includes(ayarlar.sunucutag) && bot.guilds.get(ayarlar.sunucu).members.get(nev.id).roles.has(ayarlar.taglırol)) {
      bot.channels.get(ayarlar.sunucu).send(`${nev} Kullanıcısı tagı isminden sildi`)
          bot.guilds.get(ayarlar.sunucu).members.get(nev.id).removeRole(ayarlar.taglırol)
       nev.send(`**Tagı çıkartmışsın :/ üzüldük**`)
      } 
  
       if(nev.username.includes(ayarlar.sunucutag) && !bot.guilds.get(ayarlar.sunucu).members.get(nev.id).roles.has(ayarlar.taglırol)) {
        nev.send(`**Tagı aldığın için teşekkürler** :hearts:`) 
        bot.guilds.get(ayarlar.sunucu).members.get(nev.id).addRole(ayarlar.taglırol)
       }
    }
    });


    bot.on("guildMemberAdd", async(member) => {
        let userinfo = {};
          userinfo.tarih = moment.utc(member.user.createdAt).format('DD/MM/YYYY HH:mm')
          userinfo.id = member.id;
        userinfo.status = member.user.presence.status.toString()
        .replace("dnd",`Rahatsız Etmeyin`)
        .replace("online", `Çevrimiçi`)
        .replace("idle", `Boşta`)
        .replace("offline", `Çevrimdışı`)  
        let avatar = member.user.avatarURL || member.user.defaultAvatarURL;
          
      let em = new Discord.RichEmbed()
      .setTitle(member.user.username + " Hoşgeldin")
      .addField("Discord Kimliğin:", userinfo.id,true)
      .addField("Discorda Katılım Tarihin", userinfo.tarih,true)
      .addField("Durum", userinfo.status)
      .setTimestamp()
      .setThumbnail(avatar)
      .setColor(ayarlar.renk)
      bot.channels.get(ayarlar.kayıtkanalı).send(em) 
        
      });

      bot.on("channelDelete",async(channel) => {
        const fetch = await channel.guild.fetchAuditLogs({type: "CHANNEL_DELETE"}).then(log => log.entries.first())
      
      const member = fetch.executor;
            bot.channels.get(ayarlar.modlog).send(`${member}, ${channel.name} adlı kanalı sildi`)
      });
      bot.on("channelCreate",async(channel) => {
        
        const fetch = await channel.guild.fetchAuditLogs({type: "CHANNEL_CREATE"}).then(log => log.entries.first())
      
      const member = fetch.executor;
              bot.channels.get(ayarlar.modlog).send(`${member}, ${channel.name} adlı kanalı sildi`)
      });
      
      bot.on("roleDelete",async(role) => {
        
        const fetch = await role.guild.fetchAuditLogs({type: "ROLE_DELETE"}).then(log => log.entries.first())
      
      const member = fetch.executor;
              bot.channels.get(ayarlar.modlog).send(`${member}, ${role.name} adlı rolü sildi`)
      
      });
      
      bot.on("roleCreate",async(role) => {
      
           const fetch = await role.guild.fetchAuditLogs({type: "ROLE_CREATE"}).then(log => log.entries.first())
      const member = fetch.executor;
              bot.channels.get(ayarlar.modlog).send(`${member}, ${role.name} adlı rolü oluşturdu`)
      });
      
bot.on("roleUpdate",async(oldRole,newRole) => {
    const fetch = await role.guild.fetchAuditLogs({type: "ROLE_UPDATE"}).then(log => log.entries.first())
    const member = fetch.executor;
bot.channels.get(ayarlar.modlog).send(`${member},${oldRole.name} Adlı rolü güncelledi`)
    
});
bot.on("channelUpdate",async(oldChannel,newChannel) => {
    const fetch = await role.guild.fetchAuditLogs({type: "CHANNEL_UPDATE"}).then(log => log.entries.first())
    const member = fetch.executor;
bot.channels.get(ayarlar.modlog).send(`${member},${oldChannel.name} Adlı kanalı güncelledi`)
    
});
bot.on("messageDelete", async msg => {
    let logs = await msg.guild.fetchAuditLogs({type: 72});
    let entry = logs.entries.first();
  
    let embed = new discord.RichEmbed()
      .setTitle("**Mesaj Silindi**")
      .setColor("#fc3c3c")
      .addField("Kim Sildi", msg.author.tag, true)
      .addField("Hangi Kanaldan Silmiş", msg.channel, true)
      .addField("Hangi Mesajı Silmiş", msg.content)
      .setFooter(`Mesaj ID: ${msg.id} | Kullanıcı ID: ${msg.author.id}`)
        .setColor(ayarlar.renk)
    let channel = bot.channels.get(ayarlar.modlog)
    channel.send({embed});
  });
  
  const antispam = require("discord-anti-spam-tr");
antispam(bot, {
  uyarmaSınırı: 4, 
  aralık: 1000, 
  uyarmaMesajı: "Spamı Durdur Yoksa Mutelerim.", 
  maxSpamUyarı: 7,
  zaman: 10,
  rolİsimi: "Muted"
});



