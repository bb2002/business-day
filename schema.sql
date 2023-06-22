DROP TABLE IF EXISTS BusinessDays;
CREATE TABLE IF NOT EXISTS BusinessDays (
    _id TEXT PRIMARY KEY,
    nickname TEXT,
    leaveAt TEXT,
    createdAt TEXT
);

DROP TABLE IF EXISTS Holidays;
CREATE TABLE IF NOT EXISTS Holidays (
    _id TEXT PRIMARY KEY,
    holiday_date TEXT,
    holiday_name TEXT
)