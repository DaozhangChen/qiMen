const baseDoorAnalyseInfo = [
    { upDoor: "开门", downDoor: "开门", content: "主贵人宝物财喜" },
    { upDoor: "开门", downDoor: "休门", content: "主见贵人财喜及开张铺店，贸易大利" },
    { upDoor: "开门", downDoor: "生门", content: "主见贵人，谋望所求遂意" },
    { upDoor: "开门", downDoor: "伤门", content: "主变动、更改、移徙，事皆不吉" },
    { upDoor: "开门", downDoor: "杜门", content: "主失脱，刊印书契小凶" },
    { upDoor: "开门", downDoor: "景门", content: "主见贵人，因文书不利" },
    { upDoor: "开门", downDoor: "死门", content: "主官司惊扰，先忧后喜" },
    { upDoor: "开门", downDoor: "惊门", content: "主百事不利" },
    { upDoor: "休门", downDoor: "休门", content: "求财、进人口、谒贵吉，上任、修造亦大利" },
    { upDoor: "休门", downDoor: "生门", content: "主得阴人财物，谒贵谋望，虽迟也吉" },
    { upDoor: "休门", downDoor: "伤门", content: "上官喜庆，求财不得，有亲戚分产。变动事不吉" },
    { upDoor: "休门", downDoor: "杜门", content: "主破财，失物难寻" },
    { upDoor: "休门", downDoor: "景门", content: "主求文书印信事不至，反招口舌小凶" },
    { upDoor: "休门", downDoor: "死门", content: "主文印官司事不吉，远行，僧道事不吉，占病凶" },
    { upDoor: "休门", downDoor: "惊门", content: "主损财、招非并疾病、惊恐事" },
    { upDoor: "休门", downDoor: "开门", content: "主开张店铺及见贵、求财等喜事，大吉" },
    { upDoor: "生门", downDoor: "生门", content: "主远行、求财吉" },
    { upDoor: "生门", downDoor: "伤门", content: "主亲友变动，道路不吉" },
    { upDoor: "生门", downDoor: "杜门", content: "主阴谋，阴人破财，不利" },
    { upDoor: "生门", downDoor: "景门", content: "主阴人、小口不宁及文书事，后吉" },
    { upDoor: "生门", downDoor: "死门", content: "主田宅官司，病主难救" },
    { upDoor: "生门", downDoor: "惊门", content: "主尊长财产、词讼，病迟愈，吉" },
    { upDoor: "生门", downDoor: "开门", content: "主见贵人，求财大发" },
    { upDoor: "生门", downDoor: "休门", content: "主阴人处求谋财利，吉" },
    { upDoor: "伤门", downDoor: "伤门", content: "主变动，远行折伤，凶" },
    { upDoor: "伤门", downDoor: "杜门", content: "主变动，失脱，官司，桎梏，百事凶" },
    { upDoor: "伤门", downDoor: "景门", content: "主文书印信，口舌，惹是生非" },
    { upDoor: "伤门", downDoor: "死门", content: "主官司印信凶，出行大忌，占病凶" },
    { upDoor: "伤门", downDoor: "惊门", content: "主亲人疾病忧惊，媒伐不利，凶" },
    { upDoor: "伤门", downDoor: "开门", content: "主见贵人、开张、走失、变动之事，不利" },
    { upDoor: "伤门", downDoor: "休门", content: "主男人变动或托人办事，财名不利" },
    { upDoor: "伤门", downDoor: "生门", content: "主房产、种植事业，凶" },
    { upDoor: "杜门", downDoor: "杜门", content: "主因父母疾病、田宅出脱事，凶" },
    { upDoor: "杜门", downDoor: "景门", content: "主文书印信阻隔，男人小口疾病，迟疑不利" },
    { upDoor: "杜门", downDoor: "死门", content: "主田宅文书失落，官司破财，小凶" },
    { upDoor: "杜门", downDoor: "惊门", content: "主门户内忧疑惊恐，并有词讼事" },
    { upDoor: "杜门", downDoor: "开门", content: "主见贵人官长，谋事主先破己财，后吉" },
    { upDoor: "杜门", downDoor: "休门", content: "主求财有益" },
    { upDoor: "杜门", downDoor: "生门", content: "主男人小口破财，田宅求财不利" },
    { upDoor: "杜门", downDoor: "伤门", content: "主兄弟相争，破财不利" },
    { upDoor: "景门", downDoor: "景门", content: "主文状未动有预先见之意，内有男人小口忧患" },
    { upDoor: "景门", downDoor: "死门", content: "主官讼，因田宅事相争，惹麻烦" },
    { upDoor: "景门", downDoor: "惊门", content: "主官讼，女人小口疾病，凶" },
    { upDoor: "景门", downDoor: "开门", content: "主官人升迁，吉；求文印更吉" },
    { upDoor: "景门", downDoor: "休门", content: "主文书遗失，争讼不休" },
    { upDoor: "景门", downDoor: "生门", content: "主阴人生产大喜，更主求财旺利，行人皆吉" },
    { upDoor: "景门", downDoor: "伤门", content: "主姻亲小口口舌" },
    { upDoor: "景门", downDoor: "杜门", content: "主失脱文书，败财后平" },
    { upDoor: "死门", downDoor: "死门", content: "主官事稽留，印信无气，凶。死加惊：主因官司不结，忧疑患病，凶。死加开：主见贵人，求印信文书事大利" },
    { upDoor: "死门", downDoor: "休门", content: "主求财物事不吉，若问僧道求方吉。死加生：主丧事，求财得，占病死而复生。死加伤：主官司动而被刑杖，凶" },
    { upDoor: "死门", downDoor: "杜门", content: "主破财，妇人风疾，腹肿" },
    { upDoor: "死门", downDoor: "景门", content: "主因文契印信财产事见官，先怒后喜，不凶" },
    { upDoor: "惊门", downDoor: "惊门", content: "主疾病，忧虑，惊恐" },
    { upDoor: "惊门", downDoor: "开门", content: "主官司忧疑，能见贵人不凶" },
    { upDoor: "惊门", downDoor: "休门", content: "主求财事或口舌事，迟吉" },
    { upDoor: "惊门", downDoor: "生门", content: "主因妇人生产或求财事惊忧，皆吉。惊加伤：主因商议同谋害人，事泄惹讼，凶。惊加杜：主因失脱破财惊恐，不凶" },
    { upDoor: "惊门", downDoor: "景门", content: "主词讼不息，小口疾病，凶。惊加死：主因宅中怪异而生是非，凶。惊加戊：主损财，信阻" },
]



export default baseDoorAnalyseInfo