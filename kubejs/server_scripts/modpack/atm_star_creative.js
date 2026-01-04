// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {


    //AE2

        allthemods.custom(
            {
                type: 'powah:energizing',
                energy: 2147483647,
                ingredients: [
                    Ingredient.of('megacells:mega_energy_cell').toJson(),
                    Ingredient.of('megacells:mega_energy_cell').toJson(),
                    Ingredient.of('allthetweaks:atm_star').toJson(),
                    Ingredient.of('megacells:mega_energy_cell').toJson(),
                    Ingredient.of('megacells:mega_energy_cell').toJson()
                ],
                result: {
                    count: 1,
                    id: 'ae2:creative_energy_cell'
                }
            }
        ).id('allthemods:energizing/ae2_creative_energy_cell')

    //Integrated Dynamics
        
        allthemods.custom(
            {
                type: 'powah:energizing',
                energy: 2147483647,
                ingredients: [
                    Ingredient.of('integrateddynamics:energy_battery').toJson(),
                    Ingredient.of('integrateddynamics:energy_battery').toJson(),
                    Ingredient.of('allthetweaks:atm_star').toJson(),
                    Ingredient.of('integrateddynamics:energy_battery').toJson(),
                    Ingredient.of('integrateddynamics:energy_battery').toJson()
                ],
                result: {
                    count: 1,
                    id: 'integrateddynamics:energy_battery_creative'
                }
            }
        ).id('allthemods:energizing/integrateddynamics_energy_battery_creative')

    //Mekanism

        allthemods.recipes.kubejs.shaped('mekanism:creative_chemical_tank',
            [
                'TUT',
                'USU',
                'TUT'
            ],
            {
                T: 'mekanism:ultimate_chemical_tank',
                U: 'allthemodium:unobtainium_ingot',
                S: 'allthetweaks:atm_star_block',
            }
        ).id('allthemods:mekanism/creative_chemical_tank')

        allthemods.recipes.kubejs.shaped('mekanism:creative_fluid_tank',
            [
                'TUT',
                'USU',
                'TUT'
            ],
            {
                T: 'mekanism:ultimate_fluid_tank',
                U: 'allthemodium:unobtainium_ingot',
                S: 'allthetweaks:atm_star_block',
            }
        ).id('allthemods:mekanism/creative_fluid_tank')

        allthemods.recipes.kubejs.shaped('mekanism:creative_energy_cube',
            [
                'ATA', 
                'UCU', 
                'ATA'
            ],
            {
                A: 'mekanism:alloy_atomic',
                T: 'mekanism:energy_tablet',
                U: 'allthemodium:unobtainium_block',
                C: 'mekanism:ultimate_energy_cube'
            }
        ).id('allthemods:mekanism/creative_energy_cube')

        allthemods.custom(
            {
                type: 'powah:energizing',
                energy: 2147483647,
                ingredients: [
                    Ingredient.of('mekanism:creative_energy_cube',).toJson(),
                    Ingredient.of('mekanism:creative_energy_cube',).toJson(),
                    Ingredient.of('allthetweaks:atm_star').toJson(),
                    Ingredient.of('mekanism:creative_energy_cube',).toJson(),
                    Ingredient.of('mekanism:creative_energy_cube',).toJson()
                ],
                result: 
                    Item.of(
                        "mekanism:creative_energy_cube[mekanism:energy={energy_containers:[L;9223372036854775807L]}]"
                    ).toJson()
            }
        ).id('allthemods:energizing/mekanism_creative_energy_cube')
    
    //Powah

        allthemods.custom(
            {
                type: 'powah:energizing',
                energy: 2147483647,
                ingredients: [
                    Ingredient.of('powah:energy_cell_nitro').toJson(),
                    Ingredient.of('powah:energy_cell_nitro').toJson(),
                    Ingredient.of('allthetweaks:atm_star').toJson(),
                    Ingredient.of('powah:energy_cell_nitro').toJson(),
                    Ingredient.of('powah:energy_cell_nitro').toJson()
                ],
                result: Item.of('powah:energy_cell_creative').toJson()
            }
        ).id('allthemods:energizing/powah_creative_energy_cell')

    //PNC

        let pressureChamber = (psi, output, outcount, inputs) => {
            allthemods.custom(
                {
                    type: 'pneumaticcraft:pressure_chamber',
                    inputs: 
                        inputs
                    ,
                    pressure: psi,
                    results: [
                        {
                            count: outcount,
                            id: output
                        }
                    ]
                }
            ).id(`allthemods:pressure/${output.replace(':', '/')}`)
        }

        pressureChamber(4.9, 'pneumaticcraft:creative_compressor', 1,
            [
                {count: 64, item:'pneumaticcraft:advanced_pressure_tube'},
                {count: 1, item: 'pneumaticcraft:electrostatic_compressor'},
                {count: 64, item:'pneumaticcraft:advanced_pressure_tube'},
                {count: 1, item: 'pneumaticcraft:flux_compressor'},
                {count: 1, item: 'allthetweaks:atm_star'},
                {count: 1, item: 'pneumaticcraft:advanced_air_compressor'},
                {count: 64, item:'pneumaticcraft:advanced_pressure_tube'},
                {count: 1, item: 'pneumaticcraft:advanced_liquid_compressor'},
                {count: 64, item:'pneumaticcraft:advanced_pressure_tube'}
            ]
        )

        pressureChamber(4.9, 'pneumaticcraft:creative_compressed_iron_block', 1,
            [
                {count: 64, item:'pneumaticcraft:compressed_iron_block'},
                {count: 64, item:'pneumaticcraft:compressed_iron_block'},
                {count: 64, item:'pneumaticcraft:compressed_iron_block'},
                {count: 64, item:'pneumaticcraft:compressed_iron_block'},
                {count: 1, item: 'allthetweaks:atm_star'},
                {count: 64, item:'pneumaticcraft:compressed_iron_block'},
                {count: 64, item:'pneumaticcraft:compressed_iron_block'},
                {count: 64, item:'pneumaticcraft:compressed_iron_block'},
                {count: 64, item:'pneumaticcraft:compressed_iron_block'}
            ]
        )
    //Railcraft

        allthemods.recipes.kubejs.shaped('railcraft:creative_locomotive', 
            [
                'EF ', 
                'CAC', 
                'BDB'
            ],
            {
                A: 'allthetweaks:atm_star_shard',
                B: 'allthemodium:unobtainium_gear',
                C: 'railcraft:charge_motor',
                D: 'minecraft:minecart',
                E: 'minecraft:redstone_lamp',
                F: 'minecraft:netherite_ingot'
        }
    )

    // Create
    allthemods.custom({
        "type": "create:mechanical_crafting",
        "accept_mirrored": false,
        "category": "misc",
        "key": {
            "A": {
            "item": 'pamhc2foodextended:lemondrizzlecakeitem'
            },
            "B": {
            "item": 'pamhc2foodcore:pumpkincheesecakeitem'
            },
            "C": {
            "item": 'pamhc2foodextended:fruitcakeitem'
            },
            "D": {
            "item": 'pamhc2foodextended:chocolatesprinklecakeitem'
            },
            "E": {
            "item": 'pamhc2foodextended:holidaycakeitem'
            },
            "F": {
            "item": 'pamhc2foodextended:mochicakeitem'
            },
            "G": {
            "item": 'pamhc2foodcore:chocolatecakeitem'
            },
            "H": {
            "item": 'allthetweaks:atm_star'
            },
            "I": {
            "item": 'pamhc2foodcore:carrotcakeitem'
            },
            "J": {
            "item": 'pamhc2foodcore:cheesecakeitem'
            },
            "K": {
            "item": 'pamhc2foodextended:pineappleupsidedowncakeitem'
            },
            "L": {
            "item": 'create_enchantment_industry:experience_cake'
            },
            "M": {
            "item": 'createaddition:honey_cake'
            },
            "N": {
            "item": 'createaddition:chocolate_cake'
            },
            "O": {
            "item": 'create:blaze_cake'
            }
        },
        "pattern": [
            "ABCDE",
            "FGHIJ",
            "KLMNO"
        ],
        "result": {
            "count": 1,
            "id": 'create:creative_blaze_cake'
        },
        "show_notification": false
    }).id("allthemods:create/creative_blaze_cake")
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
