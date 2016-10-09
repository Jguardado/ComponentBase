//User schema
CREATE TABLE users (
  id int(11) NOT NULL AUTO_INCREMENT,
  name varchar(50),
  github varchar(50),
  PRIMARY KEY (id)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5;


//Sample data currently populating local user table
INSERT INTO users (id, name, github) VALUES
(1, 'Juan', 'jguardado'),
(2, 'Raph', 'RaphaelBaskerville'),
(3, 'Marc', 'fusupo'),
(4, 'Colin', 'colinlmcdonald');
