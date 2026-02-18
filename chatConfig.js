
    
var chatConfig = KoreChatSDK.chatConfig;
var chatWindow = KoreChatSDK.chatWindow;
let botOptions=chatConfig.botOptions;

userIdentity = crypto.randomUUID();

botOptions.JWTUrl = "https://epson-jwt-multi.vercel.app/api/sts?bot=la-customer";
 botOptions.userIdentity = userIdentity;
 botOptions.botInfo = { name: "Prod Epson Test", "_id": "st-a262f3ad-040f-5b60-8d57-87abcc2fa38a" };
 botOptions.clientId = "cs-79ae2a3d-931c-59c3-a3f2-b5c49a3a5b7f";

 chatConfig.history.enable = false;
var chatWindowInstance = new chatWindow(chatConfig);

chatWindowInstance.show(chatConfig);
    new KoreChatSDK.chatWindow().show(KoreChatSDK.chatConfig);

