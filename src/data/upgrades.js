

const COMBAT_UPGRADES = {
	autoeat: {
		name: "Unlock Auto-Eat",
		description: "Allows food to automatically be consumed when missing more health than the food's heal amount.",
		icon: require('@/assets/art/combat/upgrades/autoeat.png'),
		requiredItems: {
			money: 10000
		},
		upgrade: "autoeat",
		requiredUpgrades: {
			autoeat: 0
		}
	}
}

export const MINING_UPGRADE_PERCENT = .2;
const MINING_UPGRADES = {}
for (let i = 0; i < 5; i++) {
	let upgrade = {
		name: "Upgrade Mining Tools",
		description: `Increases mining speed by +${MINING_UPGRADE_PERCENT * 100}%`, // Expanded below
		icon: require('@/assets/art/mining/upgrade1.png'),
		requiredItems: {}, // Filled out below
		requiredLevels: { mining: (i + 1) * 10 },
		upgrade: "miningTools",
		requiredUpgrades: { miningTools: i }

	}

	if (i != 0) {
		upgrade.description += `, to ${(MINING_UPGRADE_PERCENT * (i + 1) * 100).toFixed()}%`;
	}
	if (i == 0) upgrade.requiredItems.money = 10000
	if (i == 1) upgrade.requiredItems.money = 75000
	if (i == 2) upgrade.requiredItems.money = 250000
	if (i == 3) upgrade.requiredItems.money = 800000
	if (i == 4) upgrade.requiredItems.money = 2000000

	MINING_UPGRADES[`upgradeMining${i + 1}`] = upgrade;
}

const XENOBIO_UPGRADES = {
	upgradeXenobio1: {
		name: "Upgrade Xenobiology Pens",
		description: "x2 tier 1 slime yield.",
		icon: require('@/assets/art/xenobio/upgrade1.png'),
		requiredItems: {
			money: 10000
		},
		requiredLevels: {
			xenobiology: 10
		},
		upgrade: "xenobiologyPens",
		requiredUpgrades: {
			xenobiologyPens: 0
		}
	},
	upgradeXenobio2: {
		name: "Upgrade Xenobiology Pens",
		description: "x4 tier 1 slime yield, x2 tier 2 slime yield.",
		icon: require('@/assets/art/xenobio/upgrade1.png'),
		requiredItems: {
			money: 500000
		},
		requiredLevels: {
			xenobiology: 25
		},
		upgrade: "xenobiologyPens",
		requiredUpgrades: {
			xenobiologyPens: 1
		}
	},
	upgradeXenobio3: {
		name: "Upgrade Xenobiology Pens",
		description: "x8 tier 1 slime yield, x4 tier 2 slime yield, x2 tier 3 slime yield.",
		icon: require('@/assets/art/xenobio/upgrade1.png'),
		requiredItems: {
			money: 1500000
		},
		requiredLevels: {
			xenobiology: 40
		},
		upgrade: "xenobiologyPens",
		requiredUpgrades: {
			xenobiologyPens: 2
		}
	}
}
const ENGINEERING_UPGRADES = {
	upgradeEngineering1: {
		name: "Improve Cable Management",
		description: "Increases engineering XP by 15%",
		icon: require('@/assets/art/engineering/upgrade1.png'),
		requiredItems: {
			money: 10000
		},
		requiredLevels: {
			engineering: 10
		},
		upgrade: "cableManagement",
		requiredUpgrades: {
			cableManagement: 0
		}
	},
	upgradeEngineering2: {
		name: "Improve Cable Management",
		description: "Increases engineering XP by 15%, to +30%",
		icon: require('@/assets/art/engineering/upgrade1.png'),
		requiredItems: {
			money: 75000
		},
		requiredLevels: {
			engineering: 20
		},
		upgrade: "cableManagement",
		requiredUpgrades: {
			cableManagement: 1
		}
	},
	upgradeEngineering3: {
		name: "Improve Cable Management",
		description: "Increases engineering XP by 15%, to +45%",
		icon: require('@/assets/art/engineering/upgrade1.png'),
		requiredItems: {
			money: 250000
		},
		requiredLevels: {
			engineering: 30
		},
		upgrade: "cableManagement",
		requiredUpgrades: {
			cableManagement: 2
		}
	},
	upgradeEngineering4: {
		name: "Improve Cable Management",
		description: "Increases engineering XP by 15%, to +60%",
		icon: require('@/assets/art/engineering/upgrade1.png'),
		requiredItems: {
			money: 800000
		},
		requiredLevels: {
			engineering: 40
		},
		upgrade: "cableManagement",
		requiredUpgrades: {
			cableManagement: 3
		}
	},
	upgradeEngineering5: {
		name: "Improve Cable Management",
		description: "Increases engineering XP by 15%, to +75%",
		icon: require('@/assets/art/engineering/upgrade1.png'),
		requiredItems: {
			money: 2000000
		},
		requiredLevels: {
			engineering: 50
		},
		upgrade: "cableManagement",
		requiredUpgrades: {
			cableManagement: 4
		}
	}
}

const FABRICATION_UPGRADES = {
	upgradeFabrication1: {
		name: "Upgrade Matter Bins",
		description: "Reduces fabrication ore costs by 20%",
		icon: require('@/assets/art/fabrication/upgrade1.png'),
		requiredItems: {
			money: 10000
		},
		requiredLevels: {
			fabrication: 10
		},
		upgrade: "fabricationBins",
		requiredUpgrades: {
			fabricationBins: 0
		}
	},
	upgradeFabrication2: {
		name: "Upgrade Matter Bins",
		description: "Reduces fabrication ore costs by an additional 20%, to 40%",
		icon: require('@/assets/art/fabrication/upgrade1.png'),
		requiredItems: {
			money: 500000
		},
		requiredLevels: {
			fabrication: 25
		},
		upgrade: "fabricationBins",
		requiredUpgrades: {
			fabricationBins: 1
		}
	},
	upgradeFabrication3: {
		name: "Upgrade Matter Bins",
		description: "Reduces fabrication ore costs by an additional 20%, to 60%",
		icon: require('@/assets/art/fabrication/upgrade1.png'),
		requiredItems: {
			money: 1500000
		},
		requiredLevels: {
			fabrication: 40
		},
		upgrade: "fabricationBins",
		requiredUpgrades: {
			fabricationBins: 2
		}
	}
}

const BOTANY_UPGRADES = {
	upgradeBotany1: {
		name: "Add Second Botany Tray",
		description: "Whenever you grow a plant, also grow the plant to the left as well",
		icon: require('@/assets/art/botany/upgrade1.png'),
		requiredItems: {
			money: 25000
		},
		requiredLevels: {
			botany: 20
		},
		upgrade: "botanyTrays",
		requiredUpgrades: {
			botanyTrays: 0
		}
	},
	upgradeBotany2: {
		name: "Add Third Botany Tray",
		description: "Whenever you grow a plant, also grow the plant to the left and right as well",
		icon: require('@/assets/art/botany/upgrade1.png'),
		requiredItems: {
			money: 2000000
		},
		requiredLevels: {
			botany: 40
		},
		upgrade: "botanyTrays",
		requiredUpgrades: {
			botanyTrays: 1
		}
	}
}

const GRAYTIDING_UPGRADES = {
	upgradeGraytiding1: {
		name: "Buy Hacking Tools",
		description: "Reduces graytiding failure rate by 10%",
		icon: require('@/assets/art/graytiding/upgrade1.png'),
		requiredItems: {
			money: 10000
		},
		requiredLevels: {
			graytiding: 10
		},
		upgrade: "graytidingHacking",
		requiredUpgrades: {
			graytidingHacking: 0
		}
	},
	upgradeGraytiding2: {
		name: "Buy Hacking Tools",
		description: "Reduces graytiding failure rate by an additional 10%, to -20%",
		icon: require('@/assets/art/graytiding/upgrade1.png'),
		requiredItems: {
			money: 75000
		},
		requiredLevels: {
			graytiding: 20
		},
		upgrade: "graytidingHacking",
		requiredUpgrades: {
			graytidingHacking: 1
		}
	},
	upgradeGraytiding3: {
		name: "Buy Hacking Tools",
		description: "Reduces graytiding failure rate by an additional 10%, to -30%",
		icon: require('@/assets/art/graytiding/upgrade1.png'),
		requiredItems: {
			money: 250000
		},
		requiredLevels: {
			graytiding: 30
		},
		upgrade: "graytidingHacking",
		requiredUpgrades: {
			graytidingHacking: 2
		}
	},
	upgradeGraytiding4: {
		name: "Buy Hacking Tools",
		description: "Reduces graytiding failure rate by an additional 10%, to -40%",
		icon: require('@/assets/art/graytiding/upgrade1.png'),
		requiredItems: {
			money: 800000
		},
		requiredLevels: {
			graytiding: 40
		},
		upgrade: "graytidingHacking",
		requiredUpgrades: {
			graytidingHacking: 3
		}
	},
	upgradeGraytiding5: {
		name: "Buy Hacking Tools",
		description: "Reduces graytiding failure rate by an additional 10%, to -50%",
		icon: require('@/assets/art/graytiding/upgrade1.png'),
		requiredItems: {
			money: 2000000
		},
		requiredLevels: {
			graytiding: 50
		},
		upgrade: "graytidingHacking",
		requiredUpgrades: {
			graytidingHacking: 4
		}
	}
}

const CHEMISTRY_UPGRADES = {
	upgradeChemistry1: {
		name: "Upgrade Chem Dispenser",
		description: "Reduces the time it takes to synthesize bases by 15%",
		icon: require('@/assets/art/chemistry/upgrade1.png'),
		requiredItems: {
			money: 10000
		},
		requiredLevels: {
			chemistry: 10
		},
		upgrade: "chemDispenser",
		requiredUpgrades: {
			chemDispenser: 0
		}
	},
	upgradeChemistry2: {
		name: "Upgrade Chem Dispenser",
		description: "Reduces the time it takes to synthesize bases by 15%, to -30%",
		icon: require('@/assets/art/chemistry/upgrade1.png'),
		requiredItems: {
			money: 75000
		},
		requiredLevels: {
			chemistry: 20
		},
		upgrade: "chemDispenser",
		requiredUpgrades: {
			chemDispenser: 1
		}
	},
	upgradeChemistry3: {
		name: "Upgrade Chem Dispenser",
		description: "Reduces the time it takes to synthesize bases by 15%, to -45%",
		icon: require('@/assets/art/chemistry/upgrade1.png'),
		requiredItems: {
			money: 250000
		},
		requiredLevels: {
			chemistry: 30
		},
		upgrade: "chemDispenser",
		requiredUpgrades: {
			chemDispenser: 2
		}
	},
	upgradeChemistry4: {
		name: "Upgrade Chem Dispenser",
		description: "Reduces the time it takes to synthesize bases by 15%, to -60%",
		icon: require('@/assets/art/chemistry/upgrade1.png'),
		requiredItems: {
			money: 800000
		},
		requiredLevels: {
			chemistry: 40
		},
		upgrade: "chemDispenser",
		requiredUpgrades: {
			chemDispenser: 3
		}
	},
	upgradeChemistry5: {
		name: "Upgrade Chem Dispenser",
		description: "Reduces the time it takes to synthesize bases by 15%, to -85%",
		icon: require('@/assets/art/chemistry/upgrade1.png'),
		requiredItems: {
			money: 2000000
		},
		requiredLevels: {
			chemistry: 50
		},
		upgrade: "chemDispenser",
		requiredUpgrades: {
			chemDispenser: 4
		}
	}
}


export default {
	...MINING_UPGRADES,
	...ENGINEERING_UPGRADES,
	...FABRICATION_UPGRADES,
	...XENOBIO_UPGRADES,
	...BOTANY_UPGRADES,
	...GRAYTIDING_UPGRADES,
	...COMBAT_UPGRADES,
	...CHEMISTRY_UPGRADES
}