const auth = async (req, res, next) => {
  const headers = req.headers;
  const authHeader = req.headers.authorization;
  console.log(headers);
  console.log(authHeader);
  next();
  //   try {
  //     const token = req.header("Authorization").replace("Bearer ", "");
  //     const decoded = jwt.verify(token, process.env.JWT_SECRET);
  //     const user = await User.findOne({
  //       _id: decoded._id,
  //       "tokens.token": token,
  //     });

  //     if (!user) {
  //       throw new Error();
  //     }

  //     // Add user object to req
  //     req.user = user;

  //     // Add token to req
  //     req.token = token;

  //     next();
  //   } catch (error) {
  //     res.status(401).send({ error: "Please authenticate." });
  //   }
};

module.exports = auth;
