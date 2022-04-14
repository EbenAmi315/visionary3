const Discord = require("discord.js");

const config = require("../botconfig/config.json");

var ee = require("../botconfig/embed.json");

const settings = require("../botconfig/settings.json");

module.exports = {

  name: "istatistik", //the command name for execution & for helpcmd [OPTIONAL]

  category: "Information", //the command category for helpcmd [OPTIONAL]

  aliases: [""], //the command aliases for helpcmd [OPTIONAL]

  cooldown: 5, //the command cooldown for execution & for helpcmd [OPTIONAL]

  usage: "", //the command usage for helpcmd [OPTIONAL]

  description: "Sends you an invite link", //the command description for helpcmd [OPTIONAL]

  memberpermissions: [], //Only allow members with specific Permissions to execute a Commmand [OPTIONAL]

  requiredroles: [], //Only allow specific Users with a Role to execute a Command [OPTIONAL]

  alloweduserids: [], //Only allow specific Users to execute a Command [OPTIONAL]

  minargs: 0, // minimum args for the message, 0 == none [OPTIONAL]

  maxargs: 0, // maximum args for the message, 0 == none [OPTIONAL]

  minplusargs: 0, // minimum args for the message, splitted with "++" , 0 == none [OPTIONAL]

  maxplusargs: 0, // maximum args for the message, splitted with "++" , 0 == none [OPTIONAL]

  argsmissing_message: "", //Message if the user has not enough args / not enough plus args, which will be sent, leave emtpy / dont add, if you wanna use command.usage or the default message! [OPTIONAL]

  argstoomany_message: "", //Message if the user has too many / not enough args / too many plus args, which will be sent, leave emtpy / dont add, if you wanna use command.usage or the default message! [OPTIONAL]

  run: async (client, message, args, plusArgs, cmdUser, text, prefix) => {

   const os = require("os");

const osu = require("node-os-utils")

const notSupported = "Bu işletim sistemi uygun değil"

      const full = '█'

      const empty = '░'

      const precision = 20

      

      const freeRAM = os.freemem()

      const usedRAM = os.totalmem() - freeRAM;

      

      const diagramMaker = (used, free) => {

        const total = used + free;

        used = Math.round((used / total) * precision)

        free = Math.round((free / total) * precision)

        return full.repeat(used) + empty.repeat(free)

      }

      

      let cpuUsage;

      

      const p1 = osu.cpu.usage().then(cpuPercentage => {

        cpuUsage = cpuPercentage;

      })

      

      let processes;

      

      const p2 = osu.proc.totalProcesses().then(process => {

        processes = process;

      })

      

      let driveUsed, driveFree;

      

      const p3 = osu.drive.info().then(i => {

        driveUsed = i.usedPercentage;

        driveFree = i.freePercentage;

      }).catch(() => {

        driveUsed = false;

      })

      

      let networkUsage, networkUsageIn, networkUsageOut;

      

      const p4 = osu.netstat.inOut().then(i => {

        networkUsage = i.total;

        networkUsageIn = networkUsage.inputMb;

        networkUsageOut = networkUsage.outputMb;

      }).catch(() => {

        networkUsage = false;

      })

      

      await Promise.all([p1, p2, p3, p4]);

      

      const embed = new Discord.MessageEmbed()

        .setColor('#800080')

        .addField(`Ana İstatistikler`,`**Discord.js Sürümü**: ${require("discord.js").version}`)

.addField(" **Node.js Sürümü**", `${process.version}`)

        .addField(`Kullanılan:`,(`RAM: ${diagramMaker(usedRAM, freeRAM)} [${Math.round(100 * usedRAM / (usedRAM + freeRAM))}%]\n`+

        `CPU: ${diagramMaker(cpuUsage, 100-cpuUsage)} [${Math.round(cpuUsage)}%]\n`+

        `HEXX PROCESS: ${(process.memoryUsage().heapUsed / 1000000).toFixed(2)}MB\n`+

        `Depolama: ${driveUsed ? `${diagramMaker(driveUsed, driveFree)} [${Math.round(driveUsed)}%]` : notSupported}\n`+

        `İşlemler: ${processes != 'not supported'? processes : notSupported}`).trim())

        .addField(`Makine Özellikleri:`,`CPU Sayısı: ${osu.cpu.count()}\nCPU Model: ${os.cpus()[0].model}\nCPU Hızı: ${os.cpus()[0].speed}MHz
${osu.os.platform() != "win32" ? `Depolama: ${diagramMaker(driveUsed,driveFree)} [${driveUsed}%]`: ""}`)

        .addField(`Sistem Özellikleri:`,`Sistem Türü: ${osu.os.type()}\nSistem Mimari: ${osu.os.arch()}\nSistem Platformu: ${osu.os.platform()}`)

        .addField(`İntarnet İstatistikleri:`,`${networkUsage ? `Giriş Hızı: ${networkUsageIn}\nÇıkış hızı: ${networkUsageOut}` : notSupported}`)

        .setTimestamp()

 

        

      message.channel.send({embeds:[embed]});

      


    

  }

}