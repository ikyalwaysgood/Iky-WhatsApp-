let handler = async(m, { conn, usedPrefix, command, text }) => {
let fdoc = {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${command}`}}}}

if (!text) throw `Gunakan contoh ${usedPrefix + command} hello|helo`
let urut = text.split`|`

  let teksnya = urut[0]
  let teksnya2 = urut[1]
  
	let lis = ["aglitch",
"captainamerica",
"choror",
"layered",
"pornhub",
"spooky"]
	let row = Object.keys(lis).map((v, index) => ({
		title: htjava + ' ' + lis[v],
		description: 'No. ' + index,
		rowId: usedPrefix + 'textpro2 ' + lis[v] + '|' + teksnya + '|' + teksnya2
	}))
	let button = {
		buttonText: `☂️ Tema Disini ☂️`,
		description: `⚡ Silakan pilih tema di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)

}
handler.help = ['maker8'].map(v => v + ' <teks|teks>')
handler.tags = ['maker']
handler.command = /^(maker8)$/i
export default handler