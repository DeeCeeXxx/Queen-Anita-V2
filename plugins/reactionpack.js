const { smd, sendAnimeReaction } = require("../lib");

smd(
  {
    pattern: "poke",
    category: "reaction",
    use: "<quote|reply|tag>",
    filename: __filename,
    desc: "send Anime poke reaction.",
  },
  async (bot, text, { cmdName }) => {
    await sendAnimeReaction(bot, cmdName, "poked to", "poked to everyone.");
  }
);
//-----------------------------------------------------------------------
smd(
  {
    pattern: "hug",
    category: "reaction",
    use: "<quote|reply|tag>",
    filename: __filename,
    desc: "send Anime hug reaction.",
  },
  async (bot, text, { cmdName }) => {
    await sendAnimeReaction(bot, cmdName, "hug to", "hug with everyone.");
  }
);
//-----------------------------------------------------------------------
smd(
  {
    pattern: "hold",
    category: "reaction",
    use: "<quote|reply|tag>",
    filename: __filename,
    desc: "send Anime hand hold reaction.",
  },
  async (bot, text, { cmdName }) => {
    await sendAnimeReaction(
      bot,
      "handhold",
      "hold hand of",
      "holded hand of everyone"
    );
  }
);
//-----------------------------------------------------------------------
smd(
  {
    pattern: "hifi",
    category: "reaction",
    use: "<quote|reply|tag>",
    filename: __filename,
    desc: "send Anime hifi reaction.",
  },
  async (bot, text, { cmdName }) => {
    await sendAnimeReaction(
      bot,
      "highfive",
      "highfive with",
      "highfive with everyone."
    );
  }
);
//---------------------------------------------------------------------------
smd(
  {
    pattern: "bite",
    category: "reaction",
    use: "<quote|reply|tag>",
    filename: __filename,
    desc: "send Anime bite reaction.",
  },
  async (bot, text, { cmdName }) => {
    await sendAnimeReaction(bot, cmdName, "bitten to", "bitten to everyone.");
  }
);
//---------------------------------------------------------------------------
smd(
  {
    pattern: "blush",
    category: "reaction",
    use: "<quote|reply|tag>",
    filename: __filename,
    desc: "send Anime blush reaction.",
  },
  async (bot, text, { cmdName }) => {
    await sendAnimeReaction(bot, cmdName, "blushed to", "blushed to everyone.");
  }
);
//---------------------------------------------------------------------------
smd(
  {
    pattern: "punch",
    category: "reaction",
    use: "<quote|reply|tag>",
    filename: __filename,
    desc: "send Anime punch reaction.",
  },
  async (bot, text, { cmdName }) => {
    await sendAnimeReaction(bot, "kick", "punched to", "punched everyone.");
  }
);
//---------------------------------------------------------------------------
smd(
  {
    pattern: "pat",
    category: "reaction",
    use: "<quote|reply|tag>",
    filename: __filename,
    desc: "send Anime pated reaction.",
  },
  async (bot, text, { cmdName }) => {
    await sendAnimeReaction(
      bot,
      cmdName,
      "patted with",
      "patted with everyone."
    );
  }
);
//---------------------------------------------------------------------------
smd(
  {
    pattern: "kiss",
    category: "reaction",
    use: "<quote|reply|tag>",
    filename: __filename,
    desc: "send Anime kiss reaction.",
  },
  async (bot, text, { cmdName }) => {
    await sendAnimeReaction(
      bot,
      cmdName,
      "kissed with",
      "kissed with everyone."
    );
  }
);
//---------------------------------------------------------------------------
smd(
  {
    pattern: "kill",
    category: "reaction",
    use: "<quote|reply|tag>",
    filename: __filename,
    desc: "send Anime kill reaction.",
  },
  async (bot, text, { cmdName }) => {
    await sendAnimeReaction(bot, cmdName, "kill ", "kill everyone over here");
  }
);
//---------------------------------------------------------------------------
smd(
  {
    pattern: "happy",
    category: "reaction",
    use: "<quote|reply|tag>",
    filename: __filename,
    desc: "send Anime happy reaction.",
  },
  async (bot, text, { cmdName }) => {
    await sendAnimeReaction(
      bot,
      "dance",
      "feel happy with",
      "feel happy with everyone"
    );
  }
);
//---------------------------------------------------------------------------
smd(
  {
    pattern: "dance",
    category: "reaction",
    use: "<quote|reply|tag>",
    filename: __filename,
    desc: "send Anime dance reaction.",
  },
  async (bot, text, { cmdName }) => {
    await sendAnimeReaction(
      bot,
      cmdName,
      "dance with",
      "dance with everyone over here"
    );
  }
);
//---------------------------------------------------------------------------
smd(
  {
    pattern: "yeet",
    category: "reaction",
    use: "<quote|reply|tag>",
    filename: __filename,
    desc: "send Anime yeet reaction.",
  },
  async (bot, text, { cmdName }) => {
    await sendAnimeReaction(bot, cmdName, "yeeted to", "yeeted with everyone");
  }
);
//---------------------------------------------------------------------------
smd(
  {
    pattern: "wink",
    category: "reaction",
    use: "<quote|reply|tag>",
    filename: __filename,
    desc: "send Anime wink reaction.",
  },
  async (bot, text, { cmdName }) => {
    await sendAnimeReaction(
      bot,
      cmdName,
      "winked with",
      "winked with everyone"
    );
  }
);
//---------------------------------------------------------------------------
smd(
  {
    pattern: "slap",
    category: "reaction",
    use: "<quote|reply|tag>",
    filename: __filename,
    desc: "send Anime slap reaction.",
  },
  async (bot, text, { cmdName }) => {
    await sendAnimeReaction(bot, cmdName, "slap to", "slap to everyone");
  }
);
//---------------------------------------------------------------------------
smd(
  {
    pattern: "bonk",
    category: "reaction",
    use: "<quote|reply|tag>",
    filename: __filename,
    desc: "send Anime bonk reaction.",
  },
  async (bot, text, { cmdName }) => {
    await sendAnimeReaction(bot, cmdName, "bonked to", "bonked to everyone");
  }
);
//---------------------------------------------------------------------------
smd(
  {
    pattern: "bully",
    category: "reaction",
    use: "<quote|reply|tag>",
    filename: __filename,
    desc: "send Anime bully reaction.",
  },
  async (bot, text, { cmdName }) => {
    await sendAnimeReaction(bot, cmdName, "bullied to", "bullied to everyone");
  }
);
//---------------------------------------------------------------------------
smd(
  {
    pattern: "cringe",
    category: "reaction",
    use: "<quote|reply|tag>",
    filename: __filename,
    desc: "send Anime cringe reaction.",
  },
  async (bot, text, { cmdName }) => {
    await sendAnimeReaction(bot, cmdName, "cringed to", "cringed to everyone");
  }
);
//---------------------------------------------------------------------------
smd(
  {
    pattern: "cuddle",
    category: "reaction",
    use: "<quote|reply|tag>",
    filename: __filename,
    desc: "send Anime cuddle reaction.",
  },
  async (bot, text, { cmdName }) => {
    await sendAnimeReaction(
      bot,
      cmdName,
      "cuddled with",
      "cuddled with everyone"
    );
  }
);
