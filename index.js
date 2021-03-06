const Discord = require("discord.js")
const intent_list = new Discord.Intents(["GUILD_MEMBERS", "GUILD_MESSAGES", "GUILDS", "GUILD_INVITES"])
const client = new Discord.Client({ ws: { intents: intent_list } })
const token = process.env.token;
const welcomeChannelName = "🎊어서왕🎉" // 입장 시 환영메시지를 전송 할 채널의 이름을 입력하세요.
const byeChannelName = "안녕히가세요" // 퇴장 시 메시지를 전송 할 채널의 이름을 입력하세요.
const welcomeChannelComment = "안녕하세요 방가방가~" // 입장 시 전송할 환영메시지의 내용을 입력하세요.
const byeChannelComment = "안녕히가세요." // 퇴장 시 전송할 메시지의 내용을 입력하세요.
const roleName = "💙 소중 💙" // 입장 시 지급 할 역할의 이름을 적어주세요.
//임시 토큰 process.env.token;
client.on("ready", () => {
  console.log("켰다...")
  client.user.setPresence({ activity: { name: "새해복 많이 받으세요~!!" }, status: "online" })
})

client.on("guildMemberAdd", (member) => {
  const guild = member.guild
  const newUser = member.user
  const welcomeChannel = guild.channels.cache.find((channel) => channel.name == welcomeChannelName)

  welcomeChannel.send(`<@${newUser.id}> ${welcomeChannelComment}\n`) // 올바른 채널명을 기입하지 않았다면, Cannot read property 'send' of undefined; 오류가 발생합니다.
  member.roles.add(guild.roles.cache.find((role) => role.name === roleName).id)
})

client.on("guildMemberRemove", (member) => {
  const guild = member.guild
  const deleteUser = member.user
  const byeChannel = guild.channels.cache.find((channel) => channel.name == byeChannelName)

  byeChannel.send(`<@${deleteUser.id}> ${byeChannelComment}\n`) // 올바른 채널명을 기입하지 않았다면, Cannot read property 'send' of undefined; 오류가 발생합니다.
})

client.on("message", (message) => {
  if (message.author.bot) return

  if (message.content == "ping") {
     return message.reply("pong")
  }

  if (message.content == "고냥이") {
   return message.reply(`https://tenor.com/view/happy-cat-cats-cute-pet-gif-5274231`)
  }

  if (message.content == "축카") {
    return message.reply("https://tenor.com/view/birthday-happy-birthday-cat-gif-4997651")
  }

  if (message.content == "새해복") {
    return message.reply("")
  }

  if (message.content =="ㅅㅂ") {
    return message.reply(`님이 \`${message.content}\` 을/를 보내셨습니다. \`욕쓰지마\``)
  }

  if (message.content =="ㅄ") {
    return message.reply(`님이 \`${message.content}\` 을/를 보내셨습니다. \`욕쓰지마세요\``)
  }

  if (message.content =="ㄳㄲ") {
    return message.reply(` 님이 \`${message.content}\` 을/를 보내셨습니다. \`초성으로 욕하지마라\``)
  }

  if (message.content =="시발") {
    return message.reply(`님이 \`${message.content}\` 을/를 보내셨습니다. \`욕하지마라\``)
  }

  if (message.content =="병신") {
    return message.reply(`님이 \`${message.content}\` 을/를 보내셨습니다. \`그런 말쓰면 안돼\``)
  }

  if (message.content =="개새끼") {
    return message.reply(`님이 \`${message.content}\` 을/를 보내셨습니다. \`보기 불편하다 쓰지마\``)
  }

  if (message.content =="ㅈㄲ") {
    return message.reply(`님이 \`${message.content}\` 을/를 보내셨습니다. \`뜻을 알고 쓰냐?\``)
  }

  if (message.content =="좇까") {
    return message.reply(`님이 \`${message.content}\` 을/를 보내셨습니다. \`진짜 실망이다\``)
  }

  if (message.content =="매갈") {
    return message.reply(`님이 \`${message.content}\` 을/를 보내셨습니다. \`야 적당히 해라 왜 선넘냐?\``)
  }

  if (message.content =="미친놈") {
    return message.reply(`님이 \`${message.content}\` 을/를 보내셨습니다. \`바른말쓰자\``)
  }

  if (message.content =="미친년") {
    return message.reply(`님이 \`${message.content}\` 을/를 보내셨습니다. \`야 하지마라 난 분명말했다\``)
  }

  if (message.content =="일베") {
    return message.reply(`님이 \`${message.content}\` 을/를 보내셨습니다. \`야 선은 지켜라\``)
  }

  if (message.content =="병신인가") {
    return message.reply(`님이 \`${message.content}\` 을/를 보내셨습니다. \`상대방 기분 생각해서 말좀해라\``)
  }

  if (message.content == "!서버") {
    let embed = new Discord.MessageEmbed()
    let img = "https://cdn.discordapp.com/attachments/756326812841279572/788595784648097841/eb9e63e96943a7dd.png"
    let duration = 
    embed.setColor("#FF8E8E")
    embed.setAuthor("server info of 근찌 BOT", img)
    embed.setFooter(`근찌 BOT ❤️`)
    embed.addField("RAM usage", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
    embed.addField("running time", `${duration}`, true)
    embed.addField("사용자", `${client.users.cache.size}`, true)
    embed.addField("서버", `${client.guilds.cache.size}`, true)
    // embed.addField('channel',      `${client.channels.cache.size.toLocaleString()}`, true)
    embed.addField("Discord.js", `v${Discord.version}`, true)
    embed.addField("Node", `${process.version}`, true)

    let arr = client.guilds.cache.array()
    let list = ""
    list = `\`\`\`css\n`

    for (let i = 0; i < arr.length; i++) {
      // list += `${arr[i].name} - ${arr[i].id}\n`
      list += `${arr[i].name}\n`
    }
    list += `\`\`\`\n`
    embed.addField("list:", `${list}`)

    embed.setTimestamp()
    message.channel.send(embed)
  }

  if (message.content == "!근찌정보") {
    let img = "https://cdn.discordapp.com/attachments/756326812841279572/788595784648097841/eb9e63e96943a7dd.png"
    let embed = new Discord.MessageEmbed()
    embed.setColor("#FF8E8E")
      .setTitle("생방송")
      .setURL("https://www.twitch.tv/geunzzi_")
      .setAuthor("근찌", img, "https://www.twitch.tv/geunzzi_")
      .setThumbnail(img)
      .addField("현재 팔로워", "111명")
      .addField("트윕", "https://twip.kr/geunzzi_", true)
      .addField("디스코드", "https://discord.com/invite/yskSpbGWTe", true)
      .addField("좋아하는것", "떡볶이")
      .addField("생일", "`11월22일`")
      .addField("목소리", "`기분에 따라 달라지는 목소리 톤`")
      .addField("멘탈내구도", "`순두부급(멘탈나가면 방송..)`")
      .addField("게임정보", "레인보우식스시즈\n블랙서바이벌\n그 외 다양한 게임을 하신다\n")
      .setTimestamp()
      .setFooter("스트리머:근찌\n봇제작자:화이트해커", img)

    message.channel.send(embed)
  } 

  if (message.content == "!뉴스") {
    let img = "https://cdn.discordapp.com/attachments/756326812841279572/793063654957383690/ddbc49c14f90e600.PNG"
    let opimg = "https://cdn.discordapp.com/attachments/793060334839267359/793070700252102686/-removebg-preview.png"
    let embed = new Discord.MessageEmbed()
    embed.setColor("#FF8E8E")
    .setTitle("개발자의 말씀")
    .setURL("https://youtu.be/6IDpKVF6LwQ")
    .setAuthor("개발자", opimg, "https://youtu.be/6IDpKVF6LwQ")
    .setThumbnail(img)
    .addField("개발소식", "현재 개발자는 근찌봇2.0을 제작중 이며 2021년3월쯤 공개한다고 전했습니다.")
    .addField("근찌봇소식", "전에 한번 근찌봇 코드가 망가져서 고쳤는데 그때 몇개 기능을 못넣었습니다. 그래서 현재는 복구중이라합니다")
    .addField("1분 싸이버 보안상식", "이상한링크 클릭 ㄴㄴ")
    .setFooter("스트리머:근찌\n봇제작자:화이트해커", opimg)
  
     message.channel.send(embed)
  }

  if (message.content == "!방송시간") {
    let img = "https://cdn.discordapp.com/attachments/756326812841279572/788595784648097841/eb9e63e96943a7dd.png" 
    let embed = new Discord.MessageEmbed()
    embed.setColor("#FF8E8E")
    .setTitle("생방송")
      .setURL("https://www.twitch.tv/geunzzi_")
      .setAuthor("근찌", img, "https://www.twitch.tv/geunzzi_")
      .setThumbnail(img)
      .addField("평일", "\n`월 - 금 : PM 08:00 ~ AM 12:00`")
      .addField("휴일", "\n`토요일 : PM 10:00 ~ AM 02:00`")
      .addField("공휴일", "\n`랜덤`")
      .addField("기타", "대부분 이시간에 합니다\n휴방 하는 날도 있습니다")
      .setFooter("스트리머:근찌\n봇제작자:화이트해커", img)

      message.channel.send(embed)
  }

  if (message.content == "!방송규칙") {
    let img = "https://cdn.discordapp.com/attachments/756326812841279572/788595784648097841/eb9e63e96943a7dd.png" 
    let embed = new Discord.MessageEmbed()
    embed.setColor("#FF8E8E")
    .setTitle("생방송")
      .setURL("https://www.twitch.tv/geunzzi_")
      .setAuthor("근찌", img, "https://www.twitch.tv/geunzzi_")
      .setThumbnail(img)
      .addField("생방송 규칙입니다.", "잘지켜주세요")
      .addField("규칙:1", "`이 방송 주인공은 누구? 근찌임`")
      .addField("규칙:2", "`시청자 간의 친목 금지입니다`")
      .addField("규칙:3", "`도배, 시비, 싸우기 금지입니다`")
      .addField("규칙:4", "`선 넘으면 '너 밴!' 입니다`")
      .addField("규칙:5", "`지나친 훈수는 좋지 않습니다`")
      .addField("규칙:6", "`타스트리머 언급 자제해 주세요`")
      .addField("규칙:7", "`방송 도중 채팅에 나간다고 하지 마세요`")
      .addField("규칙:8", "`지나친 TMI 궁금하지 않습니다`")
      .addField("규칙:9", "`클립 많이 따주세요, 제목도 써주세요`")
      .setFooter("스트리머:근찌\n봇제작자:화이트해커", img)

      message.channel.send(embed)
  }

  if (message.content == "!시참규칙") {
    let img = "https://cdn.discordapp.com/attachments/756326812841279572/788595784648097841/eb9e63e96943a7dd.png" 
    let embed = new Discord.MessageEmbed()
    embed.setColor("#FF8E8E")
    .setTitle("생방송")
      .setURL("https://www.twitch.tv/geunzzi_")
      .setAuthor("근찌", img, "https://www.twitch.tv/geunzzi_")
      .setThumbnail(img)
      .addField("규칙:1", "`시참은 팔로우 하셔야 가능합니다\n(언팔 할 거면 팔로우 하지 마세요)`")
      .addField("규칙:2", "`시참 시 디코 대기실에서 대기해 주세요`")
      .addField("규칙:3", "`닉네임은 디코 닉네임 채널에 써주세요`")
      .addField("규칙:4", "`과한 주접, 자기 어필 금지입니다`")
      .addField("규칙:5", "`불편한 행동, 말 자제해주세요`")
      .setFooter("스트리머:근찌\n봇제작자:화이트해커", img)

      message.channel.send(embed)
  }

  if (message.content == "!악질유저") {
    let img = "https://cdn.discordapp.com/attachments/756326812841279572/790565372632760330/38e2f8f8445ec57636e6f2133228ee5d32d5aa316f3afc85afa8e4ae8c24f63d9d3b2a60945a776682941e178cad6a8f64dc.png"
    let embed = new Discord.MessageEmbed()
    embed.setColor("#FF8E8E")
    .setTitle("악질유저목록")
    .setAuthor("배틀아이", img, "https://namu.wiki/w/%EB%B0%B0%ED%8B%80%EC%95%84%EC%9D%B4")
    .setThumbnail(img)
    .addField("유저이름", "coin0113")
    .addField("이유", "욕설(패드립 그외 기타등등),팀킬")
    .addField("그외 악질 유저 제보는 개발자에게 알려주세요", "나쁜짓은 하지마")
    .setFooter("스트리머:근찌\n봇제작자:화이트해커", img)
    message.channel.send(embed)
  }
  
  else if (message.content == "!도움말") {
    let helpImg = "https://images-ext-1.discordapp.net/external/RyofVqSAVAi0H9-1yK6M8NGy2grU5TWZkLadG-rwqk0/https/i.imgur.com/EZRAPxR.png"
    let commandList = [
      { name: "!도움말", desc: "근찌봇 명령어를 알려줍니다" },
      { name: "ping", desc: "핑퐁~!" },
      { name: "!근찌정보", desc: "근찌님 정보를 보여줄수있어요!" },
      { name: "!방송시간", desc: "근찌님이 언제 뱅온 하는지 알수있어요" },
      { name: "!방송규칙", desc: "방송규칙을 알려줘요!"},
      { name: "!시참규칙", desc: "시참규칙을 알려줘요!"},
      { name: "!전체공지", desc: "dm으로 전체 공지 보내기" },
      { name: "!전체공지2", desc: "dm으로 전체 embed 형식으로 공지 보내기" },
      { name: "!청소", desc: "채팅청소할꺼야!너무드러워" },
      { name: "!초대", desc: "해당 채널의 초대 코드 표기" },
      { name: "!초대2", desc: "봇이 들어가있는 모든 채널의 초대 코드 표기" },
      { name: "!서버", desc: "해당 서버의 정보를 보여줍니다."},
      { name: "!뉴스", desc: "근찌봇 관련 뉴스를 전해드려요"},
    ]
    let commandStr = ""
    let embed = new Discord.MessageEmbed().setAuthor("Help of 근찌 BOT", helpImg).setColor("#FF8E8E").setFooter(` 근찌BOT ❤️`).setTimestamp()

    commandList.forEach((x) => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`
    })

    embed.addField("Commands: ", commandStr)

    message.channel.send(embed)
  } else if (message.content == "!초대2") {
    client.guilds.cache.array().forEach((x) => {
      x.channels.cache
        .find((x) => x.type == "text")
        .createInvite({ maxAge: 0 }) // maxAge: 0은 무한이라는 의미, maxAge부분을 지우면 24시간으로 설정됨
        .then((invite) => {
          message.channel.send(invite.url)
        })
        .catch((err) => {
          if (err.code == 50013) {
            message.channel.send(`**${x.channels.cache.find((x) => x.type == "text").guild.name}** 채널 권한이 없어 초대코드 발행 실패`)
          }
        })
    })
  } else if (message.content == "!초대") {
    if (message.channel.type == "dm") {
      return message.reply("dm에서 사용할 수 없는 명령어 입니다.")
    }
    message.guild.channels.cache
      .get(message.channel.id)
      .createInvite({ maxAge: 0 }) // maxAge: 0은 무한이라는 의미, maxAge부분을 지우면 24시간으로 설정됨
      .then((invite) => {
        message.channel.send(invite.url)
      })
      .catch((err) => {
        if (err.code == 50013) {
          message.channel.send(`**${message.guild.channels.cache.get(message.channel.id).guild.name}** 채널 권한이 없어 초대코드 발행 실패`)
        }
      })
  } else if (message.content.startsWith("!공지2")) {
    if (checkPermission(message)) return
    if (message.member != null) {
      // 채널에서 공지 쓸 때
      let contents = message.content.slice("!공지2".length)
      let embed = new Discord.MessageEmbed().setAuthor("공지 of 근찌 BOT").setColor("#186de6").setFooter(`근찌 BOT ❤️`).setTimestamp()

      embed.addField("공지: ", contents)

      message.member.guild.members.cache.array().forEach((x) => {
        if (x.user.bot) return
        x.user.send(embed)
      })

      return message.reply("공지를 전송했습니다.")
    } else {
      return message.reply("채널에서 실행해주세요.")
    }
  } else if (message.content.startsWith("!전체공지")) {
    if (checkPermission(message)) return
    if (message.member != null) {
      // 채널에서 공지 쓸 때
      let contents = message.content.slice("!공지".length)
      message.member.guild.members.cache.array().forEach((x) => {
        if (x.user.bot) return
        x.user.send(`<@${message.author.id}> ${contents}`)
      })

      return message.reply("공지를 전송했습니다.")
    } else {
      return message.reply("채널에서 실행해주세요.")
    }
  } else if (message.content.startsWith("!청소")) {
    if (message.channel.type == "dm") {
      return message.reply("dm에서 사용할 수 없는 명령어 입니다.")
    }

    if (message.channel.type != "dm" && checkPermission(message)) return

    var clearLine = message.content.slice("!청소 ".length)
    var isNum = !isNaN(clearLine)

    if (isNum && (clearLine <= 0 || 100 < clearLine)) {
      message.channel.send("1부터 100까지의 숫자만 입력해주세요.")
      return
    } else if (!isNum) {
      // c @나긋해 3
      if (message.content.split("<@").length == 2) {
        if (isNaN(message.content.split(" ")[2])) return

        var user = message.content.split(" ")[1].split("<@!")[1].split(">")[0]
        var count = parseInt(message.content.split(" ")[2]) + 1
        let _cnt = 0

        message.channel.messages.fetch().then((collected) => {
          collected.every((msg) => {
            if (msg.author.id == user) {
              msg.delete()
              ++_cnt
            }
            return !(_cnt == count)
          })
        })
      }
    } else {
      message.channel
        .bulkDelete(parseInt(clearLine) + 1)
        .then(() => {
          message.channel.send(`<@${message.author.id}> ${parseInt(clearLine)} 개의 메시지를 삭제했습니다. (이 메시지는 잠시 후 사라집니다.)`).then((msg) => msg.delete({ timeout: 3000 }))
        })
        .catch(console.error)
    }
  }
})

function checkPermission(message) {
  if (!message.member.hasPermission("MANAGE_MESSAGES")) {
    message.channel.send(`<@${message.author.id}> 명령어를 수행할 관리자 권한을 소지하고 있지않습니다.`)
    return true
  } else {
    return false
  }
}

function changeCommandStringLength(str, limitLen = 8) {
  let tmp = str
  limitLen -= tmp.length

  for (let i = 0; i < limitLen; i++) {
    tmp += " "
  }

  return tmp
}

client.login(token)
