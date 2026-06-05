# back-end

A NestJS backend scaffold with a simple `users` module and a health endpoint.

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the app in development mode:

   ```bash
   npm run start:dev
   ```

3. Open the API:

   - `GET http://localhost:3000/api` → welcome message
   - `GET http://localhost:3000/api/health` → health check
   - `GET http://localhost:3000/api/users` → list users

## Example User Endpoints

- `POST /api/users`
- `GET /api/users/:id`
- `PUT /api/users/:id`
- `DELETE /api/users/:id`

## Project Structure

- `src/main.ts` - application bootstrap
- `src/app.module.ts` - root module
- `src/users` - example REST module with DTO validation

## Notes

The app uses class validation and a global API prefix. Update `src/users` to add persistence, authentication, or database integration.
