const express = require("express");
const router = express.Router();

const prisma = require("../PrismaClient");

router.delete("/posts/:id", async (req, res) => {
  const { id } = req.params;

  await prisma.comment.deleteMany({
    where: { postId: Number(id) },
  });
  await prisma.post.delete({
    where: { id: Number(id) },
  });
  res.sendStatus(204);
});

router.delete("/comments/:id", async (req, res) => {
  const { id } = req.params;
  await prisma.comment.delete({
    where: { id: Number(id) },
  });
  res.sendStatus(204);
});

module.exports = { contentRouter: router };
