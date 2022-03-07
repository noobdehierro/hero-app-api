const { Router } = require("express");
const { check } = require("express-validator");
const { createUser, loginUser, revalidateToken } = require("../controllers/authController");
const { validarCampos } = require("../middlewares/validar-campos");
const { validarJWT } = require("../middlewares/validar-jwt");

const router = Router();

router.post(
  "/new",
  [
    check("name", "Name is Required").not().isEmpty(),
    check("email", "Email is Required").isEmail(),
    check("password", "Password must be more than 6 digits").isLength({
      min: 6,
    }),
    validarCampos,
  ],
  createUser
);

router.post(
  "/",
  [
    check("email", "Email is Required").isEmail(),
    check("password", "Password is Required").isLength({ min: 6 }),
    validarCampos,
  ],
  loginUser
);

router.get('/renew', validarJWT ,revalidateToken );


module.exports = router;
