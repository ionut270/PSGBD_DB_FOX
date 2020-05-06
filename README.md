
# PSGBD_DB_FOX
![DB_FOX logo](https://i.ibb.co/Wfb959P/logo.png =150x150)

| Author | App name | Version | Source |
|--|--|--|--|
| Oancea Ionut Eugen | DB_FOX | [0.1.0](https://github.com/ionut270/PSGBD_DB_FOX/tree/1) | [PLSQL 1](https://profs.info.uaic.ro/~bd/wiki/index.php/PLSQL_1)

## Quick notes

Run by using `npm start` command.
The purpose of this app is to complete a `Computer Scrience` homework.


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
- /get_students - Returns a list of all the students present in the database
- 
## Cerinte : 
- [x] Make a connection to the Oracle database server from your own application written in the programming language you like best (C ++, Java, PHP, Python, etc.) and retrieve a series of data from a table of your choice on which you will display in the application.
