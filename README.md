# Itroduction

This is a really simple project based on an express app using Typescript.
Currently only has one service (file handeling) and client (dropbox)

This project uses yarn.

To run locally run:

```bash
yarn
yarn start:dev
```

Server will run on port 3333.

## Important

The client uses a hardcoded access token (found in src/clients/dropbox) for the specific dropbox account. 
__This may be invalidated by the time you test this, if so contact the author to generate new token.__
