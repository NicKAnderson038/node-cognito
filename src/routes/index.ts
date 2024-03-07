import { Router } from 'express'
import * as User from '../controllers/user'
import * as Group from '../controllers/groups'

const router = Router()

router.get('/home', (req, res) => {
    res.status(200).json({
        message: 'Node server is running successfully! 🎉',
    })
})

// User Pool Operations
router.post('/add-user', User.addUserInCognito)
router.post('/user-login', User.userLogin)
router.post('/new-password-for-login', User.newPasswordRequiredForLogin)
router.post('/token-validation', User.accesstokenValidation)

// Creating and Adding users to User Pool Groups
router.post('/create-group', Group.createGroupinCognito)
router.post('/add-user-in-group', Group.addUserInCognitoGroup)

export default router
