import { youtubeSearch } from '@bochilteam/scraper'

let handler = async(m, { conn, usedPrefix, text, args, command }) => {
let name = await conn.getName(m.sender)

  if (!text) throw 'Cari apa?'
  let cari = await youtubeSearch(`${text}`)
    let dapet = cari.video
	let row = Object.values(dapet).map((v, index) => ({
		title: htjava + '📌 ' + v.title,
		description: '\n⌚ Duration: ' + v.durationH + '\n⏲️ Uploaded: ' + v.publishedTime + '\n👁️ Views: ' + v.view + '\n📎 Url: ' + v.url,
		rowId: usedPrefix + 'ytd ' + v.url
	}))
	let button = {
		buttonText: `☂️ YouTube Search Disini ☂️`,
		description: `⚡ Silakan pilih YouTube Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}
handler.help = ['', 'earch'].map(v => 'yts' + v + ' <pencarian>')
handler.tags = ['tools']
handler.command = /^yts(earch)?$/i

export default handler