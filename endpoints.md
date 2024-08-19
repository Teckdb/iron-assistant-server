# Endpoits List

## Device routes
| HTTP METHOD | PATH               | ACTION                              |
| ----------- | ------------------ | ------------------------------------|
|             |                    |                                     |
|GET          | /devices           | get all devices                     |
|GET          | /devices/:id       | get one device by id                |
|GET          | /devices/search    | search devices by name or deviceType|
|POST         | /devices           | create new device                   |
|PUT          | /devices/:id       | edit one device by id               |
|DELETE       | /devices/:id       | delete one device by id             |


## Areas routes
| HTTP METHOD | PATH               | ACTION                              |
| ----------- | ------------------ | ------------------------------------|
|             |                    |                                     |
|GET          | /areas             | get all areas                       |
|GET          | /areas/:id         | get one areas by id                 |
|GET          | /areas/search      | search areas by name                |
|POST         | /areas             | create new areas                    |
|PUT          | /areas/:id         | edit one areas by id                |
|DELETE       | /areas/:id         | delete one areas by id              |

## Automation routes
| HTTP METHOD | PATH               | ACTION                              |
| ----------- | ------------------ | ------------------------------------|
|             |                    |                                     |
|GET          | /automations       | get all automations                 |
|GET          | /automations/:id   | get one automation by id            |
|GET          | /automations/search| search automations by name          |
|POST         | /automations       | create new automation               |
|PUT          | /automations/:id   | edit one automation by id           |
|DELETE       | /automations/:id   | delete one automation by id         |

## User routes
| HTTP METHOD | PATH               | ACTION                              |
| ----------- | ------------------ | ------------------------------------|
|             |                    |                                     |
|GET          | /users             | get all users                       |
|GET          | /users/:id         | get one user by id                  |
|GET          | /users/search      | search users by name                |
|DELETE       | /users/:id         | delete one automation by id         |

## Auth routes
| HTTP METHOD | PATH               | ACTION                              |
| ----------- | ------------------ | ------------------------------------|
|             |                    |                                     |    
|GET          | /signup            | create new user                     |   
|GET          | /login             | login with email and password       |   
|GET          | /verify            | verify token                        |   