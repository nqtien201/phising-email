import { createServer } from "https";
import { parse } from "url";
import next from "next";
import { readFileSync } from "fs";
import { join } from "path";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

// Đường dẫn cert tạo bởi office-addin-dev-certs
const certDir = join(process.env.USERPROFILE, ".office-addin-dev-certs");

const httpsOptions = {
  key: readFileSync(join(certDir, "localhost.key")),
  cert: readFileSync(join(certDir, "localhost.crt")),
};

app.prepare().then(() => {
  createServer(httpsOptions, (req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(3000, err => {
    if (err) throw err;
    console.log("> ✅ Server ready on https://localhost:3000");
  });
});
