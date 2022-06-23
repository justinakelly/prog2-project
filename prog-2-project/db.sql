BASE DE DATOS en workbench:

CREATE SCHEMA artworks;
USE artworks; 

CREATE TABLE `users` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `profilepicture` varchar(255) DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `document` int NOT NULL,
  `birthdate` date NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL,
    PRIMARY KEY (`id`),


  CREATE TABLE `artworks` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `date` date NOT NULL,
  `user_id` int unsigned NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `artworks_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`), 

  CREATE TABLE `comments` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `comment` varchar(300) NOT NULL,
  `user_id` int unsigned NOT NULL,
  `artwork_id` int unsigned NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `artwork_id` (`artwork_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`artwork_id`) REFERENCES `artworks` (`id`),
  CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`), 

  INSERT INTO `users` VALUES (1,'elonmusk.ok','/images/users/elon.jpeg','elonmusk@gmail.com','Emusk1971',14191102,'1971-06-28',NULL,NULL), 

  INSERT INTO `artworks`
   VALUES 
  (1,'GARDEN OF FORKING PATHS','/images/products/garden-of-forking-paths.jpeg','\"This web of time - the strands of which approach one another, bifurcate, intersect or ignore each other through the centuries - embraces every possibility. We do not exist in most of them. In some, you exist and not I, while in others I do, and you do not\" -— Jorge Luis Borges','2020-04-22',1,'2022-06-19 19:45:35','2022-06-19 19:45:35')
  ,(3,'A PLACE WITH NO MEMORY','/images/products/a-place-with-no-memory.jpeg','\"...That is where I want to live the rest of my life. A warm place with no memory.” ―- Stephen King','2021-04-02',1,'2022-06-19 19:45:35','2022-06-19 19:45:35')
  ,(4,'ACID SCAN 3','/images/products/acid-scan-3.png','\"ACID SCANS\" is a series of portrait based on scans of my face and other body parts. There is around 10 to 25 scans in each artwork. In my paintings, I have always tried to abstract the portrait the most without loosing the essence of it. These are the digital version of my vision of a portrait.','2021-09-05',1,'2022-06-19 19:45:35','2022-06-19 19:45:35')
  ,(5,'ALTER EGOS','/images/products/alter-egos.jpeg','Who is the first self ? Who created who ? They all die together! Inspired from a movie that I am not supposed to talk about!','2022-03-28',1,'2022-06-19 19:45:35','2022-06-19 19:45:35'),(6,'THE PASSION','/images/products/the-passion.jpeg','Passion is an impulse of the soul, strong and emotional.','2022-01-01',1,'2022-06-19 19:45:35','2022-06-19 19:45:35'),
  (7,'ZEN','/images/products/zen.jpeg','“The only Zen you’ll find on mountain tops is the Zen you bring up there with you.” -- Alan Watts','2022-02-11',1,'2022-06-19 19:45:35','2022-06-19 19:45:35'),
  (8,'TIED TO THE PAST','/images/products/tied-to-the-past.jpeg','Past traumas are the metastasis of present behaviors. Finding their way through the stream of unconsciousness, taking control over our train of thought. Overwhelming. Like a heavy mass pinning you down through the darkness of a bygone age while witnessing the distant glimmer of an unreachable light from the future. « Tied To The Past » is an attempt to depict and exorcise the feeling of being chained to unhealed wounds. When acknowledging damages isn’t enough to reach the surface anymore. When the desire to heal can’t compete with recollections. Tearing past, present and future apart in an endless cycle.','2022-03-14',1,'2022-06-19 19:45:35','2022-06-19 19:45:35'),
  (9,'EXPLOSION OF COLORS','/images/products/explosion-of-colors.jpeg','\"Explosion of Colors\" is Johan Lolos genesis piece and is part of his genesis NFT series Hálendið which means Highlands in Icelandic. Hálendið is a photography series of 5 pieces that are a tribute to the painting-like landscapes of the Icelandic Highlands. Ever since Johan first visited this part of the world he has been amazed by the huge diversity of colors that can be found in the Highlands. The unparalleled contrasts and shapes of the Hálendið make this region of Iceland so unique in the whole world, to the point it becomes almost surreal to any visitor. This particular piece is an aerial image of Landmannalaugar, shot from a Cessna aircraft. The unique colors found in that place are completely natural, a result of local geothermal activity. The very first time Johan went to Landmannalaugar, he just could not believe his eyes. Was it real? Was it a dream? Why did those mountains look like paintings? His obsession with the Icelandic Highlands never stopped, to the point that they became his favorite landscapes to photograph. \"Explosion of Colors\" is Johan Lolos second most popular image of all time. It was first featured in his debut book Peaks of Europe (2018), and has been sold to multiple clients and magazines ever since.','2021-05-10',1,'2022-06-19 19:45:35','2022-06-19 19:45:35'),
  (10,'NIGHT RIDER 001','/images/products/night-rider-001.jpeg','Rage, rage against the dying of the light.','2022-04-05',1,'2022-06-19 19:45:35','2022-06-19 19:45:35'),
  (11,'POOL','/images/products/pool.jpeg','This image is what I consider to be my first Fractalism piece, and to date it is still my favorite. The reason why, is that this piece has a secret I have never revealed till now. This image was made when I was attempting to clean my bathtub one day. I sprinkled AJAX all over the tub and went to turn the tap on expecting the water to come from the faucet. But the nozzle was set to the shower and as I got ready to start scrubbing I got an unexpected sprinkle as I leaned over the tub. Feeling the rush of cold water hit me I immediately turned the faucet off. As the droplets of water settled on the tub surface this beautiful fractal pattern emerged from the AJAX pooling towards the center of gravity. I grabbed the camera and later opened th image in photoshop and changed the colors to highten the sense of contrast and drama. After playing around with the image for a while this is what emerged, and I think it is beautiful.','2022-02-01',1,'2022-06-19 19:45:35','2022-06-19 19:45:35'),
  (12,'SATURN(s) RETURN','/images/products/saturn(s)-return.jpeg','We do not need to sit in the same spaces to find the same feelings. In 2022, I choose to pull my energy from only the source and my gut. I abide by the moon and its daughters, nothing more.','2019-12-11',1,'2022-06-19 19:45:35','2022-06-19 19:45:35'),
  (13,'MIRACULUM','/images/products/miraculum.jpeg','Everyone encounters these magical moments in life that just happen out of nowhere. A moment of awe where time freezes and we only exist in that moment. You cant predict them, you cant chase them. But you can enjoy them as they happen.','2021-11-14',1,'2022-06-19 19:45:35','2022-06-19 19:45:35'),
  

  INSERT INTO `comments` 
  VALUES 
  (1,' #abstract #colorful #digitalart #nft #surrealism #psychedelic #trippy',1,1,'2022-06-21 17:43:07'),
  (3,'Amazing!',1,3,'2022-06-21 17:43:07'),
  (4,'One of my favourite',1,4,'2022-06-21 17:43:07'),
  
