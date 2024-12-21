CREATE TABLE names (
  id SERIAL PRIMARY KEY,
  lastName TEXT NOT NULL,
  firstName TEXT NOT NULL
);

CREATE TABLE addresses (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  address TEXT NOT NULL
);