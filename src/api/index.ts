import express from "express";
import tokens from "./tokens";
import tokenInfo from "./tokens/tokens";
import summary from "./summary";
import pairs from "./pairs";

const router = express.Router();

router.get('/tokens', tokens)
router.get('/tokens/:address', tokenInfo)
router.get('/summary', summary)
router.get('/pairs', pairs)

export default router;
