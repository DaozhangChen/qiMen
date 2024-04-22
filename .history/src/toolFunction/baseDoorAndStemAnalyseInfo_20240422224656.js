const baseDoorAndStemAnalyseInfo = [
    { door: "开门", stem: "戊", content: "财名俱得" },
    { door: "开门", stem: "乙", content: "小财可求" },
    { door: "开门", stem: "丙", content: "贵人印绶" },
    { door: "开门", stem: "丁", content: "远信必至" },
    { door: "开门", stem: "已", content: "事绪不定" },
    { door: "开门", stem: "庚", content: "道路词讼，谋为两岐" },
    { door: "开门", stem: "辛", content: "阴人道路" },
    { door: "开门", stem: "壬", content: "远行有失，注意破财" },
    { door: "开门", stem: "癸", content: "阴人失财小凶" },

    { door: "休门", stem: "戊", content: "财物和合" },
    { door: "休门", stem: "乙", content: "求谋重，不得；求轻，可得" },
    { door: "休门", stem: "丙", content: "文书和合喜庆" },
    { door: "休门", stem: "丁", content: "百讼休歇" },
    { door: "休门", stem: "己", content: "暗昧不宁，后吉" },
    { door: "休门", stem: "庚", content: "文书词讼先结后解" },
    { door: "休门", stem: "辛", content: "疾病迟愈，失物不得" },
    { door: "休门", stem: "壬", content: "阴人词讼牵连" },
    { door: "休门", stem: "癸", content: "阴人词讼牵连" },

    { door: "生门", stem: "丙", content: "主贵人印绶、婚姻、书信喜事" },
    { door: "生门", stem: "丁", content: "主词讼、婚姻、财利大吉" },
    { door: "生门", stem: "己", content: "主得贵人维持，吉" },
    { door: "生门", stem: "庚", content: "主财产争讼破产，不利" },
    { door: "生门", stem: "辛", content: "主产妇疾病，后吉" },
    { door: "生门", stem: "壬", content: "主遗失财后得，贼盗易获" },
    { door: "生门", stem: "癸", content: "主婚姻不成，余事皆吉" },
    { door: "生门", stem: "戊", content: "嫁娶、求财、谒贵皆吉" },
    { door: "生门", stem: "乙", content: "主阴人生产，迟吉" },

    { door: "伤门", stem: "戊", content: "主失脱难获" },
    { door: "伤门", stem: "乙", content: "主求谋不得，反防盗失财" },
    { door: "伤门", stem: "丙", content: "主道路损失" },
    { door: "伤门", stem: "丁", content: "主音信不至" },
    { door: "伤门", stem: "己", content: "主财散人病" },
    { door: "伤门", stem: "庚", content: "主讼狱被刑杖，凶" },
    { door: "伤门", stem: "辛", content: "主夫妻怀私恣怨" },
    { door: "伤门", stem: "壬", content: "主因盗牵连" },
    { door: "伤门", stem: "癸", content: "主讼狱被冤，有理难伸" },

    { door: "杜门", stem: "戊", content: "主谋事不成，秘处求财得" },
    { door: "杜门", stem: "乙", content: "宜暗求男人财物，后主不明致讼" },
    { door: "杜门", stem: "丙", content: "主文契遗失" },
    { door: "杜门", stem: "丁", content: "主男人讼狱" },
    { door: "杜门", stem: "己", content: "主私谋害人招非" },
    { door: "杜门", stem: "庚", content: "主因女人讼狱被刑" },
    { door: "杜门", stem: "辛", content: "主打伤人，词讼，男人小口凶" },
    { door: "杜门", stem: "壬", content: "主奸盗事，凶" },
    { door: "杜门", stem: "癸", content: "主百事皆阻，病者不食" },

    { door: "景门", stem: "丙", content: "主文书急迫，火速不利" },
    { door: "景门", stem: "丁", content: "主因文书印状招非" },
    { door: "景门", stem: "己", content: "主官司牵连" },
    { door: "景门", stem: "庚", content: "主讼人自讼" },
    { door: "景门", stem: "辛", content: "主阴人词讼" },
    { door: "景门", stem: "壬", content: "主因贼牵连" },
    { door: "景门", stem: "癸", content: "主因奴婢受刑" },
    { door: "景门", stem: "戊", content: "因财产词讼，远行吉" },
    { door: "景门", stem: "乙", content: "主讼事不成" },

    { door: "", stem: "", content: "" },
    { door: "", stem: "", content: "" },
    { door: "", stem: "", content: "" },
    { door: "", stem: "", content: "" },
    { door: "", stem: "", content: "" },
    { door: "", stem: "", content: "" },
    { door: "", stem: "", content: "" },
    { door: "", stem: "", content: "" },
    { door: "", stem: "", content: "" },

    { door: "", stem: "", content: "" },
    { door: "", stem: "", content: "" },
    { door: "", stem: "", content: "" },
    { door: "", stem: "", content: "" },
    { door: "", stem: "", content: "" },
    { door: "", stem: "", content: "" },
    { door: "", stem: "", content: "" },
    { door: "", stem: "", content: "" },
    { door: "", stem: "", content: "" },
]
// (7）死门：
// 死加戊：主作伪财。
// 死加乙：主求事不成。
// 死加丙：主信息忧疑。
// 死加丁：主老阳人疾病。
// 死加己：主病讼牵连不已，凶。
// 死加庚：主女人生产，母子俱凶。
// 死加辛：主盗贼失脱难获。
// 死加壬：主讼人自讼自招。
// 死加癸：主妇女嫁娶事凶。

//(8）惊门：
// 惊加乙：主谋财不得。
// 惊加丙：主文书印信惊恐。
// 惊加丁：主词讼牵连。
// 惊加已：主恶犬伤人成讼。
// 惊加庚：主道路损折，遇贼盗，凶。
// 惊加辛：主女人成讼，凶。
// 惊加壬：主官司囚禁，病者大凶。
// 惊加癸：主被盗，失物难获。
// 惊加戊：主损财，信阻