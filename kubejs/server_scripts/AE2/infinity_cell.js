/** @format */

// 无限盘
const transitionalItem = "createdelight:incomplete_infinity_cell";
const Inf_Fluid = [
  "minecraft:water",
  "minecraft:lava",
  "alexscaves:acid",
  "alexscaves:purple_soda",
  "ratatouille:cocoa_liquor",
  "createdelight:egg_yolk",
  "createcafe:melted_sugar",
  "create:honey",
  "createdelight:vinegar",
  "createmetallurgy:molten_iron",
  "createmetallurgy:molten_gold",
  "createmetallurgy:molten_copper",
  "createmetallurgy:molten_zinc",
  "createmetallurgy:molten_brass",
  "createmetallurgy:molten_tungsten",
  "createmetallurgy:molten_steel",
  "createmetallurgy:molten_netherite",
  "createmetallurgy:molten_aluminum",
  "createmetallurgy:molten_lead",
  "createmetallurgy:molten_nickel",
  "createmetallurgy:molten_osmium",
  "createmetallurgy:molten_silver",
  "createmetallurgy:molten_tin",
  "createmetallurgy:molten_invar",
  "createmetallurgy:molten_electrum",
  "createmetallurgy:molten_bronze",
  "createmetallurgy:molten_constantan",
  "createmetallurgy:molten_void_steel",
  "createdelight:molten_andesite",
  "createdelight:molten_desh",
  "createdelight:molten_ostrum",
  "createdelight:molten_calorite",
  "createdelight:molten_scarlet_neodymium",
  "createdelight:molten_azure_neodymium",
  "createdelight:molten_fire_steel",
  "createdelight:molten_ice_steel",
  "createdelight:molten_lightning_steel",
  "createdelight:molten_forged_steel",
];

ServerEvents.recipes((event) => {
  const { create } = event.recipes;
  Inf_Fluid.forEach((f) => {
    create
      .sequenced_assembly(
        Item.of("expatternprovider:infinity_cell", `{record:{"#c":"ae2:f",id:"${f}"}}`),
        "ae2:cell_component_256k",
        create.filling(transitionalItem, [transitionalItem, Fluid.of(f, 1000)])
      )
      .loops(4096)
      .transitionalItem(transitionalItem)
      .id(`createdelight:infinity_cell_${f.replace(/[^a-zA-Z0-9_]/g, "_")}`);
  });
});
