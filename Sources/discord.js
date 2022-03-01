const path = require('path')
const { Webhook, MessageBuilder } = require('discord-webhook-node')
const { I18n } = require('i18n')

const webhookURL = process.env.DISCORD_WEBHOOK
const language = process.env.LANGUAGE
const i18n = new I18n()

i18n.configure({
    locales: ['en','ko', 'ja'],
    directory: path.join(__dirname, '../locales')
})

i18n.setLocale(language)

function post(appInfo) {
    hook(appInfo)
}

async function hook(appInfo) {
    const Hook = new Webhook(webhookURL)
    const embed = new MessageBuilder()
    .setColor(colorForStatus(appInfo.status))
    .setAuthor('museLIVE App', appInfo.iconURL, 'https://apps.apple.com/ca/app/muselive-virtual-concerts/id1564042040')
    .setDescription(`The status of ${appInfo.name} has been changed 🚀`)
    .addField(i18n.__("Version"), appInfo.version, true)
    .addField(i18n.__("Status"), i18n.__(appInfo.status))
    Hook.send(embed)
    .then(() => console.log('Sent webhook successfully!'))
    .catch(err => console.log(err.message));
}

function colorForStatus(status) {
    const infoColor = "#8e8e8e"
    const warningColor = "#f4f124"
    const successColor1 = "#1eb6fc"
    const successColor2 = "#14ba40"
    const failureColor = "#e0143d"
    const colorMapping = {
        "Prepare for submission" : infoColor,
        "Waiting for review" : infoColor,
        "In review" : successColor1,
        "Pending contract" : warningColor,
        "Waiting for export compliance" : warningColor,
        "Pending developer release" : successColor2,
        "Processing for app store" : successColor2,
        "Pending apple release" : successColor2,
        "Ready for sale" : successColor2,
        "Rejected" : failureColor,
        "Metadata rejected" : failureColor,
        "Removed from sale" : failureColor,
        "Developer rejected" : failureColor,
        "Developer removed from sale" : failureColor,
        "Invalid binary" : failureColor
    }

    return colorMapping[status]
}

module.exports = {
    post: post
}
