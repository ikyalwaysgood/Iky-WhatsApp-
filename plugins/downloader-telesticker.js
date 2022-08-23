import { Telesticker } from 'xfarr-api'
import { stickerTelegram } from '@bochilteam/scraper'
import fetch from 'node-fetch'
import axios from 'axios'
let handler = async (m, { conn, args }) => {
try {
	if (args[0] && args[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) {
		let res = await Telesticker(args[0])
		await m.reply(`Sending ${res.length} stickers...`)
		if (m.isGroup && res.length > 30) {
			await m.reply('Number of stickers more than 30, bot will send it in private chat.')
			for (let i = 0; i < res.length; i++) {
				conn.sendMessage(m.sender, { sticker: { url: res[i].url }})
			}
		} else {
			for (let i = 0; i < res.length; i++) {
				conn.sendMessage(m.chat, { sticker: { url: res[i].url }})
			}
		}
	} else if (args && args.join(' ')) {
		let [query, page] = args.join(' ').split('|')
		let res = await stickerTelegram(query, page)
		if (!res.length) throw `Query "${args.join(' ')}" not found`
		m.reply(res.map(v => `*${v.title}*\n_${v.link}_`).join('\n\n'))
	} else throw 'Input Query / Telesticker Url'
	} catch {
	if (!text) throw '*Masukkan link*\n Example: https://t.me/addstickers/LINE_Menhera_chan_ENG'
let res = await axios('https://violetics.pw/api/downloader/telestiker?apikey=beta&url=' + text)
let json = res.data
let dapet = json.result.sticker
	let row = Object.keys(dapet).map((v, index) => ({
		title: `📌 Line Sticker: ${1 + index}`,
		description: '\n⏲️ Name: ' + json.result.name + '\n⏲️ Title: ' + json.result.title,
		rowId: usedPrefix + 'get ' + dapet[v]
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, button, row, m)
	}
}
handler.help = ['telesticker']
handler.tags = ['downloader']
handler.command = /^(telestic?ker|stic?kertele)$/i

export default handler
