// 物品栏分类
StartupEvents.registry("creative_mode_tab", e => {
    //食物
    e.create("createdelight:food")
        .translationKey("itemGroup.createdelight.food")
        .icon(() => Item.of("createdelight:unfried_shrimp"))
        .content(() => [
        // 原材料
        'createdelight:corn_flour',
        'createdelight:whipped_cream_bowl',
        'createdelight:butter',
        // 面团及其直接产物
        'createdelight:oil_dough',
        'createdelight:puff_pastry',
        'createdelight:board_noodles',
        'createdelight:vermicelli',
        // 曲奇面团
        'createdelight:persimmon_cookie_dough',
        'createdelight:lemon_cookie_dough',
        'createdelight:oatmeal_cookie_dough',
        'createdelight:green_tea_cookie_dough',
        'createdelight:cranberry_cookie_dough',
        'createdelight:bayberry_cookie_dough',
        'createdelight:chocolate_cookie_dough',
        'createdelight:honey_cookie_dough',
        'createdelight:sweet_berry_cookie_dough',
        // 生食物
        'createdelight:unfried_shrimp',
        'createdelight:raw_chicken_chip',
        'createdelight:raw_tonkatsu',
        'createdelight:raw_fish',
        'createdelight:unfried_potato',
        'createdelight:unfried_chicken_leg',
        'createdelight:raw_empanada',
        'createdelight:raw_calamari',
        'createdelight:raw_cheese_pizza',
        // 食物
        'createdelight:oat_bread',
        'createdelight:ketchup_corn_dog',
        'createdelight:mayo_corn_dog',
        'createdelight:salami',
        'createdelight:fugu_roll',
        'createdelight:empty_riceball',
        'createdelight:yorkshire_pudding_and_beef',
        'createdelight:boiling_water_cabbage',
        'createdelight:braised_intestines_in_brown_sauce',
        'createdelight:empty_popsicle',
      ])
    // 流体
    e.create("createdelight:fluid")
        .translationKey("itemGroup.createdelight.fluid")
        .icon(() => Item.of("createdelight:fuel_mixtures_bucket"))
        .content(() => [
        // 熔融液体
        'createdelight:molten_andesite_bucket',
        'createdelight:molten_desh_bucket',
        'createdelight:molten_ostrum_bucket',
        'createdelight:molten_calorite_bucket',
        'createdelight:molten_scarlet_neodymium_bucket',
        'createdelight:molten_azure_neodymium_bucket',
        'createdelight:fire_dragon_blood_bucket',
        'createdelight:molten_fire_steel_bucket',
        'createdelight:ice_dragon_blood_bucket',
        'createdelight:molten_ice_steel_bucket',
        'createdelight:lightning_dragon_blood_bucket',
        'createdelight:molten_lightning_steel_bucket',
        // 工业大生产液体
        'createdelight:fuel_mixtures_bucket',
        'createdelight:sky_solution_bucket',
        'createdelight:spent_liquor_bucket',
        'createdelight:unrefined_sugar_bucket',
        'createdelight:unfermented_paper_pulp_bucket',
        'createdelight:paper_pulp_bucket',
        // 气体桶
        'createdelight:radon_bucket',
        // 食物相关流体
        'createdelight:cake_batter_bucket',
        'createdelight:egg_yolk_bucket',
        'createdelight:nut_milk_bucket',
        'createdelight:whipped_cream_bucket',
        'createdelight:vinegar_bucket',
        'createdelight:slime_bucket',
        // 奶昔及对应冰激凌
        'createdelight:vanilla_ice_cream_bucket',
        'createdelight:vanilla_milkshake_bucket',
        'createdelight:chocolate_ice_cream_bucket',
        'createdelight:chocolate_milkshake_bucket',
        'createdelight:strawberry_ice_cream_bucket',
        'createdelight:strawberry_milkshake_bucket',
        'createdelight:banana_ice_cream_bucket',
        'createdelight:banana_milkshake_bucket',
        'createdelight:mint_ice_cream_bucket',
        'createdelight:mint_milkshake_bucket',
        'createdelight:adzuki_ice_cream_bucket',
        'createdelight:adzuki_milkshake_bucket',
      ])
    e.create("createdelight:metal")
        .translationKey("itemGroup.createdelight.metal")
        .icon(() => Item.of("createdelight:raw_tin"))
        .content(() => [
        // 金属块
        'createdelight:tin_block',
        'createdelight:bronze_block',
        // 粗金属块
        "createdelight:raw_tin_block",
        // 金属锭
        'createdelight:tin_ingot',
        'createdelight:bronze_ingot',
        // 金属粒
        'createdelight:tin_nugget',
        'createdelight:andesite_alloy_nugget',
        'createdelight:bronze_nugget',
        // 粗金属
        'createdelight:raw_tin',
        // 粉碎粗金属
        'createdelight:crushed_raw_desh',
        'createdelight:crushed_raw_ostrum',
        'createdelight:crushed_raw_calorite',
        // 污浊粉末
        'createdelight:dirty_tin_dust',
        'createdelight:dirty_silver_dust',
        'createdelight:dirty_desh_dust',
        'createdelight:dirty_ostrum_dust',
        'createdelight:dirty_calorite_dust',
        // 洁净粉末
        'createdelight:tin_dust',
        'createdelight:silver_dust',
        'createdelight:desh_dust',
        'createdelight:ostrum_dust',
        'createdelight:calorite_dust',
      ])
      
    e.create("createdelight:machine")
        .translationKey("itemGroup.createdelight.machine")
        .icon(() => Item.of("createdelight:electrolyzer"))
    e.create("createdelight:misc")
        .translationKey("itemGroup.createdelight.misc")
        .icon(() => Item.of("createdelight:fragment_of_border"))
})
  