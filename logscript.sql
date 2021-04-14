CREATE TABLE IF NOT EXISTS vehiclelogs (
	id INT AUTO_INCREMENT NOT NULL,
    vehicle_id VARCHAR(12) NOT NULL,
    action VARCHAR(5) NOT NULL,
    time DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id),
    CHECK (LENGTH(vehicle_id) > 6)
);

DELIMITER $$
	CREATE PROCEDURE vehicle_entry(IN new_vehicle_id VARCHAR(12))
    BEGIN
		INSERT INTO vehiclelogs (vehicle_id, action)
        VALUE (new_vehicle_id, 'ENTRY');
    END $$
DELIMITER ;

DELIMITER $$
    CREATE PROCEDURE vehicle_exit(IN new_vehicle_id VARCHAR(12))
    BEGIN
		INSERT INTO vehiclelogs (vehicle_id, action)
        VALUE (new_vehicle_id, 'EXIT');
    END $$
DELIMITER ;