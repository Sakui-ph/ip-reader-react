CREATE TABLE `geolocation` (
  `geolocation_id` int unsigned NOT NULL AUTO_INCREMENT,
  `city` varchar(168) DEFAULT NULL,
  `region` varchar(100) DEFAULT NULL,
  `country` varchar(10) DEFAULT NULL,
  `loc` varchar(45) DEFAULT NULL,
  `org` varchar(45) DEFAULT NULL,
  `postal` varchar(45) DEFAULT NULL,
  `timezone` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`geolocation_id`),
  UNIQUE KEY `geolocation_id_UNIQUE` (`geolocation_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci