ServerEvents.tags("item", e => {
    e.add("forge:fermentable", [
        'createaddition:biomass'
    ])
})
ServerEvents.recipes(e => {
  remove_recipes_id(e, [
    "createdieselgenerators:crafting/engine_piston_from_rods",
  ])
  // 替换安山合金
  e.replaceInput({mod: "createdieselgenerators"}, 'create:andesite_alloy', '#forge:ingots/steel')
  e.replaceInput({mod: "createdieselgenerators"}, 'create:propeller', 'ad_astra:fan')
  e.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "BBB",
      "PCP",
      "AIA"
    ],
    "key": {
      "A": {
        "tag": 'forge:ingots/steel'
      },
      "B": {
        "tag": 'forge:plates/steel'
      },
      "I": {
        "tag": "forge:plates/iron"
      },
      "C": {
        "item": "minecraft:clock"
      },
      "P": {
        "item": "create:fluid_pipe"
      }
    },
    "result": {
      "item": "createdieselgenerators:distillation_controller",
      "count": 10
    }
  }).id('createdieselgenerators:crafting/distillation_controller')
  let iner = "minecraft:polished_blackstone_slab"
  e.recipes.create.sequenced_assembly('createdelight:incomplete_diesel_engine', "minecraft:polished_blackstone_slab", [
    e.recipes.create.deploying(iner, [iner, "create:fluid_tank"]),
    e.recipes.create.deploying(iner, [iner, "createdelight:bronze_sheet"]),
    e.recipes.create.pressing(iner, iner),
    e.recipes.create.deploying(iner, [iner, "create:shaft"])
  ])
  .transitionalItem(iner)
  .loops(1)
  .id("createdieselgenerators:crafting/incomplete_diesel_engine")
  let iner1 = "createdelight:incomplete_diesel_engine"
  e.recipes.create.sequenced_assembly('createdieselgenerators:diesel_engine', "createdelight:incomplete_diesel_engine", [
    e.recipes.create.deploying(iner1, [iner1, "minecraft:flint_and_steel"]),
    e.recipes.create.deploying(iner1, [iner1, "createdieselgenerators:engine_piston"]),
    e.recipes.create.pressing(iner1, iner1)
  ])
  .transitionalItem(iner1)
  .loops(4)
  .id("createdieselgenerators:crafting/diesel_engine")
  let iner2 = "createdelight:incomplete_large_diesel_engine"
  e.recipes.create.sequenced_assembly('createdieselgenerators:large_diesel_engine', 'createdieselgenerators:diesel_engine', [
    e.recipes.create.deploying(iner2, [iner2, "createdelight:bronze_sheet"]),
    e.recipes.create.pressing(iner2, iner2)
  ])
  .transitionalItem(iner2)
  .loops(3)
  .id("createdieselgenerators:crafting/large_diesel_engine")
  let iner3 = 'createdelight:incomplete_huge_diesel_engine'
  e.recipes.create.sequenced_assembly('createdieselgenerators:huge_diesel_engine', 'createdelight:bronze_block', [
    e.recipes.create.pressing(iner3, iner3),
    e.recipes.create.deploying(iner3, [iner3, "create:fluid_pipe"]),
    e.recipes.create.deploying(iner3, [iner3, "minecraft:flint_and_steel"]),
    e.recipes.create.deploying(iner3, [iner3, '#forge:ingots/steel']),
    e.recipes.create.pressing(iner3, iner3) 
  ])
  .transitionalItem(iner3)
  .loops(2)
  .id("createdieselgenerators:crafting/huge_diesel_engine")
})