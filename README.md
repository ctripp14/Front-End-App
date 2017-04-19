# Front-End-App Using Game Monkey API
Final project for Web-Based programming 
  Gets info from GameMonkey of any game searched
  Uses api
    Displays info of a specific game:

Uses Javascript, HTML, CSS, and JQuery to display info of game including:

| id	unsigned 64-bit integer	+	
| name	string	+	
| slug	string	+	
| url	string	+	
| created_at	64-bit integer	+	Unix epoch
| updated_at	64-bit integer	+	Unix epoch
| summary	text (long string)	-	
| storyline	text (long string)	-	
| collection	unsigned 64-bit integer	-	ID of a Collection record
| franchise	unsigned 64-bit integer	-	ID of a Franchise record
| hypes	integer	-	
| rating	double	-	
| popularity	double	-	
| aggregated_rating	double	-	
| rating_count	integer	-	
| game	unsigned 64-bit integer	-	ID of a Game record if this record is a DLC/expansion
| developers	array of unsigned 64-bit integers	-	IDs of Company records
| publishers	array of unsigned 64-bit integers	-	IDs of Company records
| game_engines	array of unsigned 64-bit integers	-	IDs of Game engine records
| category	integer	-	See the Game category value reference
| time_to_beat	object	-	See the Time to beat object reference
| player_perspectives	array of unsigned 64-bit integers	-	IDs of Player perspective records
| game_modes	array of unsigned 64-bit integers	-	IDs of Game mode records
| keywords	array of unsigned 64-bit integers	-	IDs of Keyword records
| themes	array of unsigned 64-bit integers	-	IDs of Theme records
| genres	array of unsigned 64-bit integers	-	IDs of Genre records
| first_release_date	64-bit integer	-	Unix epoch
| status	integer	-	See the Game status value reference
| release_dates	array of objects	-	See the Release date object reference
| alternative_names	array of objects	-	See the Alternative name object reference
| screenshots	array of objects	-	See the Image object reference
| videos	array of objects	-	See the Video object reference
| cover	array of objects	-	See the Image object reference
| esrb	object	-	See the ESRB object reference
| pegi	object	-	See the PEGI object reference
