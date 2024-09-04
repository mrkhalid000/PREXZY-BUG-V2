require("./all/module")

global.owner = "2348023898600" 
global.namabot = "ᏦᏆᑎᏀ ᏦᕼᗩしᏆᗞ bug bot" //BOT NAME
global.namaCreator = "*ᏦᏆᑎᏀ ᏦᕼᗩしᏆᗞ*" //CREATOR NAME
global.autoJoin = false //DON'T CHANGE  / JANGAN GANTI
global.antilink = false //DON'T CHANGE  / JANGAN GANTI
global.versisc = '1.0.0' //DON'T CHANGE 
global.sessionName = 'session'
global.codeInvite = ""
global.imageurl = 'https://telegra.ph/file/9c48d6c33fe541f56a2b3.jpg' //GANTI PP MU MENGGUNAKAN LINK TELEGRA PH
global.isLink = 'https://whatsapp.com/channel/0029VaaUfPO8qIzztuf42D04' 
global.thumb = fs.readFileSync("./thumb.png") ///DON'T CHANGE  
global.audionya = fs.readFileSync("./all/sound.mp3") //DON'T CHANGE  
global.packname = "ᏦᏆᑎᏀ ᏦᕼᗩしᏆᗞ " 
global.author = "*ᏦᏆᑎᏀ ᏦᕼᗩしᏆᗞ*" 
global.jumlah = "5" ////DON'T CHANGE

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
