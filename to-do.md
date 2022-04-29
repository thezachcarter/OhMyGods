this is a running to-do list, update often!

[x] sanitize id inputs in sql queries
[x] update monster routes, naming convention and queries to reflect new table and mirror usersGods. refer to sql query in postgres
[x] Set current monster before battle. select lowest id 
where power != 0 
[x] Merge battle branches
[x] Display damage and 'this god is out of power'
[x] ADMIN MODE!
    [x] get
    [x] post
    [x] delete
[x] admin authorization
[x] prevent devotion going negative
[x] fix bug where gods disappear on refresh of battle page - submit ticket!
[ ] clean up SQL add to database.sql
[x] remove all user info from URLs in router, replace w/ req.user
[x] Victory/Defeat Alerts, add devotion, click to continue
[x] allow user to restart if gods and devotion are at 0 
[x] Fill user_gods and user_monsters when new account is created or game is restarted
[x] PIXELIZE PHOTOS
[x] fix bug with god power increase

04/22 TO-DO 
[x] Add devotion after battle
[x] Admin authorization
[x] Update log in, log out, register pages
[ ] Update about
[x] Create new account, populate tables (see above)
[x] Remove LandingPage
[x] Update log in, log out, register pages
[x] Create new account, populate tables (see above)
    [x] populate user_monsters
[x] Restart Game, similar functionality to new account
[x] Info button - RACE CONDITION TICKET
[x] Replace God Button
[x] Text wrap god names
[x] FIX BUG - new gods power increase
[x] expand how to play. add damage rules. label reminder tables strength and weakness
[x] Conquered Monsters
[x] login/register UI
[x] add new monsters to database query

FIX BUGS
[ ] 'FETCH_USER' removal causing weirdness.
[ ] Fix text overflow in god names
[ ] Fix DEFEAT display race condition bug, remove extra crap like unused reducer.
[x] send proper data for increasing god power through ^ button and updating monster power 
[x] fix log out screen, bug occurs when logging out from battle
[x] reset userDisplay so all new users see how to play, useEffect? if user logs out in another screen it may 
stay same for next user
[x] devotion is resetting to 47? seems to set to user id
[x] replace god button lets you spend negative devotion
[x] not all gods start with 8 power. seems to not always update from previous god array position

STRETCH
[ ] Animation
[x] Add more monsters
[x] Four Color Accent

Before Submission
[ ] TEST! TEST! TEST!
[ ] Fix Bugs
[ ] Simple Styling Tweaks? see notes?
[ ] Simple animation?
[ ] REFACTOR
[ ] Remove extra crap: psOne css, LandingPage - component?, 
[ ] update database.sql
[ ] find and remove user.id where not needed
