/*CMD
  command: /inv01hr
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

let id=User.getProperty("adminmsgid")
let g=message
let ad= Bot.getProperty("admin01")
if(chat.chatid==ad){
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

if(!isNumeric(message)){
Bot.sendMessage("*📛 Invaild value. Enter only numberic value. Try again*")
return
}
Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})
Bot.editMessage("*Hours of investment plan 1⃣* Updated to "+g+"",id)
var b =[
[{title:"Return ↩️ ",command:"/adminmainsettings01 r"}, {title:"⬅️ Back To Settings", command:"/adminlogin r"}]]
Bot.editInlineKeyboard(b,id)
Bot.setProperty("daily_hour1",g,"string")
}else{
Bot.runCommand("/start")}
