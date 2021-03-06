const createMessage = require("./message")
const DataManager = require("./DataManager")
//const scrollBottom=require("./scrollBottom")
const $ = require("jquery")

listMessage = () => {
    DataManager.getMessage() //calls function to get message from DB
        .then(results => {
            //console.log(results)
            $("#messageList").empty() //clears div before rendering list of message
            results.forEach(message => { //loops through each message grabbing info
                let messageComponent = createMessage(message.userId, message.userName, message.message, message.id)
                writeMessageToDOM(messageComponent) //calls function to write 0 list to DOM
            })
        })
}
writeMessageToDOM = (message) => { //specifies id in index where message  get appended onto DOM
    $("#messageList").append(message) 
   // scrollBottom()//replaces innerHTML =+
}

module.exports = listMessage