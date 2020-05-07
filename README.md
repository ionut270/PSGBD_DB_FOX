
# PSGBD_DB_FOX
<img src="https://i.ibb.co/Wfb959P/logo.png" alt="DB_FOX logot" width="150" height="150">

| Author | App name | Version | Source |
|--|--|--|--|
| Oancea Ionut Eugen | DB_FOX | [0.2.0](https://github.com/ionut270/PSGBD_DB_FOX/tree/2) | [PLSQL 2](https://profs.info.uaic.ro/~bd/wiki/index.php/PLSQL_2)

## Quick notes

Run by using `npm start` command.
The purpose of this app is to complete a `Computer Science` homework.


#### Dependencies : 
| Version | Module |
|--|--|
| ^4.17.1 | Express |
| ^2.8.5 | Cors |
| ^4.2.0 | OracleDB |

## Clean code standards
 - JS Variables 		: `snake_case`
 - JS Functions 		: `SCREAMING_SNAKE_CASE`
 - The file names will respect the `snake_case` syntax.
#### Minimization :
Each route handler's, init's & workers, should have they'r own individual files.
#### Console colors : 
| Color | Purpose |
|--|--|
| ![#f03c15](https://via.placeholder.com/15/f03c15/000000?text=+) `Red` | Errors & exceptions |
|![#008000](https://via.placeholder.com/15/008000/000000?text=+) `Green` | Sucesfull operation output |
|![#FFFF00](https://via.placeholder.com/15/FFFF00/000000?text=+) `Yellow` | Operation in progress |
| ![#00FFFF](https://via.placeholder.com/15/00FFFF/000000?text=+) `Cyan` | Successfull database operation |

## Request handling

- Request errors should throw back to the client an object as follows `{ "err" : [Object] }`
#### Avaiable routes : 
- POST : /get_students - Returns a list of all the students present in the database
- GET :  / - Will retrieve a live build of the graphical interface

* In case operations such as deletion or addition of a field in the database, a socket will emit an event that will announce all clients to update

## Front end (REACT)
- Use of SCSS for easyer handling of styles
- No inline styles
- React semantic ui as a graphical library
- All components should be broken as much as posible into files
#### For writing SCSS
- The BEM syntax will be used
(Block. Element. Modifier) is a naming methodology, which aims to solve many of the problems you’ll commonly encounter when naming classes and structuring your CSS. It also does a great job of enabling you to create reusable front end components, which is something we all strive for: to be healthy, wealthy and create reusable components.

Anything with double underscores `__` are our **E**lements within that Block. And anything with double dash `--` are our **M**odifiers.

-   The class selectors in this component will (hopefully!) be unique. So other than stuff like fonts and colours that will always cascade, you don’t need to worry about conflicts.
-   We can change the HTML elements without having to change the CSS.
-   We’re being explicit. If we have nested elements that are the same in the component, it’s not a problem. They have a unique class that we can target without impacting the outside world.
-   You get into good habits about naming classes and it becomes second nature and consistent.
-   Best of all, we can pretty much just drop this component anywhere we like. Reusable components. Life goals.

## Requirements : 
- [x] For the table whose data you have exposed in the application made to the previous theme, create a graphical interface that for each of the displayed fields (at least 3) to have two buttons that will allow the rearrangement of asc / desc data after that field. The interface will also allow you to filter data according to a certain criterion.

 - Note: Although some of you would probably be tempted to take all the information from the DB and sort / filter it from PHP (which we have to admit would be more efficient when you have all the data taken in PHP anyway), it would be correct be to re-query the database - think of databases that have billions of records and from which I want to take only 1% of the data.

- Question: how would you index the database so that the answer from BD is as fast as possible (tested with and without index). 
- [ Index the columns needed for retrival ? ] 
