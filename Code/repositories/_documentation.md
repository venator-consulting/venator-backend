# Repositories

## 1. Account Repository

```js
account.repo.server.js
```

the repository for accounts table.

```js
// get the emails of the accounts
// with account type = 'K'
// used in: Code/modules/MailHistory/controller/mails.controller.js
getCreditorsMails(orgId, prcId);
```

## 2. Account Type Repository

```js
accountType.repo.server.js
```

the repository for account types table

```js
// returns all accounts' types
// used in: Code/modules/Admin/controller/accountType.controler.server.js
fetchAll();

// for seeding (create default data)
// used in: Code/modules/Admin/controller/accountType.controler.server.js
createDefault();
```

## 3. Credit Lines Repository
