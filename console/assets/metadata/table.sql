/******************************************/
/*   数据库全名 = server   */
/*   表名称 = account   */
/******************************************/
CREATE TABLE `account` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `gmt_create` datetime NOT NULL COMMENT '创建时间',
  `gmt_modified` datetime NOT NULL COMMENT '修改时间',
  `mail` varchar(100) NOT NULL COMMENT '登录邮箱',
  `password` varchar(50) NOT NULL COMMENT '登录密码',
  `name` varchar(30) NOT NULL COMMENT '姓名',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='账号表'
;

/******************************************/
/*   数据库全名 = server   */
/*   表名称 = todo_list   */
/******************************************/
CREATE TABLE `todo_list` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `gmt_create` datetime NOT NULL COMMENT '创建时间',
  `gmt_modified` datetime NOT NULL COMMENT '修改时间',
  `name` varchar(128) NOT NULL COMMENT '频道名称',
  `description` varchar(1024) DEFAULT NULL COMMENT '描述',
  `account_id` bigint(20) unsigned NOT NULL COMMENT '所属用户',
  `status` tinyint(4) NOT NULL COMMENT '状态（-1.删除，1.有效）',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8 COMMENT='列表'
;
