const baseDoorAnalyseInfo = [
    { upDoor: "开门", downDoor: "开门", content: "主贵人宝物财喜" },
    { upDoor: "开门", downDoor: "休门", content: "主见贵人财喜及开张铺店，贸易大利" },
    { upDoor: "开门", downDoor: "生门", content: "主见贵人，谋望所求遂意" },
    { upDoor: "开门", downDoor: "伤门", content: "主变动、更改、移徙，事皆不吉" },
    { upDoor: "开门", downDoor: "杜门", content: "主失脱，刊印书契小凶" },
    { upDoor: "开门", downDoor: "景门", content: "主见贵人，因文书不利。开加死：主官司惊扰，先忧后喜。开加惊：主百事不利" },
    { upDoor: "休门", downDoor: "休门", content: "求财、进人口、谒贵吉，上任、修造亦大利" },
    { upDoor: "休门", downDoor: "生门", content: "主得阴人财物，谒贵谋望，虽迟也吉" },
    { upDoor: "休门", downDoor: "伤门", content: "上官喜庆，求财不得，有亲戚分产。变动事不吉" },
    { upDoor: "休门", downDoor: "杜门", content: "主破财，失物难寻" },
    { upDoor: "休门", downDoor: "景门", content: "主求文书印信事不至，反招口舌小凶" },
    { upDoor: "休门", downDoor: "死门", content: "主文印官司事不吉，远行，僧道事不吉，占病凶" },
    { upDoor: "休门", downDoor: "惊门", content: "主损财、招非并疾病、惊恐事" },
    { upDoor: "休门", downDoor: "开门", content: "主开张店铺及见贵、求财等喜事，大吉" },
    { upDoor: "生门", downDoor: "生门", content: "主远行、求财吉" },
    { upDoor: "生门", downDoor: "伤门", content: "主远行、求财吉" },
    { upDoor: "生门", downDoor: "杜门", content: "主远行、求财吉" },
    { upDoor: "生门", downDoor: "景门", content: "主远行、求财吉" },
    { upDoor: "生门", downDoor: "死门", content: "主远行、求财吉" },
    { upDoor: "生门", downDoor: "惊门", content: "主远行、求财吉" },
    { upDoor: "生门", downDoor: "开门", content: "主远行、求财吉" },
    { upDoor: "生门", downDoor: "休门", content: "主远行、求财吉" },
]



//(3）生门:
// 生加生：主远行、求财吉。
// 生加伤：主亲友变动，道路不吉。
// 生加杜：主阴谋，阴人破财，不利。
// 生加景：主阴人、小口不宁及文书事，后吉。
// 生加死：主田宅官司，病主难救。
// 生加惊：主尊长财产、词讼，病迟愈，吉。
// 生加开：主见贵人，求财大发。
// 生加休：主阴人处求谋财利，吉。生加戊：嫁娶、求财、谒贵皆吉。生加乙：主阴人生产，迟吉。
// 生加丙：主贵人印绶、婚姻、书信喜事。
// 生加丁：主词讼、婚姻、财利大吉。
// 生加己：主得贵人维持，吉。
// 生加庚：主财产争讼破产，不利。
// 生加辛：主产妇疾病，后吉。
// 生加壬：主遗失财后得，贼盗易获。生加癸：主婚姻不成，余事皆吉。

//(4）伤门:
// 伤加伤：主变动，远行折伤，凶。
// 伤加杜：主变动，失脱，官司，桎梏，百事凶。
// 伤加景：主文书印信，口舌，惹是生非。
// 伤加死：主官司印信凶，出行大忌，占病凶。
// 伤加惊：主亲人疾病忧惊，媒伐不利，凶。
// 伤加开：主见贵人、开张、走失、变动之事，不利。
// 伤加休：主男人变动或托人办事，财名不利。
// 伤加生：主房产、种植事业，凶。
// 伤加戊：主失脱难获。
// 伤加乙：主求谋不得，反防盗失财。
// 伤加丙：主道路损失。
// 伤加丁：主音信不至。
// 伤加己：主财散人病。
// 伤加庚：主讼狱被刑杖，凶。
// 伤加辛：主夫妻怀私恣怨。
// 伤加壬：主因盗牵连。
// 伤加癸：主讼狱被冤，有理难伸。

// (5）杜门：
// 杜加杜：主因父母疾病、田宅出脱事，凶。
// 杜加景：主文书印信阻隔，男人小口疾病，迟疑不利。
// 杜加死：主田宅文书失落，官司破财，小凶。
// 杜加惊：主门户内忧疑惊恐，并有词讼事。
// 杜加开：主见贵人官长，谋事主先破己财，后吉。
// 杜加休：主求财有益。
// 杜加生：主男人小口破财，田宅求财不利。
// 杜加伤：主兄弟相争，破财不利。
// 杜加戊：主谋事不成，秘处求财得。
// 杜加乙：宜暗求男人财物，后主不明致讼。
// 杜加丙：主文契遗失。
// 杜加丁：主男人讼狱。
// 杜加己：主私谋害人招非。
// 杜加庚：主因女人讼狱被刑。
// 杜加辛：主打伤人，词讼，男人小口凶。
// 杜加壬：主奸盗事，凶。
// 杜加癸：主百事皆阻，病者不食。

// (6）景门：
// 景加景：主文状未动有预先见之意，内有男人小口忧患。
// 景加死：主官讼，因田宅事相争，惹麻烦。
// 景加惊：主官讼，女人小口疾病，凶。景加开：主官人升迁，吉；求文印更吉。景加休：主文书遗失，争讼不休。
// 景加生：主阴人生产大喜，更主求财旺利，行人皆吉。
// 景加伤：主姻亲小口口舌。
// 景加杜：主失脱文书，败财后平。景加戊：因财产词讼，远行吉。景加乙：主讼事不成。
// 景加丙：主文书急迫，火速不利。
// 景加丁：主因文书印状招非。
// 景加己：主官司牵连。景加庚：主讼人自讼。景加辛：主阴人词讼。景加壬：主因贼牵连。
// 景加癸：主因奴婢受刑。

// (7）死门：
// 死加死：主官事稽留，印信无气，凶。死加惊：主因官司不结，忧疑患病，凶。死加开：主见贵人，求印信文书事大利。
// 死加休：主求财物事不吉，若问僧道求方吉。死加生：主丧事，求财得，占病死而复生。死加伤：主官司动而被刑杖，凶。
// 死加杜：主破财，妇人风疾，腹肿。
// 死加景：主因文契印信财产事见官，先怒后喜，不凶。
// 死加戊：主作伪财。
// 死加乙：主求事不成。死加丙：主信息忧疑。死加丁：主老阳人疾病。
// 死加己：主病讼牵连不已，凶。死加庚：主女人生产，母子俱凶。死加辛：主盗贼失脱难获。
// 死加壬：主讼人自讼自招。死加癸：主妇女嫁娶事凶。

//(8）惊门：
// 惊加惊：主疾病，忧虑，惊恐。
// 惊加开：主官司忧疑，能见贵人不凶。
// 惊加休：主求财事或口舌事，迟吉。
// 惊加生：主因妇人生产或求财事惊忧，皆吉。惊加伤：主因商议同谋害人，事泄惹讼，凶。惊加杜：主因失脱破财惊恐，不凶。
// 惊加景：主词讼不息，小口疾病，凶。惊加死：主因宅中怪异而生是非，凶。惊加戊：主损财，信阻。
// 惊加乙：主谋财不得。
// 惊加丙：主文书印信惊恐。
// 惊加丁：主词讼牵连。
// 惊加已：主恶犬伤人成讼。
// 惊加庚：主道路损折，遇贼盗，凶。
// 惊加辛：主女人成讼，凶。
// 惊加壬：主官司囚禁，病者大凶。
// 惊加癸：主被盗，失物难获。

export default baseDoorAnalyseInfo