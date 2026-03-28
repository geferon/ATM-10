// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ItemEvents.modifyTooltips(allthemods => {

    //AllTheModium
    allthemods.add(['allthemodium:allthemodium_ore', 'allthemodium:allthemodium_slate_ore'],[
        Text.of('§7Needs at least Netherite to be mined'),
        Text.of('§6Found in the Deep Dark Biome and will always spawn air exposed'),
        Text.of('§6Also found in the Deep Slate Layer of Mining Dimension')
    ])
    allthemods.add(['allthemodium:vibranium_ore', 'allthemodium:other_vibranium_ore'],[
        Text.of('§7Needs at least AllTheModium to be mined'),
        Text.of('§bFound in any Nether biome'),
        Text.of('§bAlso found in The Other')
    ])
    allthemods.add('allthemodium:unobtainium_ore',[
        Text.of('§7Needs at least Vibranium to be mined'),
        Text.of('§dFound in the End Highlands')
    ])

    allthemods.add('kubejs:silent_allthemodium_plate',[
        Text.of("§7§oIt's less... talkative now")
    ])
    allthemods.add('kubejs:silent_vibranium_plate',[
        Text.of("§7§oIt's less... talkative now")
    ])
    allthemods.add('kubejs:silent_unobtainium_plate',[
        Text.of("§7§oIt's less... talkative now")
    ])

    allthemods.add('allthemodium:allthemodium_ingot',[
        Text.of("§7§oThese arent the ingots you are looking for"),
        Text.of("§6Look for the [Silent Allthemodium Plate]")
    ])
    allthemods.add('allthemodium:vibranium_ingot',[
        Text.of("§7§oThese arent the ingots you are looking for"),
        Text.of("§6Look for the [Silent Vibranium Plate]")
    ])
    allthemods.add('allthemodium:unobtainium_ingot',[
        Text.of("§7§oThese arent the ingots you are looking for"),
        Text.of("§6Look for the [Silent Unobtainium Plate]")
    ])


    allthemods.add('allthemodium:allthemodium_upgrade_smithing_template',[
        Text.of('§6Found in Suspicious Clay in Ancient Cities')
    ])
    allthemods.add('allthemodium:vibranium_upgrade_smithing_template',[
        Text.of('§bFound in Suspicious Soul Sand in Bastions')
    ])
    allthemods.add('allthemodium:unobtainium_upgrade_smithing_template',[
        Text.of('§dDropped by the Trial Spawner in the Library of the Dungeon within The Other')
    ])

	//Easy Villagers
    allthemods.add(['easy_villagers:trader', 'easy_villagers:auto_trader'], [
        Text.of("§aRight click with job site block to put it inside and allow trade restocking")
    ])

    if (Platform.isLoaded('modular_machinery_reborn')) {
        allthemods.add('modular_machinery_reborn:controller[modular_machinery_reborn:machine="atm:runic_crucible"]', [
            Text.of('§cWARNING, this machine has be depreciated.'),
            Text.of('Use crafting table to convert to the new version.')
        ])
        allthemods.add('modular_machinery_reborn:controller[modular_machinery_reborn:machine="atm:runic_star_altar"]', [
            Text.of('§cWARNING, this machine has be depreciated.'),
            Text.of('Use crafting table to convert to the new version.')
        ])
        allthemods.add('modular_machinery_reborn:controller[modular_machinery_reborn:machine="atm:runic_enchanter"]', [
            Text.of('§cWARNING, this machine has be depreciated.'),
            Text.of('Use crafting table to convert to the new version.')
        ])
        allthemods.add('modular_machinery_reborn:controller[modular_machinery_reborn:machine="atm:auto_hepheastus_forge"]', [
            Text.of('§cWARNING, this machine has be depreciated.'),
            Text.of('Use crafting table to convert to the new version.')
        ])
    }
    
	// Apotheosis Gateway Warning
	allthemods.add([
	'gateways:gate_pearl[gateways:gateway="apotheosis:tiered/frontier"]',
	'gateways:gate_pearl[gateways:gateway="apotheosis:tiered/ascent"]',
	'gateways:gate_pearl[gateways:gateway="apotheosis:tiered/summit"]',
	'gateways:gate_pearl[gateways:gateway="apotheosis:tiered/pinnacle"]'],
	[
		Text.of("§cWARNING: Will implode at wave 3 outside of the following dimensions:"),
		Text.of("§cOverworld, The Nether, The End, The Twilight Forest")
	])
	// Botany Pot Sculk
	allthemods.add([
	"minecraft:sculk",
	"minecraft:sculk_sensor",
	"minecraft:sculk_catalyst",
	"minecraft:sculk_vein",
	"minecraft:sculk_shrieker",
	"deeperdarker:gloomy_sculk",
	"deeperdarker:gloomy_grass",
	"deeperdarker:glowing_flowers",
	"deeperdarker:sculk_vines",
	"deeperdarker:glowing_roots",
	"deeperdarker:bloom_berries",
	"deeperdarker:glowing_grass",
	"deeperdarker:sculk_tendrils"],
	[
		Text.of("§9In a Botany Pot: Requires a hoe enchanted with Silk Touch to be harvested")
	])
})


// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
