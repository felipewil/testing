// ==UserScript==
// @name         Wordle Solver
// @version      0.0.1
// @description  Solves wordle puzzle.
// @author       Felipe
// @match        *
// @grant        GM.registerButton
// @noframes
// ==/UserScript==
console.log('test');
(() => {
  const solve = () => {
    var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    // prettier-ignore
    const VALID_SOLUTIONS = ['cigar', 'rebut', 'sissy', 'humph', 'awake', 'blush', 'focal', 'evade', 'naval', 'serve', 'heath', 'dwarf', 'model', 'karma', 'stink', 'grade', 'quiet', 'bench', 'abate', 'feign', 'major', 'death', 'fresh', 'crust', 'stool', 'colon', 'abase', 'marry', 'react', 'batty', 'pride', 'floss', 'helix', 'croak', 'staff', 'paper', 'unfed', 'whelp', 'trawl', 'outdo', 'adobe', 'crazy', 'sower', 'repay', 'digit', 'crate', 'cluck', 'spike', 'mimic', 'pound', 'maxim', 'linen', 'unmet', 'flesh', 'booby', 'forth', 'first', 'stand', 'belly', 'ivory', 'seedy', 'print', 'yearn', 'drain', 'bribe', 'stout', 'panel', 'crass', 'flume', 'offal', 'agree', 'error', 'swirl', 'argue', 'bleed', 'delta', 'flick', 'totem', 'wooer', 'front', 'shrub', 'parry', 'biome', 'lapel', 'start', 'greet', 'goner', 'golem', 'lusty', 'loopy', 'round', 'audit', 'lying', 'gamma', 'labor', 'islet', 'civic', 'forge', 'corny', 'moult', 'basic', 'salad', 'agate', 'spicy', 'spray', 'essay', 'fjord', 'spend', 'kebab', 'guild', 'aback', 'motor', 'alone', 'hatch', 'hyper', 'thumb', 'dowry', 'ought', 'belch', 'dutch', 'pilot', 'tweed', 'comet', 'jaunt', 'enema', 'steed', 'abyss', 'growl', 'fling', 'dozen', 'boozy', 'erode', 'world', 'gouge', 'click', 'briar', 'great', 'altar', 'pulpy', 'blurt', 'coast', 'duchy', 'groin', 'fixer', 'group', 'rogue', 'badly', 'smart', 'pithy', 'gaudy', 'chill', 'heron', 'vodka', 'finer', 'surer', 'radio', 'rouge', 'perch', 'retch', 'wrote', 'clock', 'tilde', 'store', 'prove', 'bring', 'solve', 'cheat', 'grime', 'exult', 'usher', 'epoch', 'triad', 'break', 'rhino', 'viral', 'conic', 'masse', 'sonic', 'vital', 'trace', 'using', 'peach', 'champ', 'baton', 'brake', 'pluck', 'craze', 'gripe', 'weary', 'picky', 'acute', 'ferry', 'aside', 'tapir', 'troll', 'unify', 'rebus', 'boost', 'truss', 'siege', 'tiger', 'banal', 'slump', 'crank', 'gorge', 'query', 'drink', 'favor', 'abbey', 'tangy', 'panic', 'solar', 'shire', 'proxy', 'point', 'robot', 'prick', 'wince', 'crimp', 'knoll', 'sugar', 'whack', 'mount', 'perky', 'could', 'wrung', 'light', 'those', 'moist', 'shard', 'pleat', 'aloft', 'skill', 'elder', 'frame', 'humor', 'pause', 'ulcer', 'ultra', 'robin', 'cynic', 'agora', 'aroma', 'caulk', 'shake', 'pupal', 'dodge', 'swill', 'tacit', 'other', 'thorn', 'trove', 'bloke', 'vivid', 'spill', 'chant', 'choke', 'rupee', 'nasty', 'mourn', 'ahead', 'brine', 'cloth', 'hoard', 'sweet', 'month', 'lapse', 'watch', 'today', 'focus', 'smelt', 'tease', 'cater', 'movie', 'lynch', 'saute', 'allow', 'renew', 'their', 'slosh', 'purge', 'chest', 'depot', 'epoxy', 'nymph', 'found', 'shall', 'harry', 'stove', 'lowly', 'snout', 'trope', 'fewer', 'shawl', 'natal', 'fibre', 'comma', 'foray', 'scare', 'stair', 'black', 'squad', 'royal', 'chunk', 'mince', 'slave', 'shame', 'cheek', 'ample', 'flair', 'foyer', 'cargo', 'oxide', 'plant', 'olive', 'inert', 'askew', 'heist', 'shown', 'zesty', 'hasty', 'trash', 'fella', 'larva', 'forgo', 'story', 'hairy', 'train', 'homer', 'badge', 'midst', 'canny', 'fetus', 'butch', 'farce', 'slung', 'tipsy', 'metal', 'yield', 'delve', 'being', 'scour', 'glass', 'gamer', 'scrap', 'money', 'hinge', 'album', 'vouch', 'asset', 'tiara', 'crept', 'bayou', 'atoll', 'manor', 'creak', 'showy', 'phase', 'froth', 'depth', 'gloom', 'flood', 'trait', 'girth', 'piety', 'payer', 'goose', 'float', 'donor', 'atone', 'primo', 'apron', 'blown', 'cacao', 'loser', 'input', 'gloat', 'awful', 'brink', 'smite', 'beady', 'rusty', 'retro', 'droll', 'gawky', 'hutch', 'pinto', 'gaily', 'egret', 'lilac', 'sever', 'field', 'fluff', 'hydro', 'flack', 'agape', 'wench', 'voice', 'stead', 'stalk', 'berth', 'madam', 'night', 'bland', 'liver', 'wedge', 'augur', 'roomy', 'wacky', 'flock', 'angry', 'bobby', 'trite', 'aphid', 'tryst', 'midge', 'power', 'elope', 'cinch', 'motto', 'stomp', 'upset', 'bluff', 'cramp', 'quart', 'coyly', 'youth', 'rhyme', 'buggy', 'alien', 'smear', 'unfit', 'patty', 'cling', 'glean', 'label', 'hunky', 'khaki', 'poker', 'gruel', 'twice', 'twang', 'shrug', 'treat', 'unlit', 'waste', 'merit', 'woven', 'octal', 'needy', 'clown', 'widow', 'irony', 'ruder', 'gauze', 'chief', 'onset', 'prize', 'fungi', 'charm', 'gully', 'inter', 'whoop', 'taunt', 'leery', 'class', 'theme', 'lofty', 'tibia', 'booze', 'alpha', 'thyme', 'eclat', 'doubt', 'parer', 'chute', 'stick', 'trice', 'alike', 'sooth', 'recap', 'saint', 'liege', 'glory', 'grate', 'admit', 'brisk', 'soggy', 'usurp', 'scald', 'scorn', 'leave', 'twine', 'sting', 'bough', 'marsh', 'sloth', 'dandy', 'vigor', 'howdy', 'enjoy', 'valid', 'ionic', 'equal', 'unset', 'floor', 'catch', 'spade', 'stein', 'exist', 'quirk', 'denim', 'grove', 'spiel', 'mummy', 'fault', 'foggy', 'flout', 'carry', 'sneak', 'libel', 'waltz', 'aptly', 'piney', 'inept', 'aloud', 'photo', 'dream', 'stale', 'vomit', 'ombre', 'fanny', 'unite', 'snarl', 'baker', 'there', 'glyph', 'pooch', 'hippy', 'spell', 'folly', 'louse', 'gulch', 'vault', 'godly', 'threw', 'fleet', 'grave', 'inane', 'shock', 'crave', 'spite', 'valve', 'skimp', 'claim', 'rainy', 'musty', 'pique', 'daddy', 'quasi', 'arise', 'aging', 'valet', 'opium', 'avert', 'stuck', 'recut', 'mulch', 'genre', 'plume', 'rifle', 'count', 'incur', 'total', 'wrest', 'mocha', 'deter', 'study', 'lover', 'safer', 'rivet', 'funny', 'smoke', 'mound', 'undue', 'sedan', 'pagan', 'swine', 'guile', 'gusty', 'equip', 'tough', 'canoe', 'chaos', 'covet', 'human', 'udder', 'lunch', 'blast', 'stray', 'manga', 'melee', 'lefty', 'quick', 'paste', 'given', 'octet', 'risen', 'groan', 'leaky', 'grind', 'carve', 'loose', 'sadly', 'spilt', 'apple', 'slack', 'honey', 'final', 'sheen', 'eerie', 'minty', 'slick', 'derby', 'wharf', 'spelt', 'coach', 'erupt', 'singe', 'price', 'spawn', 'fairy', 'jiffy', 'filmy', 'stack', 'chose', 'sleep', 'ardor', 'nanny', 'niece', 'woozy', 'handy', 'grace', 'ditto', 'stank', 'cream', 'usual', 'diode', 'valor', 'angle', 'ninja', 'muddy', 'chase', 'reply', 'prone', 'spoil', 'heart', 'shade', 'diner', 'arson', 'onion', 'sleet', 'dowel', 'couch', 'palsy', 'bowel', 'smile', 'evoke', 'creek', 'lance', 'eagle', 'idiot', 'siren', 'built', 'embed', 'award', 'dross', 'annul', 'goody', 'frown', 'patio', 'laden', 'humid', 'elite', 'lymph', 'edify', 'might', 'reset', 'visit', 'gusto', 'purse', 'vapor', 'crock', 'write', 'sunny', 'loath', 'chaff', 'slide', 'queer', 'venom', 'stamp', 'sorry', 'still', 'acorn', 'aping', 'pushy', 'tamer', 'hater', 'mania', 'awoke', 'brawn', 'swift', 'exile', 'birch', 'lucky', 'freer', 'risky', 'ghost', 'plier', 'lunar', 'winch', 'snare', 'nurse', 'house', 'borax', 'nicer', 'lurch', 'exalt', 'about', 'savvy', 'toxin', 'tunic', 'pried', 'inlay', 'chump', 'lanky', 'cress', 'eater', 'elude', 'cycle', 'kitty', 'boule', 'moron', 'tenet', 'place', 'lobby', 'plush', 'vigil', 'index', 'blink', 'clung', 'qualm', 'croup', 'clink', 'juicy', 'stage', 'decay', 'nerve', 'flier', 'shaft', 'crook', 'clean', 'china', 'ridge', 'vowel', 'gnome', 'snuck', 'icing', 'spiny', 'rigor', 'snail', 'flown', 'rabid', 'prose', 'thank', 'poppy', 'budge', 'fiber', 'moldy', 'dowdy', 'kneel', 'track', 'caddy', 'quell', 'dumpy', 'paler', 'swore', 'rebar', 'scuba', 'splat', 'flyer', 'horny', 'mason', 'doing', 'ozone', 'amply', 'molar', 'ovary', 'beset', 'queue', 'cliff', 'magic', 'truce', 'sport', 'fritz', 'edict', 'twirl', 'verse', 'llama', 'eaten', 'range', 'whisk', 'hovel', 'rehab', 'macaw', 'sigma', 'spout', 'verve', 'sushi', 'dying', 'fetid', 'brain', 'buddy', 'thump', 'scion', 'candy', 'chord', 'basin', 'march', 'crowd', 'arbor', 'gayly', 'musky', 'stain', 'dally', 'bless', 'bravo', 'stung', 'title', 'ruler', 'kiosk', 'blond', 'ennui', 'layer', 'fluid', 'tatty', 'score', 'cutie', 'zebra', 'barge', 'matey', 'bluer', 'aider', 'shook', 'river', 'privy', 'betel', 'frisk', 'bongo', 'begun', 'azure', 'weave', 'genie', 'sound', 'glove', 'braid', 'scope', 'wryly', 'rover', 'assay', 'ocean', 'bloom', 'irate', 'later', 'woken', 'silky', 'wreck', 'dwelt', 'slate', 'smack', 'solid', 'amaze', 'hazel', 'wrist', 'jolly', 'globe', 'flint', 'rouse', 'civil', 'vista', 'relax', 'cover', 'alive', 'beech', 'jetty', 'bliss', 'vocal', 'often', 'dolly', 'eight', 'joker', 'since', 'event', 'ensue', 'shunt', 'diver', 'poser', 'worst', 'sweep', 'alley', 'creed', 'anime', 'leafy', 'bosom', 'dunce', 'stare', 'pudgy', 'waive', 'choir', 'stood', 'spoke', 'outgo', 'delay', 'bilge', 'ideal', 'clasp', 'seize', 'hotly', 'laugh', 'sieve', 'block', 'meant', 'grape', 'noose', 'hardy', 'shied', 'drawl', 'daisy', 'putty', 'strut', 'burnt', 'tulip', 'crick', 'idyll', 'vixen', 'furor', 'geeky', 'cough', 'naive', 'shoal', 'stork', 'bathe', 'aunty', 'check', 'prime', 'brass', 'outer', 'furry', 'razor', 'elect', 'evict', 'imply', 'demur', 'quota', 'haven', 'cavil', 'swear', 'crump', 'dough', 'gavel', 'wagon', 'salon', 'nudge', 'harem', 'pitch', 'sworn', 'pupil', 'excel', 'stony', 'cabin', 'unzip', 'queen', 'trout', 'polyp', 'earth', 'storm', 'until', 'taper', 'enter', 'child', 'adopt', 'minor', 'fatty', 'husky', 'brave', 'filet', 'slime', 'glint', 'tread', 'steal', 'regal', 'guest', 'every', 'murky', 'share', 'spore', 'hoist', 'buxom', 'inner', 'otter', 'dimly', 'level', 'sumac', 'donut', 'stilt', 'arena', 'sheet', 'scrub', 'fancy', 'slimy', 'pearl', 'silly', 'porch', 'dingo', 'sepia', 'amble', 'shady', 'bread', 'friar', 'reign', 'dairy', 'quill', 'cross', 'brood', 'tuber', 'shear', 'posit', 'blank', 'villa', 'shank', 'piggy', 'freak', 'which', 'among', 'fecal', 'shell', 'would', 'algae', 'large', 'rabbi', 'agony', 'amuse', 'bushy', 'copse', 'swoon', 'knife', 'pouch', 'ascot', 'plane', 'crown', 'urban', 'snide', 'relay', 'abide', 'viola', 'rajah', 'straw', 'dilly', 'crash', 'amass', 'third', 'trick', 'tutor', 'woody', 'blurb', 'grief', 'disco', 'where', 'sassy', 'beach', 'sauna', 'comic', 'clued', 'creep', 'caste', 'graze', 'snuff', 'frock', 'gonad', 'drunk', 'prong', 'lurid', 'steel', 'halve', 'buyer', 'vinyl', 'utile', 'smell', 'adage', 'worry', 'tasty', 'local', 'trade', 'finch', 'ashen', 'modal', 'gaunt', 'clove', 'enact', 'adorn', 'roast', 'speck', 'sheik', 'missy', 'grunt', 'snoop', 'party', 'touch', 'mafia', 'emcee', 'array', 'south', 'vapid', 'jelly', 'skulk', 'angst', 'tubal', 'lower', 'crest', 'sweat', 'cyber', 'adore', 'tardy', 'swami', 'notch', 'groom', 'roach', 'hitch', 'young', 'align', 'ready', 'frond', 'strap', 'puree', 'realm', 'venue', 'swarm', 'offer', 'seven', 'dryer', 'diary', 'dryly', 'drank', 'acrid', 'heady', 'theta', 'junto', 'pixie', 'quoth', 'bonus', 'shalt', 'penne', 'amend', 'datum', 'build', 'piano', 'shelf', 'lodge', 'suing', 'rearm', 'coral', 'ramen', 'worth', 'psalm', 'infer', 'overt', 'mayor', 'ovoid', 'glide', 'usage', 'poise', 'randy', 'chuck', 'prank', 'fishy', 'tooth', 'ether', 'drove', 'idler', 'swath', 'stint', 'while', 'begat', 'apply', 'slang', 'tarot', 'radar', 'credo', 'aware', 'canon', 'shift', 'timer', 'bylaw', 'serum', 'three', 'steak', 'iliac', 'shirk', 'blunt', 'puppy', 'penal', 'joist', 'bunny', 'shape', 'beget', 'wheel', 'adept', 'stunt', 'stole', 'topaz', 'chore', 'fluke', 'afoot', 'bloat', 'bully', 'dense', 'caper', 'sneer', 'boxer', 'jumbo', 'lunge', 'space', 'avail', 'short', 'slurp', 'loyal', 'flirt', 'pizza', 'conch', 'tempo', 'droop', 'plate', 'bible', 'plunk', 'afoul', 'savoy', 'steep', 'agile', 'stake', 'dwell', 'knave', 'beard', 'arose', 'motif', 'smash', 'broil', 'glare', 'shove', 'baggy', 'mammy', 'swamp', 'along', 'rugby', 'wager', 'quack', 'squat', 'snaky', 'debit', 'mange', 'skate', 'ninth', 'joust', 'tramp', 'spurn', 'medal', 'micro', 'rebel', 'flank', 'learn', 'nadir', 'maple', 'comfy', 'remit', 'gruff', 'ester', 'least', 'mogul', 'fetch', 'cause', 'oaken', 'aglow', 'meaty', 'gaffe', 'shyly', 'racer', 'prowl', 'thief', 'stern', 'poesy', 'rocky', 'tweet', 'waist', 'spire', 'grope', 'havoc', 'patsy', 'truly', 'forty', 'deity', 'uncle', 'swish', 'giver', 'preen', 'bevel', 'lemur', 'draft', 'slope', 'annoy', 'lingo', 'bleak', 'ditty', 'curly', 'cedar', 'dirge', 'grown', 'horde', 'drool', 'shuck', 'crypt', 'cumin', 'stock', 'gravy', 'locus', 'wider', 'breed', 'quite', 'chafe', 'cache', 'blimp', 'deign', 'fiend', 'logic', 'cheap', 'elide', 'rigid', 'false', 'renal', 'pence', 'rowdy', 'shoot', 'blaze', 'envoy', 'posse', 'brief', 'never', 'abort', 'mouse', 'mucky', 'sulky', 'fiery', 'media', 'trunk', 'yeast', 'clear', 'skunk', 'scalp', 'bitty', 'cider', 'koala', 'duvet', 'segue', 'creme', 'super', 'grill', 'after', 'owner', 'ember', 'reach', 'nobly', 'empty', 'speed', 'gipsy', 'recur', 'smock', 'dread', 'merge', 'burst', 'kappa', 'amity', 'shaky', 'hover', 'carol', 'snort', 'synod', 'faint', 'haunt', 'flour', 'chair', 'detox', 'shrew', 'tense', 'plied', 'quark', 'burly', 'novel', 'waxen', 'stoic', 'jerky', 'blitz', 'beefy', 'lyric', 'hussy', 'towel', 'quilt', 'below', 'bingo', 'wispy', 'brash', 'scone', 'toast', 'easel', 'saucy', 'value', 'spice', 'honor', 'route', 'sharp', 'bawdy', 'radii', 'skull', 'phony', 'issue', 'lager', 'swell', 'urine', 'gassy', 'trial', 'flora', 'upper', 'latch', 'wight', 'brick', 'retry', 'holly', 'decal', 'grass', 'shack', 'dogma', 'mover', 'defer', 'sober', 'optic', 'crier', 'vying', 'nomad', 'flute', 'hippo', 'shark', 'drier', 'obese', 'bugle', 'tawny', 'chalk', 'feast', 'ruddy', 'pedal', 'scarf', 'cruel', 'bleat', 'tidal', 'slush', 'semen', 'windy', 'dusty', 'sally', 'igloo', 'nerdy', 'jewel', 'shone', 'whale', 'hymen', 'abuse', 'fugue', 'elbow', 'crumb', 'pansy', 'welsh', 'syrup', 'terse', 'suave', 'gamut', 'swung', 'drake', 'freed', 'afire', 'shirt', 'grout', 'oddly', 'tithe', 'plaid', 'dummy', 'broom', 'blind', 'torch', 'enemy', 'again', 'tying', 'pesky', 'alter', 'gazer', 'noble', 'ethos', 'bride', 'extol', 'decor', 'hobby', 'beast', 'idiom', 'utter', 'these', 'sixth', 'alarm', 'erase', 'elegy', 'spunk', 'piper', 'scaly', 'scold', 'hefty', 'chick', 'sooty', 'canal', 'whiny', 'slash', 'quake', 'joint', 'swept', 'prude', 'heavy', 'wield', 'femme', 'lasso', 'maize', 'shale', 'screw', 'spree', 'smoky', 'whiff', 'scent', 'glade', 'spent', 'prism', 'stoke', 'riper', 'orbit', 'cocoa', 'guilt', 'humus', 'shush', 'table', 'smirk', 'wrong', 'noisy', 'alert', 'shiny', 'elate', 'resin', 'whole', 'hunch', 'pixel', 'polar', 'hotel', 'sword', 'cleat', 'mango', 'rumba', 'puffy', 'filly', 'billy', 'leash', 'clout', 'dance', 'ovate', 'facet', 'chili', 'paint', 'liner', 'curio', 'salty', 'audio', 'snake', 'fable', 'cloak', 'navel', 'spurt', 'pesto', 'balmy', 'flash', 'unwed', 'early', 'churn', 'weedy', 'stump', 'lease', 'witty', 'wimpy', 'spoof', 'saner', 'blend', 'salsa', 'thick', 'warty', 'manic', 'blare', 'squib', 'spoon', 'probe', 'crepe', 'knack', 'force', 'debut', 'order', 'haste', 'teeth', 'agent', 'widen', 'icily', 'slice', 'ingot', 'clash', 'juror', 'blood', 'abode', 'throw', 'unity', 'pivot', 'slept', 'troop', 'spare', 'sewer', 'parse', 'morph', 'cacti', 'tacky', 'spool', 'demon', 'moody', 'annex', 'begin', 'fuzzy', 'patch', 'water', 'lumpy', 'admin', 'omega', 'limit', 'tabby', 'macho', 'aisle', 'skiff', 'basis', 'plank', 'verge', 'botch', 'crawl', 'lousy', 'slain', 'cubic', 'raise', 'wrack', 'guide', 'foist', 'cameo', 'under', 'actor', 'revue', 'fraud', 'harpy', 'scoop', 'climb', 'refer', 'olden', 'clerk', 'debar', 'tally', 'ethic', 'cairn', 'tulle', 'ghoul', 'hilly', 'crude', 'apart', 'scale', 'older', 'plain', 'sperm', 'briny', 'abbot', 'rerun', 'quest', 'crisp', 'bound', 'befit', 'drawn', 'suite', 'itchy', 'cheer', 'bagel', 'guess', 'broad', 'axiom', 'chard', 'caput', 'leant', 'harsh', 'curse', 'proud', 'swing', 'opine', 'taste', 'lupus', 'gumbo', 'miner', 'green', 'chasm', 'lipid', 'topic', 'armor', 'brush', 'crane', 'mural', 'abled', 'habit', 'bossy', 'maker', 'dusky', 'dizzy', 'lithe', 'brook', 'jazzy', 'fifty', 'sense', 'giant', 'surly', 'legal', 'fatal', 'flunk', 'began', 'prune', 'small', 'slant', 'scoff', 'torus', 'ninny', 'covey', 'viper', 'taken', 'moral', 'vogue', 'owing', 'token', 'entry', 'booth', 'voter', 'chide', 'elfin', 'ebony', 'neigh', 'minim', 'melon', 'kneed', 'decoy', 'voila', 'ankle', 'arrow', 'mushy', 'tribe', 'cease', 'eager', 'birth', 'graph', 'odder', 'terra', 'weird', 'tried', 'clack', 'color', 'rough', 'weigh', 'uncut', 'ladle', 'strip', 'craft', 'minus', 'dicey', 'titan', 'lucid', 'vicar', 'dress', 'ditch', 'gypsy', 'pasta', 'taffy', 'flame', 'swoop', 'aloof', 'sight', 'broke', 'teary', 'chart', 'sixty', 'wordy', 'sheer', 'leper', 'nosey', 'bulge', 'savor', 'clamp', 'funky', 'foamy', 'toxic', 'brand', 'plumb', 'dingy', 'butte', 'drill', 'tripe', 'bicep', 'tenor', 'krill', 'worse', 'drama', 'hyena', 'think', 'ratio', 'cobra', 'basil', 'scrum', 'bused', 'phone', 'court', 'camel', 'proof', 'heard', 'angel', 'petal', 'pouty', 'throb', 'maybe', 'fetal', 'sprig', 'spine', 'shout', 'cadet', 'macro', 'dodgy', 'satyr', 'rarer', 'binge', 'trend', 'nutty', 'leapt', 'amiss', 'split', 'myrrh', 'width', 'sonar', 'tower', 'baron', 'fever', 'waver', 'spark', 'belie', 'sloop', 'expel', 'smote', 'baler', 'above', 'north', 'wafer', 'scant', 'frill', 'awash', 'snack', 'scowl', 'frail', 'drift', 'limbo', 'fence', 'motel', 'ounce', 'wreak', 'revel', 'talon', 'prior', 'knelt', 'cello', 'flake', 'debug', 'anode', 'crime', 'salve', 'scout', 'imbue', 'pinky', 'stave', 'vague', 'chock', 'fight', 'video', 'stone', 'teach', 'cleft', 'frost', 'prawn', 'booty', 'twist', 'apnea', 'stiff', 'plaza', 'ledge', 'tweak', 'board', 'grant', 'medic', 'bacon', 'cable', 'brawl', 'slunk', 'raspy', 'forum', 'drone', 'women', 'mucus', 'boast', 'toddy', 'coven', 'tumor', 'truer', 'wrath', 'stall', 'steam', 'axial', 'purer', 'daily', 'trail', 'niche', 'mealy', 'juice', 'nylon', 'plump', 'merry', 'flail', 'papal', 'wheat', 'berry', 'cower', 'erect', 'brute', 'leggy', 'snipe', 'sinew', 'skier', 'penny', 'jumpy', 'rally', 'umbra', 'scary', 'modem', 'gross', 'avian', 'greed', 'satin', 'tonic', 'parka', 'sniff', 'livid', 'stark', 'trump', 'giddy', 'reuse', 'taboo', 'avoid', 'quote', 'devil', 'liken', 'gloss', 'gayer', 'beret', 'noise', 'gland', 'dealt', 'sling', 'rumor', 'opera', 'thigh', 'tonga', 'flare', 'wound', 'white', 'bulky', 'etude', 'horse', 'circa', 'paddy', 'inbox', 'fizzy', 'grain', 'exert', 'surge', 'gleam', 'belle', 'salvo', 'crush', 'fruit', 'sappy', 'taker', 'tract', 'ovine', 'spiky', 'frank', 'reedy', 'filth', 'spasm', 'heave', 'mambo', 'right', 'clank', 'trust', 'lumen', 'borne', 'spook', 'sauce', 'amber', 'lathe', 'carat', 'corer', 'dirty', 'slyly', 'affix', 'alloy', 'taint', 'sheep', 'kinky', 'wooly', 'mauve', 'flung', 'yacht', 'fried', 'quail', 'brunt', 'grimy', 'curvy', 'cagey', 'rinse', 'deuce', 'state', 'grasp', 'milky', 'bison', 'graft', 'sandy', 'baste', 'flask', 'hedge', 'girly', 'swash', 'boney', 'coupe', 'endow', 'abhor', 'welch', 'blade', 'tight', 'geese', 'miser', 'mirth', 'cloud', 'cabal', 'leech', 'close', 'tenth', 'pecan', 'droit', 'grail', 'clone', 'guise', 'ralph', 'tango', 'biddy', 'smith', 'mower', 'payee', 'serif', 'drape', 'fifth', 'spank', 'glaze', 'allot', 'truck', 'kayak', 'virus', 'testy', 'tepee', 'fully', 'zonal', 'metro', 'curry', 'grand', 'banjo', 'axion', 'bezel', 'occur', 'chain', 'nasal', 'gooey', 'filer', 'brace', 'allay', 'pubic', 'raven', 'plead', 'gnash', 'flaky', 'munch', 'dully', 'eking', 'thing', 'slink', 'hurry', 'theft', 'shorn', 'pygmy', 'ranch', 'wring', 'lemon', 'shore', 'mamma', 'froze', 'newer', 'style', 'moose', 'antic', 'drown', 'vegan', 'chess', 'guppy', 'union', 'lever', 'lorry', 'image', 'cabby', 'druid', 'exact', 'truth', 'dopey', 'spear', 'cried', 'chime', 'crony', 'stunk', 'timid', 'batch', 'gauge', 'rotor', 'crack', 'curve', 'latte', 'witch', 'bunch', 'repel', 'anvil', 'soapy', 'meter', 'broth', 'madly', 'dried', 'scene', 'known', 'magma', 'roost', 'woman', 'thong', 'punch', 'pasty', 'downy', 'knead', 'whirl', 'rapid', 'clang', 'anger', 'drive', 'goofy', 'email', 'music', 'stuff', 'bleep', 'rider', 'mecca', 'folio', 'setup', 'verso', 'quash', 'fauna', 'gummy', 'happy', 'newly', 'fussy', 'relic', 'guava', 'ratty', 'fudge', 'femur', 'chirp', 'forte', 'alibi', 'whine', 'petty', 'golly', 'plait', 'fleck', 'felon', 'gourd', 'brown', 'thrum', 'ficus', 'stash', 'decry', 'wiser', 'junta', 'visor', 'daunt', 'scree', 'impel', 'await', 'press', 'whose', 'turbo', 'stoop', 'speak', 'mangy', 'eying', 'inlet', 'crone', 'pulse', 'mossy', 'staid', 'hence', 'pinch', 'teddy', 'sully', 'snore', 'ripen', 'snowy', 'attic', 'going', 'leach', 'mouth', 'hound', 'clump', 'tonal', 'bigot', 'peril', 'piece', 'blame', 'haute', 'spied', 'undid', 'intro', 'basal', 'shine', 'gecko', 'rodeo', 'guard', 'steer', 'loamy', 'scamp', 'scram', 'manly', 'hello', 'vaunt', 'organ', 'feral', 'knock', 'extra', 'condo', 'adapt', 'willy', 'polka', 'rayon', 'skirt', 'faith', 'torso', 'match', 'mercy', 'tepid', 'sleek', 'riser', 'twixt', 'peace', 'flush', 'catty', 'login', 'eject', 'roger', 'rival', 'untie', 'refit', 'aorta', 'adult', 'judge', 'rower', 'artsy', 'rural', 'shave'];
    // Compute the frequency of each letter in the list of valid solutions
    const LETTER_FREQUENCIES = (() => {
        const frequencies = {};
        for (const word of VALID_SOLUTIONS) {
            for (const char of word.toLowerCase().split('')) {
                if (!frequencies[char]) {
                    frequencies[char] = 0;
                }
                frequencies[char]++;
            }
        }
        return frequencies;
    })();
    const VARIANT = window.location.host === 'qntm.org' ? 'absurdle' : 'wordle';
    /**
    * Replaces a character in a string at a specific index.
    * Borrowed from https://stackoverflow.com/a/1431113/1063392
    */
    const replaceAt = (str, index, replacement) => {
        return (str.substring(0, index) +
            replacement +
            str.substring(index + replacement.length));
    };
    /**
    * Gets the next best guess, based on the current
    * state of the game board
    */
    const getNextGuess = (gameState) => {
        // This holds the guess with the highest score
        const bestGuess = { score: 0, word: null };
        // This holds the guess with the highest score
        // that doesn't include any repeated letters
        const bestGuessWithoutRepeatingLetters = { score: 0, word: null };
        wordLoop: for (let option of VALID_SOLUTIONS) {
            // I think the words are all lowercase, but just to be safe...
            option = option.toLowerCase();
            for (const guess of gameState.guesses) {
                // This string start out exactly equal to `option`, but we'll blank out
                // any correct or partially correct letters. (i.e. "hello" --> "h__lo").
                // This allows us to test against this word using letters we know
                // _don't_ exist in the word without eliminating words in which the
                // letters appears more than once.
                let optionWithBlanks = option;
                for (let i = 0; i < guess.letters.length; i++) {
                    const letter = guess.letters[i];
                    // Ignore this option if a previous guess has a correct guess
                    // (right letter, right position) that conflicts with this option
                    if (letter.evaluation === 'correct' && option[i] !== letter.letter) {
                        continue wordLoop;
                    }
                    // Ignore this option if a previous guess has a partially
                    // correct guess (right letter, wrong position), but this
                    // option does not include the guessed letter
                    if (letter.evaluation === 'present' &&
                        !option.includes(letter.letter)) {
                        continue wordLoop;
                    }
                    // Ignore this option if a previous guess has a partially
                    // correct guess (right letter, wrong position), and this
                    // option includes this letter in the same position
                    if (letter.evaluation === 'present' && option[i] === letter.letter) {
                        continue wordLoop;
                    }
                    if (letter.evaluation === 'correct') {
                        // If the current letter is correct, replace the letter with a '_'
                        // in `optionWithBlanks` so that we can test against this letter
                        // negatively in the future.
                        optionWithBlanks = replaceAt(optionWithBlanks, i, '_');
                    }
                    else if (letter.evaluation === 'present') {
                        // If the letter is correct, but in the wrong position, blank
                        // out the first occurrence of the letter (if it exists), for the
                        // same reason mentioned above.
                        const indexOfLetter = optionWithBlanks.indexOf(letter.letter);
                        if (indexOfLetter !== -1) {
                            optionWithBlanks = replaceAt(optionWithBlanks, indexOfLetter, '_');
                        }
                    }
                }
                // Now, test the option against all the letters we know should _not_ be
                // in the word. We can't simply compare the "absent" letters against the
                // original word, since it may be the case that a valid guess includes
                // multiples of the repeated letter. For example, if the solution was
                // "party", and we previously guessed "poppy", the second two p's would
                // be considered "absent". However, we can't eliminate "party" just
                // because it includes a "p". We get around this by "blanking out" the
                // correct and partially-correct guesses above, so that by the time we
                // get to this step, we test against a string like "_arty", avoiding the
                // false negative scenario described above.
                for (let i = 0; i < guess.letters.length; i++) {
                    const letter = guess.letters[i];
                    if (letter.evaluation === 'absent' &&
                        optionWithBlanks.includes(letter.letter)) {
                        continue wordLoop;
                    }
                }
            }
            // If we've made it here, we know the option doesn't
            // conflict with any previous guesses
            // Compare the likelihood of this option being correct
            // to our previous guesses, based on the letter frequency
            // of the potential solutions
            let wordScore = 0;
            for (const char of option.split('')) {
                wordScore += LETTER_FREQUENCIES[char];
            }
            if (wordScore > bestGuess.score) {
                bestGuess.score = wordScore;
                bestGuess.word = option;
            }
            const wordHasNoRepeatingLetters = new Set(option).size === option.length;
            if (wordHasNoRepeatingLetters &&
                wordScore > bestGuessWithoutRepeatingLetters.score) {
                bestGuessWithoutRepeatingLetters.score = wordScore;
                bestGuessWithoutRepeatingLetters.word = option;
            }
        }
        return bestGuessWithoutRepeatingLetters.word || bestGuess.word;
    };
    /**
    * Scrapes the game board from Wordle: https://www.powerlanguage.co.uk/wordle/
    */
    const getWordleGameState = () => {
        const gameRows = Array.from(document.querySelector('game-app').shadowRoot.querySelectorAll('game-row'));
        const guesses = gameRows.map((row) => {
            const gameTiles = Array.from(row.shadowRoot.querySelectorAll('game-tile'));
            const letters = gameTiles.map((tile) => {
                var _a;
                return {
                    letter: (_a = tile.getAttribute('letter')) === null || _a === void 0 ? void 0 : _a.toLowerCase(),
                    evaluation: tile.getAttribute('evaluation'),
                };
            });
            return { letters };
        });
        // Filter out any guesses that don't have evaluations for every letter
        const nonEmptyGuesses = guesses.filter((guess) => guess.letters.every((l) => l.evaluation));
        return { guesses: nonEmptyGuesses };
    };
    /**
    * Scrapes the game board from Absurdle: https://qntm.org/files/wordle/index.html
    */
    const getAbsurdleGameState = () => {
        const gameRows = Array.from(document.querySelectorAll('table.absurdle__guess-table tr'));
        const guesses = gameRows.map((row) => {
            const gameTiles = Array.from(row.querySelectorAll('td'));
            const letters = gameTiles.map((tile) => {
                let evaluation;
                if (tile.classList.contains('absurdle__guess-box--inexact')) {
                    evaluation = 'present';
                }
                else if (tile.classList.contains('absurdle__guess-box--exact')) {
                    evaluation = 'correct';
                }
                else if (tile.classList.contains('absurdle__guess-box--wrong')) {
                    evaluation = 'absent';
                }
                else {
                    evaluation = null;
                }
                return {
                    letter: tile.innerText.toLowerCase().trim(),
                    evaluation,
                };
            });
            return { letters };
        });
        // Filter out any guesses that don't have evaluations for every letter
        const nonEmptyGuesses = guesses.filter((guess) => guess.letters.every((l) => l.evaluation));
        return { guesses: nonEmptyGuesses };
    };
    /**
    * Scrapes the game board and gets the current
    * state of the guesses and their evaluations.
    */
    const getGameState = () => {
        if (VARIANT === 'wordle') {
            return getWordleGameState();
        }
        else {
            return getAbsurdleGameState();
        }
    };
    /**
    * Plays the game!
    */
    const playGame = () => __awaiter(this, void 0, void 0, function* () {
        const asyncTimeout = (timeout) => new Promise((resolve) => setTimeout(() => resolve(), timeout));
        for (let i = 0; i < 7; i++) {
            const gameState = getGameState();
            const lastGuess = gameState.guesses[gameState.guesses.length - 1];
            if (lastGuess &&
                lastGuess.letters.every((l) => l.evaluation === 'correct')) {
                console.log('Solved!');
                return;
            }
            const guess = getNextGuess(gameState);
            console.log(`Guessing "${guess}"...`);
            const objectToDispatch = VARIANT === 'absurdle' ? document : window;
            for (const char of guess.split('')) {
                objectToDispatch.dispatchEvent(new KeyboardEvent('keydown', { key: char }));
                yield asyncTimeout(10);
            }
            if (VARIANT === 'absurdle') {
                const enterButton = Array.from(document.querySelectorAll('button.absurdle__button')).find((btn) => btn.innerText.toLowerCase().trim() === 'enter');
                enterButton.click();
            }
            else {
                objectToDispatch.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
            }
            yield asyncTimeout(VARIANT === 'absurdle' ? 100 : 2200);
        }
        console.log('Failed!');
    });
    playGame();
  }

  (async () => {
    const COUNTER_SELECTOR = '.hyperweb-notification-center-counter span';
    const SHORTCUTS_SELECTOR = '.hyperweb-notification-center-shortcuts';
    const FULL_MESSAGE_SELECTOR = '.hyperweb-message-notification';

    const buildAnchor = (text) => {
      const icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M512 288c0 35.35-21.49 64-48 64c-32.43 0-31.72-32-55.64-32C394.9 320 384 330.9 384 344.4V480c0 17.67-14.33 32-32 32h-71.64C266.9 512 256 501.1 256 487.6C256 463.1 288 464.4 288 432c0-26.51-28.65-48-64-48s-64 21.49-64 48c0 32.43 32 31.72 32 55.64C192 501.1 181.1 512 167.6 512H32c-17.67 0-32-14.33-32-32v-135.6C0 330.9 10.91 320 24.36 320C48.05 320 47.6 352 80 352C106.5 352 128 323.3 128 288S106.5 223.1 80 223.1c-32.43 0-31.72 32-55.64 32C10.91 255.1 0 245.1 0 231.6v-71.64c0-17.67 14.33-31.1 32-31.1h135.6C181.1 127.1 192 117.1 192 103.6c0-23.69-32-23.24-32-55.64c0-26.51 28.65-47.1 64-47.1s64 21.49 64 47.1c0 32.43-32 31.72-32 55.64c0 13.45 10.91 24.36 24.36 24.36H352c17.67 0 32 14.33 32 31.1v71.64c0 13.45 10.91 24.36 24.36 24.36c23.69 0 23.24-32 55.64-32C490.5 223.1 512 252.7 512 288z"/></svg>';
      const anchor = document.createElement('a');
      anchor.classList.add('hw-link');
      anchor.innerHTML = [ icon, text ].filter((el) => !!el).join(' ');
      anchor.addEventListener('click', solve);

      return anchor;
    };

    const waitForFullMessage = () => {
      const fullMessage = document.querySelector(FULL_MESSAGE_SELECTOR);
      
      if (fullMessage) {
        const children = Array.from(fullMessage.childNodes)
        const unwantedChildren = children
          .filter((c) => c.textContent.trim() === 'or' || c.textContent.trim() === ',')
          .filter((c) => !(c instanceof HTMLAnchorElement));
        const requiredDhildren = children
          .filter((c) => c.textContent.trim() !== 'or' && c.textContent.trim() !== ',')
        const anchors = requiredDhildren.filter((el) => el instanceof HTMLAnchorElement);

        unwantedChildren.forEach((a) => a.remove());
        anchors.forEach((a) => a.remove());
        anchors.push(buildAnchor('Solve Wordle'));

        anchors.forEach((a, index) => {
          if (index === 0) {
            fullMessage.insertBefore(a, requiredDhildren[1].nextSibling);
          } else {
            const separator = document.createTextNode(index === anchors.length - 1 ? ' or ' : ', ');
            fullMessage.insertBefore(separator, anchors[index - 1].nextSibling);
            fullMessage.insertBefore(a, separator.nextSibling);
          }
        });
      } else {
        setTimeout(waitForFullMessage, 50);
      }
    };

    const waitForShortcuts = () => {
      const shortcuts = document.querySelector(SHORTCUTS_SELECTOR);

      if (shortcuts) {
        shortcuts.appendChild(buildAnchor());

        const counter = document.querySelector(COUNTER_SELECTOR);

        if (counter && counter.textContent) {
          counter.textContent = parseInt(counter.textContent) + 1;
        }
      } else {
        setTimeout(waitForShortcuts, 50);
      }
    };

    waitForFullMessage();
    waitForShortcuts();
  })();
})();