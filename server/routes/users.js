const express = require("express");
const { User } = require("../models/User.js"); // Import the Snippet model
const router = express.Router();

// Create a new snippet
router.post("/snippets", async (req, res) => {
  try {
    const { id, name, description, content, category, user } = req.body;
    const snippet = await Snippet.create({ id, name, description, content, category, user });
    res.status(201).json(snippet);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all snippets
router.get("/snippets", async (req, res) => {
  try {
    const snippets = await Snippet.findAll();
    res.status(200).json(snippets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get snippet by ID
router.get("/snippets/:id", async (req, res) => {
  try {
    const snippet = await Snippet.findByPk(req.params.id);
    if (!snippet) {
      return res.status(404).json({ error: "Snippet not found" });
    }
    res.status(200).json(snippet);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get snippets by category
router.get("/snippets/category/:category", async (req, res) => {
  try {
    const snippets = await Snippet.findAll({ where: { category: req.params.category } });
    res.status(200).json(snippets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
