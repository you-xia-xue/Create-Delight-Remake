ServerEvents.recipes(e => {
    remove_recipes_output(e, [
        "quark:carrot_crate",
        "quark:potato_crate",
        "quark:beetroot_crate"
    ])
    e.recipes.create.mixing(
        Fluid.of("create_enchantment_industry:experience", 10),
        'quark:ancient_fruit'
    ).heated().id("create_enchantment_industry:experience_from_ancient_fruit")
})