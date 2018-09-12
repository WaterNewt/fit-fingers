$(() => {
    $("#typer").val("");
    var article = [];
    var seconds = 60, sec = 60, len = 100;
    if (timing === 'one'){
        seconds = sec = 60;
        len = 100;
    }
    else if (timing === 'two'){
        seconds = sec = 120;
        len = 150;
    }
    var i = -1, j = 0;
    var allchars = 0;
    var correctWords = 0, wrongWords = 0, wpm = 0, accuracy = 0;
    $('.btn-retry').prop('disabled', true);
    $("#jumbo-content").val("");
    for (var z = 0; z < len; z += 1) {
        article.push(articlelist[Math.floor(Math.random() * 2643)]);
    }
    for (var z = 0; z < article.length; z += 1) {
        $("#jumbo-content").append('<span id="w' + z + '">' + article[z] + " " + '</span>');
    }
    $('#typer').one('keyup', () => {
        $('.btn-retry').prop('disabled', false);
        settttime();
    });
    $('#typer').on('keypress', (e) => {
        if (e.which == 13 || e.which == 32) {
            e.preventDefault();
            ++i;
            text = $("#typer").val();
            $("#typer").val("");
            if (article[i] === text) {
                $('#w' + i).css('color', '#00c606');
                correctWords++;
                allchars += text.length;
            }
            else {
                $('#w' + i).css('color', '#e50000');
                wrongWords++;
            }
        }
    });
    $('#start').click(() => {
        $('#typer').focus();
    });
    $('.btn-retry').click(() => {
        window.location.reload("true");
    });
    function settttime() {
        seconds--;
        $('#timer').html(seconds.toString());
        if (seconds > 0) {
            setTimeout(settttime, 1000);
        }
        if (seconds == 0) {
            $("#typer").prop('disabled', true);
            $("#jumbo-content").empty();
            $("#typer").remove();
            if (wrongWords === 0) {
                accuracy = 100;
                wpm = (allchars / 5);
            }
            else if(wrongWords > 0) {
                accuracy = (correctWords / (correctWords + wrongWords)) * 100;
                wpm = (allchars / 5);
            }
            $("#jumbo-content").html('<h1 id="wpm">Typing Speed: <span id="wpm-box">' + ((Math.ceil(wpm) + wrongWords) / (sec / 60) ) + " Gross WPM</span> (Words Per Minute)" + '</h3><h2 id="correct-characters">Correct characters: ' + allchars + '</h2><h2 id="correct-words">Correct Words: ' + correctWords + '</h2><h2 id="wrong-words">Wrong Words: ' + wrongWords + '</h2><h2 id="accuracy-speed">Accuracy: ' + Math.ceil(accuracy) + "%" + '</h2>');
        }
        if (seconds > 30) {
            $('#timer').css('background-color', '00c606');
        }
        if (seconds < 30) {
            $('#timer').css('background-color', 'ed1515');
        }
    }
    var articlelist = ['therapeutic', 'friendly', 'delight', 'sky', 'long', 'slow', 'fasten', 'attack', 'steady', 'ambiguous', 'teeny', 'temper', 'dead', 'hard-to-find', 'servant', 'low', 'clam', 'grease', 'screw', 'discreet', 'adventurous', 'hurt',
        'sore', 'raise', 'recess', 'cruel', 'embarrass', 'faded', 'vegetable', 'examine', 'hose', 'subdued', 'third', 'tiger', 'concerned', 'girls', 'gaping', 'brick', 'appliance', 'hover', 'whirl', 'grumpy', 'serious', 'mellow', 'well-off', 'offend',
        'transport', 'flight', 'feigned', 'ill-informed', 'ray', 'giants', 'grin', 'sidewalk', 'deeply', 'cheap', 'hour', 'bang', 'belligerent', 'fluffy', 'quack', 'rigid', 'tug', 'battle', 'announce', 'attraction', 'tidy', 'plausible', 'nerve', 'toys',
        'ball', 'observation', 'clover', 'short', 'acid', 'crazy', 'burst', 'hilarious', 'flat', 'ready', 'week', 'drawer', 'ban', 'conscious', 'humdrum', 'mark', 'snails', 'cats', 'godly', 'pretty', 'thought', 'curve', 'position', 'rain', 'proud', 'hope',
        'bathe', 'bleach', 'time', 'protest', 'tested', 'bomb', 'burn', 'endurable', 'defective', 'steep', 'theory', 'secretive', 'mice', 'mass', 'moon', 'heat', 'delirious', 'near', 'bright', 'lumpy', 'mailbox', 'strengthen', 'mean', 'fascinated', 'rabbit',
        'half', 'lean', 'unsuitable', 'best', 'window', 'cooperative', 'vulgar', 'bucket', 'point', 'jam', 'flowery', 'toothbrush', 'cautious', 'pencil', 'typical', 'shock', 'long', 'sticks', 'airplane', 'silky', 'pricey', 'book', 'snake', 'shallow', 'tense',
        'marble', 'badge', 'smoke', 'stale', 'sore', 'moan', 'fabulous', 'strap', 'push', 'redundant', 'happen', 'pedal', 'injure', 'bare', 'disagreeable', 'bubble', 'plastic', 'squeamish', 'scold', 'strong', 'sail', 'airport', 'bells', 'loud', 'efficacious',
        'relieved', 'fear', 'harass', 'perpetual', 'direful', 'eatable', 'fortunate', 'sigh', 'permissible', 'trust', 'show', 'gaudy', 'unique', 'stitch', 'succinct', 'daughter', 'neck', 'shop', 'gate', 'stain', 'wave', 'juvenile', 'super', 'education', 'wine',
        'refuse', 'cast', 'judicious', 'multiply', 'butter', 'woebegone', 'pass', 'knotty', 'march', 'racial', 'precious', 'knot', 'number', 'unarmed', 'jolly', 'bolt', 'imported', 'order', 'leg', 'pen', 'groovy', 'bedroom', 'aspiring', 'pat', 'easy', 'store',
        'introduce', 'peaceful', 'pump', 'understood', 'undesirable', 'tawdry', 'used', 'grubby', 'scared', 'bashful', 'help', 'voiceless', 'saw', 'sincere', 'engine', 'part', 'wish', 'tree', 'ducks', 'woman', 'use', 'sneeze', 'space', 'cure', 'auspicious',
        'buzz', 'office', 'annoy', 'husky', 'crook', 'glistening', 'tame', 'top', 'separate', 'next', 'vagabond', 'whistle', 'scent', 'silver', 'color', 'wealth', 'precede', 'didactic', 'suit', 'train', 'calendar', 'nonchalant', 'hot', 'punish', 'reading',
        'handsome', 'gabby', 'pumped', 'challenge', 'earsplitting', 'bow', 'want', 'flippant', 'uneven', 'mix', 'satisfy', 'relation', 'silent', 'cemetery', 'obnoxious', 'breath', 'delicate', 'train', 'labored', 'spot', 'prick', 'lewd', 'vague', 'hollow',
        'experience', 'harsh', 'tempt', 'minute', 'normal', 'branch', 'wrench', 'blue-eyed', 'route', 'willing', 'damaging', 'scarce', 'tasty', 'governor', 'nut', 'detect', 'entertaining', 'bee', 'lying', 'plough', 'brother', 'bury', 'smelly', 'wire',
        'phone', 'abundant', 'cream', 'hook', 'wicked', 'credit', 'trashy', 'yell', 'brass', 'itch', 'dramatic', 'brawny', 'sophisticated', 'vein', 'health', 'possessive', 'store', 'scattered', 'lazy', 'memorise', 'gigantic', 'chew', 'many', 'enjoy',
        'cherries', 'threatening', 'equal', 'fireman', 'alert', 'arm', 'harmonious', 'tray', 'broken', 'angry', 'suggestion', 'steer', 'van', 'tease', 'dime', 'strip', 'disillusioned', 'immense', 'birth', 'aromatic', 'remarkable', 'funny', 'protect',
        'zealous', 'basket', 'imminent', 'disappear', 'sleet', 'festive', 'protective', 'charge', 'float', 'bed', 'automatic', 'dry', 'sparkling', 'telling', 'warn', 'rely', 'purring', 'seashore', 'greet', 'finicky', 'periodic', 'confused', 'surprise',
        'jail', 'milky', 'quiet', 'hurry', 'tap', 'gold', 'smash', 'teaching', 'pets', 'piquant', 'quartz', 'summer', 'hole', 'ad hoc', 'hapless', 'quaint', 'place', 'aggressive', 'cute', 'trite', 'play', 'calculate', 'shiver', 'mind', 'haircut',
        'abashed', 'responsible', 'important', 'cup', 'example', 'regular', 'slip', 'brash', 'aquatic', 'chance', 'quicksand', 'meaty', 'tranquil', 'cover', 'nutty', 'excited', 'learned', 'cactus', 'round', 'adhesive', 'ripe', 'whip', 'bloody',
        'request', 'remain', 'fanatical', 'delicious', 'grate', 'lame', 'rings', 'spooky', 'rod', 'material', 'rebel', 'satisfying', 'berserk', 'defiant', 'ruthless', 'increase', 'smoke', 'release', 'eggs', 'common', 'tail', 'afternoon', 'happy',
        'alert', 'irritate', 'dare', 'thoughtful', 'sparkle', 'quilt', 'practise', 'tired', 'orange', 'beginner', 'medical', 'enormous', 'wasteful', 'mountainous', 'brake', 'courageous', 'riddle', 'unaccountable', 'encourage', 'future', 'hypnotic',
        'hungry', 'scientific', 'curious', 'equable', 'corn', 'handle', 'needy', 'sharp', 'various', 'amount', 'history', 'guarantee', 'subtract', 'questionable', 'pause', 'parched', 'door', 'shape', 'mixed', 'miscreant', 'homely', 'wobble', 'soda',
        'market', 'cobweb', 'mist', 'rhyme', 'realise', 'collar', 'tramp', 'guitar', 'liquid', 'tangy', 'church', 'hook', 'well-groomed', 'blushing', 'error', 'dislike', 'horn', 'flower', 'friend', 'overt', 'comfortable', 'placid', 'vest', 'inexpensive',
        'flaky', 'include', 'distance', 'groan', 'skillful', 'carry', 'trip', 'wing', 'hot', 'snakes', 'dirty', 'murder', 'front', 'flap', 'square', 'ajar', 'lunchroom', 'sponge', 'jellyfish', 'decisive', 'income', 'grape', 'plot', 'snore', 'voyage',
        'hushed', 'black-and-white', 'turn', 'wry', 'dizzy', 'unadvised', 'plants', 'ants', 'icicle', 'heavenly', 'bridge', 'chicken', 'wall', 'wacky', 'wonderful', 'join', 'analyse', 'yarn', 'squirrel', 'holiday', 'admit', 'scene', 'spectacular',
        'flower', 'tip', 'pushy', 'stamp', 'amusing', 'shiny', 'cart', 'mother', 'stranger', 'obsequious', 'concentrate', 'jam', 'wound', 'grotesque', 'opposite', 'earth', 'spot', 'inject', 'disarm', 'mine', 'desert', 'hospitable', 'wistful', 'building',
        'afterthought', 'versed', 'disgusted', 'disagree', 'waste', 'illegal', 'expert', 'rampant', 'invent', 'breakable', 'drain', 'useless', 'whine', 'attempt', 'crime', 'stick', 'lively', 'nervous', 'uncovered', 'simple', 'debt', 'apparatus', 'desire',
        'natural', 'meek', 'tricky', 'amuse', 'purpose', 'fit', 'ticket', 'bulb', 'furry', 'star', 'cat', 'ragged', 'careful', 'beg', 'pot', 'married', 'late', 'adamant', 'furtive', 'mine', 'thoughtless', 'sweet', 'smiling', 'unbiased', 'excellent', 'smell',
        'paper', 'license', 'nappy', 'trick', 'numerous', 'yellow', 'wretched', 'smile', 'replace', 'undress', 'worry', 'rose', 'explain', 'eight', 'sour', 'victorious', 'mouth', 'reason', 'record', 'inform', 'flowers', 'own', 'tax', 'apologise', 'produce',
        'stretch', 'sisters', 'pet', 'anxious', 'oranges', 'tiny', 'organic', 'man', 'border', 'general', 'class', 'glib', 'digestion', 'slimy', 'cycle', 'tow', 'mate', 'abnormal', 'action', 'supreme', 'test', 'lethal', 'debonair', 'stocking', 'notice', 'paddle',
        'extend', 'uptight', 'sulky', 'reply', 'toothsome', 'travel', 'drag', 'knock', 'three', 'wren', 'part', 'efficient', 'press', 'moor', 'grass', 'look', 'drunk', 'healthy', 'soft', 'distribution', 'grade', 'little', 'abrasive', 'living', 'agonizing', 'hang',
        'staking', 'ashamed', 'dolls', 'boring', 'hanging', 'men', 'pale', 'word', 'beds', 'walk', 'act', 'tank', 'creepy', 'unit', 'clever', 'locket', 'damage', 'mug', 'light', 'successful', 'romantic', 'chop', 'rot', 'daffy', 'hideous', 'hug', 'development',
        'judge', 'sable', 'coast', 'accept', 'dangerous', 'touch', 'five', 'grip', 'can', 'interest', 'flesh', 'order', 'bitter', 'bent', 'horses', 'neighborly', 'invincible', 'elite', 'fresh', 'frantic', 'unequaled', 'impress', 'merciful', 'condemned', 'powerful',
        'smoggy', 'fire', 'fail', 'spoil', 'sound', 'unknown', 'zoom', 'war', 'seed', 'hesitant', 'cold', 'truck', 'skip', 'robust', 'absent', 'gruesome', 'hospital', 'attractive', 'bit', 'second', 'hair', 'acrid', 'fold', 'cynical', 'copper', 'wash', 'disastrous',
        'pick', 'low', 'befitting', 'record', 'dust', 'embarrassed', 'competition', 'texture', 'filthy', 'special', 'spill', 'force', 'battle', 'flawless', 'jump', 'twist', 'water', 'somber', 'shirt', 'straight', 'standing', 'boiling', 'wanting', 'bawdy', 'oatmeal',
        'wander', 'helpful', 'abortive', 'grouchy', 'workable', 'mighty', 'drink', 'halting', 'base', 'cave', 'compare', 'waiting', 'head', 'delightful', 'enter', 'turn', 'caring', 'woozy', 'person', 'arrogant', 'camp', 'deliver', 'blot', 'diligent', 'reproduce', 'telephone',
        'needless', 'zippy', 'actor', 'scarf', 'bath', 'trot', 'sassy', 'report', 'lamp', 'vigorous', 'coil', 'stew', 'army', 'cover', 'nippy', 'tame', 'fearful', 'sneaky', 'cracker', 'underwear', 'nauseating', 'addition', 'taboo', 'trains', 'appear', 'physical', 'tense',
        'adorable', 'tremble', 'moldy', 'decay', 'tent', 'colour', 'radiate', 'utter', 'majestic', 'hand', 'wool', 'drab', 'move', 'expansion', 'bite-sized', 'shame', 'squealing', 'puny', 'tough', 'reminiscent', 'claim', 'trees', 'sedate', 'wonder', 'double', 'soup',
        'premium', 'flavor', 'employ', 'letters', 'jumbled', 'gifted', 'anger', 'pinch', 'kneel', 'laugh', 'polite', 'songs', 'behave', 'kick', 'blood', 'unlock', 'amused', 'pickle', 'expensive', 'match', 'same', 'view', 'fallacious', 'fold', 'reign', 'mere', 'necessary',
        'stop', 'communicate', 'lock', 'money', 'punch', 'smash', 'giant', 'animated', 'whole', 'expand', 'horrible', 'amazing', 'street', 'onerous', 'eggnog', 'disgusting', 'imaginary', 'partner', 'duck', 'wakeful', 'glow', 'zip', 'laborer', 'keen', 'gleaming', 'quixotic',
        'add', 'government', 'frightened', 'interfere', 'town', 'trade', 'sleepy', 'quill', 'wait', 'pear', 'animal', 'gather', 'known', 'degree', 'thread', 'juicy', 'vanish', 'female', 'actually', 'road', 'snotty', 'rural', 'painful', 'oven', 'jagged', 'faint', 'hat',
        'divide', 'oil', 'rotten', 'bike', 'certain', 'reward', 'line', 'doll', 'scribble', 'carve', 'ignore', 'guttural', 'sloppy', 'wink', 'productive', 'wish', 'deafening', 'cherry', 'slave', 'strange', 'toy', 'plant', 'pretend', 'gratis', 'gorgeous', 'rush',
        'overconfident', 'work', 'combative', 'impartial', 'obese', 'finger', 'mushy', 'classy', 'board', 'care', 'berry', 'launch', 'feeling', 'six', 'glorious', 'thundering', 'noise', 'odd', 'macabre', 'pleasure', 'fancy', 'spurious', 'bruise', 'possess', 'snow',
        'fast', 'cough', 'unite', 'honorable', 'unwritten', 'porter', 'kiss', 'wrong', 'wise', 'push', 'check', 'activity', 'furniture', 'dear', 'shut', 'trap', 'spoon', 'towering', 'heavy', 'stop', 'noxious', 'magnificent', 'flashy', 'sack', 'coherent', 'abaft',
        'roll', 'wood', 'curved', 'sail', 'instruct', 'circle', 'cheerful', 'uncle', 'food', 'trick', 'secretary', 'soggy', 'bite', 'stamp', 'ghost', 'overflow', 'visit', 'rain', 'ask', 'dress', 'ten', 'brush', 'rob', 'land', 'graceful', 'knee', 'industry', 'toe',
        'beneficial', 'frail', 'statuesque', 'canvas', 'change', 'fine', 'occur', 'plant', 'wheel', 'faithful', 'unable', 'ambitious', 'loss', 'believe', 'curly', 'shrug', 'film', 'tight', 'lamentable', 'sense', 'death', 'plain', 'angle', 'two', 'feeble', 'petite',
        'close', 'panoramic', 'charming', 'cuddly', 'untidy', 'sock', 'savory', 'manage', 'fang', 'knowledgeable', 'tooth', 'massive', 'one', 'new', 'influence', 'foot', 'shelter', 'label', 'design', 'secret', 'crowded', 'tacky', 'gainful', 'old-fashioned', 'unusual',
        'stretch', 'exist', 'wary', 'languid', 'name', 'desk', 'scarecrow', 'things', 'day', 'quickest', 'mourn', 'permit', 'arrive', 'slippery', 'belief', 'excite', 'love', 'dusty', 'defeated', 'faulty', 'free', 'spark', 'psychedelic', 'resolute', 'use', 'event',
        'tacit', 'snow', 'sheet', 'statement', 'face', 'son', 'giddy', 'nine', 'mom', 'punishment', 'unused', 'compete', 'watch', 'beautiful', 'mitten', 'nail', 'chase', 'small', 'receptive', 'pour', 'salty', 'nasty', 'obscene', 'damaged', 'acoustics', 'crayon',
        'surround', 'belong', 'violent', 'guide', 'torpid', 'bead', 'deserted', 'chubby', 'ill-fated', 'grandmother', 'probable', 'venomous', 'screeching', 'purple', 'slow', 'chin', 'lock', 'suck', 'puzzled', 'kaput', 'start', 'fixed', 'chemical', 'parsimonious',
        'dynamic', 'back', 'rainstorm', 'craven', 'frog', 'unpack', 'zebra', 'obeisant', 'thumb', 'encouraging', 'language', 'past', 'rabid', 'robin', 'measure', 'lip', 'ubiquitous', 'relax', 'crooked', 'brainy', 'tasteful', 'daily', 'superb', 'head', 'zesty', 'snail',
        'dependent', 'aftermath', 'tearful', 'children', 'ugliest', 'overjoyed', 'glamorous', 'babies', 'deer', 'green', 'humor', 'flow', 'object', 'scratch', 'crabby', 'religion', 'meeting', 'elastic', 'cause', 'squeak', 'modern', 'flimsy', 'stone', 'talk', 'plant',
        'stiff', 'book', 'domineering', 'fear', 'white', 'roof', 'clear', 'fall', 'bumpy', 'trouble', 'complain', 'jar', 'preach', 'capricious', 'promise', 'hum', 'cows', 'boast', 'outgoing', 'profuse', 'gray', 'illustrious', 'request', 'scare', 'rejoice', 'abstracted',
        'alive', 'toes', 'improve', 'adjoining', 'far-flung', 'suppose', 'authority', 'dress', 'cute', 'alleged', 'earthquake', 'brave', 'bat', 'humorous', 'pop', 'glove', 'wealthy', 'ignorant', 'weight', 'plantation', 'null', 'fierce', 'stitch', 'linen', 'juggle', 'terrific',
        'fetch', 'sign', 'grip', 'grey', 'miss', 'awake', 'scintillating', 'cattle', 'loaf', 'careless', 'draconian', 'giraffe', 'destruction', 'detailed', 'quick', 'agreement', 'cushion', 'cook', 'muscle', 'treat', 'team', 'pie', 'cloistered', 'bad', 'neat', 'borrow', 'abounding',
        'energetic', 'like', 'verse', 'apathetic', 'switch', 'guess', 'spark', 'guide', 'oceanic', 'absorbed', 'taste', 'cagey', 'changeable', 'clumsy', 'complete', 'paste', 'historical', 'poke', 'stupendous', 'shelf', 'type', 'frighten', 'obedient', 'cheer', 'memory', 'outstanding',
        'afford', 'shade', 'cluttered', 'chalk', 'invite', 'likeable', 'tall', 'maddening', 'well-to-do', 'exultant', 'tangible', 'haunt', 'ear', 'unnatural', 'rhythm', 'disapprove', 'brown', 'worm', 'hellish', 'tie', 'striped', 'temporary', 'flagrant', 'selective', 'meal', 'tiresome',
        'title', 'lake', 'knife', 'judge', 'safe', 'fog', 'impulse', 'upbeat', 'boorish', 'scrub', 'infamous', 'chivalrous', 'slim', 'omniscient', 'discover', 'sip', 'soothe', 'windy', 'ludicrous', 'scrape', 'icy', 'end', 'frogs', 'parcel', 'quiet', 'thinkable', 'change', 'crate',
        'science', 'observant', 'warlike', 'hand', 'touch', 'succeed', 'madly', 'sneeze', 'weak', 'knowledge', 'nation', 'price', 'reflect', 'school', 'geese', 'shaggy', 'choke', 'stage', 'remove', 'society', 'raspy', 'kindhearted', 'oafish', 'stove', 'agree', 'produce', 'resonant',
        'pocket', 'achiever', 'right', 'screw', 'quarrelsome', 'discussion', 'volcano', 'acceptable', 'teeth', 'irate', 'beam', 'squeeze', 'suspect', 'step', 'weigh', 'hallowed', 'dream', 'magenta', 'adaptable', 'tire', 'first', 'camp', 'penitent', 'steel', 'male', 'jumpy', 'plane',
        'fair', 'available', 'talented', 'utopian', 'tomatoes', 'magical', 'last', 'support', 'branch', 'macho', 'tenuous', 'ladybug', 'ablaze', 'bounce', 'addicted', 'level', 'like', 'elbow', 'alike', 'frequent', 'marry', 'appreciate', 'unequal', 'cowardly', 'outrageous', 'weary',
        'military', 'trip', 'tour', 'level', 'jittery', 'ethereal', 'park', 'nimble', 'evanescent', 'fairies', 'run', 'power', 'attack', 'boundary', 'sound', 'idiotic', 'club', 'fill', 'lackadaisical', 'eager', 'trouble', 'yoke', 'polish', 'ordinary', 'skinny', 'plan', 'profit',
        'ultra', 'miniature', 'cloudy', 'queen', 'steadfast', 'connect', 'muddle', 'overrated', 'lace', 'symptomatic', 'name', 'paltry', 'confuse', 'needle', 'thaw', 'comb', 'bottle', 'zinc', 'bell', 'observe', 'answer', 'good', 'box', 'arrange', 'song', 'sink', 'annoyed', 'farm',
        'reject', 'blush', 'political', 'reach', 'heartbreaking', 'side', 'shocking', 'womanly', 'offer', 'quince', 'taste', 'playground', 'abandoned', 'puncture', 'risk', 'alluring', 'test', 'knit', 'decorate', 'lively', 'stuff', 'abrupt', 'hill', 'deceive', 'depressed', 'gamy', 'dust', 'approve',
        'offbeat', 'roomy', 'eminent', 'average', 'watch', 'plug', 'flame', 'harbor', 'soak', 'clap', 'earn', 'question', 'scrawny', 'lonely', 'righteous', 'teeny-tiny', 'wreck', 'superficial', 'naughty', 'holistic', 'clammy', 'barbarous', 'hunt', 'wrestle', 'thing', 'legal', 'bird', 'elderly', 'sleep',
        'divergent', 'thrill', 'stereotyped', 'four', 'pin', 'meddle', 'ahead', 'spade', 'nosy', 'look', 'momentous', 'skate', 'pollution', 'territory', 'note', 'explode', 'complex', 'silly', 'seemly', 'glossy', 'apparel', 'notebook', 'grain', 'substantial', 'nod', 'delay', 'malicious', 'crowd', 'baseball',
        'decision', 'celery', 'homeless', 'popcorn', 'functional', 'island', 'wriggle', 'hands', 'open', 'empty', 'escape', 'squeal', 'vengeful', 'serve', 'wet', 'suggest', 'rub', 'scale', 'smooth', 'garrulous', 'calm', 'treatment', 'home', 'yielding', 'substance', 'matter', 'childlike', 'cheese',
        'motionless', 'dinosaurs', 'prevent', 'describe', 'spring', 'stupid', 'crack', 'witty', 'ratty', 'time', 'grab', 'glue', 'repeat', 'need', 'thank', 'cross', 'breezy', 'station', 'erratic', 'mute', 'real', 'return', 'fretful', 'laugh', 'tub', 'unfasten', 'mundane', 'ugly', 'dashing', 'shivering',
        'wild', 'boy', 'maid', 'devilish', 'unwieldy', 'pest', 'fluttering', 'bore', 'hysterical', 'fat', 'control', 'night', 'join', 'envious', 'representative', 'warm', 'gun', 'gaze', 'dispensable', 'advertisement', 'great', 'cub', 'thirsty', 'determined', 'sweater', 'wax', 'incompetent', 'red',
        'materialistic', 'fact', 'voice', 'thankful', 'rifle', 'remind', 'mask', 'axiomatic', 'zephyr', 'coal', 'smart', 'existence', 'cheat', 'dreary', 'irritating', 'true', 'face', 'page', 'steam', 'women', 'nice', 'selection', 'growth', 'welcome', 'difficult', 'hate', 'tumble', 'straw', 'alarm',
        'wholesale', 'dull', 'bone', 'bored', 'sea', 'dinner', 'worthless', 'pig', 'deranged', 'enthusiastic', 'rough', 'payment', 'vacation', 'curl', 'machine', 'jewel', 'spell', 'amusement', 'lettuce', 'tongue', 'land', 'jeans', 'intend', 'grandiose', 'force', 'advise', 'rule', 'bat', 'visitor',
        'busy', 'reduce', 'spotty', 'rest', 'billowy', 'loving', 'yummy', 'ceaseless', 'iron', 'rabbits', 'different', 'cut', 'huge', 'dysfunctional', 'rare', 'recognise', 'drain', 'elated', 'suspend', 'smile', 'sugar', 'argument', 'please', 'turkey', 'rub', 'cakes', 'writer', 'camera', 'wave',
        'flock', 'value', 'drum', 'volatile', 'yam', 'stroke', 'splendid', 'sack', 'shake', 'tightfisted', 'vivacious', 'terrible', 'spotted', 'selfish', 'motion', 'learn', 'wind', 'full', 'hammer', 'heady', 'country', 'coach', 'hate', 'nebulous', 'hateful', 'limit', 'wrist', 'mess up', 'thunder',
        'nondescript', 'ancient', 'basketball', 'rat', 'goofy', 'account', 'grateful', 'friends', 'offer', 'key', 'yak', 'zany', 'transport', 'sun', 'greasy', 'doctor', 'tin', 'north', 'applaud', 'play', 'acidic', 'royal', 'unruly', 'noisy', 'develop', 'trace', 'dusty', 'gullible', 'morning',
        'number', 'assorted', 'seal', 'possible', 'hulking', 'chess', 'umbrella', 'square', 'drip', 'pastoral', 'boundless', 'consider', 'hop', 'ground', 'gusty', 'comparison', 'wail', 'accessible', 'chunky', 'zonked', 'inquisitive', 'hydrant', 'shop', 'arithmetic', 'incredible', 'baby', 'group',
        'meat', 'intelligent', 'wiggly', 'leather', 'pine', 'whip', 'luxuriant', 'repulsive', 'pies', 'kitty', 'hope', 'minister', 'instinctive', 'birthday', 'print', 'foregoing', 'deserve', 'hard', 'spiky', 'throat', 'shave', 'copy', 'size', 'jelly', 'potato', 'wrathful', 'well-made', 'harm',
        'foolish', 'dance', 'curve', 'rail', 'structure', 'pump', 'fish', 'simplistic', 'snatch', 'ice', 'need', 'rustic', 'fuzzy', 'thick', 'frightening', 'volleyball', 'erect', 'jobless', 'division', 'solid', 'cake', 'cable', 'respect', 'carpenter', 'drop', 'trade', 'consist', 'magic',
        'books', 'descriptive', 'inconclusive', 'pack', 'chief', 'end', 'exchange', 'interesting', 'shaky', 'hammer', 'kettle', 'river', 'snobbish', 'false', 'few', 'cause', 'waste', 'remember', 'boat', 'brake', 'better', 'paint', 'sand', 'continue', 'cow', 'allow', 'nest', 'yard', 'foamy',
        'note', 'lick', 'mysterious', 'wide', 'shade', 'testy', 'fade', 'panicky', 'increase', 'wiry', 'abhorrent', 'orange', 'throne', 'acoustic', 'clean', 'listen', 'horse', 'vessel', 'decide', 'uppity', 'birds', 'measure', 'electric', 'houses', 'match', 'aloof', 'famous', 'kind', 'old',
        'whisper', 'curtain', 'noiseless', 'ship', 'previous', 'shy', 'lopsided', 'direction', 'crush', 'itchy', 'correct', 'swanky', 'nest', 'rude', 'nose', 'exclusive', 'call', 'laughable', 'wrap', 'entertain', 'floor', 'live', 'synonymous', 'retire', 'load', 'misty', 'peck', 'slip', 'jog',
        'fork', 'month', 'water', 'heat', 'cap', 'zoo', 'rock', 'instrument', 'uttermost', 'hissing', 'heal', 'impossible', 'invention', 'monkey', 'aboard', 'aware', 'fragile', 'vast', 'scorch', 'phobic', 'verdant', 'story', 'share', 'obey', 'thirsty', 'place', 'exciting', 'rule', 'beef', 'twig',
        'fowl', 'jail', 'cannon', 'narrow', 'pointless', 'passenger', 'reflective', 'colossal', 'cabbage', 'lunch', 'owe', 'scissors', 'rightful', 'psychotic', 'ring', 'wandering', 'eyes', 'insect', 'effect', 'messy', 'basin', 'jazzy', 'highfalutin', 'ski', 'mature', 'start', 'collect', 'literate',
        'exercise', 'uninterested', 'rate', 'subsequent', 'fly', 'ink', 'perform', 'talk', 'painstaking', 'limping', 'aberrant', 'mammoth', 'scary', 'attract', 'fix', 'separate', 'murky', 'terrify', 'bizarre', 'box', 'last', 'nostalgic', 'metal', 'crawl', 'file', 'sniff', 'silent', 'poor', 'familiar',
        'repair', 'rambunctious', 'legs', 'arch', 'discovery', 'waggish', 'frame', 'rice', 'broad', 'calculator', 'crack', 'makeshift', 'impolite', 'house', 'pull', 'naive', 'dazzling', 'puffy', 'industrious', 'mark', 'tick', 'tedious', 'stir', 'hall', 'useful', 'poison', 'field', 'donkey', 'callous',
        'cent', 'guiltless', 'petite', 'pipe', 'sick', 'skirt', 'internal', 'recondite', 'black', 'sheep', 'drop', 'nutritious', 'command', 'accurate', 'handy', 'picayune', 'sad', 'squash', 'heap', 'post', 'sofa', 'depend', 'lush', 'ritzy', 'business', 'extra-small', 'lighten', 'rake', 'alcoholic',
        'complete', 'amuck', 'elfin', 'dirt', 'tickle', 'swift', 'bikes', 'habitual', 'youthful', 'dogs', 'attach', 'guarded', 'puzzling', 'toothpaste', 'melodic', 'burly', 'pail', 'wash', 'vase', 'bag', 'milk', 'bear', 'self', 'coat', 'dark', 'far', 'art', 'regret', 'tendency', 'measly', 'suit',
        'crown', 'gentle', 'stimulating', 'parallel', 'spy', 'nifty', 'shrill', 'pathetic', 'pray', 'fax', 'brief', 'cumbersome', 'receipt', 'stare', 'search', 'contain', 'fuel', 'freezing', 'muddled', 'grandfather', 'prickly', 'doubtful', 'sign', 'silk', 'obtain', 'year', 'sister', 'rich',
        'fumbling', 'list', 'company', 'back', 'colorful', 'exotic', 'friction', 'lacking', 'chilly', 'ruddy', 'unbecoming', 'sweltering', 'vacuous', 'long-term', 'table', 'thin', 'disturbed', 'oval', 'race', 'optimal', 'advice', 'wide-eyed', 'dock', 'x-ray', 'mint', 'breathe', 'minor',
        'ossified', 'watery', 'root', 'educated', 'regret', 'troubled', 'spare', 'astonishing', 'spiteful', 'obtainable', 'interrupt', 'fire', 'fearless', 'sturdy', 'winter', 'quarter', 'capable', 'absorbing', 'deep', 'tart', 'eye', 'honey', 'care', 'unkempt', 'imagine', 'pink', 'maniacal',
        'trail', 'large', 'middle', 'question', 'blue', 'awesome', 'sprout', 'crib', 'point', 'lyrical', 'helpless', 'poised', 'kiss', 'finger', 'even', 'spiders', 'creature', 'abusive', 'peel', 'enchanted', 'coil', 'unhealthy', 'melted', 'car', 'damp', 'melt', 'clean', 'plate', 'doubt',
        'aback', 'guard', 'blind', 'follow', 'argue', 'rock', 'obsolete', 'distinct', 'violet', 'wooden', 'committee', 'dapper', 'blow', 'arrest', 'identify', 'condition', 'found', 'downtown', 'kill', 'present', 'expect', 'stomach', 'queue', 'deadpan', 'flood', 'walk', 'earthy', 'program',
        'connection', 'way', 'worried', 'reaction', 'private', 'admire', 'lumber', 'tasteless', 'move', 'wipe', 'grieving', 'accidental', 'bustling', 'sort', 'flag', 'step', 'sin', 'ruin', 'flash', 'lowly', 'planes', 'cultured', 'bewildered', 'skin', 'knot', 'behavior', 'suffer', 'support',
        'twist', 'pizzas', 'perfect', 'powder', 'egg', 'scatter', 'button', 'quiver', 'whistle', 'stay', 'joyous', 'mindless', 'approval', 'channel', 'bomb', 'man', 'unsightly', 'pull', 'decorous', 'pigs', 'rapid', 'bright', 'valuable', 'exuberant', 'kindly', 'roasted', 'libra y', 'icky',
        'edge', 'fertile', 'sudden', 'supply', 'prose', 'educate', 'caption', 'able', 'fence', 'scandalous', 'work', 'quirky', 'frame', 'dog', 'marked', 'empty', 'soap', 'scream', 'shoes', 'bushes', 'truculent', 'cooing', 'spiritual', 'surprise', 'prepare', 'pleasant', 'upset', 'trucks',
        'present', 'bait', 'salt', 'blade', 'young', 'numberless', 'insidious', 'try', 'current', 'detail', 'kick', 'aboriginal', 'range', 'dry', 'form', 'blink', 'cough', 'annoying', 'tender', 'tremendous', 'count', 'rescue', 'cars', 'stormy', 'demonic', 'bless', 'insurance', 'nonstop',
        'fry', 'waves', 'incandescent', 'cry', 'stream', 'roll', 'level', 'calculating', 'crash', 'voracious', 'futuristic', 'veil', 'whimsical', 'wilderness', 'handsomely', 'rainy', 'confess', 'toad', 'bouncy', 'truthful', 'spiffy', 'hurried', 'high-pitched', 'coordinated', 'interest',
        'letter', 'spicy', 'balance', 'receive', 'rinse', 'attend', 'longing', 'sordid', 'prefer', 'afraid', 'abject', 'coach', 'settle', 'imperfect', 'fantastic', 'jump', 'lovely', 'left', 'stem', 'agreeable', 'elegant', 'stingy', 'crow', 'curvy', 'hobbies', 'driving', 'pan', 'clear',
        'railway', 'dad', 'save', 'bump', 'lavish', 'open', 'milk', 'moaning', 'spray', 'boil', 'air', 'system', 'peep', 'dam', 'picture', 'chickens', 'evasive', 'ocean', 'plucky', 'mend', 'glass', 'plastic', 'smell', 'fool', 'pancake', 'closed', 'zipper', 'destroy', 'slope', 'rhetorical',
        'absurd', 'bake', 'drown', 'joke', 'cellar', 'creator', 'lie', 'provide', 'cool', 'quizzical', 'seat', 'carriage', 'trousers', 'aunt', 'excuse', 'swing', 'innate', 'avoid', 'extra-large', 'party', 'room', 'girl', 'juice', 'tan', 'economic', 'public', 'concern', 'ill', 'untidy',
        'mountain', 'kittens', 'harmony', 'card', 'slap', 'string', 'marvelous', 'early', 'overwrought', 'fancy', 'weather', 'big', 'writing', 'shoe', 'whispering', 'high', 'form', 'fruit', 'warm', 'property', 'shock', 'jaded', 'spotless', 'clip', 'yawn', 'balance', 'awful', 'loutish',
        'signal', 'jealous', 'forgetful', 'bubble', 'love', 'cloth', 'sticky', 'greedy', 'abiding', 'lucky', 'swim', 'loose', 'adjustment', 'squalid', 'boot', 'peace', 'preserve', 'knowing', 'innocent', 'idea', 'enchanting', 'second-hand'];
});