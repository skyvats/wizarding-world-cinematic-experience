
import { Character, Spell } from './types';

export const SPELLS: Spell[] = [
  {
    id: 'expelliarmus',
    name: 'Expelliarmus',
    incantation: 'Expelliarmus',
    type: 'Charm',
    description: 'Forces whatever an opponent is holding to fly out of their hand. A signature spell of Harry Potter.',
    icon: 'bolt',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpAOm09xbYDX66eM085F50f0-8Xv-kIYQ0P7DY7gps47_h_erqHEhC6QotCP7GdIEpduq960yd7YWIXdjHECShL2cZKX8vJ8x2WTzkhchdANG2mcpingKMqebbdLdHFmscYXWwCKBJt3zILGJ1hDBqvEni0iv1jTVLaZ4Py_ITW3-sSE-RsEJnv4_D6e1NPfgjQTYFH4GyZSc3FOdObijRNnUdopwmpF51bN-VMcxgB77lJCyunwISgTosDPAGByDfn7TjYfpKzFEh'
  },
  {
    id: 'expecto-patronum',
    name: 'Expecto Patronum',
    incantation: 'Expecto Patronum',
    type: 'Charm',
    description: 'A defensive spell which conjures a spirit guardian. It is the only known defense against Dementors.',
    icon: 'pets',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRZ-XrZYTPtIyTb-LVef6nd4Bx4EsvfgDaVOcuGMDN1hot9x3PPH1nFL-ofwE02LXtejS2x3sZOmu2l5oARmbzUIGdFtoaGHME7gpRMq-DCkViRDsmU6lHGpNYMdJbvntEs_uqHq34stkoWHFkW3TbebMMHIAweC_Vpi--NZd4_2Q1-cQB7rFuQWn37xL5_loxloy6JT0h_sEOA3ZmWCfdnHBB3W4G7Do33sIy0Gylc9JB710RC_sxFvYwce06vVkyfC9S74GhNDYY'
  },
  {
    id: 'lumos',
    name: 'Lumos',
    incantation: 'Lumos',
    type: 'Charm',
    description: "Illuminates the tip of the caster's wand, allowing them to see in the dark.",
    icon: 'light_mode',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBALAMP1BeK-sd2WAt3UHHD2LaGEoZMtcMln_vBw869IRhukP-QdTxa67VgJnCZ90VCWwjlmxsyS5uzx3KKWPP_kPvoG3-0Rl_ndnWbqqJNB1ZQ-s3xh8qdh5ncT4xt1D5xWxZNfQKsrUszZY0swM42x6du-ZTwS0GiftCA7603rka_B0lSI5rdI_RKOvLOHCC_6LrlsBrWOX4R4gB5EcClT3CJw5sgF2zNvaLZOmAYVwriLj-IOCh74CQNNW0hBtBzpvP4r1ES3b6s'
  },
  {
    id: 'sectumsempra',
    name: 'Sectumsempra',
    incantation: 'Sectumsempra',
    type: 'Curse',
    description: 'A dark spell invented by Severus Snape that lacerates the target as if they have been slashed by a sword.',
    icon: 'content_cut',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkXznCHK7exvb4ZAlMNtEht24tqaqoxtcBBbgBldSZaIyCgYdlQoEBhm1FU3eLzozJmEoveAtxVOWjui8cAr4NkU1pEjkt38kaxTaSMXSyXcaOOiVK7pzw8S4drFeIon_Nj_w5hoOQv-FxnRH1uNrkS18R90kRIUbYO7Fyv_o5PmAZWDphDINWWaN6-luIrFe9PWJ1UPFozMmndzdNFvxMfRZmx8_W1mbw29ei37CtUQTUzt1TBLt2JEUutyiwke4wosx1_7Mub_NG'
  },
  {
    id: 'alohomora',
    name: 'Alohomora',
    incantation: 'Alohomora',
    type: 'Charm',
    description: "Also known as the Thief's Friend. This charm unlocks doors and other objects.",
    icon: 'lock_open',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCC8GrDUwHKIE9hyKuA6qBlkfu-iULVAAE9b6j3lyC4q8wTX1RJ2cemry09skD0hJvsVw366yTPMOP1hbs7fvqT_pKQBdBkbmpsyAWzJtSTiwUfmX702OQHoS05xo45hvPKgotFtVmCIqT4HOE71rfwbonDUHP9V6raYP6HJ26h6F-BeqkqqDIEtiw97RWxGuj-h2FC-iDOmHSGResav6LvDUThHLUGq1qqEe4PfxtYZJrsdhmseEYhmBxepUGpsDHFZLcfWNbuSXHH'
  },
  {
    id: 'wingardium-leviosa',
    name: 'Wingardium Leviosa',
    incantation: 'Wingardium Leviosa',
    type: 'Charm',
    description: "A charm used to make objects fly, or levitate. Remember: it's Levi-O-sa, not Levio-SA.",
    icon: 'flight',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBg88XtMYeFukc6xuCMO_olvX6vHLLQyCdcTXVl6giWOtdoJbKIodwGSUQMHWj7WIEj5ZsoSfg0pO2mmxBwPupNO4V0L_7MEp-aOkvRdt5rALZUa3jyQ5J9wtmuq0flxBsyegKvGtfNetRFay1f-MudfcM68LZFmqEXB3GBsZJ0fV9UBzA27wSDrCg8UJQVUzMjur77jRMcD5LSSgJoRwH2DB6jUAsmt4jgxjSN_pey4HLJ-J3CmTtqNmSoLdRwa31ipPpOETpjnEUx'
  }
];

export const CHARACTERS: Character[] = [
  {
    id: 'harry-potter',
    name: 'Harry Potter',
    house: 'Gryffindor',
    houseColor: 'bg-red-700',
    patronus: 'Stag',
    status: 'Alive',
    quote: '"The Boy Who Lived"',
    actor: 'Daniel Radcliffe',
    biography: [
      "Harry James Potter (b. 31 July 1980) was an English half-blood wizard, one of the most famous wizards of modern times.",
      "He was the only child and son of James and Lily Potter, both members of the original Order of the Phoenix.",
      "Harry's birth was overshadowed by a prophecy, naming either himself or Neville Longbottom as the one with the power to vanquish Lord Voldemort."
    ],
    wand: {
      wood: 'Holly',
      core: 'Phoenix Feather',
      length: '11 Inches',
      flexibility: 'Nice and Supple'
    },
    appearances: [
      "Philosopher's Stone",
      "Chamber of Secrets",
      "Prisoner of Azkaban",
      "Goblet of Fire"
    ],
    abilities: [
      'Defense Against the Dark Arts',
      'Flying (Seeker)',
      'Parseltongue (Formerly)',
      'Dueling'
    ],
    signatureSpells: ['expelliarmus', 'expecto-patronum', 'lumos'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzXZ2lavjSE5DwdnT1mu9rjM0MwxmOM1pDM8sj4Vf4_pYU5t2wECNoInFR1srfVf2gxoe6cUnUCz_aMyZ2odDp33Ms3W1Brn_jYCbjh7v7oz84Jm-rjyoc107MwBOaBHlmpbMVwB-ttR5XANDyEY4YZ5xIgs00eAU81tZ0Gznru7H9in16-Loq4xA5rhxrNRg8TL_hTqdJsZH7r9DKT_eHZv6Qjq9hYNY6FIe-XPe6MSlmcza2J3jJSm7eRSygVlJMaBeRjAWPC3Ym',
    bannerImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBiIwVdL3Hq4yHFVI-wQNq5h3yczoE82EGBpol0B71Jn-sMYUVxz2DF5NN2D4FJlpvBjOWNj7rNBaByiYa20dJxSdjT8MrZbFlQ6VAzC6AbC_fdxtDI2Y4u9DBR9h0ARLpzQPRxs96qI_IJkFdATpBuM6VrtRjYljWAFmNz61ebNqFufxuH_pCLKtmljleMPDfPWMxWjup3ynjC5bHMwkjHig7r4tyqFFlJrNGLbF2zLxCJjhSQOuGwC2u1TRfrUPOi1Uj9nnoRRnN4'
  },
  {
    id: 'hermione-granger',
    name: 'Hermione Granger',
    house: 'Gryffindor',
    houseColor: 'bg-red-700',
    patronus: 'Otter',
    status: 'Alive',
    quote: '"The Brightest Witch of Her Age"',
    actor: 'Emma Watson',
    biography: [
      "Hermione Jean Granger (b. 19 September 1979) was an English Muggle-born witch, the daughter of Mr and Mrs Granger.",
      "She learned of her magical nature at age eleven and was accepted into Hogwarts School of Witchcraft and Wizardry.",
      "A brilliant student, she was sorted into Gryffindor, despite her great intelligence and preference for following rules."
    ],
    wand: {
      wood: 'Vine',
      core: 'Dragon Heartstring',
      length: '10.75 Inches',
      flexibility: 'Supple'
    },
    appearances: [
      "Philosopher's Stone",
      "Deathly Hallows"
    ],
    abilities: [
      'Advanced Charms',
      'Arithmancy',
      'Logical Deduction',
      'Transfiguration'
    ],
    signatureSpells: ['wingardium-leviosa', 'alohomora'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWRdnf21tz3PyQ0z6iL6FtPB92soqkFHfaIahNvYIQ-mBOL6nQhDsn4jduvOCYGQfb879r4a5n2DlfnOgYLJU27ny915xqx_hZunkwU0SsjcG_eWfj9dQTzqPjE7xuCkKtDkoh-aFh6FBFDkyLLFkMXaTGuWuHY5av74HwRmaq5IJVNyfbe6Usd8lQ8IVXFqmtFgf13pisjDFiwk8Xkg6jMnrGm6ik2MZIRIfx8TFnCTf4w8NpmGqvzl08pMobzJRqdi0rcoEEq3JT',
    bannerImage: 'https://picsum.photos/seed/hermione/1920/1080'
  },
  {
    id: 'ron-weasley',
    name: 'Ron Weasley',
    house: 'Gryffindor',
    houseColor: 'bg-red-700',
    patronus: 'Jack Russell Terrier',
    status: 'Alive',
    quote: '"King Weasley"',
    actor: 'Rupert Grint',
    biography: [
      "Ronald Bilius Weasley (b. 1 March 1980) was an English pure-blood wizard, the sixth and youngest son of Arthur and Molly Weasley.",
      "He was also the younger brother of Bill, Charlie, Percy, Fred, George, and the elder brother of Ginny.",
      "Ron began attending Hogwarts in 1991 and was sorted into Gryffindor House."
    ],
    wand: {
      wood: 'Willow',
      core: 'Unicorn Hair',
      length: '14 Inches',
      flexibility: 'Slightly springy'
    },
    appearances: [
      "Philosopher's Stone",
      "Chamber of Secrets"
    ],
    abilities: [
      'Wizard Chess',
      'Quidditch (Keeper)',
      'Dueling',
      'Loyalty'
    ],
    signatureSpells: ['expelliarmus', 'lumos'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBG0cffBInKP6EAhN98bYt-Dv3uZLKtl0430m9S10beoVsTsgJpJWJ3UPCEUazxBMjeQJeibQ-zV9TgzIJ1C0_26MJC4u5_lkJxro-xgNh5YPfDSuhNOGYSuTjAa-eMe7PZEXy6KKacOrOqLzm3sFlDEbFV4f5FhOkhsKO2olMJOVRH3ZmT7GCGqDDr7mmZv3833UdvjLZgem4uhCsqYBUjzCID48F2qPh5FM7PofcXwiZu0S18bFZw34-cG7o8TVhVazU9z_-WuZKY',
    bannerImage: 'https://picsum.photos/seed/ron/1920/1080'
  },
  {
    id: 'albus-dumbledore',
    name: 'Albus Dumbledore',
    house: 'Gryffindor',
    houseColor: 'bg-red-700',
    patronus: 'Phoenix',
    status: 'Deceased',
    quote: '"Happiness can be found, even in the darkest of times, if one only remembers to turn on the light."',
    actor: 'Michael Gambon',
    biography: [
      "Albus Percival Wulfric Brian Dumbledore was an English half-blood wizard.",
      "He was the Headmaster of Hogwarts School of Witchcraft and Wizardry and the founder and leader of the Order of the Phoenix.",
      "Dumbledore was considered to be the most powerful wizard of his time."
    ],
    wand: {
      wood: 'Elder',
      core: 'Thestral Tail Hair',
      length: '15 Inches',
      flexibility: 'Unyielding'
    },
    appearances: [
      "Philosopher's Stone",
      "Order of the Phoenix"
    ],
    abilities: [
      'Wandless Magic',
      'Non-verbal Spells',
      'Alchemy',
      'Legilimency'
    ],
    signatureSpells: ['expecto-patronum', 'lumos'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtusdnjjxJ2zk2Bu5zP8QV1L4CsMRRKo8oW7ofTdKRbGU5yt0pX7I_ECQwubWS_0Xh7XmJEh0wRvnYQemDn5iFigMkjCISziObOseK3bTrowH3i1m-hpxkEE3IuGTdtAOz6JZXWRksPoskAHX-G4bvCn8q1RvcaZLBHU2yZZZhI61BOaA3R0NZ-W-cCDqoBy85UMSpGZAOpzCEc1fNGVAdfj2vBTiO52lhAdKBDVMP67Cm_l3JBFSHmCAnqi8YXq3WeW_f4vri1pFc',
    bannerImage: 'https://picsum.photos/seed/dumbledore/1920/1080'
  },
  {
    id: 'severus-snape',
    name: 'Severus Snape',
    house: 'Slytherin',
    houseColor: 'bg-green-700',
    patronus: 'Doe',
    status: 'Deceased',
    quote: '"Always."',
    actor: 'Alan Rickman',
    biography: [
      "Severus Snape (b. 9 January 1960) was an English half-blood wizard.",
      "A member of both the Death Eaters and the Order of the Phoenix, he played a crucial role in both Wizarding Wars.",
      "His cold exterior masked a deep capacity for love and sacrifice."
    ],
    wand: {
      wood: 'Ebony',
      core: 'Dragon Heartstring',
      length: '12.5 Inches',
      flexibility: 'Rigid'
    },
    appearances: [
      "Half-Blood Prince",
      "Deathly Hallows"
    ],
    abilities: [
      'Potions Master',
      'Occlumency',
      'Dark Arts',
      'Flight'
    ],
    signatureSpells: ['sectumsempra', 'expecto-patronum'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBa_WXUZpffdjIl3frGamiJFQSzsm2_NDly2gqbfwB0IoqvpUa4qtkT0lTjfY5-E5acpV7PRfzbH2riDcFC4U3kWS1BAswJc8KaJESAw69haLUOl9ANR8qWFcnve-GKzimXCg3eIw9c0uB1cdpyhSfJBWWbsLhOOb-luGXzd3YSGDJx_qkxyNYgMZabfMftSMmhH_UtHEenzuJyLvqvSOnk3ign_81WqdLRlcFiEJBv73Y5Kv-t-r8KHE37uBj_3mQR0_DncUVo83VQ',
    bannerImage: 'https://picsum.photos/seed/snape/1920/1080'
  },
  {
    id: 'lord-voldemort',
    name: 'Lord Voldemort',
    house: 'Slytherin',
    houseColor: 'bg-green-700',
    patronus: 'None',
    status: 'Deceased',
    quote: '"There is no good and evil, there is only power and those too weak to seek it."',
    actor: 'Ralph Fiennes',
    biography: [
      "Tom Marvolo Riddle (b. 31 December 1926) was an English half-blood wizard who became the most dangerous Dark Wizard of all time.",
      "He sought to achieve immortality and pure-blood supremacy.",
      "Voldemort was the leader of the Death Eaters and the main antagonist of the Harry Potter series."
    ],
    wand: {
      wood: 'Yew',
      core: 'Phoenix Feather',
      length: '13.5 Inches',
      flexibility: 'Brittle'
    },
    appearances: [
      "Goblet of Fire",
      "Deathly Hallows"
    ],
    abilities: [
      'Dark Arts',
      'Parseltongue',
      'Horcrux Creation',
      'Flight'
    ],
    signatureSpells: ['sectumsempra'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsxSHAHlYCTTj1HAmVGtMx3FC1B5DTyyqVO8kQc56VkcqTMUbuI63n44XTTDGdkjyl6tEVxQ13s7vnxpuNsOKiHv1C2D7Oqg0-moGYMwvDgb5mKheVL2xyC-6XQXMqWV9qeJayRh4Rt7zAizef4zbZMj1HDy9_baI-GWufcya2v_GYtAV8r42ljBBI9n2mHBp7ur0lXlKIUV_w-JZ-9ypWhpc8UFbHYN3x9vjBN7dlLJucg9G0O4yZPciz_536zRpg2Uhxm7Ke7Nog',
    bannerImage: 'https://picsum.photos/seed/voldemort/1920/1080'
  }
];
