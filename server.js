import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// Health check (Shopify App URL will load this)
app.get("/", (req, res) => {
  res.status(200).send("Dartech Shopify Courier App is running ✅");
});

// Webhook endpoint for COD orders (orders/create)
app.post("/webhooks/orders-create", express.json({ type: "*/*" }), (req, res) => {
  console.log("orders/create webhook received. Order id:", req.body?.id);
  // For now: just return 200 OK so Shopify accepts the webhook
  res.status(200).send("ok");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
