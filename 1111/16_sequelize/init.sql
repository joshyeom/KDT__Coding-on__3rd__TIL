SELECT * FROM visitor;
SELECT * FROM visitor WHERE id=1;





UPDATE visitor SET name='누구', commment='' WHERE id=1;

CREATE TABLE visitor (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    comment MEDIUMTEXT
);