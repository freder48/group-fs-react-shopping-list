-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

CREATE TABLE shopping_list (
	id SERIAL PRIMARY KEY,
	food_name varchar(80) not null,
	quantity numeric,
	unit varchar(20)
);

INSERT INTO shopping_list (food_name, quantity, unit)
VALUES ('bananas', 6.5, 'bunch');

UPDATE shopping_list SET food_name='Carrot' WHERE id=1;

DELETE FROM "shopping_list" WHERE id=1;