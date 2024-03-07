# Node Cognito

Cognito service for creating users, password reset, user pool group creation and adding users to pool groups.

## Setup

Setting up the application locally.

1. Create `.env` file at project root
```
PORT=3030
AWS_COGNITO_USER_POOL_ID=
AWS_COGNITO_CLIENT_ID=
AWS_REGION=us-east-1
ACCESS_KEY_ID=
SECRET_ACCESS_KEY=
```
2. `npm i`
3. `npm start`

## Notes

Original Node TS service [project](https://github.com/RohitChanda/Cognito_with_Node/tree/main).

Useful [SES](https://stackoverflow.com/questions/49000676/aws-cognito-authentication-user-password-auth-flow-not-enabled-for-this-client) error documation for authenticating user emails.

<br/>
<br/>

<img width="450" src="https://miro.medium.com/v2/resize:fit:600/0*8k3SysTTmHZz8pns.png" />