function countTenStem(curInfo, curArea) {
    const baseTenStemInfo = [
        { upStem: "戊", downStem: "戊", content: "即戊加戊，甲甲比肩，名谓伏吟。遇此，凡事不利，道路闭塞，以守为好" },
        { upStem: "戊", downStem: "乙", content: "即戊加乙，甲乙会合，因甲乙均位于东方青龙之位，所以叫青龙和会，门吉事也吉，门凶事也凶" },
        { upStem: "戊", downStem: "丙", content: "因青龙甲木生助丙火，故为青龙返首，为事所谋，大吉大利。若逢迫墓击刑，吉事成凶" },
        { upStem: "戊", downStem: "丁", content: "因甲木青龙生助丁火，故为青龙耀明，宜见上级领导、贵人、求功名，为事吉利。若值墓迫，招惹是非" },
        { upStem: "戊", downStem: "己", content: "因为戌为戊土之墓，故为贵人入狱，公私皆不利" },
        { upStem: "戊", downStem: "庚", content: "因值符甲最怕庚金克杀，故为值符飞宫，吉事不吉，凶事更凶，求财没利益，测病也主凶。同时，甲庚相冲，飞宫也主换地方" },
        { upStem: "戊", downStem: "辛", content: "因辛金克甲木，子午相冲，故为青龙折足，吉门有生助，尚能谋事，若逢凶门，主招灾、失财或有足疾、折伤" },
        { upStem: "戊", downStem: "壬", content: "因壬为天牢，甲为青龙，故为青龙入天牢，凡阴阳事皆不吉利" },
        { upStem: "戊", downStem: "癸", content: "因甲为青龙，癸为天网，又为华盖，故为青龙华盖，又戊癸相合，故逢吉门为吉，可招福临门。逢凶门者事多不利，为凶" },

        { upStem: "乙", downStem: "戊", content: "乙木克戊土，为阴害阳门（因戊为阳为天门），利于阴人、阴事，不利阳人、阳事，门吉尚可谋为，门凶、门迫则破财伤人" },
        { upStem: "乙", downStem: "乙", content: "乙乙比肩，为日奇伏吟，不宜见上层领导、贵人，不宜求名求利，只宜安分守已为吉" },
        { upStem: "乙", downStem: "丙", content: "乙木生丙火，为奇仪顺遂，吉星迁官晋职，凶星夫妻反目离别" },
        { upStem: "乙", downStem: "丁", content: "为奇仪相佐，最利文书、考试，百事可为" },
        { upStem: "乙", downStem: "己", content: "因戌为乙木之墓，故为日奇入墓，被土暗昧，门凶事必凶，得生、开二吉门为地遁" },
        { upStem: "乙", downStem: "庚", content: "庚金克刑乙木，故为日奇被刑，为争讼财产，夫妻怀有私意" },
        { upStem: "乙", downStem: "辛", content: "乙为青龙，辛为白虎，乙木被辛金冲克而逃，故为青龙逃走，人亡财破，奴仆拐带，六畜皆伤。测婚为女逃男" },
        { upStem: "乙", downStem: "壬", content: "为日奇入地，尊卑悖乱，官讼是非，有人谋害之事" },
        { upStem: "乙", downStem: "癸", content: "为华盖逢星，遁迹修道，隐匿藏形，躲灾避难为吉" },

        { upStem: "丙", downStem: "戊", content: "甲为丙火之母，丙火回到母亲身边，好似飞鸟归巢，故名鸟跌穴，百事吉，事业可为，可谋大事" },
        { upStem: "丙", downStem: "乙", content: "为日月并行，公谋私为皆为吉" },
        { upStem: "丙", downStem: "丙", content: "为月奇悖师，文书逼迫，破耗遗失。主单据票证不明遗失" },
        { upStem: "丙", downStem: "丁", content: "为星奇朱雀，贵人文书吉利，常人平静安乐，得三吉门为天遁" },
        { upStem: "丙", downStem: "己", content: "因丙火入戌墓，故为火悖入刑，囚人刑杖，文书不行，吉门得吉，凶门转凶" },
        { upStem: "丙", downStem: "庚", content: "为荧入太白，门户破败，盗贼耗失，事业亦凶" },
        { upStem: "丙", downStem: "辛", content: "因丙辛相合，故为谋事能成，为疾病人不凶" },
        { upStem: "丙", downStem: "壬", content: "为火入天罗，壬水冲克丙火，故为客不利，是非颇多" },
        { upStem: "丙", downStem: "癸", content: "为华盖悖师，阴人害事，灾祸频生" },

        { upStem: "丁", downStem: "戊", content: "为青龙转光，官人升迁，常人威昌" },
        { upStem: "丁", downStem: "乙", content: "为人遁吉格，贵人加官晋爵，常人婚姻财帛有喜" },
        { upStem: "丁", downStem: "丙", content: "为星随月转，贵人越级高升，常人乐极生悲，要忍，不然因小的不忍而引起大的不幸" },
        { upStem: "丁", downStem: "丁", content: "为星奇入太阴，文书证件即至，喜事从心，万事如意" },
        { upStem: "丁", downStem: "己", content: "因成为火库，己为勾陈，故为火人勾陈，奸私仇冤，事因女人" },
        { upStem: "丁", downStem: "庚", content: "丁为文书，庚为阻隔之神，故为文书阻隔，行人必归" },
        { upStem: "丁", downStem: "辛", content: "为朱雀入狱，罪人释囚，官人失位" },
        { upStem: "丁", downStem: "壬", content: "天盘丁加地盘甲辰壬，即丁加壬，因丁壬相合，故主贵人恩诏，讼狱公平。测婚多为苟合" },
        { upStem: "丁", downStem: "癸", content: "为朱雀投江，文书口舌是非，经官动府，词讼不利，音信沉溺不到" },

        { upStem: "己", downStem: "戊", content: "因戌为犬，甲为龙，故为犬遇青龙，门吉为谋望遂意，上人见喜；若门凶，枉费心机" },
        { upStem: "己", downStem: "乙", content: "因戌为乙木之墓，已又为地户，故名墓神不明，地户逢星，宜遁迹隐形为利" },
        { upStem: "己", downStem: "丙", content: "为火悖地户，男人冤冤相害，女人必致淫污" },
        { upStem: "己", downStem: "丁", content: "因戌为火墓，故名为朱雀入墓，文书词讼，先曲后直" },
        { upStem: "己", downStem: "己", content: "名为地户逢鬼，病者发凶或必死，百事不遂，暂不谋为，谋为则凶" },
        { upStem: "己", downStem: "庚", content: "名为刑格返名，词讼先动者不利，如临阴星则有谋害之情" },
        { upStem: "己", downStem: "辛", content: "名为游魂入墓，易遭阴邪鬼魅作" },
        { upStem: "己", downStem: "壬", content: "名为地网高张，狡童佚女，奸情伤杀，凶" },
        { upStem: "己", downStem: "癸", content: "名为地刑玄武，男女疾病垂危，有囚狱词讼之灾" },

        { upStem: "庚", downStem: "戊", content: "庚金克甲木，谓天乙伏宫，百事不可谋，大凶" },
        { upStem: "庚", downStem: "乙", content: "为太白逢星，退吉进凶，谋为不利" },
        { upStem: "庚", downStem: "丙", content: "为太白入荧，测贼盗时，看贼人来不来，太白入荧，贼定要来，为客进利，为主破财" },
        { upStem: "庚", downStem: "丁", content: "名为亭亭之格，因私匿或男女关系起官司是非，门吉有救，门凶事必凶" },
        { upStem: "庚", downStem: "己", content: "名为官符刑格，主有官司口舌，因官讼被判刑，住牢狱更凶" },
        { upStem: "庚", downStem: "庚", content: "名为太白同宫，又名战格，官灾横祸，兄弟或同辈朋友相冲撞，不利为事" },
        { upStem: "庚", downStem: "辛", content: "名为白虎干格，不宜远行，远行车折马伤，求财更为大凶" },
        { upStem: "庚", downStem: "壬", content: "为上格，壬水主流动，庚为阻隔之神，故远行道路迷失，男女音信难通" },
        { upStem: "庚", downStem: "癸", content: "名为大格，因寅申相冲克，庚为道路，故多主车祸，行人不至，官事不止，生育母子俱伤，大凶" },

        { upStem: "辛", downStem: "戊", content: "辛金克甲木，子午又相冲，故为困龙被伤，主官司破财，屈抑守分尚可，妄动则带来祸殃" },
        { upStem: "辛", downStem: "乙", content: "辛金冲克乙木，故名为白虎猖狂，家败人亡，远行多灾殃；测婚离散，主因男人" },
        { upStem: "辛", downStem: "丙", content: "名干合悖师，门吉则事吉，门凶则事凶，测事易因财物致讼" },
        { upStem: "辛", downStem: "丁", content: "辛为狱神，丁为星奇，故名为狱神得奇，经商求财获利倍增，囚人逢天赦释免" },
        { upStem: "辛", downStem: "己", content: "辛为罪人，成为午火之库，故名为入狱自刑，奴仆背主，有苦诉讼难伸" },
        { upStem: "辛", downStem: "庚", content: "名为白虎出力，刀刃相交，主客相残，逊让退步稍可，强进血溅衣衫" },
        { upStem: "辛", downStem: "辛", content: "因午午为自刑，故名为伏吟天庭，公废私就，讼狱自罹罪名" },
        { upStem: "辛", downStem: "壬", content: "因壬为凶蛇，辛为牢狱，故名为凶蛇入狱，两男争女，讼狱不息，先动失理" },
        { upStem: "辛", downStem: "癸", content: "因辛为天牢，癸为华盖，故名为天牢华盖，日月失明，误入天网，动止乖张" },

        { upStem: "壬", downStem: "戊", content: "因壬为小蛇，甲为青龙，故为小蛇化龙，男人发达，女人产婴童" },
        { upStem: "壬", downStem: "乙", content: "名为小蛇得势，女人柔顺，男人通达，测孕育生子，禄马光华" },
        { upStem: "壬", downStem: "丙", content: "名为水蛇入火，因壬丙相冲克，故主官灾刑禁，络绎不绝" },
        { upStem: "壬", downStem: "丁", content: "因丁壬相合，故名干合蛇刑，文书牵连，贵人匆匆，男吉女凶" },
        { upStem: "壬", downStem: "己", content: "因辰戌相冲，故名为反吟蛇刑，主官讼败诉，大祸将至，顺守可吉，妄动必凶" },
        { upStem: "壬", downStem: "庚", content: "因庚为太白，壬为蛇，故名为太白擒蛇，刑狱公平，立剖邪正" },
        { upStem: "壬", downStem: "辛", content: "因辛金入辰水之墓，故名为塍蛇相缠，纵得吉门，亦不能安宁，若有谋望，被人欺瞒" },
        { upStem: "壬", downStem: "壬", content: "名为蛇入地罗，外人缠绕，内事索索，吉门吉星，庶免磋跎" },
        { upStem: "壬", downStem: "癸", content: "名为幼女奸淫，主有家丑外扬之事发生，门吉星凶，易反福为祸" },

        { upStem: "癸", downStem: "戊", content: "戊癸相合，名为天乙会合，吉门宜求财，婚姻喜美，吉人赞助成合。若门凶迫制，反祸官非" },
        { upStem: "癸", downStem: "乙", content: "名为华盖逢星，贵人禄位，常人平安。门吉则吉，门凶则凶" },
        { upStem: "癸", downStem: "丙", content: "名为华盖悖师，贵贱逢之皆不利，惟上人见喜" },
        { upStem: "癸", downStem: "丁", content: "因癸水冲克丁火，丁火烧灼癸水，故名为腾蛇夭矫，文书官司，火焚也逃不掉" },
        { upStem: "癸", downStem: "己", content: "名为华盖地户，男女测之，音信皆阻，此格躲灾避难方为吉" },
        { upStem: "癸", downStem: "庚", content: "名为太白入网，主以暴力争讼，自罹罪责" },
        { upStem: "癸", downStem: "辛", content: "名为网盖天牢，主官司败诉，死罪难逃；测病亦大凶" },
        { upStem: "癸", downStem: "壬", content: "因癸、壬均为水蛇，故名复见塍蛇，主嫁娶重婚，后嫁无子，不保年华" },
        { upStem: "癸", downStem: "癸", content: "名为天网四张，主行人失伴，病讼皆伤" }
    ]

    const targetInfo = curInfo.find(item => item.number === curArea)
    if (targetInfo.upStem && targetInfo.downStem) {
        const targetAnalyse = baseTenStemInfo.find(item => item.upStem === targetInfo.upStem && item.downStem === targetInfo.downStem)
        return `【${targetAnalyse.upStem} + ${targetAnalyse.downStem}】：${targetAnalyse.content}`
    } else {
        return null
    }
}
export default countTenStem