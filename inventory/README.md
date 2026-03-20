# IMS

## Database Migrations
This repo uses **migrate-mongo** for schema/data changes.

**Local:**
```bash
cd apps/api
npm install
cp .env.example .env  # set MONGO_URI
npm run migrate:generate  # create a new migration file
npm run migrate:up        # apply
npm run migrate:down      # revert one step
```

**CI/CD:**
- On push to `main`, after publishing the API image, the workflow runs `npm run migrate:up` using `MONGO_URI` from repo secrets.
- Manual rollback: trigger **DB Migration Rollback (manual)** workflow.
