-- Step 1: Add new columns (Null possible initially)
ALTER TABLE addresses
ADD COLUMN first_name TEXT,
ADD COLUMN last_name TEXT,
ADD COLUMN street_address TEXT,
ADD COLUMN post_code_city TEXT;

-- Step 2: Migrate data from old columns to new columns
UPDATE addresses
SET first_name = name,
    last_name = '',
    street_address = address,
    post_code_city = '';

-- Step 3: Set new columns to NOT NULL after data migration
ALTER TABLE addresses
ALTER COLUMN first_name SET NOT NULL,
ALTER COLUMN last_name SET NOT NULL,
ALTER COLUMN street_address SET NOT NULL,
ALTER COLUMN post_code_city SET NOT NULL;

-- Step 4: Drop old columns after ensuring data is preserved
ALTER TABLE addresses
DROP COLUMN name,
DROP COLUMN address;