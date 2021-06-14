CREATE TABLE `users` (
	`id` INT(10) NOT NULL AUTO_INCREMENT,
	`firstname` varchar(100) NOT NULL,
	`lastname` varchar(100) NOT NULL,
	`email` varchar(150) NOT NULL UNIQUE,
	`password` varchar(255) NOT NULL,
	`username` varchar(255) NOT NULL UNIQUE,
	`birth_date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`gender` BOOLEAN(1) NOT NULL DEFAULT '0',
	`status` BOOLEAN(1) NOT NULL DEFAULT '1',
	`is_parent` BOOLEAN(1) NOT NULL DEFAULT '1',
	`image` varchar(255) NOT NULL,
	`created_on` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`modified_on` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (`id`)
);

CREATE TABLE `courses` (
	`id` INT(10) NOT NULL AUTO_INCREMENT,
	`title` varchar(300) NOT NULL,
	`link` varchar(300) NOT NULL UNIQUE,
	`description` TEXT NOT NULL,
	`image` varchar(255) NOT NULL,
	`header` varchar(255) NOT NULL,
	`status` BOOLEAN(1) NOT NULL DEFAULT '1',
	`teacher_id` INT(10) NOT NULL,
	`price` FLOAT(10) NOT NULL,
	`is_free` BOOLEAN(1) NOT NULL DEFAULT '0',
	`created_on` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`modified_on` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (`id`)
);

CREATE TABLE `teachers` (
	`id` INT(10) NOT NULL AUTO_INCREMENT,
	`user_id` INT(10) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `courses_videos` (
	`id` INT(10) NOT NULL AUTO_INCREMENT UNIQUE,
	`course_id` INT(10) NOT NULL,
	`title` varchar(255) NOT NULL,
	`description` TEXT NOT NULL,
	`url` varchar(255) NOT NULL,
	`status` BOOLEAN(1) NOT NULL DEFAULT '1',
	`position` INT(10) NOT NULL,
	`created_on` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`modified_on` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (`id`)
);

CREATE TABLE `user_course` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`user_id` INT(10) NOT NULL,
	`course_id` INT(10) NOT NULL,
	`is_complete` BOOLEAN(1) NOT NULL DEFAULT '0',
	`status` BOOLEAN(1) NOT NULL DEFAULT '1',
	`created_on` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`modified_on` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (`id`)
);

CREATE TABLE `user_video_complete` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`user_course_id` INT(10) NOT NULL,
	`created_on` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (`id`)
);

CREATE TABLE `courses_exams` (
	`id` INT(10) NOT NULL AUTO_INCREMENT,
	`course_id` INT(10) NOT NULL,
	`title` varchar(255) NOT NULL,
	`description` TEXT NOT NULL,
	`status` BOOLEAN(1) NOT NULL DEFAULT '1',
	`created_on` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`modified_on` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (`id`)
);

CREATE TABLE `course_exam_questions` (
	`id` INT(10) NOT NULL AUTO_INCREMENT,
	`course_exam_id` INT(10) NOT NULL,
	`title` varchar(255) NOT NULL,
	`status` BOOLEAN(1) NOT NULL DEFAULT '1',
	`created_on` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`modified_on` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (`id`)
);

CREATE TABLE `course_exam_question_answers` (
	`id` INT(10) NOT NULL AUTO_INCREMENT,
	`exam_id` INT(10) NOT NULL,
	`title` varchar(255) NOT NULL,
	`is_correct` BOOLEAN(1) NOT NULL DEFAULT '0',
	`created_on` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`modified_on` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (`id`)
);

CREATE TABLE `user_course_exam` (
	`id` INT(10) NOT NULL AUTO_INCREMENT,
	`user_course` INT(10) NOT NULL,
	`course_exam` INT(10) NOT NULL,
	`note` FLOAT(3) NOT NULL,
	PRIMARY KEY (`id`)
);

ALTER TABLE `courses` ADD CONSTRAINT `courses_fk0` FOREIGN KEY (`teacher_id`) REFERENCES `teachers`(`id`);

ALTER TABLE `teachers` ADD CONSTRAINT `teachers_fk0` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`);

ALTER TABLE `courses_videos` ADD CONSTRAINT `courses_videos_fk0` FOREIGN KEY (`course_id`) REFERENCES `courses`(`id`);

ALTER TABLE `user_course` ADD CONSTRAINT `user_course_fk0` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`);

ALTER TABLE `user_course` ADD CONSTRAINT `user_course_fk1` FOREIGN KEY (`course_id`) REFERENCES `courses`(`id`);

ALTER TABLE `user_video_complete` ADD CONSTRAINT `user_video_complete_fk0` FOREIGN KEY (`user_course_id`) REFERENCES `user_course`(`id`);

ALTER TABLE `courses_exams` ADD CONSTRAINT `courses_exams_fk0` FOREIGN KEY (`course_id`) REFERENCES `courses`(`id`);

ALTER TABLE `course_exam_questions` ADD CONSTRAINT `course_exam_questions_fk0` FOREIGN KEY (`course_exam_id`) REFERENCES `courses_exams`(`id`);

ALTER TABLE `course_exam_question_answers` ADD CONSTRAINT `course_exam_question_answers_fk0` FOREIGN KEY (`exam_id`) REFERENCES `course_exam_questions`(`id`);

ALTER TABLE `user_course_exam` ADD CONSTRAINT `user_course_exam_fk0` FOREIGN KEY (`user_course`) REFERENCES `user_course`(`id`);

ALTER TABLE `user_course_exam` ADD CONSTRAINT `user_course_exam_fk1` FOREIGN KEY (`course_exam`) REFERENCES `courses_exams`(`id`);

