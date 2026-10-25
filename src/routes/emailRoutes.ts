import express from "express";
import type { Router } from "express";
import { createProxyMiddleware, fixRequestBody } from "http-proxy-middleware";
import emailServiceConfig from "../config/email-config.js";

const router: Router = express.Router();

router.use(
  "/",
  createProxyMiddleware({
    target: emailServiceConfig || 4001,
    changeOrigin: true,
    pathRewrite: { "^/email": "" }, // Removes `/email` prefix
    on: { proxyReq: fixRequestBody }
  })
);

export default router;