let handler = async(m, { conn, usedPrefix, command, text }) => {
let fdoc = {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${command}`}}}}

if (!text) throw `Gunakan contoh ${usedPrefix + command} hello`

let lis = ["balloon",
"beach-sign",
"blood_writing",
"bracelet",
"cemetery-gates",
"chalk_writing",
"christmas-writing",
"cookies_writing",
"denim-emdroidery",
"einstein",
"foggy_window_writing",
"fortune-cookie",
"frosty-window-writing",
"haunted-hotel",
"heart_tattoo",
"light-graffiti",
"lipstick-writing",
"love-lock",
"nightmare-writing",
"noir",
"pendant",
"plane-banner",
"sand_writing",
"snow-sign",
"soup_letters",
"street-sign",
"typewriter",
"water-writing",
"wooden_sign",
"yacht"]
let row = Object.keys(lis).map((v, index) => ({
		title: htjava + ' ' + lis[v],
		description: 'No. ' + index,
		rowId: usedPrefix + 'pfunia ' + lis[v] + ' ' + text
	}))
	let button = {
		buttonText: `☂️ Tema Disini ☂️`,
		description: `⚡ Silakan pilih tema di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}
handler.help = ['maker5'].map(v => v + ' <teks>')
handler.tags = ['maker']
handler.command = /^(maker5)$/i
export default handler