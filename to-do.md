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
    [x] delete
[ ] admin authorization
[x] prevent devotion going negative
[x] fix bug where gods disappear on refresh of battle page - submit ticket!
[ ] clean up SQL add to database.sql
[x] remove all user info from URLs in router, replace w/ req.user
[x] Victory/Defeat Alerts, add devotion, click to continue
[ ] allow user to restart if gods and devotion are at 0 
[ ] Fill user_gods and user_monsters when new account is created or game is restarted
    [ ] monsters could be inserted individually with query on GET with incrementing monster id?
[x] PIXELIZE PHOTOS
[x] fix bug with god power increase

04/22 TO-DO 
[x] Add devotion after battle
[ ] Admin edit
[ ] Admin authorization
[x] Remove LandingPage
[x] Update log in, log out, register pages
[ ] Update about
[x] Create new account, populate tables (see above)
    [x] populate user_monsters
[ ] Restart Game, similar functionality to new account
[ ] Info button
[ ] Replace God Button

FIX BUGS
[ ] Fix DEFEAT display bug
[ ] send proper data for increasing god power through ^ button and updating monster power 
[ ] fix log out screen

STRETCH
[x] Four Color Accent
[ ] Animation
[ ] Conquered Monsters
[ ] Leaderboard
[ ] Add more gods and monsters

Before Submission
[ ] REFACTOR
[ ] update database.sql
[ ] find and remove user.id where not needed
