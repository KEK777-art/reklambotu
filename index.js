const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const db = require('wio.db');

client.on('ready', async () => {
  await console.log('BOT AKTİF!')
  await client.user.setActivity(ayarlar.oynuyor)
  await client.user.setStatus('dnd')
})

client.on('message', async msg => {
  const sa = await db.fetch(`reklam.${msg.author.id}`)
  if(msg.content === ayarlar.reklamMesaj1) {
  if(msg.author.id === client.user.id) {
  } else {
    if(msg.author.bot) {
    } else {
      if(msg.guild.id === ayarlar.reklamYapılmayacakSunucuID) {
      } else {
        if(sa === 1) {
        } else {
          await msg.author.send(ayarlar.reklamOzelMesaj)
          await db.set(`reklam.${msg.author.id}`, 1)
          console.log(`${msg.author.tag} Kullanıcısına ${ayarlar.reklamOzelMesaj} Mesajı Yolladım.`)
    }
      }
}
    }
  }
})

client.on('message', async msg => {
  const sa = await db.fetch(`reklam.${msg.author.id}`)
  if(msg.content === ayarlar.reklamMesaj2) {
  if(msg.author.id === client.user.id) {
  } else {
    if(msg.author.bot) {
    } else {
      if(msg.guild.id === ayarlar.reklamYapılmayacakSunucuID) {
      } else {
        if(sa === 1) {
        } else {
          sleep(10000)
          await msg.author.send(ayarlar.reklamOzelMesaj)
          await db.set(`reklam.${msg.author.id}`, 1)
          console.log(`${msg.author.tag} Kullanıcısına ${ayarlar.reklamOzelMesaj} Mesajı Yolladım.`)
    }
      }
}
    }
  }
})

client.on('message', async msg => {
  const sa = await db.fetch(`reklam.${msg.author.id}`)
  if(msg.content === ayarlar.reklamMesaj3) {
  if(msg.author.id === client.user.id) {
  } else {
    if(msg.author.bot) {
    } else {
      if(msg.guild.id === ayarlar.reklamYapılmayacakSunucuID) {
      } else {
        if(sa === 1) {
        } else {
          sleep(10000)
          await msg.author.send(ayarlar.reklamOzelMesaj)
          await db.set(`reklam.${msg.author.id}`, 1)
          console.log(`${msg.author.tag} Kullanıcısına ${ayarlar.reklamOzelMesaj} Mesajı Yolladım.`)
    }
      }
}
    }
  }
})

client.on('message', async msg => {
  const sa = await db.fetch(`reklam.${msg.author.id}`)
  if(msg.content === ayarlar.reklamMesaj4) {
  if(msg.author.id === client.user.id) {
  } else {
    if(msg.author.bot) {
    } else {
      if(msg.guild.id === ayarlar.reklamYapılmayacakSunucuID) {
      } else {
        if(sa === 1) {
        } else {
          sleep(10000)
          await msg.author.send(ayarlar.reklamOzelMesaj)
          await db.set(`reklam.${msg.author.id}`, 1)
          console.log(`${msg.author.tag} Kullanıcısına ${ayarlar.reklamOzelMesaj} Mesajı Yolladım.`)
    }
      }
}
    }
  }
})



client.login(ayarlar.token)
