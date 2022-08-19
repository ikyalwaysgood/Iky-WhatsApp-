let handler = async(m, { conn, usedPrefix, command, text }) => {
let fdoc = {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${command}`}}}}

if (!text) throw `Gunakan contoh ${usedPrefix + command} hello`

let lis = ["3dglowing",
"3dnature",
"3dwoodenblack",
"bevel",
"birthdaycake",
"burnpaper",
"butterfly",
"camuflage",
"candy",
"coffee",
"coffee-heartcup",
"crispchrome",
"embroiderytext",
"flaming",
"flowertext",
"flowertypo",
"funnycup",
"fur",
"gerbang",
"glowrainbow",
"gradientavatar",
"graffititext",
"grenleaves",
"harrypotter",
"illuminated-metallic",
"lovemessage",
"luxuryroyal",
"metalicglow",
"modernmetal",
"multimaterial",
"nature3d",
"neonlight",
"orchids-flower",
"partyneon",
"quotesgrass",
"rainbowbg",
"rainbowshine",
"romance",
"romantic-doubleheart",
"silk",
"smoketype-effect",
"smoketypography",
"stars",
"striking3d",
"summertext",
"sweetcandy",
"typography",
"underquotes",
"underwaterocean",
"underwebmatrix",
"vintage",
"watermelon",
"whitecube",
"wolfmetal",
"woodblock",
"woodenboard",
"woodheart",
"yellowroses"]
let row = Object.keys(lis).map((v, index) => ({
		title: htjava + ' ' + lis[v],
		description: 'No. ' + index,
		rowId: usedPrefix + 'oxyx ' + lis[v] + ' ' + text
	}))
	let button = {
		buttonText: `☂️ Tema Disini ☂️`,
		description: `⚡ Silakan pilih tema di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}
handler.help = ['maker3'].map(v => v + ' <teks>')
handler.tags = ['maker']
handler.command = /^(maker3)$/i
export default handler