
    
var chatConfig = KoreChatSDK.chatConfig;
var chatWindow = KoreChatSDK.chatWindow;
let botOptions=chatConfig.botOptions;

userIdentity = crypto.randomUUID();

botOptions.JWTUrl = "https://epson-jwt-multi.vercel.app/api/sts?bot=na-customer";
 botOptions.userIdentity = userIdentity;
 botOptions.botInfo = { name: "Prod Epson Test", "_id": "st-59523fcb-9dd0-589b-a29f-93655dc3bac3" };
 botOptions.clientId = "cs-59734efa-4252-516f-a92a-60bb5d16c73d";

 chatConfig.history.enable = false;
var chatWindowInstance = new chatWindow(chatConfig);

chatWindowInstance.show(chatConfig);
    new KoreChatSDK.chatWindow().show(KoreChatSDK.chatConfig);

