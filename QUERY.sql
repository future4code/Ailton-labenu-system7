CREATE TABLE Class (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    module VARCHAR(255) DEFAULT 0
);

INSERT INTO Class (id,name,module) VALUES ("000001","Ailton","5");
INSERT INTO Class (id,name,module) VALUES ("000002","Freire","3");
INSERT INTO Class (id,name,module) VALUES ("000003","Alves","4");

CREATE TABLE Students (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    birth_date DATE NOT NULL,
    class_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (class_id)
        REFERENCES Class (id)
);

INSERT INTO Students (id,name,email,birth_date,class_id) VALUES ("000001","Arthur","arthur@email.com","2002-01-15","000001");
INSERT INTO Students (id,name,email,birth_date,class_id) VALUES ("000002","Daniela","daniela@email.com","2002-01-15","000001");
INSERT INTO Students (id,name,email,birth_date,class_id) VALUES ("000003","Paulo","paulo@email.com","2002-01-15","000001");

INSERT INTO Students (id,name,email,birth_date,class_id) VALUES ("000004","Alex","alex@email.com","2002-01-15","000002");
INSERT INTO Students (id,name,email,birth_date,class_id) VALUES ("000005","Bruno","bruno@email.com","2002-01-15","000002");
INSERT INTO Students (id,name,email,birth_date,class_id) VALUES ("000006","Maria","maria@email.com","2002-01-15","000003");

INSERT INTO Students (id,name,email,birth_date,class_id) VALUES ("000007","Marina","marina@email.com","2002-01-15","000002");
INSERT INTO Students (id,name,email,birth_date,class_id) VALUES ("000008","Vitor","vitor@email.com","2002-01-15","000003");
INSERT INTO Students (id,name,email,birth_date,class_id) VALUES ("000009","Victor","victor@email.com","2002-01-15","000003");

CREATE TABLE Teachers (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    birth_date DATE NOT NULL,
    class_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (class_id)
        REFERENCES Class (id)
);

INSERT INTO Teachers (id,name,email,birth_date,class_id) VALUES ("000001","Carlos","carlos@teacher.com","1990-01-15","000001");
INSERT INTO Teachers (id,name,email,birth_date,class_id) VALUES ("000002","Ana","ana@teacher.com","1990-01-15","000003");
INSERT INTO Teachers (id,name,email,birth_date,class_id) VALUES ("000003","Bianca","bianca@teacher.com","1990-01-15","000002");