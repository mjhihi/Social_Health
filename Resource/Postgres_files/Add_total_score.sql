ALTER TABLE self_esteem
DROP COLUMN "Self_Esteem2";

ALTER TABLE mentalhealth
DROP COLUMN "Self_Esteem2";

DELETE FROM question_key
WHERE questionid = 'Self_Esteem2';

ALTER TABLE adhd
ADD "ADHD_score" INT;

UPDATE adhd
SET "ADHD_score" = "ADHD1" + "ADHD2" + "ADHD3" + "ADHD4";

ALTER TABLE anxiety
ADD "Anxiety_score" INT;

UPDATE anxiety
SET "Anxiety_score" = "Anxiety1" + "Anxiety2";

ALTER TABLE depression
ADD "Depression_score" INT;

UPDATE depression
SET "Depression_score" = "Depression1" + "Depression2" + "Depression3";

ALTER TABLE self_esteem
ADD "SelfEsteem_score" INT;

UPDATE self_esteem
SET "SelfEsteem_score" = "Self_Esteem1" + "Self_Esteem3";

ALTER TABLE mentalhealth
ADD "total_score" INT;

UPDATE mentalhealth
SET "total_score" = "ADHD1" + "ADHD2" + "ADHD3" + "ADHD4" + "Anxiety1" + "Anxiety2" + "Self_Esteem1" + "Self_Esteem3" + "Depression1" + "Depression2" + "Depression3";