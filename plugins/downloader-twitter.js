import fetch from 'node-fetch'
import hx from 'hxz-api'

let handler = async (m, { conn, text }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

if (!text) throw 'Input URL'
try {
	let res = await twitterDl(text)
	for (let x = 0; x < res.media.length; x++) {
		let caption = x === 0 ? res.caption.replace(/https:\/\/t.co\/[a-zA-Z0-9]+/gi, '').trim() : ''
  conn.sendButtonVid(m.chat, res.media[x].url, caption, author, 'To mp3', '.tomp3', fpayment, adReply)
	}
	} catch {
	/* Twit */
await hx.fbdown(`${text}`)
            .then(G => {
            let ten = `${G.HD}`
            conn.sendButtonVid(m.chat, ten, `*desc* : ${G.desc}
━━━━━•─────────────── 
       ⇆ㅤ◁ㅤ ❚❚ㅤ ▷ㅤ↻`, author, 'To mp3', '.tomp3', fpayment, adReply)
            })
	}
}
handler.help = ['twitter']
handler.tags = ['downloader']
handler.command = /^((twt|twitter)(dl)?)$/i

export default handler

async function twitterDl(url) {
	let id = /twitter\.com\/[^/]+\/status\/(\d+)/.exec(url)[1]
	if (!id) throw 'Invalid URL'
	let res = await fetch(`https://tweetpik.com/api/tweets/${id}`)
	if (res.status !== 200) throw res.statusText
	let json = await res.json()
	if (json.media) {
		let media = []
		for (let i of json.media) {
			if (/video|animated_gif/.test(i.type)) {
				let vid = await (await fetch(`https://tweetpik.com/api/tweets/${id}/video`)).json()
				vid = vid.variants.pop()
				media.push({
					url: vid.url,
					type: i.type
				})
			} else {
				media.push({
					url: i.url,
					type: i.type
				})
			}
		}
		return {
			caption: json.text,
			media 
		}
	} else throw 'No media found'
}
