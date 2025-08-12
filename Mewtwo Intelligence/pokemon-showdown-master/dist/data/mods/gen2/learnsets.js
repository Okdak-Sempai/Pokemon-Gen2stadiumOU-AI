"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var learnsets_exports = {};
__export(learnsets_exports, {
  Learnsets: () => Learnsets
});
module.exports = __toCommonJS(learnsets_exports);
const Learnsets = {
  missingno: {
    learnset: {
      blizzard: ["1M"],
      bubblebeam: ["1M"],
      cut: ["1M"],
      doubleedge: ["1M"],
      earthquake: ["1M"],
      fissure: ["1M"],
      fly: ["1M"],
      icebeam: ["1M"],
      megakick: ["1M"],
      megapunch: ["1M"],
      psychic: ["1M"],
      rage: ["1M"],
      razorwind: ["1M"],
      rest: ["1M"],
      seismictoss: ["1M"],
      skyattack: ["1L1"],
      submission: ["1M"],
      substitute: ["1M"],
      swordsdance: ["1M"],
      takedown: ["1M"],
      teleport: ["1M"],
      thunder: ["1M"],
      thunderwave: ["1M"],
      toxic: ["1M"],
      triattack: ["1M"],
      watergun: ["1M", "1L1"]
    }
  },
  bulbasaur: {
    learnset: {
      growth: ["2L32", "1L34"],
      headbutt: ["2M"],
      razorleaf: ["2L20", "1L27"],
      toxic: ["2M", "1M"]
    },
    encounters: [
      { generation: 1, level: 5 }
    ]
  },
  ivysaur: {
    learnset: {
      furycutter: ["2M"],
      leechseed: ["2L7", "2L1", "1L7", "1L1"],
      solarbeam: ["2M", "2L56", "1M", "1L54"],
      sunnyday: ["2M"]
    }
  },
  venusaur: {
    learnset: {
      gigadrain: ["2M"],
      growl: ["2L4", "2L1", "1L1"],
      poisonpowder: ["2L15", "2S0", "1L22"],
      tackle: ["2L1", "1L1"]
    }
  },
  charmander: {
    learnset: {
      dragonbreath: ["2M"],
      flamethrower: ["2T", "2L31", "1L38"],
      slash: ["2L37", "1L30"],
      sunnyday: ["2M"]
    },
    encounters: [
      { generation: 1, level: 5 }
    ]
  },
  charmeleon: {
    learnset: {
      dig: ["2M", "1M"],
      fireblast: ["2M", "1M"],
      smokescreen: ["2L13"],
      strength: ["2M", "1M"]
    }
  },
  charizard: {
    learnset: {
      firepunch: ["2M"],
      growl: ["2L1", "1L1"],
      scaryface: ["2L27", "2S0"],
      wingattack: ["2L36", "2S0"]
    }
  },
  squirtle: {
    learnset: {
      bite: ["2L18", "1L22"],
      blizzard: ["2M", "1M"],
      raindance: ["2M", "2L33"],
      surf: ["2M", "1M"]
    },
    encounters: [
      { generation: 1, level: 5 }
    ]
  },
  wartortle: {
    learnset: {
      dig: ["2M", "1M"],
      icywind: ["2M"],
      rapidspin: ["2L25"],
      waterfall: ["2M"]
    }
  },
  blastoise: {
    learnset: {
      hydropump: ["2L68", "1L52"],
      rapidspin: ["2L25", "2S0"],
      withdraw: ["2L10", "2L1", "1L31"],
      mudslap: ["2M"]
    }
  },
  caterpie: {
    learnset: {
      tringshot: ["2L1", "1L1"],
      tackle: ["2L1", "1L1"]
    },
    encounters: [
      { generation: 1, level: 3 },
      { generation: 2, level: 3 }
    ]
  },
  metapod: {
    learnset: {
      harden: ["2L7", "2L1", "1L7", "1L1"]
    },
    encounters: [
      { generation: 1, level: 4 },
      { generation: 2, level: 4 },
      { generation: 3, level: 4 }
    ]
  },
  butterfree: {
    learnset: {
      gust: ["2L28", "1L28"],
      hyperbeam: ["2M", "1M"],
      psychic: ["2M", "1M"],
      stunspore: ["2L14", "1L14", "1L16"]
    },
    encounters: [
      { generation: 2, level: 7 }
    ]
  },
  weedle: {
    learnset: {
      poisonsting: ["2L1", "1L1"],
      stringshot: ["2L1", "1L1"]
    },
    encounters: [
      { generation: 1, level: 3 },
      { generation: 2, level: 3 }
    ]
  },
  kakuna: {
    learnset: { harden: ["2L7", "2L1", "1L1"] },
    encounters: [
      { generation: 1, level: 4 },
      { generation: 2, level: 4 }
    ]
  },
  beedrill: {
    learnset: {
      focusenergy: ["2L15", "1L16"],
      pursuit: ["2L30"],
      sludgebomb: ["2M"],
      twineedle: ["2L20", "1L20"]
    },
    encounters: [
      { generation: 2, level: 7 }
    ]
  },
  pidgey: {
    learnset: {
      sandattack: ["2L5", "1L5"],
      fly: ["2M", "1M"],
      return: ["2M"],
      steelwing: ["2M", "2E"]
    },
    encounters: [
      { generation: 1, level: 2 },
      { generation: 2, level: 2 }
    ]
  },
  pidgeotto: {
    learnset: {
      fly: ["2M", "1M"],
      frustration: ["2M"],
      mirrormove: ["2L55", "1L49"],
      steelwing: ["2M"]
    },
    encounters: [
      { generation: 1, level: 9 },
      { generation: 2, level: 7 }
    ]
  },
  pidgeot: {
    learnset: {
      fly: ["2M", "1M"],
      steelwing: ["2M"],
      swift: ["2M", "1M"],
      whirlwind: ["2L23", "1M", "1L21"]
    }
  },
  rattata: {
    learnset: {
      focusenergy: ["2L20", "1L23"],
      headbutt: ["2M"],
      shadowball: ["2M"],
      superfang: ["2L34", "1L34"]
    },
    encounters: [
      { generation: 1, level: 2 },
      { generation: 2, level: 2 }
    ]
  },
  raticate: {
    learnset: {
      hyperfang: ["2L13", "1L14"],
      pursuit: ["2L30"],
      scaryface: ["2L20"],
      superfang: ["2L40", "1L41"]
    },
    encounters: [
      { generation: 1, level: 15 },
      { generation: 2, level: 6 }
    ]
  },
  spearow: {
    learnset: {
      drillpeck: ["2L37", "1L29"],
      frustration: ["2M"],
      mirrormove: ["2L31", "1L22"],
      steelwing: ["2M"]
    },
    encounters: [
      { generation: 1, level: 3 },
      { generation: 2, level: 2 }
    ]
  },
  fearow: {
    learnset: {
      drillpeck: ["2L40", "1L34"],
      hyperbeam: ["2M", "1M"],
      pursuit: ["2L26"],
      toxic: ["2M", "1M"]
    },
    encounters: [
      { generation: 1, level: 19 },
      { generation: 2, level: 7 }
    ]
  },
  ekans: {
    learnset: {
      earthquake: ["2M", "1M"],
      glare: ["2L23", "1L24"],
      sludgebomb: ["2M"],
      strength: ["2M", "1M"]
    }
  },
  arbok: {
    learnset: {
      bite: ["2L15", "2L1", "1L17"],
      dig: ["2M", "1M"],
      glare: ["2L25", "1L27"],
      sludgebomb: ["2M"]
    },
    encounters: [
      { generation: 2, level: 10 }
    ]
  },
  pichu: {
    learnset: {
      attract: ["2M"],
      headbutt: ["2M"],
      sweetkiss: ["2L11"],
      thunder: ["2M"]
    }
  },
  pikachu: {
    learnset: {
      irontail: ["2M"],
      headbutt: ["2M"],
      thunderbolt: ["2T", "2L26", "1M", "1L26"],
      thunderwave: ["2L8", "1M", "1L8", "1L9"]
    },
    encounters: [
      { generation: 1, level: 3 },
      { generation: 2, level: 4 }
    ]
  },
  raichu: {
    learnset: {
      quickattack: ["2L1"],
      tailwhip: ["2L1"],
      thunder: ["2M", "1M"],
      thunderwave: ["1M", "1L1"]
    }
  },
  sandshrew: {
    learnset: {
      earthquake: ["2M", "1M"],
      furycutter: ["2M"],
      sandstorm: ["2M", "2L45"],
      slash: ["2L23", "1L17"]
    },
    encounters: [
      { generation: 1, level: 6 }
    ]
  },
  sandslash: {
    learnset: {
      earthquake: ["2M", "1M"],
      furyswipes: ["2L42", "1L47"],
      sandattack: ["1M"],
      sandstorm: ["2M", "2L52"]
    },
    encounters: [
      { generation: 2, level: 10 }
    ]
  },
  nidoranf: {
    learnset: {
      blizzard: ["2M", "1M"],
      headbutt: ["2M"],
      irontail: ["2M"],
      toxic: ["2M", "1M"]
    },
    encounters: [
      { generation: 1, level: 2 }
    ]
  },
  nidorina: {
    learnset: {
      bite: ["2L36", "1L36", "1L32"],
      blizzard: ["2M", "1M"],
      strength: ["2M"],
      toxic: ["2M", "1M"]
    }
  },
  nidoqueen: {
    learnset: {
      mudslap: ["2M"],
      bodyslam: ["2L23", "1M", "1L23", "1L1"],
      icepunch: ["2M"],
      toxic: ["2M", "1M"]
    }
  },
  nidoranm: {
    learnset: {
      headbutt: ["2M"],
      horndrill: ["2L38", "1M", "1L38", "1L36"],
      irontail: ["2M"],
      thunder: ["2M", "1M"]
    },
    encounters: [
      { generation: 1, level: 2 }
    ]
  },
  nidorino: {
    learnset: {
      doublekick: ["2L12", "1L12", "1L50"],
      horndrill: ["2L46", "1M", "1L46", "1L41"],
      strength: ["2M"],
      thunder: ["2M", "1M"]
    }
  },
  nidoking: {
    learnset: {
      hornattack: ["2L1", "1L8", "1L1"],
      mudslap: ["2M"],
      horndrill: ["1M"],
      thunder: ["2M", "1M"]
    }
  },
  cleffa: {
    learnset: {
      encore: ["2L4", "2S3", "2S2", "2S1", "2S0"],
      headbutt: ["2M"],
      psychic: ["2M"],
      sweetkiss: ["2L13"]
    }
  },
  clefairy: {
    learnset: {
      metronome: ["2L34", "1M", "1L31"],
      moonlight: ["2L43"],
      psychic: ["2M", "1M"],
      strength: ["2M", "1M"]
    },
    encounters: [
      { generation: 1, level: 8 }
    ]
  },
  clefable: {
    learnset: {
      encore: ["2L4", "2S3", "2S2", "2S1", "2S0"],
      headbutt: ["2M"],
      icepunch: ["2M"],
      metronome: ["2L1", "1M", "1L1"]
    }
  },
  vulpix: {
    learnset: {
      confuseray: ["2L19", "1L28"],
      dig: ["2M", "1M"],
      flamethrower: ["2T", "2L31", "1L35"],
      sunnyday: ["2M"]
    },
    encounters: [
      { generation: 1, level: 18 },
      { generation: 1, level: 15 }
    ]
  },
  ninetales: {
    learnset: {
      fireblast: ["2M", "1M"],
      quickattack: ["2L1", "1L1"],
      roar: ["2M", "1L1"],
      safeguard: ["2L1"]
    }
  },
  igglybuff: {
    learnset: {
      dreameater: ["2M"],
      headbutt: ["2M"],
      sing: ["2L1", "2S3", "2S2", "2S1", "2S0"],
      sweetkiss: ["2L14"]
    }
  },
  jigglypuff: {
    learnset: {
      bodyslam: ["2L34", "1M", "1L34"],
      defensecurl: ["2M", "2L4", "1L19"],
      rollout: ["2M", "2L19"],
      sing: ["2L1", "1L1"]
    },
    encounters: [
      { generation: 1, level: 3 },
      { generation: 2, level: 3 }
    ]
  },
  wigglytuff: {
    learnset: {
      disable: ["2L1", "1L1"],
      firepunch: ["2M"],
      doubleedge: ["1M"],
      sing: ["2L1", "1L1"]
    },
    encounters: [
      { generation: 1, level: 22 },
      { generation: 1, level: 3 }
    ]
  },
  zubat: {
    learnset: {
      confuseray: ["2L19", "1L21"],
      gigadrain: ["2M"],
      toxic: ["2M", "1M"],
      wingattack: ["2L27", "1L28"]
    },
    encounters: [
      { generation: 1, level: 6 },
      { generation: 2, level: 2 }
    ]
  },
  golbat: {
    learnset: {
      bite: ["2L12", "1L15", "1L1"],
      haze: ["2L55", "1L43"],
      steelwing: ["2M"],
      wingattack: ["2L30", "1L32"]
    },
    encounters: [
      { generation: 2, level: 13 }
    ]
  },
  crobat: {
    learnset: {
      bite: ["2L12"],
      fly: ["2M"],
      leechlife: ["2L1"],
      supersonic: ["2L6", "2L1"]
    }
  },
  oddish: {
    learnset: {
      gigadrain: ["2M"],
      moonlight: ["2L32"],
      sludgebomb: ["2M"],
      stunspore: ["2L16", "1L17"]
    },
    encounters: [
      { generation: 1, level: 12 }
    ]
  },
  gloom: {
    learnset: {
      sleeppowder: ["2L18", "1L19"],
      sludgebomb: ["2M"],
      solarbeam: ["2M", "1M", "1L52"],
      sunnyday: ["2M"]
    },
    encounters: [
      { generation: 2, level: 14 }
    ]
  },
  vileplume: {
    learnset: {
      acid: ["1L1"],
      petaldance: ["2L1", "1L1"],
      poisonpowder: ["1L15"],
      sweetscent: ["2M", "2L1"]
    }
  },
  paras: {
    learnset: {
      gigadrain: ["2M", "2L43"],
      growth: ["2L37", "1L41"],
      slash: ["2L31", "1L34"],
      spore: ["2L25", "1L27"]
    },
    encounters: [
      { generation: 1, level: 8 }
    ]
  },
  parasect: {
    learnset: {
      furycutter: ["2M"],
      gigadrain: ["2M", "2L55"],
      slash: ["2L37", "1L39"],
      spore: ["2L28", "1L30"]
    },
    encounters: [
      { generation: 1, level: 13 },
      { generation: 2, level: 5 }
    ]
  },
  venonat: {
    learnset: {
      psychic: ["2M", "2L41", "1M", "1L43"],
      sludgebomb: ["2M"],
      stunspore: ["2L28", "1L30"],
      supersonic: ["2L9", "1L11"]
    },
    encounters: [
      { generation: 1, level: 13 }
    ]
  },
  venomoth: {
    learnset: {
      foresight: ["2L1"],
      leechlife: ["2L25", "1L27", "1L1"],
      psychic: ["2M", "2L52", "1M", "1L50"],
      sludgebomb: ["2M"]
    },
    encounters: [
      { generation: 1, level: 30 },
      { generation: 2, level: 10 }
    ]
  },
  diglett: {
    learnset: {
      earthquake: ["2M", "2L41", "1M", "1L40"],
      fissure: ["2L49", "1M"],
      sandattack: ["2L11", "1L10"],
      slash: ["2L33", "1L31"]
    },
    encounters: [
      { generation: 1, level: 15 },
      { generation: 2, level: 2 }
    ]
  },
  dugtrio: {
    learnset: {
      attract: ["2M"],
      curse: ["2M"],
      magnitude: ["2L9", "2L1"],
      slash: ["2L37", "1L35"]
    },
    encounters: [
      { generation: 1, level: 15 },
      { generation: 2, level: 5 }
    ]
  },
  meowth: {
    learnset: {
      screech: ["2L35", "1L24"],
      shadowball: ["2M"],
      feintattack: ["2L28"],
      slash: ["2L46", "1L44"]
    },
    encounters: [
      { generation: 1, level: 10 }
    ]
  },
  persian: {
    learnset: {
      bite: ["2L11", "2L1", "1L12", "1L1"],
      growl: ["2L1", "1L1"],
      headbutt: ["2M"],
      roar: ["2M"]
    },
    encounters: [
      { generation: 2, level: 18 }
    ]
  },
  psyduck: {
    learnset: {
      dig: ["2M", "1M"],
      psychup: ["2M", "2L31"],
      surf: ["2M", "1M"],
      swagger: ["2M"]
    },
    encounters: [
      { generation: 1, level: 15 }
    ]
  },
  golduck: {
    learnset: {
      confusion: ["2L16", "2L1", "1L39"],
      furyswipes: ["2L44", "1L48"],
      hydropump: ["2L58", "1L59"],
      psychup: ["2M", "2L31"]
    },
    encounters: [
      { generation: 1, level: 15 },
      { generation: 2, level: 10 }
    ]
  },
  mankey: {
    learnset: {
      crosschop: ["2L39"],
      doubleteam: ["2M", "1M"],
      screech: ["2L45", "1L45"],
      strength: ["2M", "1M"]
    },
    encounters: [
      { generation: 1, level: 3 }
    ]
  },
  primeape: {
    learnset: {
      crosschop: ["2L45"],
      curse: ["2M"],
      focusenergy: ["2L27", "1L27"],
      thrash: ["2L63", "1L46"]
    },
    encounters: [
      { generation: 2, level: 15 }
    ]
  },
  growlithe: {
    learnset: {
      dig: ["2M", "1M"],
      flamethrower: ["2T", "2L50", "1L50"],
      roar: ["2M", "2L1", "1L1"],
      sunnyday: ["2M"]
    },
    encounters: [
      { generation: 1, level: 15 }
    ]
  },
  arcanine: {
    learnset: {
      extremespeed: ["2L50"],
      flamewheel: ["2L1"],
      leer: ["2L1", "1L1"],
      roar: ["2M", "2L1", "1L1"]
    }
  },
  poliwag: {
    learnset: {
      bodyslam: ["2L31", "1M", "1L31"],
      hydropump: ["2L43", "1L45"],
      hypnosis: ["2L7", "1L16"],
      raindance: ["2M", "2L25"]
    },
    encounters: [
      { generation: 1, level: 5 },
      { generation: 2, level: 3 }
    ]
  },
  poliwhirl: {
    learnset: {
      bellydrum: ["2L43"],
      rest: ["2M", "1M"],
      snore: ["2M"],
      surf: ["2M", "1M"]
    },
    encounters: [
      { generation: 1, level: 15 },
      { generation: 2, level: 10 }
    ]
  },
  poliwrath: {
    learnset: {
      doubleslap: ["2L1", "1L1"],
      hydropump: ["2L50", "1L52"],
      dynamicpunch: ["2M"],
      mindreader: ["2L51"]
    }
  },
  abra: {
    learnset: {
      attract: ["2M"],
      icepunch: ["2M"],
      psychic: ["2M", "1M"],
      swagger: ["2M"]
    },
    encounters: [
      { generation: 1, level: 6 }
    ]
  },
  kadabra: {
    learnset: {
      kinesis: ["2L1", "1L1"],
      psychic: ["2M", "2L38", "1M", "1L38"],
      reflect: ["2L45", "1M", "1L42"],
      thunderpunch: ["2M"]
    },
    encounters: [
      { generation: 2, level: 15 }
    ]
  },
  alakazam: {
    learnset: {
      futuresight: ["2L31"],
      kinesis: ["2L1", "1L1"],
      psybeam: ["2L21", "1L27"],
      thief: ["2M"]
    }
  },
  machop: {
    learnset: {
      crosschop: ["2L37"],
      doubleteam: ["2M", "1M"],
      earthquake: ["2M", "1M"],
      seismictoss: ["2L19", "1M", "1L39"]
    },
    encounters: [
      { generation: 1, level: 15 }
    ]
  },
  machoke: {
    learnset: {
      dig: ["2M", "1M"],
      foresight: ["2L25"],
      strength: ["2M", "1M"],
      vitalthrow: ["2L34"]
    },
    encounters: [
      { generation: 2, level: 14 }
    ]
  },
  machamp: {
    learnset: {
      firepunch: ["2M"],
      scaryface: ["2L52"],
      submission: ["2L61", "1M", "1L52"],
      thunderpunch: ["2M"]
    },
    encounters: [
      { generation: 1, level: 16 },
      { generation: 2, level: 5 }
    ]
  },
  bellsprout: {
    learnset: {
      gigadrain: ["2M"],
      growth: ["2L6", "1L1"],
      sludgebomb: ["2M"],
      toxic: ["2M", "1M"]
    },
    encounters: [
      { generation: 1, level: 12 },
      { generation: 2, level: 3 }
    ]
  },
  weepinbell: {
    learnset: {
      growth: ["2L6", "2L1", "1L1"],
      razorleaf: ["2L42", "1L38"],
      sludgebomb: ["2M"],
      stunspore: ["2L19", "1L23"]
    },
    encounters: [
      { generation: 2, level: 12 }
    ]
  },
  victreebel: {
    learnset: {
      acid: ["1L1"],
      sleeppowder: ["2L1", "1L18", "1L1"],
      growth: ["1M"],
      solarbeam: ["2M", "1M"]
    }
  },
  tentacool: {
    learnset: {
      blizzard: ["2M", "1M"],
      screech: ["2L43", "1L40"],
      sludgebomb: ["2M"],
      surf: ["2M", "1M"]
    },
    encounters: [
      { generation: 1, level: 5 }
    ]
  },
  tentacruel: {
    learnset: {
      barrier: ["2L38", "1L35"],
      bubblebeam: ["2L25", "1M"],
      sludgebomb: ["2M"],
      wrap: ["2L30", "1L13", "1L1"]
    },
    encounters: [
      { generation: 1, level: 20 },
      { generation: 2, level: 20 }
    ]
  },
  geodude: {
    learnset: {
      defensecurl: ["2M", "2L6", "1L11"],
      explosion: ["2L41", "1M", "1L36"],
      earthquake: ["2M", "2L36", "1M", "1L31"],
      rollout: ["2M", "2L31"]
    },
    encounters: [
      { generation: 1, level: 7 },
      { generation: 2, level: 2 }
    ]
  },
  graveler: {
    learnset: {
      earthquake: ["2M", "2L41", "1M", "1L36"],
      rollout: ["2M", "2L34"],
      sandstorm: ["2M"],
      selfdestruct: ["2L21", "1M", "1L21"]
    },
    encounters: [
      { generation: 2, level: 23 }
    ]
  },
  golem: {
    learnset: {
      harden: ["2L27", "1L29"],
      magnitude: ["2L16", "2L1"],
      rocksmash: ["2M"],
      rockthrow: ["2L11", "2L1", "1L16"]
    },
    encounters: [
      { generation: 1, level: 16 }
    ]
  },
  ponyta: {
    learnset: {
      fireblast: ["2M", "2L53", "1M"],
      headbutt: ["2M"],
      irontail: ["2M"],
      sunnyday: ["2M"]
    },
    encounters: [
      { generation: 1, level: 28 }
    ]
  },
  rapidash: {
    learnset: {
      attract: ["2M"],
      firespin: ["2L26", "1L39", "1S0"],
      stomp: ["2L19", "1L32", "1L1", "1S0"],
      toxic: ["2M", "1M"]
    },
    encounters: [
      { generation: 2, level: 14, gender: "M" }
    ]
  },
  slowpoke: {
    learnset: {
      amnesia: ["2L43", "1L40"],
      earthquake: ["2M", "1M"],
      psychic: ["2M", "2L48", "1M", "1L48"],
      surf: ["2M", "1M"]
    },
    encounters: [
      { generation: 1, level: 15 }
    ]
  },
  slowbro: {
    learnset: {
      confusion: ["2L20", "1L1"],
      disable: ["2L29", "1L18", "1L1"],
      growl: ["2L6", "2L1", "1L27"],
      surf: ["2M", "1M"]
    },
    encounters: [
      { generation: 1, level: 15 },
      { generation: 1, level: 23 },
      { generation: 2, level: 20 }
    ]
  },
  magnemite: {
    learnset: {
      frustration: ["2M"],
      supersonic: ["2L11", "1L29"],
      thunder: ["2M", "1M"],
      thunderwave: ["2L21", "1M", "1L35"]
    },
    encounters: [
      { generation: 1, level: 16 }
    ]
  },
  magneton: {
    learnset: {
      flash: ["2M", "1M"],
      swift: ["2M", "2L35", "1M", "1L46"],
      thunder: ["2M", "1M"],
      thunderwave: ["2L21", "1M", "1L38"]
    },
    encounters: [
      { generation: 2, level: 5 }
    ]
  },
  farfetchd: {
    learnset: {
      fly: ["2M", "1M"],
      slash: ["2L37", "2S0", "1L39"],
      steelwing: ["2M", "2E"],
      swordsdance: ["2L25", "2S0", "1M", "1L23"]
    },
    encounters: [
      { generation: 1, level: 3 }
    ]
  },
  doduo: {
    learnset: {
      doubleteam: ["2M", "1M"],
      drillpeck: ["2L33", "1L30"],
      steelwing: ["2M"],
      triattack: ["2L21", "1M", "1L40"]
    },
    encounters: [
      { generation: 1, level: 18 },
      { generation: 2, level: 4 }
    ]
  },
  dodrio: {
    learnset: {
      fly: ["2M", "1M"],
      growl: ["2L1", "1L20", "1L1"],
      pursuit: ["2L9", "2L1"],
      triattack: ["2L21", "1M", "1L45"]
    },
    encounters: [
      { generation: 1, level: 29 },
      { generation: 2, level: 10, gender: "F" },
      { generation: 2, level: 30 }
    ]
  },
  seel: {
    learnset: {
      headbutt: ["2M", "2L1", "2S0", "1L1"],
      icebeam: ["2T", "2L37", "1M", "1L50"],
      safeguard: ["2L48"],
      surf: ["2M", "1M"]
    },
    encounters: [
      { generation: 1, level: 22 }
    ]
  },
  dewgong: {
    learnset: {
      aurorabeam: ["2L16", "2L1", "1L35", "1L1"],
      rest: ["2M", "2L21", "1M", "1L44"],
      sleeptalk: ["2M"],
      waterfall: ["2M"]
    },
    encounters: [
      { generation: 1, level: 15 },
      { generation: 2, level: 5 }
    ]
  },
  grimer: {
    learnset: {
      frustration: ["2M"],
      screech: ["2L31", "1L48"],
      sludgebomb: ["2M", "2L50"],
      toxic: ["2M", "1M"]
    },
    encounters: [
      { generation: 1, level: 23 }
    ]
  },
  muk: {
    learnset: {
      acidarmor: ["2L45", "1L60"],
      disable: ["2L37", "1L1"],
      dynamicpunch: ["2M"],
      sludge: ["2L45", "1L37"]
    },
    encounters: [
      { generation: 1, level: 25 },
      { generation: 1, level: 15, japan: true },
      { generation: 2, level: 5 }
    ]
  },
  shellder: {
    learnset: {
      icebeam: ["2T", "2L49", "1M", "1L50"],
      supersonic: ["2L9", "1L18"],
      surf: ["2M", "1M"],
      swift: ["2M", "1M"]
    },
    encounters: [
      { generation: 1, level: 10 }
    ]
  },
  cloyster: {
    learnset: {
      aurorabeam: ["2L1", "1L1"],
      clamp: ["1L1"],
      spikecannon: ["2L41", "1L50"],
      withdraw: ["2L1", "1L1"]
    }
  },
  gastly: {
    learnset: {
      confuseray: ["2L28", "1L1"],
      curse: ["2M", "2L16"],
      psychic: ["2M", "1M"],
      shadowball: ["2M"]
    },
    encounters: [
      { generation: 1, level: 18 }
    ]
  },
  haunter: {
    learnset: {
      destinybond: ["2L48"],
      gigadrain: ["2M"],
      shadowball: ["2M"],
      spite: ["2L8", "2L1"]
    },
    encounters: [
      { generation: 1, level: 20 },
      { generation: 2, level: 15 }
    ]
  },
  gengar: {
    learnset: {
      hypnosis: ["2L1", "1L29"],
      nightmare: ["2M"],
      nightshade: ["2L21", "1L1"],
      thief: ["2M"]
    }
  },
  onix: {
    learnset: {
      earthquake: ["2M", "1M"],
      rockthrow: ["2L14", "1L19"],
      sandstorm: ["2M", "2L36"],
      strength: ["2M", "1M"]
    },
    encounters: [
      { generation: 1, level: 13 }
    ]
  },
  drowzee: {
    learnset: {
      dreameater: ["2M", "1M"],
      headbutt: ["2M", "2L25", "1L24"],
      hypnosis: ["2L1", "2S0", "1L1"],
      psychic: ["2M", "2L40", "1M", "1L32"]
    },
    encounters: [
      { generation: 1, level: 9 }
    ]
  },
  hypno: {
    learnset: {
      confusion: ["2L18", "2L1", "1L17", "1L1"],
      dreameater: ["2M", "1M"],
      hypnosis: ["2L1", "1L1"],
      psychup: ["2M", "2L55"]
    },
    encounters: [
      { generation: 2, level: 16 },
      { generation: 4, level: 16 }
    ]
  },
  krabby: {
    learnset: {
      blizzard: ["2M", "1M"],
      crabhammer: ["2L41", "1L35"],
      guillotine: ["2L27", "1L25"],
      strength: ["2M", "1M"]
    },
    encounters: [
      { generation: 1, level: 10 }
    ]
  },
  kingler: {
    learnset: {
      crabhammer: ["2L49", "1L42"],
      guillotine: ["2L27", "1L25"],
      visegrip: ["2L12", "2L1", "1L20", "1L1"],
      leer: ["2L5", "2L1", "1L1"]
    },
    encounters: [
      { generation: 1, level: 15 }
    ]
  },
  voltorb: {
    learnset: {
      mirrorcoat: ["2L41"],
      raindance: ["2M"],
      selfdestruct: ["2L23", "1M", "1L22"],
      thunder: ["2M", "1M"]
    },
    encounters: [
      { generation: 1, level: 14 },
      { generation: 1, level: 40 }
    ]
  },
  electrode: {
    learnset: {
      flash: ["2M", "1M"],
      sonicboom: ["2L17", "2L1", "1L17", "1L1"],
      swift: ["2M", "2L40", "1M", "1L40"],
      thunder: ["2M", "1M"]
    },
    encounters: [
      { generation: 1, level: 3 },
      { generation: 2, level: 23 }
    ]
  },
  exeggcute: {
    learnset: {
      gigadrain: ["2M"],
      leechseed: ["2L13", "1L28"],
      psychic: ["2M", "1M"],
      stunspore: ["2L25", "1L32"]
    },
    encounters: [
      { generation: 1, level: 20 }
    ]
  },
  exeggutor: {
    learnset: {
      sleeppowder: ["2L37", "1L48"],
      confusion: ["2L1"],
      eggbomb: ["2L31", "1M"],
      nightmare: ["2M"]
    }
  },
  cubone: {
    learnset: {
      bonemerang: ["2L25", "1L43"],
      focusenergy: ["2L21", "1L31"],
      headbutt: ["2M", "2L13", "1L18"],
      icywind: ["2M"]
    },
    encounters: [
      { generation: 1, level: 16 }
    ]
  },
  marowak: {
    learnset: {
      bonerush: ["2L53"],
      focusenergy: ["2L21", "1L33", "1L1"],
      thrash: ["2L46", "1L41"],
      thunderpunch: ["2M"]
    },
    encounters: [
      { generation: 1, level: 24 },
      { generation: 2, level: 12 }
    ]
  },
  tyrogue: {
    learnset: {
      attract: ["2M"],
      doubleteam: ["2M"],
      rocksmash: ["2M"],
      strength: ["2M"]
    }
  },
  hitmonlee: {
    learnset: {
      highjumpkick: ["2E"],
      meditate: ["2L6", "1L1", "1S0"],
      megakick: ["2L46", "1M", "1L53"],
      reversal: ["2L51"]
    },
    encounters: [
      { generation: 1, level: 30 }
    ]
  },
  hitmonchan: {
    learnset: {
      counter: ["2L50", "1M", "1L53"],
      icepunch: ["2M", "2L26", "1L38"],
      machpunch: ["2L32"],
      strength: ["2M", "1M"]
    },
    encounters: [
      { generation: 1, level: 30 }
    ]
  },
  hitmontop: {
    learnset: {
      counter: ["2L31"],
      focusenergy: ["2L7"],
      strength: ["2M"],
      triplekick: ["2L49"]
    }
  },
  lickitung: {
    learnset: {
      hyperbeam: ["2M", "1M"],
      shadowball: ["2M"],
      supersonic: ["2L7", "1L1"],
      surf: ["2M", "1M"]
    },
    encounters: [
      { generation: 1, level: 15 }
    ]
  },
  koffing: {
    learnset: {
      fireblast: ["2M", "1M"],
      sludgebomb: ["2M"],
      explosion: ["2L41", "1M", "1L48"],
      toxic: ["2M", "1M"]
    },
    encounters: [
      { generation: 1, level: 30 }
    ]
  },
  weezing: {
    learnset: {
      haze: ["2L33", "1L49"],
      selfdestruct: ["2L17", "2L1", "1M", "1L43"],
      sludge: ["2L21", "1L32", "1L1"],
      zapcannon: ["2M"]
    },
    encounters: [
      { generation: 2, level: 16 }
    ]
  },
  rhyhorn: {
    learnset: {
      earthquake: ["2M", "2L55", "1M"],
      irontail: ["2M"],
      rollout: ["2M"],
      scaryface: ["2L31"]
    },
    encounters: [
      { generation: 1, level: 20 }
    ]
  },
  rhydon: {
    learnset: {
      dig: ["2M", "1M"],
      scaryface: ["2L31"],
      stomp: ["2L13", "2L1", "1L30", "1L1"],
      zapcannon: ["2M"]
    },
    encounters: [
      { generation: 1, level: 15 },
      { generation: 2, level: 10 }
    ]
  },
  chansey: {
    learnset: {
      blizzard: ["2M", "1M"],
      dreameater: ["2M"],
      eggbomb: ["2L35", "1M"],
      sing: ["2L29", "1L24"]
    },
    encounters: [
      { generation: 1, level: 7 }
    ]
  },
  blissey: {
    learnset: {
      defensecurl: ["2M", "2L33"],
      eggbomb: ["2L28"],
      flash: ["2M"],
      thunder: ["2M"]
    }
  },
  tangela: {
    learnset: {
      gigadrain: ["2M"],
      growth: ["2L46", "1L48", "1L49"],
      sleeppowder: ["2L4", "2S0", "1L39"],
      thief: ["2M"]
    },
    encounters: [
      { generation: 1, level: 13 }
    ]
  },
  kangaskhan: {
    learnset: {
      bite: ["2L13", "1L26"],
      dizzypunch: ["2L43", "1L46"],
      leer: ["2L7", "1L41"],
      surf: ["2M", "1M"]
    },
    encounters: [
      { generation: 1, level: 25 },
      { generation: 1, level: 15, japan: true }
    ]
  },
  horsea: {
    learnset: {
      blizzard: ["2M", "1M"],
      hydropump: ["2L43", "1L45"],
      raindance: ["2M"],
      smokescreen: ["2L8", "1L19"]
    },
    encounters: [
      { generation: 1, level: 5 }
    ]
  },
  seadra: {
    learnset: {
      dragonbreath: ["2M"],
      smokescreen: ["2L8", "2L1", "1L19", "1L1"],
      surf: ["2M", "1M"],
      swift: ["2M", "1M"]
    },
    encounters: [
      { generation: 1, level: 20 },
      { generation: 2, level: 20 }
    ]
  },
  kingdra: {
    learnset: {
      frustration: ["2M"],
      leer: ["2L15", "2L1"],
      twister: ["2L29"],
      waterfall: ["2M"]
    }
  },
  goldeen: {
    learnset: {
      hornattack: ["2L15", "1L24"],
      horndrill: ["2L43", "1M", "1L45"],
      supersonic: ["2L10", "1L19"],
      surf: ["2M", "1M"]
    },
    encounters: [
      { generation: 1, level: 5 }
    ]
  },
  seaking: {
    learnset: {
      flail: ["2L24"],
      horndrill: ["2L49", "1M", "1L48"],
      supersonic: ["2L10", "1L19", "1L1"],
      waterfall: ["2M", "2L41", "1L39"]
    },
    encounters: [
      { generation: 1, level: 23 },
      { generation: 2, level: 10 }
    ]
  },
  staryu: {
    learnset: {
      hydropump: ["2L50", "1L47"],
      psychic: ["2M", "1M"],
      recover: ["2L19", "1L27"],
      thunder: ["2M", "1M"]
    },
    encounters: [
      { generation: 1, level: 5 }
    ]
  },
  starmie: {
    learnset: {
      harden: ["1L1"],
      rapidspin: ["2L1"],
      waterfall: ["2M"],
      zapcannon: ["2M"]
    },
    encounters: [
      { generation: 1, level: 6 }
    ]
  },
  mrmime: {
    learnset: {
      barrier: ["2L1", "2S0", "1L1"],
      batonpass: ["2L41"],
      psybeam: ["2L36"],
      substitute: ["2L11", "1M", "1L47"]
    }
  },
  scyther: {
    learnset: {
      focusenergy: ["2L6", "1L20"],
      pursuit: ["2L12"],
      swift: ["2M", "1M"],
      wingattack: ["2L30", "1L50"]
    },
    encounters: [
      { generation: 1, level: 15 },
      { generation: 1, level: 25 }
    ]
  },
  scizor: {
    learnset: {
      agility: ["2L24"],
      cut: ["2M"],
      leer: ["2L1"],
      metalclaw: ["2L30"]
    }
  },
  smoochum: {
    learnset: {
      blizzard: ["2M", "2L49"],
      psychic: ["2M", "2L37"],
      sing: ["2L25"],
      sweetkiss: ["2L9"]
    }
  },
  jynx: {
    learnset: {
      icepunch: ["2M", "2L25", "1L31"],
      confusion: ["2E"],
      lick: ["2L1", "1L18"],
      meanlook: ["2L35"]
    },
    encounters: [
      { generation: 1, level: 15 },
      { generation: 2, level: 10 }
    ]
  },
  elekid: {
    learnset: {
      headbutt: ["2M"],
      lightscreen: ["2L17"],
      screech: ["2L33"],
      thunderbolt: ["2T", "2L41"]
    }
  },
  electabuzz: {
    learnset: {
      leer: ["2L1", "1L1"],
      lightscreen: ["2L17", "1L49"],
      swift: ["2M", "2L25", "1M"],
      thunderpunch: ["2M", "2L9", "2L1", "1L42"]
    },
    encounters: [
      { generation: 1, level: 33 },
      { generation: 2, level: 15 }
    ]
  },
  magby: {
    learnset: {
      confuseray: ["2L43"],
      flamethrower: ["2T", "2L37"],
      irontail: ["2M"],
      sunnyday: ["2M", "2L31"]
    }
  },
  magmar: {
    learnset: {
      confuseray: ["2L49", "1L39"],
      firepunch: ["2M", "2L19", "2L1", "1L43"],
      smog: ["2L13", "2L1", "1L52"],
      smokescreen: ["2L25", "1L48"]
    },
    encounters: [
      { generation: 1, level: 34 },
      { generation: 2, level: 14 }
    ]
  },
  pinsir: {
    learnset: {
      focusenergy: ["2L7", "1L36"],
      furycutter: ["2M"],
      visegrip: ["2L12", "2L1", "1L20", "1L1"],
      submission: ["2L37", "1M"]
    },
    encounters: [
      { generation: 1, level: 15 },
      { generation: 1, level: 20 }
    ]
  },
  tauros: {
    learnset: {
      pursuit: ["2L26"],
      rocksmash: ["2M"],
      scaryface: ["2L19"],
      takedown: ["2L53", "1M", "1L51"]
    },
    encounters: [
      { generation: 1, level: 21 }
    ]
  },
  magikarp: {
    learnset: {
      flail: ["2L30"],
      splash: ["2L1", "2S2", "2S1", "1L1", "1S0"],
      tackle: ["2L15", "1L15"]
    },
    encounters: [
      { generation: 1, level: 5 }
    ]
  },
  gyarados: {
    learnset: {
      dragonrage: ["2L25", "1M", "1L25", "1L1"],
      leer: ["2L30", "1L32", "1L1"],
      twister: ["2L35"],
      waterfall: ["2M"]
    },
    encounters: [
      { generation: 1, level: 15 },
      { generation: 2, level: 15 }
    ]
  },
  lapras: {
    learnset: {
      icywind: ["2M"],
      mist: ["2L8", "1L20"],
      perishsong: ["2L29"],
      whirlpool: ["2M"]
    },
    encounters: [
      { generation: 1, level: 15 }
    ]
  },
  ditto: {
    learnset: { transform: ["2L1", "1L1"] },
    encounters: [
      { generation: 1, level: 12 },
      { generation: 2, level: 10 }
    ]
  },
  eevee: {
    learnset: {
      irontail: ["2M"],
      shadowball: ["2M"],
      sandattack: ["2L11", "1L10"],
      takedown: ["2L42", "1M", "1L42", "1L45"]
    },
    encounters: [
      { generation: 1, level: 25 }
    ]
  },
  vaporeon: {
    learnset: {
      acidarmor: ["2L47", "1L47", "1L42"],
      sandattack: ["2L11", "1L10"],
      quickattack: ["2L23", "1L23", "1L27", "1L1"],
      waterfall: ["2M"]
    }
  },
  jolteon: {
    learnset: {
      doublekick: ["2L30", "1L30", "1L42"],
      sandattack: ["2L11", "1L10"],
      pinmissile: ["2L36", "1L36", "1L48"],
      zapcannon: ["2M"]
    }
  },
  flareon: {
    learnset: {
      fireblast: ["2M", "1M"],
      quickattack: ["2L23", "1L23", "1L27", "1L1"],
      smog: ["2L42", "1L42"],
      tailwhip: ["2L1", "1L1", "1L37"]
    }
  },
  espeon: {
    learnset: {
      psybeam: ["2L36"],
      psychup: ["2M", "2L42"],
      swift: ["2M", "2L30"],
      tailwhip: ["2L1"]
    }
  },
  umbreon: {
    learnset: {
      meanlook: ["2L42"],
      sandattack: ["2L11", "1L10"],
      feintattack: ["2L28"],
      quickattack: ["2L23"]
    }
  },
  porygon: {
    learnset: {
      blizzard: ["2M", "1M"],
      conversion: ["2L1", "2S0", "1L1"],
      sharpen: ["2L24", "1L1"],
      triattack: ["2L36", "1M", "1L42"]
    },
    encounters: [
      { generation: 1, level: 18 }
    ]
  },
  porygon2: {
    learnset: {
      conversion: ["2L1"],
      swift: ["2M"],
      thief: ["2M"],
      zapcannon: ["2M", "2L44"]
    }
  },
  omanyte: {
    learnset: {
      ancientpower: ["2L49"],
      blizzard: ["2M", "1M"],
      protect: ["2M", "2L37"],
      surf: ["2M", "1M"]
    },
    encounters: [
      { generation: 1, level: 30 }
    ]
  },
  omastar: {
    learnset: {
      ancientpower: ["2L54"],
      bite: ["2L13", "2L1"],
      spikecannon: ["2L40", "1L44"],
      watergun: ["2L19", "1M", "1L1"]
    }
  },
  kabuto: {
    learnset: {
      attract: ["2M"],
      blizzard: ["2M", "1M"],
      gigadrain: ["2M"],
      rollout: ["2M"]
    },
    encounters: [
      { generation: 1, level: 30 }
    ]
  },
  kabutops: {
    learnset: {
      ancientpower: ["2L65"],
      endure: ["2M", "2L37"],
      leer: ["2L19", "1L46"],
      surf: ["2M", "1M"]
    }
  },
  aerodactyl: {
    learnset: {
      ancientpower: ["2L29"],
      bite: ["2L15", "1L38"],
      curse: ["2M"],
      supersonic: ["2L22", "1L33"]
    },
    encounters: [
      { generation: 1, level: 30 }
    ]
  },
  snorlax: {
    learnset: {
      curse: ["2M"],
      defensecurl: ["2M", "2L15"],
      firepunch: ["2M"],
      headbutt: ["2M", "2L29", "1L1"]
    },
    encounters: [
      { generation: 1, level: 30 }
    ]
  },
  articuno: {
    learnset: {
      agility: ["2L25", "2S0", "1L55"],
      blizzard: ["2M", "2L73", "1M", "1L51"],
      mist: ["2L13", "2S0", "1L60"],
      peck: ["1L1"]
    },
    encounters: [
      { generation: 1, level: 50 }
    ]
  },
  zapdos: {
    learnset: {
      detect: ["2M", "2L37", "2S0"],
      flash: ["2M", "1M"],
      rocksmash: ["2M"],
      thunder: ["2M", "2L73", "1M", "1L51"]
    },
    encounters: [
      { generation: 1, level: 50 }
    ]
  },
  moltres: {
    learnset: {
      endure: ["2M", "2L37", "2S0"],
      fireblast: ["2M", "1M"],
      roar: ["2M"],
      skyattack: ["2L73", "1M", "1L60"]
    },
    encounters: [
      { generation: 1, level: 50 }
    ]
  },
  dratini: {
    learnset: {
      headbutt: ["2M"],
      outrage: ["2L50"],
      safeguard: ["2L43"],
      thunderwave: ["2L8", "2S1", "1M", "1L10"]
    },
    encounters: [
      { generation: 1, level: 10 }
    ]
  },
  dragonair: {
    learnset: {
      fireblast: ["2M", "1M"],
      headbutt: ["2M"],
      outrage: ["2L56"],
      thunderwave: ["2L8", "2L1", "1M", "1L10", "1L1"]
    },
    encounters: [
      { generation: 1, level: 15 },
      { generation: 2, level: 10 }
    ]
  },
  dragonite: {
    learnset: {
      dragonrage: ["2L22", "1M", "1L45"],
      leer: ["2L1", "1L1"],
      twister: ["2L15", "2L1"],
      wingattack: ["2L55"]
    }
  },
  mewtwo: {
    learnset: {
      amnesia: ["2L77", "1L81"],
      barrier: ["2L11", "1L63"],
      bide: ["1M"],
      blizzard: ["2M", "1M"],
      bodyslam: ["1M"],
      bubblebeam: ["1M"],
      confusion: ["2L1"],
      counter: ["1M"],
      curse: ["2M"],
      detect: ["2M"],
      disable: ["2L1"],
      doubleedge: ["1M"],
      doubleteam: ["2M", "1M"],
      dreameater: ["2M"],
      dynamicpunch: ["2M"],
      endure: ["2M"],
      fireblast: ["2M", "1M"],
      firepunch: ["2M"],
      flamethrower: ["2T"],
      flash: ["2M", "1M"],
      frustration: ["2M"],
      futuresight: ["2L44", "2S0"],
      headbutt: ["2M"],
      hiddenpower: ["2M"],
      hyperbeam: ["2M", "1M"],
      icebeam: ["2T", "1M"],
      icepunch: ["2M"],
      icywind: ["2M"],
      irontail: ["2M"],
      megakick: ["1M"],
      megapunch: ["1M"],
      metronome: ["1M"],
      mimic: ["1M"],
      mist: ["2L55", "2S0", "1L75"],
      mudslap: ["2M"],
      nightmare: ["2M"],
      payday: ["1M"],
      protect: ["2M"],
      psychic: ["2M", "2L66", "2S0", "1M", "1L66", "1L1"],
      psychup: ["2M", "2L33", "2S0"],
      psywave: ["1M"],
      rage: ["1M"],
      raindance: ["2M"],
      recover: ["2L88", "1L70"],
      reflect: ["1M"],
      rest: ["2M", "1M"],
      return: ["2M"],
      rocksmash: ["2M"],
      safeguard: ["2L99"],
      seismictoss: ["1M"],
      selfdestruct: ["1M"],
      shadowball: ["2M"],
      skullbash: ["1M"],
      sleeptalk: ["2M"],
      snore: ["2M"],
      solarbeam: ["2M", "1M"],
      strength: ["2M", "1M"],
      submission: ["1M"],
      substitute: ["1M"],
      sunnyday: ["2M"],
      swagger: ["2M"],
      swift: ["2M", "2L22", "1L1"],
      takedown: ["1M"],
      teleport: ["1M"],
      thunder: ["2M", "1M"],
      thunderbolt: ["2T", "1M"],
      thunderpunch: ["2M"],
      thunderwave: ["1M"],
      toxic: ["2M", "1M"],
      triattack: ["1M"],
      watergun: ["1M"],
      zapcannon: ["2M"]
    },
    eventData: [
      { generation: 2, level: 70, shiny: true, moves: ["psychup", "futuresight", "mist", "psychic"] }
    ],
    encounters: [
      { generation: 1, level: 70 }
    ]
  },
  mew: {
    learnset: {
      ancientpower: ["2L50"],
      flash: ["2M", "1M"],
      metronome: ["2L30", "1M", "1L30"],
      psychic: ["2M", "2L40", "1M", "1L40"]
    },
    eventOnly: true
  },
  chikorita: {
    learnset: {
      bodyslam: ["2L29"],
      gigadrain: ["2M"],
      lightscreen: ["2L36"],
      toxic: ["2M"]
    }
  },
  bayleef: {
    learnset: {
      bodyslam: ["2L31"],
      razorleaf: ["2L8", "2L1"],
      safeguard: ["2L47"],
      synthesis: ["2L23"]
    }
  },
  meganium: {
    learnset: {
      poisonpowder: ["2L15", "2S0"],
      reflect: ["2L12", "2L1", "2S0"],
      solarbeam: ["2M", "2L61"],
      strength: ["2M"]
    }
  },
  cyndaquil: {
    learnset: {
      dig: ["2M"],
      flamethrower: ["2T", "2L46"],
      headbutt: ["2M"],
      sunnyday: ["2M"]
    }
  },
  quilava: {
    learnset: {
      fireblast: ["2M"],
      rollout: ["2M"],
      smokescreen: ["2L6", "2L1"],
      strength: ["2M"]
    }
  },
  typhlosion: {
    learnset: {
      flamewheel: ["2L31", "2S0"],
      rocksmash: ["2M"],
      smokescreen: ["2L6", "2L1", "2S0"],
      swift: ["2M", "2L45"]
    }
  },
  totodile: {
    learnset: {
      blizzard: ["2M"],
      screech: ["2L43"],
      slash: ["2L35"],
      surf: ["2M"]
    }
  },
  croconaw: {
    learnset: {
      hydropump: ["2L55"],
      icepunch: ["2M"],
      scaryface: ["2L28"],
      slash: ["2L37"]
    }
  },
  feraligatr: {
    learnset: {
      dig: ["2M"],
      dynamicpunch: ["2M"],
      leer: ["2L1"],
      watergun: ["2L13", "2L1", "2S0"]
    }
  },
  sentret: {
    learnset: {
      defensecurl: ["2M", "2L5", "2S0"],
      headbutt: ["2M"],
      rollout: ["2M"],
      shadowball: ["2M"]
    },
    encounters: [
      { generation: 2, level: 2 }
    ]
  },
  furret: {
    learnset: {
      amnesia: ["2L48"],
      icepunch: ["2M"],
      strength: ["2M"],
      thunderpunch: ["2M"]
    },
    encounters: [
      { generation: 2, level: 6 }
    ]
  },
  hoothoot: {
    learnset: {
      dreameater: ["2M", "2L48"],
      fly: ["2M"],
      hypnosis: ["2L16"],
      swift: ["2M"]
    },
    encounters: [
      { generation: 2, level: 2 }
    ]
  },
  noctowl: {
    learnset: {
      confusion: ["2L41"],
      fly: ["2M"],
      foresight: ["2L6", "2L1"],
      takedown: ["2L33"]
    },
    encounters: [
      { generation: 2, level: 7 }
    ]
  },
  ledyba: {
    learnset: {
      icepunch: ["2M"],
      reflect: ["2L22"],
      doubleedge: ["1M"],
      safeguard: ["2L22"]
    },
    encounters: [
      { generation: 2, level: 3 }
    ]
  },
  ledian: {
    learnset: {
      dig: ["2M"],
      gigadrain: ["2M"],
      hyperbeam: ["2M"],
      supersonic: ["2L8", "2L1"]
    },
    encounters: [
      { generation: 2, level: 7 }
    ]
  },
  spinarak: {
    learnset: {
      dig: ["2M"],
      leechlife: ["2L23"],
      nightshade: ["2L17"],
      sludgebomb: ["2M"]
    },
    encounters: [
      { generation: 2, level: 3 }
    ]
  },
  ariados: {
    learnset: {
      protect: ["2M"],
      sludgebomb: ["2M"],
      spiderweb: ["2L43"],
      toxic: ["2M"]
    },
    encounters: [
      { generation: 2, level: 7 }
    ]
  },
  chinchou: {
    learnset: {
      confuseray: ["2L29"],
      raindance: ["2M"],
      surf: ["2M"],
      thunder: ["2M"]
    }
  },
  lanturn: {
    learnset: {
      flail: ["2L13"],
      hydropump: ["2L53"],
      spark: ["2L25"],
      supersonic: ["2L5", "2L1"]
    }
  },
  togepi: {
    learnset: {
      attract: ["2M"],
      headbutt: ["2M"],
      metronome: ["2L7"],
      sweetkiss: ["2L18"]
    }
  },
  togetic: {
    learnset: {
      charm: ["2L1"],
      fly: ["2M"],
      doubleedge: ["1M"],
      metronome: ["2L7"]
    }
  },
  natu: {
    learnset: {
      confuseray: ["2L40"],
      futuresight: ["2L30"],
      nightshade: ["2L10"],
      psychic: ["2M", "2L50"]
    }
  },
  xatu: {
    learnset: {
      flash: ["2M"],
      fly: ["2M"],
      futuresight: ["2L35"],
      nightshade: ["2L10", "2L1"]
    },
    encounters: [
      { generation: 2, level: 15 }
    ]
  },
  mareep: {
    learnset: {
      headbutt: ["2M"],
      lightscreen: ["2L30"],
      thunder: ["2M", "2L37"],
      thunderwave: ["2L16"]
    }
  },
  flaaffy: {
    learnset: {
      cottonspore: ["2L27"],
      firepunch: ["2M"],
      lightscreen: ["2L36"],
      thunderpunch: ["2M"]
    }
  },
  ampharos: {
    learnset: {
      dynamicpunch: ["2M"],
      flash: ["2M"],
      swift: ["2M"],
      zapcannon: ["2M"]
    }
  },
  bellossom: {
    learnset: {
      poisonpowder: ["2L15"],
      attract: ["2M"],
      cut: ["2M"],
      petaldance: ["2L1"]
    }
  },
  marill: {
    learnset: {
      defensecurl: ["2M", "2L3", "2S2", "2S1", "2S0"],
      rollout: ["2M", "2L15"],
      surf: ["2M"],
      swagger: ["2M"]
    }
  },
  azumarill: {
    learnset: {
      defensecurl: ["2M", "2L3", "2L1"],
      icywind: ["2M"],
      raindance: ["2M", "2L48"],
      waterfall: ["2M"]
    }
  },
  sudowoodo: {
    learnset: {
      dig: ["2M"],
      mimic: ["2L1", "2S0"],
      rockslide: ["2L28"],
      strength: ["2M"]
    }
  },
  politoed: {
    learnset: {
      icywind: ["2M"],
      perishsong: ["2L35", "2L1"],
      swagger: ["2M", "2L51"],
      whirlpool: ["2M"]
    }
  },
  hoppip: {
    learnset: {
      gigadrain: ["2M"],
      headbutt: ["2M"],
      leechseed: ["2L20"],
      sleeppowder: ["2L17"]
    },
    encounters: [
      { generation: 2, level: 3 }
    ]
  },
  skiploom: {
    learnset: {
      headbutt: ["2M"],
      solarbeam: ["2M"],
      sunnyday: ["2M"],
      synthesis: ["2L5", "2L1"]
    }
  },
  jumpluff: {
    learnset: {
      headbutt: ["2M"],
      leechseed: ["2L22"],
      megadrain: ["2L44"],
      stunspore: ["2L15"]
    }
  },
  aipom: {
    learnset: {
      agility: ["2L46", "2E"],
      batonpass: ["2L12"],
      doubleteam: ["2M"],
      strength: ["2M"]
    }
  },
  sunkern: {
    learnset: {
      attract: ["2M"],
      gigadrain: ["2M", "2L46"],
      growth: ["2L4", "2S0"],
      sludgebomb: ["2M"]
    }
  },
  sunflora: {
    learnset: {
      growth: ["2L4"],
      hyperbeam: ["2M"],
      razorleaf: ["2L10"],
      toxic: ["2M"]
    }
  },
  yanma: {
    learnset: {
      doubleteam: ["2M", "2L13"],
      gigadrain: ["2M"],
      headbutt: ["2M"],
      swagger: ["2M"]
    }
  },
  wooper: {
    learnset: {
      amnesia: ["2L21"],
      earthquake: ["2M", "2L31"],
      icepunch: ["2M"],
      surf: ["2M"]
    },
    encounters: [
      { generation: 2, level: 4 }
    ]
  },
  quagsire: {
    learnset: {
      dig: ["2M"],
      haze: ["2L59"],
      slam: ["2L11"],
      surf: ["2M"]
    },
    encounters: [
      { generation: 2, level: 15 }
    ]
  },
  murkrow: {
    learnset: {
      fly: ["2M"],
      feintattack: ["2L28"],
      haze: ["2L16"],
      nightshade: ["2L26"]
    }
  },
  slowking: {
    learnset: {
      disable: ["2L29"],
      growl: ["2L6"],
      psychic: ["2M", "2L48"],
      watergun: ["2L15"]
    }
  },
  misdreavus: {
    learnset: {
      painsplit: ["2L36"],
      psywave: ["2L1"],
      shadowball: ["2M"],
      thunder: ["2M"]
    }
  },
  unown: {
    learnset: { hiddenpower: ["2L1"] },
    encounters: [
      { generation: 2, level: 5 }
    ]
  },
  wobbuffet: {
    learnset: {
      counter: ["2L1"],
      destinybond: ["2L1", "2S0"],
      mirrorcoat: ["2L1", "2S0"],
      safeguard: ["2L1", "2S0"]
    },
    encounters: [
      { generation: 2, level: 5 }
    ]
  },
  girafarig: {
    learnset: {
      agility: ["2L20"],
      crunch: ["2L54"],
      psybeam: ["2L41"],
      stomp: ["2L13", "2L1"]
    }
  },
  pineco: {
    learnset: {
      gigadrain: ["2M"],
      explosion: ["2L41", "1M", "1L48"],
      doubleedge: ["1M"],
      spikes: ["2L43"]
    }
  },
  forretress: {
    learnset: {
      rollout: ["2M"],
      sandstorm: ["2M"],
      spikes: ["2L49"],
      strength: ["2M"]
    }
  },
  dunsparce: {
    learnset: {
      attract: ["2M"],
      dig: ["2M"],
      glare: ["2L13"],
      strength: ["2M"]
    }
  },
  gligar: {
    learnset: {
      guillotine: ["2L52"],
      feintattack: ["2L28"],
      sandattack: ["2L11", "1L10"],
      slash: ["2L36"]
    }
  },
  steelix: {
    learnset: {
      irontail: ["2M"],
      rockthrow: ["2L14"],
      mudslap: ["2M"],
      sandstorm: ["2M", "2L36"]
    }
  },
  snubbull: {
    learnset: {
      charm: ["2L8"],
      shadowball: ["2M"],
      strength: ["2M"],
      swagger: ["2M"]
    }
  },
  granbull: {
    learnset: {
      bite: ["2L13"],
      dynamicpunch: ["2M"],
      headbutt: ["2M"],
      scaryface: ["2L1"]
    },
    encounters: [
      { generation: 2, level: 15 }
    ]
  },
  qwilfish: {
    learnset: {
      hydropump: ["2L46"],
      minimize: ["2L10"],
      pinmissile: ["2L28"],
      sludgebomb: ["2M"]
    }
  },
  shuckle: {
    learnset: {
      bide: ["2L28"],
      rollout: ["2M"],
      sandstorm: ["2M"],
      sludgebomb: ["2M"]
    }
  },
  heracross: {
    learnset: {
      leer: ["2L1", "2S0"],
      megahorn: ["2L54"],
      rocksmash: ["2M"],
      thief: ["2M"]
    }
  },
  sneasel: {
    learnset: {
      beatup: ["2L57"],
      icepunch: ["2M"],
      screech: ["2L17"],
      slash: ["2L49"]
    }
  },
  teddiursa: {
    learnset: {
      attract: ["2M"],
      earthquake: ["2M"],
      feintattack: ["2L28"],
      slash: ["2L36"]
    },
    encounters: [
      { generation: 2, level: 2 }
    ]
  },
  ursaring: {
    learnset: {
      dig: ["2M"],
      firepunch: ["2M"],
      rest: ["2M", "2L29"],
      snore: ["2M", "2L49"]
    },
    encounters: [
      { generation: 2, level: 25 }
    ]
  },
  slugma: {
    learnset: {
      amnesia: ["2L29"],
      bodyslam: ["2L50"],
      flamethrower: ["2T", "2L36"],
      rockslide: ["2L43"]
    }
  },
  magcargo: {
    learnset: {
      amnesia: ["2L29"],
      fireblast: ["2M"],
      rockslide: ["2L48"],
      smog: ["2L1"]
    }
  },
  swinub: {
    learnset: {
      blizzard: ["2M", "2L46"],
      earthquake: ["2M"],
      mist: ["2L37"],
      strength: ["2M"]
    }
  },
  piloswine: {
    learnset: {
      earthquake: ["2M"],
      furyattack: ["2L33"],
      icywind: ["2M"],
      mist: ["2L42"]
    }
  },
  corsola: {
    learnset: {
      ancientpower: ["2L43"],
      attract: ["2M"],
      mirrorcoat: ["2L37"],
      surf: ["2M"]
    }
  },
  remoraid: {
    learnset: {
      hyperbeam: ["2M", "2L55"],
      icebeam: ["2T", "2L44"],
      lockon: ["2L11"],
      surf: ["2M"]
    }
  },
  octillery: {
    learnset: {
      focusenergy: ["2L38"],
      lockon: ["2L11"],
      hyperbeam: ["2M", "2L70"],
      octazooka: ["2L25"]
    }
  },
  delibird: {
    learnset: {
      blizzard: ["2M"],
      doubleteam: ["2M"],
      fly: ["2M"],
      present: ["2L1", "2S1", "2S0"]
    }
  },
  mantine: {
    learnset: {
      supersonic: ["2L10"],
      takedown: ["2L25"],
      waterfall: ["2M"],
      wingattack: ["2L40"]
    }
  },
  skarmory: {
    learnset: {
      agility: ["2L25"],
      fly: ["2M"],
      furyattack: ["2L37"],
      steelwing: ["2M", "2L49"]
    }
  },
  houndour: {
    learnset: {
      crunch: ["2L43"],
      flamethrower: ["2T", "2L35"],
      sludgebomb: ["2M"],
      sunnyday: ["2M"]
    }
  },
  houndoom: {
    learnset: {
      bite: ["2L20"],
      ember: ["2L1"],
      roar: ["2M", "2L7"],
      swift: ["2M"]
    }
  },
  phanpy: {
    learnset: {
      doubleteam: ["2M"],
      earthquake: ["2M"],
      doubleedge: ["1M"],
      swagger: ["2M"]
    },
    encounters: [
      { generation: 2, level: 2 }
    ]
  },
  donphan: {
    learnset: {
      earthquake: ["2M", "2L49"],
      growl: ["2L1"],
      rapidspin: ["2L41"],
      sandstorm: ["2M"]
    }
  },
  stantler: {
    learnset: {
      dreameater: ["2M"],
      hypnosis: ["2L15"],
      mudslap: ["2M"],
      stomp: ["2L23"]
    }
  },
  smeargle: {
    learnset: {
      bodyslam: ["2L43"],
      machpunch: ["2E"],
      flamethrower: ["2T"],
      confuseray: ["2L37"]
    }
  },
  miltank: {
    learnset: {
      bide: ["2L26"],
      healbell: ["2L53"],
      icepunch: ["2M"],
      stomp: ["2L13"]
    }
  },
  raikou: {
    learnset: {
      flash: ["2M"],
      quickattack: ["2L31", "2S0"],
      roar: ["2M", "2L21", "2S0"],
      spark: ["2L41"]
    },
    encounters: [
      { generation: 2, level: 40 }
    ]
  },
  entei: {
    learnset: {
      fireblast: ["2M", "2L71"],
      leer: ["2L1", "2S0"],
      roar: ["2M", "2L21", "2S0"],
      rocksmash: ["2M"]
    },
    encounters: [
      { generation: 2, level: 40 }
    ]
  },
  suicune: {
    learnset: {
      bubblebeam: ["2L11", "2L41"],
      gust: ["2L31", "2S0"],
      mist: ["2L51"],
      roar: ["2M", "2L21", "2S0"]
    },
    encounters: [
      { generation: 2, level: 40 }
    ]
  },
  larvitar: {
    learnset: {
      earthquake: ["2M", "2L50"],
      hyperbeam: ["2M", "2L57"],
      rockslide: ["2L22"],
      swagger: ["2M"]
    }
  },
  pupitar: {
    learnset: {
      dig: ["2M"],
      hyperbeam: ["2M", "2L65"],
      rockslide: ["2L22"],
      screech: ["2L15", "2L1"]
    }
  },
  tyranitar: {
    learnset: {
      bite: ["2L1"],
      leer: ["2L1"],
      mudslap: ["2M"],
      sandstorm: ["2M", "2L8", "2L1"]
    }
  },
  lugia: {
    learnset: {
      aeroblast: ["2L1", "2S0"],
      ancientpower: ["2L88"],
      blizzard: ["2M"],
      curse: ["2M"],
      detect: ["2M"],
      doubleteam: ["2M"],
      dragonbreath: ["2M"],
      dreameater: ["2M"],
      earthquake: ["2M"],
      endure: ["2M"],
      fly: ["2M"],
      frustration: ["2M"],
      futuresight: ["2L99"],
      gigadrain: ["2M"],
      gust: ["2L22", "2S0"],
      headbutt: ["2M"],
      hiddenpower: ["2M"],
      hydropump: ["2L44"],
      hyperbeam: ["2M"],
      icebeam: ["2T"],
      icywind: ["2M"],
      irontail: ["2M"],
      mudslap: ["2M"],
      nightmare: ["2M"],
      protect: ["2M"],
      psychic: ["2M"],
      psychup: ["2M"],
      raindance: ["2M", "2L55"],
      recover: ["2L33", "2S0"],
      rest: ["2M"],
      return: ["2M"],
      roar: ["2M"],
      rocksmash: ["2M"],
      safeguard: ["2L11", "2S0"],
      sandstorm: ["2M"],
      shadowball: ["2M"],
      sleeptalk: ["2M"],
      snore: ["2M"],
      steelwing: ["2M"],
      strength: ["2M"],
      sunnyday: ["2M"],
      surf: ["2M"],
      swagger: ["2M"],
      swift: ["2M", "2L66"],
      thunder: ["2M"],
      thunderbolt: ["2T"],
      toxic: ["2M"],
      waterfall: ["2M"],
      whirlpool: ["2M"],
      whirlwind: ["2L77"],
      zapcannon: ["2M"]
    },
    eventData: [
      { generation: 2, level: 40, shiny: true, moves: ["aeroblast", "safeguard", "gust", "recover"] }
    ],
    encounters: [
      { generation: 2, level: 40 }
    ]
  },
  hooh: {
    learnset: {
      ancientpower: ["2L88"],
      curse: ["2M"],
      detect: ["2M"],
      doubleteam: ["2M"],
      dragonbreath: ["2M"],
      dreameater: ["2M"],
      earthquake: ["2M"],
      endure: ["2M"],
      fireblast: ["2M", "2L44"],
      flamethrower: ["2T"],
      flash: ["2M"],
      fly: ["2M"],
      frustration: ["2M"],
      futuresight: ["2L99"],
      gigadrain: ["2M"],
      gust: ["2L22", "2S0"],
      hiddenpower: ["2M"],
      hyperbeam: ["2M"],
      mudslap: ["2M"],
      nightmare: ["2M"],
      protect: ["2M"],
      psychic: ["2M"],
      psychup: ["2M"],
      raindance: ["2M"],
      recover: ["2L33", "2S0"],
      rest: ["2M"],
      return: ["2M"],
      roar: ["2M"],
      rocksmash: ["2M"],
      sacredfire: ["2L1", "2S0"],
      safeguard: ["2L11", "2S0"],
      sandstorm: ["2M"],
      shadowball: ["2M"],
      sleeptalk: ["2M"],
      snore: ["2M"],
      solarbeam: ["2M"],
      steelwing: ["2M"],
      strength: ["2M"],
      sunnyday: ["2M", "2L55"],
      swagger: ["2M"],
      swift: ["2M", "2L66"],
      thunder: ["2M"],
      thunderbolt: ["2T"],
      toxic: ["2M"],
      whirlwind: ["2L77"],
      zapcannon: ["2M"]
    },
    eventData: [
      { generation: 2, level: 40, shiny: true, moves: ["sacredfire", "safeguard", "gust", "recover"] }
    ],
    encounters: [
      { generation: 2, level: 40 }
    ]
  },
  celebi: {
    learnset: {
      ancientpower: ["2L20"],
      futuresight: ["2L30"],
      gigadrain: ["2M"],
      healbell: ["2L1", "2S0"]
    },
    eventData: [
      { generation: 2, level: 5, shiny: 1, moves: ["leechseed", "confusion", "healbell", "recover"] }
    ],
    encounters: [
      { generation: 2, level: 40 }
    ],
    eventOnly: true
  }
};
//# sourceMappingURL=learnsets.js.map
