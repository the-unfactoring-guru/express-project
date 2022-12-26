# express-project

## Purpose of this project

- Create Fullstack framework that specialized in functional prototypes.
- Faster testing and fixing bugs before first poduct
- Flexibility on moving server to cloud or on premise
- Follows the MVC architecture

### Entities:

- Code
  - Classes
    - EModel Class
      - Call DBController
      - Recieve only for one Model
      - Alter model (CRUD)
    - EController Class
      - Recieves model data
      - Modifies data
      - Sends to View to correct route
    - EViewClass
      - Renders the views to browsers
      - Frontend logic
  - DBController class
    - Connect to Mongoose
      - Recives models
      - Recieves data
      - Sends data to EModel
    - Config Class
      - Defines routes
    - Server Class
      - Recieves and declares routes&#x20;
      - is exported to recive data
  - Language
    - typescript for app
    - go for cli
- (Yarn) Packages:
  - Dependencies
    - express
    - mongoose
    - ejs
  - Dev Dependencies
    - typescript
    - concurrently
    - nodemon
    - parcel
      <br>

## Possible 0.2.0

- Cli integration
  - Serving --watch --port
  - Client --template=\[ejs,..]&#x20;
  - Factories
  - Proxy
- Upgrade to webpack

<br>
