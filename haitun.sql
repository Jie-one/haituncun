/*
Navicat MySQL Data Transfer

Source Server         : a
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : haitun

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-08-27 20:02:10
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for product
-- ----------------------------
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `id` int(222) NOT NULL AUTO_INCREMENT COMMENT '商品ID',
  `name` varchar(255) DEFAULT NULL COMMENT '商品名称',
  `description` varchar(255) DEFAULT NULL COMMENT '商品描述',
  `price` double(10,2) DEFAULT NULL COMMENT '国内价格',
  `activeprice` double(10,2) DEFAULT NULL COMMENT '活动价格',
  `weight` int(11) DEFAULT NULL COMMENT '重量',
  `count` int(11) DEFAULT NULL COMMENT '商品数量',
  `imgurl` varchar(255) DEFAULT NULL COMMENT '图片路径',
  `category` varchar(255) DEFAULT NULL COMMENT '商品分类',
  `forename` varchar(255) DEFAULT NULL COMMENT '外国名称',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=59 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of product
-- ----------------------------
INSERT INTO `product` VALUES ('1', 'A2 白金系列 婴幼儿配方奶粉', 'A2 白金系列 婴幼儿配方奶粉是由天然牛奶加工而成，奶粉中含有100%天然的A2 β-酪蛋白，不含A1酪蛋白 ，是最自然源生的配方', '738.00', '131.73', '900', '3', 'my01.jpg', '母婴用品', null);
INSERT INTO `product` VALUES ('2', 'Mustela 妙思乐婴儿洗发沐浴', 'Mustela妙思乐贝贝洗发沐浴露专为婴儿和儿童日常沐浴而研制的，蕴含专利天然成分鳄梨果活源糖?，不含皂性，温和有效清洁宝宝的皮肤和头发，蕴含温和表面活性剂和甘油，有助增强皮肤屏障功能，并能保护婴儿丰富的皮肤干细胞，温和清洁皮肤和头发。柔顺头发，更易梳理。适合宝宝幼嫩的皮肤和头皮，不会引起刺激和干燥。', '135.00', '15.03', '500', '2', 'my02.jpg', '母婴用品', 'Mustela /妙思乐');
INSERT INTO `product` VALUES ('3', 'Hipp 喜宝 婴幼儿温和滋润面霜', 'Hipp 喜宝 婴幼儿温和滋润面霜，特为婴儿幼嫩、敏感的肌肤研制，滋润和保护宝宝肌肤。其独特配方能迅速渗透肌肤，使用后长久保湿，肌肤幼嫩柔滑。本产品已通过专业皮肤检测机构检验合格，宝宝使用更加安全放心。', '32.86', '3.95', '50', '2', 'my03.jpg', '母婴用品', 'Hipp/喜宝');
INSERT INTO `product` VALUES ('4', 'Gaia 纯天然婴儿安抚保湿沐浴露', 'Gaia 纯天然婴儿安抚保湿沐浴露采用全天然有机配方，由纯正、天然的植物油制成，能滋润干燥、粗糙及敏感肌肤，令皮肤回复柔软顺滑，绝不含化学及矿物油。所有的有机成分都经过专业机构的认证，有机成份达到6种之多。Gaia全部选用经认证的有机成份，不含皂（脂肪酸的碱金属盐）、乙二醇、矿物油、防腐剂等常用的化学刺激成分，为肌肤提供最天然的呵护。', '50.14', '8.95', '250', '3', 'my04.jpg', '母婴用品', 'Gaia');
INSERT INTO `product` VALUES ('5', 'Pigeon 贝亲 桃子水 痱子水', 'Pigeon贝亲桃子精华液体爽身粉痱子水，液体爽身粉无粉末，桃叶精华天然无刺激，保湿又滋润，对宝宝的热痱，尿布疹，湿疹有快速修复的作用，还有晒后镇静皮肤的作用，有的宝妈妈对痱子粉飞尘有担忧，那么选择这款液体痱子水那是再好不过了，可倒入沐浴水中，沐浴后都可使用，无香料，无色素，无酒精，无添加，敏感肌同样适用。', '185.00', '55.50', '200', '2', 'my05.jpg', '母婴用品', 'Pigeon/贝亲');
INSERT INTO `product` VALUES ('6', 'Hipp 喜宝 护理油 ', 'Hipp 喜宝 婴儿天然有机免敏杏仁护理油，100%纯净天然的植物油，不添加任何水分。好吸收，不油腻。顶级印度芝麻油及珍贵的甜杏仁油是最好的按摩油来源，是婴儿按摩全身肌肤的最佳选择，亦可用于孕妇妊娠时的肌肤护理。', '41.18', '4.95', '200', '5', 'my06.jpg', '母婴用品', 'Hipp/喜宝');
INSERT INTO `product` VALUES ('7', 'Bellamy\'s 贝拉米 星星意面', 'Bellamy\'s 贝拉米 婴幼儿有机糙米星星意面选用最优质的有机全麦糙米精制而成，并特别添加了对人体有益的铁元素，满足宝宝营养需求。Bellamy\'s 贝拉米系列宝宝营养辅食产品严格按照NASAA有机认证标准生产，不含任何的化学合成农药和肥料，不含转基因物质，保证宝宝营养安全，采用科学配方，为宝宝成长发育提供均衡的营养。', '38.94', '6.95', '200', '3', 'my07.jpg', '母婴用品', 'Bellamy\'s/ 贝拉米');
INSERT INTO `product` VALUES ('8', 'Hipp 喜宝 婴儿柔和沐浴露 ', 'Hipp 喜宝 婴儿柔和沐浴露，无泪配方，天然杏仁油精华物质，使宝宝浴后肌肤更柔嫩、更爽滑，在宝宝肌肤表面自然形成保护膜。有机纯天然植物洗浴产品，已通过德国专业皮肤检测机构检测，通过过敏性测试，检验符合欧盟检测规定，宝宝使用更加安心。完全安全天然配方，既不会伤害宝宝娇嫩的皮肤，又不用担心会洗不净有残留，香味淡雅，清新宜人，洗完之后，会留有淡淡的清香。', '82.78', '9.95', '1000', null, 'my08.jpg', '母婴用品', 'Hipp/喜宝');
INSERT INTO `product` VALUES ('9', 'Palmer\'s 帕玛氏 修复精油', 'Palmer\'s 帕玛氏 孕妇产后祛妊娠纹修复精油是一款先进的多功能按摩油，可以用于全身、包括脸部。本品富含维生素E及可可脂等有效配方，能够软化和保护皮肤，减少水分流失，保持皮肤水润柔软丝滑。本品还能有效抚平疤痕，防止妊娠纹，修复干燥和受损肌肤，改善肌肤不均等问题，防止细纹和干纹的出现。', '91.99', '9.99', '150', null, 'my09.jpg', '母婴用品', 'Palmer\'s /帕玛氏');
INSERT INTO `product` VALUES ('10', 'Burt\'s Bees 小蜜蜂 小麦杏仁', 'Burt\'s Bees 小蜜蜂 小麦杏仁婴儿润肤按摩油可使新生细胞及受保护的表皮细胞水分充盈，达到肌肤保湿的效果', '105.80', '11.49', '118', null, 'my10.jpg', '母婴用品', 'Burt\'s Bees /小蜜蜂 ');
INSERT INTO `product` VALUES ('11', 'Swisse 维生素C泡腾片', null, '335.00', '59.80', null, null, 'yybaojian01.jpg', '营养保健', 'Swisse');
INSERT INTO `product` VALUES ('12', 'Swisse 清肺片', 'Swisse 清肺片（抗雾霾）科学配比，富含有人体必需的草药精华，维生素和矿物质营养成分，独有的优质配方能够有效作用于肺部和支气管系统', '379.00', '67.65', '90', '2', 'yybaojian02.jpg', '营养保健', 'Swisse');
INSERT INTO `product` VALUES ('13', '纤Q好手艺 16版 冲泡式薏仁水', '精细研磨的薏仁，2g随身包的包装，泡制方便，是非常好的 日常饮品', '175.00', '26.25', '30', '2', 'yybaojian03.jpg', '营养保健', null);
INSERT INTO `product` VALUES ('14', 'Holland & Barrett Omega3 多烯鱼油软胶囊', 'Holland & Barrett Omega3 多烯鱼油软胶囊能降低胆固醇，溶解血管垃圾，保持血流通畅；减少患眼病的几率，减轻视疲劳', '259.00', '28.12', '250', '2', 'yybaojian04.jpg', '营养保健', 'Holland & Barrett Omega3');
INSERT INTO `product` VALUES ('15', 'Childlife 婴幼儿精纯DHA软胶囊', 'ChildLife 婴幼儿精纯DHA软胶囊能为宝宝提供集中的DHA，有着浓浓果香，香软可口，易于咀嚼或吞咽', '145.00', '21.75', '90', '2', 'yybaojian05.jpg', '营养保健', 'Childlife ');
INSERT INTO `product` VALUES ('16', 'Centrum 善存 女士复合维生素片', 'Centrum 善存 女士复合维生素片有助于帮助身体补充所需或者流失的矿物质元素或者维生素，增强身体的免疫系统', '94.96', '14.24', '60', null, 'yybaojian06.jpg', '营养保健', 'Centrum');
INSERT INTO `product` VALUES ('17', 'Wild Ferns 麦卢卡蜂蜜和蜂胶润喉糖', 'Wild Ferns 麦卢卡蜂蜜和蜂胶润喉糖是新西兰纯活性麦卢卡AAH（抗菌抗氧化蜂蜜）制成，抗菌活性指数高达650+，具有显著的有益特性', '55.74', '8.36', '16', null, 'yybaojian07.jpg', '营养保健', 'Wild Ferns');
INSERT INTO `product` VALUES ('18', 'Australian By Nature 2000mg 天然蜂胶胶囊 ', 'Australian By Nature 2000mg 天然蜂胶胶囊含有维他命B1、B2、C和E等人体必不可少的矿物质、氨基酸和高含量的黄酮素', '408.68', '61.30', '360', null, 'yybaojian08.jpg', '营养保健', 'Australian By Nature ');
INSERT INTO `product` VALUES ('19', 'Em-Eukal 鼠尾草润喉维生素糖 ', 'Em-Eukal鼠尾草润喉维生素糖为鼠尾草味道的膳食补剂，含有珍贵的鼠尾草提取物，具有舒缓喉部不适，止咳止痒的功效', '17.05', '2.56', '75', null, 'yybaojian08.jpg', '营养保健', 'Em-Eukal ');
INSERT INTO `product` VALUES ('20', 'Nature\'s Way 佳思敏 儿童软糖', 'Nature\'s Way 佳思敏 儿童软糖，特别采取天然成分提炼而成，有助于帮助提高儿童身体的免疫系统，帮助抵御伤风感冒的侵袭', '66.95', '10.04', '60', null, 'yybaojian10.jpg', '营养保健', 'Nature\'s Way /佳思敏');
INSERT INTO `product` VALUES ('21', 'Bioderma 贝德玛 粉水深层卸妆洁肤水', 'Bioderma 贝德玛 粉水深层卸妆洁肤水，开创了胶束的解决方案的特殊配方，只需轻轻清理脸部和眼睛，就能有效去除防水彩妆。', '225.00', '45.00', '500', '2', 'mryz01.jpg', '美容药妆', 'Bioderma /贝德玛');
INSERT INTO `product` VALUES ('22', 'Caudalie 欧缇丽 葡萄籽水活性喷雾', 'Caudalie 欧缇丽 葡萄籽水活性喷雾，本款产品不仅可以镇定舒缓，对于抗电脑辐射，抗老化也有一定的效果', '189.00', '45.00', '200', '2', 'mryz02.jpg', '美容药妆', 'Caudalie/ 欧缇丽');
INSERT INTO `product` VALUES ('23', 'RE:CIPE 水晶补水保湿防晒喷雾', '全透明，不浮白，不留痕迹。定妆，轻轻一喷，轻松定妆。防水，良好的防水性能，无惧出汗游泳。清爽，爽透气不油腻，无负担。保湿，防晒同时，自然保湿肌肤。', '185.00', '45.00', '180', '3', 'mryz03.jpg', '美容药妆', 'RE:CIPE');
INSERT INTO `product` VALUES ('24', 'JM solution 海洋珍珠三部曲面膜', '海洋珍珠三部曲，深层补水保湿，亮泽嫩白，提拉紧致，使肌肤充满弹力！第一部水光精华，轻盈渗透到肌肤的提拉精华', '218.00', '65.40', '10', '3', 'mryz04.jpg', '美容药妆', 'JM solution');
INSERT INTO `product` VALUES ('25', 'MAC 魅可 子弹头唇膏/口红', 'MAC 魅可 子弹头唇膏/口红是魅可的明星产品。独特配方可帮助抚平唇部细纹，使唇膏唇彩上色均匀，达到饰底与持久唇妆的效果', '169.00', '90.00', '3', null, 'mryz05.jpg', '美容药妆', 'MAC /魅可');
INSERT INTO `product` VALUES ('26', 'Derma e 德玛依 修复面霜', 'Derma e 德玛依DMAE硫辛酸酯化C紧肤修复面霜，特别的重塑配方，带给皮肤看得见的弹性和紧实效果', '146.90', '15.95', '56', null, 'mryz06.jpg', '美容药妆', 'Derma e /德玛依');
INSERT INTO `product` VALUES ('27', 'Vichy 薇姿 面霜/亮肤霜', 'Vichy薇姿润滑精致亮彩面霜/亮肤霜专为改善肌肤老化迹象，如皱纹、暗沉和紊乱的皮肤纹理而设计，其含有的特效抗老成份', '228.32', '60.00', '50', null, 'mryz07.jpg', '美容药妆', 'Vichy/ 薇姿');
INSERT INTO `product` VALUES ('28', 'Derma e 德玛依 无香料精华', 'Derma e 德玛依碧萝芷抗红血丝无香料精华具有强大的消炎和抗氧化作用，能够防止细毛膜破裂，稳定毛细血管系统', '190.19', '20.65', '60', null, 'mryz08.jpg', '美容药妆', 'Derma e /德玛依');
INSERT INTO `product` VALUES ('29', 'Eucerin 优色林 水平衡清润舒爽眼霜', 'Eucerin 优色林水平衡清润舒爽眼霜 独有的异构糖成分，补水的同时有效减少角质层水分流失，长效保湿达24小时', '131.71', '14.30', '15', null, 'mryz09.jpg', '美容药妆', 'Eucerin/ 优色林');
INSERT INTO `product` VALUES ('30', 'Tokyo私处美白香皂', '全身美白，滋润。豆乳发酵液的配合，有效抑制皮肤天敌活性酵素生成，控制毛发生长。而且延缓皮肤衰老增强皮肤弹性', '125.00', '42.50', null, null, 'grhuli01.jpg', '个人护理', 'Tokyo');
INSERT INTO `product` VALUES ('31', 'Waitrose 经典系列 小苍兰与梨子味护手霜 ', '小苍兰&梨系列以清新的小苍兰绿植气息?前调，伴以甜梨与微妙的木质香，使产品滋润的同时更具备雅致的清甜香气', '105.00', '31.50', '75', '5', 'grhuli02.jpg', '个人护理', 'Waitrose');
INSERT INTO `product` VALUES ('32', 'Restoria 丽丝雅 黑发还原乳（非染发）', 'Restoria 丽丝雅 黑发还原乳（非染发），产品能于2-3个星期内将您的头发色泽由灰白变浅咖，在逐渐变成深咖和乌黑', '208.00', '62.40', '250', '2', 'grhuli03.jpg', '个人护理', 'Restoria');
INSERT INTO `product` VALUES ('33', 'ReneFurterer 馥绿德雅 防脱洗发水', null, '188.00', '56.40', '250', null, 'grhuli04.jpg', '个人护理', 'ReneFurterer');
INSERT INTO `product` VALUES ('34', 'BOTANIST 纯天然植物无硅洗护套装', null, '149.00', '44.70', '490', '2', 'grhuli05.jpg', '个人护理', 'BOTANIST');
INSERT INTO `product` VALUES ('35', 'Aussie 袋鼠 护色护发素', 'Aussie 袋鼠 护色护发素，澳洲水蜜桃的果核最早被澳洲土著人当做天然的头发护理油使用，现在Aussie 袋鼠相信它值得全世界的爱发人士使用', '43.19', '9.00', '250', null, 'grhuli06.jpg', '个人护理', 'Aussie');
INSERT INTO `product` VALUES ('36', 'The Body Shop 美体小铺 生姜洗发露', '彻底清洁毛发及头皮上的污垢，补充毛发所需的角质蛋白；促进毛囊正常细胞的新陈代谢，令头发营养从根部得到更新巩固独特配方', '219.00', '23.78', '400', '2', 'grhuli07.jpg', '个人护理', 'The Body Shop');
INSERT INTO `product` VALUES ('37', 'Blanx 倍林斯 非研磨经典型密集去渍美白牙膏', 'Blanx 倍林斯 非研磨经典型密集去渍美白牙膏是木瓜蛋白酶与北极地衣提取物结合，富含双倍的活性去渍美白成分，迅速分解顽固牙渍', '70.44', '21.13', '75', null, 'grhuli08.jpg', '个人护理', 'Blanx/ 倍林斯');
INSERT INTO `product` VALUES ('38', 'Sukin 苏芊 天然草本沐浴露', 'Sukin 苏芊 天然草本沐浴露蕴含丰富的香薰草本成份，含植物性芳香，能焕发及振作精神，沐浴后使肌肤感觉清新舒适', '74.59', '22.38', '250', null, 'grhuli09.jpg', '个人护理', 'Sukin /苏芊');
INSERT INTO `product` VALUES ('39', 'Brita 碧然德 Marella XL 滤水壶 ', '碧然德滤水壶主要用于使饮用水更清洁，口味更纯正，可用于厨房，可饮用水，烧菜，烧汤，洗涤，也可用于热饮机，咖啡机', '239.00', '20.32', '2', null, 'jiajucw01.jpg', '家居厨卫', 'Brita 碧然德 /');
INSERT INTO `product` VALUES ('40', 'THERMOS 膳魔师 不锈钢保温杯', '简约的质感，贴心的超轻设计、安全杯口能够让你的生活充满轻松愉悦。高真空技术保温保冷，时间长达13小时。杯身为不锈钢材质', '215.00', '64.50', '400', null, 'jiajucw02.jpg', '家居厨卫', 'THERMOS');
INSERT INTO `product` VALUES ('41', 'Snurk 鲍勃系列 全棉被套双人被罩枕套', '超柔软：棉花来自世界纯净的棉花产区；舒适柔软：直接接触，柔软舒适，不刺激；超透气：采用透气性极佳的工艺', '509.00', '152.70', null, null, 'jiajucw03.jpg', '家居厨卫', 'Snurk');
INSERT INTO `product` VALUES ('42', 'Brita 碧然德 Maxtra 滤水壶滤芯 ', 'BRATA 碧然德滤水壶滤芯是 MAXTRA 最新一代滤芯， 拥有独家的MAXTRA 技术，滤芯由“抗菌活性炭” 与“无钠离子交换树脂”双重滤材所组成', '379.00', '45.10', null, null, 'jiajucw04.jpg', '家居厨卫', 'Brita/ 碧然德 /Maxtra');
INSERT INTO `product` VALUES ('43', 'Zwilling 双立人Base系列 不锈钢锅', 'Zwilling 双立人Base系列 不锈钢锅的设计理念正如其名：顶级烹饪享受，花的入门级最基础的价格！', '1450.00', '435.00', null, '5', 'jiajucw05.jpg', '家居厨卫', 'Zwilling');
INSERT INTO `product` VALUES ('44', 'Quies 软化耳垢清洁喷雾', '清洗喷雾以多种表活为基础，帮助软化堵在外耳道的耳垢并将其排出，预防并改善因耳垢过多导致的听力下降、耳鸣甚至眩晕。', '129.00', '38.70', '100', null, 'jiajucw06.jpg', '家居厨卫', 'Quies ');
INSERT INTO `product` VALUES ('45', 'Brita 碧然德 Fun系列 红色滤水壶', '除了可以将自来水转变为口感绝佳的Brita饮用水，更拥有酷炫、时尚又轻巧的造型设计，让喝水充满乐趣。', '166.38', '49.91', '1', null, 'jiajucw07.jpg', '家居厨卫', 'Brita');
INSERT INTO `product` VALUES ('46', 'Brita 碧然德 金典系列 蓝色滤水壶', 'Brita 碧然德最受欢迎的Marella经典系列滤水壶除了经典的白色、蓝色，我们更推出了时尚多彩款', '191.26', '57.38', '2', null, 'jiajucw08.jpg', '家居厨卫', 'Brita /碧然德');
INSERT INTO `product` VALUES ('47', 'Waitrose 营养蜂蜜系列 纯结晶蜂蜜', '英国本土高级超市出品的顶级结晶蜂蜜，结晶十分透亮和干净，超级适合涂抹面包，蜂蜜中含有与人体血清浓度相似的各种无机盐', '165.00', '17.91', '454', '2', 'shipinjx01.jpg', '食品精选', 'Waitrose ');
INSERT INTO `product` VALUES ('48', 'Waitrose 枫糖和坚果类什锦早餐麦片', '英国本土畅销麦片，这个口味超级好吃~ 香甜枫糖口味全谷物麦片，融合多种葡萄干、核桃仁、烤榛子、葵花籽、杏仁片等', '179.00', '26.85', '1', '2', 'shipinjx02.jpg', '食品精选', 'Waitrose ');
INSERT INTO `product` VALUES ('49', '美可卓 蓝莓味咀嚼奶片', null, '159.00', '28.38', null, null, 'shipinjx03.jpg', '食品精选', '美可卓');
INSERT INTO `product` VALUES ('50', 'Calbee 卡乐比 富果乐水果麦片', '满满的食物纤维和铁分，营养又美味的麦片。富含苹果、草莓、木瓜、葡萄四种水果干，南瓜子、杏仁、椰果三种果实，口感香甜，爽口低脂。', '69.00', '10.35', '800', null, 'shipinjx04.jpg', '食品精选', 'Calbee');
INSERT INTO `product` VALUES ('51', 'Waitrose 营养蜂蜜系列 纯结晶蜂蜜', '英国本土高级超市出品的最顶级结晶蜂蜜，结晶十分透亮和干净，超级适合涂抹面包，蜂蜜中含有与人体血清浓度相似的各种无机盐', '118.00', '12.81', '454', null, 'shipinjx05.jpg', '食品精选', 'Waitrose ');
INSERT INTO `product` VALUES ('52', 'Dr Superfoods 草莓夹心黑巧克力 ', 'Dr Superfoods草莓夹心黑巧克力是甜美草莓干与浓醇黑巧克力的完美结合，纯正的黑巧克力里包裹着香甜草莓干，纯天然、无添加', '50.14', '7.52', '125', null, 'shipinjx06.jpg', '食品精选', 'Dr Superfoods');
INSERT INTO `product` VALUES ('53', 'Dr Superfoods 蓝莓夹心黑巧克力', 'Dr Superfoods蓝莓夹心黑巧克力是甜美蓝莓干与浓醇黑巧克力的完美结合，纯正的黑巧克力里包裹着香甜蓝莓干', '50.14', '7.52', '125', null, 'shipinjx07.jpg', '食品精选', 'Dr Superfoods');
INSERT INTO `product` VALUES ('54', 'Waitrose 少糖橘子果酱', '果肉含量达50%，完全看得见的果肉，浓郁美味，采用减糖工艺，添加较少的糖，更展现食物本身的美味，适合素食者享用。', '89.00', '13.35', '340', '2', 'shipinjx08.jpg', '食品精选', 'Waitrose');
INSERT INTO `product` VALUES ('55', 'Dr Superfoods 特级蔓越莓干', 'Dr Superfoods特级蔓越莓干由精选蔓越莓果实优质加工而成，保留蔓越莓独特的原汁原味，无酸涩口感，老少咸宜', '38.94', '5.84', '125', null, 'shipinjx09.jpg', '食品精选', 'Dr Superfoods ');
INSERT INTO `product` VALUES ('56', 'Paddington Bear 帕丁顿抱抱熊', 'Paddington Bear 帕丁顿抱抱熊有2种颜色，蓝色的外套加红色的帽子和红色的外套加蓝色的帽子，源自英国经典卡通人物。', '239.00', '35.85', null, null, 'wanju01.jpg', '儿童玩具', 'Paddington Bear ');
INSERT INTO `product` VALUES ('57', 'Paddington Bear 经典帕丁顿靴子熊', 'Paddington Bear 经典帕丁顿靴子熊，蓝色的外套、红色的帽子、红色的鞋子，源自英国经典卡通人物。', '179.00', '15.00', null, null, 'wanju02.jpg', '儿童玩具', 'Paddington Bear ');
INSERT INTO `product` VALUES ('58', 'Paddington Bear 帕丁顿抱抱熊', 'Paddington Bear 帕丁顿抱抱熊有2种颜色，蓝色的外套加红色的帽子和红色的外套加蓝色的帽子，源自英国经典卡通人物。', '239.00', '35.85', null, null, 'wanju03.jpg', '儿童玩具', 'Paddington Bear ');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户ID',
  `phone` varchar(255) DEFAULT NULL COMMENT '手机号码',
  `pwd` varchar(255) DEFAULT NULL COMMENT '密码',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('9', '13923234343', '123123');
SET FOREIGN_KEY_CHECKS=1;
