<?php

#Connect on 'localhost' for user 'admin'
#with password 'password' to database 'tim'.
$dbc = mysqli_connect
	('localhost','root','','tim')
	OR die
	(mysqli_connect_error());
#Set encoding to match PHP script encoding.
mysqli_set_charset( $dbc,'utf8');