# Front-End Client for the Wizards APP

consumes the back-end wizards application

## Resources

### Wizards

###### Routes Table
| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| GET    | `/wizards`             | `wizards#index`   |
| GET    | `/wizards/:id`         | `wizards#show`    |
| POST   | `/wizards`             | `wizards#create`  |
| PATCH  | `/wizards/:id`         | `wizards#update`  |
| DELETE | `/wizards/:id`         | `wizards#deletee` |

### Users

###### Routes Table
| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/sign-up`             | `users#signup`    |
| POST   | `/sign-in`             | `users#signin`    |
| PATCH  | `/change-password/`    | `users#changepw`  |
| DELETE | `/sign-out/`           | `users#signout`   |


### Wands
| Verb   | URI Pattern             | Controller#Action |
|--------|-------------------------|-------------------|
| POST   | `/wands/petId`          | `wands#create`    |
| PATCH  | `/wands/:petId/:toyId`  | `wands#update`    |
| DELETE | `/wands/:petId/:toyId`  | `wands#delete`    |

