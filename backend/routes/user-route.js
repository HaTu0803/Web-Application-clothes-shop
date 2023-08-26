import express from 'express';
import userService from '../services/user-service.js';

const router = express.Router();

router.get('/user', async (req, res) => {
    try {
        const users = await userService.AllUsers();
        return res.json(users.recordsets[0]);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' });
    }

});


router.post('/user', async (req, res) => {
    try {
        const { UserName, Pass, TypeAccount, CreateTime, UpdateTime, LockAccount, IsDelete } = req.body;
        
        // Gọi hàm từ userService để tạo người dùng mới
        const newUser = await userService.createUser(UserName, Pass, TypeAccount, CreateTime, UpdateTime, LockAccount, IsDelete);
        
        return res.status(201).json(newUser.recordset[0]);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.put('/user/:userID', async (req, res) => {
    try {
      const userID = req.params.userID;
      const newUserInfo = req.body;
  
      const result = await userService.updateUser(userID, newUserInfo);
  
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
      const { UserID } = req.params;
  

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
