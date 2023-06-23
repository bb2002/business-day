DROP TABLE IF EXISTS BusinessDays;
CREATE TABLE IF NOT EXISTS BusinessDays (
    _id TEXT PRIMARY KEY,
    nickname TEXT NOT NULL,
    leaveAt TEXT NOT NULL,
    createdAt TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_nickname ON BusinessDays(nickname);

DROP TABLE IF EXISTS Holidays;
CREATE TABLE IF NOT EXISTS Holidays (
    holidayDate TEXT PRIMARY KEY,
    holidayName TEXT NOT NULL
);

INSERT INTO Holidays(holidayDate, holidayName) VALUES('2023-08-15', '광복절');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2023-09-28', '추석');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2023-09-29', '추석');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2023-10-03', '개천절');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2023-10-09', '한글날');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2023-12-25', '성탄절');

INSERT INTO Holidays(holidayDate, holidayName) VALUES('2024-01-01', '신정');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2024-02-09', '설날');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2024-02-12', '설날');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2024-03-01', '삼일절');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2024-04-10', '22대 국회의원 선거');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2024-05-06', '대체 공휴일');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2024-05-15', '부처님 오신날');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2024-06-06', '현충일');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2024-08-15', '광복절');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2024-09-16', '추석');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2024-09-17', '추석');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2024-09-18', '추석');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2024-10-03', '개천절');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2024-10-09', '한글날');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2024-12-25', '성탄절');

INSERT INTO Holidays(holidayDate, holidayName) VALUES('2025-01-01', '신정');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2025-01-28', '설날');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2025-01-29', '설날');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2025-01-30', '설날');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2025-03-03', '대체 공휴일');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2025-05-05', '어린이날');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2025-05-06', '대체 공휴일');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2025-06-06', '현충일');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2025-08-15', '광복절');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2025-10-03', '개천절');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2025-10-06', '추석');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2025-10-07', '추석');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2025-10-08', '대체 공휴일');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2025-10-09', '한글날');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2025-12-25', '성탄절');

INSERT INTO Holidays(holidayDate, holidayName) VALUES('2026-01-01', '신정');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2026-02-16', '설날');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2026-02-17', '설날');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2026-02-18', '설날');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2026-03-02', '대체 공휴일');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2026-05-05', '어린이날');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2026-05-25', '대체 공휴일');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2026-08-17', '대체 공휴일');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2026-09-24', '추석');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2026-09-25', '추석');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2026-10-05', '대체 공휴일');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2026-10-09', '한글날');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2026-12-25', '성탄절');

INSERT INTO Holidays(holidayDate, holidayName) VALUES('2027-01-01', '신정');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2027-02-08', '설날');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2027-02-09', '대체 공휴일');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2027-03-01', '삼일절');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2027-03-03', '21대 대통령 선거');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2027-05-05', '어린이날');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2027-05-13', '부처님 오신날');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2027-08-16', '대체 공휴일');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2027-09-14', '추석');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2027-09-15', '추석');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2027-09-16', '추석');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2027-10-04', '대체 공휴일');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2027-10-11', '대체 공휴일');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2027-12-27', '대체 공휴일');

INSERT INTO Holidays(holidayDate, holidayName) VALUES('2028-01-26', '설날');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2028-01-27', '설날');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2028-01-28', '설날');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2028-03-01', '삼일절');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2028-05-02', '부처님 오신날');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2028-05-05', '어린이날');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2028-06-06', '현충일');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2028-08-15', '광복절');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2028-10-02', '추석');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2028-10-03', '개천절');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2028-10-04', '추석');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2028-10-05', '대체 공휴일');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2028-10-09', '한글날');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2028-12-25', '성탄절');

INSERT INTO Holidays(holidayDate, holidayName) VALUES('2029-01-01', '신정');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2029-02-12', '설날');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2029-02-13', '설날');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2029-02-14', '선라');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2029-03-01', '삼일절');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2029-05-07', '대체 공휴일');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2029-05-21', '대체 공휴일');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2029-06-06', '현충일');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2029-08-15', '광복절');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2029-09-21', '추석');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2029-09-24', '대체 공휴일');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2029-10-03', '개천절');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2029-10-09', '한글날');
INSERT INTO Holidays(holidayDate, holidayName) VALUES('2029-12-25', '성탄절');
