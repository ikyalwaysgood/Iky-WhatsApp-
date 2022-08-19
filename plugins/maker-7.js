let handler = async(m, { conn, usedPrefix, command, text }) => {
let fdoc = {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${command}`}}}}

if (!text) throw `Gunakan contoh ${usedPrefix + command} hello`

let lis = ["bear",
"berry",
"blackpink",
"blood",
"broken",
"carbon",
"christmas",
"circuit",
"devil",
"discovery",
"dropwater",
"embossed",
"fiction",
"firework",
"glossy",
"glue",
"gradient",
"greenhorror",
"harrypotter",
"imglitch",
"light",
"magma",
"metallic",
"neon",
"paper",
"skeleton",
"sketch",
"stone",
"transformer",
"videogame"]
let row = Object.keys(lis).map((v, index) => ({
		title: htjava + ' ' + lis[v],
		description: 'No. ' + index,
		rowId: usedPrefix + 'textpro ' + lis[v] + ' ' + text
	}))
	let button = {
		buttonText: `☂️ Tema Disini ☂️`,
		description: `⚡ Silakan pilih tema di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}
handler.help = ['maker7'].map(v => v + ' <teks>')
handler.tags = ['maker']
handler.command = /^(maker7)$/i
export default handler