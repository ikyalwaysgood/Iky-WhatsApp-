let handler = async(m, { conn, usedPrefix, command, text }) => {
let fdoc = {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${command}`}}}}

if (!text) throw `Gunakan contoh ${usedPrefix + command} hello`

let lis = ["american",
"anonymous",
"aov",
"arrow",
"arrow2",
"blackpink",
"cake",
"caper",
"cloth",
"cloud",
"coverpubg",
"crank",
"dragonfire",
"eraser",
"foggy",
"glasses",
"graffiti",
"greenbrush",
"hallowen",
"horror",
"incandescent",
"leafgraphy",
"letters",
"metals",
"ml",
"neonblue",
"neonbp",
"nightstars",
"pig",
"pubgavatar",
"puppy",
"sunlight",
"television",
"tiger",
"typography",
"typography2",
"warface",
"water"]
let row = Object.keys(lis).map((v, index) => ({
		title: htjava + ' ' + lis[v],
		description: 'No. ' + index,
		rowId: usedPrefix + 'epho ' + lis[v] + ' ' + text
	}))
	let button = {
		buttonText: `☂️ Tema Disini ☂️`,
		description: `⚡ Silakan pilih tema di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}
handler.help = ['maker11'].map(v => v + ' <teks>')
handler.tags = ['maker']
handler.command = /^(maker11)$/i
export default handler