("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");

//▷                                              (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!                                           ◁

("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");
require("../../Ѷ𝖑𝐤𝐲𝖗𝖊🖋️L𝖎𝖇𝖗𝖆𝖗ყ/𝕷𝖆ყO𝖚𝖙");
let {
isUrl,
fetchJson,
getBuffer,
jsonformat,
GIFBufferToVideoBuffer,
getRandom,
} = require(`../../Ѷ𝖑𝐤𝐲𝖗𝖊🖋️L𝖎𝖇𝖗𝖆𝖗ყ/ɴᴇᴄᴛᴏʀ`);
let fs = require(`fs`);
let util = require(`util`);
let hxz = require(`hxz-api`);
let chalk = require(`chalk`);
let db = require(`quick.db`);
let axios = require(`axios`);
let canvacord = require(`canvacord`);
let { Character } = require(`mailist`);
let moment = require(`moment-timezone`);
let Carbon = require(`unofficial-carbon-now`);
let { exec, execSync } = require(`child_process`);
let { N𝖊𝖊𝖉__A𝖗𝖌𝖘 } = require("../../Ѷ𝖑𝐤𝐲𝖗𝖊🌀B𝖚𝖙𝖙𝖔𝖓𝖘/N𝖊𝖊𝖉__A𝖗𝖌𝖘");
let { Sticker, StickerTypes } = require(`wa-sticker-formatter`);
let { Group_Only } = require("../../Ѷ𝖑𝐤𝐲𝖗𝖊🧭S𝖜𝖎𝖙𝖈𝖍/Group_Only");
let { Image_Button } = require("../../Ѷ𝖑𝐤𝐲𝖗𝖊🌀B𝖚𝖙𝖙𝖔𝖓𝖘/Image_Button");
let { Video_Button } = require("../../Ѷ𝖑𝐤𝐲𝖗𝖊🌀B𝖚𝖙𝖙𝖔𝖓𝖘/Video_Button");
let { Bot_Not_Admin } = require("../../Ѷ𝖑𝐤𝐲𝖗𝖊🧭S𝖜𝖎𝖙𝖈𝖍/Bot_Not_Admin");
let { Sender_Not_Admin } = require("../../Ѷ𝖑𝐤𝐲𝖗𝖊🧭S𝖜𝖎𝖙𝖈𝖍/Sender_Not_Admin");
let YouTube_Regex =
/(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/;
let Present_Path = require(`path`);
let Script_Name = Present_Path.basename(__filename);
let Final_Name = Script_Name.slice(0, -3).toLowerCase();
let { Caught } = require("../../Ѷ𝖑𝐤𝐲𝖗𝖊🌀B𝖚𝖙𝖙𝖔𝖓𝖘/Caught");
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
exports.del = async (
ӄ𝖗𝖞ӄ𝖓𝖟,
Ѷ𝖑𝐤𝐲𝖗𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
isMedia,
isGroup,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
body,
mentionByTag,
mentionByReply
) => {
if (!Ѷ𝖑𝐤𝐲𝖗𝖊.quoted) {
return await N𝖊𝖊𝖉__A𝖗𝖌𝖘(
ӄ𝖗𝖞ӄ𝖓𝖟,
Ѷ𝖑𝐤𝐲𝖗𝖊,
`*❌ERROR:* No query provided!

*⚡USAGE:* ${prefix}${Final_Name} <Tag the massage you want to delete>`
);
}

let { isBaileys } = Ѷ𝖑𝐤𝐲𝖗𝖊.quoted;
if (!isBaileys) {
return await N𝖊𝖊𝖉__A𝖗𝖌𝖘(
ӄ𝖗𝖞ӄ𝖓𝖟,
Ѷ𝖑𝐤𝐲𝖗𝖊,
`*❌ERROR:* Can not delete massage from another userID except mine.

*⚡USAGE:* ${prefix}${Final_Name} <Tag the massage you want to delete>`
);
}

return await ӄ𝖗𝖞ӄ𝖓𝖟.sendMessage(Ѷ𝖑𝐤𝐲𝖗𝖊.chatID, {
delete: {
remoteJid: Ѷ𝖑𝐤𝐲𝖗𝖊.chatID,
fromMe: true,
id: Ѷ𝖑𝐤𝐲𝖗𝖊.quoted.id,
participant: Ѷ𝖑𝐤𝐲𝖗𝖊.quoted.sender,
},
});
};
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");

//▷                                              (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!                                           ◁

("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");
