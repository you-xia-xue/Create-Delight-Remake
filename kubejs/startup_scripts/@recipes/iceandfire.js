new Schema("iceandfire:dragonforge")
    .simpleKey("result", "outputItem")
    .simpleKey("input", "inputItem")
    .simpleKey("blood", "inputItem")
    .simpleKey("dragon_type", "nonEmptyString", "fire" || "ice" || "lightning")
    .simpleKey("cook_time", "intNumber", 1000)
