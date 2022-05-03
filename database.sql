CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "admin" BOOLEAN DEFAULT false,
    "devotion" INT(3)
);

CREATE TABLE "gods" (
  "id" serial PRIMARY KEY,
  "name" varchar(500) UNIQUE NOT NULL,
  "culture" varchar(500) NOT NULL,
  "element" varchar(500) NOT NULL,
  "image" varchar(500),
  "info" varchar(500),
  "rules" varchar(500)
);

CREATE TABLE "monsters" (
  "id" serial PRIMARY KEY,
  "name" varchar(500) UNIQUE NOT NULL,
  "culture" varchar(500) NOT NULL,
  "element" varchar(500) NOT NULL,
  "starting_power" int NOT NULL,
  "image" varchar(500),
  "info" varchar(500),
  "rules" varchar(500)
);

CREATE TABLE "users_gods" (
  "id" serial PRIMARY KEY,
  "user_id" INT NOT NULL,
  "god_id" INT NOT NULL,
  "power" INT NOT NULL DEFAULT 8
 );

 CREATE TABLE "users_monsters" (
  "id" serial PRIMARY KEY,
  "user_id" INT NOT NULL,
  "monster_id" INT NOT NULL,
  "power" INT NOT NULL
 );

INSERT INTO "public"."gods"("id","name","culture","element","image","info","rules")
VALUES
(1,E'Poseidon',E'Greek',E'Water',E'images/Poseidon.png',E'https://en.wikipedia.org/wiki/Poseidon',NULL),
(2,E'Centeotl',E'Aztec',E'Earth',E'images/Centeotl.png',E'https://en.wikipedia.org/wiki/Cente%C5%8Dtl',NULL),
(3,E'Sekhmet',E'Egyptian',E'Fire',E'images/Sekhmet.png',E'https://en.wikipedia.org/wiki/Sekhmet',NULL),
(4,E'Thor',E'Norse',E'Sky',E'images/Thor.png',E'https://en.wikipedia.org/wiki/Thor',NULL),
(5,E'Chalchiuhtlicue',E'Aztec',E'Water',E'images/Chalchiuhtlicue.png',E'https://en.wikipedia.org/wiki/Chalchiuhtlicue',NULL),
(6,E'Artemis',E'Greek',E'Earth',E'images/Artemis.png',E'https://en.m.wikipedia.org/wiki/Artemis',NULL),
(7,E'Loki',E'Norse',E'Fire',E'images/Loki.png',E'https://en.wikipedia.org/wiki/Loki',NULL),
(8,E'Ra',E'Egyptian',E'Sky',E'images/gods/Ra.png',E'https://en.wikipedia.org/wiki/Ra',NULL),
(9,E'Quetzalcoatl',E'Aztec',E'Sky',E'images/gods/Quetzalcoatl.png',NULL,NULL),
(10,E'Xiuhtecuhtli',E'Aztec',E'Fire',E'images/gods/Xiuhtecuhtli.png',NULL,NULL),
(11,E'Njord',E'Norse',E'Water',E'images/gods/Njord.png',NULL,NULL),
(12,E'Odin',E'Norse',E'Earth',E'images/gods/Odin.png',NULL,NULL),
(13,E'Anuket',E'Egyptian',E'Water',E'images/gods/Anuket.png',NULL,NULL),
(14,E'Geb',E'Egyptian',E'Earth',E'images/gods/Geb.png',NULL,NULL),
(15,E'Hephaestus',E'Greek',E'Fire',E'images/gods/Hephaestus.png',NULL,NULL),
(16,E'Zeus',E'Greek',E'Sky',E'images/gods/Zeus.png',NULL,NULL);

INSERT INTO "public"."monsters"("id","name","culture","element","image","info","rules","starting_power")
VALUES
(1,E'Fenrir',E'Norse',E'Earth',E'images/monsters/Fenrir.png',NULL,NULL,16),
(2,E'Apep',E'Egyptian',E'Water',E'images/Apep.png',E'https://en.wikipedia.org/wiki/Apep',NULL,12),
(3,E'Xiuhcoatl',E'Aztec',E'Fire',E'images/monsters/Xiuhcoatl.png',NULL,NULL,14),
(4,E'Harpy',E'Greek',E'Sky',E'images/Harpy.png',E'https://en.wikipedia.org/wiki/Harpy',NULL,10),
(5,E'Surtr',E'Norse',E'Fire',E'images/monsters/Surtr.png',NULL,NULL,16),
(6,E'Scylla & Charybdis',E'Greek',E'Water',E'images/Scylla.png',E'https://en.wikipedia.org/wiki/Between_Scylla_and_Charybdis',NULL,20),
(7,E'Sphinx',E'Egyptian',E'Sky',E'images/monsters/Sphinx.png',NULL,NULL,22),
(8,E'Cipactli',E'Aztec',E'Earth',E'images/monsters/Cipactli.png',NULL,NULL,24),
(9,E'Chimera',E'Greek',E'Fire',E'images/Chimera.png',E'https://en.wikipedia.org/wiki/Chimera_(mythology)',NULL,30),
(10,E'Ammit',E'Egyptian',E'Fire',E'images/monsters/Ammit.png',NULL,NULL,32),
(11,E'Nagual',E'Aztec',E'Sky',E'images/monsters/Nagual.png',NULL,NULL,34),
(12,E'Kraken',E'Norse',E'Water',E'images/monsters/Kraken.png',NULL,NULL,36),
(13,E'Gegenees',E'Greek',E'Earth',E'images/Gegenees.png',E'https://en.wikipedia.org/wiki/Gegenees',NULL,40),
(14,E'Serpopard',E'Egyptian',E'Earth',E'images/monsters/Serpopard.png',NULL,NULL,42),
(15,E'Ahuizotl',E'Aztec',E'Water',E'images/monsters/Ahuizotl.png',NULL,NULL,44),
(16,E'Jormungandr',E'Norse',E'Sky',E'images/monsters/Jormungandr.png',NULL,NULL,46);