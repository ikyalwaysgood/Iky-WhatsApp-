let handler = async(m, { conn, usedPrefix, command, text }) => {
let fdoc = {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${command}`}}}}

if (!text) throw `Gunakan contoh ${usedPrefix + command} hello`

let lis = ["burnpaper","butterfly","coffecup","coffee","doubleheart","flaming","grass","gravity","lovemessage","lovetext","naruto","oceansea","quotewood","rainbow","romantic","shadow","smoke"]
let row = Object.keys(lis).map((v, index) => ({
		title: htjava + ' ' + lis[v],
		description: 'No. ' + index,
		rowId: usedPrefix + 'oxy ' + lis[v] + ' ' + text
	}))
	let button = {
		buttonText: `☂️ Tema Disini ☂️`,
		description: `⚡ Silakan pilih tema di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}
handler.help = ['maker1'].map(v => v + ' <teks>')
handler.tags = ['maker']
handler.command = /^(maker1)$/i
export default handler