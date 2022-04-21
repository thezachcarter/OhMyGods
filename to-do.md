this is a running to-do list, update often!

[x] sanitize id inputs in sql queries
[x] update monster routes, naming convention and queries to reflect new table and mirror usersGods. refer to sql query in postgres
[x] Set current monster before battle. select lowest id 
where power != 0 
[x] Merge battle branches
[x] Display damage and 'this god is out of power'
[ ] ADMIN MODE!
    [x] get
    [x] post
    [ ] put
    [ ] delete
[ ] admin authorization
[x] prevent devotion going negative
[x] fix bug where gods disappear on refresh of battle page - submit ticket!
[ ] clean up SQL add to database.sql
[x] remove all user info from URLs in router, replace w/ req.user
[ ] Victory/Defeat Alerts, add devotion, click to continue
[ ] allow user to restart if gods and devotion are at 0 
[ ] Fill user_gods and user_monsters when new account is created or game is restarted
    [ ] monsters could be inserted individually with query on GET with incrementing monster id?
[ ] PIXELIZE PHOTOS
[ ] remove image border?
[ ] fix bug with god power increase