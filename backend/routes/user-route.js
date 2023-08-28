import express from 'express';
import userService from '../services/user-service.js';

const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        const user = req.body;
        console.log(user);
        const result = await userService.Register(user);
        
        res.json(result);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/login', async (req, res) => {
    try {
        const user = req.body;
        console.log(user);
        const result = await userService.Login(user);
        
        res.json(result);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


//--------------------------------


router.get('/user', async (req, res) => {
    try {
        const users = await userService.AllUsers();
        return res.json(users.recordsets[0]);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' });
    }

});

router.get('/user/:UserID', async (req, res) => {

    const id = req.params.UserID;

    try {
        const users = await userService.UserByID(id);
        return res.json(users.recordsets[0]);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' });
    }

});



router.post('/user', async (req, res) => {
    try {
        const { UserID, Name, UserName, Pass, TypeAccount, Address, Email } = req.body;
        
        const newUserResult = await userService.createUser(UserID, Name, UserName, Pass, TypeAccount, Address, Email);

        if (newUserResult && newUserResult.recordset && newUserResult.recordset.length > 0) {
        return res.status(201).json(newUserResult.recordset[0]);
        }
    }

    catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.put('/user/:UserID', async (req, res) => {
    try {
      const UserID = req.params.UserID;
      const newUserInfo = req.body;
  
      const result = await userService.updateUser(UserID, newUserInfo);
  
      if (result.rowsAffected[0] > 0) {
        return res.status(200).json({ message: 'User updated successfully' });
      } else {
        return res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });


router.delete('/user/:UserID', async (req, res) => {
    try {
      const UserID = req.params.UserID;
  

      const result = await userService.deleteUser(UserID);
  

      if (result.rowsAffected[0] > 0) {
        return res.status(204).send();
      } else {
        return res.status(404).json({ message: 'User not found' });
      }
  
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
export default router;