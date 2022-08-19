let handler = async(m, { conn, usedPrefix, command, text }) => {
let fdoc = {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${command}`}}}}

if (!text) throw `Gunakan contoh ${usedPrefix + command} hello|helo`
let urut = text.split`|`

  let teksnya = urut[0]
  let teksnya2 = urut[1]
  
	let lis = ["3dgalaxy-metal",
"3dgold",
"3drosegold",
"3dsilver",
"3dspace",
"3dstone",
"3dvintage",
"avengers",
"balloons-cards",
"balloons-love",
"classic8bit",
"cutegirl",
"floraltext",
"glitchtext",
"gradientlogo",
"horrortext",
"juventus",
"layeredtext",
"lion-mascot",
"marvel",
"metal-marvel",
"metal-molding",
"ninja-black&white",
"phtext",
"spider-man",
"thortext",
"tiktok",
"typography-greenleaf",
"wolf-black&white",
"wolf-galaxy"]
	let row = Object.keys(lis).map((v, index) => ({
		title: htjava + ' ' + lis[v],
		description: 'No. ' + index,
		rowId: usedPrefix + 'textprox2 ' + lis[v] + '|' + teksnya + '|' + teksnya2
	}))
	let button = {
		buttonText: `☂️ Tema Disini ☂️`,
		description: `⚡ Silakan pilih tema di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)

}
handler.help = ['maker10'].map(v => v + ' <teks|teks>')
handler.tags = ['maker']
handler.command = /^(maker10)$/i
export default handler