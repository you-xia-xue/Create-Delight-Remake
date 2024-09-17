ServerEvents.recipes(e => {
    remove_recipes_output(e, [
        "supplementaries:bomb",
        "create_sa:slime_helmet",
        "create_sa:copper_magnet",
        "create_sa:brass_cube",
        "create_sa:drone_controller",
        "create_sa:fan_component",
        "create_sa:vault_component",
        "create_sa:brass_drone_item",
        "create_enchantment_industry:experience_rotor",
        "refinedstorage:raw_basic_processor",
        "refinedstorage:raw_improved_processor",
        "refinedstorage:raw_advanced_processor",
        "refinedstorage:wrench",
        "supplementaries:bomb_spiky"
    ])
    remove_recipes_id(e, [
        "create:crafting/materials/rose_quartz",
        "neapolitan:banana/banana_bread",
        "createmetallurgy:belt_grinder",
        "createmetallurgy:sandpaper_belt",
        "torchmaster:frozen_pearl",
        "torchmaster:feral_flare_lantern"
    ])
    remove_recipes_mod(e, [
        "ftbquests",
        "itemfilters",
    ])
})
