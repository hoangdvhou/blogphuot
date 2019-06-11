# BlogPhuot-Backend

## Schema

### User
    *id* 
    *username* : String
    *password* : String
    *email* : String
    *phone* : Number
    *fullname* : String
    *image* : String, default ""
    *descripstion* : String
    *role* : default "menber"
### Image
    *id*
    *title*
    *image* **[]**
    *descripstionthumbnail*
    *descripstion* **[]**
    *totalimage*
    *userlike* **[]**
    *totallike*
    *User*
    *Comment* **[]**
### Comment
    *user*
    *text*
