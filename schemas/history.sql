CREATE TABLE `history` (
  `history_id` int unsigned NOT NULL AUTO_INCREMENT,
  `date_submitted` datetime NOT NULL,
  `geolocation_id` int unsigned NOT NULL,
  `user_id` int unsigned NOT NULL,
  PRIMARY KEY (`history_id`),
  UNIQUE KEY `history_id_UNIQUE` (`history_id`),
  KEY `USER_ID_idx` (`user_id`),
  KEY `GEOLOCATION_ID_idx` (`geolocation_id`),
  CONSTRAINT `GEOLOCATION_ID` FOREIGN KEY (`geolocation_id`) REFERENCES `geolocation` (`geolocation_id`),
  CONSTRAINT `USER_ID` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci