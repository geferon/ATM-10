// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ItemEvents.modifyTooltips(allthemods => {

    //AllTheModium

    allthemods.add(['allthemodium:allthemodium_ore', 'allthemodium:allthemodium_slate_ore'],[
        Text.translate('kubejs.atm.tooltip.allthemodium_ore.1'),
        Text.translate('kubejs.atm.tooltip.allthemodium_ore.2'),
        Text.translate('kubejs.atm.tooltip.allthemodium_ore.3')
    ])
    allthemods.add(['allthemodium:vibranium_ore', 'allthemodium:other_vibranium_ore'],[
        Text.translate('kubejs.atm.tooltip.vibranium_ore.1'),
        Text.translate('kubejs.atm.tooltip.vibranium_ore.2'),
        Text.translate('kubejs.atm.tooltip.vibranium_ore.3')
    ])
    allthemods.add('allthemodium:unobtainium_ore',[
        Text.translate('kubejs.atm.tooltip.unobtainium_ore.1'),
        Text.translate('kubejs.atm.tooltip.unobtainium_ore.2')
    ])

    allthemods.add('kubejs:silent_allthemodium_plate',[
        Text.translate('kubejs.atm.tooltip.silent_plate.1')
    ])
    allthemods.add('kubejs:silent_vibranium_plate',[
        Text.translate('kubejs.atm.tooltip.silent_plate.1')
    ])
    allthemods.add('kubejs:silent_unobtainium_plate',[
        Text.translate('kubejs.atm.tooltip.silent_plate.1')
    ])

    allthemods.add('allthemodium:allthemodium_ingot',[
        Text.translate('kubejs.atm.tooltip.silent_ingot.1'),
        Text.translate('kubejs.atm.tooltip.silent_ingot.allthemodium')
    ])
    allthemods.add('allthemodium:vibranium_ingot',[
        Text.translate('kubejs.atm.tooltip.silent_ingot.1'),
        Text.translate('kubejs.atm.tooltip.silent_ingot.vibranium')
    ])
    allthemods.add('allthemodium:unobtainium_ingot',[
        Text.translate('kubejs.atm.tooltip.silent_ingot.1'),
        Text.translate('kubejs.atm.tooltip.silent_ingot.unobtainium')
    ])


    allthemods.add('allthemodium:allthemodium_upgrade_smithing_template',[
        Text.translate('kubejs.atm.tooltip.smithing_template.allthemodium')
    ])
    allthemods.add('allthemodium:vibranium_upgrade_smithing_template',[
        Text.translate('kubejs.atm.tooltip.smithing_template.vibranium')
    ])
    allthemods.add('allthemodium:unobtainium_upgrade_smithing_template',[
        Text.translate('kubejs.atm.tooltip.smithing_template.unobtainium')
    ])
	// All The Mons
	allthemods.add('allthemons:pokemon_egg[allthemons:features=["atm=true"],allthemons:species="cobblemon:staryu"]',[
        Text.translate('kubejs.atm.tooltip.patrickyu_egg')
    ])

    //Mystical Agriculture
    allthemods.add(/mysticalagriculture:.*watering_can/,[
        Text.translate('kubejs.atm.tooltip.watering_can.1'),
        Text.translate('kubejs.atm.tooltip.watering_can.2')
    ])

	//Easy Villagers
    allthemods.add(['easy_villagers:trader', 'easy_villagers:auto_trader'], [
        Text.translate('kubejs.atm.tooltip.easy_villagers.trader.1')
    ])
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
