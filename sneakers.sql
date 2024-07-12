use products;

CREATE TABLE `sneakers` (
  `id_sneaker` int NOT NULL,
  `brand` varchar(255) NOT NULL,
  `model` varchar(6) NOT NULL,
  `img` varchar(255) NOT NULL
);

ALTER TABLE `sneakers`
  ADD PRIMARY KEY (`id_sneaker`);
  
-- Sentencia para hacer auto incremental la columna id 
ALTER TABLE sneakers
MODIFY COLUMN id_sneaker INT AUTO_INCREMENT;

ALTER TABLE sneakers
MODIFY COLUMN model varchar(255);

ALTER TABLE sneakers ADD COLUMN price int not null;

insert into `sneakers` (`brand`, `model`, `img`, `price`) values
('Nike', 'Force 1', 'https://img.lalr.co/cms/2024/02/23063834/17077388085291.jpg?', 100),
('Adidas', 'Superstar', 'https://img.lalr.co/cms/2024/02/23064005/17077388194702.jpg?', 90),
('Nike', 'Dunk', 'https://img.lalr.co/cms/2024/02/23064145/1-2024-02-23T064111.206.png?', 80),
('Nike', 'Air Jordan 1', 'https://img.lalr.co/cms/2024/02/23064314/1-2024-02-23T064257.872.png?', 65),
('Vans', 'Old Skool', 'https://img.lalr.co/cms/2024/02/23064445/1-2024-02-23T064418.891.png?', 45),
('Adidas', 'Samba', 'https://img.lalr.co/cms/2024/02/23064738/1-2024-02-23T064729.884.png?', 110),
('Nike', 'Air Max 97', 'https://img.lalr.co/cms/2024/02/23064826/1-2024-02-23T064819.032.png?',120),
('Converse', 'All Star', 'https://img.lalr.co/cms/2024/02/23065155/1-2024-02-23T065108.832.png?', 95),
('Adidas', 'NMD', 'https://img.lalr.co/cms/2024/02/23065150/1-2024-02-23T065146.843.png?', 89),
('Adidas', 'Stan Smith', 'https://img.lalr.co/cms/2024/02/23065229/1-2024-02-23T065217.870.png?', 35);