// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
	// Powah Energizing Rod Clearing
	const powahclearing = [
		"starter",
		"basic",
		"hardened",
		"blazing",
		"niotic",
		"spirited",
		"nitro"
	]
	powahclearing.forEach((name) => {
		let material = Item.of(`powah:energizing_rod_${name}`)
		
		allthemods.shapeless(material, [material]).id(`allthemods:clear_powah/energizing_rod_${name}`)
	})
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.