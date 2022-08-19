let handler = async(m, { conn, usedPrefix, command, text }) => {
let fdoc = {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${command}`}}}}

if (!text) throw `Gunakan contoh ${usedPrefix + command} hello|helo`
let urut = text.split`|`

  let teksnya = urut[0]
  let teksnya2 = urut[1]
  
	let lis = ["3d-wood2",
"3dgalaxy-metal",
"3dgold",
"3drose-gold",
"3dsilver",
"3dspace",
"3dstone",
"3dvintage-light-bulb",
"avengers",
"balloon-text",
"balloons-cards",
"balloons-love",
"bear",
"blueglass-effect",
"buffalo",
"bull",
"captain-america",
"chicken",
"cutegirl-graffiti",
"cyanglass-effect",
"dragon",
"eagle",
"floral-ornamental",
"football-club",
"graffiti-text6",
"greenglass-effect",
"griffin",
"gun",
"heated-steel",
"hornet",
"horse",
"jaguar",
"juventus",
"life-buoys",
"lion",
"lion2",
"marvel",
"messi",
"metal-marvel",
"metal-molding",
"monkey",
"ninja-black&white",
"orangeglass-effect",
"phoenix",
"pinkglass-effect",
"pornhub",
"premier-leaguecup",
"pubg-black&white",
"purpleglass-effect",
"real-madrid",
"redglass-effect",
"rhino",
"sabertooth",
"shark",
"spider-man",
"tattoo-hand",
"text-logo",
"tiger-logo",
"tiktok",
"typography-greenleaf",
"wolf-black&white",
"wolf-galaxy",
"wolf-logo",
"wolver",
"yellowglass-effect"]
	let row = Object.keys(lis).map((v, index) => ({
		title: htjava + ' ' + lis[v],
		description: 'No. ' + index,
		rowId: usedPrefix + 'ephotox2 ' + lis[v] + '|' + teksnya + '|' + teksnya2
	}))
	let button = {
		buttonText: `☂️ Tema Disini ☂️`,
		description: `⚡ Silakan pilih tema di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)

}
handler.help = ['maker14'].map(v => v + ' <teks|teks>')
handler.tags = ['maker']
handler.command = /^(maker14)$/i
export default handler