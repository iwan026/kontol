// THANKSTO
// ABIL BOTZ
// DHANI BOTZ
// ALL MY SUBSCRIBER
// UWNXEIGFLALWJDBABDKE
// JANGAN SOK DEWASA KALAU DIRILU AJA BLUM BISA LU CONTROL
//--
// CAPEK ? ISTIRAHAT LAH
// JANGAN LUPA NAFAS YOOO
//________________________________________________________________________________________________________________________

const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const fs = require("fs")
const axios = require('axios')
const speed = require("performance-now")
const util = require('util')
const crypto = require('crypto')
const request = require('request')
const { exec, spawn } = require('child_process')
const fetch = require('node-fetch')
const moment = require('moment-timezone')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')

//══════════[ Lib ]══════════//

const { fetchJosn, fetchText } = require('./lib/fetcher')
const { color, bgcolor } = require('./lib/color')
const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')

//══════════[ Setting ]══════════//

autoread = true
autocomposing = false
autorecording = false
//----

let owner = '6282228462822' // NO OWNER
let botname = '© Emerald Store' // NAMA BOT
let ownername = '© Emerald Store' // NAMA OWNER
let fake = '© Emerald Store' // FAKENYA
let yt = 'https://youtube.com/channel/UCJPqI5eVhKPXPL2V8y6pIDA' // YT LU
let gopay = 'http://bit.ly/qrgopay' // QRGOPAY / NO GOPAY
let dana = '-' // QRDANA / NO DANA
let ovo = 'http://bit.ly/qrovo' // QROVO / NO OVO
let pulsa = '082293295376' // PULSA

const fakeimage = fs.readFileSync ('./media/dhani.jpg')
const fakedhani = fs.readFileSync ('./media/thumb.jpg')

//══════════[ Data Base ]══════════//

const _antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const _antivirtex = JSON.parse(fs.readFileSync('./database/antivirtex.json'))

//══════════[ Module Export ]══════════//
		
module.exports = Dhani = async (Dhani, mek, _welkom) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
    	mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, contactsArray, groupInviteMessage, listMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
		const tanggal = moment.tz('Asia/Jakarta').format('dddd') + ', ' + moment.tz('Asia/Jakarta').format('LL')
		const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
		const timeMak = moment().tz('Asia/Makassar').format("HH:mm:ss");
        const timeJay = moment().tz('Asia/Jayapura').format("HH:mm:ss");
        const type = Object.keys(mek.message)[0]        
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '#'          	
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		const arg = budy.slice(command.length + 2, budy.length)
		const c = args.join(' ')
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const Verived = "0@s.whatsapp.net"
		const txt = mek.message.conversation
		const botNumber = Dhani.user.jid
		const ownerNumber = [`${owner}@s.whatsapp.net`, `6281333603591@s.whatsapp.net`]
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		let senderr = mek.key.fromMe ? Dhani.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
		const groupMetadata = isGroup ? await Dhani.groupMetadata(from) : ''.toString
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
        const senderNumber = sender.split("@")[0]
        const hour_now = moment().format('HH:mm:ss')
		const conts = mek.key.fromMe ? Dhani.user.jid : Dhani.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? Dhani.user.name : conts.notify || conts.vname || conts.name || '-'    
    
		const isAntiLink = isGroup ? _antilink.includes(from) : false
		const isWelkom = isGroup ? _welkom.includes(from) : false
		const isAntiVirtex = isGroup ? _antivirtex.includes(from) : false
		const isOwner = ownerNumber.includes(sender)
		const isMybot = isOwner || mek.key.fromMe
		let bio_nya = await Dhani.getStatus(sender)
		try {
			bio_user = `${bio_nya.status}`
		} catch {
			bio_user = '-'
			}

//══════════[ Mess Dll ]══════════//

mess = {
wait: '𝙋𝙍𝙊𝙎𝙀𝙎 ....',
eror: '𝙈𝘼𝘼𝙁 𝙏𝙀𝙍𝙅𝘼𝘿𝙄 𝙆𝙀𝙎𝘼𝙇𝘼𝙃𝘼𝙉 !!',
success: '𝙎𝙐𝙆𝙎𝙀𝙎 ✅️',
error: {
stick: '𝙈𝘼𝘼𝙁 𝙄𝙏𝙐 𝘽𝙐𝙆𝘼𝙉 𝙎𝙏𝙄𝘾𝙆𝙀𝙍 !!',
Iv: '𝙇𝙄𝙉𝙆 𝙄𝙉𝙑𝘼𝙇𝙄𝘿 !!'
},
only: {
group: '𝙁𝙄𝙏𝙐𝙍 𝙃𝘼𝙉𝙔𝘼 𝘿𝘼𝙋𝘼𝙏 𝘿𝙄 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘿𝙄 𝘿𝘼𝙇𝘼𝙈 𝙂𝙍𝙐𝙋 !!',
owner: '𝙁𝙄𝙏𝙐𝙍 𝙃𝘼𝙉𝙔𝘼 𝘿𝘼𝙋𝘼𝙏 𝘿𝙄 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝙊𝙇𝙀𝙃 𝙊𝙒𝙉𝙀𝙍 𝘽𝙊𝙏 !!',
admin: '𝙁𝙄𝙏𝙐𝙍 𝙃𝘼𝙉𝙔𝘼 𝘿𝘼𝙋𝘼𝙏 𝘿𝙄 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝙊𝙇𝙀𝙃 𝘼𝘿𝙈𝙄𝙉 𝙂𝙍𝙐𝙋 !!',
Badmin: '𝙅𝘼𝘿𝙄𝙆𝘼𝙉 𝘼𝘿𝙈𝙄𝙉 𝙅𝙄𝙆𝘼 𝙈𝘼𝙐 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝙁𝙄𝙏𝙐𝙍  𝙄𝙏𝙐 !!'
}
}

//══════════[ BUTTON ]══════════//

const sendButton = async (from, context, fortext, but, mek) => {
            buttonMessages = {
                contentText: context,
                footerText: fortext,
                buttons: but,
                headerType: 1
            }
            Dhani.sendMessage(from, buttonMessages, buttonsMessage, {
                quoted: mek
            })
        }
//BUTTON TEXT//
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
Dhani.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
//BUTTON IMAGE//
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await Dhani.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
Dhani.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
//BUTTON VIDEO//
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await Dhani.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
Dhani.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
//BUTTON LOCATION//
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await Dhani.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
Dhani.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

//══════════[ Fake ]══════════//

        const listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
            let po = Dhani.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "𝐌𝐄𝐍𝐔","footerText": `${tanggal}`,"listType": "SINGLE_SELECT","sections": list}}, {})
            return Dhani.relayWAMessage(po, {waitForAck: true})
        }
const reply = (teks) => {
Dhani.sendMessage(from, teks, text, {quoted:mek})
}
const sendMess = (hehe, teks) => {
Dhani.sendMessage(hehe, teks, text)
}
const fakeyt = (teks) => {
Dhani.sendMessage(from, teks, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
                "title": `${tanggal}`,
                "body": `${botname}`,
                "mediaType": "10",
                "mediaUrl": `${yt}`,
                "thumbnailUrl": "https://telegra.ph/file/64a3f4a3ea76ee25e201a.jpg",
                "thumbnail": fakeimage,
                "sourceUrl": `${yt}`,
},mentionedJid:[sender]}, quoted : mek})
};
const isUrl = (url) => {
    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }
        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? Dhani.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : Dhani.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": memberr } })
        }
        const costum = (pesan, tipe, target, target2) => {
			Dhani.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
		}
        const fakestatus = (teks) => {
            Dhani.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./media/dhani.jpg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const fakegroup = (teks) => {
            Dhani.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./media/dhani.jpg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 123,
                            status: 1,
                            surface : 1,
                            message: `${tanggal}`, 
                            orderTitle: `${botname}`,
                            thumbnail: fakedhani, //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
                      
//══════════[ Storage ]══════════//

        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    Dhani.sendMessage(to, media, type, { quoted: ftrol, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }  

//══════════[ Grup ]══════════//

const hideTag = async function(from, text){
           let anu = await Dhani.groupMetadata(from)
           let members = anu.participants
           let ane = []
           for (let i of members){
           ane.push(i.jid)
}
           Dhani.sendMessage(from, {text:text, jpegThumbnail:fs.readFileSync('media/dhani.jpg')}, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
}

//══════════[ Antilink & Antivirtex ]══════════//

if (budy.includes("https://chat.whatsapp.com/")) {
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
fakeyt(` *「 GROUP LINK DETECTOR 」*\nKamu mengirimkan link grup chat, maaf kamu di kick dari grup`)
setTimeout(() => {
Dhani.groupRemove(from, [kic]).catch((e) => { fakeyt(`BOT HARUS JADI ADMIN`) })
}, 0)
}

if (budy.length > 3500) {
if (!isGroup) return
if (!isAntiVirtex) return
if (isGroupAdmins) return
fakeyt('Tandai telah dibaca\n'.repeat(300))
fakeyt(`「 *VIRTEX DETECTOR* 」\n\nKamu mengirimkan virtex, maaf kamu di kick dari group`)
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
Dhani.groupRemove(from, [sender])
}     

//══════════[ Waktu Dll ]══════════//

if (autoread){
Dhani.chatRead(from, "read")
} else if (autocomposing) {
Dhani.updatePresence(from, Presence.composing)
} else if (autorecording) {
Dhani.updatePresence(from, Presence.recording)
}

const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = 'Selamat Malam'
}
        if(time2 < "19:00:00"){
        var ucapanWaktu = 'Selamat Petang'
}
        if(time2 < "18:00:00"){
        var ucapanWaktu = 'Selamat Sore'
}
        if(time2 < "15:00:00"){
        var ucapanWaktu = 'Selamat Siang️'
}
        if(time2 < "11:00:00"){
        var ucapanWaktu = 'Selamat Pagi'
}
        if(time2 < "05:00:00"){
        var ucapanWaktu = 'Selamat Malam'
}

		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
      	if (!isGroup && isCmd) console.log('\x1b[1;31m[ PC\x1b[1;37m ]', '[\x1b[1;32m PRIBADI \x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m[ GC\x1b[1;37m ]', '[\x1b[1;32m GROUP \x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
switch (command) {

//══════════[ FITUR FITUR OY ]══════════//
case 'menu':
menu =
`*${ucapanWaktu} @${sender.split('@')[0]}*


*( 𝗚𝗥𝗨𝗣 𝗠𝗘𝗡𝗨 )*

⊛ ${prefix}antilink *on / off*
⊛ ${prefix}antivirtex *on / off*
⊛ ${prefix}welcome *on / off*
⊛ ${prefix}group *buka / tutup*
⊛ ${prefix}promote *@tag / reply*
⊛ ${prefix}demote *@tag / reply*
⊛ ${prefix}add *628xx*
⊛ ${prefix}kick *@tag / reply*
⊛ ${prefix}setpp *reply / cap*
⊛ ${prefix}setdesc *teks*
⊛ ${prefix}setname *teks*
⊛ ${prefix}hidetag *teks*
⊛ ${prefix}linkgrup
⊛ ${prefix}infogrup
⊛ ${prefix}listonline
⊛ ${prefix}resetlinkgrup


*( 𝗦𝗧𝗢𝗥𝗘 𝗠𝗘𝗡𝗨 )*

⊛ ${prefix}proses
⊛ ${prefix}done
⊛ ${prefix}store
⊛ ${prefix}masukandata
⊛ ${prefix}payment
⊛ ${prefix}dmff
⊛ ${prefix}dmml
⊛ ${prefix}ucpubg
⊛ ${prefix}cod
⊛ ${prefix}sausageman
⊛ ${prefix}jasher


*( 𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨 )*

⊛ ${prefix}owner
⊛ ${prefix}bc *Teks*
⊛ ${prefix}upswteks
⊛ ${prefix}upswsticker
⊛ ${prefix}upswaudio
⊛ ${prefix}upswvideo
⊛ ${prefix}upswimage

*( THANKS TO )*
=> ORTU GW
=> ABIL BOTZ
=> BOTZ DHANI ?
=> ${ownername} ( OWNER BOT )
=> ALL MY SUBSCRIBER
_________________________________`
teks =
`「 ${botname} 」\n*${tanggal}*`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}store`, buttonText: { displayText: 'sᴛᴏʀᴇ' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'ᴏᴡɴᴇʀ' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break

//══════════[ STORE ]══════════//

case 'store':
               list = []
               listmenu = [`game`,`pulsa`,`ewallet`,`listrik`]
               listmenuu = [`TOP UP GAME`,`PULSA ALL OPERATOR`,`TOP UP SALDO EWALLET`,`TOKEN LISTRIK`,`JASA POST (FREE)`,`JASA REKBER`]
               nombor = 1
               startnum = 0
               for (let x of listmenu) {
               const yy = {title: 'Silakan Di Pilih',
                    rows: [
                       {
                        title: `${listmenuu[startnum++]}`,
                        description: ``,
                        rowId: `${prefix}${x}`
                      }
                    ]
                   }
                        list.push(yy)
           }
               listmsg(from, `${ucapanWaktu}`, `Hai Kak ${pushname}, Silahkan Pilih Menu Dibawah`, list)
               break
               
case 'game':              
               list = []
               listmenu = [`ml`,`ff`,`pubg`,`aov`,`codm`,`chip`,`crystal`,`point`,`candy`,] 
               listmenuu = [`MOBILE LEGENDS`,`FREE FIRE`,`PUBG MOBILE`,`ARENA OF VALOR`,`CALL OF DUTY`,`HIGGS DOMINO`,`GENSHIN IMPACT`,`VALORANT`,`SAUSAGE MAN`,] 
               nombor = 1
               startnum = 0
               for (let x of listmenu) {
               const yy = {title: 'EMERALD STORE',
                    rows: [
                       {
                        title: `${listmenuu[startnum++]}`,
                        description: ``,
                        rowId: `${prefix}${x}`
                      }
                    ]
                   }
                        list.push(yy)
           }
               listmsg(from, `${ucapanWaktu}`,   `Hai Kak *${pushname}*\n©simplelist, Silahkan Di Order Manieeez`, list)
               break
               
  case 'pulsa':
               list = []
               listmenu = [`tsel`,`indosat`,`axis`,`three`,`xl`,`smart`,] 
               listmenuu = [`PULSA TELKOMSEL`,`PULSA INDOSAT`,`PULSA AXIS`,`PULSA THREE`,`PULSA XL`,`PULSA SMARTFREN`,] 
               nombor = 1
               startnum = 0
               for (let x of listmenu) {
               const yy = {title: 'EMERALD STORE',
                    rows: [
                       {
                        title: `${listmenuu[startnum++]}`,
                        description: `List Isi Ulang Pulsa`,
                        rowId: `${prefix}${x}`
                      }
                    ]
                   }
                        list.push(yy)
           }
               listmsg(from, `${ucapanWaktu}`,   `Hai Kak *${pushname}*\n©simplelist, Silahkan Di Order Manieeez`, list)
               break
  
               case 'ewallet':
               list = []
               listmenu = [`dana`,`gopay`,`ovo`,`linkaja`,`shopee`,]
               listmenuu = [`SALDO DANA`,`SALDO GOPAY`,`SALDO OVO`,`SALDO LINKAJA`,`SALDO SHOPEEPAY`,]
               nombor = 1
               startnum = 0
               for (let x of listmenu) {
               const yy = {title: 'List vn', 
                    rows: [
                       {
                        title: `${listmenuu[startnum++]}`,
                        description: ``,
                        rowId: `${prefix}${x}`
                      }
                    ]
                   }
                        list.push(yy)
           }
               listmsg(from, `${ucapanWaktu}`,   `Hai Kak *${pushname}*\n©simplelist, Silahkan Di Order Manieeez`, list)
               break          
case 'proses':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
menu = `_Orderan Sedang Di Proses Silakan Di Tunggu_

*⏰ Jam ⵓ* _${time} WIB_
*📅 Tanggal ⵓ* _${tanggal}_

_Pesanan Sedang Di Proses Harap Di Tunggu Ya Kak !!_`
reply(menu)
break
case 'done':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
menu =`_Done Kak Orderan Telah Di Terima_

*⏰ Jam ⵓ* _${time} WIB_
*📅 Tanggal ⵓ* _${tanggal}_


_All Trx No Reff Jadi Barang Tidak Bisa  Di Kembalikan Karna Sudah Bilang Done !!_`
reply(menu)
break

case 'form':
menu =`*${ucapanWaktu} @${sender.split('@')[0]}*
*FORMAT ORDER EMERALD STORE!!*

_*Format Order Voucher Game*_
*• ID (Server) :*
*• Nickname :*
*• Jumlah Order :*

_*Format Order Pulsa & Ewallet*_
*• No Hp :*
*• Jumlah Order :*

_*Format Order Token Listrik*_
*• No Hp :*
*• No Meteran :*
*• Jumlah Order :*`
teks =`*Pastikan Format Benar !!*
*Kesalahan pengisian karena data yang diberikan salah,*
*Kami tidak bertanggung jawab !!*
*Jika Sudah Selesai Isi Format Harap Kirim Ke Owner !!*
*Terima kasih*

${tanggal}`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}payment`, buttonText: { displayText: 'ʙᴀʏᴀʀ' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'ᴏᴡɴᴇʀ' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break

case 'ml':
case 'diamondmobilelegends':
gambar = fs.readFileSync('./media/qr.jpg')
menunya = `*「 PRICELIST DIAMOND MOBILE LEGENDS 」*
_*• VIA ID (SERVER) + NICK*_
_*• LEGAL 100%*_
_*• PROSES 1-10 MENIT, MAX 24 JAM*_

65 💎 : Rp 15.000
86 💎 : Rp 20.500
129 💎 : Rp 30.000
172 💎 : Rp 40.700
194 💎 : Rp 45.000
257 💎 : Rp 60.800
344 💎 : Rp 80.950
429 💎 : Rp 101.000
514 💎 : Rp 121.300
530 💎 : Rp 118.000
600 💎 : Rp 141.550
706 💎 : Rp 161.700
878 💎 : Rp 202.000
1050 💎 : Rp 242.300
1220 💎 : Rp 282.600
1412 💎 : Rp 322.900
1647 💎 : Rp 351.000
2195 💎 : Rp 479.550
2767 💎 : Rp 582.000

*Note : 
• Harga bisa berubah sewaktu waktu
• Pastikan data yang diberikan sudah benar
• Kesalahan ID akun bukan tanggung jawab admin*`
teks =
`「 ${botname} 」\n*${tanggal}*`
but = [
          { buttonId: `${prefix}payment`, buttonText: { displayText: 'PEMBAYARAN' }, type: 1 },
          { buttonId: `${prefix}form`, buttonText: { displayText: 'FORMAT ORDER' }, type: 1 }
        ]
        sendButImage(from, menunya, teks, gambar, but)
break

case 'ff':
case 'diamondfreefire':
gambar = fs.readFileSync('./media/qr.jpg')
menunya = `*「 PRICELIST DIAMOND FREE FIRE 」*
_*• VIA ID & NICK*_
_*• LEGAL 100%*_
_*• PROSES 1-10 MENIT, MAX 24 JAM*_

5 💎 : Rp 1.500
20 💎 : Rp 3.500
50 💎 : Rp 7.500
70 💎 : Rp 9.500
100 💎 : Rp 13.500
140 💎 : Rp 18.500
210 💎 : Rp 28.000
355 💎 : Rp 46.500
425 💎 : Rp 55.500
500 💎 : Rp 65.500
635 💎 : Rp 83.500
720 💎 : Rp 92.500
860 💎 : Rp 111.000
1075 💎 : Rp 138.500
1440 💎 : Rp 185.000
2000 💎 : Rp 252.000
2720 💎 : Rp 345.000
3440 💎 : Rp 437.000
4000 💎 : Rp 504.000
6000 💎 : Rp 756.000
7290 💎 : Rp 925.000

*Note : 
• Harga bisa berubah sewaktu waktu
• Pastikan data yang diberikan sudah benar
• Kesalahan ID akun bukan tanggung jawab admin*`
teks =
`「 ${botname} 」\n*${tanggal}*`
but = [
          { buttonId: `${prefix}payment`, buttonText: { displayText: 'PEMBAYARAN' }, type: 1 },
          { buttonId: `${prefix}form`, buttonText: { displayText: 'FORMAT ORDER' }, type: 1 }
        ]
        sendButImage(from, menunya, teks, gambar, but)
break

case 'pubg':
case 'ucpubg':
gambar = fs.readFileSync('./media/qr.jpg')
menunya = `*「 PRICELIST UC PUBG MOBILE 」*
_*• VIA ID*_
_*• LEGAL 100%*_
_*• PROSES 10-30 MENIT, MAX 24 JAM*_

25 UC : Rp 5.000
52 UC : Rp 9.700
105 UC : Rp 18.500
131 UC : Rp 23.000
156 UC : Rp 28.000
263 UC : Rp 45.000
525 UC : Rp 88.000
788 UC : Rp 133.000
1050 UC : Rp 176.000
1375 UC : Rp 220.000
1638 UC : Rp 265.000
1900 UC : Rp 309.000
2163 UC : Rp 353.000
2425 UC : Rp 397.000
2875 UC : Rp 440.000
3138 UC : Rp 485.000
3400 UC : Rp 529.000
3925 UC : Rp 615.000
4250 UC : Rp 668.000
6000 UC : Rp 888.000

*Note : 
• Harga bisa berubah sewaktu waktu
• Pastikan data yang diberikan sudah benar
• Kesalahan ID akun bukan tanggung jawab admin*`
teks =
`「 ${botname} 」\n*${tanggal}*`
but = [
          { buttonId: `${prefix}payment`, buttonText: { displayText: 'PEMBAYARAN' }, type: 1 },
          { buttonId: `${prefix}form`, buttonText: { displayText: 'FORMAT ORDER' }, type: 1 }
        ]
        sendButImage(from, menunya, teks, gambar, but)
break

case 'aov':
case 'voucheraov':
gambar = fs.readFileSync('./media/qr.jpg')
menunya = `*「 PRICELIST VOUCHER AOV 」*
_*• VIA ID*_
_*• LEGAL 100%*_
_*• PROSES 1-10 MENIT, MAX 24 JAM*_

40 Voc : Rp 9.500
90 Voc : Rp 18.500
230 Voc : Rp 46.500
270 Voc : Rp 55.000
320 Voc : Rp 64.500
470 Voc : Rp 92.500
700 Voc : Rp 138.500
950 Voc : Rp 185.000
1180 Voc : Rp 231.000
1430 Voc : Rp 277.500

*Note : 
• Harga bisa berubah sewaktu waktu
• Pastikan data yang diberikan sudah benar
• Kesalahan ID akun bukan tanggung jawab admin
• Akun wajib tidak di kaitkan akun Garena*`
teks =
`「 ${botname} 」\n*${tanggal}*`
but = [
          { buttonId: `${prefix}payment`, buttonText: { displayText: 'PEMBAYARAN' }, type: 1 },
          { buttonId: `${prefix}form`, buttonText: { displayText: 'FORMAT ORDER' }, type: 1 }
        ]
        sendButImage(from, menunya, teks, gambar, but)
break

case 'codm':
case 'cashpointcodm':
gambar = fs.readFileSync('./media/qr.jpg')
menunya = `*「 PRICELIST CP CALL OF DUTY 」*
_*• VIA ID*_
_*• LEGAL 100%*_
_*• PROSES 1-10 MENIT, MAX 24 JAM*_

63 CP : Rp 9.500
128 CP : Rp 18.500
318 CP : Rp 46.500
381 CP : Rp 55.000
446 CP : Rp 64.500
634 CP : Rp 92.500
952 CP : Rp 138.500
1373 CP : Rp 185.000
1691 CP : Rp 231.000
2090 CP : Rp 277.500

*Note : 
• Harga bisa berubah sewaktu waktu
• Pastikan data yang diberikan sudah benar
• Kesalahan ID akun bukan tanggung jawab admin
• Akun wajib tidak di kaitkan akun Garena*`
teks =
`「 ${botname} 」\n*${tanggal}*`
but = [
          { buttonId: `${prefix}payment`, buttonText: { displayText: 'PEMBAYARAN' }, type: 1 },
          { buttonId: `${prefix}form`, buttonText: { displayText: 'FORMAT ORDER' }, type: 1 }
        ]
        sendButImage(from, menunya, teks, gambar, but)
break

case 'chip':
case 'chiphiggsdomino':
gambar = fs.readFileSync('./media/qr.jpg')
menunya = `*「 PRICELIST CHIP HIGGS DOMINO 」*
_*• VIA ID & NICK*_
_*• LEGAL 100%*_
_*• PROSES 1-10 MENIT, MAX 24 JAM*_

100M : Rp 7.500
200M : Rp 14.500
300M : Rp 22.000
400M : Rp 30.000
500M : Rp 35.000
600M : Rp 44.000
700M : Rp 50.000
800M : Rp 57.000
900M : Rp 62.000
1B : Rp 68.000

*Note : 
• Harga bisa berubah sewaktu waktu
• Pastikan data yang diberikan sudah benar
• Kesalahan ID akun bukan tanggung jawab admin*`
teks =
`「 ${botname} 」\n*${tanggal}*`
but = [
          { buttonId: `${prefix}payment`, buttonText: { displayText: 'PEMBAYARAN' }, type: 1 },
          { buttonId: `${prefix}form`, buttonText: { displayText: 'FORMAT ORDER' }, type: 1 }
        ]
        sendButImage(from, menunya, teks, gambar, but)
break

case 'crystal':
case 'crystalgenshinimpact':
gambar = fs.readFileSync('./media/qr.jpg')
menunya = `*「 PRICELIST GC GENSHIN IMPACT 」*
_*• VIA ID*_
_*• LEGAL 100%*_
_*• PROSES 1-10 MENIT, MAX 24 JAM*_

60 GC : Rp 13.500
120 GC : Rp 27.000
330 GC : Rp 65.000
450 GC : Rp 92.000
660 GC : Rp 130.000
1090 GC : Rp 194.000
2440 GC : Rp 405.000
3880 GC : Rp 622.000
4480 GC : Rp 810.000
8080 GC : Rp 1.245.000

*Note : 
• Harga bisa berubah sewaktu waktu
• Pastikan data yang diberikan sudah benar
• Kesalahan ID akun bukan tanggung jawab admin*`
teks =
`「 ${botname} 」\n*${tanggal}*`
but = [
          { buttonId: `${prefix}payment`, buttonText: { displayText: 'PEMBAYARAN' }, type: 1 },
          { buttonId: `${prefix}form`, buttonText: { displayText: 'FORMAT ORDER' }, type: 1 }
        ]
        sendButImage(from, menunya, teks, gambar, but)
break

case 'point':
case 'valorantpoint':
gambar = fs.readFileSync('./media/qr.jpg')
menunya = `*「 PRICELIST VALORANT POINT 」*
_*• VIA IGN+*_
_*• LEGAL 100%*_
_*• PROSES 1-10 MENIT, MAX 24 JAM*_

125 VP : Rp 16.000
250 VP : Rp 32.000
420 VP : Rp 50.000
700 VP : Rp 79.000
1120 VP : Rp 126.700
1375 VP : Rp 148.500
1795 VP : Rp 198.000
2075 VP : Rp 227.700
2400 VP : Rp 247.500
3100 VP : Rp 326.700

*Note : 
• Harga bisa berubah sewaktu waktu
• Pastikan data yang diberikan sudah benar
• Kesalahan ID akun bukan tanggung jawab admin*`
teks =
`「 ${botname} 」\n*${tanggal}*`
but = [
          { buttonId: `${prefix}payment`, buttonText: { displayText: 'PEMBAYARAN' }, type: 1 },
          { buttonId: `${prefix}form`, buttonText: { displayText: 'FORMAT ORDER' }, type: 1 }
        ]
        sendButImage(from, menunya, teks, gambar, but)
break

case 'candy':
case 'candysausageman':
gambar = fs.readFileSync('./media/qr.jpg')
menunya = `*「 PRICELIST CANDY SAUSAGE MAN 」*
_*• VIA ID*_
_*• LEGAL 100%*_
_*• PROSES 1-10 MENIT, MAX 24 JAM*_

60 Candy : Rp 15.400
180 Candy : Rp 45.000
316 Candy : Rp 65.000
496 Candy : Rp 110.000
556 Candy : Rp 125.000
718 Candy : Rp 158.000
1368 Candy : Rp 256.000
2118 Candy : Rp 416.000
3548 Candy : Rp 640.000
7048 Candy : Rp 1.280.000

*Note : 
• Harga bisa berubah sewaktu waktu
• Pastikan data yang diberikan sudah benar
• Kesalahan ID akun bukan tanggung jawab admin*`
teks =
`「 ${botname} 」\n*${tanggal}*`
but = [
          { buttonId: `${prefix}payment`, buttonText: { displayText: 'PEMBAYARAN' }, type: 1 },
          { buttonId: `${prefix}form`, buttonText: { displayText: 'FORMAT ORDER' }, type: 1 }
        ]
        sendButImage(from, menunya, teks, gambar, but)
break

case 'tsel':
case 'pulsatelkomsel':
gambar = fs.readFileSync('./media/qr.jpg')
menunya = `*「 PRICELIST PULSA TELKOMSEL 」*
_*• PROSES 1-10 MENIT, MAX 24 JAM*_

Tsel 1.000 : Rp 1.850
Tsel 5.000 : Rp 5.600
Tsel 10.000 : Rp 10.579
Tsel 15.000 : Rp 15.350
Tsel 20.000 : Rp 20.325
Tsel 25.000 : Rp 25.300
Tsel 30.000 : Rp 30.200
Tsel 40.000 : Rp 39.700
Tsel 50.000 : Rp 50.200
Tsel 75.000 : Rp 73.000
Tsel 100.000 : Rp 97.550

*Note : 
• Harga bisa berubah sewaktu waktu
• Pastikan data yang diberikan sudah benar
• Kesalahan pengisian karena data yang dikirim tidak benar bukan tanggung jawab admin*`
teks =
`「 ${botname} 」\n*${tanggal}*`
but = [
          { buttonId: `${prefix}payment`, buttonText: { displayText: 'PEMBAYARAN' }, type: 1 },
          { buttonId: `${prefix}form`, buttonText: { displayText: 'FORMAT ORDER' }, type: 1 }
        ]
        sendButImage(from, menunya, teks, gambar, but)
break

case 'indosat':
case 'pulsaindosat':
gambar = fs.readFileSync('./media/qr.jpg')
menunya = `*「 PRICELIST PULSA INDOSAT 」*
_*• PROSES 1-10 MENIT, MAX 24 JAM*_

Indosat 5.000 : Rp 6.035
Indosat 10.000 : Rp 11.060
Indosat 20.000 : Rp 20.225
Indosat 25.000 : Rp 25.250
Indosat 30.000 : Rp 29.925
Indosat 50.000 : Rp 49.300
Indosat 100.000 : Rp 97.115

*Note : 
• Harga bisa berubah sewaktu waktu
• Pastikan data yang diberikan sudah benar
• Kesalahan pengisian karena data yang dikirim tidak benar bukan tanggung jawab admin*`
teks =
`「 ${botname} 」\n*${tanggal}*`
but = [
          { buttonId: `${prefix}payment`, buttonText: { displayText: 'PEMBAYARAN' }, type: 1 },
          { buttonId: `${prefix}form`, buttonText: { displayText: 'FORMAT ORDER' }, type: 1 }
        ]
        sendButImage(from, menunya, teks, gambar, but)
break

case 'axis':
case 'pulsaaxis':
gambar = fs.readFileSync('./media/qr.jpg')
menunya = `*「 PRICELIST PULSA AXIS 」*
_*• PROSES 1-10 MENIT, MAX 24 JAM*_

Axis 5.000 : Rp 6.090
Axis 10.000 : Rp 11.065
Axis 15.000 : Rp 15.195
Axis 25.000 : Rp 25.250
Axis 30.000 : Rp 29.095
Axis 50.000 : Rp 49.795
Axis 100.000 : Rp 99.400

*Note : 
• Harga bisa berubah sewaktu waktu
• Pastikan data yang diberikan sudah benar
• Kesalahan pengisian karena data yang dikirim tidak benar bukan tanggung jawab admin*`
teks =
`「 ${botname} 」\n*${tanggal}*`
but = [
          { buttonId: `${prefix}payment`, buttonText: { displayText: 'PEMBAYARAN' }, type: 1 },
          { buttonId: `${prefix}form`, buttonText: { displayText: 'FORMAT ORDER' }, type: 1 }
        ]
        sendButImage(from, menunya, teks, gambar, but)
break

case 'three':
case 'pulsathree':
gambar = fs.readFileSync('./media/qr.jpg')
menunya = `*「 PRICELIST PULSA THREE 」*
_*• PROSES 1-10 MENIT, MAX 24 JAM*_

Three 1.000 : Rp 1.325
Three 2.000 : Rp 2.300
Three 3.000 : Rp 3.270
Three 4.000 : Rp 4.490
Three 5.000 : Rp 5.575
Three 10.000 : Rp 10.480
Three 15.000 : Rp 14.960
Three 20.000 : Rp 19.800
Three 25.000 : Rp 24.688
Three 30.000 : Rp 29.645
Three 50.000 : Rp 49.050
Three 100.000 : Rp 97.750

*Note : 
• Harga bisa berubah sewaktu waktu
• Pastikan data yang diberikan sudah benar
• Kesalahan pengisian karena data yang dikirim tidak benar bukan tanggung jawab admin*`
teks =
`「 ${botname} 」\n*${tanggal}*`
but = [
        { buttonId: `${prefix}payment`, buttonText: { displayText: 'PEMBAYARAN' }, type: 1 },
          { buttonId: `${prefix}form`, buttonText: { displayText: 'FORMAT ORDER' }, type: 1 }
        ]
        sendButImage(from, menunya, teks, gambar, but)
break

case 'xl':
case 'pulsaxl':
gambar = fs.readFileSync('./media/qr.jpg')
menunya = `*「 PRICELIST PULSA XL 」*
_*• PROSES 1-10 MENIT, MAX 24 JAM*_

XL 5.000 : Rp 6.090
XL 10.000 : Rp 11.065
XL 15.000 : Rp 15.170
XL 25.000 : Rp 24.975
XL 30.000 : Rp 30.000
XL 50.000 : Rp 49.000
XL 100.000 : Rp 99.100

*Note : 
• Harga bisa berubah sewaktu waktu
• Pastikan data yang diberikan sudah benar
• Kesalahan pengisian karena data yang dikirim tidak benar bukan tanggung jawab admin*`
teks =
`「 ${botname} 」\n*${tanggal}*`
but = [
          { buttonId: `${prefix}payment`, buttonText: { displayText: 'PEMBAYARAN' }, type: 1 },
          { buttonId: `${prefix}form`, buttonText: { displayText: 'FORMAT ORDER' }, type: 1 }
        ]
        sendButImage(from, menunya, teks, gambar, but)
break

case 'smart':
case 'pulsasmartfren':
gambar = fs.readFileSync('./media/qr.jpg')
menunya = `*「 PRICELIST PULSA SMARTFREN 」*
_*• PROSES 1-10 MENIT, MAX 24 JAM*_

XL 5.000 : Rp 6.090
XL 10.000 : Rp 11.065
XL 15.000 : Rp 15.170
XL 25.000 : Rp 24.975
XL 30.000 : Rp 30.000
XL 50.000 : Rp 49.000
XL 100.000 : Rp 99.100

*Note : 
• Harga bisa berubah sewaktu waktu
• Pastikan data yang diberikan sudah benar
• Kesalahan pengisian karena data yang dikirim tidak benar bukan tanggung jawab admin*`
teks =
`「 ${botname} 」\n*${tanggal}*`
but = [
          { buttonId: `${prefix}payment`, buttonText: { displayText: 'PEMBAYARAN' }, type: 1 },
          { buttonId: `${prefix}form`, buttonText: { displayText: 'FORMAT ORDER' }, type: 1 }
        ]
        sendButImage(from, menunya, teks, gambar, but)
break

case 'dana':
gambar = fs.readFileSync('./media/qr.jpg')
menunya =`*「 PRICELIST SALDO DANA 」*
_*• PROSES 1-10 MENIT, MAX 24 JAM*_

Saldo 10.000 : Rp 11.500
Saldo 15.000 : Rp 16.500
Saldo 20.000 : Rp 21.500
Saldo 25.000 : Rp 26.500
Saldo 30.000 : Rp 31.500
Saldo 40.000 : Rp 41.500
Saldo 50.000 : Rp 51.500
Saldo 75.000 : Rp 76.500
Saldo 100.000 : Rp 101.500
Saldo 200.000 : Rp 201.500
Saldo 300.000 : Rp 301.500
Saldo 400.000 : Rp 401.500
Saldo 500.000 : Rp 501.500
Saldo 600.000 : Rp 602.500
Saldo 700.000 : Rp 701.500
Saldo 800.000 : Rp 801.500
Saldo 900.000 : Rp 901.500
Saldo 1.000.000 : Rp 1.001.500

*Note : 
• Harga bisa berubah sewaktu waktu
• Pastikan data yang diberikan sudah benar
• Kesalahan pengisian karena data yang dikirim tidak benar bukan tanggung jawab admin*`
teks =
`「 ${botname} 」\n*${tanggal}*`
but = [
          { buttonId: `${prefix}payment`, buttonText: { displayText: 'PEMBAYARAN' }, type: 1 },
          { buttonId: `${prefix}form`, buttonText: { displayText: 'FORMAT ORDER' }, type: 1 }
        ]
        sendButImage(from, menunya, teks, gambar, but)
        break                       

case 'gopay':
gambar = fs.readFileSync('./media/qr.jpg')
menunya =`*「 PRICELIST SALDO GOPAY 」*
_*• PROSES 1-10 MENIT, MAX 24 JAM*_

Saldo 10.000 : Rp 10.500
Saldo 15.000 : Rp 15.500
Saldo 20.000 : Rp 20.500
Saldo 25.000 : Rp 25.500
Saldo 50.000 : Rp 50.500
Saldo 100.000 : Rp 100.500
Saldo 200.000 : Rp 200.500
Saldo 300.000 : Rp 300.500
Saldo 400.000 : Rp 400.500
Saldo 500.000 : Rp 500.500
Saldo 600.000 : Rp 600.500
Saldo 700.000 : Rp 700.500
Saldo 800.000 : Rp 800.500
Saldo 900.000 : Rp 900.500
Saldo 1.000.000 : Rp 1.000.500

*Note : 
• Harga bisa berubah sewaktu waktu
• Pastikan data yang diberikan sudah benar
• Kesalahan pengisian karena data yang dikirim tidak benar bukan tanggung jawab admin*`
teks =
`「 ${botname} 」\n*${tanggal}*`
but = [
          { buttonId: `${prefix}payment`, buttonText: { displayText: 'PEMBAYARAN' }, type: 1 },
          { buttonId: `${prefix}form`, buttonText: { displayText: 'FORMAT ORDER' }, type: 1 }
        ]
        sendButImage(from, menunya, teks, gambar, but)
        break                    

 case 'ovo':
gambar = fs.readFileSync('./media/qr.jpg')
menunya =` *「 PRICELIST SALDO OVO 」*
_*• PROSES 1-10 MENIT, MAX 24 JAM*_

Saldo 20.000 : Rp 22.000
Saldo 25.000 : Rp 27.000
Saldo 30.000 : Rp 32.000
Saldo 40.000 : Rp 42.000
Saldo 50.000 : Rp 52.000
Saldo 75.000 : Rp 77.000
Saldo 100.000 : Rp 102.000
Saldo 200.000 : Rp 202.000
Saldo 300.000 : Rp 302.000
Saldo 400.000 : Rp 402.000
Saldo 500.000 : Rp 502.000
Saldo 600.000 : Rp 602.000
Saldo 700.000 : Rp 702.000
Saldo 800.000 : Rp 802.000
Saldo 900.000 : Rp 902.000
Saldo 1.000.000 : Rp 1.002.000

*Note : 
• Harga bisa berubah sewaktu waktu
• Pastikan data yang diberikan sudah benar
• Kesalahan pengisian karena data yang dikirim tidak benar bukan tanggung jawab admin*`
teks =
`「 ${botname} 」\n*${tanggal}*`
but = [
          { buttonId: `${prefix}payment`, buttonText: { displayText: 'PEMBAYARAN' }, type: 1 },
          { buttonId: `${prefix}form`, buttonText: { displayText: 'FORMAT ORDER' }, type: 1 }
        ]
        sendButImage(from, menunya, teks, gambar, but)
        break                           

case 'shopee':
gambar = fs.readFileSync('./media/qr.jpg')
menunya =`*「PRICELIST SALDO SHOPEEPAY」*
_*• PROSES 1-10 MENIT, MAX 24 JAM*_

Saldo 20.000 : Rp 22.000
Saldo 25.000 : Rp 27.000
Saldo 30.000 : Rp 32.000
Saldo 40.000 : Rp 42.000
Saldo 50.000 : Rp 52.000
Saldo 75.000 : Rp 77.000
Saldo 100.000 : Rp 102.000
Saldo 200.000 : Rp 202.000
Saldo 300.000 : Rp 302.000
Saldo 400.000 : Rp 402.000
Saldo 500.000 : Rp 502.000
Saldo 600.000 : Rp 602.000
Saldo 700.000 : Rp 702.000
Saldo 800.000 : Rp 802.000
Saldo 900.000 : Rp 902.000
Saldo 1.000.000 : Rp 1.002.000

*Note : 
• Harga bisa berubah sewaktu waktu
• Pastikan data yang diberikan sudah benar
• Kesalahan pengisian karena data yang dikirim tidak benar bukan tanggung jawab admin*`
teks =
`「 ${botname} 」\n*${tanggal}*`
but = [
          { buttonId: `${prefix}payment`, buttonText: { displayText: 'PEMBAYARAN' }, type: 1 },
          { buttonId: `${prefix}form`, buttonText: { displayText: 'FORMAT ORDER' }, type: 1 }
        ]
        sendButImage(from, menunya, teks, gambar, but)
        break                         

 case 'listrik':
gambar = fs.readFileSync('./media/qr.jpg')
menunya =` *「 PRICELIST TOKEN LISTRIK 」*
_*• PROSES 1-10 MENIT, MAX 24 JAM*_

Saldo 20.000 : Rp 20.200
Saldo 50.000 : Rp 50.200
Saldo 100.000 : Rp 100.200
Saldo 200.000 : Rp 200.200
Saldo 500.000 : Rp 500.200
Saldo 1.000.000 : Rp 1.000.200

*Note : 
• Harga bisa berubah sewaktu waktu
• Pastikan data yang diberikan sudah benar
• Kesalahan pengisian karena data yang dikirim tidak benar bukan tanggung jawab admin*`
teks =
`「 ${botname} 」\n*${tanggal}*`
but = [
          { buttonId: `${prefix}payment`, buttonText: { displayText: 'PEMBAYARAN' }, type: 1 },
          { buttonId: `${prefix}form`, buttonText: { displayText: 'FORMAT ORDER' }, type: 1 }
        ]
        sendButImage(from, menunya, teks, gambar, but)
        break    

case 'bayar':
case 'payment':
gambar = fs.readFileSync('./media/qr.jpg')
menunya = `*「 PAYMENT EMERALD STORE 」*

*QRIS*
_*SCAN QR DIATAS*_
_Note : Qris Diatas Hanya Menerima Pembayaran Via Dana, Selain Itu Orderan Akan Diproses Hari Berikutnya Sesuai Ketentuan Dana Bisnis!!!_

*E-WALLET* ⤵️
*DANA* : 082228462822
KATIMAH
*OVO* : 082228462822
Emerald Store
*GOPAY* : 082228462822
Emerald Store
*SHOPPE* : 082228462822
Emerald Store

*BANK*
BNC/Neo: 5859458173918062
A.n Katimah

_*PEMBAYARAN ALFAMART / INDOMARET MINTA KODE KE ADMIN*_

_*BUDAYAKAN MEMBACA SEBELUM TRANSFER , SALAH TRANFER ZONK/ORDERAN ANDA TIDAK AKAN DI PROSES*_`
teks =
`「 ${botname} 」\n*${tanggal}*`
but = [
          { buttonId: `${prefix}payment`, buttonText: { displayText: 'PEMBAYARAN' }, type: 1 },
          { buttonId: `${prefix}form`, buttonText: { displayText: 'FORMAT ORDER' }, type: 1 }
        ]
        sendButImage(from, menunya, teks, gambar, but)
break

//══════════[ Fitur Owner ]══════════//

case 'owner':
members_ids = []
for (let mem of groupMembers) {
members_ids.push(mem.jid)
}
vcard2 = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:${ownername}\n`
+ `ORG: Creator ${ownername} ;\n`
+ `TEL;type=CELL;type=VOICE;waid=${owner}:${owner}\n`
+ 'END:VCARD'.trim()
Dhani.sendMessage(from, {displayName: `Ownernya ${botname}`, vcard: vcard2}, contact, 
{ quoted: ftrol, 
})
fakeyt(`_Tuh Kak Ownerku_`)
break
case 'bc':
             if (!isOwner && !mek.key.fromMe) return  reply(mess.only.owner)
             if (args.length < 1) return reply('teks?')
             anu100 = await Dhani.chats.all()
             if (isMedia && !Dhani.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(Dhani).replace('quotedM','m')).message.extendedTextMessage.contextInfo : Dhani
             bc100 = await Dhani.downloadMediaMessage(encmedia)
             for (let _ of anu100) {
             Dhani.sendMessage(_.jid, bc100, image, {quoted: ftrol, caption: `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`})
}
             fakeyt('Suksess broadcast')
             } else {
             for (let _ of anu100) {
             Dhani.sendMessage(_.jid, 
			{"contentText": `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`,
			"footerText": `${tanggal}`,
			"buttons": [
			{"buttonId": `${prefix}menu`,
			"buttonText": {"displayText": "ᴍᴇɴᴜ"
			},"type": "RESPONSE"}
			], "headerType": 'LOCATION',
			locationMessage: { degreesLatitude: '',
			degreesLongitude: '',
			jpegThumbnail: fakeimage,
			}}, MessageType.buttonsMessage )
}
             fakeyt('Suksess broadcast')
}
             break

case 'upswteks':
if (!isOwner) return reply('LU BUKAN OWNER GBLOK')
if (args.length < 1) return reply('Teksnya?')
teks = body.slice(10)
Dhani.sendMessage('status@broadcast', teks, MessageType.text)
reply(`Sukses upload status:\n${teks}`)
break

case 'upswsticker':
if (!isOwner) return reply('LU BUKAN OWNER GBLOK')
if (!isQuotedSticker) return reply('Reply stikernya!')
if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
buff = await Dhani.downloadMediaMessage(encmedia)
Dhani.sendMessage('status@broadcast', buff, sticker)
}
reply(`Sukses upload sticker`)
break

case 'upswaudio':
if (!isOwner) return reply('LU BUKAN OWNER GBLOK')
if (!isQuotedAudio) return reply('Reply audionya!')
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
buff = await Dhani.downloadMediaMessage(encmedia)
Dhani.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400})
}
reply(`Sukses upload audio`)
break

case 'upswvideo':
if (!isOwner) return reply('LU BUKAN OWNER GBLOK')
var konti = body.slice(11)
reply(mess.wait)
var enmediap = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
var mediap = await Dhani.downloadAndSaveMediaMessage(enmediap)
const buffer3 = fs.readFileSync(mediap)
Dhani.sendMessage('status@broadcast', buffer3, MessageType.video, {duration: 359996400, caption: `${konti}`})
reply(`Sukses upload video:\n${konti}`)
break

case 'upswimage':
if (!isOwner) return reply('LU BUKAN OWNER GBLOK')
var teksyy = body.slice(11)
reply(mess.wait)
enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await Dhani.downloadAndSaveMediaMessage(enmedia)
buffer = fs.readFileSync(media)
Dhani.sendMessage('status@broadcast', buffer, MessageType.image, {quoted: mek, caption: `${teksyy}`})
reply(`Sukses upload image:\n${teksyy}`)
break

//══════════[ Fitur Grup ]══════════//

case 'welcome':
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin)
if (args.length < 1) return fakeyt(`Ketik :\n${prefix}welcome on untuk mengaktifkan\n${prefix}welcome off untuk menonaktifkan`)
if ((args[0]) === 'on') {
if (isWelkom) return fakeyt('*welcome sudah aktif !!*')
_welkom.push(from)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
fakeyt(`\`\`\`Sukses ✅, Mengaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
} else if ((args[0]) === 'off') {
if (!isWelkom) return fakeyt('*welcome sudah off sebelumnya !!*')
_welkom.splice(from, 1)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
fakeyt(`\`\`\`Sukses ✅, Menonaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
} else {
fakeyt('*on untuk mengaktifkan, off untuk menonaktifkan*')
}
break
case 'antilink':
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
if (!q) return fakeyt(`Pilih on atau off`)
if (args[0].toLowerCase() === 'on'){
if (isAntiLink) return fakeyt(`Udah aktif`)
_antilink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
fakeyt(`\`\`\`Sukses ✅, Mengaktifkan fitur antilink di grup\`\`\` *${groupMetadata.subject}*`)
} else if (args[0].toLowerCase() === 'off'){
let anu = _antilink.indexOf(from)
_antilink.splice(anu, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
fakeyt(`\`\`\`Sukses ✅, Menonaktifkan fitur antilink di grup\`\`\` *${groupMetadata.subject}*`)
} else {
fakeyt(`_Pilih on atau off_`)
}
break
case 'antivirtex':
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
if (!q) return fakeyt(`Pilih on atau off`)
if (args[0].toLowerCase() === 'on'){
if (isAntiVirtex) return fakeyt(`Udah aktif`)
_antivirtex.push(from)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
fakeyt(`\`\`\`Sukses ✅, Mengaktifkan fitur antivirtex di grup\`\`\` *${groupMetadata.subject}*`)
} else if (args[0].toLowerCase() === 'off'){
let anu = _antivirtex.indexOf(from)
_antivirtex.splice(anu, 1)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
fakeyt(`\`\`\`Sukses ✅, Menonaktifkan fitur antivirtex di grup\`\`\` *${groupMetadata.subject}*`)
} else {
fakeyt(`_Pilih on atau off_`)
}
break
case 'group':
case 'grup':
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
if (args[0] === 'buka') {
fakeyt(`*Berhasil Membuka Grup ${groupMetadata.subject}*`)
Dhani.groupSettingChange(from, GroupSettingChange.messageSend, false)
} else if (args[0] === 'tutup') {
fakeyt(`*Berhasil Memtutup Grup ${groupMetadata.subject}*`)
Dhani.groupSettingChange(from, GroupSettingChange.messageSend, true)
}
break
case 'linkgroup':
case 'linkgrup':
case 'linkgc':
if (!isGroup) return fakeyt(mess.only.group)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
linkgc = await Dhani.groupInviteCode(from)
yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
Dhani.sendMessage(from, yeh, text, { quoted: ftrol })
break
case 'promote' :
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return fakeyt('Tag target yang ingin di jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda menjdi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
Dhani.groupMakeAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true)
Dhani.groupMakeAdmin(from, mentioned)
}
break
case 'demote' :
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return fakeyt('Tag target yang ingin di tidak jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda tidak menjadi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
Dhani.groupDemoteAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, Menurunkan : @${mentioned[0].split('@')[0]} Menjadi Member`, mentioned, true)
Dhani.groupDemoteAdmin(from, mentioned)
}
break
case 'add' :
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
if (args.length < 1) return fakeyt('Yang mau di add siapa??')
if (args[0].startsWith('08')) return fakeyt('Gunakan kode negara Gan')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
Dhani.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
fakeyt('Gagal menambahkan target, mungkin karena di private')
}
break
case "kick":
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
if (
mek.message.extendedTextMessage === undefined ||
mek.message.extendedTextMessage === null
)
return fakeyt("Tag target yang ingin di kick!");
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
if (mentioned.length > 1) {
Dhani.groupRemove(from, mentioned);
fakeyt(mess.success);
} else if (mentioned.length < 1) {
anu = mek.message.extendedTextMessage.contextInfo.participant;
Dhani.groupRemove(from, [anu]);
fakeyt(mess.success);
} else {
Dhani.groupRemove(from, mentioned);
fakeyt(mess.success);
}
break;
case 'tagall':
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins) return fakeyt(mess.only.admin)
members_id = []
teks = (args.length > 1) ? args.join(' ').trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `• @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
break
case 'setname':
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
Dhani.groupUpdateSubject(from, `${body.slice(9)}`)
Dhani.sendMessage(from, `\`\`\`Sukses ✅, Mengganti nama grup menjadi\`\`\` *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'setdesc':
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
Dhani.groupUpdateDescription(from, `${body.slice(9)}`)
Dhani.sendMessage(from, `\`\`\`Sukses ✅, Mengganti deskripsi grup\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'setppgrup':
case 'setpp':
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
if (isQuotedImage) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
let media = await Dhani.downloadMediaMessage(encmedia)
Dhani.updateProfilePicture(from, media)
.then((res) => fakeyt(jsonformat(res)))
.catch((err) => fakeyt(jsonformat(err)))
} else {
fakeyt(`Kirim atau tag gambar dengan caption ${prefix}setppgrup`)
}
break
case 'hidetag':
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return fakeyt(mess.only.admin)
try {
quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
hideTag(from, `${quotedText}`)
} catch {
hideTag(from, `${q}`)
}
break
case 'infogc':
case 'infogrup':
case 'infogrouup':
case 'grupinfo':
case 'groupinfo':
if (!isGroup) return fakeyt(mess.only.group)
try {
var pic = await Dhani.getProfilePicture(from)
} catch {
var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
let ingfo = `*G R O U P I N F O*\n\n*Name :* ${groupName}\n*ID Grup :* ${from}\n*Dibuat :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Owner Grup :* @${groupMetadata.owner.split('@')[0]}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Peserta :* ${groupMembers.length}\n*Welcome :* ${isWelkom ? 'Aktif' : 'Mati'}\n*AntiLink :* ${isAntiLink ? 'Aktif' : 'Mati'}\n*Desc :* \n\n${groupMetadata.desc}`
Dhani.sendMessage(from, await getBuffer(pic), image, {quoted: mek, caption: ingfo, contextInfo: {"mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')]}})
break
case 'resetlinkgc':
case 'resetlinkgroup':
case 'resetlinkgrup':
case 'revoke':
case 'resetlink':
if (!isGroup) return fakeyt(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin)
if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin)
json = ['action', 'inviteReset', from]
Dhani.query({json, expect200: true})
fakeyt('Sukses Mereset Link Group')
break
case 'online':
case 'listonline':
case 'here':          
if (!isGroup) return fakeyt(mess.only.group)
try {
let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
let online = [...Object.keys(Dhani.chats.get(ido).presences), Dhani.user.jid]
Dhani.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: fkon, contextInfo: { mentionedJid: online }})
} catch (e) {
fakeyt(`${e}`)
}
break

//━━━━━━━━━━━━━━━[ AKHIR DARI SEMUA FITUR ]━━━━━━━━━━━━━━━━━//
				
default:
if (isOwner) {
if (budy.startsWith('$')){
if (!mek.key.fromMe && !isOwner) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (isOwner) {
if (budy.startsWith('>')) {
console.log(color('[ EVAL ]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
reply(`${evaled}`)
} catch (err) {
reply(`${err}`)
}
}
}
}
}
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Error : %s', color(e, 'red'))
        }
	// console.log(e)
	}
}


	
    
