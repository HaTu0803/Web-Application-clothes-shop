import jwt from 'jsonwebtoken'

function verifyToken(TypeAccount) {
    return function (req, res, next) {
      const token = req.headers['authorization']?.split(' ')[1]; // Get token from headers
  
      if (!token) {
        return res.status(401).json({ message: 'Authorization token missing' });
      }
  
      try {
        const decoded = jwt.verify(token, 'thanhtu'); // Replace with your actual secret key
        if (decoded.TypeAccount !== TypeAccount) {
          return res.status(401).json({ message: 'Do not have permission' });
        }
        req.user = decoded;
        next(); // Move to the next middleware or route handler
      } catch (err) {
        return res.status(403).json({ message: 'Invalid token' });
      }
    };
  }

export default verifyToken;