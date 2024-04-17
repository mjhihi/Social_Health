CREATE TABLE mentalHealth (
    "ID" INT NOT NULL,
    "Timestamp" TIMESTAMP NOT NULL,
    "age" INT NOT NULL,
    "sex" VARCHAR(20) NOT NULL,
    "relation_status" VARCHAR(50) NOT NULL,
    "occupation" VARCHAR(100) NOT NULL,
    "affiliations" VARCHAR(100) NOT NULL,
    "sm_user" VARCHAR(50) NOT NULL,
    "platforms" VARCHAR(250) NOT NULL,
    "time_spent" VARCHAR(20) NOT NULL,
    "ADHD1" INT NOT NULL,
    "ADHD2" INT NOT NULL,
    "ADHD3" INT NOT NULL,
    "ADHD4" INT NOT NULL,
    "Anxiety1" INT NOT NULL,
    "Anxiety2" INT NOT NULL,
    "Self_Esteem1" INT NOT NULL,
    "Self_Esteem2" INT NOT NULL,
    "Self_Esteem3" INT NOT NULL,
    "Depression1" INT NOT NULL,
    "Depression2" INT NOT NULL,
    "Depression3" INT NOT NULL,
    CONSTRAINT "pk_mentalHealth" PRIMARY KEY ("ID")
);

SELECT * FROM mentalHealth;

CREATE TABLE adhd (
    "ID" INT   NOT NULL,
    "timestamp" timestamp   NOT NULL,
    "ADHD1" INT   NOT NULL,
    "ADHD2" INT   NOT NULL,
    "ADHD3" INT   NOT NULL,
    "ADHD4" INT   NOT NULL,
    CONSTRAINT "pk_adhd" PRIMARY KEY ("ID")
);

SELECT * FROM adhd;

CREATE TABLE anxiety (
    "ID" INT   NOT NULL,
    "timestamp" timestamp   NOT NULL,
    "Anxiety1" INT   NOT NULL,
    "Anxiety2" INT   NOT NULL,
    CONSTRAINT "pk_anxiety" PRIMARY KEY ("ID")
);

SELECT * FROM anxiety;

CREATE TABLE depression (
    "ID" INT   NOT NULL,
    "timestamp" timestamp   NOT NULL,
    "Depression1" INT   NOT NULL,
    "Depression2" INT   NOT NULL,
    "Depression3" INT   NOT NULL,
    CONSTRAINT "pk_depression" PRIMARY KEY ("ID")
);

SELECT * FROM depression;

CREATE TABLE self_esteem (
    "ID" INT   NOT NULL,
    "timestamp" timestamp   NOT NULL,
    "Self_Esteem1" INT   NOT NULL,
    "Self_Esteem2" INT   NOT NULL,
    "Self_Esteem3" INT   NOT NULL,
    CONSTRAINT "pk_self_esteem" PRIMARY KEY ("ID")
);

SELECT * FROM self_esteem;

ALTER TABLE adhd ADD CONSTRAINT "fk_adhd_ID" FOREIGN KEY("ID")
REFERENCES mentalHealth ("ID");

ALTER TABLE anxiety ADD CONSTRAINT "fk_anxiety_ID" FOREIGN KEY("ID")
REFERENCES mentalHealth ("ID");

ALTER TABLE depression ADD CONSTRAINT "fk_depression_ID" FOREIGN KEY("ID")
REFERENCES mentalHealth ("ID");

ALTER TABLE self_esteem ADD CONSTRAINT "fk_self_esteem_ID" FOREIGN KEY("ID")
REFERENCES mentalHealth ("ID");

CREATE TABLE question_key (
    questionID VARCHAR(50) NOT NULL,
    question_def VARCHAR(250) NOT NULL,
    CONSTRAINT pk_question_key PRIMARY KEY (questionID)
);

SELECT * FROM question_key;

INSERT INTO question_key (questionID, question_def)
VALUES 
    ('age', 'What is your age?'),
    ('sex', 'Gender'),
    ('relation_status', 'Relationship Status'),
    ('occupation', 'Occupation Status'),
    ('affiliations', 'What type of organizations are you affiliated with?'),
    ('sm_user', 'Do you use social media?'),
    ('platforms', 'What social media platforms do you commonly use?'),
    ('time_spent', 'What is the average time you spend on social media every day?'),
    ('ADHD1', 'How often do you find yourself using social media without a specific purpose?'),
    ('ADHD2', 'How often do you get distracted by social media when you are busy doing something?'),
    ('Anxiety1', 'Do you feel restless if you havent used social media in a while?'),
    ('ADHD3', 'On a scale of 1 to 5, how easily distracted are you?'),
    ('Anxiety2', 'On a scale of 1 to 5, how much are you bothered by worries?'),
    ('ADHD4', 'Do you find it difficult to concentrate on things?'),
    ('Self_Esteem1', 'On a scale of 1-5, how often do you compare yourself to other successful people through the use of social media?'),
    ('Self_Esteem2', 'Following the previous question, how do you feel about these comparisons, generally speaking?'),
    ('Self_Esteem3', 'How often do you look to seek validation from features of social media?'),
    ('Depression1', 'How often do you feel depressed or down?'),
    ('Depression2', 'On a scale of 1 to 5, how frequently does your interest in daily activities fluctuate?'),
    ('Depression3', 'On a scale of 1 to 5, how often do you face issues regarding sleep?');

CREATE TABLE states_mh (
	time_period VARCHAR(7),
	state VARCHAR(25),
	population VARCHAR(10),
	cohort VARCHAR(10),
	point_estimate_unmet INT,
	point_estimate_untreated INT
);

SELECT * FROM states_mh;

ALTER TABLE states_mh
DROP COLUMN population;

ALTER TABLE states_mh
DROP COLUMN cohort;

DELETE FROM states_mh
WHERE state = 'United States';

ALTER TABLE adhd
ADD COLUMN time_spent VARCHAR(20);

UPDATE adhd
SET time_spent = mentalHealth.time_spent
FROM mentalHealth
WHERE adhd."ID" = mentalHealth."ID";

SELECT * FROM adhd;

ALTER TABLE anxiety
ADD COLUMN time_spent VARCHAR(20);

UPDATE anxiety
SET time_spent = mentalHealth.time_spent
FROM mentalHealth
WHERE anxiety."ID" = mentalHealth."ID";

SELECT * FROM depression;

ALTER TABLE depression
ADD COLUMN time_spent VARCHAR(20);

UPDATE depression
SET time_spent = mentalHealth.time_spent
FROM mentalHealth
WHERE depression."ID" = mentalHealth."ID";

SELECT * FROM depression;

ALTER TABLE self_esteem
ADD COLUMN time_spent VARCHAR(20);

UPDATE self_esteem
SET time_spent = mentalHealth.time_spent
FROM mentalHealth
WHERE self_esteem."ID" = mentalHealth."ID";

SELECT * FROM self_esteem;
