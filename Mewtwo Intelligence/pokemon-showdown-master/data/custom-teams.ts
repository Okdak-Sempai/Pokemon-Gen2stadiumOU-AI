interface TeamData {
	name: string;
	team: string;
}

export const SampleTeams: {[formatid: string]: TeamData[]} = {
	"gen2stadium2": [
		// 📦 Import des équipes des boîtes
		// Chaque équipe est une équipe complète basée sur box_1.txt, box_2.txt, etc.

		{
			name: "Box 1",
			team: `
Bulbasaur
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- growth
- headbutt
- razorleaf
- toxic

Ivysaur
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- furycutter
- leechseed
- solarbeam
- sunnyday

Venusaur
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- gigadrain
- growl
- poisonpowder
- tackle

Charmander
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- dragonbreath
- flamethrower
- slash
- sunnyday

Charmeleon
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- dig
- fireblast
- smokescreen
- strength

Charizard
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- firepunch
- growl
- scaryface
- wingattack

Squirtle
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- bite
- blizzard
- raindance
- surf

Wartortle
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- dig
- icywind
- rapidspin
- waterfall

Blastoise
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- hydropump
- rapidspin
- withdraw
- mudslap

Butterfree
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- gust
- hyperbeam
- psychic
- stunspore

Beedrill
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- focusenergy
- pursuit
- sludgebomb
- twineedle

Pidgey
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- sandattack
- fly
- return
- steelwing

Pidgeotto
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- fly
- frustration
- mirrormove
- steelwing

Pidgeot
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- fly
- steelwing
- swift
- whirlwind

Rattata
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- focusenergy
- headbutt
- shadowball
- superfang

Raticate
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- hyperfang
- pursuit
- scaryface
- superfang

Spearow
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- drillpeck
- frustration
- mirrormove
- steelwing

Fearow
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- drillpeck
- hyperbeam
- pursuit
- toxic

Ekans
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- earthquake
- glare
- sludgebomb
- strength

Arbok
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- bite
- dig
- glare
- sludgebomb

Pichu
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- attract
- headbutt
- sweetkiss
- thunder

Pikachu
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- irontail
- headbutt
- thunderbolt
- thunderwave

Raichu
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- quickattack
- tailwhip
- thunder
- thunderwave
`,
		},
		{
			name: "Box 2",
			team: `
Sandshrew
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- earthquake
- furycutter
- sandstorm
- slash

Sandslash
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- earthquake
- furyswipes
- sandattack
- sandstorm

Nidoran-F
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- blizzard
- headbutt
- irontail
- toxic

Nidorina
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- bite
- blizzard
- strength
- toxic

Nidoqueen
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- mudslap
- bodyslam
- icepunch
- toxic

Nidoran-M
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- headbutt
- horndrill
- irontail
- thunder

Nidorino
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- doublekick
- horndrill
- strength
- thunder

Nidoking
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- hornattack
- mudslap
- horndrill
- thunder

Cleffa
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- encore
- headbutt
- psychic
- sweetkiss

Clefairy
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- metronome
- moonlight
- psychic
- strength

Clefable
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- encore
- headbutt
- icepunch
- metronome

Vulpix
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- confuseray
- dig
- flamethrower
- sunnyday

Ninetales
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- fireblast
- quickattack
- roar
- safeguard

Igglybuff
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- dreameater
- headbutt
- sing
- sweetkiss

Jigglypuff
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- bodyslam
- defensecurl
- rollout
- sing

Wigglytuff
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- disable
- firepunch
- doubleedge
- sing

Zubat
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- confuseray
- gigadrain
- toxic
- wingattack

Golbat
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- bite
- haze
- steelwing
- wingattack

Crobat
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- bite
- fly
- leechlife
- supersonic

Oddish
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- gigadrain
- moonlight
- sludgebomb
- stunspore

Gloom
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- sleeppowder
- sludgebomb
- solarbeam
- sunnyday

Vileplume
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- acid
- petaldance
- poisonpowder
- sweetscent

Paras
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- gigadrain
- growth
- slash
- spore

Parasect
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- furycutter
- gigadrain
- slash
- spore
`,
		},
		{
			name: "Box 3",
			team: `
Venonat
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- psychic
- sludgebomb
- stunspore
- supersonic

Venomoth
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- foresight
- leechlife
- psychic
- sludgebomb

Diglett
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- earthquake
- fissure
- sandattack
- slash

Dugtrio
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- attract
- curse
- magnitude
- slash

Meowth
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- screech
- shadowball
- feintattack
- slash

Persian
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- bite
- growl
- headbutt
- roar

Psyduck
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- dig
- psychup
- surf
- swagger

Golduck
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- confusion
- furyswipes
- hydropump
- psychup

Mankey
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- crosschop
- doubleteam
- screech
- strength

Primeape
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- crosschop
- curse
- focusenergy
- thrash

Growlithe
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- dig
- flamethrower
- roar
- sunnyday

Arcanine
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- extremespeed
- flamewheel
- leer
- roar

Poliwag
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- bodyslam
- hydropump
- hypnosis
- raindance

Poliwhirl
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- bellydrum
- rest
- snore
- surf

Poliwrath
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- doubleslap
- hydropump
- dynamicpunch
- mindreader

Abra
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- attract
- icepunch
- psychic
- swagger

Kadabra
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- kinesis
- psychic
- reflect
- thunderpunch

Alakazam
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- futuresight
- kinesis
- psybeam
- thief

Machop
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- crosschop
- doubleteam
- earthquake
- seismictoss

Machoke
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- dig
- foresight
- strength
- vitalthrow

Machamp
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- firepunch
- scaryface
- submission
- thunderpunch

Bellsprout
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- gigadrain
- growth
- sludgebomb
- toxic

Weepinbell
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- growth
- razorleaf
- sludgebomb
- stunspore

Victreebel
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- acid
- sleeppowder
- growth
- solarbeam

`,
		},
		{
			name: "Box 4",
			team: `
Tentacool
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- blizzard
- screech
- sludgebomb
- surf

Tentacruel
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- barrier
- bubblebeam
- sludgebomb
- wrap

Geodude
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- defensecurl
- explosion
- earthquake
- rollout

Graveler
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- earthquake
- rollout
- sandstorm
- selfdestruct

Golem
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- harden
- magnitude
- rocksmash
- rockthrow

Ponyta
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- fireblast
- headbutt
- irontail
- sunnyday

Rapidash
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- attract
- firespin
- stomp
- toxic

Slowpoke
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- amnesia
- earthquake
- psychic
- surf

Slowbro
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- confusion
- disable
- growl
- surf

Magnemite
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- frustration
- supersonic
- thunder
- thunderwave

Magneton
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- flash
- swift
- thunder
- thunderwave

Farfetchd
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- fly
- slash
- steelwing
- swordsdance

Doduo
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- doubleteam
- drillpeck
- steelwing
- triattack

Dodrio
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- fly
- growl
- pursuit
- triattack

Seel
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- headbutt
- icebeam
- safeguard
- surf

Dewgong
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- aurorabeam
- rest
- sleeptalk
- waterfall

Grimer
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- frustration
- screech
- sludgebomb
- toxic

Muk
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- acidarmor
- disable
- dynamicpunch
- sludge

Shellder
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- icebeam
- supersonic
- surf
- swift

Cloyster
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- aurorabeam
- clamp
- spikecannon
- withdraw

Gastly
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- confuseray
- curse
- psychic
- shadowball

Haunter
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- destinybond
- gigadrain
- shadowball
- spite

Gengar
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- hypnosis
- nightmare
- nightshade
- thief

Onix
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- earthquake
- rockthrow
- sandstorm
- strength

`,
		},
		{
			name: "Box 5",
			team: `
Drowzee
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- dreameater
- headbutt
- hypnosis
- psychic

Hypno
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- confusion
- dreameater
- hypnosis
- psychup

Krabby
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- blizzard
- crabhammer
- guillotine
- strength

Kingler
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- crabhammer
- guillotine
- visegrip
- leer

Voltorb
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- mirrorcoat
- raindance
- selfdestruct
- thunder

Electrode
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- flash
- sonicboom
- swift
- thunder

Exeggcute
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- gigadrain
- leechseed
- psychic
- stunspore

Exeggutor
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- sleeppowder
- confusion
- eggbomb
- nightmare

Cubone
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- bonemerang
- focusenergy
- headbutt
- icywind

Marowak
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- bonerush
- focusenergy
- thrash
- thunderpunch

Tyrogue
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- attract
- doubleteam
- rocksmash
- strength

Hitmonlee
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- highjumpkick
- meditate
- megakick
- reversal

Hitmonchan
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- counter
- icepunch
- machpunch
- strength

Hitmontop
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- counter
- focusenergy
- strength
- triplekick

Lickitung
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- hyperbeam
- shadowball
- supersonic
- surf

Koffing
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- fireblast
- sludgebomb
- explosion
- toxic

Weezing
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- haze
- selfdestruct
- sludge
- zapcannon

Rhyhorn
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- earthquake
- irontail
- rollout
- scaryface

Rhydon
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- dig
- scaryface
- stomp
- zapcannon

Chansey
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- blizzard
- dreameater
- eggbomb
- sing

Blissey
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- defensecurl
- eggbomb
- flash
- thunder

Tangela
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- gigadrain
- growth
- sleeppowder
- thief

Kangaskhan
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- bite
- dizzypunch
- leer
- surf

Horsea
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- blizzard
- hydropump
- raindance
- smokescreen

`,
		},
		{
			name: "Box 6",
			team: `
Seadra
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- dragonbreath
- smokescreen
- surf
- swift

Kingdra
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- frustration
- leer
- twister
- waterfall

Goldeen
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- hornattack
- horndrill
- supersonic
- surf

Seaking
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- flail
- horndrill
- supersonic
- waterfall

Staryu
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- hydropump
- psychic
- recover
- thunder

Starmie
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- harden
- rapidspin
- waterfall
- zapcannon

Mrmime
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- barrier
- batonpass
- psybeam
- substitute

Scyther
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- focusenergy
- pursuit
- swift
- wingattack

Scizor
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- agility
- cut
- leer
- metalclaw

Smoochum
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- blizzard
- psychic
- sing
- sweetkiss

Jynx
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- icepunch
- confusion
- lick
- meanlook

Elekid
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- headbutt
- lightscreen
- screech
- thunderbolt

Electabuzz
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- leer
- lightscreen
- swift
- thunderpunch

Magby
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- confuseray
- flamethrower
- irontail
- sunnyday

Magmar
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- confuseray
- firepunch
- smog
- smokescreen

Pinsir
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- focusenergy
- furycutter
- visegrip
- submission

Tauros
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- pursuit
- rocksmash
- scaryface
- takedown

Gyarados
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- dragonrage
- leer
- twister
- waterfall

Lapras
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- icywind
- mist
- perishsong
- whirlpool

Eevee
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- irontail
- shadowball
- sandattack
- takedown

Vaporeon
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- acidarmor
- sandattack
- quickattack
- waterfall

Jolteon
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- doublekick
- sandattack
- pinmissile
- zapcannon

Flareon
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- fireblast
- quickattack
- smog
- tailwhip

Espeon
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- psybeam
- psychup
- swift
- tailwhip

`,
		},
		{
			name: "Box 7",
			team: `
Umbreon
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- meanlook
- sandattack
- feintattack
- quickattack

Porygon
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- blizzard
- conversion
- sharpen
- triattack

Porygon2
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- conversion
- swift
- thief
- zapcannon

Omanyte
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- ancientpower
- blizzard
- protect
- surf

Omastar
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- ancientpower
- bite
- spikecannon
- watergun

Kabuto
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- attract
- blizzard
- gigadrain
- rollout

Kabutops
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- ancientpower
- endure
- leer
- surf

Aerodactyl
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- ancientpower
- bite
- curse
- supersonic

Snorlax
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- curse
- defensecurl
- firepunch
- headbutt

Articuno
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- agility
- blizzard
- mist
- peck

Zapdos
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- detect
- flash
- rocksmash
- thunder

Moltres
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- endure
- fireblast
- roar
- skyattack

Dratini
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- headbutt
- outrage
- safeguard
- thunderwave

Dragonair
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- fireblast
- headbutt
- outrage
- thunderwave

Dragonite
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- dragonrage
- leer
- twister
- wingattack

Mewtwo
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- amnesia
- barrier
- bide
- blizzard

Mew
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- ancientpower
- flash
- metronome
- psychic

Chikorita
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- bodyslam
- gigadrain
- lightscreen
- toxic

Bayleef
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- bodyslam
- razorleaf
- safeguard
- synthesis

Meganium
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- poisonpowder
- reflect
- solarbeam
- strength

Cyndaquil
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- dig
- flamethrower
- headbutt
- sunnyday

Quilava
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- fireblast
- rollout
- smokescreen
- strength

Typhlosion
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- flamewheel
- rocksmash
- smokescreen
- swift

Totodile
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- blizzard
- screech
- slash
- surf

`,
		},
		{
			name: "Box 8",
			team: `
Croconaw
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- hydropump
- icepunch
- scaryface
- slash

Feraligatr
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- dig
- dynamicpunch
- leer
- watergun

Sentret
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- defensecurl
- headbutt
- rollout
- shadowball

Furret
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- amnesia
- icepunch
- strength
- thunderpunch

Hoothoot
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- dreameater
- fly
- hypnosis
- swift

Noctowl
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- confusion
- fly
- foresight
- takedown

Ledyba
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- icepunch
- reflect
- doubleedge
- safeguard

Ledian
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- dig
- gigadrain
- hyperbeam
- supersonic

Spinarak
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- dig
- leechlife
- nightshade
- sludgebomb

Ariados
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- protect
- sludgebomb
- spiderweb
- toxic

Chinchou
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- confuseray
- raindance
- surf
- thunder

Lanturn
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- flail
- hydropump
- spark
- supersonic

Togepi
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- attract
- headbutt
- metronome
- sweetkiss

Togetic
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- charm
- fly
- doubleedge
- metronome

Natu
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- confuseray
- futuresight
- nightshade
- psychic

Xatu
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- flash
- fly
- futuresight
- nightshade

Mareep
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- headbutt
- lightscreen
- thunder
- thunderwave

Flaaffy
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- cottonspore
- firepunch
- lightscreen
- thunderpunch

Ampharos
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- dynamicpunch
- flash
- swift
- zapcannon

Bellossom
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- poisonpowder
- attract
- cut
- petaldance

Marill
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- defensecurl
- rollout
- surf
- swagger

Azumarill
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- defensecurl
- icywind
- raindance
- waterfall

Sudowoodo
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- dig
- mimic
- rockslide
- strength

Politoed
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- icywind
- perishsong
- swagger
- whirlpool

`,
		},
		{
			name: "Box 9",
			team: `
Hoppip
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- gigadrain
- headbutt
- leechseed
- sleeppowder

Skiploom
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- headbutt
- solarbeam
- sunnyday
- synthesis

Jumpluff
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- headbutt
- leechseed
- megadrain
- stunspore

Aipom
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- agility
- batonpass
- doubleteam
- strength

Sunkern
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- attract
- gigadrain
- growth
- sludgebomb

Sunflora
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- growth
- hyperbeam
- razorleaf
- toxic

Yanma
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- doubleteam
- gigadrain
- headbutt
- swagger

Wooper
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- amnesia
- earthquake
- icepunch
- surf

Quagsire
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- dig
- haze
- slam
- surf

Murkrow
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- fly
- feintattack
- haze
- nightshade

Slowking
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- disable
- growl
- psychic
- watergun

Misdreavus
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- painsplit
- psywave
- shadowball
- thunder

Wobbuffet
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- counter
- destinybond
- mirrorcoat
- safeguard

Girafarig
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- agility
- crunch
- psybeam
- stomp

Pineco
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- gigadrain
- explosion
- doubleedge
- spikes

Forretress
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- rollout
- sandstorm
- spikes
- strength

Dunsparce
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- attract
- dig
- glare
- strength

Gligar
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- guillotine
- feintattack
- sandattack
- slash

Steelix
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- irontail
- rockthrow
- mudslap
- sandstorm

Snubbull
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- charm
- shadowball
- strength
- swagger

Granbull
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- bite
- dynamicpunch
- headbutt
- scaryface

Qwilfish
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- hydropump
- minimize
- pinmissile
- sludgebomb

Shuckle
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- bide
- rollout
- sandstorm
- sludgebomb

Heracross
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- leer
- megahorn
- rocksmash
- thief

`,
		},
		{
			name: "Box 10",
			team: `
Sneasel
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- beatup
- icepunch
- screech
- slash

Teddiursa
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- attract
- earthquake
- feintattack
- slash

Ursaring
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- dig
- firepunch
- rest
- snore

Slugma
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- amnesia
- bodyslam
- flamethrower
- rockslide

Magcargo
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- amnesia
- fireblast
- rockslide
- smog

Swinub
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- blizzard
- earthquake
- mist
- strength

Piloswine
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- earthquake
- furyattack
- icywind
- mist

Corsola
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- ancientpower
- attract
- mirrorcoat
- surf

Remoraid
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- hyperbeam
- icebeam
- lockon
- surf

Octillery
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- focusenergy
- lockon
- hyperbeam
- octazooka

Delibird
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- blizzard
- doubleteam
- fly
- present

Mantine
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- supersonic
- takedown
- waterfall
- wingattack

Skarmory
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- agility
- fly
- furyattack
- steelwing

Houndour
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- crunch
- flamethrower
- sludgebomb
- sunnyday

Houndoom
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- bite
- ember
- roar
- swift

Phanpy
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- doubleteam
- earthquake
- doubleedge
- swagger

Donphan
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- earthquake
- growl
- rapidspin
- sandstorm

Stantler
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- dreameater
- hypnosis
- mudslap
- stomp

Smeargle
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- bodyslam
- machpunch
- flamethrower
- confuseray

Miltank
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- bide
- healbell
- icepunch
- stomp

Raikou
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- flash
- quickattack
- roar
- spark

Entei
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- fireblast
- leer
- roar
- rocksmash

Suicune
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- bubblebeam
- gust
- mist
- roar

Larvitar
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- earthquake
- hyperbeam
- rockslide
- swagger

`,
		},
		{
			name: "Box 11",
			team: `
Pupitar
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- dig
- hyperbeam
- rockslide
- screech

Tyranitar
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- bite
- leer
- mudslap
- sandstorm

Lugia
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- aeroblast
- ancientpower
- blizzard
- curse

Hooh
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- ancientpower
- curse
- detect
- doubleteam

Celebi
Ability: No Ability
Level: 100
EVs: 252 HP / 252 Atk / 252 Def / 252 SpA / 252 SpD / 252 Spe
IVs: 30 HP / 30 Atk / 30 Def / 30 SpA / 30 SpD / 30 Spe
- ancientpower
- futuresight
- gigadrain
- healbell

`,
		},
	],
};
