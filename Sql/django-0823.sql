/*
Navicat MySQL Data Transfer

Source Server         : 54.199.71.55
Source Server Version : 50738
Source Host           : 54.199.71.55:3306
Source Database       : django

Target Server Type    : MYSQL
Target Server Version : 50738
File Encoding         : 65001

Date: 2022-08-23 19:49:14
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `article_id` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `title` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `content` longtext COLLATE utf8_unicode_ci,
  `status` varchar(1) COLLATE utf8_unicode_ci NOT NULL,
  `views` int(10) unsigned NOT NULL,
  `created_time` datetime(6) NOT NULL,
  `category_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `article_category_id_99127861_fk_category_id` (`category_id`),
  CONSTRAINT `article_category_id_99127861_fk_category_id` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of article
-- ----------------------------
INSERT INTO `article` VALUES ('1', '1', '测试文章', '<p style=\"color: rgb(78, 88, 90); font-family: &quot;Helvetica Neue&quot;, &quot;Calibri Light&quot;, Roboto, sans-serif; font-size: 16.8px; letter-spacing: 0.28px;\">传奇帮教程-N++文本编辑器安装+位数选择+设置(轻量级教程）<br>录制时间：2020年10月21日</p><p style=\"color: rgb(78, 88, 90); font-family: &quot;Helvetica Neue&quot;, &quot;Calibri Light&quot;, Roboto, sans-serif; font-size: 16.8px; letter-spacing: 0.28px;\">教程准备<br>1、N++文本编辑器最新版</p><p style=\"color: rgb(78, 88, 90); font-family: &quot;Helvetica Neue&quot;, &quot;Calibri Light&quot;, Roboto, sans-serif; font-size: 16.8px; letter-spacing: 0.28px;\">第一：怎么选择版本<br>如果你是XP或者2003的系统，那么选择32位的</p><h1 class=\"\" style=\"font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; color: rgb(51, 51, 51);\"><span style=\"font-size: 18px;\">第二：N++三个初级设置</span></h1><h1 class=\"\"><img src=\"/templates/data/media/django-summernote/2022-06-20/cb2c87c9-a97b-4c97-82f9-fae443c5cbe1.png\" style=\"width: 331px;\"></h1><p><br></p><p><br></p>', 'p', '0', '2022-06-20 13:48:00.000000', '1');
INSERT INTO `article` VALUES ('2', '2', '8 万游客滞留三亚，回程机票暴涨', '<p style=\"padding: 0px; color: rgb(59, 59, 59); font-family: PingFangSC-regular, &quot;Microsoft YaHei&quot;; font-size: 18px; margin-top: 28px !important; margin-bottom: 28px !important;\">8 月 6 日凌晨，记者从三亚市新型冠状病毒肺炎疫情防控工作指挥部获悉，当前三亚市疫情防控形势十分严峻。</p><p style=\"padding: 0px; color: rgb(59, 59, 59); font-family: PingFangSC-regular, &quot;Microsoft YaHei&quot;; font-size: 18px; margin-top: 28px !important; margin-bottom: 28px !important;\"><b></b></p><p style=\"padding: 0px; color: rgb(59, 59, 59); font-family: PingFangSC-regular, &quot;Microsoft YaHei&quot;; font-size: 18px; margin-top: 28px !important; margin-bottom: 28px !important;\"><b></b></p><p style=\"padding: 0px; color: rgb(59, 59, 59); font-family: PingFangSC-regular, &quot;Microsoft YaHei&quot;; font-size: 18px; margin-top: 28px !important; margin-bottom: 28px !important;\"><b></b></p><p style=\"padding: 0px; color: rgb(59, 59, 59); font-family: PingFangSC-regular, &quot;Microsoft YaHei&quot;; font-size: 18px; margin-top: 28px !important; margin-bottom: 28px !important;\">根据国务院联防联控机制部署，为尽快阻断疫情扩散蔓延，坚决贯彻落实 \" 外防输入、内防反弹 \" 总策略和 \" 动态清零 \" 总方针，力争在最短时间内有效控制疫情，切实守护好人民健康和生命安全，现将有关事项通告如下 ↓</p><p style=\"padding: 0px; color: rgb(59, 59, 59); font-family: PingFangSC-regular, &quot;Microsoft YaHei&quot;; font-size: 18px; margin-top: 28px !important; margin-bottom: 28px !important;\"><strong>自 2022 年 8 月 6 日凌晨 6 时起，三亚全市实行临时性全域静态管理，除保障社会基本运行服务、疫情防控和紧急特殊情况外，三亚全市范围限制人员流动，暂停城市公共交通。恢复时间另行通告。</strong></p><p style=\"padding: 0px; color: rgb(59, 59, 59); font-family: PingFangSC-regular, &quot;Microsoft YaHei&quot;; font-size: 18px; margin-top: 28px !important; margin-bottom: 28px !important;\">正值暑期旅游旺季，海滨城市三亚出现疫情。此次三亚疫情聚集性明显，已出现省内扩散和外溢；毒株为奥密克戎变异株 BA.5.1.3。如何看待海南这次面对奥密克戎变异株疫情以来，遇到的最大，也是最复杂的一次疫情？怎样快速阻断传播，尽早实现动态清零。</p><p style=\"padding: 0px; color: rgb(59, 59, 59); font-family: PingFangSC-regular, &quot;Microsoft YaHei&quot;; font-size: 18px; margin-top: 28px !important; margin-bottom: 28px !important;\"><strong>海南省三亚市政府副市长 何世刚：</strong><strong>估算大概有 8 万多名的游客留在三亚，在这个艰难时刻，三亚作为旅游城市，更要对滞留在三亚的游客，有更多的关心和做好相关的服务。</strong>从目前数据分析来看，现在感染者主要是当地居民，对如何做好滞留游客的工作，有这么几个方面：</p><p style=\"padding: 0px; color: rgb(59, 59, 59); font-family: PingFangSC-regular, &quot;Microsoft YaHei&quot;; font-size: 18px; margin-top: 28px !important; margin-bottom: 28px !important;\"></p><p style=\"padding: 0px; color: rgb(59, 59, 59); font-family: PingFangSC-regular, &quot;Microsoft YaHei&quot;; font-size: 18px; margin-top: 28px !important; margin-bottom: 28px !important;\">第一，从现在目前病例分布来看，在三亚湾和亚龙湾这两个地方，刚好也是游客最集中的地方，所以我们强化了对三亚湾和亚龙湾的管控，要求必须要有 24 小时的核酸阴性证明才能进入，这样的话能够保证游客比较集中的地方免受或者减少病毒感染的可能性。</p><p style=\"padding: 0px; color: rgb(59, 59, 59); font-family: PingFangSC-regular, &quot;Microsoft YaHei&quot;; font-size: 18px; margin-top: 28px !important; margin-bottom: 28px !important;\">第二，要求旅文等涉旅的部门，包括酒店协会等企业，一定要努力为游客做好服务和安抚情绪，把相关政策告诉游客。同时在旅文部门设立专班，安排专线，专门受理游客的各种诉求，协调他们所涉及的一些涉旅的问题，妥善给他们做好服务。</p><p style=\"padding: 0px; color: rgb(59, 59, 59); font-family: PingFangSC-regular, &quot;Microsoft YaHei&quot;; font-size: 18px; margin-top: 28px !important; margin-bottom: 28px !important;\"><strong>目前游客凭核酸证明可进出三亚</strong></p><p style=\"padding: 0px; color: rgb(59, 59, 59); font-family: PingFangSC-regular, &quot;Microsoft YaHei&quot;; font-size: 18px; margin-top: 28px !important; margin-bottom: 28px !important;\"><strong>海南省三亚市政府副市长 何世刚：</strong>海棠湾和亚龙湾实际上都是比较相对独立的单元，所以我们都在路口设了卡口。外地的游客到了以后，他仍然可以凭核酸阴性证明以及抵达三亚的机票和火车票进入到他所预定的酒店，并且办理入住，游客进出都需要有核酸检测证明。所以我们一定要力保这些地方目前还没有发生疫情的，还没有发生病例的，而且又是游客比较多的地方要严加管控，避免他们受到疫情传播的影响。</p>', 'p', '0', '2022-08-07 05:59:00.000000', '1');
INSERT INTO `article` VALUES ('3', '3', '焦点访谈：新基建 新生活 “智慧”解码 农业升级', '<p style=\"text-size-adjust: none; padding: 0px; margin-bottom: 30px; list-style: none; font-size: 18px; line-height: 32px; word-break: break-all; font-family: PingFangSC-Regular, Helvetica, Arial, &quot;Microsoft Yahei&quot;, sans-serif;\"><strong data-spm-anchor-id=\"C73544894212.P59511941341.0.i1\">央视网消息</strong>（焦点访谈）：我们继续关注“新基建 新生活”。现在，很多地方都已经摆脱了面朝黄土背朝天的传统耕种方式，各种高科技大显身手。人们发现，将数字产业扩展到农业领域，运用先进的物联网、人工智能以及大数据等“新基建”技术对农业的生产经营进行智能化管理，将显著提升农产品品质，使农业生产力水平得到大幅提升。这种生产精准化、管理可视化、决策智能化的新型管理模式被称之为智慧农业。说起来挺新奇，那么，智慧农业到底长什么样呢？<br></p><p class=\"photo_img_20190808\" style=\"text-size-adjust: none; padding: 0px; margin-bottom: 30px; list-style: none; font-size: 18px; line-height: 0px; word-break: break-all; text-align: center; font-family: PingFangSC-Regular, Helvetica, Arial, &quot;Microsoft Yahei&quot;, sans-serif;\"><img src=\"https://p5.img.cctvpic.com/photoworkspace/contentimg/2022/08/15/2022081522031691205.jpg\" alt=\"\" width=\"1000\" style=\"display: block; max-width: 1000px; margin: 0px auto;\"></p><p style=\"text-size-adjust: none; padding: 0px; margin-bottom: 30px; list-style: none; font-size: 18px; line-height: 32px; word-break: break-all; font-family: PingFangSC-Regular, Helvetica, Arial, &quot;Microsoft Yahei&quot;, sans-serif;\">　　7月底，在安徽芜湖市繁昌区平铺镇，种粮大户刘明山的1000多亩晚稻正处在分蘖期，这是水稻生长发育的关键期，水、肥、病虫害防治都要跟上才能为高产打下基础。本应该是田管大忙的时候，自从今年刘明山用上了中联智农云的应用程序，田间管理的工作轻松了不少。</p><p class=\"photo_img_20190808\" style=\"text-size-adjust: none; padding: 0px; margin-bottom: 30px; list-style: none; font-size: 18px; line-height: 0px; word-break: break-all; text-align: center; font-family: PingFangSC-Regular, Helvetica, Arial, &quot;Microsoft Yahei&quot;, sans-serif;\"><img src=\"https://p2.img.cctvpic.com/photoworkspace/contentimg/2022/08/15/2022081522032334508.jpg\" alt=\"\" width=\"1000\" style=\"display: block; max-width: 1000px; margin: 0px auto;\"></p><p style=\"text-size-adjust: none; padding: 0px; margin-bottom: 30px; list-style: none; font-size: 18px; line-height: 32px; word-break: break-all; font-family: PingFangSC-Regular, Helvetica, Arial, &quot;Microsoft Yahei&quot;, sans-serif;\">　　刘明山说：“第一个是气象，第二个是施肥，第三个是田间管理，第四个是农作物病虫害，几乎全部覆盖了。以前巡田要请人，一个人巡不过来，现在它推送了以后不需要请工了，省去了这块费用，很精准，比如说这块田要上水，上哪一块，以前都是大水漫灌。”</p>', 'p', '0', '2022-08-15 14:43:00.000000', '2');

-- ----------------------------
-- Table structure for article_tags
-- ----------------------------
DROP TABLE IF EXISTS `article_tags`;
CREATE TABLE `article_tags` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `article_id` bigint(20) NOT NULL,
  `tag_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `article_tags_article_id_tag_id_9ea24d7b_uniq` (`article_id`,`tag_id`),
  KEY `article_tags_tag_id_55b93824_fk_tag_id` (`tag_id`),
  CONSTRAINT `article_tags_article_id_ebbe35ec_fk_article_id` FOREIGN KEY (`article_id`) REFERENCES `article` (`id`),
  CONSTRAINT `article_tags_tag_id_55b93824_fk_tag_id` FOREIGN KEY (`tag_id`) REFERENCES `tag` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of article_tags
-- ----------------------------

-- ----------------------------
-- Table structure for auth_group
-- ----------------------------
DROP TABLE IF EXISTS `auth_group`;
CREATE TABLE `auth_group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of auth_group
-- ----------------------------

-- ----------------------------
-- Table structure for auth_group_permissions
-- ----------------------------
DROP TABLE IF EXISTS `auth_group_permissions`;
CREATE TABLE `auth_group_permissions` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `group_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of auth_group_permissions
-- ----------------------------

-- ----------------------------
-- Table structure for auth_permission
-- ----------------------------
DROP TABLE IF EXISTS `auth_permission`;
CREATE TABLE `auth_permission` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `codename` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`),
  CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of auth_permission
-- ----------------------------
INSERT INTO `auth_permission` VALUES ('1', 'Can add log entry', '1', 'add_logentry');
INSERT INTO `auth_permission` VALUES ('2', 'Can change log entry', '1', 'change_logentry');
INSERT INTO `auth_permission` VALUES ('3', 'Can delete log entry', '1', 'delete_logentry');
INSERT INTO `auth_permission` VALUES ('4', 'Can view log entry', '1', 'view_logentry');
INSERT INTO `auth_permission` VALUES ('5', 'Can add permission', '2', 'add_permission');
INSERT INTO `auth_permission` VALUES ('6', 'Can change permission', '2', 'change_permission');
INSERT INTO `auth_permission` VALUES ('7', 'Can delete permission', '2', 'delete_permission');
INSERT INTO `auth_permission` VALUES ('8', 'Can view permission', '2', 'view_permission');
INSERT INTO `auth_permission` VALUES ('9', 'Can add group', '3', 'add_group');
INSERT INTO `auth_permission` VALUES ('10', 'Can change group', '3', 'change_group');
INSERT INTO `auth_permission` VALUES ('11', 'Can delete group', '3', 'delete_group');
INSERT INTO `auth_permission` VALUES ('12', 'Can view group', '3', 'view_group');
INSERT INTO `auth_permission` VALUES ('13', 'Can add user', '4', 'add_user');
INSERT INTO `auth_permission` VALUES ('14', 'Can change user', '4', 'change_user');
INSERT INTO `auth_permission` VALUES ('15', 'Can delete user', '4', 'delete_user');
INSERT INTO `auth_permission` VALUES ('16', 'Can view user', '4', 'view_user');
INSERT INTO `auth_permission` VALUES ('17', 'Can add content type', '5', 'add_contenttype');
INSERT INTO `auth_permission` VALUES ('18', 'Can change content type', '5', 'change_contenttype');
INSERT INTO `auth_permission` VALUES ('19', 'Can delete content type', '5', 'delete_contenttype');
INSERT INTO `auth_permission` VALUES ('20', 'Can view content type', '5', 'view_contenttype');
INSERT INTO `auth_permission` VALUES ('21', 'Can add session', '6', 'add_session');
INSERT INTO `auth_permission` VALUES ('22', 'Can change session', '6', 'change_session');
INSERT INTO `auth_permission` VALUES ('23', 'Can delete session', '6', 'delete_session');
INSERT INTO `auth_permission` VALUES ('24', 'Can view session', '6', 'view_session');
INSERT INTO `auth_permission` VALUES ('25', 'Can add 文章管理', '7', 'add_article');
INSERT INTO `auth_permission` VALUES ('26', 'Can change 文章管理', '7', 'change_article');
INSERT INTO `auth_permission` VALUES ('27', 'Can delete 文章管理', '7', 'delete_article');
INSERT INTO `auth_permission` VALUES ('28', 'Can view 文章管理', '7', 'view_article');
INSERT INTO `auth_permission` VALUES ('29', 'Can add 分类管理', '8', 'add_category');
INSERT INTO `auth_permission` VALUES ('30', 'Can change 分类管理', '8', 'change_category');
INSERT INTO `auth_permission` VALUES ('31', 'Can delete 分类管理', '8', 'delete_category');
INSERT INTO `auth_permission` VALUES ('32', 'Can view 分类管理', '8', 'view_category');
INSERT INTO `auth_permission` VALUES ('33', 'Can add attachment', '9', 'add_attachment');
INSERT INTO `auth_permission` VALUES ('34', 'Can change attachment', '9', 'change_attachment');
INSERT INTO `auth_permission` VALUES ('35', 'Can delete attachment', '9', 'delete_attachment');
INSERT INTO `auth_permission` VALUES ('36', 'Can view attachment', '9', 'view_attachment');
INSERT INTO `auth_permission` VALUES ('37', 'Can add 评论', '10', 'add_articlecomment');
INSERT INTO `auth_permission` VALUES ('38', 'Can change 评论', '10', 'change_articlecomment');
INSERT INTO `auth_permission` VALUES ('39', 'Can delete 评论', '10', 'delete_articlecomment');
INSERT INTO `auth_permission` VALUES ('40', 'Can view 评论', '10', 'view_articlecomment');
INSERT INTO `auth_permission` VALUES ('41', 'Can add 标签名称', '11', 'add_tag');
INSERT INTO `auth_permission` VALUES ('42', 'Can change 标签名称', '11', 'change_tag');
INSERT INTO `auth_permission` VALUES ('43', 'Can delete 标签名称', '11', 'delete_tag');
INSERT INTO `auth_permission` VALUES ('44', 'Can view 标签名称', '11', 'view_tag');
INSERT INTO `auth_permission` VALUES ('45', 'Can add user', '12', 'add_user');
INSERT INTO `auth_permission` VALUES ('46', 'Can change user', '12', 'change_user');
INSERT INTO `auth_permission` VALUES ('47', 'Can delete user', '12', 'delete_user');
INSERT INTO `auth_permission` VALUES ('48', 'Can view user', '12', 'view_user');
INSERT INTO `auth_permission` VALUES ('49', 'Can add site', '13', 'add_site');
INSERT INTO `auth_permission` VALUES ('50', 'Can change site', '13', 'change_site');
INSERT INTO `auth_permission` VALUES ('51', 'Can delete site', '13', 'delete_site');
INSERT INTO `auth_permission` VALUES ('52', 'Can view site', '13', 'view_site');
INSERT INTO `auth_permission` VALUES ('53', 'Can add comment', '14', 'add_comment');
INSERT INTO `auth_permission` VALUES ('54', 'Can change comment', '14', 'change_comment');
INSERT INTO `auth_permission` VALUES ('55', 'Can delete comment', '14', 'delete_comment');
INSERT INTO `auth_permission` VALUES ('56', 'Can view comment', '14', 'view_comment');
INSERT INTO `auth_permission` VALUES ('57', 'Can moderate comments', '14', 'can_moderate');
INSERT INTO `auth_permission` VALUES ('58', 'Can add comment flag', '15', 'add_commentflag');
INSERT INTO `auth_permission` VALUES ('59', 'Can change comment flag', '15', 'change_commentflag');
INSERT INTO `auth_permission` VALUES ('60', 'Can delete comment flag', '15', 'delete_commentflag');
INSERT INTO `auth_permission` VALUES ('61', 'Can view comment flag', '15', 'view_commentflag');

-- ----------------------------
-- Table structure for auth_user
-- ----------------------------
DROP TABLE IF EXISTS `auth_user`;
CREATE TABLE `auth_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `password` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  `first_name` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  `last_name` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(254) COLLATE utf8_unicode_ci NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of auth_user
-- ----------------------------
INSERT INTO `auth_user` VALUES ('1', 'pbkdf2_sha256$320000$0HRCvMhQFeQsZCaAk5Xwqo$xh52B2wjTvzETospqekRMDLKr6aDWMPYACuC386HSLU=', '2022-08-06 15:41:20.632724', '1', 'admin', '', '', '', '1', '1', '2022-06-12 02:50:59.734629');

-- ----------------------------
-- Table structure for auth_user_groups
-- ----------------------------
DROP TABLE IF EXISTS `auth_user_groups`;
CREATE TABLE `auth_user_groups` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`),
  CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of auth_user_groups
-- ----------------------------

-- ----------------------------
-- Table structure for auth_user_user_permissions
-- ----------------------------
DROP TABLE IF EXISTS `auth_user_user_permissions`;
CREATE TABLE `auth_user_user_permissions` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  KEY `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of auth_user_user_permissions
-- ----------------------------

-- ----------------------------
-- Table structure for category
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(64) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of category
-- ----------------------------
INSERT INTO `category` VALUES ('1', '测试分类');
INSERT INTO `category` VALUES ('2', '新闻');

-- ----------------------------
-- Table structure for comment
-- ----------------------------
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `body` longtext COLLATE utf8_unicode_ci NOT NULL,
  `username` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `userimg` varchar(70) COLLATE utf8_unicode_ci NOT NULL,
  `nickname` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `createtime` datetime(6) NOT NULL,
  `article` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `title` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of comment
-- ----------------------------
INSERT INTO `comment` VALUES ('1', '啊发生的和规范化', 'root', '1', '匿名', '2022-08-07 14:48:00.000000', '1', '8 万游客滞留三亚，回程机票暴涨');

-- ----------------------------
-- Table structure for daniuapp_user
-- ----------------------------
DROP TABLE IF EXISTS `daniuapp_user`;
CREATE TABLE `daniuapp_user` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `nickname` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(254) COLLATE utf8_unicode_ci NOT NULL,
  `created_time` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `comment_num` int(10) unsigned NOT NULL,
  `avatar` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of daniuapp_user
-- ----------------------------

-- ----------------------------
-- Table structure for django_admin_log
-- ----------------------------
DROP TABLE IF EXISTS `django_admin_log`;
CREATE TABLE `django_admin_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext COLLATE utf8_unicode_ci,
  `object_repr` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `action_flag` smallint(5) unsigned NOT NULL,
  `change_message` longtext COLLATE utf8_unicode_ci NOT NULL,
  `content_type_id` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`),
  CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of django_admin_log
-- ----------------------------
INSERT INTO `django_admin_log` VALUES ('1', '2022-06-13 15:04:16.648835', '1', 'blog', '1', '[{\"added\": {}}]', '8', '1');
INSERT INTO `django_admin_log` VALUES ('2', '2022-06-13 15:05:28.964334', '1', '1', '1', '[{\"added\": {}}]', '7', '1');
INSERT INTO `django_admin_log` VALUES ('3', '2022-06-13 15:24:01.977862', '1', '1', '2', '[{\"changed\": {\"fields\": [\"\\u5c01\\u9762\\u56fe\"]}}]', '7', '1');
INSERT INTO `django_admin_log` VALUES ('4', '2022-06-13 15:26:26.568611', '1', '1', '2', '[{\"changed\": {\"fields\": [\"\\u5c01\\u9762\\u56fe\"]}}]', '7', '1');
INSERT INTO `django_admin_log` VALUES ('5', '2022-06-16 17:14:50.710680', '1', '111', '1', '[{\"added\": {}}]', '9', '1');
INSERT INTO `django_admin_log` VALUES ('6', '2022-06-16 17:24:16.852705', '1', '111', '3', '', '9', '1');
INSERT INTO `django_admin_log` VALUES ('7', '2022-06-16 17:28:57.172611', '2', '777', '1', '[{\"added\": {}}]', '9', '1');
INSERT INTO `django_admin_log` VALUES ('8', '2022-06-16 17:35:03.557282', '1', '111', '1', '[{\"added\": {}}]', '11', '1');
INSERT INTO `django_admin_log` VALUES ('9', '2022-06-16 17:35:14.863102', '1', '222', '2', '[{\"changed\": {\"fields\": [\"\\u6807\\u7b7e\\u540d\"]}}]', '11', '1');
INSERT INTO `django_admin_log` VALUES ('10', '2022-06-16 17:35:20.801146', '2', '333', '1', '[{\"added\": {}}]', '11', '1');
INSERT INTO `django_admin_log` VALUES ('11', '2022-06-16 17:36:16.367810', '1', '222', '3', '', '11', '1');
INSERT INTO `django_admin_log` VALUES ('12', '2022-06-16 17:36:16.463903', '2', '333', '3', '', '11', '1');
INSERT INTO `django_admin_log` VALUES ('13', '2022-06-16 18:01:43.424766', '3', '7fa580ac0237477fa153808d392ed2ec.png', '3', '', '9', '1');
INSERT INTO `django_admin_log` VALUES ('14', '2022-06-16 18:01:43.796440', '2', '777', '3', '', '9', '1');
INSERT INTO `django_admin_log` VALUES ('15', '2022-06-16 18:02:27.990653', '4', '123', '1', '[{\"added\": {}}]', '9', '1');
INSERT INTO `django_admin_log` VALUES ('16', '2022-06-16 18:02:42.617580', '4', '123', '3', '', '9', '1');
INSERT INTO `django_admin_log` VALUES ('17', '2022-06-20 13:51:20.096495', '1', '测试分类', '1', '[{\"added\": {}}]', '8', '1');
INSERT INTO `django_admin_log` VALUES ('18', '2022-06-20 13:51:25.857380', '1', '测试', '1', '[{\"added\": {}}]', '7', '1');
INSERT INTO `django_admin_log` VALUES ('19', '2022-08-07 04:44:21.637786', '1', '测试', '2', '[{\"changed\": {\"fields\": [\"\\u6b63\\u6587\"]}}]', '7', '1');
INSERT INTO `django_admin_log` VALUES ('20', '2022-08-07 04:44:57.517946', '1', '测试文章', '2', '[{\"changed\": {\"fields\": [\"\\u6807\\u53f7\", \"\\u6807\\u9898\"]}}]', '7', '1');
INSERT INTO `django_admin_log` VALUES ('21', '2022-08-07 04:49:37.415845', '1', '测试文章', '2', '[{\"changed\": {\"fields\": [\"\\u6807\\u53f7\"]}}]', '7', '1');
INSERT INTO `django_admin_log` VALUES ('22', '2022-08-07 06:00:56.984532', '2', '8 万游客滞留三亚，回程机票暴涨', '1', '[{\"added\": {}}]', '7', '1');
INSERT INTO `django_admin_log` VALUES ('23', '2022-08-07 06:01:49.335900', '2', '8 万游客滞留三亚，回程机票暴涨', '2', '[{\"changed\": {\"fields\": [\"\\u6b63\\u6587\"]}}]', '7', '1');
INSERT INTO `django_admin_log` VALUES ('24', '2022-08-07 14:46:56.837240', '1', '测试文章', '2', '[{\"changed\": {\"fields\": [\"\\u6b63\\u6587\"]}}]', '7', '1');
INSERT INTO `django_admin_log` VALUES ('25', '2022-08-07 14:49:54.377222', '1', '1', '1', '[{\"added\": {}}]', '10', '1');
INSERT INTO `django_admin_log` VALUES ('26', '2022-08-07 15:24:35.906828', '2', '123456', '3', '', '4', '1');
INSERT INTO `django_admin_log` VALUES ('27', '2022-08-15 14:44:57.511358', '3', '焦点访谈：新基建 新生活 “智慧”解码 农业升级', '1', '[{\"added\": {}}]', '7', '1');
INSERT INTO `django_admin_log` VALUES ('28', '2022-08-15 15:29:39.146791', '2', '新闻', '1', '[{\"added\": {}}]', '8', '1');
INSERT INTO `django_admin_log` VALUES ('29', '2022-08-15 15:30:30.657899', '3', '焦点访谈：新基建 新生活 “智慧”解码 农业升级', '2', '[{\"changed\": {\"fields\": [\"\\u5206\\u7c7b\"]}}]', '7', '1');

-- ----------------------------
-- Table structure for django_comment_flags
-- ----------------------------
DROP TABLE IF EXISTS `django_comment_flags`;
CREATE TABLE `django_comment_flags` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `flag` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `flag_date` datetime(6) NOT NULL,
  `comment_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_comment_flags_user_id_comment_id_flag_537f77a7_uniq` (`user_id`,`comment_id`,`flag`),
  KEY `django_comment_flags_comment_id_d8054933_fk_django_comments_id` (`comment_id`),
  KEY `django_comment_flags_flag_8b141fcb` (`flag`),
  CONSTRAINT `django_comment_flags_comment_id_d8054933_fk_django_comments_id` FOREIGN KEY (`comment_id`) REFERENCES `django_comments` (`id`),
  CONSTRAINT `django_comment_flags_user_id_f3f81f0a_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of django_comment_flags
-- ----------------------------

-- ----------------------------
-- Table structure for django_comments
-- ----------------------------
DROP TABLE IF EXISTS `django_comments`;
CREATE TABLE `django_comments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `object_pk` varchar(64) COLLATE utf8_unicode_ci NOT NULL,
  `user_name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `user_email` varchar(254) COLLATE utf8_unicode_ci NOT NULL,
  `user_url` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `comment` longtext COLLATE utf8_unicode_ci NOT NULL,
  `submit_date` datetime(6) NOT NULL,
  `ip_address` char(39) COLLATE utf8_unicode_ci DEFAULT NULL,
  `is_public` tinyint(1) NOT NULL,
  `is_removed` tinyint(1) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `site_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `django_comments_content_type_id_c4afe962_fk_django_co` (`content_type_id`),
  KEY `django_comments_site_id_9dcf666e_fk_django_site_id` (`site_id`),
  KEY `django_comments_user_id_a0a440a1_fk_auth_user_id` (`user_id`),
  KEY `django_comments_submit_date_514ed2d9` (`submit_date`),
  KEY `django_comments_is_removed_52a03ae3` (`is_removed`),
  KEY `django_comments_object_pk_7fc98e83` (`object_pk`),
  CONSTRAINT `django_comments_content_type_id_c4afe962_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_comments_site_id_9dcf666e_fk_django_site_id` FOREIGN KEY (`site_id`) REFERENCES `django_site` (`id`),
  CONSTRAINT `django_comments_user_id_a0a440a1_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of django_comments
-- ----------------------------

-- ----------------------------
-- Table structure for django_content_type
-- ----------------------------
DROP TABLE IF EXISTS `django_content_type`;
CREATE TABLE `django_content_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `model` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of django_content_type
-- ----------------------------
INSERT INTO `django_content_type` VALUES ('1', 'admin', 'logentry');
INSERT INTO `django_content_type` VALUES ('3', 'auth', 'group');
INSERT INTO `django_content_type` VALUES ('2', 'auth', 'permission');
INSERT INTO `django_content_type` VALUES ('4', 'auth', 'user');
INSERT INTO `django_content_type` VALUES ('5', 'contenttypes', 'contenttype');
INSERT INTO `django_content_type` VALUES ('7', 'daniuapp', 'article');
INSERT INTO `django_content_type` VALUES ('10', 'daniuapp', 'articlecomment');
INSERT INTO `django_content_type` VALUES ('8', 'daniuapp', 'category');
INSERT INTO `django_content_type` VALUES ('11', 'daniuapp', 'tag');
INSERT INTO `django_content_type` VALUES ('12', 'daniuapp', 'user');
INSERT INTO `django_content_type` VALUES ('14', 'django_comments', 'comment');
INSERT INTO `django_content_type` VALUES ('15', 'django_comments', 'commentflag');
INSERT INTO `django_content_type` VALUES ('9', 'django_summernote', 'attachment');
INSERT INTO `django_content_type` VALUES ('6', 'sessions', 'session');
INSERT INTO `django_content_type` VALUES ('13', 'sites', 'site');

-- ----------------------------
-- Table structure for django_migrations
-- ----------------------------
DROP TABLE IF EXISTS `django_migrations`;
CREATE TABLE `django_migrations` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `app` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of django_migrations
-- ----------------------------
INSERT INTO `django_migrations` VALUES ('1', 'contenttypes', '0001_initial', '2022-06-12 02:49:08.364543');
INSERT INTO `django_migrations` VALUES ('2', 'auth', '0001_initial', '2022-06-12 02:49:12.024146');
INSERT INTO `django_migrations` VALUES ('3', 'admin', '0001_initial', '2022-06-12 02:49:12.993131');
INSERT INTO `django_migrations` VALUES ('4', 'admin', '0002_logentry_remove_auto_add', '2022-06-12 02:49:13.258738');
INSERT INTO `django_migrations` VALUES ('5', 'admin', '0003_logentry_add_action_flag_choices', '2022-06-12 02:49:13.508721');
INSERT INTO `django_migrations` VALUES ('6', 'contenttypes', '0002_remove_content_type_name', '2022-06-12 02:49:14.461994');
INSERT INTO `django_migrations` VALUES ('7', 'auth', '0002_alter_permission_name_max_length', '2022-06-12 02:49:14.884039');
INSERT INTO `django_migrations` VALUES ('8', 'auth', '0003_alter_user_email_max_length', '2022-06-12 02:49:15.305885');
INSERT INTO `django_migrations` VALUES ('9', 'auth', '0004_alter_user_username_opts', '2022-06-12 02:49:15.555868');
INSERT INTO `django_migrations` VALUES ('10', 'auth', '0005_alter_user_last_login_null', '2022-06-12 02:49:15.977924');
INSERT INTO `django_migrations` VALUES ('11', 'auth', '0006_require_contenttypes_0002', '2022-06-12 02:49:16.227907');
INSERT INTO `django_migrations` VALUES ('12', 'auth', '0007_alter_validators_add_error_messages', '2022-06-12 02:49:16.493502');
INSERT INTO `django_migrations` VALUES ('13', 'auth', '0008_alter_user_username_max_length', '2022-06-12 02:49:16.899951');
INSERT INTO `django_migrations` VALUES ('14', 'auth', '0009_alter_user_last_name_max_length', '2022-06-12 02:49:17.321797');
INSERT INTO `django_migrations` VALUES ('15', 'auth', '0010_alter_group_name_max_length', '2022-06-12 02:49:17.743778');
INSERT INTO `django_migrations` VALUES ('16', 'auth', '0011_update_proxy_permissions', '2022-06-12 02:49:18.368735');
INSERT INTO `django_migrations` VALUES ('17', 'auth', '0012_alter_user_first_name_max_length', '2022-06-12 02:49:18.790799');
INSERT INTO `django_migrations` VALUES ('18', 'sessions', '0001_initial', '2022-06-12 02:49:19.447004');
INSERT INTO `django_migrations` VALUES ('22', 'django_summernote', '0001_initial', '2022-06-16 16:37:01.611134');
INSERT INTO `django_migrations` VALUES ('23', 'django_summernote', '0002_update-help_text', '2022-06-16 16:37:01.798972');
INSERT INTO `django_migrations` VALUES ('24', 'django_summernote', '0003_alter_attachment_id', '2022-06-16 16:44:04.565008');
INSERT INTO `django_migrations` VALUES ('26', 'daniuapp', '0001_initial', '2022-06-16 16:57:31.639746');
INSERT INTO `django_migrations` VALUES ('27', 'sites', '0001_initial', '2022-08-21 14:29:01.083298');
INSERT INTO `django_migrations` VALUES ('28', 'django_comments', '0001_initial', '2022-08-21 14:29:03.942906');
INSERT INTO `django_migrations` VALUES ('29', 'django_comments', '0002_update_user_email_field_length', '2022-08-21 14:29:04.380442');
INSERT INTO `django_migrations` VALUES ('30', 'django_comments', '0003_add_submit_date_index', '2022-08-21 14:29:04.786921');
INSERT INTO `django_migrations` VALUES ('31', 'django_comments', '0004_add_object_pk_is_removed_index', '2022-08-21 14:29:05.521295');
INSERT INTO `django_migrations` VALUES ('32', 'sites', '0002_alter_domain_unique', '2022-08-21 14:29:05.927543');

-- ----------------------------
-- Table structure for django_session
-- ----------------------------
DROP TABLE IF EXISTS `django_session`;
CREATE TABLE `django_session` (
  `session_key` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `session_data` longtext COLLATE utf8_unicode_ci NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_expire_date_a5c62663` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of django_session
-- ----------------------------
INSERT INTO `django_session` VALUES ('3vdkb8unidh0sooerbmgjyykbmqexgyd', '.eJzFVslu2zAQ_RVDZy-iNtK5tci1pyKnKjCGi5ZUi0FRhyLwv5eUHLdhZYV2bPREiPP4OO_NUOSrt4NeFbu-E3JXcu_BQ97y7zkK7KdoTIC_QJO3a9Y2SpZ0bSDrY7Rbf2u5qL4ese8ICugKvToknHEUBSJLkL9lGQsg43EYhBlioWCIB3oGCYJQxES8xTROcIZ85icIA90KQ1qLpu8014_X1GugFqn3sEi9R2jKHvb71Fvqr1LnN85nIBcZrFgpWSXGYG2y7Ez4PcWTTrQ7s96IGEO9rMbIBnhdNht-3HhjIJsRA5w_zcI04AilUgBnsq_pREaOog7LxYVCDs8mKEpuYsj3A5siTfs48BM9YIbp8IWwHghJiIPFZ01ioETeyl8ORp2g9zXrE0ptF8MJ7iQmhg2D8G_nIkhVapSDiW_Iu3t4rU7bw2iKm_gDN8Xidh4qyB38M6j7e3elPtu7eIKbUBYNA4Wb9x9ra_0zVu5t-Lbg7o5eq9p2NLEnkL3Z43AfLr73WplsWiU-cQF9UQpYYRw69_eerc6Qya47ZbKBE99MieZWudbpQg9sD9112-Ug9gSebAYYm4Eh0wwRYebMhYSYAUfhv3t2Zs-uKEXFV1Cp-aqZkxsHA1kQ4ovfD-aN9MHb4Q_EsSC3ET1hpatQqyzIn-IS-oxOZ2FIuhVr8xnLctn2-w88GzH_3TQnobZlyG7t7eHZO_wGYEKtFA:1o382E:y60WOPk4UGjcnAgipXRjbva7s1w-dmLIWofoBrC_zDw', '2022-07-04 03:25:06.511272');
INSERT INTO `django_session` VALUES ('e51596htt86nh0eoj7k2l01mkdn0js4i', '.eJxVjDsOwjAQBe_iGlleOz9T0ucM1np3TQLIluKkQtydREoB7cy891YBt3UKW5UlzKyuCtTll0Wkp-RD8APzvWgqeV3mqI9En7bqsbC8bmf7dzBhnfa1G5gYGiupA-MpkcXErbMuATkhYLsTkAGgIWl9H9uuT2DIdNBj9KI-X_nbOEs:1o1Ttd:Yw6nvikldlp6Bftg2BTAiYLBdwOi5L0LWdMzXjvO8LU', '2022-06-29 14:21:25.367281');
INSERT INTO `django_session` VALUES ('fuw1topos4s94t90tog8grr7cbh28hfw', '.eJzFVslu2zAQ_RVDZy-iNtK5tci1pyKnKjCGi5ZUi0FRhyLwv5eUHLdhZYV2bPREiPP4OO_NUOSrt4NeFbu-E3JXcu_BQ97y7zkK7KdoTIC_QJO3a9Y2SpZ0bSDrY7Rbf2u5qL4ese8ICugKvToknHEUBSJLkL9lGQsg43EYhBlioWCIB3oGCYJQxES8xTROcIZ85icIA90KQ1qLpu8014_X1GugFqn3sEi9R2jKHvb71Fvqr1LnN85nIBcZrFgpWSXGYG2y7Ez4PcWTTrQ7s96IGEO9rMbIBnhdNht-3HhjIJsRA5w_zcI04AilUgBnsq_pREaOog7LxYVCDs8mKEpuYsj3A5siTfs48BM9YIbp8IWwHghJiIPFZ01ioETeyl8ORp2g9zXrE0ptF8MJ7iQmhg2D8G_nIkhVapSDiW_Iu3t4rU7bw2iKm_gDN8Xidh4qyB38M6j7e3elPtu7eIKbUBYNA4Wb9x9ra_0zVu5t-Lbg7o5eq9p2NLEnkL3Z43AfLr73WplsWiU-cQF9UQpYYRw69_eerc6Qya47ZbKBE99MieZWudbpQg9sD9112-Ug9gSebAYYm4Eh0wwRYebMhYSYAUfhv3t2Zs-uKEXFV1Cp-aqZkxsHA1kQ4ovfD-aN9MHb4Q_EsSC3ET1hpatQqyzIn-IS-oxOZ2FIuhVr8xnLctn2-w88GzH_3TQnobZlyG7t7eHZO_wGYEKtFA:1oNbJV:ZyRZwgVRCtIrTx4EPBKkHYX6yeMBqT1bNkeC36L1_aY', '2022-08-29 14:43:33.850811');
INSERT INTO `django_session` VALUES ('ul2xxxrn1d06t2kuyzemut21g5aoogln', '.eJzFVslu2zAQ_RVDZy-iNtK5tci1pyKnKjCGi5ZUi0FRhyLwv5eUHLdhZYV2bPREiPP4OO_NUOSrt4NeFbu-E3JXcu_BQ97y7zkK7KdoTIC_QJO3a9Y2SpZ0bSDrY7Rbf2u5qL4ese8ICugKvToknHEUBSJLkL9lGQsg43EYhBlioWCIB3oGCYJQxES8xTROcIZ85icIA90KQ1qLpu8014_X1GugFqn3sEi9R2jKHvb71Fvqr1LnN85nIBcZrFgpWSXGYG2y7Ez4PcWTTrQ7s96IGEO9rMbIBnhdNht-3HhjIJsRA5w_zcI04AilUgBnsq_pREaOog7LxYVCDs8mKEpuYsj3A5siTfs48BM9YIbp8IWwHghJiIPFZ01ioETeyl8ORp2g9zXrE0ptF8MJ7iQmhg2D8G_nIkhVapSDiW_Iu3t4rU7bw2iKm_gDN8Xidh4qyB38M6j7e3elPtu7eIKbUBYNA4Wb9x9ra_0zVu5t-Lbg7o5eq9p2NLEnkL3Z43AfLr73WplsWiU-cQF9UQpYYRw69_eerc6Qya47ZbKBE99MieZWudbpQg9sD9112-Ug9gSebAYYm4Eh0wwRYebMhYSYAUfhv3t2Zs-uKEXFV1Cp-aqZkxsHA1kQ4ovfD-aN9MHb4Q_EsSC3ET1hpatQqyzIn-IS-oxOZ2FIuhVr8xnLctn2-w88GzH_3TQnobZlyG7t7eHZO_wGYEKtFA:1o3HlL:FeKGhB3xhHynbEIAPXqbqS6zYQ9oBF0JndI18LwKG6Q', '2022-07-04 13:48:19.120234');

-- ----------------------------
-- Table structure for django_site
-- ----------------------------
DROP TABLE IF EXISTS `django_site`;
CREATE TABLE `django_site` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `domain` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_site_domain_a2e37b91_uniq` (`domain`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of django_site
-- ----------------------------
INSERT INTO `django_site` VALUES ('1', 'example.com', 'example.com');

-- ----------------------------
-- Table structure for django_summernote_attachment
-- ----------------------------
DROP TABLE IF EXISTS `django_summernote_attachment`;
CREATE TABLE `django_summernote_attachment` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `file` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `uploaded` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of django_summernote_attachment
-- ----------------------------
INSERT INTO `django_summernote_attachment` VALUES ('5', 'onlinekefu.png', 'django-summernote/2022-06-20/cb2c87c9-a97b-4c97-82f9-fae443c5cbe1.png', '2022-06-20 13:49:11.794487');

-- ----------------------------
-- Table structure for tag
-- ----------------------------
DROP TABLE IF EXISTS `tag`;
CREATE TABLE `tag` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(64) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of tag
-- ----------------------------
