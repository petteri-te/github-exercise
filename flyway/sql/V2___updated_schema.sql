ALTER TABLE addresses
DROP COLUMN name,
DROP COLUMN address,
ADD COLUMN first_name TEXT NOT NULL,
ADD COLUMN last_name TEXT NOT NULL,
ADD COLUMN street_address TEXT NOT NULL,
ADD COLUMN post_code_city TEXT NOT NULL;
