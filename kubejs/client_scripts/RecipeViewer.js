// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMod 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

const runicYEET = [
    // Commented out: Item does not exist
    //'extended_industrialization:runic_tesla_receiver_hatch'
]

RecipeViewerEvents.removeEntriesCompletely('item', allthemods => {
    allthemods.remove('allthetweaks:greg_star')
    allthemods.remove('allthetweaks:greg_star_block')

    for (let i = 1; i < 10; i++) {
        allthemods.remove(`allthecompressed:greg_star_block_${i}x`)
    }

    allthemods.remove("extradisks:infinite_chemical_storage_block")
    allthemods.remove("extradisks:infinite_chemical_storage_disk")
    allthemods.remove("extradisks:infinite_chemical_storage_part")
    allthemods.remove("extradisks:infinite_fluid_storage_block")
    allthemods.remove("extradisks:infinite_fluid_storage_disk")
    allthemods.remove("extradisks:infinite_fluid_storage_part")
    allthemods.remove("extradisks:infinite_item_storage_block")
    allthemods.remove("extradisks:infinite_item_storage_disk")
    allthemods.remove("extradisks:infinite_item_storage_part")

    let $DyeColor = Java.loadClass("net.minecraft.world.item.DyeColor")
    for (let color of $DyeColor.values()) {
        allthemods.remove(`/refinedstorage:${color}_.*/`)
    }

    allthemods.remove('mekmm:scrap')
    allthemods.remove('mekmm:scrap_box')
    allthemods.remove('mekmm:empty_crystal')
    allthemods.remove('mekmm:uu_matter')
    allthemods.remove('mekmm:ambient_gas_collector')
    allthemods.remove(/mekmm:.*replicat.*/)
    allthemods.remove(/mekmm:.*recycl.*/)
    allthemods.remove(/mekmm:.*planting.*/)
    allthemods.remove('mekmm:cnc_lathe')
    allthemods.remove(/mekmm:.*lathing.*/)
    allthemods.remove(/mekmm:.*rolling_mill.*/)

    allthemods.remove("supplementaries:faucet")
})

// RecipeViewerEvents.removeEntriesCompletely('mekanism:chemical', allthemods => {
//
//     allthemods.remove('mekmm:uu_matter')
//     allthemods.remove('mekmm:unstable_dimensional_gas')
// })

RecipeViewerEvents.removeRecipes(event => {
    event.remove(["xycraft_machines:extractor/enderio/grains_of_infinity"])
})

RecipeViewerEvents.removeEntries('item', allthemods => {
    for (let yeet of runicYEET) {
        allthemods.remove(yeet)
    }

    // From JEI blacklist.json
    allthemods.remove(["immersiveengineering:pickaxe_steel",
        "immersiveengineering:shovel_steel",
        "immersiveengineering:axe_steel",
        "immersiveengineering:hoe_steel",
        "immersiveengineering:sword_steel",
        "railcraft:steel_sword",
        "railcraft:steel_hoe",
        "railcraft:steel_axe",
        "railcraft:steel_pickaxe",
        "railcraft:steel_shovel",
        "railcraft:steel_boots",
        "railcraft:steel_chestplate",
        "railcraft:steel_helmet",
        "railcraft:steel_leggings",
        "immersiveengineering:armor_steel_boots",
        "immersiveengineering:armor_steel_leggings",
        "immersiveengineering:armor_steel_chestplate",
        "immersiveengineering:armor_steel_helmet",
        "mekanism:creative_chemical_tank",
        "mekanism:creative_fluid_tank",
        "mekanism:creative_bin",
        "bigreactors:reinforced_reactorcreativewatergenerator",
        "bigreactors:basic_turbinecreativesteamgenerator",
        "bigreactors:reinforced_turbinecreativesteamgenerator",
        "enderio:creative_power",
        "ae2:creative_storage_cell",
        "modularrouters:creative_module",
        "modern_industrialization:creative_tank",
        "modern_industrialization:creative_storage_unit",
        "pneumaticcraft:creative_upgrade",
        "rftoolspower:dimensionalcell_creative",
        "xycraft_machines:item_selector",
        "xycraft_machines:fluid_selector",
        "stevescarts:module_creative_engine",
        "stevescarts:module_creative_hull",
        "stevescarts:upgrade_creative_mode",
        "ftbquests:stage_barrier",
        "ftbquests:barrier",
        "modern_industrialization:creative_barrel",
        "immersiveengineering:capacitor_creative",
        "mifa:efficiency_addon_5",
        "mifa:efficiency_addon_6",
        "mifa:efficiency_addon_7",
        "mifa:efficiency_addon_8",
        "mifa:processing_addon_5",
        "mifa:processing_addon_6",
        "mifa:processing_addon_7",
        "mifa:processing_addon_8",
        "mifa:speed_addon_5",
        "mifa:speed_addon_6",
        "mifa:speed_addon_7",
        "mifa:speed_addon_8"]
    )

})

RecipeViewerEvents.addInformation('fluid', allthemods => {
    allthemods.add("advanced_ae:quantum_infusion_source", [
        '§8In the Reaction Chamber: §e4000mb of Water§8 + §e1x Quantum Infused Dust§8 = §b1000mb of Quantum Infusion'
    ])
})

RecipeViewerEvents.removeCategories(allthemods => {
    allthemods.remove(["minecraft:grindstone"])
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
