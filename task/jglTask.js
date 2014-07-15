/**
 * Things that need to be at the beginning of the concatenated file.
 */

//$.getScript("/scripts/jgllib.js");

/**
 * Function to make all elements of an array uppercase.
 * @returns {Array} the uppercase array
 */
function upper(array) {
	var tempArray = [];
	for (var i = 0;i<array.length;i++) {
		tempArray.push(array[i].toUpperCase());
	}
	return tempArray;
}

/**
 * Function to grab all properties of the given object.
 * @param object the object to get the fields from
 * @returns {Array} the array of field names
 */
function fields(object) {
	var tempArray = [];
	var i = 0;
	for (var field in object) {
		if (object.hasOwnProperty(field)) {
			tempArray[i++] = field;
		}
	}
	return tempArray;
}

/**
 * Function to make array of zeros of given length.
 * @param length the length of the array to make
 * @returns {Array} the zero array
 */
function zeros(length) {
	var tempArray = new Array(length);
	for (var i=0;i<tempArray.length;i++) {
		tempArray[i] = 0;
	}
	return tempArray;
}

/**
 * Function to make array of ones of given length.
 * @param length the length of the array to make.
 * @returns {Array} the ones array
 */
function ones(length) {
	var tempArray = new Array(length);
	for (var i=0;i<length;i++) {
		tempArray[i] = 1;
	}
	return tempArray;
}

/**
 * Function to pad the end of an array with the given value.
 * @param array the array to pad
 * @param endLength the final length the array should be
 * @param padVal the value to pad with
 * @returns {Array} the padded array
 */
function arrayPad(array, endLength, padVal) {
	while (array.length < endLength) {
		array.push(padVal);
	}
	return array;
}

/**
 * Function to make array of given length filled with the given value.
 * @param value the value to fill the array with
 * @param length the length the array should be
 * @returns {Array} the array that is made
 */
function fillArray(value, length) {
	var tempArray = new Array(length);
	for (var i=0;i<length;i++) {
		tempArray[i] = value;
	}
	return tempArray;
}

/**
 * Function to get the sum of an array
 * @param array the array to sum
 * @returns {Number} the sum of the array
 */
function sum(array) {
	var sum = 0;
	for (var i=0;i<array.length;i++) {
		sum += array[i];
	}
	return sum;
}

/**
 * Function to make cumulative sum array.
 * @param array the array to generate the cumulative sum from.
 * @returns {Array} the cumulative sum array
 */
function cumsum(array) {
	if (array.length == 0) {
		return [];
	}
	var sum = array[0];
	for (var i=0;i<array.length;i++) {
		sum += array[i];
		array[i] = sum;
	}
	return array;
}

/**
 * Function to determine if an array is empty
 * @param array the array
 * @returns {Boolean} true if array.length == 0 or given array is undefined
 */
function isEmpty(array) {
	if (array === undefined) {
		return true;
	}
	if ($.isArray(array)) {
		return array.length == 0;
	}
	if (array === Infinity || array === NaN) {
		return true;
	}
	console.log("isEmpty: used with non-array");
	return false;
}

/**
 * Function to determine if there are any non-zero values in the array.
 * @param array the array to check
 * @returns {Boolean} true if there is at least one non-zero value in array
 */
function any(array) {
	for (var i =0; i< array.length;i++) {
		if (array[i] != 0) {
			return true;
		}
	}
	return false;
}

/**
 * Function to determine the number of elements in the given array
 * @param array the array to count from
 * @returns {Number} number of defined elements in the given array
 */
function numel(array) {
	var count = 0;
	for (var i=0;i<array.length;i++) {
		if (array[i] != undefined) {
			count++;
		}
	}
	return count;
}

/**
 * 
 * @param string
 * @param array
 * @returns {Array} 
 */
function strcmp(string, array) {
	var tempArray = zeros(array.length);
	for (var i=0;i<array.length;i++) {
		if (string.localeCompare(array[i]) == 0) {
			tempArray[i] = 1;
		}
	}
	return tempArray;
}

/**
 * 
 * @param array
 * @returns {Array}
 */
function diff(array) {
	var tempArray = new Array(array.length - 1);
	for (var i = 1;i<array.length;i++) {
		tempArray[i-1] = array[i] - array[i-1];
	}
	return tempArray;
}

function index(master, slave, logical) {
	var tempArray = [];

	if (logical) {
		for (var i=0;i<slave.length;i++) {
			if (slave[i] == 1) {
				tempArray.push(master[i]);
			}
		}
	} else {
		for (var i =0;i<slave.length;i++) {
			tempArray.push(master[slave[i]]);
		}
	}
	return tempArray;
}

function isEqual(first, second) {
	if (first.length != second.length) {
		return false;
	}
	for (var i =0;i<first.length;i++) {
		if (first[i] != second[i]) {
			return false;
		}
	}
	return true;
}

function find(array) {
	var tempArray = [];
	for (var i =0;i<array.length;i++) {
		if (array[i] != 0) {
			tempArray.push(i);
		}
	}
	return tempArray;
}

function unique(A) {
	var set = new Set();
	var C = [];
	var IA = [];
	var IC = [];
	for (var i=0;i<A.length;i++) {
		if (! set.contains(A[i])) {
			set.insert(A[i]);
		}
	}
	C = set.toArray();
	C = C.sort();
	for (var i = 0;i<C.length;i++) {
		IA.push(A.indexOf(C[i]));
	}
	for (var i =0;i<A.length;i++) {
		IC.push(C.indexOf(A[i]));
	}

	return [C, IA, IC];
}

function gatherFields(array, field) {
	var tempArray = new Array(array.length);
	for (var i=0;i<tempArray.length;i++) {
		tempArray[i] = eval("array[i]." + field);
	}
	return tempArray;
}

function equals(array, val) {
	var temp = zeros(array.length);
	for (var i = 0;i< array.length;i++) {
		if (array[i] === val) {
			temp[i] = 1;
		}
	}
	return temp;
}

function nan(length) {
	return fillArray(NaN, length);
}/**
 * 
 */

function getTaskSeglen(task) {
	
}
/**
 * @constructor
 */
function Screen() {
	this.screenWidth = screen.width; // width in pixels
	this.screenHeight = screen.height; // height in pixels
	this.ppi; // pixels per inch
	this.data = {}; // some sort of data object TODO: more notes
	this.thisPhase; // current running phase
	this.htmlPages = []; // all html pages to be used
	this.psiTurk; // psiTurk object
	this.keyboard = jglGetKeys; // pointer to keyboard status function
	this.mouse = jglGetMouse; // pointer to mouse status function
	this.assignmentID; // assignmentID given by turk
	this.hitID; // hitID given by turk
	this.workerID; // workerID given by turk
	this.startTime = jglGetSecs(); // start time, used for random state
	this.numTasks = 0; // number of tasks
}

/**
 * Private function to get URL parameters
 * @returns an array of the params from the URL
 */
function getURLParams() {
	var args = location.search;
	if (args.length > 0) {
		args = args.substring(1);
		return args.split('&');
	} else {
		return [];
	}
}

/**
 * Setups up screen object
 * @returns the setup screen object
 */
function initScreen() {
	var screen = new Screen();
	var params = getURLParams();
	if (! isEmpty(params)) {
		screen.assignmentID = params[0].substring(params[0].indexOf('='));
		screen.hitID = params[1].substring(params[1].indexOf('='));
		screen.workerID = params[2].substring(params[2].indexOf('='));
	} else {
		console.error("init Screen: could not get assignmentID, hitID, or workerID");
	}
	return screen;
	
}/**
 * @constructor
 */
function Phase() {
	this.verbose;
	this.parameter;
	this.seglen;
	this.segmin;
	this.segmax;
	this.segquant;
	this.segdur;
	this.segprob;
	this.segnames;
	this.seglenPrecompute;
	this.seglenPrecomputeSettings;
	this.writeTrace;
	this.getResponse;
	this.numBlocks;
	this.numTrials;
	this.timeInTicks;
	this.segmentTrace;
	this.responseTrace;
	this.phaseTrace;
	this.private;
	this.randVars;
	this.thisblock;
	this.random;
}

/**
 * @constructor
 */
function Trial() {
	this.thisseg;
}

function initTask(task, myscreen, startSegmentCallback,
		screenUpdateCallback, trialResponseCallback,
		startTrialCallback, endTrialCallback, 
		startBlockCallback, randCallback) {
	
	var knownFieldNames = ['verbose', 
	                   'parameter', 
	                   'seglen',
	                   'segmin', 
	                   'segmax', 
	                   'segquant', 
	                   'segdur',
	                   'segprob',
	                   'segnames', 
	                   'seglenPrecompute',
	                   'seglenPrecomputeSettings',
	                   'synchToVol', 
	                   'writeTrace', 
	                   'getResponse', 
	                   'numBlocks', 
	                   'numTrials', 
	                   'waitForBacktick', 
	                   'random', 
	                   'timeInTicks', 
	                   'timeInVols', 
	                   'segmentTrace', 
	                   'responseTrace', 
	                   'phaseTrace', 
	                   'parameterCode', 
	                   'private', 
	                   'randVars', 
	                   'fudgeLastVolume', 
	                   'collectEyeData',
	                   'data'
	            ];
	
	if (! task.hasOwnProperty("verbose")) {
		task.verbose = 1;
	}
	var taskFieldNames = fields(task);
	
	
	for (var i = 0; i < taskFieldNames.length;i++) {
		var upperMatch = upper(knownFieldNames).indexOf(taskFieldNames[i].toUpperCase());
		var match = knownFieldNames.indexOf(taskFieldNames[i]);
		if (upperMatch > -1 && match == -1) {
			console.error('initTask: task.' + taskFieldNames[i] + ' is miscappatilized, changing to task.' + knownFieldNames[upperMatch]);
			var value = task[taskFieldNames[i]];
			delete task[taskFieldNames[i]];
			task[knownFieldNames[upperMatch]] = value;
		} else if (upperMatch < 0) {
			console.error('initTaks: unknown task field task.' + taskFieldNames[i]);
		}
	}
	
	if (! task.hasOwnProperty("parameter")) {
		task.parameter = {};
		task.parameter.default = 1;
	}
	
	task.blocknum = 0;
	task.thistrial = new Trial();
	task.thistrial.thisseg = Infinity;
	
	if (task.hasOwnProperty("seglenPrecompute") && typeof task.seglenPrecompute === "object") {
		task = seglenPrecomputeValidate(task);
	} else {
		if (task.hasOwnProperty("seglen")) {
			if (task.hasOwnProperty("segmin") || task.hasOwnProperty("segmax")) {
				console.error("init Task: Found both seglen field and segmin/segmax. using seglen");
			}
			task.segmin = task.seglen;
			task.segmax = task.seglen;
		}
		if (! task.hasOwnProperty("segmin") || ! task.hasOwnProperty("segmax")) {
			console.error("init Task: Must specify task.segmin and task.segmax");
			throw "init Task"; // TODO: Should get input from user maybe?
		}
		
		if (! task.hasOwnProperty("segquant")) {
			task.segquant = zeros(task.segmin.length);
		} else if (task.segquant.length < task.segmin.length) {
			task.segquant = arrayPad(task.segquant, task.segmin.length, 0);
		}
		
		if (! task.hasOwnProperty("synchToVol")) {
			task.synchToVol = zeros(task.segmin.length);
		} else if (task.synchToVol.length < task.segmin.length) {
			task.synchToVol = arrayPad(task.synchToVol, task.segmin.length, 0);
		}
		
		if (! task.hasOwnProperty("segdur") || task.segdur.length < task.segmin.length) {
			task.segdur = [];
			task.segdur[task.segmin.length - 1] = [];
		} else if (task.segdur.length > task.segmin.length) {
			task.segmin = arrayPad(task.segmin, task.segdur.length, NaN);
			task.segmax = arrayPad(task.segmax, task.segdur.length, NaN);
			if (task.segquant.length < task.segmin.length) {
				task.segquant = arrayPad(task.segquant,task.segmin.length,0);
			}
			if (task.synchToVol.length < task.segmin.length) {
				task.synchToVol = arrayPad(task.synchToVol,task.segmin.length,0);
			}
		}
		
		if (! task.hasOwnProperty("segprob") || task.segprob.length < task.segmin.length) {
			task.segprob = [];
			task.segprob[task.segmin.length - 1] = [];
		}
		
		for (var i=0;i<task.segmin.length;i++) {
			if (! isEmpty(task.segdur[i])) {
				if (isEmpty(task.segprob[i])) {
					task.segprob[i] = fillArray(1 / task.segdur[i].length, task.segdur[i].length);
				} else if (task.segprob[i].length != task.segdur[i].length) {
					console.error("init Task: segprob and segdur for segment: " + i + " must have the same length");
					throw "init Task";
				} else if (Math.round(10000 * sum(task.segprob[i])) / 10000.0 != 1) {
					console.error("init Task: segprob for segment: " + i + " must add to one");
					throw "init Task";
				}
				
				task.segmin[i] = NaN;
				task.segmax[i] = NaN;
				
				task.segprob[i] = cumsum(task.segprob[i]);
				task.segprob[i] = [0].concat(task.segprob[i].slice(0, task.segprob[i].length - 1));
			} else if (! isEmpty(task.segprob[i])) {
				console.error("init Task: Non-empty segprob for empty segdur for seg: " + i);
				throw "init Task";
			} else if (isNaN(task.segmin[i])) {
				console.error("init Task: Segmin is nan without a segdur for seg: " + i);
				throw "init Task";
			}
		}
		
		for (var i = 0; i<task.segquant.length;i++) {
			if (task.segquant[i] != 0) {
				if (isEmpty(task.segdur[i])) {
					task.segdur[i] = jglMakeArray(task.segmin[i], task.segquant[i], task.segmax[i]);
					task.segprob[i] = cumsum(fillArray(1 / task.segdur[i].length, task.segdur[i].length));
					task.segprob[i] = [0].concat(task.segprob[i].slice(0,task.segprob[i].length - 1));
					task.segquant[i] = 0;
					task.segmin[i] = NaN;
					task.segmax[i] = NaN;
				}
			}
		}
		
		task.numsegs = task.segmin.length;
		
		if (task.segmin.length != task.segmax.length) {
			throw "init Task: task.segmin and task.segmax not of same length";
		}
		var difference = jQuery.map(task.segmax, function (n, i) {
			if (n - task.segmin[i] < 0)
				return 1;
			return 0;
		});
		if (any(difference)) {
			throw "init Task: task.segmin not smaller than task.segmax";
		}
		if (task.hasOwnProperty("segnames")) {
			if (numel(task.segnames) != task.numsegs) {
				console.error("init Task: task.segnames does not match the number of segments");
			} else {
				for (var i=0;i<task.segnames.length;i++) {
					// TODO: did not understand MATLAB code
				}
			}
		}
	}
	
	if (! task.hasOwnProperty("timeInTicks")) {
		task.timeInTicks = 0;
	}
	
	if (! task.hasOwnProperty("timeInVols")) {
		task.timeInVols = 0;
	}
	
	if (task.timeInTicks && task.timeInVols) {
		console.error("init Task: Time is both in ticks and vols, setting to vols");
		task.timeInTicks = 0;
	}
	//TODO :
//	var randTypes = ["block", "uniform", "calculated"];
//	
//	if (typeof task.randVars != "object") {
//		task.randVars = {};
//	}
//	task.randVars.n_ = 0;
//	task.randVars.calculated_n_ = 0;
//	
//	if (! task.randVars.hasOwnProperty("len_")) {
//		if (task.hasOwnProperty("numTrials") && task.numTrials > -1) {
//			task.randVars.len_ = Math.max(task.numTrials, 250);
//		} else {
//			task.randVars.len_ = 250;
//		}
//	}
//	
//	var randVarNames = fields(task.randVars);
//	var originalNames = [], shortNames = [];
//	for (var i=0;i<randVarNames.length;i++) {
//		if (any(strcmp(randVarNames[i], randTypes))) {
//			var vars = {};
//			var thisRandVar = [];
//			var thisIsCell;
//			
//			if (! $.isArray(task.randVars[randVarNames[i]])) {
//				thisRandVar[1] = task.randVars[randVarNames[i]];
//				thisIsCell = false;
//			} else {
//				thisRandVar[0] = task.randVars[randVarNames[i]];
//				thisIsCell = true;
//			}
//			
//			for (var i=0;i<thisRandVar.length;i++) {
//				var varBlock = [], totalTrials = 0;
//				for (var vnum = 0;vnum<vars.n_;i++) {
//					if (thisIsCell) {
//						shortNames[shortNames.length] = vars.names_[vnum];
//					}
//				}
//			}
//		}
//	}
	
	if (! task.hasOwnProperty("getResponse")) {
		task.getResponse = [];
	}
	task.getResponse = arrayPad(task.getResponse, task.numsegs, 0);
	
	if (! task.hasOwnProperty("numBlocks")) {
		task.numBlocks = Infinity;
	}
	
	if (! task.hasOwnProperty("numTrials")) {
		task.numTrials = Infinity;
	}
	
	if (! task.hasOwnProperty("waitForBacktick")) {
		task.waitForBacktick = 0;
	}
	
	if (! task.hasOwnProperty("random")) {
		task.random = 0;
	}
	
	task.parameter.doRandom_ = task.random;
	
	task.trialnum = 1;
	task.trialnumTotal = 0;
	
	myscreen.numTasks += 1;
	task.taskID = myscreen.numTasks;
	
	if (! task.hasOwnProperty("data")) {
		task.data = {};
		task.data.events = {};
		task.data.events.mouse = [];
		task.data.events.keyboard = [];
		task.data.trace = {};
		task.data.trace.mouse = [];
		task.data.trace.keyboard = [];
	}
	
	if (! task.hasOwnProperty("callback")) {
		task.callback = {};
	}
	
	if (startSegmentCallback != undefined && jQuery.isFunction(startSegmentCallback)) {
		task.callback.startSegment = startSegmentCallback;
	}
	
	if (trialResponseCallback != undefined && jQuery.isFunction(trialResponseCallback)) {
		task.callback.trialResponse = trialResponseCallback;
	}
	
	if (screenUpdateCallback != undefined && jQuery.isFunction(screenUpdataCallback)) {
		task.callback.screenUpdate = screenUpdateCallback;
	}
	
	if (endTrialCallback != undefined && jQuery.isFunction(endTrialCallback)) {
		task.callback.endTrial = endTrialCallback;
	}
	
	if (startTrialCallback != undefined && jQuery.isFunction(startTrialCallback)) {
		task.callback.startTrial = startTrialCallback;
	}
	
	if (startBlockCallback != undefined && jQuery.isFunction(startBlockCallback)) {
		task.callback.startBlock = startBlockCallback;
	}
	
	if (randCallback != undefined && jQuery.isFunction(randCallback)) {
		task.callback.rand = randCallback;
	} else {
		//TODO: didnt get line 496
	}
	
	//TODO: skipped line 510
	
	if (task.hasOwnProperty("seglenPrecompute")) {
		if (typeof task.seglenPrecompute != "object") {
			task = seglenPrecompute(task);
		}
	} else {
		task.seglenPrecompute = false;
	}
	
	task.thistrial = {};
	task.timeDiscrepancy = 0;
	
	if (! task.hasOwnProperty("fudgeLastVolume")) {
		task.fudgeLastVolume = 0;
	}
	
	//TODO: didnt setup randstate stuff
	
}

function seglenPrecompute(task) {
	task.seglenPrecompute = {};
	if (! task.hasOwnProperty("seglenPrecomputeSettings")) {
		task.seglenPrecomputeSettings = {};
	}

	var settingsDefaults = [
	                        {key: "synchWaitBeforeTime", value: 0.1},
	                        {key: "verbose", value: 1},
	                        {key: "averageLen", value: []},
	                        {key: "numTrials", value: []},
	                        {key: "maxTries", value: 500},
	                        {key: "idealDiffFromIdeal", value: []}
	                        ];

	for (var i=0;i<settingsDefaults.length;i++) {
		var settingsName = settingsDefaults[i].key;
		var settingsDefault = settingsDefaults[i].value;
		if (! task.seglenPrecomputeSettings.hasOwnProperty(settingsName)
				|| isEmpty(task.seglenPrecomputeSettings[settingsName])) {
			task.seglenPrecomputeSettings[settingsName] = settingsDefault;
		}
	}
	
	for (var i = 0; i<settingsDefaults.length;i++) {
		settingsName = settingsDefaults[i].key;
		eval("var " + settingsName + " = task.seglenPrecomputeSettings." + settingsName + ";");
	}
	
	var synchToVol = any(task.synchToVol);
	if (synchToVol) {
		if (! task.synchToVol[task.synchToVol.length - 1]) {
			console.error("init Task, segLenPrecompute: You have not set the last segment to have synchToVol though others are");
			throw "init Task";
		}
		if (! task.seglenPrecomputeSettings.hasOwnProperty("framePeriod")) {
			console.error("init Task, segLenPrecompute: You have set seglenPrecompute, and you have synchtoVol..."); //TODO: complete line 613
			throw "init Task";
		}
		var framePeriod = task.seglenPrecomputeSettings.framePeriod;
		if (! task.hasOwnProperty("fudgeLastVolume") || isEmpty(task.fudgeLastVolume)) {
			task.fudgeLastVolume = true;
		}
	} else {
		var framePeriod = NaN;
	}
	
	if (isEmpty(averageLen)) {
		var nSegs = task.segmin.length;
		var trialLens = [];
		trialLens[0] = {};
		trialLens[0].freq = 1;
		trialLens[0].min = 0;
		trialLens[0].max = 0;
		trialLens[0].segmin = [];
		trialLens[0].segmax = [];
		trialLens[0].synchmin = [];
		trialLens[0].synchmax = [];
		for (var i=0;i<nSegs;i++) {
			if (isNaN(task.segmin[i])) {
				var newTrialLens = [];
				var segprob = diff(task.segprob[i].concat([1]));
				for (var iTrial = 0;iTrial<trialLens.length;iTrial++) {
					for (var iSeg = 0;iSeg<task.segdur[i].length;iSeg++) {
						if (isEmpty(newTrialLens)) {
							newTrialLens = trialLens[iTrial];
						} else {
							newTrialLens[newTrialLens.length] = trialLens[iTrial];
						}
						newTrialLens[newTrialLens.length - 1].segmin[newTrialLens[newTrialLens.length - 1].segmin.length] = task.segdur[i][iSeg];
						newTrialLens[newTrialLens.length - 1].segmax[newTrialLens[newTrialLens.length - 1].segmax.length] = task.segdur[i][iSeg];
						newTrialLens[newTrialLens.length - 1].synchmin[newTrialLens[newTrialLens.length - 1].synchmin.length] = task.segdur[i][iSeg];
						newTrialLens[newTrialLens.length - 1].synchmax[newTrialLens[newTrialLens.length - 1].synchmax.length] = task.segdur[i][iSeg];
						newTrialLens[newTrialLens.length - 1].freq *= segprob[iSeg];
						newTrialLens[newTrialLens.length - 1].min += task.segdur[i][iSeg];
						newTrialLens[newTrialLens.length - 1].max += task.segdur[i][iSeg];

					}
				}
				trialLens = newTrialLens;
			} else if (task.segquant[i] == 0) {
				for (var iTrialLens=0;iTrialLens<trialLens.length;iTrialLens++) {
					trialLens[iTrialLens].min += task.segmin[i];
					trialLens[iTrialLens].max += task.segmax[i];
					trialLens[iTrialLens].segmin[trialLens[iTrialLens].segmin.length] = task.segmin[i];
					trialLens[iTrialLens].segmax[trialLens[iTrialLens].segmax.length] = task.segmax[i];
					trialLens[iTrialLens].synchmin[trialLens[iTrialLens].synchmin.length] = task.segmin[i];
					trialLens[iTrialLens].synchmax[trialLens[iTrialLens].synchmax.length] = task.segmax[i];
				}
			} else {
				// line 679
				var segLens = jglMakeArray(task.segmin[i], task.segquant[i], task.segmax[i]);
				if (segLens[segLens.length - 1] != task.segmax[i]) {
					segLens[segLens.length] = task.segmax[i];
				}
				var newTrialLens = [];
				for (var iTrialLen = 0;iTrialLen<trialLens.length;iTrialLen++) {
					var thisSegLenMin = task.segmin[i];
					var thisSegLen = task.segmax[i] - task.segmin[i];
					for (var iSegLen=0;iSegLen<segLens.length;iSegLen++) {
						if (isEmpty(newTrialLens)) {
							newTrialLens = trialLens[iTrialLen];
						} else {
							newTrialLens[newTrialLens.length] = trialLen[iTrialLen];
						}
						
						if (thisSegLen > 0) {
							var thisSegLenMax = Math.min(thisSegLenMin+task.segquant[i], task.segmax[i]);
							var freq = (thisSegLenMax=thisSegLenMin) / thisSegLen;
							thisSegLenMin = thisSegLenMax;
						} else {
							var freq = 1;
						}
						
						newTrialLens[newTrialLens.length - 1].freq *= freq;
						newTrialLens[newTrialLens.length - 1].min += segLens[iSegLen];
						newTrialLens[newTrialLens.length - 1].max += segLens[iSegLen];
						newTrialLens[newTrialLens.length - 1].segmin[newTrialLens[newTrialLens.length - 1].segmin.length] = segLens[iSegLen];
						newTrialLens[newTrialLens.length - 1].segmax[newTrialLens[newTrialLens.length - 1].segmax.length] = segLens[iSegLen];
						newTrialLens[newTrialLens.length - 1].synchmin[newTrialLens[newTrialLens.length - 1].synchmin.length] = segLens[iSegLen];
						newTrialLens[newTrialLens.length - 1].synchmax[newTrialLens[newTrialLens.length - 1].synchmax.length] = segLens[iSegLen];


					}
				}
				trialLens = newTrialLens;
			}
			
			if (task.synchToVol[i]) {
				var newTrialLens = [];
				for (var iTrialLen = 0; iTrialLen<trialLens.length;iTrialLen++) {
					var minLen = trialLens[iTrialLen].min;
					var maxLen = trialLens[iTrialLen].max;
					var segLens = jglMakeArray(Math.ceil(minLen / framePeriod) * framePeriod, framePeriod, Math.ceil(maxLen / framePeriod) * framePeriod);
					var segLensProbCompute = [minLen].concat(segLens);
					for (var iSegLen = 0;iSegLen < segLens.length;iSegLen++) {
						if (isEmpty(newTrialLens)) {
							newTrialLens = trialLens[iTrialLen];
						} else {
							newTrialLens[newTrialLens.length] = trialLens[iTrialLen];
						}
						newTrialLens[newTrialLens.length].min = segLens[iSegLen];
						newTrialLens[newTrialLens.length].max = segLens[iSegLen];
						
						if (sum(newTrialLens[newTrialLens.length - 1].synchmin) == sum(newTrialLens[newTrialLens.length - 1].synchmax)) {
							var freq = 1;
						} else {
							var freq = computeLenProb(newTrialLens[newTrialLens.length - 1].synchmin, newTrialLens[newTrialLens.length - 1].synchmax, segLensProbCompute[iSegLen], segLensProbCompute[iSegLen + 1]);
						}
						
						newTrialLens[newTrialLens.length - 1].freq *= freq;
						var synchWaitTime = newTrialLens[newTrialLens.length - 1].max - sum(newTrialLens[newTrialLens.length - 1].segmin);
						
						synchWaitTime = Math.max(synchWaitTime - synchWaitBeforeTime, 0);
						newTrialLens[newTrialLens.length - 1].segmin[newTrialLens[newTrialLens.length - 1].segmin.length] += synchWaitTime;
						newTrialLens[newTrialLens.length - 1].segmax[newTrialLens[newTrialLens.length - 1].segmax.length] = 
							newTrialLens[newTrialLens.length - 1].segmin[newTrialLens[newTrialLens.length - 1].segmin.length];
						newTrialLens[newTrialLens.length - 1].synchmin[newTrialLens[newTrialLens.length - 1].synchmin.length] = newTrialLens[newTrialLens.length - 1].min;
						newTrialLens[newTrialLens.length - 1].synchmax[newTrialLens[newTrialLens.length - 1].synchmax.length] = newTrialLens[newTrialLens.length - 1].max;
					}
				}
				trialLens = newTrialLens;
			}
		}
		
		var averageLen = 0, actualNumTrials = 0;
		
		for (var iTrialLen = 0;iTrialLen < trialLens.length; iTrialLen++) {
			averageLen += trialLens[iTrialLen].freq * (trialLens[iTrialLen].max + trialLens[iTrialLen].min) / 2;
		}
		
		if (verbose > 1) {
			for (var i =0 ; i < trialLens.length;i++) {
				var seglenStr = "seglen=[";
				for (iSeg = 0; iSeg < trialLens[i].segmin.length;iSeg++) {
					if (task.synchToVol[iSeg]) {
						var seglen = trialLens[i].segmin[iSeg] + synchWaitBeforeTime;
						seglenStr = seglenStr.concat("*", seglen);
					} else {
						if (trialLens[i].segmin[iSeg] == trialLens[i].segmax[iSeg]) {
							seglenStr = seglenStr.concat(trialLens[i].segmax[iSeg]);
						} else {
							seglenStr = seglenStr.concat(trialLens[i].segmin[iSeg] , "-", trialLens[i].segmax[iSeg]);
						}
					}
				}
				seglenStr = seglenStr.concat("]");
				
				if (trialLens[i].min == trialLens[i].max) {
					var trialLenStr = "trialLen: " + trialLens[i].min;
				} else {
					var trialLenStr = "trialMin: " + trialLens[i].min + " trialMax: " + trialLens[i].max;
				}
				
				var trialFreqStr = "frequency: " + trialLens[i].freq;
				console.log("initTask: seglenPrecompute ", trialLenStr, seglenStr, trialFreqStr);
			}
		}
	}
	if (isEmpty(numTrials)) {
		if (task.hasOwnProperty("numTrials") && ! isEmpty(task.numTrials) && isFinite(task.numTrials)) {
			numTrials = task.numTrials;
		} else if (task.hasOwnProperty("numBlocks") && ! isEmpty(task.numBlocks) && ! isFinite(task.numTrials)) {
			numTrials = task.numBlocks * task.parameter.totalN_;
		} else {
			console.error("init Task: Must set number of trials to precompute");
			throw "init Task";
		}
	}
	
	console.log("init Task: Computing " + numTrials + " trials with average length " + averageLen);
	var trialLength, seglen, newTrialLength;
	for (var i = 0;i < numTrials;i++) {
		var temp = getTaskSeglen(task);
		seglen = temp[0];
		task = temp[1];
		
		temp = computeTrialLen(seglen, task.synchToVol, framePeriod, synchWaitBeforeTime);
		trialLength[i] = temp[0];
		seglen = temp[1];
		task.seglenPrecompute.seglen[i] = seglen;
	}
	
	// TODO: line 838 randstate
	
	var diffFromIdeal = numTrials*averageLen - sum(trialLength);
	
	if (isEmpty(idealDiffFromIdeal)) {
		if (! isNaN(framePeriod)) {
			idealDiffFromIdeal = framePeriod / 2;
		} else {
			idealDiffFromIdeal = 1;
		}
	}
	
	var nTries = 0;
	
	while (Math.abs(diffFromIdeal) > idealDiffFromIdeal) {
		var randTrialNum = Math.ceil(rand(task)*numTrials);
		var temp = getTaskSeglen(task);
		seglen = temp[0];
		task = temp[1];
		
		temp = computeTrialLen(seglen, task.synchToVol, frmaePeriod, synchWaitBeforeTime);
		newTrialLength = temp[0];
		seglen = temp[1];
		var newDiffFromIdeal = numTrials*averageLen-
			(sum(index(trialLength,jglMakeArray(0, undefined, randTrialNum - 1).concat(jglMakeArray(randTrialNum+1, undefined, trialLength.length)), false))
					+ newTrialLength);
		
		if ((Math.abs(newDiffFromIdeal) < Math.abs(diffFromIdeal)) || (rand(task) < 0.1)) {
			trialLength(randTrialNum) = newTrialLength;
			task.seglenPrecompute.seglen[randTrialNum] = seglen;
			diffFromIdeal = newDiffFromIdeal;
		}
		
		nTries++;
		
		if (nTries % maxTries == 0) {
			// TODO: line 869
		}
	}
		
		// TODO: line 876

	trialLength = [];
	for (var i=0;i<numTrials;i++) {
		var temp = computeTrialLen(task.seglenPrecompute.seglen[i], task.synchToVol, framePeriod, synchWaitBeforeTime);
		trialLength[i] = temp[0];
		seglen = temp[1];
		if (verbose > 1) {
			console.log("init Task:seglenPrecompute Trial #" + i + ": seglen [" + seglen + "] trialLen: " + trialLength[i]);
		}
	}

	var numVolumes = [];
	if (! isNaN(framePeriod)) {
		numVolumes = Math.round((numTrials * averageLen) / framePeriod);
	}

	if (verbose) {
		console.log("init Task: seglenPrecompute Total length .... line 896"); // TODO: fix
		if (! isEmpty(numVolumes)) {
			console.log("init Task: seglenPrecompute volumes needed .... line 898"); // TODO: fix
		}
	}

	if (synchToVol || isEqual([trialLens.min], [trialLens.max])) {
		var lens = $.unique(trialLength);
		var freq = diff([0].concat(find(diff(trialLength.sort())), trialLength.length));
		if (trialLens != undefined) {
			var temp = unique(gatherFields(trialLens, "max")); 
			var expectedLens = temp[0];
			var dummy = temp[1];
			var indexes = temp[2];

			var expectedFreq = [];
			for (var iLen = 0; iLen< expectedLens.length;iLen++) {
				expectedFreq[iLen] = sum(gatherFields(index(trialLens, equals(indexes, iLen), true), "freq"));
			}
		} else {
			var expectedLens = lens;
			var expectedFreq = nan(lens.length);
		}
		lens = jQuery.map(lens, function (n, i) {
			return Math.round(n * 1000000) / 1000000;
		});
		expectedLens = jQuery.map(expectedLens, function (n, i) {
			return Math.round(n * 1000000) / 1000000;
		});

		for (var iLen = 0;iLen<expectedLens.length;iLen++) {
			var matchLen = find(equals(lens, expectedLens[iLen]));
			if (isEmpty(matchLen)) {
				if (expectedFreq[iLen] > 0) {
					console.log("something ... line 928 initTask");
				}
			} else {

			}
		}
	}
	
	task = seglenPrecomputeValidate(task);
	
	if (! isEmpty(numVolumes) && ! task.seglenPrecompute.hasOwnProperty("numVolumes")) {
		task.seglenPrecompute.numVolumes = numVolumes;
	}
	if (! task.seglenPrecompute.hasOwnProperty("totalLength")) {
		task.seglenPrecompute.totalLength = sum(trialLength);
	}
}

function computeTrialLen(seglen, synchToVol, framePeriod, synchWaitBeforeTime) {
	var seglenSynch = seglen;
	
	for (var i = 0;i < find(synchToVol).length;i++) {
		
	}
}

function computeLenProb(segmin, segmax, lenmin, lenmax) {
	
}

function seglenPrecomputeValidate(task) {
	
}/**
 * 
 */

function rand(task) {
	if (! task.hasOwnProperty("random")) {
		task.random = {};
		task.random.current = 0;
		task.random.nums = new Array(32);
		for (var i =0;i<task.random.nums.length;i++) {
			task.random.nums = Math.random();
		}
	}
	if (task.random.current == task.random.nums.length) {
		task.random.nums = randomResize(task.random.nums);
	}
	return task.random.nums[task.random.current++];
}

function randomResize(array) {
	var tempArray = new Array(array.length * 2);
	for (var i=0;i<array.length;i++) {
		tempArray[i] = array[i];
	}
	for (var i=array.length;i<tempArray.length;i++) {
		tempArray[i] = Math.random();
	}
	return tempArray;
}/**
 * Basic Set Data Structure.
 * @constructor
 */

function Set() {
	var data = [];
	var count = 0;
	
	function find(val) {
		for (var i=0;i<data.length;i++) {
			if (data[i] === val) {
				return i;
			}
		}
		return -1;
	}
	
	this.contains = function(val) {
		return find(val) > -1;
	}
	
	this.insert = function(val) {
		if (! this.contains(val)) {
			data[count++] = val;
			return true;
		}
		return false;
	}
	
	this.remove = function(val) {
		if (this.contains(val)) {
			data.splice(find(val), 1);
			count--;
			return true;
		}
		return false;
	}
	
	this.toArray = function() {
		var tempArray = new Array(data.length);
		
		for (var i=0;i<tempArray.length;i++) {
			tempArray[i] = data[i];
		}
		
		return tempArray;
	}
}