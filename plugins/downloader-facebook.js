import fetch from 'node-fetch'
import hx from 'hxz-api'

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
if (!args[0]) throw `Use example ${usedPrefix}${command} https://fb.watch/azFEBmFRcy/`
if (!args[1]) {
let lis = ["1","2","3","4"]
	let row = Object.keys(lis).map((v, index) => ({
		title: htjava + ' Downloader ke-' + lis[v],
		description: 'By. ' + wm,
		rowId: usedPrefix + command + ' ' + args[0] + ' ' + lis[v]
	}))
	let button = {
		buttonText: `☂️ Tema Disini ☂️`,
		description: `⚡ Silakan pilih tema di tombol di bawah...\n*Teks yang anda kirim:* ${args[0]}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
	}

  if (args[1] == '1') {
  let res = await hx.fbdown(args[0])
  let ko = await res.HD
    conn.sendButtonVid(m.chat, ko, `*${htki} facebook ${htka}*
*Link video_normal*: ${ko.Normal_video}
━━━━━•─────────────── 
       ⇆ㅤ◁ㅤ ❚❚ㅤ ▷ㅤ↻`, author, 'To mp3', '.tomp3', fpayment, adReply)
  }
  if (args[1] == '2') {
  let llh = await fetch(`https://api.lolhuman.xyz/api/facebook?apikey=${global.lolkey}&url=${args[0]}`)
    let hm = await llh.json()
    conn.sendButtonVid(m.chat, hm.result, `*${htki} facebook ${htka}*
━━━━━•─────────────── 
       ⇆ㅤ◁ㅤ ❚❚ㅤ ▷ㅤ↻`, author, 'To mp3', '.tomp3', fpayment, adReply)
  }
  if (args[1] == '3') {
  let nex = await fetch(`https://api.neoxr.my.id/api/fb?url=${args[0]}&apikey=JeJU827J`)
    let ne = await nex.json()
    let ox = "sd"
  try {
    ox = ne.data[0].url
  } catch {
    ox = ne.data[1].url
  }
    conn.sendButtonVid(m.chat, ox, `*${htki} facebook ${htka}*
━━━━━•─────────────── 
       ⇆ㅤ◁ㅤ ❚❚ㅤ ▷ㅤ↻`, author, 'To mp3', '.tomp3', fpayment, adReply)
  }
  if (args[1] == '4') {
  let xtm = await fetch(`https://api.xteam.xyz/dl/fbv2?url=${args[0]}&APIKEY=NezukoTachibana281207`)
    let ex = await xtm.json()
    let te = "sd"
  try {
    te = ex.result.sd.url
  } catch {
    te = ex.result.hd.url
  }
    conn.sendButtonVid(m.chat, te, `*${htki} facebook ${htka}*
━━━━━•─────────────── 
       ⇆ㅤ◁ㅤ ❚❚ㅤ ▷ㅤ↻`, author, 'To mp3', '.tomp3', fpayment, adReply)
  }
  }
handler.help = ['facebook'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^((fb|facebook)(downloder|dl)?)$/i

export default handler
