new Schema("vintagedelight:fermenting")
    .simpleKey("output", "outputItem")
    .simpleKey("ingredients", "inputItemArray")
    .simpleKey("processingTime", "doubleNumber", 5000)
    .simpleKey("container", "nonEmptyString", "", false)