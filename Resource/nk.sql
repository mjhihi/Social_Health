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