const express = require("express");
const {
  login,
  register,
  logout,
  addCart,
  removeCart,
  decreaseCartQty,
  addCartQty,
  getUserCart,
  getCartNumber,
} = require("../controller/userController");
const checkAuth = require("../middleware/checkAuth");

const userRoutes = express.Router();
// Add test route
userRoutes.get('/test', (req, res) => {
  res.json({ 
    message: 'User API is working! 👋',
    timestamp: new Date().toISOString()
  });
});



userRoutes.post("/login", login);
userRoutes.post("/register", register);
userRoutes.post("/logout", checkAuth, logout);
userRoutes.get("/get-user-cart-number", checkAuth, getCartNumber);
userRoutes.get("/get-user-cart", checkAuth, getUserCart);
userRoutes.post("/add-cart", checkAuth, addCart);
userRoutes.delete("/remove-cart", checkAuth, removeCart);
userRoutes.post("/add-qty", checkAuth, addCartQty);
userRoutes.post("/decrease-qty", checkAuth, decreaseCartQty);

module.exports = userRoutes;
