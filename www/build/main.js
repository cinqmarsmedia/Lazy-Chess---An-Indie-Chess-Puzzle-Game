webpackJsonp([0],{

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_device_feedback__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_device_feedback___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__ionic_native_device_feedback__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_taptic_engine__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_taptic_engine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__ionic_native_taptic_engine__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_launch_review__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_launch_review___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__ionic_native_launch_review__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__ionic_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_js_chess_js__ = __webpack_require__(607);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_js_chess_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__assets_js_chess_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ionic_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash__ = __webpack_require__(608);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__constants__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

//import { NavController } from 'ionic-angular';
//import { StockfishService } from './../../stockfish.service';
//import { startingPos } from './../../constants';
//import * as stockfish from "../../assets/stockfish.js"



//import { HttpClient } from '@angular/common/http';
//import { HostListener } from '@angular/core';









var iapID = "<iapID>";
var admobIDInter = {
    android: "<admobID_Android>",
    ios: "<admobID_iOS>",
};
var admobIDReward = {
    android: "<admobID_Android>",
    ios: "<admobID_iOS>",
};
var starThreshold = 30;
var starMilestones = [90, 80, 70, 60, 50, 40, 30, 20, 10, 5, 3, 1.1];
var modeDesc = {
    bestRand: [
        "Best + Random Mode",
        "In this mode one of your options will be your best move according to stockfish, and your other moves will be random. A great introductory mode, deceptively easy, where one blunder will likely cost you victory. The AI also improves in this mode.",
    ],
    shallow: [
        "Shallow Mode",
        "Stockfish is reduced to its shallowest depth and things get frenzied. A good simulation of blitz sensibilities, your moves won't be as refined and neither will your opponents.",
    ],
    allRand: [
        "Random Mode",
        'In this mode, stockfish is turned off and all your move choices are random. The game transforms into being about choosing the "least worst" move rather than the better of your two best. We are hard at work adding this feature, it will be available in a free update shortly. <b>Sign up for our newsletter to be notified and to earn a star!</b>',
    ],
    twobytwo: [
        "2 x 2 Mode",
        "A unique challenge where each player takes two moves in succession, one for themselves and another for their opponent. <b>Sign up for our newsletter to be notified and to earn a star!</b>",
    ],
    pieceFocus: [
        "By Piece Mode",
        "In this mode, you toggle between all the possible moves of a single piece stockfish chooses. We are hard at work adding this feature, it will be available in a free update shortly. <b>Sign up for our newsletter to be notified and to earn a star!</b>",
    ],
    bothSides: [
        "Both Sides Mode",
        "An extremely fun and challenging mode where you play as both white and black. As white you are trying to defeat black but blacks moves are much better. This mode does not work in online multiplayer",
    ],
    swipe: [
        "Swipe Mode",
        "Originally conceived as a standalone game, swipe mode lets you swipe in one of the eight cardinal or intermediate directions to move ALL chess pieces that can move in that direction on your turn. We are hard at work adding this feature, it will be available in a free update shortly. <b>Sign up for our newsletter to be notified and to earn a star!</b>",
    ],
};
var offlineAds = [
    {
        title: "The Devil's Calculator",
        button: "Download Free",
        iOS: "https://itunes.apple.com/us/app/the-devils-calculator/id1447599858?ls=1&mt=8",
        android: "https://play.google.com/store/apps/details?id=com.cinqmarsmedia.devilscalc",
        icon: "dc",
        description: "An educational math puzzle game named one of the 10 best indies of 2019 by PAX",
    },
    {
        title: "Anagraphs",
        button: "Download Free",
        iOS: this.anagraphsiOS,
        android: this.anagraphsAndroid,
        icon: "anagraphs",
        description: "A free new linguistic puzzle game by the creator of Synonymy",
    },
    {
        title: "PolitiTruth",
        button: "Download Free",
        iOS: "https://apps.apple.com/us/app/polititruth/id1217091559?ls=1",
        android: "https://play.google.com/store/apps/details?id=com.cinqmarsmedia.polititruth",
        icon: "polititruth",
        description: "a free, non-profit fake news quiz game sponsored by PolitiFact",
    },
    {
        title: "The Birds Upstairs",
        button: "Watch",
        iOS: "https://www.youtube.com/embed/2rI_em4MscE?rel=0&autoplay=1",
        android: "https://www.youtube.com/embed/2rI_em4MscE?rel=0&autoplay=1",
        icon: "birds",
        description: "An award winning student oscar nominated short film",
    },
    {
        title: "Word Unknown",
        button: "Download Free",
        iOS: "https://itunes.apple.com/us/app/word-unknown/id1064901570?mt=8&ign-mpt=uo%3D4",
        android: "https://play.google.com/store/apps/details?id=com.jarvisfilms.wordunknown",
        icon: "wordunknown",
        description: "An intelligent mix of hangman and Mastermind®",
    },
    //
    {
        title: "Synonymy",
        button: "Download Free",
        iOS: "https://apps.apple.com/us/app/synonymy/id924648807?ls=1",
        android: "https://play.google.com/store/apps/details?id=air.com.jarvisfilms.synonomy",
        icon: "syn",
        description: "An educational word game narrated by Richard Dawkins",
    },
];
var numConvert = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
};
//const intervalTime = 100;
var newGameFEN = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
//const newGameFEN ='7k/8/8/8/R7/1R6/8/1K6 w - - 0 1'
//const newGameFEN ='8/p7/K6k/7P/8/8/8/8 w - - 0 1'
//const newGameFEN = "8/1P1P2pp/8/4Pp2/2P5/7k/P7/1K6 w - - 0 1";
//const newGameFEN = "4q1k1/p4b2/2pN3p/2pn1pp1/P7/1P1P1N1P/2P2PP1/3Q2K1 w - - 0 1";
var thresh = [
    null,
    "friendPlay",
    "kosal",
    "frozen",
    "3",
    null,
    "bias",
    //"1700",
    "merida",
    "bestRand",
    null,
    "local",
    "lime",
    "pgn",
    //"200",
    null,
    "randOpp",
    "4",
    null,
    "oslo",
    "shallow",
    "leipzig",
    null,
    "depth",
    //"4700",
    "california",
    null,
    "chess24",
    "allRand",
    "pieceFocus",
]; //{ alpha: 100, kosal: 75, merida: 50, oslo: 25 };
var bestWhiteOpenings = ["e2e4", "d2d4", "c2c4", "g1f3"];
var goodWhiteOpenings = ["g2g3", "b2b3", "f2f4", "b1c3", "b2b4"]; // one from each? then concat
var HomePage = /** @class */ (function () {
    function HomePage(
    //private admobpro: AdMobPro,
    alertCtrl, 
    //public db: AngularFireDatabase, // COMMENT IN FOR FIREBASE
    events, menuCtrl, storage, platform, deviceFeedback, taptic, launchReview, loadingCtrl) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.events = events;
        this.menuCtrl = menuCtrl;
        this.storage = storage;
        this.platform = platform;
        this.deviceFeedback = deviceFeedback;
        this.taptic = taptic;
        this.launchReview = launchReview;
        this.loadingCtrl = loadingCtrl;
        //debugMode: any = true;
        this.steam = true; // set to false for mobile!!!!!!!!!!!!!
        this.currOpening = { w: null, b: null };
        this.mode = "nBest";
        this.wait = false;
        this.moveHistory = [];
        this.numChoices = 2;
        this.delayTime = 700;
        this.Math = Math;
        this.wideview = false;
        this.goodMoji = ["😄", "😊", "👍", "🤓", "👑"];
        this.badMoji = ["😬", "🧐", "🥺", "🤦‍♂️", "😧"];
        this.randNum = Math.floor(Math.random() * 50);
        //gameMoves:any=0;
        this.theme = "alpha";
        this.flashResult = false;
        this.percent = 99;
        this.anagraphsiOS = "https://cinqmarsmedia.com/anagraphs";
        this.anagraphsAndroid = "https://cinqmarsmedia.com/anagraphs";
        this.centipawns = 0;
        this.colorBlackAI = false;
        this.currDepth = 0;
        this.handicap = 0;
        this.highlighted = 0;
        //percentile:any=0;
        this.numChoicesTxt = numConvert[this.numChoices];
        this.thinking = false;
        this.thinkingTimer = false; //is true when the app is thinking, but turns false when the thinking time is over. Is a fallback if the chess engine takes too long to compute.
        //userTurn: any = true;
        //AIlevel: any = { depth: 20, chance: 30 }; //4.2% of the time random
        this.tapPrompt = false;
        this.newsletterSigned = false;
        //onResumeSubscription: any;
        this.username = "";
        this.whiteBottom = true;
        //AI: any = {};
        this.choices = [null, null, null, null];
        this.finalChoices = [1];
        this.lastchoice = { move: null, rank: null };
        this.prompt = true;
        this.waitMove = false;
        this.numGames = 0;
        this.gameType = "ai"; //ai,local,firebase
        this.playersTurn = true;
        this.awaitingRematch = false;
        this.playerOne = true;
        this.lastRewardFail = null;
        this.timerVal = 0;
        this.stockfishWhite = false;
        this.reviewed = false;
        this.pieceImages = __WEBPACK_IMPORTED_MODULE_8__constants__["a" /* base64Pieces */][this.theme];
        this.supressAds = true;
        this.adPromptCounter = -5;
        this.adPromptThreshold = 60;
        this.record = {
            best: 0,
            worst: 0,
            total: 0,
            totalChoices: 0,
            wins: 0,
            losses: 0,
            handicap: 0,
            modeTotals: {
                bestRand: 0,
                shallow: 0,
                allRand: 0,
                pieceFocus: 0,
                swipe: 0,
            },
        };
        this.newboardgamestate = true;
        this.difficultyBias = 0;
        this.repair = false;
        this.iOS = navigator.userAgent.match(/Mac|iPhone|iPad|iPod/i) &&
            !navigator.userAgent.match(/Electron/i);
        this.bestPercent = 99;
        this.boardVisable = true;
        this.storedFEN = null;
        this.stars = 0;
        this.color = "default";
        this.usePersonalisedAds = false;
        this.shownConsent = false;
        this.offlineAdIndex = 0;
        this.attemptedChallenges = []; // names of levels
        this.challengeDB = [];
        this.challengeUpdated = 0;
        //AISkill: number = 0; //skill level for AI Moves 0-20
        /**/
        this.loadingPop = this.loadingCtrl.create({
            content: "Please Wait",
            duration: 3000,
        });
        this.corrupted = __WEBPACK_IMPORTED_MODULE_7_lodash__["default"].throttle(this.fixCorruption.bind(this), 5000);
        this.actuallyMakeMove = __WEBPACK_IMPORTED_MODULE_7_lodash__["default"].throttle(this.actuallyMakeMoveInner.bind(this), 2500);
        this.prevMove = __WEBPACK_IMPORTED_MODULE_7_lodash__["default"].debounce(this.prevMoveInner.bind(this), 250);
        platform.ready().then(function () {
            //alert(navigator.userAgent);
            _this.setAnagraphsURL();
            if (window["cordova"] && window["cordova"].InAppBrowser) {
                window["open2"] = window["cordova"].InAppBrowser.open;
            }
            else {
                window["open2"] = window.open;
            }
            // this.startTimeout();
            if (_this.platform.is("cordova")) {
                window["store"].register({
                    id: iapID,
                    type: window["store"].NON_CONSUMABLE,
                });
                window["store"].refresh();
                window["store"].when(iapID).approved(function (p) {
                    _this.stars = starThreshold;
                    _this.events.publish("30stars");
                    _this.loadingPop.dismiss();
                    _this.thankyou();
                    _this.setData();
                    p.finish();
                });
                /*
          setTimeout(()=>{
          window["store"].refresh()
          },6000)
        */
                window["store"].when(iapID).owned(function () {
                    var p = window["store"].get(iapID);
                    console.log(p.owned);
                    if (p.owned && _this.stars < starThreshold) {
                        _this.stars = starThreshold;
                        _this.events.publish("30stars");
                    }
                    _this.loadingPop.dismiss();
                });
            }
        });
        document.addEventListener("admob.reward_video.reward", function () {
            //console.log("reward vid successfully completed");
            _this.loadingPop.dismiss();
            _this.earnedUpgrade(false);
        });
        document.addEventListener("admob.reward_video.load_fail", function () {
            _this.loadingPop.dismiss();
            var time = new Date().getTime();
            if (_this.lastRewardFail && time - _this.lastRewardFail > 900000) {
                _this.fallbackReward();
                _this.lastRewardFail = time;
            }
            else {
                _this.videoFailed();
            }
            if (!_this.lastRewardFail) {
                _this.lastRewardFail = time;
            }
            // show something
        });
        this.pieceTheme = this.pieceTheme.bind(this);
        if (this.platform.is("cordova")) {
            this.mobile = true;
        }
        else {
            this.mobile = false;
            this.stars = starThreshold;
        }
        /*
        this.onResumeSubscription = this.platform.resume.subscribe((result) => {
          this.syncChallenges();
        });
    */
        if (!this.mobile) {
            this.dimensions();
            window.onresize = function () {
                _this.dimensions();
            };
        }
        this.onPauseSubscription = this.platform.pause.subscribe(function (result) {
            _this.setAnagraphsURL();
            //unsub from queue
            if (_this._queueSub) {
                if (!_this._queueSub.closed) {
                    _this._queueSub.unsubscribe();
                    _this.db.list("/queue").remove();
                }
            }
            _this.setData();
        });
        //this.storage.set("data", {ray:'cool'}).then(()=>{})
        events.subscribe("changeColor", function (val) {
            if (thresh.indexOf(val) <= _this.stars) {
                _this.changeThemeColor(val);
                //this.color = val;
                //this.pieceImages = base64Pieces[this.theme];
                //this.boardVisable = false;
                _this.menuCtrl.close();
                _this.setData();
            }
            else {
                //this.events.publish("updateColor", this.color);
                _this.starPrompt(val);
            }
        });
        events.subscribe("mode", function (val) {
            var available = thresh.includes(val) || val == "nBest";
            if (available) {
                if (thresh.indexOf(val) > _this.stars && val !== "nBest") {
                    _this.starPrompt(val);
                    setTimeout(function () {
                        _this.events.publish("updateMode", _this.mode);
                    }, 0);
                }
                else {
                    if (_this.record.modeTotals[val] == 0 && val !== "nBest") {
                        _this.pop(modeDesc[val][0], modeDesc[val][1]);
                    }
                    _this.mode = val;
                    _this.setData();
                }
            }
            else {
                _this.popNews(modeDesc[val][0], modeDesc[val][1]);
                setTimeout(function () {
                    _this.events.publish("updateMode", _this.mode);
                }, 0);
            }
            _this.menuCtrl.close();
        });
        events.subscribe("changeTheme", function (val) {
            // go by num stars
            if (thresh.indexOf(val) <= _this.stars) {
                _this.theme = val;
                _this.pieceImages = __WEBPACK_IMPORTED_MODULE_8__constants__["a" /* base64Pieces */][_this.theme];
                _this.boardVisable = false;
                setTimeout(function () {
                    _this.boardVisable = true;
                }, 0);
                _this.menuCtrl.close();
                _this.setData();
            }
            else {
                _this.events.publish("updateTheme", _this.theme);
                _this.starPrompt(val);
            }
        });
        events.subscribe("resetData", function (val) {
            // ()() preserve in-app purchases (stars);
            var alert = _this.alertCtrl.create({
                title: "Reset ALL Data?",
                enableBackdropDismiss: true,
                subTitle: "The game will be fully reset including stars earned from watching ads or hitting milestones. Stars from donations will be preserved. <b>This cannot be undone.</b>",
                //message: "Are you sure you want to quit?",
                buttons: [
                    {
                        text: "cancel",
                    },
                    {
                        text: "Yes",
                        handler: function (data) {
                            var temp = _this.stars;
                            if (temp < starThreshold) {
                                temp = 0;
                            }
                            _this.storage.clear().then(function () {
                                _this.storage.set("lazyChessData", { stars: temp }).then(function () {
                                    window.location.reload(true);
                                });
                            });
                        },
                    },
                ],
            });
            alert.present();
        });
        events.subscribe("thinktime", function (val) {
            if (thresh.indexOf(val) > _this.stars) {
                _this.starPrompt(val);
            }
            else {
                if (val == "0") {
                    _this.abandonGame(true, "ai");
                    //this.asyncChoices();
                }
                _this.delayTime = val;
            }
            _this.menuCtrl.close();
        });
        events.subscribe("stats", function (val) {
            _this.showStats();
        });
        events.subscribe("code", function (val) {
            if (_this.iOS && _this.mobile) {
                //this.starPrompt("upgrade");
                _this.restorePurchase();
            }
            else {
                _this.codeInput();
            }
        });
        events.subscribe("devil", function (val) {
            if (_this.iOS) {
                _this.openLink("https://itunes.apple.com/app/id1447599858");
            }
            else if (navigator.userAgent.match(/Android/i)) {
                _this.openLink("https://play.google.com/store/apps/details?id=com.cinqmarsmedia.devilscalc");
            }
            else {
                _this.openLink("https://www.cinqmarsmedia.com/devilscalculator/");
            }
        });
        events.subscribe("anagraphs", function (val) {
            if (_this.iOS) {
                _this.openLink(_this.anagraphsiOS);
            }
            else if (navigator.userAgent.match(/Android/i)) {
                _this.openLink(_this.anagraphsAndroid);
            }
            else {
                _this.openLink("https://cinqmarsmedia.com/anagraphs");
            }
        });
        events.subscribe("openCMM", function (val) {
            //this.showInterAd()
            _this.openLink("https://cinqmarsmedia.com");
        });
        events.subscribe("upgrade", function (val) {
            //this.showInterAd()
            _this.starPrompt("upgrade");
        });
        events.subscribe("challengePrompt", function (val) {
            _this.challengesPrompt();
        });
        events.subscribe("pauseAds", function (val) {
            _this.adPrompt();
        });
        events.subscribe("difficulty", function (val) {
            if (thresh.indexOf(val) > _this.stars) {
                setTimeout(function () {
                    _this.events.publish("updateDifficulty", _this.numChoices);
                }, 0);
                // console.log(this.numChoices);
                _this.starPrompt(val);
            }
            else {
                if (_this.numChoices !== val) {
                    _this.abandonGame(true, "ai", val);
                }
            }
            _this.menuCtrl.close();
        });
        events.subscribe("abandon", function (val) {
            _this.abandonGame(true);
            //this.fixCorruption();
            _this.menuCtrl.close();
        });
        events.subscribe("guide", function (val) {
            _this.guide();
        });
        events.subscribe("playFriend", function (val) {
            if (!window.navigator.onLine) {
                _this.noInternet();
                return;
            }
            _this.abandonGame(_this.gameType !== "ai", "firebase");
            _this.playOnline(false);
            _this.menuCtrl.close();
        });
        events.subscribe("randOpp", function (val) {
            if (thresh.indexOf("randOpp") > _this.stars) {
                _this.starPrompt("randOpp");
            }
            else {
                _this.abandonGame(_this.gameType !== "ai", "firebase");
                _this.playRandom();
            }
            _this.menuCtrl.close();
        });
        events.subscribe("local", function (val) {
            if (thresh.indexOf("local") > _this.stars) {
                _this.starPrompt("local");
            }
            else {
                _this.abandonGame(_this.gameType !== "ai", "local");
            }
            _this.menuCtrl.close();
        });
        // deviceID / userID
        // FIREBASE EXAMPLE ------------
        //this.db.list('/database/tfdjk').push(Math.random())
        //this.db.list('/database').remove()
        // console.log(this.db);
        //---------------------------------
        //this.clearAI();
    }
    HomePage.prototype.ionViewDidEnter = function () {
        window["twttr"] = (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0], t = window["twttr"] || {};
            if (d.getElementById(id))
                return t;
            js = d.createElement(s);
            js.id = id;
            js.src = "https://platform.twitter.com/widgets.js";
            fjs.parentNode.insertBefore(js, fjs);
            t._e = [];
            t.ready = function (f) {
                t._e.push(f);
            };
            return t;
        })(document, "script", "twitter-wjs");
    };
    HomePage.prototype.handleKeyboardEvent = function (event) {
        if (event.key == "Tab" ||
            event.key == "a" ||
            event.key == "w" ||
            event.key.slice(0, 5) == "Arrow") {
            this.prevToggle();
        }
        if (event.key == "Enter" || event.key == "Space") {
            this.makeMove();
        }
        if (event.key == "m" || event.key == "M") {
            if (this.menuCtrl.isOpen()) {
                this.menuCtrl.close();
            }
            else {
                this.menuCtrl.open();
            }
        }
        if (event.key == "1") {
            this.cp();
        }
        if (event.key == "2") {
            this.dpth();
        }
        if (event.key == "3") {
            this.hdnicp();
        }
        if (event.key == "4") {
            this.history();
        }
        if (event.key == "s" || event.key == "S") {
            this.showStats();
        }
        if (event.key == "Backspace" || event.key == "Delete") {
            this.abandonGame(true);
        }
        if (event.key == "T" || event.key == "t") {
            this.openLink("https://www.twitch.tv/cinqmarsmedia/");
        }
        if (event.key == "D" || event.key == "d") {
            this.openLink("https://discord.com/invite/fwkMQCnk2R");
        }
    };
    HomePage.prototype.dimensions = function () {
        var ratio = window.innerWidth / window.innerHeight;
        this.wideview = ratio > 8 / 7 && window.innerWidth > 730;
    };
    HomePage.prototype.guide = function () {
        if (!window.navigator.onLine) {
            this.noInternet();
            return;
        }
        this.openLink("https://www.cinqmarsmedia.com/lazychess/guide/");
    };
    HomePage.prototype.fallbackReward = function () {
        this.showInterAd();
        this.showOfflineAd();
        this.earnedUpgrade(false);
    };
    HomePage.prototype.codeInput = function () {
        var _this = this;
        /**/
        if (this.iOS && this.mobile) {
            return;
        }
        var message = "Our non-profit makes our games freely available to academic institutions.";
        var prompt = this.alertCtrl.create({
            title: "Enter Academic Code",
            message: message,
            inputs: [
                {
                    name: "code",
                    placeholder: "L5X13QFS",
                },
            ],
            buttons: [
                {
                    text: "Cancel",
                    handler: function (data) { },
                },
                {
                    text: "Enter",
                    handler: function (data) {
                        if (_this.secretCode(data.code, false)) {
                            if (_this.stars >= 20) {
                                prompt.setMessage(message +
                                    '<br><span class="red">Full Game Already Unlocked</span>');
                            }
                            //this.result="EDU Unlock"
                            return true;
                        }
                        else {
                            prompt.setMessage(message +
                                '<br><span class="red">Code Incorrect. Contact info@cinqmarsmedia.com to request a code</span>');
                            return false;
                        }
                    },
                },
            ],
        });
        prompt.present();
    };
    HomePage.prototype.challengesPrompt = function (page) {
        //this.challengeDB;
        //this.challengeDB=[{name:'The Queen\'s Gambit',fen:'rnbqkbnr/ppp1pppp/8/8/2pP4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 1',message:'<img class="challengeImg" align="right" src="https://cinqmarsmedia.com/lazychess/challengeImages/headshot.jpg"> Your opponent has fallen for the imfamous Queen\'s Gambit. Can you make them pay?'},{name:'The Lucena',fen:'1K1k4/1P6/8/8/8/8/r7/2R5 w - - 0 1',message:'One of the most common rook-pawn endgames in chess, the lucena Magnus Carlson is a grandmaster. He chose the queens gabit as a challenge because it was a thing that was a thing <img src="picture"> you can follow magnus on twitch <a href="url">here</a>'}];
        var _this = this;
        if (page === void 0) { page = 1; }
        // BOLD IF UNBEATEN //checkmark?
        //var challenges=['1','2','3','4','5','6','7','8','9','10','11','12','13','14'];
        var buttons = [];
        this.challengeDB.forEach(function (chall, i) {
            var newchall = !_this.attemptedChallenges.includes(chall.name);
            buttons.push({
                text: (newchall ? "● " : "") + chall.name,
                cssClass: newchall ? "challengeButtonNew" : "challengeButton",
                handler: function () {
                    //var numChallUnlocked=0;
                    var challs = 0;
                    var req;
                    for (var x = 0; x < starThreshold; x++) {
                        if (!thresh[x]) {
                            challs++;
                            if (challs == i + 1) {
                                req = x + 1;
                                break;
                            }
                        }
                    }
                    //console.log(req);
                    if (_this.stars < req && newchall) {
                        _this.openStarPrompt(req);
                    }
                    else {
                        _this.abandonGame(true, "ai", false, chall);
                    }
                },
            });
        });
        //buttons=buttons.reverse()
        buttons.push({
            text: "Cancel",
            handler: function (data) { },
        }
        // a "more" button? Like another page?
        );
        var alert = this.alertCtrl.create({
            // title: "Full Game Unlocked",
            //subTitle: 'wowowow',
            // message: test,
            cssClass: "challengePrompt",
            buttons: buttons,
        });
        alert.present();
    };
    HomePage.prototype.thankyou = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "Full Game Unlocked",
            //subTitle: 'wowowow',
            message: "Thank you for your donation! As a non-profit, we rely on your support and are incredibly grateful for it. Please keep in touch with our organization and get updates on all our new projects by signing up for our newsletter below.",
            buttons: [
                {
                    text: "No Thanks",
                    handler: function (data) { },
                },
                {
                    text: "Ok!",
                    handler: function () {
                        _this.newsletterPop();
                    },
                },
            ],
        });
        alert.present();
    };
    HomePage.prototype.setAnagraphsURL = function () {
        if (!this.anagraphsiOS.includes("cinqmarsmedia")) {
            return;
        }
        if (new Date().getTime() > 1617696000000) {
            this.anagraphsiOS = "https://itunes.apple.com/app/id1537359369";
            this.anagraphsAndroid =
                "https://play.google.com/store/apps/details?id=com.cinqmarsmedia.anagraphs";
        }
    };
    HomePage.prototype.keyboardShortcuts = function () {
        var alert = this.alertCtrl.create({
            title: "Keyboard Shortcuts",
            message: "commit move: <b>space or enter</b><br>toggle moves: <b>tab or arrow keys</b><br>forfeit: <b>delete or backspace</b><br><br>Menu: <b>m</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Stats: <b>s</b><br>Advantage: <b>1</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Depth: <b>2</b><br>AI Bias: <b>3</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; History: <b>4</b><br>Twitch: <b>t</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Discord: <b>d</b>",
            buttons: [
                {
                    text: "Ok",
                    handler: function (data) { },
                },
            ],
        });
        alert.present();
    };
    HomePage.prototype.getCodes = function (quick) {
        return ["12345", "6789"];
    };
    HomePage.prototype.syncChallenges = function () {
        //console.log('hello');
        if (new Date().getTime() - this.challengeUpdated < 36400000) {
            return;
        }
        /* // COMMENT IN FOR FIREBASE
        this._challSub = this.db
          .list("/challenges")
          .valueChanges()
          .subscribe((data) => {
            console.log(data);
            this.challengeDB = data;
            this.updateChallCount();
            this.challengeUpdated = new Date().getTime();
            this.setData();
            this._challSub.unsubscribe();
          });
          */
    };
    HomePage.prototype.updateChallCount = function (canonlybebigger) {
        var _this = this;
        if (canonlybebigger === void 0) { canonlybebigger = true; }
        var newchalls = 0;
        this.challengeDB.forEach(function (chall) {
            if (!_this.attemptedChallenges.includes(chall.name)) {
                newchalls++;
            }
        });
        if (newchalls > 0 || !canonlybebigger) {
            this.events.publish("updateChallenges", newchalls);
        }
    };
    HomePage.prototype.secretCode = function (code, quickexpiry) {
        var realCodes = this.getCodes(quickexpiry);
        if (code == realCodes[0] || code == realCodes[1]) {
            this.stars = starThreshold;
            this.setData();
            this.alertCtrl.create({
                title: "Full Game Successfully Unlocked",
                buttons: [
                    {
                        text: "Ok",
                        handler: function (data) { },
                    },
                ],
            });
            this.prompt.present();
            return true;
        }
        else {
            return false;
        }
    };
    HomePage.prototype.arrayN = function (int) {
        return Array(int);
    };
    HomePage.prototype.fixCorruption = function () {
        /*
         let store={username:this.username,supressAds:this.supressAds,adPromptCounter:this.adPromptCounter,record:this.record,adPromptThreshold:this.adPromptThreshold,theme:this.theme,bestPercent:this.bestPercent,storedFEN:this.game.fen()}
    
        this.storage.set("lazyChessData", store).then(()=>{
         window.location.reload();
        });
    */
    };
    HomePage.prototype.pieceTheme = function (piece) {
        // console.log(piece);
        if (!piece) {
            return "";
        }
        return "data:image/svg+xml;base64," + __WEBPACK_IMPORTED_MODULE_8__constants__["a" /* base64Pieces */][this.theme][piece];
    };
    HomePage.prototype.changeThemeColor = function (val) {
        //console.log(val, themes);
        var root = document.documentElement;
        root.style.setProperty("--Black", "rgb(" +
            __WEBPACK_IMPORTED_MODULE_8__constants__["d" /* themes */][val].black[0] +
            "," +
            __WEBPACK_IMPORTED_MODULE_8__constants__["d" /* themes */][val].black[1] +
            "," +
            __WEBPACK_IMPORTED_MODULE_8__constants__["d" /* themes */][val].black[2] +
            ")");
        root.style.setProperty("--White", "rgb(" +
            __WEBPACK_IMPORTED_MODULE_8__constants__["d" /* themes */][val].white[0] +
            "," +
            __WEBPACK_IMPORTED_MODULE_8__constants__["d" /* themes */][val].white[1] +
            "," +
            __WEBPACK_IMPORTED_MODULE_8__constants__["d" /* themes */][val].white[2] +
            ")");
        this.color = val;
        this.events.publish("updateColor", this.color);
        this.setData();
    };
    HomePage.prototype.starPrompt = function (val) {
        if (val === void 0) { val = ""; }
        if (this.stars >= starThreshold) {
            if (this.mobile) {
                this.thankyou();
            }
            else {
                this.openLink("https://cinqmarsmedia.com");
            }
            return;
        }
        if (!this.shownConsent && this.platform.is("cordova")) {
            this.showConsents();
            this.openStarPrompt(thresh.indexOf(val) + 1);
        }
        else {
            this.openStarPrompt(thresh.indexOf(val) + 1);
        }
    };
    HomePage.prototype.restorePurchase = function () {
        if (this.platform.is("cordova")) {
            window["store"].refresh();
        }
    };
    HomePage.prototype.openStarPrompt = function (val) {
        var _this = this;
        var title;
        if (val > 0) {
            title = "Feature Requires " + val + " Star" + (val > 1 ? "s" : "");
        }
        else {
            title = "Earn More Stars";
        }
        if (val == "upgrade" && this.platform.is("cordova")) {
            window["store"].refresh();
        }
        var alert = this.alertCtrl.create({
            title: title,
            message: "You currently have <b>" +
                this.stars +
                "</b> star" +
                (this.stars !== 1 ? "s" : ""),
            enableBackdropDismiss: false,
            subTitle: "Earn stars by hitting milestones or by watching a quick video. Reach <b>" +
                starThreshold +
                "</b> stars or make a one time donation to unlock every feature and suppresses all advertisements.",
            //message: "Are you sure you want to quit?",
            buttons: [
                {
                    text: "No Thanks",
                    handler: function (data) { },
                },
                {
                    text: "Watch Video for 1 star",
                    handler: function (data) {
                        if (window.navigator.onLine) {
                            _this.showRewardAd();
                        }
                        else {
                            _this.noInternet();
                        }
                    },
                },
                {
                    text: "Donate",
                    handler: function (data) {
                        if (window.navigator.onLine) {
                            if (_this.mobile) {
                                _this.loadingPop.present();
                                window["store"].order(iapID);
                            }
                            else {
                                _this.stars = starThreshold;
                                _this.events.publish("30stars");
                            }
                        }
                        else {
                            _this.noInternet();
                        }
                        // this.loadingPop.present();
                    },
                },
            ],
        });
        // var alert = this.alertCtrl.create({
        //   title: title,
        //   message:
        //     "You currently have <b>" +
        //     this.stars +
        //     "</b> star" +
        //     (this.stars !== 1 ? "s" : ""),
        //   enableBackdropDismiss: false,
        //   subTitle:
        //     "Earn stars by hitting milestones or by supporting our non-profit by watching a quick video. Reaching 30 stars or a one time upgrade unlocks every feature and suppresses all advertisements.",
        //   //message: "Are you sure you want to quit?",
        //   buttons: [
        //     {
        //       text: "No Thanks",
        //       handler: (data) => {},
        //     },
        //     {
        //       text: "Watch Video for 1 star",
        //       handler: (data) => {
        //         // after callback
        //         this.showRewardAd();
        //       },
        //     },
        //     {
        //       text: "Upgrade",
        //       handler: (data) => {},
        //     },
        //   ],
        // });
        alert.present();
    };
    HomePage.prototype.noInternet = function () {
        var alert = this.alertCtrl.create({
            enableBackdropDismiss: false,
        });
        alert.setTitle("Please Connect to Internet");
        alert.setMessage("You must have an internet connection to use this feature");
        alert.addButton({
            text: "Ok",
            handler: function (data) { },
        });
        alert.present();
    };
    HomePage.prototype.ionViewCanEnter = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get("lazyChessData").then(function (val) {
                //console.log(val);
                if (val) {
                    if (val.username) {
                        _this.username = val.username;
                        _this.theme = val.theme;
                        _this.record = val.record;
                        _this.reviewed = val.reviewed;
                        _this.bestPercent = val.bestPercent;
                        _this.storedFEN = val.storedFEN;
                        _this.shownConsent = val.shownConsent;
                        _this.offlineAdIndex = val.offlineAdIndex;
                        _this.attemptedChallenges = val.attemptedChallenges;
                        _this.challengeDB = val.challengeDB;
                        _this.challengeUpdated = val.challengeUpdated;
                        if (_this.stars < val.stars) {
                            _this.stars = val.stars;
                        }
                        _this.percent = _this.percentile();
                        _this.elo = _this.calcELO();
                        _this.color = val.color;
                        _this.updateChallCount();
                        // updated variables in new versions
                        if (val.handicap) {
                            _this.handicap = val.handicap;
                        }
                        if (!val.newsletterSigned) {
                            _this.newsletterSigned = false;
                        }
                        else {
                            _this.newsletterSigned = val.newsletterSigned;
                        }
                        if (!val.mode) {
                            _this.mode = "nBest";
                        }
                        else {
                            _this.mode = val.mode;
                            _this.events.publish("updateMode", _this.mode);
                        }
                        if (!val.lastRewardFail) {
                            _this.lastRewardFail = null;
                        }
                        else {
                            _this.lastRewardFail = val.lastRewardFail;
                        }
                        if (!val.numChoices) {
                            _this.numChoices = 2;
                        }
                        else {
                            _this.numChoices = val.numChoices;
                            _this.events.publish("updateDifficulty", _this.numChoices);
                        }
                        if (!val.moveHistory) {
                            _this.moveHistory = [];
                        }
                        else {
                            _this.moveHistory = val.moveHistory;
                        }
                        if (!val.record.handicap) {
                            _this.record.handicap = 0;
                        }
                        else {
                            _this.record.handicap = val.record.handicap;
                        }
                        if (!val.record.modeTotals) {
                            _this.record.modeTotals = {
                                bestRand: 0,
                                allRand: 0,
                                pieceFocus: 0,
                                swipe: 0,
                            };
                        }
                        else {
                            _this.record.modeTotals = val.record.modeTotals;
                            if (!val.record.modeTotals.shallow) {
                                _this.record.modeTotals.shallow = 0;
                            }
                            if (!val.record.modeTotals.twobytwo) {
                                _this.record.modeTotals.twobytwo = 0;
                            }
                            if (!val.record.modeTotals.bothSides) {
                                _this.record.modeTotals.bothSides = 0;
                            }
                        }
                    }
                    else if (val.stars) {
                        if (_this.stars < val.stars) {
                            _this.stars = val.stars;
                        }
                    }
                }
                _this.syncChallenges();
                if (_this.stars >= starThreshold) {
                    _this.shownConsent = true;
                    _this.events.publish("30stars");
                }
                if (_this.username == "") {
                    _this.username = _this.genUID();
                    _this.setData();
                }
                if (_this.theme !== "alpha") {
                    _this.pieceImages = __WEBPACK_IMPORTED_MODULE_8__constants__["a" /* base64Pieces */][_this.theme];
                    _this.events.publish("updateTheme", _this.theme);
                }
                if (_this.color !== "default") {
                    _this.changeThemeColor(_this.color);
                }
                //this.pieceImages=;
                //console.log(this.pieceImages);
                /*
        if (!this.supressAds && this.mobile){
        this.admobpro.hideBanner();
        }
        */
                //this.bannerAds()
                resolve(true);
                /*
         this._fbSubRanking = this.db.list('/users/'+this.genUID()).valueChanges().subscribe(data => {
                console.log(data);
        
        
                resolve(true);
        
              })
        */
            });
        });
    };
    HomePage.prototype.ionViewWillEnter = function () {
        //this.storedFEN=null
        this.initStockfish();
        this.newGame();
    };
    /*  */
    HomePage.prototype.apticCall = function (type) {
        var _this = this;
        if (type === void 0) { type = 3; }
        if (this.mobile) {
            setTimeout(function () {
                _this.deviceFeedback.haptic(type);
                _this.taptic.selection();
            }, 0);
        }
    };
    HomePage.prototype.ionViewWillUnload = function () {
        this.onPauseSubscription.unsubscribe();
        this._challSub.unsubscribe();
    };
    HomePage.prototype.ngOnDestroy = function () {
        // always unsubscribe your subscriptions to prevent leaks
        //this._fbSubRanking.unsubscribe();
        this._fbSubGame.unsubscribe();
        this._queueSub.unsubscribe();
    };
    // this.supressAds=val.supressAds;    this.adPromptCounter=val.adPromptCounter;
    HomePage.prototype.setData = function () {
        //let store = this.wrapVariables();
        var store = {
            username: this.username,
            supressAds: this.supressAds,
            adPromptCounter: this.adPromptCounter,
            record: this.record,
            adPromptThreshold: this.adPromptThreshold,
            theme: this.theme,
            bestPercent: this.bestPercent,
            stars: this.stars,
            color: this.color,
            numChoices: this.numChoices,
            handicap: this.handicap,
            consent: this.shownConsent,
            offlineAdIndex: this.offlineAdIndex,
            attemptedChallenges: this.attemptedChallenges,
            challengeDB: this.challengeDB,
            challengeUpdated: this.challengeUpdated,
            mode: this.mode,
            newsletterSigned: this.newsletterSigned,
            storedFEN: this.storedFEN,
            moveHistory: this.moveHistory,
            lastRewardFail: this.lastRewardFail
        };
        this.storage.set("lazyChessData", store);
    };
    HomePage.prototype.wrapVariables = function () {
        var _this = this;
        var persist = ["position", "choices"];
        var state = {};
        persist.forEach(function (prop) {
            state[prop] = _this[prop];
        });
        return state;
    };
    HomePage.prototype.unwrapVariables = function (state) {
        for (var prop in state) {
            this[prop] = state[prop];
        }
    };
    HomePage.prototype.genUID = function (num) {
        if (num === void 0) { num = 30; }
        return Math.random().toString(36).substr(2, num);
    };
    HomePage.prototype.ionViewWillLeave = function () {
        this._fbSubGame.unsubscribe();
        //this._fbSubRanking.unsubscribe();
    };
    HomePage.prototype.abandonGame = function (prompt, gameType, setMoves, gameobj, colorBlack) {
        // how to do this?
        var _this = this;
        if (prompt === void 0) { prompt = false; }
        if (gameType === void 0) { gameType = "ai"; }
        if (setMoves === void 0) { setMoves = false; }
        if (gameobj === void 0) { gameobj = { fen: newGameFEN }; }
        if (colorBlack === void 0) { colorBlack = false; }
        if (prompt &&
            this.gameType !== "local" &&
            !this.isNewGame() &&
            this.moveHistory.length > 1) {
            var alert = this.alertCtrl.create({
                title: "Are you sure?",
                enableBackdropDismiss: false,
                subTitle: "Quitting is considered a loss",
                //message: "Are you sure you want to quit?",
                buttons: [
                    {
                        text: "cancel",
                    },
                    {
                        text: "Yes",
                        handler: function (data) {
                            if (setMoves) {
                                _this.numChoices = setMoves;
                            }
                            if (_this.gameType !== "ai") {
                                _this.gameConcluded(false);
                            }
                            else {
                                _this.updateRank(false);
                                if (_this.gameType == "ai") {
                                    _this.abandonGame(false, "ai", false, gameobj, colorBlack);
                                }
                                else {
                                    _this.abandonGame(false, gameType);
                                }
                            }
                        },
                    },
                ],
            });
            alert.present();
        }
        else {
            if (setMoves) {
                this.numChoices = setMoves;
            }
            this.removeTimer();
            this.removeHighlighting("opp");
            this.removeHighlighting("player");
            this.whiteBottom = !colorBlack;
            this.playersTurn = true;
            this.stockfishWhite = colorBlack;
            this.colorBlackAI = colorBlack;
            this.storedFEN = null;
            if (this.gameType !== "ai" && this.gameType !== "local") {
                if (this._fbSubGame) {
                    this.db.list(this.gameType).push("QUIT");
                    //this.db.list(this.gameType).remove(); // delete
                    this._fbSubGame.unsubscribe();
                    //this.gameConcluded(false)
                }
                this.gameType = "ai";
            }
            else {
                this.gameType = gameType;
            }
            if (this.gameType == "local") {
                var pass = this.alertCtrl.create({
                    title: "Pass & Play",
                    enableBackdropDismiss: false,
                    subTitle: "Player One should prepare to make their opening move",
                    buttons: [
                        {
                            text: "Ready",
                            handler: function (data) { },
                        },
                    ],
                });
                pass.present();
            }
            this.setData();
            this.thinking = true;
            this.initStockfish();
            if (gameobj.color) {
                this.colorBlackAI = gameobj.color == "black";
            }
            this.newGame(gameobj.fen);
            if (typeof gameobj.name !== "undefined") {
                this.loadChallenge(gameobj);
            }
            if (this.gameType == "online") {
                this.playRandom();
            }
            this.menuCtrl.close();
        }
    };
    HomePage.prototype.loadChallenge = function (chall) {
        var alert = this.alertCtrl.create({
            title: chall.name,
            cssClass: "challengeInfo",
            //subTitle: 'wowowow',
            message: chall.message,
            buttons: [
                {
                    text: "Ok",
                    handler: function (data) { },
                },
            ],
        });
        if (!this.attemptedChallenges.includes(chall.name)) {
            this.attemptedChallenges.push(chall.name);
            this.updateChallCount(false);
        }
        this.setData();
        alert.present();
    };
    HomePage.prototype.adPrompt = function (warn) {
        var _this = this;
        if (warn === void 0) { warn = false; }
        var adAlert = this.alertCtrl.create({
            title: "Non-Profit Mission",
            enableBackdropDismiss: false,
            subTitle: "Support our Educational Non-Profit",
            message: "By watching a quick video, you can support our 501(c)3 and have all other ads removed for 100 moves. This stacks if you watch multiple videos!",
            buttons: [
                {
                    text: "No Thanks",
                    handler: function (data) {
                        if (warn) {
                            _this.supressAds = false;
                            //console.log(this.supressAds);
                            //this.bannerAds();
                            //this.admobpro.showBanner(this.admobpro.AD_POSITION.BOTTOM_CENTER);
                            _this.setData();
                        }
                        else {
                            _this.adPromptThreshold = _this.adPromptThreshold * 2;
                        }
                    },
                },
                {
                    text: "Watch Video",
                    handler: function (data) {
                        _this.showRewardAd();
                    },
                },
            ],
        });
        adAlert.present();
    };
    HomePage.prototype.updateRank = function (won) {
        this.showInterAd();
        if (this.gameType == "local") {
            return;
        }
        if (won) {
            this.record.wins++;
        }
        else {
            this.record.losses++;
        }
        this.percent = this.percentile();
        this.elo = this.calcELO();
        if (this.percent < this.bestPercent) {
            for (var i = 0; i < starMilestones.length; i++) {
                if (this.percent <= starMilestones[i] &&
                    this.bestPercent > starMilestones[i]) {
                    this.bestPercent = starMilestones[i];
                    this.earnedUpgrade(Math.floor(starMilestones[i]));
                    break;
                }
            }
            this.syncChallenges();
            /*
            if (percentRank < 50 && this.bestPercent >= 50) {
              //if (this.stars == 0) {
                this.earnedUpgrade(true);
              //}
            } else if (percentRank < 30 && this.bestPercent > 30) {
              //-----------------------
              this.earnedUpgrade(true);
            } else if (percentRank < 20 && this.bestPercent > 20) {
              this.earnedUpgrade(true);
            } else if (percentRank < 10 && this.bestPercent > 10) {
              this.earnedUpgrade(true);
            } else if (percentRank < 5 && this.bestPercent > 5) {
              this.earnedUpgrade(true);
            } else if (percentRank < 2 && this.bestPercent > 2) {
              this.earnedUpgrade(true);
            } else if (percentRank < 1.1 && this.bestPercent > 1.1) {
              this.earnedUpgrade(true);
            }
      
            this.bestPercent = percentRank;
      */
        }
    };
    HomePage.prototype.unlockChallenge = function (earned, indx) {
        var _this = this;
        var pre;
        if (earned) {
            pre =
                "You completed a game in the top <b>" +
                    earned +
                    "%</b> of all players worldwide and";
        }
        else {
            pre = "You";
        }
        var alert = this.alertCtrl.create({
            title: "Congratulations!",
            message: pre +
                " have earned a star. A new challenge, <b>" +
                this.challengeDB[indx].name +
                "</b> has been unlocked!",
            buttons: [
                {
                    text: "Later",
                    handler: function () { },
                },
                {
                    text: "Play Now",
                    handler: function () {
                        _this.abandonGame(true, "ai", false, _this.challengeDB[indx]);
                    },
                },
            ],
        });
        alert.present();
    };
    HomePage.prototype.earnedUpgrade = function (earned) {
        if (earned === void 0) { earned = false; }
        this.stars++;
        this.setData();
        var themes = ["kosal", "merida", "oslo", "california"];
        var colors = ["frozen", "lime", "leipzig", "chess24"];
        //console.log(this.stars);
        if (this.stars < starThreshold) {
            if (!thresh[this.stars - 1]) {
                var indx = -1;
                for (var x = 0; x < this.stars; x++) {
                    if (!thresh[x]) {
                        indx++;
                    }
                }
                //this.challengeDB.length;
                if (indx > -1 && this.challengeDB[indx]) {
                    this.unlockChallenge(earned, indx);
                }
                else {
                    this.earnedStar(earned);
                }
            }
            else {
                if (themes.includes(thresh[this.stars - 1])) {
                    this.upgradePiece(thresh[this.stars - 1], earned);
                }
                else if (colors.includes(thresh[this.stars - 1])) {
                    this.upgradeColor(thresh[this.stars - 1], earned);
                }
                else {
                    // new feature
                    this.upgradeFeature(thresh[this.stars - 1], earned);
                }
            }
        }
    };
    HomePage.prototype.videoFailed = function () {
        var alert = this.alertCtrl.create({
            title: "Failed To Load Video",
            message: "Video Ads are not available right now, please try again later. Sometimes you may need to wait up to 20 min between rewards.",
            buttons: [
                {
                    text: "Ok",
                    handler: function () { },
                },
            ],
        });
        alert.present();
    };
    HomePage.prototype.earnedStar = function (earned) {
        if (earned === void 0) { earned = false; }
        var pre;
        if (earned) {
            pre =
                "You completed a game in the top <b>" +
                    earned +
                    "%</b> of all players worldwide and";
        }
        else {
            pre = "You";
        }
        var alert = this.alertCtrl.create({
            title: "Congratulations!",
            message: pre +
                " have earned a star. A new color theme has been unlocked. You can change back anytime using the menu",
            buttons: [
                {
                    text: "Ok",
                    handler: function () { },
                },
            ],
        });
        alert.present();
    };
    HomePage.prototype.upgradeFeature = function (name, earned) {
        if (earned === void 0) { earned = false; }
        var features = ["bias", "pgn", "depth"];
        var modes = [
            "twobytwo",
            "shallow",
            "bestRand",
            "allRand",
            "pieceFocus",
            "swipe",
            "bothSides",
        ];
        var pre;
        if (earned) {
            pre =
                "You completed a game in the top <b>" +
                    earned +
                    "%</b> of all players worldwide and";
        }
        else {
            pre = "You";
        }
        var post;
        if (modes.includes(name)) {
            post = "A brand new mode has been unlocked in the menu! Check it out!";
        }
        else if (features.includes(name)) {
            if (name == "bias") {
                post =
                    "Custom difficulty settings have been unlocked! Tweak the AI bias by tapping the settings icon on the main screen below the board.";
            }
            else if (name == "pgn") {
                post =
                    "Mid-Game Chess.com analysis and copying PGN history has been unlocked! Try by tapping the history icon on the main screen below the board.";
            }
            else {
                post =
                    "Custom think times have been unlocked! Tweak by tapping the down arrow icon on the main screen below the board.";
            }
        }
        else if (isNaN(parseInt(name))) {
            if (name == "friendPlay") {
                post =
                    "<b>Challenge Friends</b> has been unlocked in the menu. Invite your friends to play against you in realtime!";
            }
            else {
                post =
                    "A new multiplayer mode has been unlocked in the menu. Try it out!";
            }
        }
        else if (parseInt(name) < 5) {
            post =
                "A new difficulty setting has been unlocked in the menu. Try it out!";
        }
        else {
            post = 'A new "Think Time" has been unlocked in the menu. Try it out!';
        }
        //if (){}
        var alert = this.alertCtrl.create({
            title: "Congratulations!",
            message: pre + " have earned a star. " + post,
            buttons: [
                {
                    text: "Ok",
                    handler: function () { },
                },
            ],
        });
        alert.present();
    };
    HomePage.prototype.upgradeColor = function (color, earned) {
        if (earned === void 0) { earned = false; }
        var pre;
        if (earned) {
            pre =
                "You completed a game in the top <b>" +
                    earned +
                    "%</b> of all players worldwide and";
        }
        else {
            pre = "You";
        }
        this.changeThemeColor(color);
        var alert = this.alertCtrl.create({
            title: "Congratulations!",
            message: pre +
                " have earned a star. A new color theme has been unlocked. You can change back anytime using the menu",
            buttons: [
                {
                    text: "Ok",
                    handler: function () { },
                },
            ],
        });
        alert.present();
    };
    HomePage.prototype.upgradePiece = function (theme, earned) {
        var _this = this;
        if (earned === void 0) { earned = false; }
        this.theme = theme;
        this.pieceImages = __WEBPACK_IMPORTED_MODULE_8__constants__["a" /* base64Pieces */][this.theme];
        this.boardVisable = false;
        setTimeout(function () {
            _this.boardVisable = true;
        }, 0);
        var pre;
        if (earned) {
            pre =
                "You completed a game in the top <b>" +
                    earned +
                    "%</b> of all players worldwide and";
        }
        else {
            pre = "You";
        }
        var alert = this.alertCtrl.create({
            title: "Congratulations!",
            message: pre +
                " have earned a star. A new piece set has been unlocked. You can change back anytime using the menu",
            buttons: [
                {
                    text: "Ok",
                    handler: function () { },
                },
            ],
        });
        this.setData();
        alert.present();
    };
    HomePage.prototype.removeTimer = function () {
        clearInterval(this.countdownTimer);
        this.timerVal = 0;
    };
    HomePage.prototype.gameConcluded = function (won) {
        var _this = this;
        this.thinking = false;
        if (this.rematchWindow) {
            console.log(this.rematchWindow._state);
            if (this.rematchWindow._state == 3) {
                return;
            }
        }
        this.removeTimer();
        setTimeout(function () {
            _this.removeTimer();
        }, 1000);
        /**/
        // if prompt is already up? catch?
        //this.showInterAd();
        this.endGamePrompt(won);
    };
    HomePage.prototype.ratchetChoices = function (choices) {
        if (thresh.indexOf(String(choices)) > this.stars) {
            this.starPrompt(String(choices));
        }
        else {
            this.numChoices = choices;
            this.events.publish("updateDifficulty", choices);
        }
    };
    HomePage.prototype.ratchetTime = function (time) {
        if (thresh.indexOf(String(time)) > this.stars) {
            this.starPrompt(String(time));
        }
        else {
            this.delayTime = time;
            //this.numChoices=choices;
            this.events.publish("updateThinkTime", time);
        }
    };
    HomePage.prototype.ratchetDifficulty = function (won) {
        var _this = this;
        if (won) {
            if (this.handicap < 1) {
                this.handicap++;
            }
            else if (this.numChoices == 2) {
                this.ratchetChoices(3);
            }
            else if (this.handicap < 3) {
                this.handicap++;
            }
            else if (this.numChoices == 3) {
                this.ratchetChoices(4);
            }
            else {
                this.handicap++;
            }
        }
        else {
            if (this.handicap > 3) {
                this.handicap--;
            }
            else if (this.numChoices == 4) {
                this.ratchetChoices(3);
            }
            else if (this.handicap > 1) {
                this.handicap--;
            }
            else if (this.numChoices == 3) {
                this.ratchetChoices(2);
            }
            else {
                this.handicap--;
            }
        }
        setTimeout(function () {
            _this.abandonGame(false, "ai");
        }, 0);
    };
    HomePage.prototype.startTimeout = function () {
        var _this = this;
        setTimeout(function () {
            clearInterval(_this.countdownTimer);
            _this.timerVal = 30;
            _this.countdownTimer = setInterval(function () {
                _this.timerVal--;
                if (_this.timerVal == 0) {
                    if (_this.rematchWindow) {
                        // console.log(this.rematchWindow._state)
                        if (_this.rematchWindow._state == 3) {
                            return;
                        }
                    }
                    clearInterval(_this.countdownTimer);
                    if (_this.playersTurn) {
                        if (!_this.finalChoices[_this.selected] && !_this.lastchoice.move) {
                            _this.makeMove();
                        }
                        _this.makeMove();
                    }
                    else {
                        setTimeout(function () {
                            if (!_this.playersTurn) {
                                _this.oppLeft();
                            }
                        }, 4000);
                    }
                }
            }, 1000);
        }, 500);
    };
    HomePage.prototype.oppLeft = function (norematch) {
        var _this = this;
        if (norematch === void 0) { norematch = true; }
        if (norematch) {
            if (this.rematchWindow) {
                // console.log(this.rematchWindow._state)
                if (this.rematchWindow._state == 3) {
                    return;
                }
            }
            this.rematchWindow = this.alertCtrl.create({
                title: "Your Opponent Left",
                enableBackdropDismiss: false,
                subTitle: "Opponent Quit the Game",
                buttons: [
                    {
                        text: "Ok",
                        handler: function (data) {
                            _this.db.list(_this.gameType).remove();
                            _this._fbSubGame.unsubscribe();
                            _this.abandonGame(false, "online");
                        },
                    },
                ],
            });
            this.rematchWindow.present();
        }
        else {
            this._fbSubGame.unsubscribe();
            this.abandonGame(false, "ai");
        }
    };
    HomePage.prototype.processData = function (data) {
        var _this = this;
        //console.log(data);
        var res = data[data.length - 1];
        if (typeof res == "string") {
            if (res == "NOREMATCH") {
                this.rematchWindow.dismiss();
                if (this.awaitingRematch) {
                    this.oppLeft(true);
                    this.awaitingRematch = false;
                }
                else {
                    this.oppLeft(false);
                }
                return;
            }
            else if (res == "REMATCH") {
                //console.log(this.playerOne);
                if (data[data.length - 2] == "REMATCH") {
                    this.playersTurn = this.playerOne;
                    if (this.playerOne) {
                        this.prevToggle();
                    }
                    setTimeout(function () {
                        _this.startTimeout();
                        //console.log('BOBOBO'); //()()()
                        _this.rematchWindow.dismiss();
                    }, 500);
                }
                return;
            }
        }
        var lastRematch = data.lastIndexOf("REMATCH");
        var secondToLastRematch = data.slice(0, lastRematch).lastIndexOf("REMATCH");
        if (lastRematch - secondToLastRematch == 1) {
            data = data.slice(lastRematch + 1, data.length);
            data.unshift("x", "x");
        }
        if (!this.playerOne) {
            // Player Two
            if (data.length == 0) {
                // if Player Two puts in wrong code
                this._fbSubGame.unsubscribe();
                this.friendPlay(false, true);
            }
            if (data.length == 1) {
                // confirm game for player two
                this.db.list(this.gameType).push("confirmed");
                this.whiteBottom = false;
                this.playersTurn = false;
                this.startTimeout();
            }
        }
        else {
            // Player One
            if (data.length == 2) {
                // game confirmed for player one
                if (this.alertWindow) {
                    this.alertWindow.dismiss();
                }
                this.whiteBottom = true;
                this.playersTurn = true;
                this.startTimeout();
            }
        }
        var modulus;
        if (this.playerOne) {
            modulus = 0;
        }
        else {
            modulus = 1;
        }
        if (data.length > 2 && data.length % 2 == modulus) {
            this.playersTurn = true;
            if (typeof res == "string") {
                if (res.includes("checkmated")) {
                    if (this.game.in_draw() ||
                        this.game.in_stalemate() ||
                        this.game.insufficient_material() ||
                        this.game.in_threefold_repetition()) {
                        this.gameConcluded(null);
                    }
                    else {
                        this.gameConcluded(true);
                    }
                }
                else if (res == "QUIT") {
                    if (this.isNewGame() || this.game.history().length < 2) {
                        // unsub?
                        console.log("new game oppleft");
                        this.oppLeft();
                    }
                    else {
                        this.gameConcluded(true); // add boolean
                    }
                }
                return;
            }
            this.removeHighlighting("opp");
            this.highlightSquare(data[data.length - 1]["from"], "opp");
            this.highlightSquare(data[data.length - 1]["to"], "opp");
            this.startTimeout();
            var obj = data[data.length - 1];
            obj.promotion = "q";
            this.game.move(obj);
            var preview = new __WEBPACK_IMPORTED_MODULE_5__assets_js_chess_js__(this.game.fen());
            preview.move(data[data.length - 1]);
            this.position = preview.fen();
            this.getChoices();
        }
    };
    HomePage.prototype.friendPlay = function (create, err) {
        var _this = this;
        if (err === void 0) { err = false; }
        var code = this.genUID(5);
        var buttons = [
            {
                text: "Cancel",
                handler: function (data) {
                    // console.log("ai abandon game");
                    _this.removeTimer();
                    _this.abandonGame(false, "ai");
                },
            },
        ];
        if (create && thresh.indexOf("friendPlay") > this.stars) {
            this.starPrompt("friendPlay");
            return;
        }
        //var alertWindow
        //this.fbFriendPlay(create,code)
        if (create) {
            this.initOnlineGamePlayer(true, code, true);
        }
        if (!create) {
            buttons.push({
                text: "Enter",
                handler: function (rez) {
                    _this.initOnlineGamePlayer(false, rez.code);
                },
            });
        }
        var alert = {
            title: create ? code : err ? "Code Not Found" : "Input Code",
            enableBackdropDismiss: false,
            subTitle: create
                ? "Have your friend enter the above code. Once they do, a game should be automatically started"
                : err
                    ? "Please check your code again"
                    : "Your friend will give you an access code for the game. Enter below",
            // message: "This should be fun!",
            buttons: buttons,
        };
        if (!create) {
            alert["inputs"] = [
                {
                    name: "code",
                    placeholder: "a634z",
                },
            ];
        }
        this.alertWindow = this.alertCtrl.create(alert);
        this.alertWindow.present();
    };
    HomePage.prototype.initOnlineGamePlayer = function (PlayerOne, code, wait, unshift) {
        var _this = this;
        if (wait === void 0) { wait = false; }
        if (unshift === void 0) { unshift = false; }
        //console.log("hello world");
        this.gameType = "/onlineGames/" + code;
        if (wait) {
            this.db.list(this.gameType).push("wait");
        }
        else {
            this.startTimeout();
        }
        this.playerOne = PlayerOne;
        if (unshift) {
            this.whiteBottom = this.playerOne;
            this.playersTurn = this.playerOne;
        }
        this._fbSubGame = this.db
            .list(this.gameType)
            .valueChanges()
            .subscribe(function (data) {
            if (unshift) {
                data.unshift("x", "x");
            }
            console.log(data);
            _this.processData(data);
        });
    };
    HomePage.prototype.playRandom = function () {
        // push user to array, as soon as array has two people, connect them?
        /**/
        // test for stars and
        var _this = this;
        if (thresh.indexOf("randOpp") > this.stars) {
            this.starPrompt("randOpp");
            return;
        }
        else if (!window.navigator.onLine) {
            this.noInternet();
            return;
        }
        var code = this.genUID(10) + this.username;
        this.rematchWindow = this.alertCtrl.create({
            title: "Waiting for Opponent",
            message: "You are first in the queue. This will timeout after <b>3 minutes</b>.",
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: "Cancel",
                    handler: function (data) {
                        _this.abandonGame(false, "ai");
                        _this._queueSub.unsubscribe();
                        _this.db.list("/queue").remove();
                    },
                },
            ],
        });
        this._queueSub = this.db
            .list("/queue")
            .valueChanges()
            .subscribe(function (data) {
            console.log(data);
            if (data[0] == "ok") {
                return;
            }
            var now = new Date().getTime();
            if (data.length == 0) {
                console.log("pushqueue");
                _this.db.list("/queue").push([code, now]);
            }
            else if (data[0][0] !== code && data.length == 1) {
                //this.db.list("/queue").push("ok");
                /**/
                if (now - data[0][1] > 120000) {
                    //120000// || data[0][0].includes(this.username) prevent matching with yourself
                    _this.db.list("/queue").remove();
                }
                else {
                    _this.db.list("/queue").push("ok");
                }
                console.log("ok");
            }
            else if (data[1] == "ok" && data.length == 2) {
                console.log("init");
                // STart Game with data[0]
                _this._queueSub.unsubscribe();
                _this.db.list("/queue").remove();
                //console.log("startinnnn");
                var firstPlayer = code == data[0][0];
                _this.initOnlineGamePlayer(firstPlayer, data[0], false, true);
                setTimeout(function () {
                    _this.rematchWindow.dismiss();
                }, 500);
            }
            else if (data.length > 2) {
                console.log("overflow");
                //this._queueSub.unsubscribe();
                _this.db.list("/queue").remove();
                //console.log("AHHHHH");
                //this.rematchWindow.dismiss();
            }
            _this.rematchWindow.present();
        });
        //this.db.list('/queue').remove()
        // Search for Existing people looking, queue
        // prompt others
        // failure
    };
    HomePage.prototype.playOnline = function (random) {
        var _this = this;
        var buttons = [
            {
                text: "Create Game",
                handler: function (data) {
                    _this.friendPlay(true);
                },
            },
            {
                text: "Join Game",
                handler: function (data) {
                    _this.friendPlay(false);
                },
            },
        ];
        if (random) {
            buttons.push({
                text: "Random Opponent",
                handler: function (data) {
                    _this.playRandom();
                },
            });
        }
        var rez = this.alertCtrl.create({
            title: "Online Multiplayer",
            enableBackdropDismiss: false,
            subTitle: "Each player gets 30 seconds to move",
            message: "Played in real-time and at a fast pace",
            buttons: buttons,
        });
        rez.present();
    };
    HomePage.prototype.endGamePrompt = function (won) {
        var _this = this;
        var myrank = 0;
        var draw = won === null;
        if (this.gameType == "local") {
            var prompt = this.alertCtrl.create({
                title: draw ? "Draw!" : won ? "White Won!" : "Black Won!",
                enableBackdropDismiss: false,
                buttons: [
                    {
                        text: "Ok",
                        handler: function (data) {
                            _this.abandonGame(false, "local");
                        },
                    },
                ],
            });
            prompt.present();
            return;
        }
        if (this.gameType !== "ai" && this.gameType !== "local") {
            // rematch logic.
            this.thinking = false;
            this.removeTimer();
            //this.showInterAd();
            this.choices = [null, null, null, null];
            if (!won && !draw) {
                this.db.list(this.gameType).push("checkmated:" + myrank);
                console.log("I got checkmated");
                //this._fbSubGame.unsubscribe();
            }
            if (!draw) {
                this.updateRank(won);
            }
            this.rematchWindow = this.alertCtrl.create({
                title: draw ? "Draw!" : won ? "You Won!" : "You Lost!",
                enableBackdropDismiss: false,
                subTitle: "Would you like to play a rematch?",
                buttons: [
                    {
                        text: "No Thanks",
                        handler: function (data) {
                            _this.db.list(_this.gameType).push("NOREMATCH");
                            _this._fbSubGame.unsubscribe();
                            _this.abandonGame(false, "online");
                        },
                    },
                    {
                        text: "Rematch",
                        handler: function (data) {
                            _this.db.list(_this.gameType).push("REMATCH");
                            _this.awaitingRematch = true;
                            _this.resetGame();
                            _this.rematchWindow = _this.alertCtrl.create({
                                title: "Waiting for Opponent",
                                enableBackdropDismiss: false,
                                buttons: [
                                    {
                                        text: "Cancel",
                                        handler: function (data) {
                                            _this.db.list(_this.gameType).push("NOREMATCH");
                                            _this._fbSubGame.unsubscribe();
                                            _this.abandonGame(false, "ai");
                                        },
                                    },
                                ],
                            });
                            _this.rematchWindow.present();
                        },
                    },
                ],
            });
            this.rematchWindow.present();
            return;
        }
        var buttons = [
            {
                text: "Play Online",
                handler: function (data) {
                    _this.playRandom();
                },
            },
            {
                text: "Play Again",
                handler: function (data) {
                    _this.abandonGame();
                },
            },
            {
                text: won ? "Raise Difficulty" : "Lower Difficulty",
                handler: function (data) {
                    _this.ratchetDifficulty(won);
                },
            },
            {
                text: "Analyze Game",
                handler: function (data) {
                    _this.pgnExt(_this.game.pgn());
                    return false;
                },
            },
        ];
        if (!draw) {
            this.updateRank(won);
        }
        var rez = this.alertCtrl.create({
            title: draw ? "Draw!" : won ? "You Won!" : "You Lost!",
            enableBackdropDismiss: false,
            subTitle: this.percentile() > 0
                ? "You are now ranked in the top: " +
                    this.percentile() +
                    "% of players worldwide"
                : "Play more games to be ranked on the leaderboards",
            //message: won?"Way to go, you're pretty good at this!":"Don't worry you can get better!",
            buttons: buttons,
        });
        rez.present();
    };
    HomePage.prototype.percentile = function () {
        var ratio = this.record.wins / (this.record.losses + 1);
        var games = this.record.wins + this.record.losses / 3;
        var difficulty = this.record.totalChoices / (this.record.total + 1);
        var handicapAvg = this.record.handicap / (this.record.total + 1);
        var partOne = Math.pow(ratio, difficulty) + Math.pow(games, 0.2);
        var norml = 4.1375 +
            (249597800 - 4.1375) / (1 + Math.pow(partOne / 3.241956e-9, 0.7493486));
        var partTwo = this.record.best / (this.record.worst + 1);
        var running = norml + 2 - partTwo / 2;
        var partThree = (handicapAvg * (100 - running)) / 2000;
        running = Math.pow(running, 1 - partThree);
        running = Math.pow(running, 1.05);
        norml = Math.ceil(running);
        if (norml < 1) {
            norml = 1;
        }
        else if (norml > 99) {
            norml = 99;
        }
        return norml;
    };
    HomePage.prototype.stockfishProcess = function (message) {
        //console.log(message);
        /*  */
        if (message.includes("mate 0")) {
            this.choices = [];
            return;
        }
        var depth = message.match(/info depth (-?\d+)/);
        if (depth) {
            depth = parseInt(depth[1]);
        }
        var multipv = message.match(/multipv\s(\d)/);
        var move = message.match(/pv\s(\D\d\D\d)./);
        var bestmove = message.match(/bestmove\s(\D\d\D\d).?/);
        if (bestmove) {
            if (!this.thinkingTimer) {
                //the thinking timer has already exhausted. Move will be made by the fallback now. Nothing to do here.
                return;
            }
            //we have the best move, stop the thinking timer and clear the timeout
            clearTimeout(this.thinkingTimeout);
            this.thinkingTimer = false;
            this.choices[0] = bestmove[1];
            if (this.XOR(this.stockfishWhite, this.colorBlackAI) ||
                this.gameType != "ai") {
                this.asyncChoices();
            }
            else {
                this.asyncAI();
            }
        }
        if (move && depth && multipv) {
            this.choices[parseInt(multipv[1]) - 1] = move[1];
        }
        /**/
        if (depth) {
            if (this.stockfishWhite) {
                var pwns = message.match(/cp\s(-?\d+)/);
                if (pwns) {
                    this.centipawns = Math.trunc(parseInt(pwns[1]) / 10) / 10;
                }
                else {
                    this.centipawns = "∞";
                }
            }
            this.currDepth = depth;
        }
    };
    HomePage.prototype.XOR = function (foo, bar) {
        return (foo && !bar) || (!foo && bar);
        // return ( this.colorBlackAI && !this.stockfishWhite ) || (!this.colorBlackAI && this.stockfishWhite);
    };
    HomePage.prototype.initStockfish = function () {
        var _this = this;
        if (this.stockfish && this.stockfish.terminate) {
            this.stockfish.terminate();
            console.log("TERMINATE");
        }
        //this.gameMoves=0;
        this.stockfish = new Worker("assets/stockfish.js");
        this.stockfish.onmessage = function (event) { return _this.stockfishProcess(event.data); };
        this.stockfish.postMessage("setoption name MultiPV value " +
            this.numChoices +
            ", setoption name Skill Level value 20");
    };
    HomePage.prototype.updateStockfish = function (FEN, depth) {
        var _this = this;
        if (depth === void 0) { depth = 20; }
        if (this.gameType == "ai" && !this.colorBlackAI) {
            if (this.stockfishWhite == FEN.includes(" w ")) {
                console.error("two in a row STOP");
                return;
            }
        }
        //console.log(this.stockfishWhite==this.colorBlackAI);
        if (this.mode == "shallow" || this.mode == "allRand") {
            depth = 1;
        }
        var aiskill = this.aiDepth();
        var playerskill = 20;
        if (this.mode == "bothSides") {
            aiskill = 20;
            playerskill = 1;
        }
        console.log(aiskill);
        this.stockfishWhite = FEN.includes(" w ");
        var playersturn = this.XOR(this.stockfishWhite, this.colorBlackAI);
        if (this.gameType == "ai" && !playersturn) {
            console.log("ai moving");
            this.stockfish.postMessage("setoption name Skill Level value " + aiskill);
        }
        else {
            this.stockfish.postMessage("setoption name Skill Level value " + playerskill);
        }
        this.stockfish.postMessage("position fen " + FEN);
        var moveTime = this.delayTime +
            300 +
            (!playersturn && this.gameType == "ai" ? this.aiBalance() : 0);
        this.stockfish.postMessage("go depth " + depth + " movetime " + moveTime);
        this.thinkingTimer = true;
        this.thinkingTimeout = setTimeout(function () {
            //time to think has ended
            _this.thinkingTimer = false;
            console.warn("engine taking too long to process, using the best available choices: ", _this.choices);
            //destroy bad stockfish which is taking too much time.
            _this.initStockfish();
            if (playersturn || _this.gameType !== "ai") {
                _this.asyncChoices();
            }
            else {
                _this.asyncAI();
            }
        }, moveTime + 500);
    };
    HomePage.prototype.aiBalance = function () {
        //return 10000-this.delayTime; //max of 10 seconds
        /**/
        var x = (101 - this.percentile() - 50) * 25;
        if (x > 0) {
            return x;
        }
        else {
            return 0;
        }
    };
    HomePage.prototype.aiDepth = function () {
        var depth = this.AISkill();
        if (this.record.wins == 0) {
            depth = 0;
        }
        depth = depth + this.handicap;
        if (this.mode == "bestRand" ||
            this.mode == "shallow" ||
            this.mode == "pieceFocus") {
            depth += 2;
        }
        if (this.colorBlackAI) {
            depth -= 1;
        }
        if (depth > 20) {
            depth = 20;
        }
        else if (depth < 0) {
            depth = 0;
        }
        return Math.floor(depth);
    };
    HomePage.prototype.calcELO = function () {
        var x = this.AISkill();
        var ELO = -1.3071 * Math.pow(x, 2) + 114.33 * x + 1231.2;
        return Math.floor(ELO);
    };
    HomePage.prototype.AISkill = function () {
        //return 0;
        var x = this.percentile();
        var log = 20.56536 - 0.3061102 * x + 0.001029191 * Math.pow(x, 2);
        return log;
    };
    HomePage.prototype.ngOnInit = function () { };
    HomePage.prototype.debug = function () { };
    HomePage.prototype.undo = function () {
        this.game.undo();
        this.position = this.game.fen();
    };
    HomePage.prototype.setTurn = function (color) {
        var tokens = this.game.fen().split(" ");
        tokens[1] = color;
        this.game.load(tokens.join(" "));
    };
    HomePage.prototype.resetGame = function (FEN) {
        if (FEN === void 0) { FEN = newGameFEN; }
        this.initStockfish();
        this.removeHighlighting("opp");
        this.removeHighlighting("player");
        this.position = ChessBoard.fenToObj(FEN);
        this.game = new __WEBPACK_IMPORTED_MODULE_5__assets_js_chess_js__(FEN);
    };
    HomePage.prototype.isNewGame = function () {
        return newGameFEN.split(" ")[0] == this.game.fen().split(" ")[0];
    };
    //K7/8/8/1r1b4/8/8/8/5k2 w - - 0 1 -- bug with more than 1 choice....
    //8/K7/8/3b4/8/8/8/1r3k2 w - - 0 1
    HomePage.prototype.newGame = function (FEN) {
        if (FEN === void 0) { FEN = this.storedFEN; }
        if (!FEN || FEN === null) {
            FEN = newGameFEN;
        }
        else {
            this.setData();
        }
        if (FEN == newGameFEN) {
            this.moveHistory = [];
            this.newboardgamestate =
                newGameFEN ==
                    "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
        }
        else {
            this.newboardgamestate = false;
        }
        //console.log('newGame');
        this.removeHighlighting("opp");
        this.removeHighlighting("player");
        this.choices = [null, null, null, null];
        this.removeTimer();
        //FEN='8/6b1/7n/1N3b2/r2n2k1/4q1p1/P1pPpppr/1RnQKB1R w - - 2 58'
        this.position = ChessBoard.fenToObj(FEN);
        this.game = new __WEBPACK_IMPORTED_MODULE_5__assets_js_chess_js__(FEN);
        //console.log(this.game);
        this.lastchoice = { move: null, rank: null };
        if (this.colorBlackAI) {
            this.moveAI();
        }
        else {
            this.getChoices(this.gameType == "ai");
        }
    };
    HomePage.prototype.isMoveWhite = function (move) {
        var rez = this.game.get(String(move).substr(0, 2));
        if (rez) {
            return rez.color == "w";
        }
        else {
            return null;
        }
    };
    HomePage.prototype.choiceRepair = function () { };
    HomePage.prototype.getChoices = function (auto) {
        if (auto === void 0) { auto = true; }
        console.log("GETCHOICES", this.game.fen());
        /**/
        if (((this.game.fen().includes(" b ") && !this.colorBlackAI) ||
            (this.game.fen().includes(" w ") && this.colorBlackAI)) &&
            this.gameType == "ai") {
            console.log(this.gameType);
            console.log("ignoring Input, self correction?");
            this.corrupted();
            return;
        }
        /*
    if (this.game.fen().includes(' b ')){
    console.log('waiting for this.game.fen() to switch');
    setTimeout(()=>{
    this.getChoices();
    },500)
    
     return;
    }else{
       this.updateStockfish(this.game.fen());
    }
    */
        // playerTurn
        if (this.game.game_over()) {
            this.thinking = false;
            if (this.game.game_over()) {
                if (this.game.in_draw() ||
                    this.game.in_stalemate() ||
                    this.game.insufficient_material() ||
                    this.game.in_threefold_repetition()) {
                    this.gameConcluded(null);
                }
                else {
                    this.gameConcluded(false);
                }
                return;
            }
            //console.log('game concluded on '+checks+' checks');
            return;
        }
        if (this.stockfishWhite == this.game.fen().includes(" w ") &&
            this.gameType == "ai" &&
            !this.colorBlackAI) {
            console.log("stopping Choice getting");
            return;
        }
        //console.log(this.game.fen())
        this.thinking = true;
        this.updateStockfish(this.game.fen());
        //console.log(this.choices);
        // setTimeout(() => {
        //   if (this.debugMode) {
        //     //this.stockfish.terminate();
        //     this.initStockfish();
        //   } else {
        //     this.stockfish.postMessage("stop");
        //   }
        //   this.asyncChoices(auto);
        // }, this.delayTime + (this.repair ? 500 : 0));
    };
    HomePage.prototype.removeHighlighting = function (cssDef) {
        Array.from(document.querySelectorAll(".square-55d63")).forEach(function (square) {
            square.classList.remove("highlight-" + cssDef + "-default");
            square.classList.remove("highlight-" + cssDef + "-frozen");
            square.classList.remove("highlight-" + cssDef + "-lime");
            square.classList.remove("highlight-" + cssDef + "-leipzig");
            square.classList.remove("highlight-" + cssDef + "-chess24");
        });
    };
    HomePage.prototype.highlightSquare = function (square, cssDef) {
        //console.log(document.querySelector('.square-' + square));
        //console.log(document.querySelector('.square-' + square).className);
        // color: any = "default";
        var sq = document.querySelector(".square-" + square);
        if (sq) {
            sq.className += " " + "highlight-" + cssDef + "-" + this.color;
        }
    };
    HomePage.prototype.asyncChoices = function (auto) {
        var _this = this;
        if (auto === void 0) { auto = true; }
        // console.log("asyncChoices: ", this.choices);
        var arr = [];
        this.selected = 999;
        //------------------------------------
        //console.log(this.choices)
        //console.log(this.choices);
        //console.log(this.choices)
        //ensure moves are all for player!!!! boom.
        // deduplicate final moves
        var written = [];
        //console.log("before process arr ", this.gameType, this.choices.map(this.isMoveWhite.bind(this)), this.playerOne);
        this.choices.forEach(function (c, i) {
            if (c && !written.includes(c)) {
                if (_this.gameType == "local" ||
                    _this.XOR(_this.isMoveWhite(c), _this.colorBlackAI) ||
                    !_this.playerOne) {
                    arr.push({ choice: c, rank: written.length + 1 });
                    written.push(c);
                }
            }
        });
        /**/
        //if (Math.random()>.5){arr=[]} // DEBUGGGG
        if (arr.length == 0 && !this.repair) {
            console.log("empty array! attempting repair");
            this.repair = true;
            this.initStockfish();
            //console.error(this.thinking);
            this.stockfishWhite = false;
            setTimeout(function () {
                _this.getChoices();
            }, 150);
            return;
        }
        else {
            //console.log(arr);
            this.repair = false;
        }
        if (arr.length == 0) {
            console.error("Stockfish returned NO moves");
            this.currDepth = 0;
            //alert('stockfish returned NO moves');
        }
        if (this.newboardgamestate) {
            arr = [];
            var bst = this.shuffle(bestWhiteOpenings).slice(0, Math.floor(this.numChoices / 2));
            bst.forEach(function (move) {
                arr.push({ choice: move, rank: -1 });
            });
            var gd = this.shuffle(goodWhiteOpenings).slice(0, this.numChoices - bst.length);
            gd.forEach(function (move) {
                arr.push({ choice: move, rank: -2 });
            });
            arr = this.shuffle(arr);
        }
        if (this.mode == "bestRand" && arr.length > 0) {
            var temp = arr[0];
            arr = [];
            arr[0] = temp;
        }
        if (this.mode == "allRand") {
            arr = [];
        }
        if (this.mode == "pieceFocus") {
            this.finalChoices = this.pieceModeChoices(arr[0]);
        }
        else {
            this.finalChoices = this.shuffle(this.fillOutLegal(arr, written));
        }
        this.thinking = false;
        //console.log(this.finalChoices)
        /**/
        if (!this.prompt && auto) {
            this.prevToggle(true);
        }
        //this.prevMove(this.finalChoices[this.selected],this.selected)
    };
    HomePage.prototype.prevToggle = function (auto) {
        if (auto === void 0) { auto = false; }
        this.tapPrompt = false;
        clearTimeout(this.helpTimer);
        this.prompt = false;
        if (this.thinking) {
            return;
        }
        if (this.highlighted !== 0) {
            this.showOldState(null, 0);
            return;
        }
        if (this.waitMove ||
            (this.finalChoices[0] == 1 && !this.newboardgamestate)) {
            return;
        }
        this.waitMove = true;
        //  console.log(this.selected);
        if (this.finalChoices.length - 2 < this.selected) {
            this.selected = 0;
        }
        else {
            this.selected++;
        }
        //console.log('hello');
        this.prevMove(this.finalChoices[this.selected], this.selected, auto);
    };
    HomePage.prototype.makeMove = function () {
        var _this = this;
        this.tapPrompt = false;
        clearTimeout(this.flashTimeout);
        clearTimeout(this.helpTimer);
        if (!this.playersTurn) {
            return;
        }
        if (this.thinking) {
            return;
        }
        if (this.highlighted !== 0) {
            this.showOldState(null, 0);
            return;
        }
        console.log(this.finalChoices);
        if (!this.finalChoices[this.selected]) {
            this.prevToggle(true);
            this.helpTimer = setTimeout(function () {
                _this.help();
            }, 3500);
            return;
        }
        else {
            this.thinking = true;
        }
        //console.log('fires');
        this.actuallyMakeMove();
        // ()()()()()()()
    };
    HomePage.prototype.actuallyMakeMoveInner = function () {
        var _this = this;
        this.lastchoice.rank = this.finalChoices[this.selected].rank;
        this.lastchoice.move = this.finalChoices[this.selected].choice;
        //this.gameMoves++
        if (this.gameType !== "local") {
            if (this.mode == "nBest") {
                this.record.total++;
                this.record.handicap += this.handicap;
            }
            else {
                this.record.modeTotals[this.mode]++;
            }
            if (this.record.total == 171 && !this.newsletterSigned) {
                this.newsletterPop();
            }
            //console.log(this.lastchoice.rank+1)
            if (this.mode == "nBest") {
                if (!this.newboardgamestate) {
                    if (this.lastchoice.rank == 1 && this.finalChoices.length > 1) {
                        this.record.best++;
                    }
                    else if (this.lastchoice.rank == this.numChoices) {
                        this.record.worst++;
                        this.apticCall(); // TEST??????
                    }
                }
                else if (this.lastchoice.rank == -1) {
                    this.record.best++;
                }
            }
            else if (this.mode == "bestRand") {
                if (this.lastchoice.rank !== 1) {
                    this.apticCall(); // TEST??????
                }
            }
            this.percent = this.percentile();
            this.elo = this.calcELO();
            this.record.totalChoices += this.numChoices - 1;
        }
        //console.log(this.lastchoice);
        var choice = this.finalChoices[this.selected].choice;
        var moveObj = {
            from: choice.substring(0, 2),
            to: choice.substring(2, 4),
            promotion: "q",
        };
        this.game.move(moveObj);
        this.newboardgamestate = false;
        this.thinking = true;
        setTimeout(function () {
            _this.pushMoveHistory(moveObj, _this.lastchoice.rank == 1);
        }, 500);
        //}
        //this.incrAds()
        //this.finalChoices=[]
        //this.setTurn('b');
        this.choices = [null, null, null, null];
        this.removeTimer();
        if (this.gameType == "local") {
            this.whiteBottom = !this.whiteBottom;
            //this.position = this.game.fen();
            //console.log(this.position);
            this.removeHighlighting("opp");
            var hist = this.game.history({ verbose: true });
            setTimeout(function () {
                _this.highlightSquare(hist[hist.length - 1]["from"], "opp");
                _this.highlightSquare(hist[hist.length - 1]["to"], "opp");
            }, 500);
            this.getChoices();
        }
        else if (this.gameType == "ai") {
            this.moveAI();
        }
        else {
            this.playersTurn = false;
            if (this.game.in_draw() ||
                this.game.in_stalemate() ||
                this.game.insufficient_material() ||
                this.game.in_threefold_repetition()) {
                this.gameConcluded(null);
            }
            else {
                this.startTimeout();
            }
            this.db.list(this.gameType).push(moveObj);
        }
        if (this.delayTime > 0) {
            this.randNum = Math.floor(Math.random() * 50);
            this.flashResult = true;
            this.flashTimeout = setTimeout(function () {
                _this.flashResult = false;
            }, 3000);
        }
    };
    HomePage.prototype.help = function () {
        var _this = this;
        if (this.thinking) {
            //alert("use a different thinkTime?");
            return;
        }
        if (this.flashResult || this.timerVal > 0 || this.percent < 30) {
            //this.showStats();
        }
        else {
            this.tapPrompt = true;
            setTimeout(function () {
                _this.tapPrompt = false;
            }, 1800);
        }
    };
    HomePage.prototype.lookupOpening = function (opening) {
        if (!opening) {
            opening = this.currOpening.w;
        }
        if (opening.link) {
            this.openLink("https://www.chess.com/openings/" + opening.link + "?ref_id=5188186");
        }
        else {
            this.openLink("https://www.chess.com/openings/search?keyword=" +
                opening.name.split(" ")[0] +
                "&ref_id=5188186");
        }
    };
    HomePage.prototype.pushMoveHistory = function (move, best) {
        if (best === void 0) { best = false; }
        var fen = this.game.fen();
        var pgn = this.game.pgn();
        var pgnsan = pgn.replace(/ /g, "");
        if (fen.includes(" w ")) {
            this.currOpening.w = null;
        }
        else if (fen.includes(" b ")) {
            this.currOpening.b = null;
        }
        if (this.mobile) {
            return;
        }
        var get = this.game.get(move.to);
        var obj = {
            pgn: pgn,
            best: best,
            from: move.from,
            dest: move.to,
            piece: get.type.toUpperCase(),
            color: get.color,
            adv: this.centipawns > 0
                ? "+" + String(this.centipawns)
                : String(this.centipawns),
            fen: fen,
        };
        this.moveHistory.push(obj);
    };
    HomePage.prototype.showOldState = function (move, i) {
        if (this.highlighted == i) {
            return;
        }
        this.highlighted = i;
        if (!move) {
            move = this.moveHistory[0];
        }
        this.position = move.fen;
        this.removeHighlighting("player");
        this.removeHighlighting("opp");
        this.highlightSquare(move.dest, move.color == "w" ? "player" : "opp");
        this.highlightSquare(move.from, move.color == "w" ? "player" : "opp");
    };
    HomePage.prototype.openLink = function (url) {
        if (this.mobile) {
            window["open2"](url, "_system");
        }
        else {
            if (window["require"]) {
                window["require"]("electron").shell.openExternal(url);
            }
            else {
                window.open(url, "_blank");
            }
        }
    };
    HomePage.prototype.showStats = function (mobile) {
        if (mobile === void 0) { mobile = false; }
        if (mobile &&
            (this.moveHistory.length == 1 ||
                this.record.total == 0 ||
                this.currOpening.b ||
                this.currOpening.w)) {
            return;
        }
        if (this.alertBox && this.alertBox._state == 3) {
            this.alertBox.dismiss();
            return;
        }
        this.alertBox = this.alertCtrl.create({
            title: "Stats",
            enableBackdropDismiss: true,
            //subTitle: "A breakdown of your moves",
            cssClass: "stats",
            message: "<b>Best</b> move chosen <b>" +
                Math.floor((this.record.best /
                    (this.record.total == 0 ? 1 : this.record.total)) *
                    100) +
                "</b>% of the time<br><br><b>Worst</b> move chosen <b>" +
                Math.floor((this.record.worst /
                    (this.record.total == 0 ? 1 : this.record.total)) *
                    100) +
                "</b>% of the time<br><br>You have played <b>" +
                this.record.total +
                "</b> moves<br><br>Your average # of choices is <b>" +
                (Math.floor((this.record.totalChoices /
                    (this.record.total == 0 ? 1 : this.record.total)) *
                    100) /
                    100 +
                    1) +
                "</b><br><br>Your average difficulty bias is <b>" +
                Math.floor((this.record.handicap /
                    (this.record.total == 0 ? 1 : this.record.total)) *
                    10000) /
                    10000 +
                "</b><br><br>You have <b>" +
                this.record.wins +
                "</b> wins and <b>" +
                this.record.losses +
                "</b> losses<br><br>You are ranked in the top <b>" +
                this.percentile() +
                "</b>% of players worldwide<br><br>Your current estimated ELO is <b>" +
                this.calcELO() +
                "</b>",
        });
        this.alertBox.present();
    };
    HomePage.prototype.pieceModeChoices = function (best) {
        var _this = this;
        console.log(best);
        var legalMoves = this.shuffle(this.game.moves({ verbose: true }));
        var choices = [best];
        legalMoves.forEach(function (move) {
            if (move.from == best.choice.substring(0, 2) &&
                best.choice !== move.from + move.to) {
                choices.push({ choice: move.from + move.to, rank: 0 });
            }
        });
        if (choices.length > 8) {
            choices = choices.filter(function (a) { return a.rank <= _this.numChoices; });
            choices = choices.slice(0, 8);
        }
        return this.shuffle(choices);
    };
    HomePage.prototype.fillOutLegal = function (arr, written) {
        var _this = this;
        if (arr.length == this.numChoices) {
            return arr;
        }
        // fill out empty moves with random moves....
        var legalMoves = this.shuffle(this.game.moves({ verbose: true }));
        legalMoves.forEach(function (move) {
            var concat = move.from + move.to;
            // bias toward moves that include promotion or capture
            if ((move.flags.includes("p") || move.flags.includes("c")) &&
                !written.includes(concat)) {
                arr.push({ choice: concat, rank: 0.5 });
                written.push(concat);
            }
            else if (arr.length < _this.numChoices) {
                if (!written.includes(concat)) {
                    arr.push({ choice: concat, rank: 0 });
                    written.push(concat);
                }
            }
        });
        if (arr.length > this.numChoices) {
            arr = arr.filter(function (a) { return a.rank <= _this.numChoices; });
            arr = arr.slice(0, this.numChoices);
        }
        arr.forEach(function (move) {
            if (move.rank == 0.5) {
                move.rank = 0;
            }
        });
        return arr;
    };
    HomePage.prototype.isNull = function (arr) {
        //console.log(arr.join().replace(/,/g,'').length === 0)
        return arr.join().replace(/,/g, "").length === 0;
    };
    HomePage.prototype.aiBlunder = function () {
        return 0; // NEVER blunders
    };
    HomePage.prototype.asyncAI = function () {
        var _this = this;
        var move;
        //console.log(this.choices);
        this.choices = this.choices.filter(function (el) {
            return el != null;
        });
        if (this.XOR(this.isMoveWhite(this.choices[0]), this.colorBlackAI)) {
            console.log("players got switched 1468");
            this.corrupted();
            //return;
        }
        //var aiMove = Math.floor(this.aiBlunder() * this.choices.length);
        //console.log(aiMove);
        move = this.choices[0];
        /*
        if (Math.random() < this.AIlevel.chance/this.delayTime) {
          move = this.choices[Math.floor(Math.random() * this.choices.length)]
        } else {
          move = this.choices[0]
        }
    */
        if (typeof move == "undefined" || this.mode == "allRand") {
            if (!move) {
                console.error("MOVE UNDEFINED, picking random");
            }
            move = this.fillOutLegal([], [])[0].choice;
        }
        //console.error("move is sometimes UNDEFINED");
        //console.log(move)
        //alert(move);
        this.removeHighlighting("opp");
        this.highlightSquare(move.substring(0, 2), "opp");
        this.highlightSquare(move.substring(2, 4), "opp");
        //console.log(move);
        var moveObj = {
            from: move.substring(0, 2),
            to: move.substring(2, 4),
            promotion: "q",
        };
        this.game.move(moveObj);
        setTimeout(function () {
            _this.pushMoveHistory(moveObj);
            if (_this.gameType !== "ai") {
                if (_this.storedFEN !== null) {
                    _this.storedFEN = null;
                    _this.setData();
                }
            }
            else {
                _this.storedFEN = _this.game.fen();
                _this.setData();
            }
        }, 500);
        this.newboardgamestate = false;
        //this.gameMoves++
        //this.gameMoves++
        this.choices = [null, null, null, null];
        this.position = this.game.fen();
        //console.log(this.position);
        this.getChoices();
        //this.setData()
    };
    HomePage.prototype.moveAI = function () {
        if (this.game.game_over()) {
            //console.log('game concluded on checks');
            if (this.game.in_draw() ||
                this.game.in_stalemate() ||
                this.game.insufficient_material() ||
                this.game.in_threefold_repetition()) {
                this.gameConcluded(null);
            }
            else {
                this.gameConcluded(true);
            }
            return;
        }
        this.thinking = true;
        this.updateStockfish(this.game.fen());
    };
    HomePage.prototype.prevMoveInner = function (choice, i, auto) {
        var _this = this;
        if (auto === void 0) { auto = false; }
        if (typeof choice == "undefined") {
            return;
        }
        //console.log(choice);
        //setTimeout(()=>{})
        /**/
        this.position = this.game.fen();
        this.selected = i;
        this.removeHighlighting("player");
        this.highlightSquare(choice.choice.substring(0, 2), "player");
        this.highlightSquare(choice.choice.substring(2, 4), "player");
        setTimeout(function () {
            _this.waitMove = false;
            var preview = new __WEBPACK_IMPORTED_MODULE_5__assets_js_chess_js__(_this.game.fen());
            preview.move({
                from: choice.choice.substring(0, 2),
                to: choice.choice.substring(2, 4),
                promotion: "q",
            });
            _this.position = preview.fen();
            //this.thinking = false; //()()()() what?
            //console.log('fires');
            //console.log(preview.ascii());
        }, 250);
    };
    HomePage.prototype.showOfflineAd = function () {
        var _this = this;
        var ad = offlineAds[this.offlineAdIndex];
        var alertWin = this.alertCtrl.create({
            title: ad.title,
            enableBackdropDismiss: false,
            //subTitle: ad.subTitle,
            message: '<img class="adIcon" src="assets/ads/' +
                ad.icon +
                '.png">' +
                ad.description,
            buttons: [
                {
                    text: "No Thanks",
                    //role: 'cancel',
                    handler: function () { },
                },
                {
                    text: ad.button,
                    handler: function () {
                        var url = _this.iOS ? ad.iOS : ad.android;
                        _this.openLink(url);
                    },
                },
            ],
        });
        alertWin.present();
        if (offlineAds.length - 1 == this.offlineAdIndex) {
            this.offlineAdIndex = 0;
        }
        else {
            this.offlineAdIndex++;
        }
    };
    HomePage.prototype.shuffle = function (array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    };
    HomePage.prototype.incrAds = function () {
        this.adPromptCounter++;
        if (this.adPromptCounter > this.adPromptThreshold &&
            (this.gameType == "ai" || this.gameType == "local")) {
            this.adPrompt();
        }
        if (this.adPromptCounter > 0 && this.supressAds) {
            this.adPrompt(true);
            //this.adPrompt();
        }
        else if (this.adPromptCounter % 5 == 0) {
            this.setData();
        }
    };
    HomePage.prototype.bannerAds = function () {
        /*
    console.log(this.supressAds)
      this.admobpro.createBanner({ adId: this.iOS?'ca-app-pub-4948916875810757/7436221485':'ca-app-pub-4948916875810757/9768044814', autoShow: !this.supressAds, isTesting: true, overlap:true,position:this.admobpro.AD_POSITION.BOTTOM_CENTER })
          .then(() => {
    
          }).catch(e => {
            console.log("error", e)
          });
          */
    };
    HomePage.prototype.cp = function () {
        var _this = this;
        if (this.alertBox && this.alertBox._state == 3) {
            this.alertBox.dismiss();
            return;
        }
        this.alertBox = this.alertCtrl.create({
            title: "Advantage",
            subTitle: "An Estimate of Who is Ahead",
            cssClass: "stats",
            message: 'A positive score ("<b>+</b>") means white has a stronger position where a negative number ("<b>-</b>") implies black is favored. The value roughly translates to "<b>pawns</b>" where a knight of bishop has a value of 3 pawns, a rook is given a value of 5 pawns, and a queen is worth 9. In other words, it is estimated that ' +
                (this.centipawns > 0 ? "white" : "black") +
                " is currently ahead by <b>" +
                (this.moveHistory.length > 0 ? this.centipawns : "0.3") +
                "</b> pawns. White is estimated to have an advantage over black at the beginning of the game since they get to go first. You can toggle your color against the AI below.",
            inputs: [
                {
                    type: "radio",
                    label: "White",
                    value: "white",
                    checked: this.whiteBottom,
                },
                {
                    type: "radio",
                    label: "Black",
                    value: "black",
                    checked: !this.whiteBottom,
                },
            ],
            buttons: [
                {
                    text: "Ok",
                    handler: function (data) {
                        if ((data == "white") == _this.whiteBottom) {
                        }
                        else {
                            if (_this.gameType !== "ai") {
                                _this.pop("Error", "In multiplayer mode, color is assigned according to whether you are the one inviting a friend to a game (white) or whether you are accepting (black). For random opponents it depends if you were the first in the queue.");
                            }
                            else {
                                // abandonGame
                                _this.abandonGame(true, "ai", false, { fen: newGameFEN }, data == "black");
                            }
                        }
                    },
                },
            ],
        });
        this.alertBox.present();
    };
    HomePage.prototype.dpth = function () {
        var _this = this;
        if (this.mode == "allRand") {
            this.pop("Stockfish Unavailable", "Stockfish is turned off in this mode as all moves are merely random. Change the game mode to use this setting.");
            return;
        }
        if (this.currDepth == 0 && !this.thinking) {
            console.log("empty array! attempting repair");
            this.repair = false;
            this.initStockfish();
            //console.error(this.thinking);
            this.stockfishWhite = false;
            setTimeout(function () {
                _this.getChoices();
            }, 150);
            return;
        }
        if (this.alertBox && this.alertBox._state == 3) {
            this.alertBox.dismiss();
            return;
        }
        this.alertBox = this.alertCtrl.create({
            title: "Think Time & Depth",
            message: "The longer your device takes to compute the best move, the better quality moves you will get, indicated by a depth score of 1-20.",
            inputs: [
                {
                    type: "radio",
                    label: "500 ms",
                    value: "200",
                    checked: this.delayTime == 200,
                },
                {
                    type: "radio",
                    label: "1 sec",
                    value: "700",
                    checked: this.delayTime == 700,
                },
                {
                    type: "radio",
                    label: "2 sec",
                    value: "1700",
                    checked: this.delayTime == 1700,
                },
                {
                    type: "radio",
                    label: "5 sec",
                    value: "4700",
                    checked: this.delayTime == 4700,
                },
            ],
            buttons: [
                {
                    text: "ok",
                    handler: function (data) {
                        if (_this.delayTime !== parseInt(data)) {
                            if (thresh.indexOf("depth") > _this.stars) {
                                _this.starPrompt("depth");
                            }
                            else {
                                _this.delayTime = parseInt(data);
                                _this.setData();
                            }
                        }
                    },
                },
            ],
        });
        this.alertBox.present();
    };
    HomePage.prototype.hdnicp = function () {
        var _this = this;
        if (this.alertBox && this.alertBox._state == 3) {
            this.alertBox.dismiss();
            return;
        }
        this.alertBox = this.alertCtrl.create({
            title: "AI Bias",
            message: "Lazy Chess is carefully designed to scale the ai difficulty to your abilities and rank, but you can manually tweak the difficulty below. <i>Positive values are harder, negative values are easier.</i><br><br>Current AI Skill: <b>" +
                this.aiDepth() +
                "</b> (out of 20)",
            inputs: [
                {
                    type: "radio",
                    label: "Lower Skill Level",
                    value: "-1",
                    checked: false,
                },
                {
                    type: "radio",
                    label: "Keep Level " + this.handicap,
                    value: "0",
                    checked: true,
                },
                {
                    type: "radio",
                    label: "Raise Skill Level",
                    value: "1",
                    checked: false,
                },
            ],
            buttons: [
                {
                    text: "Ok",
                    handler: function (data) {
                        if (data !== 0 && thresh.indexOf("bias") > _this.stars) {
                            _this.starPrompt("bias");
                        }
                        if (data > 0) {
                            if (_this.AISkill() + 1 > 21) {
                                _this.reachedLimit(true);
                                return;
                            }
                            _this.handicap++;
                            _this.setData();
                        }
                        else if (data < 0) {
                            if (_this.AISkill() - 1 < 1) {
                                _this.reachedLimit(false);
                                return;
                            }
                            _this.handicap--;
                            _this.setData();
                        }
                    },
                },
            ],
        });
        this.alertBox.present();
    };
    HomePage.prototype.reachedLimit = function (raise) {
        var alert = this.alertCtrl.create({
            title: "Limit Reached",
            //subTitle:"An Estimate of Who is Ahead",
            message: "Difficulty cannot be " +
                (raise ? "raised" : "lowered") +
                " more than it is. Difficulty is determined by depth for which stockfish accepts a value between 1-20. The depth given to the ai plus your bias is outside this value. Try raising or lowering the depth / think time setting instead to compensate.",
            buttons: [
                {
                    text: "Ok",
                    handler: function () { },
                },
            ],
        });
        alert.present();
    };
    HomePage.prototype.history = function () {
        var _this = this;
        if (this.alertBox && this.alertBox._state == 3) {
            this.alertBox.dismiss();
            return;
        }
        var pgn = this.game.pgn();
        if (!pgn) {
            this.alertBox = this.alertCtrl.create({
                title: "Move History",
                message: "Once you or your opponent have played, you can review a <b>PGN</b> of your game, copy it to your clipboard and even analyze it on <b>Chess.com</b>.",
                buttons: [
                    {
                        text: "Ok",
                        handler: function () { },
                    },
                ],
            });
            this.alertBox.present();
        }
        else {
            this.alertBox = this.alertCtrl.create({
                title: "PGN Move History",
                //subTitle:"A PGN of the game is below",
                message: pgn,
                buttons: [
                    {
                        text: "Copy to Clipboard",
                        handler: function () {
                            if (thresh.indexOf("pgn") > _this.stars) {
                                _this.starPrompt("pgn");
                                return;
                            }
                            var selBox = document.createElement("textarea");
                            selBox.style.position = "fixed";
                            selBox.style.left = "0";
                            selBox.style.top = "0";
                            selBox.style.opacity = "0";
                            selBox.value = pgn;
                            document.body.appendChild(selBox);
                            selBox.focus();
                            selBox.select();
                            document.execCommand("copy");
                            document.body.removeChild(selBox);
                        },
                    },
                    {
                        text: "Analyze Game",
                        handler: function () {
                            if (thresh.indexOf("pgn") > _this.stars) {
                                _this.starPrompt("pgn");
                                return;
                            }
                            _this.pgnExt(pgn);
                        },
                    },
                ],
            });
            this.alertBox.present();
        }
    };
    HomePage.prototype.pgnExt = function (pgn) {
        if (!window.navigator.onLine) {
            this.noInternet();
            return;
        }
        var pgn = this.game.pgn();
        console.log(pgn);
        var link = "https://www.chess.com/analysis?ref_id=5188186&pgn=" + pgn;
        console.log(link);
        link = encodeURI(link);
        this.openLink(link);
    };
    HomePage.prototype.popNews = function (title, txt) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: title,
            message: txt,
            buttons: [
                {
                    text: "Later",
                    handler: function () { },
                },
                {
                    text: "Newsletter",
                    handler: function () {
                        _this.newsletterPop();
                    },
                },
            ],
        });
        alert.present();
    };
    HomePage.prototype.pop = function (title, txt) {
        var alert = this.alertCtrl.create({
            title: title,
            message: txt,
            buttons: [
                {
                    text: "Ok",
                    handler: function () { },
                },
            ],
        });
        alert.present();
    };
    HomePage.prototype.newsletterPop = function () {
        var _this = this;
        var message = "<b>Get special launch discounts and keep up with our non-profit!</b> Unsubscribe anytime.";
        var title = "Email Sign-Up";
        if (this.newsletterSigned) {
            message +=
                " Note: As you have already signed up once, you are not eligible for another star.";
        }
        else {
            message +=
                " You will need to verify ownership of your email with a disposable code.";
            title += " and 1 Star!";
        }
        var alert = this.alertCtrl.create({
            title: title,
            message: message,
            inputs: [
                {
                    name: "email",
                    placeholder: "Your Email",
                },
            ],
            buttons: [
                {
                    text: "Later",
                    //role: 'cancel',
                    handler: function () { },
                },
                {
                    text: "Ok!",
                    handler: function (data) {
                        if (!window.navigator.onLine) {
                            _this.noInternet();
                            return;
                        }
                        var postAt = data.email.match(/@(.+)/i);
                        if (/(.+)@(.+){2,}\.(.+){2,}/.test(data.email) &&
                            data.email.length > 7 &&
                            postAt &&
                            !__WEBPACK_IMPORTED_MODULE_8__constants__["b" /* emailDomainBlacklist */].includes(postAt[1])) {
                            fetch("<email sub url>", {
                                method: "POST",
                                mode: "no-cors",
                                headers: {
                                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                                },
                                body: "EMAIL=" + data.email,
                            });
                            if (!_this.newsletterSigned) {
                                _this.earnedUpgrade(false);
                            }
                            _this.newsletterSigned = true;
                        }
                        else {
                            // alert('please enter a valid email');
                            alert.setMessage(message +
                                '<br><span class="red">Please Enter a Valid Email</span>');
                            return false;
                        }
                    },
                },
            ],
        });
        alert.present();
    };
    HomePage.prototype.ratingPop = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "Please Rate and Review",
            message: "If you are enjoying the game, please rate and/or review. Your feedback helps expose the project to others",
            buttons: [
                {
                    text: "Later",
                    //role: 'cancel',
                    handler: function () { },
                },
                {
                    text: "Ok",
                    handler: function () {
                        //if (this.mobile){
                        _this.launchReview.launch().then(function (result) {
                            _this.reviewed = true;
                            _this.setData();
                        });
                    },
                },
            ],
        });
        alert.present();
    };
    HomePage.prototype.promptRating = function () {
        // fallback?
        if (this.launchReview.isRatingSupported()) {
            this.launchReview.rating();
        }
        else {
            this.ratingPop();
        }
    };
    HomePage.prototype.showRewardAd = function () {
        if (!this.mobile) {
            console.log("reward video!");
            //alert("Reward Vid");
            this.earnedUpgrade(false);
            return;
        }
        this.loadingPop.present();
        if (typeof admob !== "undefined") {
            admob.rewardVideo
                .load({
                id: admobIDReward,
            })
                .then(function () { return admob.rewardVideo.show(); });
        }
    };
    HomePage.prototype.showInterAd = function () {
        var _this = this;
        if (this.stars >= starThreshold) {
            return;
        }
        if (!this.mobile) {
            alert("Inter Ad");
            return;
        }
        var numGamesPlayed = this.record.wins + this.record.losses;
        if (window.navigator.onLine) {
            if (numGamesPlayed == 0 && !this.shownConsent) {
                setTimeout(function () {
                    _this.showConsents();
                }, 8000);
            }
            else {
                if (numGamesPlayed % 6 == 5 && !this.reviewed) {
                    this.promptRating();
                }
                else {
                    if (typeof admob !== "undefined") {
                        admob.interstitial
                            .load({
                            id: admobIDInter,
                        })
                            .then(function () { return admob.interstitial.show(); });
                    }
                }
            }
        }
        else {
            this.showOfflineAd();
        }
    };
    HomePage.prototype.showConsents = function () {
        return __awaiter(this, void 0, void 0, function () {
            var consent, isEU, err_1, res, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        consent = window["consent"];
                        if (!this.shownConsent) {
                            this.shownConsent = true;
                            this.setData();
                        }
                        else {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, consent.isRequestLocationInEeaOrUnknown()];
                    case 1:
                        isEU = _a.sent();
                        if (!!isEU) return [3 /*break*/, 6];
                        //show ios consent if needed
                        this.usePersonalisedAds = true;
                        if (!(window["device"] && window["device"].platform == "iOS")) return [3 /*break*/, 5];
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.showIos14Consent()];
                    case 3:
                        _a.sent();
                        console.log("ios 14 consent shown successfully");
                        return [2 /*return*/];
                    case 4:
                        err_1 = _a.sent();
                        console.error(err_1);
                        return [2 /*return*/, -1];
                    case 5: return [2 /*return*/];
                    case 6:
                        _a.trys.push([6, 10, , 11]);
                        return [4 /*yield*/, this.showGDPRConsent()];
                    case 7:
                        res = _a.sent();
                        console.log("GDPR consent shown successfuly", res);
                        if (!(res == "PERSONALIZED")) return [3 /*break*/, 9];
                        console.log("personalised ads approved from gdpr");
                        this.usePersonalisedAds = true;
                        if (!(window["device"] && window["device"].platform == "iOS")) return [3 /*break*/, 9];
                        return [4 /*yield*/, this.showIos14Consent()];
                    case 8:
                        _a.sent();
                        console.log("ios 14 consent shown successfully");
                        _a.label = 9;
                    case 9: return [2 /*return*/];
                    case 10:
                        err_2 = _a.sent();
                        console.error(err_2);
                        return [2 /*return*/, -1];
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.showIos14Consent = function () {
        return __awaiter(this, void 0, void 0, function () {
            var consent, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (parseFloat(window["device"].version) < 14) {
                            return [2 /*return*/];
                        }
                        consent = window["consent"];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, consent.requestTrackingAuthorization()];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        err_3 = _a.sent();
                        console.error(err_3);
                        return [2 /*return*/, -1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.showGDPRConsent = function () {
        return __awaiter(this, void 0, void 0, function () {
            var consent, publisherIds, _a, _b, ok, form, result;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        consent = window["consent"];
                        publisherIds = ["<pubID>"];
                        _b = (_a = console).log;
                        return [4 /*yield*/, consent.checkConsent(publisherIds)];
                    case 1:
                        _b.apply(_a, [_c.sent()]);
                        return [4 /*yield*/, consent.isRequestLocationInEeaOrUnknown()];
                    case 2:
                        ok = _c.sent();
                        console.log("from eu or unknown - ", ok);
                        form = new consent.Form({
                            privacyUrl: "https://policies.google.com/privacy",
                            adFree: false,
                            nonPersonalizedAds: true,
                            personalizedAds: true,
                        });
                        return [4 /*yield*/, form.load()];
                    case 3:
                        _c.sent();
                        return [4 /*yield*/, form.show()];
                    case 4:
                        result = _c.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    var _a, _b, _c, _d, _f, _g, _h, _j, _k;
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-home",template:/*ion-inline-start:"/Users/ccj242/GitHub/Lazy-Chess-An-Indie-Chess-Puzzle-Game/src/pages/home/home.html"*/'  <div key-press *ngIf="!mobile" (onKeyPress)=\'handleKeyboardEvent($event)\'></div><!--*ngIf="!mobile || wideview" -->\n\n  <div class="font" style="color: white; padding-left: 5vw; padding-top: 5vh">\n  <i\n    ><span class="title"\n      ><b>L</b>azy\n     \n      <b>C</b>hess\n\n\n \n<span class="stars" *ngIf="stars>0 && mobile" (click)="starPrompt()" style="font-size:2vh;position: absolute; right: 15vw; top: 6.5vh">\n  <b>{{this.stars>30?30:this.stars}}</b> <ion-icon style="color:#ffd74a" name="md-star"></ion-icon>\n</span>\n\n<div style="font-size:2vh;position: absolute; right: 10vw; top: 8vh">\n  <span style="border-bottom:1px solid white" class="grow showIT animated flash" *ngIf="wideview && currOpening.w" (click)="lookupOpening(currOpening.w)">\n<img style="vertical-align:bottom;width:3vh" [src]="\'assets/pieces/alpha/bP.svg\'"><b>{{currOpening.w.name}}</b>&nbsp; <ion-icon name="md-open"></ion-icon>\n</span>\n<span style="margin-left:5vw;border-bottom:1px solid white" class="grow showIT animated flash" *ngIf="wideview && currOpening.b" (click)="lookupOpening(currOpening.b)">\n  <img style="vertical-align:bottom;width:3vh" [src]="\'assets/pieces/alpha/wP.svg\'"><b>{{currOpening.b.name}}</b>&nbsp; <ion-icon name="md-open"></ion-icon>\n</span>\n\n</div>\n\n      <span style="font-size: 1.5vh"\n        ><b>{{numChoices}}</b> moves,\n        <span [hidden]="delayTime>0" style="font-size:3vh;position:absolute;margin-left:1vw;margin-top:2.5vh"><ion-icon name="ios-shuffle"></ion-icon></span>\n        <span [hidden]="delayTime==0"><b>{{this.delayTime/1000 +.3}}</b> sec</span>\n      </span></span>\n\n    <div\n      *ngIf="!playersTurn"\n      style="\n        position: absolute;\n        width: 100vw;\n        height: 67vh;\n        top: 0;\n        left: 0;\n        z-index: 1;\n      "\n    >\n      <div style="text-align: center; padding-top: 30vh; font-size: 2.5vh">\n        <ion-spinner class="spin"></ion-spinner><br />\n        <div *ngIf="timerVal>0" style="margin-top: 15vh; font-size: 3.5vh">\n          Your opponent will take <b>{{timerVal}}</b> more seconds\n          <b>at most</b>.\n        </div>\n      </div>\n    </div>\n\n    <ion-icon\n      menuToggle\n      class="menuicon grow"\n      style="position: absolute; right: 4vw; top: 5vh"\n      name="ios-menu-outline"\n    >\n    </ion-icon>\n\n    <!---->\n\n    <img\n      src="assets/633869.svg"\n      class="animateSlow pulse infinite"\n      *ngIf="tapPrompt && mobile && record.wins==0"\n      style="\n        position: absolute;\n        z-index: 999;\n        margin: auto;\n        left: 0;\n        right: 0;\n        bottom: 15vh;\n        top: 0;\n        width: 25vh;\n        pointer-events: none;\n        opacity: 0.7;\n      "\n    />\n\n    <div [hidden]="timerVal==0 || !playersTurn" [ngStyle]="{\'opacity\':(30-timerVal)*(30-timerVal)/1400}" class="timer">{{timerVal}}</div>\n    <!-- -->\n\n    <ng2-chessboard\n      *ngIf="boardVisable"\n      [ngClass]="{\'opacity\':!playersTurn}"\n      (click)="prevToggle()"\n      #board\n      [position]="position"\n      [orientation]="whiteBottom"\n      [showNotation]="true"\n      [draggable]="false"\n      [animation]="true"\n      [pieceTheme]="pieceTheme"\n    >\n    </ng2-chessboard>\n\n    <div [hidden]="!wideview" *ngIf="mobile==false" class="split">\n<div [hidden]="moveHistory.length!==0">\n<img src="assets/imgs/art.png" style="width:100%">\n\n<!--\n<div style="width:100%;overflow:hidden">\n<img src="assets/imgs/icon.png" style="width:20vh;padding:2vh;float:left;display:inline-block">\n\n<div style="padding-top:2vh;padding-right:2vh"> <b>Welcome to Lazy Chess, a <u>non-profit</u> chess puzzle that tries to innovate the game and reduce the intimidation factor for self-concious players. </b>\n</div>\n</div>\n<hr>\n-->\n<div style="font-size:3vh;padding:2vh;text-align:center">Cycle between your <b>{{numChoicesTxt}}</b> best moves by clicking on the board or using <span class="grow" (click)="keyboardShortcuts()" style="border-bottom:1px solid white">\n  <b>Keyboard Shorcuts for you</b> <ion-icon name="md-open"></ion-icon>\n</span></div>\n\n\n<a class="twitter-timeline"  (click)="$event.stopPropagation(); false" data-dnt="true" data-theme="dark" href="https://twitter.com/LazyChessGame?ref_src=twsrc%5Etfw"></a>\n\n\n\n\n\n</div>\n\n<div class="splitFont1" *ngFor="let move of moveHistory.slice().reverse();let i=index" [ngClass]="{\'highlighted\':highlighted==i}">\n      <div (click)="showOldState(move,i)" class="grow" style="display:inline-block">\n     <span class="splitFont2">&nbsp;&nbsp;<span *ngIf="moveHistory.length-i<10">&nbsp;</span>{{moveHistory.length-i}}.</span><img style="vertical-align:bottom;width:40px" [src]="\'assets/pieces/alpha/\'+move.color+move.piece+\'.svg\'">{{move.from}}<b>{{move.dest}}</b> <ion-icon *ngIf="move.best" style="color:#ffd74a" name="md-star"></ion-icon>\n     <!--\n     <span style="padding-left:2vw;font-size:2vh">{{move.fen | slice:1:60}}...</span>-->\n</div>\n<div (click)="pgnExt(move.pgn)" class="grow" style="float:right;padding-right:2vw;margin-top:1.4vh">\n      <span class="splitFont1">{{move.adv!==\'0\'?move.adv +\' &nbsp;\':\'tie &nbsp;\'}}</span> \n    <ion-icon style="font-size:18px" name="md-open" class="splitFont1"></ion-icon>\n</div>\n\n    </div>\n    <div *ngIf="moveHistory.length>0"style="padding-top:1vh;text-align:right;padding-right:1vw">\n<span class="grow" (click)="keyboardShortcuts()" style="opacity:.8;border-bottom:1px solid white">\n  <b>Keyboard Shorcuts</b> <ion-icon name="md-open"></ion-icon>\n</span>\n</div>\n    </div>\n\n<div *ngIf="wideview && !mobile" class="mediaBtns">\n\n  <span (click)="openLink(\'https://www.twitch.tv/cinqmarsmedia/\')" class="grow">\n  Twitch\n<img style="width:5vh;margin-left:.5vw;margin-right:2vw;vertical-align:middle" src="assets/imgs/twitch.svg">\n</span>\n\n  <span (click)="openLink(\'https://discord.com/invite/fwkMQCnk2R\')" class="grow">\n  Discord\n<img style="width:5vh;margin-left:.5vw;vertical-align:middle" src="assets/imgs/discord.svg">\n</span>\n\n  <span (click)="openLink(\'https://github.com/cinqmarsmedia/Lazy-Chess-An-Indie-Chess-Puzzle-Game\')" class="grow github" style="margin-left:2vw">\n  GitHub\n<img style="width:5vh;margin-left:.5vw;vertical-align:middle" src="assets/imgs/github.svg">\n</span>\n\n</div>\n    <div>\n\n\n\n\n\n\n\n      <div *ngIf="!wideview" [ngClass]="{\'bound\':record.wins>0,\'boundplus\':record.wins==0}">\n\n\n        <div class="display animated infinite">\n\n<span *ngIf="record.wins>0" [hidden]="flashResult && mode!==\'allRand\'">\n\n<span (click)="cp()" >\n<b><span [hidden]="centipawns<=0 || centipawns==\'∞\'">+</span>{{!newboardgamestate?centipawns:\'0.3\'}}</b> \n\n<!--\n<ion-icon\n              style="font-size: 2.8vh; vertical-align:middle;padding-left: 1vw"\n              name="ios-compass-outline"\n            ></ion-icon>-->\n            <img style="vertical-align:middle;padding-bottom:.2vh;width:2.1vh" src="assets/633839.svg">\n</span>\n\n\n\n            &nbsp;&nbsp;&nbsp;&nbsp;\n<span [ngClass]="{\'animated pulse infinite\':currDepth==0}" (click)="dpth()">       \n<ion-icon style="font-size: 2.8vh; vertical-align:middle;padding-left: 1vw"\n              name="md-arrow-round-down"\n            ></ion-icon><b> {{mode=="allRand"?0:currDepth}}</b>\n</span>\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n\n<span (click)="hdnicp()"> \n<img style="vertical-align:middle;padding-bottom:.5vh;width:2.1vh" src="assets/992668.svg">\n<b>{{handicap}}</b>\n</span>\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n<span [ngClass]="{\'half\':moveHistory.length==0}" (click)="history()"> \n<img style="vertical-align:middle;padding-bottom:.6vh;width:2.4vh" src="assets/61122.svg">\n<b>{{moveHistory.length}}</b>\n</span>&nbsp;\n            <!--analyze: <ion-icon\n              style="font-size: 2.8vh; padding-left: 1vw"\n              name="md-open"\n            ></ion-icon>-->\n          </span>\n\n\n          <span (click)="guide()" *ngIf="record.wins==0" [hidden]="flashResult">\n            <b>Tap</b> on the board to\n            <span [ngClass]="{\'flash\':finalChoices[selected]}"\n              ><b>cycle</b></span\n            >\n            between your <b>{{numChoicesTxt}}</b> <span *ngIf="mode==\'nBest\'">best</span> moves\n            <ion-icon\n              style="font-size: 2.8vh; vertical-align:middle;padding-left: 1vw"\n              name="help-circle"\n            ></ion-icon>\n          </span>\n\n        \n\n          <div *ngIf="lastchoice.move && flashResult && mode!==\'allRand\'" class="dynPad">\n            <b>{{lastchoice.move}}</b> was\n            <span *ngIf="lastchoice.rank==1">your <b>best</b> move</span>\n            \n\n            <span\n              *ngIf="lastchoice.rank==2"\n              >your <b>2nd</b> best move</span\n            >\n\n            <span *ngIf="lastchoice.rank==3"\n              >your <b>3rd</b> best move</span\n            >\n           \n\n            <span *ngIf="lastchoice.rank>3"\n              >your <b>{{lastchoice.rank}}th</b> best move</span\n            >\n\n            <span *ngIf="lastchoice.rank==0"\n              >a <b>random</b> move</span>\n\n          <span *ngIf="lastchoice.rank==-1"\n              >a <b>great</b> opening</span>\n\n              <span *ngIf="lastchoice.rank==-2"\n              >a <b>good</b> opening</span>\n\n            <span\n              *ngIf="lastchoice.rank/numChoices<=.5 && lastchoice.rank!==0"\n              style="font-style: normal !important"\n              >{{goodMoji[randNum % goodMoji.length]}}</span\n            >\n\n            <span\n              *ngIf="lastchoice.rank/numChoices>.5 || lastchoice.rank==0"\n              style="font-style: normal !important"\n              >{{badMoji[randNum%badMoji.length]}}</span\n            >\n          </div>\n        </div>\n\n        <button\n          large\n          full\n          style="height: 8vh"\n          color="light"\n          (click)="makeMove()"\n          ion-button\n        >\n        <span *ngIf="thinking && playersTurn">Please Wait</span>\n          <span *ngIf="!playersTurn">Waiting for Opponent</span>\n          <span *ngIf="!thinking && finalChoices[selected] && playersTurn">\n            confirm <b>{{finalChoices[selected].choice}}</b>\n            <sup style="font-size: 2.1vh"\n              >{{selected+1}} of {{finalChoices.length}}</sup\n            ></span\n          >\n          <span\n            *ngIf="!finalChoices[selected] && !lastchoice.move && playersTurn && !thinking && newboardgamestate"\n          >\n            Start Game</span\n          >\n          <span\n            *ngIf="!finalChoices[selected] && !lastchoice.move && playersTurn && !thinking && !newboardgamestate"\n          >\n            Resume Game</span\n          >\n          <!---->\n        </button>\n\n\n<div style="\n            position:absolute;bottom:.5vh;font-size:2.2vh;left:0;right:0;margin-left:auto;margin-right:auto;padding-left:3vw;padding-right:3vw\n          ">\n<span style="border-bottom:1px solid white" class="grow showIT animated flash" *ngIf="currOpening.b || currOpening.w" (click)="lookupOpening(currOpening.b)">\n  <span *ngIf="currOpening.b" >\n  <img style="vertical-align:bottom;width:3.5vh" [src]="\'assets/pieces/alpha/wP.svg\'"><b>{{currOpening.b.name}}</b>&nbsp; <ion-icon name="md-open"></ion-icon>\n</span>\n<span *ngIf="!currOpening.b && currOpening.w" >\n <img style="vertical-align:bottom;width:3.5vh" [src]="\'assets/pieces/alpha/wP.svg\'"><b>{{currOpening.w.name}}</b>&nbsp; <ion-icon name="md-open"></ion-icon>\n</span>\n</span>\n</div>\n\n        <div\n          (click)="showStats(true)"\n          [ngClass]="{\'showIT animated flash\':moveHistory.length!==1 && record.total!==0 && !currOpening.b && !currOpening.w}"\n          style="\n            text-align: center;\n            width: 100%;\n            opacity:0;\n            font-size: 2.2vh;\n            line-height: 2.8vh;\n            padding-top: 1vh;\n          "\n        >\n          Best:\n          <b>{{Math.floor(record.best/(record.total==0?1:record.total)*100)}}</b\n          >% &nbsp;&nbsp;&nbsp;Elo:\n          <b\n            >{{elo}}</b\n          > &nbsp;&nbsp;&nbsp;Moves:\n          <b>{{record.total | number:\'1.0\':\'en-US\'}}</b>\n          &nbsp;&nbsp;&nbsp;<br />\n          Wins: <b>{{record.wins}}</b> &nbsp;&nbsp;&nbsp;Losses:\n          <b>{{record.losses}}</b> &nbsp;&nbsp;&nbsp;Rank:\n          <b>{{percent}}</b>%\n\n        </div>\n      </div>\n<!--wideview-->\n <div *ngIf="wideview && !mobile" style="position:absolute;left:calc(31vw - 35vh);bottom:2.5vh;width:100vw">\n\n\n        <div style="display:inline-block;padding-right:3vw" class="displaytwo animated infinite">\n\n<span [hidden]="flashResult && mode!==\'allRand\'">\n\n<span (click)="cp()" >\n<b><span [hidden]="centipawns<=0 || centipawns==\'∞\'">+</span>{{!newboardgamestate?centipawns:\'0.3\'}}</b>\n\n<!--<ion-icon\n              style="font-size: 2.8vh; vertical-align:middle;padding-left: 1vw"\n              name="help-circle"\n            ></ion-icon>\n          -->\n           <img style="vertical-align:middle;padding-bottom:.3vh;width:2.4vh" src="assets/633839.svg">\n</span>\n\n\n\n            &nbsp;&nbsp;&nbsp;&nbsp;\n<span [ngClass]="{\'animated pulse infinite\':currDepth==0}" (click)="dpth()">       \n<ion-icon style="font-size: 2.8vh; vertical-align:middle;padding-left: 1vw"\n              name="md-arrow-round-down"\n            ></ion-icon><b> {{mode=="allRand"?0:currDepth}}</b>\n</span>\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n\n<span (click)="hdnicp()"> \n<img style="vertical-align:middle;padding-bottom:.5vh;width:2.1vh" src="assets/992668.svg">\n<b>{{handicap}}</b>\n</span>\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n<span [ngClass]="{\'half\':moveHistory.length==0}" (click)="history()"> \n<img style="vertical-align:middle;padding-bottom:.6vh;width:2.4vh" src="assets/61122.svg">\n<b>{{moveHistory.length}}</b>\n</span>&nbsp;\n            <!--analyze: <ion-icon\n              style="font-size: 2.8vh; padding-left: 1vw"\n              name="md-open"\n            ></ion-icon>-->\n          </span>\n\n\n       \n\n        \n\n          <div *ngIf="lastchoice.move && flashResult && mode!==\'allRand\'" class="dynPad">\n            <b>{{lastchoice.move}}</b> was\n            <span *ngIf="lastchoice.rank==1">your <b>best</b> move</span>\n            \n\n            <span\n              *ngIf="lastchoice.rank==2"\n              >your <b>2nd</b> best move</span\n            >\n\n            <span *ngIf="lastchoice.rank==3"\n              >your <b>3rd</b> best move</span\n            >\n           \n\n            <span *ngIf="lastchoice.rank>3"\n              >your <b>{{lastchoice.rank}}th</b> best move</span\n            >\n\n            <span *ngIf="lastchoice.rank==0"\n              >a <b>random</b> move</span>\n\n          <span *ngIf="lastchoice.rank==-1"\n              >a <b>great</b> opening</span>\n\n              <span *ngIf="lastchoice.rank==-2"\n              >a <b>good</b> opening</span>\n              \n            <span\n              *ngIf="lastchoice.rank/numChoices<=.5 && lastchoice.rank!==0"\n              style="font-style: normal !important"\n              >{{goodMoji[randNum % goodMoji.length]}}</span\n            >\n\n            <span\n              *ngIf="lastchoice.rank/numChoices>.5 || lastchoice.rank==0"\n              style="font-style: normal !important"\n              >{{badMoji[randNum%badMoji.length]}}</span\n            >\n          </div>\n        </div>\n<!---->\n        <button\n          style="height:5vh;margin-top:-2vh;font-size:2.5vh !important;width:28vh"\n          color="light"\n          (click)="makeMove()"\n          ion-button\n        >\n        <span *ngIf="thinking && playersTurn">Please Wait</span>\n          <span *ngIf="!playersTurn">Waiting for Opponent</span>\n          <span *ngIf="!thinking && finalChoices[selected] && playersTurn">\n            confirm <b>{{finalChoices[selected].choice}}</b>\n            <sup style="font-size: 1.8vh"\n              >{{selected+1}} of {{finalChoices.length}}</sup\n            ></span\n          >\n          <span\n            *ngIf="!finalChoices[selected] && !lastchoice.move && playersTurn && !thinking && newboardgamestate"\n          >\n            Start Game</span\n          >\n          <span\n            *ngIf="!finalChoices[selected] && !lastchoice.move && playersTurn && !thinking && !newboardgamestate"\n          >\n            Resume Game</span\n          >\n\n        </button>\n     \n\n    </div>\n    <div *ngIf="wideview && !mobile"\n          (click)="showStats()"\n          [ngClass]="{\'showIT animated flash\':record.total>0}"\n          style="\n            text-align:center;\n            position:absolute;\n            opacity:0;\n            right:4vw;\n            bottom:3vh;\n            font-size: 2.5vh;\n            line-height: 2.8vh;\n          "\n        >\n          Best\n          <b>{{Math.floor(record.best/(record.total==0?1:record.total)*100)}}</b\n          >% &nbsp;&nbsp;&nbsp;Elo\n          <b\n            >{{elo}}</b\n          > &nbsp;&nbsp;&nbsp;Moves\n          <b>{{record.total | number:\'1.0\':\'en-US\'}}</b>\n          <br />\n          Wins <b>{{record.wins}}</b> &nbsp;&nbsp;&nbsp;Losses\n          <b>{{record.losses}}</b> &nbsp;&nbsp;&nbsp;Rank\n          <b>{{percent}}</b>%\n\n        </div>\n\n\n\n\n\n\n      </div>\n</i>\n</div>\n'/*ion-inline-end:"/Users/ccj242/GitHub/Lazy-Chess-An-Indie-Chess-Puzzle-Game/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["AlertController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["AlertController"]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["Events"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["Events"]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["MenuController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["MenuController"]) === "function" ? _c : Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["Storage"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["Storage"]) === "function" ? _d : Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["Platform"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["Platform"]) === "function" ? _f : Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__ionic_native_device_feedback__["DeviceFeedback"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ionic_native_device_feedback__["DeviceFeedback"]) === "function" ? _g : Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_taptic_engine__["TapticEngine"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_taptic_engine__["TapticEngine"]) === "function" ? _h : Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_launch_review__["LaunchReview"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_launch_review__["LaunchReview"]) === "function" ? _j : Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["LoadingController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["LoadingController"]) === "function" ? _k : Object])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_core__);



//disable this in dev
Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["platformBrowserDynamic"])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_device_feedback__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_device_feedback___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__ionic_native_device_feedback__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_taptic_engine__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_taptic_engine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__ionic_native_taptic_engine__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__ionic_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_launch_review__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_launch_review___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__ionic_native_launch_review__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_chessboard__ = __webpack_require__(610);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_chessboard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_ng2_chessboard__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2__ = __webpack_require__(611);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__key_press_key_press__ = __webpack_require__(612);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_database__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__constants__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__key_press_key_press__["a" /* KeyPressDirective */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_11_ng2_chessboard__["ChessboardModule"],
                __WEBPACK_IMPORTED_MODULE_12_angularfire2__["AngularFireModule"].initializeApp(__WEBPACK_IMPORTED_MODULE_15__constants__["c" /* fbConfig */]),
                __WEBPACK_IMPORTED_MODULE_14_angularfire2_database__["AngularFireDatabaseModule"],
                __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["IonicStorageModule"].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicApp"]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["StatusBar"],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_device_feedback__["DeviceFeedback"],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_taptic_engine__["TapticEngine"],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["SplashScreen"],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_launch_review__["LaunchReview"],
                //InAppPurchase2,
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicErrorHandler"] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(319);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, events) {
        var _this = this;
        this.events = events;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.difficulty = 2;
        this.thinkTime = 700;
        this.ptheme = "alpha";
        this.mode = "nBest";
        this.color = 'default';
        this.visible = true;
        this.upgraded = false;
        this.iOS = navigator.userAgent.match(/Mac|iPhone|iPad|iPod/i);
        this.winHeight = window.innerHeight;
        this.newChallenges = 0;
        platform.ready().then(function () {
            statusBar.backgroundColorByName("black");
            statusBar.styleLightContent();
            splashScreen.hide();
        });
        events.subscribe("updateThinkTime", function (val) {
            _this.thinkTime = val;
            _this.eventPublish("thinktime", val);
        });
        events.subscribe("updateChallenges", function (val) {
            _this.newChallenges = val;
            //    this.eventPublish("thinktime", val);
        });
        events.subscribe("updateDifficulty", function (val) {
            _this.difficulty = val;
            _this.eventPublish("difficulty", val);
        });
        events.subscribe("updateColor", function (val) {
            _this.color = val;
        });
        events.subscribe("updateMode", function (val) {
            console.log(val);
            _this.mode = val;
        });
        events.subscribe("30stars", function (val) {
            _this.upgraded = true;
        });
        events.subscribe("updateTheme", function (val) {
            _this.ptheme = val;
            _this.visible = false;
            setTimeout(function () {
                _this.ptheme = val;
                _this.visible = true;
            }, 0);
        });
    }
    MyApp.prototype.eventPublish = function (name, param) {
        this.events.publish(name, param);
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/ccj242/GitHub/Lazy-Chess-An-Indie-Chess-Puzzle-Game/src/app/app.html"*/'<!--<link href="https://fonts.googleapis.com/css?family=Roboto:100i&display=swap" rel="stylesheet">\n-->\n<ion-menu side="end" [content]="content" type="overlay">\n\n\n  <ion-content>\n    <ion-list>\n      <ion-list-header> Settings <ion-icon style="color:#ffd74a" name="md-star"></ion-icon>\n\n        <div (click)="eventPublish(\'guide\',null)" style="float:right">Help <ion-icon name="md-help-circle"></ion-icon></div>\n\n      </ion-list-header>\n<!---->\n        <ion-item>\n          \n        <ion-label>Mode</ion-label>\n        <ion-select     \n          [(ngModel)]="mode"\n          (ngModelChange)="eventPublish(\'mode\',$event)"\n        >\n\n          <ion-option value="nBest">N Best</ion-option>\n          <ion-option value="bestRand">Best+Random</ion-option>\n          <ion-option value="shallow">Shallow</ion-option>\n          <ion-option value="allRand">All Random</ion-option>\n          <ion-option value="twobytwo">2 x 2</ion-option>\n          <ion-option value="pieceFocus">By Piece</ion-option>\n          <ion-option value="bothSides">Both Sides</ion-option>\n        <ion-option value="swipe">Swipe</ion-option>\n        </ion-select>\n      </ion-item>\n\n\n      <ion-item [ngClass]="{\'halfopacitynothin\':mode==\'swipe\' || mode==\'pieceFocus\' || mode==\'twobytwo\'}">\n        <ion-label>Difficulty</ion-label>\n        <ion-select\n          (ngModelChange)="eventPublish(\'difficulty\',$event)"\n          [(ngModel)]="difficulty"\n        >\n          <ion-option value="4">4 Moves</ion-option>\n          <ion-option value="3">3 Moves</ion-option>\n          <ion-option value="2">2 Moves</ion-option>\n        </ion-select>\n      </ion-item>\n<!--\n      <ion-item>\n        <ion-label>Think Time</ion-label>\n        <ion-select\n          (ngModelChange)="eventPublish(\'thinktime\',$event)"\n          [(ngModel)]="thinkTime"\n        >\n          <ion-option value="200">500 ms</ion-option>\n          <ion-option value="700">1 sec</ion-option>\n          <ion-option value="1700">2 sec</ion-option>\n          <ion-option value="4700">5 sec</ion-option>\n      \n        </ion-select>\n      </ion-item>\n-->\n      <ion-item>\n        <ion-label>Pieces</ion-label>\n        <ion-select\n          *ngIf="visible"\n          (ngModelChange)="eventPublish(\'changeTheme\',$event)"\n          [(ngModel)]="ptheme"\n        >\n          <ion-option value="alpha">Alpha</ion-option>\n          <ion-option value="kosal">Kosal</ion-option>\n          <ion-option value="merida">Merida</ion-option>\n          <ion-option value="oslo">Oslo</ion-option>\n          <ion-option value="california">California</ion-option>\n       \n        </ion-select>\n      </ion-item>\n\n  <ion-item>\n        <ion-label>Theme</ion-label>\n        <ion-select\n          *ngIf="visible"\n          (ngModelChange)="eventPublish(\'changeColor\',$event)"\n          [(ngModel)]="color"\n        >\n          <ion-option value="default">Default</ion-option>\n          <ion-option value="frozen">Frozen</ion-option>\n          <ion-option value="lime">Lime</ion-option>\n          <ion-option value="leipzig">Leipzig</ion-option>\n          <ion-option value="chess24">Chess24</ion-option>\n        </ion-select>\n      </ion-item>\n\n\n\n    </ion-list>\n\n\n\n\n    <ion-list-header> Multiplayer <ion-icon style="color:#ffd74a" name="md-star"></ion-icon></ion-list-header>\n    <ion-list>\n      <button menuClose ion-item (click)="eventPublish(\'playFriend\',null)">\n        Challenge Friend\n      </button>\n\n      <button menuClose ion-item (click)="eventPublish(\'randOpp\',null)">\n        Play Random Opponent\n      </button>\n      <!---->\n      <button menuClose ion-item (click)="eventPublish(\'local\',null)">\n        Pass & Play\n      </button>\n    </ion-list>\n<!--\n    <ion-list-header> Bonuses </ion-list-header>\n    <ion-list>\n      <button menuClose ion-item (click)="eventPublish(\'playFriend\',null)">\n        Upgrade to Full\n      </button>\n\n      <button menuClose ion-item (click)="eventPublish(\'randOpp\',null)">\n        Unlock Bonuses\n      </button>\n    </ion-list>\n-->\n\n    <ion-list-header> Other <ion-icon style="color:#ffd74a" name="md-star"></ion-icon></ion-list-header>\n\n    <ion-list>\n      <!--\n        <button (click)="eventPublish(\'stats\')" menuClose ion-item>\n         Stats\n        </button>\n       \n        <button (click)="eventPublish(\'pauseAds\')" menuClose ion-item>\n         Pause Ads\n        </button>\n      -->\n      <button (click)="eventPublish(\'challengePrompt\')" menuClose ion-item>\n        <ion-badge *ngIf="newChallenges>0" color="danger" item-end>{{newChallenges}}</ion-badge>\n       Challenges\n      </button>\n\n      <button *ngIf="!upgraded" (press)="eventPublish(\'code\')" (click)="eventPublish(\'upgrade\')" menuClose ion-item>\n       Upgrade to <b>Ad Free</b>\n      </button>\n<button *ngIf="!upgraded && iOS" (click)="eventPublish(\'code\')" menuClose ion-item>\n       Restore Donation\n      </button>\n   <button *ngIf="upgraded" (click)="eventPublish(\'upgrade\')" menuClose ion-item>\n       Our <b>Non-Profit</b>\n      </button>\n\n      <button *ngIf="winHeight>710 || upgraded || !iOS" (click)="eventPublish(\'devil\')" menuClose ion-item>\n        <i>The Devil\'s Calculator</i>\n      </button>\n      <button *ngIf="winHeight>785 || (winHeight>720 && (!iOS || upgraded))" (click)="eventPublish(\'anagraphs\')" menuClose ion-item>\n       <i> Anagraphs</i>\n      </button>\n    </ion-list>\n    <div style="text-align: center">\n      <button\n        ion-button\n        large\n        full\n        color="light"\n        (press)="eventPublish(\'resetData\',null)"\n        (click)="eventPublish(\'abandon\',null)"\n      >\n        Forfeit Game\n        <span\n          style="\n            position: absolute;\n            bottom:7px;right:40px;\n            font-size: 9px;\n            margin-left: 60px;\n            margin-top: 15px;\n          "\n          ><i>hold to reset</i></span\n        >\n      </button>\n    </div>\n    <div (click)="eventPublish(\'openCMM\')" style="text-align: center">Cinq-Mars Media © 2021 <b>v1.5</b></div>\n  </ion-content>\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content></ion-nav>\n'/*ion-inline-end:"/Users/ccj242/GitHub/Lazy-Chess-An-Indie-Chess-Puzzle-Game/src/app/app.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["StatusBar"],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["SplashScreen"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 607:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*
 * Copyright (c) 2016, Jeff Hlywa (jhlywa@gmail.com)
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice,
 *    this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 *
 *----------------------------------------------------------------------------*/

/* minified license below  */

/* @license
 * Copyright (c) 2016, Jeff Hlywa (jhlywa@gmail.com)
 * Released under the BSD license
 * https://github.com/jhlywa/chess.js/blob/master/LICENSE
 */

var Chess = function(fen) {

  /* jshint indent: false */

  var BLACK = 'b';
  var WHITE = 'w';

  var EMPTY = -1;

  var PAWN = 'p';
  var KNIGHT = 'n';
  var BISHOP = 'b';
  var ROOK = 'r';
  var QUEEN = 'q';
  var KING = 'k';

  var SYMBOLS = 'pnbrqkPNBRQK';

  var DEFAULT_POSITION = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';

  var POSSIBLE_RESULTS = ['1-0', '0-1', '1/2-1/2', '*'];

  var PAWN_OFFSETS = {
    b: [16, 32, 17, 15],
    w: [-16, -32, -17, -15]
  };

  var PIECE_OFFSETS = {
    n: [-18, -33, -31, -14,  18, 33, 31,  14],
    b: [-17, -15,  17,  15],
    r: [-16,   1,  16,  -1],
    q: [-17, -16, -15,   1,  17, 16, 15,  -1],
    k: [-17, -16, -15,   1,  17, 16, 15,  -1]
  };

  var ATTACKS = [
    20, 0, 0, 0, 0, 0, 0, 24,  0, 0, 0, 0, 0, 0,20, 0,
     0,20, 0, 0, 0, 0, 0, 24,  0, 0, 0, 0, 0,20, 0, 0,
     0, 0,20, 0, 0, 0, 0, 24,  0, 0, 0, 0,20, 0, 0, 0,
     0, 0, 0,20, 0, 0, 0, 24,  0, 0, 0,20, 0, 0, 0, 0,
     0, 0, 0, 0,20, 0, 0, 24,  0, 0,20, 0, 0, 0, 0, 0,
     0, 0, 0, 0, 0,20, 2, 24,  2,20, 0, 0, 0, 0, 0, 0,
     0, 0, 0, 0, 0, 2,53, 56, 53, 2, 0, 0, 0, 0, 0, 0,
    24,24,24,24,24,24,56,  0, 56,24,24,24,24,24,24, 0,
     0, 0, 0, 0, 0, 2,53, 56, 53, 2, 0, 0, 0, 0, 0, 0,
     0, 0, 0, 0, 0,20, 2, 24,  2,20, 0, 0, 0, 0, 0, 0,
     0, 0, 0, 0,20, 0, 0, 24,  0, 0,20, 0, 0, 0, 0, 0,
     0, 0, 0,20, 0, 0, 0, 24,  0, 0, 0,20, 0, 0, 0, 0,
     0, 0,20, 0, 0, 0, 0, 24,  0, 0, 0, 0,20, 0, 0, 0,
     0,20, 0, 0, 0, 0, 0, 24,  0, 0, 0, 0, 0,20, 0, 0,
    20, 0, 0, 0, 0, 0, 0, 24,  0, 0, 0, 0, 0, 0,20
  ];

  var RAYS = [
     17,  0,  0,  0,  0,  0,  0, 16,  0,  0,  0,  0,  0,  0, 15, 0,
      0, 17,  0,  0,  0,  0,  0, 16,  0,  0,  0,  0,  0, 15,  0, 0,
      0,  0, 17,  0,  0,  0,  0, 16,  0,  0,  0,  0, 15,  0,  0, 0,
      0,  0,  0, 17,  0,  0,  0, 16,  0,  0,  0, 15,  0,  0,  0, 0,
      0,  0,  0,  0, 17,  0,  0, 16,  0,  0, 15,  0,  0,  0,  0, 0,
      0,  0,  0,  0,  0, 17,  0, 16,  0, 15,  0,  0,  0,  0,  0, 0,
      0,  0,  0,  0,  0,  0, 17, 16, 15,  0,  0,  0,  0,  0,  0, 0,
      1,  1,  1,  1,  1,  1,  1,  0, -1, -1,  -1,-1, -1, -1, -1, 0,
      0,  0,  0,  0,  0,  0,-15,-16,-17,  0,  0,  0,  0,  0,  0, 0,
      0,  0,  0,  0,  0,-15,  0,-16,  0,-17,  0,  0,  0,  0,  0, 0,
      0,  0,  0,  0,-15,  0,  0,-16,  0,  0,-17,  0,  0,  0,  0, 0,
      0,  0,  0,-15,  0,  0,  0,-16,  0,  0,  0,-17,  0,  0,  0, 0,
      0,  0,-15,  0,  0,  0,  0,-16,  0,  0,  0,  0,-17,  0,  0, 0,
      0,-15,  0,  0,  0,  0,  0,-16,  0,  0,  0,  0,  0,-17,  0, 0,
    -15,  0,  0,  0,  0,  0,  0,-16,  0,  0,  0,  0,  0,  0,-17
  ];

  var SHIFTS = { p: 0, n: 1, b: 2, r: 3, q: 4, k: 5 };

  var FLAGS = {
    NORMAL: 'n',
    CAPTURE: 'c',
    BIG_PAWN: 'b',
    EP_CAPTURE: 'e',
    PROMOTION: 'p',
    KSIDE_CASTLE: 'k',
    QSIDE_CASTLE: 'q'
  };

  var BITS = {
    NORMAL: 1,
    CAPTURE: 2,
    BIG_PAWN: 4,
    EP_CAPTURE: 8,
    PROMOTION: 16,
    KSIDE_CASTLE: 32,
    QSIDE_CASTLE: 64
  };

  var RANK_1 = 7;
  var RANK_2 = 6;
  var RANK_3 = 5;
  var RANK_4 = 4;
  var RANK_5 = 3;
  var RANK_6 = 2;
  var RANK_7 = 1;
  var RANK_8 = 0;

  var SQUARES = {
    a8:   0, b8:   1, c8:   2, d8:   3, e8:   4, f8:   5, g8:   6, h8:   7,
    a7:  16, b7:  17, c7:  18, d7:  19, e7:  20, f7:  21, g7:  22, h7:  23,
    a6:  32, b6:  33, c6:  34, d6:  35, e6:  36, f6:  37, g6:  38, h6:  39,
    a5:  48, b5:  49, c5:  50, d5:  51, e5:  52, f5:  53, g5:  54, h5:  55,
    a4:  64, b4:  65, c4:  66, d4:  67, e4:  68, f4:  69, g4:  70, h4:  71,
    a3:  80, b3:  81, c3:  82, d3:  83, e3:  84, f3:  85, g3:  86, h3:  87,
    a2:  96, b2:  97, c2:  98, d2:  99, e2: 100, f2: 101, g2: 102, h2: 103,
    a1: 112, b1: 113, c1: 114, d1: 115, e1: 116, f1: 117, g1: 118, h1: 119
  };

  var ROOKS = {
    w: [{square: SQUARES.a1, flag: BITS.QSIDE_CASTLE},
        {square: SQUARES.h1, flag: BITS.KSIDE_CASTLE}],
    b: [{square: SQUARES.a8, flag: BITS.QSIDE_CASTLE},
        {square: SQUARES.h8, flag: BITS.KSIDE_CASTLE}]
  };

  var board = new Array(128);
  var kings = {w: EMPTY, b: EMPTY};
  var turn = WHITE;
  var castling = {w: 0, b: 0};
  var ep_square = EMPTY;
  var half_moves = 0;
  var move_number = 1;
  var history = [];
  var header = {};

  /* if the user passes in a fen string, load it, else default to
   * starting position
   */
  if (typeof fen === 'undefined') {
    load(DEFAULT_POSITION);
  } else {
    load(fen);
  }

  function clear() {
    board = new Array(128);
    kings = {w: EMPTY, b: EMPTY};
    turn = WHITE;
    castling = {w: 0, b: 0};
    ep_square = EMPTY;
    half_moves = 0;
    move_number = 1;
    history = [];
    header = {};
    update_setup(generate_fen());
  }

  function reset() {
    load(DEFAULT_POSITION);
  }

  function load(fen) {
    var tokens = fen.split(/\s+/);
    var position = tokens[0];
    var square = 0;
/*
    if (!validate_fen(fen).valid) {
      return false;
    }
*/
    clear();

    for (var i = 0; i < position.length; i++) {
      var piece = position.charAt(i);

      if (piece === '/') {
        square += 8;
      } else if (is_digit(piece)) {
        square += parseInt(piece, 10);
      } else {
        var color = (piece < 'a') ? WHITE : BLACK;
        put({type: piece.toLowerCase(), color: color}, algebraic(square));
        square++;
      }
    }

    turn = tokens[1];

    if (tokens[2].indexOf('K') > -1) {
      castling.w |= BITS.KSIDE_CASTLE;
    }
    if (tokens[2].indexOf('Q') > -1) {
      castling.w |= BITS.QSIDE_CASTLE;
    }
    if (tokens[2].indexOf('k') > -1) {
      castling.b |= BITS.KSIDE_CASTLE;
    }
    if (tokens[2].indexOf('q') > -1) {
      castling.b |= BITS.QSIDE_CASTLE;
    }

    ep_square = (tokens[3] === '-') ? EMPTY : SQUARES[tokens[3]];
    half_moves = parseInt(tokens[4], 10);
    move_number = parseInt(tokens[5], 10);

    update_setup(generate_fen());

    return true;
  }

  /* TODO: this function is pretty much crap - it validates structure but
   * completely ignores content (e.g. doesn't verify that each side has a king)
   * ... we should rewrite this, and ditch the silly error_number field while
   * we're at it
   */
  function validate_fen(fen) {
    var errors = {
       0: 'No errors.',
       1: 'FEN string must contain six space-delimited fields.',
       2: '6th field (move number) must be a positive integer.',
       3: '5th field (half move counter) must be a non-negative integer.',
       4: '4th field (en-passant square) is invalid.',
       5: '3rd field (castling availability) is invalid.',
       6: '2nd field (side to move) is invalid.',
       7: '1st field (piece positions) does not contain 8 \'/\'-delimited rows.',
       8: '1st field (piece positions) is invalid [consecutive numbers].',
       9: '1st field (piece positions) is invalid [invalid piece].',
      10: '1st field (piece positions) is invalid [row too large].',
      11: 'Illegal en-passant square',
    };

    /* 1st criterion: 6 space-seperated fields? */
    var tokens = fen.split(/\s+/);
    if (tokens.length !== 6) {
      return {valid: false, error_number: 1, error: errors[1]};
    }

    /* 2nd criterion: move number field is a integer value > 0? */
    if (isNaN(tokens[5]) || (parseInt(tokens[5], 10) <= 0)) {
      return {valid: false, error_number: 2, error: errors[2]};
    }

    /* 3rd criterion: half move counter is an integer >= 0? */
    if (isNaN(tokens[4]) || (parseInt(tokens[4], 10) < 0)) {
      return {valid: false, error_number: 3, error: errors[3]};
    }

    /* 4th criterion: 4th field is a valid e.p.-string? */
    if (!/^(-|[abcdefgh][36])$/.test(tokens[3])) {
      return {valid: false, error_number: 4, error: errors[4]};
    }

    /* 5th criterion: 3th field is a valid castle-string? */
    if( !/^(KQ?k?q?|Qk?q?|kq?|q|-)$/.test(tokens[2])) {
      return {valid: false, error_number: 5, error: errors[5]};
    }

    /* 6th criterion: 2nd field is "w" (white) or "b" (black)? */
    if (!/^(w|b)$/.test(tokens[1])) {
      return {valid: false, error_number: 6, error: errors[6]};
    }

    /* 7th criterion: 1st field contains 8 rows? */
    var rows = tokens[0].split('/');
    if (rows.length !== 8) {
      return {valid: false, error_number: 7, error: errors[7]};
    }

    /* 8th criterion: every row is valid? */
    for (var i = 0; i < rows.length; i++) {
      /* check for right sum of fields AND not two numbers in succession */
      var sum_fields = 0;
      var previous_was_number = false;

      for (var k = 0; k < rows[i].length; k++) {
        if (!isNaN(rows[i][k])) {
          if (previous_was_number) {
            return {valid: false, error_number: 8, error: errors[8]};
          }
          sum_fields += parseInt(rows[i][k], 10);
          previous_was_number = true;
        } else {
          if (!/^[prnbqkPRNBQK]$/.test(rows[i][k])) {
            return {valid: false, error_number: 9, error: errors[9]};
          }
          sum_fields += 1;
          previous_was_number = false;
        }
      }
      if (sum_fields !== 8) {
        return {valid: false, error_number: 10, error: errors[10]};
      }
    }

    if ((tokens[3][1] == '3' && tokens[1] == 'w') ||
        (tokens[3][1] == '6' && tokens[1] == 'b')) {
          return {valid: false, error_number: 11, error: errors[11]};
    }

    /* everything's okay! */
    return {valid: true, error_number: 0, error: errors[0]};
  }

  function generate_fen() {
    var empty = 0;
    var fen = '';

    for (var i = SQUARES.a8; i <= SQUARES.h1; i++) {
      if (board[i] == null) {
        empty++;
      } else {
        if (empty > 0) {
          fen += empty;
          empty = 0;
        }
        var color = board[i].color;
        var piece = board[i].type;

        fen += (color === WHITE) ?
                 piece.toUpperCase() : piece.toLowerCase();
      }

      if ((i + 1) & 0x88) {
        if (empty > 0) {
          fen += empty;
        }

        if (i !== SQUARES.h1) {
          fen += '/';
        }

        empty = 0;
        i += 8;
      }
    }

    var cflags = '';
    if (castling[WHITE] & BITS.KSIDE_CASTLE) { cflags += 'K'; }
    if (castling[WHITE] & BITS.QSIDE_CASTLE) { cflags += 'Q'; }
    if (castling[BLACK] & BITS.KSIDE_CASTLE) { cflags += 'k'; }
    if (castling[BLACK] & BITS.QSIDE_CASTLE) { cflags += 'q'; }

    /* do we have an empty castling flag? */
    cflags = cflags || '-';
    var epflags = (ep_square === EMPTY) ? '-' : algebraic(ep_square);

    return [fen, turn, cflags, epflags, half_moves, move_number].join(' ');
  }

  function set_header(args) {
    for (var i = 0; i < args.length; i += 2) {
      if (typeof args[i] === 'string' &&
          typeof args[i + 1] === 'string') {
        header[args[i]] = args[i + 1];
      }
    }
    return header;
  }

  /* called when the initial board setup is changed with put() or remove().
   * modifies the SetUp and FEN properties of the header object.  if the FEN is
   * equal to the default position, the SetUp and FEN are deleted
   * the setup is only updated if history.length is zero, ie moves haven't been
   * made.
   */
  function update_setup(fen) {
    if (history.length > 0) return;

    if (fen !== DEFAULT_POSITION) {
      header['SetUp'] = '1';
      header['FEN'] = fen;
    } else {
      delete header['SetUp'];
      delete header['FEN'];
    }
  }

  function get(square) {
    var piece = board[SQUARES[square]];
    return (piece) ? {type: piece.type, color: piece.color} : null;
  }

  function put(piece, square) {
    /* check for valid piece object */
    if (!('type' in piece && 'color' in piece)) {
      return false;
    }

    /* check for piece */
    if (SYMBOLS.indexOf(piece.type.toLowerCase()) === -1) {
      return false;
    }

    /* check for valid square */
    if (!(square in SQUARES)) {
      return false;
    }

    var sq = SQUARES[square];

    /* don't let the user place more than one king */
    if (piece.type == KING &&
        !(kings[piece.color] == EMPTY || kings[piece.color] == sq)) {
      return false;
    }

    board[sq] = {type: piece.type, color: piece.color};
    if (piece.type === KING) {
      kings[piece.color] = sq;
    }

    update_setup(generate_fen());

    return true;
  }

  function remove(square) {
    var piece = get(square);
    board[SQUARES[square]] = null;
    if (piece && piece.type === KING) {
      kings[piece.color] = EMPTY;
    }

    update_setup(generate_fen());

    return piece;
  }

  function build_move(board, from, to, flags, promotion) {
    var move = {
      color: turn,
      from: from,
      to: to,
      flags: flags,
      piece: board[from].type
    };

    if (promotion) {
      move.flags |= BITS.PROMOTION;
      move.promotion = promotion;
    }

    if (board[to]) {
      move.captured = board[to].type;
    } else if (flags & BITS.EP_CAPTURE) {
        move.captured = PAWN;
    }
    return move;
  }

  function generate_moves(options) {
    function add_move(board, moves, from, to, flags) {
      /* if pawn promotion */
      if (board[from].type === PAWN &&
         (rank(to) === RANK_8 || rank(to) === RANK_1)) {
          var pieces = [QUEEN, ROOK, BISHOP, KNIGHT];
          for (var i = 0, len = pieces.length; i < len; i++) {
            moves.push(build_move(board, from, to, flags, pieces[i]));
          }
      } else {
       moves.push(build_move(board, from, to, flags));
      }
    }

    var moves = [];
    var us = turn;
    var them = swap_color(us);
    var second_rank = {b: RANK_7, w: RANK_2};

    var first_sq = SQUARES.a8;
    var last_sq = SQUARES.h1;
    var single_square = false;

    /* do we want legal moves? */
    var legal = (typeof options !== 'undefined' && 'legal' in options) ?
                options.legal : true;

    /* are we generating moves for a single square? */
    if (typeof options !== 'undefined' && 'square' in options) {
      if (options.square in SQUARES) {
        first_sq = last_sq = SQUARES[options.square];
        single_square = true;
      } else {
        /* invalid square */
        return [];
      }
    }

    for (var i = first_sq; i <= last_sq; i++) {
      /* did we run off the end of the board */
      if (i & 0x88) { i += 7; continue; }

      var piece = board[i];
      if (piece == null || piece.color !== us) {
        continue;
      }

      if (piece.type === PAWN) {
        /* single square, non-capturing */
        var square = i + PAWN_OFFSETS[us][0];
        if (board[square] == null) {
            add_move(board, moves, i, square, BITS.NORMAL);

          /* double square */
          var square = i + PAWN_OFFSETS[us][1];
          if (second_rank[us] === rank(i) && board[square] == null) {
            add_move(board, moves, i, square, BITS.BIG_PAWN);
          }
        }

        /* pawn captures */
        for (j = 2; j < 4; j++) {
          var square = i + PAWN_OFFSETS[us][j];
          if (square & 0x88) continue;

          if (board[square] != null &&
              board[square].color === them) {
              add_move(board, moves, i, square, BITS.CAPTURE);
          } else if (square === ep_square) {
              add_move(board, moves, i, ep_square, BITS.EP_CAPTURE);
          }
        }
      } else {
        for (var j = 0, len = PIECE_OFFSETS[piece.type].length; j < len; j++) {
          var offset = PIECE_OFFSETS[piece.type][j];
          var square = i;

          while (true) {
            square += offset;
            if (square & 0x88) break;

            if (board[square] == null) {
              add_move(board, moves, i, square, BITS.NORMAL);
            } else {
              if (board[square].color === us) break;
              add_move(board, moves, i, square, BITS.CAPTURE);
              break;
            }

            /* break, if knight or king */
            if (piece.type === 'n' || piece.type === 'k') break;
          }
        }
      }
    }

    /* check for castling if: a) we're generating all moves, or b) we're doing
     * single square move generation on the king's square
     */
    if ((!single_square) || last_sq === kings[us]) {
      /* king-side castling */
      if (castling[us] & BITS.KSIDE_CASTLE) {
        var castling_from = kings[us];
        var castling_to = castling_from + 2;

        if (board[castling_from + 1] == null &&
            board[castling_to]       == null &&
            !attacked(them, kings[us]) &&
            !attacked(them, castling_from + 1) &&
            !attacked(them, castling_to)) {
          add_move(board, moves, kings[us] , castling_to,
                   BITS.KSIDE_CASTLE);
        }
      }

      /* queen-side castling */
      if (castling[us] & BITS.QSIDE_CASTLE) {
        var castling_from = kings[us];
        var castling_to = castling_from - 2;

        if (board[castling_from - 1] == null &&
            board[castling_from - 2] == null &&
            board[castling_from - 3] == null &&
            !attacked(them, kings[us]) &&
            !attacked(them, castling_from - 1) &&
            !attacked(them, castling_to)) {
          add_move(board, moves, kings[us], castling_to,
                   BITS.QSIDE_CASTLE);
        }
      }
    }

    /* return all pseudo-legal moves (this includes moves that allow the king
     * to be captured)
     */
    if (!legal) {
      return moves;
    }

    /* filter out illegal moves */
    var legal_moves = [];
    for (var i = 0, len = moves.length; i < len; i++) {
      make_move(moves[i]);
      if (!king_attacked(us)) {
        legal_moves.push(moves[i]);
      }
      undo_move();
    }

    return legal_moves;
  }

  /* convert a move from 0x88 coordinates to Standard Algebraic Notation
   * (SAN)
   *
   * @param {boolean} sloppy Use the sloppy SAN generator to work around over
   * disambiguation bugs in Fritz and Chessbase.  See below:
   *
   * r1bqkbnr/ppp2ppp/2n5/1B1pP3/4P3/8/PPPP2PP/RNBQK1NR b KQkq - 2 4
   * 4. ... Nge7 is overly disambiguated because the knight on c6 is pinned
   * 4. ... Ne7 is technically the valid SAN
   */
  function move_to_san(move, sloppy) {

    var output = '';

    if (move.flags & BITS.KSIDE_CASTLE) {
      output = 'O-O';
    } else if (move.flags & BITS.QSIDE_CASTLE) {
      output = 'O-O-O';
    } else {
      var disambiguator = get_disambiguator(move, sloppy);

      if (move.piece !== PAWN) {
        output += move.piece.toUpperCase() + disambiguator;
      }

      if (move.flags & (BITS.CAPTURE | BITS.EP_CAPTURE)) {
        if (move.piece === PAWN) {
          output += algebraic(move.from)[0];
        }
        output += 'x';
      }

      output += algebraic(move.to);

      if (move.flags & BITS.PROMOTION) {
        output += '=' + move.promotion.toUpperCase();
      }
    }

    make_move(move);
    if (in_check()) {
      if (in_checkmate()) {
        output += '#';
      } else {
        output += '+';
      }
    }
    undo_move();

    return output;
  }

  // parses all of the decorators out of a SAN string
  function stripped_san(move) {
    return move.replace(/=/,'').replace(/[+#]?[?!]*$/,'');
  }

  function attacked(color, square) {
    for (var i = SQUARES.a8; i <= SQUARES.h1; i++) {
      /* did we run off the end of the board */
      if (i & 0x88) { i += 7; continue; }

      /* if empty square or wrong color */
      if (board[i] == null || board[i].color !== color) continue;

      var piece = board[i];
      var difference = i - square;
      var index = difference + 119;

      if (ATTACKS[index] & (1 << SHIFTS[piece.type])) {
        if (piece.type === PAWN) {
          if (difference > 0) {
            if (piece.color === WHITE) return true;
          } else {
            if (piece.color === BLACK) return true;
          }
          continue;
        }

        /* if the piece is a knight or a king */
        if (piece.type === 'n' || piece.type === 'k') return true;

        var offset = RAYS[index];
        var j = i + offset;

        var blocked = false;
        while (j !== square) {
          if (board[j] != null) { blocked = true; break; }
          j += offset;
        }

        if (!blocked) return true;
      }
    }

    return false;
  }

  function king_attacked(color) {
    return attacked(swap_color(color), kings[color]);
  }

  function in_check() {
    return king_attacked(turn);
  }

  function in_checkmate() {
    return in_check() && generate_moves().length === 0;
  }

  function in_stalemate() {
    return !in_check() && generate_moves().length === 0;
  }

  function insufficient_material() {
    var pieces = {};
    var bishops = [];
    var num_pieces = 0;
    var sq_color = 0;

    for (var i = SQUARES.a8; i<= SQUARES.h1; i++) {
      sq_color = (sq_color + 1) % 2;
      if (i & 0x88) { i += 7; continue; }

      var piece = board[i];
      if (piece) {
        pieces[piece.type] = (piece.type in pieces) ?
                              pieces[piece.type] + 1 : 1;
        if (piece.type === BISHOP) {
          bishops.push(sq_color);
        }
        num_pieces++;
      }
    }

    /* k vs. k */
    if (num_pieces === 2) { return true; }

    /* k vs. kn .... or .... k vs. kb */
    else if (num_pieces === 3 && (pieces[BISHOP] === 1 ||
                                 pieces[KNIGHT] === 1)) { return true; }

    /* kb vs. kb where any number of bishops are all on the same color */
    else if (num_pieces === pieces[BISHOP] + 2) {
      var sum = 0;
      var len = bishops.length;
      for (var i = 0; i < len; i++) {
        sum += bishops[i];
      }
      if (sum === 0 || sum === len) { return true; }
    }

    return false;
  }

  function in_threefold_repetition() {
    /* TODO: while this function is fine for casual use, a better
     * implementation would use a Zobrist key (instead of FEN). the
     * Zobrist key would be maintained in the make_move/undo_move functions,
     * avoiding the costly that we do below.
     */
    var moves = [];
    var positions = {};
    var repetition = false;

    while (true) {
      var move = undo_move();
      if (!move) break;
      moves.push(move);
    }

    while (true) {
      /* remove the last two fields in the FEN string, they're not needed
       * when checking for draw by rep */
      var fen = generate_fen().split(' ').slice(0,4).join(' ');

      /* has the position occurred three or move times */
      positions[fen] = (fen in positions) ? positions[fen] + 1 : 1;
      if (positions[fen] >= 3) {
        repetition = true;
      }

      if (!moves.length) {
        break;
      }
      make_move(moves.pop());
    }

    return repetition;
  }

  function push(move) {
    history.push({
      move: move,
      kings: {b: kings.b, w: kings.w},
      turn: turn,
      castling: {b: castling.b, w: castling.w},
      ep_square: ep_square,
      half_moves: half_moves,
      move_number: move_number
    });
  }

  function make_move(move) {
    var us = turn;
    var them = swap_color(us);
    push(move);

    board[move.to] = board[move.from];
    board[move.from] = null;

    /* if ep capture, remove the captured pawn */
    if (move.flags & BITS.EP_CAPTURE) {
      if (turn === BLACK) {
        board[move.to - 16] = null;
      } else {
        board[move.to + 16] = null;
      }
    }

    /* if pawn promotion, replace with new piece */
    if (move.flags & BITS.PROMOTION) {
      board[move.to] = {type: move.promotion, color: us};
    }

    /* if we moved the king */
    if (board[move.to].type === KING) {
      kings[board[move.to].color] = move.to;

      /* if we castled, move the rook next to the king */
      if (move.flags & BITS.KSIDE_CASTLE) {
        var castling_to = move.to - 1;
        var castling_from = move.to + 1;
        board[castling_to] = board[castling_from];
        board[castling_from] = null;
      } else if (move.flags & BITS.QSIDE_CASTLE) {
        var castling_to = move.to + 1;
        var castling_from = move.to - 2;
        board[castling_to] = board[castling_from];
        board[castling_from] = null;
      }

      /* turn off castling */
      castling[us] = '';
    }

    /* turn off castling if we move a rook */
    if (castling[us]) {
      for (var i = 0, len = ROOKS[us].length; i < len; i++) {
        if (move.from === ROOKS[us][i].square &&
            castling[us] & ROOKS[us][i].flag) {
          castling[us] ^= ROOKS[us][i].flag;
          break;
        }
      }
    }

    /* turn off castling if we capture a rook */
    if (castling[them]) {
      for (var i = 0, len = ROOKS[them].length; i < len; i++) {
        if (move.to === ROOKS[them][i].square &&
            castling[them] & ROOKS[them][i].flag) {
          castling[them] ^= ROOKS[them][i].flag;
          break;
        }
      }
    }

    /* if big pawn move, update the en passant square */
    if (move.flags & BITS.BIG_PAWN) {
      if (turn === 'b') {
        ep_square = move.to - 16;
      } else {
        ep_square = move.to + 16;
      }
    } else {
      ep_square = EMPTY;
    }

    /* reset the 50 move counter if a pawn is moved or a piece is captured */
    if (move.piece === PAWN) {
      half_moves = 0;
    } else if (move.flags & (BITS.CAPTURE | BITS.EP_CAPTURE)) {
      half_moves = 0;
    } else {
      half_moves++;
    }

    if (turn === BLACK) {
      move_number++;
    }
    turn = swap_color(turn);
  }

  function undo_move() {
    var old = history.pop();
    if (old == null) { return null; }

    var move = old.move;
    kings = old.kings;
    turn = old.turn;
    castling = old.castling;
    ep_square = old.ep_square;
    half_moves = old.half_moves;
    move_number = old.move_number;

    var us = turn;
    var them = swap_color(turn);

    board[move.from] = board[move.to];
    board[move.from].type = move.piece;  // to undo any promotions
    board[move.to] = null;

    if (move.flags & BITS.CAPTURE) {
      board[move.to] = {type: move.captured, color: them};
    } else if (move.flags & BITS.EP_CAPTURE) {
      var index;
      if (us === BLACK) {
        index = move.to - 16;
      } else {
        index = move.to + 16;
      }
      board[index] = {type: PAWN, color: them};
    }


    if (move.flags & (BITS.KSIDE_CASTLE | BITS.QSIDE_CASTLE)) {
      var castling_to, castling_from;
      if (move.flags & BITS.KSIDE_CASTLE) {
        castling_to = move.to + 1;
        castling_from = move.to - 1;
      } else if (move.flags & BITS.QSIDE_CASTLE) {
        castling_to = move.to - 2;
        castling_from = move.to + 1;
      }

      board[castling_to] = board[castling_from];
      board[castling_from] = null;
    }

    return move;
  }

  /* this function is used to uniquely identify ambiguous moves */
  function get_disambiguator(move, sloppy) {
    var moves = generate_moves({legal: !sloppy});

    var from = move.from;
    var to = move.to;
    var piece = move.piece;

    var ambiguities = 0;
    var same_rank = 0;
    var same_file = 0;

    for (var i = 0, len = moves.length; i < len; i++) {
      var ambig_from = moves[i].from;
      var ambig_to = moves[i].to;
      var ambig_piece = moves[i].piece;

      /* if a move of the same piece type ends on the same to square, we'll
       * need to add a disambiguator to the algebraic notation
       */
      if (piece === ambig_piece && from !== ambig_from && to === ambig_to) {
        ambiguities++;

        if (rank(from) === rank(ambig_from)) {
          same_rank++;
        }

        if (file(from) === file(ambig_from)) {
          same_file++;
        }
      }
    }

    if (ambiguities > 0) {
      /* if there exists a similar moving piece on the same rank and file as
       * the move in question, use the square as the disambiguator
       */
      if (same_rank > 0 && same_file > 0) {
        return algebraic(from);
      }
      /* if the moving piece rests on the same file, use the rank symbol as the
       * disambiguator
       */
      else if (same_file > 0) {
        return algebraic(from).charAt(1);
      }
      /* else use the file symbol */
      else {
        return algebraic(from).charAt(0);
      }
    }

    return '';
  }

  function ascii() {
    var s = '   +------------------------+\n';
    for (var i = SQUARES.a8; i <= SQUARES.h1; i++) {
      /* display the rank */
      if (file(i) === 0) {
        s += ' ' + '87654321'[rank(i)] + ' |';
      }

      /* empty piece */
      if (board[i] == null) {
        s += ' . ';
      } else {
        var piece = board[i].type;
        var color = board[i].color;
        var symbol = (color === WHITE) ?
                     piece.toUpperCase() : piece.toLowerCase();
        s += ' ' + symbol + ' ';
      }

      if ((i + 1) & 0x88) {
        s += '|\n';
        i += 8;
      }
    }
    s += '   +------------------------+\n';
    s += '     a  b  c  d  e  f  g  h\n';

    return s;
  }

  // convert a move from Standard Algebraic Notation (SAN) to 0x88 coordinates
  function move_from_san(move, sloppy) {
    // strip off any move decorations: e.g Nf3+?!
    var clean_move = stripped_san(move);

    // if we're using the sloppy parser run a regex to grab piece, to, and from
    // this should parse invalid SAN like: Pe2-e4, Rc1c4, Qf3xf7
    if (sloppy) {
      var matches = clean_move.match(/([pnbrqkPNBRQK])?([a-h][1-8])x?-?([a-h][1-8])([qrbnQRBN])?/);
      if (matches) {
        var piece = matches[1];
        var from = matches[2];
        var to = matches[3];
        var promotion = matches[4];
      }
    }

    var moves = generate_moves();
    for (var i = 0, len = moves.length; i < len; i++) {
      // try the strict parser first, then the sloppy parser if requested
      // by the user
      if ((clean_move === stripped_san(move_to_san(moves[i]))) ||
          (sloppy && clean_move === stripped_san(move_to_san(moves[i], true)))) {
        return moves[i];
      } else {
        if (matches &&
            (!piece || piece.toLowerCase() == moves[i].piece) &&
            SQUARES[from] == moves[i].from &&
            SQUARES[to] == moves[i].to &&
            (!promotion || promotion.toLowerCase() == moves[i].promotion)) {
          return moves[i];
        }
      }
    }

    return null;
  }


  /*****************************************************************************
   * UTILITY FUNCTIONS
   ****************************************************************************/
  function rank(i) {
    return i >> 4;
  }

  function file(i) {
    return i & 15;
  }

  function algebraic(i){
    var f = file(i), r = rank(i);
    return 'abcdefgh'.substring(f,f+1) + '87654321'.substring(r,r+1);
  }

  function swap_color(c) {
    return c === WHITE ? BLACK : WHITE;
  }

  function is_digit(c) {
    return '0123456789'.indexOf(c) !== -1;
  }

  /* pretty = external move object */
  function make_pretty(ugly_move) {
    var move = clone(ugly_move);
    move.san = move_to_san(move, false);
    move.to = algebraic(move.to);
    move.from = algebraic(move.from);

    var flags = '';

    for (var flag in BITS) {
      if (BITS[flag] & move.flags) {
        flags += FLAGS[flag];
      }
    }
    move.flags = flags;

    return move;
  }

  function clone(obj) {
    var dupe = (obj instanceof Array) ? [] : {};

    for (var property in obj) {
      if (typeof property === 'object') {
        dupe[property] = clone(obj[property]);
      } else {
        dupe[property] = obj[property];
      }
    }

    return dupe;
  }

  function trim(str) {
    return str.replace(/^\s+|\s+$/g, '');
  }

  /*****************************************************************************
   * DEBUGGING UTILITIES
   ****************************************************************************/
  function perft(depth) {
    var moves = generate_moves({legal: false});
    var nodes = 0;
    var color = turn;

    for (var i = 0, len = moves.length; i < len; i++) {
      make_move(moves[i]);
      if (!king_attacked(color)) {
        if (depth - 1 > 0) {
          var child_nodes = perft(depth - 1);
          nodes += child_nodes;
        } else {
          nodes++;
        }
      }
      undo_move();
    }

    return nodes;
  }

  return {
    /***************************************************************************
     * PUBLIC CONSTANTS (is there a better way to do this?)
     **************************************************************************/
    WHITE: WHITE,
    BLACK: BLACK,
    PAWN: PAWN,
    KNIGHT: KNIGHT,
    BISHOP: BISHOP,
    ROOK: ROOK,
    QUEEN: QUEEN,
    KING: KING,
    SQUARES: (function() {
                /* from the ECMA-262 spec (section 12.6.4):
                 * "The mechanics of enumerating the properties ... is
                 * implementation dependent"
                 * so: for (var sq in SQUARES) { keys.push(sq); } might not be
                 * ordered correctly
                 */
                var keys = [];
                for (var i = SQUARES.a8; i <= SQUARES.h1; i++) {
                  if (i & 0x88) { i += 7; continue; }
                  keys.push(algebraic(i));
                }
                return keys;
              })(),
    FLAGS: FLAGS,

    /***************************************************************************
     * PUBLIC API
     **************************************************************************/
    load: function(fen) {
      return load(fen);
    },

    reset: function() {
      return reset();
    },

    moves: function(options) {
      /* The internal representation of a chess move is in 0x88 format, and
       * not meant to be human-readable.  The code below converts the 0x88
       * square coordinates to algebraic coordinates.  It also prunes an
       * unnecessary move keys resulting from a verbose call.
       */

      var ugly_moves = generate_moves(options);
      var moves = [];

      for (var i = 0, len = ugly_moves.length; i < len; i++) {

        /* does the user want a full move object (most likely not), or just
         * SAN
         */
        if (typeof options !== 'undefined' && 'verbose' in options &&
            options.verbose) {
          moves.push(make_pretty(ugly_moves[i]));
        } else {
          moves.push(move_to_san(ugly_moves[i], false));
        }
      }

      return moves;
    },

    in_check: function() {
      return in_check();
    },

    in_checkmate: function() {
      return in_checkmate();
    },

    in_stalemate: function() {
      return in_stalemate();
    },

    in_draw: function() {
      return half_moves >= 100 ||
             in_stalemate() ||
             insufficient_material() ||
             in_threefold_repetition();
    },

    insufficient_material: function() {
      return insufficient_material();
    },

    in_threefold_repetition: function() {
      return in_threefold_repetition();
    },

    game_over: function() {
      return half_moves >= 100 ||
             in_checkmate() ||
             in_stalemate() ||
             insufficient_material() ||
             in_threefold_repetition();
    },

    validate_fen: function(fen) {
      return validate_fen(fen);
    },

    fen: function() {
      return generate_fen();
    },

    pgn: function(options) {
      /* using the specification from http://www.chessclub.com/help/PGN-spec
       * example for html usage: .pgn({ max_width: 72, newline_char: "<br />" })
       */
      var newline = (typeof options === 'object' &&
                     typeof options.newline_char === 'string') ?
                     options.newline_char : '\n';
      var max_width = (typeof options === 'object' &&
                       typeof options.max_width === 'number') ?
                       options.max_width : 0;
      var result = [];
      var header_exists = false;

      /* add the PGN header headerrmation */
      for (var i in header) {
        /* TODO: order of enumerated properties in header object is not
         * guaranteed, see ECMA-262 spec (section 12.6.4)
         */
        result.push('[' + i + ' \"' + header[i] + '\"]' + newline);
        header_exists = true;
      }

      if (header_exists && history.length) {
        result.push(newline);
      }

      /* pop all of history onto reversed_history */
      var reversed_history = [];
      while (history.length > 0) {
        reversed_history.push(undo_move());
      }

      var moves = [];
      var move_string = '';

      /* build the list of moves.  a move_string looks like: "3. e3 e6" */
      while (reversed_history.length > 0) {
        var move = reversed_history.pop();

        /* if the position started with black to move, start PGN with 1. ... */
        if (!history.length && move.color === 'b') {
          move_string = move_number + '. ...';
        } else if (move.color === 'w') {
          /* store the previous generated move_string if we have one */
          if (move_string.length) {
            moves.push(move_string);
          }
          move_string = move_number + '.';
        }

        move_string = move_string + ' ' + move_to_san(move, false);
        make_move(move);
      }

      /* are there any other leftover moves? */
      if (move_string.length) {
        moves.push(move_string);
      }

      /* is there a result? */
      if (typeof header.Result !== 'undefined') {
        moves.push(header.Result);
      }

      /* history should be back to what is was before we started generating PGN,
       * so join together moves
       */
      if (max_width === 0) {
        return result.join('') + moves.join(' ');
      }

      /* wrap the PGN output at max_width */
      var current_width = 0;
      for (var i = 0; i < moves.length; i++) {
        /* if the current move will push past max_width */
        if (current_width + moves[i].length > max_width && i !== 0) {

          /* don't end the line with whitespace */
          if (result[result.length - 1] === ' ') {
            result.pop();
          }

          result.push(newline);
          current_width = 0;
        } else if (i !== 0) {
          result.push(' ');
          current_width++;
        }
        result.push(moves[i]);
        current_width += moves[i].length;
      }

      return result.join('');
    },

    load_pgn: function(pgn, options) {
      // allow the user to specify the sloppy move parser to work around over
      // disambiguation bugs in Fritz and Chessbase
      var sloppy = (typeof options !== 'undefined' && 'sloppy' in options) ?
                    options.sloppy : false;

      function mask(str) {
        return str.replace(/\\/g, '\\');
      }

      function has_keys(object) {
        for (var key in object) {
          return true;
        }
        return false;
      }

      function parse_pgn_header(header, options) {
        var newline_char = (typeof options === 'object' &&
                            typeof options.newline_char === 'string') ?
                            options.newline_char : '\r?\n';
        var header_obj = {};
        var headers = header.split(new RegExp(mask(newline_char)));
        var key = '';
        var value = '';

        for (var i = 0; i < headers.length; i++) {
          key = headers[i].replace(/^\[([A-Z][A-Za-z]*)\s.*\]$/, '$1');
          value = headers[i].replace(/^\[[A-Za-z]+\s"(.*)"\]$/, '$1');
          if (trim(key).length > 0) {
            header_obj[key] = value;
          }
        }

        return header_obj;
      }

      var newline_char = (typeof options === 'object' &&
                          typeof options.newline_char === 'string') ?
                          options.newline_char : '\r?\n';
      var regex = new RegExp('^(\\[(.|' + mask(newline_char) + ')*\\])' +
                             '(' + mask(newline_char) + ')*' +
                             '1.(' + mask(newline_char) + '|.)*$', 'g');

      /* get header part of the PGN file */
      var header_string = pgn.replace(regex, '$1');

      /* no info part given, begins with moves */
      if (header_string[0] !== '[') {
        header_string = '';
      }

      reset();

      /* parse PGN header */
      var headers = parse_pgn_header(header_string, options);
      for (var key in headers) {
        set_header([key, headers[key]]);
      }

      /* load the starting position indicated by [Setup '1'] and
      * [FEN position] */
      if (headers['SetUp'] === '1') {
          if (!(('FEN' in headers) && load(headers['FEN']))) {
            return false;
          }
      }

      /* delete header to get the moves */
      var ms = pgn.replace(header_string, '').replace(new RegExp(mask(newline_char), 'g'), ' ');

      /* delete comments */
      ms = ms.replace(/(\{[^}]+\})+?/g, '');

      /* delete recursive annotation variations */
      var rav_regex = /(\([^\(\)]+\))+?/g
      while (rav_regex.test(ms)) {
        ms = ms.replace(rav_regex, '');
      }

      /* delete move numbers */
      ms = ms.replace(/\d+\.(\.\.)?/g, '');

      /* delete ... indicating black to move */
      ms = ms.replace(/\.\.\./g, '');

      /* delete numeric annotation glyphs */
      ms = ms.replace(/\$\d+/g, '');

      /* trim and get array of moves */
      var moves = trim(ms).split(new RegExp(/\s+/));

      /* delete empty entries */
      moves = moves.join(',').replace(/,,+/g, ',').split(',');
      var move = '';

      for (var half_move = 0; half_move < moves.length - 1; half_move++) {
        move = move_from_san(moves[half_move], sloppy);

        /* move not possible! (don't clear the board to examine to show the
         * latest valid position)
         */
        if (move == null) {
          return false;
        } else {
          make_move(move);
        }
      }

      /* examine last move */
      move = moves[moves.length - 1];
      if (POSSIBLE_RESULTS.indexOf(move) > -1) {
        if (has_keys(header) && typeof header.Result === 'undefined') {
          set_header(['Result', move]);
        }
      }
      else {
        move = move_from_san(move, sloppy);
        if (move == null) {
          return false;
        } else {
          make_move(move);
        }
      }
      return true;
    },

    header: function() {
      return set_header(arguments);
    },

    ascii: function() {
      return ascii();
    },

    turn: function() {
      return turn;
    },

    move: function(move, options) {
      /* The move function can be called with in the following parameters:
       *
       * .move('Nxb7')      <- where 'move' is a case-sensitive SAN string
       *
       * .move({ from: 'h7', <- where the 'move' is a move object (additional
       *         to :'h8',      fields are ignored)
       *         promotion: 'q',
       *      })
       */

      // allow the user to specify the sloppy move parser to work around over
      // disambiguation bugs in Fritz and Chessbase
      var sloppy = (typeof options !== 'undefined' && 'sloppy' in options) ?
                    options.sloppy : false;

      var move_obj = null;

      if (typeof move === 'string') {
        move_obj = move_from_san(move, sloppy);
      } else if (typeof move === 'object') {
        var moves = generate_moves();

        /* convert the pretty move object to an ugly move object */
        for (var i = 0, len = moves.length; i < len; i++) {
          if (move.from === algebraic(moves[i].from) &&
              move.to === algebraic(moves[i].to) &&
              (!('promotion' in moves[i]) ||
              move.promotion === moves[i].promotion)) {
            move_obj = moves[i];
            break;
          }
        }
      }

      /* failed to find move */
      if (!move_obj) {
        return null;
      }

      /* need to make a copy of move because we can't generate SAN after the
       * move is made
       */
      var pretty_move = make_pretty(move_obj);

      make_move(move_obj);

      return pretty_move;
    },

    undo: function() {
      var move = undo_move();
      return (move) ? make_pretty(move) : null;
    },

    clear: function() {
      return clear();
    },

    put: function(piece, square) {
      return put(piece, square);
    },

    get: function(square) {
      return get(square);
    },

    remove: function(square) {
      return remove(square);
    },

    perft: function(depth) {
      return perft(depth);
    },

    square_color: function(square) {
      if (square in SQUARES) {
        var sq_0x88 = SQUARES[square];
        return ((rank(sq_0x88) + file(sq_0x88)) % 2 === 0) ? 'light' : 'dark';
      }

      return null;
    },

    history: function(options) {
      var reversed_history = [];
      var move_history = [];
      var verbose = (typeof options !== 'undefined' && 'verbose' in options &&
                     options.verbose);

      while (history.length > 0) {
        reversed_history.push(undo_move());
      }

      while (reversed_history.length > 0) {
        var move = reversed_history.pop();
        if (verbose) {
          move_history.push(make_pretty(move));
        } else {
          move_history.push(move_to_san(move));
        }
        make_move(move);
      }

      return move_history;
    }

  };
};

/* export Chess object if using node or any other CommonJS compatible
 * environment */
if (true) exports.Chess = Chess;
/* export Chess object for any RequireJS compatible environment */
if (true) !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () { return Chess;  }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 612:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeyPressDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the KeyPressDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
var KeyPressDirective = /** @class */ (function () {
    function KeyPressDirective() {
        this.onKeyPress = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    KeyPressDirective.prototype.onListenerTriggered = function (event) {
        this.onKeyPress.emit(event);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], KeyPressDirective.prototype, "onKeyPress", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])("document:keydown", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], KeyPressDirective.prototype, "onListenerTriggered", null);
    KeyPressDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: "[key-press]" // Attribute selector
        })
    ], KeyPressDirective);
    return KeyPressDirective;
}());

//# sourceMappingURL=key-press.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export startingPos */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return fbConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return themes; });
/* unused harmony export openings */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return emailDomainBlacklist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return base64Pieces; });
var startingPos = { "a8": "bR", "b8": "bN", "c8": "bB", "d8": "bQ", "e8": "bK", "f8": "bB", "g8": "bN", "h8": "bR", "a7": "bP", "b7": "bP", "c7": "bP", "d7": "bP", "e7": "bP", "f7": "bP", "g7": "bP", "h7": "bP", "a2": "wP", "b2": "wP", "c2": "wP", "d2": "wP", "e2": "wP", "f2": "wP", "g2": "wP", "h2": "wP", "a1": "wR", "b1": "wN", "c1": "wB", "d1": "wQ", "e1": "wK", "f1": "wB", "g1": "wN", "h1": "wR" };
var fbConfig = {
    apiKey: "https://<YOUR FIREBASE>.firebaseio.com",
    authDomain: "<authDomain>",
    databaseURL: "<databaseURL>",
    projectId: "<projID>",
    storageBucket: "<storageBucket>",
    messagingSenderId: "<senderID>",
    appId: "<appID>"
};
/*    */
var themes = {
    default: { white: [247, 204, 160], black: [242, 157, 76], wHighlight: [20, 100, 20], bHighlight: [20, 20, 100] },
    frozen: { white: [211, 223, 241], black: [79, 100, 134], wHighlight: [250, 200, 0], bHighlight: [200, 80, 120] },
    lime: { white: [255, 255, 255], black: [109, 170, 140], wHighlight: [50, 130, 250], bHighlight: [250, 150, 120] },
    leipzig: { white: [255, 255, 255], black: [225, 225, 225], wHighlight: [26, 188, 156], bHighlight: [52, 152, 219] },
    chess24: { white: [152, 122, 102], black: [93, 55, 41], wHighlight: [0, 0, 50], bHighlight: [0, 50, 0] }
};
var openings = { "w": { "rn1qkbnr/ppp2ppp/8/3p4/5p2/6PB/PPPPP2P/RNBQK2R": { "eco": "A00", "name": "Amar Gambit" }, "r1bqkb1r/ppp2ppp/2np1n2/4p3/2P5/1PN1P3/P2P1PPP/R1BQKBNR": { "eco": "A00", "name": "Amsterdam Attack" }, "rnb1kbnr/pppp1ppp/8/4p3/6Pq/5P2/PPPPP2P/RNBQKBNR": { "eco": "A00", "name": "Barnes Opening: Fool's Mate" }, "rnbqkbnr/ppp2ppp/8/3pp3/8/P6P/1PPPPPP1/RNBQKBNR": { "eco": "A00", "name": "Creepy Crawly Formation: Classical Defense" }, "rnbqkbnr/ppppp1pp/8/5p2/6P1/8/PPPPPP1P/RNBQKBNR": { "eco": "A00", "name": "Grob Opening: Alessi Gambit" }, "rnbqkbnr/pppppp1p/8/6p1/6P1/8/PPPPPP1P/RNBQKBNR": { "eco": "A00", "name": "Grob Opening: Double Grob" }, "rnbqkbnr/pp2pppp/2p5/3p4/6P1/8/PPPPPPBP/RNBQK1NR": { "eco": "A00", "name": "Grob Opening: Grob Gambit Declined" }, "q3kbnr/p1pnpppp/8/8/2Pp2b1/8/PP1PPP1P/RNBQK1NR": { "eco": "A00", "name": "Grob Opening: Grob Gambit, Fritz Gambit, Romford Countergambit" }, "rnbqkbnr/pp3ppp/2p5/3pp3/6P1/7P/PPPPPPB1/RNBQK1NR": { "eco": "A00", "name": "Grob Opening: Keene Defense" }, "rnbqk2r/pp2nppp/2pb4/3p4/2PPp1P1/2N4P/PP2PPB1/R1BQK1NR": { "eco": "A00", "name": "Grob Opening: Keene Defense, Main Line" }, "r1bqkbnr/pppp1ppp/2n5/4p3/6P1/7P/PPPPPP2/RNBQKBNR": { "eco": "A00", "name": "Grob Opening: London Defense" }, "rn1qkbnr/ppp1pppp/8/8/2Pp2b1/8/PP1PPPBP/RNBQK1NR": { "eco": "A00", "name": "Grob Opening: Romford Countergambit" }, "rnbqkbnr/ppp1ppp1/8/7p/4p1P1/2N5/PPPP1P1P/R1BQKBNR": { "eco": "A00", "name": "Grob Opening: Zilbermints Gambit, Schiller Defense" }, "r1bqkbnr/ppp3pp/2n5/4Pp2/3pN3/6P1/PPP1PP1P/R1BQKBNR": { "eco": "A00", "name": "Hungarian Opening: Asten Gambit" }, "rnbqkbnr/ppp2ppp/4p3/3p4/8/6P1/PPPPPPBP/RNBQK1NR": { "eco": "A00", "name": "Hungarian Opening: Catalan Formation" }, "rnbqkbnr/ppppp1pp/8/5p2/8/6P1/PPPPPP1P/RNBQKBNR": { "eco": "A00", "name": "Hungarian Opening: Dutch Defense" }, "rnbqkb1r/pppppppp/5n2/8/8/6P1/PPPPPP1P/RNBQKBNR": { "eco": "A00", "name": "Hungarian Opening: Indian Defense" }, "rnbqkbnr/pppppp1p/8/6p1/8/6P1/PPPPPP1P/RNBQKBNR": { "eco": "A00", "name": "Hungarian Opening: Myers Defense" }, "rnbqkbnr/ppppp2p/6p1/7Q/4p3/6P1/PPPP1P1P/RNB1KBNR": { "eco": "A00", "name": "Hungarian Opening: Pachman Gambit" }, "rnbqkbnr/pp2pppp/8/2pp4/8/6P1/PPPPPPBP/RNBQK1NR": { "eco": "A00", "name": "Hungarian Opening: Reversed Modern Defense" }, "rnbqkbnr/pp1ppppp/8/2p5/8/6P1/PPPPPP1P/RNBQKBNR": { "eco": "A00", "name": "Hungarian Opening: Sicilian Invitation" }, "rnbqkbnr/pp2pppp/2p5/3p4/8/6P1/PPPPPPBP/RNBQK1NR": { "eco": "A00", "name": "Hungarian Opening: Slav Formation" }, "rnbqkbnr/pppppp1p/6p1/8/8/6P1/PPPPPP1P/RNBQKBNR": { "eco": "A00", "name": "Hungarian Opening: Symmetrical Variation" }, "rnbqkbnr/ppppppp1/8/8/7p/5NP1/PPPPPP1P/RNBQKB1R": { "eco": "A00", "name": "Hungarian Opening: Van Kuijk Gambit" }, "rnbqk2r/ppp1ppbp/3p1np1/8/3P4/3BPN2/PPP2PPP/RNBQK2R": { "eco": "A00", "name": "Indian Game: Colle System, King's Indian Variation" }, "rnbqkbnr/pppppp1p/8/6p1/7P/8/PPPPPPP1/RNBQKBNR": { "eco": "A00", "name": "Kadas Opening: Schneider Gambit" }, "rnbqkbnr/ppppppp1/8/7p/8/6P1/PPPPPP1P/RNBQKBNR": { "eco": "A00", "name": "Lasker Simul Special" }, "rnbqkbnr/pppp1ppp/8/4p3/8/3P4/PPP1PPPP/RNBQKBNR": { "eco": "A00", "name": "Mieses Opening: Reversed Rat" }, "rn1qkbnr/ppp1pppp/8/3p1b2/1P6/8/PBPPPPPP/RN1QKBNR": { "eco": "A00", "name": "Polish Opening: Baltic Defense" }, "rnbqkbnr/pp1ppppp/8/2p5/1P6/8/P1PPPPPP/RNBQKBNR": { "eco": "A00", "name": "Polish Opening: Birmingham Gambit" }, "rnbqkbnr/ppp2ppp/3p4/4p3/1P6/8/PBPPPPPP/RN1QKBNR": { "eco": "A00", "name": "Polish Opening: Czech Defense" }, "rnbqkbnr/ppppp1pp/8/5p2/1P6/8/P1PPPPPP/RNBQKBNR": { "eco": "A00", "name": "Polish Opening: Dutch Defense" }, "rnb1kbnr/ppp1pppp/3q4/3p4/1P6/8/PBPPPPPP/RN1QKBNR": { "eco": "A00", "name": "Polish Opening: German Defense" }, "r1bqkbnr/pppppppp/2n5/8/1P6/8/P1PPPPPP/RNBQKBNR": { "eco": "A00", "name": "Polish Opening: Grigorian Variation" }, "rnbqkb1r/pppppppp/7n/8/1P6/8/P1PPPPPP/RNBQKBNR": { "eco": "A00", "name": "Polish Opening: Karniewski Variation" }, "rnbqkb1r/pppppp1p/5np1/8/1P6/8/PBPPPPPP/RN1QKBNR": { "eco": "A00", "name": "Polish Opening: King's Indian Variation" }, "rnbqkbnr/pp1ppppp/2p5/8/1P6/8/P1PPPPPP/RNBQKBNR": { "eco": "A00", "name": "Polish Opening: Outflank Variation" }, "rnbqkb1r/p1pp1ppp/1p2pn2/1P6/8/8/PBPPPPPP/RN1QKBNR": { "eco": "A00", "name": "Polish Opening: Queen's Indian Variation" }, "rnbqkb1r/1ppp1ppp/p3pn2/1P6/8/8/PBPPPPPP/RN1QKBNR": { "eco": "A00", "name": "Polish Opening: Queenside Defense" }, "rnbqkbnr/p1pppppp/8/1p6/1P6/8/P1PPPPPP/RNBQKBNR": { "eco": "A00", "name": "Polish Opening: Symmetrical Variation" }, "r1b1k1nr/ppppq2p/2n2pp1/4pP2/1bB1P3/8/PBPP2PP/RN1QK1NR": { "eco": "A00", "name": "Polish Opening: Tartakower Gambit, Brinckmann Variation" }, "rnbqkbnr/pp1p1ppp/8/2p1p3/1P6/8/PBPPPPPP/RN1QKBNR": { "eco": "A00", "name": "Polish Opening: Wolferts Gambit" }, "r1bqkbnr/pppp2pp/2n5/4pp2/2N1P3/8/PPPP1PPP/R1BQKBNR": { "eco": "A00", "name": "Sodium Attack: Durkin Gambit" }, "rnbqk1nr/pppp1ppp/8/2b1p3/8/2N2N2/PPPPPPPP/R1BQKB1R": { "eco": "A00", "name": "Van Geet Opening: Billockus-Johansen Gambit" }, "rnbqkbnr/ppp2ppp/8/3pp3/5P2/2N5/PPPPP1PP/R1BQKBNR": { "eco": "A00", "name": "Van Geet Opening: Damhaug Gambit" }, "r1bqkbnr/ppp2ppp/2np4/4P3/8/2N5/PPPPP1PP/R1BQKBNR": { "eco": "A00", "name": "Van Geet Opening: Hergert Gambit" }, "rn1qkbnr/ppp2ppp/4b3/3pp2Q/8/2N1P3/PPPP1PPP/R1B1KBNR": { "eco": "A00", "name": "Van Geet Opening: Hulsemann Gambit" }, "rnbqkbnr/p1pppppp/8/1p6/8/2N5/PPPPPPPP/R1BQKBNR": { "eco": "A00", "name": "Van Geet Opening: Laroche Gambit" }, "rnbqkb1r/ppp2ppp/5n2/3pp2Q/8/2N1P3/PPPP1PPP/R1B1KBNR": { "eco": "A00", "name": "Van Geet Opening: Liebig Gambit" }, "rnbqkbnr/pp2pppp/8/2p5/3pNP2/8/PPPPP1PP/R1BQKBNR": { "eco": "A00", "name": "Van Geet Opening: Melleby Gambit" }, "rnbqkbnr/ppp2ppp/8/4p3/3pNP2/8/PPPPP1PP/R1BQKBNR": { "eco": "A00", "name": "Van Geet Opening: Pfeiffer Gambit" }, "rnbqkbnr/pppp1ppp/8/4p3/8/2N5/PPPPPPPP/R1BQKBNR": { "eco": "A00", "name": "Van Geet Opening: Reversed Nimzowitsch" }, "rnbqk1nr/ppp2ppp/8/3pp3/1b1P4/2N1P3/PPP2PPP/R1BQKBNR": { "eco": "A00", "name": "Van Geet Opening: Sleipnir Gambit" }, "rnbqkbnr/ppp1pp1p/8/3p2p1/5P2/2N5/PPPPP1PP/R1BQKBNR": { "eco": "A00", "name": "Van Geet Opening: Warsteiner Gambit" }, "r1bqkbnr/p1pnpppp/1p6/3p4/P2P4/2N5/1PP1PPPP/R1BQKBNR": { "eco": "A00", "name": "Ware Opening: Cologne Gambit" }, "rn1qkbnr/pbpppppp/8/1P6/8/8/1PPPPPPP/RNBQKBNR": { "eco": "A00", "name": "Ware Opening: Wing Gambit" }, "rnbqkbnr/ppp1pppp/8/3p4/8/1P6/P1PPPPPP/RNBQKBNR": { "eco": "A01", "name": "Nimzo-Larsen Attack: Classical Variation" }, "rnbqkbnr/ppppp1pp/8/5p2/8/1P6/P1PPPPPP/RNBQKBNR": { "eco": "A01", "name": "Nimzo-Larsen Attack: Dutch Variation" }, "rnbqkbnr/pp1ppppp/8/2p5/8/1P6/P1PPPPPP/RNBQKBNR": { "eco": "A01", "name": "Nimzo-Larsen Attack: English Variation" }, "rnbqkb1r/pppppppp/5n2/8/8/1P6/P1PPPPPP/RNBQKBNR": { "eco": "A01", "name": "Nimzo-Larsen Attack: Indian Variation" }, "rnbqkbnr/pppp1ppp/8/4p3/8/1P6/P1PPPPPP/RNBQKBNR": { "eco": "A01", "name": "Nimzo-Larsen Attack: Modern Variation" }, "r1bqkbnr/pppp1ppp/2n5/4p3/8/1P6/PBPPPPPP/RN1QKBNR": { "eco": "A01", "name": "Nimzo-Larsen Attack: Modern Variation" }, "rnbqkbnr/p1pppppp/1p6/8/8/1P6/P1PPPPPP/RNBQKBNR": { "eco": "A01", "name": "Nimzo-Larsen Attack: Symmetrical Variation" }, "rnbqkbnr/p1pppppp/8/1p6/8/1P6/P1PPPPPP/RNBQKBNR": { "eco": "A01", "name": "Nimzowitsch-Larsen Attack: Polish Variation" }, "rnbqkb1r/pppppppp/5n2/8/5P2/8/PPPPP1PP/RNBQKBNR": { "eco": "A02", "name": "Bird Opening" }, "rnbqkbnr/pppp1ppp/8/4p3/5P2/8/PPPPP1PP/RNBQKBNR": { "eco": "A02", "name": "Bird Opening: From's Gambit" }, "rnbqkb1r/ppp2ppp/3P1n2/8/8/8/PPPPP1PP/RNBQKBNR": { "eco": "A02", "name": "Bird Opening: From's Gambit, Langheld Gambit" }, "rnbqk1nr/ppp2p1p/3b4/6p1/8/5N2/PPPPP1PP/RNBQKB1R": { "eco": "A02", "name": "Bird Opening: From's Gambit, Lasker Variation" }, "rnbqkbnr/pppppp1p/8/6p1/5P2/8/PPPPP1PP/RNBQKBNR": { "eco": "A02", "name": "Bird Opening: Hobbs Gambit" }, "rnbqkbnr/pppppp2/7p/6p1/5P2/5N2/PPPPP1PP/RNBQKB1R": { "eco": "A02", "name": "Bird Opening: Hobbs-Zilbermints Gambit" }, "rnbqkb1r/pppppppp/7n/8/5P2/8/PPPPP1PP/RNBQKBNR": { "eco": "A02", "name": "Bird Opening: Horsefly Defense" }, "rnbqkbnr/pppp2pp/5p2/4P3/8/8/PPPPP1PP/RNBQKBNR": { "eco": "A02", "name": "Bird Opening: Lasker Gambit" }, "rnbqkbnr/p1pppppp/8/1p6/5P2/8/PPPPP1PP/RNBQKBNR": { "eco": "A02", "name": "Bird Opening: Myers Defense" }, "rnbqkb1r/ppppnppp/8/4P3/8/8/PPPPP1PP/RNBQKBNR": { "eco": "A02", "name": "Bird Opening: Platz Gambit" }, "r1bqkbnr/pppp1ppp/2n5/4P3/8/8/PPPPP1PP/RNBQKBNR": { "eco": "A02", "name": "Bird Opening: Schlechter Gambit" }, "rnbqkbnr/ppp1p1pp/8/3p1p2/3P1P2/8/PPP1P1PP/RNBQKBNR": { "eco": "A02", "name": "System: Double Duck Formation" }, "rnbqkbnr/ppp1pppp/8/3p4/5P2/8/PPPPP1PP/RNBQKBNR": { "eco": "A03", "name": "Bird Opening: Dutch Variation" }, "rnbqkb1r/pp2pppp/5n2/2pp4/5P2/4PN2/PPPP2PP/RNBQKB1R": { "eco": "A03", "name": "Bird Opening: Lasker Variation" }, "rnb1k1nr/pp1pppbp/6p1/q1P5/8/4PN2/PPP2PPP/RNBQKB1R": { "eco": "A04", "name": "Colle System: Rhamphorhynchus Variation" }, "rnb1k1nr/pp1pppbp/1q4p1/2p5/2PPP3/5N2/PP3PPP/RNBQKB1R": { "eco": "A04", "name": "Modern Defense: Semi-Averbakh Variation, Polish Variation" }, "rnb1k1nr/pp1pppbp/6p1/q1p5/2PPP3/5N2/PP3PPP/RNBQKB1R": { "eco": "A04", "name": "Modern Defense: Semi-Averbakh Variation, Pterodactyl Variation" }, "rnb1k1nr/pp2ppbp/3p2p1/q1P5/2P1P3/5N2/PP3PPP/RNBQKB1R": { "eco": "A04", "name": "Modern Defense: Semi-Averbakh Variation, Pterodactyl Variation Accepted" }, "rnbqkbnr/ppppp1pp/5p2/8/8/5N2/PPPPPPPP/RNBQKB1R": { "eco": "A04", "name": "Zukertort Opening: Arctic Defense" }, "rnbqkb1r/pppppnpp/5p2/8/3PP3/5N2/PPP2PPP/RNBQKB1R": { "eco": "A04", "name": "Zukertort Opening: Arctic Defense, Drunken Knight Variation" }, "rnbqkbnr/ppppppp1/7p/8/8/5N2/PPPPPPPP/RNBQKB1R": { "eco": "A04", "name": "Zukertort Opening: Basman Defense" }, "r1bqkbnr/pppppppp/2n5/8/8/5N2/PPPPPPPP/RNBQKB1R": { "eco": "A04", "name": "Zukertort Opening: Black Mustang Defense" }, "r1bqkb1r/pppppppp/n6n/8/4P3/5N2/PPPP1PPP/RNBQKB1R": { "eco": "A04", "name": "Zukertort Opening: Drunken Cavalry Variation" }, "rnbqkbnr/ppppp1pp/8/5p2/8/5N2/PPPPPPPP/RNBQKB1R": { "eco": "A04", "name": "Zukertort Opening: Dutch Variation" }, "rnbqkbnr/pppppp1p/8/6p1/8/5N2/PPPPPPPP/RNBQKB1R": { "eco": "A04", "name": "Zukertort Opening: Herrstrom Gambit" }, "rnbqkbnr/pppppp1p/6p1/8/8/5N2/PPPPPPPP/RNBQKB1R": { "eco": "A04", "name": "Zukertort Opening: Kingside Fianchetto" }, "rnbqkbnr/ppp1pppp/3p4/8/8/5N2/PPPPPPPP/RNBQKB1R": { "eco": "A04", "name": "Zukertort Opening: Pirc Invitation" }, "rnbqkbnr/p1pppppp/8/1p6/8/5N2/PPPPPPPP/RNBQKB1R": { "eco": "A04", "name": "Zukertort Opening: Polish Defense" }, "rnbqkbnr/pppp1ppp/4p3/8/8/5N2/PPPPPPPP/RNBQKB1R": { "eco": "A04", "name": "Zukertort Opening: Queen's Gambit Invitation" }, "rnbqkbnr/p1pppppp/1p6/8/8/5N2/PPPPPPPP/RNBQKB1R": { "eco": "A04", "name": "Zukertort Opening: Queenside Fianchetto Variation" }, "rnbqkbnr/pppp1ppp/8/4p3/8/5N2/PPPPPPPP/RNBQKB1R": { "eco": "A04", "name": "Zukertort Opening: Ross Gambit" }, "rnbqkbnr/3p1ppp/p3p3/1pp5/2P5/2N2NP1/PP1PPP1P/R1BQKB1R": { "eco": "A04", "name": "Zukertort Opening: Shabalov Gambit" }, "rnbqkbnr/pp1ppppp/8/2p5/8/5N2/PPPPPPPP/RNBQKB1R": { "eco": "A04", "name": "Zukertort Opening: Sicilian Invitation" }, "rnbqkbnr/pp1ppppp/2p5/8/8/5N2/PPPPPPPP/RNBQKB1R": { "eco": "A04", "name": "Zukertort Opening: Slav Invitation" }, "rnbqkbnr/1ppppppp/p7/8/8/5N2/PPPPPPPP/RNBQKB1R": { "eco": "A04", "name": "Zukertort Opening: St. George Defense" }, "r1bqkbnr/ppp2ppp/2p5/8/8/8/PPPPPPPP/RNBQKB1R": { "eco": "A04", "name": "Zukertort Opening: The Walrus" }, "rnbqkbnr/ppp2ppp/3p4/4p3/3P4/5N2/PPP1PPPP/RNBQKB1R": { "eco": "A04", "name": "Zukertort Opening: Vos Gambit" }, "rn1qkbnr/ppp1pppp/3p4/8/4P1b1/5N2/PPPP1PPP/RNBQKB1R": { "eco": "A04", "name": "Zukertort Opening: Wade Defense" }, "rnbqkbnr/1ppppppp/8/p7/8/5N2/PPPPPPPP/RNBQKB1R": { "eco": "A04", "name": "Zukertort Opening: Ware Defense" }, "rnbqkb1r/ppp1pppp/5n2/3p4/8/5NP1/PPPPPP1P/RNBQKB1R": { "eco": "A05", "name": "King's Indian Attack" }, "rnbqkb1r/p1pppppp/5n2/1p6/8/5NP1/PPPPPP1P/RNBQKB1R": { "eco": "A05", "name": "King's Indian Attack: Spassky Variation" }, "rnbqkb1r/pppppp1p/5np1/8/8/5NP1/PPPPPP1P/RNBQKB1R": { "eco": "A05", "name": "King's Indian Attack: Symmetrical Defense" }, "rnbq1rk1/ppp1ppbp/5np1/3p4/8/3P1NP1/PPP1PPBP/RNBQ1RK1": { "eco": "A05", "name": "King's Indian Attack: Wahls Defense" }, "rnbqkb1r/pppppppp/5n2/8/8/5N2/PPPPPPPP/RNBQKB1R": { "eco": "A05", "name": "Zukertort Opening" }, "r1bqkb1r/pppppppp/2n2n2/8/8/2N2N2/PPPPPPPP/R1BQKB1R": { "eco": "A05", "name": "Zukertort Opening" }, "rnbqkbnr/ppp1pppp/8/3p4/8/5N2/PPPPPPPP/RNBQKB1R": { "eco": "A06", "name": "Zukertort Opening" }, "rnbqkb1r/ppp1pp1p/5np1/3p4/2P5/5NP1/PP1PPP1P/RNBQKB1R": { "eco": "A07", "name": "English Opening: Anglo-Indian Defense, Grünfeld Formation" }, "rnbqkbnr/ppp1pp1p/8/3p2p1/8/5NP1/PPPPPP1P/RNBQKB1R": { "eco": "A07", "name": "Hungarian Opening: Wiedenhagen-Beta Gambit" }, "rnbqkbnr/ppp1pp1p/6p1/3p4/8/5NP1/PPPPPP1P/RNBQKB1R": { "eco": "A07", "name": "King's Indian Attack: Double Fianchetto" }, "rn1qkbnr/ppp1pppp/8/3p4/6b1/5NP1/PPPPPP1P/RNBQKB1R": { "eco": "A07", "name": "King's Indian Attack: Keres Variation" }, "r2qkbnr/pppnpppp/8/3p4/6b1/5NP1/PPPPPPBP/RNBQK2R": { "eco": "A07", "name": "King's Indian Attack: Keres Variation" }, "rnbqkbnr/ppp2ppp/8/3pp3/8/5NP1/PPPPPP1P/RNBQKB1R": { "eco": "A07", "name": "King's Indian Attack: Omega-Delta Gambit" }, "rnbqk2r/ppp1npbp/6p1/3pp3/8/3P1NP1/PPP1PPBP/RNBQ1RK1": { "eco": "A07", "name": "King's Indian Attack: Pachman System" }, "rnbqkbnr/pp2pppp/8/2pp4/8/5NP1/PPPPPP1P/RNBQKB1R": { "eco": "A07", "name": "King's Indian Attack: Sicilian Variation" }, "rn1qkb1r/pp2pppp/2p2n2/3p4/6b1/5NP1/PPPPPPBP/RNBQ1RK1": { "eco": "A07", "name": "King's Indian Attack: Yugoslav Variation" }, "r1bqkbnr/pp2pppp/2n5/2pp4/8/5NP1/PPPPPPBP/RNBQK2R": { "eco": "A08", "name": "King's Indian Attack: French Variation" }, "rnbqkbnr/ppp1pppp/8/8/2Pp4/5N2/PP1PPPPP/RNBQKB1R": { "eco": "A09", "name": "Réti Opening: Advance Variation" }, "rnbqkbnr/pp2pppp/8/2p5/1PPp4/5N2/P2PPPPP/RNBQKB1R": { "eco": "A09", "name": "Réti Opening: Advance Variation, Michel Gambit" }, "rnbqkbnr/ppp1pppp/8/8/2p5/5N2/PP1PPPPP/RNBQKB1R": { "eco": "A09", "name": "Réti Opening: Réti Accepted" }, "rn1qkbnr/ppp1pppp/4b3/8/2p5/4PN2/PP1P1PPP/RNBQKB1R": { "eco": "A09", "name": "Réti Opening: Réti Gambit, Keres Variation" }, "rnbqkbnr/p1p1pppp/8/1p1p4/2P5/5N2/PP1PPPPP/RNBQKB1R": { "eco": "A09", "name": "Réti Opening: Zilbermints Gambit" }, "r1bqkb1r/ppp1p1pp/2np1n2/5p2/2PP4/2N2N2/PP2PPPP/R1BQKB1R": { "eco": "A10", "name": "Dutch Defense: Krause Variation" }, "rnbqkbnr/pppp1p1p/6p1/4p3/2P1P3/8/PP1P1PPP/RNBQKBNR": { "eco": "A10", "name": "English Opening: Adorjan Defense" }, "rnbqkbnr/ppppp1pp/8/5p2/2P5/8/PP1PPPPP/RNBQKBNR": { "eco": "A10", "name": "English Opening: Anglo-Dutch Defense" }, "r1bqkbnr/pppppppp/2n5/8/2P5/8/PP1PPPPP/RNBQKBNR": { "eco": "A10", "name": "English Opening: Anglo-Lithuanian Variation" }, "rnbqkbnr/ppp1pppp/8/3p4/2P5/8/PP1PPPPP/RNBQKBNR": { "eco": "A10", "name": "English Opening: Anglo-Scandinavian Defense" }, "rnbqkbnr/ppp2ppp/4p3/3P4/8/8/PP1PPPPP/RNBQKBNR": { "eco": "A10", "name": "English Opening: Anglo-Scandinavian Defense, Löhn Gambit" }, "rnb1kbnr/ppp1pppp/8/q7/8/2N5/PP1PPPPP/R1BQKBNR": { "eco": "A10", "name": "English Opening: Anglo-Scandinavian Defense, Malvinas Variation" }, "rnbqkb1r/ppp1pppp/5n2/3P4/8/8/PP1PPPPP/RNBQKBNR": { "eco": "A10", "name": "English Opening: Anglo-Scandinavian Defense, Schulz Gambit" }, "rnbqkbnr/pppppp1p/6p1/8/2P5/8/PP1PPPPP/RNBQKBNR": { "eco": "A10", "name": "English Opening: Great Snake Variation" }, "rnbqkbnr/p1pppppp/8/1p6/2P5/8/PP1PPPPP/RNBQKBNR": { "eco": "A10", "name": "English Opening: Jaenisch Gambit" }, "rnbq1rk1/1p3pbp/p1pp1np1/4p3/2P1P3/2NP2P1/PP2NPBP/R1BQ1RK1": { "eco": "A10", "name": "English Opening: King's English Variation, Botvinnik System, Prickly Pawn Pass System" }, "rnbqk1nr/ppppppbp/8/6p1/2PP4/8/PP2PPPP/RNBQKBNR": { "eco": "A10", "name": "English Opening: Myers Variation" }, "rnbqkbnr/pppp1p1p/8/4p1p1/2PP4/8/PP2PPPP/RNBQKBNR": { "eco": "A10", "name": "English Opening: Zilbermints Gambit" }, "r1bq1rk1/pppn1pbp/5np1/4p3/2P5/2N1PN2/PP2BPPP/R1BQ1RK1": { "eco": "A10", "name": "King's Indian Defense: Semi-Classical Variation, Exchange Variation" }, "rnbqk1nr/pppp1pbp/6p1/4p3/2PPP3/8/PP3PPP/RNBQKBNR": { "eco": "A10", "name": "Modern Defense: Neo-Modern Defense" }, "rnbqkbnr/pp1ppppp/2p5/8/2P5/8/PP1PPPPP/RNBQKBNR": { "eco": "A11", "name": "English Opening: Caro-Kann Defensive System" }, "rnbqkb1r/pp2pp1p/2p2np1/3p4/2P5/1P3N2/PB1PPPPP/RN1QKB1R": { "eco": "A12", "name": "Réti Opening: Anglo-Slav Variation, Bled Variation" }, "rn1qkbnr/pp2pppp/2p5/3p4/2P3b1/1P3N2/P2PPPPP/RNBQKB1R": { "eco": "A12", "name": "Réti Opening: Anglo-Slav Variation, Bogoljubov Variation" }, "rn1qkb1r/pp2pppp/2p2n2/3p4/2P3b1/1P3N2/PB1PPPPP/RN1QKB1R": { "eco": "A12", "name": "Réti Opening: Anglo-Slav Variation, Capablanca Variation" }, "rn1qkb1r/pp2pppp/2p2n2/3p1b2/2P5/1P3NP1/P2PPP1P/RNBQKB1R": { "eco": "A12", "name": "Réti Opening: Anglo-Slav Variation, London Defensive System" }, "rn1qkb1r/pp2pppp/2p2n2/3p1b2/2P5/1P3N2/PB1PPPPP/RN1QKB1R": { "eco": "A12", "name": "Réti Opening: Anglo-Slav Variation, New York System" }, "rn1qkb1r/pp2pppp/2p2n2/3p4/2P3b1/1P3NP1/P2PPP1P/RNBQKB1R": { "eco": "A12", "name": "Réti Opening: Anglo-Slav Variation, Torre System" }, "rnbqkbnr/pppp1ppp/4p3/8/2P5/8/PP1PPPPP/RNBQKBNR": { "eco": "A13", "name": "English Opening: Agincourt Defense" }, "rnbqkbnr/ppp2ppp/4p3/3p4/2P5/5N2/PP1PPPPP/RNBQKB1R": { "eco": "A13", "name": "English Opening: Agincourt Defense" }, "rnbqk2r/ppp2ppp/3bpn2/3p4/2P5/5NP1/PP1PPPBP/RNBQK2R": { "eco": "A13", "name": "English Opening: Agincourt Defense, Bogoljubov Defense" }, "rnbqkbnr/pp3ppp/4p3/2pp4/2P5/5NP1/PP1PPP1P/RNBQKB1R": { "eco": "A13", "name": "English Opening: Agincourt Defense, Catalan Defense" }, "rnbqkb1r/ppp2ppp/4pn2/8/2p5/5NP1/PP1PPPBP/RNBQK2R": { "eco": "A13", "name": "English Opening: Agincourt Defense, Catalan Defense Accepted" }, "rnbqkb1r/pp3ppp/2p1pn2/3p4/2P5/5NP1/PP1PPPBP/RNBQK2R": { "eco": "A13", "name": "English Opening: Agincourt Defense, Catalan Defense, Semi-Slav Defense" }, "rnbqkbnr/pp3ppp/2p1p3/3p4/2P5/5NP1/PP1PPP1P/RNBQKB1R": { "eco": "A13", "name": "English Opening: Agincourt Defense, Kurajica Defense" }, "r1bqk2r/pp2bppp/2n1pn2/2pp4/2P5/1P3NP1/P2PPPBP/RNBQ1RK1": { "eco": "A13", "name": "English Opening: Agincourt Defense, Tarrasch Defense" }, "rnbqkb1r/ppp2ppp/4pn2/3p4/2P5/5NP1/PP1PPP1P/RNBQKB1R": { "eco": "A13", "name": "English Opening: Neo-Catalan" }, "rnbqk2r/ppp1bppp/4pn2/3p4/2P5/5NP1/PP1PPPBP/RNBQK2R": { "eco": "A13", "name": "English Opening: Neo-Catalan Declined" }, "rnbqkb1r/2pp1ppp/p3pn2/1p6/2P5/5NP1/PP1PPPBP/RNBQK2R": { "eco": "A13", "name": "English Opening: Romanishin Gambit" }, "rnbqkbnr/pppp1ppp/8/4p3/2PP4/8/PP2PPPP/RNBQKBNR": { "eco": "A13", "name": "Horwitz Defense: Zilbermints Gambit" }, "r1bqk2r/pp2bppp/2n1p3/2pn4/8/2N2NP1/PP1PPPBP/R1BQ1RK1": { "eco": "A14", "name": "English Opening: Agincourt Defense, Keres Defense" }, "rnbqkb1r/pppppppp/5n2/8/2P5/8/PP1PPPPP/RNBQKBNR": { "eco": "A15", "name": "English Opening: Anglo-Indian Defense" }, "rnbqkb1r/pppppp1p/5np1/8/2P5/5N2/PP1PPPPP/RNBQKB1R": { "eco": "A15", "name": "English Opening: Anglo-Indian Defense, King's Indian Formation" }, "rn1qkb1r/pbpppp1p/1p3np1/8/2P5/5NP1/PP1PPPBP/RNBQK2R": { "eco": "A15", "name": "English Opening: Anglo-Indian Defense, King's Indian Formation, Double Fianchetto" }, "rnbqkb1r/ppp1pppp/3p1n2/8/2P5/5N2/PP1PPPPP/RNBQKB1R": { "eco": "A15", "name": "English Opening: Anglo-Indian Defense, Old Indian Formation" }, "rnbqkb1r/p1pppppp/1p3n2/8/2P5/5N2/PP1PPPPP/RNBQKB1R": { "eco": "A15", "name": "English Opening: Anglo-Indian Defense, Queen's Indian Formation" }, "rn1qkb1r/pbpp1ppp/1p2pn2/8/2P5/5NP1/PP1PPPBP/RNBQK2R": { "eco": "A15", "name": "English Opening: Anglo-Indian Defense, Queen's Indian Formation" }, "rnbqkb1r/1ppp1ppp/p3pn2/8/2P5/5NP1/PP1PPP1P/RNBQKB1R": { "eco": "A15", "name": "English Opening: Anglo-Indian Defense, Romanishin Variation" }, "rnbqkb1r/ppp1pppp/5n2/3p4/2P5/5N2/PP1PPPPP/RNBQKB1R": { "eco": "A15", "name": "English Opening: Anglo-Indian Defense, Scandinavian Defense" }, "rnbqkb1r/ppp1pppp/8/3n4/8/5N2/PP1PPPPP/RNBQKB1R": { "eco": "A15", "name": "English Opening: Anglo-Indian Defense, Scandinavian Defense, Exchange Variation" }, "rnbqkb1r/pp1ppp1p/2p2np1/8/2P5/5NP1/PP1PPP1P/RNBQKB1R": { "eco": "A15", "name": "English Opening: Anglo-Indian Defense, Slav Formation" }, "rnbqkb1r/ppp1pppp/5n2/3p4/2P5/2N5/PP1PPPPP/R1BQKBNR": { "eco": "A16", "name": "English Opening: Anglo-Grünfeld Defense" }, "rnbqk2r/ppp2pbp/6p1/3np3/8/2N2NP1/PP1PPPBP/R1BQK2R": { "eco": "A16", "name": "English Opening: Anglo-Grünfeld Defense, Korchnoi Variation" }, "rnbqkb1r/ppp1pp1p/1n4p1/8/8/2N3P1/PP1PPPBP/R1BQK1NR": { "eco": "A16", "name": "English Opening: Anglo-Indian Defense, Anglo-Grünfeld Variation" }, "rnbqkb1r/ppp1pp1p/6p1/8/8/2n3P1/PP1PPPBP/R1BQK1NR": { "eco": "A16", "name": "English Opening: Anglo-Indian Defense, Anglo-Grünfeld Variation" }, "rnbqkb1r/pppp1ppp/4pn2/8/2P5/2N5/PP1PPPPP/R1BQKBNR": { "eco": "A17", "name": "English Opening: Anglo-Indian Defense, Hedgehog System" }, "rnbqk2r/pppp1ppp/4pn2/8/1bP5/2N2N2/PP1PPPPP/R1BQKB1R": { "eco": "A17", "name": "English Opening: Anglo-Indian Defense, Nimzo-English" }, "rnbqkb1r/p1pp1ppp/1p2pn2/8/2P5/2N2N2/PP1PPPPP/R1BQKB1R": { "eco": "A17", "name": "English Opening: Anglo-Indian Defense, Queen's Indian Formation" }, "r1bqkb1r/pppp1ppp/2n1pn2/8/2P1P3/2N5/PP1P1PPP/R1BQKBNR": { "eco": "A18", "name": "English Opening: Mikenas-Carls Variation" }, "rnbqkbnr/pp1p1ppp/4p3/2p1P3/2P5/2N5/PP1P1PPP/R1BQKBNR": { "eco": "A19", "name": "English Opening: Anglo-Indian Defense, Flohr-Mikenas-Carls Variation, Nei Gambit" }, "rnbqkb1r/pp1p1ppp/4pn2/2p5/2P1P3/2N5/PP1P1PPP/R1BQKBNR": { "eco": "A19", "name": "English Opening: Mikenas-Carls, Sicilian" }, "rnbqkbnr/pppp1pp1/8/4p2p/2P5/6P1/PP1PPP1P/RNBQKBNR": { "eco": "A20", "name": "English Opening: Drill Variation" }, "rnbqkbnr/pppp1ppp/8/4p3/2P5/8/PP1PPPPP/RNBQKBNR": { "eco": "A20", "name": "English Opening: King's English Variation" }, "rnbqkbnr/pppp1ppp/8/8/2P1p3/5N2/PP1PPPPP/RNBQKB1R": { "eco": "A20", "name": "English Opening: King's English Variation, Nimzowitsch-Flohr Variation" }, "rnbqkbnr/pp3ppp/2pp4/4p3/2P5/2N3P1/PP1PPP1P/R1BQKBNR": { "eco": "A21", "name": "English Opening: King's English Variation, Keres Defense" }, "rnbqk1nr/pppp1ppp/8/4p3/1bP5/2N5/PP1PPPPP/R1BQKBNR": { "eco": "A21", "name": "English Opening: King's English Variation, Kramnik-Shirov Counterattack" }, "rn1qkbnr/ppp2ppp/3p4/4p3/2P3b1/2N2N2/PP1PPPPP/R1BQKB1R": { "eco": "A21", "name": "English Opening: King's English Variation, Smyslov Defense" }, "r2qkbnr/ppp2ppp/2npb3/4p3/2P5/2N3P1/PP1PPPBP/R1BQK1NR": { "eco": "A21", "name": "English Opening: King's English Variation, Troger Defense" }, "rnbqkb1r/p1pp1ppp/5n2/1p4N1/2P1p3/2N5/PP1PPPPP/R1BQKB1R": { "eco": "A22", "name": "English Opening: King's English Variation, Bellon Gambit" }, "rnbqkb1r/pppp1ppp/5n2/4p3/2P5/2N5/PP1PPPPP/R1BQKBNR": { "eco": "A22", "name": "English Opening: King's English Variation, Two Knights Variation" }, "rnbqkb1r/ppp2ppp/5n2/3pp3/2P5/2N3P1/PP1PPP1P/R1BQKBNR": { "eco": "A22", "name": "English Opening: King's English Variation, Two Knights Variation, Reversed Dragon" }, "rnbqk2r/pppp1ppp/5n2/4p3/1bP5/2N3P1/PP1PPP1P/R1BQKBNR": { "eco": "A22", "name": "English Opening: King's English Variation, Two Knights Variation, Smyslov System" }, "rnbqkb1r/pppp1ppp/8/6N1/2P1p1n1/2N5/PP1PPPPP/R1BQKB1R": { "eco": "A22", "name": "English Opening: King's English, Erbenheimer Gambit" }, "rnbqkb1r/pp1p1ppp/2p2n2/4p3/2P5/2N3P1/PP1PPP1P/R1BQKBNR": { "eco": "A23", "name": "English Opening: King's English Variation, Two Knights Variation, Keres Variation" }, "rnbqkb1r/pppp1p1p/5np1/4p3/2P5/2N3P1/PP1PPP1P/R1BQKBNR": { "eco": "A24", "name": "English Opening: King's English Variation, Two Knights Variation, Fianchetto Line" }, "r1bqk2r/pppp1pbp/2n3pn/4p3/2P5/2N3P1/PP1PPPBP/1RBQK1NR": { "eco": "A25", "name": "English Opening: Closed, Taimanov Variation" }, "r1bqk2r/ppp2pbp/2np2pn/4p3/2P5/2N1P1P1/PP1PNPBP/R1BQK2R": { "eco": "A25", "name": "English Opening: Closed, Taimanov Variation" }, "r2qk1nr/ppp2pbp/2npb1p1/4p3/2P5/2N1P1P1/PP1PNPBP/R1BQK2R": { "eco": "A25", "name": "English Opening: King's English Variation, Bremen-Hort Variation" }, "r1bqkbnr/pppp1ppp/2n5/4p3/2P5/2N5/PP1PPPPP/R1BQKBNR": { "eco": "A25", "name": "English Opening: King's English Variation, Reversed Closed Sicilian" }, "r1bqk1nr/pppp1pbp/2n3p1/4p3/2P5/2N3P1/PP1PPPBP/R1BQK1NR": { "eco": "A25", "name": "English Opening: King's English Variation, Taimanov Variation" }, "r1bqk1nr/ppp2pbp/2np2p1/4p3/2P5/2NP2P1/PP2PPBP/R1BQK1NR": { "eco": "A26", "name": "English Opening: King's English Variation, Closed System, Full Symmetry" }, "r1bqkb1r/pppp1ppp/2n2n2/4p3/2P5/2N2N2/PP1PPPPP/R1BQKB1R": { "eco": "A28", "name": "English Opening: King's English Variation, Four Knights Variation" }, "r1bqk2r/pppp1pp1/5n1p/4n3/2PN3B/2P5/P3PPPP/R2QKB1R": { "eco": "A28", "name": "English Opening: King's English Variation, Four Knights Variation" }, "r1bqkb1r/pppp1ppp/2n2n2/8/2PPp3/2N2N2/PP2PPPP/R1BQKB1R": { "eco": "A28", "name": "English Opening: King's English Variation, Four Knights Variation, Bradley Beach Variation" }, "r1bqk2r/pppp1ppp/2n2n2/4p3/2P5/2b1PN2/PPQP1PPP/R1B1KB1R": { "eco": "A28", "name": "English Opening: King's English Variation, Four Knights Variation, Quiet Line" }, "rnbqkbnr/pp1ppppp/8/2p5/2P5/8/PP1PPPPP/RNBQKBNR": { "eco": "A30", "name": "English Opening: Symmetrical Variation" }, "rn1qk2r/pb1pbppp/1p2pn2/2p5/2P5/2N2NP1/PP1PPPBP/R1BQ1RK1": { "eco": "A30", "name": "English Opening: Symmetrical Variation, Hedgehog Defense" }, "r2qk2r/1b1nbppp/pp1ppn2/8/2PQ4/1PN2NP1/P3PPBP/R1BR2K1": { "eco": "A30", "name": "English Opening: Symmetrical, Hedgehog, Flexible Formation" }, "rnbqkb1r/pp1p1ppp/4pn2/8/2PN4/8/PP2PPPP/RNBQKB1R": { "eco": "A32", "name": "English Opening: Symmetrical Variation, Anti-Benoni Variation, Spielmann Defense" }, "r1b1kb1r/pp1p1ppp/1qn1pn2/8/2PN4/2N3P1/PP2PP1P/R1BQKB1R": { "eco": "A33", "name": "English Opening: Symmetrical Variation, Anti-Benoni Variation, Geller Variation" }, "r1bqkb1r/pp1p1ppp/2n1pn2/8/2PN4/2N5/PP2PPPP/R1BQKB1R": { "eco": "A33", "name": "English Opening: Symmetrical Variation, Anti-Benoni Variation, Spielmann Defense" }, "rnbqkb1r/ppn1pppp/8/2p5/8/2N3P1/PP1PPPBP/R1BQK1NR": { "eco": "A34", "name": "English Opening: Symmetrical Variation, Rubinstein Variation" }, "rnbqkb1r/pp2pppp/8/2pn4/8/2N2N2/PP1PPPPP/R1BQKB1R": { "eco": "A34", "name": "English Opening: Symmetrical Variation, Three Knights Variation" }, "r1bqkb1r/pp1ppppp/2n2n2/2p5/2P5/2N2N2/PP1PPPPP/R1BQKB1R": { "eco": "A35", "name": "English Opening: Symmetrical Variation, Four Knights Variation" }, "r1bqkbnr/pp1ppppp/2n5/2p5/2P5/2N5/PP1PPPPP/R1BQKBNR": { "eco": "A35", "name": "English Opening: Symmetrical Variation, Two Knights Variation" }, "r1bqk1nr/pp1p1pbp/2n3p1/2p1p3/2P5/2N1P1P1/PP1P1PBP/R1BQK1NR": { "eco": "A36", "name": "English Opening: Symmetrical Variation, Botvinnik System Reversed" }, "r1bqk1nr/pp1pppbp/2n3p1/2p5/2P5/2N3P1/PP1PPPBP/R1BQK1NR": { "eco": "A36", "name": "English Opening: Symmetrical Variation, Symmetrical Variation" }, "r1bqk1nr/pp1p1pbp/2n3p1/2p1p3/2P5/2N2NP1/PP1PPPBP/R1BQK2R": { "eco": "A37", "name": "English Opening: Symmetrical Variation, Botvinnik System Reversed" }, "r1bqk2r/pp1pppbp/2n2np1/2p5/2P5/2N2NP1/PP1PPPBP/R1BQK2R": { "eco": "A38", "name": "English Opening: Symmetrical Variation, Full Symmetry Line" }, "r1bqkbnr/pppppppp/n7/8/3P4/8/PPP1PPPP/RNBQKBNR": { "eco": "A40", "name": "Australian Defense" }, "rnbqk2r/pp2npbp/3p2p1/2pP4/4P3/2N2N2/PP3PPP/R1BQKB1R": { "eco": "A40", "name": "Benoni Defense: Franco-Sicilian Hybrid" }, "rnbqkbnr/pppppp1p/8/6p1/3P4/8/PPP1PPPP/RNBQKBNR": { "eco": "A40", "name": "Borg Defense: Borg Gambit" }, "rnb1k1nr/pp1pppbp/6p1/q1p5/3P4/3BPN2/PPP2PPP/RNBQK2R": { "eco": "A40", "name": "Colle System: Pterodactyl Variation" }, "rnb1k1nr/pp1pppbp/6p1/q7/3N4/3BP3/PPP2PPP/RNBQK2R": { "eco": "A40", "name": "Colle System: Siroccopteryx Variation" }, "rnbqk2r/pp4pp/2pbpn2/3p1p2/2PP4/5NP1/PP2PPBP/RNBQ1RK1": { "eco": "A40", "name": "Dutch Defense: Stonewall Variation, Modern Variation" }, "rnbqkbnr/p1pppppp/1p6/8/3P4/8/PPP1PPPP/RNBQKBNR": { "eco": "A40", "name": "English Defense" }, "rnbqkbnr/p1pp1ppp/1p2p3/8/2PP4/8/PP2PPPP/RNBQKBNR": { "eco": "A40", "name": "English Defense" }, "rnbqkbnr/p2p2pp/4p3/1PpP1p2/4P3/8/PP3PPP/RNBQKBNR": { "eco": "A40", "name": "English Defense: Blumenfeld-Hiva Gambit" }, "rn1qkbnr/pbpp1ppp/1p6/4p3/2PP4/2N5/PP2PPPP/R1BQKBNR": { "eco": "A40", "name": "English Defense: Eastbourne Gambit" }, "rn1qkb1r/pbpp2pp/1p2pn2/5P2/2PP4/2N5/PP3PPP/R1BQKBNR": { "eco": "A40", "name": "English Defense: Hartlaub Gambit Accepted" }, "r2qkbnr/pbpp1ppp/1pn1p3/8/2PPP3/3B4/PP3PPP/RNBQK1NR": { "eco": "A40", "name": "English Defense: Perrin Variation" }, "rn1qkb1r/pbpp2pp/1p2p2n/5P2/2PP4/5P2/PP4PP/RNBQKBNR": { "eco": "A40", "name": "English Defense: Poli Gambit" }, "rnbqkbnr/pppp1ppp/8/4p3/3P4/8/PPP1PPPP/RNBQKBNR": { "eco": "A40", "name": "Englund Gambit" }, "rnb1k1nr/pppp1ppp/8/2bPp3/4P2q/8/PPP2PPP/RNBQKBNR": { "eco": "A40", "name": "Englund Gambit Complex Declined: Diemer Counterattack" }, "r1b1kbnr/ppppqppp/2n5/4P3/8/5N2/PPP1PPPP/RNBQKB1R": { "eco": "A40", "name": "Englund Gambit Complex: Englund Gambit" }, "r1bqk1nr/pppp1ppp/2n5/2b1P3/8/5N2/PPP1PPPP/RNBQKB1R": { "eco": "A40", "name": "Englund Gambit Complex: Felbecker Gambit" }, "rnbqkbnr/ppp2ppp/3p4/4P3/8/8/PPP1PPPP/RNBQKBNR": { "eco": "A40", "name": "Englund Gambit Complex: Hartlaub-Charlick Gambit" }, "rnb1kbnr/pppp1ppp/8/4P3/7q/8/PPP1PPPP/RNBQKBNR": { "eco": "A40", "name": "Englund Gambit Complex: Mosquito Gambit" }, "rnbqkbnr/pppp2pp/5p2/4P3/8/8/PPP1PPPP/RNBQKBNR": { "eco": "A40", "name": "Englund Gambit Complex: Soller Gambit" }, "r1bqkbnr/pppp2pp/2n2p2/4P3/8/5N2/PPP1PPPP/RNBQKB1R": { "eco": "A40", "name": "Englund Gambit Complex: Soller Gambit Deferred" }, "r1bqkb1r/ppppnppp/2n5/4P3/8/5N2/PPP1PPPP/RNBQKB1R": { "eco": "A40", "name": "Englund Gambit Complex: Zilbermints Gambit" }, "r1bqkbnr/pppp1pp1/2n4p/4P3/8/5N2/PPP1PPPP/RNBQKB1R": { "eco": "A40", "name": "Englund Gambit Complex: Zilbermints Gambit" }, "rnbqkbnr/pppp1ppp/8/8/3Pp3/5N2/PPP1PPPP/RNBQKB1R": { "eco": "A40", "name": "Englund Gambit Declined: Reversed Krebs" }, "rnbqkbnr/pppp1ppp/4p3/8/3P4/8/PPP1PPPP/RNBQKBNR": { "eco": "A40", "name": "Horwitz Defense" }, "rnbqk1nr/pppp1ppp/4p3/8/1bPP4/8/PP2PPPP/RNBQKBNR": { "eco": "A40", "name": "Kangaroo Defense" }, "r1bqkbnr/pppppppp/2n5/8/3P4/8/PPP1PPPP/RNBQKBNR": { "eco": "A40", "name": "Mikenas Defense" }, "r1bqkbnr/pppp1ppp/8/3Pp3/2Pn4/8/PP2PPPP/RNBQKBNR": { "eco": "A40", "name": "Mikenas Defense: Cannstatter Variation" }, "r1bqkbnr/ppppnppp/8/3Pp3/2P5/8/PP2PPPP/RNBQKBNR": { "eco": "A40", "name": "Mikenas Defense: Lithuanian Variation" }, "r1bqkbnr/pppp1ppp/8/8/2n5/2N5/PP2PPPP/R1BQKBNR": { "eco": "A40", "name": "Mikenas Defense: Pozarek Gambit" }, "rnbqkbnr/pppppp1p/6p1/8/3P4/8/PPP1PPPP/RNBQKBNR": { "eco": "A40", "name": "Modern Defense" }, "rnbqk1nr/pp1pp2p/6p1/2pP1p2/2P5/2P5/P3PPPP/R1BQKBNR": { "eco": "A40", "name": "Modern Defense: Beefeater Variation" }, "rnbqkbnr/pppppppp/8/3P4/8/8/PPP1PPPP/RNBQKBNR": { "eco": "A40", "name": "Montevideo Defense" }, "rnbqkbnr/p1pppppp/8/1p6/3P4/8/PPP1PPPP/RNBQKBNR": { "eco": "A40", "name": "Polish Defense" }, "rnb1k1nr/pp2pp1p/3p2p1/q1pP4/2P1P3/2P5/P4PPP/R1BQKBNR": { "eco": "A40", "name": "Pterodactyl Defense: Central, Benoni Beefeater Pterodactyl" }, "rnb1k1nr/pp1pppbp/6p1/q1pP4/2P1P3/8/PP3PPP/RNBQKBNR": { "eco": "A40", "name": "Pterodactyl Defense: Central, Benoni Pterodactyl" }, "rnb1k1nr/pp1pppbp/6p1/q1pP4/2P5/2N5/PP2PPPP/R1BQKBNR": { "eco": "A40", "name": "Pterodactyl Defense: Fianchetto, Queen Benoni Pterodactyl" }, "rnb1k1nr/pp1ppp1p/6p1/q1pP4/2P5/2P5/P3PPPP/R1BQKBNR": { "eco": "A40", "name": "Pterodactyl Defense: Fianchetto, Queen Pteranodon" }, "rnb1k1nr/pp1pppbp/6p1/q1p5/3P4/5NP1/PPP1PPBP/RNBQK2R": { "eco": "A40", "name": "Pterodactyl Defense: Fianchetto, Queen Pterodactyl" }, "rnbqkbnr/pp2pppp/2pp4/8/2PP4/8/PP2PPPP/RNBQKBNR": { "eco": "A40", "name": "Queen's Pawn Game: Anglo-Slav Opening" }, "r1b1kb1r/ppppq1pp/2n2n2/3Q4/8/5N2/PPP1PPPP/RNB1KB1R": { "eco": "A40", "name": "Queen's Pawn Game: Englund Gambit" }, "rnb1k1nr/pp1pppbp/6p1/q7/3P1B2/5N2/PP2PPPP/RN1QKB1R": { "eco": "A40", "name": "Queen's Pawn Game: London System, Pterodactyl Variation" }, "rnbqk1nr/ppp1ppbp/6p1/3p4/3P4/2N2N2/PPP1PPPP/R1BQKB1R": { "eco": "A40", "name": "Queen's Pawn Game: Veresov Attack, Fianchetto Defense" }, "rnbqkb1r/p2ppppp/2p2n2/1p6/2PP4/5N2/PP2PPPP/RNBQKB1R": { "eco": "A40", "name": "Slav Indian: Kudischewitsch Gambit" }, "rn1qkbnr/1bpp1ppp/p3p3/1p6/3PP3/3B1N2/PPP2PPP/RNBQK2R": { "eco": "A40", "name": "St. George Defense: Polish Variation" }, "rnbqkbnr/pppppppp/8/3PP3/8/8/PPP2PPP/RNBQKBNR": { "eco": "A40", "name": "Zaire Defense" }, "rnbqkb1r/pppppp1p/6pn/8/3P4/5N2/PPP1PPPP/RNBQKB1R": { "eco": "A40", "name": "Zukertort Defense: Kingside Variation" }, "rn1qkbnr/ppp2ppp/3pb3/4P3/2P5/8/PP2PPPP/RNBQKBNR": { "eco": "A41", "name": "English Rat: Pounds Gambit" }, "rnbqkbnr/ppp2ppp/3p4/4p3/3PP3/8/PPP2PPP/RNBQKBNR": { "eco": "A41", "name": "King's Pawn Game: Maróczy Defense" }, "rnbqk1nr/ppp1ppbp/3p2p1/8/2PP4/2N5/PP2PPPP/R1BQKBNR": { "eco": "A41", "name": "Modern Defense" }, "rnbqkbnr/ppp1pppp/3p4/8/3P4/8/PPP1PPPP/RNBQKBNR": { "eco": "A41", "name": "Queen's Pawn Game" }, "rnbqkbnr/ppp2ppp/3p4/4p3/2PP4/8/PP2PPPP/RNBQKBNR": { "eco": "A41", "name": "Rat Defense: English Rat" }, "r1bqkbnr/ppp2ppp/2np4/4P3/2P5/8/PP2PPPP/RNBQKBNR": { "eco": "A41", "name": "Rat Defense: English Rat, Lisbon Gambit" }, "rn1qk1nr/ppp1ppbp/3p2p1/8/2PPP1b1/5N2/PP3PPP/RNBQKB1R": { "eco": "A41", "name": "Robatsch Defense" }, "rn1qkbnr/ppp1pppp/3p4/8/3P2b1/5N2/PPP1PPPP/RNBQKB1R": { "eco": "A41", "name": "Wade Defense" }, "1r1qkbnr/pppnpppp/3p4/8/2PP2b1/1Q3N2/PP2PPPP/RNB1KB1R": { "eco": "A41", "name": "Zukertort Opening: Wade Defense, Chigorin Plan" }, "r1bqk1nr/ppp1ppbp/2np2p1/8/2PPP3/2N5/PP3PPP/R1BQKBNR": { "eco": "A42", "name": "Modern Defense: Kotov Variation" }, "rnbqk1nr/ppp1p1bp/3p2p1/5p2/2PPP3/2N5/PP3PPP/R1BQKBNR": { "eco": "A42", "name": "Modern Defense: Randspringer Variation" }, "rnb1k1nr/pp2ppbp/3p2p1/q1p5/2PPP3/2N2N2/PP3PPP/R1BQKB1R": { "eco": "A42", "name": "Pterodactyl Defense" }, "rnb1k1nr/pp2ppbp/3p2p1/q1p5/2PPP3/2N5/PP2NPPP/R1BQKB1R": { "eco": "A42", "name": "Pterodactyl Defense: Central, Bogolubovia" }, "r1bqkbnr/pp1ppppp/n7/2P5/8/8/PPP1PPPP/RNBQKBNR": { "eco": "A43", "name": "Benoni Defense: Benoni Gambit, Schlenker Defense" }, "rnbqkb1r/pp1ppppp/5n2/2pP4/8/8/PPP1PPPP/RNBQKBNR": { "eco": "A43", "name": "Benoni Defense: Benoni-Indian Defense" }, "rnbqkbnr/p2ppppp/1p6/2P5/8/8/PPP1PPPP/RNBQKBNR": { "eco": "A43", "name": "Benoni Defense: Cormorant Gambit" }, "rnbqkb1r/pp1ppppp/5n2/3P4/2p5/5N2/PPP1PPPP/RNBQKB1R": { "eco": "A43", "name": "Benoni Defense: Hawk Variation" }, "rnbqkbnr/pp1ppppp/8/2p5/3P4/8/PPP1PPPP/RNBQKBNR": { "eco": "A43", "name": "Benoni Defense: Old Benoni" }, "rnbqkbnr/pp2pppp/3p4/2pP4/8/8/PPP1PPPP/RNBQKBNR": { "eco": "A43", "name": "Benoni Defense: Old Benoni" }, "rnbqkbnr/pp1pp1pp/8/2pP1p2/8/8/PPP1PPPP/RNBQKBNR": { "eco": "A43", "name": "Benoni Defense: Old Benoni, Mujannah Formation" }, "rnbqkbnr/pp2pp1p/3p2p1/2pP4/8/2N5/PPP1PPPP/R1BQKBNR": { "eco": "A43", "name": "Benoni Defense: Old Benoni, Schmid Variation" }, "r1bqkbnr/pp1ppppp/n7/2pP4/8/8/PPP1PPPP/RNBQKBNR": { "eco": "A43", "name": "Benoni Defense: Snail Variation" }, "rnb1kb1r/pp1ppppp/5n2/q1pP4/8/2N5/PPP1PPPP/R1BQKBNR": { "eco": "A43", "name": "Benoni Defense: Woozle" }, "rnbqkbnr/pp1p1ppp/8/4p3/1P1p4/5N2/P1P1PPPP/RNBQKB1R": { "eco": "A43", "name": "Benoni Defense: Zilbermints-Benoni Gambit, Tamarkin Countergambit" }, "rnbqkb1r/p2ppppp/5n2/1ppP4/8/5N2/PPP1PPPP/RNBQKB1R": { "eco": "A43", "name": "Indian Game: Pseudo-Benko" }, "rnbqkbnr/pp1p1ppp/8/2pPp3/8/8/PPP1PPPP/RNBQKBNR": { "eco": "A44", "name": "Benoni Defense: Old Benoni" }, "rnbqkbnr/pp3ppp/3p4/2pPp3/4P3/8/PPP2PPP/RNBQKBNR": { "eco": "A44", "name": "Benoni Defense: Semi-Benoni" }, "rnbqkb1r/pp2pppp/2p2n2/8/3Pp3/2N2P2/PPP3PP/R1BQKBNR": { "eco": "A45", "name": "Blackmar-Diemer Gambit Declined: O'Kelly Defense" }, "rnbqkb1r/ppp2ppp/4pn2/8/3Pp3/2N2P2/PPP3PP/R1BQKBNR": { "eco": "A45", "name": "Blackmar-Diemer Gambit Declined: Weinsbach Declination" }, "rnbqkb1r/pppppppp/5n2/8/3P4/8/PPP1PPPP/RNBQKBNR": { "eco": "A45", "name": "Indian Game" }, "rnbqkb1r/pppppppp/8/8/3P2n1/8/PPP1PP1P/RNBQKBNR": { "eco": "A45", "name": "Indian Game: Gibbins-Wiedenhagen Gambit Accepted" }, "rnbqkb1r/pppp1ppp/5n2/4p3/3P2P1/8/PPP1PP1P/RNBQKBNR": { "eco": "A45", "name": "Indian Game: Gibbins-Wiedenhagen Gambit, Oshima Defense" }, "rnbqkb1r/pppp1ppp/5n2/4p3/3P4/8/PPPNPPPP/R1BQKBNR": { "eco": "A45", "name": "Indian Game: Lazard Gambit" }, "rnbqkb1r/pppp1ppp/5n2/4p3/3P4/2N5/PPP1PPPP/R1BQKBNR": { "eco": "A45", "name": "Indian Game: Maddigan Gambit" }, "rnbqkb1r/pp1ppppp/5n2/2p5/3P4/2N5/PPP1PPPP/R1BQKBNR": { "eco": "A45", "name": "Indian Game: Reversed Chigorin Defense" }, "rnbqkb1r/ppp1pppp/5n2/3p4/3P4/2N5/PPP1PPPP/R1BQKBNR": { "eco": "A45", "name": "Queen's Pawn Game: Chigorin Variation" }, "rnbqkb1r/pppppp1p/8/6p1/3PnB2/8/PPP1PPPP/RN1QKBNR": { "eco": "A45", "name": "Trompowsky Attack: Borg Variation" }, "rnbqkb1r/pppp1ppp/4pn2/6B1/3P4/8/PPP1PPPP/RN1QKBNR": { "eco": "A45", "name": "Trompowsky Attack: Classical Defense" }, "rnbqkb1r/pppp1ppp/8/4p1P1/3P4/8/PPP1PPP1/RN1QKBNR": { "eco": "A45", "name": "Trompowsky Attack: Raptor Variation, Hergert Gambit" }, "rnbqkb1r/pppppppp/8/8/3Pn3/5N2/PPP1PPPP/RNBQKB1R": { "eco": "A46", "name": "Döry Defense" }, "rnbqkb1r/pp1ppppp/2p2n2/8/3P4/5N2/PPP1PPPP/RNBQKB1R": { "eco": "A46", "name": "Indian Game: Czech-Indian" }, "rnbqkb1r/1ppppppp/p4n2/8/3P4/5N2/PPP1PPPP/RNBQKB1R": { "eco": "A46", "name": "Indian Game: Knights Variation, Alburt-Miles Variation" }, "rnbqkb1r/p1pppppp/5n2/1p6/3P4/5N2/PPP1PPPP/RNBQKB1R": { "eco": "A46", "name": "Indian Game: Polish Variation" }, "rnbqkb1r/pp1ppppp/5n2/2p5/3P4/5N2/PPP1PPPP/RNBQKB1R": { "eco": "A46", "name": "Indian Game: Spielmann-Indian" }, "rnbqkb1r/ppp1pppp/3p1n2/8/3P4/5N2/PPP1PPPP/RNBQKB1R": { "eco": "A46", "name": "Indian Game: Wade-Tartakower Defense" }, "rnbqkb1r/pp2pppp/2pp1n2/8/2PP4/5N2/PP2PPPP/RNBQKB1R": { "eco": "A46", "name": "Old Indian Defense: Czech Variation" }, "rn1qkb1r/ppp1pppp/3p1n2/8/2PP2b1/5N2/PP2PPPP/RNBQKB1R": { "eco": "A46", "name": "Old Indian Defense: Tartakower-Indian" }, "rnb1kb1r/pp3ppp/1q2pn2/2pp2B1/3P4/2P1PN2/PP3PPP/RN1QKB1R": { "eco": "A46", "name": "Queen's Pawn Game: Torre Attack, Breyer Variation" }, "rnbqkb1r/pppp1pp1/4pn1p/6B1/3P4/5N2/PPP1PPPP/RN1QKB1R": { "eco": "A46", "name": "Torre Attack: Classical Defense, Nimzowitsch Variation" }, "rnbqkb1r/p1pp1ppp/1p3n2/4p3/3P4/2P2N2/PP2PPPP/RNBQKB1R": { "eco": "A47", "name": "Indian Game: Schnepper Gambit" }, "rn1qkb1r/pb1ppppp/1p3n2/2p5/3P4/5NP1/PPP1PPBP/RNBQK2R": { "eco": "A47", "name": "Marienbad System" }, "rnbqkb1r/p1pppppp/1p3n2/8/3P4/5N2/PPP1PPPP/RNBQKB1R": { "eco": "A47", "name": "Queen's Indian Defense" }, "rnbqkb1r/pppppp1p/5np1/8/3P4/5N2/PPP1PPPP/RNBQKB1R": { "eco": "A48", "name": "East Indian Defense" }, "rnbq1rk1/ppp1ppbp/5np1/3p2B1/3P4/4PN2/PPPN1PPP/R2QKB1R": { "eco": "A48", "name": "Queen's Pawn Game: Torre Attack, Grünfeld Variation, Main Line" }, "rnbqk2r/pp1pppbp/5np1/2p3B1/3P4/5N2/PPPNPPPP/R2QKB1R": { "eco": "A48", "name": "Torre Attack: Fianchetto Defense, Euwe Variation" }, "rnb2rk1/pp2ppbp/1qpp1np1/8/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1": { "eco": "A49", "name": "King's Indian Defense: Fianchetto Variation, Benjamin Defense" }, "rnbqkb1r/pppppp1p/5n2/6p1/2PP4/8/PP2PPPP/RNBQKBNR": { "eco": "A50", "name": "Indian Game: Medusa Gambit" }, "rnbqkb1r/p1pppppp/5n2/1p6/2PP4/8/PP2PPPP/RNBQKBNR": { "eco": "A50", "name": "Indian Game: Pyrenees Gambit" }, "r1bqkb1r/pppppppp/2n2n2/8/2PP4/8/PP2PPPP/RNBQKBNR": { "eco": "A50", "name": "Mexican Defense" }, "rnbqkb1r/p1pppppp/1p3n2/8/2PP4/8/PP2PPPP/RNBQKBNR": { "eco": "A50", "name": "Queen's Indian Accelerated" }, "rnbqkb1r/pp1ppppp/2p2n2/8/2PP4/8/PP2PPPP/RNBQKBNR": { "eco": "A50", "name": "Slav Indian" }, "rnbqkb1r/pppp1ppp/5n2/4p3/2PP4/8/PP2PPPP/RNBQKBNR": { "eco": "A51", "name": "Indian Game: Budapest Defense" }, "rnbqkb1r/p1pp1ppp/1p6/4P3/2P1n3/P7/1P2PPPP/RNBQKBNR": { "eco": "A51", "name": "Indian Game: Budapest Defense, Fajarowicz Defense, Bonsdorf Variation" }, "rnbqkb1r/pppp1ppp/8/4P3/2P1n3/8/PP2PPPP/RNBQKBNR": { "eco": "A51", "name": "Indian Game: Budapest Defense, Fajarowicz Variation" }, "rnbqkb1r/pppp1ppp/8/4P3/2P3n1/8/PP2PPPP/RNBQKBNR": { "eco": "A52", "name": "Indian Game: Budapest Defense" }, "rnbqkb1r/pppp1ppp/2n5/8/2P1PP2/8/PP4PP/RNBQKBNR": { "eco": "A52", "name": "Indian Game: Budapest Defense, Alekhine Variation, Abonyi Variation" }, "rnbqkb1r/ppp2ppp/3p4/4P3/2P1P1n1/8/PP3PPP/RNBQKBNR": { "eco": "A52", "name": "Indian Game: Budapest Defense, Alekhine Variation, Tartakower Defense" }, "rnbqkb1r/ppp1pppp/3p1n2/8/2PP4/8/PP2PPPP/RNBQKBNR": { "eco": "A53", "name": "Old Indian Defense" }, "rnbqkb1r/pp2pppp/2pp1n2/8/2PP4/2N5/PP2PPPP/R1BQKBNR": { "eco": "A53", "name": "Old Indian Defense: Czech Variation" }, "rn1qkb1r/ppp1pppp/3p1n2/5b2/2PP4/2N5/PP2PPPP/R1BQKBNR": { "eco": "A53", "name": "Old Indian Defense: Janowski Variation" }, "rnbqkb1r/ppp2ppp/3p1n2/4p3/2PP4/2N5/PP2PPPP/R1BQKBNR": { "eco": "A54", "name": "Old Indian Defense: Ukrainian Variation" }, "rnbqkb1r/pp1ppppp/5n2/2p5/2PP4/8/PP2PPPP/RNBQKBNR": { "eco": "A56", "name": "Benoni Defense" }, "rnbqkb1r/pp1p1ppp/5n2/2pPp3/2P5/8/PP2PPPP/RNBQKBNR": { "eco": "A56", "name": "Benoni Defense: Czech Benoni Defense" }, "rnbqkb1r/pp2pppp/3p1n2/2pP4/2P5/8/PP2PPPP/RNBQKBNR": { "eco": "A56", "name": "Benoni Defense: Hromádka System" }, "rnbqkb1r/pp3p1p/3p1np1/2pPp3/2P1P3/2N5/PP3PPP/R1BQKBNR": { "eco": "A56", "name": "Benoni Defense: King's Indian System" }, "rnbqkb1r/pp1p1ppp/4pn2/2P5/2P5/8/PP2PPPP/RNBQKBNR": { "eco": "A56", "name": "Benoni Defense: Weenink Variation" }, "r1bq1rk1/pp2ppbp/2n2np1/3p4/2PP4/2N2N2/PP2BPPP/R1BQ1RK1": { "eco": "A56", "name": "Grünfeld Defense: Three Knights Variation, Burille Variation, Reversed Tarrasch" }, "rnbqkb1r/pp1ppppp/8/2pP4/2P1n3/8/PP2PPPP/RNBQKBNR": { "eco": "A56", "name": "Vulture Defense" }, "rnbqkb1r/p2ppppp/5n2/1ppP4/2P5/8/PP2PPPP/RNBQKBNR": { "eco": "A57", "name": "Benko Gambit" }, "rnbqkb1r/3ppppp/p4n2/1PpP4/8/8/PP2PPPP/RNBQKBNR": { "eco": "A57", "name": "Benko Gambit Accepted" }, "rnbqkb1r/pp1p1ppp/4pn2/2pP4/2P5/8/PP2PPPP/RNBQKBNR": { "eco": "A60", "name": "Benoni Defense: Modern Variation" }, "rnbqk2r/pp1p1ppp/3b1n2/2pP4/8/2N5/PP2PPPP/R1BQKBNR": { "eco": "A60", "name": "Benoni Defense: Modern Variation, Snake Variation" }, "rnbqkb1r/pp3p1p/3p1np1/2pP4/8/2N2N2/PP2PPPP/R1BQKB1R": { "eco": "A61", "name": "Benoni Defense" }, "rnbq1rk1/pp3pbp/3p1np1/2pP4/8/2N2NP1/PP2PPBP/R1BQK2R": { "eco": "A62", "name": "Benoni Defense: Fianchetto Variation" }, "r1bq1rk1/pp1n1pbp/3p1np1/2pP4/8/2N2NP1/PP2PPBP/R1BQ1RK1": { "eco": "A63", "name": "Benoni Defense: Fianchetto Variation, Hastings Defense" }, "r1bqr1k1/1p1n1pbp/p2p1np1/2pP4/P7/2N3P1/1P1NPPBP/R1BQ1RK1": { "eco": "A64", "name": "Benoni Defense: Fianchetto Variation, Hastings Defense, Main Line" }, "rnbq1rk1/pp3pbp/3p1np1/2pP4/4PP2/2N2N2/PP4PP/R1BQKB1R": { "eco": "A68", "name": "Benoni Defense: Four Pawns Attack" }, "rnbqr1k1/pp3pbp/3p1np1/2pP4/4PP2/2N2N2/PP2B1PP/R1BQK2R": { "eco": "A69", "name": "Benoni Defense: Four Pawns Attack, Main Line" }, "rnbq1rk1/pp3pbp/3p1np1/2pP4/4P3/2N2N2/PP2BPPP/R1BQK2R": { "eco": "A72", "name": "Benoni Defense: Classical" }, "rn1q1rk1/1p3pbp/p2p1np1/2pP4/P3P1b1/2N2N2/1P2BPPP/R1BQ1RK1": { "eco": "A75", "name": "Benoni Defense: Classical Variation, Argentine Counterattack" }, "rnbqr1k1/pp3pbp/3p1np1/2pP4/4P3/2N2N2/PP2BPPP/R1BQ1RK1": { "eco": "A76", "name": "Benoni Defense: Classical Variation, Czerniak Defense" }, "r1bqr1k1/pp3pbp/n2p1np1/2pP4/4P3/2N5/PP1NBPPP/R1BQ1RK1": { "eco": "A78", "name": "Benoni Defense: Classical Variation, Czerniak Defense" }, "rnbqkbnr/ppp1p1pp/8/5p2/3Pp3/2N5/PPP2PPP/R1BQKBNR": { "eco": "A80", "name": "Blackmar-Diemer Gambit: Netherlands Variation" }, "rnbqkbnr/ppppp1pp/8/5p2/3P4/8/PPP1PPPP/RNBQKBNR": { "eco": "A80", "name": "Dutch Defense" }, "rnbqkbnr/pppp2pp/8/4pp2/3P2P1/8/PPP1PP1P/RNBQKBNR": { "eco": "A80", "name": "Dutch Defense: Hevendehl Gambit" }, "rnbqkbnr/pppp2pp/8/4pp2/3P4/5N2/PPP1PPPP/RNBQKB1R": { "eco": "A80", "name": "Dutch Defense: Omega-Isis Gambit" }, "rnbqkbnr/ppp1p1pp/8/3p1p2/3P4/2N5/PPP1PPPP/R1BQKBNR": { "eco": "A80", "name": "Queen's Pawn Game: Veresov Attack, Dutch System" }, "rnbqk2r/pp1pp1bp/2p3pn/5p2/3P4/5NP1/PPP1PPBP/RNBQ1RK1": { "eco": "A81", "name": "Dutch Defense: Leningrad, Basman System" }, "rnbqkb1r/ppppp2p/5np1/5p2/3P4/6P1/PPP1PPBP/RNBQK1NR": { "eco": "A81", "name": "Dutch Defense: Semi-Leningrad Variation" }, "rnbqkbnr/ppppp1pp/8/8/3Pp3/8/PPP2PPP/RNBQKBNR": { "eco": "A82", "name": "Dutch Defense: Staunton Gambit Accepted" }, "rnbqkbnr/pppp2pp/4p3/5p2/3PP3/8/PPP2PPP/RNBQKBNR": { "eco": "A82", "name": "French Defense: Franco-Hiva Gambit" }, "rnbqkbnr/ppp1p1pp/3p4/5p2/3PP3/8/PPP2PPP/RNBQKBNR": { "eco": "A82", "name": "Rat Defense: Balogh Defense" }, "rnbqkb1r/pp1pp1pp/2p2n2/6B1/3Pp3/2N5/PPP2PPP/R2QKBNR": { "eco": "A83", "name": "Dutch Defense: Staunton Gambit, Chigorin Variation" }, "rnbqkb1r/p1ppp1pp/1p3n2/6B1/3Pp3/2N5/PPP2PPP/R2QKBNR": { "eco": "A83", "name": "Dutch Defense: Staunton Gambit, Nimzowitsch Variation" }, "rnbqkb1r/ppppp2p/6pn/5p2/2PP4/2N5/PP2PPPP/R1BQKBNR": { "eco": "A84", "name": "Dutch Defense: Bladel Variation" }, "rnbqkbnr/pppp2pp/4p3/5p2/2PP4/8/PP2PPPP/RNBQKBNR": { "eco": "A84", "name": "Dutch Defense: Classical Variation" }, "rnbqkb1r/ppppp1pp/5n2/5p2/2PP4/8/PP2PPPP/RNBQKBNR": { "eco": "A84", "name": "Dutch Defense: Normal Variation" }, "rnb1kb1r/ppq1p1pp/2pp1n2/5p2/2PP4/2N3P1/PP2PPBP/R1BQK1NR": { "eco": "A86", "name": "Dutch Defense: Hort-Antoshin System" }, "rnbqkb1r/ppppp2p/5np1/5p2/2PP4/6P1/PP2PP1P/RNBQKBNR": { "eco": "A86", "name": "Dutch Defense: Leningrad Variation" }, "rnbq1rk1/pp2p1bp/2pp1np1/5p2/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1": { "eco": "A88", "name": "Dutch Defense: Leningrad Variation, Warsaw Variation" }, "r1bq1rk1/ppp1p1bp/2np1np1/5p2/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1": { "eco": "A89", "name": "Dutch Defense: Leningrad Variation, Matulovic Variation" }, "rnbqk2r/pppp2pp/4pn2/5p2/1bPP4/6P1/PP2PPBP/RNBQK1NR": { "eco": "A90", "name": "Dutch Defense: Nimzo-Dutch Variation" }, "rnbqk2r/ppppb1pp/4pn2/5p2/2PP4/6P1/PP1BPPBP/RN1QK1NR": { "eco": "A90", "name": "Dutch Defense: Nimzo-Dutch Variation, Alekhine Variation" }, "rnbqk2r/ppppb1pp/4pn2/5p2/2PP4/6P1/PP2PPBP/RNBQK1NR": { "eco": "A91", "name": "Dutch Defense: Classical Variation" }, "rnbq1rk1/ppppb1pp/4p3/5p2/2PPn3/5NP1/PP2PPBP/RNBQ1RK1": { "eco": "A92", "name": "Dutch Defense: Alekhine Variation" }, "rnbq1rk1/ppppb1pp/4pn2/5p2/2PP4/5NP1/PP2PPBP/RNBQK2R": { "eco": "A92", "name": "Dutch Defense: Classical Variation" }, "rnbq1rk1/ppp1b1pp/4pn2/3p1p2/2PP4/5NP1/PP2PPBP/RNBQ1RK1": { "eco": "A92", "name": "Dutch Defense: Stonewall Variation" }, "rnbq1rk1/pp2b1pp/2p1pn2/3p1p2/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1": { "eco": "A95", "name": "Dutch Defense: Classical Variation, Stonewall Variation" }, "rnbq1rk1/ppp1b1pp/3ppn2/5p2/2PP4/5NP1/PP2PPBP/RNBQ1RK1": { "eco": "A96", "name": "Dutch Defense: Classical Variation" }, "rnbq1rk1/1pp1b1pp/3ppn2/p4p2/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1": { "eco": "A96", "name": "Dutch Defense: Classical Variation, Buenos Aires Variation" }, "rnbq1rk1/ppp1b1pp/3pp3/5p2/2PPn3/2N2NP1/PP2PPBP/R1BQ1RK1": { "eco": "A96", "name": "Dutch Defense: Classical Variation, Huisl Variation" }, "rnb1qrk1/ppp1b1pp/3ppn2/5p2/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1": { "eco": "A97", "name": "Dutch Defense: Classical Variation, Ilyin-Zhenevsky Variation" }, "rnbqkbnr/ppppp1pp/5p2/8/4P3/8/PPPP1PPP/RNBQKBNR": { "eco": "B00", "name": "Barnes Defense" }, "rnbqkbnr/pppppp1p/8/6p1/4P3/8/PPPP1PPP/RNBQKBNR": { "eco": "B00", "name": "Borg Defense" }, "rnbqk1nr/ppppppbp/8/6p1/3PP3/8/PPP2PPP/RNBQKBNR": { "eco": "B00", "name": "Borg Defense: Borg Gambit" }, "rnbqkbnr/p2p1p1p/1p2p3/2P3p1/4P3/2P5/PP3PPP/RNBQKBNR": { "eco": "B00", "name": "Borg Defense: Langhorst Gambit" }, "rnbqkbnr/pppppp2/7p/8/3PP1pP/8/PPP2PP1/RNBQKBNR": { "eco": "B00", "name": "Borg Defense: Troon Gambit" }, "rnbqkbnr/pppp1p1p/8/4p1p1/3PP3/8/PPP2PPP/RNBQKBNR": { "eco": "B00", "name": "Borg Opening: Zilbermints Gambit" }, "rnbqkbnr/ppppppp1/7p/8/4P3/8/PPPP1PPP/RNBQKBNR": { "eco": "B00", "name": "Carr Defense" }, "rnbqkbnr/pppp1pp1/7p/4p3/3PP3/8/PPP2PPP/RNBQKBNR": { "eco": "B00", "name": "Carr Defense: Zilbermints Gambit" }, "rnbqkbnr/ppppp1pp/8/5p2/4P3/8/PPPP1PPP/RNBQKBNR": { "eco": "B00", "name": "Duras Gambit" }, "rnbq1bnr/pppppkpp/5p2/8/3PP3/8/PPP2PPP/RNBQKBNR": { "eco": "B00", "name": "Fried Fox Defense" }, "rnbqkbnr/ppppppp1/8/7p/4P3/8/PPPP1PPP/RNBQKBNR": { "eco": "B00", "name": "Goldsmith Defense" }, "rnbqkb1r/ppppppp1/5n2/7p/3PP3/8/PPP2PPP/RNBQKBNR": { "eco": "B00", "name": "Goldsmith Defense: Picklepuss Defense" }, "rn1qkbnr/p1pppppp/bp6/8/3PP3/8/PPP2PPP/RNBQKBNR": { "eco": "B00", "name": "Guatemala Defense" }, "rnbqkb1r/pppppppp/7n/8/4P3/8/PPPP1PPP/RNBQKBNR": { "eco": "B00", "name": "Hippopotamus Defense" }, "rnbqkb1r/ppppp2p/5ppn/8/2PPP3/8/PP3PPP/RNBQKBNR": { "eco": "B00", "name": "Hippopotamus Defense" }, "r1bqkbnr/pppppppp/n7/8/4P3/8/PPPP1PPP/RNBQKBNR": { "eco": "B00", "name": "Lemming Defense" }, "r1bqkbnr/pppppppp/2n5/8/4P3/8/PPPP1PPP/RNBQKBNR": { "eco": "B00", "name": "Nimzowitsch Defense" }, "r1bqkb1r/pppp1ppp/2n2n2/4p3/3PP3/2N5/PPP2PPP/R1BQKBNR": { "eco": "B00", "name": "Nimzowitsch Defense: Breyer Variation" }, "r1bqkb1r/pppppppp/2n5/4P3/6n1/5N2/PPPP1PPP/RNBQKB1R": { "eco": "B00", "name": "Nimzowitsch Defense: El Columpio Defense" }, "r1bqkb1r/pppp2pp/2n1pn2/5P2/3P4/2N5/PPP2PPP/R1BQKBNR": { "eco": "B00", "name": "Nimzowitsch Defense: Franco-Hiva Gambit" }, "r1bqkb1r/pppp2pp/2n1pn2/5P2/3P4/5N2/PPP2PPP/RNBQKB1R": { "eco": "B00", "name": "Nimzowitsch Defense: Franco-Hiva Gambit" }, "r1bqkbnr/pppp1ppp/2n1p3/8/4P3/5N2/PPPP1PPP/RNBQKB1R": { "eco": "B00", "name": "Nimzowitsch Defense: Franco-Nimzowitsch Variation" }, "r1bqkbnr/pppp1ppp/2n1p3/8/4P3/2N5/PPPP1PPP/R1BQKBNR": { "eco": "B00", "name": "Nimzowitsch Defense: French Connection" }, "r1bqkbnr/pppp1ppp/2n5/4p3/3PP3/8/PPP2PPP/RNBQKBNR": { "eco": "B00", "name": "Nimzowitsch Defense: Kennedy Variation" }, "r1bqk1nr/pppp1ppp/2n5/2b1P3/4P3/8/PPP2PPP/RNBQKBNR": { "eco": "B00", "name": "Nimzowitsch Defense: Kennedy Variation, Bielefelder Gambit" }, "r1bqkbnr/pppp2pp/2n2p2/4P3/4P3/8/PPP2PPP/RNBQKBNR": { "eco": "B00", "name": "Nimzowitsch Defense: Kennedy Variation, Hammer Gambit" }, "r1b1kbnr/pppp1ppp/2n5/4P3/4P2q/8/PPP2PPP/RNBQKBNR": { "eco": "B00", "name": "Nimzowitsch Defense: Kennedy Variation, Herford Gambit" }, "r1bqkbnr/pppp1ppp/6n1/8/4PP2/8/PPP3PP/RNBQKBNR": { "eco": "B00", "name": "Nimzowitsch Defense: Kennedy Variation, Main Line" }, "r1bqkbnr/pppp1ppp/2n5/8/4PP2/8/PPP3PP/RNBQKBNR": { "eco": "B00", "name": "Nimzowitsch Defense: Kennedy Variation, Riemann Defense" }, "r1bqkbnr/ppp2ppp/2np4/4P3/4P3/8/PPP2PPP/RNBQKBNR": { "eco": "B00", "name": "Nimzowitsch Defense: Kennedy Variation, de Smet Gambit" }, "r1bqkbnr/ppppp1pp/2n5/5p2/4P3/5N2/PPPP1PPP/RNBQKB1R": { "eco": "B00", "name": "Nimzowitsch Defense: Lean Variation" }, "r1bqkbnr/ppp1pppp/2np4/8/3PP3/8/PPP2PPP/RNBQKBNR": { "eco": "B00", "name": "Nimzowitsch Defense: Mikenas Variation" }, "r1bqkbnr/ppppp1pp/2n2p2/8/3PP3/8/PPP2PPP/RNBQKBNR": { "eco": "B00", "name": "Nimzowitsch Defense: Neo-Mongoloid Defense" }, "r1bqkbnr/pppppp1p/2n3p1/8/4P3/2N5/PPPP1PPP/R1BQKBNR": { "eco": "B00", "name": "Nimzowitsch Defense: Pirc Connection" }, "r1bqkbnr/ppp1pppp/2n5/3p4/3PP3/8/PPP2PPP/RNBQKBNR": { "eco": "B00", "name": "Nimzowitsch Defense: Scandinavian Variation" }, "r1bqkbnr/ppp1pppp/8/3P4/1n1P4/8/PPP2PPP/RNBQKBNR": { "eco": "B00", "name": "Nimzowitsch Defense: Scandinavian Variation, Aachen Gambit" }, "r1bqkbnr/1pp1pppp/p1n5/3p4/3PP3/2N5/PPP2PPP/R1BQKBNR": { "eco": "B00", "name": "Nimzowitsch Defense: Scandinavian Variation, Bogoljubov Variation, Brandics Gambit" }, "r1bqkbnr/ppp1pp1p/2n3p1/3p4/3PP3/2N5/PPP2PPP/R1BQKBNR": { "eco": "B00", "name": "Nimzowitsch Defense: Scandinavian Variation, Bogoljubov Variation, Erben Gambit" }, "r1bqkbnr/ppp2ppp/2n5/3pp3/3PP3/2N5/PPP2PPP/R1BQKBNR": { "eco": "B00", "name": "Nimzowitsch Defense: Scandinavian Variation, Bogoljubov Variation, Heinola-Deppe Gambit" }, "r1bqkbnr/ppp1pppp/8/3Pn3/4p3/2N5/PPP2PPP/R1BQKBNR": { "eco": "B00", "name": "Nimzowitsch Defense: Scandinavian Variation, Bogoljubov Variation, Nimzowitsch Gambit" }, "r1bqkb1r/ppp1pppp/2n2n2/3p4/3PP3/2N5/PPP2PPP/R1BQKBNR": { "eco": "B00", "name": "Nimzowitsch Defense: Scandinavian Variation, Bogoljubov Variation, Vehre Variation" }, "r1b1kbnr/ppp1pppp/2n5/3q4/3P4/8/PPP2PPP/RNBQKBNR": { "eco": "B00", "name": "Nimzowitsch Defense: Scandinavian Variation, Exchange Variation" }, "r1bqkbnr/ppp1pppp/2np4/8/4P3/5N2/PPPP1PPP/RNBQKB1R": { "eco": "B00", "name": "Nimzowitsch Defense: Williams Variation" }, "r1bqkbnr/1ppppppp/p1n5/8/3PP3/8/PPP2PPP/RNBQKBNR": { "eco": "B00", "name": "Nimzowitsch Defense: Woodchuck Variation" }, "rnbqkbnr/p1pppppp/1p6/8/4P3/8/PPPP1PPP/RNBQKBNR": { "eco": "B00", "name": "Owen Defense" }, "r1bqkbnr/p2ppppp/1pn5/2P5/4P3/8/PPP2PPP/RNBQKBNR": { "eco": "B00", "name": "Owen Defense: Hekili-Loa Gambit" }, "rn1qkbnr/p1ppp2p/1p4p1/5P1Q/3P4/3B4/PPP2PbP/RNB1K1NR": { "eco": "B00", "name": "Owen Defense: Matovinsky Gambit" }, "rn1qkbnr/pbppp1pp/1p3p2/8/2PPP3/8/PP3PPP/RNBQKBNR": { "eco": "B00", "name": "Owen Defense: Unicorn Variation" }, "rn1qkbnr/pbpp1ppp/1p6/4p3/3PP3/5P2/PPP3PP/RNBQKBNR": { "eco": "B00", "name": "Owen Defense: Wind Gambit" }, "rnbqkbnr/ppp1pppp/3p4/8/4P3/8/PPPP1PPP/RNBQKBNR": { "eco": "B00", "name": "Pirc Defense" }, "rnbqkb1r/ppp1pppp/3p1n2/8/3PP3/8/PPP2PPP/RNBQKBNR": { "eco": "B00", "name": "Pirc Defense" }, "r1bqkbnr/pppnpppp/3p4/8/3PP3/8/PPP2PPP/RNBQKBNR": { "eco": "B00", "name": "Rat Defense: Antal Defense" }, "rnbqkb1r/ppp1pppp/5n2/3P4/5P2/8/PPPP2PP/RNBQKBNR": { "eco": "B00", "name": "Rat Defense: Fuller Gambit" }, "rnbqkbnr/1ppppppp/p7/8/4P3/8/PPPP1PPP/RNBQKBNR": { "eco": "B00", "name": "St. George Defense" }, "rn1qk1nr/1bp1ppbp/p2p2p1/1p6/3PP3/2PB1N2/PP3PPP/RNBQ1RK1": { "eco": "B00", "name": "St. George Defense: San Jorge Variation" }, "rnbqkbnr/1ppp1ppp/p7/4p3/3PP3/8/PPP2PPP/RNBQKBNR": { "eco": "B00", "name": "St. George Defense: Zilbermints Gambit" }, "rnbqkbnr/1ppppppp/8/p7/4P3/8/PPPP1PPP/RNBQKBNR": { "eco": "B00", "name": "Ware Defense" }, "r1bqkbnr/1ppppppp/2n5/p7/3PP3/8/PPP2PPP/RNBQKBNR": { "eco": "B00", "name": "Ware Defense: Snagglepuss Defense" }, "r1bqkbnr/pp1ppppp/n7/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R": { "eco": "B00", "name": "Zukertort Defense: Sicilian Knight Variation" }, "rnbqkbnr/ppp1pppp/8/3p4/4P3/8/PPPP1PPP/RNBQKBNR": { "eco": "B01", "name": "Scandinavian Defense" }, "rnb1kbnr/ppp2ppp/8/q3p3/3P4/2N5/PPP2PPP/R1BQKBNR": { "eco": "B01", "name": "Scandinavian Defense: Anderssen Counterattack" }, "rn2kbnr/ppp2ppp/8/q3p3/3P2b1/2N2N2/PPP2PPP/R1BQKB1R": { "eco": "B01", "name": "Scandinavian Defense: Anderssen Counterattack, Collijn Variation" }, "r1bqkbnr/pp2pppp/2n5/8/8/8/PPPP1PPP/RNBQKBNR": { "eco": "B01", "name": "Scandinavian Defense: Blackburne Gambit" }, "rnbqkbnr/pp2pppp/2p5/3P4/8/8/PPPP1PPP/RNBQKBNR": { "eco": "B01", "name": "Scandinavian Defense: Blackburne-Kloosterboer Gambit" }, "rn1qkbnr/ppp2ppp/4b3/8/8/8/PPPP1PPP/RNBQKBNR": { "eco": "B01", "name": "Scandinavian Defense: Boehnke Gambit" }, "rnb1kb1r/1pp1pppp/p2q1n2/8/3P4/2N2N2/PPP2PPP/R1BQKB1R": { "eco": "B01", "name": "Scandinavian Defense: Bronstein Variation" }, "rn2kb1r/ppp1pppp/5n2/q4b2/3P4/2N2N2/PPP2PPP/R1BQKB1R": { "eco": "B01", "name": "Scandinavian Defense: Classical Variation" }, "rnb1kbnr/ppp1pppp/3q4/8/8/2N5/PPPP1PPP/R1BQKBNR": { "eco": "B01", "name": "Scandinavian Defense: Gubinsky-Melts Defense" }, "rnbqkb1r/ppp2ppp/4pn2/3P4/2P5/8/PP1P1PPP/RNBQKBNR": { "eco": "B01", "name": "Scandinavian Defense: Icelandic-Palme Gambit" }, "rnbqkb1r/pp3ppp/2P2n2/4p3/3P4/8/PPP2PPP/RNBQKBNR": { "eco": "B01", "name": "Scandinavian Defense: Kadas Gambit" }, "rnbqkb1r/ppp1pppp/8/8/1nPP4/8/PP3PPP/RNBQKBNR": { "eco": "B01", "name": "Scandinavian Defense: Kiel Variation" }, "rnbqkbnr/pp3ppp/2P5/4p3/8/8/PPPP1PPP/RNBQKBNR": { "eco": "B01", "name": "Scandinavian Defense: Kloosterboer Gambit" }, "rnb1kbnr/ppp1pppp/8/q7/8/2N5/PPPP1PPP/R1BQKBNR": { "eco": "B01", "name": "Scandinavian Defense: Main Line" }, "rnb1kb1r/ppp1pppp/5n2/q7/3P4/2N5/PPP2PPP/R1BQKBNR": { "eco": "B01", "name": "Scandinavian Defense: Main Line, Mieses Variation" }, "rnbqkb1r/ppp1pppp/8/3n4/3P4/8/PPP2PPP/RNBQKBNR": { "eco": "B01", "name": "Scandinavian Defense: Marshall Variation" }, "rnb1kbnr/ppp1pppp/8/3q4/8/8/PPPP1PPP/RNBQKBNR": { "eco": "B01", "name": "Scandinavian Defense: Mieses-Kotroc Variation" }, "rnbqkb1r/ppp1pppp/5n2/3P4/8/8/PPPP1PPP/RNBQKBNR": { "eco": "B01", "name": "Scandinavian Defense: Modern Variation" }, "rn1qkb1r/ppp1pppp/8/3n4/3P2b1/5N2/PPP2PPP/RNBQKB1R": { "eco": "B01", "name": "Scandinavian Defense: Modern Variation, Gipslis Variation" }, "rnbqkb1r/p1p1pp1p/5np1/1p1P4/2PP4/8/PP3PPP/RNBQKBNR": { "eco": "B01", "name": "Scandinavian Defense: Modern Variation, Wing Gambit" }, "rnbqkb1r/pp2pppp/2p2n2/3P4/2P5/8/PP1P1PPP/RNBQKBNR": { "eco": "B01", "name": "Scandinavian Defense: Panov Transfer" }, "rn1qkb1r/ppp1pppp/5n2/3P4/3P2b1/8/PPP2PPP/RNBQKBNR": { "eco": "B01", "name": "Scandinavian Defense: Portuguese Variation" }, "r2qkb1r/pppnpppp/5n2/1B1P1b2/3P4/5P2/PPP3PP/RNBQK1NR": { "eco": "B01", "name": "Scandinavian Defense: Portuguese Variation, Portuguese Gambit" }, "rnbqkb1r/ppp1pp1p/6p1/3n4/3P4/5N2/PPP2PPP/RNBQKB1R": { "eco": "B01", "name": "Scandinavian Defense: Richter Variation" }, "rnbqkb1r/ppp1pp1p/5np1/3P4/3P4/8/PPP2PPP/RNBQKBNR": { "eco": "B01", "name": "Scandinavian Defense: Richter Variation" }, "rnb1kbnr/pp2pppp/2pq4/8/3P4/2N5/PPP2PPP/R1BQKBNR": { "eco": "B01", "name": "Scandinavian Defense: Schiller-Pytel Variation" }, "rn2kb1r/pp2pppp/2p2n2/5b2/1qBP1B2/2N5/PPP1NPPP/R2QK2R": { "eco": "B01", "name": "Scandinavian Defense: Schiller-Pytel Variation, Modern Variation" }, "rnbqkbnr/ppp2ppp/8/4p3/4N3/8/PPPP1PPP/R1BQKBNR": { "eco": "B01", "name": "Van Geet Opening: Grünfeld Defense" }, "rnbqkb1r/pppppppp/5n2/8/4P3/8/PPPP1PPP/RNBQKBNR": { "eco": "B02", "name": "Alekhine Defense" }, "rnbqkbnr/pppppppp/8/4P3/8/8/PPPP1PPP/RNBQKBNR": { "eco": "B02", "name": "Alekhine Defense: Brooklyn Variation" }, "rnbqkbnr/ppppp1pp/8/4Pp2/3P4/8/PPP2PPP/RNBQKBNR": { "eco": "B02", "name": "Alekhine Defense: Brooklyn Variation, Everglades Variation" }, "rnbqkb1r/pppppppp/8/4P3/4n3/8/PPPP1PPP/RNBQKBNR": { "eco": "B02", "name": "Alekhine Defense: Mokele Mbembe" }, "rnbqkb1r/ppppp1pp/5p2/4P3/3Pn3/8/PPP2PPP/RNBQKBNR": { "eco": "B02", "name": "Alekhine Defense: Mokele Mbembe, Modern Line" }, "rnbqkb1r/pppp1ppp/4p3/4P3/3Pn3/8/PPP2PPP/RNBQKBNR": { "eco": "B02", "name": "Alekhine Defense: Mokele Mbembe, Vavra Defense" }, "rnbqkb1r/pppppppp/8/3nP3/8/8/PPPP1PPP/RNBQKBNR": { "eco": "B02", "name": "Alekhine Defense: Normal Variation" }, "rnbqkb1r/ppp1pppp/5n2/3p4/4P3/2N5/PPPP1PPP/R1BQKBNR": { "eco": "B02", "name": "Alekhine Defense: Scandinavian Variation" }, "rnbqkb1r/pp2pppp/2p2n2/3P4/8/2N5/PPPP1PPP/R1BQKBNR": { "eco": "B02", "name": "Alekhine Defense: Scandinavian Variation, Geschev Gambit" }, "rnbqkb1r/pppppppp/8/4P3/2P2n2/8/PP1P1PPP/RNBQKBNR": { "eco": "B02", "name": "Alekhine Defense: The Squirrel" }, "rnbqkb1r/ppp2ppp/3pp3/2PnP3/2B5/2N5/PP1P1PPP/R1BQK1NR": { "eco": "B02", "name": "Alekhine Defense: Two Pawns Attack, Mikenas Variation" }, "rnbqk2r/pppp1ppp/5n2/2b1p3/4PP2/3P4/PPP3PP/RNBQKBNR": { "eco": "B02", "name": "King's Pawn Game: Clam Variation, Radisch Gambit" }, "rnbqkb1r/ppp1pppp/3p4/3nP3/3P4/8/PPP2PPP/RNBQKBNR": { "eco": "B03", "name": "Alekhine Defense" }, "rnbqkb1r/ppp1pp1p/1n1p4/4P1p1/2PP1P2/8/PP4PP/RNBQKBNR": { "eco": "B03", "name": "Alekhine Defense: Four Pawns Attack, Cambridge Gambit" }, "rnbqkb1r/ppp1pp1p/1n1p2p1/4P3/2PP1P2/8/PP4PP/RNBQKBNR": { "eco": "B03", "name": "Alekhine Defense: Four Pawns Attack, Fianchetto Variation" }, "rn1q1rk1/ppp1b1pp/1n2pp2/4Pb2/2PP4/2N2N2/PP2B1PP/R1BQ1RK1": { "eco": "B03", "name": "Alekhine Defense: Four Pawns Attack, Korchnoi Variation" }, "2kr3r/pppqbppp/1nn1p3/4Pb2/2PP4/2N1BN2/PP2B1PP/R2Q1RK1": { "eco": "B03", "name": "Alekhine Defense: Four Pawns Attack, Tartakower Variation" }, "rn1qkb1r/ppp1pppp/1n1p4/4Pb2/2PP1P2/8/PP4PP/RNBQKBNR": { "eco": "B03", "name": "Alekhine Defense: Four Pawns Attack, Trifunovic Variation" }, "rnbqkb1r/p1pppppp/8/1p1nP3/3P4/8/PPP2PPP/RNBQKBNR": { "eco": "B03", "name": "Alekhine Defense: O'Sullivan Gambit" }, "rnbqkb1r/ppp1pp1p/3p2p1/3nP3/3P4/5N2/PPP2PPP/RNBQKB1R": { "eco": "B04", "name": "Alekhine Defense: Modern Variation, Alburt Variation" }, "rnbqkb1r/ppp1pppp/8/3np3/3P4/5N2/PPP2PPP/RNBQKB1R": { "eco": "B04", "name": "Alekhine Defense: Modern Variation, Larsen Variation" }, "r1bqkb1r/ppp1pppp/2np4/3nP3/3P4/5N2/PPP2PPP/RNBQKB1R": { "eco": "B04", "name": "Alekhine Defense: Modern Variation, Larsen-Haakert Variation" }, "rnbqkb1r/ppp1pppp/1n1p4/4P3/3P4/5N2/PPP2PPP/RNBQKB1R": { "eco": "B04", "name": "Alekhine Defense: Modern Variation, Schmid Variation" }, "rn1qkb1r/pp2pppp/2pp4/3nP3/3P2b1/5N2/PPP1BPPP/RNBQK2R": { "eco": "B05", "name": "Alekhine Defense: Modern Variation, Flohr Variation" }, "rn1qkb1r/ppp1pppp/3p4/3nP3/3P2b1/5N2/PPP2PPP/RNBQKB1R": { "eco": "B05", "name": "Alekhine Defense: Modern Variation, Main Line" }, "rnbqkbnr/pppppp1p/6p1/8/4P3/8/PPPP1PPP/RNBQKBNR": { "eco": "B06", "name": "Modern Defense" }, "rnbqk1nr/ppppppbp/6p1/8/3PP3/8/PPP2PPP/RNBQKBNR": { "eco": "B06", "name": "Modern Defense" }, "rnbqk1nr/p1ppppbp/6p1/1p6/2BPP3/8/PPP2PPP/RNBQK1NR": { "eco": "B06", "name": "Modern Defense: Bishop Attack, Bücker Gambit" }, "rnbqk1nr/pppp1p1p/4p1p1/8/2BbP3/5Q2/PPP2PPP/RNB1K1NR": { "eco": "B06", "name": "Modern Defense: Bishop Attack, Monkey's Bum" }, "rnbqk1nr/pp2pp1p/2P3p1/8/2Pb4/8/PP3PPP/RNBQKBNR": { "eco": "B06", "name": "Modern Defense: Dunworthy Variation" }, "rnbqkbnr/ppppp2p/6p1/5p2/3PP3/8/PPP2PPP/RNBQKBNR": { "eco": "B06", "name": "Modern Defense: Fianchetto Gambit" }, "rnbqk1nr/pp2ppb1/2p3p1/3pP2p/3P1P2/2N5/PPP3PP/R1BQKBNR": { "eco": "B06", "name": "Modern Defense: Gurgenidze Defense" }, "rnbqk1nr/ppp1ppbp/6p1/3p4/3PP3/2N5/PPP2PPP/R1BQKBNR": { "eco": "B06", "name": "Modern Defense: Lizard Defense, Mittenberger Gambit" }, "rnbq1rk1/ppppp2p/6pb/5P2/3P4/2N5/PPP2PPP/R2QKBNR": { "eco": "B06", "name": "Modern Defense: Masur Gambit" }, "rnbqk1nr/pp1pppbp/6p1/2p5/3PP3/2N5/PPP2PPP/R1BQKBNR": { "eco": "B06", "name": "Modern Defense: Modern Pterodactyl" }, "rnbqk1nr/p1ppppbp/1p4p1/8/3PP3/2N5/PPP2PPP/R1BQKBNR": { "eco": "B06", "name": "Modern Defense: Mongredien Defense" }, "rnbqk1nr/p1ppppbp/1p4p1/8/3PP3/5N2/PPP2PPP/RNBQKB1R": { "eco": "B06", "name": "Modern Defense: Mongredien Defense" }, "rnbqkb1r/pppppp1p/5np1/8/3PP3/8/PPP2PPP/RNBQKBNR": { "eco": "B06", "name": "Modern Defense: Norwegian Defense" }, "rnbqkb1r/ppp1pp1p/3p2p1/4P2n/3P4/8/PPP1BPPP/RNBQK1NR": { "eco": "B06", "name": "Modern Defense: Norwegian Defense, Norwegian Gambit" }, "rnb1k1nr/pp2ppbp/3p2p1/q1p5/2PPP3/5N2/PP2BPPP/RNBQK2R": { "eco": "B06", "name": "Modern Defense: Semi-Averbakh Variation, Pterodactyl Variation Declined" }, "rnbqk1nr/ppp1ppbp/3p2p1/8/3PP3/2N5/PPP2PPP/R1BQKBNR": { "eco": "B06", "name": "Modern Defense: Standard Defense" }, "rnbqk1nr/pp2ppbp/2pp2p1/8/3PP3/2N2N2/PPP2PPP/R1BQKB1R": { "eco": "B06", "name": "Modern Defense: Two Knights Variation, Suttles Variation" }, "rnb1k1nr/pp2ppbp/2pp2p1/6B1/3PP3/2N2N2/PqPQ1PPP/R3KB1R": { "eco": "B06", "name": "Modern Defense: Two Knights Variation, Suttles Variation, Tal Gambit" }, "rnbqkb1r/ppppppnp/6p1/4P3/3P2P1/8/PPP2P1P/RNBQKBNR": { "eco": "B06", "name": "Norwegian Defense" }, "rnb1k1nr/pp1pppbp/6p1/q1p5/3PPP2/5N2/PPP3PP/RNBQKB1R": { "eco": "B06", "name": "Pterodactyl Defense: Austrian, Austriadactylus Western" }, "rnb1k1nr/pp1pppbp/6p1/q1p5/4PP2/2N2N2/PPPP2PP/R1BQKB1R": { "eco": "B06", "name": "Pterodactyl Defense: Austrian, Grand Prix Pterodactyl" }, "rnb1k1nr/pp1pppbp/6p1/q1p5/3PPP2/2P5/PP4PP/RNBQKBNR": { "eco": "B06", "name": "Pterodactyl Defense: Austrian, Pteranodon" }, "rnb1k1nr/pp2ppbp/3p2p1/q1p5/2PPP3/2N1B3/PP3PPP/R2QKBNR": { "eco": "B06", "name": "Pterodactyl Defense: Central, Anhanguera" }, "rnb1k1nr/pp2ppbp/3p2p1/q1pP4/2P1P3/2N5/PP3PPP/R1BQKBNR": { "eco": "B06", "name": "Pterodactyl Defense: Central, Benoni Quetzalcoatlus" }, "rnb1k1nr/pp2ppbp/3p2p1/q1P5/2P1P3/2N5/PP3PPP/R1BQKBNR": { "eco": "B06", "name": "Pterodactyl Defense: Central, Quetzalcoatlus Gambit" }, "rnb1k1nr/pp1ppp1p/6p1/q1pP4/4P3/2P5/P1P2PPP/R1BQKBNR": { "eco": "B06", "name": "Pterodactyl Defense: Eastern, Benoni Pteranodon" }, "rnb1k1nr/pp1pppbp/6p1/q1pP4/4P3/2N5/PPP2PPP/R1BQKBNR": { "eco": "B06", "name": "Pterodactyl Defense: Eastern, Benoni Pterodactyl" }, "rnb1k1nr/pp1ppp1p/6p1/q1P5/4P3/2P5/P1P2PPP/R1BQKBNR": { "eco": "B06", "name": "Pterodactyl Defense: Eastern, Pteranodon" }, "rnb1k1nr/pp1pppbp/6p1/q1P5/4P3/2N5/PPP2PPP/R1BQKBNR": { "eco": "B06", "name": "Pterodactyl Defense: Eastern, Pterodactyl" }, "rnb1k1nr/pp1pppbp/6p1/q1p5/3PP3/5NP1/PPP2P1P/RNBQKB1R": { "eco": "B06", "name": "Pterodactyl Defense: Fianchetto, King Pterodactyl" }, "rnb1k1nr/pp1pppbp/6p1/q1P5/4P3/6P1/PPP2P1P/RNBQKBNR": { "eco": "B06", "name": "Pterodactyl Defense: Fianchetto, Rhamphorhynchus" }, "rnb1k1nr/pp2ppbp/3p2p1/q1p5/3PP3/2N2N2/PPP1BPPP/R1BQK2R": { "eco": "B06", "name": "Pterodactyl Defense: Sicilian, Quetzalcoatlus" }, "rnb1k1nr/pp1pppbp/6p1/q1p5/3PP3/4BN2/PPP2PPP/RN1QKB1R": { "eco": "B06", "name": "Pterodactyl Defense: Western, Anhanguera" }, "rnb1k1nr/pp1pppbp/6p1/q7/2BNP3/8/PPP2PPP/RNBQK2R": { "eco": "B06", "name": "Pterodactyl Defense: Western, Siroccopteryx" }, "rnbqkbnr/pp2pp1p/2pp2p1/8/3PP3/2N5/PPP2PPP/R1BQKBNR": { "eco": "B06", "name": "Rat Defense: Accelerated Gurgenidze" }, "rnbqkb1r/pp2pppp/2pp1n2/8/3PP3/2N5/PPP2PPP/R1BQKBNR": { "eco": "B07", "name": "Czech Defense" }, "r1bqkb1r/pppn1ppp/3p1n2/4p3/3PPP2/2N5/PPP3PP/R1BQKBNR": { "eco": "B07", "name": "Lion Defense: Anti-Philidor, Lion's Cave" }, "r1bqkb1r/pp1n1ppp/2p2n2/3p4/2BQPP2/2N2N2/PPP3PP/R1B1K2R": { "eco": "B07", "name": "Lion Defense: Anti-Philidor, Lion's Cave, Lion Claw Gambit" }, "r1bqk2r/pp1nbppp/2pp1n2/4p3/3PP3/2N2N2/PPP1BPPP/R1BQ1RK1": { "eco": "B07", "name": "Philidor Defense: Lion Variation, Lion's Claw" }, "rnbqkb1r/ppp1pp1p/3p1np1/8/3PP3/2N5/PPP2PPP/R1BQKBNR": { "eco": "B07", "name": "Pirc Defense" }, "rn1qkb1r/pp2pp1p/2pp1np1/8/3PP1b1/2N1B3/PPPQ1PPP/R3KBNR": { "eco": "B07", "name": "Pirc Defense: 150 Attack, Inner Doll Defense" }, "rnbqk2r/ppp1ppbp/3p1np1/8/3PP3/2N2N2/PPP2PPP/R1BQKB1R": { "eco": "B08", "name": "Pirc Defense: Classical Variation" }, "r1bq1rk1/ppp1ppbp/2np1np1/8/3PP3/2N2N2/PPP1BPPP/R1BQ1RK1": { "eco": "B08", "name": "Pirc Defense: Classical Variation, Quiet System, Chigorin Line" }, "rnbq1rk1/pp2ppbp/2pp1np1/8/3PP3/2N2N2/PPP1BPPP/R1BQ1RK1": { "eco": "B08", "name": "Pirc Defense: Classical Variation, Quiet System, Czech Defense" }, "rn1q1rk1/ppp1ppbp/3p1np1/8/3PP1b1/2N2N2/PPP1BPPP/R1BQ1RK1": { "eco": "B08", "name": "Pirc Defense: Classical Variation, Quiet System, Parma Defense" }, "rnbq1rk1/ppp1ppbp/3p1np1/8/3PPP2/2N2N2/PPP3PP/R1BQKB1R": { "eco": "B09", "name": "Pirc Defense: Austrian Attack" }, "rnbqk2r/pp2ppbp/3p1np1/2p5/3PPP2/2N2N2/PPP3PP/R1BQKB1R": { "eco": "B09", "name": "Pirc Defense: Austrian Attack, Dragon Formation" }, "rnbqkbnr/pp1ppppp/2p5/8/4P3/8/PPPP1PPP/RNBQKBNR": { "eco": "B10", "name": "Caro-Kann Defense" }, "rnbqkbnr/pp2pppp/2p5/3p4/4P3/2N5/PPPP1PPP/R1BQKBNR": { "eco": "B10", "name": "Caro-Kann Defense" }, "rnbqkbnr/pp2pppp/2p5/3p4/2P1P3/8/PP1P1PPP/RNBQKBNR": { "eco": "B10", "name": "Caro-Kann Defense: Accelerated Panov Attack" }, "rnbqkb1r/pp2pppp/5n2/3P4/8/8/PP1P1PPP/RNBQKBNR": { "eco": "B10", "name": "Caro-Kann Defense: Accelerated Panov Attack, Modern Variation" }, "rnbqkbnr/pp1p1ppp/2p5/4p3/2P1P3/8/PP1P1PPP/RNBQKBNR": { "eco": "B10", "name": "Caro-Kann Defense: Accelerated Panov Attack, Open Variation" }, "rnb1kbnr/pp2pppp/2p5/3q4/2P5/8/PP1P1PPP/RNBQKBNR": { "eco": "B10", "name": "Caro-Kann Defense: Accelerated Panov Attack, Pseudo-Scandinavian" }, "rn1qkbnr/pp2pppp/2p5/3p4/4P1b1/2N2N2/PPPP1PPP/R1BQKB1R": { "eco": "B11", "name": "Caro-Kann Defense: Two Knights Attack, Mindeno Variation" }, "rn1qkbnr/pp2pppp/2p5/3p4/4P3/2N2b1P/PPPP1PP1/R1BQKB1R": { "eco": "B11", "name": "Caro-Kann Defense: Two Knights Attack, Mindeno Variation, Exchange Line" }, "rn1qkbnr/pp2pppp/2p5/3p3b/4P3/2N2N1P/PPPP1PP1/R1BQKB1R": { "eco": "B11", "name": "Caro-Kann Defense: Two Knights Attack, Mindeno Variation, Retreat Line" }, "rnbqkbnr/pp2pppp/2p5/3p4/3PP3/8/PPP2PPP/RNBQKBNR": { "eco": "B12", "name": "Caro-Kann Defense" }, "rnbqkbnr/pp2pppp/8/2ppP3/3P4/8/PPP2PPP/RNBQKBNR": { "eco": "B12", "name": "Caro-Kann Defense: Advance Variation, Botvinnik-Carls Defense" }, "rn2kbnr/pp2pppp/1qp5/3pPb2/3P4/2N5/PPP2PPP/R1BQKBNR": { "eco": "B12", "name": "Caro-Kann Defense: Advance Variation, Van der Wiel Attack, Dreyev Defense" }, "r1bqkbnr/pp1ppppp/n1p5/8/3PP3/8/PPP2PPP/RNBQKBNR": { "eco": "B12", "name": "Caro-Kann Defense: De Bruycker Defense" }, "r1bqkbnr/ppnppppp/2p5/8/3PP3/2N5/PPP2PPP/R1BQKBNR": { "eco": "B12", "name": "Caro-Kann Defense: De Bruycker Defense" }, "rnb1kbnr/pp2pppp/1qp5/3p4/3PP3/8/PPPN1PPP/R1BQKBNR": { "eco": "B12", "name": "Caro-Kann Defense: Edinburgh Variation" }, "rnbqkb1r/pp1ppppp/2p2n2/8/3PP3/8/PPP2PPP/RNBQKBNR": { "eco": "B12", "name": "Caro-Kann Defense: Masi Variation" }, "rnbqkbnr/pp1pp1pp/2p5/5p2/3PP3/8/PPP2PPP/RNBQKBNR": { "eco": "B12", "name": "Caro-Kann Defense: Massachusetts Defense" }, "r1bqkb1r/pp2pppp/2n2n2/3p4/2PP4/2N5/PP3PPP/R1BQKBNR": { "eco": "B13", "name": "Caro-Kann Defense: Panov Attack, Modern Defense" }, "r1bqkb1r/pp3ppp/2n1pn2/3p2B1/2PP4/2N5/PP3PPP/R2QKBNR": { "eco": "B13", "name": "Caro-Kann Defense: Panov Attack, Modern Defense, Carlsbad Line" }, "r1b1kb1r/pp2pppp/2n2n2/q2p2B1/2PP4/2N5/PP3PPP/R2QKBNR": { "eco": "B13", "name": "Caro-Kann Defense: Panov Attack, Modern Defense, Czerniak Line" }, "r2qkb1r/pp2pppp/2n2n2/3p4/2PP2b1/2N2N2/PP3PPP/R1BQKB1R": { "eco": "B13", "name": "Caro-Kann Defense: Panov Attack, Modern Defense, Mieses Line" }, "r1b1kb1r/pp2pppp/1qn2n2/3p2B1/2PP4/2N5/PP3PPP/R2QKBNR": { "eco": "B13", "name": "Caro-Kann Defense: Panov Attack, Modern Defense, Reifir-Spielmann Line" }, "r1bqkb1r/pp2pppp/5n2/n2P2B1/2p5/2N5/PP3PPP/R2QKBNR": { "eco": "B13", "name": "Caro-Kann Defense: Panov-Botvinnik, Herzog Defense" }, "rnbqkb1r/pp3ppp/4pn2/3p4/2PP4/2N5/PP3PPP/R1BQKBNR": { "eco": "B14", "name": "Caro-Kann Defense: Panov Attack" }, "rnbqkb1r/pp2pp1p/5np1/3p4/2PP4/2N5/PP3PPP/R1BQKBNR": { "eco": "B14", "name": "Caro-Kann Defense: Panov Attack, Fianchetto Defense" }, "rnbqk2r/pp2ppbp/5np1/3P4/3P4/2N5/PP3PPP/R1BQKBNR": { "eco": "B14", "name": "Caro-Kann Defense: Panov Attack, Fianchetto Defense, Fianchetto Gambit" }, "rnbqk2r/pp3ppp/4pn2/3p4/1bPP4/2N2N2/PP3PPP/R1BQKB1R": { "eco": "B14", "name": "Nimzo-Indian Defense: Panov Attack, Main Line" }, "rnbqkbnr/pp2ppp1/2p4p/8/3PN3/8/PPP2PPP/R1BQKBNR": { "eco": "B15", "name": "Caro-Kann Defense: Finnish Variation" }, "rnbqkbnr/p3pppp/2p5/1p1p4/3PP3/2N5/PPP2PPP/R1BQKBNR": { "eco": "B15", "name": "Caro-Kann Defense: Gurgenidze Counterattack" }, "rnbqkbnr/pp2pp1p/2p3p1/3p4/3PP3/2N5/PPP2PPP/R1BQKBNR": { "eco": "B15", "name": "Caro-Kann Defense: Gurgenidze System" }, "rnbqkb1r/pp3ppp/2p2p2/8/3P4/8/PPP2PPP/R1BQKBNR": { "eco": "B15", "name": "Caro-Kann Defense: Tartakower Variation" }, "rnbqkb1r/pp2pp1p/2p2p2/8/3P4/8/PPP2PPP/R1BQKBNR": { "eco": "B16", "name": "Caro-Kann Defense: Bronstein-Larsen Variation" }, "r1bqkbnr/pp1npppp/2p5/8/3PN3/8/PPP2PPP/R1BQKBNR": { "eco": "B17", "name": "Caro-Kann Defense: Karpov Variation" }, "r1bqkbnr/pp2pppp/2p2n2/6N1/3P4/8/PPP2PPP/R1BQKBNR": { "eco": "B17", "name": "Caro-Kann Defense: Karpov Variation, Modern Variation, Ivanchuk Defense" }, "r1bqkb1r/pp3ppp/1np1pn2/6N1/2BP4/8/PPP1QPPP/R1B1K1NR": { "eco": "B17", "name": "Caro-Kann Defense: Karpov Variation, Smyslov Variation" }, "r1bqkb1r/pp2pppp/2p2n2/8/2BP4/8/PPP2PPP/R1BQK1NR": { "eco": "B17", "name": "Caro-Kann Defense: Karpov Variation, Tiviakov-Fischer Attack" }, "rn1qkbnr/pp2pppp/2p5/5b2/3PN3/8/PPP2PPP/R1BQKBNR": { "eco": "B18", "name": "Caro-Kann Defense: Classical Variation" }, "r2qkbnr/pp1nppp1/2p3bp/8/3P3P/5NN1/PPP2PP1/R1BQKB1R": { "eco": "B19", "name": "Caro-Kann Defense: Classical Variation" }, "r2qk2r/pp1nbpp1/2p1pn1p/7P/3P4/3Q1NN1/PPPB1PP1/2KR3R": { "eco": "B19", "name": "Caro-Kann Defense: Classical Variation, Lobron System" }, "r2qk2r/pp1n1pp1/2pbpn1p/7P/3P4/3Q1NN1/PPPB1PP1/2KR3R": { "eco": "B19", "name": "Caro-Kann Defense: Classical Variation, Seirawan Variation" }, "rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR": { "eco": "B20", "name": "Sicilian Defense" }, "r1bqkbnr/pp2ppp1/2np4/2p4p/2P1P3/2N3P1/PP1P1P1P/R1BQKBNR": { "eco": "B20", "name": "Sicilian Defense: Gloria Variation" }, "rnbqkbnr/p2ppppp/1p6/2p5/4P3/1P6/P1PP1PPP/RNBQKBNR": { "eco": "B20", "name": "Sicilian Defense: Snyder Variation, Queen Fianchetto Variation" }, "rnbqkbnr/pp1ppppp/8/8/4P3/p7/2PP1PPP/RNBQKBNR": { "eco": "B20", "name": "Sicilian Defense: Wing Gambit, Carlsbad Variation" }, "r1b1kbnr/pp3ppp/2n1q3/4p3/1pP5/P4N2/1B1P1PPP/RN1QKB1R": { "eco": "B20", "name": "Sicilian Defense: Wing Gambit, Romanian Defense" }, "rnbqkbnr/pp2pppp/8/2p5/4pP2/5N2/PPPP2PP/RNBQKB1R": { "eco": "B21", "name": "Bird Opening: Dutch Variation, Batavo Gambit" }, "rnbqkb1r/pp2pppp/5n2/2pP4/5P2/8/PPPP2PP/RNBQKBNR": { "eco": "B21", "name": "Sicilian Defense: McDonnell Attack, Tal Gambit" }, "rnbqkb1r/1p3ppp/p2ppn2/8/2B1P3/2N2N2/PP3PPP/R1BQ1RK1": { "eco": "B21", "name": "Sicilian Defense: Smith-Morra Gambit Accepted, Chicago Defense" }, "r1bqkb1r/1p2pppp/p1np1n2/8/2B1P3/2N2N2/PP3PPP/R1BQ1RK1": { "eco": "B21", "name": "Sicilian Defense: Smith-Morra Gambit Accepted, Classical Formation" }, "r1bqkbnr/pp1ppp1p/2n3p1/8/4P3/2N2N2/PP3PPP/R1BQKB1R": { "eco": "B21", "name": "Sicilian Defense: Smith-Morra Gambit Accepted, Fianchetto Defense" }, "rnbqkbnr/1p1p1ppp/p3p3/8/4P3/2N2N2/PP3PPP/R1BQKB1R": { "eco": "B21", "name": "Sicilian Defense: Smith-Morra Gambit Accepted, Kan Formation" }, "r1b1k1nr/1pqp1ppp/p1nbp3/8/2B1P3/2N2N2/PP2QPPP/R1B2RK1": { "eco": "B21", "name": "Sicilian Defense: Smith-Morra Gambit Accepted, Larsen Defense" }, "r1bqk1nr/pp1p1ppp/2n1p3/2b5/2B1P3/2N2N2/PP3PPP/R1BQK2R": { "eco": "B21", "name": "Sicilian Defense: Smith-Morra Gambit Accepted, Morphy Defense" }, "r1bqk1nr/3p1ppp/p1n1p3/1pb5/4P3/1BN2N2/PP3PPP/R1BQ1RK1": { "eco": "B21", "name": "Sicilian Defense: Smith-Morra Gambit Accepted, Morphy Defense Deferred" }, "r1bqkbnr/1p1p1ppp/p1n1p3/8/2B1P3/2N2N2/PP3PPP/R1BQK2R": { "eco": "B21", "name": "Sicilian Defense: Smith-Morra Gambit Accepted, Paulsen Formation" }, "r1bqk1nr/pp1p1ppp/2n1p3/8/1bB1P3/2N2N2/PP3PPP/R1BQK2R": { "eco": "B21", "name": "Sicilian Defense: Smith-Morra Gambit Accepted, Pin Defense" }, "r1bqkbnr/pp3ppp/2npp3/8/2B1P3/2N2N2/PP3PPP/R1BQK2R": { "eco": "B21", "name": "Sicilian Defense: Smith-Morra Gambit Accepted, Scheveningen Formation" }, "r1bqkbnr/5ppp/p1npp3/1p6/2B1P3/2N2N2/PP2QPPP/R1B2RK1": { "eco": "B21", "name": "Sicilian Defense: Smith-Morra Gambit Accepted, Sozin Formation" }, "rnbqkb1r/1p1pnppp/p3p3/8/2B1P3/2N2N2/PP3PPP/R1BQK2R": { "eco": "B21", "name": "Sicilian Defense: Smith-Morra Gambit Accepted, Taimanov Formation" }, "rnbqkb1r/pp1ppppp/5n2/8/3pP3/2P5/PP3PPP/RNBQKBNR": { "eco": "B21", "name": "Sicilian Defense: Smith-Morra Gambit Declined, Alapin Formation" }, "rnbqkbnr/pp1ppppp/8/8/4P3/2Pp4/PP3PPP/RNBQKBNR": { "eco": "B21", "name": "Sicilian Defense: Smith-Morra Gambit Declined, Push Variation" }, "rnbqkbnr/pp2pppp/8/3p4/3pP3/2P5/PP3PPP/RNBQKBNR": { "eco": "B21", "name": "Sicilian Defense: Smith-Morra Gambit Declined, Scandinavian Formation" }, "rnb1kbnr/pp1ppppp/8/q7/3pP3/2P5/PP3PPP/RNBQKBNR": { "eco": "B21", "name": "Sicilian Defense: Smith-Morra Gambit Declined, Wing Formation" }, "2bqkbnr/r4ppp/p1npp3/1p6/4P3/1BN2N2/PP2QPPP/R1B2RK1": { "eco": "B21", "name": "Sicilian Defense: Smith-Morra Gambit, Chicago Defense" }, "rnb1kbnr/pp2pppp/8/2pq4/8/2P5/PP1P1PPP/RNBQKBNR": { "eco": "B22", "name": "Sicilian Defense: Alapin Variation, Barmen Defense" }, "r3kbnr/pp2pppp/2n5/3q4/3P2b1/5N2/PP3PPP/RNBQKB1R": { "eco": "B22", "name": "Sicilian Defense: Alapin Variation, Barmen Defense, Central Exchange" }, "r3kbnr/pp2pppp/8/8/3n4/2N2P2/PP3P1P/R1B1KB1R": { "eco": "B22", "name": "Sicilian Defense: Alapin Variation, Barmen Defense, Endgame Variation" }, "rn2kb1r/pp2pppp/5n2/2pq4/3P2b1/2P2N2/PP3PPP/RNBQKB1R": { "eco": "B22", "name": "Sicilian Defense: Alapin Variation, Barmen Defense, Modern Line" }, "rnbqkb1r/pp1ppppp/8/3nP3/3p4/2P5/PP3PPP/RNBQKBNR": { "eco": "B22", "name": "Sicilian Defense: Alapin Variation, Smith-Morra Declined" }, "r1b1kb1r/ppqppp1p/1nn5/4P1p1/2p5/2P2N2/PPBPQPPP/RNB1K2R": { "eco": "B22", "name": "Sicilian Defense: Alapin Variation, Stoltz Attack, Ivanchuk Line" }, "rnbqkbnr/pp1p1ppp/8/4p3/3pP3/2P5/PP3PPP/RNBQKBNR": { "eco": "B22", "name": "Sicilian Defense: Smith-Morra Gambit Declined, Center Formation" }, "rnbqkbnr/pp1p1ppp/4p3/2p5/4P3/2N5/PPPP1PPP/R1BQKBNR": { "eco": "B23", "name": "Sicilian Defense: Closed" }, "rnbqkbnr/pp3ppp/4p3/2pp4/4P3/2N3P1/PPPP1P1P/R1BQKBNR": { "eco": "B23", "name": "Sicilian Defense: Closed, Korchnoi Defense" }, "r1bqkbnr/pp1ppppp/2n5/2p5/4P3/2N5/PPPP1PPP/R1BQKBNR": { "eco": "B23", "name": "Sicilian Defense: Closed, Traditional" }, "r1bqkbnr/pp1ppp1p/2n3p1/2p5/4P3/2N3P1/PPPP1P1P/R1BQKBNR": { "eco": "B24", "name": "Sicilian Defense: Closed" }, "r1bqk1nr/pp1pppbp/2n3p1/2p5/4P3/2N3P1/PPPP1PBP/R1BQK1NR": { "eco": "B24", "name": "Sicilian Defense: Closed" }, "r1bqk1nr/pp2ppbp/2np2p1/2p5/4P3/2NP2P1/PPP2PBP/R1BQK1NR": { "eco": "B25", "name": "Sicilian Defense: Closed" }, "r1bqk1nr/pp3pbp/2np2p1/2p1p3/4PP2/2NP2P1/PPP3BP/R1BQK1NR": { "eco": "B25", "name": "Sicilian Defense: Closed, Botvinnik Defense" }, "r1bqk1nr/pp3pbp/2np2p1/2p1p3/4P3/2NP2P1/PPP1NPBP/R1BQK2R": { "eco": "B25", "name": "Sicilian Defense: Closed, Botvinnik Defense" }, "r1bqk2r/pp2npbp/2np2p1/2p1p3/4PP2/2NP2PN/PPP3BP/R1BQK2R": { "eco": "B25", "name": "Sicilian Defense: Closed, Botvinnik Defense, Edge Variation" }, "rnb1k1nr/pp1pppbp/6p1/q1p5/3PP3/2N2N2/PPP2PPP/R1BQKB1R": { "eco": "B27", "name": "Modern Defense: Pterodactyl Variation" }, "rnb1k1nr/pp1pppbp/6p1/q1p5/3PP3/2P2N2/PP3PPP/RNBQKB1R": { "eco": "B27", "name": "Pterodactyl Defense: Western, Pterodactyl" }, "rnb1k1nr/pp1pppbp/6p1/q1P5/4P3/5N2/PPP2PPP/RNBQKB1R": { "eco": "B27", "name": "Pterodactyl Defense: Western, Rhamphorhynchus" }, "rnbqk1nr/pp1ppp1p/6pb/2p5/2P1P3/5N2/PP1P1PPP/RNBQKB1R": { "eco": "B27", "name": "Sicilian Defense: Acton Extension" }, "rnbqkbnr/pp1pp1pp/8/2p2p2/4P3/5N2/PPPP1PPP/RNBQKB1R": { "eco": "B27", "name": "Sicilian Defense: Brussels Gambit" }, "rnbqkbnr/pp1pppp1/7p/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R": { "eco": "B27", "name": "Sicilian Defense: Bücker Variation" }, "rnbqkb1r/pp1pp1pp/7n/2p2P2/8/5N2/PPPP1PPP/RNBQKB1R": { "eco": "B27", "name": "Sicilian Defense: Double-Dutch Gambit" }, "rnbqkbnr/pp1pp2p/6p1/2p2p2/3PP3/5N2/PPP2PPP/RNBQKB1R": { "eco": "B27", "name": "Sicilian Defense: Frederico Variation" }, "rnbqkbnr/pp1ppp1p/6p1/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R": { "eco": "B27", "name": "Sicilian Defense: Hyperaccelerated Dragon" }, "rnbqk1nr/pp1pppbp/6p1/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R": { "eco": "B27", "name": "Sicilian Defense: Hyperaccelerated Pterodactyl" }, "rnb1k1nr/pp1ppp1p/6p1/2P5/4P3/2q2N2/P1P2PPP/R1BQKB1R": { "eco": "B27", "name": "Sicilian Defense: Hyperaccelerated Pterodactyl, Exchange Variation" }, "rnbqkbnr/pp1p1ppp/8/2p1p3/4P3/5N2/PPPP1PPP/RNBQKB1R": { "eco": "B27", "name": "Sicilian Defense: Jalalabad Variation" }, "rnbqkbnr/p2ppppp/1p6/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R": { "eco": "B27", "name": "Sicilian Defense: Katalimov Variation" }, "rnb1kbnr/pp1ppppp/8/q1p5/4P3/5N2/PPPP1PPP/RNBQKB1R": { "eco": "B27", "name": "Sicilian Defense: Mongoose Variation" }, "rnbqkbnr/p2ppppp/8/1pp5/4P3/5N2/PPPP1PPP/RNBQKB1R": { "eco": "B27", "name": "Sicilian Defense: Polish Gambit" }, "rnb1kbnr/ppqppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R": { "eco": "B27", "name": "Sicilian Defense: Quinteros Variation" }, "rnbqkbnr/1p1ppppp/p7/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R": { "eco": "B28", "name": "Sicilian Defense: O'Kelly Variation" }, "rnbqkbnr/1p1p1ppp/p3p3/2p5/2P1P3/5N2/PP1P1PPP/RNBQKB1R": { "eco": "B28", "name": "Sicilian Defense: O'Kelly Variation, Maróczy Bind, Paulsen Line" }, "rnbqkbnr/1p2pppp/p2p4/2p5/2P1P3/5N2/PP1P1PPP/RNBQKB1R": { "eco": "B28", "name": "Sicilian Defense: O'Kelly Variation, Maróczy Bind, Robatsch Line" }, "rnbqkbnr/1p1p1ppp/p7/4p3/3NP3/8/PPP2PPP/RNBQKB1R": { "eco": "B28", "name": "Sicilian Defense: O'Kelly Variation, Normal System, Taimanov Line" }, "rnbqkb1r/1p1ppppp/p4n2/2p5/4P3/2P2N2/PP1P1PPP/RNBQKB1R": { "eco": "B28", "name": "Sicilian Defense: O'Kelly Variation, Venice System, Barcza Line" }, "rnbqkb1r/1p2pppp/p4n2/2pP4/8/2P2N2/PP1P1PPP/RNBQKB1R": { "eco": "B28", "name": "Sicilian Defense: O'Kelly Variation, Venice System, Gambit Line" }, "rnbqkbnr/3ppppp/p7/1pp5/4P3/2P2N2/PP1P1PPP/RNBQKB1R": { "eco": "B28", "name": "Sicilian Defense: O'Kelly Variation, Venice System, Ljubojevic Line" }, "rnbqkbnr/1p2pppp/p2p4/2p5/4P3/2P2N2/PP1P1PPP/RNBQKB1R": { "eco": "B28", "name": "Sicilian Defense: O'Kelly Variation, Venice System, Steiner Line" }, "rnbqkb1r/pp1ppppp/5n2/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R": { "eco": "B29", "name": "Sicilian Defense: Nimzowitsch Variation" }, "rnbqkb1r/pp1ppppp/8/2p1P3/8/2n2N2/PPPP1PPP/R1BQKB1R": { "eco": "B29", "name": "Sicilian Defense: Nimzowitsch Variation, Exchange Variation" }, "r1bqkb1r/pp1p1ppp/2n5/2ppP3/3P4/5N2/PPP2PPP/R1BQKB1R": { "eco": "B29", "name": "Sicilian Defense: Nimzowitsch Variation, Main Line" }, "r1bqk1nr/pp3ppp/2np4/2p1p1b1/2B1P3/2NP4/PPPN1PPP/R1BQK2R": { "eco": "B30", "name": "Sicilian Defense: Closed, Anti-Sveshnikov Variation, Kharlov-Kramnik Line" }, "r1bqkbnr/pp1ppppp/2n5/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R": { "eco": "B30", "name": "Sicilian Defense: Old Sicilian" }, "rnbqkbnr/pp1ppppp/8/1Bp5/4P3/5N2/PPPP1PPP/RNBQK2R": { "eco": "B30", "name": "Sicilian Defense: Rossolimo Variation, Brooklyn Retreat Defense" }, "r1bqkbnr/pp1ppp1p/2n3p1/1Bp5/4P3/5N2/PPPP1PPP/RNBQK2R": { "eco": "B31", "name": "Sicilian Defense: Nyezhmetdinov-Rossolimo Attack, Fianchetto Variation" }, "r1bqkbnr/pp1ppp1p/2n3p1/8/3NP3/8/PPP2PPP/RNBQKB1R": { "eco": "B32", "name": "Sicilian Defense: Accelerated Dragon" }, "r1b1kbnr/ppqppppp/2n5/8/3NP3/8/PPP2PPP/RNBQKB1R": { "eco": "B32", "name": "Sicilian Defense: Flohr Variation" }, "r1bqkbnr/pp1p1ppp/2n1p3/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R": { "eco": "B32", "name": "Sicilian Defense: Franco-Sicilian Variation" }, "r1b1kbnr/pp1ppppp/1qn5/8/3NP3/8/PPP2PPP/RNBQKB1R": { "eco": "B32", "name": "Sicilian Defense: Godiva Variation" }, "r1bqkbnr/pp3ppp/2np4/1N2p3/4P3/8/PPP2PPP/RNBQKB1R": { "eco": "B32", "name": "Sicilian Defense: Kalashnikov Variation" }, "r1bqkbnr/pp1p1ppp/2n5/4p3/3NP3/8/PPP2PPP/RNBQKB1R": { "eco": "B32", "name": "Sicilian Defense: Löwenthal Variation" }, "r1bqkbnr/pp2pppp/2n5/3p4/3NP3/8/PPP2PPP/RNBQKB1R": { "eco": "B32", "name": "Sicilian Defense: Nimzo-American Variation" }, "r1bqkbnr/1p1p1ppp/p1n5/4p3/2PNP3/8/PP3PPP/RNBQKB1R": { "eco": "B32", "name": "Sicilian Defense: O'Kelly Variation, Maróczy Bind, Geller Line" }, "r1bqkbnr/pp1ppppp/2n5/8/3pP3/5N2/PPP2PPP/RNBQKB1R": { "eco": "B32", "name": "Sicilian Defense: Open" }, "r1bqk2r/pp1p1ppp/2n1pn2/1Nb5/4P3/2N5/PPP2PPP/R1BQKB1R": { "eco": "B33", "name": "Sicilian Defense: Four Knights Variation, Cobra Variation" }, "r1bqkb1r/pp1p1ppp/2n2n2/4p3/3NP3/2N5/PPP2PPP/R1BQKB1R": { "eco": "B33", "name": "Sicilian Defense: Lasker-Pelikan Variation" }, "r2qkb1r/1p3ppp/p1npbn2/4p1B1/4P3/N1N5/PPP2PPP/R2QKB1R": { "eco": "B33", "name": "Sicilian Defense: Lasker-Pelikan Variation, Bird Variation" }, "r1bqkb1r/5ppp/p1np1n2/1p2p1B1/4P3/N1N5/PPP2PPP/R2QKB1R": { "eco": "B33", "name": "Sicilian Defense: Lasker-Pelikan Variation, Sveshnikov Variation" }, "r1bqkb1r/5p1p/p1np4/1p1Npp2/4P3/N7/PPP2PPP/R2QKB1R": { "eco": "B33", "name": "Sicilian Defense: Lasker-Pelikan Variation, Sveshnikov Variation" }, "r1bqk2r/5pbp/p1np1p2/1p1Np3/4P3/N7/PPP2PPP/R2QKB1R": { "eco": "B33", "name": "Sicilian Defense: Lasker-Pelikan Variation, Sveshnikov Variation, Novosibirsk Variation" }, "r1bqkb1r/pp1ppppp/2n2n2/8/3NP3/8/PPP2PPP/RNBQKB1R": { "eco": "B33", "name": "Sicilian Defense: Open" }, "r1bqk2r/pp2ppbp/2np1np1/8/2BNP3/2N1B3/PPP2PPP/R2QK2R": { "eco": "B35", "name": "Sicilian Defense: Dragon Variation, Modern Bc4 Variation" }, "r1bqkb1r/pp2pp1p/3p1np1/8/2PQP3/2N5/PP3PPP/R1B1KB1R": { "eco": "B36", "name": "Sicilian Defense: Accelerated Dragon, Maróczy Bind, Gurgenidze Variation" }, "r1bqk1nr/pp1pppbp/2n3p1/8/2PNP3/8/PP3PPP/RNBQKB1R": { "eco": "B37", "name": "Sicilian Defense: Accelerated Fianchetto, Maróczy Bind" }, "r1bqk2r/pp2ppbp/2np2pn/8/2P1P3/8/PPN1BPPP/RNBQK2R": { "eco": "B37", "name": "Sicilian Defense: Accelerated Fianchetto, Simagin Variation" }, "r1bqk2r/pp1pppbp/2n3p1/8/2PNP1n1/2N1B3/PP3PPP/R2QKB1R": { "eco": "B39", "name": "Sicilian Defense: Accelerated Dragon, Maróczy Bind, Breyer Variation" }, "r1bqkb1r/pp1p1ppp/2n1p3/2pnP3/3P4/2P2N2/PP3PPP/RNBQKB1R": { "eco": "B40", "name": "Sicilian Defense: Alapin Variation, Sherzer Variation" }, "r1bqkb1r/pp1p1ppp/2n1pn2/8/3NP3/2N5/PPP2PPP/R1BQKB1R": { "eco": "B40", "name": "Sicilian Defense: Four Knights Variation" }, "rnbqkbnr/pp1p1ppp/4p3/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R": { "eco": "B40", "name": "Sicilian Defense: French Variation" }, "rnbqkb1r/pp1p1ppp/4pn2/8/3NP3/8/PPP2PPP/RNBQKB1R": { "eco": "B40", "name": "Sicilian Defense: French Variation, Normal" }, "rnbqkbnr/pp1p1ppp/4p3/8/3pP3/5N2/PPP2PPP/RNBQKB1R": { "eco": "B40", "name": "Sicilian Defense: French Variation, Open" }, "rnb1kb1r/pp1p1ppp/1q2pn2/8/3NP3/2N5/PPP2PPP/R1BQKB1R": { "eco": "B40", "name": "Sicilian Defense: Gaw-Paw Variation" }, "rnb1kbnr/pp1p1ppp/1q2p3/8/3NP3/8/PPP2PPP/RNBQKB1R": { "eco": "B40", "name": "Sicilian Defense: Kveinis Variation" }, "rnbqkbnr/pp3ppp/4p3/2pp4/3PP3/5N2/PPP2PPP/RNBQKB1R": { "eco": "B40", "name": "Sicilian Defense: Marshall Counterattack" }, "rnbqk1nr/pp1p1ppp/4p3/2b5/3NP3/8/PPP2PPP/RNBQKB1R": { "eco": "B40", "name": "Sicilian Defense: Paulsen-Basman Defense" }, "rnbqk2r/pp1p1ppp/4pn2/8/1b1NP3/2N5/PPP2PPP/R1BQKB1R": { "eco": "B40", "name": "Sicilian Defense: Pin Variation" }, "rnbqk2r/pp1p1ppp/5n2/4p3/1b1NP3/2NB4/PPP2PPP/R1BQK2R": { "eco": "B40", "name": "Sicilian Defense: Pin Variation, Jaffe Variation" }, "rnbqkbnr/1p1p1ppp/p3p3/8/3NP3/8/PPP2PPP/RNBQKB1R": { "eco": "B41", "name": "Sicilian Defense: Kan Variation" }, "r1bqk2r/1p1p1ppp/p1n1pn2/8/1bPNP3/2NB4/PP3PPP/R1BQK2R": { "eco": "B41", "name": "Sicilian Defense: Kan Variation, Maróczy Bind, Bronstein Variation" }, "rnbqkbnr/1p1p1p1p/p3p1p1/8/2PNP3/8/PP3PPP/RNBQKB1R": { "eco": "B41", "name": "Sicilian Defense: Kan Variation, Maróczy Bind, Hedgehog Variation" }, "rnbqkb1r/1p3p1p/p2ppnp1/8/2PNP3/3B4/PP3PPP/RNBQ1RK1": { "eco": "B42", "name": "Sicilian Defense: Kan Variation, Gipslis Variation" }, "rnbqk1nr/1p1p1ppp/p3p3/2b5/3NP3/3B4/PPP2PPP/RNBQK2R": { "eco": "B42", "name": "Sicilian Defense: Kan Variation, Polugaevsky Variation" }, "rnbqkbnr/1p1p1p1p/p3p1p1/8/3NP3/3B4/PPP2PPP/RNBQK2R": { "eco": "B42", "name": "Sicilian Defense: Kan Variation, Swiss Cheese Variation" }, "rnbqkbnr/3p1ppp/p3p3/1p6/3NP3/2N5/PPP2PPP/R1BQKB1R": { "eco": "B43", "name": "Sicilian Defense: Kan Variation, Wing Attack" }, "r1bqkbnr/pp1p1ppp/2n1p3/8/3NP3/8/PPP2PPP/RNBQKB1R": { "eco": "B44", "name": "Sicilian Defense: Paulsen Variation" }, "r1bqkb1r/1p3ppp/p1n1pn2/3p4/2P1P3/N1N5/PP3PPP/R1BQKB1R": { "eco": "B44", "name": "Sicilian Defense: Paulsen Variation, Gary Gambit" }, "r1bq1rk1/4bppp/ppnppn2/8/2P1P3/N1N5/PP2BPPP/R1BQ1RK1": { "eco": "B44", "name": "Sicilian Defense: Paulsen Variation, Modern Line" }, "r1bqkbnr/1p1p1ppp/p1n1p3/8/3NP3/2N5/PPP2PPP/R1BQKB1R": { "eco": "B46", "name": "Sicilian Defense: Paulsen Variation" }, "r1bqkb1r/1p1pnppp/p1n1p3/8/3NP3/2N5/PPP1BPPP/R1BQK2R": { "eco": "B46", "name": "Sicilian Defense: Paulsen Variation, Taimanov Variation" }, "r1b1kbnr/ppqp1ppp/2n1p3/8/3NP3/2N5/PPP2PPP/R1BQKB1R": { "eco": "B47", "name": "Sicilian Defense: Paulsen Variation, Bastrikov Variation" }, "rnbqkbnr/pp2pppp/3p4/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R": { "eco": "B50", "name": "Sicilian Defense" }, "rnbqkbnr/pp2pppp/3p4/8/3pP3/5N2/PPP2PPP/RNBQKB1R": { "eco": "B50", "name": "Sicilian Defense" }, "r1bqkb1r/pp2pppp/2np4/8/3Pn3/5N2/PP2BPPP/RNBQK2R": { "eco": "B50", "name": "Sicilian Defense: Delayed Alapin, Basman-Palatnik Gambit" }, "rnbqkbnr/p3pppp/3p4/1pp5/4P3/5NP1/PPPP1P1P/RNBQKB1R": { "eco": "B50", "name": "Sicilian Defense: Kotov Gambit" }, "rnbqkb1r/pp2pppp/3p1n2/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R": { "eco": "B50", "name": "Sicilian Defense: Modern Variations, Anti-Qxd4 Move Order" }, "rnbqkb1r/pp2pppp/3p4/2P5/4n3/5N2/PPP2PPP/RNBQKB1R": { "eco": "B50", "name": "Sicilian Defense: Modern Variations, Anti-Qxd4 Move Order Accepted" }, "rn1qkbnr/pp1bpppp/3p4/1Bp5/4P3/5N2/PPPP1PPP/RNBQK2R": { "eco": "B52", "name": "Sicilian Defense: Canal Attack, Main Line" }, "r1b1kbnr/pp1qpppp/2np4/1B6/3QP3/5N2/PPP2PPP/RNB1K2R": { "eco": "B53", "name": "Sicilian Defense: Chekhover Variation, Zaitsev Defense" }, "rnbqkbnr/pp2pp1p/3p2p1/8/3NP3/8/PPP2PPP/RNBQKB1R": { "eco": "B54", "name": "Sicilian Defense: Accelerated Dragon" }, "rnbqkb1r/pp2pppp/3p1n2/8/3NP3/8/PPP2PPP/RNBQKB1R": { "eco": "B54", "name": "Sicilian Defense: Modern Variations, Main Line" }, "r1bqkb1r/pp2pppp/2np1n2/8/3NP3/2N5/PPP2PPP/R1BQKB1R": { "eco": "B56", "name": "Sicilian Defense: Classical Variation" }, "rn1qkb1r/pp1bpppp/3p1n2/8/3NP3/2N5/PPP2PPP/R1BQKB1R": { "eco": "B56", "name": "Sicilian Defense: Kupreichik Variation" }, "r1b1kb1r/pp2pppp/1qnp1n2/8/2BNP3/2N5/PPP2PPP/R1BQK2R": { "eco": "B57", "name": "Sicilian Defense: Classical Variation, Anti-Sozin Variation" }, "r1bqkb1r/pp3ppp/2np1n2/4p3/3NP3/2N5/PPP1BPPP/R1BQK2R": { "eco": "B58", "name": "Sicilian Defense: Boleslavsky Variation" }, "r1bqkb1r/pp2pp1p/3p1np1/8/3QP3/2N5/PPP1BPPP/R1B1K2R": { "eco": "B58", "name": "Sicilian Defense: Classical Variation, Dragon Transfer" }, "r1bqkb1r/pp2pp1p/2np1np1/6B1/3NP3/2N5/PPP2PPP/R2QKB1R": { "eco": "B60", "name": "Sicilian Defense: Richter-Rauzer Variation, Dragon Variation" }, "r2qkb1r/pp1bpppp/2np1n2/6B1/3NP3/2N5/PPP2PPP/R2QKB1R": { "eco": "B60", "name": "Sicilian Defense: Richter-Rauzer Variation, Modern Variation" }, "r1bqkb1r/pp3ppp/2nppn2/6B1/3NP3/2N5/PPP2PPP/R2QKB1R": { "eco": "B62", "name": "Sicilian Defense: Richter-Rauzer Variation" }, "r1bqk2r/pp2bppp/2nppn2/6B1/3NP3/2N5/PPPQ1PPP/R3KB1R": { "eco": "B63", "name": "Sicilian Defense: Richter-Rauzer Variation, Classical Variation" }, "r1bqk2r/4bppp/p2ppn2/1p4B1/3QPP2/2N5/PPP3PP/2KR1B1R": { "eco": "B63", "name": "Sicilian Defense: Richter-Rauzer Variation, Classical Variation, Kantscher Line" }, "r1b1kb1r/pp3ppp/1qnppn2/6B1/3NP3/2N5/PPPQ1PPP/R3KB1R": { "eco": "B63", "name": "Sicilian Defense: Richter-Rauzer Variation, Ivanov Variation" }, "r1bq1rk1/pp2bppp/2np1n2/4p1B1/3NPP2/2N5/PPPQ2PP/2KR1B1R": { "eco": "B64", "name": "Sicilian Defense: Richter-Rauzer Variation, Classical Variation" }, "r1bq1rk1/pp2bppp/3ppn2/6B1/3nPP2/2N5/PPPQ2PP/2KR1B1R": { "eco": "B65", "name": "Sicilian Defense: Richter-Rauzer Variation, Rauzer Attack" }, "r1bqkb1r/1p3ppp/p1nppn2/6B1/3NP3/2N5/PPPQ1PPP/R3KB1R": { "eco": "B66", "name": "Sicilian Defense: Richter-Rauzer Variation, Neo-Modern Variation, Early Deviations" }, "r2qkb1r/1p1b1ppp/p1nppn2/6B1/3NP3/2N5/PPPQ1PPP/2KR1B1R": { "eco": "B67", "name": "Sicilian Defense: Richter-Rauzer Variation, Neo-Modern Variation" }, "r2qk2r/1p1bbppp/p1nppn2/6B1/3NPP2/2N5/PPPQ2PP/2KR1B1R": { "eco": "B68", "name": "Sicilian Defense: Richter-Rauzer Variation, Neo-Modern Variation" }, "rnbqkb1r/pp2pp1p/3p1np1/8/3NP3/2N5/PPP2PPP/R1BQKB1R": { "eco": "B70", "name": "Sicilian Defense: Dragon Variation" }, "r1bqkb1r/pp1npp1p/3p1np1/8/3NPP2/2N5/PPP3PP/R1BQKB1R": { "eco": "B71", "name": "Sicilian Defense: Dragon Variation, Levenfish Variation, Main Line" }, "r1bqk2r/pp2ppbp/2np1np1/8/3NP3/2N1B3/PPP1BPPP/R2QK2R": { "eco": "B72", "name": "Sicilian Defense: Dragon Variation, Classical Variation" }, "r1bq1rk1/1p2ppbp/2np1np1/p7/4P3/1NN1B3/PPP1BPPP/R2Q1RK1": { "eco": "B74", "name": "Sicilian Defense: Dragon Variation, Classical Variation, Alekhine Line" }, "r2q1rk1/pp2ppbp/5np1/n2p1P2/4P3/1NNPB3/PP4PP/R2Q1RK1": { "eco": "B74", "name": "Sicilian Defense: Dragon Variation, Classical Variation, Bernard Defense" }, "r2q1rk1/pp2ppbp/3pbnp1/n7/4PP2/1NN1B3/PPP1B1PP/R2Q1RK1": { "eco": "B74", "name": "Sicilian Defense: Dragon Variation, Classical Variation, Maróczy Line" }, "r1q2rk1/pp2ppbp/2npbnp1/8/4PP2/1NN1B3/PPP1B1PP/R2Q1RK1": { "eco": "B74", "name": "Sicilian Defense: Dragon Variation, Classical Variation, Tartakower Line" }, "r1bqk2r/pp2ppbp/2np1np1/8/3NP3/2N1BP2/PPP3PP/R2QKB1R": { "eco": "B75", "name": "Sicilian Defense: Dragon Variation, Yugoslav Attack, Belezky Line" }, "rnbq1rk1/pp2ppbp/3p1np1/8/3NP3/2N1BP2/PPP3PP/R2QKB1R": { "eco": "B76", "name": "Sicilian Defense: Dragon Variation, Yugoslav Attack" }, "r1bq1rk1/pp2ppbp/2np1np1/8/3NP3/2N1BP2/PPPQ2PP/R3KB1R": { "eco": "B76", "name": "Sicilian Defense: Dragon Variation, Yugoslav Attack" }, "r2q1rk1/pp1bppbp/2np1np1/8/2BNP3/2N1BP2/PPPQ2PP/R3K2R": { "eco": "B77", "name": "Sicilian Defense: Dragon Variation, Yugoslav Attack" }, "r1bq1rk1/1p2ppbp/2np1np1/p7/2BNP3/2N1BP2/PPPQ2PP/R3K2R": { "eco": "B77", "name": "Sicilian Defense: Dragon Variation, Yugoslav Attack, Byrne Variation" }, "r2q1rk1/pp2ppbp/3pbnp1/8/2BBP3/2N2P2/PPPQ2PP/R3K2R": { "eco": "B77", "name": "Sicilian Defense: Dragon Variation, Yugoslav Attack, Czerniak Variation" }, "r1bq1rk1/pp1nppbp/2np2p1/8/2BNP3/2N1BP2/PPPQ2PP/R3K2R": { "eco": "B77", "name": "Sicilian Defense: Dragon Variation, Yugoslav Attack, Sosonko Variation" }, "2rq1rk1/pp1bppbp/2np1np1/8/2BNP3/2N1BP2/PPPQ2PP/2KR3R": { "eco": "B78", "name": "Sicilian Defense: Dragon Variation, Yugoslav Attack, Old Line" }, "r1r3k1/pp1bppb1/2np1np1/q6p/3NP2P/1BN1BP2/PPPQ2P1/2KR3R": { "eco": "B79", "name": "Sicilian Defense: Dragon Variation, Yugoslav Attack, Soltis Variation" }, "rnbqkb1r/pp3ppp/3ppn2/8/3NP3/2N5/PPP2PPP/R1BQKB1R": { "eco": "B80", "name": "Sicilian Defense: Scheveningen Variation" }, "r1bqkb1r/pp3ppp/2nppn2/8/3NP3/2N5/PPP1BPPP/R1BQK2R": { "eco": "B83", "name": "Sicilian Defense: Scheveningen Variation, Modern Variation" }, "r1bqkb1r/1p1n1ppp/p2ppn2/8/3NP3/2N5/PPP1BPPP/R1BQ1RK1": { "eco": "B84", "name": "Sicilian Defense: Najdorf Variation, Scheveningen Variation" }, "rnbqkb1r/1p3ppp/p2ppn2/8/3NP3/2N5/PPP1BPPP/R1BQK2R": { "eco": "B84", "name": "Sicilian Defense: Scheveningen Variation, Classical Variation" }, "rnb1kb1r/1pq2ppp/p2ppn2/8/3NP3/2N5/PPP1BPPP/R1BQ1RK1": { "eco": "B84", "name": "Sicilian Defense: Scheveningen Variation, Classical Variation" }, "r1b2rk1/1pq1bppp/p1nppn2/8/3NPP2/2N1B3/PPP1B1PP/R3QRK1": { "eco": "B85", "name": "Sicilian Defense: Scheveningen Variation, Classical Main Line" }, "r1b1kb1r/1pq2ppp/p1nppn2/8/3NPP2/2N5/PPP1B1PP/R1BQ1RK1": { "eco": "B85", "name": "Sicilian Defense: Scheveningen Variation, Classical Variation, Paulsen Variation" }, "rnbqkb1r/5ppp/p2ppn2/1p6/3NP3/1BN5/PPP2PPP/R1BQK2R": { "eco": "B87", "name": "Sicilian Defense: Sozin Attack, Flank Variation" }, "r1bqkb1r/pp3ppp/2nppn2/8/2BNP3/2N5/PPP2PPP/R1BQK2R": { "eco": "B88", "name": "Sicilian Defense: Sozin Attack, Leonhardt Variation" }, "r1bq1rk1/p3bppp/1p1ppn2/n7/3NPP2/1BN1B3/PPP3PP/R2Q1RK1": { "eco": "B89", "name": "Sicilian Defense: Sozin Attack, Main Line, Sherbakov Variation" }, "rnbqkb1r/1p2pppp/p2p1n2/8/3NP3/2N5/PPP2PPP/R1BQKB1R": { "eco": "B90", "name": "Sicilian Defense: Najdorf Variation" }, "rnbqkb1r/1p2pppp/p2p4/8/3NP1n1/2N1B3/PPP2PPP/R2QKB1R": { "eco": "B90", "name": "Sicilian Defense: Najdorf Variation, English Attack, Anti-English" }, "rn1qk2r/1p2bppp/p2pbn2/4p3/4P3/1NN5/PPP1BPPP/R1BQ1RK1": { "eco": "B92", "name": "Sicilian Defense: Najdorf Variation, Opocensky Variation, Modern Line" }, "rnbq1rk1/1p2bppp/p2p1n2/4p3/4P3/1NN5/PPP1BPPP/R1BQ1RK1": { "eco": "B92", "name": "Sicilian Defense: Najdorf Variation, Opocensky Variation, Traditional Line" }, "rnbqkb1r/1p3ppp/p2ppn2/6B1/3NP3/2N5/PPP2PPP/R2QKB1R": { "eco": "B95", "name": "Sicilian Defense: Najdorf Variation" }, "r1bqkb1r/1p3ppp/p1nppn2/6B1/3NPP2/2N5/PPP3PP/R2QKB1R": { "eco": "B96", "name": "Sicilian Defense: Najdorf Variation, Neo-Classical Defense" }, "rnbqkb1r/5ppp/p2ppn2/1p4B1/3NPP2/2N5/PPP3PP/R2QKB1R": { "eco": "B96", "name": "Sicilian Defense: Najdorf Variation, Polugaevsky Variation" }, "rnb1kb1r/1p3ppp/p2ppn2/6B1/3NPP2/q1N5/P1PQ2PP/1R2KB1R": { "eco": "B97", "name": "Sicilian Defense: Najdorf Variation, Poisoned Pawn Accepted" }, "rnb1kb1r/1p3ppp/pq1ppn2/6B1/3NPP2/2N5/PPP3PP/R2QKB1R": { "eco": "B97", "name": "Sicilian Defense: Najdorf Variation, Poisoned Pawn Variation" }, "rnbqk2r/1p2bppp/p2ppn2/6B1/3NPP2/2N5/PPP3PP/R2QKB1R": { "eco": "B98", "name": "Sicilian Defense: Najdorf Variation" }, "rnb1k2r/1pq1bpp1/p2ppn1p/8/3NPP1B/2N2Q2/PPP3PP/R3KB1R": { "eco": "B98", "name": "Sicilian Defense: Najdorf Variation, Browne Variation" }, "rnbqk2r/1p2bp2/p2ppn1p/6p1/3NPP1B/2N2Q2/PPP3PP/R3KB1R": { "eco": "B98", "name": "Sicilian Defense: Najdorf Variation, Goteborg (Argentine)" }, "rnb1k2r/1pq1bppp/p2ppn2/6B1/3NPP2/2N2Q2/PPP3PP/R3KB1R": { "eco": "B98", "name": "Sicilian Defense: Najdorf Variation, Traditional Line" }, "r1b1k2r/1pqnbppp/p2ppn2/6B1/3NPP2/2N2Q2/PPP3PP/2KR1B1R": { "eco": "B99", "name": "Sicilian Defense: Najdorf Variation, Main Line" }, "rnbqkbnr/pppp1ppp/4p3/8/4P3/8/PPPP1PPP/RNBQKBNR": { "eco": "C00", "name": "French Defense" }, "rnbqkbnr/ppp2ppp/4p3/3p4/3PP3/8/PPP2PPP/RNBQKBNR": { "eco": "C00", "name": "French Defense" }, "rnbqkbnr/p1pp1ppp/4p3/1p6/3PP3/8/PPP2PPP/RNBQKBNR": { "eco": "C00", "name": "French Defense: Baeuerle Gambit" }, "rnbqkbnr/pppp2pp/4p3/5p2/4P3/3P4/PPP2PPP/RNBQKBNR": { "eco": "C00", "name": "French Defense: Franco-Hiva Gambit" }, "rnbqkbnr/pppp2pp/4p3/5p2/4P3/5N2/PPPP1PPP/RNBQKB1R": { "eco": "C00", "name": "French Defense: Franco-Hiva Gambit" }, "rnbqkb1r/pppp2pp/4pn2/5P2/3P4/8/PPP2PPP/RNBQKBNR": { "eco": "C00", "name": "French Defense: Franco-Hiva Gambit Accepted" }, "rnbqkbnr/ppp2ppp/8/3p4/3PPp2/8/PPP1Q1PP/RNB1KBNR": { "eco": "C00", "name": "French Defense: Hoffmann Gambit" }, "rnbqkbnr/ppp2ppp/4p3/8/4pP2/5N2/PPPP2PP/RNBQKB1R": { "eco": "C00", "name": "French Defense: La Bourdonnais Variation, Reuter Gambit" }, "rnbqkb1r/pppp1ppp/4pn2/8/3PP3/8/PPP2PPP/RNBQKBNR": { "eco": "C00", "name": "French Defense: Mediterranean Defense" }, "rnbqkbnr/pp1p1ppp/4p3/2p5/3PP3/8/PPP2PPP/RNBQKBNR": { "eco": "C00", "name": "Queen's Pawn Game: Franco-Sicilian Defense" }, "rnbqkbnr/ppp2ppp/3pp3/8/3PP3/8/PPP2PPP/RNBQKBNR": { "eco": "C00", "name": "Rat Defense: Small Center Defense" }, "rnbqkbnr/1p1p1ppp/p3p3/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R": { "eco": "C00", "name": "Sicilian Defense: Drazic Variation" }, "rnbqkbnr/1ppp1ppp/p3p3/8/3PP3/8/PPP2PPP/RNBQKBNR": { "eco": "C00", "name": "St. George Defense" }, "rnbqkbnr/2pp1ppp/p3p3/1p6/2PPP3/8/PP3PPP/RNBQKBNR": { "eco": "C00", "name": "St. George Defense: New St. George, Sanky-George Gambit" }, "rn1qkb1r/1b1p1ppp/p3pn2/1pp5/3PP3/2PB1N2/PP3PPP/RNBQ1RK1": { "eco": "C00", "name": "St. George Defense: New St. George, Traditional Line" }, "rnbqkbnr/2pp1ppp/4p3/1p6/3PP3/8/PP3PPP/RNBQKBNR": { "eco": "C00", "name": "St. George Defense: St. George Gambit" }, "r1bqkb1r/ppp2ppp/2n2n2/3p2B1/3P4/2N5/PPP2PPP/R2QKBNR": { "eco": "C01", "name": "French Defense: Exchange Variation, Bogoljubov Variation" }, "rnbqkbnr/pp3ppp/4p3/2ppP3/3P4/8/PPP2PPP/RNBQKBNR": { "eco": "C02", "name": "French Defense: Advance Variation" }, "r1bqkbnr/pp3ppp/2n1p3/2ppP3/3P4/2P5/PP3PPP/RNBQKBNR": { "eco": "C02", "name": "French Defense: Advance Variation" }, "r2qkbnr/pp1b1ppp/2n1p3/2ppP3/3P4/2P2N2/PP3PPP/RNBQKB1R": { "eco": "C02", "name": "French Defense: Advance Variation, Euwe Variation" }, "rn1qkbnr/pppb1ppp/4p3/3pP3/3P4/8/PPP2PPP/RNBQKBNR": { "eco": "C02", "name": "French Defense: Advance Variation, Extended Bishop Swap" }, "r1b1kb1r/pp3ppp/1qn1p2n/2ppP3/3P4/P1P2N2/1P3PPP/RNBQKB1R": { "eco": "C02", "name": "French Defense: Advance Variation, Lputian Variation" }, "rn2kbnr/pp1b1ppp/1q2p3/2ppP3/3P4/2P2N2/PP3PPP/RNBQKB1R": { "eco": "C02", "name": "French Defense: Advance Variation, Wade Variation" }, "r1bqkbnr/ppp2ppp/2n5/4p3/3PN3/2P5/PP3PPP/R1BQKBNR": { "eco": "C03", "name": "French Defense: Guimard Variation, Thunderbunny Variation" }, "r1bqkbnr/ppp2ppp/2n1p3/3p4/3PP3/8/PPPN1PPP/R1BQKBNR": { "eco": "C03", "name": "French Defense: Tarrasch Variation, Guimard Defense" }, "rnbqkbnr/ppp3pp/4p3/3p1p2/3PP3/8/PPPN1PPP/R1BQKBNR": { "eco": "C03", "name": "French Defense: Tarrasch Variation, Haberditz Variation" }, "rnbqkbnr/1pp2ppp/p3p3/3p4/3PP3/8/PPPN1PPP/R1BQKBNR": { "eco": "C03", "name": "French Defense: Tarrasch Variation, Modern System" }, "rnbqk1nr/ppp1bppp/4p3/3p4/3PP3/8/PPPN1PPP/R1BQKBNR": { "eco": "C03", "name": "French Defense: Tarrasch Variation, Morozevich Variation" }, "r1bqkb1r/ppp2ppp/2n1pn2/3p4/3PP3/5N2/PPPN1PPP/R1BQKB1R": { "eco": "C04", "name": "French Defense: Tarrasch Variation, Guimard Defense, Main Line" }, "rnbqkb1r/p2n1ppp/1p2p3/2ppP3/3P4/2PB4/PP1N1PPP/R1BQK1NR": { "eco": "C05", "name": "French Defense: Tarrasch Variation, Botvinnik Variation" }, "rnbqkb1r/ppp2ppp/4pn2/3p4/3PP3/8/PPPN1PPP/R1BQKBNR": { "eco": "C05", "name": "French Defense: Tarrasch Variation, Closed Variation" }, "r1bqkb1r/pp1n1ppp/2n1p3/2ppP3/3P4/2PB4/PP1N1PPP/R1BQK1NR": { "eco": "C05", "name": "French Defense: Tarrasch Variation, Closed Variation" }, "r1bqkb1r/pp3ppp/1nn1p3/3pP3/3P4/3B4/PP1NNPPP/R1BQK2R": { "eco": "C06", "name": "French Defense: Tarrasch Variation, Leningrad Variation" }, "rnb1kbnr/pp3ppp/4p3/2pq4/3P4/8/PPPN1PPP/R1BQKBNR": { "eco": "C07", "name": "French Defense: Tarrasch Variation, Chistyakov Defense" }, "r1b1kb1r/1p3ppp/p2qpn2/8/2BN4/8/PPP2PPP/R1BQ1RK1": { "eco": "C07", "name": "French Defense: Tarrasch Variation, Chistyakov Defense, Modern Line" }, "rnbqkbnr/pp3ppp/4p3/8/2Bp4/5N2/PPPN1PPP/R1BQK2R": { "eco": "C07", "name": "French Defense: Tarrasch Variation, Eliskases Variation" }, "rnbqkbnr/pp3ppp/4p3/2pp4/3PP3/8/PPPN1PPP/R1BQKBNR": { "eco": "C07", "name": "French Defense: Tarrasch Variation, Open System" }, "rnbqkb1r/pp3ppp/4pn2/2pP4/3P4/8/PPPN1PPP/R1BQKBNR": { "eco": "C07", "name": "French Defense: Tarrasch Variation, Open System, Shaposhnikov Gambit" }, "rnbqkbnr/pp3ppp/8/2pp4/3P4/8/PPPN1PPP/R1BQKBNR": { "eco": "C08", "name": "French Defense: Tarrasch Variation, Open System" }, "rnbqkbnr/pp3ppp/8/3p4/2pP4/5N2/PPPN1PPP/R1BQKB1R": { "eco": "C08", "name": "French Defense: Tarrasch Variation, Open System, Advance Line" }, "r1bqkbnr/pp3ppp/2n5/2pp4/3P4/5N2/PPPN1PPP/R1BQKB1R": { "eco": "C09", "name": "French Defense: Tarrasch Variation, Open System, Main Line" }, "rnbqkbnr/ppp2ppp/4p3/8/3Pp3/2N5/PPP2PPP/R1BQKBNR": { "eco": "C10", "name": "French Defense: Rubinstein Variation" }, "r1bqkbnr/pppn1ppp/4p3/8/3PN3/8/PPP2PPP/R1BQKBNR": { "eco": "C10", "name": "French Defense: Rubinstein Variation, Blackburne Defense" }, "rnbqkbnr/ppp2ppp/8/4p3/3PN3/8/PPP2PPP/R1BQKBNR": { "eco": "C10", "name": "French Defense: Rubinstein Variation, Ellis Gambit" }, "rn1qkbnr/ppp2ppp/2b1p3/8/3PN3/5N2/PPP2PPP/R1BQKB1R": { "eco": "C10", "name": "French Defense: Rubinstein Variation, Fort Knox Variation" }, "rnb1kbnr/ppp2ppp/4p3/3q4/3PN3/8/PPP2PPP/R1BQKBNR": { "eco": "C10", "name": "French Defense: Rubinstein Variation, Maric Variation" }, "rnbqkbnr/pp3ppp/4p3/2pp4/3PP3/2N5/PPP2PPP/R1BQKBNR": { "eco": "C10", "name": "Sicilian Defense: Marshall Gambit" }, "rnbqkb1r/ppp2ppp/4pn2/3p4/3PP3/2N5/PPP2PPP/R1BQKBNR": { "eco": "C11", "name": "French Defense: Classical Variation" }, "rnbq1rk1/ppp2ppp/4pb2/8/3PN3/5N2/PPP2PPP/R2QKB1R": { "eco": "C11", "name": "French Defense: Classical Variation, Burn Variation, Main Line" }, "rnbqk2r/ppp1bp1p/4pp2/8/3PN3/8/PPP2PPP/R2QKBNR": { "eco": "C11", "name": "French Defense: Classical Variation, Burn Variation, Morozevich Line" }, "r1bqkb1r/pp1n1ppp/2n1p3/2PpP3/5P2/2N5/PPP3PP/R1BQKBNR": { "eco": "C11", "name": "French Defense: Steinitz Variation" }, "r1bq1rk1/pp1n2pp/2n1pp2/2bpP3/5PQ1/P1N2N2/1PP3PP/R1B1KB1R": { "eco": "C11", "name": "French Defense: Steinitz Variation, Brodsky-Jones Variation" }, "rnbqk2r/ppp2ppp/4pn2/3p2B1/1b1PP3/2N5/PPP2PPP/R2QKBNR": { "eco": "C12", "name": "French Defense: MacCutcheon Variation" }, "rnb1k2r/ppp2p1p/4pp2/q7/1b1P4/2N5/PPPQ1PPP/R3KBNR": { "eco": "C12", "name": "French Defense: MacCutcheon Variation, Bogoljubov Variation" }, "rnbqk2r/ppp2pp1/4pn1p/3pP3/3P4/2b5/PPPB1PPP/R2QKBNR": { "eco": "C12", "name": "French Defense: MacCutcheon Variation, Lasker Variation" }, "rnbqk2r/ppp2p2/4p1pp/3pP3/3Pn1Q1/2P5/P1PB1PPP/R3KBNR": { "eco": "C12", "name": "French Defense: MacCutcheon Variation, Lasker Variation" }, "rnbqk2r/pppn1pp1/4p2p/3pP3/1b1P4/2N5/PPPB1PPP/R2QKBNR": { "eco": "C12", "name": "French Defense: MacCutcheon Variation, Tartakower Variation" }, "rnb1k2r/pppn1ppp/4p3/3pP1q1/3P4/2N5/PPP2PP1/R2QKBNR": { "eco": "C13", "name": "French Defense: Alekhine-Chatard Attack, Albin-Chatard Gambit" }, "rnbqk2r/pp1nbppp/4p3/2ppP1B1/3P3P/2N5/PPP2PP1/R2QKBNR": { "eco": "C13", "name": "French Defense: Alekhine-Chatard Attack, Breyer Variation" }, "rnbqk2r/1ppnbppp/p3p3/3pP1B1/3P3P/2N5/PPP2PP1/R2QKBNR": { "eco": "C13", "name": "French Defense: Alekhine-Chatard Attack, Maróczy Variation" }, "rnbq1rk1/pppnbppp/4p3/3pP1B1/3P3P/2N5/PPP2PP1/R2QKBNR": { "eco": "C13", "name": "French Defense: Alekhine-Chatard Attack, Spielmann Variation" }, "rnbqk2r/pppnb1pp/4pp2/3pP1B1/3P3P/2N5/PPP2PP1/R2QKBNR": { "eco": "C13", "name": "French Defense: Alekhine-Chatard Attack, Teichmann Variation" }, "rnbqk1nr/p1p1bppp/1p2p3/3pP3/3P4/2N1B3/PPP2PPP/R2QKBNR": { "eco": "C13", "name": "French Defense: Classical Variation, Frankfurt Variation" }, "rnbqk2r/ppp1bppp/4pn2/3p2B1/3PP3/2N5/PPP2PPP/R2QKBNR": { "eco": "C13", "name": "French Defense: Classical Variation, Normal Variation" }, "rnbqk2r/ppp1bppp/4p3/3pP1B1/3Pn3/2N5/PPP2PPP/R2QKBNR": { "eco": "C13", "name": "French Defense: Classical Variation, Tartakower Variation" }, "rnbqk1nr/ppp1bppp/4p3/3pP1B1/3P4/2N5/PPP2PPP/R2QKBNR": { "eco": "C13", "name": "French Defense: Classical Variation, Vistaneckis (Nimzowitsch) Variation" }, "rnb1k2r/pppnqppp/4p3/3pP3/3P4/2N5/PPP2PPP/R2QKBNR": { "eco": "C14", "name": "French Defense: Classical Variation" }, "r1b2rk1/pp1nqppp/2n1p3/3pP3/2pP1P2/2N2N2/PPPQ2PP/2KR1B1R": { "eco": "C14", "name": "French Defense: Classical Variation, Stahlberg Variation" }, "rnbqk1nr/ppp2ppp/4p3/3p4/1b1PP3/2N5/PPP2PPP/R1BQKBNR": { "eco": "C15", "name": "French Defense: Winawer Variation" }, "rnbqk1nr/ppp2ppp/4p3/8/3Pp3/P1b5/1PP1NPPP/R1BQKB1R": { "eco": "C15", "name": "French Defense: Winawer Variation, Alekhine Gambit Accepted" }, "r1bq1rk1/ppp1bppp/2n1pn2/8/3PN3/P5N1/1PP1BPPP/R1BQK2R": { "eco": "C15", "name": "French Defense: Winawer Variation, Alekhine Gambit, Alatortsev Variation" }, "r1bqk1nr/ppp2ppp/2n1p3/8/3Pp3/P1N5/1PP2PPP/R1BQKB1R": { "eco": "C15", "name": "French Defense: Winawer Variation, Alekhine Gambit, Kan Variation" }, "rnb1k1nr/ppp2ppp/4p3/8/1b1qp1Q1/2N5/PPPB1PPP/R3KBNR": { "eco": "C15", "name": "French Defense: Winawer Variation, Fingerslip Variation, Kunin Double Gambit" }, "rnb1k1nr/pppq1ppp/4p3/3pP3/1b1P4/2N5/PPP2PPP/R1BQKBNR": { "eco": "C16", "name": "French Defense: Winawer Variation, Petrosian Variation" }, "rnbqk1nr/pp3ppp/4p3/2ppP3/1b1P4/2N5/PPP2PPP/R1BQKBNR": { "eco": "C17", "name": "French Defense: Winawer Variation, Advance Variation" }, "rnbqk1nr/pp3ppp/4p3/3pP3/1P6/2p5/1PP2PPP/R1BQKBNR": { "eco": "C17", "name": "French Defense: Winawer Variation, Maróczy-Wallis Variation" }, "rnbqk1nr/pp3ppp/4p3/b1ppP3/3P4/P1N5/1PP2PPP/R1BQKBNR": { "eco": "C17", "name": "French Defense: Winawer Variation, Retreat Variation" }, "rnbqk1nr/pp3ppp/4p3/b2pP3/1P1p4/P1N5/2P2PPP/R1BQKBNR": { "eco": "C17", "name": "French Defense: Winawer Variation, Retreat Variation, Armenian Line" }, "rnb1k1nr/ppq2ppp/4p3/2ppP3/3P4/P1P5/2P2PPP/R1BQKBNR": { "eco": "C18", "name": "French Defense: Winawer Variation, Classical Variation" }, "rnbqk2r/pp2nppp/4p3/2ppP3/3P4/P1P5/2P2PPP/R1BQKBNR": { "eco": "C19", "name": "French Defense: Winawer Variation, Advance Variation" }, "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR": { "eco": "C20", "name": "King's Pawn Game" }, "rnbqkbnr/ppp2ppp/8/3pp3/2P1P3/8/PP1P1PPP/RNBQKBNR": { "eco": "C20", "name": "King's Pawn Game: Bavarian Gambit" }, "rnbqkbnr/ppp2ppp/8/3pp3/3PP3/8/PPP2PPP/RNBQKBNR": { "eco": "C20", "name": "King's Pawn Game: Beyer Gambit" }, "rnbqkbnr/pppp2pp/8/4pp2/4P3/3P4/PPP2PPP/RNBQKBNR": { "eco": "C20", "name": "King's Pawn Game: Clam Variation, King's Gambit Reversed" }, "rnbqkbnr/pppp2pp/8/4pp2/4P3/2P5/PP1P1PPP/RNBQKBNR": { "eco": "C20", "name": "King's Pawn Game: Macleod Attack, Lasa Gambit" }, "rnbqk1nr/ppp2ppp/3b4/3pp2Q/4P3/2P5/PP1P1PPP/RNB1KBNR": { "eco": "C20", "name": "King's Pawn Game: Macleod Attack, Norwalde Gambit" }, "rn1qkbnr/pppb1ppp/3p4/4P3/4P3/8/PPP2PPP/RNBQKBNR": { "eco": "C20", "name": "King's Pawn Game: Philidor Gambit" }, "rnbqkb1r/pppp1ppp/5n2/4p2Q/4P3/8/PPPP1PPP/RNB1KBNR": { "eco": "C20", "name": "King's Pawn Game: Wayward Queen Attack, Kiddie Countergambit" }, "r1bqkb1r/ppp4p/2n2ppn/3pp3/2B1P3/3P1Q2/PPP1NPPP/RNB1K2R": { "eco": "C20", "name": "King's Pawn Game: Wayward Queen Attack, Mellon Gambit" }, "r1bqkbnr/pp3ppp/2n5/4p3/8/3P4/PPP2PPP/RNBQKBNR": { "eco": "C20", "name": "King's Pawn Game: Weber Gambit" }, "r1bqk2r/pppp1ppp/5n2/2b5/3nP3/5N2/PP2QPPP/RNB1KB1R": { "eco": "C20", "name": "King's Pawn Opening: Van Hooydoon Gambit" }, "rnbqkbnr/pppp1ppp/8/8/3pP3/8/PPP2PPP/RNBQKBNR": { "eco": "C21", "name": "Center Game Accepted" }, "rnbqkbnr/pp1p1ppp/8/2p5/3pP3/5N2/PPP2PPP/RNBQKB1R": { "eco": "C21", "name": "Center Game: Kieseritzky Variation" }, "rnbqkbnr/p2p1ppp/8/1pp5/2BpP3/5N2/PPP2PPP/RNBQK2R": { "eco": "C21", "name": "Center Game: Kieseritzky Variation" }, "rnb1kbnr/ppppqppp/8/8/2B1P3/8/PB3PPP/RN1QK1NR": { "eco": "C21", "name": "Danish Gambit Accepted: Chigorin Defense" }, "rnbqkb1r/pppp1ppp/5n2/8/2B1P3/8/PB3PPP/RN1QK1NR": { "eco": "C21", "name": "Danish Gambit Accepted: Classical Defense" }, "rnbqk1nr/pppp1ppp/8/8/1bB1P3/8/PB3PPP/RN1QK1NR": { "eco": "C21", "name": "Danish Gambit Accepted: Copenhagen Defense" }, "rnbqkbnr/ppp2ppp/8/3p4/2B1P3/8/PB3PPP/RN1QK1NR": { "eco": "C21", "name": "Danish Gambit Accepted: Schlechter Defense" }, "rnbqkb1r/ppppnppp/8/8/3pP3/2P5/PP3PPP/RNBQKBNR": { "eco": "C21", "name": "Danish Gambit Accepted: Svenonius Defense" }, "rnbqkbnr/ppp2ppp/8/3p4/3pP3/2P5/PP3PPP/RNBQKBNR": { "eco": "C21", "name": "Danish Gambit Declined: Sorensen Defense" }, "r1bqkb1r/pppp1ppp/2n2n2/8/4P3/4Q3/PPP2PPP/RNB1KBNR": { "eco": "C22", "name": "Center Game: Berger Variation" }, "r1bqk1nr/ppppbppp/2n5/8/4P3/2P1Q3/PP3PPP/RNB1KBNR": { "eco": "C22", "name": "Center Game: Charousek Variation" }, "r1bqkbnr/pppp1ppp/2n5/8/3QP3/8/PPP2PPP/RNB1KBNR": { "eco": "C22", "name": "Center Game: Normal Variation" }, "r1bqkbnr/pppp2pp/2n5/5p2/4P3/4Q3/PPP2PPP/RNB1KBNR": { "eco": "C22", "name": "Center Game: l'Hermet Variation" }, "rnbqkbnr/p2p1ppp/2p5/1B2p3/4P3/8/PPPP1PPP/RNBQK1NR": { "eco": "C23", "name": "Bishop's Opening: Anderssen Gambit" }, "rnbqk1nr/pppp1ppp/8/2b1p3/2B1P3/8/PPPP1PPP/RNBQK1NR": { "eco": "C23", "name": "Bishop's Opening: Boi Variation" }, "rnbqkbnr/pppp2pp/8/4pp2/2B1P3/8/PPPP1PPP/RNBQK1NR": { "eco": "C23", "name": "Bishop's Opening: Calabrese Countergambit" }, "rnbqkbnr/ppp2ppp/8/3pp3/2B1P3/8/PPPP1PPP/RNBQK1NR": { "eco": "C23", "name": "Bishop's Opening: Khan Gambit" }, "rnbqk1nr/ppp2ppp/8/2bpp3/2B1P3/2P5/PP1P1PPP/RNBQK1NR": { "eco": "C23", "name": "Bishop's Opening: Lewis Countergambit" }, "rnbqk2r/ppp2ppp/5n2/2bBp3/4P3/2P5/PP1P1PPP/RNBQK1NR": { "eco": "C23", "name": "Bishop's Opening: Lewis Countergambit" }, "rnbqkbnr/pp1p1ppp/2p5/4p3/2B1P3/8/PPPP1PPP/RNBQK1NR": { "eco": "C23", "name": "Bishop's Opening: Philidor Counterattack" }, "rnbq1rk1/ppp2ppp/5P2/2b4Q/2pp4/2P5/PP3PPP/RNB1K1NR": { "eco": "C23", "name": "Bishop's Opening: Pratt Variation" }, "rnbqkbnr/p1pp2pp/8/1B2pp2/4P3/8/PPPP1PPP/RNBQK1NR": { "eco": "C23", "name": "Bishop's Opening: Thorold Gambit" }, "rnb1k1nr/pppp1ppp/8/2b1p1q1/2B1P3/2P5/PP1P1PPP/RNBQK1NR": { "eco": "C23", "name": "Bishop's Opening: del Rio Variation" }, "rnbqkb1r/pppp1ppp/5n2/4p3/2B1P3/8/PPPP1PPP/RNBQK1NR": { "eco": "C24", "name": "Bishop's Opening: Berlin Defense" }, "rnbq1rk1/ppppbppp/5n2/4p3/2B1P3/3P1N2/PPP2PPP/RNBQK2R": { "eco": "C24", "name": "Bishop's Opening: Kitchener Folly" }, "rnb1k2r/ppp1qppp/5n2/3P4/1bBp4/2P2N2/PP3PPP/RNBQK2R": { "eco": "C24", "name": "Bishop's Opening: Urusov Gambit, Panov Variation" }, "rnbqk1nr/pppp1ppp/8/2b1p3/4P3/2N5/PPPP1PPP/R1BQKBNR": { "eco": "C25", "name": "Vienna Game: Anderssen Defense" }, "r1b1kbnr/pppp1p1p/5q2/4n3/2B1PQ2/2N5/PPPP2PP/R1B2RK1": { "eco": "C25", "name": "Vienna Game: Hamppe-Muzio, Dubois Variation" }, "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/2N5/PPPP1PPP/R1BQKBNR": { "eco": "C25", "name": "Vienna Game: Max Lange Defense" }, "r1bqk2r/ppp2ppp/2n2n2/2bpp3/4P3/2N3P1/PPPPNPBP/R1BQK2R": { "eco": "C25", "name": "Vienna Game: Paulsen Variation" }, "r1bqk1nr/pppp1pp1/2n5/2b1p3/4P2p/2N2NP1/PPPP1PBP/R1BQK2R": { "eco": "C25", "name": "Vienna Game: Paulsen Variation, Mariotti Gambit" }, "r1bqkbnr/pppp2pp/2n5/4pp2/3PP3/2N5/PPP2PPP/R1BQKBNR": { "eco": "C25", "name": "Vienna Game: Philidor Countergambit" }, "r1bqk1nr/ppppbppp/2n5/8/4Pp2/2N2N2/PPPP2PP/R1BQKB1R": { "eco": "C25", "name": "Vienna Game: Vienna Gambit, Cunningham Defense" }, "r1bqkbnr/ppp2p1p/2np4/6N1/4PppP/2N5/PPPP2P1/R1BQKB1R": { "eco": "C25", "name": "Vienna Game: Vienna Gambit, Hamppe-Allgaier Gambit, Alapin Variation" }, "r1bqkbnr/pppp1p1p/2n5/8/2B1Pp2/2N2p2/PPPP2PP/R1BQ1RK1": { "eco": "C25", "name": "Vienna Game: Vienna Gambit, Hamppe-Muzio Gambit" }, "r1bqk1nr/ppp2ppp/2np4/2b1P3/4P3/2N5/PPPP2PP/R1BQKBNR": { "eco": "C25", "name": "Vienna Game: Vienna Gambit, Quelle Gambit" }, "r1b1kbnr/p1pp1ppp/1pn5/8/3PPp1q/2N5/PPP1K1PP/R1BQ1BNR": { "eco": "C25", "name": "Vienna Game: Vienna Gambit, Steinitz Gambit, Fraser-Minckwitz Defense" }, "r1b1kbnr/ppp2ppp/2np4/8/3PPp1q/2N5/PPP1K1PP/R1BQ1BNR": { "eco": "C25", "name": "Vienna Game: Vienna Gambit, Steinitz Gambit, Paulsen Defense" }, "r1b1kbnr/pppp1p1p/2n5/6p1/3PPp1q/2N5/PPP1K1PP/R1BQ1BNR": { "eco": "C25", "name": "Vienna Game: Vienna Gambit, Steinitz Gambit, Sörensen Defense" }, "r1b1kbnr/ppp2ppp/2n5/3p4/3PPp1q/2N5/PPP1K1PP/R1BQ1BNR": { "eco": "C25", "name": "Vienna Game: Vienna Gambit, Steinitz Gambit, Zukertort Defense" }, "rnbqk2r/pppp1ppp/5n2/4p3/1b2P1Q1/2N5/PPPP1PPP/R1B1KBNR": { "eco": "C25", "name": "Vienna Game: Zhuravlev Countergambit" }, "rnbqkb1r/p1pp1ppp/5n2/1p2p3/2B1P3/2N5/PPPP1PPP/R1BQK1NR": { "eco": "C26", "name": "Bishop's Opening: Horwitz Gambit" }, "rnbqkb1r/pppp1ppp/5n2/4p3/4P3/2N5/PPPP1PPP/R1BQKBNR": { "eco": "C26", "name": "Vienna Game: Falkbeer Variation" }, "rnbqkb1r/pp3ppp/2p2n2/3Pp3/8/2N3P1/PPPP1P1P/R1BQKBNR": { "eco": "C26", "name": "Vienna Game: Mieses Variation, Erben Gambit" }, "rnbqk2r/p1pp1ppp/5n2/1pb1p3/2B1P3/2N5/PPPPNPPP/R1BQK2R": { "eco": "C26", "name": "Vienna Game: Stanley Variation, Eifel Gambit" }, "rnbqk2r/pppp1ppp/5n2/4p3/1bB1P3/2N5/PPPP1PPP/R1BQK1NR": { "eco": "C26", "name": "Vienna Game: Stanley Variation, Reversed Spanish" }, "rnbqkb1r/ppp2ppp/8/3pp3/2B1n3/2N2N2/PPPP1PPP/R1BQK2R": { "eco": "C27", "name": "Bishop's Opening: Boden-Kieseritzky Gambit, Lichtenhein Defense" }, "rnbqkb1r/pppp1ppp/8/4p3/2B1n3/2N5/PPPP1PPP/R1BQK1NR": { "eco": "C27", "name": "Vienna Game: Frankenstein-Dracula Variation" }, "N1bk1b1r/p2pq2p/1pnn2p1/3Qpp2/8/1B6/PPPP1PPP/R1B1K1NR": { "eco": "C27", "name": "Vienna Game: Stanley Variation, Frankenstein-Dracula Variation" }, "rnbqk2r/ppppbppp/3n4/4p2Q/8/1BN5/PPPP1PPP/R1B1K1NR": { "eco": "C27", "name": "Vienna Game: Stanley Variation, Monster Declined" }, "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/2N5/PPPP1PPP/R1BQK1NR": { "eco": "C28", "name": "Vienna Game: Stanley Variation, Three Knights Variation" }, "rnbqkb1r/ppp3pp/8/3pPp2/4n3/2N2Q2/PPPP2PP/R1B1KBNR": { "eco": "C29", "name": "Vienna Game: Vienna Gambit, Bardeleben Variation" }, "rnbqk2r/ppp1bppp/8/3pP3/4n3/2N2N2/PPPP2PP/R1BQKB1R": { "eco": "C29", "name": "Vienna Game: Vienna Gambit, Breyer Variation" }, "rnbqkb1r/ppp2ppp/5n2/3pp3/4PP2/2N5/PPPP2PP/R1BQKBNR": { "eco": "C29", "name": "Vienna Game: Vienna Gambit, Main Line" }, "rnbqk1nr/pppp1ppp/8/2b1p3/4PP2/8/PPPP2PP/RNBQKBNR": { "eco": "C30", "name": "King's Gambit Declined: Classical Variation" }, "rnbqk1nr/ppp3pp/3p4/2b1pp2/4PP2/2P2N2/PP1P2PP/RNBQKB1R": { "eco": "C30", "name": "King's Gambit Declined: Classical Variation, Rubinstein Countergambit" }, "r1bqk1nr/pppn1ppp/3p4/2b1p3/4PP2/2N2N2/PPPP2PP/R1BQKB1R": { "eco": "C30", "name": "King's Gambit Declined: Classical, Hanham Variation" }, "r2qk2r/ppp2ppp/2np1n2/2b5/2B1Pp2/2NP1Q1P/PPP3P1/R1B1K2R": { "eco": "C30", "name": "King's Gambit Declined: Classical, Svenonius Variation" }, "r1bqkbnr/pppp1p2/2n4p/4p1P1/4P3/5N2/PPPP2PP/RNBQKB1R": { "eco": "C30", "name": "King's Gambit Declined: Hobbs-Zilbermints Gambit" }, "rnb1kbnr/ppppqppp/8/4p3/4PP2/6P1/PPPP3P/RNBQKBNR": { "eco": "C30", "name": "King's Gambit Declined: Keene Defense" }, "rnb1kbnr/pppp1ppp/8/4p3/4PP1q/8/PPPP2PP/RNBQKBNR": { "eco": "C30", "name": "King's Gambit Declined: Keene's Defense" }, "rnbqkbnr/pp1p1ppp/8/2p1p3/4PP2/8/PPPP2PP/RNBQKBNR": { "eco": "C30", "name": "King's Gambit Declined: Mafia Defense" }, "r1bqkbnr/pppp2pp/2n5/4pp2/4PP2/5N2/PPPP2PP/RNBQKB1R": { "eco": "C30", "name": "King's Gambit Declined: Miles Defense" }, "rnb1kbnr/pppp1ppp/5q2/4p3/4PP2/8/PPPP2PP/RNBQKBNR": { "eco": "C30", "name": "King's Gambit Declined: Norwalde Variation" }, "rnbqkbnr/pppp2pp/8/4pp2/4PP2/8/PPPP2PP/RNBQKBNR": { "eco": "C30", "name": "King's Gambit Declined: Panteldakis Countergambit" }, "rnb1kbnr/pppp2pp/8/4pP2/5P1q/8/PPPP2PP/RNBQKBNR": { "eco": "C30", "name": "King's Gambit Declined: Panteldakis Countergambit, Greco Variation" }, "rnbqk1nr/pppp2pp/8/2b1pP2/5P2/8/PPPP2PP/RNBQKBNR": { "eco": "C30", "name": "King's Gambit Declined: Panteldakis Countergambit, Schiller's Defense" }, "rnbq1bnr/ppppk1pp/8/5P1Q/5p2/8/PPPP2PP/RNB1KBNR": { "eco": "C30", "name": "King's Gambit Declined: Panteldakis Countergambit, Shirazi Line" }, "rnbqkb1r/pppp1ppp/5n2/4p3/4PP2/8/PPPP2PP/RNBQKBNR": { "eco": "C30", "name": "King's Gambit Declined: Petrov's Defense" }, "r1bqkbnr/pppp1ppp/2n5/4p3/4PP2/8/PPPP2PP/RNBQKBNR": { "eco": "C30", "name": "King's Gambit Declined: Queen's Knight Defense" }, "rnbqk1nr/pppp1p1p/8/2b1p1p1/4PP2/5N2/PPPP2PP/RNBQKB1R": { "eco": "C30", "name": "King's Gambit Declined: Senechaud Countergambit" }, "r1bqkbnr/pppp2pp/2n2p2/4P3/4P3/8/PPPP2PP/RNBQKBNR": { "eco": "C30", "name": "King's Gambit Declined: Soller-Zilbermints Gambit" }, "r1bqkbnr/pppp1p1p/2n5/4p1p1/4PP2/5N2/PPPP2PP/RNBQKB1R": { "eco": "C30", "name": "King's Gambit Declined: Zilbermints Double Gambit" }, "rnbqkbnr/pppp1p1p/8/4p1p1/4PP2/8/PPPP2PP/RNBQKBNR": { "eco": "C30", "name": "King's Gambit: Zilbermints Double Countergambit" }, "rnbqkbnr/ppp2ppp/8/3pp3/4PP2/8/PPPP2PP/RNBQKBNR": { "eco": "C31", "name": "King's Gambit Declined: Falkbeer Countergambit" }, "rnbqk2r/ppp2ppp/5n2/3P4/1b3P2/2NPp3/PPPB2PP/R2QKBNR": { "eco": "C31", "name": "King's Gambit Declined: Falkbeer Countergambit, Charousek Gambit, Morphy Defense" }, "rnbqk1nr/ppp2ppp/8/2bPp3/5P2/8/PPPP2PP/RNBQKBNR": { "eco": "C31", "name": "King's Gambit Declined: Falkbeer Countergambit, Miles Gambit" }, "rnbqkbnr/ppp2ppp/8/3P4/5p2/8/PPPP2PP/RNBQKBNR": { "eco": "C31", "name": "King's Gambit Declined: Falkbeer Countergambit, Modern Transfer" }, "rnbqkbnr/pp3ppp/2p5/3Pp3/5P2/8/PPPP2PP/RNBQKBNR": { "eco": "C31", "name": "King's Gambit Declined: Falkbeer Countergambit, Nimzowitsch-Marshall Countergambit" }, "rnbqk1nr/pp3ppp/2P5/2b1p3/5P2/8/PPPP2PP/RNBQKBNR": { "eco": "C31", "name": "King's Gambit Declined: Falkbeer Countergambit, Pickler Gambit" }, "rnbqkbnr/ppp2ppp/8/3P4/4pP2/8/PPPP2PP/RNBQKBNR": { "eco": "C31", "name": "King's Gambit Declined: Falkbeer Countergambit, Staunton Line" }, "rn1qk2r/ppp2ppp/8/2bP1b2/4nP2/5N2/PPP1Q1PP/RNB1KB1R": { "eco": "C32", "name": "King's Gambit Declined: Falkbeer Countergambit, Charousek Gambit, Main Line" }, "rn1q1rk1/ppp2ppp/8/2bP1b2/4nPP1/5N2/PPP1Q2P/RNB1KB1R": { "eco": "C32", "name": "King's Gambit Declined: Falkbeer Countergambit, Tarrasch Variation" }, "rnbqkbnr/pppp1ppp/8/8/4Pp2/8/PPPP2PP/RNBQKBNR": { "eco": "C33", "name": "King's Gambit Accepted" }, "rnbqkbnr/pppp1p1p/8/6p1/2B1Pp2/8/PPPP2PP/RNBQK1NR": { "eco": "C33", "name": "King's Gambit Accepted: Bishop's Gambit, Anderssen Defense" }, "rnbqkbnr/pp3ppp/2p5/3B4/4Pp2/8/PPPP2PP/RNBQK1NR": { "eco": "C33", "name": "King's Gambit Accepted: Bishop's Gambit, Anderssen Variation" }, "rnbqkb1r/ppp2ppp/5n2/3B4/4Pp2/8/PPPP2PP/RNBQK1NR": { "eco": "C33", "name": "King's Gambit Accepted: Bishop's Gambit, Bledow Countergambit" }, "rnbqkbnr/ppp2ppp/8/3p4/2B1Pp2/8/PPPP2PP/RNBQK1NR": { "eco": "C33", "name": "King's Gambit Accepted: Bishop's Gambit, Bledow Variation" }, "r1b1kbnr/pppp1ppp/2n5/8/2B1Pp1q/8/PPPP2PP/RNBQ1KNR": { "eco": "C33", "name": "King's Gambit Accepted: Bishop's Gambit, Boden Variation" }, "rnbqkb1r/pp1p1ppp/2p2n2/8/2B1Pp2/2N5/PPPP2PP/R1BQK1NR": { "eco": "C33", "name": "King's Gambit Accepted: Bishop's Gambit, Bogoljubov Defense" }, "rnb1k1nr/ppp2ppp/3b4/3B4/4Pp1q/8/PPPP2PP/RNBQ1KNR": { "eco": "C33", "name": "King's Gambit Accepted: Bishop's Gambit, Boren-Svenonius Variation" }, "rnb1kbnr/p1pp1ppp/8/1p6/2B1Pp1q/8/PPPP2PP/RNBQ1KNR": { "eco": "C33", "name": "King's Gambit Accepted: Bishop's Gambit, Bryan Countergambit" }, "rnb1k2r/ppppnpbp/8/6p1/2BPPp1q/2N5/PPP3PP/R1BQ1KNR": { "eco": "C33", "name": "King's Gambit Accepted: Bishop's Gambit, Classical Defense" }, "rnbqkb1r/pppp1ppp/5n2/8/2B1Pp2/8/PPPP2PP/RNBQK1NR": { "eco": "C33", "name": "King's Gambit Accepted: Bishop's Gambit, Cozio Defense" }, "rnb1kbnr/ppp2ppp/3p4/8/2B1Pp1q/8/PPPP2PP/RNBQ1KNR": { "eco": "C33", "name": "King's Gambit Accepted: Bishop's Gambit, Cozio Variation" }, "rnb1kb1r/pppp1ppp/5n2/8/2B1Pp1q/8/PPPP2PP/RNBQ1KNR": { "eco": "C33", "name": "King's Gambit Accepted: Bishop's Gambit, First Jaenisch Variation" }, "rnbqkbnr/pppp2pp/8/5p2/2B1Pp2/8/PPPP2PP/RNBQK1NR": { "eco": "C33", "name": "King's Gambit Accepted: Bishop's Gambit, Gianutio Gambit" }, "rnb1k1nr/pppp1ppp/8/2b5/2B1Pp1q/8/PPPP2PP/RNBQ1KNR": { "eco": "C33", "name": "King's Gambit Accepted: Bishop's Gambit, Greco Variation" }, "rnbqkbnr/p1pp1ppp/8/1p6/2B1Pp2/8/PPPP2PP/RNBQK1NR": { "eco": "C33", "name": "King's Gambit Accepted: Bishop's Gambit, Kieseritzky Gambit" }, "rnbqkbnr/pp1p1ppp/2p5/8/2B1Pp2/8/PPPP2PP/RNBQK1NR": { "eco": "C33", "name": "King's Gambit Accepted: Bishop's Gambit, Lopez Defense" }, "rnb1kbnr/pppp1p1p/8/6p1/2B1Pp1q/8/PPPP2PP/RNBQ1KNR": { "eco": "C33", "name": "King's Gambit Accepted: Bishop's Gambit, Lopez Variation" }, "r1bqkbnr/pppp1ppp/2n5/8/2B1Pp2/8/PPPP2PP/RNBQK1NR": { "eco": "C33", "name": "King's Gambit Accepted: Bishop's Gambit, Maurian Defense" }, "rnbqkb1r/ppppnppp/8/8/2B1Pp2/8/PPPP2PP/RNBQK1NR": { "eco": "C33", "name": "King's Gambit Accepted: Bishop's Gambit, Steinitz Defense" }, "rnbk1bnr/pppp2pp/8/8/2B1pp1q/2N5/PPPPQ1PP/R1BK2NR": { "eco": "C33", "name": "King's Gambit Accepted: Lopez-Gianutio Countergambit, Hein Variation" }, "rnbqkbnr/ppp3pp/3p4/5P2/5p2/8/PPPPB1PP/RNBQK1NR": { "eco": "C33", "name": "King's Gambit Accepted: Tartakower Gambit, Weiss Defense" }, "rnbqkbnr/pppp1pp1/7p/8/4Pp2/5N2/PPPP2PP/RNBQKB1R": { "eco": "C34", "name": "King's Gambit Accepted: Becker Defense" }, "rnbqkb1r/ppppnppp/8/8/4Pp2/5N2/PPPP2PP/RNBQKB1R": { "eco": "C34", "name": "King's Gambit Accepted: Bonsch-Osmolovsky Variation" }, "rnbqkbnr/ppp2ppp/3p4/8/4Pp2/5N2/PPPP2PP/RNBQKB1R": { "eco": "C34", "name": "King's Gambit Accepted: Fischer Defense" }, "rnbqkbnr/pppp2pp/8/5p2/4Pp2/5N2/PPPP2PP/RNBQKB1R": { "eco": "C34", "name": "King's Gambit Accepted: Gianutio Countergambit" }, "rnbqk1nr/ppp2pb1/3p3p/6p1/2BPPp1P/5N2/PPP3P1/RNBQK2R": { "eco": "C34", "name": "King's Gambit Accepted: Greco Gambit" }, "rnbqkbnr/pppp1p1p/8/6p1/4Pp2/5N2/PPPP2PP/RNBQKB1R": { "eco": "C34", "name": "King's Gambit Accepted: King Knight's Gambit" }, "r1bqkbnr/pppp1ppp/2n5/8/4Pp2/5N2/PPPP2PP/RNBQKB1R": { "eco": "C34", "name": "King's Gambit Accepted: MacLeod Defense" }, "rnbqkb1r/pppp1ppp/5n2/8/4Pp2/5N2/PPPP2PP/RNBQKB1R": { "eco": "C34", "name": "King's Gambit Accepted: Schallopp Defense" }, "rnbqk1nr/ppppbppp/8/8/4Pp2/5N2/PPPP2PP/RNBQKB1R": { "eco": "C35", "name": "King's Gambit Accepted: Cunningham Defense" }, "rnbqk2r/ppppbppp/5n2/8/2B1Pp2/5N2/PPPP2PP/RNBQK2R": { "eco": "C35", "name": "King's Gambit Accepted: Cunningham Defense, McCormick Defense" }, "rnbqkb1r/ppp2ppp/5n2/3P4/5p2/5N2/PPPP2PP/RNBQKB1R": { "eco": "C36", "name": "King's Gambit Accepted: Abbazia Defense" }, "rnbqkb1r/p4ppp/2p5/3n4/2B2p2/5N2/PPPP2PP/RNBQK2R": { "eco": "C36", "name": "King's Gambit Accepted: Abbazia Defense, Main Line" }, "rnbqkbnr/ppp2ppp/8/3p4/4Pp2/5N2/PPPP2PP/RNBQKB1R": { "eco": "C36", "name": "King's Gambit Accepted: Modern Defense" }, "r1bqkbnr/pppp1p1p/2n5/6p1/2B1Pp2/5N2/PPPP2PP/RNBQK2R": { "eco": "C37", "name": "King's Gambit Accepted: Blachly Gambit" }, "rnb2bnr/pppp1k1p/5q2/8/4P3/2N1pQ2/PPP3PP/R4RK1": { "eco": "C37", "name": "King's Gambit Accepted: Double Muzio Gambit, Young Gambit" }, "rn1qkbnr/ppp2p2/3p4/6p1/2B1Ppp1/5N2/PPPP2P1/RNBQ1RK1": { "eco": "C37", "name": "King's Gambit Accepted: Middleton Countergambit" }, "rnb1kbnr/ppppqp1p/8/8/2B1Pp2/5Q2/PPPP2PP/RNB2RK1": { "eco": "C37", "name": "King's Gambit Accepted: Muzio Gambit Accepted, From's Defense" }, "rnbqkbnr/ppp2p1p/8/3p4/2B1Ppp1/5N2/PPPP2PP/RNBQ1RK1": { "eco": "C37", "name": "King's Gambit Accepted: Muzio Gambit, Brentano Defense" }, "r1bqkbnr/pppp1p1p/2n5/8/2B1Pp2/5Q2/PPPP2PP/RNB2RK1": { "eco": "C37", "name": "King's Gambit Accepted: Muzio Gambit, Holloway Defense" }, "rnb1kbnr/ppppqp1p/8/8/2B1Ppp1/5N2/PPPP2PP/RNBQ1RK1": { "eco": "C37", "name": "King's Gambit Accepted: Muzio Gambit, Kling and Horwitz Counterattack" }, "rnb1kbnr/pppp1p1p/5q2/8/2B1Pp2/5Q2/PPPP2PP/RNB2RK1": { "eco": "C37", "name": "King's Gambit Accepted: Muzio Gambit, Sarratt Defense" }, "rnb1kb1r/ppp2p1p/3p3n/4N3/2BPPppq/8/PPP3PP/RNBQ1K1R": { "eco": "C37", "name": "King's Gambit Accepted: Salvio Gambit, Anderssen Counterattack" }, "rnb1kbnr/pppp1p1p/8/4N3/2B1P1pq/5p2/PPPP2PP/RNBQ1K1R": { "eco": "C37", "name": "King's Gambit Accepted: Salvio Gambit, Cochrane Gambit" }, "rnb1kb1r/pppp1p1p/5n2/4N3/2B1Pppq/8/PPPP2PP/RNBQ1K1R": { "eco": "C37", "name": "King's Gambit Accepted: Salvio Gambit, Santa Maria Defense" }, "rnb1kb1r/pppp1p1p/7n/4N3/2B1Pppq/8/PPPP2PP/RNBQ1K1R": { "eco": "C37", "name": "King's Gambit Accepted: Salvio Gambit, Silberschmidt Defense" }, "r1b1kbnr/pppp1p1p/2n5/4N3/2B1Pppq/8/PPPP2PP/RNBQ1K1R": { "eco": "C37", "name": "King's Gambit Accepted: Salvio Gambit, Viennese Variation" }, "rnb1kb1r/pppp1p1p/7n/4N3/2BPP1pq/5p2/PPP3PP/RNBQ1K1R": { "eco": "C37", "name": "King's Gambit Accepted: Silberschmidt Gambit" }, "rnbqk1nr/pppp1pbp/8/6p1/2B1Pp2/5N2/PPPP2PP/RNBQK2R": { "eco": "C38", "name": "King's Gambit Accepted: Traditional Variation" }, "rnbq3r/pppp1k2/3b1n1p/8/4PQ1P/8/PPPP2P1/RNB1KB1R": { "eco": "C39", "name": "King's Gambit Accepted: Allgaier, Horny Defense" }, "rnbqkb1r/pppp1p1p/5n2/6N1/4PppP/8/PPPP2P1/RNBQKB1R": { "eco": "C39", "name": "King's Gambit Accepted: Allgaier, Schlechter Defense" }, "rnbqk2r/ppp2p1p/3b1n2/3PN3/2B2ppP/8/PPPP2P1/RNBQK2R": { "eco": "C39", "name": "King's Gambit Accepted: Kieseritzky Gambit, Anderssen Defense" }, "rnbqk2r/ppp2p1p/3b4/3PN3/2BP1npP/8/PPP3P1/RN1QK2R": { "eco": "C39", "name": "King's Gambit Accepted: Kieseritzky Gambit, Anderssen-Cordel Gambit" }, "rnbqkb1r/pppp1p1p/5n2/4N3/4PppP/8/PPPP2P1/RNBQKB1R": { "eco": "C39", "name": "King's Gambit Accepted: Kieseritzky Gambit, Berlin Defense" }, "rnbqkb1r/ppp2p1p/5n2/3p4/4PpNP/8/PPPP2P1/RNBQKB1R": { "eco": "C39", "name": "King's Gambit Accepted: Kieseritzky Gambit, Berlin Defense, de Riviere Variation" }, "rnbqkbnr/ppp2p1p/8/3pN3/4PppP/8/PPPP2P1/RNBQKB1R": { "eco": "C39", "name": "King's Gambit Accepted: Kieseritzky Gambit, Brentano Defense" }, "rnbqkbnr/ppp2p1p/3p4/4N3/4PppP/8/PPPP2P1/RNBQKB1R": { "eco": "C39", "name": "King's Gambit Accepted: Kieseritzky Gambit, Kolisch Defense" }, "rnbqkbnr/pppp1p2/8/4N2p/4PppP/8/PPPP2P1/RNBQKB1R": { "eco": "C39", "name": "King's Gambit Accepted: Kieseritzky Gambit, Long Whip" }, "r1bqkbnr/pppp1p1p/2n5/4N3/4PppP/8/PPPP2P1/RNBQKB1R": { "eco": "C39", "name": "King's Gambit Accepted: Kieseritzky Gambit, Neumann Defense" }, "rnbqk1nr/pppp1pbp/8/4N3/4PppP/8/PPPP2P1/RNBQKB1R": { "eco": "C39", "name": "King's Gambit Accepted: Kieseritzky Gambit, Paulsen Defense" }, "rnbqk2r/ppp2pbp/5n2/3PN3/2B2ppP/8/PPPP2P1/RNBQK2R": { "eco": "C39", "name": "King's Gambit Accepted: Kieseritzky Gambit, Paulsen Defense Deferred" }, "rnbqk2r/ppp2p1p/5n2/3Pb3/2B2ppP/8/PPPP2P1/RNBQ1RK1": { "eco": "C39", "name": "King's Gambit Accepted: Kieseritzky Gambit, Rice Gambit" }, "rnb1kbnr/ppppqp1p/8/4N3/4PppP/8/PPPP2P1/RNBQKB1R": { "eco": "C39", "name": "King's Gambit Accepted: Kieseritzky Gambit, Rosenthal Defense" }, "rnbqk1nr/ppppbp1p/8/4N3/4PppP/8/PPPP2P1/RNBQKB1R": { "eco": "C39", "name": "King's Gambit Accepted: Kieseritzky, Polerio Defense" }, "rnbqkbnr/ppp2ppp/8/3pp3/4P3/5N2/PPPP1PPP/RNBQKB1R": { "eco": "C40", "name": "Elephant Gambit" }, "rnbqk1nr/ppp2ppp/3b4/3Pp3/8/5N2/PPPP1PPP/RNBQKB1R": { "eco": "C40", "name": "Elephant Gambit: Maróczy Gambit" }, "rnbqkbnr/ppp2ppp/8/3P4/4p3/5N2/PPPP1PPP/RNBQKB1R": { "eco": "C40", "name": "Elephant Gambit: Paulsen Countergambit" }, "rnb1kbnr/ppp2ppp/8/4N1q1/2B1p3/8/PPPP1PPP/RNBQK2R": { "eco": "C40", "name": "Elephant Gambit: Wasp Variation" }, "rnb1kbnr/ppppqppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R": { "eco": "C40", "name": "Gunderam Defense" }, "rnbqk1nr/pppp1ppp/8/2b1p3/4P3/5N2/PPPP1PPP/RNBQKB1R": { "eco": "C40", "name": "King's Pawn Game: Busch-Gass Gambit" }, "r1bqk1nr/pppp1ppp/2n5/2b1N3/4P3/8/PPPP1PPP/RNBQKB1R": { "eco": "C40", "name": "King's Pawn Game: Busch-Gass Gambit, Chiodini Gambit" }, "rnbqkbnr/pppp2pp/5p2/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R": { "eco": "C40", "name": "King's Pawn Game: Damiano Defense" }, "rnb1kbnr/ppp1q1pp/5p2/3p4/4P3/5N2/PPPP1PPP/RNBQKB1R": { "eco": "C40", "name": "King's Pawn Game: Damiano Defense, Damiano Gambit, Chigorin Gambit" }, "rnb1kbnr/ppppq1pp/8/4pp2/2B1P3/5N2/PPPP1PPP/RNBQK2R": { "eco": "C40", "name": "King's Pawn Game: Gunderam Defense, Gunderam Gambit" }, "rnbqkbnr/pp1p1ppp/2p5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R": { "eco": "C40", "name": "King's Pawn Game: Gunderam Gambit" }, "rnb1kbnr/pppp1ppp/5q2/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R": { "eco": "C40", "name": "King's Pawn Game: McConnell Defense" }, "rnbqkbnr/pppp2pp/8/4pp2/4P3/5N2/PPPP1PPP/RNBQKB1R": { "eco": "C40", "name": "Latvian Gambit" }, "rnb1kb1N/ppp3pp/5n2/3p4/2B1p3/8/PPPP1PqP/RNBQKR2": { "eco": "C40", "name": "Latvian Gambit: Behting Variation" }, "rnbqkb1r/pppp2pp/5n2/4N3/2B1p3/8/PPPP1PPP/RNBQK2R": { "eco": "C40", "name": "Latvian Gambit: Corkscrew Countergambit" }, "rnb1kb1N/ppp1q1pp/5n2/3p4/2B1p3/8/PPPP1PPP/RNBQK2R": { "eco": "C40", "name": "Latvian Gambit: Corkscrew Gambit" }, "r1bqkbnr/pppp2pp/2n5/4Np2/4P3/8/PPPP1PPP/RNBQKB1R": { "eco": "C40", "name": "Latvian Gambit: Fraser Defense" }, "rnb1kbnr/ppppq1pp/8/4Np2/4P3/8/PPPP1PPP/RNBQKB1R": { "eco": "C40", "name": "Latvian Gambit: Greco Variation" }, "rnbqkb1r/pppp2pp/5n2/4pp2/2B1P3/5N2/PPPP1PPP/RNBQK2R": { "eco": "C40", "name": "Latvian Gambit: Mayet Attack, Morgado Defense" }, "rnb1kbnr/pppp2pp/8/4N3/2BPp3/8/PPP2PqP/RNBQK2R": { "eco": "C40", "name": "Latvian Gambit: Mayet Attack, Poisoned Pawn Variation" }, "rnbqkbnr/ppp3pp/8/3pN3/2B1p3/8/PPPP1PPP/RNBQK2R": { "eco": "C40", "name": "Latvian Gambit: Mayet Attack, Polerio-Svedenborg Variation" }, "rnbqkbnr/p1pp2pp/8/1p2pp2/2B1P3/5N2/PPPP1PPP/RNBQK2R": { "eco": "C40", "name": "Latvian Gambit: Mayet Attack, Strautins Gambit" }, "rnbqkbnr/ppp2ppp/3p4/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R": { "eco": "C41", "name": "Philidor Defense" }, "rnbqk1nr/ppp1bppp/3p4/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R": { "eco": "C41", "name": "Philidor Defense" }, "r2qkbnr/pppn1ppp/3p4/4P3/4P1b1/5N2/PPP2PPP/RNBQKB1R": { "eco": "C41", "name": "Philidor Defense: Alapin-Blackburne Gambit" }, "rn1qkbnr/pppb1ppp/3p4/8/3QP3/5N2/PPP2PPP/RNB1KB1R": { "eco": "C41", "name": "Philidor Defense: Boden Variation" }, "rnbqkbnr/ppp2ppp/3p4/8/3pP3/5N2/PPP2PPP/RNBQKB1R": { "eco": "C41", "name": "Philidor Defense: Exchange Variation" }, "rnbqkb1r/ppp2ppp/3p1n2/8/3NP3/8/PPP2PPP/RNBQKB1R": { "eco": "C41", "name": "Philidor Defense: Exchange Variation" }, "r1bqkbnr/pppn1ppp/3p4/4p3/3PP3/5N2/PPP2PPP/RNBQKB1R": { "eco": "C41", "name": "Philidor Defense: Hanham Variation" }, "r1bqkbnr/ppp2ppp/1n1p4/4p3/2BPP3/5N2/PPP2PPP/RNBQK2R": { "eco": "C41", "name": "Philidor Defense: Hanham Variation, Sharp Variation" }, "r1bq1rk1/pp1nbppp/2p4n/3pp1N1/2BPPP2/2P5/PP4PP/RNBQ1RK1": { "eco": "C41", "name": "Philidor Defense: Hanham, Berger Variation" }, "rnbqkbnr/ppp2p1p/3p2p1/8/3NP3/8/PPP2PPP/RNBQKB1R": { "eco": "C41", "name": "Philidor Defense: Larsen Variation" }, "r1bqkb1r/pppn1ppp/3p1n2/4p3/3PP3/2N2N2/PPP2PPP/R1BQKB1R": { "eco": "C41", "name": "Philidor Defense: Lion Variation" }, "r1bqk2r/pppnbpp1/3p1n1p/4p3/2BPP3/2N2N2/PPP2PPP/R1BQ1RK1": { "eco": "C41", "name": "Philidor Defense: Lion Variation, Lion's Claw" }, "r1bq1rk1/pp1nbppp/2pp1n2/8/P1BpP3/2N2N2/1PP1QPPP/R1B2RK1": { "eco": "C41", "name": "Philidor Defense: Lion Variation, Sozin Variation" }, "rnbqkbnr/ppp3pp/3p4/4pp2/2B1P3/5N2/PPPP1PPP/RNBQK2R": { "eco": "C41", "name": "Philidor Defense: Lopez Countergambit" }, "rnbqkb1r/ppp2ppp/3p1n2/4p3/3PP3/5N2/PPP2PPP/RNBQKB1R": { "eco": "C41", "name": "Philidor Defense: Nimzowitsch Variation" }, "rnbqkbnr/ppp3pp/3p4/4pp2/3PP3/5N2/PPP2PPP/RNBQKB1R": { "eco": "C41", "name": "Philidor Defense: Philidor Countergambit" }, "rn1qkbnr/pppb1ppp/3p4/4p3/3PP3/5N2/PPP2PPP/RNBQKB1R": { "eco": "C41", "name": "Philidor Defense: Philidor Gambit" }, "rnbqkb1r/pppp1ppp/5n2/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R": { "eco": "C42", "name": "Russian Game" }, "rnbqkb1r/ppp2ppp/3p1n2/4N3/4P3/8/PPPP1PPP/RNBQKB1R": { "eco": "C42", "name": "Russian Game" }, "rnbqkb1r/ppp2ppp/3p4/8/4n3/5N2/PPPP1PPP/RNBQKB1R": { "eco": "C42", "name": "Russian Game" }, "rnbqkb1r/ppp2ppp/3p1n2/8/3P4/5N2/PPP2PPP/RNBQKB1R": { "eco": "C42", "name": "Russian Game: Classical Attack, Closed Variation" }, "rn1q1rk1/ppp3pp/8/3P1p2/3Pn1b1/3B1N2/PP3PPb/RNBQR1K1": { "eco": "C42", "name": "Russian Game: Classical Attack, Marshall Trap" }, "rnbqk2r/ppp2ppp/3b4/3p4/3Pn3/3B1N2/PPP2PPP/RNBQK2R": { "eco": "C42", "name": "Russian Game: Classical Attack, Marshall Variation" }, "rn1q1rk1/pp3ppp/2pb4/3p4/2PPn1b1/3B1N2/PP3PPP/RNBQR1K1": { "eco": "C42", "name": "Russian Game: Classical Attack, Marshall Variation, Chinese Gambit" }, "r2qk2r/ppp3pp/2n5/3p1p2/2PPn1bb/3B1N2/PP3PPP/RNBQR1K1": { "eco": "C42", "name": "Russian Game: Classical Attack, Maróczy Variation" }, "rnbq1rk1/ppp1bppp/8/3p4/3Pn3/3B1N2/PPP2PPP/RNBQ1RK1": { "eco": "C42", "name": "Russian Game: Classical Attack, Mason Variation" }, "r1bqkb1r/ppp2ppp/2n5/3p4/3Pn3/3B1N2/PPP2PPP/RNBQK2R": { "eco": "C42", "name": "Russian Game: Classical Attack, Mason-Showalter Variation" }, "rnbq1rk1/pp3ppp/2pb4/3p4/2PPn3/3B1N2/PP3PPP/RNBQ1RK1": { "eco": "C42", "name": "Russian Game: Classical Attack, Staunton Variation" }, "rn1q1rk1/ppp2ppp/3b4/3p4/2PPn1b1/3B1N2/PP3PPP/RNBQ1RK1": { "eco": "C42", "name": "Russian Game: Classical Attack, Tarrasch Variation" }, "rnbqkb1r/pppp1ppp/8/4N3/4n3/8/PPPP1PPP/RNBQKB1R": { "eco": "C42", "name": "Russian Game: Damiano Variation" }, "rnb1kb1r/ppppqppp/8/4N3/4n3/8/PPPPQPPP/RNB1KB1R": { "eco": "C42", "name": "Russian Game: Damiano Variation, Kholmov Gambit" }, "r1bqkb1r/pppp1ppp/2n2n2/4N3/4P3/8/PPPP1PPP/RNBQKB1R": { "eco": "C42", "name": "Russian Game: Stafford Gambit" }, "r1bqkb1r/ppp2ppp/2p2n2/8/4P3/8/PPPP1PPP/RNBQKB1R": { "eco": "C42", "name": "Russian Game: Stafford Gambit" }, "rnbqkb1r/pppp1ppp/5n2/8/3pP3/5N2/PPP2PPP/RNBQKB1R": { "eco": "C43", "name": "Russian Game: Modern Attack" }, "r1bqkb1r/pppp1ppp/2n5/2n1P3/3N4/8/PPP1QPPP/RNB1KB1R": { "eco": "C43", "name": "Russian Game: Modern Attack, Bardeleben Variation" }, "r1bqkb1r/pppp1ppp/2n5/4p3/3Pn3/3B1N2/PPP2PPP/RNBQK2R": { "eco": "C43", "name": "Russian Game: Modern Attack, Murrey Variation" }, "rnbqkb1r/ppp2ppp/5n2/3pp3/3PP3/5N2/PPP2PPP/RNBQKB1R": { "eco": "C43", "name": "Russian Game: Modern Attack, Symmetrical Variation" }, "rnbqkb1r/pppp1ppp/8/4p3/3Pn3/5N2/PPP2PPP/RNBQKB1R": { "eco": "C43", "name": "Russian Game: Modern Attack, Symmetrical Variation" }, "rnbq1rk1/ppp2ppp/8/3pb3/2PPn3/3B4/PP3PPP/RNBQ1RK1": { "eco": "C43", "name": "Russian Game: Modern Attack, Trifunovic Variation" }, "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R": { "eco": "C44", "name": "King's Knight Opening: Normal Variation" }, "r2qkbnr/pppb1ppp/2n5/3pp3/Q3P3/2P2N2/PP1P1PPP/RNB1KB1R": { "eco": "C44", "name": "Ponziani Opening: Caro Gambit" }, "r1bqkb1r/pppp1ppp/2n2n2/4p3/4P3/2P2N2/PP1P1PPP/RNBQKB1R": { "eco": "C44", "name": "Ponziani Opening: Jaenisch Counterattack" }, "r1bqkb1r/ppp2ppp/2n2n2/3pp3/Q3P3/2P2N2/PP1P1PPP/RNB1KB1R": { "eco": "C44", "name": "Ponziani Opening: Leonhardt Variation" }, "r1bqkbnr/pppp2pp/2n5/4pp2/4P3/2P2N2/PP1P1PPP/RNBQKB1R": { "eco": "C44", "name": "Ponziani Opening: Ponziani Countergambit" }, "rnbqk2r/ppp1b1pp/3p1n2/3Pp3/4N3/2PB4/PP3PPP/RNBQK2R": { "eco": "C44", "name": "Ponziani Opening: Ponziani Countergambit, Cordel Variation" }, "r1bqk1nr/ppppbppp/2n5/4p3/4P3/2P2N2/PP1P1PPP/RNBQKB1R": { "eco": "C44", "name": "Ponziani Opening: Romanishin Variation" }, "r1bqkb1r/ppppnppp/2n5/4p3/4P3/2P2N2/PP1P1PPP/RNBQKB1R": { "eco": "C44", "name": "Ponziani Opening: Réti Variation" }, "r1bqkbnr/ppp3pp/2n2p2/3pp3/Q3P3/2P2N2/PP1P1PPP/RNB1KB1R": { "eco": "C44", "name": "Ponziani Opening: Steinitz Variation" }, "r1bqk2r/pppp1ppp/2n5/2bPp3/4n3/2P2N2/PP3PPP/RNBQKB1R": { "eco": "C44", "name": "Ponziani Opening: Vukovic Gambit" }, "r1bqkbnr/pppp1ppp/2n5/8/3pP3/5N2/PPP2PPP/RNBQKB1R": { "eco": "C44", "name": "Scotch Game" }, "r1bqk1nr/ppppbppp/2n5/8/2BpP3/5N2/PPP2PPP/RNBQK2R": { "eco": "C44", "name": "Scotch Game: Benima Defense" }, "r1bq3r/ppp2k1p/2n3p1/2Qp4/3pP3/8/PPP2PPP/RNB1K2R": { "eco": "C44", "name": "Scotch Game: Cochrane-Shumov Defense" }, "r1bqk2r/pppp1ppp/2n2n2/8/1bB1P3/2N2N2/PP3PPP/R1BQK2R": { "eco": "C44", "name": "Scotch Game: Göring Gambit, Bardeleben Variation" }, "r1bqk1nr/pppp1ppp/2n5/8/1b2P3/2N2N2/PP3PPP/R1BQKB1R": { "eco": "C44", "name": "Scotch Game: Göring Gambit, Main Line" }, "r1bq1rk1/pppp1ppp/5n2/4n1N1/1bB5/8/PB3PPP/RN1Q1RK1": { "eco": "C44", "name": "Scotch Game: Hanneken Variation" }, "r1bqk1nr/pppp1ppp/2n5/2b5/2BpP3/5N2/PPP2PPP/RNBQK2R": { "eco": "C44", "name": "Scotch Game: Haxo Gambit" }, "r1bqkbnr/pppp1ppp/8/4p3/3nP3/5N2/PPP2PPP/RNBQKB1R": { "eco": "C44", "name": "Scotch Game: Lolli Variation" }, "r2qk1nr/ppp2ppp/2np4/2b5/2BpP1b1/2P2N2/PP3PPP/RNBQ1RK1": { "eco": "C44", "name": "Scotch Game: Scotch Gambit, Cochrane-Anderssen Variation" }, "r1bqkb1r/pppp1ppp/2n2n2/8/2BpP3/5N2/PPP2PPP/RNBQK2R": { "eco": "C44", "name": "Scotch Game: Scotch Gambit, Dubois Réti Defense" }, "r1bqkbnr/ppp2ppp/2n5/3p4/3pP3/2P2N2/PP3PPP/RNBQKB1R": { "eco": "C44", "name": "Scotch Game: Scotch Gambit, Göring Gambit Declined" }, "r1bqkb1r/pppp1ppp/2n5/4P3/2Bp2n1/5N2/PPP2PPP/RNBQK2R": { "eco": "C44", "name": "Scotch Game: Scotch Gambit, Kingside Variation" }, "r1bqk1nr/pppp1ppp/2n5/8/1bBpP3/5N2/PPP2PPP/RNBQK2R": { "eco": "C44", "name": "Scotch Game: Scotch Gambit, London Defense" }, "r1bqk1nr/pppp1ppp/2n5/2b5/3NP3/8/PPP2PPP/RNBQKB1R": { "eco": "C45", "name": "Scotch Game: Classical Variation" }, "r1b1k1nr/pppp1ppp/2N2q2/2b5/4P3/8/PPP2PPP/RNBQKB1R": { "eco": "C45", "name": "Scotch Game: Classical Variation, Intermezzo Variation" }, "r1b1k1nr/pppp1ppp/2n3q1/2b5/3NP3/2P1B3/PP3PPP/RN1QKB1R": { "eco": "C45", "name": "Scotch Game: Classical Variation, Millennium Variation" }, "1rb2rk1/pp3ppp/5q2/3P4/1n6/2P1Q3/PP3PPP/RN2KB1R": { "eco": "C45", "name": "Scotch Game: Gottschall Variation" }, "r1bqk1nr/pppp1ppp/2n5/8/1b1NP3/8/PPP2PPP/RNBQKB1R": { "eco": "C45", "name": "Scotch Game: Malaniuk Variation" }, "r1b1k1nr/pppp1ppp/2n5/8/1b1NP2q/2N5/PPP2PPP/R1BQKB1R": { "eco": "C45", "name": "Scotch Game: Modern Defense" }, "r1bnk2r/ppppnppp/5q2/1Bb5/3NP3/2P1B3/PP3PPP/RN1QK2R": { "eco": "C45", "name": "Scotch Game: Paulsen, Gunsberg Defense" }, "r1bqk1nr/pppp1ppp/2n5/8/1b2P3/1N6/PPP2PPP/RNBQKB1R": { "eco": "C45", "name": "Scotch Game: Romanishin Variation" }, "r1bk2nr/pppp1ppp/2n3q1/1N6/8/8/PPPNBPPP/R2Q1RK1": { "eco": "C45", "name": "Scotch Game: Rosenthal Variation" }, "r1bqkb1r/pppp1ppp/2n2n2/8/3NP3/8/PPP2PPP/RNBQKB1R": { "eco": "C45", "name": "Scotch Game: Schmidt Variation" }, "r1b1kbnr/pppp1ppp/2n5/8/3NP2q/8/PPP2PPP/RNBQKB1R": { "eco": "C45", "name": "Scotch Game: Steinitz Variation" }, "r1bqkb1r/pppp1ppp/2n2n2/4p3/4P3/2N2N2/PPPP1PPP/R1BQKB1R": { "eco": "C46", "name": "Four Knights Game" }, "r1bqk1nr/pppp2pp/6n1/4Pp2/1bBP4/2N2Q2/PPP2PPP/R1B1K2R": { "eco": "C46", "name": "Four Knights Game: Halloween Gambit, Oldtimer Variation" }, "1rb1kbnr/pp1p1ppp/3P1qn1/1N6/5P2/8/PPP3PP/R1BQKB1R": { "eco": "C46", "name": "Four Knights Game: Halloween Gambit, Plasma Variation" }, "r1bqk1nr/pppp1ppp/2n5/4p3/1b2P3/2N2N2/PPPP1PPP/R1BQKB1R": { "eco": "C46", "name": "Three Knights Opening" }, "r1bqk2r/pppp1ppp/2n2n2/3Np3/1b2P3/5N2/PPPP1PPP/R1BQKB1R": { "eco": "C46", "name": "Three Knights Opening: Schlechter Variation" }, "r1bqkbnr/pppp1p1p/2n3p1/4p3/4P3/2N2N2/PPPP1PPP/R1BQKB1R": { "eco": "C46", "name": "Three Knights Opening: Steinitz Defense" }, "r1bqkbnr/pppp2pp/2n5/4pp2/4P3/2N2N2/PPPP1PPP/R1BQKB1R": { "eco": "C46", "name": "Three Knights Opening: Winawer Defense" }, "r1bqkb1r/pppp1ppp/2n2n2/8/3pP3/2N2N2/PPP2PPP/R1BQKB1R": { "eco": "C47", "name": "Four Knights Game: Scotch Variation Accepted" }, "r1bqkb1r/pppp2pp/2n5/3N1p2/3pn3/5N2/PPP1QPPP/R1B1KB1R": { "eco": "C47", "name": "Four Knights Game: Scotch Variation, Belgrade Gambit, Modern Defense" }, "r1b1k2r/ppppqppp/2n2n2/4N3/1b1PP3/2N5/PPP2PPP/R1BQKB1R": { "eco": "C47", "name": "Four Knights Game: Scotch Variation, Krause Gambit, Leonhardt Defense" }, "r1bqk2r/pppp1ppp/5n2/3Pp3/1b1nP3/2N2N2/PPP2PPP/R1BQKB1R": { "eco": "C47", "name": "Four Knights Game: Scotch Variation, Oxford Gambit" }, "r1bqkb1r/pppp1ppp/2n5/8/3Nn3/2N5/PPP2PPP/R1BQKB1R": { "eco": "C47", "name": "Four Knights Game: Scotch Variation, Schmid Defense" }, "r1bq1rk1/pppp1ppp/2n2n2/1B2P3/1b1P1P2/2N5/PPP3PP/R1BQ1RK1": { "eco": "C48", "name": "Four Knights Game: Bardeleben Variation" }, "r1bq1rk1/pppp1ppp/5n2/1Bb1N3/3nP3/2N5/PPPP1PPP/R1BQ1RK1": { "eco": "C48", "name": "Four Knights Game: Marshall Variation" }, "r1bq1rk1/ppp2ppp/1b1p1n2/4p3/N3P3/3P1B2/PPP2PPP/R1BQ1RK1": { "eco": "C48", "name": "Four Knights Game: Rubinstein Countergambit, Maróczy Variation" }, "r1bqk2r/pppp1ppp/2n2n2/1Bb1p3/4P3/2N2N2/PPPP1PPP/R1BQK2R": { "eco": "C48", "name": "Four Knights Game: Spanish Variation, Classical Variation" }, "r1bq1rk1/pppp1ppp/5n2/2b1N3/B2nP3/2N5/PPPP1PPP/R1BQK2R": { "eco": "C48", "name": "Four Knights Game: Spanish Variation, Classical Variation, Marshall Gambit" }, "r1bqkb1r/pppp1ppp/5n2/1B2p3/3nP3/2N2N2/PPPP1PPP/R1BQK2R": { "eco": "C48", "name": "Four Knights Game: Spanish Variation, Rubinstein Variation" }, "r3kb1r/1pp2ppp/p1p1b3/3q4/3PN3/8/PPP2PPP/R1BQR1K1": { "eco": "C48", "name": "Four Knights Game: Spielmann Variation" }, "r1b2rk1/ppp1qppp/2n2n2/1B1pp3/1b2P3/3P1N2/PPP1NPPP/R1BQ1RK1": { "eco": "C49", "name": "Four Knights Game: Alatortsev Variation" }, "r1bqk2r/pppp1ppp/2n2n2/1B2p3/1b2P3/2N2N2/PPPP1PPP/R1BQK2R": { "eco": "C49", "name": "Four Knights Game: Double Spanish" }, "r1bq1rk1/pppp1ppp/2n5/1B1P4/1b2p3/5N2/PPPP1PPP/R1BQ1RK1": { "eco": "C49", "name": "Four Knights Game: Gunsberg Counterattack" }, "r1bq1rk1/pppp1ppp/2n2n2/1B2p3/4P3/2bP1N2/PPP2PPP/R1BQ1RK1": { "eco": "C49", "name": "Four Knights Game: Spanish Variation" }, "r1bq1rk1/ppp2ppp/2np1n2/1B2p3/1b2P3/2NP1N2/PPP2PPP/R1BQ1RK1": { "eco": "C49", "name": "Four Knights Game: Spanish Variation, Symmetrical Variation" }, "r2n1rk1/ppp1qppp/3p1n2/1B2p1B1/3PP1b1/2P2N2/P1P2PPP/R2QR1K1": { "eco": "C49", "name": "Four Knights Game: Spanish Variation, Symmetrical Variation" }, "r1bq1rk1/ppp1nppp/3p1n2/1B2p1B1/1b2P3/2NP1N2/PPP2PPP/R2Q1RK1": { "eco": "C49", "name": "Four Knights Game: Spanish Variation, Symmetrical Variation" }, "r1bq1rk1/ppp2ppp/2n2n2/1B1pp3/4P3/2PP1N2/P1P2PPP/R1BQ1RK1": { "eco": "C49", "name": "Four Knights Game: Svenonius Variation" }, "r1b2rk1/pp2nppp/2pq1n2/3pp1B1/1b2P2N/1BNP4/PPP2PPP/R2Q1RK1": { "eco": "C49", "name": "Four Knights Game: Symmetrical, Blake Variation" }, "r1b2rk1/ppp1qppp/2np1n2/1B2p1B1/4P3/2PP1N2/P1P2PPP/R2Q1RK1": { "eco": "C49", "name": "Four Knights Game: Symmetrical, Metger Unpin" }, "r2q1rk1/ppp2ppp/2npbn2/1B2p1B1/1b2P3/2NP1N2/PPP2PPP/R2Q1RK1": { "eco": "C49", "name": "Four Knights Game: Symmetrical, Tarrasch Variation" }, "r1b1kbnr/pppp1Npp/8/8/4q3/5n2/PPPPBP1P/RNBQKR2": { "eco": "C50", "name": "Blackburne Shilling Gambit" }, "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R": { "eco": "C50", "name": "Four Knights Game: Italian Variation" }, "r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQK2R": { "eco": "C50", "name": "Giuoco Piano" }, "r1bqkbnr/pppp1pp1/2n4p/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R": { "eco": "C50", "name": "Italian Game: Anti-Fried Liver Defense" }, "r1bqk1nr/pppp2pp/2n5/2b1p1N1/2B1Pp2/3P4/PPP2PPP/RNBQK2R": { "eco": "C50", "name": "Italian Game: Giuoco Pianissimo, Dubois Variation" }, "r1bqk1nr/pppp2pp/2n5/2b1pp2/2B1P3/3P1N2/PPP2PPP/RNBQK2R": { "eco": "C50", "name": "Italian Game: Giuoco Pianissimo, Lucchini Gambit" }, "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/3P1N2/PPP2PPP/RNBQK2R": { "eco": "C50", "name": "Italian Game: Giuoco Pianissimo, Normal" }, "r1bqk1nr/ppppbppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R": { "eco": "C50", "name": "Italian Game: Hungarian Defense" }, "r1bqk2r/ppppbppp/2n5/4P3/2Bpn3/2P2N2/PP3PPP/RNBQK2R": { "eco": "C50", "name": "Italian Game: Hungarian Defense, Tartakower Variation" }, "r1bqkbnr/pppp2pp/2n5/4pp2/2B1P3/5N2/PPPP1PPP/RNBQK2R": { "eco": "C50", "name": "Italian Game: Rousseau Gambit" }, "r1bqkbnr/pppp1ppp/8/4p3/2BnP3/5N2/PPPP1PPP/RNBQK2R": { "eco": "C50", "name": "Italian Game: Schilling-Kostic Gambit" }, "r2qk1nr/ppp2ppp/1bnp4/8/2BPP1b1/2N2N2/P4PPP/R1BQ1RK1": { "eco": "C51", "name": "Italian Game: Evans Gambit" }, "r1bqk1nr/pppp1ppp/2n5/4p3/1bB1P3/5N2/P1PP1PPP/RNBQK2R": { "eco": "C51", "name": "Italian Game: Evans Gambit Accepted" }, "r1bqk1nr/pppp1ppp/1bn5/4p3/1PB1P3/5N2/P1PP1PPP/RNBQK2R": { "eco": "C51", "name": "Italian Game: Evans Gambit Declined" }, "r1b1k1nr/pppp1ppp/1b6/nP2N1q1/2B1P3/8/P1PP1PPP/RNBQK2R": { "eco": "C51", "name": "Italian Game: Evans Gambit Declined, Hirschbach Variation" }, "r1bqk2r/pppp1ppp/1b5n/nP2N3/2B1P3/8/P1PP1PPP/RNBQK2R": { "eco": "C51", "name": "Italian Game: Evans Gambit Declined, Lange Variation" }, "r1bqk1nr/ppppbppp/2n5/4p3/2B1P3/2P2N2/P2P1PPP/RNBQK2R": { "eco": "C51", "name": "Italian Game: Evans Gambit, Anderssen Variation" }, "r1bqk1nr/ppppbppp/8/n3p3/2BPP3/2P2N2/P4PPP/RNBQK2R": { "eco": "C51", "name": "Italian Game: Evans Gambit, Anderssen Variation, Cordel Line" }, "r1bqk1nr/p1pp1ppp/2n5/1pb1p3/1PB1P3/5N2/P1PP1PPP/RNBQK2R": { "eco": "C51", "name": "Italian Game: Evans Gambit, Fontaine Countergambit" }, "r1bqk1nr/ppp2ppp/2n5/2bpp3/1PB1P3/5N2/P1PP1PPP/RNBQK2R": { "eco": "C51", "name": "Italian Game: Evans Gambit, Hein Countergambit" }, "r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/2P2N2/P2P1PPP/RNBQK2R": { "eco": "C51", "name": "Italian Game: Evans Gambit, Mayet Defense" }, "r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/2P2N2/P2P1PPP/RNBQK2R": { "eco": "C51", "name": "Italian Game: Evans Gambit, McDonnell Defense" }, "r1bqk1nr/ppp2ppp/1bnp4/8/2BPP3/5N2/P4PPP/RNBQ1RK1": { "eco": "C51", "name": "Italian Game: Evans Gambit, McDonnell Defense, Main Line" }, "r2q2nr/pppb1kpp/1b1p4/n7/3PP3/2N2N2/P1Q2PPP/R1B2RK1": { "eco": "C51", "name": "Italian Game: Evans Gambit, Mortimer-Evans Gambit" }, "r1bqk2r/ppp1nppp/1b1p4/n2P4/2B1P3/5N2/PB3PPP/RN1Q1RK1": { "eco": "C51", "name": "Italian Game: Evans Gambit, Paulsen Variation" }, "r1bqk1nr/pppp1ppp/2nb4/4p3/2B1P3/2P2N2/P2P1PPP/RNBQK2R": { "eco": "C51", "name": "Italian Game: Evans Gambit, Stone-Ware Variation" }, "r1bqk1nr/ppp2ppp/2np4/b3p3/2B1P3/2P2N2/P2P1PPP/RNBQ1RK1": { "eco": "C52", "name": "Italian Game: Evans Gambit" }, "r2qk1nr/ppp2ppp/2np4/b3p3/2BPP1b1/2P2N2/P4PPP/RNBQ1RK1": { "eco": "C52", "name": "Italian Game: Evans Gambit, Alapin-Steinitz Variation" }, "r1bqk2r/pppp1ppp/2n2n2/b7/2BpP3/2P2N2/P4PPP/RNBQ1RK1": { "eco": "C52", "name": "Italian Game: Evans Gambit, Anderssen Defense" }, "r1bqk1nr/ppp2ppp/2np4/b3p3/2BPP3/2P2N2/P4PPP/RNBQK2R": { "eco": "C52", "name": "Italian Game: Evans Gambit, Bronstein Defense" }, "r1bqk1nr/pppp1ppp/2n5/b7/2B1P3/2p2N2/P4PPP/RNBQ1RK1": { "eco": "C52", "name": "Italian Game: Evans Gambit, Compromised Defense" }, "r1bqk1nr/pppp1ppp/2n5/b7/2B1P3/2Pp1N2/P4PPP/RNBQ1RK1": { "eco": "C52", "name": "Italian Game: Evans Gambit, Dufresne Defense" }, "r1bqk1nr/p1pp1ppp/2n5/bp6/2BpP3/2P2N2/P4PPP/RNBQ1RK1": { "eco": "C52", "name": "Italian Game: Evans Gambit, Johner Defense" }, "r1bqk2r/pppp1ppp/2n2n2/b3p3/2BPP3/2P2N2/P4PPP/RNBQK2R": { "eco": "C52", "name": "Italian Game: Evans Gambit, Laroche Variation" }, "r1bqk1nr/ppp2ppp/1bnp4/4p3/2BPP3/2P2N2/P4PPP/RNBQ1RK1": { "eco": "C52", "name": "Italian Game: Evans Gambit, Lasker Defense" }, "r1bqk1nr/p1pp1ppp/2n5/bp2p3/2BPP3/2P2N2/P4PPP/RNBQK2R": { "eco": "C52", "name": "Italian Game: Evans Gambit, Leonhardt Countergambit" }, "r1bqk1nr/pppp1ppp/2n5/b3p3/2B1P3/2P2N2/P2P1PPP/RNBQK2R": { "eco": "C52", "name": "Italian Game: Evans Gambit, Main Line" }, "r1bqk2r/ppppnppp/2n5/b7/2BpP3/2P2N2/P4PPP/RNBQ1RK1": { "eco": "C52", "name": "Italian Game: Evans Gambit, Mieses Defense" }, "r1bqk1nr/pppp1ppp/2n5/b7/2BpP3/2P2N2/P4PPP/RNBQK2R": { "eco": "C52", "name": "Italian Game: Evans Gambit, Pierce Defense" }, "r2qk1nr/pppb1ppp/2np4/b3p3/2BPP3/2P2N2/P4PPP/RNBQ1RK1": { "eco": "C52", "name": "Italian Game: Evans Gambit, Sanders-Alapin Variation" }, "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2P2N2/PP1P1PPP/RNBQK2R": { "eco": "C53", "name": "Italian Game: Classical Variation" }, "r1bqk1nr/pppp2pp/2n5/2b1pp2/2B1P3/2P2N2/PP1P1PPP/RNBQK2R": { "eco": "C53", "name": "Italian Game: Classical Variation, Alexandre Gambit" }, "r1b1k1nr/ppppqppp/1bn5/4p3/2BPP3/2P2N2/PP3PPP/RNBQK2R": { "eco": "C53", "name": "Italian Game: Classical Variation, Center Holding Variation" }, "r1b1k1nr/ppppqppp/2n5/2b1p3/2B1P3/2P2N2/PP1P1PPP/RNBQK2R": { "eco": "C53", "name": "Italian Game: Classical Variation, Closed Variation" }, "r1bqk2r/ppp2ppp/2n2n2/2bpP3/2Bp4/2P2N2/PP3PPP/RNBQK2R": { "eco": "C53", "name": "Italian Game: Classical Variation, Greco Gambit" }, "r1bqk2r/ppp2ppp/2n5/1B1pP3/1b1Pn3/5N2/PP3PPP/RNBQK2R": { "eco": "C53", "name": "Italian Game: Classical Variation, Greco Gambit, Anderssen Variation" }, "r1bqk1nr/ppp2ppp/1bnp4/8/2BPP3/5N2/PP3PPP/RNBQK2R": { "eco": "C53", "name": "Italian Game: Classical Variation, La Bourdonnais Variation" }, "r1bqk2r/pppp1ppp/2n5/8/1bBP4/2n2N2/PP3PPP/R1BQ1RK1": { "eco": "C54", "name": "Italian Game: Classical Variation, Greco Gambit, Greco Variation" }, "r1bqk2r/pppp1ppp/2n5/8/2BPn3/2b2N2/PP3PPP/R1BQ1RK1": { "eco": "C54", "name": "Italian Game: Classical Variation, Greco Gambit, Main Line" }, "r1bqk2r/ppp2ppp/2n5/3p4/2BP4/1Qb2N2/P4PPP/R1B2RK1": { "eco": "C54", "name": "Italian Game: Giuoco Piano, Bernstein Variation" }, "r1bqk2r/ppp2ppp/3p1n2/4p1B1/2BnP3/8/PPP2PPP/RN1Q1RK1": { "eco": "C55", "name": "Italian Game: Giuoco Piano" }, "r1bqkb1r/ppp2ppp/2np1n2/4p3/2BPP3/5N2/PPP2PPP/RNBQK2R": { "eco": "C55", "name": "Italian Game: Scotch Gambit Declined" }, "r1bqk2r/pppp1ppp/2nb1n2/4p3/2BPP3/5N2/PPP2PPP/RNBQK2R": { "eco": "C55", "name": "Italian Game: Scotch Gambit Declined" }, "r1bqkb1r/ppp2ppp/2np1n2/8/2BpP3/5N2/PPP2PPP/RNBQ1RK1": { "eco": "C55", "name": "Italian Game: Scotch Gambit, Janowski Defense" }, "r1bqk2r/pppp1ppp/2n2n2/2b5/2BpP3/5N2/PPP2PPP/RNBQ1RK1": { "eco": "C55", "name": "Italian Game: Scotch Gambit, Max Lange Attack" }, "r1bqk2r/pppp1ppp/2n5/2b1P3/2Bp2n1/5N2/PPP2PPP/RNBQ1RK1": { "eco": "C55", "name": "Italian Game: Scotch Gambit, Max Lange Attack, Spielmann Defense" }, "r1bqk2r/ppppbppp/2n2n2/8/2BpP3/5N2/PPP2PPP/RNBQ1RK1": { "eco": "C55", "name": "Italian Game: Scotch Gambit, de Riviere Defense" }, "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R": { "eco": "C55", "name": "Italian Game: Two Knights Defense" }, "r1bqkb1r/pppp1ppp/2n5/4p3/2BPn3/5N2/PPP2PPP/RNBQK2R": { "eco": "C55", "name": "Italian Game: Two Knights Defense" }, "r1b1k2r/ppp2ppp/2N5/1B1pP3/4n2q/8/PPP2bPP/RNBQ1K1R": { "eco": "C55", "name": "Italian Game: Two Knights Defense, Keidansky Variation" }, "2kr3r/ppp2ppp/1bn1bPq1/6N1/2ppNPP1/8/PPP4P/R1BQR1K1": { "eco": "C55", "name": "Italian Game: Two Knights Defense, Max Lange Attack, Berger Variation" }, "r2qk2r/ppp2p1p/2n1bPp1/2b3N1/2pp4/8/PPP2PPP/RNBQR1K1": { "eco": "C55", "name": "Italian Game: Two Knights Defense, Max Lange Attack, Loman Defense" }, "r3kb1r/ppp2ppp/2n1bP2/5qN1/2ppN3/8/PPP2PPP/R1BQR1K1": { "eco": "C55", "name": "Italian Game: Two Knights Defense, Max Lange Attack, Rubinstein Variation" }, "r1bqkb1r/pppp1ppp/2n5/8/2Bpn3/5N2/PPP2PPP/RNBQ1RK1": { "eco": "C56", "name": "Italian Game: Scotch Gambit, Double Gambit Accepted" }, "r1bq1b1r/ppn3pp/2p1k3/3np3/2BPQ3/P1N5/1PP2PPP/R1B1K2R": { "eco": "C57", "name": "Italian Game: Two Knights Defense, Fegatello Attack, Leonhardt Variation" }, "r1bqkb1r/ppp2ppp/5n2/3Pp1N1/2Bn4/8/PPPP1PPP/RNBQK2R": { "eco": "C57", "name": "Italian Game: Two Knights Defense, Fritz Variation" }, "r1bqkb1r/ppp2ppp/5n2/3Pp1N1/1nB5/8/PPPP1PPP/RNBQK2R": { "eco": "C57", "name": "Italian Game: Two Knights Defense, Kloss Gambit" }, "r1bqkb1r/ppp2ppp/2n2n2/3pp1N1/2B1P3/8/PPPP1PPP/RNBQK2R": { "eco": "C57", "name": "Italian Game: Two Knights Defense, Knight Attack, Normal Variation" }, "r1bqk2r/ppp2ppp/2n5/3np1N1/1bBP4/8/PPP2PPP/RNBQK2R": { "eco": "C57", "name": "Italian Game: Two Knights Defense, Pincus Variation" }, "r1bqkb1r/pppp1ppp/2n5/4p1N1/2B1n3/8/PPPP1PPP/RNBQK2R": { "eco": "C57", "name": "Italian Game: Two Knights Defense, Ponziani-Steinitz Gambit" }, "r1bqk2r/pppp1ppp/2n2n2/2b1p1N1/2B1P3/8/PPPP1PPP/RNBQK2R": { "eco": "C57", "name": "Italian Game: Two Knights Defense, Traxler Counterattack" }, "r1bqkb1r/p1p2ppp/2n2n2/1p1Pp1N1/2B5/8/PPPP1PPP/RNBQK2R": { "eco": "C57", "name": "Italian Game: Two Knights Defense, Ulvestad Variation" }, "r1bqkb1r/p4ppp/5n2/np2p1N1/8/5Q2/PPPP1PPP/RNB1K2R": { "eco": "C58", "name": "Italian Game: Two Knights Defense, Blackburne Variation" }, "1rbqkb1r/p4ppp/2p2n2/nB2p1N1/8/5Q2/PPPP1PPP/RNB1K2R": { "eco": "C58", "name": "Italian Game: Two Knights Defense, Colman Variation" }, "r1bqk2r/ppp1bpp1/5n1p/3P4/2P1p3/5N2/PPP1QPPP/RNB1K2R": { "eco": "C58", "name": "Italian Game: Two Knights Defense, Maróczy Variation" }, "r1bqkb1r/ppp2ppp/5n2/n2Pp1N1/2B5/8/PPPP1PPP/RNBQK2R": { "eco": "C58", "name": "Italian Game: Two Knights Defense, Polerio Defense" }, "r1b1kb1r/p1q2pp1/2p2n1p/n3N3/4p3/8/PPPPBPPP/RNBQK2R": { "eco": "C59", "name": "Italian Game: Two Knights Defense, Polerio Defense, Göring Variation" }, "r1bqkb1r/p4pp1/2p2n1p/n3p1N1/8/8/PPPPBPPP/RNBQK2R": { "eco": "C59", "name": "Italian Game: Two Knights Defense, Polerio Defense, Suhle Defense" }, "r1bqk1nr/pppp1ppp/2n5/1B2p3/1b2P3/5N2/PPPP1PPP/RNBQK2R": { "eco": "C60", "name": "Ruy Lopez: Alapin Defense" }, "r1bqk1nr/ppp2ppp/2p5/b3p3/4P3/2P2N2/PP1P1PPP/RNBQK2R": { "eco": "C60", "name": "Ruy Lopez: Alapin Defense, Alapin Gambit" }, "r1bqkbnr/pppp1p1p/2n5/1B2p1p1/4P3/5N2/PPPP1PPP/RNBQK2R": { "eco": "C60", "name": "Ruy Lopez: Brentano Gambit" }, "r1bqkbnr/1ppp1ppp/2n5/pB2p3/4P3/5N2/PPPP1PPP/RNBQK2R": { "eco": "C60", "name": "Ruy Lopez: Bulgarian Variation" }, "r1bqkb1r/ppppnppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R": { "eco": "C60", "name": "Ruy Lopez: Cozio Defense" }, "r1bqkb1r/ppppnp1p/2n3p1/1B2p3/4P3/2N2N2/PPPP1PPP/R1BQK2R": { "eco": "C60", "name": "Ruy Lopez: Cozio Defense, Paulsen Variation" }, "r1bq1rk1/ppp1npbp/2n3p1/1B1p4/3NP3/2N1B3/PPPQ1PPP/R3K2R": { "eco": "C60", "name": "Ruy Lopez: Cozio Defense, Tartakower Gambit" }, "r1bqkbnr/pppp1p1p/2n3p1/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R": { "eco": "C60", "name": "Ruy Lopez: Fianchetto Defense" }, "r1bqkbnr/pppp3p/2n3p1/1B2pp2/4P3/2P2N2/PP1P1PPP/RNBQK2R": { "eco": "C60", "name": "Ruy Lopez: Fianchetto Defense, Kevitz Gambit" }, "r1bqk1nr/ppppbppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R": { "eco": "C60", "name": "Ruy Lopez: Lucena Variation" }, "r1bqkbnr/pppp2pp/2n2p2/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R": { "eco": "C60", "name": "Ruy Lopez: Nürnberg Variation" }, "r1bqkbnr/pppp1ppp/8/nB2p3/4P3/5N2/PPPP1PPP/RNBQK2R": { "eco": "C60", "name": "Ruy Lopez: Pollock Defense" }, "rnbqkbnr/pppp1ppp/8/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R": { "eco": "C60", "name": "Ruy Lopez: Retreat Variation" }, "r1bqkbnr/p1pp1ppp/1pn5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R": { "eco": "C60", "name": "Ruy Lopez: Rotary-Albany Gambit" }, "r1bqkbnr/ppp2ppp/2n5/1B1pp3/4P3/5N2/PPPP1PPP/RNBQK2R": { "eco": "C60", "name": "Ruy Lopez: Spanish Countergambit" }, "r1b1kbnr/ppppqppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R": { "eco": "C60", "name": "Ruy Lopez: Vinogradov Variation" }, "r1bqkbnr/pppp1ppp/8/1B2p3/3nP3/5N2/PPPP1PPP/RNBQK2R": { "eco": "C61", "name": "Ruy Lopez: Bird Variation" }, "r1bqkb1r/ppppnppp/8/1B6/3pP3/8/PPPP1PPP/RNBQ1RK1": { "eco": "C61", "name": "Ruy Lopez: Bird Variation, Paulsen Variation" }, "r1bqkbnr/ppp2ppp/2np4/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R": { "eco": "C62", "name": "Ruy Lopez: Steinitz Defense" }, "r1bqkbnr/pppp2pp/2n5/1B2pp2/4P3/5N2/PPPP1PPP/RNBQK2R": { "eco": "C63", "name": "Ruy Lopez: Schliemann Defense" }, "r1b1kbnr/ppp3pp/2N5/1B4q1/4p3/8/PPPP1PPP/R1BQK2R": { "eco": "C63", "name": "Ruy Lopez: Schliemann Defense, Classical Variation" }, "r1bqk1nr/ppppb1pp/2n5/1B2p3/4N3/5N2/PPPP1PPP/R1BQK2R": { "eco": "C63", "name": "Ruy Lopez: Schliemann Defense, Kostic Defense" }, "r1b1kbnr/ppp3pp/2N5/1B1q4/4p3/8/PPPP1PPP/R1BQK2R": { "eco": "C63", "name": "Ruy Lopez: Schliemann Defense, Möhring Variation" }, "r1bqkb1r/pppp2pp/2n2n2/1B2p3/4N3/5N2/PPPP1PPP/R1BQK2R": { "eco": "C63", "name": "Ruy Lopez: Schliemann Defense, Tartakower Variation" }, "r1bq1rk1/pppp1ppp/1bn2n2/1B2p3/3PP3/2P2N2/PP3PPP/RNBQ1RK1": { "eco": "C64", "name": "Ruy Lopez: Classical Defense, Benelux Variation" }, "r1b1k1nr/ppppqppp/2n5/1Bb1p3/4P3/2P2N2/PP1P1PPP/RNBQK2R": { "eco": "C64", "name": "Ruy Lopez: Classical Defense, Boden Variation" }, "r1bqk1nr/pppp1ppp/2n5/1Bb1p3/4P3/5N2/PPPP1PPP/RNBQK2R": { "eco": "C64", "name": "Ruy Lopez: Classical Variation" }, "r1bqk1nr/pppp1ppp/1bn5/1B2p3/4P3/2P2N2/PP1P1PPP/RNBQK2R": { "eco": "C64", "name": "Ruy Lopez: Classical Variation, Charousek Variation" }, "r1bqk1nr/pppp2pp/2n5/1Bb1pp2/4P3/2P2N2/PP1P1PPP/RNBQK2R": { "eco": "C64", "name": "Ruy Lopez: Classical Variation, Cordel Gambit" }, "r1bqk1nr/ppp2ppp/2n5/1Bbpp3/4P3/2P2N2/PP1P1PPP/RNBQK2R": { "eco": "C64", "name": "Ruy Lopez: Classical Variation, Konikowski Gambit" }, "r1bqkb1r/pppp1ppp/2n2n2/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R": { "eco": "C65", "name": "Ruy Lopez: Berlin Defense" }, "r1bqk2r/pppp1ppp/2n2n2/1Bb1p3/4P3/5N2/PPPP1PPP/RNBQ1RK1": { "eco": "C65", "name": "Ruy Lopez: Berlin Defense, Beverwijk Variation" }, "r1bqkb1r/pppp1ppp/2n5/1B2p3/4P1n1/5N2/PPPP1PPP/RNBQ1RK1": { "eco": "C65", "name": "Ruy Lopez: Berlin Defense, Fishing Pole Variation" }, "r1bqkb1r/pp1pnppp/2p2n2/1B2N3/4P3/3P4/PPP2PPP/RNBQK2R": { "eco": "C65", "name": "Ruy Lopez: Berlin Defense, Mortimer Trap" }, "r1bqkb1r/ppppnppp/5n2/1B2p3/4P3/3P1N2/PPP2PPP/RNBQK2R": { "eco": "C65", "name": "Ruy Lopez: Berlin Defense, Mortimer Variation" }, "r2qkb1r/pppb1ppp/2np1n2/1B6/3pP3/2N2N2/PPP2PPP/R1BQ1RK1": { "eco": "C66", "name": "Ruy Lopez: Berlin Defense, Closed Wolf Variation" }, "r2qk2r/pppbbppp/2np1n2/1B2p3/3PP3/2N2N2/PPP2PPP/R1BQ1RK1": { "eco": "C66", "name": "Ruy Lopez: Berlin Defense, Hedgehog Variation" }, "r1bqkb1r/ppp2ppp/2np1n2/1B2p3/4P3/5N2/PPPP1PPP/RNBQ1RK1": { "eco": "C66", "name": "Ruy Lopez: Berlin Defense, Improved Steinitz Defense" }, "r2q1rk1/pppbbppp/2np1n2/1B2p3/3PP3/2N2N2/PPP2PPP/R1BQR1K1": { "eco": "C66", "name": "Ruy Lopez: Berlin Defense, Tarrasch Trap" }, "r1bqkb1r/pppn1ppp/2np4/1B2p3/3PP3/5N2/PPP2PPP/RNBQ1RK1": { "eco": "C66", "name": "Ruy Lopez: Closed Berlin Defense, Chigorin Variation" }, "r2k1b1r/pppb1ppp/2p5/4Pn2/8/2N2N2/PPP2PPP/R1B2RK1": { "eco": "C67", "name": "Ruy Lopez: Berlin Defense, Berlin Wall" }, "r1bqk2r/p1ppbppp/2p5/4Pn2/8/5N2/PPP1QPPP/RNB2RK1": { "eco": "C67", "name": "Ruy Lopez: Berlin Defense, Cordel Variation" }, "r1bqkb1r/pppp1ppp/2n5/1B2p3/4n3/5N2/PPPP1PPP/RNBQ1RK1": { "eco": "C67", "name": "Ruy Lopez: Berlin Defense, Rio Gambit Accepted" }, "r1bqk2r/ppppbppp/2n5/1B2p3/3Pn3/5N2/PPP2PPP/RNBQ1RK1": { "eco": "C67", "name": "Ruy Lopez: Berlin Defense, Rio de Janeiro Variation" }, "r1bq1rk1/p1ppbppp/8/2p1P3/3B4/2N5/PPP1QPPP/R3R1K1": { "eco": "C67", "name": "Ruy Lopez: Berlin Defense, Rio de Janeiro Variation" }, "r1bqkb1r/1ppp1ppp/p1n5/1B2p3/3Pn3/5N2/PPP2PPP/RNBQ1RK1": { "eco": "C67", "name": "Ruy Lopez: Berlin Defense, Rosenthal Variation" }, "r1bqk2r/ppp1bppp/2n5/1B1pp3/3Pn3/5N2/PPP1QPPP/RNB2RK1": { "eco": "C67", "name": "Ruy Lopez: Berlin Defense, Trifunovic Variation" }, "r1bqkb1r/pppp1ppp/2nn4/1B2p3/3P4/5N2/PPP2PPP/RNBQ1RK1": { "eco": "C67", "name": "Ruy Lopez: Berlin Defense, l'Hermet Variation" }, "r1bk1b1r/ppp2ppp/2p5/4Pn2/8/5N2/PPP2PPP/RNB2RK1": { "eco": "C67", "name": "Ruy Lopez: Berlin Defense, l'Hermet Variation, Berlin Wall Defense" }, "r1bqkb1r/ppp2ppp/2p5/4P3/4n3/5N2/PPP2PPP/RNBQ1RK1": { "eco": "C67", "name": "Ruy Lopez: Berlin Defense, l'Hermet Variation, Westerinen Line" }, "r1b1k1nr/1pp2ppp/p1pb4/8/3NP3/8/PPP2PPP/RNB1K2R": { "eco": "C68", "name": "Ruy Lopez: Exchange Variation, Alekhine Variation" }, "r1bqkbnr/2pp1ppp/p1p5/4p3/4P3/5N2/PPPP1PPP/RNBQK2R": { "eco": "C68", "name": "Ruy Lopez: Exchange Variation, Lutikov Variation" }, "r3kbnr/1ppb1ppp/p1p5/8/3NP3/8/PPP2PPP/RNB1K2R": { "eco": "C68", "name": "Ruy Lopez: Exchange, Alekhine Variation" }, "r2qkbnr/1pp2pp1/p1p5/4p2p/4P1b1/5N1P/PPPP1PP1/RNBQ1RK1": { "eco": "C69", "name": "Ruy Lopez: Exchange Variation, Alapin Gambit" }, "r1b1kbnr/1pp2ppp/p1pq4/4p3/4P3/5N2/PPPP1PPP/RNBQ1RK1": { "eco": "C69", "name": "Ruy Lopez: Exchange Variation, Bronstein Variation" }, "r1bqkbnr/1pp3pp/p1p2p2/4p3/4P3/5N2/PPPP1PPP/RNBQ1RK1": { "eco": "C69", "name": "Ruy Lopez: Exchange Variation, Gligoric Variation" }, "r1bqk1nr/1pp2ppp/p1pb4/4p3/4P3/5N2/PPPP1PPP/RNBQ1RK1": { "eco": "C69", "name": "Ruy Lopez: Exchange Variation, King's Bishop Variation" }, "r1bqkbnr/1ppp1ppp/p7/4p3/B2nP3/5N2/PPPP1PPP/RNBQK2R": { "eco": "C70", "name": "Ruy Lopez: Bird's Defense Deferred" }, "r1bqkbnr/1ppp1ppp/p1n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R": { "eco": "C70", "name": "Ruy Lopez: Morphy Defense" }, "r1bqk1nr/1ppp1ppp/p1n5/4p3/Bb2P3/5N2/PPPP1PPP/RNBQK2R": { "eco": "C70", "name": "Ruy Lopez: Morphy Defense, Alapin's Defense Deferred" }, "r1bqkbnr/2pp1ppp/p1n5/1p2p3/B3P3/5N2/PPPP1PPP/RNBQK2R": { "eco": "C70", "name": "Ruy Lopez: Morphy Defense, Caro Variation" }, "r1bqk1nr/1ppp1ppp/p1n5/2b1p3/B3P3/5N2/PPPP1PPP/RNBQK2R": { "eco": "C70", "name": "Ruy Lopez: Morphy Defense, Classical Defense Deferred" }, "r1bqkb1r/1pppnppp/p1n5/4p3/B3P3/5N2/PPPP1PPP/RNBQK2R": { "eco": "C70", "name": "Ruy Lopez: Morphy Defense, Cozio Defense" }, "r1bqkbnr/1ppp1p1p/p1n3p1/4p3/B3P3/5N2/PPPP1PPP/RNBQK2R": { "eco": "C70", "name": "Ruy Lopez: Morphy Defense, Fianchetto Defense Deferred" }, "r1bqk1nr/2pp1ppp/p1n5/1pb1p3/4P3/1B3N2/PPPP1PPP/RNBQK2R": { "eco": "C70", "name": "Ruy Lopez: Morphy Defense, Graz Variation" }, "r1bqkbnr/2pp1ppp/p7/np2p3/4P3/1B3N2/PPPP1PPP/RNBQK2R": { "eco": "C70", "name": "Ruy Lopez: Morphy Defense, Norwegian Variation" }, "r1bqkbnr/1ppp2pp/p1n5/4pp2/B3P3/5N2/PPPP1PPP/RNBQK2R": { "eco": "C70", "name": "Ruy Lopez: Morphy Defense, Schliemann Defense Deferred" }, "r1bqkbnr/1pp2ppp/p1np4/4p3/B3P3/5N2/PPPP1PPP/RNBQK2R": { "eco": "C71", "name": "Ruy Lopez: Morphy Defense, Modern Steinitz Defense" }, "r1bqkbnr/5ppp/p2p4/1pp5/3QP3/1B6/PPP2PPP/RNB1K2R": { "eco": "C71", "name": "Ruy Lopez: Noah's Ark Trap" }, "r2qbrk1/1pp1bppp/p1np1n2/4p3/B2PP3/2P2N2/PP1N1PPP/R1BQR1K1": { "eco": "C72", "name": "Ruy Lopez: Closed, Kecskemet Variation" }, "r1bqkbnr/2p3pp/p1pp1p2/4p3/3PP3/5N2/PPP2PPP/RNBQK2R": { "eco": "C73", "name": "Ruy Lopez: Morphy Defense, Modern Steinitz Defense" }, "r1bqkbnr/1pp3pp/p1np4/4pp2/B3P3/2P2N2/PP1P1PPP/RNBQK2R": { "eco": "C74", "name": "Ruy Lopez: Morphy Defense, Modern Steinitz Defense, Siesta Variation" }, "r2qkbnr/1ppb1ppp/p1np4/4p3/B3P3/2P2N2/PP1P1PPP/RNBQK2R": { "eco": "C75", "name": "Ruy Lopez: Morphy Defense, Modern Steinitz Defense" }, "r2qkb1r/1ppbnppp/p1np4/4p3/B2PP3/2P2N2/PP3PPP/RNBQK2R": { "eco": "C75", "name": "Ruy Lopez: Morphy Defense, Modern Steinitz Defense" }, "r2qkbnr/1ppb1p1p/p1np2p1/4p3/B2PP3/2P2N2/PP3PPP/RNBQK2R": { "eco": "C76", "name": "Ruy Lopez: Morphy Defense, Modern Steinitz Defense, Fianchetto Variation" }, "r2qk2r/2p1bppp/p1np1n2/1p2p3/3PP1b1/1BP2N2/PP2QPPP/RNB1K2R": { "eco": "C77", "name": "Ruy Lopez: Wormald Attack, Grünfeld Variation" }, "r1bqkb1r/1ppp1p1p/p1n2np1/4p3/B3P3/5N2/PPPP1PPP/RNBQ1RK1": { "eco": "C78", "name": "Ruy Lopez: Brix Variation" }, "r1bqkb1r/1pp2ppp/p1n2n2/3pp3/B3P3/5N2/PPPP1PPP/RNBQ1RK1": { "eco": "C78", "name": "Ruy Lopez: Central Countergambit" }, "r1bqkb1r/2p2ppp/p1np1n2/1p2p3/4P3/1B3N2/PPPP1PPP/RNBQ1RK1": { "eco": "C78", "name": "Ruy Lopez: Morphy Defense" }, "r2qkb1r/1bpp1ppp/p1n2n2/1p2p3/4P3/1B3N2/PPPP1PPP/RNBQ1RK1": { "eco": "C78", "name": "Ruy Lopez: Morphy Defense, Arkhangelsk Variation" }, "r1bqk2r/1ppp1ppp/p1n2n2/2b1p3/B3P3/5N2/PPPP1PPP/RNBQ1RK1": { "eco": "C78", "name": "Ruy Lopez: Morphy Defense, Neo-Arkhangelsk Variation" }, "r1bq1k1r/2p2ppp/p4n2/1pbPR1N1/3n4/1B6/PPPP1PPP/RNBQ2K1": { "eco": "C78", "name": "Ruy Lopez: Rabinovich Variation" }, "r1bqkb1r/1pp2ppp/p1np1n2/4p3/B3P3/5N2/PPPP1PPP/RNBQ1RK1": { "eco": "C79", "name": "Ruy Lopez: Morphy Defense, Steinitz Deferred" }, "r1bqkb1r/2p2ppp/p1pp4/4p3/3Pn3/5N2/PPP2PPP/RNBQ1RK1": { "eco": "C79", "name": "Ruy Lopez: Morphy Defense, Steinitz Deferred" }, "r2qkb1r/2p2ppp/p1pp1n2/4p3/3PP1b1/5N2/PPP2PPP/RNBQ1RK1": { "eco": "C79", "name": "Ruy Lopez: Steinitz Defense Deferred, Lipnitsky Variation" }, "r1bqkb1r/1ppp1ppp/p1n5/4p3/B3n3/5N2/PPPP1PPP/RNBQ1RK1": { "eco": "C80", "name": "Ruy Lopez: Open" }, "r2qkb1r/2p2ppp/p1n1b3/1p1pP3/4n3/1B3N2/PPP2PPP/RNBQ1RK1": { "eco": "C80", "name": "Ruy Lopez: Open, Main Line" }, "r1bqkb1r/1ppp1ppp/p1n5/8/B2pn3/5N2/PPP2PPP/RNBQ1RK1": { "eco": "C80", "name": "Ruy Lopez: Open, Riga Variation" }, "r1bqkb1r/2p2ppp/p7/1p1pp3/P2nn3/1B3N2/1PP2PPP/RNBQ1RK1": { "eco": "C80", "name": "Ruy Lopez: Open, Schlechter Defense" }, "r1bqkb1r/1pp2ppp/p1n5/3pp3/B3n3/5N2/PPPP1PPP/RNBQR1K1": { "eco": "C80", "name": "Ruy Lopez: Open, Skipworth Gambit" }, "r1bqkb1r/2p1nppp/p7/1p1pP3/4n3/1B3N2/PPP2PPP/RNBQ1RK1": { "eco": "C80", "name": "Ruy Lopez: Open, Zukertort Variation" }, "r4rk1/2pqbppp/p1n1b3/3pP3/2B1n3/5N2/PP2QPPP/RNBR2K1": { "eco": "C81", "name": "Ruy Lopez: Open, Howell Attack, Ekstrom Variation" }, "r2qkb1r/2p2ppp/p1n1b3/1pnpP3/8/1BP2N2/PP3PPP/RNBQ1RK1": { "eco": "C82", "name": "Ruy Lopez: Open, Berlin Variation" }, "r2q1rk1/2p2ppp/p1n1b3/1pbpP3/8/2P2N2/PPBN1nPP/R1BQ1RK1": { "eco": "C82", "name": "Ruy Lopez: Open, Dilworth Variation" }, "r2qk2r/2p2ppp/p1n1b3/1pbpP3/4n3/1BP2N2/PP3PPP/RNBQ1RK1": { "eco": "C82", "name": "Ruy Lopez: Open, Italian Variation" }, "r2qk2r/2p1nppp/p3b3/1pbpP3/4n3/1BPQ1N2/PP3PPP/RNB2RK1": { "eco": "C82", "name": "Ruy Lopez: Open, Motzko Attack, Nenarokov Variation" }, "r2q1rk1/2p1bppp/p3b3/1p1pn3/3Nn3/1BP5/PP3PPP/RNBQR1K1": { "eco": "C83", "name": "Ruy Lopez: Open, Breslau Variation" }, "r2qk2r/2p1bppp/p1n1b3/1p1pP3/4n3/1BP2N2/PP3PPP/RNBQ1RK1": { "eco": "C83", "name": "Ruy Lopez: Open, Classical Defense" }, "r1bqk2r/1pppbppp/p1n2n2/4p3/B3P3/5N2/PPPP1PPP/RNBQ1RK1": { "eco": "C84", "name": "Ruy Lopez: Closed" }, "r1bqk2r/1pppbppp/p1n5/4P3/B3n3/2p2N2/PP3PPP/RNBQ1RK1": { "eco": "C84", "name": "Ruy Lopez: Closed, Center Attack, Basque Gambit" }, "r1bq1rk1/2ppbppp/p1n2n2/1p2p3/4P3/1B3N2/PPPPQPPP/RNB2RK1": { "eco": "C86", "name": "Ruy Lopez: Closed, Worrall Attack, Castling Line" }, "r1bqk2r/2p1bppp/p1np1n2/1p2p3/4P3/1B3N2/PPPPQPPP/RNB2RK1": { "eco": "C86", "name": "Ruy Lopez: Closed, Worrall Attack, Delayed Castling Line" }, "r1bqk2r/1pp1bppp/p1np1n2/4p3/B3P3/5N2/PPPP1PPP/RNBQR1K1": { "eco": "C87", "name": "Ruy Lopez: Closed, Averbakh Variation" }, "r1bq1rk1/2ppbppp/p1n2n2/1p2p3/4P3/1B3N2/PPPP1PPP/RNBQR1K1": { "eco": "C88", "name": "Ruy Lopez: Closed" }, "rnb1k2r/2q1bp1p/p2p1n2/1ppPp1p1/4P3/2P2N1P/PPBN1PP1/R1BQR1K1": { "eco": "C88", "name": "Ruy Lopez: Closed, Leonhardt Variation" }, "r2qk2r/1bppbppp/p1n2n2/1p2p3/4P3/1B3N2/PPPP1PPP/RNBQR1K1": { "eco": "C88", "name": "Ruy Lopez: Closed, Trajkovic Counterattack" }, "r1bqk2r/4bppp/p2p1n2/1pp5/3QP3/1B6/PPP2PPP/RNB1R1K1": { "eco": "C88", "name": "Ruy Lopez: Noah's Ark Trap" }, "r1bq1rk1/2p1bppp/p1n2n2/1p1pp3/4P3/1BP2N2/PP1P1PPP/RNBQR1K1": { "eco": "C89", "name": "Ruy Lopez: Marshall Attack" }, "5rk1/5ppp/p1pbr3/1p1n3q/P2P2b1/1BPQB1P1/1P1N1P1P/R3R1K1": { "eco": "C89", "name": "Ruy Lopez: Marshall Attack, Main Line, Spassky Variation" }, "r1b2rk1/5ppp/p1pb4/1p1n4/3P4/1BP3Pq/PP3P1P/RNBQR1K1": { "eco": "C89", "name": "Ruy Lopez: Marshall Attack, Modern Main Line" }, "r1bq1rk1/4bppp/p1p5/1p1nR3/8/1BP5/PP1P1PPP/RNBQ2K1": { "eco": "C89", "name": "Ruy Lopez: Marshall Attack, Modern Variation" }, "r1bq1rk1/2p1bppp/p4n2/1p2R3/8/1BP5/PP1P1PPP/RNBQ2K1": { "eco": "C89", "name": "Ruy Lopez: Marshall Attack, Original Marshall Attack" }, "r1bq1rk1/2p1bppp/p1n2n2/1p1P4/4p3/1BP2N2/PP1P1PPP/RNBQR1K1": { "eco": "C89", "name": "Ruy Lopez: Marshall Attack, Steiner Variation" }, "r1bq1rk1/2p1bppp/p1np1n2/1p2p3/4P3/1BP2N2/PP1P1PPP/RNBQR1K1": { "eco": "C90", "name": "Ruy Lopez: Closed, Closed Defense" }, "r2q1rk1/2p1bppp/p1np1n2/1p2p3/3PP1b1/1BP2N2/PP3PPP/RNBQR1K1": { "eco": "C91", "name": "Ruy Lopez: Closed, Bogoljubov Variation" }, "r2q1rk1/1bp1bppp/p1np1n2/1p2p3/4P3/1BP2N1P/PP1P1PP1/RNBQR1K1": { "eco": "C92", "name": "Ruy Lopez: Closed, Flohr System" }, "r1bq1rk1/2pnbppp/p1np4/1p2p3/4P3/1BP2N1P/PP1P1PP1/RNBQR1K1": { "eco": "C92", "name": "Ruy Lopez: Closed, Keres Defense" }, "r1bq1rk1/2p1bppp/2np1n2/pp2p3/4P3/1BP2N1P/PP1P1PP1/RNBQR1K1": { "eco": "C92", "name": "Ruy Lopez: Closed, Keres Defense" }, "r2q1rk1/2p1bppp/p1npbn2/1p2p3/4P3/1BP2N1P/PP1P1PP1/RNBQR1K1": { "eco": "C92", "name": "Ruy Lopez: Closed, Kholmov Variation" }, "r2qrbk1/1bp2pp1/p1np1n1p/1p2p3/3PP3/PBP2N1P/1P1N1PP1/R1BQR1K1": { "eco": "C92", "name": "Ruy Lopez: Closed, Smyslov-Breyer-Zaitsev Hybrid" }, "r1bqr1k1/2p1bppp/p1np1n2/1p2p3/4P3/1BP2N1P/PP1P1PP1/RNBQR1K1": { "eco": "C92", "name": "Ruy Lopez: Closed, Zaitsev System" }, "r1bq1rk1/2p1bpp1/p1np1n1p/1p2p3/4P3/1BP2N1P/PP1P1PP1/RNBQR1K1": { "eco": "C93", "name": "Ruy Lopez: Closed, Smyslov Defense" }, "rnbq1rk1/2p1bppp/p2p1n2/1p2p3/4P3/1BP2N1P/PP1P1PP1/RNBQR1K1": { "eco": "C94", "name": "Ruy Lopez: Morphy Defense, Breyer Defense" }, "r2q1rk1/1b1nbppp/p2p1n2/1pp1p3/3PP3/2P2N1P/PPBN1PP1/R1BQR1K1": { "eco": "C95", "name": "Ruy Lopez: Closed, Breyer Defense" }, "r1bq1rk1/2pnbppp/p2p1n2/1p2p3/3PP3/1BP2N1P/PP3PP1/RNBQR1K1": { "eco": "C95", "name": "Ruy Lopez: Morphy Defense, Breyer Defense, Zaitsev Hybrid" }, "r1bq1rk1/4bppp/p1np1n2/1pp1p3/3PP3/2P2N1P/PPB2PP1/RNBQR1K1": { "eco": "C96", "name": "Ruy Lopez: Closed, Borisenko Variation" }, "r1bq1rk1/4bppp/p2p1n2/npp1p3/4P3/2P2N1P/PPBP1PP1/RNBQR1K1": { "eco": "C96", "name": "Ruy Lopez: Closed, Closed Defense" }, "r1bq1rk1/3nbppp/p2p4/npp1p3/3PP3/2P2N1P/PPB2PP1/RNBQR1K1": { "eco": "C96", "name": "Ruy Lopez: Closed, Keres Defense" }, "r1b2rk1/2q1bppp/p1pp1n2/np2p3/3PP3/2P2N1P/PPB2PP1/RNBQR1K1": { "eco": "C96", "name": "Ruy Lopez: Closed, Rossolimo Defense" }, "r1b2rk1/2q1bppp/p2p1n2/npp1p3/3PP3/2P2N1P/PPB2PP1/RNBQR1K1": { "eco": "C97", "name": "Ruy Lopez: Closed, Chigorin Defense" }, "r3r1k1/2qbbp1p/p2p1np1/npp1p3/3PP3/2P1NN1P/PPB2PP1/R1BQR1K1": { "eco": "C97", "name": "Ruy Lopez: Closed, Chigorin, Yugoslav System" }, "r1b2rk1/2q1bppp/p1np1n2/1pp1p3/3PP3/2P2N1P/PPBN1PP1/R1BQR1K1": { "eco": "C98", "name": "Ruy Lopez: Closed, Chigorin Defense" }, "rnbqkb1r/pp2pppp/5n2/2p5/3Pp3/2N2P2/PPP3PP/R1BQKBNR": { "eco": "D00", "name": "Blackmar-Diemer Gambit Declined: Brombacher Countergambit" }, "rnbqkb1r/ppp2ppp/5n2/4p3/3Pp3/2N2P2/PPP3PP/R1BQKBNR": { "eco": "D00", "name": "Blackmar-Diemer Gambit Declined: Elbert Countergambit" }, "rn1qkbnr/pppbpppp/8/8/3Pp3/2N5/PPP2PPP/R1BQKBNR": { "eco": "D00", "name": "Blackmar-Diemer Gambit Declined: Grosshans Defense" }, "r1bqkb1r/ppp1pppp/2n2n2/8/3Pp3/2N2P2/PPP3PP/R1BQKBNR": { "eco": "D00", "name": "Blackmar-Diemer Gambit Declined: Lamb Defense" }, "rnbqkb1r/ppp1pppp/5n2/8/3P4/2N1pP2/PPP3PP/R1BQKBNR": { "eco": "D00", "name": "Blackmar-Diemer Gambit Declined: Langeheinecke Defense" }, "rnbqkb1r/ppp1pp1p/5np1/8/3P4/2N2N2/PPP3PP/R1BQKB1R": { "eco": "D00", "name": "Blackmar-Diemer Gambit: Bogoljubov Variation" }, "rnbqkb1r/ppp2ppp/4pn2/8/3P4/2N2N2/PPP3PP/R1BQKB1R": { "eco": "D00", "name": "Blackmar-Diemer Gambit: Euwe Defense" }, "rnbqkb1r/pp2pppp/5n2/2p5/3P4/2N2N2/PPP3PP/R1BQKB1R": { "eco": "D00", "name": "Blackmar-Diemer Gambit: Kaulich Defense" }, "r1bqkb1r/ppp1pppp/2n2n2/8/3P4/2N2N2/PPP3PP/R1BQKB1R": { "eco": "D00", "name": "Blackmar-Diemer Gambit: Pietrowsky Defense" }, "rnbqkb1r/p1p1pppp/1p3n2/8/3P4/2N2N2/PPP3PP/R1BQKB1R": { "eco": "D00", "name": "Blackmar-Diemer Gambit: Ritter Defense" }, "rnbqkb1r/ppp1ppp1/5n2/7p/3P4/2N2N2/PPP3PP/R1BQKB1R": { "eco": "D00", "name": "Blackmar-Diemer Gambit: Rook Pawn Defense" }, "r1bqkb1r/pppnpppp/5n2/8/3P4/2N2N2/PPP3PP/R1BQKB1R": { "eco": "D00", "name": "Blackmar-Diemer Gambit: Schlutter Defense" }, "rn1qkb1r/ppp1pppp/5n2/5b2/3P4/2N2N2/PPP3PP/R1BQKB1R": { "eco": "D00", "name": "Blackmar-Diemer Gambit: Tartakower Variation" }, "rn1qkb1r/ppp1pppp/5n2/8/3P2b1/2N2N2/PPP3PP/R1BQKB1R": { "eco": "D00", "name": "Blackmar-Diemer Gambit: Teichmann Variation" }, "rn1qkb1r/ppp1pppp/5n2/5b2/3Pp3/2N2P2/PPP3PP/R1BQKBNR": { "eco": "D00", "name": "Blackmar-Diemer Gambit: Vienna Variation" }, "rn1qkbnr/ppp1pppp/8/5b2/3Pp3/2N5/PPP2PPP/R1BQKBNR": { "eco": "D00", "name": "Blackmar-Diemer Gambit: Zeller Defense" }, "rnbqkb1r/pp2pppp/2p2n2/8/3P4/2N2N2/PPP3PP/R1BQKB1R": { "eco": "D00", "name": "Blackmar-Diemer Gambit: Ziegler Defense" }, "rnbqkb1r/ppp2ppp/5n2/3pp3/3PP3/2N5/PPP2PPP/R1BQKBNR": { "eco": "D00", "name": "Blackmar-Diemer, Lemberger Countergambit" }, "rnbqkbnr/ppp1pppp/8/3p4/3P4/8/PPP1PPPP/RNBQKBNR": { "eco": "D00", "name": "Queen's Pawn Game" }, "rnbqkb1r/ppp1pppp/5n2/3p4/3P4/4P3/PPP2PPP/RNBQKBNR": { "eco": "D00", "name": "Queen's Pawn Game" }, "rnbqkb1r/ppp1pppp/8/3p4/3Pn3/2N5/PPP2PPP/R1BQKBNR": { "eco": "D00", "name": "Queen's Pawn Game: Hübsch Gambit" }, "rn1qkbnr/ppp1pppp/8/3p2B1/3P2b1/8/PPP1PPPP/RN1QKBNR": { "eco": "D00", "name": "Queen's Pawn Game: Levitsky Attack, Welling Variation" }, "rnbqkbnr/pp2pppp/8/2pp4/3P1B2/8/PPP1PPPP/RN1QKBNR": { "eco": "D00", "name": "Queen's Pawn Game: Steinitz Countergambit" }, "rn1qkbnr/ppp1pppp/8/3p1b2/3P4/2N5/PPP1PPPP/R1BQKBNR": { "eco": "D00", "name": "Queen's Pawn Game: Veresov Attack, Alburt Defense" }, "rn1qkbnr/ppp1pppp/8/3p4/3P2b1/2N5/PPP1PPPP/R1BQKBNR": { "eco": "D00", "name": "Queen's Pawn Game: Veresov Attack, Anti-Veresov" }, "rnbqkbnr/pp2pppp/8/2pp4/3P4/2N5/PPP1PPPP/R1BQKBNR": { "eco": "D00", "name": "Queen's Pawn Game: Veresov Attack, Irish Gambit" }, "rnbqkbnr/ppp2ppp/8/3pp3/3P4/2N5/PPP1PPPP/R1BQKBNR": { "eco": "D00", "name": "Queen's Pawn Game: Veresov Attack, Shaviliuk Gambit" }, "rnbqkbnr/ppp1ppp1/8/3p3p/3P4/2N5/PPP1PPPP/R1BQKBNR": { "eco": "D00", "name": "Queen's Pawn Game: Veresov Attack, Shropshire Defense" }, "rnbqkb1r/ppp1pppp/8/3p2B1/3Pn3/2N5/PPP1PPPP/R2QKBNR": { "eco": "D01", "name": "Queen's Pawn Game: Veresov Attack, Boyce Defense" }, "r1bqkb1r/pppnpp1p/5np1/3p2B1/3P4/2N2N2/PPP1PPPP/R2QKB1R": { "eco": "D01", "name": "Queen's Pawn Game: Veresov Attack, Two Knights System, Grünfeld Defense" }, "rn1qkb1r/ppp1pppp/5n2/3p1bB1/3P4/2N5/PPP1PPPP/R2QKBNR": { "eco": "D01", "name": "Richter-Veresov Attack" }, "rnbqkbnr/ppp2ppp/4p3/8/2pP4/5N2/PP2PPPP/RNBQKB1R": { "eco": "D02", "name": "Queen's Gambit Accepted: Rosenthal Variation" }, "rn1qkbnr/pp3ppp/2p1p3/3p1b2/2PP4/2N2N2/PP2PPPP/R1BQKB1R": { "eco": "D02", "name": "Queen's Gambit Declined: Baltic Defense, Pseudo-Slav" }, "rn1qkbnr/ppp1pppp/8/3p4/3P2b1/5N2/PPP1PPPP/RNBQKB1R": { "eco": "D02", "name": "Queen's Pawn Game: Anti-Torre" }, "r1bqkbnr/ppp1pppp/2n5/3p4/3P4/5N2/PPP1PPPP/RNBQKB1R": { "eco": "D02", "name": "Queen's Pawn Game: Chigorin Variation" }, "rnbqkbnr/pp2pppp/8/2pp4/3P4/5N2/PPP1PPPP/RNBQKB1R": { "eco": "D02", "name": "Queen's Pawn Game: Krause Variation" }, "rnb1kbnr/pp2ppp1/1qp4p/3p4/3P3B/5N2/PPP1PPPP/RN1QKB1R": { "eco": "D02", "name": "Queen's Pawn Game: Levitsky Attack, Euwe Variation, Modern Line" }, "rnbqkb1r/ppp1pppp/5n2/3p4/3P4/5N2/PPP1PPPP/RNBQKB1R": { "eco": "D02", "name": "Queen's Pawn Game: Symmetrical Variation" }, "rnbqkb1r/p1p1pppp/5n2/1p1p4/2PP4/5N2/PP2PPPP/RNBQKB1R": { "eco": "D02", "name": "Queen's Pawn Game: Zilbermints Countergambit" }, "rnbqkb1r/ppp1pppp/8/3p2B1/3Pn3/5N2/PPP1PPPP/RN1QKB1R": { "eco": "D03", "name": "Queen's Pawn Game: Torre Attack, Gossip Variation" }, "rnbqkb1r/ppp1pp1p/5np1/3p2B1/3P4/5N2/PPP1PPPP/RN1QKB1R": { "eco": "D03", "name": "Queen's Pawn Game: Torre Attack, Grünfeld Variation" }, "rn1qkb1r/ppp1pppp/5n2/3p1b2/3P4/4PN2/PPP2PPP/RNBQKB1R": { "eco": "D04", "name": "Queen's Pawn Game: Colle System, Anti-Colle" }, "rnbqk2r/ppp1ppbp/5np1/3p4/3P4/3BPN2/PPP2PPP/RNBQK2R": { "eco": "D04", "name": "Queen's Pawn Game: Colle System, Grünfeld Formation" }, "rnbqkb1r/ppp2ppp/4pn2/3p4/3P4/4PN2/PPP2PPP/RNBQKB1R": { "eco": "D05", "name": "Queen's Pawn Game: Colle System" }, "r1bq1rk1/pp3ppp/2nbpn2/2pp4/3P4/1P1BPN2/PBP2PPP/RN1Q1RK1": { "eco": "D05", "name": "Rubinstein Opening: Bogoljubov Defense" }, "r1bq1rk1/pp2bppp/2n1pn2/2pp4/3P4/1P1BPN2/PBP2PPP/RN1Q1RK1": { "eco": "D05", "name": "Rubinstein Opening: Classical Defense" }, "rnbqkbnr/pp2pppp/8/2P5/2Pp4/8/PP2PPPP/RNBQKBNR": { "eco": "D06", "name": "Queen's Gambit Declined: Austrian Attack, Salvio Countergambit" }, "rnbqkbnr/pp2pppp/8/2pp4/2PP4/8/PP2PPPP/RNBQKBNR": { "eco": "D06", "name": "Queen's Gambit Declined: Austrian Defense" }, "rnbqkb1r/pp2pppp/5n2/2pP4/3P4/8/PP2PPPP/RNBQKBNR": { "eco": "D06", "name": "Queen's Gambit Declined: Austrian Defense, Gusev Countergambit" }, "rnb1kb1r/pp2pppp/8/q1PP4/4n3/8/PP3PPP/RNBQKBNR": { "eco": "D06", "name": "Queen's Gambit Declined: Austrian Defense, Haberditz Variation" }, "rn1qkbnr/ppp1pppp/8/3p1b2/2PP4/8/PP2PPPP/RNBQKBNR": { "eco": "D06", "name": "Queen's Gambit Declined: Baltic Defense" }, "r2qkbnr/pp2pppp/2n5/8/Q2P4/8/PP2PPPP/RbB1KBNR": { "eco": "D06", "name": "Queen's Gambit Declined: Baltic Defense, Argentinian Gambit" }, "r2qkbnr/ppp2ppp/2n1p3/3p1b2/2PP4/2N2N2/PP2PPPP/R1BQKB1R": { "eco": "D06", "name": "Queen's Gambit Declined: Baltic Defense, Pseudo-Chigorin" }, "rnbqkb1r/ppp1pppp/5n2/3p4/2PP4/8/PP2PPPP/RNBQKBNR": { "eco": "D06", "name": "Queen's Gambit Declined: Marshall Defense" }, "rnbqkb1r/pp2pppp/2p2n2/3P4/3P4/8/PP2PPPP/RNBQKBNR": { "eco": "D06", "name": "Queen's Gambit Declined: Marshall Defense, Tan Gambit" }, "rnbqkbnr/p1p1pppp/8/1p1p4/2PP4/8/PP2PPPP/RNBQKBNR": { "eco": "D06", "name": "Queen's Gambit Declined: Zilbermints Gambit" }, "r1bqkbnr/ppp1pppp/2n5/3p4/2PP4/8/PP2PPPP/RNBQKBNR": { "eco": "D07", "name": "Queen's Gambit Declined: Chigorin Defense" }, "r1bqkbnr/ppp1pppp/2n5/8/2pP4/2N5/PP2PPPP/R1BQKBNR": { "eco": "D07", "name": "Queen's Gambit Declined: Chigorin Defense" }, "r1b1kbnr/ppp1pppp/2n5/3q4/3P4/8/PP2PPPP/RNBQKBNR": { "eco": "D07", "name": "Queen's Gambit Declined: Chigorin Defense, Exchange Variation" }, "r1bqkbnr/ppp2ppp/2n5/3pp3/2PP4/5N2/PP2PPPP/RNBQKB1R": { "eco": "D07", "name": "Queen's Gambit Declined: Chigorin Defense, Lazard Gambit" }, "r2qkbnr/ppp1pppp/2n5/3p4/2PP2b1/5N2/PP2PPPP/RNBQKB1R": { "eco": "D07", "name": "Queen's Gambit Declined: Chigorin Defense, Main Line" }, "r1bqkb1r/ppp1pppp/2n2n2/8/2pP4/2N2N2/PP2PPPP/R1BQKB1R": { "eco": "D07", "name": "Queen's Gambit Declined: Chigorin Defense, Modern Gambit" }, "r1bqkbnr/ppp2ppp/2n5/3pp3/2PP4/2N5/PP2PPPP/R1BQKBNR": { "eco": "D07", "name": "Queen's Gambit Declined: Chigorin Defense, Tartakower Gambit" }, "rnbqkbnr/ppp2ppp/8/3pp3/2PP4/8/PP2PPPP/RNBQKBNR": { "eco": "D08", "name": "Queen's Gambit Declined: Albin Countergambit" }, "r1b1kbnr/ppp1qppp/2n5/4P3/2Pp4/5N2/PP1NPPPP/R1BQKB1R": { "eco": "D08", "name": "Queen's Gambit Declined: Albin Countergambit, Balogh Variation" }, "r1bqkbnr/ppp3pp/2n2p2/4P3/2Pp4/5N2/PP1NPPPP/R1BQKB1R": { "eco": "D08", "name": "Queen's Gambit Declined: Albin Countergambit, Janowski Variation" }, "r3k1nr/ppp1qppp/2n5/4P3/1bPp4/5N1P/PP1BPPP1/R2QKB1R": { "eco": "D08", "name": "Queen's Gambit Declined: Albin Countergambit, Krenosz Variation" }, "rnbqk1nr/ppp2ppp/8/4P3/1bP5/4p3/PP1B1PPP/RN1QKBNR": { "eco": "D08", "name": "Queen's Gambit Declined: Albin Countergambit, Lasker Trap" }, "rnbqkbnr/pp3ppp/8/2p1P3/2Pp4/5N2/PP2PPPP/RNBQKB1R": { "eco": "D08", "name": "Queen's Gambit Declined: Albin Countergambit, Tartakower Defense" }, "r2qkbnr/ppp2ppp/2n1b3/4P3/2Pp4/5NP1/PP2PP1P/RNBQKB1R": { "eco": "D09", "name": "Queen's Gambit Declined: Albin Countergambit, Fianchetto Variation, Be6 Line" }, "r2qkbnr/ppp2ppp/2n5/4Pb2/2Pp4/5NP1/PP2PP1P/RNBQKB1R": { "eco": "D09", "name": "Queen's Gambit Declined: Albin Countergambit, Fianchetto Variation, Bf5 Line" }, "r2qkbnr/ppp2ppp/2n5/4P3/2Pp2b1/5NP1/PP2PP1P/RNBQKB1R": { "eco": "D09", "name": "Queen's Gambit Declined: Albin Countergambit, Fianchetto Variation, Bg4 Line" }, "rnbqkbnr/pp2pppp/2p5/3p4/2PP4/8/PP2PPPP/RNBQKBNR": { "eco": "D10", "name": "Slav Defense" }, "rnbqkbnr/pp2pppp/2p5/8/2pP4/2N5/PP2PPPP/R1BQKBNR": { "eco": "D10", "name": "Slav Defense" }, "rnbqkbnr/pp3ppp/2p5/3pp3/2PP4/2N5/PP2PPPP/R1BQKBNR": { "eco": "D10", "name": "Slav Defense: Winawer Countergambit" }, "rnbqkb1r/pp2pppp/2p2n2/3p4/2PP4/5N2/PP2PPPP/RNBQKB1R": { "eco": "D11", "name": "Slav Defense: Modern" }, "rn1qkb1r/pp2pppp/2p2n2/3p4/2PP2b1/4PN2/PP3PPP/RNBQKB1R": { "eco": "D11", "name": "Slav Defense: Quiet Variation, Pin Defense" }, "rn1qkb1r/pp1n1ppp/4p3/3pNb2/3P4/2N1P3/PP3PPP/R1BQKB1R": { "eco": "D12", "name": "Queen's Gambit Declined: Slav, Amsterdam Variation" }, "rn1qkb1r/pp2pppp/2p2n2/3p1b2/2PP4/4PN2/PP3PPP/RNBQKB1R": { "eco": "D12", "name": "Slav Defense: Quiet Variation, Schallopp Defense" }, "rnbqkb1r/pp2pppp/5n2/3p4/3P4/5N2/PP2PPPP/RNBQKB1R": { "eco": "D13", "name": "Slav Defense: Exchange Variation" }, "r2qkb1r/pp2pppp/2n2n2/3p1b2/3P1B2/2N2N2/PP2PPPP/R2QKB1R": { "eco": "D14", "name": "Slav Defense: Exchange Variation, Symmetrical Line" }, "r2qk2r/pp3ppp/2n1pn2/3p1b2/1b1P1B2/1QN1PN2/PP3PPP/R3KB1R": { "eco": "D14", "name": "Slav Defense: Exchange Variation, Trifunovic Variation" }, "rnbqkb1r/1p2pppp/p1p2n2/3p4/2PP4/2N2N2/PP2PPPP/R1BQKB1R": { "eco": "D15", "name": "Slav Defense: Chameleon Variation" }, "rnb1kb1r/pp2pppp/1qp2n2/3p4/2PP4/2N2N2/PP2PPPP/R1BQKB1R": { "eco": "D15", "name": "Slav Defense: Süchting Variation" }, "rnbqkb1r/pp2pppp/2p2n2/8/2pP4/2N2N2/PP2PPPP/R1BQKB1R": { "eco": "D15", "name": "Slav Defense: Two Knights Attack" }, "r2qkb1r/pp2pppp/n1p2n2/8/P1pPP1b1/2N2N2/1P3PPP/R1BQKB1R": { "eco": "D16", "name": "Queen's Gambit Declined: Slav, Smyslov Variation" }, "r1bqkb1r/pp2pppp/n1p2n2/8/P1pP4/2N2N2/1P2PPPP/R1BQKB1R": { "eco": "D16", "name": "Slav Defense: Smyslov Variation" }, "rnbqkb1r/pp3ppp/2p1pn2/8/P1pP4/2N2N2/1P2PPPP/R1BQKB1R": { "eco": "D16", "name": "Slav Defense: Soultanbeieff Variation" }, "rn1qkb1r/pp2pppp/2p2n2/8/P1pP2b1/2N2N2/1P2PPPP/R1BQKB1R": { "eco": "D16", "name": "Slav Defense: Steiner Variation" }, "rn1qkb1r/pp2pppp/2p2n2/5b2/P1pP4/2N2N2/1P2PPPP/R1BQKB1R": { "eco": "D17", "name": "Slav Defense: Czech Variation" }, "r3kb1r/ppqn1ppp/2p2n2/4pb2/P1NP4/2N3P1/1P2PP1P/R1BQKB1R": { "eco": "D17", "name": "Slav Defense: Czech Variation, Carlsbad Variation" }, "r3kb1r/ppqn1p1p/2p5/4nbp1/P1N2B2/2N3P1/1P2PPBP/R2QK2R": { "eco": "D17", "name": "Slav Defense: Czech Variation, Carlsbad Variation, Morozevich Variation" }, "rn1qkb1r/pp3ppp/2p1pn2/4Nb2/P1pP4/2N5/1P2PPPP/R1BQKB1R": { "eco": "D17", "name": "Slav Defense: Czech Variation, Wiesbaden Variation" }, "r2qkb1r/pp2pppp/n1p2n2/5b2/P1pP4/2N1PN2/1P3PPP/R1BQKB1R": { "eco": "D18", "name": "Slav Defense: Czech Variation, Lasker Variation" }, "rnbqkbnr/ppp1pppp/8/8/2pP4/8/PP2PPPP/RNBQKBNR": { "eco": "D20", "name": "Queen's Gambit Accepted" }, "rnbqkb1r/ppp1pppp/5n2/8/2pPP3/8/PP3PPP/RNBQKBNR": { "eco": "D20", "name": "Queen's Gambit Accepted: Central Variation, Alekhine System" }, "rnbqkbnr/p1p1pppp/8/1p6/2pPP3/8/PP3PPP/RNBQKBNR": { "eco": "D20", "name": "Queen's Gambit Accepted: Central Variation, Greco Variation" }, "rnbqkbnr/ppp2ppp/8/4p3/2pPP3/8/PP3PPP/RNBQKBNR": { "eco": "D20", "name": "Queen's Gambit Accepted: Central Variation, McDonnell Defense" }, "r1bqkbnr/ppp1pppp/2n5/8/2pPP3/8/PP3PPP/RNBQKBNR": { "eco": "D20", "name": "Queen's Gambit Accepted: Central Variation, Modern Defense" }, "rnbqkbnr/pp2pppp/8/2p5/2pPP3/8/PP3PPP/RNBQKBNR": { "eco": "D20", "name": "Queen's Gambit Accepted: Central Variation, Rubinstein Defense" }, "rnbqkbnr/p3pppp/8/1ppP4/2p1P3/8/PP3PPP/RNBQKBNR": { "eco": "D20", "name": "Queen's Gambit Accepted: Central Variation, Rubinstein Defense, Yefimov Gambit" }, "rnbqkb1r/p3pppp/5n2/1ppP4/2p1P3/2N5/PP3PPP/R1BQKBNR": { "eco": "D20", "name": "Queen's Gambit Accepted: Linares Variation" }, "rnbqkbnr/ppp1p1pp/8/5p2/2pPP3/8/PP3PPP/RNBQKBNR": { "eco": "D20", "name": "Queen's Gambit Accepted: Schwartz Defense" }, "r1bqkbnr/pppnpppp/8/8/2pP4/5N2/PP2PPPP/RNBQKB1R": { "eco": "D21", "name": "Queen's Gambit Accepted: Godes Variation" }, "rnbqkbnr/pp2pppp/8/2p5/2pP4/5N2/PP2PPPP/RNBQKB1R": { "eco": "D21", "name": "Queen's Gambit Accepted: Gunsberg Defense" }, "rnbqkbnr/p1p1pppp/8/1p6/2pP4/5N2/PP2PPPP/RNBQKB1R": { "eco": "D21", "name": "Queen's Gambit Accepted: Slav Gambit" }, "rnbqkbnr/1pp1pppp/p7/8/2pP4/5N2/PP2PPPP/RNBQKB1R": { "eco": "D22", "name": "Queen's Gambit Accepted: Alekhine Defense" }, "rnbqkbnr/2p1pppp/p7/1p6/2pP4/4PN2/PP3PPP/RNBQKB1R": { "eco": "D22", "name": "Queen's Gambit Accepted: Alekhine Defense, Haberditz Variation" }, "rnbqkb1r/ppp1pppp/5n2/8/2pP4/5N2/PP2PPPP/RNBQKB1R": { "eco": "D23", "name": "Queen's Gambit Accepted" }, "rn1qkb1r/ppp1pppp/5n2/8/2pP2b1/4PN2/PP3PPP/RNBQKB1R": { "eco": "D25", "name": "Queen's Gambit Accepted: Janowski-Larsen Variation" }, "rnbqkb1r/ppp1pp1p/5np1/8/2pP4/4PN2/PP3PPP/RNBQKB1R": { "eco": "D25", "name": "Queen's Gambit Accepted: Smyslov Variation" }, "rn1qkb1r/ppp1pppp/4bn2/8/2pP4/4PN2/PP3PPP/RNBQKB1R": { "eco": "D25", "name": "Queen's Gambit Accepted: Winawer Defense" }, "rnbqkb1r/pp3ppp/4pn2/2p5/2BP4/4PN2/PP3PPP/RNBQK2R": { "eco": "D26", "name": "Queen's Gambit Accepted: Classical Defense" }, "r1bqkb1r/pp3ppp/2n1pn2/2p5/2BP4/4PN2/PP3PPP/RNBQ1RK1": { "eco": "D26", "name": "Queen's Gambit Accepted: Classical Defense, Steinitz Variation, Development Variation" }, "rnbqkb1r/pp3ppp/4pn2/8/2Bp4/4PN2/PP3PPP/RNBQ1RK1": { "eco": "D26", "name": "Queen's Gambit Accepted: Classical Defense, Steinitz Variation, Exchange Variation" }, "rnbqkb1r/ppp2ppp/4pn2/8/2pP4/4PN2/PP3PPP/RNBQKB1R": { "eco": "D26", "name": "Queen's Gambit Accepted: Normal Variation, Traditional System" }, "rnbqkb1r/1p3ppp/p3pn2/2p5/2BP4/4PN2/PP3PPP/RNBQ1RK1": { "eco": "D27", "name": "Queen's Gambit Accepted: Classical Defense, Main Line" }, "rnbqk2r/1p3ppp/p3pn2/2b5/2B5/4PN2/PP3PPP/RNBQ1RK1": { "eco": "D27", "name": "Queen's Gambit Accepted: Furman Variation" }, "rnbqkb1r/5ppp/p3pn2/1pp5/2BP4/4PN2/PP2QPPP/RNB2RK1": { "eco": "D28", "name": "Queen's Gambit Accepted: Classical Defense, Alekhine System (Except Main Line)" }, "r3kb1r/1bq2ppp/p3pn2/1p1P4/2p5/2N1PN2/PPQ2PPP/R1BR2K1": { "eco": "D28", "name": "Queen's Gambit Accepted: Classical, Flohr Variation" }, "rn1qkb1r/1b3ppp/p3pn2/1pp5/3P4/1B2PN2/PP2QPPP/RNB2RK1": { "eco": "D29", "name": "Queen's Gambit Accepted: Classical Defense, Alekhine System, Main Line" }, "r2qk2r/1b1n1ppp/p2bpn2/1pp5/3P4/1BN1PN2/PP2QPPP/R1BR2K1": { "eco": "D29", "name": "Queen's Gambit Accepted: Classical Defense, Alekhine System, Smyslov Variation" }, "rnbqkbnr/ppp2ppp/4p3/8/2PPp3/8/PP3PPP/RNBQKBNR": { "eco": "D30", "name": "French Defense: Diemer-Duhm Gambit" }, "rnbqkbnr/ppp2ppp/4p3/3p4/2PP4/8/PP2PPPP/RNBQKBNR": { "eco": "D30", "name": "Queen's Gambit Declined" }, "rnbqkb1r/ppp2pp1/4pn1p/3p2B1/2PP4/5N2/PP2PPPP/RN1QKB1R": { "eco": "D30", "name": "Queen's Gambit Declined: Capablanca Variation" }, "r1bqkb1r/pp1n1ppp/4pn2/2pp4/2PP4/3BPN2/PP1N1PPP/R1BQK2R": { "eco": "D30", "name": "Queen's Gambit Declined: Semmering Variation" }, "rnbqkb1r/pp3p1p/2p1pnp1/3p4/2PP4/4PN2/PP1N1PPP/R1BQKB1R": { "eco": "D30", "name": "Queen's Gambit Declined: Spielmann Variation" }, "rnbqkb1r/pp4pp/2p1p3/3p1p2/2PPn3/3BPN2/PP1N1PPP/R1BQK2R": { "eco": "D30", "name": "Queen's Gambit Declined: Stonewall Variation" }, "rnbqkbnr/pp3ppp/4p3/2pp4/2PP4/5N2/PP2PPPP/RNBQKB1R": { "eco": "D30", "name": "Queen's Gambit Declined: Tarrasch Defense, Pseudo-Tarrasch" }, "rnbqk2r/ppp2ppp/4pn2/3p2B1/1bPP4/5N2/PP2PPPP/RN1QKB1R": { "eco": "D30", "name": "Queen's Gambit Declined: Vienna Variation" }, "r1bqkb1r/pp1n1ppp/2p1pn2/3p4/2PP4/4PN2/PP1N1PPP/R1BQKB1R": { "eco": "D30", "name": "Semi-Slav Defense: Quiet Variation" }, "rnbqkbnr/p1p2ppp/1p2p3/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR": { "eco": "D31", "name": "Queen's Gambit Declined: Alapin Variation" }, "rnbqk1nr/ppp1bppp/4p3/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR": { "eco": "D31", "name": "Queen's Gambit Declined: Charousek (Petrosian) Variation" }, "rnbqkbnr/1pp2ppp/p3p3/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR": { "eco": "D31", "name": "Queen's Gambit Declined: Janowski Variation" }, "rnbqk1nr/5ppp/2p1p3/pp6/PbpP4/2N1PN2/1P1B1PPP/R2QKB1R": { "eco": "D31", "name": "Queen's Gambit Declined: Semi-Slav, Abrahams Variation" }, "rnb1k1nr/p4ppp/1qp1p3/1p6/PbpP4/2N1PN2/1P1B1PPP/R2QKB1R": { "eco": "D31", "name": "Queen's Gambit Declined: Semi-Slav, Junge Variation" }, "rnb1k1nr/p3qppp/2p1p3/1p6/PbpP4/2N1PN2/1P1B1PPP/R2QKB1R": { "eco": "D31", "name": "Queen's Gambit Declined: Semi-Slav, Koomen Variation" }, "rnbq1rk1/ppp1bpp1/4pn1p/8/2pP3B/2N2N2/PP2PPPP/2RQKB1R": { "eco": "D31", "name": "Queen's Gambit Declined: Uhlmann Variation" }, "rnbqkbnr/pp3ppp/2p1p3/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR": { "eco": "D31", "name": "Semi-Slav Defense: Accelerated Move Order" }, "rnb1k1nr/pp3ppp/4p3/2B5/2P5/8/PP2BPqP/R2QK1NR": { "eco": "D31", "name": "Semi-Slav Defense: Marshall Gambit, Tolush Variation" }, "rnbqkbnr/pp3ppp/2p1p3/8/2pP4/2N2N2/PP2PPPP/R1BQKB1R": { "eco": "D31", "name": "Semi-Slav Defense: Noteboom Variation" }, "rnbqk1nr/p4ppp/4p3/1p6/2pP4/2P1PN2/5PPP/R1BQKB1R": { "eco": "D31", "name": "Semi-Slav Defense: Noteboom Variation, Abrahams Variation" }, "rnbqkbnr/pp4pp/2p1pp2/6B1/2pP4/2N2N2/PP2PPPP/R2QKB1R": { "eco": "D31", "name": "Semi-Slav Defense: Noteboom Variation, Anti-Noteboom Variation, Belyavsky Line" }, "rnbqkbnr/pp3ppp/8/2pp4/3P4/2N5/PP2PPPP/R1BQKBNR": { "eco": "D32", "name": "Queen's Gambit Declined: Tarrasch Defense" }, "rnbqkbnr/pp3ppp/4p3/2pp4/2PP4/2N5/PP2PPPP/R1BQKBNR": { "eco": "D32", "name": "Tarrasch Defense" }, "r1bqkbnr/p4ppp/2n5/1pP5/N2p4/5N2/PP2PPPP/R1BQKB1R": { "eco": "D32", "name": "Tarrasch Defense: Grünfeld Gambit" }, "rnbqkbnr/pp3ppp/4p3/3P4/3p4/2N5/PP2PPPP/R1BQKBNR": { "eco": "D32", "name": "Tarrasch Defense: Schara Gambit" }, "rnbqkbnr/p4ppp/8/1pP5/N2p4/8/PP2PPPP/R1BQKBNR": { "eco": "D32", "name": "Tarrasch Defense: Tarrasch Gambit" }, "r2qkbnr/pp3ppp/2n1b3/3Q4/8/2N5/PP2PPPP/R1B1KBNR": { "eco": "D32", "name": "Tarrasch Defense: von Hennig Gambit" }, "r1bqkb1r/pp3ppp/2n2n2/2pp4/3P4/2N2NP1/PP2PP1P/R1BQKB1R": { "eco": "D33", "name": "Tarrasch Defense: Prague Variation" }, "r1bqkbnr/pp3ppp/2n5/3p4/2pP4/2N2NP1/PP2PP1P/R1BQKB1R": { "eco": "D33", "name": "Tarrasch Defense: Swedish Variation" }, "r2qkb1r/pp3ppp/2n2n2/2pp4/3P2b1/2N2NP1/PP2PPBP/R1BQK2R": { "eco": "D33", "name": "Tarrasch Defense: Wagner Variation" }, "r2q1rk1/p3bppp/1pn1bn2/2pp2B1/3P4/2N2NP1/PP2PPBP/2RQ1RK1": { "eco": "D34", "name": "Queen's Gambit Declined: Tarrasch, Stoltz Variation" }, "r1bq1rk1/pp2bppp/2n2n2/2pp4/3P4/2N2NP1/PP2PPBP/R1BQ1RK1": { "eco": "D34", "name": "Tarrasch Defense: Classical Variation" }, "r1bq1rk1/pp2bppp/2n2n2/3p2B1/2pP4/2N2NP1/PP2PPBP/R2Q1RK1": { "eco": "D34", "name": "Tarrasch Defense: Classical Variation, Advance Variation" }, "r2q1rk1/pp2bppp/2n1bn2/3p2B1/2pP4/2N2NP1/PP2PPBP/2RQ1RK1": { "eco": "D34", "name": "Tarrasch Defense: Classical Variation, Bogoljubov Variation" }, "r2qr1k1/pp2bpp1/2n1bn1p/3p4/3N4/2N1B1P1/PP2PPBP/2RQ1RK1": { "eco": "D34", "name": "Tarrasch Defense: Classical Variation, Chandler Variation" }, "r1bq1rk1/pp2bppp/2n2n2/2P5/3p4/2N2NP1/PP2PPBP/R1BQ1RK1": { "eco": "D34", "name": "Tarrasch Defense: Classical Variation, Classical Tarrasch Gambit" }, "r2q1rk1/pp2bppp/2n1bn2/2pp2B1/3P4/2N2NP1/PP2PPBP/R2Q1RK1": { "eco": "D34", "name": "Tarrasch Defense: Classical Variation, Endgame Variation" }, "r1bqr1k1/pp2bpp1/2n2n1p/3p4/3N4/2N1B1P1/PP2PPBP/R2Q1RK1": { "eco": "D34", "name": "Tarrasch Defense: Classical Variation, Main Line" }, "r1bqr1k1/pp2bppp/2n2n2/3p2B1/3N4/2N3P1/PP2PPBP/R2Q1RK1": { "eco": "D34", "name": "Tarrasch Defense: Classical Variation, Petursson Variation" }, "r2q1rk1/pp2bpp1/2n2n1p/3p4/3N2b1/2N1B1P1/PP2PPBP/R2Q1RK1": { "eco": "D34", "name": "Tarrasch Defense: Classical Variation, Spassky Variation" }, "r1bqk2r/pp2bppp/2n2n2/2pp4/3P4/2N2NP1/PP2PPBP/R1BQK2R": { "eco": "D34", "name": "Tarrasch Defense: Prague Variation, Main Line" }, "rnbqkb1r/pp3ppp/2p2n2/3p2B1/3P4/2N5/PP2PPPP/R2QKBNR": { "eco": "D35", "name": "Queen's Gambit Declined: Exchange Variation, Positional Variation" }, "rnbqkb1r/ppp2ppp/4pn2/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR": { "eco": "D35", "name": "Queen's Gambit Declined: Normal Defense" }, "r1bqkb1r/pppn1ppp/4pn2/3p4/2PP4/2N2N2/PP2PPPP/R1BQKB1R": { "eco": "D37", "name": "Queen's Gambit Declined: Barmen Variation" }, "rnbq1rk1/p1p1bppp/1p2pn2/3p4/2PP1B2/2N1PN2/PP3PPP/R2QKB1R": { "eco": "D37", "name": "Queen's Gambit Declined: Harrwitz Attack, Fianchetto Defense" }, "rnbq1rk1/pp3ppp/4pn2/2bp4/2P2B2/2N1PN2/PP3PPP/R2QKB1R": { "eco": "D37", "name": "Queen's Gambit Declined: Harrwitz Attack, Main Line" }, "rnbq1rk1/pp2bppp/2p1pn2/3p4/2PP1B2/2N1PN2/PP3PPP/R2QKB1R": { "eco": "D37", "name": "Queen's Gambit Declined: Harrwitz Attack, Orthodox Defense" }, "r1bq1rk1/pppnbppp/4pn2/3p4/2PP1B2/2N1PN2/PP3PPP/R2QKB1R": { "eco": "D37", "name": "Queen's Gambit Declined: Harrwitz Attack, Two Knights Defense" }, "r1bqkb1r/pppn1pp1/4pn1p/8/2pP3B/2N2N2/PP2PPPP/R2QKB1R": { "eco": "D37", "name": "Queen's Gambit Declined: Knight Defense, Alekhine Gambit" }, "rnbqkb1r/ppp2ppp/4pn2/8/2pP4/2N2N2/PP2PPPP/R1BQKB1R": { "eco": "D37", "name": "Queen's Gambit Declined: Vienna Variation" }, "rnbqk2r/ppp2ppp/4pn2/3p4/1bPP4/2N2N2/PP2PPPP/R1BQKB1R": { "eco": "D38", "name": "Queen's Gambit Declined: Ragozin Defense" }, "r1bqk2r/pp1n1ppp/4pn2/2pp2B1/1bPP4/2N1PN2/PP3PPP/R2QKB1R": { "eco": "D38", "name": "Queen's Gambit Declined: Westphalian Variation" }, "rnbqk2r/ppp2ppp/4pn2/6B1/1bpP4/2N2N2/PP2PPPP/R2QKB1R": { "eco": "D39", "name": "Queen's Gambit Declined: Ragozin Defense, Vienna Variation" }, "rnbqkb1r/pp3ppp/4pn2/2pp4/2PP4/2N2N2/PP2PPPP/R1BQKB1R": { "eco": "D40", "name": "Queen's Gambit Declined: Semi-Tarrasch Defense" }, "r1bq1rk1/pp3ppp/2nbpn2/2pp4/2PP4/2NBPN2/PP3PPP/R1BQ1RK1": { "eco": "D40", "name": "Queen's Gambit Declined: Semi-Tarrasch Defense, Symmetrical Variation" }, "rnb1k2r/pp3ppp/4p3/q7/1b1PP3/5N2/P2B1PPP/R2QKB1R": { "eco": "D41", "name": "Queen's Gambit Declined: Semi-Tarrasch Defense, San Sebastian Variation" }, "rnbqkb1r/pp3ppp/2p1pn2/3p4/2PP4/2N2N2/PP2PPPP/R1BQKB1R": { "eco": "D43", "name": "Semi-Slav Defense" }, "rnbqkb1r/pp3ppp/2p1pn2/6B1/2pP4/2N2N2/PP2PPPP/R2QKB1R": { "eco": "D44", "name": "Semi-Slav Defense Accepted" }, "rnbqkb1r/p4p2/2p1p2p/1p1nP1N1/2pP3B/2N5/PP3PPP/R2QKB1R": { "eco": "D44", "name": "Semi-Slav Defense: Botvinnik Variation, Alatortsev System" }, "rnbqkb1r/1p3ppp/p1p1pn2/3p4/2PP4/2N1PN2/PP3PPP/R1BQKB1R": { "eco": "D45", "name": "Semi-Slav Defense: Accelerated Meran Variation" }, "r1bqkb1r/pp1n1ppp/2p1pn2/3p4/2PP4/2N1PN2/PP3PPP/R1BQKB1R": { "eco": "D45", "name": "Semi-Slav Defense: Normal Variation" }, "rnbqkb1r/pp4pp/2p1p3/3p1p2/2PPn3/2NBPN2/PP3PPP/R1BQK2R": { "eco": "D45", "name": "Semi-Slav Defense: Stonewall Defense" }, "r1bqk2r/pp1nbppp/2p1pn2/3p4/2PP4/2NBPN2/PP3PPP/R1BQK2R": { "eco": "D46", "name": "Semi-Slav Defense: Bogoljubov Variation" }, "r1bqk2r/pp1n1ppp/2pbpn2/3p4/2PP4/2NBPN2/PP3PPP/R1BQK2R": { "eco": "D46", "name": "Semi-Slav Defense: Chigorin Defense" }, "r1bqk2r/pp1n1ppp/2p1pn2/3p4/1bPP4/2NBPN2/PP3PPP/R1BQK2R": { "eco": "D46", "name": "Semi-Slav Defense: Romih Variation" }, "r1bqkb1r/p2n1ppp/2p1pn2/1p6/2BP4/2N1PN2/PP3PPP/R1BQK2R": { "eco": "D47", "name": "Semi-Slav Defense: Meran Variation" }, "r1bqkb1r/p2n1ppp/2p1pn2/8/1p1P4/2NBPN2/PP3PPP/R1BQK2R": { "eco": "D47", "name": "Semi-Slav Defense: Meran Variation, Lundin Variation" }, "r2qkb1r/pb1n1ppp/2p1pn2/1p6/3P4/2NBPN2/PP3PPP/R1BQK2R": { "eco": "D47", "name": "Semi-Slav Defense: Meran Variation, Wade Variation" }, "r2qkb1r/pb1n1ppp/4p3/2pnP3/Np1P4/3B1N2/PP3PPP/R1BQK2R": { "eco": "D47", "name": "Semi-Slav Defense: Meran Variation, Wade Variation, Larsen Variation" }, "r1bqkb1r/3n1ppp/p1p1pn2/1p6/3P4/2NBPN2/PP3PPP/R1BQK2R": { "eco": "D48", "name": "Semi-Slav Defense: Meran Variation" }, "r1bqkb1r/3n1ppp/p3pn2/1pp5/3PP3/2NB1N2/PP3PPP/R1BQK2R": { "eco": "D48", "name": "Semi-Slav Defense: Meran Variation" }, "r1bqkb1r/3n1ppp/p1p1pn2/8/1p1PP3/2NB1N2/PP3PPP/R1BQK2R": { "eco": "D48", "name": "Semi-Slav Defense: Meran Variation, Pirc Variation" }, "r1bqkb1r/3n1ppp/p3p3/1N2P3/3p2n1/3B1N2/PP3PPP/R1BQK2R": { "eco": "D49", "name": "Semi-Slav Defense: Meran Variation, Rabinovich Variation" }, "r1bqkb1r/5ppp/p3pn2/1N2n3/3p4/3B1N2/PP3PPP/R1BQK2R": { "eco": "D49", "name": "Semi-Slav Defense: Meran Variation, Sozin Variation" }, "rnbqkb1r/pp3ppp/4pn2/2pp2B1/2PP4/2N5/PP2PPPP/R2QKBNR": { "eco": "D50", "name": "Queen's Gambit Declined: Been-Koomen Variation" }, "rnb1kb1r/pp3ppp/1q2pn2/2pP2B1/3P4/2N5/PP2PPPP/R2QKBNR": { "eco": "D50", "name": "Queen's Gambit Declined: Pseudo-Tarrasch Variation, Canal Variation" }, "r1bqk2r/pppn1ppp/4pn2/3p2B1/1bPP4/2N1P3/PP3PPP/R2QKBNR": { "eco": "D51", "name": "Queen's Gambit Declined: Manhattan Variation" }, "r1bqkb1r/pppn1ppp/4pn2/3p2B1/2PP4/2N5/PP2PPPP/R2QKBNR": { "eco": "D51", "name": "Queen's Gambit Declined: Modern Variation, Knight Defense" }, "r1bqkb1r/pp1n1ppp/2p1pn2/3p2B1/2PP4/2N1P3/PP3PPP/R2QKBNR": { "eco": "D51", "name": "Queen's Gambit Declined: Modern Variation, Knight Defense" }, "r1b1kb1r/pp1n1ppp/2p1pn2/q2p2B1/2PP4/2N1PN2/PP3PPP/R2QKB1R": { "eco": "D52", "name": "Queen's Gambit Declined: Cambridge Springs Defense" }, "r1b1kb1r/pp1n1ppp/2p1pn2/q5B1/2pP4/2N1P3/PP1N1PPP/R2QKB1R": { "eco": "D52", "name": "Queen's Gambit Declined: Cambridge Springs Defense, Rubinstein Variation" }, "r1b1kb1r/pp1n1ppp/2p1p3/q2n2B1/3P4/2N1PN2/PP3PPP/R2QKB1R": { "eco": "D52", "name": "Queen's Gambit Declined: Cambridge Springs Defense, Yugoslav Variation" }, "rnbqk2r/ppp1bppp/4pn2/3p2B1/2PP4/2N5/PP2PPPP/R2QKBNR": { "eco": "D53", "name": "Queen's Gambit Declined" }, "rnbqk2r/ppp1bppp/4p3/3p2B1/2PPn3/2N1P3/PP3PPP/R2QKBNR": { "eco": "D53", "name": "Queen's Gambit Declined: Lasker Defense" }, "rnbq1rk1/ppp1bpp1/4pn1p/3p2B1/2PP4/2N1PN2/PP3PPP/R2QKB1R": { "eco": "D55", "name": "Queen's Gambit Declined: Neo-Orthodox Variation" }, "rnbq1rk1/ppp1bpp1/4p2p/3p4/2PPn2B/2N1PN2/PP3PPP/R2QKB1R": { "eco": "D56", "name": "Queen's Gambit Declined: Lasker Defense" }, "r4rk1/pp1bqpp1/2n1pn1p/2p5/2BP4/2N1PN2/PPQ2PPP/R2R2K1": { "eco": "D56", "name": "Queen's Gambit Declined: Lasker Defense, Russian Variation" }, "rnb2rk1/ppp2pp1/3q3p/3p4/3P4/1QP1PN2/P4PPP/R3KB1R": { "eco": "D57", "name": "Queen's Gambit Declined: Lasker Defense, Bernstein Variation" }, "rn1r2k1/ppp1qpp1/4b2p/3p4/2PP4/1Q2PN2/P4PPP/R3KB1R": { "eco": "D57", "name": "Queen's Gambit Declined: Lasker Defense, Bernstein Variation, Mar del Plata Gambit" }, "rnbq1rk1/p1p1bpp1/1p2pn1p/3p4/2PP3B/2N1PN2/PP3PPP/R2QKB1R": { "eco": "D58", "name": "Queen's Gambit Declined: Tartakower Defense" }, "rnbq1rk1/p1p1bpp1/1p3n1p/3p4/3P3B/2N1PN2/PP3PPP/R2QKB1R": { "eco": "D58", "name": "Queen's Gambit Declined: Tartakower Defense, Exchange Variation" }, "rn3rk1/p1p1qpp1/1p2b2p/3p4/3P4/4PN2/PP3PPP/2RQKB1R": { "eco": "D59", "name": "Queen's Gambit Declined: Tartakower Defense" }, "rnbq1rk1/p1p1bpp1/1p2p2p/3n4/3P3B/2N1PN2/PP3PPP/R2QKB1R": { "eco": "D59", "name": "Queen's Gambit Declined: Tartakower Defense, Makogonov Exchange Variation" }, "r1bq1rk1/pppnbppp/4pn2/3p2B1/2PP4/2N1PN2/PP3PPP/R2QKB1R": { "eco": "D60", "name": "Queen's Gambit Declined: Orthodox Defense" }, "r1bq1rk1/1ppnbppp/p3pn2/3p2B1/2PP4/2N1PN2/PP3PPP/2RQKB1R": { "eco": "D63", "name": "Queen's Gambit Declined: Orthodox Defense, Henneberger Variation" }, "r1bq1rk1/pp1nbppp/2p1pn2/3p2B1/2PP4/2N1PN2/PP3PPP/2RQKB1R": { "eco": "D63", "name": "Queen's Gambit Declined: Orthodox Defense, Main Line" }, "r1bq1rk1/1p1nbppp/p1p1pn2/3p2B1/2PP4/2N1PN2/PPQ2PPP/2R1KB1R": { "eco": "D64", "name": "Queen's Gambit Declined: Orthodox Defense, Rubinstein Attack" }, "r1bq1rk1/pp1nbppp/2p1p3/3p2B1/2PPn3/2N1PN2/PPQ2PPP/2R1KB1R": { "eco": "D64", "name": "Queen's Gambit Declined: Orthodox Defense, Rubinstein Attack" }, "r1bq1rk1/p2nbppp/2p1pn2/1p4B1/2BP4/2N1PN2/PP3PPP/2RQK2R": { "eco": "D66", "name": "Queen's Gambit Declined: Orthodox Defense, Fianchetto Variation" }, "r1b2rk1/pp1nqppp/2p1p3/3n4/2BP4/2N1PN2/PP3PPP/2RQK2R": { "eco": "D67", "name": "Queen's Gambit Declined: Orthodox Defense, Bd3 Line" }, "r1bq1rk1/pp1nbppp/2p1p3/3n2B1/2BP4/2N1PN2/PP3PPP/2RQK2R": { "eco": "D67", "name": "Queen's Gambit Declined: Orthodox Defense, Capablanca System" }, "r1b2rk1/pp1nqppp/2p5/4p3/2BP4/2R1PN2/PP3PPP/3Q1RK1": { "eco": "D68", "name": "Queen's Gambit Declined: Orthodox Defense, Classical Variation" }, "r1b2rk1/pp3ppp/2p5/4q3/2B5/2R1P3/PP3PPP/3Q1RK1": { "eco": "D69", "name": "Queen's Gambit Declined: Orthodox Defense, Classical Variation" }, "rnbqkb1r/ppp1pp1p/5np1/3p4/2PP4/6P1/PP2PP1P/RNBQKBNR": { "eco": "D70", "name": "Neo-Grünfeld Defense" }, "rnbqkb1r/ppp1pp1p/5np1/3p4/2PP4/5P2/PP2P1PP/RNBQKBNR": { "eco": "D70", "name": "Neo-Grünfeld Defense: Goglidze Attack" }, "rnbqk2r/ppp1ppbp/6p1/3n4/3P4/6P1/PP2PPBP/RNBQK1NR": { "eco": "D71", "name": "Neo-Grünfeld Defense: Exchange Variation" }, "rnbq1rk1/ppp1ppbp/1n4p1/8/3P4/5NP1/PP2PPBP/RNBQ1RK1": { "eco": "D76", "name": "Neo-Grünfeld Defense: Delayed Exchange Variation" }, "rnbq1rk1/ppp1ppbp/5np1/8/2pP4/5NP1/PP2PPBP/RNBQ1RK1": { "eco": "D77", "name": "Neo-Grünfeld Defense: Classical Variation, Modern Defense" }, "r1bq1rk1/ppp1ppbp/2n2np1/3p4/2PP4/5NP1/PP2PPBP/RNBQ1RK1": { "eco": "D77", "name": "Neo-Grünfeld Defense: Classical Variation, Polgar Variation" }, "rnbq1rk1/pp2ppbp/2p2np1/3p4/2PP4/5NP1/PP2PPBP/RNBQ1RK1": { "eco": "D78", "name": "Neo-Grünfeld Defense: Classical Variation, Original Defense" }, "rnbq1rk1/pp2ppbp/5np1/3p4/3P4/5NP1/PP2PPBP/RNBQ1RK1": { "eco": "D79", "name": "Neo-Grünfeld Defense: Ultra-delayed Exchange Variation" }, "rnbqkb1r/ppp1pp1p/5np1/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR": { "eco": "D80", "name": "Grünfeld Defense" }, "rnbqkb1r/pp2pp1p/6p1/2p3B1/2PPp3/8/PP1QPPPP/R3KBNR": { "eco": "D80", "name": "Grünfeld Defense: Lundin Variation" }, "rnbq1rk1/ppp1ppbp/5np1/3p4/2PP1B2/2N1P3/PP3PPP/R2QKBNR": { "eco": "D83", "name": "Grünfeld Defense: Brinckmann Attack, Grünfeld Gambit" }, "rn1q1rk1/pp2ppbp/4bnp1/2Pp4/2P2B2/2N1P3/PP3PPP/2RQKBNR": { "eco": "D83", "name": "Grünfeld Defense: Brinckmann Attack, Grünfeld Gambit, Botvinnik Variation" }, "rnb2rk1/pp2ppbp/5np1/q1Pp4/2P2B2/2N1P3/PP3PPP/2RQKBNR": { "eco": "D83", "name": "Grünfeld Defense: Brinckmann Attack, Reshevsky Gambit" }, "rnbqkb1r/ppp1pp1p/6p1/3n4/3P4/2N5/PP2PPPP/R1BQKBNR": { "eco": "D85", "name": "Grünfeld Defense: Exchange Variation" }, "r1bq1rk1/pp2pp1p/2n3p1/2pP4/4P3/2b2N2/P3BPPP/1RBQK2R": { "eco": "D85", "name": "Grünfeld Defense: Exchange Variation, Modern Exchange Variation, Pawn Grab Line" }, "rnb2rk1/pppqppbp/6p1/8/2BPP3/2P5/P3NPPP/R1BQK2R": { "eco": "D86", "name": "Grünfeld Defense: Exchange Variation, Larsen Variation" }, "rnb2rk1/p1pqppbp/1p4p1/8/2BPP3/2P5/P3NPPP/R1BQ1RK1": { "eco": "D86", "name": "Grünfeld Defense: Exchange Variation, Larsen Variation" }, "r1bq1rk1/ppp1ppbp/2n3p1/8/2BPP3/2P5/P3NPPP/R1BQK2R": { "eco": "D86", "name": "Grünfeld Defense: Exchange Variation, Simagin's Improved Variation" }, "rnbq1rk1/p1p1ppbp/1p4p1/8/2BPP3/2P5/P3NPPP/R1BQK2R": { "eco": "D86", "name": "Grünfeld Defense: Exchange Variation, Simagin's Lesser Variation" }, "rnbq1rk1/pp2ppbp/6p1/2p5/2BPP3/2P5/P3NPPP/R1BQK2R": { "eco": "D87", "name": "Grünfeld Defense: Exchange Variation, Spassky Variation" }, "r2q1rk1/pp2ppbp/4b1p1/n7/3PP3/3BBP2/P3N1PP/R2Q1RK1": { "eco": "D89", "name": "Grünfeld Defense: Exchange Variation, Spassky Variation" }, "rnbqk2r/ppp1ppbp/5np1/3p4/2PP4/2N2N2/PP2PPPP/R1BQKB1R": { "eco": "D90", "name": "Grünfeld Defense: Three Knights Variation" }, "rnbqkb1r/pp2pp1p/2p2np1/3p4/2PP4/2N2N2/PP2PPPP/R1BQKB1R": { "eco": "D90", "name": "Slav Defense: Schlechter Variation" }, "rn1q1rk1/pp2ppbp/2p2np1/3p1b2/2PP4/2NBPN2/PP3PPP/R1BQ1RK1": { "eco": "D94", "name": "Grünfeld Defense: Flohr Defense" }, "rn1q1rk1/pp2ppbp/2p2np1/3p4/2PP2b1/2NBPN2/PP3PPP/R1BQ1RK1": { "eco": "D94", "name": "Grünfeld Defense: Smyslov Defense" }, "rnbq1rk1/ppp2pbp/4pnp1/3p4/2PP4/1QN1PN2/PP3PPP/R1B1KB1R": { "eco": "D95", "name": "Grünfeld Defense: Botvinnik Variation" }, "r1bq1rk1/ppp1ppbp/2n2np1/8/2QPP3/2N2N2/PP3PPP/R1B1KB1R": { "eco": "D97", "name": "Grünfeld Defense: Russian Variation, Byrne (Simagin) Variation" }, "rnbq1rk1/1pp1ppbp/p4np1/8/2QPP3/2N2N2/PP3PPP/R1B1KB1R": { "eco": "D97", "name": "Grünfeld Defense: Russian Variation, Hungarian Variation" }, "rnbq1rk1/p1p1ppbp/1p3np1/8/2QPP3/2N2N2/PP3PPP/R1B1KB1R": { "eco": "D97", "name": "Grünfeld Defense: Russian Variation, Levenfish Variation" }, "r1bq1rk1/ppp1ppbp/n4np1/8/2QPP3/2N2N2/PP3PPP/R1B1KB1R": { "eco": "D97", "name": "Grünfeld Defense: Russian Variation, Prins Variation" }, "rnbq1rk1/pp2ppbp/2p2np1/8/2QPP3/2N2N2/PP3PPP/R1B1KB1R": { "eco": "D97", "name": "Grünfeld Defense: Russian Variation, Szabo (Boleslavsky)" }, "rn1q1rk1/ppp1ppbp/5np1/8/2QPP1b1/2N2N2/PP3PPP/R1B1KB1R": { "eco": "D98", "name": "Grünfeld Defense: Russian Variation, Smyslov Variation" }, "rn1q1rk1/pp1nppbp/6p1/2p5/3PP1b1/1QN1BN2/PP3PPP/R3KB1R": { "eco": "D99", "name": "Grünfeld Defense: Russian Variation, Yugoslav Variation" }, "rnbqkb1r/ppp2ppp/4pn2/3p4/2PP4/6P1/PP2PP1P/RNBQKBNR": { "eco": "E00", "name": "Catalan Opening" }, "rnbqkb1r/pppp1ppp/5n2/4p3/2PP4/6P1/PP2PP1P/RNBQKBNR": { "eco": "E00", "name": "Catalan Opening: Hungarian Gambit" }, "r1bqkb1r/pp3ppp/2n1pn2/2pp4/2PP4/5NP1/PP2PPBP/RNBQK2R": { "eco": "E01", "name": "Catalan Opening: Open Defense, Tarrasch Defense" }, "r1bqk2r/ppp2ppp/2n1pn2/8/QbpP4/5NP1/PP2PPBP/RNB1K2R": { "eco": "E04", "name": "Catalan Opening: Open Defense, Modern Sharp Variation" }, "rnbqk2r/ppp1bppp/4pn2/8/2pP4/5NP1/PP2PPBP/RNBQK2R": { "eco": "E05", "name": "Catalan Opening: Open Defense, Classical Line" }, "r1bq1rk1/pppnbppp/4pn2/3p4/2PP4/5NP1/PP2PPBP/RNBQ1RK1": { "eco": "E07", "name": "Catalan Opening: Closed" }, "r2q1rk1/pb1nbppp/2p1pn2/1p1p4/2PP4/1PN2NP1/P1Q1PPBP/R1BR2K1": { "eco": "E08", "name": "Catalan Opening: Closed, Spassky Gambit" }, "r1bq1rk1/p2nbppp/2p1pn2/1p1p4/2PP4/5NP1/PPQNPPBP/R1B2RK1": { "eco": "E09", "name": "Catalan Opening: Closed Variation, Rabinovich Variation" }, "r1bq1rk1/p2nbppp/1pp1pn2/3p4/2PP4/5NP1/PPQNPPBP/R1B2RK1": { "eco": "E09", "name": "Catalan Opening: Closed Variation, Traditional Variation" }, "r2q1rk1/3nbppp/bpp1pn2/p2p4/2PP4/1P3NP1/PBQNPPBP/R4RK1": { "eco": "E09", "name": "Catalan Opening: Closed, Sokolsky Variation" }, "rnbqkb1r/pp1p1ppp/4pn2/2p5/2PP4/5N2/PP2PPPP/RNBQKB1R": { "eco": "E10", "name": "Blumenfeld Countergambit" }, "rnbqkb1r/p2p1ppp/4pn2/1ppP4/2P5/5N2/PP2PPPP/RNBQKB1R": { "eco": "E10", "name": "Blumenfeld Countergambit" }, "rnbqkb1r/p5pp/4pn2/1Ppp4/8/5N2/PP2PPPP/RNBQKB1R": { "eco": "E10", "name": "Blumenfeld Countergambit Accepted" }, "rnbqkb1r/p2p1pp1/5n1p/1ppP2B1/8/5N2/PP2PPPP/RN1QKB1R": { "eco": "E10", "name": "Blumenfeld Countergambit: Spielmann Variation" }, "rnbqkb1r/1ppp1ppp/p3pn2/8/2PP4/5N2/PP2PPPP/RNBQKB1R": { "eco": "E10", "name": "Indian Game: Dzindzi-Indian Defense" }, "rnbqkb1r/pppp1ppp/4p3/8/2PPn3/5N2/PP2PPPP/RNBQKB1R": { "eco": "E10", "name": "Indian Game: Döry Indian" }, "r1bqkb1r/pp3ppp/2n1pn2/2pp4/2PP4/2N1PN2/PP3PPP/R1BQKB1R": { "eco": "E10", "name": "Tarrasch Defense: Symmetrical Variation" }, "rnbqk2r/pppp1ppp/4pn2/8/1bPP4/5N2/PP2PPPP/RNBQKB1R": { "eco": "E11", "name": "Bogo-Indian Defense" }, "rnbqk2r/pppp1ppp/4pn2/8/2PP4/5N2/PP1bPPPP/RN1QKB1R": { "eco": "E11", "name": "Bogo-Indian Defense: Exchange Variation" }, "r1bqk2r/pppp1ppp/2n1pn2/8/1bPP4/5N2/PP1BPPPP/RN1QKB1R": { "eco": "E11", "name": "Bogo-Indian Defense: Haiti Variation" }, "rnb1k2r/ppppqppp/4pn2/8/1bPP4/5N2/PP1BPPPP/RN1QKB1R": { "eco": "E11", "name": "Bogo-Indian Defense: Nimzowitsch Variation" }, "rnbqk2r/ppppbppp/4pn2/8/2PP4/5N2/PP1BPPPP/RN1QKB1R": { "eco": "E11", "name": "Bogo-Indian Defense: Retreat Variation" }, "rnbqk2r/pp1p1ppp/4pn2/2p5/1bPP4/5N2/PP1BPPPP/RN1QKB1R": { "eco": "E11", "name": "Bogo-Indian Defense: Vitolins Variation" }, "rnbqk2r/1ppp1ppp/4pn2/p7/1bPP4/5N2/PP1BPPPP/RN1QKB1R": { "eco": "E11", "name": "Bogo-Indian Defense: Wade-Smyslov Variation" }, "rnbqk2r/p1pp1ppp/1p2pn2/8/1bPP4/2N2N2/PP2PPPP/R1BQKB1R": { "eco": "E12", "name": "Nimzo-Indian Defense: Three Knights Variation, Duchamp Variation" }, "rnbqkb1r/p1pp1ppp/1p2pn2/8/2PP4/5N2/PP2PPPP/RNBQKB1R": { "eco": "E12", "name": "Queen's Indian Defense" }, "rn1qkb1r/pbpp1p2/1p2p2p/6pn/2PP4/2N2NB1/PP2PPPP/R2QKB1R": { "eco": "E12", "name": "Queen's Indian Defense: Kasparov Variation, Botvinnik Attack" }, "rn1qkb1r/pbpp1ppp/1p2p3/8/2PPn3/P1N2N2/1P2PPPP/R1BQKB1R": { "eco": "E12", "name": "Queen's Indian Defense: Kasparov-Petrosian Variation, Andersson Variation" }, "rn1qkb1r/pbp2ppp/1p3n2/3p4/3P4/P1N2N2/1P2PPPP/R1BQKB1R": { "eco": "E12", "name": "Queen's Indian Defense: Kasparov-Petrosian Variation, Classical Variation" }, "rn1qkb1r/pbpp1p1p/1p2pnp1/8/2PP4/P1N2N2/1P2PPPP/R1BQKB1R": { "eco": "E12", "name": "Queen's Indian Defense: Kasparov-Petrosian Variation, Hedgehog Variation" }, "rn1qkb1r/pbp2ppp/1p2pn2/3p4/2PP4/P1N2N2/1P2PPPP/R1BQKB1R": { "eco": "E12", "name": "Queen's Indian Defense: Kasparov-Petrosian Variation, Main Line" }, "rn1qk2r/pbppbppp/1p2pn2/8/2PP4/P1N2N2/1P2PPPP/R1BQKB1R": { "eco": "E12", "name": "Queen's Indian Defense: Kasparov-Petrosian Variation, Marco Defense" }, "rn1qkb1r/pbp2ppp/1p2p3/3n4/3P4/P1N2N2/1P2PPPP/R1BQKB1R": { "eco": "E12", "name": "Queen's Indian Defense: Kasparov-Petrosian Variation, Modern Variation" }, "rn1qkb1r/pbpp1ppp/1p2pn2/8/2PP4/P4N2/1PQ1PPPP/RNB1KB1R": { "eco": "E12", "name": "Queen's Indian Defense: Petrosian Variation, Farago Defense" }, "rn1qk2r/pbpp1pp1/1p2pn1p/8/1bPP3B/2N2N2/PP2PPPP/R2QKB1R": { "eco": "E13", "name": "Queen's Indian Defense: Kasparov Variation" }, "rn1qkb1r/pbpp1ppp/1p2pn2/8/2PP4/5NP1/PP2PP1P/RNBQKB1R": { "eco": "E15", "name": "Queen's Indian Defense: Fianchetto Traditional" }, "rn1qk2r/p1pp1ppp/bp2pn2/8/1bPP4/1P3NP1/P3PP1P/RNBQKB1R": { "eco": "E15", "name": "Queen's Indian Defense: Fianchetto Variation, Check Variation" }, "rn1qk2r/p1ppbppp/bp2pn2/8/2PP4/1P3NP1/P2BPP1P/RN1QKB1R": { "eco": "E15", "name": "Queen's Indian Defense: Fianchetto Variation, Check Variation, Intermezzo Line" }, "rn2k2r/p1ppqppp/bp2pn2/8/1bPP4/1P3NP1/P2BPP1P/RN1QKB1R": { "eco": "E15", "name": "Queen's Indian Defense: Fianchetto Variation, Check Variation, Modern Line" }, "rn1qkb1r/p1pp1ppp/bp2pn2/8/2PP4/5NP1/PP2PP1P/RNBQKB1R": { "eco": "E15", "name": "Queen's Indian Defense: Fianchetto Variation, Nimzowitsch Variation" }, "rn1qkb1r/pb1p1ppp/1p2pn2/2p5/2PP4/5NP1/PP2PPBP/RNBQK2R": { "eco": "E15", "name": "Queen's Indian Defense: Fianchetto Variation, Sämisch Variation" }, "rn1qk2r/pbpp1ppp/1p2pn2/8/1bPP4/5NP1/PP2PPBP/RNBQK2R": { "eco": "E16", "name": "Queen's Indian Defense: Capablanca Variation" }, "rn1qk2r/pbppbppp/1p2pn2/8/2PP4/5NP1/PP1BPPBP/RN1QK2R": { "eco": "E16", "name": "Queen's Indian Defense: Riumin Variation" }, "rn1qk2r/1bpp1ppp/1p2pn2/p7/1bPP4/5NP1/PP1BPPBP/RN1QK2R": { "eco": "E16", "name": "Queen's Indian Defense: Yates Variation" }, "rn1qk2r/pbppbppp/1p2pn2/8/2PP4/5NP1/PP2PPBP/RNBQK2R": { "eco": "E17", "name": "Queen's Indian Defense: Traditional Variation" }, "r2q1rk1/pbppbppp/np2pn2/8/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1": { "eco": "E18", "name": "Queen's Indian Defense: Classical Variation, Tiviakov Defense" }, "rn1q1rk1/pbp1bppp/1p2pn2/3p4/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1": { "eco": "E18", "name": "Queen's Indian Defense: Classical Variation, Traditional Variation, Nimzowitsch Line" }, "rnbqk2r/pppp1ppp/4pn2/8/1bPP4/2N5/PP2PPPP/R1BQKBNR": { "eco": "E20", "name": "Nimzo-Indian Defense" }, "rnbq1rk1/pp3ppp/4p3/3n4/1b1N4/2N3P1/PP2PPBP/R1BQK2R": { "eco": "E21", "name": "Nimzo-Indian Defense: Romanishin Variation, English Hybrid" }, "rnbqk2r/pp1p1ppp/4p3/2pP4/1bP1n3/2N2N2/PP2PPPP/R1BQKB1R": { "eco": "E21", "name": "Nimzo-Indian Defense: Three Knights Variation, Euwe Variation" }, "rnbqk2r/p2p1ppp/4pn2/1ppP4/1bP5/2N2N2/PP2PPPP/R1BQKB1R": { "eco": "E21", "name": "Nimzo-Indian Defense: Three Knights Variation, Shocron Gambit" }, "r1bqk2r/pp1p1ppp/2n1p3/2P5/1bP5/1QN2N2/PP1nPPPP/R3KB1R": { "eco": "E23", "name": "Nimzo-Indian Defense: Spielmann Variation, Karlsbad Variation" }, "r1bqk2r/pp1p1ppp/2n1pn2/2P5/1bP5/1QN5/PP2PPPP/R1B1KBNR": { "eco": "E23", "name": "Nimzo-Indian Defense: Spielmann Variation, Romanovsky Gambit" }, "r1bqk2r/pp1p1ppp/2n1p3/2n5/1bP5/1QN2N2/PP1BPPPP/R3KB1R": { "eco": "E23", "name": "Nimzo-Indian Defense: Spielmann Variation, Stahlberg Variation" }, "rnbq1rk1/pp3ppp/4p3/2pn4/3P4/P1P1PP2/6PP/R1BQKBNR": { "eco": "E24", "name": "Nimzo-Indian Defense: Sämisch Variation, Botvinnik Variation" }, "rnbqk2r/pp4pp/4p3/2Pn1p2/8/P1P2P2/4P1PP/R1BQKBNR": { "eco": "E25", "name": "Nimzo-Indian Defense: Sämisch Variation, Romanovsky Variation" }, "rnbqk2r/p2p1ppp/1p2pn2/2p5/2PP4/P1P1P3/5PPP/R1BQKBNR": { "eco": "E26", "name": "Nimzo-Indian Defense: Sämisch Variation, O'Kelly Variation" }, "rnbq1rk1/pppp1ppp/4pn2/8/2PP4/P1P5/4PPPP/R1BQKBNR": { "eco": "E27", "name": "Nimzo-Indian Defense: Sämisch Variation" }, "r1bq1rk1/pp1p1ppp/2n1pn2/2p5/2PP4/P1PBP3/5PPP/R1BQK1NR": { "eco": "E29", "name": "Nimzo-Indian Defense: Sämisch Variation" }, "r1bqnrk1/p2p1ppp/1pn1p3/2p5/2PPP3/P1PB4/4NPPP/R1BQK2R": { "eco": "E29", "name": "Nimzo-Indian Defense: Sämisch Variation, Capablanca Variation" }, "rnbqk2r/p2p1pp1/4pn1p/1ppP4/1bP4B/2N5/PP2PPPP/R2QKBNR": { "eco": "E30", "name": "Nimzo-Indian Defense: Leningrad Variation, Averbakh Gambit" }, "rnbqk2r/pp3pp1/3ppn1p/2pP4/1bP4B/2N5/PP2PPPP/R2QKBNR": { "eco": "E31", "name": "Nimzo-Indian Defense: Leningrad Variation, Benoni Defense" }, "rnbq1rk1/p1pp1ppp/1p2pn2/8/2PP4/P1Q5/1P2PPPP/R1B1KBNR": { "eco": "E32", "name": "Nimzo-Indian Defense: Classical Variation, Keres Defense" }, "rnbq1rk1/p1pp1ppp/4pn2/1p6/2PP4/P1Q5/1P2PPPP/R1B1KBNR": { "eco": "E32", "name": "Nimzo-Indian Defense: Classical Variation, Vitolins-Adorjan Gambit" }, "r1bqk2r/ppp2ppp/2nppn2/8/1bPP4/2N2N2/PPQ1PPPP/R1B1KB1R": { "eco": "E33", "name": "Nimzo-Indian Defense: Classical Variation, Milner-Barry Variation" }, "r1bqk2r/pppp1ppp/2n1pn2/8/1bPP4/2N5/PPQ1PPPP/R1B1KBNR": { "eco": "E33", "name": "Nimzo-Indian Defense: Classical Variation, Zurich Variation" }, "rnb1k2r/ppp2ppp/5n2/4pq2/1b1P4/2N2N2/PP2PPPP/R1BQKB1R": { "eco": "E34", "name": "Nimzo-Indian Defense: Classical Variation, Belyavsky Gambit" }, "rnbqk2r/ppp2ppp/4pn2/3p4/1bPP4/2N5/PPQ1PPPP/R1B1KBNR": { "eco": "E34", "name": "Nimzo-Indian Defense: Classical Variation, Noa Variation" }, "rnbqk2r/ppp2ppp/5n2/3p4/1b1P4/2N5/PPQ1PPPP/R1B1KBNR": { "eco": "E35", "name": "Nimzo-Indian Defense: Classical Variation, Noa Variation" }, "r1bqk2r/ppp2ppp/2n1pn2/3p4/2PP4/P1Q5/1P2PPPP/R1B1KBNR": { "eco": "E36", "name": "Nimzo-Indian Defense: Classical Variation, Noa Variation, Botvinnik Variation" }, "rnbqk2r/ppp2ppp/4p3/3p4/2PPn3/P1Q5/1P2PPPP/R1B1KBNR": { "eco": "E36", "name": "Nimzo-Indian Defense: Classical Variation, Noa Variation, Main Line" }, "r1bqk2r/ppp2ppp/2n5/3pp3/2PPn3/P3P3/1PQ2PPP/R1B1KBNR": { "eco": "E37", "name": "Nimzo-Indian Defense: Classical Variation, Noa Variation, San Remo Variation" }, "rnbqk2r/pp1p1ppp/4pn2/2p5/1bPP4/2N5/PPQ1PPPP/R1B1KBNR": { "eco": "E38", "name": "Nimzo-Indian Defense: Classical Variation, Berlin Variation" }, "rnbqk2r/pp1p1ppp/4pn2/2P5/2P5/2b5/PPQ1PPPP/R1B1KBNR": { "eco": "E38", "name": "Nimzo-Indian Defense: Classical Variation, Berlin Variation, Steiner Variation" }, "rnbq1rk1/pp1p1ppp/4pn2/2P5/1bP5/2N5/PPQ1PPPP/R1B1KBNR": { "eco": "E39", "name": "Nimzo-Indian Defense: Classical Variation, Berlin Variation, Pirc Variation" }, "r1bqk2r/pppp1ppp/2n1pn2/8/1bPP4/2N1P3/PP3PPP/R1BQKBNR": { "eco": "E40", "name": "Nimzo-Indian Defense: Normal Variation, Taimanov Variation" }, "rnbqk2r/pp1p1ppp/4pn2/2p5/1bPP4/2N1P3/PP3PPP/R1BQKBNR": { "eco": "E41", "name": "Nimzo-Indian Defense: Hübner Variation" }, "r1bqk2r/pp3ppp/2nppn2/2p5/2PP4/2PBPN2/P4PPP/R1BQK2R": { "eco": "E41", "name": "Nimzo-Indian Defense: Hübner Variation, Main Line" }, "rnbq1rk1/pp1p1ppp/4pn2/2p5/1bPP4/2N1PN2/PP3PPP/R1BQKB1R": { "eco": "E41", "name": "Nimzo-Indian Defense: Normal Variation, Hübner Deferred" }, "rnbqk2r/p1pp1ppp/1p2pn2/8/1bPP4/2N1P3/PP3PPP/R1BQKBNR": { "eco": "E43", "name": "Nimzo-Indian Defense: St. Petersburg Variation" }, "rn1qk2r/p1pp1ppp/bp2pn2/8/1bPP4/2N1P3/PP2NPPP/R1BQKB1R": { "eco": "E45", "name": "Nimzo-Indian Defense: Normal Variation, Bronstein (Byrne) Variation" }, "rnbq1rk1/pppp1ppp/4pn2/8/1bPP4/2N1P3/PP3PPP/R1BQKBNR": { "eco": "E46", "name": "Nimzo-Indian Defense: Normal Variation" }, "rnbq1rk1/ppp2ppp/3bpn2/3p4/2PP4/P1N1P3/1P2NPPP/R1BQKB1R": { "eco": "E46", "name": "Nimzo-Indian Defense: Simagin Variation" }, "rnbq1rk1/ppp2ppp/4pn2/3p4/1bPP4/2NBP3/PP3PPP/R1BQK1NR": { "eco": "E48", "name": "Nimzo-Indian Defense: Normal Variation, Bishop Attack, Classical Defense" }, "r1bq1rk1/ppp2ppp/2n1pn2/8/1bpP4/2NBPN2/PP3PPP/R1BQ1RK1": { "eco": "E51", "name": "Nimzo-Indian Defense, Ragozin Variation" }, "rnbq1rk1/ppp2ppp/4pn2/3p4/1bPP4/2N1PN2/PP3PPP/R1BQKB1R": { "eco": "E51", "name": "Nimzo-Indian Defense: Normal Variation, Ragozin Variation" }, "rnbq1rk1/p1p2ppp/1p2pn2/3p4/1bPP4/2NBPN2/PP3PPP/R1BQK2R": { "eco": "E52", "name": "Nimzo-Indian Defense: Normal Variation, Schlechter Defense" }, "rnbq1rk1/pp3ppp/4pn2/2pp4/1bPP4/2NBPN2/PP3PPP/R1BQK2R": { "eco": "E53", "name": "Nimzo-Indian Defense: Normal Variation, Gligoric System" }, "r1bq1rk1/pp1n1ppp/4pn2/2pp4/1bPP4/2NBPN2/PP3PPP/R1BQ1RK1": { "eco": "E53", "name": "Nimzo-Indian Defense: Normal Variation, Gligoric System" }, "rnbq1rk1/p4ppp/1p2pn2/2pp4/1bPP4/2NBPN2/PP3PPP/R1BQ1RK1": { "eco": "E53", "name": "Nimzo-Indian Defense: Normal Variation, Gligoric System, Keres Variation" }, "rnb2rk1/pp2qppp/4pn2/2p5/1bBP4/2N1PN2/PP3PPP/R1BQ1RK1": { "eco": "E54", "name": "Nimzo-Indian Defense: Normal Variation, Gligoric System, Smyslov Variation" }, "r1bq1rk1/pp1n1ppp/4pn2/2p5/1bBP4/2N1PN2/PP3PPP/R1BQ1RK1": { "eco": "E55", "name": "Nimzo-Indian Defense: Normal Variation, Gligoric System, Bronstein Variation" }, "r1bq1rk1/pp3ppp/2n1pn2/2pp4/1bPP4/2NBPN2/PP3PPP/R1BQ1RK1": { "eco": "E56", "name": "Nimzo-Indian Defense: Normal Variation, Gligoric System, Bernstein Defense" }, "rnbqk2r/ppp1ppbp/5np1/3p4/2PP4/6P1/PP2PPBP/RNBQK1NR": { "eco": "E60", "name": "Grünfeld Defense: Counterthrust Variation" }, "rnbqkb1r/p1pppp1p/5np1/1p1P4/2P5/8/PP2PPPP/RNBQKBNR": { "eco": "E60", "name": "Indian Game: Anti-Grünfeld, Adorjan Gambit" }, "rnbqkb1r/pppp1p1p/5np1/4p3/2PP4/5P2/PP2P1PP/RNBQKBNR": { "eco": "E60", "name": "Indian Game: Anti-Grünfeld, Alekhine Variation, Leko Gambit" }, "rnbqkb1r/pppppp1p/5np1/8/2PP4/8/PP2PPPP/RNBQKBNR": { "eco": "E60", "name": "Indian Game: West Indian Defense" }, "rnb1k2r/pp1pppbp/5np1/q1p5/2PP4/5NP1/PP2PPBP/RNBQK2R": { "eco": "E60", "name": "King's Indian Defense: Fianchetto Variation, Pterodactyl Variation" }, "rnbq1rk1/pp2ppbp/3p1np1/2p5/2PP4/5NP1/PP2PPBP/RNBQ1RK1": { "eco": "E60", "name": "King's Indian Defense: Fianchetto Variation, Yugoslav System" }, "rnbq1rk1/pp2ppbp/2pp1np1/8/2PP4/2N1PN2/PP2BPPP/R1BQK2R": { "eco": "E60", "name": "King's Indian Defense: Semi-Classical Variation, Benoni Variation" }, "r1bq1rk1/ppp1ppbp/2np1np1/8/2PP4/2N1PN2/PP2BPPP/R1BQK2R": { "eco": "E60", "name": "King's Indian Defense: Semi-Classical Variation, Hollywood Variation" }, "rnbqkb1r/ppp1pp1p/5np1/3p4/2PP4/5N2/PP2PPPP/RNBQKB1R": { "eco": "E60", "name": "Neo-Grünfeld Defense: Non- or Delayed Fianchetto" }, "r1bq1rk1/ppp1ppbp/2np1np1/8/2PP4/2N2NP1/PP2PPBP/R1BQK2R": { "eco": "E62", "name": "King's Indian Defense: Fianchetto Variation, Karlsbad Variation" }, "rnb2rk1/pp2ppbp/2pp1np1/q7/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1": { "eco": "E62", "name": "King's Indian Defense: Fianchetto Variation, Kavalek Defense" }, "rn1q1rk1/pp2ppbp/2pp1np1/5b2/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1": { "eco": "E62", "name": "King's Indian Defense: Fianchetto Variation, Larsen Defense" }, "r2q1rk1/ppp1ppbp/2np1np1/5b2/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1": { "eco": "E62", "name": "King's Indian Defense: Fianchetto Variation, Lesser Simagin (Spassky)" }, "r2q1rk1/ppp1ppbp/2np1np1/8/2PP2b1/2N2NP1/PP2PPBP/R1BQ1RK1": { "eco": "E62", "name": "King's Indian Defense: Fianchetto Variation, Simagin Variation" }, "r1bq1rk1/ppp2pbp/2np1np1/4p3/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1": { "eco": "E62", "name": "King's Indian Defense: Fianchetto Variation, Uhlmann-Szabo System" }, "r1bq1rk1/1pp1ppbp/p1np1np1/8/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1": { "eco": "E63", "name": "King's Indian Defense: Fianchetto Variation, Panno Variation" }, "r1bq1rk1/1p3pbp/p2p1np1/n1pPp3/2P5/2N3P1/PPQNPPBP/R1B2RK1": { "eco": "E63", "name": "King's Indian Defense: Fianchetto Variation, Panno Variation, Blockade Line" }, "1rbq1rk1/4pp1p/p2p1npb/n1pP4/2P5/2N3P1/PBQNPPBP/R4RK1": { "eco": "E63", "name": "King's Indian Defense: Fianchetto Variation, Panno Variation, Donner Line" }, "rnbq1rk1/pp2ppbp/3p1np1/2p5/2PP4/2N2NP1/PP2PPBP/R1BQK2R": { "eco": "E64", "name": "King's Indian Defense: Fianchetto Variation, Yugoslav Variation, Rare Line" }, "r1bq1rk1/pp2ppbp/2n2np1/2p5/2P5/2N2NP1/PP2PPBP/R1BQ1RK1": { "eco": "E65", "name": "King's Indian Defense: Fianchetto Variation, Yugoslav Variation, Exchange Line" }, "r1bq1rk1/pppn1pbp/3p1np1/4p3/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1": { "eco": "E67", "name": "King's Indian Defense: Fianchetto Variation, Classical Fianchetto" }, "r1bq1rk1/pppnppbp/3p1np1/8/2PP4/2N2NP1/PP2PPBP/R1BQK2R": { "eco": "E67", "name": "King's Indian Defense: Fianchetto Variation, Debrecen Defense" }, "r1bq1rk1/1ppnppbp/p2p1np1/8/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1": { "eco": "E67", "name": "King's Indian Defense: Fianchetto Variation, Hungarian Variation" }, "r1bqr1k1/1pp2pbp/3p1np1/p1n5/2PNP3/2N3PP/PP3PB1/R1BQR1K1": { "eco": "E68", "name": "King's Indian Defense: Fianchetto Variation, Long Variation" }, "rnbqk2r/ppp1ppbp/3p1np1/8/2PPP3/2N5/PP3PPP/R1BQKBNR": { "eco": "E70", "name": "King's Indian Defense: Normal Variation" }, "rnbq1rk1/ppp1ppb1/3p1npp/6B1/2PPP3/2N5/PP2BPPP/R2QK1NR": { "eco": "E73", "name": "King's Indian Defense: Averbakh Variation, Flexible Defense" }, "r1bq1rk1/pppnppbp/3p1np1/6B1/2PPP3/2N5/PP2BPPP/R2QK1NR": { "eco": "E73", "name": "King's Indian Defense: Averbakh Variation, Geller Defense" }, "r1bq1rk1/ppp1ppbp/n2p1np1/6B1/2PPP3/2N5/PP2BPPP/R2QK1NR": { "eco": "E73", "name": "King's Indian Defense: Averbakh Variation, Modern Defense" }, "r1bq1rk1/pp2ppbp/n1pp1np1/6B1/2PPP3/2N5/PP1QBPPP/R3K1NR": { "eco": "E73", "name": "King's Indian Defense: Averbakh Variation, Modern Defense, Burgess Line" }, "r1bq1rk1/ppp1ppbp/2np1np1/6B1/2PPP3/2N5/PP2BPPP/R2QK1NR": { "eco": "E73", "name": "King's Indian Defense: Averbakh Variation, Nc6 Defense" }, "rnbq1rk1/1pp1ppbp/p2p1np1/6B1/2PPP3/2N5/PP2BPPP/R2QK1NR": { "eco": "E73", "name": "King's Indian Defense: Averbakh Variation, Spanish Defense" }, "rnbq1rk1/pp2ppbp/3p1np1/2p3B1/2PPP3/2N5/PP2BPPP/R2QK1NR": { "eco": "E74", "name": "King's Indian Defense: Averbakh Variation, Benoni Defense" }, "rnbq1rk1/pp3pbp/3ppnp1/2pP2B1/2P1P3/2N5/PP2BPPP/R2QK1NR": { "eco": "E75", "name": "King's Indian, Averbakh, Main Line" }, "r1bqk2r/ppp1ppbp/n2p1np1/8/2PPPP2/2N5/PP4PP/R1BQKBNR": { "eco": "E76", "name": "King's Indian Defense: Four Pawns Attack, Modern Defense" }, "rnbq1rk1/1p2ppbp/p1pp1np1/8/2PPP3/2NBBP2/PP4PP/R2QK1NR": { "eco": "E81", "name": "King's Indian Defense: Sämisch Variation, Byrne Defense" }, "rnbq1rk1/ppp1ppbp/3p1np1/8/2PPP3/2N2P2/PP4PP/R1BQKBNR": { "eco": "E81", "name": "King's Indian Defense: Sämisch Variation, Normal Defense" }, "rnbq1rk1/p1p1ppbp/1p1p1np1/8/2PPP3/2N1BP2/PP4PP/R2QKBNR": { "eco": "E82", "name": "King's Indian Defense: Sämisch Variation, Double Fianchetto" }, "r1bq1rk1/1pp1ppbp/p1np1np1/8/2PPP3/2N1BP2/PP2N1PP/R2QKB1R": { "eco": "E83", "name": "King's Indian Defense: Sämisch Variation, Panno Formation" }, "r1bq1rk1/ppp1ppbp/2np1np1/8/2PPP3/2N1BP2/PP4PP/R2QKBNR": { "eco": "E83", "name": "King's Indian Defense: Sämisch Variation, Yates Defense" }, "1rbq1rk1/ppp1ppbp/2np1np1/8/2PPP3/2N1BP2/PP2N1PP/R2QKB1R": { "eco": "E83", "name": "King's Indian, Sämisch, Ruban Variation" }, "1rbq1rk1/1pp1ppbp/p1np1np1/8/2PPP3/2N1BP2/PP1QN1PP/R3KB1R": { "eco": "E84", "name": "King's Indian, Sämisch, Panno Main Line" }, "rnbq1rk1/ppp2pbp/3p1np1/4p3/2PPP3/2N1BP2/PP4PP/R2QKBNR": { "eco": "E85", "name": "King's Indian Defense: Sämisch Variation, Orthodox Variation" }, "rnbq1rk1/pp3pbp/2pp1np1/4p3/2PPP3/2N1BP2/PP2N1PP/R2QKB1R": { "eco": "E86", "name": "King's Indian Defense: Sämisch Variation" }, "rnb2rk1/ppp2pbp/3p2p1/3Pp3/2n1P2Q/2N2P2/PP2K2P/R5NR": { "eco": "E87", "name": "King's Indian Defense: Sämisch Variation, Orthodox Variation, Bronstein Variation" }, "rnbq1rk1/pp3pbp/3p1np1/3pp3/2P1P3/2N1BP2/PP2N1PP/R2QKB1R": { "eco": "E89", "name": "King's Indian Defense: Sämisch Variation, Closed Variation, Main Line" }, "r1bq1rk1/ppp1ppbp/n2p1np1/8/2PPP3/2N2N2/PP2BPPP/R1BQK2R": { "eco": "E91", "name": "King's Indian Defense: Kazakh Variation" }, "rnbq1rk1/ppp2pbp/3p1np1/4p3/2PPP3/2N2N2/PP2BPPP/R1BQK2R": { "eco": "E92", "name": "King's Indian Defense: Orthodox Variation" }, "rnbq1rk1/1pp2pbp/3p1np1/p2Pp3/2P1P3/2N2N2/PP2BPPP/R1BQK2R": { "eco": "E92", "name": "King's Indian Defense: Petrosian Variation, Stein Defense" }, "r1bq1rk1/pppn1pbp/3p1np1/3Pp3/2P1P3/2N2N2/PP2BPPP/R1BQK2R": { "eco": "E93", "name": "King's Indian Defense: Petrosian Variation, Normal Defense" }, "rnbq1rk1/pp3pbp/2pp1np1/4p3/2PPP3/2N2N2/PP2BPPP/R1BQ1RK1": { "eco": "E94", "name": "King's Indian Defense: Orthodox Variation, Donner Defense" }, "r1bq1rk1/ppp2pbp/n2p1np1/4p3/2PPP3/2N2N2/PP2BPPP/R1BQ1RK1": { "eco": "E94", "name": "King's Indian Defense: Orthodox Variation, Glek Defense" }, "r1bq1rk1/pppn1pbp/3p1np1/4p3/2PPP3/2N2N2/PP2BPPP/R1BQ1RK1": { "eco": "E94", "name": "King's Indian Defense: Orthodox Variation, Positional Defense" }, "rnbq1rk1/1pp2pbp/3p1np1/p3p3/2PPP3/2N2N2/PP2BPPP/R1BQ1RK1": { "eco": "E94", "name": "King's Indian Defense: Orthodox Variation, Ukrainian Defense" }, "r1bq1rk1/1p1n1pbp/2pp1np1/p3p3/2PPP3/2N2N2/PP3PPP/R1BQRBK1": { "eco": "E96", "name": "King's Indian Defense: Orthodox Variation, Positional Defense, Main Line" }, "r1bq1rk1/ppp2pbp/2np1np1/4p3/2PPP3/2N2N2/PP2BPPP/R1BQ1RK1": { "eco": "E97", "name": "King's Indian Defense: Orthodox Variation, Aronin-Taimanov Defense" }, "r1bq1rk1/pppnn1bp/3p2p1/3Ppp2/2P1P3/2N2P2/PP2B1PP/R1BQNRK1": { "eco": "E99", "name": "King's Indian Defense: Orthodox Variation, Classical System, Traditional Line" } }, "b": { "rnbqkbnr/pppppppp/8/8/8/7N/PPPPPPPP/RNBQKB1R": { "eco": "A00", "name": "Amar Opening" }, "rn1qkbnr/ppp2ppp/8/3p4/8/6PB/PPPPP3/RNBQ1RK1": { "eco": "A00", "name": "Amar Opening: Gent Gambit" }, "rnbqkbnr/ppp2ppp/8/3pp3/5P2/6PN/PPPPP2P/RNBQKB1R": { "eco": "A00", "name": "Amar Opening: Paris Gambit" }, "rnbqkbnr/pppppppp/8/8/8/P7/1PPPPPPP/RNBQKBNR": { "eco": "A00", "name": "Anderssen Opening" }, "rnbqkbnr/1ppppppp/8/p7/1P6/P7/2PPPPPP/RNBQKBNR": { "eco": "A00", "name": "Anderssen Opening: Polish Gambit" }, "rnbqkbnr/ppp1pp1p/6p1/8/3Pp3/2P2P2/PP4PP/RNBQKBNR": { "eco": "A00", "name": "Barnes Opening: Gedult Gambit" }, "rnbqkbnr/ppppp1pp/8/8/4p3/2N2P2/PPPP2PP/R1BQKBNR": { "eco": "A00", "name": "Barnes Opening: Gedult Gambit" }, "rnbqkbnr/pppp1ppp/8/4p3/8/5P2/PPPPPKPP/RNBQ1BNR": { "eco": "A00", "name": "Barnes Opening: Hammerschlag" }, "rnbqkbnr/pp1ppppp/2p5/8/1P2P3/8/P1PP1PPP/RNBQKBNR": { "eco": "A00", "name": "Caro-Kann Defense: Labahn Attack" }, "rnbqkbnr/pppppppp/8/8/8/7P/PPPPPPP1/RNBQKBNR": { "eco": "A00", "name": "Clemenz Opening" }, "rnbqkbnr/ppppppp1/8/7p/6P1/7P/PPPPPP2/RNBQKBNR": { "eco": "A00", "name": "Clemenz Opening: Spike Lee Gambit" }, "rnbqkbnr/pppp1ppp/8/4p3/P6P/8/1PPPPPP1/RNBQKBNR": { "eco": "A00", "name": "Crab Opening" }, "rnbqkbnr/pppp1ppp/8/4p3/3P4/4P3/PPP2PPP/RNBQKBNR": { "eco": "A00", "name": "Englund Gambit Declined: Reversed French" }, "r1bq1rk1/ppp2ppp/2nb1n2/3pp3/P7/1PP1P1P1/1B1P1P1P/RN1QKBNR": { "eco": "A00", "name": "Formation: Cabbage Attack" }, "r1bq1rk1/ppp2ppp/2nb1n2/3pp3/8/PPPPPPP1/7P/RNBQKBNR": { "eco": "A00", "name": "Formation: Hippopotamus Attack" }, "r1bq1rk1/ppp2ppp/2nb1n2/3pp3/8/P2PP1PP/1PPN1PB1/R1BQK1NR": { "eco": "A00", "name": "Formation: Shy Attack" }, "rnbqkbnr/pppppppp/8/8/8/5P2/PPPPP1PP/RNBQKBNR": { "eco": "A00", "name": "Gedult's Opening" }, "rnbqkbnr/pppp1ppp/8/4p3/8/P6P/1PPPPPP1/RNBQKBNR": { "eco": "A00", "name": "Global Opening" }, "rnbqkbnr/pppppppp/8/8/6P1/8/PPPPPP1P/RNBQKBNR": { "eco": "A00", "name": "Grob Opening" }, "rnbqkbnr/pppppp1p/8/6p1/5PP1/8/PPPPP2P/RNBQKBNR": { "eco": "A00", "name": "Grob Opening: Double Grob, Coca-Cola Gambit" }, "rnbqkbnr/ppp1pppp/8/3p4/6P1/8/PPPPPPBP/RNBQK1NR": { "eco": "A00", "name": "Grob Opening: Grob Gambit" }, "rnbqkbnr/ppp1ppp1/8/3p3P/8/8/PPPPPPBP/RNBQK1NR": { "eco": "A00", "name": "Grob Opening: Grob Gambit, Basman Gambit" }, "rn1qkbnr/ppp1pppp/8/3p4/2P3b1/8/PP1PPPBP/RNBQK1NR": { "eco": "A00", "name": "Grob Opening: Grob Gambit, Fritz Gambit" }, "rnbqkbnr/ppp2ppp/8/3p4/3p2P1/2P5/PP2PPBP/RNBQK1NR": { "eco": "A00", "name": "Grob Opening: Grob Gambit, Keres Gambit" }, "rnbqkbnr/pp2pppp/2p5/8/2p3P1/1P6/P2PPPBP/RNBQK1NR": { "eco": "A00", "name": "Grob Opening: Grob Gambit, Richter-Grob Gambit" }, "rnbqkbnr/pp2pppp/2p5/3p2P1/8/8/PPPPPPBP/RNBQK1NR": { "eco": "A00", "name": "Grob Opening: Spike Attack" }, "rnbqkbnr/ppp2ppp/8/3pp3/2P3P1/8/PP1PPPBP/RNBQK1NR": { "eco": "A00", "name": "Grob Opening: Spike, Hurst Attack" }, "rnbqkbnr/ppp1pppp/8/8/4p1P1/2N5/PPPP1P1P/R1BQKBNR": { "eco": "A00", "name": "Grob Opening: Zilbermints Gambit" }, "rnbqkbnr/ppp2ppp/8/4p3/4p1P1/2NP4/PPP2P1P/R1BQKBNR": { "eco": "A00", "name": "Grob Opening: Zilbermints Gambit, Zilbermints-Hartlaub Gambit" }, "rnbqkbnr/pppppppp/8/8/8/6P1/PPPPPP1P/RNBQKBNR": { "eco": "A00", "name": "Hungarian Opening" }, "rnbqk1nr/ppp1bppp/8/3p4/4p2N/P2P2P1/1PP1PP1P/RNBQKB1R": { "eco": "A00", "name": "Hungarian Opening: Burk Gambit" }, "rnbqkbnr/ppp2ppp/8/3pp3/1P6/6P1/P1PPPPBP/RNBQK1NR": { "eco": "A00", "name": "Hungarian Opening: Bücker Gambit" }, "rn1qkbnr/ppp2ppp/8/3p4/5p2/6PB/PPPPP2P/RNBQ1RK1": { "eco": "A00", "name": "Hungarian Opening: Paris Gambit" }, "rnbqkbnr/pppp1ppp/8/4p3/8/5NP1/PPPPPP1P/RNBQKB1R": { "eco": "A00", "name": "Hungarian Opening: Reversed Alekhine" }, "rnbqkb1r/pppp1ppp/5n2/8/1P2p3/6P1/P1PPPP1P/RNBQKBNR": { "eco": "A00", "name": "Hungarian Opening: Reversed Brooklyn Defense, Brooklyn Benko Gambit" }, "rnbqkbnr/pppp1ppp/8/8/4p2N/6P1/PPPPPP1P/RNBQKB1R": { "eco": "A00", "name": "Hungarian Opening: Reversed Norwegian Defense" }, "rnbqkbnr/ppp2ppp/8/4p3/2p5/1P4P1/P2PPPBP/RNBQK1NR": { "eco": "A00", "name": "Hungarian Opening: Winterberg Gambit" }, "rnbqkbnr/pppppppp/8/8/7P/8/PPPPPPP1/RNBQKBNR": { "eco": "A00", "name": "Kadas Opening" }, "rnbqkbnr/ppp1pppp/8/3p4/7P/7R/PPPPPPP1/RNBQKBN1": { "eco": "A00", "name": "Kadas Opening: Beginner's Trap" }, "rnbqkbnr/pp1ppppp/8/2p5/1P5P/8/P1PPPPP1/RNBQKBNR": { "eco": "A00", "name": "Kadas Opening: Kadas Gambit" }, "rnbqkbnr/pp2pppp/8/3p4/3p3P/2P2N2/PP2PPP1/RNBQKB1R": { "eco": "A00", "name": "Kadas Opening: Kadas Gambit" }, "rnbqkbnr/pppp1ppp/8/8/3p3P/2P5/PP2PPP1/RNBQKBNR": { "eco": "A00", "name": "Kadas Opening: Kadas Gambit" }, "rnbqkbnr/pp2pppp/8/2pp4/3PP2P/8/PPP2PP1/RNBQKBNR": { "eco": "A00", "name": "Kadas Opening: Myers Variation" }, "rnbqkbnr/ppppp1pp/8/8/4p2P/3P4/PPP2PP1/RNBQKBNR": { "eco": "A00", "name": "Kadas Opening: Steinbok Gambit" }, "rnbqkbnr/pppppppp/8/8/8/3P4/PPP1PPPP/RNBQKBNR": { "eco": "A00", "name": "Mieses Opening" }, "rnbqkbnr/pppppp1p/6p1/8/6P1/3P4/PPP1PP1P/RNBQKBNR": { "eco": "A00", "name": "Mieses Opening: Myers Spike Attack" }, "rnbqkbnr/pppppppp/8/8/1P6/8/P1PPPPPP/RNBQKBNR": { "eco": "A00", "name": "Polish Opening" }, "rnbqkbnr/pppp2pp/5p2/1P2p3/8/8/PBPPPPPP/RN1QKBNR": { "eco": "A00", "name": "Polish Opening: Bugayev Advance Variation" }, "rnbqkbnr/pppp1ppp/8/4p3/1P6/P7/2PPPPPP/RNBQKBNR": { "eco": "A00", "name": "Polish Opening: Bugayev Attack" }, "rnbqkb1r/pppppp1p/5np1/8/1P2P3/8/PBPP1PPP/RN1QKBNR": { "eco": "A00", "name": "Polish Opening: King's Indian Variation, Schiffler Attack" }, "rnbqkbnr/pp2pppp/2p5/3p4/PP6/8/1BPPPPPP/RN1QKBNR": { "eco": "A00", "name": "Polish Opening: Myers Variation" }, "rnb1kbnr/ppp2ppp/3q4/4p3/1P2p3/P4P2/1BPP2PP/RN1QKBNR": { "eco": "A00", "name": "Polish Opening: Orangutan-Diemer Gambit" }, "rnbqkb1r/1p3ppp/2p1pn2/P2p4/4P3/P2P4/1BP2PPP/RN1QKBNR": { "eco": "A00", "name": "Polish Opening: Orangutan-Hartlaub Gambit" }, "1nbqkb1r/1ppp1ppp/4pn2/1P6/8/8/2PPPPPP/BN1QKBNR": { "eco": "A00", "name": "Polish Opening: Rooks Swap Line" }, "rnbqkb1r/ppp2ppp/4pn2/1P1p4/8/4P3/PBPP1PPP/RN1QKBNR": { "eco": "A00", "name": "Polish Opening: Schiffler-Sokolsky Variation" }, "rnbqkbnr/1p1ppppp/8/pp6/4P3/8/PBPP1PPP/RN1QKBNR": { "eco": "A00", "name": "Polish Opening: Schuehler Gambit" }, "rnbqkbnr/pppp2pp/5p2/4p3/1P2P3/8/PBPP1PPP/RN1QKBNR": { "eco": "A00", "name": "Polish Opening: Tartakower Gambit" }, "rnbqkbnr/pppppppp/8/8/8/2P5/PP1PPPPP/RNBQKBNR": { "eco": "A00", "name": "Saragossa Opening" }, "rnbqkbnr/pppppppp/8/8/8/N7/PPPPPPPP/R1BQKBNR": { "eco": "A00", "name": "Sodium Attack" }, "rnbqk1nr/pp3ppp/8/2ppp3/8/P2PP3/P1P2PPP/1RBQKBNR": { "eco": "A00", "name": "Sodium Attack: Celadon Variation" }, "rnbqkbnr/pppppp1p/6p1/8/6P1/N7/PPPPPP1P/R1BQKBNR": { "eco": "A00", "name": "Sodium Attack: Chenoboskion Variation" }, "rnbqkbnr/pppp1ppp/8/4p3/8/3P4/PPPNPPPP/R1BQKBNR": { "eco": "A00", "name": "Valencia Opening" }, "rnbqkbnr/pppppppp/8/8/8/2N5/PPPPPPPP/R1BQKBNR": { "eco": "A00", "name": "Van Geet Opening" }, "rnbqkbnr/pppp1ppp/8/4p3/8/P1N5/1PPPPPPP/R1BQKBNR": { "eco": "A00", "name": "Van Geet Opening: Battambang Variation" }, "rnbqkbnr/pp2pppp/2p5/3p4/4P3/2N4P/PPPP1PP1/R1BQKBNR": { "eco": "A00", "name": "Van Geet Opening: Caro-Kann Variation, St. Patrick's Attack" }, "rnbqkbnr/ppp1pppp/8/8/4p3/2N2P2/PPPP2PP/R1BQKBNR": { "eco": "A00", "name": "Van Geet Opening: Dougherty Gambit" }, "rnbqkbnr/ppp1pppp/8/8/4p3/2NP4/PPP2PPP/R1BQKBNR": { "eco": "A00", "name": "Van Geet Opening: Dunst-Perrenet Gambit" }, "rnbqkbnr/pp1ppppp/8/2p5/1P6/2N5/P1PPPPPP/R1BQKBNR": { "eco": "A00", "name": "Van Geet Opening: Düsseldorf Gambit" }, "rnbqkbnr/ppp2ppp/8/4p3/4p3/1PNP4/P1P2PPP/R1BQKBNR": { "eco": "A00", "name": "Van Geet Opening: Gladbacher Gambit" }, "rnbqkbnr/ppp1pppp/8/8/2B1p3/2N5/PPPP1PPP/R1BQK1NR": { "eco": "A00", "name": "Van Geet Opening: Hector Gambit" }, "rnbqkb1r/pp2p1pp/5n2/2p2p2/1P1p1P2/5N2/P1PPPNPP/R1BQKB1R": { "eco": "A00", "name": "Van Geet Opening: Jendrossek Gambit" }, "rnbqkbnr/ppppp1pp/8/8/4p3/2NP4/PPP2PPP/R1BQKBNR": { "eco": "A00", "name": "Van Geet Opening: Kluever Gambit" }, "rnbqkbnr/pppppp1p/6p1/8/7P/2N5/PPPPPPP1/R1BQKBNR": { "eco": "A00", "name": "Van Geet Opening: Myers Attack" }, "r1bqkbnr/pppp1ppp/2n5/4p3/3P4/2N2N2/PPP1PPPP/R1BQKB1R": { "eco": "A00", "name": "Van Geet Opening: Napoleon Attack" }, "r1bqkbnr/pp1ppppp/2n5/8/7Q/2N5/PPP1PPPP/R1B1KBNR": { "eco": "A00", "name": "Van Geet Opening: Novosibirsk Variation" }, "rnbqkbnr/ppp2ppp/8/4p3/3pNP2/5N2/PPPPP1PP/R1BQKB1R": { "eco": "A00", "name": "Van Geet Opening: Pfeiffer Gambit, Sleipnir Countergambit" }, "r1bqkbnr/pppp1ppp/2n5/8/Q7/2N5/PPP1PPPP/R1B1KBNR": { "eco": "A00", "name": "Van Geet Opening: Reversed Scandinavian" }, "r1bqkbnr/pp1ppppp/2n5/8/3N4/2N5/PPP1PPPP/R1BQKB1R": { "eco": "A00", "name": "Van Geet Opening: Sicilian Two Knights" }, "rnbqkbnr/pp1ppppp/8/2p5/8/2N5/PPPPPPPP/1RBQKBNR": { "eco": "A00", "name": "Van Geet Opening: Twyble Attack" }, "rnbqkb1r/pppppppp/5n2/8/6P1/2N5/PPPPPP1P/R1BQKBNR": { "eco": "A00", "name": "Van Geet Opening: Tübingen Gambit" }, "rnbqkb1r/ppp1pppp/5n2/3p4/8/2NP2P1/PPP1PP1P/R1BQKBNR": { "eco": "A00", "name": "Van Geet Opening: Venezolana Variation" }, "rnbqkbnr/pppppppp/8/8/8/4P3/PPPP1PPP/RNBQKBNR": { "eco": "A00", "name": "Van't Kruijs Opening" }, "rnbqkbnr/p1pp1ppp/8/1p2p3/8/1B2P3/PPPP1PPP/RNBQK1NR": { "eco": "A00", "name": "Van't Kruijs Opening: Bouncing Bishop Variation" }, "rnbqkb1r/ppp2ppp/5n2/3p4/5p2/P1N1PN2/1PPP2PP/R1BQKB1R": { "eco": "A00", "name": "Van't Kruijs Opening: Keoni-Hiva Gambit Delayed" }, "rnbqkb1r/pppp1ppp/5n2/8/5p2/2N1PN2/PPPP2PP/R1BQKB1R": { "eco": "A00", "name": "Van't Kruijs Opening: Keoni-Hiva Gambit, Akahi Variation" }, "r1bqkbnr/pppp1ppp/2n5/8/5p2/2N1PN2/PPPP2PP/R1BQKB1R": { "eco": "A00", "name": "Van't Kruijs Opening: Keoni-Hiva Gambit, Alua Variation" }, "rnbqkbnr/ppp2ppp/8/3p4/5p2/2N1PN2/PPPP2PP/R1BQKB1R": { "eco": "A00", "name": "Van't Kruijs Opening: Keoni-Hiva Gambit, Ekolu Variation" }, "r1bqkbnr/pp1ppppp/2n5/2p5/8/2NP2P1/PPP1PP1P/R1BQKBNR": { "eco": "A00", "name": "Venezolana Opening" }, "rnbqkbnr/pppppppp/8/8/P7/8/1PPPPPPP/RNBQKBNR": { "eco": "A00", "name": "Ware Opening" }, "rnbqkbnr/pppp1ppp/8/4p3/P7/R7/1PPPPPPP/1NBQKBNR": { "eco": "A00", "name": "Ware Opening: Meadow Hay Trap" }, "rnbqkbnr/ppp3pp/P7/3ppp2/8/4P3/1PPP1PPP/RNBQKBNR": { "eco": "A00", "name": "Ware Opening: Ware Gambit" }, "rnbqkbnr/ppp1pppp/8/3p4/8/2N2N2/PPPPPPPP/R1BQKB1R": { "eco": "A00", "name": "Zukertort Opening: Reversed Mexican Defense" }, "rnbqkbnr/pppppppp/8/8/8/1P6/P1PPPPPP/RNBQKBNR": { "eco": "A01", "name": "Nimzo-Larsen Attack" }, "rnbqkbnr/ppp1pppp/8/3p4/8/BP6/P1PPPPPP/RN1QKBNR": { "eco": "A01", "name": "Nimzo-Larsen Attack: Graz Attack" }, "rnbqkbnr/pppp1ppp/8/4p3/8/1P6/PBPPPPPP/RN1QKBNR": { "eco": "A01", "name": "Nimzo-Larsen Attack: Modern Variation" }, "r1bqkbnr/pppp1ppp/2n5/4p3/8/1P2P3/PBPP1PPP/RN1QKBNR": { "eco": "A01", "name": "Nimzo-Larsen Attack: Modern Variation" }, "r1bqkbnr/pppp1ppp/2n5/4p3/5P2/1P6/PBPPP1PP/RN1QKBNR": { "eco": "A01", "name": "Nimzo-Larsen Attack: Pachman Gambit" }, "rnbqkbnr/pppp2pp/4p3/5p2/4P3/1P6/PBPP1PPP/RN1QKBNR": { "eco": "A01", "name": "Nimzo-Larsen Attack: Ringelbach Gambit" }, "rnbqkb1r/pppppp1p/5np1/8/6P1/1P6/PBPPPP1P/RN1QKBNR": { "eco": "A01", "name": "Nimzo-Larsen Attack: Spike Variation" }, "rnbqkbnr/pppppppp/8/8/5P2/8/PPPPP1PP/RNBQKBNR": { "eco": "A02", "name": "Bird Opening" }, "rnbqkb1r/pppppp1p/5np1/8/1P3P2/5N2/P1PPP1PP/RNBQKB1R": { "eco": "A02", "name": "Bird Opening: Batavo-Polish Attack" }, "rnbqkbnr/pppp1ppp/8/4p3/5P2/2N5/PPPPP1PP/R1BQKBNR": { "eco": "A02", "name": "Bird Opening: From's Gambit, Bahr Gambit" }, "rnbqk2r/ppp2ppp/3b3n/8/3P4/5N2/PPP1P1PP/RNBQKB1R": { "eco": "A02", "name": "Bird Opening: From's Gambit, Lipke Variation" }, "rnbqkb1r/pppppppp/5n2/8/2P2P2/8/PP1PP1PP/RNBQKBNR": { "eco": "A02", "name": "Bird Opening: Mujannah" }, "rnbqkbnr/pp1p1ppp/8/2p5/3p1P2/2P2N2/PP2P1PP/RNBQKB1R": { "eco": "A02", "name": "Bird Opening: Siegener Gambit" }, "rnbqkb1r/ppppp1pp/5n2/8/4pPP1/2N5/PPPP3P/R1BQKBNR": { "eco": "A02", "name": "Bird Opening: Swiss Gambit" }, "rnbqkbnr/ppppp1pp/8/5p2/4PP2/8/PPPP2PP/RNBQKBNR": { "eco": "A02", "name": "Bird Opening: Wagner-Zwitersch Gambit" }, "rnbqkbnr/ppp1pppp/8/3p4/5PP1/8/PPPPP2P/RNBQKBNR": { "eco": "A03", "name": "Bird Opening: Dutch Variation, Dudweiler Gambit" }, "rnbqkbnr/ppp1pppp/8/3p4/2P2P2/8/PP1PP1PP/RNBQKBNR": { "eco": "A03", "name": "Bird Opening: Sturm Gambit" }, "rnbqkb1r/pp2pppp/5n2/2p5/3p1P2/1P2PN2/PBPP2PP/RN1QKB1R": { "eco": "A03", "name": "Bird Opening: Thomas Gambit" }, "rnbqkbnr/ppp1pppp/8/3p4/4PP2/8/PPPP2PP/RNBQKBNR": { "eco": "A03", "name": "Bird Opening: Williams Gambit" }, "rnbqkb1r/ppp1pppp/5n2/8/4pP2/2N5/PPPPQ1PP/R1B1KBNR": { "eco": "A03", "name": "Bird Opening: Williams Gambit" }, "rnbqkb1r/ppp1pppp/5n2/8/4pP2/2N5/PPPPN1PP/R1BQKB1R": { "eco": "A03", "name": "Bird Opening: Williams-Zilbermints Gambit" }, "rnbqkbnr/pppppppp/8/8/8/5N2/PPPPPPPP/RNBQKB1R": { "eco": "A04", "name": "Zukertort Opening" }, "rnbqkbnr/ppppp1pp/8/5p2/4P3/5N2/PPPP1PPP/RNBQKB1R": { "eco": "A04", "name": "Zukertort Opening: Lisitsyn Gambit" }, "rnbqkb1r/ppppp1pp/5n2/5p2/4P3/3P1N2/PPP2PPP/RNBQKB1R": { "eco": "A04", "name": "Zukertort Opening: Lisitsyn Gambit Deferred" }, "rnbqkbnr/pp1ppppp/8/8/3p4/4PN2/PPP2PPP/RNBQKB1R": { "eco": "A04", "name": "Zukertort Opening: Speelsmet Gambit" }, "rnbqkb1r/pppppp1p/5np1/8/1P6/5NP1/P1PPPP1P/RNBQKB1R": { "eco": "A05", "name": "King's Indian Attack: Smyslov Variation" }, "rnbqkb1r/pppppppp/5n2/8/1P6/5N2/P1PPPPPP/RNBQKB1R": { "eco": "A05", "name": "Polish Opening: Zukertort System" }, "rnbq1rk1/ppp1ppbp/3p1np1/8/8/1P3NP1/PBPPPPBP/RN1Q1RK1": { "eco": "A05", "name": "Zukertort Opening: Double Fianchetto Attack" }, "rnbqkb1r/pppppppp/5n2/8/4P3/5N2/PPPP1PPP/RNBQKB1R": { "eco": "A05", "name": "Zukertort Opening: Lemberger Gambit" }, "rnbqkb1r/pppppp1p/5np1/8/PP6/5N2/2PPPPPP/RNBQKB1R": { "eco": "A05", "name": "Zukertort Opening: Myers Polish Attack" }, "rnbqkb1r/pppppppp/5n2/8/8/1P3N2/P1PPPPPP/RNBQKB1R": { "eco": "A05", "name": "Zukertort Opening: Nimzo-Larsen Variation" }, "rnbqkb1r/pppppppp/5n2/8/8/4PN2/PPPP1PPP/RNBQKB1R": { "eco": "A05", "name": "Zukertort Opening: Quiet System" }, "rnbqkbnr/ppp1pppp/8/3p4/8/1P3N2/P1PPPPPP/RNBQKB1R": { "eco": "A06", "name": "Nimzo-Larsen Attack: Classical Variation" }, "rnbqkbnr/pp2pppp/8/2pp4/4P3/1P3N2/P1PP1PPP/RNBQKB1R": { "eco": "A06", "name": "Nimzo-Larsen Attack: Norfolk Gambit" }, "rnbqkb1r/pp2pppp/5n2/2pp4/4P3/1P3N2/PBPP1PPP/RN1QKB1R": { "eco": "A06", "name": "Nimzo-Larsen Attack: Norfolk Gambit" }, "rnbqkbnr/ppp1pppp/8/3p4/8/5N2/PPPPPPPP/RNBQKBR1": { "eco": "A06", "name": "Zukertort Opening: Ampel Variation" }, "rnbqkbnr/ppp1pppp/8/3p4/8/3P1N2/PPP1PPPP/RNBQKB1R": { "eco": "A06", "name": "Zukertort Opening: Old Indian Attack" }, "rnbqkbnr/pp2pppp/8/2p5/2p5/1P2PN2/P2P1PPP/RNBQKB1R": { "eco": "A06", "name": "Zukertort Opening: Pachman Gambit" }, "rnbqkbnr/pp2pppp/8/2p5/2p5/1PN2N2/P2PPPPP/R1BQKB1R": { "eco": "A06", "name": "Zukertort Opening: Regina-Nu Gambit" }, "rnbqkbnr/ppp1pppp/8/3p4/1P6/5N2/P1PPPPPP/RNBQKB1R": { "eco": "A06", "name": "Zukertort Opening: Santasiere's Folly" }, "rnbqkbnr/ppp1pppp/8/3p4/4P3/5N2/PPPP1PPP/RNBQKB1R": { "eco": "A06", "name": "Zukertort Opening: Tennison Gambit" }, "rnbqkbnr/ppp1pppp/8/3p4/P7/5N2/1PPPPPPP/RNBQKB1R": { "eco": "A06", "name": "Zukertort Opening: The Potato" }, "rnbqkbnr/ppp1pppp/8/3p4/8/5NP1/PPPPPP1P/RNBQKB1R": { "eco": "A07", "name": "King's Indian Attack" }, "r1bq1rk1/pp2bppp/2n1pn2/2pp4/4P3/3P1NP1/PPPN1PBP/R1BQR1K1": { "eco": "A08", "name": "King's Indian Attack: Sicilian Variation" }, "rnbqkbnr/pp2pppp/8/2pp4/8/5NP1/PPPPPPBP/RNBQK2R": { "eco": "A08", "name": "King's Indian Attack: Sicilian Variation" }, "r1bqkbnr/pp3ppp/2n1p3/2pp4/3P4/5NP1/PPP1PPBP/RNBQ1RK1": { "eco": "A08", "name": "Zukertort Opening: Grünfeld Reversed" }, "rnbqkbnr/ppp1pppp/8/3p4/2P5/5N2/PP1PPPPP/RNBQKB1R": { "eco": "A09", "name": "Réti Opening" }, "rnbqkbnr/ppp1pppp/8/8/2Pp4/5N2/PP1PPPPP/RNBQKBR1": { "eco": "A09", "name": "Réti Opening: Penguin Variation" }, "rnbqkbnr/pp2pppp/8/2p5/1PPp4/4PN2/P2P1PPP/RNBQKB1R": { "eco": "A09", "name": "Réti Opening: Reversed Blumenfeld Gambit" }, "rnbqkbnr/pppppppp/8/8/2P5/8/PP1PPPPP/RNBQKBNR": { "eco": "A10", "name": "English Opening" }, "rnbqkbnr/ppppp1pp/8/5p2/2P1P3/8/PP1P1PPP/RNBQKBNR": { "eco": "A10", "name": "English Opening: Anglo-Dutch Defense, Hickmann Gambit" }, "rnbqkbnr/ppp1p1pp/3p4/5p2/2P1P3/5N2/PP1P1PPP/RNBQKB1R": { "eco": "A10", "name": "English Opening: Anglo-Dutch Variation, Chabanon Gambit" }, "rnbqkb1r/ppppp1pp/5n2/5p2/2P1P3/2N5/PP1P1PPP/R1BQKBNR": { "eco": "A10", "name": "English Opening: Anglo-Dutch Variation, Ferenc Gambit" }, "rnbqkb1r/ppppp1pp/5n2/8/2P1p1P1/2N5/PP1P1P1P/R1BQKBNR": { "eco": "A10", "name": "English Opening: Porcupine Variation" }, "rnbqkbnr/ppppp1pp/8/5p2/2P3P1/8/PP1PPP1P/RNBQKBNR": { "eco": "A10", "name": "English Opening: Wade Gambit" }, "rnbqk2r/ppp1ppbp/3p1np1/8/2PPP3/4BP2/PP4PP/RN1QKBNR": { "eco": "A10", "name": "Modern Defense: Averbakh Variation, Pseudo-Sämisch" }, "rnbqkbnr/pp2pppp/2p5/3p4/2P5/1P3N2/P2PPPPP/RNBQKB1R": { "eco": "A12", "name": "Réti Opening: Anglo-Slav Variation, Bogoljubov Variation" }, "rnbqkb1r/pp2pppp/2p2n2/3p4/2P5/1P3N2/PB1PPPPP/RN1QKB1R": { "eco": "A12", "name": "Réti Opening: Anglo-Slav Variation, Bogoljubov Variation" }, "rnbqkbnr/pppp1ppp/4p3/8/2P5/5N2/PP1PPPPP/RNBQKB1R": { "eco": "A13", "name": "English Opening: Agincourt Defense" }, "rn1qkbnr/pbp2ppp/1p2p3/3p4/2P5/5NP1/PP1PPPBP/RNBQ1RK1": { "eco": "A13", "name": "English Opening: Agincourt Defense, Catalan Defense" }, "rnbqkb1r/pp3ppp/4pn2/2pp4/2P5/1P2PN2/PB1P1PPP/RN1QKB1R": { "eco": "A13", "name": "English Opening: Agincourt Defense, Wimpy System" }, "rnbqk2r/ppp1bppp/4pn2/3p4/2P5/5NP1/PP1PPPBP/RNBQ1RK1": { "eco": "A14", "name": "English Opening: Agincourt Defense, Neo-Catalan Declined" }, "rnbq1rk1/pp2bppp/2p1pn2/3p4/2P5/1P3NP1/PB1PPPBP/RN1Q1RK1": { "eco": "A14", "name": "Réti Opening: Anglo-Slav Variation, Bogoljubov Variation, Stonewall Line" }, "rnbqk2r/ppppppbp/5np1/8/2P1P3/2N2N2/PP1P1PPP/R1BQKB1R": { "eco": "A15", "name": "English Opening: Anglo-Indian Defense, Anti-Anti-Grünfeld" }, "rnbqkb1r/pppppppp/5n2/8/2P5/5N2/PP1PPPPP/RNBQKB1R": { "eco": "A15", "name": "English Opening: Anglo-Indian Defense, King's Knight Variation" }, "rnbqkb1r/pppppppp/5n2/8/1PP5/8/P2PPPPP/RNBQKBNR": { "eco": "A15", "name": "English Orangutan" }, "rnbq1rk1/ppp1ppbp/3p1np1/8/1PPP4/4PN2/PB3PPP/RN1QKB1R": { "eco": "A15", "name": "Polish Opening: King's Indian Variation, Sokolsky Attack" }, "rnbqkb1r/ppp1pppp/8/3n4/8/2N2N2/PP1PPPPP/R1BQKB1R": { "eco": "A16", "name": "English Opening: Anglo-Indian Defense, Anglo-Grünfeld Variation" }, "rnbqkb1r/pppppppp/5n2/8/2P5/2N5/PP1PPPPP/R1BQKBNR": { "eco": "A16", "name": "English Opening: Anglo-Indian Defense, Queen's Knight Variation" }, "rn1qkb1r/pbpp1ppp/1p2pn2/8/2P1P3/2NB1N2/PP1P1PPP/R1BQK2R": { "eco": "A17", "name": "English Opening: Anglo-Indian Defense, Queen's Indian Variation" }, "rnbqk2r/pppp1ppp/4pn2/8/1bP3P1/2N2N2/PP1PPP1P/R1BQKB1R": { "eco": "A17", "name": "English Opening: Anglo-Indian Defense, Zvjaginsev-Krasenkow Attack" }, "rnbqkb1r/pppp1ppp/4pn2/8/2P1P3/2N5/PP1P1PPP/R1BQKBNR": { "eco": "A18", "name": "English Opening: Mikenas-Carls Variation" }, "rnbqkb1r/ppp2ppp/4pn2/3pP3/2P5/2N5/PP1P1PPP/R1BQKBNR": { "eco": "A18", "name": "English Opening: Mikenas-Carls Variation" }, "rnbqkb1r/pppp1ppp/5n2/8/2P2p2/4PN2/PP1P2PP/RNBQKB1R": { "eco": "A20", "name": "English Opening: King's English Variation, Kahiko-Hula Gambit" }, "rnbqkbnr/pppp1ppp/8/4p3/2P5/5N2/PP1PPPPP/RNBQKB1R": { "eco": "A20", "name": "English Opening: King's English Variation, Nimzowitsch Variation" }, "rnbqkbnr/ppp2ppp/3p4/4p3/2P5/2N2N2/PP1PPPPP/R1BQKB1R": { "eco": "A21", "name": "English Opening: King's English Variation" }, "rnbqkbnr/pppp1ppp/8/4p3/2P5/2N5/PP1PPPPP/R1BQKBNR": { "eco": "A21", "name": "English Opening: King's English Variation, Reversed Sicilian" }, "rnbqkb1r/pppp1ppp/5n2/4p3/2P5/2N3P1/PP1PPP1P/R1BQKBNR": { "eco": "A22", "name": "English Opening: Carls-Bremen System" }, "rnbqkb1r/pppp1ppp/5n2/4p3/2P2P2/2N5/PP1PP1PP/R1BQKBNR": { "eco": "A22", "name": "English Opening: King's English, Mazedonisch" }, "r1bqk1nr/pppp1pbp/2n3p1/4p3/2P5/2NP2P1/PP2PPBP/R1BQK1NR": { "eco": "A25", "name": "English Opening: King's English Variation, Closed System" }, "r1bqk1nr/pppp1pbp/2n3p1/4p3/2P5/2N3P1/PP1PPPBP/1RBQK1NR": { "eco": "A25", "name": "English Opening: King's English Variation, Hungarian Attack" }, "r1bqk1nr/ppp2pbp/2np2p1/4p3/2P1P3/2NP2P1/PP3PBP/R1BQK1NR": { "eco": "A26", "name": "English Opening: King's English Variation, Botvinnik System" }, "r1bqkbnr/pppp1ppp/2n5/4p3/2P5/2N2N2/PP1PPPPP/R1BQKB1R": { "eco": "A27", "name": "English Opening: King's English Variation, Three Knights System" }, "r1bqkb1r/pppp1ppp/2n2n2/4p3/2P1P3/2N2N2/PP1P1PPP/R1BQKB1R": { "eco": "A28", "name": "English Opening: Four Knights System, Nimzowitsch Variation" }, "r1bqkb1r/pppp1ppp/2n2n2/4p3/2P5/2NP1N2/PP2PPPP/R1BQKB1R": { "eco": "A28", "name": "English Opening: King's English Variation, Four Knights Variation, Flexible Line" }, "r1bqkb1r/pppp1ppp/2n2n2/4p3/2P5/P1N2N2/1P1PPPPP/R1BQKB1R": { "eco": "A28", "name": "English Opening: King's English Variation, Four Knights Variation, Korchnoi Line" }, "r1bqkb1r/pppp1ppp/2n2n2/4p3/2P5/2N1PN2/PP1P1PPP/R1BQKB1R": { "eco": "A28", "name": "English Opening: King's English Variation, Four Knights Variation, Quiet Line" }, "r1bqr1k1/pppp1ppp/2n2n2/3NpQ2/1bP5/4PN2/PP1P1PPP/R1B1KB1R": { "eco": "A28", "name": "English Opening: King's English Variation, Four Knights Variation, Quiet Line" }, "r1bqkb1r/pppp1ppp/2n2n2/4p3/2P5/2N2NP1/PP1PPP1P/R1BQKB1R": { "eco": "A29", "name": "English Opening: King's English Variation, Four Knights Variation, Fianchetto Line" }, "rnbqkb1r/pp1ppppp/5n2/2p5/1PP5/5N2/P2PPPPP/RNBQKB1R": { "eco": "A30", "name": "English Opening: Symmetrical Variation, Napolitano Gambit" }, "rnbqkbnr/pp1ppppp/8/2p5/1PP5/8/P2PPPPP/RNBQKBNR": { "eco": "A30", "name": "English Opening: Wing Gambit" }, "rnbqkb1r/pp1ppppp/5n2/2p5/2PP4/5N2/PP2PPPP/RNBQKB1R": { "eco": "A31", "name": "English Opening: Symmetrical Variation, Anti-Benoni Variation" }, "rnbqkb1r/pp1ppppp/5n2/2p5/2P5/2N3P1/PP1PPP1P/R1BQKBNR": { "eco": "A34", "name": "English Opening: Symmetrical Variation, Fianchetto Variation" }, "rnbqkbnr/pp1ppppp/8/2p5/2P5/2N5/PP1PPPPP/R1BQKBNR": { "eco": "A34", "name": "English Opening: Symmetrical Variation, Normal Variation" }, "r1bqk1nr/pp1pppbp/2n3p1/2p5/2P1P3/2N3P1/PP1P1PBP/R1BQK1NR": { "eco": "A36", "name": "English Opening: Symmetrical Variation, Botvinnik System" }, "r1bqkbnr/pp1ppppp/2n5/2p5/2P5/2N3P1/PP1PPP1P/R1BQKBNR": { "eco": "A36", "name": "English Opening: Symmetrical Variation, Fianchetto Variation" }, "r1bqk1nr/pp1pppbp/2n3p1/2p5/2P5/2N2NP1/PP1PPPBP/R1BQK2R": { "eco": "A37", "name": "English Opening: Symmetrical Variation, Two Knights Line" }, "r1bq1rk1/pp1pppbp/2n2np1/2p5/2P5/1PN2NP1/P2PPPBP/R1BQ1RK1": { "eco": "A38", "name": "English Opening: Symmetrical Variation, Double Fianchetto" }, "r1bq1rk1/pp1pppbp/2n2np1/2p5/2P5/2NP1NP1/PP2PPBP/R1BQ1RK1": { "eco": "A38", "name": "English Opening: Symmetrical Variation, Duchamp Variation" }, "r1bq1rk1/pp1pppbp/2n2np1/2p5/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1": { "eco": "A39", "name": "English Opening: Symmetrical Variation, Mecking Variation" }, "rnbqkbnr/pppp2pp/4p3/5p2/3P1BP1/8/PPP1PP1P/RN1QKBNR": { "eco": "A40", "name": "Dutch Defense: Senechaud Gambit" }, "rn1qkbnr/pbpp2pp/1p2p3/3P1p2/2P1P3/2N5/PP3PPP/R1BQKBNR": { "eco": "A40", "name": "English Defense: Hartlaub Gambit Declined" }, "rnbqkbnr/pppp1ppp/8/3Pp3/8/8/PPP1PPPP/RNBQKBNR": { "eco": "A40", "name": "Englund Gambit Complex Declined" }, "r1b1kbnr/ppppqppp/2n5/3QP3/8/5N2/PPP1PPPP/RNB1KB1R": { "eco": "A40", "name": "Englund Gambit Complex: Stockholm Variation" }, "rnbqkbnr/pppp1ppp/8/4p3/3P4/5N2/PPP1PPPP/RNBQKB1R": { "eco": "A40", "name": "Englund Gambit Declined: Reversed Alekhine" }, "rnbqkbnr/pppp1ppp/8/8/3Pp3/8/PPP1PPPP/RNBQKBNR": { "eco": "A40", "name": "Englund Gambit Declined: Reversed Brooklyn" }, "rnbqkbnr/pppp1ppp/8/4N3/3Pp3/8/PPP1PPPP/RNBQKB1R": { "eco": "A40", "name": "Englund Gambit Declined: Reversed Mokele Mbembe" }, "rnbqk1nr/pppp1ppp/4p3/8/1bPP4/2N5/PP2PPPP/R1BQKBNR": { "eco": "A40", "name": "Kangaroo Defense: Keres Defense, Transpositional Variation" }, "rnbqkb1r/pppppp1p/5np1/7P/3P4/8/PPP1PPP1/RNBQKBNR": { "eco": "A40", "name": "Modern Defense: Lizard Defense, Pirc-Diemer Gambit" }, "rn1qkbnr/pbpppppp/8/1B6/3PP3/8/PPP2PPP/RNBQK1NR": { "eco": "A40", "name": "Polish Defense: Spassky Gambit Accepted" }, "rnbqk1nr/pp1pppbp/6p1/2p5/2PP4/2N1P3/PP3PPP/R1BQKBNR": { "eco": "A40", "name": "Pterodactyl Defense: Queen Pterodactyl, Quiet Line" }, "rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR": { "eco": "A40", "name": "Queen's Pawn Game" }, "rnbqkbnr/ppp1pppp/3p4/8/2PP4/8/PP2PPPP/RNBQKBNR": { "eco": "A41", "name": "Old Indian Defense" }, "rnbqk1nr/ppp1ppbp/3p2p1/8/2PPP3/2N5/PP3PPP/R1BQKBNR": { "eco": "A42", "name": "Modern Defense: Averbakh System" }, "rnbqkbnr/pp1ppppp/8/2P5/8/8/PPP1PPPP/RNBQKBNR": { "eco": "A43", "name": "Benoni Defense: Benoni Gambit Accepted" }, "rnbqkb1r/pp1ppppp/5n2/2pP4/8/5N2/PPP1PPPP/RNBQKB1R": { "eco": "A43", "name": "Benoni Defense: Benoni-Indian Defense, Kingside Move Order" }, "rnbqkbnr/pp1pp1pp/8/2pP1p2/4P3/8/PPP2PPP/RNBQKBNR": { "eco": "A43", "name": "Benoni Defense: Benoni-Staunton Gambit" }, "rnbqkbnr/pp1p1ppp/4p3/2pP4/4P3/8/PPP2PPP/RNBQKBNR": { "eco": "A43", "name": "Benoni Defense: French Benoni" }, "rnbqkbnr/pp1ppppp/8/2pP4/8/8/PPP1PPPP/RNBQKBNR": { "eco": "A43", "name": "Benoni Defense: Old Benoni" }, "rnbqkbnr/pp1ppppp/8/2p5/1P1P4/8/P1P1PPPP/RNBQKBNR": { "eco": "A43", "name": "Benoni Defense: Zilbermints-Benoni Gambit" }, "rnbqkbnr/pp1ppppp/8/8/1P1p4/5N2/P1P1PPPP/RNBQKB1R": { "eco": "A43", "name": "Benoni Defense: Zilbermints-Benoni Gambit" }, "rnbqkbnr/pp1ppppp/8/8/2Pp4/4P3/PP3PPP/RNBQKBNR": { "eco": "A43", "name": "Queen's Pawn Game: Liedmann Gambit" }, "rnbqkb1r/ppp1pppp/5n2/3p4/3P4/2NQ4/PPP1PPPP/R1B1KBNR": { "eco": "A45", "name": "Amazon Attack: Siberian Attack" }, "rnbqkb1r/pppppppp/5n2/8/3P2P1/8/PPP1PP1P/RNBQKBNR": { "eco": "A45", "name": "Bronstein Gambit" }, "rnbqkb1r/pppppppp/5n2/8/3P1P2/8/PPP1P1PP/RNBQKBNR": { "eco": "A45", "name": "Canard Opening" }, "rnbqkb1r/ppp1pppp/5n2/3p4/3P2P1/5P2/PPP1P2P/RNBQKBNR": { "eco": "A45", "name": "Indian Game: Gedult Attack, Gedult Attack" }, "rnbqkb1r/pppppppp/5n2/8/3PP3/5P2/PPP4P/RNBQKBNR": { "eco": "A45", "name": "Indian Game: Gibbins-Wiedenhagen Gambit, Maltese Falcon" }, "rnbqkb1r/ppp1pppp/3p1n2/8/3PP3/2N5/PPP1BP1P/R1BQK1NR": { "eco": "A45", "name": "Indian Game: Gibbins-Wiedenhagen Gambit, Stummer Gambit" }, "rnbqkb1r/pppppppp/5n2/8/3PP3/8/PPP2PPP/RNBQKBNR": { "eco": "A45", "name": "Indian Game: Omega Gambit" }, "rnbqkb1r/pppppppp/5n2/6B1/3P4/3B4/PPP2PPP/RN1QK1NR": { "eco": "A45", "name": "Indian Game: Omega Gambit, Arafat Gambit" }, "rnbqkb1r/ppp1pppp/5n2/3p4/3PP3/5P2/PPP3PP/RNBQKBNR": { "eco": "A45", "name": "Indian Game: Paleface Attack, Blackmar-Diemer Gambit Deferred" }, "rnbqkb1r/pppppppp/5n2/3P4/8/8/PPP1PPPP/RNBQKBNR": { "eco": "A45", "name": "Indian Game: Pawn Push Variation" }, "rnbqkb1r/pppppppp/5n2/8/3P4/6P1/PPP1PP1P/RNBQKBNR": { "eco": "A45", "name": "Indian Game: Tartakower Attack" }, "rnbqkb1r/pppppppp/5n2/8/3P4/5P2/PPP1P1PP/RNBQKBNR": { "eco": "A45", "name": "Paleface Attack" }, "rnbqkb1r/ppp1pppp/5n2/3p4/3P4/2N2P2/PPP1P1PP/R1BQKBNR": { "eco": "A45", "name": "Queen's Pawn Game: Veresov, Richter Attack" }, "rnbqkb1r/pppppppp/5n2/6B1/3P4/8/PPP1PPPP/RN1QKBNR": { "eco": "A45", "name": "Trompowsky Attack" }, "rnbqkb1r/pppp1ppp/4pn2/6B1/3PP3/8/PPP2PPP/RN1QKBNR": { "eco": "A45", "name": "Trompowsky Attack: Classical Defense, Big Center Variation" }, "rnbqkb1r/pppppppp/8/8/3Pn2B/8/PPP1PPPP/RN1QKBNR": { "eco": "A45", "name": "Trompowsky Attack: Edge Variation" }, "rnb1kb1r/pp2pppp/2p5/q2p4/3PP2B/2P5/PP1Q1PPP/R3KBNR": { "eco": "A45", "name": "Trompowsky Attack: Edge Variation, Hergert Gambit" }, "rn1qkb1r/ppp1pppp/5n2/3p1b2/3PP2B/2N2P2/PPP3PP/R2QKBNR": { "eco": "A45", "name": "Trompowsky Attack: Edge Variation, Hergert Gambit" }, "rnb1kb1r/pp1ppppp/1q3n2/2pP2B1/8/2N5/PPP1PPPP/R2QKBNR": { "eco": "A45", "name": "Trompowsky Attack: Poisoned Pawn Variation" }, "rnbqkb1r/pppppppp/8/6B1/3Pn2P/8/PPP1PPP1/RN1QKBNR": { "eco": "A45", "name": "Trompowsky Attack: Raptor Variation" }, "rnbqkb1r/pppppppp/5n2/8/3P4/5N2/PPP1PPPP/RNBQKB1R": { "eco": "A46", "name": "Indian Game: Knights Variation" }, "rnbqkb1r/pppp1ppp/4pn2/8/3P1B2/5N2/PPP1PPPP/RN1QKB1R": { "eco": "A46", "name": "Indian Game: London System" }, "rnbqkb1r/ppp2ppp/4pn2/3p2B1/3P4/2N2N2/PPP1PPPP/R2QKB1R": { "eco": "A46", "name": "Queen's Pawn Game: Veresov Attack, Classical Defense" }, "rnbqkb1r/pppp1ppp/4pn2/6B1/3P4/5N2/PPP1PPPP/RN1QKB1R": { "eco": "A46", "name": "Torre Attack" }, "rnbqkb1r/p2p1ppp/1p2pn2/2pP2B1/8/4PN2/PPP2PPP/RN1QKB1R": { "eco": "A46", "name": "Torre Attack: Classical Defense, Petrosian Gambit" }, "rnbqkb1r/pp1p1ppp/4pn2/2p3B1/3PP3/5N2/PPP2PPP/RN1QKB1R": { "eco": "A46", "name": "Torre Attack: Wagner Gambit" }, "rnbqkb1r/pppp1ppp/4pn2/8/3P4/4PN2/PPP2PPP/RNBQKB1R": { "eco": "A46", "name": "Yusupov-Rubinstein System" }, "rn1qkb1r/pb1ppppp/1p3n2/8/2PQ4/5NP1/PP2PPBP/RNB1K2R": { "eco": "A47", "name": "Queen's Indian Defense: Marienbad System, Berg Variation" }, "rnbqkb1r/pppppp1p/5np1/8/3P1B2/5N2/PPP1PPPP/RN1QKB1R": { "eco": "A48", "name": "London System" }, "rnbq1rk1/ppp1ppbp/5np1/3p4/3P1B2/2N1PN2/PPP1BPPP/R2QK2R": { "eco": "A48", "name": "Queen's Pawn Game: Barry Attack, Grünfeld Variation" }, "rnbqkb1r/pppppp1p/5np1/6B1/3P4/5N2/PPP1PPPP/RN1QKB1R": { "eco": "A48", "name": "Torre Attack" }, "rnbqkb1r/pppppp1p/5np1/8/3P4/5NP1/PPP1PP1P/RNBQKB1R": { "eco": "A49", "name": "Indian Game: Przepiorka Variation" }, "rnbqkb1r/pppppppp/5n2/8/2PP4/8/PP2PPPP/RNBQKBNR": { "eco": "A50", "name": "Indian Game: Normal Variation" }, "r1bqkb1r/pppppppp/5n2/3Pn3/2P2P2/8/PP2P1PP/RNBQKBNR": { "eco": "A50", "name": "Mexican Defense: Horsefly Gambit" }, "rnbqkb1r/pppp1ppp/8/4P3/2P1n3/8/PPQ1PPPP/RNB1KBNR": { "eco": "A51", "name": "Indian Game: Budapest Defense, Fajarowicz-Steiner Variation" }, "rnbqkb1r/pppp1ppp/8/4P3/2P3n1/5N2/PP2PPPP/RNBQKB1R": { "eco": "A52", "name": "Indian Game: Budapest Defense, Adler Variation" }, "rnbqkb1r/pppp1ppp/8/4P3/2P1P1n1/8/PP3PPP/RNBQKBNR": { "eco": "A52", "name": "Indian Game: Budapest Defense, Alekhine Variation" }, "rnbqkb1r/pppp1ppp/8/4P3/2P2Bn1/8/PP2PPPP/RN1QKBNR": { "eco": "A52", "name": "Indian Game: Budapest Defense, Rubinstein Variation" }, "rnbqkb1r/ppp1pppp/3p1n2/8/2PP2P1/8/PP2PP1P/RNBQKBNR": { "eco": "A53", "name": "Old Indian Defense: Aged Gibbon Gambit" }, "rn1qkb1r/ppp1pppp/3p1n2/5b2/2PP4/2N2N2/PP2PPPP/R1BQKB1R": { "eco": "A53", "name": "Old Indian Defense: Janowski Variation, Fianchetto Variation" }, "rn1qkb1r/ppp1pppp/3p1n2/5b2/2PP4/2N3P1/PP2PP1P/R1BQKBNR": { "eco": "A53", "name": "Old Indian Defense: Janowski Variation, Fianchetto Variation" }, "rn1qkb1r/ppp1pppp/3p1n2/5b2/2PPP3/2N5/PP3PPP/R1BQKBNR": { "eco": "A53", "name": "Old Indian Defense: Janowski Variation, Grinberg Gambit" }, "rn1qkb1r/ppp1pppp/3p1n2/5b2/2PP4/2N2P2/PP2P1PP/R1BQKBNR": { "eco": "A53", "name": "Old Indian Defense: Janowski Variation, Main Line" }, "r1bqkb1r/pppn1ppp/3p1n2/4p3/2PP4/2NBP3/PP3PPP/R1BQK1NR": { "eco": "A54", "name": "Old Indian Defense: Dus-Khotimirsky Variation" }, "rnbqkb1r/ppp2ppp/3p1n2/4p3/2PP4/2N2N2/PP2PPPP/R1BQKB1R": { "eco": "A54", "name": "Old Indian Defense: Two Knights Variation" }, "r1bqkb1r/pppn1ppp/3p1n2/4p3/2PPP3/2N2N2/PP3PPP/R1BQKB1R": { "eco": "A55", "name": "Old Indian Defense: Normal Variation" }, "rnbqkb1r/3ppppp/p4n2/1PpP4/8/5P2/PP2P1PP/RNBQKBNR": { "eco": "A57", "name": "Benko Gambit Accepted: Dlugy Variation" }, "rnbqkb1r/3ppppp/p4n2/1PpP4/8/4P3/PP3PPP/RNBQKBNR": { "eco": "A57", "name": "Benko Gambit Accepted: Modern Variation" }, "rnbqkb1r/3ppppp/pP3n2/2pP4/8/8/PP2PPPP/RNBQKBNR": { "eco": "A57", "name": "Benko Gambit Accepted: Pawn Return Variation" }, "rnbqkb1r/p2ppppp/5n2/1ppP2B1/2P5/8/PP2PPPP/RN1QKBNR": { "eco": "A57", "name": "Benko Gambit Declined: Bishop Attack" }, "rnbqkb1r/p2ppppp/5n2/1ppP4/2P1P3/8/PP3PPP/RNBQKBNR": { "eco": "A57", "name": "Benko Gambit Declined: Hjørring Countergambit" }, "rnbqkb1r/p2ppppp/5n2/1ppP4/2P5/5N2/PP2PPPP/RNBQKB1R": { "eco": "A57", "name": "Benko Gambit Declined: Main Line" }, "rnbqkb1r/p2ppppp/5n2/1ppP4/2P5/5P2/PP2P1PP/RNBQKBNR": { "eco": "A57", "name": "Benko Gambit Declined: Pseudo-Sämisch" }, "rnbqkb1r/p2ppppp/5n2/1ppP4/2P5/8/PP1NPPPP/R1BQKBNR": { "eco": "A57", "name": "Benko Gambit Declined: Quiet Line" }, "rnbqkb1r/p2ppppp/5n2/1ppP4/P1P5/8/1P2PPPP/RNBQKBNR": { "eco": "A57", "name": "Benko Gambit Declined: Sosonko Variation" }, "rnbqkb1r/p2ppppp/5n2/1ppP4/2P3P1/8/PP2PP1P/RNBQKBNR": { "eco": "A57", "name": "Benko Gambit: Mutkin Countergambit" }, "rnbqkb1r/4pppp/3p1n2/1NpP4/1pB1P3/8/PP3PPP/R1BQK1NR": { "eco": "A57", "name": "Benko Gambit: Nescafe Frappe Attack" }, "rnbqkb1r/3ppppp/p4n2/1PpP4/8/2N5/PP2PPPP/R1BQKBNR": { "eco": "A57", "name": "Benko Gambit: Zaitsev System" }, "rnbqkb1r/3ppppp/5n2/1NpP4/1p2P3/8/PP3PPP/R1BQKBNR": { "eco": "A57", "name": "Benko Gambit: Zaitsev Variation, Nescafe Frappe Attack" }, "rn1qkb1r/3ppp1p/b4np1/2pP4/5P2/2N5/PP2P1PP/R1BQKBNR": { "eco": "A58", "name": "Benko Gambit Accepted: Central Storming Variation" }, "rn1qk2r/4ppbp/b2p1np1/2pP4/8/2N2NP1/PP2PPBP/R1BQK2R": { "eco": "A58", "name": "Benko Gambit Accepted: Fianchetto Variation" }, "rnbqkb1r/3ppppp/P4n2/2pP4/8/8/PP2PPPP/RNBQKBNR": { "eco": "A58", "name": "Benko Gambit Accepted: Fully Accepted Variation" }, "rn1qkb1r/4pp1p/b2p1np1/2pP4/8/2N2NP1/PP2PP1P/R1BQKB1R": { "eco": "A58", "name": "Benko Gambit: Fianchetto Variation" }, "rn1qkb1r/4pp1p/b2p1np1/2pP4/8/2N5/PP1NPPPP/R1BQKB1R": { "eco": "A58", "name": "Benko Gambit: Nd2 Variation" }, "rn1qkb1r/4pp1p/3p1np1/2pP4/4P3/2N3P1/PP3P1P/R1BQ1KNR": { "eco": "A59", "name": "Benko Gambit" }, "rn1q1rk1/4ppbp/3p1np1/2pP4/4P3/2N2NP1/PP3PKP/R1BQ3R": { "eco": "A59", "name": "Benko Gambit Accepted: King Walk Variation" }, "rn1qkb1r/4pppp/b2p1n2/2pP4/4P3/2N5/PP3PPP/R1BQKBNR": { "eco": "A59", "name": "Benko Gambit Accepted: Yugoslav" }, "rn1qkb1r/4pp1p/3p1np1/2pP4/4P3/2N5/PP2NPPP/R1BQ1K1R": { "eco": "A59", "name": "Benko Gambit Accepted: Yugoslav" }, "rnbqkb1r/pp3p1p/3p1np1/2pP4/8/2N2NP1/PP2PP1P/R1BQKB1R": { "eco": "A61", "name": "Benoni Defense: Fianchetto Variation" }, "rnbqkb1r/pp3p1p/3p1np1/2pP4/8/2N5/PP1NPPPP/R1BQKB1R": { "eco": "A61", "name": "Benoni Defense: Knight's Tour Variation" }, "rnbqkb1r/pp3p1p/3p1np1/2pP2B1/8/2N2N2/PP2PPPP/R2QKB1R": { "eco": "A61", "name": "Benoni Defense: Uhlmann Variation" }, "rnbqkb1r/pp3ppp/3p1n2/2pP4/4P3/2N5/PP3PPP/R1BQKBNR": { "eco": "A65", "name": "Benoni Defense: King's Pawn Line" }, "rnbqk2r/pp3pbp/3p1np1/2pPP3/5P2/2N5/PP4PP/R1BQKBNR": { "eco": "A66", "name": "Benoni Defense: Mikenas Variation" }, "rnbqkb1r/pp3p1p/3p1np1/2pP4/4PP2/2N5/PP4PP/R1BQKBNR": { "eco": "A66", "name": "Benoni Defense: Pawn Storm Variation" }, "rnbqk2r/pp3pbp/3p1np1/1BpP4/4PP2/2N5/PP4PP/R1BQK1NR": { "eco": "A67", "name": "Benoni Defense: Taimanov Variation" }, "rnbqkb1r/pp3p1p/3p1np1/2pP4/4P3/2N2N2/PP3PPP/R1BQKB1R": { "eco": "A70", "name": "Benoni Defense: Classical Variation" }, "rnbqk2r/pp3pbp/3p1np1/2pP4/4P3/2N2N1P/PP3PP1/R1BQKB1R": { "eco": "A70", "name": "Benoni Defense: Classical Variation, New York Variation" }, "rnbqk2r/pp3pbp/3p1np1/2pP4/4P3/2N2N2/PP2BPPP/R1BQK2R": { "eco": "A70", "name": "Benoni Defense: Classical Variation, Traditional Variation" }, "rnbqk2r/pp3pbp/3p1np1/2pP2B1/4P3/2N2N2/PP3PPP/R2QKB1R": { "eco": "A71", "name": "Benoni Defense: Classical Variation, Averbakh-Grivas Attack" }, "rnbq1rk1/pp3pbp/3p1np1/2pP4/4P3/2N2N2/PP2BPPP/R1BQ1RK1": { "eco": "A73", "name": "Benoni Defense: Classical Variation, Main Line" }, "rnbq1rk1/1p3pbp/p2p1np1/2pP4/P3P3/2N2N2/1P2BPPP/R1BQ1RK1": { "eco": "A74", "name": "Benoni Defense: Classical Variation, Full Line" }, "rnbqr1k1/pp3pbp/3p1np1/2pP4/4P3/2N5/PP1NBPPP/R1BQ1RK1": { "eco": "A77", "name": "Benoni Defense: Classical Variation, Czerniak Defense, Tal Line" }, "r1bqr1k1/pp3pbp/n2p1np1/2pP4/4P3/2N2P2/PP1NB1PP/R1BQ1RK1": { "eco": "A79", "name": "Benoni Defense: Classical Variation, Czerniak Defense" }, "rnbqkbnr/ppppp1pp/8/5p2/3P4/3Q4/PPP1PPPP/RNB1KBNR": { "eco": "A80", "name": "Dutch Defense: Alapin Variation" }, "rnbqkbnr/ppppp1pp/8/5pB1/3P4/8/PPP1PPPP/RN1QKBNR": { "eco": "A80", "name": "Dutch Defense: Hopton Attack" }, "rnbqkb1r/ppppp1pp/5n2/5p2/3P2P1/7P/PPP1PP2/RNBQKBNR": { "eco": "A80", "name": "Dutch Defense: Janzen-Korchnoi Gambit" }, "rnbqkbnr/ppp1p1pp/8/3p1p2/3PP3/2N5/PPP2PPP/R1BQKBNR": { "eco": "A80", "name": "Dutch Defense: Kingfisher Gambit" }, "rnbqkbnr/ppppp1pp/8/5p2/3P4/7P/PPP1PPP1/RNBQKBNR": { "eco": "A80", "name": "Dutch Defense: Korchnoi Attack" }, "rnbqkbnr/ppppp1pp/8/5p2/3P2P1/8/PPP1PP1P/RNBQKBNR": { "eco": "A80", "name": "Dutch Defense: Krejcik Gambit" }, "rnbqkbnr/ppp1p1pp/8/3p4/3PP1p1/2N5/PPP2P1P/R1BQKBNR": { "eco": "A80", "name": "Dutch Defense: Krejcik Gambit, Tate Gambit" }, "rnbqkbnr/pppp2pp/4p3/5p2/3P2P1/3Q4/PPP1PP1P/RNB1KBNR": { "eco": "A80", "name": "Dutch Defense: Manhattan Gambit, Anti-Classical Line" }, "rnbqkbnr/ppppp2p/6p1/5p2/3P2P1/3Q4/PPP1PP1P/RNB1KBNR": { "eco": "A80", "name": "Dutch Defense: Manhattan Gambit, Anti-Leningrad" }, "rnbqkbnr/ppp1p1pp/3p4/5p2/3P2P1/3Q4/PPP1PP1P/RNB1KBNR": { "eco": "A80", "name": "Dutch Defense: Manhattan Gambit, Anti-Modern" }, "rnbqkbnr/ppp1p1pp/8/3p1p2/3P2P1/3Q4/PPP1PP1P/RNB1KBNR": { "eco": "A80", "name": "Dutch Defense: Manhattan Gambit, Anti-Stonewall" }, "rnbqkbnr/ppppp1pp/8/5p2/3P4/2N5/PPP1PPPP/R1BQKBNR": { "eco": "A80", "name": "Dutch Defense: Raphael Variation" }, "rnbqkb1r/ppppp1pp/5n2/5p2/3P2P1/2N5/PPP1PP1P/R1BQKBNR": { "eco": "A80", "name": "Dutch Defense: Spielmann Gambit" }, "rnbqkb1r/pppp2pp/4pn2/5p2/3P4/6PN/PPP1PPBP/RNBQK2R": { "eco": "A81", "name": "Dutch Defense: Blackburne Variation" }, "rnbqkbnr/ppppp1pp/8/5p2/3P4/6P1/PPP1PP1P/RNBQKBNR": { "eco": "A81", "name": "Dutch Defense: Fianchetto Attack" }, "rnbqk1nr/ppppp1bp/6p1/5p2/3P4/6PN/PPP1PPBP/RNBQK2R": { "eco": "A81", "name": "Dutch Defense: Leningrad Variation, Karlsbad Variation" }, "rnbqkb1r/ppppp1pp/5n2/8/3Pp3/2N2P2/PPP3PP/R1BQKBNR": { "eco": "A82", "name": "Dutch Defense: Blackmar's Second Gambit" }, "rnbqkbnr/ppppp1pp/8/5p2/3PP3/8/PPP2PPP/RNBQKBNR": { "eco": "A82", "name": "Dutch Defense: Staunton Gambit" }, "rnbqkbnr/ppppp1pp/8/8/3Pp3/8/PPPN1PPP/R1BQKBNR": { "eco": "A82", "name": "Dutch Defense: Staunton Gambit, American Attack" }, "rnbqkb1r/ppppp1pp/5n2/8/3Pp1P1/2N5/PPP2P1P/R1BQKBNR": { "eco": "A82", "name": "Dutch Defense: Staunton Gambit, Tartakower Variation" }, "rnbqkb1r/ppppp1pp/5n2/6B1/3Pp3/2N5/PPP2PPP/R2QKBNR": { "eco": "A83", "name": "Dutch Defense: Staunton Gambit" }, "rnbqkb1r/ppppp2p/5np1/6B1/3Pp2P/2N5/PPP2PP1/R2QKBNR": { "eco": "A83", "name": "Dutch Defense: Staunton Gambit, Alekhine Variation" }, "rnbqkb1r/ppppp2p/5np1/6B1/3Pp3/2N2P2/PPP3PP/R2QKBNR": { "eco": "A83", "name": "Dutch Defense: Staunton Gambit, Lasker Variation" }, "rnbqkbnr/ppppp1pp/8/5p2/2PP4/8/PP2PPPP/RNBQKBNR": { "eco": "A84", "name": "Dutch Defense" }, "rnbqkbnr/pppp2pp/4p3/5p2/2PP4/2N5/PP2PPPP/R1BQKBNR": { "eco": "A84", "name": "Dutch Defense: Rubinstein Variation" }, "rnbqkbnr/pppp2pp/4p3/5p2/2PPP3/8/PP3PPP/RNBQKBNR": { "eco": "A84", "name": "Horwitz Defense: Dutch Defense, Bellon Gambit" }, "rnbqkb1r/ppppp1pp/5n2/5p2/2PP4/2N5/PP2PPPP/R1BQKBNR": { "eco": "A85", "name": "Dutch Defense: Queen's Knight Variation" }, "rnbqkb1r/ppppp1pp/5n2/5p2/2PP4/6P1/PP2PP1P/RNBQKBNR": { "eco": "A86", "name": "Dutch Defense: Fianchetto Variation" }, "rnbqk2r/ppppp1bp/5np1/5p2/2PP4/5NP1/PP2PPBP/RNBQK2R": { "eco": "A87", "name": "Dutch Defense: Leningrad Variation" }, "rnbqkb1r/pppp2pp/4pn2/5p2/2PP4/6P1/PP2PPBP/RNBQK1NR": { "eco": "A90", "name": "Dutch Defense: Classical Variation" }, "rnbqk2r/ppppb1pp/4pn2/5p2/2PP4/6PN/PP2PPBP/RNBQK2R": { "eco": "A91", "name": "Dutch Defense: Classical Variation, Blackburne Attack" }, "rnbq1rk1/ppp1b1pp/4pn2/3p1p2/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1": { "eco": "A92", "name": "Dutch Defense: Stonewall" }, "rnbq1rk1/ppp1b1pp/4pn2/3p1p2/2PP4/1P3NP1/P3PPBP/RNBQ1RK1": { "eco": "A93", "name": "Dutch Defense: Classical Variation, Stonewall Variation, Botvinnik Variation" }, "rnbq1rk1/pp2b1pp/2p1pn2/3p1p2/2PP4/BP3NP1/P3PPBP/RN1Q1RK1": { "eco": "A94", "name": "Dutch Defense: Classical Variation, Stonewall Variation" }, "rnb1qrk1/pp2b1pp/2p1pn2/3p1pB1/2PP4/2N2NP1/PPQ1PPBP/R4RK1": { "eco": "A95", "name": "Dutch Defense: Stonewall, Chekhover Variation" }, "rnb1qrk1/ppp1b1pp/3ppn2/5p2/2PP4/2N2NP1/PP2PPBP/R1BQR1K1": { "eco": "A97", "name": "Dutch Defense: Classical Variation, Ilyin-Zhenevsky Variation, Winter Variation" }, "rnb1qrk1/ppp1b1pp/3ppn2/5p2/2PP4/2N2NP1/PPQ1PPBP/R1B2RK1": { "eco": "A98", "name": "Dutch Defense: Classical Variation, Ilyin-Zhenevsky Variation, Alatortsev-Lisitsyn Line" }, "rnb1qrk1/ppp1b1pp/3ppn2/5p2/2PP4/1PN2NP1/P3PPBP/R1BQ1RK1": { "eco": "A99", "name": "Dutch Defense: Classical Variation, Ilyin-Zhenevsky Variation, Modern Main Line" }, "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR": { "eco": "B00", "name": "King's Pawn" }, "r1bqkbnr/pppppppp/2n5/8/3PP3/8/PPP2PPP/RNBQKBNR": { "eco": "B00", "name": "King's Pawn Game: Nimzowitsch Defense" }, "r1bqkbnr/pppppppp/2n5/8/3PP3/2P5/P4PPP/RNBQKBNR": { "eco": "B00", "name": "King's Pawn Game: Nimzowitsch Defense, Wheeler Gambit" }, "rnbqkb1r/ppp1pppp/3p1n2/8/3PP3/5P2/PPP3PP/RNBQKBNR": { "eco": "B00", "name": "Lion Defense: Lion's Jaw" }, "r1bqkbnr/pppppppp/2n5/8/4P3/5N2/PPPP1PPP/RNBQKB1R": { "eco": "B00", "name": "Nimzowitsch Defense, Declined Variation" }, "r1bqkb1r/ppp1pppp/2npP2n/8/3P4/5N1P/PPP2PP1/RNBQKB1R": { "eco": "B00", "name": "Nimzowitsch Defense: El Columpio Defense, El Columpio Gambit" }, "r1bqkb1r/ppp1pppp/2nP3n/8/3P4/5N1P/PPP2PP1/RNBQKB1R": { "eco": "B00", "name": "Nimzowitsch Defense: El Columpio Defense, Exchange Variation" }, "r1bqkb1r/ppp1pppp/2np3n/1B2P3/3P4/5N1P/PPP2PP1/RNBQK2R": { "eco": "B00", "name": "Nimzowitsch Defense: El Columpio Defense, Pin Variation" }, "r1bqkbnr/ppp1pppp/2n5/3p4/3PP3/4B3/PPP2PPP/RN1QKBNR": { "eco": "B00", "name": "Nimzowitsch Defense: Hornung Gambit" }, "r1bqkbnr/pppp1ppp/8/4n3/4P3/2N5/PPP2PPP/R1BQKBNR": { "eco": "B00", "name": "Nimzowitsch Defense: Kennedy Variation, Keres Attack" }, "r1bqkbnr/pppp1ppp/2n5/3Pp3/4P3/8/PPP2PPP/RNBQKBNR": { "eco": "B00", "name": "Nimzowitsch Defense: Kennedy Variation, Linksspringer Variation" }, "r1bqkbnr/pppp1ppp/8/4n3/4P3/5N2/PPP2PPP/RNBQKB1R": { "eco": "B00", "name": "Nimzowitsch Defense: Kennedy Variation, Paulsen Attack" }, "r1bqkbnr/ppppp1pp/2n5/5P2/8/5N2/PPPP1PPP/RNBQKB1R": { "eco": "B00", "name": "Nimzowitsch Defense: Lean Variation, Colorado Counter Accepted" }, "r1bqkbnr/pppppppp/2n5/1B6/4P3/8/PPPP1PPP/RNBQK1NR": { "eco": "B00", "name": "Nimzowitsch Defense: Pseudo-Spanish Variation" }, "r1bqkbnr/ppp1pppp/2n5/3pP3/3P4/8/PPP2PPP/RNBQKBNR": { "eco": "B00", "name": "Nimzowitsch Defense: Scandinavian Variation, Advance Variation" }, "r1bqkbnr/ppp1pppp/2n5/3p4/3PP3/2N5/PPP2PPP/R1BQKBNR": { "eco": "B00", "name": "Nimzowitsch Defense: Scandinavian Variation, Bogoljubov Variation" }, "rnbqkbnr/ppp1pppp/8/3P4/4p3/2N2P2/PPP3PP/R1BQKBNR": { "eco": "B00", "name": "Nimzowitsch Defense: Scandinavian Variation, Bogoljubov Variation, Richter Gambit" }, "r1b1kbnr/ppp1pppp/2n5/3q4/3P4/2N5/PPP2PPP/R1BQKBNR": { "eco": "B00", "name": "Nimzowitsch Defense: Scandinavian Variation, Exchange Variation, Marshall Gambit" }, "r1bqkbnr/pppppppp/2n5/8/1P2P3/8/P1PP1PPP/RNBQKBNR": { "eco": "B00", "name": "Nimzowitsch Defense: Wheeler Gambit" }, "rn1qkbnr/pbpppppp/1p6/6B1/3PP3/8/PPP2PPP/RN1QKBNR": { "eco": "B00", "name": "Owen Defense: Naselwaus Gambit" }, "rn1qkbnr/pbpppppp/1p6/8/3PP3/5N2/PPP2PPP/RNBQKB1R": { "eco": "B00", "name": "Owen Defense: Smith Gambit" }, "rnbqkbnr/ppp1pppp/3p4/8/3PP3/8/PPP2PPP/RNBQKBNR": { "eco": "B00", "name": "Pirc Defense" }, "rnbqkb1r/ppp1pppp/3p1n2/8/3PP3/5N2/PPP2PPP/RNBQKB1R": { "eco": "B00", "name": "Pirc Defense: Roscher Gambit" }, "rnbqkbnr/ppp1pppp/3p4/8/4PP2/8/PPPP2PP/RNBQKBNR": { "eco": "B00", "name": "Rat Defense: Harmonist" }, "rnbqkbnr/ppp1pppp/3p4/8/4P2P/8/PPPP1PP1/RNBQKBNR": { "eco": "B00", "name": "Rat Defense: Petruccioli Attack" }, "rnbqkbnr/ppp1pppp/3p4/8/4P1P1/8/PPPP1P1P/RNBQKBNR": { "eco": "B00", "name": "Rat Defense: Spike Attack" }, "r1bqkbnr/ppp1pppp/2n5/3P4/4p3/2N5/PPP2PPP/R1BQKBNR": { "eco": "B00", "name": "Van Geet Opening: Berlin Gambit" }, "rnbqkbnr/ppp1pppp/8/3p4/4P3/1P6/P1PP1PPP/RNBQKBNR": { "eco": "B01", "name": "Scandinavian Defense" }, "rnb1kbnr/ppp2ppp/8/q3p3/3P4/2N2N2/PPP2PPP/R1BQKB1R": { "eco": "B01", "name": "Scandinavian Defense: Anderssen Counterattack, Goteborg System" }, "r1b1k1nr/ppp2ppp/2n5/q3P3/1b6/2N2N2/PPPB1PPP/R2QKB1R": { "eco": "B01", "name": "Scandinavian Defense: Anderssen Counterattack, Orthodox Attack" }, "rn2kb1r/pp2pppp/2p2n2/q3Nb2/3P2P1/2N5/PPP2P1P/R1BQKB1R": { "eco": "B01", "name": "Scandinavian Defense: Grünfeld Variation" }, "rn2kb1r/ppp1pppp/5n2/q7/3P2b1/2N2N1P/PPP2PP1/R1BQKB1R": { "eco": "B01", "name": "Scandinavian Defense: Lasker Variation" }, "rnb1kbnr/ppp1pppp/8/q7/1P6/2N5/P1PP1PPP/R1BQKBNR": { "eco": "B01", "name": "Scandinavian Defense: Main Line, Leonhardt Gambit" }, "rnbqkb1r/ppp1pppp/5n2/3P4/3P4/8/PPP2PPP/RNBQKBNR": { "eco": "B01", "name": "Scandinavian Defense: Modern Variation" }, "rnbqkbnr/ppp1pppp/8/3p4/1P2P3/8/P1PP1PPP/RNBQKBNR": { "eco": "B01", "name": "Scandinavian Defense: Zilbermints Gambit" }, "rnbqkb1r/pppppppp/8/3nP3/8/N7/PPPP1PPP/R1BQKBNR": { "eco": "B02", "name": "Alekhine Defense: Buckley Attack" }, "rnbqkb1r/pppp1ppp/4p3/2PnP3/2B5/2N5/PP1P1PPP/R1BQK1NR": { "eco": "B02", "name": "Alekhine Defense: Hunt Variation, Lasker Simul Gambit" }, "rnbqkb1r/ppp1pppp/3p4/2P1P1B1/8/2P5/PP3PPP/R2QKBNR": { "eco": "B02", "name": "Alekhine Defense: Hunt Variation, Matsukevich Gambit" }, "rnbqkb1r/ppp2ppp/3p4/2PBP3/8/8/PP1P1PPP/R1BQK1NR": { "eco": "B02", "name": "Alekhine Defense: Hunt Variation, Mikenas Gambit" }, "rnbqkb1r/pp1ppppp/1n6/2p1P3/8/1B1P4/PPP2PPP/RNBQK1NR": { "eco": "B02", "name": "Alekhine Defense: Kmoch Variation" }, "rnbqkb1r/pppppppp/5n2/8/2B1P3/8/PPPP1PPP/RNBQK1NR": { "eco": "B02", "name": "Alekhine Defense: Krejcik Variation" }, "rnbqkb1r/pppppBpp/8/8/4n3/8/PPPP1PPP/RNBQK1NR": { "eco": "B02", "name": "Alekhine Defense: Krejcik Variation, Krejcik Gambit" }, "rnbqkb1r/pppppppp/5n2/8/4P3/3P4/PPP2PPP/RNBQKBNR": { "eco": "B02", "name": "Alekhine Defense: Maróczy Variation" }, "rnbqkb1r/ppp1pppp/5n2/6B1/4p3/2NP4/PPP2PPP/R2QKBNR": { "eco": "B02", "name": "Alekhine Defense: Scandinavian Variation, Myers Gambit" }, "rnbqkb1r/pppnpppp/4P3/3p4/8/2N5/PPPP1PPP/R1BQKBNR": { "eco": "B02", "name": "Alekhine Defense: Spielmann Gambit" }, "rnbqkb1r/pppppppp/1n6/4P3/2P5/1P6/P2P1PPP/RNBQKBNR": { "eco": "B02", "name": "Alekhine Defense: Steiner Variation" }, "rnbqkb1r/pppppppp/8/3nP3/8/2N5/PPPP1PPP/R1BQKBNR": { "eco": "B02", "name": "Alekhine Defense: Sämisch Attack" }, "rnbqkb1r/pppppppp/8/3nP3/2P5/8/PP1P1PPP/RNBQKBNR": { "eco": "B02", "name": "Alekhine Defense: Two Pawn Attack" }, "rnbqkb1r/pppppppp/1n6/2P1P3/8/8/PP1P1PPP/RNBQKBNR": { "eco": "B02", "name": "Alekhine Defense: Two Pawn Attack, Lasker Variation" }, "rnbqkb1r/pppppppp/8/3nP3/8/1P6/P1PP1PPP/RNBQKBNR": { "eco": "B02", "name": "Alekhine Defense: Welling Variation" }, "rnbqkb1r/pppppppp/5n2/8/2P1P3/8/PP1P1PPP/RNBQKBNR": { "eco": "B02", "name": "English Opening: Achilles-Omega Gambit" }, "rnbqkb1r/pppppppp/8/3nP3/3P4/8/PPP2PPP/RNBQKBNR": { "eco": "B03", "name": "Alekhine Defense" }, "rnbqkb1r/ppp1pppp/3p4/3nP3/2PP4/8/PP3PPP/RNBQKBNR": { "eco": "B03", "name": "Alekhine Defense" }, "rnbqkb1r/ppp1pppp/3p4/3nP3/2BP4/8/PPP2PPP/RNBQK1NR": { "eco": "B03", "name": "Alekhine Defense: Balogh Variation" }, "rnbqkb1r/ppp1pppp/1n1P4/8/2PP4/8/PP3PPP/RNBQKBNR": { "eco": "B03", "name": "Alekhine Defense: Exchange Variation" }, "r2q1rk1/pp2ppbp/1nnp2p1/5b2/2PP1B2/2N2N1P/PP2BPP1/R2Q1RK1": { "eco": "B03", "name": "Alekhine Defense: Exchange Variation, Karpov Variation" }, "rnbqkb1r/ppp1pppp/1n1p4/4P3/2PP1P2/8/PP4PP/RNBQKBNR": { "eco": "B03", "name": "Alekhine Defense: Four Pawns Attack" }, "r2qkb1r/ppp1p1pp/1nn1p3/2P5/3P2b1/5N2/PP4PP/RNBQKB1R": { "eco": "B03", "name": "Alekhine Defense: Four Pawns Attack, Ilyin-Zhenevsky Variation" }, "r1bqkb1r/ppp1pppp/1nn5/4P3/2PP4/4B3/PP4PP/RN1QKBNR": { "eco": "B03", "name": "Alekhine Defense: Four Pawns Attack, Main Line" }, "rnbqkb1r/ppp1pppp/1n1p4/2P1P3/3P4/8/PP3PPP/RNBQKBNR": { "eco": "B03", "name": "Alekhine Defense: Hunt Variation" }, "rn1qkb1r/ppp1pppp/1n1p4/4P3/2PP2b1/5N2/PP2BPPP/RNBQK2R": { "eco": "B03", "name": "Alekhine Defense: Modern Variation, Alekhine Gambit" }, "rnbqkb1r/ppp1pppp/3p4/3nP3/3P4/5N2/PPP2PPP/RNBQKB1R": { "eco": "B04", "name": "Alekhine Defense: Modern Variation" }, "rnbqk2r/ppp1ppbp/1n1p2p1/4P3/P2P4/1B3N2/1PP2PPP/RNBQK2R": { "eco": "B04", "name": "Alekhine Defense: Modern Variation, Keres Variation" }, "rn1qkb1r/ppp1pppp/3p4/3nP3/2PP2b1/5N2/PP3PPP/RNBQKB1R": { "eco": "B05", "name": "Alekhine Defense: Modern Variation, Alekhine Variation" }, "rn1qkb1r/ppp1pppp/3p4/3nP3/3P2b1/5N1P/PPP2PP1/RNBQKB1R": { "eco": "B05", "name": "Alekhine Defense: Modern Variation, Panov Variation" }, "rn1qkb1r/ppp1pppp/1n1p4/3PP3/2P3b1/5N2/PP3PPP/RNBQKB1R": { "eco": "B05", "name": "Alekhine Defense: Modern Variation, Vitolins Attack" }, "rnbqk1nr/pp2ppbp/2pp2p1/8/2BPP3/2N5/PPP1QPPP/R1B1K1NR": { "eco": "B06", "name": "Modern Defense: Anti-Modern" }, "rnbqk1nr/ppppppbp/6p1/8/2BPP3/8/PPP2PPP/RNBQK1NR": { "eco": "B06", "name": "Modern Defense: Bishop Attack" }, "rnbqk1nr/ppp1ppbp/3p2p1/8/3PPP2/2N5/PPP3PP/R1BQKBNR": { "eco": "B06", "name": "Modern Defense: Pseudo-Austrian Attack" }, "rnbqk1nr/ppppppbp/6p1/8/3PP3/2N5/PPP2PPP/R1BQKBNR": { "eco": "B06", "name": "Modern Defense: Standard Line" }, "rnbqk1nr/ppppppbp/6p1/8/3PPP2/8/PPP3PP/RNBQKBNR": { "eco": "B06", "name": "Modern Defense: Three Pawns Attack" }, "rnbqk1nr/ppp1ppbp/3p2p1/8/3PP3/2N2N2/PPP2PPP/R1BQKB1R": { "eco": "B06", "name": "Modern Defense: Two Knights Variation" }, "rnbqk1nr/ppppppbp/6p1/8/3PP3/8/PPPB1PPP/RN1QKBNR": { "eco": "B06", "name": "Modern Defense: Westermann Gambit" }, "rnbqk1nr/ppppppbp/6p1/8/3PP3/3B4/PPP2PPP/RNBQK1NR": { "eco": "B06", "name": "Modern Defense: Wind Gambit" }, "rnbqk1nr/pp1pppbp/6p1/2p5/3PP3/2N1B3/PPP2PPP/R2QKBNR": { "eco": "B06", "name": "Pterodactyl Defense: Eastern, Anhanguera" }, "rnbqk1nr/pp1pppbp/6p1/2pP4/4P3/2N5/PPP2PPP/R1BQKBNR": { "eco": "B06", "name": "Pterodactyl Defense: Eastern, Benoni" }, "rnbqk1nr/pp1pppbp/6p1/2P5/4P3/2N5/PPP2PPP/R1BQKBNR": { "eco": "B06", "name": "Pterodactyl Defense: Eastern, Rhamphorhynchus" }, "rnb1k1nr/pp1pppbp/6p1/q1p5/2BPP3/2N2N2/PPP2PPP/R1BQK2R": { "eco": "B06", "name": "Pterodactyl Defense: Sicilian, Siroccopteryx" }, "r1bqkb1r/pppnpppp/3p1n2/8/3PPP2/2N5/PPP3PP/R1BQKBNR": { "eco": "B07", "name": "Lion Defense: Anti-Philidor" }, "r1bqkb1r/pppnpppp/3p1n2/8/3PP1P1/2N5/PPP2P1P/R1BQKBNR": { "eco": "B07", "name": "Lion Defense: Bayonet Attack" }, "rnbqk1nr/ppp1ppbp/3p2p1/8/3PP3/2P2N2/PP3PPP/RNBQKB1R": { "eco": "B07", "name": "Modern Defense: Geller's System" }, "rnbqkb1r/ppp1pppp/3p1n2/8/3PP3/2N5/PPP2PPP/R1BQKBNR": { "eco": "B07", "name": "Pirc Defense" }, "rnbqkb1r/pp2pp1p/2pp1np1/8/3PP3/2N1B3/PPPQ1PPP/R3KBNR": { "eco": "B07", "name": "Pirc Defense: 150 Attack" }, "rnbqkb1r/pp2pp1p/2pp1np1/8/3PP3/2N1B2P/PPP2PP1/R2QKBNR": { "eco": "B07", "name": "Pirc Defense: 150 Attack, Sveshnikov-Jansa Attack" }, "rnbqk2r/ppp1ppbp/3p1np1/8/3PP2P/2N5/PPP1BPP1/R1BQK1NR": { "eco": "B07", "name": "Pirc Defense: Bayonet Attack" }, "rnbqkb1r/ppp1pp1p/3p1np1/6B1/3PP3/2N5/PPP2PPP/R2QKBNR": { "eco": "B07", "name": "Pirc Defense: Byrne Variation" }, "rnbqk2r/ppp1ppbp/3p1np1/8/3PP1P1/2N5/PPP1BP1P/R1BQK1NR": { "eco": "B07", "name": "Pirc Defense: Chinese Variation" }, "rnbqkb1r/ppp1pp1p/3p1np1/8/3PP3/2N5/PPP1BPPP/R1BQK1NR": { "eco": "B07", "name": "Pirc Defense: Classical Variation" }, "rnbqkb1r/ppp1pp1p/3p1np1/8/2BPP3/2N5/PPP2PPP/R1BQK1NR": { "eco": "B07", "name": "Pirc Defense: Kholmov System" }, "rnbqkb1r/ppp1pp1p/3p1np1/8/3PP3/2N3P1/PPP2P1P/R1BQKBNR": { "eco": "B07", "name": "Pirc Defense: Sveshnikov System" }, "rnbqkb1r/ppp1pp1p/3p1np1/8/3PP3/2N2N2/PPP2PPP/R1BQKB1R": { "eco": "B08", "name": "Pirc Defense: Classical Variation" }, "rnbqk2r/ppp1ppbp/3p1np1/8/3PP3/2N2N2/PPP1BPPP/R1BQK2R": { "eco": "B08", "name": "Pirc Defense: Classical Variation, Quiet System" }, "rnbqk2r/ppp1ppbp/3p1np1/8/3PP3/2N2N1P/PPP2PP1/R1BQKB1R": { "eco": "B08", "name": "Pirc Defense: Classical Variation, Schlechter Variation" }, "rnbqkb1r/ppp1pp1p/3p1np1/8/3PPP2/2N5/PPP3PP/R1BQKBNR": { "eco": "B09", "name": "Pirc Defense: Austrian Attack" }, "rnbq1rk1/ppp1ppbp/3p1np1/8/3PPP2/2N1BN2/PPP3PP/R2QKB1R": { "eco": "B09", "name": "Pirc Defense: Austrian Attack, Kurajica Variation" }, "rnbqk2r/ppp1ppbp/3p1np1/8/2BPPP2/2N5/PPP3PP/R1BQK1NR": { "eco": "B09", "name": "Pirc Defense: Austrian Attack, Ljubojevic Variation" }, "rnbq1rk1/ppp1ppbp/3p1np1/4P3/3P1P2/2N2N2/PPP3PP/R1BQKB1R": { "eco": "B09", "name": "Pirc Defense: Austrian Attack, Unzicker Attack" }, "rnbq1rk1/pppnppbp/3p2p1/4P3/3P1P1P/2N2N2/PPP3P1/R1BQKB1R": { "eco": "B09", "name": "Pirc Defense: Austrian Attack, Unzicker Attack, Bronstein Variation" }, "rnbq1rk1/ppp1ppbp/3p1np1/8/3PPP2/2NB1N2/PPP3PP/R1BQK2R": { "eco": "B09", "name": "Pirc Defense: Austrian Attack, Weiss Variation" }, "rnbqkbnr/pp1ppppp/2p5/8/4P3/2N5/PPPP1PPP/R1BQKBNR": { "eco": "B10", "name": "Caro-Kann Defense" }, "rnbqkbnr/pp1ppppp/2p5/8/2P1P3/8/PP1P1PPP/RNBQKBNR": { "eco": "B10", "name": "Caro-Kann Defense: Accelerated Panov Attack" }, "rnbqkbnr/pp2pppp/8/3p4/4P3/1Q6/PP1P1PPP/RNB1KBNR": { "eco": "B10", "name": "Caro-Kann Defense: Accelerated Panov Attack, Van Weersel Attack" }, "rnbqkbnr/pp1ppppp/2p5/8/4P3/3P4/PPP2PPP/RNBQKBNR": { "eco": "B10", "name": "Caro-Kann Defense: Breyer Variation" }, "rnbq1rk1/pp2npbp/2p3p1/3pp3/1P2P3/3P1NP1/P1PN1PBP/R1BQ1RK1": { "eco": "B10", "name": "Caro-Kann Defense: Breyer Variation, Stein Attack" }, "rnbqkbnr/pp1ppppp/2p5/8/4P3/1P6/P1PP1PPP/RNBQKBNR": { "eco": "B10", "name": "Caro-Kann Defense: Euwe Attack" }, "rnbqkbnr/pp2pppp/2p5/3p4/4P3/2N2Q2/PPPP1PPP/R1B1KBNR": { "eco": "B10", "name": "Caro-Kann Defense: Goldman Variation" }, "rnbqkbnr/pp2pppp/2p5/6N1/4p3/2N5/PPPP1PPP/R1BQKB1R": { "eco": "B10", "name": "Caro-Kann Defense: Hector Gambit" }, "rnbqkbnr/pp1ppppp/2p5/8/2B1P3/8/PPPP1PPP/RNBQK1NR": { "eco": "B10", "name": "Caro-Kann Defense: Hillbilly Attack" }, "rnbqkbnr/pp2pppp/2p5/7Q/4p3/1B6/PPPP1PPP/RNB1K1NR": { "eco": "B10", "name": "Caro-Kann Defense: Hillbilly Attack, Schaeffer Gambit" }, "rnbqkbnr/pp2pppp/2p5/1P1p4/4P3/8/P1PP1PPP/RNBQKBNR": { "eco": "B10", "name": "Caro-Kann Defense: Labahn Attack, Double Gambit" }, "rnbqkbnr/pp1p1ppp/2p5/4p3/1P2P3/8/PBPP1PPP/RN1QKBNR": { "eco": "B10", "name": "Caro-Kann Defense: Labahn Attack, Polish Variation" }, "rnbqkbnr/pp2pppp/2p5/6B1/4p3/2NP4/PPP2PPP/R2QKBNR": { "eco": "B10", "name": "Caro-Kann Defense: Scorpion-Horus Gambit" }, "rnbqkbnr/pp1ppppp/2p5/8/4P1P1/8/PPPP1P1P/RNBQKBNR": { "eco": "B10", "name": "Caro-Kann Defense: Spike Variation" }, "rnbqkbnr/pp2pppp/2p5/8/4p1P1/2NP4/PPP2P1P/R1BQKBNR": { "eco": "B10", "name": "Caro-Kann Defense: Spike Variation, Scorpion-Grob Gambit" }, "rnbqkbnr/pp2pppp/2p5/3pP3/2P5/8/PP1P1PPP/RNBQKBNR": { "eco": "B10", "name": "Caro-Kann Defense: Toikkanen Gambit" }, "rnbqkbnr/pp2pppp/2p5/3p4/4P3/2N2N2/PPPP1PPP/R1BQKB1R": { "eco": "B10", "name": "Caro-Kann Defense: Two Knights Attack" }, "rnbqkbnr/pp2pppp/2p5/3p4/2PPP3/8/PP3PPP/RNBQKBNR": { "eco": "B10", "name": "Slav Defense: Diemer Gambit" }, "rnbqkbnr/pp1ppppp/2p5/8/3PP3/8/PPP2PPP/RNBQKBNR": { "eco": "B12", "name": "Caro-Kann Defense" }, "rnbqkbnr/pp2pppp/2p5/3pP3/3P4/8/PPP2PPP/RNBQKBNR": { "eco": "B12", "name": "Caro-Kann Defense: Advance Variation" }, "rn1qkbnr/pp2pppp/2p5/3pPb2/3P2P1/8/PPP2P1P/RNBQKBNR": { "eco": "B12", "name": "Caro-Kann Defense: Advance Variation, Bayonet Attack" }, "rn1qkbnr/pp2pppp/2p5/3pPb2/3P4/8/PPP1NPPP/RNBQKB1R": { "eco": "B12", "name": "Caro-Kann Defense: Advance Variation, Bronstein Variation" }, "rn1qkbnr/pp2pppp/2p5/3pPb2/1P1P4/8/P1P2PPP/RNBQKBNR": { "eco": "B12", "name": "Caro-Kann Defense: Advance Variation, Prins Attack" }, "rn1qkbnr/pp2pppp/2p5/3pPb2/3P4/5N2/PPP2PPP/RNBQKB1R": { "eco": "B12", "name": "Caro-Kann Defense: Advance Variation, Short Variation" }, "rn1qkbnr/pp2pppp/2p5/3pPb2/3P3P/8/PPP2PP1/RNBQKBNR": { "eco": "B12", "name": "Caro-Kann Defense: Advance Variation, Tal Variation" }, "rn1qkbnr/pp2pppp/2p5/3pPb2/3P4/2N5/PPP2PPP/R1BQKBNR": { "eco": "B12", "name": "Caro-Kann Defense: Advance Variation, Van der Wiel Attack" }, "rn1qkbnr/pp3ppp/4p1b1/2ppP3/3P2PP/2N5/PPP1NP2/R1BQKB1R": { "eco": "B12", "name": "Caro-Kann Defense: Advance Variation, Van der Wiel Attack" }, "rn1qkbnr/pp3ppp/2p1p3/3pPb2/3P4/2P5/PP2BPPP/RNBQK1NR": { "eco": "B12", "name": "Caro-Kann Defense: Advance, Short Variation" }, "rnbqkbnr/pp2pppp/2p5/3p4/3PP3/5P2/PPP3PP/RNBQKBNR": { "eco": "B12", "name": "Caro-Kann Defense: Maróczy Variation" }, "rnbqkbnr/pp3ppp/2p5/8/2BpP3/5N2/PPP3PP/RNBQK2R": { "eco": "B12", "name": "Caro-Kann Defense: Maróczy Variation, Maróczy Gambit" }, "rnbqkb1r/pp1npppp/2p1P3/3p4/3P4/3B4/PPP2PPP/RNBQK1NR": { "eco": "B12", "name": "Caro-Kann Defense: Mieses Attack, Landau Gambit" }, "rnbqkbnr/pp2pppp/2p5/3p4/3PP3/4B3/PPP2PPP/RN1QKBNR": { "eco": "B12", "name": "Caro-Kann Defense: Mieses Gambit" }, "rnbqkbnr/pp2pppp/2p5/3p4/3PP3/8/PPPN1PPP/R1BQKBNR": { "eco": "B12", "name": "Caro-Kann Defense: Modern Variation" }, "rnbqkbnr/pp2pppp/2p5/6N1/3Pp3/8/PPP2PPP/RNBQKB1R": { "eco": "B12", "name": "Caro-Kann Defense: Ulysses Gambit" }, "rnbqkbnr/pp2pppp/2p5/3P4/3P4/8/PPP2PPP/RNBQKBNR": { "eco": "B13", "name": "Caro-Kann Defense: Exchange Variation" }, "rnbqkbnr/pp2pppp/8/3p4/3P2P1/8/PPP2P1P/RNBQKBNR": { "eco": "B13", "name": "Caro-Kann Defense: Exchange Variation, Bulla Attack" }, "r1bqkb1r/pp2pppp/2n2n2/3p4/3P1B2/2PB4/PP3PPP/RN1QK1NR": { "eco": "B13", "name": "Caro-Kann Defense: Exchange Variation, Rubinstein Variation" }, "rnbqkbnr/pp2pppp/8/3p4/2PP4/8/PP3PPP/RNBQKBNR": { "eco": "B13", "name": "Caro-Kann Defense: Panov Attack" }, "rnbqkb1r/pp2pppp/5n2/3p4/2PP4/2N5/PP3PPP/R1BQKBNR": { "eco": "B13", "name": "Caro-Kann Defense: Panov Attack" }, "rnbqkb1r/pp2pppp/5n2/2Pp4/3P4/8/PP3PPP/RNBQKBNR": { "eco": "B13", "name": "Caro-Kann Defense: Panov Attack, Gunderam Attack" }, "rnbqkbnr/pp2pppp/2p5/3p4/3PP3/2N5/PPP2PPP/R1BQKBNR": { "eco": "B15", "name": "Caro-Kann Defense" }, "rnbqkb1r/pp2pppp/2p2n2/8/3PN3/3B4/PPP2PPP/R1BQK1NR": { "eco": "B15", "name": "Caro-Kann Defense: Alekhine Gambit" }, "rnbqkb1r/pp3ppp/2p2p2/8/2BP4/8/PPP2PPP/R1BQK1NR": { "eco": "B15", "name": "Caro-Kann Defense: Forgacs Variation" }, "rnbqkbnr/pp2pppp/2p5/8/3PN3/8/PPP2PPP/R1BQKBNR": { "eco": "B15", "name": "Caro-Kann Defense: Main Line" }, "rnbqkbnr/pp2pppp/2p5/8/3Pp3/2N2P2/PPP3PP/R1BQKBNR": { "eco": "B15", "name": "Caro-Kann Defense: Rasa-Studier Gambit" }, "rnbqkbnr/pp2pppp/2p5/8/2BPp3/2N5/PPP2PPP/R1BQK1NR": { "eco": "B15", "name": "Caro-Kann Defense: von Hennig Gambit" }, "r1bqk2r/pp1n1pp1/2pbp2p/8/3PQ3/3B1N2/PPP2PPP/R1B1K2R": { "eco": "B17", "name": "Caro-Kann Defense: Karpov Variation, Modern Main Line" }, "r1bqkbnr/pp1npppp/2p5/6N1/3P4/8/PPP2PPP/R1BQKBNR": { "eco": "B17", "name": "Caro-Kann Defense: Karpov Variation, Modern Variation" }, "r1bqkb1r/pp1npppp/2p2n2/8/3P4/5NN1/PPP2PPP/R1BQKB1R": { "eco": "B17", "name": "Caro-Kann Defense: Karpov Variation, Modern Variation, Kasparov Attack" }, "r1bqkb1r/pp3ppp/1np1pn2/6N1/3P4/1B6/PPP1QPPP/R1B1K1NR": { "eco": "B17", "name": "Caro-Kann Defense: Karpov Variation, Smyslov Variation, Main Line" }, "rn1qkbnr/pp2pppp/2p3b1/8/3P4/6NN/PPP2PPP/R1BQKB1R": { "eco": "B18", "name": "Caro-Kann Defense: Classical Variation, Flohr Variation" }, "rn1qkbnr/pp2pppp/2p3b1/8/3P3P/6N1/PPP2PP1/R1BQKBNR": { "eco": "B18", "name": "Caro-Kann Defense: Classical Variation, Main Line" }, "rn1qkbnr/pp2pppp/2p3b1/8/3P1P2/6N1/PPP3PP/R1BQKBNR": { "eco": "B18", "name": "Caro-Kann Defense: Classical Variation, Maróczy Attack" }, "r2qkbnr/pp1nppp1/2p3bp/7P/3P4/5NN1/PPP2PP1/R1BQKB1R": { "eco": "B19", "name": "Caro-Kann Defense: Classical Variation, Spassky Variation" }, "rnbqkbnr/pp2pppp/8/2pp4/4P3/1P6/PBPP1PPP/RN1QKBNR": { "eco": "B20", "name": "Caro-Kann Defense: Euwe Attack, Prins Gambit" }, "rnbqkbnr/pp1ppppp/8/2p5/4P1Q1/8/PPPP1PPP/RNB1KBNR": { "eco": "B20", "name": "Sicilian Defense: Amazon Attack" }, "r1bqkbnr/pp2pppp/2np4/2p5/4PP2/2PP4/PP4PP/RNBQKBNR": { "eco": "B20", "name": "Sicilian Defense: Big Clamp Formation" }, "rnbqkbnr/pp1ppppp/8/2p5/2B1P3/8/PPPP1PPP/RNBQK1NR": { "eco": "B20", "name": "Sicilian Defense: Bowdler Attack" }, "rnbqkbnr/pp1ppppp/8/2p5/4P3/7N/PPPP1PPP/RNBQKB1R": { "eco": "B20", "name": "Sicilian Defense: Brick Variation" }, "rnbqkbnr/pp1ppppp/8/2p5/4P1P1/8/PPPP1P1P/RNBQKBNR": { "eco": "B20", "name": "Sicilian Defense: Grob Variation" }, "rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPPNPPP/RNBQKB1R": { "eco": "B20", "name": "Sicilian Defense: Keres Variation" }, "rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPPKPPP/RNBQ1BNR": { "eco": "B20", "name": "Sicilian Defense: King David's Opening" }, "rnbqkbnr/pp1ppppp/8/2p5/4P3/N7/PPPP1PPP/R1BQKBNR": { "eco": "B20", "name": "Sicilian Defense: Kronberger Variation" }, "r1bqkbnr/pp1ppppp/2n5/8/2BpP3/N7/PPP2PPP/R1BQK1NR": { "eco": "B20", "name": "Sicilian Defense: Kronberger Variation, Nemeth Gambit" }, "rnbqkbnr/pp1ppppp/8/2p5/4P3/6P1/PPPP1P1P/RNBQKBNR": { "eco": "B20", "name": "Sicilian Defense: Lasker-Dunne Attack" }, "rnbqkbnr/pp1ppppp/8/2p5/4P3/P7/1PPP1PPP/RNBQKBNR": { "eco": "B20", "name": "Sicilian Defense: Mengarini Variation" }, "rnbqkbnr/pp1ppppp/8/2p5/P3P3/8/1PPP1PPP/RNBQKBNR": { "eco": "B20", "name": "Sicilian Defense: Myers Attack" }, "rnbqkbnr/pp1ppppp/8/2p5/4P2P/8/PPPP1PP1/RNBQKBNR": { "eco": "B20", "name": "Sicilian Defense: Myers Attack" }, "rnbqkbnr/pp1ppppp/8/2p5/4P3/1P6/P1PP1PPP/RNBQKBNR": { "eco": "B20", "name": "Sicilian Defense: Snyder Variation" }, "rnbqkbnr/pp1ppppp/8/2p5/2P1P3/8/PP1P1PPP/RNBQKBNR": { "eco": "B20", "name": "Sicilian Defense: Staunton-Cochrane Variation" }, "rnbqkbnr/pp1ppppp/8/2p5/1P2P3/8/P1PP1PPP/RNBQKBNR": { "eco": "B20", "name": "Sicilian Defense: Wing Gambit" }, "rnbqkbnr/pp1ppppp/8/8/1p2P3/8/PBPP1PPP/RN1QKBNR": { "eco": "B20", "name": "Sicilian Defense: Wing Gambit, Abrahams Variation" }, "rnb1kbnr/pp2pppp/8/3q4/1p6/P7/1BPP1PPP/RN1QKBNR": { "eco": "B20", "name": "Sicilian Defense: Wing Gambit, Marienbad Variation" }, "rnbqkbnr/pp1ppppp/8/8/1p2P3/P7/2PP1PPP/RNBQKBNR": { "eco": "B20", "name": "Sicilian Defense: Wing Gambit, Marshall Variation" }, "rnb1kbnr/pp3ppp/4q3/4p3/1pP5/P2B1N2/3P1PPP/RNBQK2R": { "eco": "B20", "name": "Sicilian Defense: Wing Gambit, Nanu Gambit" }, "rnbqkbnr/pp1ppppp/8/8/1pP1P3/8/P2P1PPP/RNBQKBNR": { "eco": "B20", "name": "Sicilian Defense: Wing Gambit, Santasiere Variation" }, "r1bqkb1r/pp1ppppp/2n2n2/8/2B1P3/8/PPP2PPP/RNBQK1NR": { "eco": "B21", "name": "Sicilian Defense: Coles Sicilian Gambit" }, "rnbqkbnr/pp1ppppp/8/8/3pPP2/8/PPP3PP/RNBQKBNR": { "eco": "B21", "name": "Sicilian Defense: Halasz Gambit" }, "rnbqkbnr/pp1ppppp/8/2p5/4PP2/8/PPPP2PP/RNBQKBNR": { "eco": "B21", "name": "Sicilian Defense: McDonnell Attack" }, "rnbqkbnr/pp1ppppp/8/8/3pP3/5N2/PPP2PPP/RNBQKB1R": { "eco": "B21", "name": "Sicilian Defense: Morphy Gambit" }, "rnbqkbnr/pp1p1ppp/8/4p3/3pP3/2P2N2/PP3PPP/RNBQKB1R": { "eco": "B21", "name": "Sicilian Defense: Morphy Gambit, Andreaschek Gambit" }, "rnbqkbnr/pp1ppppp/8/2p5/3PP3/8/PPP2PPP/RNBQKBNR": { "eco": "B21", "name": "Sicilian Defense: Smith-Morra Gambit" }, "rnbqkbnr/pp1ppppp/8/8/3pP3/2P5/PP3PPP/RNBQKBNR": { "eco": "B21", "name": "Sicilian Defense: Smith-Morra Gambit" }, "rnbqkbnr/pp1ppppp/8/8/2P1P3/3p4/PP3PPP/RNBQKBNR": { "eco": "B21", "name": "Sicilian Defense: Smith-Morra Gambit Declined, Dubois Variation" }, "rnbqkbnr/pp1ppppp/8/8/4P3/2p2N2/PP3PPP/RNBQKB1R": { "eco": "B21", "name": "Sicilian Defense: Smith-Morra Gambit, Danish Variation" }, "rnbqkbnr/pp1ppppp/8/2p5/4P3/2P5/PP1P1PPP/RNBQKBNR": { "eco": "B22", "name": "Sicilian Defense: Alapin Variation" }, "r1b1k1nr/pp3ppp/2n5/3qp3/1b1P4/2N2N2/PP2BPPP/R1BQK2R": { "eco": "B22", "name": "Sicilian Defense: Alapin Variation, Barmen Defense, Milner-Barry Attack" }, "r1bqkb1r/pp1ppppp/1nn5/2p1P3/8/1BP2N2/PP1P1PPP/RNBQK2R": { "eco": "B22", "name": "Sicilian Defense: Alapin Variation, Stoltz Attack" }, "r1bqkb1r/pp1ppppp/2n5/2pnP3/8/N1P2N2/PP1P1PPP/R1BQKB1R": { "eco": "B22", "name": "Sicilian Defense: Heidenfeld Variation" }, "rnbqkbnr/pp1ppppp/8/2p5/4P3/2N5/PPPP1PPP/R1BQKBNR": { "eco": "B23", "name": "Sicilian Defense: Closed" }, "rnbqkbnr/pp1p1ppp/4p3/2p5/4P3/2N3P1/PPPP1P1P/R1BQKBNR": { "eco": "B23", "name": "Sicilian Defense: Closed" }, "r1bqkbnr/pp1ppppp/2n5/2p5/4P3/2N5/PPPPNPPP/R1BQKB1R": { "eco": "B23", "name": "Sicilian Defense: Closed, Chameleon Variation" }, "r1bqkbnr/pp1ppppp/2n5/2p5/4P1P1/2N5/PPPP1P1P/R1BQKBNR": { "eco": "B23", "name": "Sicilian Defense: Closed, Grob Attack" }, "r1bqkbnr/pp1ppppp/2n5/2p5/4PP2/2N5/PPPP2PP/R1BQKBNR": { "eco": "B23", "name": "Sicilian Defense: Grand Prix Attack" }, "r1bqk1nr/pp1p1pbp/2n1p1p1/2p2P2/2B1P3/2N2N2/PPPP2PP/R1BQK2R": { "eco": "B23", "name": "Sicilian Defense: Grand Prix Attack, Schofman Variation" }, "r1bqkbnr/pp1ppppp/2n5/2p5/4P3/2N3P1/PPPP1P1P/R1BQKBNR": { "eco": "B24", "name": "Sicilian Defense: Closed, Fianchetto Variation" }, "r1bqk1nr/pp1p1pbp/4p1p1/2p5/3nP3/3PB1P1/PPP1NPBP/R2QK1NR": { "eco": "B24", "name": "Sicilian Defense: Closed, Smyslov Variation" }, "r1bqk1nr/pp2ppbp/2np2p1/2p5/4PP2/2NP2P1/PPP3BP/R1BQK1NR": { "eco": "B25", "name": "Sicilian Defense: Closed" }, "r1bqk1nr/pp2ppbp/2np2p1/2p5/4P3/2NPB1P1/PPP2PBP/R2QK1NR": { "eco": "B26", "name": "Sicilian Defense: Closed" }, "rnb1k1nr/pp1pppbp/6p1/q1p5/3PP3/2N1BN2/PPP2PPP/R2QKB1R": { "eco": "B27", "name": "Pterodactyl Defense: Sicilian, Anhanguera" }, "rnb1k1nr/pp1pppbp/6p1/q1pP4/4P3/2N2N2/PPP2PPP/R1BQKB1R": { "eco": "B27", "name": "Pterodactyl Defense: Sicilian, Benoni Gambit" }, "rnb1k1nr/pp1ppp1p/6p1/q1P5/4P3/2P2N2/P1P2PPP/R1BQKB1R": { "eco": "B27", "name": "Pterodactyl Defense: Sicilian, Pteranodon" }, "rnb1k1nr/pp1pppbp/6p1/q1P5/4P3/2N2N2/PPP2PPP/R1BQKB1R": { "eco": "B27", "name": "Pterodactyl Defense: Sicilian, Rhamporhynchus" }, "rnb1k1nr/pp1pppbp/6p1/q1p5/3PP3/2N2N2/PPPB1PPP/R2QKB1R": { "eco": "B27", "name": "Pterodactyl Defense: Sicilian, Unpin" }, "rnbqkbnr/pp1ppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R": { "eco": "B27", "name": "Sicilian Defense" }, "rnbqkbnr/pp1ppp1p/6p1/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R": { "eco": "B27", "name": "Sicilian Defense: Hyperaccelerated Fianchetto" }, "rnbqkbnr/1p1ppppp/p7/2p5/4P3/5N2/PPPPBPPP/RNBQK2R": { "eco": "B28", "name": "Sicilian Defense: O'Kelly Variation, Aronin System" }, "rnbqkbnr/1p1ppppp/p7/2p5/4P3/1P3N2/P1PP1PPP/RNBQKB1R": { "eco": "B28", "name": "Sicilian Defense: O'Kelly Variation, Kieseritzky System" }, "rnbqkbnr/1p1ppppp/p7/2p5/2P1P3/5N2/PP1P1PPP/RNBQKB1R": { "eco": "B28", "name": "Sicilian Defense: O'Kelly Variation, Maróczy Bind" }, "rnbqkbnr/1p1ppppp/p7/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R": { "eco": "B28", "name": "Sicilian Defense: O'Kelly Variation, Normal System" }, "rnbqkbnr/1p1ppppp/p7/8/2BpP3/5N2/PPP2PPP/RNBQK2R": { "eco": "B28", "name": "Sicilian Defense: O'Kelly Variation, Normal System, Cortlever Gambit" }, "rnbqkbnr/1p1ppppp/p7/8/3pP3/2P2N2/PP3PPP/RNBQKB1R": { "eco": "B28", "name": "Sicilian Defense: O'Kelly Variation, Normal System, Smith-Morra Line" }, "rnbqkbnr/1p1ppppp/p7/8/3QP3/5N2/PPP2PPP/RNB1KB1R": { "eco": "B28", "name": "Sicilian Defense: O'Kelly Variation, Normal System, Zagorovsky Line" }, "rnbqkbnr/1p1ppppp/p7/2p5/4P3/3P1N2/PPP2PPP/RNBQKB1R": { "eco": "B28", "name": "Sicilian Defense: O'Kelly Variation, Quiet System" }, "rnbqkbnr/1p1ppppp/p7/2p5/4P3/5NP1/PPPP1P1P/RNBQKB1R": { "eco": "B28", "name": "Sicilian Defense: O'Kelly Variation, Réti System" }, "rnbqkbnr/1p1ppppp/p7/2p5/4P3/2P2N2/PP1P1PPP/RNBQKB1R": { "eco": "B28", "name": "Sicilian Defense: O'Kelly Variation, Venice System" }, "rnbqkbnr/1p1ppppp/p7/2p5/1P2P3/5N2/P1PP1PPP/RNBQKB1R": { "eco": "B28", "name": "Sicilian Defense: O'Kelly Variation, Wing Gambit" }, "rnbqkbnr/1p1ppppp/p7/2p5/4P3/2N2N2/PPPP1PPP/R1BQKB1R": { "eco": "B28", "name": "Sicilian Defense: O'Kelly Variation, Yerevan System" }, "rnbqkb1r/pp1ppppp/5n2/2p1P3/8/5N2/PPPP1PPP/RNBQKB1R": { "eco": "B29", "name": "Sicilian Defense: Nimzowitsch Variation, Advance Variation" }, "rnbqkb1r/pp1ppppp/5n2/2p5/4P3/2N2N2/PPPP1PPP/R1BQKB1R": { "eco": "B29", "name": "Sicilian Defense: Nimzowitsch Variation, Closed Variation" }, "r1bqkbnr/pp1ppppp/2n5/1Bp5/4P3/5N2/PPPP1PPP/RNBQK2R": { "eco": "B30", "name": "Sicilian Defense: Nyezhmetdinov-Rossolimo Attack" }, "r1bqkbnr/pp1ppppp/8/nBp5/1P2P3/5N2/P1PP1PPP/RNBQK2R": { "eco": "B30", "name": "Sicilian Defense: Nyezhmetdinov-Rossolimo Attack, San Francisco Gambit" }, "r1bqk1nr/pp1p1pbp/2n3p1/1Bp1p3/3PP3/2P2N2/PP3PPP/RNBQ1RK1": { "eco": "B31", "name": "Sicilian Defense: Nyezhmetdinov-Rossolimo Attack, Fianchetto Variation, Gufeld Gambit" }, "r1bqk2r/pp1pppbp/2n2np1/1Bp5/3PP3/2P2N2/PP3PPP/RNBQ1RK1": { "eco": "B31", "name": "Sicilian Defense: Nyezhmetdinov-Rossolimo Attack, Fianchetto Variation, Lutikov Gambit" }, "r1bqk2r/pp1pppbp/2n2np1/1Bp5/Q3P3/2P2N2/PP1P1PPP/RNB2RK1": { "eco": "B31", "name": "Sicilian Defense: Nyezhmetdinov-Rossolimo Attack, Fianchetto Variation, Totsky Attack" }, "r1bqk1nr/pp1p1pbp/2n3p1/1Bp1p3/1P2P3/5N2/P1PP1PPP/RNBQR1K1": { "eco": "B31", "name": "Sicilian Defense: Nyezhmetdinov-Rossolimo Attack, Gurgenidze Variation" }, "r1bqkbnr/pp1ppppp/2n5/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R": { "eco": "B32", "name": "Sicilian Defense: Open" }, "r1bqkbnr/pp1ppppp/2n5/8/3NP3/8/PPP2PPP/RNBQKB1R": { "eco": "B32", "name": "Sicilian Defense: Open" }, "r1bqkb1r/pp1p1ppp/2N2n2/4p3/4P3/2N5/PPP2PPP/R1BQKB1R": { "eco": "B33", "name": "Sicilian Defense: Lasker-Pelikan Variation, Exchange Variation" }, "r1bqkb1r/pp1p1ppp/2n2n2/4p3/4P3/2N2N2/PPP2PPP/R1BQKB1R": { "eco": "B33", "name": "Sicilian Defense: Lasker-Pelikan Variation, Retreat Variation" }, "r1bqkb1r/pp1p1ppp/2n2n2/4p3/4P3/1NN5/PPP2PPP/R1BQKB1R": { "eco": "B33", "name": "Sicilian Defense: Lasker-Pelikan Variation, Schlechter Variation" }, "r1bqkb1r/5ppp/p1np1n2/1p1Np1B1/4P3/N7/PPP2PPP/R2QKB1R": { "eco": "B33", "name": "Sicilian Defense: Lasker-Pelikan Variation, Sveshnikov Variation, Chelyabinsk Variation" }, "r1bqkb1r/5p1p/p1np4/1B1Npp2/4P3/N7/PPP2PPP/R2QK2R": { "eco": "B33", "name": "Sicilian Defense: Lasker-Pelikan Variation, Sveshnikov Variation, Peresypkin's Sacrifice" }, "r1bqkbnr/pp1ppp1p/2N3p1/8/4P3/8/PPP2PPP/RNBQKB1R": { "eco": "B34", "name": "Sicilian Defense: Accelerated Dragon, Exchange Variation" }, "r1bqkbnr/pp1ppp1p/2n3p1/8/3NP3/2N5/PPP2PPP/R1BQKB1R": { "eco": "B34", "name": "Sicilian Defense: Accelerated Dragon, Modern Variation" }, "r1bqk2r/pp1pppbp/2n2np1/8/2BNP3/2N1B3/PPP2PPP/R2QK2R": { "eco": "B35", "name": "Sicilian Defense: Accelerated Dragon, Modern Bc4 Variation" }, "r1bqkbnr/pp1ppp1p/2n3p1/8/2PNP3/8/PP3PPP/RNBQKB1R": { "eco": "B36", "name": "Sicilian Defense: Accelerated Dragon, Maróczy Bind" }, "r1bqk1nr/pp1pppbp/2n3p1/8/2PNP3/4B3/PP3PPP/RN1QKB1R": { "eco": "B38", "name": "Sicilian Defense: Accelerated Dragon, Maróczy Bind" }, "rnbqkbnr/pp1p1ppp/4p3/2p5/4P3/2P2N2/PP1P1PPP/RNBQKB1R": { "eco": "B40", "name": "Sicilian Defense: Delayed Alapin Variation" }, "r1bqkb1r/pp1p1ppp/2N1pn2/8/4P3/2N5/PPP2PPP/R1BQKB1R": { "eco": "B40", "name": "Sicilian Defense: Four Knights Variation, Exchange Variation" }, "rnbqkbnr/pp1p1ppp/4p3/2p5/4P3/1P3N2/P1PP1PPP/RNBQKB1R": { "eco": "B40", "name": "Sicilian Defense: French Variation, Westerinen Attack" }, "rnbqkbnr/3p1ppp/p3p3/1p6/3NP3/2N3P1/PPP2P1P/R1BQKB1R": { "eco": "B40", "name": "Sicilian Defense: Kan Variation, Wing Attack, Fianchetto Variation" }, "rnbqkbnr/pp1p1ppp/4p3/2p5/2P1P3/5N2/PP1P1PPP/RNBQKB1R": { "eco": "B40", "name": "Sicilian Defense: Kramnik Variation" }, "rnbqk2r/pp1p1ppp/4pn2/4P3/1b1N4/2N5/PPP2PPP/R1BQKB1R": { "eco": "B40", "name": "Sicilian Defense: Pin Variation, Koch Variation" }, "rnbqkbnr/pp1p1ppp/4p3/8/3pP3/2P2N2/PP3PPP/RNBQKB1R": { "eco": "B40", "name": "Sicilian Defense: Smith-Morra Gambit Deferred" }, "rnbqkbnr/pp1p1ppp/4p3/2p5/1P2P3/5N2/P1PP1PPP/RNBQKB1R": { "eco": "B40", "name": "Sicilian Defense: Wing Gambit Deferred" }, "r1bqk2r/1p1p1ppp/p1n1pn2/8/1bPNP3/2N5/PPB2PPP/R1BQK2R": { "eco": "B41", "name": "Sicilian Defense: Kan Variation, Maróczy Bind, Bronstein Variation" }, "rnbqkbnr/1p1p1ppp/p3p3/8/2PNP3/8/PP3PPP/RNBQKB1R": { "eco": "B41", "name": "Sicilian Defense: Kan Variation, Maróczy Bind, Réti Variation" }, "rnbqkbnr/1p1p1ppp/p3p3/8/3NP3/3B4/PPP2PPP/RNBQK2R": { "eco": "B42", "name": "Sicilian Defense: Kan Variation, Modern Variation" }, "rnbqkbnr/1p1p1ppp/p3p3/8/3NP3/2N5/PPP2PPP/R1BQKB1R": { "eco": "B43", "name": "Sicilian Defense: Kan Variation, Knight Variation" }, "rnb1k1nr/3p1ppp/pq2p3/1pb5/3NP1Q1/2NBB3/PPP2PPP/R3K2R": { "eco": "B43", "name": "Sicilian Defense: Kan Variation, Wing Attack, Christiansen's Dream" }, "rnb1kbnr/3p1ppp/pq2p3/1p6/4P3/2NB1N2/PPP2PPP/R1BQK2R": { "eco": "B43", "name": "Sicilian Defense: Kan Variation, Wing Attack, Spraggett Attack" }, "r1bqkbnr/pp1p1ppp/2n1p3/1N6/4P3/8/PPP2PPP/RNBQKB1R": { "eco": "B44", "name": "Sicilian Defense: Paulsen Variation, Szén Variation" }, "r1bqk2r/pp1p1ppp/2nNpn2/8/1b2P3/2N5/PPP2PPP/R1BQKB1R": { "eco": "B45", "name": "Sicilian Defense: Paulsen Variation, American Attack" }, "r1bqkbnr/pp1p1ppp/2n1p3/8/3NP3/2N5/PPP2PPP/R1BQKB1R": { "eco": "B45", "name": "Sicilian Defense: Paulsen Variation, Normal Variation" }, "rqb1kbnr/1p1p1ppp/pBn1p3/1N6/4P3/2N5/PPP2PPP/R2QKB1R": { "eco": "B47", "name": "Sicilian Defense: Paulsen Variation, Bastrikov Variation, Ponomariov Gambit" }, "r1b1kbnr/ppqp1ppp/2n1p3/8/3NP3/2N1B3/PPP2PPP/R2QKB1R": { "eco": "B48", "name": "Sicilian Defense: Paulsen Variation, Bastrikov Variation" }, "r1b1kbnr/1pqp1ppp/p1n1p3/8/3NP3/2N1BP2/PPP3PP/R2QKB1R": { "eco": "B48", "name": "Sicilian Defense: Paulsen Variation, Bastrikov Variation, English Attack" }, "r1b1kbnr/1pqp1ppp/p1n1p3/8/3NP3/2N1B3/PPPQ1PPP/R3KB1R": { "eco": "B48", "name": "Sicilian Defense: Paulsen Variation, Bastrikov Variation, English Attack" }, "r1b1kbnr/1pqp1ppp/p1n1p3/8/3NP3/2N1B3/PPP1BPPP/R2QK2R": { "eco": "B49", "name": "Sicilian Defense: Paulsen Variation, Bastrikov Variation" }, "rnbqkbnr/pp2pppp/3p4/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R": { "eco": "B50", "name": "Sicilian Defense" }, "rnbqkbnr/pp2pppp/3p4/2p5/4P3/2P2N2/PP1P1PPP/RNBQKB1R": { "eco": "B50", "name": "Sicilian Defense: Delayed Alapin" }, "r1b1kb1r/pp2pppp/2np4/q2P4/8/2P2N2/P3BPPP/R1BQK2R": { "eco": "B50", "name": "Sicilian Defense: Delayed Alapin, Basman-Palatnik Double Gambit" }, "rnbqkbnr/pp2pppp/3p4/8/3pP3/2P2N2/PP3PPP/RNBQKB1R": { "eco": "B50", "name": "Sicilian Defense: Modern Variations, Tartakower" }, "rnbqkbnr/pp2pppp/3p4/2p5/1P2P3/5N2/P1PP1PPP/RNBQKB1R": { "eco": "B50", "name": "Sicilian Defense: Wing Gambit, Deferred Variation" }, "r2qkbnr/pp1bpp1p/2np2p1/1Bp1P3/8/5N2/PPPPQPPP/RNB2RK1": { "eco": "B51", "name": "Sicilian Defense: Canal Attack, Dorfman Gambit" }, "r2qkb1r/1p2pppp/p2p1n2/2p3B1/3Pb3/2P2N2/PP3PPP/RN1QR1K1": { "eco": "B51", "name": "Sicilian Defense: Canal Attack, Moscow Gambit" }, "rnbqkbnr/pp2pppp/3p4/1Bp5/4P3/5N2/PPPP1PPP/RNBQK2R": { "eco": "B51", "name": "Sicilian Defense: Moscow Variation" }, "r3kb1r/pp1qpppp/2np1n2/2p5/3PP3/2P2N2/PP3PPP/RNBQ1RK1": { "eco": "B52", "name": "Sicilian Defense: Canal Attack, Haag Gambit" }, "rn2kbnr/pp1qpppp/3p4/2p5/2P1P3/5N2/PP1P1PPP/RNBQK2R": { "eco": "B52", "name": "Sicilian Defense: Moscow Variation, Sokolsky Variation" }, "rnbqkbnr/pp2pppp/3p4/8/3QP3/5N2/PPP2PPP/RNB1KB1R": { "eco": "B53", "name": "Sicilian Defense: Chekhover Variation" }, "rnbqkb1r/pp2pppp/3p1n2/8/3NP3/5P2/PPP3PP/RNBQKB1R": { "eco": "B54", "name": "Sicilian Defense: Prins Variation" }, "rnbqkb1r/pp3ppp/3p1n2/1B2p3/3NP3/5P2/PPP3PP/RNBQK2R": { "eco": "B55", "name": "Sicilian Defense: Prins Variation, Venice Attack" }, "r1bqkb1r/pp2pppp/2np1n2/8/3NP3/2N3P1/PPP2P1P/R1BQKB1R": { "eco": "B56", "name": "Sicilian Defense: Classical Variation, Fianchetto Variation" }, "rnbqkb1r/pp2pppp/3p1n2/8/3NP3/2N5/PPP2PPP/R1BQKB1R": { "eco": "B56", "name": "Sicilian Defense: Modern Variations" }, "r1bqkb1r/pp2pppp/2np1n2/8/4P3/2N5/PPP1NPPP/R1BQKB1R": { "eco": "B56", "name": "Sicilian Defense: Spielmann Variation" }, "rnbqkb1r/pp3ppp/3p1n2/1B2p3/3NP3/2N5/PPP2PPP/R1BQK2R": { "eco": "B56", "name": "Sicilian Defense: Venice Attack" }, "r1bqkb1r/pp2pppp/2np1n2/8/3NP3/2NB4/PPP2PPP/R1BQK2R": { "eco": "B56", "name": "Sicilian Defense: Yates Variation" }, "r1bqkb1r/p3pp1p/2pp1np1/4P3/2B5/2N5/PPP2PPP/R1BQK2R": { "eco": "B57", "name": "Sicilian Defense: Magnus Smith Trap" }, "r1bqkb1r/pp2pppp/2np1n2/8/2BNP3/2N5/PPP2PPP/R1BQK2R": { "eco": "B57", "name": "Sicilian Defense: Sozin, not Scheveningen" }, "r1bqkb1r/pp3ppp/2Np1n2/4p3/4P3/2N5/PPP1BPPP/R1BQK2R": { "eco": "B58", "name": "Sicilian Defense: Boleslavsky Variation, Louma Variation" }, "r1bqkb1r/pp2pppp/2np1n2/8/3NP3/2N5/PPP1BPPP/R1BQK2R": { "eco": "B58", "name": "Sicilian Defense: Classical Variation" }, "r1bqkb1r/pp3ppp/2np1n2/4p3/4P3/1NN5/PPP1BPPP/R1BQK2R": { "eco": "B59", "name": "Sicilian Defense: Boleslavsky Variation" }, "r1bqkb1r/pp2pppp/2np1n2/6B1/3NP3/2N5/PPP2PPP/R2QKB1R": { "eco": "B60", "name": "Sicilian Defense: Richter-Rauzer Variation" }, "r2qkb1r/pp1bpppp/2np1n2/6B1/3NP3/2N5/PPPQ1PPP/R3KB1R": { "eco": "B61", "name": "Sicilian Defense: Richter-Rauzer Variation, Modern Variation" }, "r1bqkb1r/pp3ppp/2nppn2/6B1/3NP3/2NQ4/PPP2PPP/R3KB1R": { "eco": "B62", "name": "Sicilian Defense: Richter-Rauzer Variation" }, "r1bqkb1r/pp3ppp/2Nppn2/6B1/4P3/2N5/PPP2PPP/R2QKB1R": { "eco": "B62", "name": "Sicilian Defense: Richter-Rauzer Variation, Exchange Variation" }, "r1bqkb1r/pp3ppp/2nppn2/6B1/4P3/1NN5/PPP2PPP/R2QKB1R": { "eco": "B62", "name": "Sicilian Defense: Richter-Rauzer Variation, Podebrady Variation" }, "r1bqkb1r/pp3ppp/2nppn2/1B4B1/3NP3/2N5/PPP2PPP/R2QK2R": { "eco": "B62", "name": "Sicilian Defense: Richter-Rauzer Variation, Vitolins Variation" }, "r1bqkb1r/pp3ppp/2nppn2/6B1/3NP3/2N5/PPPQ1PPP/R3KB1R": { "eco": "B63", "name": "Sicilian Defense: Richter-Rauzer Variation, Traditional Variation" }, "r1bq1rk1/pp2bppp/2nppn2/6B1/3NPP2/2N5/PPPQ2PP/2KR1B1R": { "eco": "B64", "name": "Sicilian Defense: Richter-Rauzer Variation, Classical Variation" }, "r1bq1rk1/pp2bppp/3ppn2/6B1/3QPP2/2N5/PPP3PP/2KR1B1R": { "eco": "B65", "name": "Sicilian Defense: Richter-Rauzer Variation, Classical Variation" }, "r2qk2r/3bbppp/p1nppB2/1p6/4PP2/2N2N2/PPPQ2PP/2KR1B1R": { "eco": "B69", "name": "Sicilian Defense: Richter-Rauzer Variation, Neo-Modern Variation, Nyezhmetdinov Attack" }, "rnbqkb1r/pp2pp1p/3p1np1/8/3NP3/2N5/PPP1BPPP/R1BQK2R": { "eco": "B70", "name": "Sicilian Defense: Dragon Variation, Classical Variation" }, "rnbqkb1r/pp2pp1p/3p1np1/8/3NP3/2N3P1/PPP2P1P/R1BQKB1R": { "eco": "B70", "name": "Sicilian Defense: Dragon Variation, Fianchetto Variation" }, "rnbqkb1r/pp2pp1p/3p1np1/8/3NPP2/2N5/PPP3PP/R1BQKB1R": { "eco": "B71", "name": "Sicilian Defense: Dragon Variation, Levenfish Variation" }, "rnbqkb1r/pp2pp1p/3p1np1/8/3NP3/2N1B3/PPP2PPP/R2QKB1R": { "eco": "B72", "name": "Sicilian Defense: Dragon Variation" }, "rnbqk2r/pp2ppbp/3p1np1/8/3NP3/2N1B3/PPP1BPPP/R2QK2R": { "eco": "B72", "name": "Sicilian Defense: Dragon Variation, Classical Variation" }, "r1bqk2r/pp2ppbp/2np1np1/8/4P3/1NN1B3/PPP1BPPP/R2QK2R": { "eco": "B72", "name": "Sicilian Defense: Dragon Variation, Classical Variation" }, "r1bqk2r/pp2ppbp/2np1np1/8/3NP3/2N1B3/PPPQBPPP/R3K2R": { "eco": "B72", "name": "Sicilian Defense: Dragon Variation, Classical Variation, Amsterdam Variation" }, "r1bq1rk1/pp2ppbp/2np1np1/8/3NP3/2N1B3/PPPQBPPP/2KR3R": { "eco": "B72", "name": "Sicilian Defense: Dragon Variation, Classical Variation, Grigoriev Variation" }, "r1bqk2r/pp2ppbp/2np1np1/8/3NP3/2N1B3/PPP1BPPP/R2Q1RK1": { "eco": "B73", "name": "Sicilian Defense: Dragon Variation, Classical Variation" }, "r1bq1rk1/pp2ppbp/2np1np1/8/3NP3/2N1B3/PPPQBPPP/R4RK1": { "eco": "B73", "name": "Sicilian Defense: Dragon Variation, Classical Variation, Battery Variation" }, "r1b2rk1/pp2ppbp/1qnp1np1/4P3/3N1P2/2N1B3/PPP1B1PP/R2Q1RK1": { "eco": "B73", "name": "Sicilian Defense: Dragon Variation, Classical Variation, Zollner Gambit" }, "r1bq1rk1/pp2ppbp/2np1np1/8/4P3/1NN1B3/PPP1BPPP/R2Q1RK1": { "eco": "B74", "name": "Sicilian Defense: Dragon Variation, Classical Variation, Normal Line" }, "r2q1rk1/pp2ppbp/3p1np1/n4P2/2b1P3/1NNBB3/PPP3PP/R2Q1RK1": { "eco": "B74", "name": "Sicilian Defense: Dragon Variation, Classical Variation, Spielmann Variation" }, "r4rk1/pp2ppbp/3p1np1/q4P2/4P1P1/2N1B3/PPP1Q2P/R4RK1": { "eco": "B74", "name": "Sicilian Defense: Dragon Variation, Classical Variation, Stockholm Attack" }, "rnbqk2r/pp2ppbp/3p1np1/8/3NP3/2N1BP2/PPP3PP/R2QKB1R": { "eco": "B75", "name": "Sicilian Defense: Dragon Variation, Yugoslav Attack, Early Deviations" }, "r1bq1rk1/pp2ppbp/2np1np1/8/3NP3/2N1BP2/PPPQ2PP/2KR1B1R": { "eco": "B76", "name": "Sicilian Defense: Dragon Variation, Yugoslav Attack, Modern Line" }, "r1bq1rk1/pp2ppbp/2np1np1/8/3NP1P1/2N1BP2/PPPQ3P/R3KB1R": { "eco": "B76", "name": "Sicilian Defense: Dragon Variation, Yugoslav Attack, Panov Variation" }, "r1bq1rk1/pp2ppbp/2np1np1/8/2BNP3/2N1BP2/PPPQ2PP/R3K2R": { "eco": "B77", "name": "Sicilian Defense: Dragon Variation, Yugoslav Attack, Main Line" }, "r2q1rk1/pp1bppbp/2np1np1/8/2BNP3/2N1BP2/PPPQ2PP/2KR3R": { "eco": "B78", "name": "Sicilian Defense: Dragon Variation, Yugoslav Attack" }, "r1r3k1/pp1bppbp/2np1np1/q7/3NP2P/1BN1BP2/PPPQ2P1/2KR3R": { "eco": "B79", "name": "Sicilian Defense: Dragon Variation, Yugoslav Attack" }, "rnbqkb1r/1p3ppp/p2ppn2/8/3NP3/2N1B3/PPPQ1PPP/R3KB1R": { "eco": "B80", "name": "Sicilian Defense: Scheveningen Variation, English Attack" }, "rnbqkb1r/pp3ppp/3ppn2/8/3NP3/2N3P1/PPP2P1P/R1BQKB1R": { "eco": "B80", "name": "Sicilian Defense: Scheveningen Variation, Fianchetto Variation" }, "rnbqkb1r/pp3ppp/3ppn2/1B6/3NP3/2N5/PPP2PPP/R1BQK2R": { "eco": "B80", "name": "Sicilian Defense: Scheveningen Variation, Vitolins Variation" }, "rnbqkb1r/pp3ppp/3ppn2/8/3NP1P1/2N5/PPP2P1P/R1BQKB1R": { "eco": "B81", "name": "Sicilian Defense: Scheveningen Variation, Keres Attack" }, "rnbqkb1r/pp3ppp/3ppn2/8/3NPP2/2N5/PPP3PP/R1BQKB1R": { "eco": "B82", "name": "Sicilian Defense: Scheveningen Variation, Matanovic Attack" }, "r1bqk2r/pp2bppp/2nppn2/8/3NPP2/2N1BQ2/PPP3PP/R3KB1R": { "eco": "B82", "name": "Sicilian Defense: Scheveningen Variation, Tal Variation" }, "rnbqkb1r/pp3ppp/3ppn2/8/3NP3/2N5/PPP1BPPP/R1BQK2R": { "eco": "B83", "name": "Sicilian Defense: Scheveningen Variation, Classical Variation" }, "r1bq1rk1/pp2bppp/2nppn2/8/3NPP2/2N1B3/PPP1B1PP/R2Q1RK1": { "eco": "B83", "name": "Sicilian Defense: Scheveningen Variation, Modern Variation" }, "r2q1rk1/pp1bbppp/2nppn2/8/4PP2/1NN1B3/PPP1B1PP/R2Q1RK1": { "eco": "B83", "name": "Sicilian Defense: Scheveningen Variation, Modern Variation" }, "r1b1kb1r/1pq2ppp/p1nppn2/8/3NPP2/2N1B3/PPP1B1PP/R2Q1RK1": { "eco": "B85", "name": "Sicilian Defense: Scheveningen Variation, Classical Variation, Paulsen Variation" }, "r1b1k2r/1pq1bppp/p1nppn2/8/P2NPP2/2N5/1PP1B1PP/R1BQ1R1K": { "eco": "B85", "name": "Sicilian Defense: Scheveningen Variation, Classical Variation, Paulsen Variation" }, "rnbqkb1r/pp3ppp/3ppn2/8/2BNP3/2N5/PPP2PPP/R1BQK2R": { "eco": "B86", "name": "Sicilian Defense: Sozin Attack" }, "r1bq1rk1/pp2bppp/2nppn2/8/3NPP2/1BN1B3/PPP3PP/R2QK2R": { "eco": "B88", "name": "Sicilian Defense: Sozin Attack, Fischer Variation" }, "r1bqkb1r/pp3ppp/2nppn2/8/2BNP3/2N1B3/PPP2PPP/R2QK2R": { "eco": "B89", "name": "Sicilian Defense: Sozin Attack, Main Line" }, "r1bqk2r/pp2bppp/2nppn2/8/2BNP3/2N1B3/PPP1QPPP/R3K2R": { "eco": "B89", "name": "Sicilian Defense: Velimirovic Attack" }, "rnbqkb1r/1p2pppp/p2p1n2/8/3NP3/2N4P/PPP2PP1/R1BQKB1R": { "eco": "B90", "name": "Sicilian Defense: Najdorf Variation, Adams Attack" }, "rnbqkb1r/1p2pppp/p2p1n2/8/3NP1P1/2N5/PPP2P1P/R1BQKB1R": { "eco": "B90", "name": "Sicilian Defense: Najdorf Variation, Dekker Gambit" }, "rnbqkb1r/1p2pppp/p2p1n2/8/3NP3/2N1B3/PPP2PPP/R2QKB1R": { "eco": "B90", "name": "Sicilian Defense: Najdorf Variation, English Attack" }, "rnbqkb1r/1p2pppp/p2p1n2/8/3NP3/2N5/PPP2PPP/R1BQKBR1": { "eco": "B90", "name": "Sicilian Defense: Najdorf Variation, Freak Attack" }, "rnbqkb1r/1p2pppp/p2p1n2/8/2BNP3/2N5/PPP2PPP/R1BQK2R": { "eco": "B90", "name": "Sicilian Defense: Najdorf Variation, Lipnitsky Attack" }, "rnbqkb1r/1p3ppp/p2ppn2/8/3NP1P1/2N1B3/PPP2P1P/R2QKB1R": { "eco": "B90", "name": "Sicilian Defense: Scheveningen Variation, Delayed Keres Attack" }, "rnbqkb1r/1p3p1p/p2p1np1/4pNP1/4P3/2N1B3/PPP2P1P/R2QKB1R": { "eco": "B90", "name": "Sicilian Defense: Scheveningen Variation, Delayed Keres Attack, Perenyi Gambit" }, "rnbqkb1r/1p3ppp/p2ppn2/8/3NP3/2N1BP2/PPP3PP/R2QKB1R": { "eco": "B90", "name": "Sicilian Defense: Scheveningen Variation, English Attack" }, "rnbqkb1r/1p2pppp/p2p1n2/8/3NP3/2N3P1/PPP2P1P/R1BQKB1R": { "eco": "B91", "name": "Sicilian Defense: Najdorf Variation, Zagreb (Fianchetto) Variation" }, "rnbqkb1r/1p2pppp/p2p1n2/8/3NP3/2N5/PPP1BPPP/R1BQK2R": { "eco": "B92", "name": "Sicilian Defense: Najdorf Variation, Opocensky Variation" }, "rnbqkb1r/1p2pppp/p2p1n2/8/3NPP2/2N5/PPP3PP/R1BQKB1R": { "eco": "B93", "name": "Sicilian Defense: Najdorf Variation, Amsterdam Variation" }, "rnbqkb1r/1p2pppp/p2p1n2/6B1/3NP3/2N5/PPP2PPP/R2QKB1R": { "eco": "B94", "name": "Sicilian Defense: Najdorf Variation" }, "r3kb1r/1b3ppp/p2ppn2/qpn1P1B1/3N4/1BN5/PPPQ1PPP/2KRR3": { "eco": "B94", "name": "Sicilian Defense: Najdorf Variation, Ivkov Variation" }, "rnbqkb1r/1p3ppp/p2ppn2/6B1/3NPP2/2N5/PPP3PP/R2QKB1R": { "eco": "B96", "name": "Sicilian Defense: Najdorf Variation" }, "rnb1kb1r/2q2ppp/p3pn2/1p2P1B1/3N4/2N5/PPP1Q1PP/R3KB1R": { "eco": "B96", "name": "Sicilian Defense: Najdorf Variation, Polugaevsky Variation, Simagin Line" }, "rnbqkbnr/ppp2ppp/4p3/3p4/3PP3/4B3/PPP2PPP/RN1QKBNR": { "eco": "C00", "name": "French Defense: Alapin Gambit" }, "rnbqkbnr/pppp1ppp/4p3/8/1P2P3/8/P1PP1PPP/RNBQKBNR": { "eco": "C00", "name": "French Defense: Banzai-Leong Gambit" }, "rnbqk1nr/pppp1ppp/4p3/4P3/1b6/8/P1PP1PPP/RNBQKBNR": { "eco": "C00", "name": "French Defense: Banzai-Leong Gambit, Pinova Gambit" }, "rnbqkbnr/pppp1ppp/4p3/1B6/4P3/8/PPPP1PPP/RNBQK1NR": { "eco": "C00", "name": "French Defense: Bird Invitation" }, "rnbqkbnr/ppp2ppp/4p3/4N3/3Pp3/8/PPP2PPP/RNBQKB1R": { "eco": "C00", "name": "French Defense: Carlson Gambit" }, "rnbqkbnr/pppp1ppp/4p3/8/4P3/8/PPPPQPPP/RNB1KBNR": { "eco": "C00", "name": "French Defense: Chigorin Variation" }, "rnbqkbnr/pppp1ppp/4p3/8/4P3/1P6/P1PP1PPP/RNBQKBNR": { "eco": "C00", "name": "French Defense: Horwitz Attack" }, "rnbqkbnr/ppp2ppp/4p3/3p4/4P3/1P6/PBPP1PPP/RN1QKBNR": { "eco": "C00", "name": "French Defense: Horwitz Attack, Papa-Ticulat Gambit" }, "rnbqkbnr/pppp1ppp/4p3/8/4P3/3P4/PPP2PPP/RNBQKBNR": { "eco": "C00", "name": "French Defense: King's Indian Attack" }, "rnbqkbnr/pppp1ppp/4p3/8/4P3/5N2/PPPP1PPP/RNBQKB1R": { "eco": "C00", "name": "French Defense: Knight Variation" }, "rnbqkbnr/pppp1ppp/4p3/8/4PP2/8/PPPP2PP/RNBQKBNR": { "eco": "C00", "name": "French Defense: La Bourdonnais Variation" }, "rnbqkbnr/ppp2ppp/4p3/3p4/3PP3/7N/PPP2PPP/RNBQKB1R": { "eco": "C00", "name": "French Defense: Morphy Gambit" }, "rnbqkbnr/pppp1ppp/4p3/8/3PP3/8/PPP2PPP/RNBQKBNR": { "eco": "C00", "name": "French Defense: Normal Variation" }, "rnbqkbnr/ppp2ppp/8/3p4/4P3/1Q6/PP1P1PPP/RNB1KBNR": { "eco": "C00", "name": "French Defense: Orthoschnapp Gambit" }, "rnbqkbnr/ppp2ppp/4p3/3p4/4PP2/2N5/PPPP2PP/R1BQKBNR": { "eco": "C00", "name": "French Defense: Pelikan Variation" }, "rnbqkbnr/ppp2ppp/4p3/3p4/3PP3/5N2/PPP2PPP/RNBQKB1R": { "eco": "C00", "name": "French Defense: Perseus Gambit" }, "rnbqkbnr/pppp1ppp/4p3/8/4P3/2N5/PPPP1PPP/R1BQKBNR": { "eco": "C00", "name": "French Defense: Queen's Knight" }, "r1bqkb1r/ppp2ppp/2n1pn2/3p4/4P3/3P1N2/PPPNBPPP/R1BQK2R": { "eco": "C00", "name": "French Defense: Reversed Philidor Formation" }, "rnbqkbnr/pppp1ppp/4p3/8/4P3/6P1/PPPP1P1P/RNBQKBNR": { "eco": "C00", "name": "French Defense: Réti-Spielmann Attack" }, "rnbqkbnr/ppp2ppp/4p3/3p4/3PP3/3B4/PPP2PPP/RNBQK1NR": { "eco": "C00", "name": "French Defense: Schlechter Variation" }, "rnbqkbnr/pppp1ppp/4p3/8/2P1P3/8/PP1P1PPP/RNBQKBNR": { "eco": "C00", "name": "French Defense: Steiner Variation" }, "rnbqkbnr/pppp1ppp/4p3/4P3/8/8/PPPP1PPP/RNBQKBNR": { "eco": "C00", "name": "French Defense: Steinitz Attack" }, "rnbqkbnr/ppp2ppp/4p3/3p4/4P3/2N2N2/PPPP1PPP/R1BQKB1R": { "eco": "C00", "name": "French Defense: Two Knights Variation" }, "rnbqkbnr/pp3ppp/4p3/2ppP3/1P6/5N2/P1PP1PPP/RNBQKB1R": { "eco": "C00", "name": "French Defense: Wing Gambit" }, "rnbqkbnr/1ppp1ppp/p3p3/8/2PPP3/8/PP3PPP/RNBQKBNR": { "eco": "C00", "name": "St. George Defense: New St. George, Three Pawn Attack" }, "rnbqkbnr/ppp2ppp/4p3/3P4/3P4/8/PPP2PPP/RNBQKBNR": { "eco": "C01", "name": "French Defense: Exchange Variation" }, "rnbqkbnr/ppp2ppp/8/3p4/2PP4/8/PP3PPP/RNBQKBNR": { "eco": "C01", "name": "French Defense: Exchange Variation, Monte Carlo Variation" }, "rnbqkb1r/ppp2ppp/5n2/3p2B1/3P4/2N5/PPP2PPP/R2QKBNR": { "eco": "C01", "name": "French Defense: Exchange Variation, Svenonius Variation" }, "rnbqkbnr/ppp2ppp/4p3/3pP3/3P4/8/PPP2PPP/RNBQKBNR": { "eco": "C02", "name": "French Defense: Advance Variation" }, "rnbqkbnr/pp3ppp/4p3/2ppP3/3P4/2P5/PP3PPP/RNBQKBNR": { "eco": "C02", "name": "French Defense: Advance Variation" }, "rnbqkbnr/pp3ppp/4p3/2ppP3/1P1P4/8/P1P2PPP/RNBQKBNR": { "eco": "C02", "name": "French Defense: Advance Variation, Frenkel Gambit" }, "r1b1kbnr/pp3ppp/1qn1p3/2ppP3/3P4/P1P2N2/1P3PPP/RNBQKB1R": { "eco": "C02", "name": "French Defense: Advance Variation, Main Line" }, "r1b1kbnr/pp3ppp/1qn1p3/2ppP3/3P4/2PB1N2/PP3PPP/RNBQK2R": { "eco": "C02", "name": "French Defense: Advance Variation, Milner-Barry Gambit" }, "rnbqkbnr/pp3ppp/4p3/2ppP3/3P2Q1/8/PPP2PPP/RNB1KBNR": { "eco": "C02", "name": "French Defense: Advance Variation, Nimzowitsch Attack" }, "rnbqkbnr/pp3ppp/4p3/3pP3/3p2Q1/5N2/PPP2PPP/RNB1KB1R": { "eco": "C02", "name": "French Defense: Advance Variation, Nimzowitsch Gambit" }, "rnbqkbnr/pp3ppp/4p3/2ppP3/3P4/5N2/PPP2PPP/RNBQKB1R": { "eco": "C02", "name": "French Defense: Advance Variation, Nimzowitsch System" }, "r1bqkbnr/pp3ppp/2n1p3/2ppP3/3P4/2P2N2/PP3PPP/RNBQKB1R": { "eco": "C02", "name": "French Defense: Advance Variation, Paulsen Attack" }, "rnbqkbnr/pp3ppp/4p3/3pP3/3p4/3B1N2/PPP2PPP/RNBQK2R": { "eco": "C02", "name": "French Defense: Advance Variation, Ruisdonk Gambit" }, "rnbqkbnr/pp3ppp/4p3/2PpP3/8/8/PPP2PPP/RNBQKBNR": { "eco": "C02", "name": "French Defense: Advance Variation, Steinitz Variation" }, "rnbqkbnr/ppp2ppp/4p3/3p4/3PP3/8/PPPN1PPP/R1BQKBNR": { "eco": "C03", "name": "French Defense: Tarrasch Variation" }, "rnbqkb1r/pppn1ppp/4p3/3pP3/3P1P2/8/PPPN2PP/R1BQKBNR": { "eco": "C05", "name": "French Defense: Tarrasch Variation, Pawn Center Variation" }, "r1bqkb1r/pp1n1ppp/2n1p3/3pP3/3P4/3B4/PP1NNPPP/R1BQK2R": { "eco": "C06", "name": "French Defense: Tarrasch Variation, Closed Variation, Main Line" }, "rnbqkbnr/pp3ppp/4p3/2pp4/3PP3/5N2/PPPN1PPP/R1BQKB1R": { "eco": "C07", "name": "French Defense: Tarrasch Variation, Open System, Euwe-Keres Line" }, "rnbqkbnr/pp3ppp/4p3/2pp4/3PP3/2P5/PP1N1PPP/R1BQKBNR": { "eco": "C07", "name": "French Defense: Tarrasch Variation, Open System, Süchting Line" }, "r1bqkbnr/ppp2ppp/2n1p3/3P4/3P4/2N5/PPP2PPP/R1BQKBNR": { "eco": "C10", "name": "French Defense: Classical Variation, Svenonius Variation" }, "rnbqkbnr/ppp2ppp/4p3/3p4/3PP3/2N5/PPP2PPP/R1BQKBNR": { "eco": "C10", "name": "French Defense: Paulsen Variation" }, "r1bqkb1r/ppp2ppp/4pn2/4N3/3P4/8/PPP2PPP/R1BQKB1R": { "eco": "C10", "name": "French Defense: Rubinstein Variation, Capablanca Line" }, "r1bqkb1r/ppp2ppp/4pn2/8/3P4/2P2N2/PP3PPP/R1BQKB1R": { "eco": "C10", "name": "French Defense: Rubinstein Variation, Kasparov Attack" }, "rnbqkb1r/ppp2ppp/4pn2/3p2B1/3PP3/2N5/PPP2PPP/R2QKBNR": { "eco": "C11", "name": "French Defense: Burn Variation" }, "rnbqkb1r/ppp2ppp/4pn2/3P4/3P4/2N5/PPP2PPP/R1BQKBNR": { "eco": "C11", "name": "French Defense: Classical Variation, Delayed Exchange Variation" }, "rnbqkb1r/ppp2ppp/4pn2/3pP3/3P4/2N5/PPP2PPP/R1BQKBNR": { "eco": "C11", "name": "French Defense: Classical Variation, Steinitz Variation" }, "rnbqkb1r/ppp2ppp/4pn2/3p4/3PP3/2NB4/PPP2PPP/R1BQK1NR": { "eco": "C11", "name": "French Defense: Classical Variation, Swiss Variation" }, "rnbqkb1r/ppp2ppp/4pn2/3p4/3PP3/2N1B3/PPP2PPP/R2QKBNR": { "eco": "C11", "name": "French Defense: Henneberger Variation" }, "rnbqkb1r/pp1n1ppp/4p3/2ppP3/3P1P2/2N2N2/PPP3PP/R1BQKB1R": { "eco": "C11", "name": "French Defense: Steinitz Variation" }, "r1bqkb1r/pp1n1ppp/2n1p3/2ppP3/3P1P2/2N1BN2/PPP3PP/R2QKB1R": { "eco": "C11", "name": "French Defense: Steinitz Variation, Boleslavsky Variation" }, "rnbqk2r/pp1n1ppp/4p3/2bpP3/5PQ1/2N5/PPP3PP/R1B1KBNR": { "eco": "C11", "name": "French Defense: Steinitz Variation, Bradford Attack Variation" }, "rnbqkb1r/pppn1ppp/4p3/3pP3/3P2Q1/2N5/PPP2PPP/R1B1KBNR": { "eco": "C11", "name": "French Defense: Steinitz Variation, Gledhill Attack" }, "rnbqk2r/ppp2ppp/4pn2/3pP1B1/1b1P4/2N5/PPP2PPP/R2QKBNR": { "eco": "C12", "name": "French Defense: MacCutcheon Variation, Advance Variation" }, "rnbqk2r/ppp2pp1/4pn1p/3pP3/1b1P3B/2N5/PPP2PPP/R2QKBNR": { "eco": "C12", "name": "French Defense: MacCutcheon Variation, Bernstein Variation" }, "rnbqk2r/ppp2pp1/4pP1p/3p2B1/1b1P4/2N5/PPP2PPP/R2QKBNR": { "eco": "C12", "name": "French Defense: MacCutcheon Variation, Chigorin Variation" }, "rnbqk2r/ppp2pp1/4pn1p/3pP3/1b1P4/2N5/PPP2PPP/R1BQKBNR": { "eco": "C12", "name": "French Defense: MacCutcheon Variation, Dr. Olland (Dutch) Variation" }, "rnbq1k1r/ppp2pp1/4p2p/3pP3/3Pn1Q1/2P5/P1P2PPP/R1B1KBNR": { "eco": "C12", "name": "French Defense: MacCutcheon Variation, Duras Variation" }, "rnbqk2r/ppp2ppp/4pn2/3P2B1/1b1P4/2N5/PPP2PPP/R2QKBNR": { "eco": "C12", "name": "French Defense: MacCutcheon Variation, Exchange Variation" }, "rnbqk1r1/ppp2pP1/4p3/3p4/1b1P2Qp/2N5/PPP2PP1/R3KBNR": { "eco": "C12", "name": "French Defense: MacCutcheon Variation, Grigoriev Variation" }, "rnbqk2r/ppp2pp1/4pn1p/3pP3/1b1P4/2N1B3/PPP2PPP/R2QKBNR": { "eco": "C12", "name": "French Defense: MacCutcheon Variation, Janowski Variation" }, "rnbqk2r/pppnbppp/4p3/3pP1B1/3P3P/2N5/PPP2PP1/R2QKBNR": { "eco": "C13", "name": "French Defense: Alekhine-Chatard Attack" }, "rnbqk2r/ppp1bppp/4pB2/3p4/3PP3/2N5/PPP2PPP/R2QKBNR": { "eco": "C13", "name": "French Defense: Classical Variation, Richter Attack" }, "rnbqk2r/ppp1bppp/4p3/3pP3/3P2Q1/2N5/PPP2PPP/R3KBNR": { "eco": "C13", "name": "French Defense: Classical Variation, Richter Attack" }, "rnb1k2r/pppnqppp/4p3/1N1pP3/3P4/8/PPP2PPP/R2QKBNR": { "eco": "C14", "name": "French Defense: Classical Variation, Alapin Variation" }, "rnb1k2r/pppnqppp/4p3/3pP3/3P2Q1/2N5/PPP2PPP/R3KBNR": { "eco": "C14", "name": "French Defense: Classical Variation, Pollock Variation" }, "rnb1k2r/pppnqppp/4p3/3pP3/3P4/2N5/PPPQ1PPP/R3KBNR": { "eco": "C14", "name": "French Defense: Classical Variation, Rubinstein Variation" }, "rnb1k2r/pppnqppp/4p3/3pP3/3P1P2/2N5/PPP3PP/R2QKBNR": { "eco": "C14", "name": "French Defense: Classical Variation, Steinitz Variation" }, "rnb1k2r/pppnqppp/4p3/3pP3/3P4/2NB4/PPP2PPP/R2QK1NR": { "eco": "C14", "name": "French Defense: Classical Variation, Tarrasch Variation" }, "rnbqk2r/ppp2ppp/4pn2/3p2B1/1b1PP3/2N5/PPP1NPPP/R2QKB1R": { "eco": "C15", "name": "French Defense: MacCutcheon Variation, Wolf Gambit" }, "rnbqk1nr/ppp2ppp/4p3/3p4/1b1PP3/2N5/PPP1NPPP/R1BQKB1R": { "eco": "C15", "name": "French Defense: Winawer Variation, Alekhine-Maróczy Gambit" }, "rnbqk1nr/ppp2ppp/4p3/3P4/1b1P4/2N5/PPP2PPP/R1BQKBNR": { "eco": "C15", "name": "French Defense: Winawer Variation, Delayed Exchange Variation" }, "rnbqk2r/ppp1nppp/8/3p3Q/1b1P4/2NB4/PPP2PPP/R1B1K1NR": { "eco": "C15", "name": "French Defense: Winawer Variation, Exchange Variation, Canal Attack" }, "rnbqk1nr/ppp2ppp/4p3/3p4/1b1PP3/2N5/PPPB1PPP/R2QKBNR": { "eco": "C15", "name": "French Defense: Winawer Variation, Fingerslip Variation" }, "rnbqk1r1/ppp2p1p/4pn1Q/8/1b1Pp3/2N5/PPPB1PPP/R3KBNR": { "eco": "C15", "name": "French Defense: Winawer Variation, Fingerslip Variation, Main Line" }, "rnbqk2r/ppp1nppp/4p3/3p4/1b1PP3/8/PPPB1PPP/RN1QKBNR": { "eco": "C15", "name": "French Defense: Winawer Variation, Fingerslip Variation, Schwarz's Line" }, "rnb1k1nr/pp3ppp/4p3/2pq4/1b1P4/2NB4/PPPB1PPP/R2QK1NR": { "eco": "C15", "name": "French Defense: Winawer Variation, Kondratiyev Variation" }, "rnbqk1nr/ppp2ppp/4p3/3p4/1b1PP3/P1N5/1PP2PPP/R1BQKBNR": { "eco": "C15", "name": "French Defense: Winawer Variation, Winckelmann-Riemer Gambit" }, "rnbqk1nr/ppp2ppp/4p3/3pP3/1b1P4/2N5/PPP2PPP/R1BQKBNR": { "eco": "C16", "name": "French Defense: Winawer Variation, Advance Variation" }, "rnbqk1nr/pp3ppp/4p3/2ppP3/1b1P4/P1N5/1PP2PPP/R1BQKBNR": { "eco": "C17", "name": "French Defense: Winawer Variation, Advance Variation" }, "rnbqk1nr/pp3ppp/4p3/3pP3/1P6/2p2N2/1PP2PPP/R1BQKB1R": { "eco": "C17", "name": "French Defense: Winawer Variation, Advance Variation" }, "rnbqk1nr/pp3ppp/4p3/2ppP3/1b1P2Q1/2N5/PPP2PPP/R1B1KBNR": { "eco": "C17", "name": "French Defense: Winawer Variation, Advance Variation, Moscow Variation" }, "rnbqk1nr/pp3ppp/4p3/2ppP3/1b1P4/2N5/PPPB1PPP/R2QKBNR": { "eco": "C17", "name": "French Defense: Winawer Variation, Bogoljubov Variation" }, "rnbqk2r/pp2nppp/4p3/2ppP3/1b1P1P2/2N5/PPPB2PP/R2QKBNR": { "eco": "C17", "name": "French Defense: Winawer Variation, Bogoljubov Variation, Icelandic Defense" }, "rnbqk1nr/pp3ppp/4p3/2ppP3/3P4/P1P5/2P2PPP/R1BQKBNR": { "eco": "C18", "name": "French Defense: Winawer Variation, Advance Variation" }, "rnbqk2r/pp2nppp/4p3/2ppP3/P2P4/2P5/2P2PPP/R1BQKBNR": { "eco": "C19", "name": "French Defense: Winawer Variation, Advance Variation" }, "rnbqk2r/pp2nppp/4p3/2ppP3/3P2Q1/P1P5/2P2PPP/R1B1KBNR": { "eco": "C19", "name": "French Defense: Winawer Variation, Poisoned Pawn Variation" }, "rnb1k1r1/ppq1np1Q/4p3/3pP3/3p4/P1P5/2P1NPPP/R1B1KB1R": { "eco": "C19", "name": "French Defense: Winawer Variation, Poisoned Pawn Variation, Main Line" }, "rnb1k1r1/ppq1np1Q/4p3/3pP3/3p4/P1P5/2P2PPP/R1BK1BNR": { "eco": "C19", "name": "French Defense: Winawer Variation, Poisoned Pawn Variation, Paoli Variation" }, "rnbqk2r/pp2nppp/4p3/2ppP3/3P4/P1P2N2/2P2PPP/R1BQKB1R": { "eco": "C19", "name": "French Defense: Winawer Variation, Positional Variation" }, "rnbqkb1r/pppp1ppp/5n2/4p3/2B1P3/5P2/PPPP2PP/RNBQK1NR": { "eco": "C20", "name": "Barnes Opening: Walkerling" }, "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPPKPPP/RNBQ1BNR": { "eco": "C20", "name": "Bongcloud Attack" }, "rnbqkbnr/pppp1ppp/8/4p3/3PP3/8/PPP2PPP/RNBQKBNR": { "eco": "C20", "name": "Center Game" }, "rnbqkbnr/pppp1ppp/8/4p3/2P1P3/8/PP1P1PPP/RNBQKBNR": { "eco": "C20", "name": "English Opening: The Whale" }, "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPPNPPP/RNBQKB1R": { "eco": "C20", "name": "King's Pawn Game: Alapin Opening" }, "rnbqkbnr/pppp1ppp/8/4p3/4P3/5P2/PPPP2PP/RNBQKBNR": { "eco": "C20", "name": "King's Pawn Game: King's Head Opening" }, "rnbqkb1r/pppp1ppp/5n2/4p3/4P3/2N2P2/PPPP2PP/R1BQKBNR": { "eco": "C20", "name": "King's Pawn Game: King's Head Opening" }, "rnbqkbnr/pppp1ppp/8/4p3/4P3/3P4/PPP2PPP/RNBQKBNR": { "eco": "C20", "name": "King's Pawn Game: Leonardis Variation" }, "rnbqkbnr/pppp1ppp/8/4p3/4P3/2P5/PP1P1PPP/RNBQKBNR": { "eco": "C20", "name": "King's Pawn Game: Macleod Attack" }, "rnbqkbnr/pppp1ppp/8/4p3/4P3/P7/1PPP1PPP/RNBQKBNR": { "eco": "C20", "name": "King's Pawn Game: Mengarini's Opening" }, "rnbqkbnr/pppp1ppp/8/4p3/4P3/5Q2/PPPP1PPP/RNB1KBNR": { "eco": "C20", "name": "King's Pawn Game: Napoleon Attack" }, "rnbqkbnr/pppp1ppp/8/4p3/4P3/3B4/PPPP1PPP/RNBQK1NR": { "eco": "C20", "name": "King's Pawn Game: Tortoise Opening" }, "rnbqkbnr/pppp1ppp/8/4p2Q/4P3/8/PPPP1PPP/RNB1KBNR": { "eco": "C20", "name": "King's Pawn Game: Wayward Queen Attack" }, "rnbqkbnr/pppp1ppp/8/4p3/4P3/1P6/P1PP1PPP/RNBQKBNR": { "eco": "C20", "name": "King's Pawn Opening" }, "rnbqkb1r/pppp1ppp/5n2/4pQ2/4P3/8/PPPP1PPP/RNB1KBNR": { "eco": "C20", "name": "King's Pawn Opening: Speers" }, "rnbqkbnr/pppp1ppp/8/1B2p3/4P3/8/PPPP1PPP/RNBQK1NR": { "eco": "C20", "name": "Portuguese Opening" }, "rnbqk1nr/pppp1ppp/8/1Bb1p3/1P2P3/8/P1PP1PPP/RNBQK1NR": { "eco": "C20", "name": "Portuguese Opening: Miguel Gambit" }, "rnbqkb1r/pppp1ppp/5n2/1B2p3/3PP3/8/PPP2PPP/RNBQK1NR": { "eco": "C20", "name": "Portuguese Opening: Portuguese Gambit" }, "rnbqkbnr/pppp1ppp/8/8/3QP3/8/PPP2PPP/RNB1KBNR": { "eco": "C21", "name": "Center Game" }, "rnbqkbnr/pppp1ppp/8/8/3pPP2/8/PPP3PP/RNBQKBNR": { "eco": "C21", "name": "Center Game: Halasz-McDonnell Gambit" }, "r1bqk1nr/pppp1ppp/2n5/2b5/3pPP2/2P2N2/PP4PP/RNBQKB1R": { "eco": "C21", "name": "Center Game: Halasz-McDonnell Gambit, Crocodile Variation" }, "rnbqkbnr/pppp1ppp/8/8/3pP3/5N2/PPP2PPP/RNBQKB1R": { "eco": "C21", "name": "Center Game: Kieseritzky Variation" }, "rnbqkbnr/pp1p1ppp/8/2p5/2BpP3/5N2/PPP2PPP/RNBQK2R": { "eco": "C21", "name": "Center Game: Kieseritzky Variation" }, "rnbqk1nr/pppp1ppp/8/2b5/3pP3/2P2N2/PP3PPP/RNBQKB1R": { "eco": "C21", "name": "Center Game: Lanc-Arnold Gambit" }, "rnbqk1nr/pppp1ppp/8/2b5/2B1P3/2p2N2/PP3PPP/RNBQK2R": { "eco": "C21", "name": "Center Game: Lanc-Arnold Gambit, Schippler Gambit" }, "rnbqkbnr/pppp1ppp/8/8/3pP3/3B4/PPP2PPP/RNBQK1NR": { "eco": "C21", "name": "Center Game: Ross Gambit" }, "rnbqkbnr/pppp1ppp/8/8/2BpP3/8/PPP2PPP/RNBQK1NR": { "eco": "C21", "name": "Center Game: von der Lasa Gambit" }, "rnbqkbnr/pppp1ppp/8/8/3pP3/2P5/PP3PPP/RNBQKBNR": { "eco": "C21", "name": "Danish Gambit" }, "rnbqkbnr/pppp1ppp/8/8/2B1P3/8/PB3PPP/RN1QK1NR": { "eco": "C21", "name": "Danish Gambit Accepted" }, "r1bqkbnr/pppp1ppp/2n5/8/2Q1P3/8/PPP2PPP/RNB1KBNR": { "eco": "C22", "name": "Center Game: Hall Variation" }, "r1bqr1k1/ppp2ppp/2np1n2/8/1bB1P3/2N1Q2N/PPPB1PPP/2KR3R": { "eco": "C22", "name": "Center Game: Kupreichik Variation" }, "r1bqkbnr/pppp1ppp/2n5/8/4P3/4Q3/PPP2PPP/RNB1KBNR": { "eco": "C22", "name": "Center Game: Paulsen Attack Variation" }, "rnbqkbnr/pppp1ppp/8/4p3/2B1P3/8/PPPP1PPP/RNBQK1NR": { "eco": "C23", "name": "Bishop's Opening" }, "rnbqkbnr/pppp2pp/8/4pp2/2B1P3/3P4/PPP2PPP/RNBQK1NR": { "eco": "C23", "name": "Bishop's Opening: Calabrese Countergambit, Jaenisch Variation" }, "rnbqk1nr/pppp1ppp/8/8/2BPP2b/5N2/P1P4p/RNBQ1R1K": { "eco": "C23", "name": "Bishop's Opening: Four Pawns Gambit" }, "rnbqk2r/ppp2ppp/5n2/2bBp3/3PP3/2P5/PP3PPP/RNBQK1NR": { "eco": "C23", "name": "Bishop's Opening: Lewis Countergambit, Walker Variation" }, "rnbqk1nr/pppp1ppp/8/2b1p3/2BPP3/8/PPP2PPP/RNBQK1NR": { "eco": "C23", "name": "Bishop's Opening: Lewis Gambit" }, "r2qkbnr/pp3ppp/8/3pn3/8/8/PPP1NPPP/RNBQK2R": { "eco": "C23", "name": "Bishop's Opening: Lisitsyn Variation" }, "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1PP2/2P5/PP1PQ1PP/RNB1K1NR": { "eco": "C23", "name": "Bishop's Opening: Lopez Gambit" }, "rnbqk1nr/pppp1ppp/8/2b1p3/2B1P3/8/PPPPQPPP/RNB1K1NR": { "eco": "C23", "name": "Bishop's Opening: Lopez Variation" }, "rnbqk2r/pppp1ppp/5n2/2b1p3/2B1PP2/8/PPPPQ1PP/RNB1K1NR": { "eco": "C23", "name": "Bishop's Opening: Lopez Variation, Lopez Gambit" }, "rnbqk1nr/pppp1ppp/8/2b1p3/1PB1P3/8/P1PP1PPP/RNBQK1NR": { "eco": "C23", "name": "Bishop's Opening: McDonnell Gambit" }, "rnbqk1nr/pppp1ppp/8/4p3/1bB1P3/2P5/P2P1PPP/RNBQK1NR": { "eco": "C23", "name": "Bishop's Opening: McDonnell Gambit, La Bourdonnais-Denker Gambit" }, "rnbqk1nr/pppp1ppp/8/4p3/1bB1PP2/8/P1PP2PP/RNBQK1NR": { "eco": "C23", "name": "Bishop's Opening: McDonnell Gambit, McDonnell Double Gambit" }, "rnbqk1nr/pppp1ppp/8/2b1p3/2B1P3/2P5/PP1P1PPP/RNBQK1NR": { "eco": "C23", "name": "Bishop's Opening: Philidor Variation" }, "rnbqk1nr/pppp1ppp/8/2b1p3/2B1PP2/8/PPPP2PP/RNBQK1NR": { "eco": "C23", "name": "Bishop's Opening: Stein Gambit" }, "rnbqkb1r/pppp1ppp/5n2/4p3/2B1PP2/8/PPPP2PP/RNBQK1NR": { "eco": "C24", "name": "Bishop's Opening: Berlin Defense, Greco Gambit" }, "r1bqk2r/pppp1ppp/2n2n2/2b1p3/1PB1P3/5P2/P1PPN1PP/RNBQK2R": { "eco": "C24", "name": "Bishop's Opening: Krejcik Gambit" }, "rnbqkb1r/pppp1ppp/8/4p3/2B1n3/2N5/PPPP1PPP/RNBQK2R": { "eco": "C24", "name": "Bishop's Opening: Pachman Gambit" }, "rnbqkb1r/pppp1ppp/5n2/4p3/2BPP3/8/PPP2PPP/RNBQK1NR": { "eco": "C24", "name": "Bishop's Opening: Ponziani Gambit" }, "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/2NP4/PPP2PPP/R1BQK1NR": { "eco": "C24", "name": "Bishop's Opening: Vienna Hybrid" }, "rnbqkb1r/pppp1ppp/5n2/8/2BpP3/2P5/PP3PPP/RNBQK1NR": { "eco": "C24", "name": "Bishop's Opening: Warsaw Gambit" }, "rnbqkbnr/pppp1ppp/8/4p3/4P3/2N5/PPPP1PPP/R1BQKBNR": { "eco": "C25", "name": "Vienna Game" }, "r1bqkbnr/pppp1ppp/2n5/4p3/3PP3/2N5/PPP2PPP/R1BQKBNR": { "eco": "C25", "name": "Vienna Game: Fyfe Gambit" }, "rnbqk1nr/pppp1ppp/8/2b1p3/4P1Q1/2N5/PPPP1PPP/R1B1KBNR": { "eco": "C25", "name": "Vienna Game: Giraffe Attack" }, "rnbqk1nr/pppp1ppp/8/2b1p3/N3P3/8/PPPP1PPP/R1BQKBNR": { "eco": "C25", "name": "Vienna Game: Hamppe-Meitner Variation" }, "r1bqkbnr/pppp1p1p/2n5/8/2B1Ppp1/2N2N2/PPPP2PP/R1BQ1RK1": { "eco": "C25", "name": "Vienna Game: Hamppe-Muzio Gambit" }, "rnbqkbnr/ppp2ppp/3p4/4p3/4PP2/2N5/PPPP2PP/R1BQKBNR": { "eco": "C25", "name": "Vienna Game: Omaha Gambit" }, "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/2N3P1/PPPP1P1P/R1BQKBNR": { "eco": "C25", "name": "Vienna Game: Paulsen Variation" }, "r2qkbnr/ppp2p1p/2P5/8/2BP1pb1/2N2p2/PPP3PP/R1BQ1RK1": { "eco": "C25", "name": "Vienna Game: Pierce Gambit, Rushmere Attack" }, "r1b1k1nr/pppp1ppp/2n2q2/2bNp3/2B1P1Q1/8/PPPP1PPP/R1B1K1NR": { "eco": "C25", "name": "Vienna Game: Stanley Variation, Meitner-Mieses Gambit" }, "r1bqkbnr/pppp1ppp/2n5/4p3/4PP2/2N5/PPPP2PP/R1BQKBNR": { "eco": "C25", "name": "Vienna Game: Vienna Gambit" }, "r1bqkbnr/pppp1p1p/2n5/6N1/4PppP/2N5/PPPP2P1/R1BQKB1R": { "eco": "C25", "name": "Vienna Game: Vienna Gambit, Hamppe-Allgaier Gambit" }, "r1bq1bnr/pppp1k2/2n4p/8/3PPppP/2N5/PPP3P1/R1BQKB1R": { "eco": "C25", "name": "Vienna Game: Vienna Gambit, Hamppe-Allgaier Gambit, Thorold Variation" }, "r1bqkbnr/pppp1p1p/2n5/6p1/3PPp2/2N2N2/PPP3PP/R1BQKB1R": { "eco": "C25", "name": "Vienna Game: Vienna Gambit, Pierce Gambit" }, "r1bqkbnr/pppp1ppp/2n5/8/3PPp2/2N5/PPP3PP/R1BQKBNR": { "eco": "C25", "name": "Vienna Game: Vienna Gambit, Steinitz Gambit" }, "r1bqkbnr/pppp1ppp/2n5/8/4Pp2/2N2N2/PPPP2PP/R1BQKB1R": { "eco": "C25", "name": "Vienna Game: Vienna Gambit, Steinitz Gambit, Knight Variation" }, "r1b1kbnr/pppp1ppp/2n5/8/3PPp1q/2N5/PPP1K1PP/R1BQ1BNR": { "eco": "C25", "name": "Vienna Game: Vienna Gambit, Steinitz Gambit, Main Line" }, "rnbqk2r/pppp1ppp/5n2/2b1p3/2B1P3/2NP4/PPP2PPP/R1BQK1NR": { "eco": "C26", "name": "Bishop's Opening: Vienna Hybrid, Spielmann Attack" }, "rnbqkb1r/pppp1ppp/5n2/4p3/4P3/P1N5/1PPP1PPP/R1BQKBNR": { "eco": "C26", "name": "Vienna Game: Mengarini Variation" }, "rnbqkb1r/pppp1ppp/5n2/4p3/4P3/2N3P1/PPPP1P1P/R1BQKBNR": { "eco": "C26", "name": "Vienna Game: Mieses Variation" }, "r1bqk2r/ppp2ppp/2n2n2/2bPp3/8/2N3P1/PPPPNPBP/R1BQK2R": { "eco": "C26", "name": "Vienna Game: Paulsen Variation, Pollock Gambit" }, "rnbqkb1r/pppp1ppp/5n2/4p3/2B1P3/2N5/PPPP1PPP/R1BQK1NR": { "eco": "C26", "name": "Vienna Game: Stanley Variation" }, "rnbqkb1r/pppp1ppp/5n2/4p3/4PP2/2N5/PPPP2PP/R1BQKBNR": { "eco": "C26", "name": "Vienna Game: Vienna Gambit" }, "rnbqkb1r/pppp1ppp/8/4p3/2B1n3/2N2N2/PPPP1PPP/R1BQK2R": { "eco": "C27", "name": "Bishop's Opening: Boden-Kieseritzky Gambit" }, "r1bqkb1r/pppp1ppp/2nn4/4p2Q/3P4/1BN5/PPP2PPP/R1B1K1NR": { "eco": "C27", "name": "Vienna Game: Adams' Gambit" }, "r1bqk2r/ppppbppp/2nn4/4N2Q/8/1BN5/PPPP1PPP/R1B1K2R": { "eco": "C27", "name": "Vienna Game: Stanley Variation, Alekhine Variation" }, "r1bqk2r/pppp1ppp/2n2n2/4p3/1bB1P3/2NP4/PPP1NPPP/R1BQK2R": { "eco": "C28", "name": "Bishop's Opening: Vienna Hybrid, Hromádka Variation" }, "r1bqkb1r/pppp1ppp/2n5/4p3/2B1nP2/2N2N2/PPPP2PP/R1BQK2R": { "eco": "C28", "name": "Vienna Game: Stanley Variation, Bronstein Gambit" }, "rnbqkb1r/ppp3pp/8/3pPp2/3Pn3/2N2Q2/PPP3PP/R1B1KBNR": { "eco": "C29", "name": "Vienna Game: Heyde Variation" }, "rn1qkb1r/ppp2ppp/8/3pP3/4n1b1/2N2N2/PPPPQ1PP/R1B1KB1R": { "eco": "C29", "name": "Vienna Game: Vienna Gambit, Kaufmann Variation" }, "rnbqkb1r/ppp2ppp/8/3pP3/4n3/2NP4/PPP3PP/R1BQKBNR": { "eco": "C29", "name": "Vienna Game: Vienna Gambit, Modern Variation" }, "rnbqkb1r/ppp2ppp/8/3pP3/4n3/2N2Q2/PPPP2PP/R1B1KBNR": { "eco": "C29", "name": "Vienna Game: Vienna Gambit, Paulsen Attack" }, "rnbqkb1r/ppp2ppp/5n2/3pp3/4PP2/2NP4/PPP3PP/R1BQKBNR": { "eco": "C29", "name": "Vienna Game: Vienna Gambit, Steinitz Variation" }, "rnb1kb1r/ppp2ppp/8/3NP2q/8/3P1Nn1/PPP4P/R1BQKB1R": { "eco": "C29", "name": "Vienna Game: Vienna Gambit, Wurzburger Trap" }, "rnbqkbnr/pppp1ppp/8/4p3/4PP2/8/PPPP2PP/RNBQKBNR": { "eco": "C30", "name": "King's Gambit" }, "rnbqk1nr/ppp2ppp/3p4/2b1p3/4PP2/2P2N2/PP1P2PP/RNBQKB1R": { "eco": "C30", "name": "King's Gambit Declined: Classical Variation" }, "rn1qk1nr/ppp2ppp/8/2b1p3/Q3P1b1/2P2N2/PP1P2PP/RNB1KB1R": { "eco": "C30", "name": "King's Gambit Declined: Classical Variation, Euwe Attack" }, "rnbqk1nr/ppp2ppp/3p4/2b1p3/1P2PP2/5N2/P1PP2PP/RNBQKB1R": { "eco": "C30", "name": "King's Gambit Declined: Classical Variation, Rotlewi Countergambit" }, "rnbqk1nr/ppp3pp/8/2b2p2/2BpP3/2P2N2/PP4PP/RNBQK2R": { "eco": "C30", "name": "King's Gambit Declined: Classical, Réti Variation" }, "rnbqk1nr/ppp2ppp/3p4/2b1P3/4P3/5N2/PPPP2PP/RNBQKB1R": { "eco": "C30", "name": "King's Gambit Declined: Classical, Soldatenkov Variation" }, "rnb1kbnr/pppp1ppp/8/4p3/4PP1q/6P1/PPPP3P/RNBQKBNR": { "eco": "C30", "name": "King's Gambit Declined: Keene's Defense" }, "rnb1k1nr/pppp1ppp/8/4p3/1bB1Pq2/2N2N2/PPPP2PP/R1BQK2R": { "eco": "C30", "name": "King's Gambit Declined: Norwalde Variation, Bücker Gambit" }, "rnb1kbnr/pppp1ppp/8/4p3/3PPq2/2N5/PPP3PP/R1BQKBNR": { "eco": "C30", "name": "King's Gambit Declined: Norwalde Variation, Schubert Variation" }, "rnb1kbnr/ppppq2p/6P1/7Q/5p2/8/PPPP2PP/RNBK1BNR": { "eco": "C30", "name": "King's Gambit Declined: Panteldakis Countergambit, Pawn Sacrifice Line" }, "rnbqk1nr/ppp3pp/3b4/3p1P2/3P1p2/3B1N2/PPP3PP/RNBQK2R": { "eco": "C30", "name": "King's Gambit Declined: Panteldakis Countergambit, Symmetrical Variation" }, "rnbqkbnr/ppp2ppp/8/3Pp3/5P2/8/PPPP2PP/RNBQKBNR": { "eco": "C31", "name": "King's Gambit Declined: Falkbeer Countergambit Accepted" }, "rnbqkbnr/ppp2ppp/8/1B1P4/4pP2/8/PPPP2PP/RNBQK1NR": { "eco": "C31", "name": "King's Gambit Declined: Falkbeer Countergambit, Anderssen Attack" }, "rnbqkbnr/ppp2ppp/8/3pp3/4PP2/5N2/PPPP2PP/RNBQKB1R": { "eco": "C31", "name": "King's Gambit Declined: Falkbeer Countergambit, Blackburne Attack" }, "rnbqkbnr/ppp2ppp/8/3P4/4pP2/3P4/PPP3PP/RNBQKBNR": { "eco": "C31", "name": "King's Gambit Declined: Falkbeer Countergambit, Charousek Gambit" }, "rnbqkbnr/ppp2ppp/8/3pp3/3PPP2/8/PPP3PP/RNBQKBNR": { "eco": "C31", "name": "King's Gambit Declined: Falkbeer Countergambit, Hinrichsen Gambit" }, "rnbqkbnr/ppp2ppp/8/3pp3/4PP2/2N5/PPPP2PP/R1BQKBNR": { "eco": "C31", "name": "King's Gambit Declined: Falkbeer Countergambit, Milner-Barry Variation" }, "rnbqkb1r/ppp2ppp/5n2/3P4/4pP2/2N5/PPPPQ1PP/R1B1KBNR": { "eco": "C31", "name": "King's Gambit Declined: Falkbeer Countergambit, Rubinstein Variation" }, "rnbqkbnr/ppp2ppp/8/4p3/4NP2/8/PPPP2PP/R1BQKBNR": { "eco": "C31", "name": "Van Geet Opening: Grünfeld Defense, Steiner Gambit" }, "rnb1k2r/ppp2ppp/8/3q4/4nP2/8/PPPNQbPP/RNBK1B1R": { "eco": "C32", "name": "King's Gambit Declined: Falkbeer Countergambit, Alapin Variation" }, "rnbqkb1r/ppp2ppp/8/3P4/4nP2/8/PPP1Q1PP/RNB1KBNR": { "eco": "C32", "name": "King's Gambit Declined: Falkbeer Countergambit, Charousek Gambit" }, "rnbqkb1r/ppp2ppp/5n2/3P4/4PP2/8/PPP3PP/RNBQKBNR": { "eco": "C32", "name": "King's Gambit Declined: Falkbeer Countergambit, Charousek Gambit Accepted" }, "rnbqkb1r/ppp2ppp/5n2/3P4/4pP2/3P4/PPPN2PP/R1BQKBNR": { "eco": "C32", "name": "King's Gambit Declined: Falkbeer Countergambit, Charousek Gambit, Keres Variation" }, "rnbqkb1r/ppp2ppp/5n2/3P4/4pP2/3P4/PPP1Q1PP/RNB1KBNR": { "eco": "C32", "name": "King's Gambit Declined: Falkbeer Countergambit, Charousek Gambit, Old Line" }, "rnb1kb1r/ppp3pp/8/3q1p2/4nPP1/8/PPPNQ2P/R1B1KBNR": { "eco": "C32", "name": "King's Gambit Declined: Falkbeer Countergambit, Charousek Variation" }, "rnbqkbnr/pppp1ppp/8/8/4Pp2/8/PPPPQ1PP/RNB1KBNR": { "eco": "C33", "name": "King's Gambit Accepted: Basman Gambit" }, "rnbqkbnr/pppp1ppp/8/8/2B1Pp2/8/PPPP2PP/RNBQK1NR": { "eco": "C33", "name": "King's Gambit Accepted: Bishop's Gambit" }, "rnbqkb1r/pppp1ppp/5n2/8/2B1Pp2/2N5/PPPP2PP/R1BQK1NR": { "eco": "C33", "name": "King's Gambit Accepted: Bishop's Gambit, Bogoljubov Variation" }, "rnb1kbnr/ppp2p1p/8/3B2p1/4Pp1q/6P1/PPPP3P/RNBQ1KNR": { "eco": "C33", "name": "King's Gambit Accepted: Bishop's Gambit, Chigorin's Attack" }, "rnb1kbnr/pppp1p1p/8/6p1/2B1Pp1q/5Q2/PPPP2PP/RNB2KNR": { "eco": "C33", "name": "King's Gambit Accepted: Bishop's Gambit, Classical Defense, Cozio Attack" }, "rnb1k1nr/pppp1pbp/8/6p1/2B1P2q/2N2Qp1/PPPP3P/R1B2KNR": { "eco": "C33", "name": "King's Gambit Accepted: Bishop's Gambit, Fraser Variation" }, "rnb1k1nr/ppp2pbp/3p4/4P1p1/2BP1p1q/2N5/PPP3PP/R1BQ1KNR": { "eco": "C33", "name": "King's Gambit Accepted: Bishop's Gambit, Grimm Attack" }, "rnb1k2r/ppppnpbp/8/6p1/2BPPp1q/2N3P1/PPP4P/R1BQ1KNR": { "eco": "C33", "name": "King's Gambit Accepted: Bishop's Gambit, McDonnell Attack" }, "rnb1k1nr/pppp1pbp/8/6p1/2B1Pp1q/2N3P1/PPPP3P/R1BQ1KNR": { "eco": "C33", "name": "King's Gambit Accepted: Bishop's Gambit, McDonnell Attack" }, "rnbqk2r/pppp1ppp/5n2/4P3/1bB2p2/2N5/PPPP2PP/R1BQK1NR": { "eco": "C33", "name": "King's Gambit Accepted: Bishop's Gambit, Paulsen Attack" }, "rnbqkbnr/pppp1ppp/8/8/4Pp2/5Q2/PPPP2PP/RNB1KBNR": { "eco": "C33", "name": "King's Gambit Accepted: Breyer Gambit" }, "rnbqkbnr/pppp1ppp/8/7Q/4Pp2/8/PPPP2PP/RNB1KBNR": { "eco": "C33", "name": "King's Gambit Accepted: Carrera Gambit" }, "rnbqkbnr/pppp1ppp/8/8/4PpQ1/8/PPPP2PP/RNB1KBNR": { "eco": "C33", "name": "King's Gambit Accepted: Dodo Variation" }, "rnbqkbnr/pppp1ppp/8/8/4Pp2/7N/PPPP2PP/RNBQKB1R": { "eco": "C33", "name": "King's Gambit Accepted: Eisenberg Variation" }, "rnbqkbnr/pppp1ppp/8/8/4Pp2/6P1/PPPP3P/RNBQKBNR": { "eco": "C33", "name": "King's Gambit Accepted: Gaga Gambit" }, "rnbqkbnr/pppp1ppp/8/8/4Pp2/1P6/P1PP2PP/RNBQKBNR": { "eco": "C33", "name": "King's Gambit Accepted: Orsini Gambit" }, "rnbqkbnr/pppp1ppp/8/8/4Pp2/8/PPPPN1PP/RNBQKB1R": { "eco": "C33", "name": "King's Gambit Accepted: Paris Gambit" }, "rnbqkbnr/pppp1ppp/8/8/3PPp2/8/PPP3PP/RNBQKBNR": { "eco": "C33", "name": "King's Gambit Accepted: Polerio Gambit" }, "rnbqkbnr/pppp1ppp/8/1B6/4Pp2/8/PPPP2PP/RNBQK1NR": { "eco": "C33", "name": "King's Gambit Accepted: Schurig Gambit" }, "rnbqkbnr/pppp1ppp/8/8/4Pp2/3B4/PPPP2PP/RNBQK1NR": { "eco": "C33", "name": "King's Gambit Accepted: Schurig Gambit" }, "rnbqkbnr/pppp1ppp/8/8/4Pp1P/8/PPPP2P1/RNBQKBNR": { "eco": "C33", "name": "King's Gambit Accepted: Stamma Gambit" }, "rnbqkbnr/pppp1ppp/8/8/4Pp2/8/PPPPB1PP/RNBQK1NR": { "eco": "C33", "name": "King's Gambit Accepted: Tartakower Gambit" }, "rnbqkbnr/pppp1ppp/8/8/4Pp2/8/PPPP1KPP/RNBQ1BNR": { "eco": "C33", "name": "King's Gambit Accepted: Tumbleweed" }, "rnbqkbnr/pppp1ppp/8/8/4Pp2/2N5/PPPP2PP/R1BQKBNR": { "eco": "C33", "name": "Van Geet Opening: Nowokunski Gambit" }, "rnbqkbnr/ppp2ppp/3p4/8/1P2Pp2/5N2/P1PP2PP/RNBQKB1R": { "eco": "C34", "name": "King's Gambit Accepted: Fischer Defense, Schulder Gambit" }, "rnbqkb1r/ppp2ppp/3p1n2/8/3PPp2/3B1N2/PPP3PP/RNBQK2R": { "eco": "C34", "name": "King's Gambit Accepted: Fischer Defense, Spanish Variation" }, "rnbqkbnr/pppp1ppp/8/8/4Pp2/5N2/PPPP2PP/RNBQKB1R": { "eco": "C34", "name": "King's Gambit Accepted: King's Knight Gambit" }, "rnbqkb1r/pppp1ppp/8/4P2n/5pP1/5N2/PPPP3P/RNBQKB1R": { "eco": "C34", "name": "King's Gambit Accepted: Schallopp Defense, Tashkent Attack" }, "rnbqk1nr/pppp1ppp/8/8/2B1Pp1b/5NP1/PPPP3P/RNBQK2R": { "eco": "C35", "name": "King's Gambit Accepted: Cunningham Defense, Bertin Gambit" }, "rnbqk1nr/pppp1ppp/8/8/2B1P2b/5N2/PPPP3p/RNBQ1R1K": { "eco": "C35", "name": "King's Gambit Accepted: Cunningham Defense, Bertin Gambit" }, "rnbqkbnr/ppp2ppp/8/3P4/5p2/5N2/PPPP2PP/RNBQKB1R": { "eco": "C36", "name": "King's Gambit Accepted: Modern Defense" }, "rnbqkbnr/pppp1p1p/8/8/2B1PppP/5N2/PPPP2P1/RNBQK2R": { "eco": "C37", "name": "King's Gambit Accepted: Australian Gambit" }, "rnb1kbnr/pppp1B1p/8/4q3/5p2/5Q2/PPPP2PP/RNB2RK1": { "eco": "C37", "name": "King's Gambit Accepted: Double Muzio Gambit" }, "rnb1kbnr/pppp1p1p/8/3N4/2q1Pp2/5Q2/PPPP2PP/R1B2R1K": { "eco": "C37", "name": "King's Gambit Accepted: Double Muzio Gambit, Baldwin Gambit" }, "rnb1kbnr/pppp1p1p/5q2/8/2B1Pp2/2N2Q2/PPPP2PP/R1B2RK1": { "eco": "C37", "name": "King's Gambit Accepted: Double Muzio Gambit, Bello Gambit" }, "r1b1k2r/ppppnp1p/2n4b/4q3/2B2p2/2NP1Q2/PPPB2PP/4RRK1": { "eco": "C37", "name": "King's Gambit Accepted: Double Muzio Gambit, Paulsen Defense" }, "rnbqkbnr/pppp1p1p/8/8/2BPPpp1/5N2/PPP3PP/RNBQK2R": { "eco": "C37", "name": "King's Gambit Accepted: Ghulam-Kassim Gambit" }, "rnbqkbnr/pppp1p1p/8/8/2BPPp2/5Q2/PPP3PP/RNB1K2R": { "eco": "C37", "name": "King's Gambit Accepted: Ghulam-Kassim Gambit" }, "rnbqkbnr/pppp1p1p/8/6p1/2B1Pp2/5N2/PPPP2PP/RNBQK2R": { "eco": "C37", "name": "King's Gambit Accepted: King's Knight Gambit" }, "rnbqkbnr/pppp1p1p/8/8/2BPPB2/5p2/PPP3PP/RN1QK2R": { "eco": "C37", "name": "King's Gambit Accepted: Kotov Gambit" }, "rnbqkbnr/pppp1B1p/8/8/4Ppp1/5N2/PPPP2PP/RNBQK2R": { "eco": "C37", "name": "King's Gambit Accepted: Lolli Gambit" }, "rnb2bnr/pppp1k1p/5q2/8/4Pp2/2N1BQ2/PPP3PP/R4RK1": { "eco": "C37", "name": "King's Gambit Accepted: Lolli Gambit, Young Variation" }, "rnbqkbnr/pppp1p1p/8/8/2B1Ppp1/2N2N2/PPPP2PP/R1BQK2R": { "eco": "C37", "name": "King's Gambit Accepted: McDonnell Gambit" }, "rnbqkbnr/pppp1p1p/8/8/2B1Ppp1/5N2/PPPP2PP/RNBQ1RK1": { "eco": "C37", "name": "King's Gambit Accepted: Muzio Gambit, Wild Muzio Gambit" }, "rnbqkbnr/pppp1p1p/8/6p1/4Pp2/2N2N2/PPPP2PP/R1BQKB1R": { "eco": "C37", "name": "King's Gambit Accepted: Quade Gambit" }, "rnbqkbnr/pppp1p1p/8/6p1/3PPp2/5N2/PPP3PP/RNBQKB1R": { "eco": "C37", "name": "King's Gambit Accepted: Rosentreter Gambit" }, "rnb1kbnr/pppp1p1p/8/4N3/3PPppq/6P1/PPP4P/RNBQKB1R": { "eco": "C37", "name": "King's Gambit Accepted: Rosentreter Gambit, Bird Gambit" }, "rnbqkbnr/pppp1p1p/8/8/3PPpp1/2N2N2/PPP3PP/R1BQKB1R": { "eco": "C37", "name": "King's Gambit Accepted: Rosentreter Gambit, Sörensen Gambit" }, "rnbqkbnr/pppp1p1p/8/8/3PPBp1/5N2/PPP3PP/RN1QKB1R": { "eco": "C37", "name": "King's Gambit Accepted: Rosentreter Gambit, Testa Variation" }, "rnbqkbnr/pppp1p1p/8/4N3/2B1Ppp1/8/PPPP2PP/RNBQK2R": { "eco": "C37", "name": "King's Gambit Accepted: Salvio Gambit" }, "rnbqkbnr/pppp1p1p/8/4N3/3PPpp1/8/PPP3PP/RNBQKB1R": { "eco": "C37", "name": "King's Gambit Accepted: Sörensen Gambit" }, "rnbqk1nb/pp3p2/2pp4/4N1p1/2BPPp2/2N5/PPP3P1/R1BQK3": { "eco": "C38", "name": "King's Gambit Accepted: Greco Gambit" }, "rnbqk1nr/pppp1pbp/8/6p1/2B1Pp2/5N2/PPPP2PP/RNBQ1RK1": { "eco": "C38", "name": "King's Gambit Accepted: Hanstein Gambit" }, "rnbqk1nr/ppp2pbp/3p4/6p1/2BPPp2/2P2N2/PP4PP/RNBQK2R": { "eco": "C38", "name": "King's Gambit Accepted: Mayet Gambit" }, "rnbqk1nr/pppp1pbp/8/6p1/2B1Pp1P/5N2/PPPP2P1/RNBQK2R": { "eco": "C38", "name": "King's Gambit Accepted: Philidor Gambit" }, "rnbqk1nr/ppp2pb1/3p3p/6p1/2BPPp1P/3Q1N2/PPP3P1/RNB1K2R": { "eco": "C38", "name": "King's Gambit Accepted: Philidor Gambit, Schultz Variation" }, "rnbqkbnr/pppp1p1p/8/6N1/4PppP/8/PPPP2P1/RNBQKB1R": { "eco": "C39", "name": "King's Gambit Accepted: Allgaier Gambit" }, "rnbq1bnr/pppp1k2/7p/8/3PPppP/8/PPP3P1/RNBQKB1R": { "eco": "C39", "name": "King's Gambit Accepted: Allgaier Gambit, Thorold Attack" }, "rnbq1bnr/pppp1k2/7p/8/2B1PppP/8/PPPP2P1/RNBQK2R": { "eco": "C39", "name": "King's Gambit Accepted: Allgaier Gambit, Urusov Attack" }, "rnbq1bnr/pppp1k2/7p/8/4PppP/2N5/PPPP2P1/R1BQKB1R": { "eco": "C39", "name": "King's Gambit Accepted: Allgaier, Blackburne Gambit" }, "rnbq1bnr/ppp3k1/7p/4B3/2BPp1pP/8/PPP3P1/RN1QK2R": { "eco": "C39", "name": "King's Gambit Accepted: Allgaier, Cook Variation" }, "rnbq1bnr/ppp3k1/7p/3B4/3PPppP/8/PPP3P1/RNBQK2R": { "eco": "C39", "name": "King's Gambit Accepted: Allgaier, Urusov Attack" }, "rnbqkbnr/pppp1p1p/8/4N3/4PppP/8/PPPP2P1/RNBQKB1R": { "eco": "C39", "name": "King's Gambit Accepted: Kieseritzky Gambit" }, "rnbqkb1r/pppp1p1p/5n2/4N3/3PPppP/8/PPP3P1/RNBQKB1R": { "eco": "C39", "name": "King's Gambit Accepted: Kieseritzky Gambit, Berlin Defense, Rubinstein Variation" }, "rnbqkb1r/ppp2p1p/5n2/3pN3/3PPBpP/8/PPP3P1/RN1QKB1R": { "eco": "C39", "name": "King's Gambit Accepted: Kieseritzky Gambit, Brentano Defense" }, "rnbqkb1r/ppp2p1p/8/3pN3/3PnBpP/8/PPPN2P1/R2QKB1R": { "eco": "C39", "name": "King's Gambit Accepted: Kieseritzky Gambit, Brentano Defense, Caro Variation" }, "rnb1k2r/ppp2p1p/5n2/3qN3/1b1P1ppP/2N5/PPP2KP1/R1BQ1B1R": { "eco": "C39", "name": "King's Gambit Accepted: Kieseritzky Gambit, Brentano Defense, Kaplanek Variation" }, "rnbqkbnr/pppp1N2/7p/8/4PppP/8/PPPP2P1/RNBQKB1R": { "eco": "C39", "name": "King's Gambit Accepted: Kieseritzky Gambit, Cotter Gambit" }, "rnbqk1n1/pppp1p1r/7b/4N2p/2BPPppP/2N5/PPP3P1/R1BQK2R": { "eco": "C39", "name": "King's Gambit Accepted: Kieseritzky, Long Whip Defense, Jaenisch Variation" }, "rnbqk2r/ppp2p1p/3b1n2/3PN3/2B2ppP/8/PPPP2P1/RNBQ1RK1": { "eco": "C39", "name": "King's Gambit Accepted: Kieseritzky, Rice Gambit" }, "rnb1kbnr/ppppq2p/8/4Np2/2BPPppP/8/PPP3P1/RNBQK2R": { "eco": "C39", "name": "King's Gambit Accepted: Kieseritzky, Salvio Defense, Cozio Variation" }, "rnbqkbnr/pppp1p1p/8/6p1/4Pp1P/5N2/PPPP2P1/RNBQKB1R": { "eco": "C39", "name": "King's Gambit Accepted: King Knight's Gambit" }, "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R": { "eco": "C40", "name": "King's Knight Opening" }, "rnb1kbnQ/ppppq2p/6p1/8/4P3/8/PPPP1PPP/RNB1KB1R": { "eco": "C40", "name": "King's Pawn Game: Damiano Defense, Damiano Gambit" }, "rnb1kbnr/pppp1ppp/6q1/4p3/2B1P3/5N2/PPPP1PPP/RNBQ1RK1": { "eco": "C40", "name": "King's Pawn Game: La Bourdonnais Gambit" }, "rnbqkbnr/pppp2pp/8/4pP2/8/5N2/PPPP1PPP/RNBQKB1R": { "eco": "C40", "name": "Latvian Gambit Accepted" }, "rnb1kbnr/ppp3pp/3p1q2/5p2/2NPP3/8/PPP2PPP/RNBQKB1R": { "eco": "C40", "name": "Latvian Gambit Accepted: Bilguer Variation" }, "rnb1kbnr/ppp3pp/3p1q2/8/2NPp3/8/PPP1BPPP/RNBQK2R": { "eco": "C40", "name": "Latvian Gambit Accepted: Bronstein Attack" }, "rnb1kbnr/ppp4p/3p1qp1/8/2NPp3/8/PPP1QPPP/RNB1KB1R": { "eco": "C40", "name": "Latvian Gambit Accepted: Bronstein Gambit" }, "rnb1kbnr/pppp2pp/5q2/8/2N1p3/3P4/PPP2PPP/RNBQKB1R": { "eco": "C40", "name": "Latvian Gambit Accepted: Foltys Variation" }, "rnb1kbnr/pppp2pp/5q2/5p2/2N1P3/8/PPPP1PPP/RNBQKB1R": { "eco": "C40", "name": "Latvian Gambit Accepted: Foltys-Leonhardt Variation" }, "rnb1kbnr/pppp2pp/5q2/8/2N1p3/2N5/PPPP1PPP/R1BQKB1R": { "eco": "C40", "name": "Latvian Gambit Accepted: Leonhardt Variation" }, "rnb1kbnr/pppp2pp/5q2/4Np2/3PP3/8/PPP2PPP/RNBQKB1R": { "eco": "C40", "name": "Latvian Gambit Accepted: Main Line" }, "rnb1kbnr/ppp3pp/3p1q2/8/3Pp3/4N3/PPP2PPP/RNBQKB1R": { "eco": "C40", "name": "Latvian Gambit Accepted: Nimzowitsch Attack" }, "rnbqkbnr/pppp2pp/8/4pp2/2P1P3/5N2/PP1P1PPP/RNBQKB1R": { "eco": "C40", "name": "Latvian Gambit: Diepstraten Countergambit" }, "rnbqkbnr/pppp2pp/8/4pp2/4P1P1/5N2/PPPP1P1P/RNBQKB1R": { "eco": "C40", "name": "Latvian Gambit: Lobster Gambit" }, "rnbqkbnr/pppp2pp/8/4pp2/3PP3/5N2/PPP2PPP/RNBQKB1R": { "eco": "C40", "name": "Latvian Gambit: Mason Countergambit" }, "rnbqkbnr/pppp2pp/8/4pp2/2B1P3/5N2/PPPP1PPP/RNBQK2R": { "eco": "C40", "name": "Latvian Gambit: Mayet Attack" }, "rnbqkbnr/pppp2pp/8/4pp2/4P3/2N2N2/PPPP1PPP/R1BQKB1R": { "eco": "C40", "name": "Latvian Gambit: Mlotkowski Variation" }, "rnbqkbnr/pppp2pp/8/4pp2/1P2P3/5N2/P1PP1PPP/RNBQKB1R": { "eco": "C40", "name": "Latvian Gambit: Senechaud Gambit" }, "rnbqkbnr/ppp2ppp/3p4/4p3/3PP3/5N2/PPP2PPP/RNBQKB1R": { "eco": "C41", "name": "Philidor Defense" }, "rnbqkbnr/ppp2ppp/3p4/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R": { "eco": "C41", "name": "Philidor Defense" }, "r2q1rk1/pp2bppp/2npbn2/2p3B1/4P3/2N2N2/PPP1BPPP/R2QR1K1": { "eco": "C41", "name": "Philidor Defense: Berger Variation" }, "rnbqkbnr/ppp2ppp/3p4/8/3pP3/2P2N2/PP3PPP/RNBQKB1R": { "eco": "C41", "name": "Philidor Defense: Bird Gambit" }, "rnbqkbnr/ppp2ppp/3p4/8/3NP3/8/PPP2PPP/RNBQKB1R": { "eco": "C41", "name": "Philidor Defense: Exchange Variation" }, "r1bqkbnr/pp1n1ppp/2pp4/4p3/2BPP3/2P2N2/PP3PPP/RNBQK2R": { "eco": "C41", "name": "Philidor Defense: Hanham Variation, Delmar Variation" }, "r1bqkbnr/pp1n1ppp/2pp4/4p3/2BPP3/5N2/PPP2PPP/RNBQ1RK1": { "eco": "C41", "name": "Philidor Defense: Hanham Variation, Krause Variation" }, "r1bqkbnr/pp1n1ppp/2pp4/4p3/2BPP3/2N2N2/PPP2PPP/R1BQK2R": { "eco": "C41", "name": "Philidor Defense: Hanham Variation, Schlechter Variation" }, "r1bqk1nr/pp1nbppp/2pp4/4P3/2B1P3/5N2/PPP2PPP/RNBQ1RK1": { "eco": "C41", "name": "Philidor Defense: Hanham Variation, Steiner Variation" }, "r1bqkbnr/pp1n1ppp/2pp4/4p1N1/2BPP3/8/PPP2PPP/RNBQK2R": { "eco": "C41", "name": "Philidor Defense: Hanham, Kmoch Variation" }, "r1bqk2r/pppnbBpp/3p1n2/4p3/3PP3/2N2N2/PPP2PPP/R1BQK2R": { "eco": "C41", "name": "Philidor Defense: Lion Variation, Bishop Sacrifice" }, "r1bqk2r/pppnbBpp/5n2/4p3/4P3/2N2N2/PPP2PPP/R1BQK2R": { "eco": "C41", "name": "Philidor Defense: Lion Variation, Delayed Bishop Sacrifice" }, "r1bq2k1/pppnbrpp/3pNn2/4p3/3PP3/2N5/PPP2PPP/R1BQK2R": { "eco": "C41", "name": "Philidor Defense: Lion Variation, Forcing Line" }, "r1bqkb1r/pppn1ppp/3p1n2/4p3/3PP1P1/2N2N2/PPP2P1P/R1BQKB1R": { "eco": "C41", "name": "Philidor Defense: Lion Variation, Shirov Gambit" }, "rnbqkb1r/ppp3pN/3p3n/5p2/2BpP3/8/PPP2PPP/RNBQK2R": { "eco": "C41", "name": "Philidor Defense: Lopez Countergambit, Jaenisch Variation" }, "rnbqkbnr/ppp2ppp/3p4/8/2BpP3/5N2/PPP2PPP/RNBQK2R": { "eco": "C41", "name": "Philidor Defense: Morphy Gambit" }, "rnbqkb1r/ppp2ppp/3p1n2/4P3/4P3/5N2/PPP2PPP/RNBQKB1R": { "eco": "C41", "name": "Philidor Defense: Nimzowitsch Variation" }, "rnbqkb1r/ppp2ppp/3p1n2/4p3/2BPP3/5N2/PPP2PPP/RNBQK2R": { "eco": "C41", "name": "Philidor Defense: Nimzowitsch Variation, Klein Variation" }, "rnbqkb1r/ppp2ppp/3p4/3QP3/4n3/5N2/PPP2PPP/RNB1KB1R": { "eco": "C41", "name": "Philidor Defense: Nimzowitsch Variation, Rellstab Variation" }, "rnbqkb1r/ppp2ppp/3p4/4P3/4n3/5N2/PPPN1PPP/R1BQKB1R": { "eco": "C41", "name": "Philidor Defense: Nimzowitsch Variation, Sokolsky Variation" }, "r1bq1rk1/pppnbBpp/3p1n2/4p1N1/3PP3/2N5/PPP2PPP/R1BQK2R": { "eco": "C41", "name": "Philidor Defense: Nimzowitsch, Larobok Variation" }, "rnbqkb1r/ppp2ppp/3p1n2/4p1N1/3PP3/8/PPP2PPP/RNBQKB1R": { "eco": "C41", "name": "Philidor Defense: Nimzowitsch, Locock Variation" }, "rnbqkbnr/ppp2ppp/8/3P4/3N4/8/PPP2PPP/RNBQKB1R": { "eco": "C41", "name": "Philidor Defense: Paulsen Attack" }, "rnbqk1nr/ppp3pp/4P3/2bp2N1/4p3/2N5/PPP2PPP/R1BQKB1R": { "eco": "C41", "name": "Philidor Defense: Philidor Countergambit, Berger Variation" }, "rnbqkbnr/ppp3pp/3p4/4pp2/3PP3/2N2N2/PPP2PPP/R1BQKB1R": { "eco": "C41", "name": "Philidor Defense: Philidor Countergambit, Zukertort Variation" }, "rnbqkbnr/ppp3pp/4P3/3p2N1/4p3/8/PPP2PPP/RNBQKB1R": { "eco": "C41", "name": "Philidor Defense: Philidor Countergambit, del Rio Attack" }, "rnbqk1nr/ppp1bppp/3p4/4p3/2B1P3/2P2N2/PP1P1PPP/RNBQK2R": { "eco": "C41", "name": "Philidor Defense: Steinitz Variation" }, "rnbqkb1r/pppp1ppp/5n2/4N3/4P3/8/PPPP1PPP/RNBQKB1R": { "eco": "C42", "name": "Russian Game" }, "rnbqkb1r/ppp2ppp/3p1n2/8/4P3/5N2/PPPP1PPP/RNBQKB1R": { "eco": "C42", "name": "Russian Game" }, "rnbqkb1r/ppp2ppp/3p4/8/3Pn3/5N2/PPP2PPP/RNBQKB1R": { "eco": "C42", "name": "Russian Game: Classical Attack" }, "r2qk2r/ppp1b1pp/2n5/3p1p2/3Pn1b1/2PB1N2/PP1N1PPP/R1BQR1K1": { "eco": "C42", "name": "Russian Game: Classical Attack, Berger Variation" }, "r1bqk2r/ppp1bppp/2n5/3p4/3Pn3/3B1N2/PPP2PPP/RNBQR1K1": { "eco": "C42", "name": "Russian Game: Classical Attack, Chigorin Variation" }, "r1bqk2r/ppp1bppp/8/3P4/1n1Pn3/3B1N2/PP3PPP/RNBQ1RK1": { "eco": "C42", "name": "Russian Game: Classical Attack, Chigorin Variation, Browne Attack" }, "r1bqk2r/ppp1bppp/8/3p4/1nPPn3/5N2/PP2BPPP/RNBQ1RK1": { "eco": "C42", "name": "Russian Game: Classical Attack, Chigorin Variation, Main Line" }, "r1bqk2r/ppp1bppp/2n5/3p4/2PPn3/3B1N2/PP3PPP/RNBQ1RK1": { "eco": "C42", "name": "Russian Game: Classical Attack, Jaenisch Variation" }, "r2qk2r/ppp1b1pp/2n5/3p1p2/2PPn1b1/3B1N2/PP3PPP/RNBQR1K1": { "eco": "C42", "name": "Russian Game: Classical Attack, Krause Variation" }, "rnbqkb1r/ppp2Npp/3p1n2/8/4P3/8/PPPP1PPP/RNBQKB1R": { "eco": "C42", "name": "Russian Game: Cochrane Gambit" }, "rnbq1b1r/ppp2kpp/3p1n2/8/2B1P3/8/PPPP1PPP/RNBQK2R": { "eco": "C42", "name": "Russian Game: Cochrane Gambit, Bishop Check Line" }, "rnbq1b1r/ppp2kpp/3p1n2/8/3PP3/8/PPP2PPP/RNBQKB1R": { "eco": "C42", "name": "Russian Game: Cochrane Gambit, Center Variation" }, "rnbqkb1r/ppp2ppp/3p4/8/4n3/5N2/PPPPQPPP/RNB1KB1R": { "eco": "C42", "name": "Russian Game: Cozio (Lasker) Attack" }, "rnbqkb1r/ppp2ppp/3p4/8/4n3/3P1N2/PPP2PPP/RNBQKB1R": { "eco": "C42", "name": "Russian Game: French Attack" }, "rnbqkb1r/ppp2ppp/3p1n2/8/4P3/3N4/PPPP1PPP/RNBQKB1R": { "eco": "C42", "name": "Russian Game: Karklins-Martinovsky Variation" }, "rnbqkb1r/ppp2ppp/3p4/8/2P1n3/5N2/PP1P1PPP/RNBQKB1R": { "eco": "C42", "name": "Russian Game: Kaufmann Attack" }, "rnbqkb1r/ppp2ppp/3p4/8/4n3/3B1N2/PPPP1PPP/RNBQK2R": { "eco": "C42", "name": "Russian Game: Millennium Attack" }, "r1bqkb1r/pppp1ppp/2n2n2/4p3/3PP3/5N2/PPP1QPPP/RNB1KB1R": { "eco": "C42", "name": "Russian Game: Moody Gambit" }, "rnbqkb1r/ppp2ppp/3p4/8/4n3/2N2N2/PPPP1PPP/R1BQKB1R": { "eco": "C42", "name": "Russian Game: Nimzowitsch Attack" }, "rnbqkb1r/ppp2ppp/3p1n2/8/2N1P3/8/PPPP1PPP/RNBQKB1R": { "eco": "C42", "name": "Russian Game: Paulsen Attack" }, "rnbqkb1r/pppp1ppp/5n2/4p3/4P3/2N2N2/PPPP1PPP/R1BQKB1R": { "eco": "C42", "name": "Russian Game: Three Knights Game" }, "rnbqkb1r/pppp1ppp/5n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R": { "eco": "C42", "name": "Russian Game: Urusov Gambit" }, "rnbqkb1r/pppp1ppp/5n2/8/2BpP3/5N2/PPP2PPP/RNBQK2R": { "eco": "C43", "name": "Bishop's Opening: Urusov Gambit" }, "rnbqkb1r/pppp1ppp/8/8/2BQn3/5N2/PPP2PPP/RNB1K2R": { "eco": "C43", "name": "Bishop's Opening: Urusov Gambit, Keidansky Gambit" }, "rnbqkb1r/pppp1ppp/5n2/4p3/3PP3/5N2/PPP2PPP/RNBQKB1R": { "eco": "C43", "name": "Russian Game: Modern Attack" }, "rnbqkb1r/pppp1ppp/8/4P3/3Qn3/5N2/PPP2PPP/RNB1KB1R": { "eco": "C43", "name": "Russian Game: Modern Attack, Center Attack" }, "rnbqkb1r/pppp1ppp/8/4p3/3Pn3/3B1N2/PPP2PPP/RNBQK2R": { "eco": "C43", "name": "Russian Game: Modern Attack, Center Variation" }, "rnbqkb1r/pppp1ppp/8/4P3/3pn3/5N2/PPP1QPPP/RNB1KB1R": { "eco": "C43", "name": "Russian Game: Modern Attack, Steinitz Variation" }, "rnbqkb1r/pppp1ppp/8/1B2P3/3pn3/5N2/PPP2PPP/RNBQK2R": { "eco": "C43", "name": "Russian Game: Modern Attack, Tal Gambit" }, "r1bqkb1r/pppp1ppp/2n2n2/4N3/2P1P3/8/PP1P1PPP/RNBQKB1R": { "eco": "C44", "name": "Dresden Opening: The Goblin" }, "r1bqkbnr/pppp1ppp/2n5/4N3/4P3/8/PPPP1PPP/RNBQKB1R": { "eco": "C44", "name": "Irish Gambit" }, "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5NP1/PPPP1P1P/RNBQKB1R": { "eco": "C44", "name": "King's Knight Opening: Konstantinopolsky" }, "r1bqkbnr/pppp1ppp/2n5/4p3/2P1P3/5N2/PP1P1PPP/RNBQKB1R": { "eco": "C44", "name": "King's Pawn Game: Dresden Opening" }, "r1bqkbnr/pppp1ppp/2n5/4p3/1P2P3/5N2/P1PP1PPP/RNBQKB1R": { "eco": "C44", "name": "King's Pawn Game: Pachman Wing Gambit" }, "r1bqkbnr/pppp1ppp/8/4n3/3PP3/8/PPP2PPP/RNBQKB1R": { "eco": "C44", "name": "King's Pawn Game: Schulze-Müller Gambit" }, "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPPBPPP/RNBQK2R": { "eco": "C44", "name": "King's Pawn Game: Tayler Opening" }, "r1bqkb1r/pppp1ppp/2n2n2/4P3/3p4/5N2/PPP1BPPP/RNBQK2R": { "eco": "C44", "name": "King's Pawn Game: Tayler Opening, Basman Gambit" }, "r1bqkb1r/ppp2ppp/2n2n2/3pp3/4P3/3P1N2/PPPNBPPP/R1BQK2R": { "eco": "C44", "name": "King's Pawn Game: Tayler Opening, Inverted Hanham" }, "r1bqkbnr/pppp2pp/2n5/4pP2/8/3P1N2/PPP2PPP/RNBQKB1R": { "eco": "C44", "name": "Latvian Gambit: Clam Gambit" }, "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/2P2N2/PP1P1PPP/RNBQKB1R": { "eco": "C44", "name": "Ponziani Opening" }, "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/2P2N2/PP1P1PPP/RNBQK2R": { "eco": "C44", "name": "Ponziani Opening: Neumann Gambit" }, "r1bqkbnr/ppp3pp/2np4/3Ppp2/4P3/2P2N2/PP3PPP/RNBQKB1R": { "eco": "C44", "name": "Ponziani Opening: Ponziani Countergambit, Schmidt Attack" }, "r1bqkbnr/ppp2ppp/2n5/1B1pp3/4P3/2P2N2/PP1P1PPP/RNBQK2R": { "eco": "C44", "name": "Ponziani Opening: Spanish Variation" }, "r1b1kbnr/ppp2ppp/2n5/1B1qN3/Q3p3/2P5/PP1P1PPP/RNB1K2R": { "eco": "C44", "name": "Ponziani Opening: Spanish Variation, Harrwitz Attack, Nikitin Gambit" }, "r1bqkbnr/pppp1ppp/2n5/4p3/3PP3/5N2/PPP2PPP/RNBQKB1R": { "eco": "C44", "name": "Scotch Game" }, "r1bqkb1r/pp1p1Npp/2p1nn2/8/2B1P3/8/PPP2PPP/RNBQ1RK1": { "eco": "C44", "name": "Scotch Game: Cochrane Variation" }, "r1bqk1nr/pppp1ppp/2n5/b3P3/2B5/2P2N2/P4PPP/RNBQK2R": { "eco": "C44", "name": "Scotch Game: Cochrane Variation" }, "r1bqkbnr/pppp1ppp/2n5/8/3pP3/2P2N2/PP3PPP/RNBQKB1R": { "eco": "C44", "name": "Scotch Game: Göring Gambit" }, "r1bqkbnr/pppp1ppp/2n5/8/2B1P3/2p2N2/PP3PPP/RNBQK2R": { "eco": "C44", "name": "Scotch Game: Göring Gambit, Double Pawn Sacrifice" }, "r1bqkbnr/pppp1ppp/8/8/2BpP3/8/PPP2PPP/RNBQK2R": { "eco": "C44", "name": "Scotch Game: Napoleon Gambit" }, "r1bqkbnr/pppp1ppp/2n5/1B6/3pP3/5N2/PPP2PPP/RNBQK2R": { "eco": "C44", "name": "Scotch Game: Relfsson Gambit" }, "r1bqkbnr/pppp1ppp/2n5/8/2BpP3/5N2/PPP2PPP/RNBQK2R": { "eco": "C44", "name": "Scotch Game: Scotch Gambit" }, "r1bqkb1r/pppp1ppp/2n2n2/4P3/2Bp4/5N2/PPP2PPP/RNBQK2R": { "eco": "C44", "name": "Scotch Game: Scotch Gambit, Advance Variation" }, "r1bqk1nr/pppp1ppp/2n5/2b3N1/2BpP3/8/PPP2PPP/RNBQK2R": { "eco": "C44", "name": "Scotch Game: Scotch Gambit, Sarratt Variation" }, "r2q1bnr/ppp1kBpp/3p4/3NN3/4P3/8/PP3PPP/R1Bb1RK1": { "eco": "C44", "name": "Scotch Game: Sea-cadet Mate" }, "r1bqk2r/pppp1ppp/2n4n/2b3NQ/2BpP3/8/PPP2PPP/RNB1K2R": { "eco": "C44", "name": "Scotch Game: Vitzthum Attack" }, "r1bqkb1r/pppp1ppp/2n2n2/4p3/3PP3/5N2/PPP1BPPP/RNBQK2R": { "eco": "C44", "name": "Tayler Opening" }, "r1bqkbnr/pppp1ppp/2n5/8/3NP3/8/PPP2PPP/RNBQKB1R": { "eco": "C45", "name": "Scotch Game" }, "r1b1k1nr/pppp1ppp/2n5/1N6/1b2P2q/8/PPPB1PPP/RN1QKB1R": { "eco": "C45", "name": "Scotch Game" }, "r1bqkb1r/pppp1ppp/2n2n2/4P3/3N4/8/PPP2PPP/RNBQKB1R": { "eco": "C45", "name": "Scotch Game: Alekhine Gambit" }, "N1bk3r/pp1p1ppp/2n2n2/8/1b6/P4B1q/1PPN1P1P/R1BQK2R": { "eco": "C45", "name": "Scotch Game: Berger Variation" }, "r1b1k1nr/pppp1ppp/2n2q2/1Nb5/4P3/4B3/PPP2PPP/RN1QKB1R": { "eco": "C45", "name": "Scotch Game: Blumenfeld Attack" }, "r1b1kbnr/pppp1ppp/2n5/8/3NP2q/4B3/PPP2PPP/RN1QKB1R": { "eco": "C45", "name": "Scotch Game: Braune Variation" }, "r1b1k2r/ppppnppp/2n2q2/2b5/3NP3/2P1B3/PP1Q1PPP/RN2KB1R": { "eco": "C45", "name": "Scotch Game: Classical Variation, Blackburne Attack" }, "r1b1kbnr/pppp1ppp/2n5/8/4P2q/5N2/PPP2PPP/RNBQKB1R": { "eco": "C45", "name": "Scotch Game: Fraser Variation" }, "r1bqkbnr/ppp2ppp/3p4/8/3QP3/3B4/PPP2PPP/RNB1K2R": { "eco": "C45", "name": "Scotch Game: Ghulam-Kassim Variation" }, "r1b1kbnr/pppp1ppp/2n5/1N6/4P2q/8/PPP2PPP/RNBQKB1R": { "eco": "C45", "name": "Scotch Game: Horwitz Attack" }, "r1bk2nr/pppp1ppp/2n5/1N6/4q3/8/PPPQBPPP/RN3RK1": { "eco": "C45", "name": "Scotch Game: Horwitz Attack, Blackburne Variation" }, "r1bk2nr/pppp1ppp/2n5/1N6/P4q2/8/1PPNBPPP/R2Q1RK1": { "eco": "C45", "name": "Scotch Game: Horwitz Attack, McDonnell Variation" }, "r1bk2nr/pppp1ppp/2n5/1N6/2P2q2/8/PP1NBPPP/R2Q1RK1": { "eco": "C45", "name": "Scotch Game: Horwitz Attack, Vienna Variation" }, "r1b1k2r/ppppnppp/2n2q2/2b5/4P3/2P1B3/PPN2PPP/RN1QKB1R": { "eco": "C45", "name": "Scotch Game: Meitner Variation" }, "r1bqkb1r/p1pp1ppp/2p2n2/4P3/8/8/PPP2PPP/RNBQKB1R": { "eco": "C45", "name": "Scotch Game: Mieses Variation" }, "r1b1k2r/ppppnppp/2n2q2/1Bb5/3NP3/2P1B3/PP3PPP/RN1QK2R": { "eco": "C45", "name": "Scotch Game: Paulsen Attack" }, "r1b1kbnr/pppp1ppp/2n5/5N2/4P2q/8/PPP2PPP/RNBQKB1R": { "eco": "C45", "name": "Scotch Game: Paulsen Variation" }, "r1bqk1nr/pppp1ppp/2n5/2b5/4P3/1N6/PPP2PPP/RNBQKB1R": { "eco": "C45", "name": "Scotch Game: Potter Variation" }, "r1b1kbnr/pppp1ppp/2n5/8/3NP2q/2N5/PPP2PPP/R1BQKB1R": { "eco": "C45", "name": "Scotch Game: Steinitz Variation" }, "r1bqkb1r/p1pp1ppp/2p2n2/8/4P3/8/PPPN1PPP/R1BQKB1R": { "eco": "C45", "name": "Scotch Game: Tartakower Variation" }, "r1bqkb1r/pppp1ppp/2n2n2/4p3/4P3/P1N2N2/1PPP1PPP/R1BQKB1R": { "eco": "C46", "name": "Four Knights Game: Gunsberg Variation" }, "r1bqkb1r/pppp1ppp/2n2n2/4N3/4P3/2N5/PPPP1PPP/R1BQKB1R": { "eco": "C46", "name": "Four Knights Game: Halloween Gambit" }, "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R": { "eco": "C46", "name": "Four Knights Game: Italian Variation" }, "r1bqkb1r/pppp1Bpp/2n5/4p3/4n3/2N2N2/PPPP1PPP/R1BQK2R": { "eco": "C46", "name": "Four Knights Game: Italian Variation, Noa Gambit" }, "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/2N2N2/PPPP1PPP/R1BQKB1R": { "eco": "C46", "name": "Three Knights Opening" }, "r1bqkbnr/pppp1p1p/2n3p1/3N4/3pP3/5N2/PPP2PPP/R1BQKB1R": { "eco": "C46", "name": "Three Knights Opening: Steinitz-Rosenthal Variation" }, "r1bqkb1r/pppp1ppp/2n2n2/4p3/3PP3/2N2N2/PPP2PPP/R1BQKB1R": { "eco": "C47", "name": "Four Knights Game: Scotch Variation" }, "r1bqkb1r/pppp1ppp/2n2n2/3N4/3pP3/5N2/PPP2PPP/R1BQKB1R": { "eco": "C47", "name": "Four Knights Game: Scotch Variation, Belgrade Gambit" }, "r1bqk2r/pppp1ppp/2n2n2/4N3/1b1PP3/2N5/PPP2PPP/R1BQKB1R": { "eco": "C47", "name": "Four Knights Game: Scotch Variation, Krause Gambit" }, "r1bqkb1r/1ppp1ppp/p1B2n2/4p3/4P3/2N2N2/PPPP1PPP/R1BQK2R": { "eco": "C48", "name": "Four Knights Game: Ranken Variation" }, "r1bqkb1r/pppp1ppp/5n2/4p3/3nP3/2N2N2/PPPPBPPP/R1BQK2R": { "eco": "C48", "name": "Four Knights Game: Rubinstein Countergambit" }, "r1bqkb1r/pppp1ppp/5n2/1B2p3/3nP3/2N2N2/PPPP1PPP/R1BQ1RK1": { "eco": "C48", "name": "Four Knights Game: Rubinstein Countergambit, Henneberger Variation" }, "r1bqkb1r/pppp1ppp/2n2n2/1B2p3/4P3/2N2N2/PPPP1PPP/R1BQK2R": { "eco": "C48", "name": "Four Knights Game: Spanish Variation" }, "r1b1kb1r/ppppqppp/5n2/1B2N3/3nPP2/2N5/PPPP2PP/R1BQK2R": { "eco": "C48", "name": "Four Knights Game: Spanish Variation, Rubinstein Variation" }, "r1bqkb1r/pppp1ppp/5n2/1B2p3/3NP3/2N5/PPPP1PPP/R1BQK2R": { "eco": "C48", "name": "Four Knights Game: Spanish Variation, Rubinstein Variation Accepted" }, "r1bq1rk1/pppp1ppp/2n2n2/1B2p3/1b2P3/2NP1N2/PPP2PPP/R1BQ1RK1": { "eco": "C49", "name": "Four Knights Game: Double Spanish" }, "r1bq1rk1/ppp2ppp/2np1n2/1B2p3/4P3/2PP1N2/P1P2PPP/R1BQR1K1": { "eco": "C49", "name": "Four Knights Game: Janowski Variation" }, "r1bq1rk1/pppp1ppp/2B2n2/4p3/1b2P3/2N2N2/PPPP1PPP/R1BQ1RK1": { "eco": "C49", "name": "Four Knights Game: Nimzowitsch (Paulsen)" }, "r1bq1rk1/ppp2ppp/2np1n2/1B2p3/1b2P3/3P1N2/PPP1NPPP/R1BQ1RK1": { "eco": "C49", "name": "Four Knights Game: Spanish Variation, Symmetrical Variation" }, "r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R": { "eco": "C50", "name": "Italian Game" }, "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2P2N2/PP1P1PPP/RNBQ1RK1": { "eco": "C50", "name": "Italian Game: Classical Variation, Albin Gambit" }, "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2BPP3/5N2/PPP2PPP/RNBQ1RK1": { "eco": "C50", "name": "Italian Game: Deutz Gambit" }, "r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/3P1N2/PPP2PPP/RNBQK2R": { "eco": "C50", "name": "Italian Game: Giuoco Pianissimo" }, "r1bqk2r/ppp2ppp/2np1n2/2b1p1B1/2B1P3/2NP1N2/PPP2PPP/R2QK2R": { "eco": "C50", "name": "Italian Game: Giuoco Pianissimo, Canal Variation" }, "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2NP1N2/PPP2PPP/R1BQK2R": { "eco": "C50", "name": "Italian Game: Giuoco Pianissimo, Italian Four Knights Variation" }, "r1bqk1nr/pppp1Bpp/2n5/2b1p3/4P3/5N2/PPPP1PPP/RNBQK2R": { "eco": "C50", "name": "Italian Game: Jerome Gambit" }, "r1bqk1nr/pppp1ppp/2n5/2b1p3/2BPP3/5N2/PPP2PPP/RNBQK2R": { "eco": "C50", "name": "Italian Game: Rosentreter Gambit" }, "r1bqk1nr/pppp1ppp/2n5/2b1p3/1PB1P3/5N2/P1PP1PPP/RNBQK2R": { "eco": "C51", "name": "Italian Game: Evans Gambit" }, "r1bqk1nr/pppp1ppp/1bn5/4p3/PPB1P3/5N2/2PP1PPP/RNBQK2R": { "eco": "C51", "name": "Italian Game: Evans Gambit Declined" }, "r1bqk1nr/pppp1ppp/1bn5/4p3/1PB1P3/5N2/PBPP1PPP/RN1QK2R": { "eco": "C51", "name": "Italian Game: Evans Gambit Declined, Cordel Variation" }, "r1bk2nr/pppp1Qpp/1b6/nP2q3/2B1P3/8/PBPP1PPP/RN2K2R": { "eco": "C51", "name": "Italian Game: Evans Gambit Declined, Hicken Variation" }, "r1b3r1/ppp2k1p/1b6/nP2B1q1/3PP3/8/P1PN1PPP/R2QK2R": { "eco": "C51", "name": "Italian Game: Evans Gambit Declined, Pavlov Variation" }, "r1bqk1nr/1ppp1ppp/pbn5/4p3/PPB1P3/2N2N2/2PP1PPP/R1BQK2R": { "eco": "C51", "name": "Italian Game: Evans Gambit Declined, Showalter Variation" }, "r1b3nr/ppppkBpp/1b6/nP2N1qQ/4P3/8/P1PP1PPP/RNB1K2R": { "eco": "C51", "name": "Italian Game: Evans Gambit Declined, Vasquez Variation" }, "r2qk1nr/ppp2ppp/1bnp4/8/Q1BPP1b1/2N2N2/P4PPP/R1B2RK1": { "eco": "C51", "name": "Italian Game: Evans Gambit, Fraser Attack" }, "r2q1knr/pppb1Bpp/1b1p4/n7/3PP3/2N2N2/P1Q2PPP/R1B2RK1": { "eco": "C51", "name": "Italian Game: Evans Gambit, Fraser-Mortimer Attack" }, "r1bqk1nr/ppp2ppp/1b1p4/n5B1/2BPP3/2N2N2/P4PPP/R2Q1RK1": { "eco": "C51", "name": "Italian Game: Evans Gambit, Göring Attack" }, "r1bqk1nr/pppp1ppp/2n5/8/1bBPP3/5N2/P2B1PPP/RN1QK2R": { "eco": "C51", "name": "Italian Game: Evans Gambit, Harding Variation" }, "r1bqk1nr/ppp2ppp/1bnp4/8/2BPP3/2N2N2/P4PPP/R1BQ1RK1": { "eco": "C51", "name": "Italian Game: Evans Gambit, Morphy Attack" }, "r1bqk1nr/ppp3pp/1b1p1p2/n7/2BPP3/2N1BN2/P4PPP/R2Q1RK1": { "eco": "C51", "name": "Italian Game: Evans Gambit, Steinitz Variation" }, "r1bqk1nr/ppp2ppp/1b1p4/n2P4/2B1P3/5N2/PB3PPP/RN1Q1RK1": { "eco": "C51", "name": "Italian Game: Evans Gambit, Ulvestad Variation" }, "r1b1k2r/ppppnppp/2n3q1/b3P3/2B5/BQN2N2/P4PPP/R4RK1": { "eco": "C52", "name": "Italian Game: Evans Gambit, Compromised Defense, Main Line" }, "r1b1k2r/ppppnppp/2n3q1/b3P3/2B5/1QN2N2/P4PPP/R1BR2K1": { "eco": "C52", "name": "Italian Game: Evans Gambit, Compromised Defense, Potter Variation" }, "r1b1k1nr/pppq1ppp/1b6/n3N3/2B1P3/BQP5/P4PPP/RN3RK1": { "eco": "C52", "name": "Italian Game: Evans Gambit, Levenfish Variation" }, "r1bq1rk1/pppp1ppp/2n2n2/b3N3/2BPP3/2P5/P4PPP/RNBQ1RK1": { "eco": "C52", "name": "Italian Game: Evans Gambit, Richardson Attack" }, "r1bqk1nr/pppp1ppp/2n5/b3p3/2B1P3/2P2N2/P2P1PPP/RNBQ1RK1": { "eco": "C52", "name": "Italian Game: Evans Gambit, Slow Variation" }, "r1bqk1nr/ppp2ppp/2np4/b3p1B1/2BPP3/2P2N2/P4PPP/RN1QK2R": { "eco": "C52", "name": "Italian Game: Evans Gambit, Sokolsky Variation" }, "r1bqk1nr/ppp2ppp/2np4/b3p3/2BPP3/1QP2N2/P4PPP/RNB1K2R": { "eco": "C52", "name": "Italian Game: Evans Gambit, Tartakower Attack" }, "r1bqk1nr/ppp2ppp/2np4/b7/2BpP3/1QP2N2/P4PPP/RNB2RK1": { "eco": "C52", "name": "Italian Game: Evans Gambit, Waller Attack" }, "r1bqk2r/pppp1ppp/2n2n2/2b1p3/1PB1P3/2P2N2/P2P1PPP/RNBQK2R": { "eco": "C53", "name": "Italian Game: Bird's Attack" }, "r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/2P2N2/PP1P1PPP/RNBQK2R": { "eco": "C53", "name": "Italian Game: Classical Variation" }, "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2BPP3/2P2N2/PP3PPP/RNBQK2R": { "eco": "C53", "name": "Italian Game: Classical Variation, Center Attack" }, "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2PP1N2/PP3PPP/RNBQK2R": { "eco": "C53", "name": "Italian Game: Classical Variation, Giuoco Pianissimo" }, "r1bq1rk1/bpp2ppp/p1np1n2/4p3/4P3/1BPP1N1P/PP3PP1/RNBQR1K1": { "eco": "C53", "name": "Italian Game: Classical Variation, Giuoco Pianissimo, Main Line" }, "r1b1k2r/1pp1qppp/pbnp1n2/4p3/P1BPP3/2P2N1P/1P3PP1/RNBQR1K1": { "eco": "C53", "name": "Italian Game: Classical Variation, Tarrasch Variation" }, "rnb1k1nr/ppppqppp/1b1P4/4p3/2B1P3/2P2N2/PP3PPP/RNBQK2R": { "eco": "C53", "name": "Italian Game: Giuoco Piano, Eisinger Variation" }, "r1bqk2r/pppp1ppp/2n5/2bBP3/8/2p2NK1/PP4PP/RNBQ3R": { "eco": "C53", "name": "Italian Game: Giuoco Piano, Ghulam-Kassim Variation" }, "r1b1k1nr/ppppqppp/1bn5/4p1B1/2BPP3/2P2N2/PP3PPP/RN1QK2R": { "eco": "C53", "name": "Italian Game: Giuoco Piano, Mestel Variation" }, "r1bqk2r/pppp1ppp/2n2n2/2b5/2BpP3/2P2N2/PP3PPP/RNBQ1RK1": { "eco": "C53", "name": "Italian Game: Scotch Gambit, Walbrodt-Baird Gambit" }, "r1bqk2r/ppp1nppp/3p1b2/3P4/2B1R1P1/5N2/PP3P1P/R1BQ2K1": { "eco": "C54", "name": "Italian Game: Classical Variation, Greco Gambit, Moeller-Bayonet Attack" }, "r1bqk2r/pppp1ppp/2n5/3P4/2B1n3/2b2N2/PP3PPP/R1BQ1RK1": { "eco": "C54", "name": "Italian Game: Classical Variation, Greco Gambit, Moeller-Therkatz Attack" }, "r1bqk2r/pppp1ppp/2n2n2/2b5/2BPP3/5N2/PP3PPP/RNBQK2R": { "eco": "C54", "name": "Italian Game: Classical Variation, Greco Gambit, Traditional Line" }, "r1bqk2r/pppp1ppp/2n5/8/2BP4/B1b2N2/P4PPP/R2Q1RK1": { "eco": "C54", "name": "Italian Game: Giuoco Piano, Aitken Variation" }, "r1bqk2r/pppp1ppp/2n2n2/8/1bBPP3/5N2/PP3PPP/RNBQ1K1R": { "eco": "C54", "name": "Italian Game: Giuoco Piano, Cracow Variation" }, "r1bqk2r/pppp1ppp/2n2n2/8/1bBPP3/2N2N2/PP3PPP/R1BQK2R": { "eco": "C54", "name": "Italian Game: Giuoco Piano, Greco's Attack" }, "r1bq3r/ppp3pp/5k2/3pN3/1n1Pn3/1Q3P2/PP4PP/RN2K2R": { "eco": "C54", "name": "Italian Game: Giuoco Piano, Krause Variation" }, "r1bqk2r/ppp2ppp/2n5/3p4/2BPn3/B1P2N2/P4PPP/R2Q1RK1": { "eco": "C54", "name": "Italian Game: Giuoco Piano, Steinitz Variation" }, "r1bq1rk1/ppp1nppN/3p4/3P4/2B1R3/8/PP3PPP/R2Q2K1": { "eco": "C54", "name": "Italian Game: Giuoco Piano, Therkatz-Herzog Variation" }, "r1b1k2r/ppp1qppp/5n2/4p1B1/2BnP3/2N5/PPP3PP/R2Q1RK1": { "eco": "C55", "name": "Italian Game: Giuoco Piano, Holzhausen Attack" }, "r1bqk2r/pppp1p2/5n1p/4p1p1/2BnPP1B/8/PPP3PP/RN1Q1RK1": { "eco": "C55", "name": "Italian Game: Giuoco Piano, Rosentreter Variation" }, "r1bqkb1r/pppp1ppp/2n2n2/8/2BpP3/5N2/PPP2PPP/RNBQ1RK1": { "eco": "C55", "name": "Italian Game: Scotch Gambit" }, "r2qk2r/ppp2pPp/2n1b3/2b5/2pp4/5N2/PPP2PPP/RNBQR1K1": { "eco": "C55", "name": "Italian Game: Scotch Gambit, Max Lange Attack Accepted" }, "r3k2r/ppp2ppp/2n1bP2/2b2qN1/2ppN3/8/PPP2PPP/R1BQR1K1": { "eco": "C55", "name": "Italian Game: Scotch Gambit, Max Lange Attack, Long Variation" }, "r1bqk2r/pppp1ppp/2n2n2/2b1P3/2Bp4/5N2/PPP2PPP/RNBQ1RK1": { "eco": "C55", "name": "Italian Game: Two Knights Defense, Max Lange Attack" }, "r1bqk2r/pppp1ppp/2n5/2b1P3/2Bp2n1/2P2N2/PP3PPP/RNBQ1RK1": { "eco": "C55", "name": "Italian Game: Two Knights Defense, Max Lange Attack, Krause Variation" }, "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/3P1N2/PPP2PPP/RNBQK2R": { "eco": "C55", "name": "Italian Game: Two Knights Defense, Modern Bishop's Opening" }, "r1bqkb1r/pppp1ppp/2n2n2/4p3/2BPP3/5N2/PPP2PPP/RNBQK2R": { "eco": "C55", "name": "Italian Game: Two Knights Defense, Open Variation" }, "r1bqkb1r/pppp1ppp/2n2n2/6N1/2BpP3/8/PPP2PPP/RNBQK2R": { "eco": "C55", "name": "Italian Game: Two Knights Defense, Perreux Variation" }, "r1b1kb1r/ppp2ppp/2n5/3q4/3pn3/2N2N2/PPP2PPP/R1BQR1K1": { "eco": "C56", "name": "Italian Game: Scotch Gambit, Anderssen Attack" }, "r3kb1r/ppp2ppp/2n1b3/3q2B1/3pN3/5N2/PPP2PPP/R2QR1K1": { "eco": "C56", "name": "Italian Game: Scotch Gambit, Anderssen Attack, Main Line" }, "r1bqkb1r/ppp2ppp/2n5/3p4/2Bpn3/2N2N2/PPP2PPP/R1BQR1K1": { "eco": "C56", "name": "Italian Game: Scotch Gambit, Canal Variation" }, "r1bqkb1r/pppp1ppp/2n5/8/2Bpn3/2N2N2/PPP2PPP/R1BQ1RK1": { "eco": "C56", "name": "Italian Game: Scotch Gambit, Nakhmanson Gambit" }, "r4b1r/ppp1kp2/2n1bN1p/q5p1/1P1p3B/5N2/P1P2PPP/R2QR1K1": { "eco": "C56", "name": "Italian Game: Two Knights Defense, Yurdansky Attack" }, "r1bqkb1r/ppp2Npp/2n5/3np3/2B5/8/PPPP1PPP/RNBQK2R": { "eco": "C57", "name": "Italian Game: Two Knights Defense, Fried Liver Attack" }, "r1bqkb1r/p1p2ppp/8/1p1np3/3nN3/2P5/PP1P1PPP/RNBQKB1R": { "eco": "C57", "name": "Italian Game: Two Knights Defense, Fritz, Gruber Variation" }, "r1bqkb1r/pppp1ppp/2n2n2/4p1N1/2B1P3/8/PPPP1PPP/RNBQK2R": { "eco": "C57", "name": "Italian Game: Two Knights Defense, Knight Attack" }, "r1bqkb1r/ppp2ppp/2n5/3np1N1/2BP4/8/PPP2PPP/RNBQK2R": { "eco": "C57", "name": "Italian Game: Two Knights Defense, Lolli Attack" }, "r1bqk2r/pppp1Bpp/2n2n2/2b1p1N1/4P3/8/PPPP1PPP/RNBQK2R": { "eco": "C57", "name": "Italian Game: Two Knights Defense, Traxler Counterattack, Bishop Sacrifice Line" }, "r1bqk2r/pppp1Npp/2n5/4p3/2B1n3/4K3/PPPP2PP/RNBQ3R": { "eco": "C57", "name": "Italian Game: Two Knights Defense, Traxler Counterattack, King March Line" }, "r1bqk2r/pppp1Npp/2n2n2/2b1p3/2B1P3/8/PPPP1PPP/RNBQK2R": { "eco": "C57", "name": "Italian Game: Two Knights Defense, Traxler Counterattack, Knight Sacrifice Line" }, "r1bq3r/ppppkBpp/2n2n2/2b1p1N1/3PP3/8/PPP2PPP/RNBQK2R": { "eco": "C57", "name": "Italian Game: Two Knights Defense, Traxler Variation, Trencianske-Teplice Gambit" }, "r1bqkb1r/p1p2Np1/2n2n1p/1p1Pp3/8/8/PPPP1PPP/RNBQKB1R": { "eco": "C57", "name": "Italian Game: Two Knights Defense, Ulvestad Variation, Kurkin Gambit" }, "r1bqkb1r/p4ppp/2p2n2/n3p1N1/8/8/PPPPBPPP/RNBQK2R": { "eco": "C58", "name": "Italian Game: Two Knights Defense" }, "r1b1kb1r/p1q2ppp/2p2n2/n3p1N1/8/3B1Q2/PPPP1PPP/RNB1K2R": { "eco": "C58", "name": "Italian Game: Two Knights Defense, Paoli Variation" }, "r1bqkb1r/ppp2ppp/5n2/nB1Pp1N1/8/8/PPPP1PPP/RNBQK2R": { "eco": "C58", "name": "Italian Game: Two Knights Defense, Polerio Defense, Bishop Check Line" }, "r1bqkb1r/p4ppp/2p2n2/nB2p1N1/8/5Q2/PPPP1PPP/RNB1K2R": { "eco": "C58", "name": "Italian Game: Two Knights Defense, Polerio Defense, Bogoljubov Variation" }, "r1bqkb1r/ppp2ppp/5n2/n2Pp1N1/2B5/3P4/PPP2PPP/RNBQK2R": { "eco": "C58", "name": "Italian Game: Two Knights Defense, Polerio Defense, Kieseritzky Variation" }, "r1bqk2r/ppp2pp1/5n1p/2bP4/2P1p3/8/PPPNQPPP/RNB1K2R": { "eco": "C58", "name": "Italian Game: Two Knights Defense, Polerio Defense, Yankovich Variation" }, "r1b1k2r/p1q2pp1/2pb1n1p/n3N3/3Pp3/8/PPPBBPPP/RN1QK2R": { "eco": "C59", "name": "Italian Game: Two Knights Defense, Knorre Variation" }, "r1bqkb1r/p4pp1/2p2n1p/n3p3/8/7N/PPPPBPPP/RNBQK2R": { "eco": "C59", "name": "Italian Game: Two Knights Defense, Steinitz Variation" }, "r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R": { "eco": "C60", "name": "Ruy Lopez" }, "r1b1kbnr/ppp2ppp/2n5/1B1pN1q1/4P3/8/PPPP1PPP/RNBQ1RK1": { "eco": "C60", "name": "Ruy Lopez: Spanish Countergambit, Harding Countergambit, Fricke Gambit" }, "r1b1kbnr/ppp2ppp/2N5/1B1p2q1/4P3/8/PPPP1PPP/RNBQK2R": { "eco": "C60", "name": "Ruy Lopez: Spanish Countergambit, Harding Gambit" }, "r2qkbnr/pppb1ppp/2np4/1B2p3/2PPP3/5N2/PP3PPP/RNBQK2R": { "eco": "C62", "name": "Ruy Lopez: Old Steinitz Defense, Semi-Duras Variation" }, "r1bqkbnr/ppp2ppp/2np4/1B6/3pP3/5N2/PPP2PPP/RNBQ1RK1": { "eco": "C62", "name": "Ruy Lopez: Steinitz Defense, Center Gambit" }, "r2qkb1r/pppb1ppp/2Bp1n2/4p3/3PP3/2N2N2/PPP2PPP/R1BQK2R": { "eco": "C62", "name": "Ruy Lopez: Steinitz Defense, Nimzowitsch Attack" }, "r1bqkbnr/pppp2pp/2n5/1B2pp2/4P3/2N2N2/PPPP1PPP/R1BQK2R": { "eco": "C63", "name": "Ruy Lopez: Schliemann Defense, Dyckhoff Variation" }, "r1bqkbnr/pppp2pp/2B5/4pp2/4P3/5N2/PPPP1PPP/RNBQK2R": { "eco": "C63", "name": "Ruy Lopez: Schliemann Defense, Exchange Variation" }, "r1bqkbnr/pppp2pp/2n5/1B2pP2/8/5N2/PPPP1PPP/RNBQK2R": { "eco": "C63", "name": "Ruy Lopez: Schliemann Defense, Jaenisch Gambit Accepted" }, "r1bqkbnr/pppp2pp/2n5/1B2pp2/3PP3/5N2/PPP2PPP/RNBQK2R": { "eco": "C63", "name": "Ruy Lopez: Schliemann Defense, Schönemann Attack" }, "r1bqk1nr/pppp1ppp/8/1Bb1p3/1P1nP3/5N2/P1PP1PPP/RNBQ1RK1": { "eco": "C64", "name": "Ruy Lopez: Classical Defense, Zaitsev Variation" }, "r1bqk1nr/pppp1ppp/2n5/1Bb1p3/4P3/2P2N2/PP1P1PPP/RNBQK2R": { "eco": "C64", "name": "Ruy Lopez: Classical Variation, Central Variation" }, "r1bq1rk1/pppp1ppp/1bn2n2/1B2p1B1/3PP3/2P2N2/PP3PPP/RN1Q1RK1": { "eco": "C64", "name": "Ruy Lopez: Classical Variation, Modern Main Line" }, "r1bqk1nr/pppp1ppp/2n5/1Bb1p3/1P2P3/5N2/P1PP1PPP/RNBQK2R": { "eco": "C64", "name": "Ruy Lopez: Classical Variation, Spanish Wing Gambit" }, "r1bqkb1r/pppp1ppp/2n2n2/1B2p3/4P3/5N2/PPPP1PPP/RNBQ1RK1": { "eco": "C65", "name": "Ruy Lopez: Berlin Defense" }, "r1bqkb1r/ppp2ppp/2Bp1n2/4p3/4P3/3P1N2/PPP2PPP/RNBQK2R": { "eco": "C65", "name": "Ruy Lopez: Berlin Defense, Anderssen Variation" }, "r1bqkb1r/ppp2ppp/2np1n2/1B2p3/2P1P3/3P1N2/PP3PPP/RNBQK2R": { "eco": "C65", "name": "Ruy Lopez: Berlin Defense, Duras Variation" }, "r1bqk2r/pppp1ppp/2n2n2/1Bb1p3/4P3/3PBN2/PPP2PPP/RN1QK2R": { "eco": "C65", "name": "Ruy Lopez: Berlin Defense, Kaufmann Variation" }, "r1bqkb1r/pppp1ppp/2n2n2/1B6/3pP3/5N2/PPP2PPP/RNBQ1RK1": { "eco": "C65", "name": "Ruy Lopez: Berlin Defense, Nyholm Attack" }, "r1bqk2r/pppp1ppp/2n2n2/1Bb1p3/4P3/2P2N2/PP1P1PPP/RNBQ1RK1": { "eco": "C65", "name": "Ruy Lopez: Classical Variation, Zukertort Gambit" }, "r1bqkb1r/pppp1ppp/2n2n2/1B2N3/4P3/8/PPPP1PPP/RNBQK2R": { "eco": "C65", "name": "Ruy Lopez: Halloween Attack" }, "r2qk2r/pppbbppp/2np1n2/1B2p1B1/3PP3/2N2N2/PPP2PPP/R2Q1RK1": { "eco": "C66", "name": "Ruy Lopez: Berlin Defense, Closed Bernstein Variation" }, "r2qk2r/pppbbppp/2Bp1n2/4p3/3PP3/2N2N2/PPP2PPP/R1BQ1RK1": { "eco": "C66", "name": "Ruy Lopez: Berlin Defense, Closed Showalter Variation" }, "r1bqk2r/ppppbppp/2n5/1B2P3/4n3/5N2/PPP2PPP/RNBQ1RK1": { "eco": "C67", "name": "Ruy Lopez: Berlin Defense, Minckwitz Variation" }, "r1bqk2r/pnppbppp/2p5/4P3/8/1P3N2/P1P1QPPP/RNB2RK1": { "eco": "C67", "name": "Ruy Lopez: Berlin Defense, Pillsbury Variation" }, "r1bqk2r/pnppbppp/2p5/4P3/3N4/8/PPP1QPPP/RNB2RK1": { "eco": "C67", "name": "Ruy Lopez: Berlin Defense, Winawer Attack" }, "r1bqk2r/pnppbppp/2p5/4P3/2P5/5N2/PP2QPPP/RNB2RK1": { "eco": "C67", "name": "Ruy Lopez: Berlin Defense, Zukertort Variation" }, "r1bqkb1r/pppp1ppp/2nn4/4p3/B2P4/5N2/PPP2PPP/RNBQ1RK1": { "eco": "C67", "name": "Ruy Lopez: Open Berlin Defense, Showalter Variation" }, "r1bqkb1r/pppp1ppp/2nn4/1B2P3/8/5N2/PPP2PPP/RNBQ1RK1": { "eco": "C67", "name": "Ruy Lopez: Open Berlin Defense, l'Hermet Variation" }, "r1bqkbnr/1ppp1ppp/p1B5/4p3/4P3/5N2/PPPP1PPP/RNBQK2R": { "eco": "C68", "name": "Ruy Lopez: Exchange Variation" }, "r1bqkbnr/1pp2ppp/p1p5/4p3/4P3/2N2N2/PPPP1PPP/R1BQK2R": { "eco": "C68", "name": "Ruy Lopez: Exchange Variation, Keres Variation" }, "r1bqkbnr/1pp3pp/p1p2p2/4p3/4P3/2NP1N2/PPP2PPP/R1BQK2R": { "eco": "C68", "name": "Ruy Lopez: Exchange Variation, Romanovsky Variation" }, "r1bqkbnr/1pp2ppp/p1p5/4p3/4P3/5N2/PPPP1PPP/RNBQ1RK1": { "eco": "C69", "name": "Ruy Lopez: Exchange Variation, Normal Variation" }, "r1bqkbnr/2pp1Bpp/p7/np2p3/4P3/5N2/PPPP1PPP/RNBQK2R": { "eco": "C70", "name": "Ruy Lopez: Morphy Defense, Norwegian Variation, Nightingale Gambit" }, "r1bqkbnr/1ppp2pp/p1n5/4pP2/B7/5N2/PPPP1PPP/RNBQK2R": { "eco": "C70", "name": "Ruy Lopez: Morphy Defense, Schliemann Defense Deferred, Jaenisch Gambit Deferred" }, "r1bqkbnr/1pp2ppp/p1np4/4p3/B3P3/2N2N2/PPPP1PPP/R1BQK2R": { "eco": "C71", "name": "Ruy Lopez: Morphy Defense, Modern Steinitz Defense" }, "r1bqkbnr/1pp2ppp/p1np4/4p3/B1P1P3/5N2/PP1P1PPP/RNBQK2R": { "eco": "C71", "name": "Ruy Lopez: Morphy Defense, Modern Steinitz Defense" }, "r1bqkbnr/1pp2ppp/p1np4/4p3/B3P3/5N2/PPPP1PPP/RNBQ1RK1": { "eco": "C72", "name": "Ruy Lopez: Morphy Defense, Modern Steinitz Defense" }, "r1bqkbnr/2p2ppp/p1pp4/4p3/3PP3/5N2/PPP2PPP/RNBQK2R": { "eco": "C73", "name": "Ruy Lopez: Morphy Defense, Modern Steinitz Defense" }, "r1bqkbnr/1pp2ppp/p1np4/4p3/B3P3/2P2N2/PP1P1PPP/RNBQK2R": { "eco": "C74", "name": "Ruy Lopez: Morphy Defense, Modern Steinitz Defense" }, "r2qkbnr/1pp3pp/p1np4/4pb2/B7/2P2N2/PP1P1PPP/RNBQ1RK1": { "eco": "C74", "name": "Ruy Lopez: Morphy Defense, Modern Steinitz Defense" }, "r1bqkb1r/1ppp1ppp/p1n2n2/4p3/B3P3/3P1N2/PPP2PPP/RNBQK2R": { "eco": "C77", "name": "Ruy Lopez: Morphy Defense, Anderssen Variation" }, "r1bqkb1r/1ppp1ppp/p1B2n2/4p3/4P3/5N2/PPPP1PPP/RNBQK2R": { "eco": "C77", "name": "Ruy Lopez: Morphy Defense, Bayreuth Variation" }, "r1bqkb1r/1pp2ppp/p1np1n2/4p3/B1P1P3/3P1N2/PP3PPP/RNBQK2R": { "eco": "C77", "name": "Ruy Lopez: Morphy Defense, Duras Variation" }, "r1bqkb1r/1ppp1ppp/p1n2n2/4p3/B3P3/2P2N2/PP1P1PPP/RNBQK2R": { "eco": "C77", "name": "Ruy Lopez: Morphy Defense, Jaffe Gambit" }, "r1bqkb1r/1ppp1ppp/p1n2n2/4p3/B2PP3/5N2/PPP2PPP/RNBQK2R": { "eco": "C77", "name": "Ruy Lopez: Morphy Defense, Mackenzie Variation" }, "r1bqkb1r/1ppp1ppp/p1n2n2/4p3/B3P3/2N2N2/PPPP1PPP/R1BQK2R": { "eco": "C77", "name": "Ruy Lopez: Morphy Defense, Tarrasch Variation" }, "r1bqkb1r/1ppp1ppp/p1n2n2/4p3/B3P3/5N2/PPPPQPPP/RNB1K2R": { "eco": "C77", "name": "Ruy Lopez: Morphy Defense, Wormald Attack" }, "r1bqkb1r/1ppp1ppp/p1n2n2/4p3/B3P3/5N2/PPPP1PPP/RNBQ1RK1": { "eco": "C78", "name": "Ruy Lopez: Morphy Defense" }, "r1bqk2r/2ppbppp/p1n2n2/1p2p3/P3P3/1B3N2/1PPP1PPP/RNBQ1RK1": { "eco": "C78", "name": "Ruy Lopez: Morphy Defense, Wing Attack" }, "r1bqkb1r/2p3pp/p1p5/3pPp2/4n3/2N2N2/PPP2PPP/R1BQR1K1": { "eco": "C79", "name": "Ruy Lopez: Steinitz Defense Deferred, Boleslavsky Variation" }, "r1bqkb1r/1ppp1ppp/p1n5/4p3/B3n3/5N2/PPPPQPPP/RNB2RK1": { "eco": "C80", "name": "Ruy Lopez: Morphy Defense, Tartakower Variation" }, "r1bqkb1r/1ppp1ppp/p1n5/4p3/B2Pn3/5N2/PPP2PPP/RNBQ1RK1": { "eco": "C80", "name": "Ruy Lopez: Open" }, "r1bqkb1r/2pp1ppp/p1n5/1p2p3/3Pn3/1B3N2/PPP2PPP/RNBQ1RK1": { "eco": "C80", "name": "Ruy Lopez: Open" }, "r1bqkb1r/2p2ppp/p1n5/1p1pP3/4n3/1B3N2/PPP2PPP/RNBQ1RK1": { "eco": "C80", "name": "Ruy Lopez: Open" }, "r1bqkb1r/2p2ppp/p7/1p1p4/P2pn3/1BN5/1PP2PPP/R1BQ1RK1": { "eco": "C80", "name": "Ruy Lopez: Open, Berger Variation" }, "r2qkb1r/2p2ppp/p1n1b3/1p1pP3/4n3/1B3N2/PPPN1PPP/R1BQ1RK1": { "eco": "C80", "name": "Ruy Lopez: Open, Bernstein Variation" }, "r2qk2r/2p2ppp/p1n1b3/1pbpP3/4n3/1B3N2/PPPN1PPP/R1B1QRK1": { "eco": "C80", "name": "Ruy Lopez: Open, Bernstein Variation, Luther Line" }, "r1bqkb1r/2pp1ppp/p1n5/1p2N3/B2Pn3/8/PPP2PPP/RNBQ1RK1": { "eco": "C80", "name": "Ruy Lopez: Open, Friess Attack" }, "r1bqkb1r/2p2ppp/p1n5/1p1pp3/2PPn3/1B3N2/PP3PPP/RNBQ1RK1": { "eco": "C80", "name": "Ruy Lopez: Open, Harksen Gambit" }, "r2qkb1r/2p2ppp/p1n1b3/1pn1P1N1/3p4/1BP5/PP1N1PPP/R1BQ1RK1": { "eco": "C80", "name": "Ruy Lopez: Open, Karpov Gambit" }, "r1bqkb1r/1ppp1ppp/p1n5/4p3/B3n3/2N2N2/PPPP1PPP/R1BQ1RK1": { "eco": "C80", "name": "Ruy Lopez: Open, Knorre Variation" }, "r1bqkb1r/2pp1ppp/p1n5/1p1Pp3/B3n3/5N2/PPP2PPP/RNBQ1RK1": { "eco": "C80", "name": "Ruy Lopez: Open, Richter Variation" }, "r2qkb1r/2p2ppp/p1n1b3/1p1pP3/4n3/1B3N2/PPP1QPPP/RNB2RK1": { "eco": "C81", "name": "Ruy Lopez: Open, Howell Attack" }, "r2qk2r/2p1bppp/p1n1b3/1p1pP3/2P1n3/1B3N2/PP2QPPP/RNB2RK1": { "eco": "C81", "name": "Ruy Lopez: Open, Howell Attack" }, "r2qkb1r/2p2ppp/p1n1b3/1p1pP3/4n3/1BP2N2/PP3PPP/RNBQ1RK1": { "eco": "C82", "name": "Ruy Lopez: Open" }, "r2qk2r/2p2ppp/p1n1b3/1pbpP3/4n3/1BPQ1N2/PP3PPP/RNB2RK1": { "eco": "C82", "name": "Ruy Lopez: Open, Motzko Attack" }, "r2qk2r/2p2ppp/p1n1b3/1pbpP3/4n3/1BP2N2/PP1N1PPP/R1BQ1RK1": { "eco": "C82", "name": "Ruy Lopez: Open, St. Petersburg Variation" }, "r2qk2r/2p1bppp/p1n1b3/1p1pP3/4n3/1BP2N2/PP3PPP/RNBQR1K1": { "eco": "C83", "name": "Ruy Lopez: Open, Classical Defense, Main Line" }, "r2q1rk1/2p1bppp/p1n1b3/1p1pP3/4n3/1BP2N2/PP1NQPPP/R1B2RK1": { "eco": "C83", "name": "Ruy Lopez: Open, Malkin Variation" }, "r4rk1/2pqb1pp/p1n1p3/1p1pP3/4R3/1BP5/PP3PPP/RNBQ2K1": { "eco": "C83", "name": "Ruy Lopez: Open, Tarrasch Trap" }, "r1bqk2r/1pppbppp/p1n5/4P3/B2pn3/2P2N2/PP3PPP/RNBQ1RK1": { "eco": "C84", "name": "Ruy Lopez: Closed, Basque Gambit (North Spanish Variation)" }, "r1bqk2r/1pppbppp/p1n2n2/4p3/B2PP3/5N2/PPP2PPP/RNBQ1RK1": { "eco": "C84", "name": "Ruy Lopez: Closed, Center Attack" }, "r1bqk2r/1pppbppp/p1n2n2/4p3/B3P3/3P1N2/PPP2PPP/RNBQ1RK1": { "eco": "C84", "name": "Ruy Lopez: Closed, Martinez Variation" }, "r1bqk2r/1pppbppp/p1n2n2/4p3/B3P3/2N2N2/PPPP1PPP/R1BQ1RK1": { "eco": "C84", "name": "Ruy Lopez: Closed, Morphy Attack" }, "r1bqk2r/1pppbppp/p1B2n2/4p3/4P3/5N2/PPPP1PPP/RNBQ1RK1": { "eco": "C85", "name": "Ruy Lopez: Closed, Delayed Exchange" }, "r1bqk2r/1pppbppp/p1n2n2/4p3/B3P3/5N2/PPPPQPPP/RNB2RK1": { "eco": "C86", "name": "Ruy Lopez: Closed, Worrall Attack" }, "r1bqk2r/2ppbppp/p1n2n2/1p2p3/4P3/1B3N2/PPPP1PPP/RNBQR1K1": { "eco": "C88", "name": "Ruy Lopez: Closed" }, "r4rk1/2q1bppp/p2p1n2/npp1p3/3PP3/2P1NQ2/PPB2PPP/R1B1R1K1": { "eco": "C88", "name": "Ruy Lopez: Closed, Alekhine Gambit" }, "r1bq1rk1/2ppbppp/p1n2n2/1p2p3/P3P3/1B3N2/1PPP1PPP/RNBQR1K1": { "eco": "C88", "name": "Ruy Lopez: Closed, Anti-Marshall" }, "r1b1k2r/2q1bppp/p2p1n2/npp1p3/P2PP3/2P2N2/1PB2PPP/RNBQR1K1": { "eco": "C88", "name": "Ruy Lopez: Closed, Balla Variation" }, "r1bqk2r/2p1bppp/p1np1n2/1p2p3/3PP3/1B3N2/PPP2PPP/RNBQR1K1": { "eco": "C88", "name": "Ruy Lopez: Closed, Rosen Attack" }, "r1bq1rk1/4bppp/p1p5/1p1nR3/3P4/1BP5/PP3PPP/RNBQ2K1": { "eco": "C89", "name": "Ruy Lopez: Marshall Attack, Main Line" }, "r1bq1rk1/5ppp/p2b4/1p1p4/3P4/2P1R3/PP3PPP/RNBQ2K1": { "eco": "C89", "name": "Ruy Lopez: Marshall Attack, Re3 Variation" }, "r1bq1rk1/2p1bppp/p1np1n2/1p2p3/4P3/2P2N2/PPBP1PPP/RNBQR1K1": { "eco": "C90", "name": "Ruy Lopez: Closed, Lutikov Variation" }, "r1bq1rk1/2p1bppp/p1np1n2/1p2p3/4P3/1BPP1N2/PP3PPP/RNBQR1K1": { "eco": "C90", "name": "Ruy Lopez: Closed, Pilnik Variation" }, "r1bq1rk1/2p1bppp/p1np1n2/1p2p3/4P3/PBP2N2/1P1P1PPP/RNBQR1K1": { "eco": "C90", "name": "Ruy Lopez: Closed, Suetin Variation" }, "r1bq1rk1/2p1bppp/p1np1n2/1p2p3/3PP3/1BP2N2/PP3PPP/RNBQR1K1": { "eco": "C91", "name": "Ruy Lopez: Closed, Yates Variation" }, "r2q1rk1/2p1bppp/p1np1n2/1p2p3/P2PP1b1/1BP2N2/1P3PPP/RNBQR1K1": { "eco": "C91", "name": "Ruy Lopez: Closed, Yates Variation, Short Attack" }, "r1bq1rk1/2p1bppp/p1np1n2/1p2p3/4P3/1BP2N1P/PP1P1PP1/RNBQR1K1": { "eco": "C92", "name": "Ruy Lopez: Closed" }, "rnbq1rk1/2p1bppp/p2p1n2/1p2p3/4P3/1BPP1N1P/PP3PP1/RNBQR1K1": { "eco": "C94", "name": "Ruy Lopez: Morphy Defense, Breyer Defense, Quiet Variation" }, "rnbq1rk1/2p1bppp/p2p1n2/1p2p3/3PP3/1BP2N1P/PP3PP1/RNBQR1K1": { "eco": "C95", "name": "Ruy Lopez: Closed, Breyer" }, "r1bq1rk1/2pnbppp/p2p1n2/1p2p3/3PP2N/1BP4P/PP3PP1/RNBQR1K1": { "eco": "C95", "name": "Ruy Lopez: Closed, Breyer Defense" }, "r1bq1rk1/2p1bppp/p2p1n2/np2p3/4P3/2P2N1P/PPBP1PP1/RNBQR1K1": { "eco": "C96", "name": "Ruy Lopez: Closed, Closed Defense" }, "r1b2rk1/2q1bppp/p1np1n2/1pP1p3/4P3/2P2N1P/PPBN1PP1/R1BQR1K1": { "eco": "C98", "name": "Ruy Lopez: Closed, Chigorin Defense" }, "r1b2rk1/2q1bppp/p2p1n2/np2p3/3PP3/5N1P/PPBN1PP1/R1BQR1K1": { "eco": "C99", "name": "Ruy Lopez: Morphy Defense, Chigorin Defense, Panov System" }, "rnbqkbnr/ppp1pppp/8/3p4/3P4/3Q4/PPP1PPPP/RNB1KBNR": { "eco": "D00", "name": "Amazon Attack" }, "rnbqkbnr/ppp1pppp/8/3p4/3PP3/8/PPP2PPP/RNBQKBNR": { "eco": "D00", "name": "Blackmar Gambit" }, "rnbqkbnr/ppp1pppp/8/8/3Pp3/2N5/PPP2PPP/R1BQKBNR": { "eco": "D00", "name": "Blackmar-Diemer Gambit" }, "rnbqkb1r/ppp1pppp/5n2/3p4/3PP3/2N5/PPP2PPP/R1BQKBNR": { "eco": "D00", "name": "Blackmar-Diemer Gambit" }, "rnbqk2r/ppp1ppbp/5np1/8/2BP3P/2N2N2/PPP3P1/R1BQK2R": { "eco": "D00", "name": "Blackmar-Diemer Gambit: Bogoljubov Defense, Mad Dog Attack" }, "rnbq1rk1/ppp1ppbp/5np1/8/2BP4/2N2N2/PPP3PP/R1BQ1R1K": { "eco": "D00", "name": "Blackmar-Diemer Gambit: Bogoljubov Variation, Kloss Attack" }, "rnbqk2r/ppp1ppbp/5np1/4N3/2BP4/2N5/PPP3PP/R1BQK2R": { "eco": "D00", "name": "Blackmar-Diemer Gambit: Bogoljubov Variation, Nimzowitsch Attack" }, "rnbq1rk1/ppp1ppbp/5np1/8/2BP4/2N2N2/PPP3PP/R1B1QRK1": { "eco": "D00", "name": "Blackmar-Diemer Gambit: Bogoljubov Variation, Studier Attack" }, "rnbqkbnr/ppp1pppp/8/8/3Pp3/4B3/PPP2PPP/RN1QKBNR": { "eco": "D00", "name": "Blackmar-Diemer Gambit: Diemer-Rosenberg Attack" }, "r1bqk2r/ppp1bppp/4pn2/6B1/3n4/2NB1N2/PPP3PP/R2Q1R1K": { "eco": "D00", "name": "Blackmar-Diemer Gambit: Euwe Defense, Zilbermints Gambit" }, "rnbqkbnr/ppp1pppp/8/8/2BPp3/8/PPP2PPP/RNBQK1NR": { "eco": "D00", "name": "Blackmar-Diemer Gambit: Fritz Attack" }, "rnbqkbnr/ppp1pppp/8/8/3Pp3/5P2/PPP3PP/RNBQKBNR": { "eco": "D00", "name": "Blackmar-Diemer Gambit: Gedult Gambit" }, "rnbqkbnr/ppp2ppp/8/4p3/3Pp3/2N1B3/PPP2PPP/R2QKBNR": { "eco": "D00", "name": "Blackmar-Diemer Gambit: Lemberger Countergambit, Diemer Attack" }, "rnbqkbnr/ppp2ppp/8/4P3/4p3/2N5/PPP2PPP/R1BQKBNR": { "eco": "D00", "name": "Blackmar-Diemer Gambit: Lemberger Countergambit, Endgame Variation" }, "rnbqkbnr/ppp2ppp/8/4p3/3Pp3/2N5/PPP1NPPP/R1BQKB1R": { "eco": "D00", "name": "Blackmar-Diemer Gambit: Lemberger Countergambit, Rassmussen Attack" }, "rnbqkbnr/ppp2ppp/8/4p3/3PN3/8/PPP2PPP/R1BQKBNR": { "eco": "D00", "name": "Blackmar-Diemer Gambit: Lemberger Countergambit, Simple Variation" }, "rnbqkbnr/ppp2ppp/8/4p2Q/3Pp3/2N5/PPP2PPP/R1B1KBNR": { "eco": "D00", "name": "Blackmar-Diemer Gambit: Lemberger Countergambit, Sneider Attack" }, "rnbqkb1r/ppp1pppp/5n2/8/3Pp3/2N1B3/PPP2PPP/R2QKBNR": { "eco": "D00", "name": "Blackmar-Diemer Gambit: Rasa-Studier Gambit" }, "rnbqkb1r/ppp1pppp/5n2/8/3P4/2N2Q2/PPP3PP/R1B1KBNR": { "eco": "D00", "name": "Blackmar-Diemer Gambit: Ryder Gambit" }, "rn1qkb1r/ppp1pppp/5n2/5b2/2BPp3/2N2P2/PPP3PP/R1BQK1NR": { "eco": "D00", "name": "Blackmar-Diemer Gambit: Zeller Defense, Soller Attack" }, "rnbqkb1r/ppp1pppp/5n2/6B1/3Pp3/2N5/PPP2PPP/R2QKBNR": { "eco": "D00", "name": "Blackmar-Diemer Gambit: von Popiel Gambit" }, "rn1qk2r/ppp2ppp/5pb1/1Q6/1b1Pp1P1/2N5/PPP2P1P/R3KBNR": { "eco": "D00", "name": "Blackmar-Diemer Gambit: von Popiel Gambit, Zilbermints Variation" }, "rnbqkbnr/ppp1pppp/8/3p4/3P4/4P3/PPP2PPP/RNBQKBNR": { "eco": "D00", "name": "Queen's Pawn Game" }, "rnbqkbnr/ppp1pppp/8/3p4/3P4/2N5/PPP1PPPP/R1BQKBNR": { "eco": "D00", "name": "Queen's Pawn Game: Chigorin Variation" }, "rnbqkbnr/ppp1pppp/8/3p2B1/3P4/8/PPP1PPPP/RN1QKBNR": { "eco": "D00", "name": "Queen's Pawn Game: Levitsky Attack" }, "rnbqkbnr/ppp1pppp/8/3p4/3P1P2/8/PPP1P1PP/RNBQKBNR": { "eco": "D00", "name": "Queen's Pawn Game: Mason Attack" }, "rnbqkbnr/ppp1pppp/8/3p4/3P1B2/8/PPP1PPPP/RN1QKBNR": { "eco": "D00", "name": "Queen's Pawn Game: Mason Variation" }, "rnbqkbnr/pp2pppp/8/2pp4/3PPB2/8/PPP2PPP/RN1QKBNR": { "eco": "D00", "name": "Queen's Pawn Game: Morris Countergambit" }, "rnbqkb1r/ppp1pppp/5n2/3p4/3P4/3BP3/PPP2PPP/RNBQK1NR": { "eco": "D00", "name": "Queen's Pawn Game: Stonewall Attack" }, "rnbqkbnr/ppp1pppp/8/3p4/3P2P1/8/PPP1PP1P/RNBQKBNR": { "eco": "D00", "name": "Queen's Pawn Game: Zurich Gambit" }, "rn1qkb1r/ppp1pppp/5n2/3p1bB1/3P4/2N2P2/PPP1P1PP/R2QKBNR": { "eco": "D01", "name": "Queen's Pawn Game: Veresov Attack, Richter Variation" }, "r1bqkb1r/pppnpppp/5n2/3p2B1/3P4/2N2N2/PPP1PPPP/R2QKB1R": { "eco": "D01", "name": "Queen's Pawn Game: Veresov Attack, Two Knights System" }, "rn1qkb1r/ppp1pppp/5B2/3p1b2/3P4/2N5/PPP1PPPP/R2QKBNR": { "eco": "D01", "name": "Queen's Pawn Game: Veresov Attack, Veresov Variation" }, "rnbqkb1r/ppp1pppp/5n2/3p4/3P1B2/2N5/PPP1PPPP/R2QKBNR": { "eco": "D01", "name": "Rapport-Jobava System" }, "rnbqkb1r/ppp1pppp/5n2/3p2B1/3P4/2N5/PPP1PPPP/R2QKBNR": { "eco": "D01", "name": "Richter-Veresov Attack" }, "rnbqkb1r/pp2pp1p/5p2/2pP4/4p3/2N5/PPP2PPP/R2QKBNR": { "eco": "D01", "name": "Veresov Opening: Malich Gambit" }, "rnb1kb1r/pp2pppp/1q3n2/2pp4/3P1B2/2N1PN2/PPP2PPP/R2QKB1R": { "eco": "D02", "name": "London System: Poisoned Pawn Variation" }, "rnbqkbnr/pp2pppp/8/3p4/3p4/5NP1/PPP1PPBP/RNBQK2R": { "eco": "D02", "name": "Queen's Pawn Game: Chandler Gambit" }, "rnbqkb1r/ppp1pppp/5n2/3p4/3P1B2/5N2/PPP1PPPP/RN1QKB1R": { "eco": "D02", "name": "Queen's Pawn Game: London System" }, "rnbqkb1r/ppp1pppp/5n2/3p4/3P4/5NP1/PPP1PP1P/RNBQKB1R": { "eco": "D02", "name": "Queen's Pawn Game: Symmetrical Variation, Pseudo-Catalan" }, "rnbqkbnr/ppp1pppp/8/3p4/3P4/5N2/PPP1PPPP/RNBQKB1R": { "eco": "D02", "name": "Queen's Pawn Game: Zukertort Variation" }, "rnbqkb1r/ppp1pppp/5n2/3p2B1/3P4/5N2/PPP1PPPP/RN1QKB1R": { "eco": "D03", "name": "Queen's Pawn Game: Torre Attack" }, "rnbqkb1r/ppp1pppp/5n2/3p4/3P4/4PN2/PPP2PPP/RNBQKB1R": { "eco": "D04", "name": "Queen's Pawn Game: Colle System" }, "rnbqkb1r/pp3ppp/4pn2/2pp4/3P4/1P2PN2/P1PN1PPP/R1BQKB1R": { "eco": "D05", "name": "Queen's Pawn Game, Zukertort Variation" }, "rnbqkb1r/ppp2ppp/4pn2/3p4/3P4/3BPN2/PPP2PPP/RNBQK2R": { "eco": "D05", "name": "Queen's Pawn Game: Colle System" }, "rnbqkb1r/pp3ppp/4pn2/2pp4/3P4/2PBPN2/PP3PPP/RNBQK2R": { "eco": "D05", "name": "Queen's Pawn Game: Colle System, Traditional Colle" }, "rnbqkb1r/pp3ppp/4pn2/2pp4/3P4/1P1BPN2/P1P2PPP/RNBQK2R": { "eco": "D05", "name": "Rubinstein Opening" }, "r1bq1rk1/pppn1ppp/3bpn2/3p4/3P4/1P1BPN2/PBP2PPP/RN1Q1RK1": { "eco": "D05", "name": "Rubinstein Opening: Semi-Slav Defense" }, "rnbqkbnr/ppp1pppp/8/3p4/2PP4/8/PP2PPPP/RNBQKBNR": { "eco": "D06", "name": "Queen's Gambit" }, "rn1qkbnr/ppp1pppp/8/3p1b2/2PP4/1Q6/PP2PPPP/RNB1KBNR": { "eco": "D06", "name": "Queen's Gambit Declined: Baltic Defense, Queen Attack" }, "rn1qkbnr/ppp2ppp/4p3/3p1b2/2PP4/1QN5/PP2PPPP/R1B1KBNR": { "eco": "D06", "name": "Queen's Gambit Declined: Baltic Defense, Queen Attack Deferred" }, "r1bqkbnr/ppp1pppp/2n5/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR": { "eco": "D07", "name": "Queen's Gambit Declined: Chigorin Defense" }, "r1b1k1nr/ppp2ppp/2n5/3q4/3p4/2B1P3/PP2NPPP/R2QKB1R": { "eco": "D07", "name": "Queen's Gambit Declined: Chigorin Defense, Exchange Variation, Costa's Line" }, "r1bqkbnr/ppp1pppp/2n5/8/2pP4/2N2N2/PP2PPPP/R1BQKB1R": { "eco": "D07", "name": "Queen's Gambit Declined: Chigorin Defense, Janowski Variation" }, "r2qkbnr/ppp1pppp/2n5/3p4/Q1PP2b1/5N2/PP2PPPP/RNB1KB1R": { "eco": "D07", "name": "Queen's Gambit Declined: Chigorin Defense, Main Line, Alekhine Variation" }, "r1bqkbnr/ppp2ppp/2n5/4P3/2Pp4/5N2/PP1NPPPP/R1BQKB1R": { "eco": "D08", "name": "Queen's Gambit Declined: Albin Countergambit, Modern Line" }, "rnbqkbnr/ppp2ppp/8/4P3/2Pp4/5N2/PP2PPPP/RNBQKB1R": { "eco": "D08", "name": "Queen's Gambit Declined: Albin Countergambit, Normal Line" }, "r1bqkbnr/ppp2ppp/2n5/4P3/2Pp4/5NP1/PP2PP1P/RNBQKB1R": { "eco": "D09", "name": "Queen's Gambit Declined: Albin Countergambit, Fianchetto Variation" }, "rnbqkbnr/pp2pppp/2p5/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR": { "eco": "D10", "name": "Slav Defense" }, "rnbqkbnr/pp2pppp/2p5/3P4/3P4/8/PP2PPPP/RNBQKBNR": { "eco": "D10", "name": "Slav Defense: Exchange Variation" }, "rnbqkbnr/pp2pppp/2p5/8/2pPP3/2N5/PP3PPP/R1BQKBNR": { "eco": "D10", "name": "Slav Defense: Slav Gambit, Alekhine Attack" }, "rnbqkbnr/pp3ppp/2p5/3pp3/2PPP3/2N5/PP3PPP/R1BQKBNR": { "eco": "D10", "name": "Slav Defense: Winawer Countergambit, Anti-Winawer Gambit" }, "rnbqkb1r/pp2pppp/2p2n2/3p2B1/2PP4/5N2/PP2PPPP/RN1QKB1R": { "eco": "D11", "name": "Slav Defense: Bonet Gambit" }, "rnbqkb1r/pp2pppp/2p2n2/3p4/2PP4/5N2/PP1NPPPP/R1BQKB1R": { "eco": "D11", "name": "Slav Defense: Breyer Variation" }, "rnbqkbnr/pp2pppp/2p5/3p4/2PP4/5N2/PP2PPPP/RNBQKB1R": { "eco": "D11", "name": "Slav Defense: Modern Line" }, "rnbqkb1r/pp2pppp/2p2n2/3p4/2PP4/4PN2/PP3PPP/RNBQKB1R": { "eco": "D11", "name": "Slav Defense: Quiet Variation" }, "rnq1kb1r/pp3ppp/4pn2/3p1b2/3P4/NQ2PN2/PP1B1PPP/R3KB1R": { "eco": "D12", "name": "Queen's Gambit Declined: Slav, Landau Variation" }, "rn1qkb1r/pp2pppp/5n2/3p1b2/3P4/2N1PN2/PP3PPP/R1BQKB1R": { "eco": "D12", "name": "Slav Defense: Exchange Variation, Schallopp Variation" }, "rnbqkb1r/pp2pppp/2p2n2/8/2pP4/2N1PN2/PP3PPP/R1BQKB1R": { "eco": "D15", "name": "Slav Defense: Alekhine Variation" }, "rnbqkb1r/1p2pppp/p1p2n2/2Pp4/3P4/2N2N2/PP2PPPP/R1BQKB1R": { "eco": "D15", "name": "Slav Defense: Chameleon Variation, Advance System" }, "rnbqkb1r/pp2pppp/2p2n2/8/2pPP3/2N2N2/PP3PPP/R1BQKB1R": { "eco": "D15", "name": "Slav Defense: Geller Gambit" }, "rnbqkb1r/p3pppp/2p2n2/1p2P3/2pP4/2N2N2/PP3PPP/R1BQKB1R": { "eco": "D15", "name": "Slav Defense: Geller Gambit" }, "rnbqkb1r/pp2pppp/2p2n2/3p4/2PP4/2N2N2/PP2PPPP/R1BQKB1R": { "eco": "D15", "name": "Slav Defense: Three Knights Variation" }, "rnbqkb1r/pp2pppp/2p2n2/8/P1pP4/2N2N2/1P2PPPP/R1BQKB1R": { "eco": "D16", "name": "Slav Defense: Alapin Variation" }, "rn1qkb1r/pp2pppp/2p2n2/5b2/P1pP3N/2N5/1P2PPPP/R1BQKB1R": { "eco": "D17", "name": "Slav Defense: Czech Variation, Bled Attack" }, "rn1qkb1r/pp2pppp/2p2n2/4Nb2/P1pP4/2N5/1P2PPPP/R1BQKB1R": { "eco": "D17", "name": "Slav Defense: Czech Variation, Krause Attack" }, "r2qkb1r/pp2pppp/n1p2n2/4Nb2/P1pPP3/2N5/1P3PPP/R1BQKB1R": { "eco": "D17", "name": "Slav Defense: Czech Variation, Krause Attack, Fazekas Gambit" }, "rn1qk2r/pp3ppp/2p1pn2/4Nb2/PbpPP3/2N2P2/1P4PP/R1BQKB1R": { "eco": "D17", "name": "Slav Defense: Czech Variation, Wiesbaden Variation, Sharp Line" }, "rn1qkb1r/pp2pppp/2p2n2/5b2/P1pP4/2N1PN2/1P3PPP/R1BQKB1R": { "eco": "D18", "name": "Slav Defense: Czech Variation, Classical System" }, "rn1qk2r/pp3ppp/2p1pn2/5b2/PbBP4/2N1PN2/1P3PPP/R1BQ1RK1": { "eco": "D19", "name": "Queen's Gambit Declined: Slav, Dutch Variation" }, "rn1q1rk1/pp3ppp/2p1p3/5b2/PbBPn1P1/2N1PN2/1P2QP1P/R1B2RK1": { "eco": "D19", "name": "Queen's Gambit Declined: Slav, Dutch, Sämisch Variation" }, "rn1q1rk1/pp3ppp/2p1pn2/5b2/PbBP4/2N1PN2/1P2QPPP/R1B2RK1": { "eco": "D19", "name": "Slav Defense: Czech Variation, Classical System, Main Line" }, "rnbqkbnr/ppp1pppp/8/8/Q1pP4/8/PP2PPPP/RNB1KBNR": { "eco": "D20", "name": "Queen's Gambit Accepted: Accelerated Mannheim Variation" }, "rnbqkbnr/ppp2ppp/8/4p3/2BPP3/8/PP3PPP/RNBQK1NR": { "eco": "D20", "name": "Queen's Gambit Accepted: Central Variation, McDonnell Defense, Somov Gambit" }, "rnbqkbnr/ppp1pppp/8/8/2pP4/4P3/PP3PPP/RNBQKBNR": { "eco": "D20", "name": "Queen's Gambit Accepted: Old Variation" }, "rnb1kbnr/ppp1qppp/8/8/2Bp4/PQ2P3/1P3PPP/RNB1K1NR": { "eco": "D20", "name": "Queen's Gambit Accepted: Old Variation, Billinger Gambit" }, "rnb1kbnr/ppp1qppp/8/8/2Bp4/1Q2PN2/PP3PPP/RNB1K2R": { "eco": "D20", "name": "Queen's Gambit Accepted: Old Variation, Christensen Gambit" }, "rnb1kbnr/ppp1qppp/8/8/2Bp4/1Q2P3/PP3PPP/RNB2KNR": { "eco": "D20", "name": "Queen's Gambit Accepted: Old Variation, Korchnoi Gambit" }, "rnb1kbnr/ppp1qppp/8/8/2Bp4/1Q2P3/PP1N1PPP/R1B1K1NR": { "eco": "D20", "name": "Queen's Gambit Accepted: Old Variation, Novikov Gambit" }, "rnbqkbnr/ppp1pppp/8/8/2pPP3/8/PP3PPP/RNBQKBNR": { "eco": "D20", "name": "Queen's Gambit Accepted: Saduleto Variation" }, "rnbqkbnr/1pp1pppp/p7/8/2pPP3/5N2/PP3PPP/RNBQKB1R": { "eco": "D21", "name": "Queen's Gambit Accepted: Alekhine Defense, Borisenko-Furman Variation" }, "rnbqkbnr/ppp1pppp/8/8/2pP4/5N2/PP2PPPP/RNBQKB1R": { "eco": "D21", "name": "Queen's Gambit Accepted: Normal Variation" }, "rn1qkbnr/1pp2ppp/p3p3/3P4/2B3b1/4PN2/PP3PPP/RNBQK2R": { "eco": "D22", "name": "Queen's Gambit Accepted: Alekhine Defense, Alatortsev Variation" }, "rnbqkb1r/ppp1pppp/5n2/8/Q1pP4/5N2/PP2PPPP/RNB1KB1R": { "eco": "D23", "name": "Queen's Gambit Accepted: Mannheim Variation" }, "rnbqkb1r/1pp1pppp/p4n2/8/2pPP3/2N2N2/PP3PPP/R1BQKB1R": { "eco": "D24", "name": "Queen's Gambit Accepted: Bogoljubov Defense" }, "rnbqkb1r/pp3ppp/5n2/2ppP3/2p5/2N2N2/PP3PPP/R1BQKB1R": { "eco": "D24", "name": "Queen's Gambit Accepted: Gunsberg Defense, Prianishenmo Gambit" }, "rnbqkb1r/ppp1pppp/5n2/8/2pP4/2N2N2/PP2PPPP/R1BQKB1R": { "eco": "D24", "name": "Queen's Gambit Accepted: Showalter Variation" }, "rnbqkb1r/ppp1pppp/5n2/8/2pP4/4PN2/PP3PPP/RNBQKB1R": { "eco": "D25", "name": "Queen's Gambit Accepted: Normal Variation" }, "rnbqkb1r/pp3ppp/4pn2/2p5/2BP4/4PN2/PP3PPP/RNBQ1RK1": { "eco": "D26", "name": "Queen's Gambit Accepted: Classical Defense, Normal Line" }, "r1bqk2r/5ppp/p1n1pn2/1pb1P3/2B5/5N2/PP2QPPP/RNB2RK1": { "eco": "D26", "name": "Queen's Gambit Accepted: Classical, Furman Variation" }, "rnbqkb1r/1p3ppp/p3pn2/2p5/P1BP4/4PN2/1P3PPP/RNBQ1RK1": { "eco": "D27", "name": "Queen's Gambit Accepted: Classical Defense, Rubinstein Variation" }, "rnbqkb1r/1p3ppp/p3pn2/2p5/2BPP3/5N2/PP3PPP/RNBQ1RK1": { "eco": "D27", "name": "Queen's Gambit Accepted: Classical Defense, Russian Gambit" }, "rnbqkb1r/1p3ppp/p3pn2/2p5/2BP4/4PN2/PP2QPPP/RNB2RK1": { "eco": "D28", "name": "Queen's Gambit Accepted: Classical Defense, Alekhine System" }, "r1bqkb1r/pp1n1ppp/2p1pn2/3p2B1/2PP4/4PN2/PP1N1PPP/R2QKB1R": { "eco": "D30", "name": "Queen's Gambit Declined: Capablanca Variation" }, "rnbqkbnr/pp3ppp/8/2pp2B1/3P4/5N2/PP2PPPP/RN1QKB1R": { "eco": "D30", "name": "Queen's Gambit Declined: Tarrasch Defense, Pseudo-Tarrasch Bishop Attack" }, "rnbqkb1r/ppp2ppp/4pn2/3p2B1/2PP4/5N2/PP2PPPP/RN1QKB1R": { "eco": "D30", "name": "Queen's Gambit Declined: Traditional Variation" }, "rnbqkb1r/pp3ppp/2p1pn2/3p4/2PP4/4PN2/PP1N1PPP/R1BQKB1R": { "eco": "D30", "name": "Semi-Slav Defense: Quiet Variation" }, "rnbqk1nr/ppp1bppp/4p3/8/2PPp3/2N2P2/PP4PP/R1BQKBNR": { "eco": "D31", "name": "Queen's Gambit Declined: Charousek (Petrosian) Variation, Miladinovic Gambit" }, "rnbqkbnr/ppp2ppp/4p3/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR": { "eco": "D31", "name": "Queen's Gambit Declined: Queen's Knight Variation" }, "rnbqkbnr/pp4pp/2p1p3/3p1p2/2PP2P1/2N1P3/PP3P1P/R1BQKBNR": { "eco": "D31", "name": "Semi-Slav Defense: Anti-Noteboom, Stonewall Variation, Portisch Gambit" }, "rnbqkbnr/pp3ppp/2p1p3/8/2PPp3/2N2P2/PP4PP/R1BQKBNR": { "eco": "D31", "name": "Semi-Slav Defense: Gunderam Gambit" }, "rnbqkbnr/pp3ppp/2p1p3/3p4/2PPP3/2N5/PP3PPP/R1BQKBNR": { "eco": "D31", "name": "Semi-Slav Defense: Marshall Gambit" }, "rnbqk1nr/pp3ppp/2p1p3/8/1bPP4/2N5/PP3PPP/R1BQKBNR": { "eco": "D31", "name": "Semi-Slav Defense: Marshall Gambit, Forgotten Variation" }, "rnbqk1nr/pp3ppp/2p1p3/8/1bPPN3/8/PP1B1PPP/R2QKBNR": { "eco": "D31", "name": "Semi-Slav Defense: Marshall Gambit, Main Line" }, "rnbqkbnr/pp3ppp/2p1p3/8/2pP4/2N2NP1/PP2PP1P/R1BQKB1R": { "eco": "D31", "name": "Semi-Slav Defense: Noteboom Variation, Anti-Noteboom Gambit" }, "rnbqkbnr/pp3ppp/2p1p3/6B1/2pP4/2N2N2/PP2PPPP/R2QKB1R": { "eco": "D31", "name": "Semi-Slav Defense: Noteboom Variation, Anti-Noteboom Variation" }, "rnbqkbnr/pp3ppp/8/2pp4/3PP3/2N5/PP3PPP/R1BQKBNR": { "eco": "D32", "name": "Tarrasch Defense: Marshall Gambit" }, "rnbqkbnr/pp3ppp/8/2pp4/3P4/2N2N2/PP2PPPP/R1BQKB1R": { "eco": "D32", "name": "Tarrasch Defense: Two Knights Variation" }, "r1bqkbnr/pp3ppp/2n5/2pp4/3P4/2N2NP1/PP2PP1P/R1BQKB1R": { "eco": "D33", "name": "Tarrasch Defense: Rubinstein System" }, "r1bqkbnr/pp3ppp/2n5/3p4/2pPP3/2N2NP1/PP3P1P/R1BQKB1R": { "eco": "D33", "name": "Tarrasch Defense: Swedish Variation, Central Break" }, "r1bq1rk1/pp2bppp/2n2n2/2pp2B1/3P4/2N2NP1/PP2PPBP/R2Q1RK1": { "eco": "D34", "name": "Tarrasch Defense: Classical Variation, Carlsbad Variation" }, "r1bq1rk1/pp3ppp/2n2n2/2bp4/N7/5NP1/PP2PPBP/R1BQ1RK1": { "eco": "D34", "name": "Tarrasch Defense: Classical Variation, Réti Variation" }, "rnbqkb1r/ppp2ppp/4pn2/3P4/3P4/2N5/PP2PPPP/R1BQKBNR": { "eco": "D35", "name": "Queen's Gambit Declined: Exchange Variation" }, "rnbqkb1r/ppp2ppp/5n2/3p2B1/3P4/2N5/PP2PPPP/R2QKBNR": { "eco": "D35", "name": "Queen's Gambit Declined: Exchange Variation, Positional Variation" }, "r1bqkb1r/pppn1ppp/5n2/3p4/3P1B2/2N2N2/PP2PPPP/R2QKB1R": { "eco": "D35", "name": "Queen's Gambit Declined: Exchange Variation, Sämisch Variation" }, "r1bqrnk1/ppp1bppp/5n2/3p2B1/3P4/2NBP3/PPQ1NPPP/2KR3R": { "eco": "D35", "name": "Queen's Gambit Declined: Exchange, Chameleon Variation" }, "rnbqkb1r/ppp2ppp/4pn2/3p4/2PP1B2/2N5/PP2PPPP/R2QKBNR": { "eco": "D35", "name": "Queen's Gambit Declined: Harrwitz Attack" }, "rnbqkb1r/pp3ppp/2p2n2/3p2B1/3P4/2N5/PPQ1PPPP/R3KBNR": { "eco": "D36", "name": "Queen's Gambit Declined: Exchange Variation, Reshevsky Variation" }, "rnbqk2r/ppp1bppp/4pn2/3p4/2PP1B2/2N2N2/PP2PPPP/R2QKB1R": { "eco": "D37", "name": "Queen's Gambit Declined: Harrwitz Attack" }, "r1b2rk1/pp3ppp/2n1pn2/q1bp4/2P2B2/P1N1PN2/1PQ2PPP/3RKB1R": { "eco": "D37", "name": "Queen's Gambit Declined: Harrwitz Attack" }, "r1b2rk1/pp3ppp/2n1pn2/q1bp4/2P2B2/P1N1PN2/1PQ2PPP/2KR1B1R": { "eco": "D37", "name": "Queen's Gambit Declined: Harrwitz Attack" }, "r1bq1rk1/pppnbppp/4pn2/2Pp4/3P1B2/2N1PN2/PP3PPP/R2QKB1R": { "eco": "D37", "name": "Queen's Gambit Declined: Harrwitz Attack, Two Knights Defense, Blockade Line" }, "rnbq1rk1/ppp1bppp/4pn2/3p2B1/2PP4/2N2N2/PPQ1PPPP/R3KB1R": { "eco": "D37", "name": "Queen's Gambit Declined: Miles Variation" }, "rnbqkb1r/ppp2ppp/4pn2/3p4/2PP4/2N2N2/PP2PPPP/R1BQKB1R": { "eco": "D37", "name": "Queen's Gambit Declined: Three Knights Variation" }, "rnbqkb1r/ppp2ppp/4pn2/8/2pP4/2N1PN2/PP3PPP/R1BQKB1R": { "eco": "D37", "name": "Queen's Gambit Declined: Vienna Variation, Quiet Variation" }, "rnbqk2r/ppp2ppp/4pn2/3p4/QbPP4/2N2N2/PP2PPPP/R1B1KB1R": { "eco": "D38", "name": "Queen's Gambit Declined: Ragozin Defense, Alekhine Variation" }, "r1b2rk1/pp2qppp/2n1pn2/2bp4/2P1P3/2NB1N2/PP2QPPP/R1B2RK1": { "eco": "D40", "name": "Queen's Gambit Declined: Semi-Tarrasch Defense, Levenfish Variation" }, "rnbqkb1r/pp3ppp/4pn2/2pp2B1/2PP4/2N2N2/PP2PPPP/R2QKB1R": { "eco": "D40", "name": "Queen's Gambit Declined: Semi-Tarrasch Defense, Pillsbury Variation" }, "rnbqkb1r/pp3ppp/4pn2/2pP4/3P4/2N2N2/PP2PPPP/R1BQKB1R": { "eco": "D41", "name": "Queen's Gambit Declined: Semi-Tarrasch Defense" }, "rnbqkb1r/pp3ppp/4p3/2pn4/3PP3/2N2N2/PP3PPP/R1BQKB1R": { "eco": "D41", "name": "Queen's Gambit Declined: Semi-Tarrasch Defense, Exchange Variation" }, "rnbq1rk1/pp3ppp/4p3/1B6/3PP3/5N2/P2Q1PPP/R3K2R": { "eco": "D41", "name": "Queen's Gambit Declined: Semi-Tarrasch Defense, Kmoch Variation" }, "rnbqkb1r/pp3ppp/4p3/2pn4/3P4/2N1PN2/PP3PPP/R1BQKB1R": { "eco": "D41", "name": "Queen's Gambit Declined: Semi-Tarrasch Defense, Pillsbury Variation" }, "r1bqkb1r/pp3ppp/2n1p3/2pn4/3P4/2NBPN2/PP3PPP/R1BQK2R": { "eco": "D42", "name": "Queen's Gambit Declined: Semi-Tarrasch Defense, Main Line" }, "rnb1kb1r/pp3pp1/2p1pq1p/3p4/2PP4/1QN2N2/PP2PPPP/R3KB1R": { "eco": "D43", "name": "Queen's Gambit Declined: Hastings Variation" }, "rnbqkb1r/pp3pp1/2p1pn1p/3p4/2PP3B/2N2N2/PP2PPPP/R2QKB1R": { "eco": "D43", "name": "Semi-Slav Defense: Anti-Moscow Gambit" }, "rnbqkb1r/pp3ppp/2p1pn2/6B1/2pPP3/2N2N2/PP3PPP/R2QKB1R": { "eco": "D44", "name": "Semi-Slav Defense: Botvinnik Variation" }, "rnbqkb1r/p4p2/2p1pn1p/1p2P1N1/2pP3B/2N5/PP3PPP/R2QKB1R": { "eco": "D44", "name": "Semi-Slav Defense: Botvinnik Variation" }, "rnbqkb1r/p4p2/2p1pP1p/1p2N3/2pP3p/2N5/PP3PPP/R2QKB1R": { "eco": "D44", "name": "Semi-Slav Defense: Botvinnik Variation, Ekstrom Variation" }, "r1bqkb1r/p2n1p2/2p1pn2/1p2P1B1/2pP4/2N3P1/PP3P1P/R2QKB1R": { "eco": "D44", "name": "Semi-Slav Defense: Botvinnik Variation, Lilienthal Variation" }, "r1bqkb1r/p2n1p2/2p1pn2/1p2P1B1/2pP4/2N2Q2/PP3PPP/R3KB1R": { "eco": "D44", "name": "Semi-Slav Defense: Botvinnik Variation, Szabo Variation" }, "rnbqkb1r/pp3ppp/2p1pn2/3p4/2PP4/2N1PN2/PP3PPP/R1BQKB1R": { "eco": "D45", "name": "Semi-Slav Defense: Main Line" }, "r1bqkb1r/pp1n1ppp/2p1pn2/3pN3/2PP4/2N1P3/PP3PPP/R1BQKB1R": { "eco": "D45", "name": "Semi-Slav Defense: Rubinstein (Anti-Meran) System" }, "r1bqkb1r/pp1n1ppp/2p1pn2/3p4/2PP4/2N1PN2/PPQ2PPP/R1B1KB1R": { "eco": "D45", "name": "Semi-Slav Defense: Stoltz Variation" }, "r1bqk2r/pp1n1ppp/2pbpn2/3p4/2PPP3/2N2N2/PPQ2PPP/R1B1KB1R": { "eco": "D45", "name": "Semi-Slav Defense: Stoltz Variation, Center Variation" }, "r1bqk2r/pp1n1ppp/2pb4/4P3/2P1Q3/5N2/PP3PPP/R1B1KB1R": { "eco": "D45", "name": "Semi-Slav Defense: Stoltz Variation, Center Variation, Mikhalchishin Line" }, "r1bqk2r/pp1n1ppp/2pbpn2/3p4/2PP2P1/2N1PN2/PPQ2P1P/R1B1KB1R": { "eco": "D45", "name": "Semi-Slav Defense: Stoltz Variation, Shabalov Attack" }, "r1bqkb1r/pp1n1ppp/2p1pn2/3p4/2PP4/2NBPN2/PP3PPP/R1BQK2R": { "eco": "D46", "name": "Semi-Slav Defense: Main Line" }, "r2qkb1r/pb1n1ppp/4p3/3nP3/Np1N4/3B4/PP3PPP/R1BQ1RK1": { "eco": "D47", "name": "Semi-Slav Defense: Meran Variation, Wade Variation, Kaidanov Gambit" }, "r1bqkb1r/pp1n1ppp/2p1pn2/8/2BP4/2N1PN2/PP3PPP/R1BQK2R": { "eco": "D47", "name": "Semi-Slav Defense: Semi-Meran Variation" }, "r1bqkb1r/3n1ppp/p3pn2/1pp1P3/3P4/2NB1N2/PP3PPP/R1BQK2R": { "eco": "D48", "name": "Semi-Slav Defense: Meran Variation, Old Variation" }, "r1bqkb1r/3n1ppp/p3pn2/1ppP4/4P3/2NB1N2/PP3PPP/R1BQK2R": { "eco": "D48", "name": "Semi-Slav Defense: Meran Variation, Reynolds' Variation" }, "r1bqkb1r/3n1ppp/p3pn2/1N2P3/3p4/3B1N2/PP3PPP/R1BQK2R": { "eco": "D49", "name": "Semi-Slav Defense: Meran Variation, Blumenfeld Variation" }, "r3kb1r/5ppp/b3pn2/1p1qN1B1/3p4/3B4/PP2QPPP/R4RK1": { "eco": "D49", "name": "Semi-Slav Defense: Meran Variation, Rellstab Attack" }, "r1bqkb1r/5ppp/4pn2/1p2N3/3p4/3B4/PP3PPP/R1BQ1RK1": { "eco": "D49", "name": "Semi-Slav Defense: Meran Variation, Sozin Variation" }, "r1bqkb1r/5ppp/4pn2/1p2N3/3p4/3B1Q2/PP3PPP/R1B1K2R": { "eco": "D49", "name": "Semi-Slav Defense: Meran Variation, Stahlberg Variation" }, "rnbqkb1r/ppp2ppp/4pn2/3p2B1/2PP4/2N5/PP2PPPP/R2QKBNR": { "eco": "D50", "name": "Queen's Gambit Declined: Modern Variation" }, "rnbqkb1r/pp3ppp/4pn2/2pP2B1/3P4/2N5/PP2PPPP/R2QKBNR": { "eco": "D50", "name": "Queen's Gambit Declined: Pseudo-Tarrasch Variation" }, "rnbqkb1r/pp3ppp/4pn2/3p2B1/2PQ4/2N2N2/PP2PPPP/R3KB1R": { "eco": "D50", "name": "Queen's Gambit Declined: Pseudo-Tarrasch Variation, Primitive Pillsbury Variation" }, "rnbqkb1r/1p3ppp/p4n2/1N1pp1B1/Q1P5/2N5/PP2PPPP/R3KB1R": { "eco": "D50", "name": "Queen's Gambit Declined: Semi-Tarrasch Defense, Krause Variation" }, "r1bqkb1r/pp1n1ppp/2p1pn2/3p2B1/2PPP3/2N2N2/PP3PPP/R2QKB1R": { "eco": "D51", "name": "Queen's Gambit Declined: Alekhine Variation" }, "r1bqkb1r/pp1n1ppp/2p1pn2/3p2B1/2PP4/P1N1P3/1P3PPP/R2QKBNR": { "eco": "D51", "name": "Queen's Gambit Declined: Capablanca Variation, Anti-Cambridge Springs Variation" }, "r1bqkb1r/pppn1ppp/4pn2/3p2B1/2PP4/2N1P3/PP3PPP/R2QKBNR": { "eco": "D51", "name": "Queen's Gambit Declined: Modern Variation, Knight Defense" }, "r1b1kb1r/pp1n1ppp/2p1pn2/q2p4/2PP4/2N2N2/PP1BPPPP/2RQKB1R": { "eco": "D51", "name": "Queen's Gambit Declined: Rochlin Variation" }, "r1bqkb1r/pp1n1ppp/2p1pn2/3p2B1/2PP4/2N1PN2/PP3PPP/R2QKB1R": { "eco": "D52", "name": "Queen's Gambit Declined" }, "r1b1kb1r/pp1n1ppp/2p1pn2/q2P2B1/3P4/2N1PN2/PP3PPP/R2QKB1R": { "eco": "D52", "name": "Queen's Gambit Declined: Cambridge Springs Defense" }, "r1b2rk1/pp1n1ppp/2p1pn2/q2p4/1bPP3B/2N1P3/PPQN1PPP/R3KB1R": { "eco": "D52", "name": "Queen's Gambit Declined: Cambridge Springs Defense, Argentine Variation" }, "r1b1k2r/pp1n1ppp/2p1pn2/q2p2B1/1bPP4/2N1P3/PPQN1PPP/R3KB1R": { "eco": "D52", "name": "Queen's Gambit Declined: Cambridge Springs Defense, Bogoljubov Variation" }, "r1b1kb1r/pp1n1ppp/2p1pB2/q2p4/2PP4/2N1PN2/PP3PPP/R2QKB1R": { "eco": "D52", "name": "Queen's Gambit Declined: Cambridge Springs Defense, Capablanca Variation" }, "rnbqk2r/ppp1bppp/4pB2/3p4/2PP4/2N5/PP2PPPP/R2QKBNR": { "eco": "D53", "name": "Queen's Gambit Declined: Modern Variation, Heral Variation" }, "rnbq1rk1/ppp1bppp/4pn2/3p2B1/2PP4/2N1P3/PP3PPP/2RQKBNR": { "eco": "D54", "name": "Queen's Gambit Declined: Neo-Orthodox Variation" }, "rnbq1rk1/ppp1bpp1/4pB1p/3p4/2PP4/2N1PN2/PP3PPP/R2QKB1R": { "eco": "D55", "name": "Queen's Gambit Declined: Anti-Tartakower Variation" }, "r1bq1rk1/pp1n1pp1/2p1pb1p/8/2BP4/2N1PN2/PP3PPP/2RQ1RK1": { "eco": "D55", "name": "Queen's Gambit Declined: Anti-Tartakower Variation, Petrosian Variation" }, "rnbq1rk1/ppp1bppp/4pn2/3p2B1/2PP4/2N1PN2/PP3PPP/R2QKB1R": { "eco": "D55", "name": "Queen's Gambit Declined: Modern Variation, Normal Line" }, "rnbq1rk1/ppp1bpp1/4pn1p/3p4/2PP3B/2N1PN2/PP3PPP/R2QKB1R": { "eco": "D55", "name": "Queen's Gambit Declined: Neo-Orthodox Variation, Main Line" }, "rn1q1rk1/pbp1bppp/1p3n2/3pN1B1/3P4/2NBP3/PP3PPP/R2QK2R": { "eco": "D55", "name": "Queen's Gambit Declined: Pillsbury Attack" }, "rnb2rk1/ppp1qpp1/4p2p/3p4/2PPn3/2N1PN2/PPQ2PPP/R3KB1R": { "eco": "D56", "name": "Queen's Gambit Declined: Lasker Defense, Teichmann Variation" }, "rnb2rk1/ppp1qpp1/4p2p/3P4/3P4/2P1PN2/P4PPP/R2QKB1R": { "eco": "D57", "name": "Queen's Gambit Declined: Lasker Defense, Main Line" }, "r1bq1rk1/pppnbppp/4pn2/3p2B1/2PP4/2NBPN2/PP3PPP/R2QK2R": { "eco": "D60", "name": "Queen's Gambit Declined: Orthodox Defense, Botvinnik Variation" }, "r1bq1rk1/pppnbppp/4pn2/3p2B1/2PP4/1QN1PN2/PP3PPP/R3KB1R": { "eco": "D60", "name": "Queen's Gambit Declined: Orthodox Defense, Rauzer Variation" }, "r1bq1rk1/pppnbppp/4pn2/3p2B1/2PP4/2N1PN2/PPQ2PPP/R3KB1R": { "eco": "D61", "name": "Queen's Gambit Declined: Orthodox Defense, Rubinstein Variation" }, "r1bq1rk1/pp1nbppp/4pn2/2pP2B1/3P4/2N1PN2/PPQ2PPP/R3KB1R": { "eco": "D62", "name": "Queen's Gambit Declined: Orthodox Defense, Rubinstein Variation, Flohr Line" }, "r1bq1rk1/p1pnbppp/1p3n2/1B1p2B1/3P4/2N1PN2/PP3PPP/2RQK2R": { "eco": "D63", "name": "Queen's Gambit Declined: Orthodox Defense, Capablanca Variation" }, "r1bq1rk1/pppnbppp/4pn2/3p2B1/2PP4/2N1PN2/PP3PPP/2RQKB1R": { "eco": "D63", "name": "Queen's Gambit Declined: Orthodox Defense, Main Line" }, "r1bq1rk1/p1pnbppp/1p3n2/3p2B1/3P4/2NBPN2/PP3PPP/2RQK2R": { "eco": "D63", "name": "Queen's Gambit Declined: Orthodox Defense, Pillsbury Variation" }, "r1bq1rk1/1ppnbppp/p3pn2/3P2B1/3P4/2N1PN2/PP3PPP/2RQKB1R": { "eco": "D63", "name": "Queen's Gambit Declined: Orthodox Defense, Swiss, Karlsbad Variation" }, "r1bq1rk1/1p1nbppp/p1p1pn2/3p2B1/2PP4/P1N1PN2/1PQ2PPP/2R1KB1R": { "eco": "D64", "name": "Queen's Gambit Declined: Orthodox Defense, Rubinstein Attack" }, "r1bq1rk1/pp1nbppp/2p1pn2/3p2B1/2PP4/2N1PN2/PPQ2PPP/2R1KB1R": { "eco": "D64", "name": "Queen's Gambit Declined: Orthodox Defense, Rubinstein Attack" }, "r1bq1rk1/1p1nbppp/p1p1pn2/3P2B1/3P4/2N1PN2/PPQ2PPP/2R1KB1R": { "eco": "D65", "name": "Queen's Gambit Declined: Orthodox Defense, Rubinstein Attack" }, "r1bq1rk1/pp1nbppp/2p1pn2/3p2B1/2PP4/2NBPN2/PP3PPP/2RQK2R": { "eco": "D66", "name": "Queen's Gambit Declined: Orthodox Defense, Bd3 Line" }, "r1b2rk1/pp1nqppp/2p1p3/3n4/2BPN3/4PN2/PP3PPP/2RQK2R": { "eco": "D67", "name": "Queen's Gambit Declined: Orthodox Defense, Alekhine Variation" }, "r1bq1rk1/pp1nbppp/2p1p3/3n2B1/2BP3P/2N1PN2/PP3PP1/2RQK2R": { "eco": "D67", "name": "Queen's Gambit Declined: Orthodox Defense, Janowski Variation" }, "r1b2rk1/pp1nqppp/2p1p3/3n4/2BP4/2N1PN2/PP3PPP/2RQ1RK1": { "eco": "D67", "name": "Queen's Gambit Declined: Orthodox Defense, Main Line" }, "r1b2rk1/pp1nqppp/2p5/4p3/2BP4/2R1PN2/PP3PPP/1Q3RK1": { "eco": "D68", "name": "Queen's Gambit Declined: Orthodox Defense, Classical Variation" }, "r1b2rk1/pp1nqppp/2p5/4p3/2BP4/2R1PN2/PPQ2PPP/5RK1": { "eco": "D68", "name": "Queen's Gambit Declined: Orthodox Defense, Classical Variation" }, "rnbq1rk1/ppp1ppbp/6p1/3n4/3P4/5NP1/PP2PPBP/RNBQ1RK1": { "eco": "D74", "name": "Neo-Grünfeld Defense: Delayed Exchange Variation" }, "rnbq1rk1/pp2ppbp/6p1/2pn4/3P4/2N2NP1/PP2PPBP/R1BQ1RK1": { "eco": "D75", "name": "Neo-Grünfeld Defense: Delayed Exchange Variation" }, "rnbq1rk1/pp2ppbp/6p1/2Pn4/8/5NP1/PP2PPBP/RNBQ1RK1": { "eco": "D75", "name": "Neo-Grünfeld Defense: Delayed Exchange Variation" }, "rnbq1rk1/ppp1ppbp/5np1/3p4/2PP4/5NP1/PP2PPBP/RNBQ1RK1": { "eco": "D77", "name": "Neo-Grünfeld Defense: Classical Variation" }, "rnbqkb1r/ppp1pp1p/5np1/3p4/2PP2P1/2N5/PP2PP1P/R1BQKBNR": { "eco": "D80", "name": "Grünfeld Defense: Gibbon Gambit" }, "rnbqkb1r/ppp1pp1p/5np1/3p4/2PP4/2N2P2/PP2P1PP/R1BQKBNR": { "eco": "D80", "name": "Grünfeld Defense: Lutikov Variation" }, "rnbqkb1r/pp2pp1p/6p1/2pn4/N2P4/5P2/PP2P1PP/R1BQKBNR": { "eco": "D80", "name": "Grünfeld Defense: Lutikov Variation, Murrey Attack" }, "rnbqkb1r/ppp1pp1p/5np1/3p2B1/2PP4/2N5/PP2PPPP/R2QKBNR": { "eco": "D80", "name": "Grünfeld Defense: Stockholm Variation" }, "rnbqkb1r/ppp1pp1p/5np1/3p4/2PP3P/2N5/PP2PPP1/R1BQKBNR": { "eco": "D80", "name": "Grünfeld Defense: Zaitsev Gambit" }, "rnbqkb1r/ppp1pp1p/5np1/3p4/2PP4/1QN5/PP2PPPP/R1B1KBNR": { "eco": "D81", "name": "Grünfeld Defense: Russian Variation, Accelerated Variation" }, "rnbqkb1r/ppp1pp1p/5np1/3p4/2PP1B2/2N5/PP2PPPP/R2QKBNR": { "eco": "D82", "name": "Grünfeld Defense: Brinckmann Attack" }, "rnbq1rk1/ppp1ppbp/5np1/3p4/2PP1B2/2N1P3/PP3PPP/2RQKBNR": { "eco": "D83", "name": "Grünfeld Defense: Brinckmann Attack, Grünfeld Gambit, Capablanca Variation" }, "rnb2rk1/ppB1ppbp/6p1/3q4/3P4/4P3/PP3PPP/R2QKBNR": { "eco": "D84", "name": "Grünfeld Defense: Brinckmann Attack, Grünfeld Gambit Accepted" }, "rnbqk2r/ppp1ppbp/6p1/8/3PP3/2P2N2/P4PPP/R1BQKB1R": { "eco": "D85", "name": "Grünfeld Defense: Exchange Variation, Modern Exchange Variation" }, "rnbqk2r/pp2ppbp/6p1/2p5/3PP3/2P2N1P/P4PP1/R1BQKB1R": { "eco": "D85", "name": "Grünfeld Defense: Exchange Variation, Modern Exchange Variation, Kramnik's Line" }, "rnbqkb1r/ppp1pp1p/6p1/3n4/N2P4/8/PP2PPPP/R1BQKBNR": { "eco": "D85", "name": "Grünfeld Defense: Exchange Variation, Nadanian Attack" }, "rnbqk2r/ppp1ppbp/6p1/8/2BPP3/2P5/P4PPP/R1BQK1NR": { "eco": "D86", "name": "Grünfeld Defense: Exchange Variation, Classical Variation" }, "r2q1rk1/pp2pBbp/6p1/n1p5/3PP1b1/2P1BP2/P3N1PP/R2Q1RK1": { "eco": "D87", "name": "Grünfeld Defense: Exchange Variation, Seville Variation" }, "r1bq1rk1/pp2ppbp/2n3p1/8/2BPP3/4B3/P3NPPP/R2Q1RK1": { "eco": "D88", "name": "Grünfeld Defense: Exchange Variation, Spassky Variation" }, "r2q1rk1/pp2ppbp/4b1p1/n2P4/4P3/3BBP2/P3N1PP/R2Q1RK1": { "eco": "D89", "name": "Grünfeld Defense: Exchange Variation, Sokolsky Variation" }, "rnbqk2r/ppp1ppbp/5np1/3p4/Q1PP4/2N2N2/PP2PPPP/R1B1KB1R": { "eco": "D90", "name": "Grünfeld Defense: Flohr Variation" }, "rnbqkb1r/ppp1pp1p/5np1/3p4/2PP4/2N2N2/PP2PPPP/R1BQKB1R": { "eco": "D90", "name": "Grünfeld Defense: Three Knights Variation" }, "rnbqk2r/ppp1ppbp/5np1/3p2B1/2PP4/2N2N2/PP2PPPP/R2QKB1R": { "eco": "D91", "name": "Grünfeld Defense: Three Knights Variation, Petrosian System" }, "rnbqk2r/ppp1ppbp/5np1/3p4/2PP1B2/2N2N2/PP2PPPP/R2QKB1R": { "eco": "D92", "name": "Grünfeld Defense: Three Knights Variation, Hungarian Attack" }, "rnbq1rk1/ppp1ppbp/5np1/3p4/2PP1B2/2N1PN2/PP3PPP/R2QKB1R": { "eco": "D93", "name": "Grünfeld Defense: Three Knights Variation, Hungarian Variation" }, "rnbq1rk1/ppp1ppbp/5np1/3p4/1PPP4/2N1PN2/P4PPP/R1BQKB1R": { "eco": "D94", "name": "Grünfeld Defense: Makogonov Variation" }, "rnbq1rk1/ppp1ppbp/5np1/3p4/2PP4/2N1PN2/PP1B1PPP/R2QKB1R": { "eco": "D94", "name": "Grünfeld Defense: Opocensky Variation" }, "rnbqk2r/ppp1ppbp/5np1/3p4/2PP4/2N1PN2/PP3PPP/R1BQKB1R": { "eco": "D94", "name": "Grünfeld Defense: Three Knights Variation, Burille Variation" }, "rnbq1rk1/ppp1ppbp/5np1/3p4/2PP4/2NBPN2/PP3PPP/R1BQK2R": { "eco": "D94", "name": "Grünfeld Defense: Three Knights Variation, Paris Variation" }, "r1bq1rk1/pppnppbp/5np1/6N1/2BP4/1QN1P3/PP3PPP/R1B1K2R": { "eco": "D95", "name": "Grünfeld Defense: Pachman Variation" }, "rnbq1rk1/ppp1ppbp/5np1/3p4/2PP4/1QN1PN2/PP3PPP/R1B1KB1R": { "eco": "D95", "name": "Grünfeld Defense: Three Knights Variation, Vienna Variation" }, "rnbqk2r/ppp1ppbp/5np1/3p4/2PP4/1QN2N2/PP2PPPP/R1B1KB1R": { "eco": "D96", "name": "Grünfeld Defense: Russian Variation" }, "rnbq1rk1/ppp1ppbp/5np1/8/2QPP3/2N2N2/PP3PPP/R1B1KB1R": { "eco": "D97", "name": "Grünfeld Defense: Russian Variation" }, "r2q1rk1/ppp1ppbp/1nn3p1/8/3PP1b1/2NQBN2/PP2BPPP/2KR3R": { "eco": "D98", "name": "Grünfeld Defense: Russian Variation, Keres Variation" }, "rn1q1rk1/pppnppbp/6p1/8/3PP1b1/1QN1BN2/PP3PPP/R3KB1R": { "eco": "D99", "name": "Grünfeld Defense: Russian Variation, Smyslov Variation" }, "rnbqkb1r/pppp1ppp/4pn2/8/2PP4/6P1/PP2PP1P/RNBQKBNR": { "eco": "E00", "name": "Catalan Opening" }, "rnbqkb1r/pppp1ppp/4pn2/8/2PP4/1Q6/PP2PPPP/RNB1KBNR": { "eco": "E00", "name": "Indian Game" }, "rnbqkb1r/pppp1ppp/4pn2/8/2PP2P1/8/PP2PP1P/RNBQKBNR": { "eco": "E00", "name": "Indian Game: Devin Gambit" }, "rnbqkb1r/pppp1ppp/4pn2/6B1/2PP4/8/PP2PPPP/RN1QKBNR": { "eco": "E00", "name": "Indian Game: Seirawan Attack" }, "rnbqkb1r/ppp2ppp/4pn2/3p4/2PP4/6P1/PP2PPBP/RNBQK1NR": { "eco": "E01", "name": "Catalan Opening: Closed" }, "rnbqkb1r/ppp2ppp/4pn2/8/Q1pP4/6P1/PP2PPBP/RNB1K1NR": { "eco": "E02", "name": "Catalan Opening: Open Defense" }, "r1bqkb1r/pppn1ppp/4pn2/8/2QP4/6P1/PP2PPBP/RNB1K1NR": { "eco": "E03", "name": "Catalan Opening: Open Defense" }, "r1bqkb1r/1ppn1ppp/p3pn2/8/3P4/6P1/PPQ1PPBP/RNB1K1NR": { "eco": "E03", "name": "Catalan Opening: Open Defense, Alekhine Variation" }, "rnbqkb1r/ppp2ppp/4pn2/8/2pP4/5NP1/PP2PPBP/RNBQK2R": { "eco": "E04", "name": "Catalan Opening: Open Defense" }, "rnbqk2r/ppp1bppp/4pn2/3p4/2PP4/5NP1/PP2PPBP/RNBQK2R": { "eco": "E06", "name": "Catalan Opening: Closed" }, "r1bq1rk1/pp1nbppp/2p1pn2/3p4/2PP4/2NQ1NP1/PP2PPBP/R1B2RK1": { "eco": "E07", "name": "Catalan Opening: Closed, Botvinnik Variation" }, "r1bq1rk1/pp1nbppp/2p1pn2/3p4/2PP4/1P3NP1/P1Q1PPBP/RNB2RK1": { "eco": "E08", "name": "Catalan Opening: Closed" }, "r1bq1rk1/pppnbppp/4pn2/3p4/2PP4/5NP1/PPQ1PPBP/RNB2RK1": { "eco": "E08", "name": "Catalan Opening: Closed" }, "r1bq1rk1/p2nbppp/1pp1pn2/3p4/P1PP4/5NP1/1PQ1PPBP/RNBR2K1": { "eco": "E08", "name": "Catalan Opening: Closed, Zagoryansky Variation" }, "r1bq1rk1/pp1nbppp/2p1pn2/3p4/2PP4/5NP1/PPQNPPBP/R1B2RK1": { "eco": "E09", "name": "Catalan Opening: Closed, Main Line" }, "rnbqkb1r/p2p1ppp/4pn2/1ppP2B1/2P5/5N2/PP2PPPP/RN1QKB1R": { "eco": "E10", "name": "Blumenfeld Countergambit: Dus-Khotimirsky Variation" }, "rnbqkb1r/pppp1ppp/4pn2/8/2PP4/5N2/PP2PPPP/RNBQKB1R": { "eco": "E10", "name": "Indian Game: Anti-Nimzo-Indian" }, "rnbqk2r/pppp1ppp/4pn2/8/1bPP4/5N2/PP1NPPPP/R1BQKB1R": { "eco": "E11", "name": "Bogo-Indian Defense: Grünfeld Variation" }, "rn1q1rk1/pbpp1ppp/1p2p3/6N1/2PP4/2n3P1/PPQ1PPBP/R3K2R": { "eco": "E11", "name": "Bogo-Indian Defense: Monticelli Trap" }, "rnbqk2r/pppp1ppp/4pn2/8/1bPP4/8/PP1NPPPP/RNBQKB1R": { "eco": "E11", "name": "Bogo-Indian Defense: New England Variation" }, "rn1qk2r/pbpp1ppp/1p2pn2/6B1/1bPP4/2N5/PP1NPPPP/R2QKB1R": { "eco": "E12", "name": "Nimzo-Indian Defense: Three Knights Variation, Duchamp Variation, Modern Line" }, "rnbqkb1r/p1pp1ppp/1p2pn2/8/2PP4/2N2N2/PP2PPPP/R1BQKB1R": { "eco": "E12", "name": "Queen's Indian Defense: Kasparov Variation" }, "rn1qkb1r/pbpp1ppp/1p2pn2/8/2PP4/P1N2N2/1P2PPPP/R1BQKB1R": { "eco": "E12", "name": "Queen's Indian Defense: Kasparov-Petrosian Variation" }, "rn1qkb1r/pbp2ppp/1p2p3/3n4/3P4/P1N2N2/1PQ1PPPP/R1B1KB1R": { "eco": "E12", "name": "Queen's Indian Defense: Kasparov-Petrosian Variation, Kasparov Attack" }, "rn1qkb1r/pbp2ppp/1p2p3/3n4/3P4/P1N1PN2/1P3PPP/R1BQKB1R": { "eco": "E12", "name": "Queen's Indian Defense: Kasparov-Petrosian Variation, Petrosian Attack" }, "rn1qkb1r/pbp2ppp/1p2p3/3n4/3PP3/P1N2N2/1P3PPP/R1BQKB1R": { "eco": "E12", "name": "Queen's Indian Defense: Kasparov-Petrosian Variation, Polovodin Gambit" }, "rn1qkb1r/pbp2ppp/1p2p3/3n4/Q2P4/P1N2N2/1P2PPPP/R1B1KB1R": { "eco": "E12", "name": "Queen's Indian Defense: Kasparov-Petrosian Variation, Rashkovsky Attack" }, "rn1qkb1r/pbp2ppp/1p2p3/3n4/3P4/P1N2N2/1P1BPPPP/R2QKB1R": { "eco": "E12", "name": "Queen's Indian Defense: Kasparov-Petrosian Variation, Romanishin Attack" }, "rnbqkb1r/p1pp1ppp/1p2pn2/8/2PP1B2/5N2/PP2PPPP/RN1QKB1R": { "eco": "E12", "name": "Queen's Indian Defense: Miles Variation" }, "rnbqkb1r/p1pp1ppp/1p2pn2/8/2PP4/P4N2/1P2PPPP/RNBQKB1R": { "eco": "E12", "name": "Queen's Indian Defense: Petrosian Variation" }, "rnbqkb1r/p1pp1ppp/1p2pn2/8/2PP4/4PN2/PP3PPP/RNBQKB1R": { "eco": "E14", "name": "Queen's Indian Defense: Spassky System" }, "rn1q1rk1/pb1pbppp/1p2pn2/8/2PN4/1P1BP3/PB3PPP/RN1Q1RK1": { "eco": "E14", "name": "Queen's Indian, Averbakh Variation" }, "rnbqkb1r/p1pp1ppp/1p2pn2/8/2PP4/5NP1/PP2PP1P/RNBQKB1R": { "eco": "E15", "name": "Queen's Indian Defense: Fianchetto Variation" }, "rn1qkb1r/p1pp1ppp/bp2pn2/8/Q1PP4/5NP1/PP2PP1P/RNB1KB1R": { "eco": "E15", "name": "Queen's Indian Defense: Fianchetto Variation, Nimzowitsch Variation, Nimzowitsch Attack" }, "rn1qkb1r/p1pp1ppp/bp2pn2/8/2PP4/1P3NP1/P3PP1P/RNBQKB1R": { "eco": "E15", "name": "Queen's Indian Defense: Fianchetto Variation, Nimzowitsch Variation, Quiet Line" }, "rn1qkb1r/p1pp1ppp/bp2pn2/8/2PP4/1Q3NP1/PP2PP1P/RNB1KB1R": { "eco": "E15", "name": "Queen's Indian Defense: Fianchetto Variation, Nimzowitsch Variation, Timman's Line" }, "rn1qkb1r/pb1p1ppp/1p3n2/2pp4/2P4N/6P1/PP2PPBP/RNBQK2R": { "eco": "E15", "name": "Queen's Indian Defense: Fianchetto Variation, Rubinstein Variation" }, "rn1qkb1r/pb1p1ppp/1p3n2/2pp2N1/2P5/6P1/PP2PPBP/RNBQK2R": { "eco": "E15", "name": "Queen's Indian, Buerger Variation" }, "rn1qk2r/pbppbppp/1p2pn2/8/2PP4/2N2NP1/PP2PPBP/R1BQK2R": { "eco": "E17", "name": "Queen's Indian Defense: Anti-Queen's Indian System" }, "rn1qk2r/pbppbppp/1p2pn2/8/2PP4/5NP1/PP2PPBP/RNBQ1RK1": { "eco": "E17", "name": "Queen's Indian Defense: Classical Variation" }, "rn1q1rk1/pbppbppp/1p3n2/3p4/2P4N/6P1/PP2PPBP/RNBQ1RK1": { "eco": "E17", "name": "Queen's Indian Defense: Classical Variation, Polugaevsky Gambit" }, "rn1q1rk1/pbppbppp/1p3n2/3p4/2PN4/6P1/PP2PPBP/RNBQ1RK1": { "eco": "E17", "name": "Queen's Indian Defense: Classical Variation, Taimanov Gambit" }, "rn1q1rk1/pbppbppp/1p2pn2/8/2PP4/1P3NP1/P3PPBP/RNBQ1RK1": { "eco": "E17", "name": "Queen's Indian Defense: Euwe Variation" }, "rn1q1rk1/pbppbppp/1p2pn2/8/2PP4/5NP1/PP2PPBP/RNBQR1K1": { "eco": "E17", "name": "Queen's Indian Defense: Fianchetto Variation, Kramnik Variation" }, "rn1qk2r/pbppbppp/1p2p3/8/2PPn3/2N2NP1/PP1BPPBP/R2QK2R": { "eco": "E17", "name": "Queen's Indian Defense: Opocensky Variation" }, "rn1q1rk1/pbppbppp/1p2pn2/8/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1": { "eco": "E18", "name": "Queen's Indian Defense: Classical Variation, Traditional Variation" }, "rn1q1rk1/pbppbppp/1p2p3/8/2PP4/2Q2NP1/PP2PPBP/R1B2RK1": { "eco": "E19", "name": "Queen's Indian Defense: Classical Variation, Traditional Variation, Main Line" }, "rnbqk2r/pppp1ppp/4pn2/8/1bPP4/2N2P2/PP2P1PP/R1BQKBNR": { "eco": "E20", "name": "Nimzo-Indian Defense: Kmoch Variation" }, "rnbqk2r/pppp1ppp/4pn2/8/1bPP4/2NQ4/PP2PPPP/R1B1KBNR": { "eco": "E20", "name": "Nimzo-Indian Defense: Mikenas Attack" }, "rnbqk2r/pppp1ppp/4pn2/8/1bPP4/2N3P1/PP2PP1P/R1BQKBNR": { "eco": "E20", "name": "Nimzo-Indian Defense: Romanishin Variation" }, "rnbq1rk1/pp1p1ppp/4pn2/2p5/1bPP4/2N2NP1/PP2PPBP/R1BQK2R": { "eco": "E21", "name": "Nimzo-Indian Defense: Romanishin Variation" }, "rnbqk2r/pppp1ppp/4pn2/8/1bPP4/2N2N2/PP2PPPP/R1BQKB1R": { "eco": "E21", "name": "Nimzo-Indian Defense: Three Knights Variation" }, "rnbqk2r/pp1p1ppp/4pn2/2pP4/1bP5/2N2N2/PP2PPPP/R1BQKB1R": { "eco": "E21", "name": "Nimzo-Indian Defense: Three Knights Variation, Korchnoi Variation" }, "rnbqk2r/pppp1ppp/4pn2/8/1bPP4/1QN5/PP2PPPP/R1B1KBNR": { "eco": "E22", "name": "Nimzo-Indian Defense: Spielmann Variation" }, "r1bqk2r/pp1p2pp/2n1p3/2n2p2/1bP5/2N2NP1/PPQBPP1P/R3KB1R": { "eco": "E23", "name": "Nimzo-Indian Defense: Spielmann Variation, Stahlberg Variation" }, "rnbqk2r/pppp1ppp/4pn2/8/2PP4/P1P5/4PPPP/R1BQKBNR": { "eco": "E24", "name": "Nimzo-Indian Defense: Sämisch Variation, Accelerated" }, "rnbqk2r/pp3ppp/4pn2/2pP4/3P4/P1P2P2/4P1PP/R1BQKBNR": { "eco": "E25", "name": "Nimzo-Indian Defense: Sämisch Variation" }, "rnbqk2r/pp3ppp/4p3/2Pn4/8/P1P2P2/4P1PP/R1BQKBNR": { "eco": "E25", "name": "Nimzo-Indian Defense: Sämisch Variation, Keres Variation" }, "rnbqk2r/pp1p1ppp/4pn2/2p5/2PP4/P1P1P3/5PPP/R1BQKBNR": { "eco": "E26", "name": "Nimzo-Indian Defense: Sämisch Variation" }, "rnbq1rk1/pppp1ppp/4pn2/8/2PP4/P1P1P3/5PPP/R1BQKBNR": { "eco": "E28", "name": "Nimzo-Indian Defense: Sämisch Variation" }, "rnbqk2r/pppp1ppp/4pn2/6B1/1bPP4/2N5/PP2PPPP/R2QKBNR": { "eco": "E30", "name": "Nimzo-Indian Defense: Leningrad Variation" }, "rnbqk2r/pppp1ppp/4pn2/8/1bPP4/2N5/PPQ1PPPP/R1B1KBNR": { "eco": "E32", "name": "Nimzo-Indian Defense: Classical Variation" }, "rnbqk2r/ppp2ppp/4pn2/3p4/1bPP4/P1N5/1PQ1PPPP/R1B1KBNR": { "eco": "E36", "name": "Nimzo-Indian Defense: Classical Variation, Noa Variation" }, "rnbqk2r/ppp2ppp/4p3/3p4/2PPn3/P7/1PQ1PPPP/R1B1KBNR": { "eco": "E37", "name": "Nimzo-Indian Defense: Classical Variation, Noa Variation" }, "rnbq1rk1/p2p1ppp/1p2pn2/2b5/2P2B2/P1N2N2/1PQ1PPPP/R3KB1R": { "eco": "E39", "name": "Nimzo-Indian Defense: Classical Variation, Berlin Variation, Macieja System" }, "rnbqk2r/pppp1ppp/4pn2/8/1bPP4/2N1P3/PP3PPP/R1BQKBNR": { "eco": "E40", "name": "Nimzo-Indian Defense: Normal Line" }, "rnbqk2r/pp1p1ppp/4pn2/2p5/1bPP4/2N1P3/PP2NPPP/R1BQKB1R": { "eco": "E42", "name": "Nimzo-Indian Defense: Hübner Variation, Rubinstein Variation" }, "rnbq1rk1/pp1p1ppp/4pn2/8/1bPP4/P1N5/1P2NPPP/R1BQKB1R": { "eco": "E42", "name": "Nimzo-Indian Defense: Hübner Variation, Rubinstein Variation, Main Line" }, "rnbq1rk1/pp1p1ppp/4pn2/2P5/1b1P4/2N5/PP2NPPP/R1BQKB1R": { "eco": "E42", "name": "Nimzo-Indian Defense: Hübner Variation, Rubinstein Variation, Sherbakov Attack" }, "rnbqk2r/p1pp1ppp/1p2pn2/8/1bPP4/2N1P3/PP2NPPP/R1BQKB1R": { "eco": "E44", "name": "Nimzo-Indian Defense: Fischer Variation" }, "rnbq1rk1/pppp1ppp/4pn2/8/1bPP4/2N1P3/PP2NPPP/R1BQKB1R": { "eco": "E46", "name": "Nimzo-Indian Defense: Reshevsky Variation" }, "rnbq1rk1/pppp1ppp/4pn2/8/1bPP4/2NBP3/PP3PPP/R1BQK1NR": { "eco": "E47", "name": "Nimzo-Indian Defense: Normal Variation, Bishop Attack" }, "r1bq1rk1/ppp2ppp/2n1pn2/3p4/1bPP4/2NBPN2/PP3PPP/R1BQ1RK1": { "eco": "E48", "name": "Nimzo-Indian Defense: Ragozin Defense" }, "rnbq1rk1/ppp2ppp/4pn2/3p4/2PP4/P1PBP3/5PPP/R1BQK1NR": { "eco": "E49", "name": "Nimzo-Indian Defense: Normal Variation, Botvinnik System" }, "rnbq1rk1/pppp1ppp/4pn2/8/1bPP4/2N1PN2/PP3PPP/R1BQKB1R": { "eco": "E50", "name": "Nimzo-Indian Defense" }, "rnbq1rk1/ppp2ppp/4pn2/3p4/1bPP4/P1N1PN2/1P3PPP/R1BQKB1R": { "eco": "E51", "name": "Nimzo-Indian Defense: Normal Variation, Sämisch Deferred" }, "rnbq1rk1/pp3ppp/4pn2/2p5/1bBP4/2N1PN2/PP3PPP/R1BQ1RK1": { "eco": "E54", "name": "Nimzo-Indian Defense: Normal Variation, Gligoric System, Exchange at c4" }, "r1bq1rk1/pp3ppp/2n1pn2/2pp4/2PP4/P1PBPN2/5PPP/R1BQ1RK1": { "eco": "E58", "name": "Nimzo-Indian Defense: Normal Variation, Bernstein Defense, Exchange Line" }, "r1bq1rk1/pp3ppp/2n1pn2/2p5/2BP4/P1P1PN2/5PPP/R1BQ1RK1": { "eco": "E59", "name": "Nimzo-Indian Defense: Normal Variation, Bernstein Defense" }, "rnbqkb1r/pppppp1p/5np1/3P4/2P5/8/PP2PPPP/RNBQKBNR": { "eco": "E60", "name": "Indian Game: Anti-Grünfeld, Advance Variation" }, "rnbqkb1r/pppppp1p/5np1/8/2PP4/5P2/PP2P1PP/RNBQKBNR": { "eco": "E60", "name": "Indian Game: Anti-Grünfeld, Alekhine Variation" }, "rnbqk2r/ppppppbp/5np1/8/2PP4/6P1/PP2PPBP/RNBQK1NR": { "eco": "E60", "name": "Indian Game: King's Indian Variation, Fianchetto Variation" }, "rnbqkb1r/pppppp1p/5np1/8/2PP4/6P1/PP2PP1P/RNBQKBNR": { "eco": "E60", "name": "King's Indian Defense: Fianchetto Variation, Immediate Fianchetto" }, "rnbqkb1r/pppppp1p/5np1/8/2PP4/5N2/PP2PPPP/RNBQKB1R": { "eco": "E60", "name": "King's Indian Defense: Normal Variation, King's Knight Variation" }, "rnbqk2r/ppppppbp/5np1/8/1PPP4/5N2/P3PPPP/RNBQKB1R": { "eco": "E60", "name": "King's Indian Defense: Santasiere Variation" }, "rnbqkb1r/pppppp1p/5np1/8/2PP4/8/PPQ1PPPP/RNB1KBNR": { "eco": "E60", "name": "Queen's Pawn, Mengarini Attack" }, "rnbqkb1r/pppppp1p/5np1/8/2PP4/2N5/PP2PPPP/R1BQKBNR": { "eco": "E61", "name": "King's Indian Defense" }, "rnbq1rk1/ppp1ppbp/3p1np1/8/2PP4/2N1PN2/PP2BPPP/R1BQK2R": { "eco": "E61", "name": "King's Indian Defense: Semi-Classical Variation" }, "r1bq1rk1/pppn1pbp/3p1np1/4p3/1PPP4/2N1PN2/P3BPPP/R1BQ1RK1": { "eco": "E61", "name": "King's Indian Defense: Semi-Classical Variation, Queenside Storm Line" }, "rnbqk2r/ppp1ppbp/3p1np1/6B1/2PP4/2N2N2/PP2PPPP/R2QKB1R": { "eco": "E61", "name": "King's Indian Defense: Smyslov Variation" }, "rnbqk2r/ppp1ppbp/3p1np1/8/2PP4/2N2NP1/PP2PP1P/R1BQKB1R": { "eco": "E62", "name": "King's Indian Defense: Fianchetto Variation, Delayed Fianchetto" }, "1rbq1rk1/2p1ppbp/p1np1np1/1p6/2PP4/2N1B1PP/PP1NPPB1/R2Q1RK1": { "eco": "E63", "name": "King's Indian Defense: Fianchetto Variation, Panno Variation, Korchnoi Line" }, "rnbq1rk1/pp2ppbp/3p1np1/2p5/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1": { "eco": "E65", "name": "King's Indian Defense: Fianchetto Variation, Yugoslav Variation" }, "r1bq1rk1/pp2ppbp/2np1np1/2pP4/2P5/2N2NP1/PP2PPBP/R1BQ1RK1": { "eco": "E66", "name": "King's Indian Defense: Fianchetto Variation, Yugoslav Variation, Advance Line" }, "r1bq1rk1/pppn1pbp/3p1np1/4p3/2PP4/1PN2NP1/P3PPBP/R1BQ1RK1": { "eco": "E67", "name": "King's Indian Defense: Fianchetto Variation, Double Fianchetto Attack" }, "r1bq1rk1/pppn1pbp/3p1np1/4p3/2PPP3/2N2NP1/PP3PBP/R1BQ1RK1": { "eco": "E68", "name": "King's Indian Defense, Fianchetto Variation, Classical Variation" }, "r1bq1rk1/pp1n1pbp/2pp1np1/4p3/2PPP3/2N2NPP/PP3PB1/R1BQ1RK1": { "eco": "E69", "name": "King's Indian Defense: Fianchetto Variation, Classical Main Line" }, "rnbqk2r/ppp1ppbp/3p1np1/6B1/2PPP3/2N5/PP3PPP/R2QKBNR": { "eco": "E70", "name": "King's Indian Defense: Accelerated Averbakh Variation" }, "rnbqk2r/ppp1ppbp/3p1np1/8/2PPP3/2N5/PP2NPPP/R1BQKB1R": { "eco": "E70", "name": "King's Indian Defense: Kramer Variation" }, "rnbqk2r/ppppppbp/5np1/8/2PPP3/2N5/PP3PPP/R1BQKBNR": { "eco": "E70", "name": "King's Indian Defense: Normal Variation" }, "rnbqk2r/ppp1ppbp/3p1np1/8/2PPP3/2N4P/PP3PP1/R1BQKBNR": { "eco": "E71", "name": "King's Indian Defense: Makogonov Variation" }, "rnbqk2r/ppp1ppbp/3p1np1/8/2PPP3/2N3P1/PP3P1P/R1BQKBNR": { "eco": "E72", "name": "King's Indian Defense: Normal Variation, Deferred Fianchetto" }, "rnbq1rk1/ppp2pbp/3p1np1/4p3/2PPP3/2N3P1/PP2NPBP/R1BQK2R": { "eco": "E72", "name": "King's Indian Defense: Pomar System" }, "rnbq1rk1/ppp1ppbp/3p1np1/6B1/2PPP3/2N5/PP2BPPP/R2QK1NR": { "eco": "E73", "name": "King's Indian Defense: Averbakh Variation" }, "rnbqk2r/ppp1ppbp/3p1np1/8/2PPP3/2N5/PP2BPPP/R1BQK1NR": { "eco": "E73", "name": "King's Indian Defense: Normal Variation, Standard Development" }, "rnbq1rk1/ppp1ppbp/3p1np1/8/2PPP3/2N1B3/PP2BPPP/R2QK1NR": { "eco": "E73", "name": "King's Indian Defense: Semi-Averbakh System" }, "rnbq1rk1/pp2ppbp/3p1np1/2pP2B1/2P1P3/2N5/PP2BPPP/R2QK1NR": { "eco": "E74", "name": "King's Indian Defense: Averbakh Variation, Benoni Defense, Advance Variation" }, "rnbq1rk1/pp2ppbp/3p1np1/2P3B1/2P1P3/2N5/PP2BPPP/R2QK1NR": { "eco": "E74", "name": "King's Indian Defense: Averbakh Variation, Benoni Defense, Exchange Variation" }, "rnbqk2r/ppp1ppbp/3p1np1/8/2PPPP2/2N5/PP4PP/R1BQKBNR": { "eco": "E76", "name": "King's Indian Defense: Four Pawns Attack" }, "rnbq1rk1/pp2ppbp/3p1np1/2pP4/2P1PP2/2N2N2/PP4PP/R1BQKB1R": { "eco": "E76", "name": "King's Indian Defense: Four Pawns Attack, Dynamic Attack" }, "rnbq1rk1/ppp1ppbp/3p1np1/8/2PPPP2/2N5/PP2B1PP/R1BQK1NR": { "eco": "E77", "name": "King's Indian Defense: Four Pawns Attack" }, "rnbq1rk1/pp3pbp/3p1np1/2ppP3/2P2P2/2N2N2/PP2B1PP/R1BQK2R": { "eco": "E77", "name": "King's Indian Defense: Four Pawns Attack, Florentine Gambit" }, "rnbq1rk1/pp3pbp/3ppnp1/2pP4/2P1PP2/2N2N2/PP2B1PP/R1BQK2R": { "eco": "E77", "name": "King's Indian Defense: Four Pawns Attack, Normal Attack" }, "r1bq1rk1/pp4bp/2nppnp1/2p5/2P1PPPP/2N5/PP2B3/R1BQK1NR": { "eco": "E77", "name": "King's Indian Defense: Six Pawns Attack" }, "rnbq1rk1/pp2ppbp/3p1np1/2p5/2PPPP2/2N2N2/PP2B1PP/R1BQK2R": { "eco": "E78", "name": "King's Indian Defense: Four Pawns Attack, Fluid Attack" }, "r1bq1rk1/pp2ppbp/2np1np1/8/2PNPP2/2N1B3/PP2B1PP/R2QK2R": { "eco": "E79", "name": "King's Indian Defense: Four Pawns Attack, Exchange Variation" }, "rnbqk2r/ppp1ppbp/3p1np1/8/2PPP3/2N2P2/PP4PP/R1BQKBNR": { "eco": "E80", "name": "King's Indian Defense: Sämisch Variation" }, "rnbq1rk1/ppp1ppbp/3p1np1/6B1/2PPP3/2N2P2/PP4PP/R2QKBNR": { "eco": "E81", "name": "King's Indian Defense: Steiner Attack" }, "rnbq1rk1/ppp1ppbp/3p1np1/8/2PPP3/2N2P2/PP2N1PP/R1BQKB1R": { "eco": "E81", "name": "King's Indian Defense: Sämisch Variation, Bobotsov-Korchnoi-Petrosian Variation" }, "rnb2rk1/ppp2pbp/3p2p1/3Pp3/2P1P2Q/2N1nP2/PP2K2P/R5NR": { "eco": "E87", "name": "King's Indian Defense: Sämisch Variation, Bronstein Defense" }, "rnbq1rk1/ppp2pbp/3p1np1/3Pp3/2P1P3/2N1BP2/PP4PP/R2QKBNR": { "eco": "E87", "name": "King's Indian Defense: Sämisch Variation, Closed Variation" }, "rnbq1rk1/ppp1ppbp/3p1np1/8/2PPP3/2N1BN2/PP3PPP/R2QKB1R": { "eco": "E90", "name": "King's Indian Defense: Larsen Variation" }, "rnbqk2r/ppp1ppbp/3p1np1/8/2PPP3/2N2N2/PP3PPP/R1BQKB1R": { "eco": "E90", "name": "King's Indian Defense: Normal Variation, Rare Defenses" }, "rnbq1rk1/ppp1ppbp/3p1np1/6B1/2PPP3/2N2N2/PP3PPP/R2QKB1R": { "eco": "E90", "name": "King's Indian Defense: Zinnowitz Variation" }, "rnbq1rk1/ppp1ppbp/3p1np1/8/2PPP3/2N2N2/PP2BPPP/R1BQK2R": { "eco": "E91", "name": "King's Indian Defense: Orthodox Variation" }, "rnbq1rk1/ppp2pbp/3p1np1/4P3/2P1P3/2N2N2/PP2BPPP/R1BQK2R": { "eco": "E92", "name": "King's Indian Defense: Exchange Variation" }, "rnbq1rk1/ppp2pbp/3p1np1/4p3/2PPP3/2N1BN2/PP2BPPP/R2QK2R": { "eco": "E92", "name": "King's Indian Defense: Orthodox Variation, Gligoric-Taimanov System" }, "rnbq1rk1/ppp2pbp/3p1np1/3Pp3/2P1P3/2N2N2/PP2BPPP/R1BQK2R": { "eco": "E92", "name": "King's Indian Defense: Petrosian Variation" }, "r1bq1rk1/pppn1pb1/3p3p/3Pp1pn/2P1P2P/2N2NB1/PP2BPP1/R2QK2R": { "eco": "E93", "name": "King's Indian Defense: Petrosian Variation, Keres Defense" }, "rnbq1rk1/ppp2pbp/3p1np1/4p3/2PPP3/2N2N2/PP2BPPP/R1BQ1RK1": { "eco": "E94", "name": "King's Indian Defense: Orthodox Variation" }, "r1bq1rk1/pppn1pbp/3p1np1/3Pp3/2P1P3/2N2N2/PP2BPPP/R1BQ1RK1": { "eco": "E94", "name": "King's Indian Defense: Orthodox Variation, Positional Defense, Closed Line" }, "r1bq1rk1/pppn1pbp/3p1np1/4p3/2PPP3/2N2N2/PP2BPPP/R1BQR1K1": { "eco": "E95", "name": "King's Indian Defense: Orthodox Variation" }, "r1bq1rk1/ppp1npbp/3p1np1/3Pp3/1PP1P3/2N2N2/P3BPPP/R1BQ1RK1": { "eco": "E97", "name": "King's Indian Defense: Orthodox Variation, Bayonet Attack" }, "r1bq1rk1/ppp1npbp/3p2p1/3Pp2n/1PP1P3/2N2N2/P3BPPP/R1BQR1K1": { "eco": "E97", "name": "King's Indian Defense: Orthodox Variation, Bayonet Attack, Sokolov's Line" }, "r1bq1rk1/ppp1npbp/3p2p1/3Pp2n/1PP1P3/2N2N2/P1Q1BPPP/R1B2RK1": { "eco": "E97", "name": "King's Indian Defense: Orthodox Variation, Bayonet Attack, Yepishin's Line" }, "r1bq1rk1/ppp1npbp/3p1np1/3Pp3/2P1P3/2N2N2/PP1BBPPP/R2Q1RK1": { "eco": "E97", "name": "King's Indian Defense: Orthodox Variation, Korchnoi Attack" }, "r1bq1rk1/ppp1npbp/3p1np1/3Pp3/2P1P3/2N5/PP1NBPPP/R1BQ1RK1": { "eco": "E97", "name": "King's Indian Defense: Orthodox Variation, Modern System" }, "r1bq1rk1/ppp1npbp/3p1np1/3Pp3/2P1P3/2N5/PP2BPPP/R1BQNRK1": { "eco": "E98", "name": "King's Indian Defense: Orthodox Variation, Classical System" }, "r1bq1rk1/pppn2bp/3p2n1/2PPp1p1/4Pp2/2N2P2/PP2BBPP/2RQNRK1": { "eco": "E98", "name": "King's Indian Defense: Orthodox Variation, Classical System, Kozul Gambit" }, "r1bq1rk1/pppnnpbp/3p2p1/3Pp3/2P1P3/2N1B3/PP2BPPP/R2QNRK1": { "eco": "E98", "name": "King's Indian Defense: Orthodox Variation, Classical System, Neo-Classical Line" }, "r1bq1rk1/pppnn1bp/3p2p1/3Ppp2/2P1P1P1/2N2P2/PP2B2P/R1BQNRK1": { "eco": "E99", "name": "King's Indian Defense: Orthodox Variation, Classical System, Benko Attack" } } };
var emailDomainBlacklist = ["a45.in", "bund.us", "bundes-li.ga", "cachedot.net", "manifestgenerator.com", "mvrht.com", "nonspam.eu", "nonspammer.de", "spamstack.net", "teleosaurs.xyz", "webuser.in", "you-spam.com", "re-gister.com", "fake-box.com", "trash-me.com", "opentrash.com", "anon.leemail.me", "anonymize.com", "1usemail.com", "fakeinbox.info", "cd.mintemail.com", "mailna.in", "fakemail.intimsex.de", "govnomail.xyz", "anonmail.top", "dma.in-ulm.de", "solowtech.com", "mailox.biz", "freeinbox.email", "nospam.today", "relatter.ru", "1337.no", "linshiyou.com", "opayq.com", "nowbuzzoff.com", "beconfidential.com", "dontrackme.com", "beconfidential.net", "moremobileprivacy.com", "blurme.net", "icogneato.co", "ipriva.net", "zzrgg.com", "celinecityitalia.com", "digital10network.com", "ivyandmarj.com", "0-mail.com", "0815.ru", "0clickemail.com", "0wnd.net", "0wnd.org", "10minutemail.com", "20minutemail.com", "2prong.com", "30minutemail.com", "3d-painting.com", "4warding.com", "4warding.net", "4warding.org", "60minutemail.com", "675hosting.com", "675hosting.net", "675hosting.org", "6url.com", "75hosting.com", "75hosting.net", "75hosting.org", "7tags.com", "9ox.net", "a-bc.net", "afrobacon.com", "ajaxapp.net", "amilegit.com", "amiri.net", "amiriindustries.com", "anonbox.net", "anonymbox.com", "antichef.com", "antichef.net", "antispam.de", "baxomale.ht.cx", "beefmilk.com", "binkmail.com", "bio-muesli.net", "bobmail.info", "bodhi.lawlita.com", "bofthew.com", "brefmail.com", "broadbandninja.com", "bsnow.net", "bugmenot.com", "bumpymail.com", "casualdx.com", "centermail.com", "centermail.net", "chogmail.com", "choicemail1.com", "cool.fr.nf", "correo.blogos.net", "cosmorph.com", "courriel.fr.nf", "courrieltemporaire.com", "cubiclink.com", "curryworld.de", "cust.in", "dacoolest.com", "dandikmail.com", "dayrep.com", "deadaddress.com", "deadspam.com", "despam.it", "despammed.com", "devnullmail.com", "dfgh.net", "digitalsanctuary.com", "discardmail.com", "discardmail.de", "disposableaddress.com", "disposeamail.com", "disposemail.com", "dispostable.com", "dodgeit.com", "dodgit.com", "dodgit.org", "donemail.ru", "dontreg.com", "dontsendmespam.de", "dump-email.info", "dumpandjunk.com", "dumpmail.de", "dumpyemail.com", "e4ward.com", "email60.com", "emaildienst.de", "emailias.com", "emailigo.de", "emailinfive.com", "emailmiser.com", "emailsensei.com", "emailtemporario.com.br", "emailto.de", "emailwarden.com", "emailx.at.hm", "emailxfer.com", "emz.net", "enterto.com", "ephemail.net", "etranquil.com", "etranquil.net", "etranquil.org", "explodemail.com", "fakeinbox.com", "fakeinformation.com", "fastacura.com", "fastchevy.com", "fastchrysler.com", "fastkawasaki.com", "fastmazda.com", "fastmitsubishi.com", "fastnissan.com", "fastsubaru.com", "fastsuzuki.com", "fasttoyota.com", "fastyamaha.com", "filzmail.com", "fizmail.com", "fr33mail.info", "frapmail.com", "front14.org", "fux0ringduh.com", "garliclife.com", "get1mail.com", "get2mail.fr", "getonemail.com", "getonemail.net", "ghosttexter.de", "girlsundertheinfluence.com", "gishpuppy.com", "gowikibooks.com", "gowikicampus.com", "gowikicars.com", "gowikifilms.com", "gowikigames.com", "gowikimusic.com", "gowikinetwork.com", "gowikitravel.com", "gowikitv.com", "great-host.in", "greensloth.com", "gsrv.co.uk", "guerillamail.biz", "guerillamail.com", "guerillamail.net", "guerillamail.org", "guerrillamail.biz", "guerrillamail.com", "guerrillamail.de", "guerrillamail.net", "guerrillamail.org", "guerrillamailblock.com", "h.mintemail.com", "h8s.org", "haltospam.com", "hatespam.org", "hidemail.de", "hochsitze.com", "hotpop.com", "hulapla.de", "ieatspam.eu", "ieatspam.info", "ihateyoualot.info", "iheartspam.org", "imails.info", "inboxclean.com", "inboxclean.org", "incognitomail.com", "incognitomail.net", "incognitomail.org", "insorg-mail.info", "ipoo.org", "irish2me.com", "iwi.net", "jetable.com", "jetable.fr.nf", "jetable.net", "jetable.org", "jnxjn.com", "junk1e.com", "kasmail.com", "kaspop.com", "keepmymail.com", "killmail.com", "killmail.net", "kir.ch.tc", "klassmaster.com", "klassmaster.net", "klzlk.com", "kulturbetrieb.info", "kurzepost.de", "letthemeatspam.com", "lhsdv.com", "lifebyfood.com", "link2mail.net", "litedrop.com", "lol.ovpn.to", "lookugly.com", "lopl.co.cc", "lortemail.dk", "lr78.com", "m4ilweb.info", "maboard.com", "mail-temporaire.fr", "mail.by", "mail.mezimages.net", "mail2rss.org", "mail333.com", "mail4trash.com", "mailbidon.com", "mailblocks.com", "mailcatch.com", "maileater.com", "mailexpire.com", "mailfreeonline.com", "mailin8r.com", "mailinater.com", "mailinator.com", "mailinator.net", "mailinator2.com", "mailincubator.com", "mailme.ir", "mailme.lv", "mailmetrash.com", "mailmoat.com", "mailnator.com", "mailnesia.com", "mailnull.com", "mailshell.com", "mailsiphon.com", "mailslite.com", "mailzilla.com", "mailzilla.org", "mbx.cc", "mega.zik.dj", "meinspamschutz.de", "meltmail.com", "messagebeamer.de", "mierdamail.com", "mintemail.com", "moburl.com", "moncourrier.fr.nf", "monemail.fr.nf", "monmail.fr.nf", "msa.minsmail.com", "mt2009.com", "mx0.wwwnew.eu", "mycleaninbox.net", "mypartyclip.de", "myphantomemail.com", "myspaceinc.com", "myspaceinc.net", "myspaceinc.org", "myspacepimpedup.com", "myspamless.com", "mytrashmail.com", "neomailbox.com", "nepwk.com", "nervmich.net", "nervtmich.net", "netmails.com", "netmails.net", "netzidiot.de", "neverbox.com", "no-spam.ws", "nobulk.com", "noclickemail.com", "nogmailspam.info", "nomail.xl.cx", "nomail2me.com", "nomorespamemails.com", "nospam.ze.tc", "nospam4.us", "nospamfor.us", "nospamthanks.info", "notmailinator.com", "nowmymail.com", "nurfuerspam.de", "nus.edu.sg", "nwldx.com", "objectmail.com", "obobbo.com", "oneoffemail.com", "onewaymail.com", "online.ms", "oopi.org", "ordinaryamerican.net", "otherinbox.com", "ourklips.com", "outlawspam.com", "ovpn.to", "owlpic.com", "pancakemail.com", "pimpedupmyspace.com", "pjjkp.com", "politikerclub.de", "poofy.org", "pookmail.com", "privacy.net", "proxymail.eu", "prtnx.com", "punkass.com", "PutThisInYourSpamDatabase.com", "qq.com", "quickinbox.com", "rcpt.at", "recode.me", "recursor.net", "regbypass.com", "regbypass.comsafe-mail.net", "rejectmail.com", "rklips.com", "rmqkr.net", "rppkn.com", "rtrtr.com", "s0ny.net", "safe-mail.net", "safersignup.de", "safetymail.info", "safetypost.de", "sandelf.de", "saynotospams.com", "selfdestructingmail.com", "SendSpamHere.com", "sharklasers.com", "shiftmail.com", "shitmail.me", "shortmail.net", "sibmail.com", "skeefmail.com", "slaskpost.se", "slopsbox.com", "smellfear.com", "snakemail.com", "sneakemail.com", "sofimail.com", "sofort-mail.de", "sogetthis.com", "soodonims.com", "spam.la", "spam.su", "spamavert.com", "spambob.com", "spambob.net", "spambob.org", "spambog.com", "spambog.de", "spambog.ru", "spambox.info", "spambox.irishspringrealty.com", "spambox.us", "spamcannon.com", "spamcannon.net", "spamcero.com", "spamcon.org", "spamcorptastic.com", "spamcowboy.com", "spamcowboy.net", "spamcowboy.org", "spamday.com", "spamex.com", "spamfree24.com", "spamfree24.de", "spamfree24.eu", "spamfree24.info", "spamfree24.net", "spamfree24.org", "SpamHereLots.com", "SpamHerePlease.com", "spamhole.com", "spamify.com", "spaminator.de", "spamkill.info", "spaml.com", "spaml.de", "spammotel.com", "spamobox.com", "spamoff.de", "spamslicer.com", "spamspot.com", "spamthis.co.uk", "spamthisplease.com", "spamtrail.com", "speed.1s.fr", "supergreatmail.com", "supermailer.jp", "suremail.info", "teewars.org", "teleworm.com", "tempalias.com", "tempe-mail.com", "tempemail.biz", "tempemail.com", "TempEMail.net", "tempinbox.co.uk", "tempinbox.com", "tempmail.it", "tempmail2.com", "tempomail.fr", "temporarily.de", "temporarioemail.com.br", "temporaryemail.net", "temporaryforwarding.com", "temporaryinbox.com", "thanksnospam.info", "thankyou2010.com", "thisisnotmyrealemail.com", "throwawayemailaddress.com", "tilien.com", "tmailinator.com", "tradermail.info", "trash-amil.com", "trash-mail.at", "trash-mail.com", "trash-mail.de", "trash2009.com", "trashemail.de", "trashmail.at", "trashmail.com", "trashmail.de", "trashmail.me", "trashmail.net", "trashmail.org", "trashmail.ws", "trashmailer.com", "trashymail.com", "trashymail.net", "trillianpro.com", "turual.com", "twinmail.de", "tyldd.com", "uggsrock.com", "upliftnow.com", "uplipht.com", "venompen.com", "veryrealemail.com", "viditag.com", "viewcastmedia.com", "viewcastmedia.net", "viewcastmedia.org", "webm4il.info", "wegwerfadresse.de", "wegwerfemail.de", "wegwerfmail.de", "wegwerfmail.net", "wegwerfmail.org", "wetrainbayarea.com", "wetrainbayarea.org", "wh4f.org", "whyspam.me", "willselfdestruct.com", "winemaven.info", "wronghead.com", "wuzup.net", "wuzupmail.net", "wwwnew.eu", "xagloo.com", "xemaps.com", "xents.com", "xmaily.com", "xoxy.net", "yep.it", "yogamaven.com", "yopmail.com", "yopmail.fr", "yopmail.net", "ypmail.webarnak.fr.eu.org", "yuurok.com", "zehnminutenmail.de", "zippymail.info", "zoaxe.com", "zoemail.org", "33mail.com", "maildrop.cc", "inboxalias.com", "spam4.me", "koszmail.pl"];
var base64Pieces = {
    'alpha': {
        'bB': 'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIiB2aWV3Qm94PSIwIDAgMjA0OCAyMDQ4IiBpZD0ic3ZnMiIgdmVyc2lvbj0iMS4xIiBpbmtzY2FwZTp2ZXJzaW9uPSIwLjQ4LjIgcjk4MTkiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHNvZGlwb2RpOmRvY25hbWU9ImJiLnN2ZyI+PG1ldGFkYXRhIGlkPSJtZXRhZGF0YTEyIj48cmRmOlJERj48Y2M6V29yayByZGY6YWJvdXQ9IiI+PGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+PGRjOnR5cGUgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz48L2NjOldvcms+PC9yZGY6UkRGPjwvbWV0YWRhdGE+PGRlZnMgaWQ9ImRlZnMxMCIgLz48c29kaXBvZGk6bmFtZWR2aWV3IHBhZ2Vjb2xvcj0iI2ZmZmZmZiIgYm9yZGVyY29sb3I9IiM2NjY2NjYiIGJvcmRlcm9wYWNpdHk9IjEiIG9iamVjdHRvbGVyYW5jZT0iMTAiIGdyaWR0b2xlcmFuY2U9IjEwIiBndWlkZXRvbGVyYW5jZT0iMTAiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIiBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjY0MCIgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iNzAwIiBpZD0ibmFtZWR2aWV3OCIgc2hvd2dyaWQ9ImZhbHNlIiBpbmtzY2FwZTp6b29tPSIwLjExNTIzNDM4IiBpbmtzY2FwZTpjeD0iMTAyNCIgaW5rc2NhcGU6Y3k9IjEwMjQiIGlua3NjYXBlOndpbmRvdy14PSIwIiBpbmtzY2FwZTp3aW5kb3cteT0iMCIgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMCIgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ic3ZnMiIgLz48ZyB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAwIDIwNDgpIiBpZD0iZzQiPjxwYXRoIGZpbGw9IiMxMDEwMTAiIGQ9Ik03NjggNjgzcS01IC0zOSAtMjYgLTgyaDU2NHEtMTggMzYgLTI2IDgyaC01MTJ6TTEyNjMgNzU2bDQ2IDczcS0xNDIgNDkgLTI4NSA0N3EtMTQ0IDIgLTI4NSAtNDdsNDYgLTczcTExOCA0MCAyMzkgMzhxMTIwIDIgMjM5IC0zOHpNODMxIDUyOWgtMjA3cTY3IDExNiA3MiAyMjlxLTExNCAxMTkgLTE2MiAyMjMuNXQtNiAyMjMuNXEzMyA5NiAxMTggMTg5LjV0MzEyIDI0Ni41cS0xNyAxMSAtNDYgMzZ0LTI5IDc5cTAgNTggNDEgOTZ0MTAwIDM4IHE1OCAwIDk5LjUgLTM4dDQxLjUgLTk2cTAgLTU0IC0yOS41IC03OXQtNDUuNSAtMzZxMjI2IC0xNTMgMzExIC0yNDYuNXQxMTkgLTE4OS41cTQyIC0xMTkgLTYgLTIyMy41dC0xNjIgLTIyMy41cTQgLTExMyA3MiAtMjI5aC0yMDdxLTIgNCAxMCAtMTZxMzMgLTUzIDcwIC02MHQ4OSAtN2gyNTBxNzYgMCAxNDEuNSAtNjJ0NjUuNSAtMTc5aC00OTVxLTEyMyAwIC0yMjMuNSA4NC41dC0xMDAuNSAxOTguNXEwIC0xMTQgLTEwMSAtMTk4LjUgdC0yMjMgLTg0LjVoLTQ5NXEwIDExNyA2NSAxNzl0MTQyIDYyaDI1MHE1MSAwIDg4IDd0NzEgNjBxMTIgMjAgMTAgMTZ6TTk3NyAxMjMwaC05NXYtODloOTV2LTE2NWg5NHYxNjVoOTV2ODloLTk1djEwNGgtOTR2LTEwNHoiIGlkPSJwYXRoNiIgLz48L2c+PHBhdGggc3R5bGU9ImZpbGw6I2VjZWNlYztmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzEwMTAxMDtzdHJva2Utd2lkdGg6MDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6My43OTk5OTk5NTtzdHJva2Utb3BhY2l0eToxO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowIiBkPSJtIDc2MS41NDAyOCwxNDA2LjY5ODMgMTIuODU2MDUsLTM5LjA1MDggMjQ5LjYwMzY3LDAgMjQ5LjYwMzcsMCAxMi44NTYsMzkuMDUwOCAxMi44NTYxLDM5LjA1MDkgLTI3NS4zMTU4LDAgLTI3NS4zMTU3NywwIDEyLjg1NjA1LC0zOS4wNTA5IHoiIGlkPSJwYXRoMjk4OSIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgLz48cGF0aCBzdHlsZT0iZmlsbDojZWNlY2VjO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMTAxMDEwO3N0cm9rZS13aWR0aDowO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDozLjc5OTk5OTk1O3N0cm9rZS1vcGFjaXR5OjE7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjAiIGQ9Im0gNzY1LjA3ODEzLDEyNTAuOTQ3OSAtMTcuNjUzMTYsLTI5LjkxOTkgNDQuOTk5MzgsLTEzLjA2NzcgYyA4NC42NjUwNywtMjQuNTg2NyAxNzIuNDEwNzQsLTMzLjU5NTMgMjc0Ljk2NTQ1LC0yOC4yMzAyIDU0Ljg4ODIsMi44NzE1IDExMy40NjQ0LDguOTc5MyAxMzAuMTY5NSwxMy41NzI5IDE2LjcwNTEsNC41OTM2IDQ2Ljc3OTIsMTIuNjA2NCA2Ni44MzE0LDE3LjgwNjIgbCAzNi40NTg1LDkuNDU0MSAtMTcuNzkwMiwzMC4xNTIyIGMgLTIwLjMyNzEsMzQuNDUxOCAtMjMuMzEwOCwzNC45OTIxIC05MS41ODQ4LDE2LjU4NTggLTY4LjcyLC0xOC41MjY3IC0yNjYuMjI4NCwtMTguNTI2NyAtMzM0Ljk0ODQ1LDAgLTY4LjIzMDQ5LDE4LjM5NDYgLTcxLjI2NjA3LDE3Ljg1MTggLTkxLjQ0NzYyLC0xNi4zNTM0IHoiIGlkPSJwYXRoMjk5MSIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgLz48cGF0aCBzdHlsZT0iZmlsbDojZWNlY2VjO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMTAxMDEwO3N0cm9rZS13aWR0aDowO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDozLjc5OTk5OTk1O3N0cm9rZS1vcGFjaXR5OjE7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjAiIGQ9Im0gOTgwLjYxMDE3LDk4MS40Nzc5NyAwLC04Mi40NDA2OCAtNDcuNzI4ODEsMCAtNDcuNzI4ODIsMCAwLC0zOS4wNTA4NSAwLC0zOS4wNTA4NSA0Ny43Mjg4MiwwIDQ3LjcyODgxLDAgMCwtNTIuMDY3NzkgMCwtNTIuMDY3OCA0My4zODk4MywwIDQzLjM4OTgsMCAwLDUyLjA2NzggMCw1Mi4wNjc3OSA0Ny43Mjg4LDAgNDcuNzI4OSwwIDAsMzkuMDUwODUgMCwzOS4wNTA4NSAtNDcuNzI4OSwwIC00Ny43Mjg4LDAgMCw4Mi40NDA2OCAwLDgyLjQ0MDYzIC00My4zODk4LDAgLTQzLjM4OTgzLDAgMCwtODIuNDQwNjMgeiIgaWQ9InBhdGgyOTkzIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPjwvc3ZnPg==',
        'bK': 'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIiB2aWV3Qm94PSIwIDAgMjA0OCAyMDQ4IiBpZD0ic3ZnMiIgdmVyc2lvbj0iMS4xIiBpbmtzY2FwZTp2ZXJzaW9uPSIwLjQ4LjIgcjk4MTkiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHNvZGlwb2RpOmRvY25hbWU9ImJrLnN2ZyI+PG1ldGFkYXRhIGlkPSJtZXRhZGF0YTEyIj48cmRmOlJERj48Y2M6V29yayByZGY6YWJvdXQ9IiI+PGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+PGRjOnR5cGUgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz48L2NjOldvcms+PC9yZGY6UkRGPjwvbWV0YWRhdGE+PGRlZnMgaWQ9ImRlZnMxMCIgLz48c29kaXBvZGk6bmFtZWR2aWV3IHBhZ2Vjb2xvcj0iI2ZmZmZmZiIgYm9yZGVyY29sb3I9IiM2NjY2NjYiIGJvcmRlcm9wYWNpdHk9IjEiIG9iamVjdHRvbGVyYW5jZT0iMTAiIGdyaWR0b2xlcmFuY2U9IjEwIiBndWlkZXRvbGVyYW5jZT0iMTAiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIiBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjY0MCIgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iNjczIiBpZD0ibmFtZWR2aWV3OCIgc2hvd2dyaWQ9ImZhbHNlIiBpbmtzY2FwZTp6b29tPSIwLjExNTIzNDM4IiBpbmtzY2FwZTpjeD0iMTAyNCIgaW5rc2NhcGU6Y3k9IjEwMjQiIGlua3NjYXBlOndpbmRvdy14PSIwIiBpbmtzY2FwZTp3aW5kb3cteT0iMCIgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMCIgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ic3ZnMiIgLz48ZyB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAwIDIwNDgpIiBpZD0iZzQiPjxwYXRoIGZpbGw9IiMxMDEwMTAiIGQ9Ik0xMDI0IDI3OWg0ODlsLTEyIDczaC00NzdoLTQ3N2wtMTIgLTczaDQ4OXpNMTAyNCAxMjAwcS0yNSA2MCAtNjIgMTExcTMxIDQ4IDYyIDY1cTMwIC0xNyA2MiAtNjVxLTM4IC01MSAtNjIgLTExMXpNOTI3IDc0NnEtMTU0IC0xMSAtMzAzIC01OHEtMTIzIDEwOCAtMjAwIDIxMy41dC03NyAyMDEuNXEwIDg5IDczLjUgMTU5dDE0OC41IDcwcTY3IDAgMTM0LjUgLTYyLjV0MTAyLjUgLTEzMC41cTMwIC01NCA3NSAtMTc1dDQ2IC0yMTh6IE01NzcgNTI5bC0yNiAtMTU2bDE0NSA4NHpNMTAyNCAxNDM2cS00NyAwIC0xMzYgLTEyMXEtMzEgMzYgLTUwIDU1cTkzIDE0MCAxODYgMTQwcTkyIDAgMTg2IC0xNDBxLTIwIC0xOSAtNTAgLTU1cS05MCAxMjEgLTEzNiAxMjF6TTEwMjQgNjYxcS0xIDEyNiAtNDIgMjY3LjV0LTg0IDIyNi41cS04IDE0IC0xNCAyN3QtMTIgMjNxLTI4IDQzIC00OCA2OXEtNTEgNjMgLTEyMCAxMDV0LTEzNCA0MnEtMTAzIDAgLTIwOCAtOTN0LTEwNSAtMjI5IHEwIC0xMjAgOTkgLTI1NC41dDI0OSAtMjU5LjVxMjAxIDc0IDQxOSA3NnpNMTAyNCAyMDVoLTU3Nmw2MSAzNjVxLTMyNSAyODAgLTMyNiA1MzVxLTEgMTU5IDEyNSAyNzQuNXQyNjcgMTE1LjVxNzggMCAxNTguNSAtNDd0MTQyLjUgLTExOXE2MSAtNzQgOTguNSAtMTY0LjV0NDkuNSAtMTUwLjVxMTIgNjAgNDkgMTUwLjV0OTkgMTY0LjVxNjEgNzIgMTQyIDExOXQxNTkgNDdxMTQwIDAgMjY2IC0xMTUuNXQxMjYgLTI3NC41IHEtMiAtMjU1IC0zMjYgLTUzNWw2MSAtMzY1aC01NzZ6TTExMjEgNzQ2cTAgOTcgNDUgMjE4dDc2IDE3NXEzNCA2OCAxMDEuNSAxMzAuNXQxMzUuNSA2Mi41cTc0IDAgMTQ3LjUgLTcwdDc0LjUgLTE1OXEwIC05NiAtNzcgLTIwMS41dC0yMDAgLTIxMy41cS0xNTAgNDcgLTMwMyA1OHpNMTQ3MSA1MjlsLTExOSAtNzJsMTQ1IC04NHpNMTAyNCA2NjFxMjE3IC0yIDQxOSAtNzZxMTUwIDEyNSAyNDkgMjU5LjV0OTkgMjU0LjUgcTAgMTM2IC0xMDUuNSAyMjl0LTIwNy41IDkzcS02NiAwIC0xMzUgLTQydC0xMTkgLTEwNXEtMjEgLTI2IC00OCAtNjlxLTYgLTEwIC0xMi41IC0yM2wtMTMuNSAtMjdxLTQ0IC04NSAtODUgLTIyNi41dC00MSAtMjY3LjV6TTg4NSA1MDJsMTM5IC04NmwxMzkgODRsLTEzOSA4NnpNOTc3IDE3NTB2OTVoOTR2LTk1aDEwN3YtOTVoLTEwN3YtMTUzcS00OCAxNiAtOTQgMHYxNTNoLTEwN3Y5NWgxMDd6IiBpZD0icGF0aDYiIC8+PC9nPjxwYXRoIHN0eWxlPSJmaWxsOiNlY2VjZWM7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMxMDEwMTA7c3Ryb2tlLXdpZHRoOjA7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjMuNzk5OTk5OTU7c3Ryb2tlLW9wYWNpdHk6MTtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MCIgZD0ibSAxNDAxLjQ5MTUsMTQ0NS4wMjE4IGMgLTc4Ljg2NTcsLTI3Ljk3MTkgLTI4MC44NDkyLC02My40ODk2IC0zNjEuMDU1LC02My40ODk2IC0xMy41NzI5LDAgLTguMzcwMSwtOTIuOTM3OCA5LjkzMTcsLTE3Ny40MTA4IDQ2LjU0MTIsLTIxNC44MTQwNCAxMzQuNDczLC0zOTcuNjU4NzUgMjMxLjQ3OTEsLTQ4MS4zMzYxIDEwNC4yODc2LC04OS45NTgzNyAyMDIuNDI1NiwtMTEwLjI5MjU5IDMwMS44ODE1LC02Mi41NDk5NiAxMDEuNzA1OSw0OC44MjI2OSAxNjguODU1OSwxMjYuNDc1MzQgMTkyLjYxMDYsMjIyLjczNiAxMS45NTIxLDQ4LjQzMzQ3IDEyLjUwNjcsNjUuODM0NzIgMy42MzI5LDExMy45OTQ1NyAtMjAuMDQ3NCwxMDguODAwOTkgLTgxLjM3OTMsMjA1LjM1ODg5IC0yMjEuMjM2NCwzNDguMzAzNjkgLTEwOS45OTcxLDExMi40MjU2IC0xMTQuMTI2NSwxMTUuMDQ1MSAtMTU3LjI0NDQsOTkuNzUyMiB6IG0gMTIyLjgxNzcsLTE3OS42NTk0IGMgMTM0Ljc2MDksLTE0MS40NjQ0IDE3NS40ODI5LC0yMTQuNDYyMSAxNzYuMTkxMywtMzE1LjgzNzc0IDAuNDY4MywtNjcuMDM2NjMgLTEzLjQzMzMsLTEwMS44MzUyMiAtNjEuNTI0MiwtMTU0LjAwNzc3IC0xNDMuNDA5NSwtMTU1LjU4MDkxIC0zMTUuMTA0NSwtODMuNDUyMTUgLTQzNC4zOTgxLDE4Mi40ODk4OSAtNDIuNjIwOSw5NS4wMTQ5MiAtNzYuNDg3NCwyMDYuMDk3MjIgLTgyLjUxNTYsMjcwLjY1MTAyIC01LjcwNjMsNjEuMTA4IC0xMC4yMzEyLDU3LjQ5MjMgODQuODA0Niw2Ny43NjU0IDI2LjU5NzIsMi44NzUgODMuMjIxLDE0LjM3NTYgMTI1LjgzMDUsMjUuNTU2OCA0Mi42MDk1LDExLjE4MTIgODEuOTczNiwyMC43NDk0IDg3LjQ3NTksMjEuMjYyOCA1LjUwMjIsMC41MTM0IDUyLjM2MzIsLTQzLjUzMjggMTA0LjEzNTYsLTk3Ljg4MDQgbCAwLDAgeiIgaWQ9InBhdGgyOTg5IiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPjxwYXRoIHN0eWxlPSJmaWxsOiNlY2VjZWM7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMxMDEwMTA7c3Ryb2tlLXdpZHRoOjA7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjMuNzk5OTk5OTU7c3Ryb2tlLW9wYWNpdHk6MTtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MCIgZD0iTSA1MjIuNjkzNDgsMTM3OC43NjE5IEMgMjgyLjg1NDMxLDExNDcuODI5NCAyMTQuNTgzODgsOTc2LjEwNTkxIDI5Ny4wMDM5OSw4MTEuMDc1NjIgMzA3LjcwODM2LDc4OS42NDIyMSAzMzguMDA3MjcsNzUyLjQwNDk3IDM2NC4zMzQ5Myw3MjguMzI2MiA0NjcuNzIxNDUsNjMzLjc3MDgzIDU3My41MDY0MSw2MTAuNzUxNzQgNjczLjMyNTgsNjYxLjA4ODk1IDc3OC4yNjU4OCw3MTQuMDA4NDMgODUwLjY3NDgsNzk4LjMxNjQxIDkxMS4yNTE5OSw5MzguMTEzODggOTY5Ljc4LDEwNzMuMTgyMyAxMDE1LjMyMiwxMjQ4LjI3MDQgMTAxNS4zMjIsMTMzOC4yMTUgbCAwLDQxLjkzNTggLTU4LjU3NjI0LDUuMzM5IGMgLTEwNC4wMDU2LDkuNDc5NyAtMjE0Ljc4MDkyLDI5LjU4NjggLTI4My44NjM4MSw1MS41MjQ2IGwgLTY3LjQ0NTMzLDIxLjQxNzkgLTgyLjc0MzE0LC03OS42NzA0IHogbSAxODYuMzgyNTUsLTM1Ljg3NCBjIDQ2LjcyNjgzLC0xMS43MDg2IDEwNi40MzU4MywtMjMuNjU5OSAxMzIuNjg2NjgsLTI2LjU1ODMgOTUuMDIzMSwtMTAuNDkxOSA4OS45MTQzOSwtNi4yMDY0IDgzLjkyMDE0LC03MC4zOTc0IC02LjYxNjk1LC03MC44NTk0IC01Ni40NTY1OCwtMjE4LjgyODEgLTEwNi40NTMxNywtMzE2LjA0ODQgLTg4LjM1MiwtMTcxLjgwMzgzIC0yMTAuMDY3MzYsLTI0OS4wMTQ2MSAtMzIwLjA4Mzc2LC0yMDMuMDQ2ODIgLTQ0LjE1OTc4LDE4LjQ1MTEzIC0xMTYuNDM3MDYsODcuNDk0NTMgLTEzNS43NTIyLDEyOS42NzgyNyAtMTkuMDUxMDgsNDEuNjA3MDYgLTIwLjk4NzEsMTMyLjE4NDY4IC0zLjg1MTc4LDE4MC4yMDc1NSAyMi42NTUyLDYzLjQ5MjcgNzEuMDc1ODUsMTMwLjkzNjggMTY0LjE0ODksMjI4LjYzOTYgNTEuNzcyMzQsNTQuMzQ3NiA5NS41NDgwOCw5OC44MTM5IDk3LjI3OTQyLDk4LjgxMzkgMS43MzEzNSwwIDQxLjM3ODk1LC05LjU3OTggODguMTA1NzcsLTIxLjI4ODQgeiIgaWQ9InBhdGgyOTkxIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPjxwYXRoIHN0eWxlPSJmaWxsOiNlY2VjZWM7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMxMDEwMTA7c3Ryb2tlLXdpZHRoOjA7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjMuNzk5OTk5OTU7c3Ryb2tlLW9wYWNpdHk6MTtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MCIgZD0iTSAxMDAzLjM3NDQsOTQ5Ljc0MDU4IEMgOTg2Ljg1MTk0LDg5OS4xODM1NiA5MzEuMzIwNjMsNzg1LjU0Mzk1IDkwNi4wNTk5MSw3NTAuNTk1NyBjIC0xMy4zNTE3NiwtMTguNDcyMiAtMTEuOTAxMjgsLTIxLjEyMTExIDQxLjU3ODY5LC03NS45MzIyMSAzOC4wMDQwMywtMzguOTQ5OTUgNjEuOTk0NCwtNTYuNzkyMyA3Ni4zNjE0LC01Ni43OTIzIDE0LjM2NywwIDM4LjM1NzQsMTcuODQyMzUgNzYuMzYxNCw1Ni43OTIzIDUzLjcxNyw1NS4wNTQwMyA1NC45ODA1LDU3LjM3ODE0IDQxLjI4MDIsNzUuOTMyMjEgLTI0LjAyMTgsMzIuNTMyMDkgLTk5Ljc0NDMsMTkxLjEyODc2IC0xMDUuNDcwOCwyMjAuOTAyNjEgLTIuOTgzNCwxNS41MTE4NiAtNy45MTg2LDI4LjE3NTEyIC0xMC45NjcxLDI4LjE0MDU3IC0zLjA0ODUsLTAuMDM0NyAtMTIuODcxNywtMjIuNDg4NzggLTIxLjgyOTMsLTQ5Ljg5ODMgbCAwLDAgeiBtIDU2LjY2NjgsLTE1Ny42ODAyMiAzMS43MDIyLC01OS44MTg0NiAtMjguNTMzNiwtMzEuMTUxNDYgYyAtMTUuNjkzNSwtMTcuMTMzMyAtMzMuMzM3OSwtMzEuMTUxNDYgLTM5LjIwOTgsLTMxLjE1MTQ2IC01Ljg3MTksMCAtMjMuNTE2MywxNC4wMTgxNiAtMzkuMjA5NzgsMzEuMTUxNDYgbCAtMjguNTMzNjIsMzEuMTUxNDYgMzEuNzAyMjEsNTkuODE4NDYgYyAxNy40MzYxOSwzMi45MDAxNiAzMy42NTQ3OSw1OS44MTg0NyAzNi4wNDExOSw1OS44MTg0NyAyLjM4NjQsMCAxOC42MDUsLTI2LjkxODMxIDM2LjA0MTIsLTU5LjgxODQ3IHoiIGlkPSJwYXRoMjk5MyIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgLz48cGF0aCBzdHlsZT0iZmlsbDojZWNlY2VjO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMTAxMDEwO3N0cm9rZS13aWR0aDowO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDozLjc5OTk5OTk1O3N0cm9rZS1vcGFjaXR5OjE7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjAiIGQ9Im0gOTYxLjA4NDc1LDE1ODcuNTU1OCBjIC0zMi4yMTY5NSwtMjAuMTM2IC01OC41NDI4NCwtMzguNjA2NyAtNTguNTAxOTcsLTQxLjA0NiAwLjA0MDksLTIuNDM5NCAyNy4wNjY2NCwtMjEuMDg2NSA2MC4wNTcyOCwtNDEuNDM4MSBsIDU5Ljk4Mjk0LC0zNy4wMDMgNjEuNDM0MywzNi45NTggYyAzMy43ODg4LDIwLjMyNjggNjEuNDM0MiwzOS40NjE5IDYxLjQzNDIsNDIuNTIyNCAwLDQuOTE1MiAtMTE1Ljg0NDMsNzcuMjM0NSAtMTIzLjAwODcsNzYuNzkxOCAtMS41NTIsLTAuMDk2IC0yOS4xODExMSwtMTYuNjQ5MiAtNjEuMzk4MDUsLTM2Ljc4NTEgeiIgaWQ9InBhdGgyOTk1IiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPjxwYXRoIHN0eWxlPSJmaWxsOiNlY2VjZWM7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMxMDEwMTA7c3Ryb2tlLXdpZHRoOjA7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjMuNzk5OTk5OTU7c3Ryb2tlLW9wYWNpdHk6MTtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MCIgZD0ibSA1NTguNzc2NjQsMTY1Mi4zMTg4IGMgMi4zNjY0LC04LjEzMjYgNi45NjMzNiwtMzQuMzEyIDEwLjIxNTQ2LC01OC4xNzY0IDguOTk0MTgsLTY2LjAwMDcgMTEuMDQwMTEsLTY3LjE5MTcgNjIuMzI5OTMsLTM2LjI4NjQgMjUuMDU3NjMsMTUuMDk4OCA0NS41NTkzMywyOS45MTEzIDQ1LjU1OTMzLDMyLjkxNjYgMCwzLjAwNTMgLTI3LjU0MTY0LDIxLjQwOTYgLTYxLjIwMzY0LDQwLjg5ODUgLTQ1LjExNjY1LDI2LjEyMDYgLTYwLjA3Mjc0LDMxLjU0NzcgLTU2LjkwMTA4LDIwLjY0NzcgeiIgaWQ9InBhdGgyOTk3IiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPjxwYXRoIHN0eWxlPSJmaWxsOiNlY2VjZWM7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMxMDEwMTA7c3Ryb2tlLXdpZHRoOjA7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjMuNzk5OTk5OTU7c3Ryb2tlLW9wYWNpdHk6MTtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MCIgZD0ibSAxNDMxLjg2NDQsMTYzMS43MjIzIGMgLTMxLjAyMzcsLTE4LjMwNDMgLTU3LjM5MjgsLTM2LjIyOTcgLTU4LjU5NzksLTM5LjgzNDIgLTIuNDQ3OSwtNy4zMjE1IDg2Ljk0NTksLTYzLjQwOSA5Mi4zODg1LC01Ny45NjY1IDMuNDE3MiwzLjQxNzIgMjYuNDYzNSwxMjguOTc0OCAyMy45MjgzLDEzMC4zNjI5IC0wLjcyMTcsMC4zOTUyIC0yNi42OTUyLC0xNC4yNTc4IC01Ny43MTg5LC0zMi41NjIyIHoiIGlkPSJwYXRoMjk5OSIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgLz48cGF0aCBzdHlsZT0iZmlsbDojZWNlY2VjO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMTAxMDEwO3N0cm9rZS13aWR0aDowO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDozLjc5OTk5OTk1O3N0cm9rZS1vcGFjaXR5OjE7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjAiIGQ9Im0gNTQ1LjA2NDg1LDE3MzIuOTg5OCAzLjU0NTg2LC0zMC4zNzI5IDQ3NS4zODkyOSwwIDQ3NS4zODkzLDAgMy41NDU4LDMwLjM3MjkgMy41NDU5LDMwLjM3MjkgLTQ4Mi40ODEsMCAtNDgyLjQ4MTAyLDAgMy41NDU4NywtMzAuMzcyOSB6IiBpZD0icGF0aDMwMDEiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIC8+PC9zdmc+',
        'bN': 'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIiB2aWV3Qm94PSIwIDAgMjA0OCAyMDQ4IiBpZD0ic3ZnMiIgdmVyc2lvbj0iMS4xIiBpbmtzY2FwZTp2ZXJzaW9uPSIwLjQ4LjIgcjk4MTkiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHNvZGlwb2RpOmRvY25hbWU9ImJuLnN2ZyI+PG1ldGFkYXRhIGlkPSJtZXRhZGF0YTEyIj48cmRmOlJERj48Y2M6V29yayByZGY6YWJvdXQ9IiI+PGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+PGRjOnR5cGUgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz48L2NjOldvcms+PC9yZGY6UkRGPjwvbWV0YWRhdGE+PGRlZnMgaWQ9ImRlZnMxMCIgLz48c29kaXBvZGk6bmFtZWR2aWV3IHBhZ2Vjb2xvcj0iI2ZmZmZmZiIgYm9yZGVyY29sb3I9IiM2NjY2NjYiIGJvcmRlcm9wYWNpdHk9IjEiIG9iamVjdHRvbGVyYW5jZT0iMTAiIGdyaWR0b2xlcmFuY2U9IjEwIiBndWlkZXRvbGVyYW5jZT0iMTAiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIiBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjY0MCIgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iNjc4IiBpZD0ibmFtZWR2aWV3OCIgc2hvd2dyaWQ9ImZhbHNlIiBpbmtzY2FwZTp6b29tPSIwLjExNTIzNDM4IiBpbmtzY2FwZTpjeD0iMTAyNCIgaW5rc2NhcGU6Y3k9IjEwMjQiIGlua3NjYXBlOndpbmRvdy14PSIwIiBpbmtzY2FwZTp3aW5kb3cteT0iMCIgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMCIgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ic3ZnMiIgLz48ZyB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAwIDIwNDgpIiBpZD0iZzQiPjxwYXRoIGZpbGw9IiMxMDEwMTAiIGQ9Ik01MDIgMTE4MGwtNTIgLTFsLTI2IC02NGw2OSAtMjFsNDYgNTV6TTEwMzggMTM2N3EzNCAtMSAtMTYgNjh0LTgwIDQybC0xMTYgLTEwOXpNNzAwIDE0NjVxNiAzOSAxMTUuNSAxMDcuNXQyMjAuNSAxNDMuNWwxMTUgMTU0bDk2IC0yMTdxMzQyIC0xNzIgNDMyLjUgLTQxNy41dDQ3LjUgLTYwMy41cS0xOCAtMTI4IDQuNSAtMjM2dDU3LjUgLTE5MGwtMTI0MiAtMXEtOSAxNzggMzkgMzAxLjV0MTgzIDIzNy41cTUwIDExIDgyLjUgMzkuNSB0NTMuNSA1OC41bDYyLjUgMXQxMzggMjl0MTM5IDk3dDY2LjUgMjA3cTAgMTcgLTguNSAzNHQtMTEuNSAzN3EtNjIgLTIyOCAtMTYxIC0yODguNXQtMTkxIC01OC41cS0yMzYgNDIgLTI5MiAtNjBsLTU2IC0xMDJsLTIxNyAxMjFsMTE1IDgybC01MSA1MGwtMTIyIC04NmwtMTIgMjk3ek0xNjgxIDI3M3EtMTAyIDEzMCAtODUgMzA4LjV0MjcgMzYyLjV0LTUwIDM1MS41dC0zMTYgMjc1LjVxMjIwIC0xNjQgMjUyLjUgLTM0MnQxNi41IC0zNTAuNSB0LTEyIC0zMjl0MTY3IC0yNzYuNXoiIGlkPSJwYXRoNiIgLz48L2c+PHBhdGggc3R5bGU9ImZpbGw6I2VjZWNlYztmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzEwMTAxMDtzdHJva2Utd2lkdGg6MDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6My43OTk5OTk5NTtzdHJva2Utb3BhY2l0eToxO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowIiBkPSJtIDE2MDEuMzA1MiwxNjkzLjA0MDMgYyAtODEuMDgxLC04OS43NDcgLTkxLjU4NDEsLTE1Ni41NDE0IC03NC4yMjc2LC00NzIuMDUwNSAyMC4zNzg5LC0zNzAuNDUwNTkgLTguNzUxMiwtNDk1LjExODM0IC0xNTAuNTU3NSwtNjQ0LjMzODk1IC0yOC4zNDgzLC0yOS44MzA1MSAtNDcuODEzNiwtNTQuMjM3MjkgLTQzLjI1NjIsLTU0LjIzNzI5IDE3LjAxNzMsMCAxMDAuMTA5Myw1OC40MzQ3NyAxNDQuNjUwNCwxMDEuNzI1OTggNTcuMDUyMSw1NS40NTEwNiA4Ni4xMzk2LDEwNy44OTE5NiAxMDkuNjM4NiwxOTcuNjYzODUgMzQuOTkzOCwxMzMuNjg1MiAzNy41NDM3LDIwMS45NDAzMSAxNy4zMjc1LDQ2My44MTgxMSAtMTkuOTkwOSwyNTguOTU4OSAtMTcuNTQxOSwzMTIuNjE5NiAxOC4wNTc4LDM5NS42NzA1IDkuNjk4NSwyMi42MjU1IDE2LjEzMDUsNDIuNjQwNCAxNC4yOTM1LDQ0LjQ3NzQgLTEuODM3MSwxLjgzNzEgLTE4LjAwNCwtMTIuODkxIC0zNS45MjY1LC0zMi43MjkxIGwgMCwwIHoiIGlkPSJwYXRoMjk4OSIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgLz48cGF0aCBzdHlsZT0iZmlsbDojZWNlY2VjO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMTAxMDEwO3N0cm9rZS13aWR0aDowO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDozLjc5OTk5OTk1O3N0cm9rZS1vcGFjaXR5OjE7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjAiIGQ9Im0gODk2LjcwMzQ0LDYyMS4zMzAxNyBjIDU1LjY4MjU5LC01My4yNjg0MiA2MC40MjE4NCwtNTUuOTYxMzIgNzguMTAxNywtNDQuMzc4MzggMjYuMDY4MDYsMTcuMDc4NDcgNzYuNDAzMjYsODQuMDY2MTUgNzAuNDMwMjYsOTMuNzMwNzYgLTIuNjk3MSw0LjM2MzkyIC01MC41NTgwNCw3LjgwNDUzIC0xMDYuMzU3NzIsNy42NDU4IGwgLTEwMS40NTM5NSwtMC4yODg2IDU5LjI3OTcxLC01Ni43MDk1OCB6IiBpZD0icGF0aDI5OTEiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIC8+PHBhdGggc3R5bGU9ImZpbGw6I2VjZWNlYztmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzEwMTAxMDtzdHJva2Utd2lkdGg6MDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6My43OTk5OTk5NTtzdHJva2Utb3BhY2l0eToxO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowIiBkPSJtIDQ2NC4yNzExOSw5NDEuNDQ1OTQgYyAtMjcuNDQxMjcsLTYuNjAwNSAtMzEuMjY5NDksLTE0LjY4NDAyIC0yMC45NTk5LC00NC4yNTgxNSA3LjY4MjQ5LC0yMi4wMzggMTQuNDgzMzMsLTI3LjY1NTU5IDMzLjQ4MDc5LC0yNy42NTU1OSAxMy4xMTIsMCAzMC4zNjI2OSw3LjIwNzQ5IDM4LjMzNDg2LDE2LjAxNjY0IDEzLjU5MjI5LDE1LjAxOTMxIDEzLjM2NjY0LDE3LjQ1MDk0IC0zLjYyMzg2LDM5LjA1MDg1IC05Ljk2NTI5LDEyLjY2ODgxIC0yMC43NjQwOSwyMi41ODEyMSAtMjMuOTk3MzMsMjIuMDI3NTUgLTMuMjMzMjUsLTAuNTUzNjYgLTEzLjY4ODgsLTIuODg1MjUgLTIzLjIzNDU2LC01LjE4MTMgeiIgaWQ9InBhdGgyOTkzIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPjwvc3ZnPg==',
        'bP': 'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIiB2aWV3Qm94PSIwIDAgMjA0OCAyMDQ4IiBpZD0ic3ZnMzA0NCIgdmVyc2lvbj0iMS4xIiBpbmtzY2FwZTp2ZXJzaW9uPSIwLjQ4LjQgcjk5MzkiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHNvZGlwb2RpOmRvY25hbWU9ImJQLnN2ZyI+PG1ldGFkYXRhIGlkPSJtZXRhZGF0YTMwNTQiPjxyZGY6UkRGPjxjYzpXb3JrIHJkZjphYm91dD0iIj48ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD48ZGM6dHlwZSByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPjxkYzp0aXRsZT48L2RjOnRpdGxlPjwvY2M6V29yaz48L3JkZjpSREY+PC9tZXRhZGF0YT48ZGVmcyBpZD0iZGVmczMwNTIiIC8+PHNvZGlwb2RpOm5hbWVkdmlldyBwYWdlY29sb3I9IiNmZmZmZmYiIGJvcmRlcmNvbG9yPSIjNjY2NjY2IiBib3JkZXJvcGFjaXR5PSIxIiBvYmplY3R0b2xlcmFuY2U9IjEwIiBncmlkdG9sZXJhbmNlPSIxMCIgZ3VpZGV0b2xlcmFuY2U9IjEwIiBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCIgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIyODgwIiBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxODAwIiBpZD0ibmFtZWR2aWV3MzA1MCIgc2hvd2dyaWQ9ImZhbHNlIiBpbmtzY2FwZTp6b29tPSIwLjc1MTk1MzEyIiBpbmtzY2FwZTpjeD0iMTAyNCIgaW5rc2NhcGU6Y3k9IjEwMjQiIGlua3NjYXBlOndpbmRvdy14PSIwIiBpbmtzY2FwZTp3aW5kb3cteT0iMCIgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMCIgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ic3ZnMzA0NCIgLz48ZyB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAwIDIwNDgpIiBpZD0iZzMwNDYiPjxwYXRoIGZpbGw9IiMxMDEwMTAiIGQ9Ik0xMDI0IDIwNWgtNTc4djc0cS00IDgwIDQxLjUgMTM3dDEyNS41IDEwOHExMTcgOTEgMTcxLjUgMjE3LjV0NzguNSAyNjcuNWgtMjg3bDI4NCAyMzlxLTg2IDc0IC04NiAxODhxMCAxMDMgNzMgMTc3dDE3NyA3NHExMDMgMCAxNzYuNSAtNzR0NzMuNSAtMTc3cTAgLTExNCAtODYgLTE4OGwyODQgLTIzOWgtMjg3cTIzIC0xNDEgNzggLTI2Ny41dDE3MiAtMjE3LjVxNzkgLTUxIDEyNC41IC0xMDh0NDIuNSAtMTM3di03NGgtNTc4eiIgaWQ9InBhdGgzMDQ4IiAvPjwvZz48L3N2Zz4=',
        'bQ': 'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIiB2aWV3Qm94PSIwIDAgMjA0OCAyMDQ4IiBpZD0ic3ZnMiIgdmVyc2lvbj0iMS4xIiBpbmtzY2FwZTp2ZXJzaW9uPSIwLjQ4LjIgcjk4MTkiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHNvZGlwb2RpOmRvY25hbWU9ImJxLnN2ZyI+PG1ldGFkYXRhIGlkPSJtZXRhZGF0YTEyIj48cmRmOlJERj48Y2M6V29yayByZGY6YWJvdXQ9IiI+PGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+PGRjOnR5cGUgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz48L2NjOldvcms+PC9yZGY6UkRGPjwvbWV0YWRhdGE+PGRlZnMgaWQ9ImRlZnMxMCIgLz48c29kaXBvZGk6bmFtZWR2aWV3IHBhZ2Vjb2xvcj0iI2ZmZmZmZiIgYm9yZGVyY29sb3I9IiM2NjY2NjYiIGJvcmRlcm9wYWNpdHk9IjEiIG9iamVjdHRvbGVyYW5jZT0iMTAiIGdyaWR0b2xlcmFuY2U9IjEwIiBndWlkZXRvbGVyYW5jZT0iMTAiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIiBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjY0MCIgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iNjY3IiBpZD0ibmFtZWR2aWV3OCIgc2hvd2dyaWQ9ImZhbHNlIiBpbmtzY2FwZTp6b29tPSIwLjExNTIzNDM4IiBpbmtzY2FwZTpjeD0iMTAyNCIgaW5rc2NhcGU6Y3k9IjEwMjQiIGlua3NjYXBlOndpbmRvdy14PSIwIiBpbmtzY2FwZTp3aW5kb3cteT0iMCIgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMCIgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ic3ZnMiIgLz48ZyB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAwIDIwNDgpIiBpZD0iZzQiPjxwYXRoIGZpbGw9IiMxMDEwMTAiIGQ9Ik01OTAgNTI5cTQgLTcyIC0xNSAtMTU4bDEzNCA4NnpNMTAyNCAyMDVoLTU4M3ExMTQgMjMxIDU3LjUgNDU2LjV0LTIwMi41IDQ0OS41cS0xMiAtMiAtMTkgLTJxLTU0IDAgLTkyLjUgMzguNXQtMzguNSA5Mi41dDM4LjUgOTIuNXQ5Mi41IDM4LjV0OTIuNSAtMzguNXQzOC41IC05Mi41cTAgLTIwIC02IC0zOHEtNCAtMTQgLTE1IC0zM2wxOTYgLTEzOWwxMDAgNDg2cS02NCAzMSAtNzIgMTAzcS01IDQ0IDI5IDkxdDg4IDUzcTU0IDUgOTYgLTI5IHQ0OCAtODhxNyAtNjggLTQ2IC0xMTRsMTk4IC00MTJsMTk4IDQxMnEtNTQgNDYgLTQ2IDExNHE2IDU0IDQ4IDg4dDk2IDI5cTU0IC02IDg3LjUgLTUzdDI5LjUgLTkxcS05IC03MiAtNzIgLTEwM2wxMDAgLTQ4NmwxOTYgMTM5cS0xMiAxOSAtMTUgMzNxLTYgMTggLTYgMzhxMCA1NCAzOC41IDkyLjV0OTIuNSAzOC41dDkyLjUgLTM4LjV0MzguNSAtOTIuNXQtMzguNSAtOTIuNXQtOTIuNSAtMzguNXEtNyAwIC0xOSAyIHEtMTQ3IC0yMjQgLTIwMyAtNDQ5LjV0NTggLTQ1Ni41aC01ODN6TTEwMjQgNjU1cTEwOSAwIDIyMiAtMjguNXQyMTMgLTY3LjVxMiA0MSAxMSA4OXEtMTA4IDQyIC0yMjEuNSA2OHQtMjI0LjUgMjZ0LTIyNSAtMjZ0LTIyMSAtNjhxOCAtNDggMTEgLTg5cTk5IDM5IDIxMiA2Ny41dDIyMyAyOC41ek0xMDI0IDI3OWg0NzhxLTE1IDM0IC0yNCA3M2gtNDU0aC00NTRxLTEwIC0zOSAtMjQgLTczaDQ3OHpNMTQ1OCA1MjlsLTExOSAtNzJsMTM0IC04NiBxLTIwIDg2IC0xNSAxNTh6TTg4NSA0ODJsMTM5IC04N2wxMzkgODRsLTEzOSA4NnoiIGlkPSJwYXRoNiIgLz48L2c+PHBhdGggc3R5bGU9ImZpbGw6I2VjZWNlYztmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzEwMTAxMDtzdHJva2Utd2lkdGg6MDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6My43OTk5OTk5NTtzdHJva2Utb3BhY2l0eToxO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowIiBkPSJtIDU1NS4zODk4MywxNzU4LjU4MzEgYyAwLC0xLjY3NDIgNC4yODcxLC0xNS4zNDIgOS41MjY4OSwtMzAuMzcyOSBsIDkuNTI2ODksLTI3LjMyODggNDQ5LjU1NjM5LDAgNDQ5LjU1NjQsMCA5LjUyNjgsMjcuMzI4OCBjIDUuMjM5OSwxNS4wMzA5IDkuNTI3LDI4LjY5ODcgOS41MjcsMzAuMzcyOSAwLDEuNjc0MiAtMjEwLjg3NDYsMy4wNDQgLTQ2OC42MTAyLDMuMDQ0IC0yNTcuNzM1NTksMCAtNDY4LjYxMDE3LC0xLjM2OTggLTQ2OC42MTAxNywtMy4wNDQgeiIgaWQ9InBhdGgyOTg5IiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPjxwYXRoIHN0eWxlPSJmaWxsOiNlY2VjZWM7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMxMDEwMTA7c3Ryb2tlLXdpZHRoOjA7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjMuNzk5OTk5OTU7c3Ryb2tlLW9wYWNpdHk6MTtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MCIgZD0ibSA5NTIuMzYyNzMsMTYwMi40MzE4IC01OC42MjAzMywtMzcuMjUyMyA2NS4xMzcyMywtMzcuMjY4NiA2NS4xMzcyNywtMzcuMjY4NyA2MC43MzczLDM2LjA4MzQgYyAzMy40MDU1LDE5Ljg0NTkgNjAuNjYyNSwzOC44Mzc4IDYwLjU3MTEsNDIuMjA0MyAtMC4yMzExLDguNTA5NiAtMTA4Ljg4NjMsNzEuMjU2OSAtMTIyLjkxMSw3MC45OCAtNi4yODcyLC0wLjEyNDIgLTM3LjgxMDM5LC0xNi45ODkzIC03MC4wNTE1NywtMzcuNDc4MSBsIDAsMCB6IiBpZD0icGF0aDI5OTEiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIC8+PHBhdGggc3R5bGU9ImZpbGw6I2VjZWNlYztmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzEwMTAxMDtzdHJva2Utd2lkdGg6MDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6My43OTk5OTk5NTtzdHJva2Utb3BhY2l0eToxO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowIiBkPSJtIDE0MTIuOTIzLDE2MzIuNjY3NiBjIC0yNy4xMjI4LC0xNy4zNzA2IC00OS4zODUxLC0zNS40ODc5IC00OS40NzE2LC00MC4yNjA4IC0wLjA4NiwtNC43NzI5IDIwLjE1MjQsLTIxLjUwNjcgNDQuOTc1MywtMzcuMTg2MyBsIDQ1LjEzMjYsLTI4LjUwODIgNS4yMDI1LDY3LjU1OTEgYyAyLjg2MTQsMzcuMTU3NSA0LjgxMzksNjguMTAzNiA0LjMzOSw2OC43NjkxIC0wLjQ3NSwwLjY2NTUgLTIzLjA1NDksLTEzLjAwMjMgLTUwLjE3NzgsLTMwLjM3MjkgeiIgaWQ9InBhdGgyOTkzIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPjxwYXRoIHN0eWxlPSJmaWxsOiNlY2VjZWM7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMxMDEwMTA7c3Ryb2tlLXdpZHRoOjA7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjMuNzk5OTk5OTU7c3Ryb2tlLW9wYWNpdHk6MTtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MCIgZD0ibSA1ODguOCwxNDUyLjUzMSBjIC0wLjcxNTkzLC0xNi4xMzk1IC0xLjY5MjIsLTMzLjY0MTMgLTIuMTY5NDksLTM4Ljg5MjggLTIuMDk1MjIsLTIzLjA1MzUgMjAzLjkyMTI3LC04MC43ODY0IDM0My43NzM1MSwtOTYuMzM3MiA3Mi4wMjM2OCwtOC4wMDg3IDExNC42ODcwOCwtOC4wODU1IDE4NC4wNzY2OCwtMC4zMzE0IDE0MC41NzMzLDE1LjcwODcgMzQ4Ljk2ODcsNzMuNzgyOSAzNDYuODg4OCw5Ni42Njg2IC0wLjQ3NzMsNS4yNTE1IC0xLjQ1MzYsMjIuNzUzMyAtMi4xNjk1LDM4Ljg5MjggbCAtMS4zMDE3LDI5LjM0NDUgLTEwMS45NjYxLC0zMi41OTIgYyAtMTMzLjkxNywtNDIuODA0NyAtMjEwLjgwNTksLTU1LjcwOTIgLTMzMS45MzIyLC01NS43MDkyIC0xMjEuMTI2MzQsMCAtMTk4LjAxNTE5LDEyLjkwNDUgLTMzMS45MzIyLDU1LjcwOTIgTCA1OTAuMTAxNjksMTQ4MS44NzU1IDU4OC44LDE0NTIuNTMxIHoiIGlkPSJwYXRoMjk5NSIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgLz48cGF0aCBzdHlsZT0iZmlsbDojZWNlY2VjO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMTAxMDEwO3N0cm9rZS13aWR0aDowO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDozLjc5OTk5OTk1O3N0cm9rZS1vcGFjaXR5OjE7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjAiIGQ9Im0gNTg3LjY1MDY5LDE2MDIuNzU2OSBjIDIuMTExMTUsLTM0LjMyOTggNC41MjM2MiwtNjUuNDEgNS4zNjEwNiwtNjkuMDY2OSAwLjgzNzQ0LC0zLjY1NyAyNC4yNTEwOCw3LjU2NzcgNTIuMDMwMzIsMjQuOTQzNyAyNy43NzkyNCwxNy4zNzYxIDQ3LjI4MzU4LDM0LjU5MzYgNDMuMzQyOTksMzguMjYxMSAtMy45NDA2LDMuNjY3NiAtMjkuMDgxNTQsMjAuNTMxIC01NS44Njg3NiwzNy40NzQyIGwgLTQ4LjcwNDA0LDMwLjgwNTkgMy44Mzg0MywtNjIuNDE4IHoiIGlkPSJwYXRoMjk5NyIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgLz48L3N2Zz4=',
        'bR': 'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIiB2aWV3Qm94PSIwIDAgMjA0OCAyMDQ4IiBpZD0ic3ZnMiIgdmVyc2lvbj0iMS4xIiBpbmtzY2FwZTp2ZXJzaW9uPSIwLjQ4LjIgcjk4MTkiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHNvZGlwb2RpOmRvY25hbWU9ImJyLnN2ZyI+PG1ldGFkYXRhIGlkPSJtZXRhZGF0YTEyIj48cmRmOlJERj48Y2M6V29yayByZGY6YWJvdXQ9IiI+PGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+PGRjOnR5cGUgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz48L2NjOldvcms+PC9yZGY6UkRGPjwvbWV0YWRhdGE+PGRlZnMgaWQ9ImRlZnMxMCIgLz48c29kaXBvZGk6bmFtZWR2aWV3IHBhZ2Vjb2xvcj0iI2ZmZmZmZiIgYm9yZGVyY29sb3I9IiM2NjY2NjYiIGJvcmRlcm9wYWNpdHk9IjEiIG9iamVjdHRvbGVyYW5jZT0iMTAiIGdyaWR0b2xlcmFuY2U9IjEwIiBndWlkZXRvbGVyYW5jZT0iMTAiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIiBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjY0MCIgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iNzA5IiBpZD0ibmFtZWR2aWV3OCIgc2hvd2dyaWQ9ImZhbHNlIiBpbmtzY2FwZTp6b29tPSIwLjExNTIzNDM4IiBpbmtzY2FwZTpjeD0iMTAyNCIgaW5rc2NhcGU6Y3k9IjEwMjQiIGlua3NjYXBlOndpbmRvdy14PSIwIiBpbmtzY2FwZTp3aW5kb3cteT0iMCIgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMCIgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ic3ZnMiIgLz48ZyB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAwIDIwNDgpIiBpZD0iZzQiPjxwYXRoIGZpbGw9IiMxMDEwMTAiIGQ9Ik0xMDI0IDIwNWgtNjQxbDI5IDI2NGwxNTkgMTE4bDUwIDY1OWwtMTQ5IDEwN2wtMTcgMzQxaDI4OXYtMTQ3aDEzN3YxNDdoMTQzaDE0M3YtMTQ3aDEzN3YxNDdoMjg5bC0xNyAtMzQxbC0xNDkgLTEwN2w1MCAtNjU5bDE1OSAtMTE4bDI5IC0yNjRoLTY0MXpNMTAyNCAxMTk0aDMzM2wtNiA4OGgtMzI3aC0zMjdsLTYgLTg4aDMzM3pNMTAyNCA1NDdoMzgxbC02IDg3aC0zNzVoLTM3NWwtNiAtODdoMzgxeiIgaWQ9InBhdGg2IiAvPjwvZz48cGF0aCBzdHlsZT0iZmlsbDojZWNlY2VjO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMTAxMDEwO3N0cm9rZS13aWR0aDowO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDozLjc5OTk5OTk1O3N0cm9rZS1vcGFjaXR5OjE7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjAiIGQ9Im0gNjUwLjg0NzQ2LDE0NTcuMDMwNSAwLC0zOS4wNTA4IDM3My4xNTI1NCwwIDM3My4xNTI1LDAgMCwzOS4wNTA4IDAsMzkuMDUwOSAtMzczLjE1MjUsMCAtMzczLjE1MjU0LDAgMCwtMzkuMDUwOSB6IiBpZD0icGF0aDI5ODkiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIC8+PHBhdGggc3R5bGU9ImZpbGw6I2VjZWNlYztmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzEwMTAxMDtzdHJva2Utd2lkdGg6MDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6My43OTk5OTk5NTtzdHJva2Utb3BhY2l0eToxO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowIiBkPSJtIDY5NC4yMzcyOSw4MzcuNjQwNjggYyAwLC04Ljk0OTE1IDIuNDQwNjgsLTI4LjQ3NDU4IDUuNDIzNzMsLTQzLjM4OTgzIGwgNS40MjM3MywtMjcuMTE4NjUgMzE4LjkxNTI1LDAgMzE4LjkxNTMsMCA1LjQyMzcsMjcuMTE4NjUgYyAxMy4wNjU4LDY1LjMyOTA5IDQzLjg3OTUsNTkuNjYxMDEgLTMyNC4zMzksNTkuNjYxMDEgLTMxNi42NDkzNCwwIC0zMjkuNzYyNzEsLTAuNjQ3MDMgLTMyOS43NjI3MSwtMTYuMjcxMTggeiIgaWQ9InBhdGgyOTkxIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPjwvc3ZnPg==',
        'wB': 'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIiB2aWV3Qm94PSIwIDAgMjA0OCAyMDQ4IiBpZD0ic3ZnMiIgdmVyc2lvbj0iMS4xIiBpbmtzY2FwZTp2ZXJzaW9uPSIwLjQ4LjIgcjk4MTkiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHNvZGlwb2RpOmRvY25hbWU9IndiLnN2ZyI+PG1ldGFkYXRhIGlkPSJtZXRhZGF0YTEyIj48cmRmOlJERj48Y2M6V29yayByZGY6YWJvdXQ9IiI+PGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+PGRjOnR5cGUgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz48L2NjOldvcms+PC9yZGY6UkRGPjwvbWV0YWRhdGE+PGRlZnMgaWQ9ImRlZnMxMCIgLz48c29kaXBvZGk6bmFtZWR2aWV3IHBhZ2Vjb2xvcj0iI2ZmZmZmZiIgYm9yZGVyY29sb3I9IiM2NjY2NjYiIGJvcmRlcm9wYWNpdHk9IjEiIG9iamVjdHRvbGVyYW5jZT0iMTAiIGdyaWR0b2xlcmFuY2U9IjEwIiBndWlkZXRvbGVyYW5jZT0iMTAiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIiBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjEyODAiIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjgwMCIgaWQ9Im5hbWVkdmlldzgiIHNob3dncmlkPSJmYWxzZSIgaW5rc2NhcGU6em9vbT0iMC4xMTUyMzQzNyIgaW5rc2NhcGU6Y3g9IjIxNi41MTgzOCIgaW5rc2NhcGU6Y3k9IjEwMjUuNjI1NyIgaW5rc2NhcGU6d2luZG93LXg9IjAiIGlua3NjYXBlOndpbmRvdy15PSIwIiBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIwIiBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJzdmcyIiAvPjxnIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgMjA0OCkiIGlkPSJnNCI+PHBhdGggZmlsbD0iIzEwMTAxMCIgZD0iTTEwMjQgMTY5MnE2NiAwIDY0IDY2cTEgNTUgLTY0IDU1cS02NiAwIC02NCAtNTVxLTMgLTY2IDY0IC02NnpNMTAyNCA0ODhxMCAtMTE0IC0xMDEgLTE5OC41dC0yMjMgLTg0LjVoLTQ5NXEwIDExNyA2NSAxNzl0MTQyIDYyaDI1MHE1MSAwIDg4IDd0NzEgNjBxMTIgMjAgMTAgMTZoNzZxLTcgLTIxIC0zIC0xM3EtNDUgLTEwNSAtMTA5IC0xMjQuNXQtMTQ2IC0xOS41aC0yNDBxLTUyIDAgLTg2IC00MHQtMzQgLTUzaDQyNCBxNjYgMCAxNTguNSA2NXQ5My41IDE4NWgtMzQxcTY3IDExNiA3MiAyMjlxLTExNCAxMTkgLTE2MiAyMjMuNXQtNiAyMjMuNXEzMyA5NiAxMTggMTg5LjV0MzEyIDI0Ni41cS0xNyAxMSAtNDYgMzZ0LTI5IDc5cTAgNTggNDEgOTZ0MTAwIDM4cTU4IDAgOTkuNSAtMzh0NDEuNSAtOTZxMCAtNTQgLTI5LjUgLTc5dC00NS41IC0zNnEyMjYgLTE1MyAzMTEgLTI0Ni41dDExOSAtMTg5LjVxNDIgLTExOSAtNiAtMjIzLjV0LTE2MiAtMjIzLjUgcTQgLTExMyA3MiAtMjI5aC0zNDFxMCAtMTIwIDkzIC0xODV0MTU5IC02NWg0MjRxMCAxMyAtMzQuNSA1M3QtODUuNSA0MGgtMjQwcS04MyAwIC0xNDYuNSAxOS41dC0xMDguNSAxMjQuNXE0IC04IC0zIDEzaDc2cS0yIDQgMTAgLTE2cTMzIC01MyA3MCAtNjB0ODkgLTdoMjUwcTc2IDAgMTQxLjUgLTYydDY1LjUgLTE3OWgtNDk1cS0xMjMgMCAtMjIzLjUgODQuNXQtMTAwLjUgMTk4LjV6TTEwMjQgNjAyaDI4M3EtMjggODQgLTI5IDE1NCBxLTEyMCA0MSAtMjU0IDM4cS0xMzUgMyAtMjU0IC0zOHEtMiAtNzAgLTI5IC0xNTRoMjgzek0xMDI0IDg2OXExNTkgMSAyODUgLTQycTE4OSAxODAgMTQyIDM0NnEtNjAgMTkzIC00MjcgNDMxcS0zNjggLTIzOCAtNDI3IC00MzFxLTQ4IC0xNjYgMTQyIC0zNDZxMTI1IDQzIDI4NSA0MnpNOTc3IDEyMzB2MTA0aDk0di0xMDRoOTV2LTg5aC05NXYtMTY1aC05NHYxNjVoLTk1djg5aDk1eiIgaWQ9InBhdGg2IiAvPjwvZz48cGF0aCBzdHlsZT0iZmlsbDojZjlmOWY5O2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMTAxMDEwO3N0cm9rZS13aWR0aDowO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDozLjc5OTk5OTk1O3N0cm9rZS1vcGFjaXR5OjE7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjAiIGQ9Im0gOTgwLjE3OTQsMzMzLjM0Mzc4IGMgLTIyLjE4OTM5LC0yMi4xODkzOSAtMjIuMTg5MzksLTU1LjkxMjMgMCwtNzguMTAxNjkgMzUuODM4NSwtMzUuODM4NDcgMTA0LjEzNTYsLTEwLjIyNzA1IDEwNC4xMzU2LDM5LjA1MDg1IDAsMjkuNDU2NzggLTI5LjAyMzEsNTYuNDA2NzggLTYwLjc0NTgsNTYuNDA2NzggLTE0LjQ2MzIsMCAtMzMuNzQ3NjIsLTcuNzEzNzUgLTQzLjM4OTgsLTE3LjM1NTk0IHoiIGlkPSJwYXRoMzAwOSIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgLz48cGF0aCBzdHlsZT0iZmlsbDojZjlmOWY5O2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMTAxMDEwO3N0cm9rZS13aWR0aDowO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDozLjc5OTk5OTk1O3N0cm9rZS1vcGFjaXR5OjE7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjAiIGQ9Ik0gNjkxLjU1NzMxLDExNjIuOTIzNSBDIDYwNS41NDEyMSwxMDU5LjYyMDEgNTczLjEyNzY2LDk0NS40MDg5NCA2MDYuMzUyNjgsODYyLjY5OTcyIDYyOS44MTMzNiw4MDQuMjk3NTIgNjkzLjk3NzgyLDcxNy4yMTgwMyA3NTkuMjA2NzcsNjU1LjI1Njg5IDgyNS44NjM0Niw1OTEuOTM5NTYgOTUzLjA0MzU0LDQ5My41NDI0OCAxMDAyLjk5NTksNDY2LjY0MTM1IGwgMjcuMzM3OCwtMTQuNzIyMzUgOTAuNzk0MSw2Ni4xNjczMSBjIDIzMC4zMDk0LDE2Ny44NDA4MSAzNDcuMjI1NywzMjMuNDQzMzMgMzMzLjE2OTIsNDQzLjQxMDk2IC02LjgwOTMsNTguMTE0NjMgLTQ2LjA0MDIsMTM4LjE2NDAzIC05OC43MTU5LDIwMS40MjYyMyBsIC00NC4wNDg5LDUyLjkwMTggLTYzLjcxMDMsLTE3LjQ2MTYgYyAtNTMuMTY2MywtMTQuNTcxOCAtOTAuMjc5OSwtMTcuNDYxNiAtMjI0LjI1MjcsLTE3LjQ2MTYgLTEzMy45NzI3MiwwIC0xNzEuMDg2MzQsMi44ODk4IC0yMjQuMjUyNjUsMTcuNDYxNiBsIC02My43MTAzMSwxNy40NjE2IC00NC4wNDg5MywtNTIuOTAxOCAwLDAgeiBtIDM4NC4wNzk2OSwtMTY1LjcxNTMxIDAsLTgyLjQ0MDY4IDQ3LjcyODgsMCA0Ny43Mjg5LDAgMCwtNTIuMDY3NzkgMCwtNTIuMDY3OCAtNDcuNzI4OSwwIC00Ny43Mjg4LDAgMCwtNTIuMDY3OCAwLC01Mi4wNjc3OSAtNTIuMDY3OCwwIC01Mi4wNjc3NywwIDAsNTIuMDY3NzkgMCw1Mi4wNjc4IC00Ny43Mjg4MSwwIC00Ny43Mjg4MiwwIDAsNTIuMDY3OCAwLDUyLjA2Nzc5IDQ3LjcyODgyLDAgNDcuNzI4ODEsMCAwLDgyLjQ0MDY4IDAsODIuNDQwNzEgNTIuMDY3NzcsMCA1Mi4wNjc4LDAgMCwtODIuNDQwNzEgeiIgaWQ9InBhdGgzMDExIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPjxwYXRoIHN0eWxlPSJmaWxsOiNmOWY5Zjk7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMxMDEwMTA7c3Ryb2tlLXdpZHRoOjA7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjMuNzk5OTk5OTU7c3Ryb2tlLW9wYWNpdHk6MTtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MCIgZD0ibSA3NDUuOTc3MzEsMTQ0MS45NTQgYyAwLjA1NjYsLTEuMTkzMyA1Ljg2NzkzLC0yMy42NDc1IDEyLjkxMzk1LC00OS44OTg0IDcuMDQ2MDMsLTI2LjI1MDggMTIuODU3MywtNTguMzU4NyAxMi45MTM5NSwtNzEuMzUwOCAwLjA5MjMsLTIxLjE1NzEgNS4zMDk2MiwtMjUuMjMxOSA1MC4wMDEzMSwtMzkuMDUwOCA3MC44ODc2MywtMjEuOTE4OSAzMzEuNTc5OTgsLTIyLjI2MTQgNDAxLjcxMDA4LC0wLjUyNzcgbCA0OC4wODMsMTQuOTAxMSAxMC4yMjMzLDU5LjYxNzggYyA1LjYyMjgsMzIuNzg5OCAxMi43MTUyLDY2LjExMTQgMTUuNzYwNyw3NC4wNDggNS4wOTIzLDEzLjI3MDQgLTE2Ljg1OCwxNC40MzAyIC0yNzMuMDg1OSwxNC40MzAyIC0xNTMuMjQyODgsMCAtMjc4LjU3NzA0LC0wLjk3NjIgLTI3OC41MjAzOSwtMi4xNjk0IHoiIGlkPSJwYXRoMzAxMyIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgLz48cGF0aCBzdHlsZT0iZmlsbDojZjlmOWY5O2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMTAxMDEwO3N0cm9rZS13aWR0aDowO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDozLjc5OTk5OTk1O3N0cm9rZS1vcGFjaXR5OjE7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjAiIGQ9Im0gMzEyLjIyNTgsMTczOC44MjM1IGMgMzguMjAyNzMsLTUzLjY1MDggNDYuMjI0NjUsLTU1LjU3NDcgMjU1LjMzMTgsLTYxLjIzNjkgMTA1LjI2NjYxLC0yLjg1MDUgMjA1LjMyNjgxLC05LjY4NyAyMjIuNDQxNTEsLTE1LjE5ODMgMzguNjMxODYsLTEyLjQ0MDIgODcuMzA3NDUsLTYwLjE0MDkgMTA3Ljg0NTA0LC0xMDUuNjg1MSAxMi43OTQwNywtMjguMzcyMiAxOS44ODYwOSwtMzQuNDc4MSA0MC4wNDY0MiwtMzQuNDc4MSAyMi45MTk1NSwwIDI0LjE2NDI5LDEuODE4MyAxOS4zMDcyNSwyOC4yMDM0IC0xNS42MTY3Nyw4NC44MzU3IC01OC44NjEyLDEzNi43MTY2IC0xNTMuOTEzMTgsMTg0LjY1MTUgbCAtNTkuNzQyMjIsMzAuMTI4MiAtMjI1LjA1MjA5LDAgLTIyNS4wNTIwOSwwIDE4Ljc4NzU2LC0yNi4zODQ3IHoiIGlkPSJwYXRoMzAxNSIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgLz48cGF0aCBzdHlsZT0iZmlsbDojZjlmOWY5O2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMTAxMDEwO3N0cm9rZS13aWR0aDowO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDozLjc5OTk5OTk1O3N0cm9rZS1vcGFjaXR5OjE7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjAiIGQ9Im0gMTI0My44NTM4LDE3MzUuMDggYyAtOTUuNTkwNiwtNDguMjA2NiAtMTM1LjA5NDEsLTk0LjAwMjcgLTE1MC4wMjQ4LC0xNzMuOTIyOSAtNy4xMTkyLC0zOC4xMDc1IC02Ljc5MTYsLTM4LjkyNjUgMTUuNDcwOCwtMzguNjczOSAxOC40Mzk4LDAuMjA5MiAyOC4xNzAyLDkuNjUyNCA1MS40MTYzLDQ5Ljg5ODMgNTMuODU0Niw5My4yMzgzIDkyLjYxMTUsMTA1Ljc5MTggMzI3LjEyNDMsMTA1Ljk1NzUgMTgzLjcxMSwwLjEyOTggMjA0Ljk5NjEsNS4yMTU4IDI0NS41MTk3LDU4LjY2NTggbCAyMS4zODI2LDI4LjIwMzQgLTIyNS41NzMzLDAgLTIyNS41NzM0LDAgLTU5Ljc0MjIsLTMwLjEyODIgeiIgaWQ9InBhdGgzMDE3IiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPjwvc3ZnPg==',
        'wK': 'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIiB2aWV3Qm94PSIwIDAgMjA0OCAyMDQ4IiBpZD0ic3ZnMiIgdmVyc2lvbj0iMS4xIiBpbmtzY2FwZTp2ZXJzaW9uPSIwLjQ4LjIgcjk4MTkiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHNvZGlwb2RpOmRvY25hbWU9IndrLnN2ZyI+PG1ldGFkYXRhIGlkPSJtZXRhZGF0YTEyIj48cmRmOlJERj48Y2M6V29yayByZGY6YWJvdXQ9IiI+PGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+PGRjOnR5cGUgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz48L2NjOldvcms+PC9yZGY6UkRGPjwvbWV0YWRhdGE+PGRlZnMgaWQ9ImRlZnMxMCIgLz48c29kaXBvZGk6bmFtZWR2aWV3IHBhZ2Vjb2xvcj0iI2ZmZmZmZiIgYm9yZGVyY29sb3I9IiM2NjY2NjYiIGJvcmRlcm9wYWNpdHk9IjEiIG9iamVjdHRvbGVyYW5jZT0iMTAiIGdyaWR0b2xlcmFuY2U9IjEwIiBndWlkZXRvbGVyYW5jZT0iMTAiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIiBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjEyODAiIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjgwMCIgaWQ9Im5hbWVkdmlldzgiIHNob3dncmlkPSJmYWxzZSIgaW5rc2NhcGU6em9vbT0iMC4xMTUyMzQzOCIgaW5rc2NhcGU6Y3g9IjEwMjQiIGlua3NjYXBlOmN5PSIxMDI0IiBpbmtzY2FwZTp3aW5kb3cteD0iMCIgaW5rc2NhcGU6d2luZG93LXk9IjAiIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjAiIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9InN2ZzIiIC8+PGcgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCAyMDQ4KSIgaWQ9Imc0Ij48cGF0aCBmaWxsPSIjMTAxMDEwIiBkPSJNOTc3IDE3NTB2OTVoOTR2LTk1aDEwN3YtOTVoLTEwN3YtMTUzcS00OCAxNiAtOTQgMHYxNTNoLTEwN3Y5NWgxMDd6TTEwMjQgMTQzNnEtNDcgMCAtMTM2IC0xMjFxLTMxIDM2IC01MCA1NXE5MyAxNDAgMTg2IDE0MHE5MiAwIDE4NiAtMTQwcS0yMCAtMTkgLTUwIC01NXEtOTAgMTIxIC0xMzYgMTIxek01NzcgNTI5bC0yNiAtMTU2bDE0NSA4NHpNOTg3IDczNXEtMSAxNDcgLTM2LjUgMjc0LjV0LTgwLjUgMTkzLjUgcS00NSA4OCAtMTMxLjUgMTUzdC0xNjguNSA2NXEtMTAzIDAgLTIwOCAtOTN0LTEwNSAtMjI5cTAgLTEwOSA4Ni41IC0yMzZ0MjAyLjUgLTIyM3EyMTIgODggNDQxIDk1ek0xMDI0IDIwNWgtNTc2bDYxIDM2NXEtMzI1IDI4MCAtMzI2IDUzNXEtMSAxNTkgMTI1IDI3NC41dDI2NyAxMTUuNXE3OCAwIDE1OC41IC00N3QxNDIuNSAtMTE5cTYxIC03NCA5OC41IC0xNjQuNXQ0OS41IC0xNTAuNXExMiA2MCA0OSAxNTAuNXQ5OSAxNjQuNSBxNjEgNzIgMTQyIDExOXQxNTkgNDdxMTQwIDAgMjY2IC0xMTUuNXQxMjYgLTI3NC41cS0yIC0yNTUgLTMyNiAtNTM1bDYxIC0zNjVoLTU3NnpNMTAyNCAyNzloNDg5bC01MCAyOThxLTIxNiA4NCAtNDM5IDg0dC00MzkgLTg0bC01MCAtMjk4aDQ4OXpNMTQ3MSA1MjlsMjYgLTE1NmwtMTQ1IDg0ek0xMDYxIDczNXEyMjkgLTcgNDQxIC05NXExMTUgOTYgMjAyIDIyM3Q4NyAyMzZxMCAxMzYgLTEwNS41IDIyOXQtMjA3LjUgOTMgcS04MyAwIC0xNjkuNSAtNjV0LTEzMC41IC0xNTNxLTQ2IC02NiAtODEuNSAtMTkzLjV0LTM1LjUgLTI3NC41ek04ODUgNTAybDE0MSA4NGwxMzcgLTg2bC0xNDEgLTg0eiIgaWQ9InBhdGg2IiAvPjwvZz48cGF0aCBzdHlsZT0iZmlsbDojZjlmOWY5O2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMTAxMDEwO3N0cm9rZS13aWR0aDowO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDozLjc5OTk5OTk1O3N0cm9rZS1vcGFjaXR5OjE7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjAiIGQ9Ik0gNDY3LjQ3MzIzLDEzMjQuNzM3NSBDIDMzMi43NDMyNSwxMTg1LjM2NTggMjY3LjA0NTM4LDEwNjUuMDk1NSAyNjUuNzQ1OTcsOTU1LjQ0NDA3IGMgLTEuMDQ4MjIsLTg4LjQ1NTUyIDE5Ljk5MzEyLC0xNDEuMjc1MTEgODMuMTkxOTcsLTIwOC44MzQ4OCAxMzguNzE2NTIsLTE0OC4yODg0IDI5Ni44MDE0OCwtMTQ4Ljk1OTg3IDQzNy42MTI1NywtMS44NTg3NyA2Mi41MDM3Nyw2NS4yOTU4MSAxMDcuMzAyNzIsMTQyLjg1MjQ1IDE0Mi40OTMwMywyNDYuNjg2MTggMjcuODI5MjMsODIuMTEzOSA1MS40NzQ2NywyMDcuNDg3MiA1MS41MzE3NCwyNzMuMjMyNiAwLjAzODIsNDQuMzc1NiAtOC4zNTkxMSw1MC41MjU5IC02OS4zODg4NCw1MC44MTk3IC01NS4yNTIzOCwwLjI2NiAtMTg1LjIxOTc3LDI2Ljk3NzkgLTI3Ny42OTQ5MSw1Ny4wNzQxIGwgLTkxLjExODY1LDI5LjY1NDYgLTc0Ljg5OTY1LC03Ny40ODAxIDAsMCB6IiBpZD0icGF0aDI5ODkiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIC8+PHBhdGggc3R5bGU9ImZpbGw6I2Y5ZjlmOTtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzEwMTAxMDtzdHJva2Utd2lkdGg6MDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6My43OTk5OTk5NTtzdHJva2Utb3BhY2l0eToxO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowIiBkPSJtIDEwMTIuMjUzMSw5NzYuOTgwOSBjIC04Ljg4NjksLTQ0LjQzNDgyIC01OC4xOTAyOSwtMTU0Ljg0NDIxIC04OS40MTc0NSwtMjAwLjI0MDUgbCAtMjkuNjkxODksLTQzLjE2NDQyIDMyLjA2MzUsLTM5LjEyOTI4IGMgNzguMjk3MTQsLTk1LjU1MTMzIDExOS4yODgzNCwtOTUuNTUxMzMgMTk3LjU4NTQ0LDAgbCAzMi4wNjM1LDM5LjEyOTI4IC0yOS42OTE5LDQzLjE2NDQyIGMgLTMxLjIyNzEsNDUuMzk2MjkgLTgwLjUzMDUsMTU1LjgwNTY4IC04OS40MTc0LDIwMC4yNDA1IC02LjY5NjUsMzMuNDgyNiAtMTYuNzk3MywzMy40ODI2IC0yMy40OTM4LDAgbCAwLDAgeiIgaWQ9InBhdGgyOTkxIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPjxwYXRoIHN0eWxlPSJmaWxsOiNmOWY5Zjk7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMxMDEwMTA7c3Ryb2tlLXdpZHRoOjA7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjMuNzk5OTk5OTU7c3Ryb2tlLW9wYWNpdHk6MTtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MCIgZD0iTSA0NzAuMzc2MywxMzI1LjY3OSBDIDMyNi4xNzU3NiwxMTY0Ljc5ODYgMjc3LjcxNTAzLDEwNzguODE1IDI3MC44MzY3Niw5NzEuNjM2OTQgYyAtNS4wNTE0LC03OC43MTE2MSA4LjczNzc5LC0xMzEuNzg3NjggNDcuMzk2MTksLTE4Mi40MzI5NSAxNS44ODcxMywtMjAuODEzMjYgMjguODg1NjksLTQxLjcxMzYgMjguODg1NjksLTQ2LjQ0NTE4IDAsLTQuNzMxNTkgNC4zNjU4MywtOC42MDI4OCA5LjcwMTg0LC04LjYwMjg4IDUuMzM2MDEsMCAyMy43MDY5NywtMTIuMjk2NjcgNDAuODI0MzUsLTI3LjMyNTkzIDc3LjE0NjEyLC02Ny43MzUxOCAxNzQuMjI3MjYsLTg2LjQ4ODQ2IDI1OS4xOTE4NSwtNTAuMDY4MzkgMTU1Ljk0OTYsNjYuODQ3ODEgMjY2LjAyOTY5LDI0NS4xOTk1NSAzMDkuODIyNDgsNTAxLjk3NDM5IDIzLjc3MzksMTM5LjM5NiAxNy42MTg5MywxNTYuODQzNyAtNTUuMzI5MTksMTU2Ljg0MzcgLTU4LjMxOTYyLDAgLTE2Mi4wODc5MywyMC45Nzc4IC0yNjQuNzk0OTIsNTMuNTMxMSAtNDcuNzQzNDMsMTUuMTMyNCAtOTEuNzQ4MDEsMjguNDY3MiAtOTcuNzg3OTUsMjkuNjMyOCAtNi4wMzk5NCwxLjE2NTcgLTQxLjMwNjgxLC0zMS43MTM0IC03OC4zNzA4LC03My4wNjQ2IGwgMCwwIHoiIGlkPSJwYXRoMjk5MyIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgLz48cGF0aCBzdHlsZT0iZmlsbDojZjlmOWY5O2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMTAxMDEwO3N0cm9rZS13aWR0aDowO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDozLjc5OTk5OTk1O3N0cm9rZS1vcGFjaXR5OjE7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjAiIGQ9Im0gMTQxMC4xMDgyLDEzNzEuMzE0OSBjIC04OC42OTYzLC0yOC45ODU1IC0yMTguODA5LC01NS41NjM3IC0yNzMuMjk0NiwtNTUuODI2IC02Mi41OTcxLC0wLjMwMTQgLTY5LjQyMzgsLTUuODI2OSAtNjkuNDIzOCwtNTYuMTkxNCAwLC02Ny4zNTgzIDIzLjQ0OTIsLTE4OS44Nzc4IDUyLjAyMDksLTI3MS44MDM4NSAzNS4wMzQzLC0xMDAuNDU2NjcgODAuOTQ5LC0xNzguOTI0NjEgMTQyLjAzODgsLTI0Mi43NDMyMyAxNDAuODExMSwtMTQ3LjEwMTEgMjk4Ljg5NiwtMTQ2LjQyOTYzIDQzNy42MTI2LDEuODU4NzcgNjMuMzA2NSw2Ny42NzQ5MiA4NC4yOTYxLDEyMC40NDM0MiA4My4wNjc0LDIwOC44MzQ4OCAtMS4wMTczLDczLjE4ODQzIC0yNi4xNjE2LDE0MC40OTMzMyAtODUuNTYyMiwyMjkuMDI4NDMgLTQxLjk3NDMsNjIuNTYxNyAtMTYwLjQ4MTMsMTk1LjU4NTQgLTE4NS4zNjI5LDIwOC4wNjkzIC05LjE3MTMsNC42MDE1IC00NS4yMjYsLTIuOTY4OCAtMTAxLjA5NjIsLTIxLjIyNjkgeiIgaWQ9InBhdGgyOTk1IiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPjxwYXRoIHN0eWxlPSJmaWxsOiNmOWY5Zjk7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMxMDEwMTA7c3Ryb2tlLXdpZHRoOjA7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjMuNzk5OTk5OTU7c3Ryb2tlLW9wYWNpdHk6MTtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MCIgZD0ibSA1NDQuMTI1NjIsMTczNC4yOTE1IGMgNy43NTkwMSwtNTAuNDkzOCAxNC43OTA5LC01OC40MjUgOTAuNTM2MiwtMTAyLjExNDggbCA3MC44ODY2NSwtNDAuODg3NCAtNDYuODc1OTMsLTI4LjQ3NiBjIC03Mi4wODQ5NywtNDMuNzg5OCAtNzcuOTMyMDQsLTQ5LjU5NzMgLTcxLjkyODQ2LC03MS40NDE4IDUuOTk5NSwtMjEuODI5NyA4MS40MTc2NywtNDkuMzcxNSAyMTIuNzE1NzQsLTc3LjY4MTIgMTAyLjEwMzI2LC0yMi4wMTQ5IDM0Ni45NzcwOCwtMjIuMDE0OSA0NDkuMDgwMzgsMCAxMzEuMjk4LDI4LjMwOTcgMjA2LjcxNjIsNTUuODUxNSAyMTIuNzE1Nyw3Ny42ODEyIDYuMDAzNiwyMS44NDQ1IDAuMTU2MiwyNy42NTIgLTcxLjkyODUsNzEuNDQxOCBsIC00Ni44NzU5LDI4LjQ3NiA3MC44ODY3LDQwLjg4NzQgYyA3NS43NDUyLDQzLjY4OTggODIuNzc3Miw1MS42MjEgOTAuNTM2MSwxMDIuMTE0OCBsIDUuMDAwNiwzMi41NDI0IC00ODQuODc0OSwwIC00ODQuODc0OTIsMCA1LjAwMDU0LC0zMi41NDI0IHogbSA1NTAuMTE3ODgsLTEzOC43NzA2IGMgMzcuNzYwNCwtMjIuNjI4OSA2Ny40MjI2LC00NC44NDEyIDY1LjkxNjEsLTQ5LjM2MDcgLTEuNTA2NSwtNC41MTk1IC0zMi4yMzM5LC0yNi43MDgxIC02OC4yODMyLC00OS4zMDgyIGwgLTY1LjU0NDIsLTQxLjA5MSAtNjcuNzI1NzQsNDAuNjM5MSBjIC0zNy4yNDkxNiwyMi4zNTE1IC02OC44NzE5NSw0NC41MDU2IC03MC4yNzI4OCw0OS4yMzE0IC0yLjAyNjUxLDYuODM2IDEyMS45OTM2Miw5MS4wMzI5IDEzNC4wODk0Miw5MS4wMzI5IDEuNzQxLDAgMzQuMDYwMiwtMTguNTE0NiA3MS44MjA1LC00MS4xNDM1IHoiIGlkPSJwYXRoMjk5NyIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgLz48L3N2Zz4=',
        'wN': 'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIiB2aWV3Qm94PSIwIDAgMjA0OCAyMDQ4IiBpZD0ic3ZnMiIgdmVyc2lvbj0iMS4xIiBpbmtzY2FwZTp2ZXJzaW9uPSIwLjQ4LjIgcjk4MTkiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHNvZGlwb2RpOmRvY25hbWU9InduLnN2ZyI+PG1ldGFkYXRhIGlkPSJtZXRhZGF0YTEyIj48cmRmOlJERj48Y2M6V29yayByZGY6YWJvdXQ9IiI+PGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+PGRjOnR5cGUgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz48L2NjOldvcms+PC9yZGY6UkRGPjwvbWV0YWRhdGE+PGRlZnMgaWQ9ImRlZnMxMCIgLz48c29kaXBvZGk6bmFtZWR2aWV3IHBhZ2Vjb2xvcj0iI2ZmZmZmZiIgYm9yZGVyY29sb3I9IiM2NjY2NjYiIGJvcmRlcm9wYWNpdHk9IjEiIG9iamVjdHRvbGVyYW5jZT0iMTAiIGdyaWR0b2xlcmFuY2U9IjEwIiBndWlkZXRvbGVyYW5jZT0iMTAiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIiBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjEyODAiIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjgwMCIgaWQ9Im5hbWVkdmlldzgiIHNob3dncmlkPSJmYWxzZSIgaW5rc2NhcGU6em9vbT0iMC4xMTUyMzQzOCIgaW5rc2NhcGU6Y3g9IjEwMjQiIGlua3NjYXBlOmN5PSIxMDI0IiBpbmtzY2FwZTp3aW5kb3cteD0iMCIgaW5rc2NhcGU6d2luZG93LXk9IjAiIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjAiIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9InN2ZzIiIC8+PGcgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCAyMDQ4KSIgaWQ9Imc0Ij48cGF0aCBmaWxsPSIjMTAxMDEwIiBkPSJNMTAwNCA5NTZxMzEgLTE3IDU0IC00MnEyMSAxNSAzNi41IDEzLjV0MzMuNSAxLjVxNzggMTEgMTI4LjUgODV0NTIuNSAxNjVsLTE5IDY3cS01NSAtMjM5IC0xODggLTI1N3EtMjEgLTMgLTQ1IC01LjV0LTUzIC0yNy41ek03NDYgMTQwNWwtNDYgNjBxNiAzOSAxMTUuNSAxMDcuNXQyMjAuNSAxNDMuNWwxMTUgMTU0bDk2IC0yMTdxMzQyIC0xNzIgNDMyLjUgLTQxNy41dDQ3LjUgLTYwMy41cS0xOCAtMTI4IDQuNSAtMjM2LjUgdDU3LjUgLTE5MC41aC0xMjQycS05IDE3OCAzOSAzMDEuNXQxODMgMjM3LjVxNzggMTYgMTE1IDcxdDU1IDg1cS0yMzYgNDIgLTI5MiAtNjBsLTU2IC0xMDJsLTIxNyAxMjFsMTE1IDgybC01MSA1MGwtMTIyIC04NmwtMTIgMjk3bDM5NiAyNjNxMTIgLTE4IDIzIC0zMXQyMyAtMjlsLTM2NiAtMjQxbDQgLTEyNWw2NCA0MWwxMzggLTE0NGwtNzggLTY1bDQ3IC0yOGwzOC41IDQ1dDEwOC41IDczcTU0IDE4IDE2NSAyN3QxOTEgLTc0IHEtNTYgLTYzIC05MSAtMTMyLjV0LTE1MiAtMTAyLjVxLTkyIC03OSAtMTQ2IC0xNzYuNXQtNDggLTIyMy41aDEwMTlxLTM1IDEzMyAtMzIgMjM0LjV0MTIuNSAxOTl0OSAyMDV0LTQwLjUgMjUyLjVxLTUxIDEyNiAtMTM0IDIzNHQtMjYyIDE4OGwtNTkgMTMzbC00OSAtNjlxLTk5IC02MiAtMjA4IC0xMzF0LTEzMSAtMTIwek0xMDM4IDEzNzVsLTIxMiAybDExNiAxMDBxMzAgMjUgODAgLTM4LjV0MTYgLTYzLjV6TTUwMiAxMTgwbDM3IC0zMSBsLTQ2IC01NWwtNTcgMjZsMzMgNTZ6IiBpZD0icGF0aDYiIC8+PC9nPjxwYXRoIHN0eWxlPSJmaWxsOiNmOWY5Zjk7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMxMDEwMTA7c3Ryb2tlLXdpZHRoOjA7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjMuNzk5OTk5OTU7c3Ryb2tlLW9wYWNpdHk6MTtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MCIgZD0ibSA2MjcuOTQ2NzUsMTcwNi4zMDU4IGMgNy4wNjQ3NywtNzYuMDE0MSAzMC42NTg1NCwtMTM5LjY4NjcgNzYuMDE0OTUsLTIwNS4xNDE4IDU1LjYxMzA0LC04MC4yNTY4IDk0LjMzNDk4LC0xMTYuMTQ3IDE1NS4xMzk1MywtMTQzLjc5NDEgNzEuMzA0NzEsLTMyLjQyMTQgNzkuMzg1OTUsLTM5Ljg4MSAxMzQuNTgyODcsLTEyNC4yMzA5IDYyLjIxMTMsLTk1LjA2OSA3Ni4zODkxLC0xMDguNDM1MSAxMTUuMjY0MSwtMTA4LjY2NTIgNDIuMzA3MywtMC4yNTAzIDk0LjkxMTIsLTI1LjMyMSAxMjkuMzg3LC02MS42NjUgNTYuMTQsLTU5LjE4MjIgODUuNjQ5MiwtMTY5Ljk5NjQgNjMuMzAxMSwtMjM3LjcxMTU4IGwgLTEwLjkwNjgsLTMzLjA0ODA3IC0yMy42NDU1LDcwLjQ3MzcgYyAtMzQuMTMwNiwxMDEuNzIzNCAtNjUuNDk0LDE0Ni41MDIxNSAtMTIzLjQxNjMsMTc2LjIwNjQ1IC0xNy43MDgxLDkuMDgxMiAtNDIuMjQwMywxNi41MTE0IC01NC41MTYsMTYuNTExNCAtMTIuMjc1NiwwIC0zNi41NDU5LDUuOTQ0MiAtNTMuOTMzOCwxMy4yMDk0IC0yOC41ODk1LDExLjk0NTQgLTM1Ljc0NzUzLDExLjgzNjYgLTc0LjgwODIyLC0xLjEzNzMgLTQ2LjU4NTMsLTE1LjQ3MzEgLTE0NC4wNzc0NiwtMTIuMzc3NiAtMjIyLjU2MDc0LDcuMDY2NiAtNDIuODIxMTgsMTAuNjA5IC0xNTkuNzE5MzgsODQuNDgzOSAtMTY4LjA1Mzg4LDEwNi4yMDMyIC02LjExNTE3LDE1LjkzNTkgLTI0LjIxMjQ1LDE3LjU4MzEgLTM4LjMwODcyLDMuNDg2OCAtNy41NzMwMywtNy41NzMgLTEuMzM5MzQsLTE3LjcyMTEgMjUuNTM1ODMsLTQxLjU3MDcgbCAzNS41NTQ1OCwtMzEuNTUxOSAtNjkuNjEwNTYsLTczLjM1MTIgLTY5LjYxMDU3LC03My4zNTExOSAtMzAuMzM0NDYsMTQuNDY1NDkgLTMwLjMzNDQ2LDE0LjQ2NTUgLTUuNDI4MSwtMzkuNjAyMjggYyAtMi45ODU0NSwtMjEuNzgxMjcgLTUuNDI4MDksLTQ1LjAxODgyIC01LjQyODA5LC01MS42MzkwMiAwLC02LjYyMDIxIDgyLjAzMTIyLC02Ni4zMzM0IDE4Mi4yOTE1OCwtMTMyLjY5NTk5IDEwMC4yNjAzNywtNjYuMzYyNTkgMTkzLjAwNjE0LC0xMzMuNjIxMzcgMjA2LjEwMTcsLTE0OS40NjM5NCAzNi4yNTcwNiwtNDMuODYyNTkgNDguNDQ4MjYsLTUyLjk3NzY1IDE5MC43MDY3OSwtMTQyLjU4Njc4IDk1Ljc2ODQyLC02MC4zMjQ4NSAxMzcuNTE4OTIsLTkxLjg5NDMzIDE1MS41NDY0MiwtMTE0LjU5MTQzIGwgMTkuMzYxNywtMzEuMzI3NzcgMjkuNTU2OCw2Ni4wODQ0IGMgMjYuMDE5Niw1OC4xNzU2IDMzLjgyMjYsNjguMDAzNzIgNjUuMTk5Nyw4Mi4xMjE4NCAxOTAuNDM2Nyw4NS42ODY4OCAzMzMuNTE1NCwyNzMuMzY4NzIgMzc5LjM5Myw0OTcuNjY0NTUgMTkuNTUxNyw5NS41ODgzMiAxOS44MjE1LDE0OS4xMDYxMiAyLjYyNDgsNTIwLjY3NzkyIC00LjIyNCw5MS4yNzAyIC0yLjI5OTUsMTMyLjIxNjEgOC43MTEzLDE4NS4zMzUgNy43NzMzLDM3LjUwMDQgMTQuMTMzMyw3MS42Njk5IDE0LjEzMzMsNzUuOTMyMiAwLDQuNDU4OSAtMjE0LjI2NDgsNy43NDk4IC01MDQuNTY4Miw3Ljc0OTggbCAtNTA0LjU2ODE0LDAgNS42MjU0OSwtNjAuNTI4MSAwLDAgeiBNIDUyNy43OTc5Myw4ODQuMzYxOTMgYyAtMjcuMTg4NTgsLTI4Ljk0MDkzIC01NS44Nzc3NSwtMjUuODgzNzIgLTc2LjYzODgxLDguMTY2ODggLTIyLjU1OTQ5LDM3LjAwMDI2IC0yMi4xMjQyMSwzOS4xMTI3MSAxMC45NDI1Nyw1My4xMDQzNiAyNi45MzM0MSwxMS4zOTY0MSAyOS40NzEzNCwxMC43MzY3MSA1Ni4zNjE0OCwtMTQuNjUwNDcgbCAyOC4xNTgwOCwtMjYuNTg0MjggLTE4LjgyMzMyLC0yMC4wMzY0OSAwLDAgeiBNIDEwNTEuMzY5OSw2NTEuOTExNjUgYyAtNC42NTgzLC0yNi42MTc5IC01Mi41MzA2NSwtODIuMDg3MjYgLTc1LjkwODYyLC04Ny45NTQ3NiAtMjQuNjU2MTEsLTYuMTg4MjkgLTQxLjc3NjIsNC4xNDA0NCAtMTA3LjY2NDY3LDY0Ljk1NTMgbCAtNDcuNzI4ODEsNDQuMDUzNTQgMTE3LjE1MjU0LC0xLjk0NzI4IGMgMTExLjQwNjU2LC0xLjg1MTc1IDExNy4wMDUyNiwtMi43ODg5IDExNC4xNDk1NiwtMTkuMTA2OCB6IiBpZD0icGF0aDI5ODkiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIC8+PC9zdmc+',
        'wP': 'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIiB2aWV3Qm94PSIwIDAgMjA0OCAyMDQ4IiBpZD0ic3ZnMiIgdmVyc2lvbj0iMS4xIiBpbmtzY2FwZTp2ZXJzaW9uPSIwLjQ4LjIgcjk4MTkiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHNvZGlwb2RpOmRvY25hbWU9IndwLnN2ZyI+PG1ldGFkYXRhIGlkPSJtZXRhZGF0YTEyIj48cmRmOlJERj48Y2M6V29yayByZGY6YWJvdXQ9IiI+PGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+PGRjOnR5cGUgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz48L2NjOldvcms+PC9yZGY6UkRGPjwvbWV0YWRhdGE+PGRlZnMgaWQ9ImRlZnMxMCIgLz48c29kaXBvZGk6bmFtZWR2aWV3IHBhZ2Vjb2xvcj0iI2ZmZmZmZiIgYm9yZGVyY29sb3I9IiM2NjY2NjYiIGJvcmRlcm9wYWNpdHk9IjEiIG9iamVjdHRvbGVyYW5jZT0iMTAiIGdyaWR0b2xlcmFuY2U9IjEwIiBndWlkZXRvbGVyYW5jZT0iMTAiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIiBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjEyODAiIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjgwMCIgaWQ9Im5hbWVkdmlldzgiIHNob3dncmlkPSJmYWxzZSIgaW5rc2NhcGU6em9vbT0iMC4xMTUyMzQzOCIgaW5rc2NhcGU6Y3g9IjEwMjQiIGlua3NjYXBlOmN5PSIxMDI0IiBpbmtzY2FwZTp3aW5kb3cteD0iMCIgaW5rc2NhcGU6d2luZG93LXk9IjAiIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjAiIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9InN2ZzIiIC8+PGcgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCAyMDQ4KSIgaWQ9Imc0Ij48cGF0aCBmaWxsPSIjMTAxMDEwIiBkPSJNNTIwIDI3OWgxMDA4cTggOTcgLTEzMiAxODJxLTEzMiAxMDEgLTE5Ni41IDIzOS41dC03OS41IDMwOC41aC0xOTJxLTE1IC0xNzAgLTc5LjUgLTMwOC41dC0xOTYuNSAtMjM5LjVxLTE0MSAtODUgLTEzMiAtMTgyek0xMDI0IDIwNWgtNTc4djc0cS00IDgwIDQxLjUgMTM3dDEyNS41IDEwOHExMTcgOTEgMTcxLjUgMjE3LjV0NzguNSAyNjcuNWgtMjg3bDI4NCAyMzlxLTg2IDc0IC04NiAxODhxMCAxMDMgNzMgMTc3dDE3NyA3NCBxMTAzIDAgMTc2LjUgLTc0dDczLjUgLTE3N3EwIC0xMTQgLTg2IC0xODhsMjg0IC0yMzloLTI4N3EyMyAtMTQxIDc4IC0yNjcuNXQxNzIgLTIxNy41cTc5IC01MSAxMjQuNSAtMTA4dDQyLjUgLTEzN3YtNzRoLTU3OHpNNzU2IDEwNzRoNTM2bC0yMjUgMTkxcTEzNCAzMSAxMzQgMTcxcTAgNzYgLTUyLjUgMTI2LjV0LTEyNC41IDUwLjVxLTczIDAgLTEyNSAtNTAuNXQtNTIgLTEyNi41cTAgLTE0MCAxMzQgLTE3MXoiIGlkPSJwYXRoNiIgLz48L2c+PHBhdGggc3R5bGU9ImZpbGw6I2Y5ZjlmOTtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzEwMTAxMDtzdHJva2Utd2lkdGg6MDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6My43OTk5OTk5NTAwMDAwMDAxMDtzdHJva2Utb3BhY2l0eToxO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowIiBkPSJtIDg3My40NTY3OSw4ODEuMzQ3NDYgYyA1Ni41NDc5MiwtNDcuOTEyNDUgMTAzLjkwMTcxLC05MC4yMjUyMyAxMDUuMjMwNjQsLTk0LjAyODM5IDEuMzI4OTMsLTMuODAzMTYgLTEzLjU1OTkyLC0xNC4xMTkwOSAtMzMuMDg2MzUsLTIyLjkyNDI5IC0xNTIuMjUxOTIsLTY4LjY1NjA1IC0xMDguMDkzMDMsLTMwMi41MzY2OCA2MC45MDA4MiwtMzIyLjU1MTQ5IDM1LjUzNTcsLTQuMjA4NjkgNTEuMTU5MywtMS4wNDMyMyA5MC45NTksMTguNDI4OTYgMTI5LjI3ODIsNjMuMjQ5OSAxMzIuMjU3LDI0Ni43MDk2NyA0LjkzOCwzMDQuMTIyNTMgLTE5LjUyNjQsOC44MDUyIC0zNC40MTUzLDE5LjEyMTEzIC0zMy4wODYzLDIyLjkyNDI5IDEuMzI4OSwzLjgwMzE2IDQ4LjY4MjcsNDYuMTE1OTQgMTA1LjIzMDYsOTQuMDI4MzkgbCAxMDIuODE0NCw4Ny4xMTM1NiAtMjUzLjM1NzYsMCAtMjUzLjM1NzYyLDAgMTAyLjgxNDQxLC04Ny4xMTM1NiB6IiBpZD0icGF0aDI5ODkiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIC8+PHBhdGggc3R5bGU9ImZpbGw6I2Y5ZjlmOTtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzEwMTAxMDtzdHJva2Utd2lkdGg6MDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6My43OTk5OTk5NTtzdHJva2Utb3BhY2l0eToxO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowIiBkPSJtIDc4MS4wMTY5NSw5NjEuODcwNTEgYyAwLC0zLjYyNDc4IDcuMDI4ODgsLTEwLjk4MDEyIDE1LjYxOTcyLC0xNi4zNDUxOSAyMS4xOTYzNCwtMTMuMjM3MzQgMTc4LjkzMTU2LC0xNTIuMDcwNDIgMTgyLjQyMDQ4LC0xNjAuNTYwMiAxLjUzMjI5LC0zLjcyODU4IC03LjI1NDE1LC05LjI5OTE1IC0xOS41MjU0MiwtMTIuMzc5MDQgLTEyLjI3MTI2LC0zLjA3OTkgLTIyLjMxMTM5LC04LjQyMTY3IC0yMi4zMTEzOSwtMTEuODcwNjEgMCwtMy40NDg5NCAtOS43MjM2OSwtMTEuNDc0NzYgLTIxLjYwODE5LC0xNy44MzUxNSAtNDkuNTc4OCwtMjYuNTMzNzcgLTcyLjM1MjIyLC0xMjcuNTMgLTQ0LjAzNzE5LC0xOTUuMjk3MzkgNS45ODM0NywtMTQuMzIwNDQgMTEuNDg2MiwtMjguOTY1OTggMTIuMjI4MzEsLTMyLjU0NTY0IDIuMjExNTIsLTEwLjY2NzY4IDM1LjM3MjMxLC00MS4yMjAzNCA0NC43MzkxLC00MS4yMjAzNCA0Ljc3Mjg4LDAgOC42Nzc5NywtMy4yMzQzOSA4LjY3Nzk3LC03LjE4NzU0IDAsLTEzLjIwMDg4IDgxLjk0Njc2LC0yNi43ODY1NSAxMTUuNjgwNzYsLTE5LjE3ODMgNTAuNzM0MiwxMS40NDI0MiAxMTYuNzkyNSw2Mi4xMjk5NSAxMjYuMjA5LDk2Ljg0MTk4IDE5LjczNTYsNzIuNzUxOTYgMTkuNDMxNywxMDIuNjM5ODMgLTEuNDUzOSwxNDIuOTc0NjkgLTE1Ljk1NDYsMzAuODEyMDggLTY2LjAxNjQsNzcuNDAzMTcgLTkyLjA0NjIsODUuNjY0NjkgLTEwLjU0NjUsMy4zNDczNSAtMTcuOTg0Myw4Ljk0OTQgLTE2LjUyODQsMTIuNDQ4OTkgMy40MTg5LDguMjE3NjcgMTYxLjc1NzMsMTQ3LjMyNjE1IDE4Mi4yODE3LDE2MC4xNDM4NiA4LjU5MDksNS4zNjUwNyAxNS42MTk4LDEyLjcyMDQxIDE1LjYxOTgsMTYuMzQ1MTkgMCwzLjYyNDc4IC0xMDkuMzQyNCw2LjU5MDUxIC0yNDIuOTgzMSw2LjU5MDUxIC0xMzMuNjQwNjgsMCAtMjQyLjk4MzA1LC0yLjk2NTczIC0yNDIuOTgzMDUsLTYuNTkwNTEgeiIgaWQ9InBhdGgyOTkxIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPjxwYXRoIHN0eWxlPSJmaWxsOiNmOWY5Zjk7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMxMDEwMTA7c3Ryb2tlLXdpZHRoOjA7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjMuNzk5OTk5OTU7c3Ryb2tlLW9wYWNpdHk6MTtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MCIgZD0ibSA1MjAuNjc3OTcsMTc1Ny44NzcyIGMgMCwtMTUuODUxMSAyNi4yMzYwNCwtNzIuMzM0OCA0MS41NTEzLC04OS40NTU5IDguMTcwNTEsLTkuMTMzOSA1MC4xMDcxLC00NS4wMjQyIDkzLjE5MjQxLC03OS43NTYyIDE1Mi45NDE0MSwtMTIzLjI4OTQgMjMzLjU4ODc5LC0yNjYuNTE0NyAyNjUuOTc5MDQsLTQ3Mi4zNjQxIGwgMTAuOTczMjYsLTY5LjczODMgOTEuNjI2MDIsMCA5MS42MjYsMCAxMC45NzMzLDY5LjczODMgYyAzMS4wNDAxLDE5Ny4yNjkyIDExMy42ODA3LDM0OS41Mjk2IDI0OC4xMDY5LDQ1Ny4xMjI1IDExNS4wNDA5LDkyLjA3NzIgMTMzLjgzOTksMTEzLjcyNjQgMTQ3LjIyNDMsMTY5LjU0NiBsIDUuNzIyMiwyMy44NjQ0IC01MDMuNDg3NCwwIGMgLTM0MC4zMTgyOSwwIC01MDMuNDg3MzMsLTIuOTAyNyAtNTAzLjQ4NzMzLC04Ljk1NjcgeiIgaWQ9InBhdGgyOTkzIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPjwvc3ZnPg==',
        'wQ': 'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIiB2aWV3Qm94PSIwIDAgMjA0OCAyMDQ4IiBpZD0ic3ZnMiIgdmVyc2lvbj0iMS4xIiBpbmtzY2FwZTp2ZXJzaW9uPSIwLjQ4LjIgcjk4MTkiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHNvZGlwb2RpOmRvY25hbWU9IndxLnN2ZyI+PG1ldGFkYXRhIGlkPSJtZXRhZGF0YTEyIj48cmRmOlJERj48Y2M6V29yayByZGY6YWJvdXQ9IiI+PGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+PGRjOnR5cGUgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz48L2NjOldvcms+PC9yZGY6UkRGPjwvbWV0YWRhdGE+PGRlZnMgaWQ9ImRlZnMxMCIgLz48c29kaXBvZGk6bmFtZWR2aWV3IHBhZ2Vjb2xvcj0iI2ZmZmZmZiIgYm9yZGVyY29sb3I9IiM2NjY2NjYiIGJvcmRlcm9wYWNpdHk9IjEiIG9iamVjdHRvbGVyYW5jZT0iMTAiIGdyaWR0b2xlcmFuY2U9IjEwIiBndWlkZXRvbGVyYW5jZT0iMTAiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIiBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjEyODAiIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjgwMCIgaWQ9Im5hbWVkdmlldzgiIHNob3dncmlkPSJmYWxzZSIgaW5rc2NhcGU6em9vbT0iMC4xMTUyMzQzOCIgaW5rc2NhcGU6Y3g9IjEwMjQiIGlua3NjYXBlOmN5PSIxMDI0IiBpbmtzY2FwZTp3aW5kb3cteD0iMCIgaW5rc2NhcGU6d2luZG93LXk9IjAiIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjAiIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9InN2ZzIiIC8+PGcgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCAyMDQ4KSIgaWQ9Imc0Ij48cGF0aCBmaWxsPSIjMTAxMDEwIiBkPSJNMTAyNCAyNzloNDc4cS01MyAxMzAgLTQzIDI4MHEtMTAwIDM5IC0yMTMgNjcuNXQtMjIyIDI4LjVxLTExMCAwIC0yMjMgLTI4LjV0LTIxMiAtNjcuNXE5IC0xNTAgLTQzIC0yODBoNDc4ek0xMDI0IDcyOXExMTEgMCAyMjMuNSAtMjYuNXQyMjAuNSAtNjcuNXYwdjBxMTcgMTA1IDYwLjUgMjEyLjV0MTA1LjUgMjEyLjVsLTIyMCAtMTU1bC0xMjMgNjAxbC0yNjcgLTU1NWwtMjY3IDU1NWwtMTIzIC02MDFsLTIyMCAxNTUgcTYxIC0xMDUgMTA0LjUgLTIxMi41dDYxLjUgLTIxMi41djB2MHExMDggNDEgMjIwLjUgNjcuNXQyMjMuNSAyNi41ek0xMDI0IDIwNWgtNTgzcTExNCAyMzEgNTcuNSA0NTYuNXQtMjAyLjUgNDQ5LjVxLTEyIC0yIC0xOSAtMnEtNTQgMCAtOTIuNSAzOC41dC0zOC41IDkyLjV0MzguNSA5Mi41dDkyLjUgMzguNXQ5Mi41IC0zOC41dDM4LjUgLTkyLjVxMCAtMjAgLTYgLTM4cS00IC0xNCAtMTUgLTMzbDE5NiAtMTM5bDEwMCA0ODYgcS02NCAzMSAtNzIgMTAzcS01IDQ0IDI5IDkxdDg4IDUzcTU0IDUgOTYgLTI5dDQ4IC04OHE3IC02OCAtNDYgLTExNGwxOTggLTQxMmwxOTggNDEycS01NCA0NiAtNDYgMTE0cTYgNTQgNDggODh0OTYgMjlxNTQgLTYgODcuNSAtNTN0MjkuNSAtOTFxLTkgLTcyIC03MiAtMTAzbDEwMCAtNDg2bDE5NiAxMzlxLTEyIDE5IC0xNSAzM3EtNiAxOCAtNiAzOHEwIDU0IDM4LjUgOTIuNXQ5Mi41IDM4LjV0OTIuNSAtMzguNXQzOC41IC05Mi41IHQtMzguNSAtOTIuNXQtOTIuNSAtMzguNXEtNyAwIC0xOSAycS0xNDcgLTIyNCAtMjAzIC00NDkuNXQ1OCAtNDU2LjVoLTU4M3pNMjc2IDEzMDJxLTYyIDAgLTYyIC02MnQ2MiAtNjJxNjMgMCA2MyA2MnQtNjMgNjJ6TTc0MiAxNjk2cS02MiAwIC02MiAtNjJ0NjIgLTYydDYyIDYydC02MiA2MnpNNTkwIDUyOWwxMTkgLTcybC0xMzQgLTg2cTE5IDg2IDE1IDE1OHpNMTc3MiAxMzAycS02MyAwIC02MyAtNjJ0NjMgLTYycTYyIDAgNjIgNjJ0LTYyIDYyIHpNMTMwNiAxNjk2cS02MiAwIC02MiAtNjJ0NjIgLTYydDYyIDYydC02MiA2MnpNMTQ1OCA1MjlsLTExOSAtNzJsMTM0IC04NnEtMjAgODYgLTE1IDE1OHpNODg1IDQ4MmwxMzkgODNsMTM5IC04NmwtMTM5IC04NHoiIGlkPSJwYXRoNiIgLz48L2c+PHBhdGggc3R5bGU9ImZpbGw6I2Y5ZjlmOTtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzEwMTAxMDtzdHJva2Utd2lkdGg6MDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6My43OTk5OTk5NTtzdHJva2Utb3BhY2l0eToxO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowIiBkPSJtIDU3Ni43NzM3NSwxMzc0LjE1NTkgYyAtMTQuMjY3MDEsLTY2Ljc0MDQgLTUyLjMyNzUsLTE3My40NDEgLTkxLjgxMzA0LC0yNTcuMzkzIC0yMy4zNzAwOSwtNDkuNjg4MiAtNDAuODM0NDQsLTkxLjk5ODggLTM4LjgwOTY3LC05NC4wMjM1IDIuMDI0NzgsLTIuMDI0OCA0NS44Mjk3MywyNi4xNzU2IDk3LjM0NDM0LDYyLjY2NzYgbCA5My42NjI5NCw2Ni4zNDkxIDU4LjQ0NjU4LC0yODQuNzMyMyBjIDMyLjE0NTYzLC0xNTYuNjAyNzUgNTkuNjMyNDYsLTI5MC4zMDM1MiA2MS4wODE4NiwtMjk3LjExMjgyIDEuNDQ5NCwtNi44MDkzMSA2MC45NDQ3LDEwOS4zNjY5NiAxMzIuMjExNzcsMjU4LjE2OTQ5IDcxLjI2NzA4LDE0OC44MDI1MiAxMzIuMDYyNzcsMjcwLjU1MDAzIDEzNS4xMDE0NywyNzAuNTUwMDMgMy4wMzg3LDAgNjMuODM0NCwtMTIxLjc0NzUxIDEzNS4xMDE1LC0yNzAuNTUwMDMgNzEuMjY3LC0xNDguODAyNTMgMTMwLjc2MjMsLTI2NC45Nzg4IDEzMi4yMTE3LC0yNTguMTY5NDkgMS40NDk0LDYuODA5MyAyOC45MzYyLDE0MC41MTAwNyA2MS4wODE5LDI5Ny4xMTI4MiBsIDU4LjQ0NjYsMjg0LjczMjMgOTMuNjYyOSwtNjYuMzQ5MSBjIDUxLjUxNDYsLTM2LjQ5MiA5NS41NDIzLC02NC40Njk3IDk3LjgzOTQsLTYyLjE3MjYgMi4yOTcxLDIuMjk3IC0xMS45NTY1LDM2LjI2MzMgLTMxLjY3NDYsNzUuNDgwNSAtMzguNDc0Miw3Ni41MjEzIC03OC4zMTY2LDE4NC40MDQxIC05NS4zMTQyLDI1OC4wODUxIC01Ljc4MDUsMjUuMDU3NiAtMTMuMDQ5NCw0NS40OTAzIC0xNi4xNTI5LDQ1LjQwNiAtMy4xMDM2LC0wLjA4NCAtNDEuNjYwMiwtMTEuNTIxIC04NS42ODEyLC0yNS40MTQ5IC0xNDIuNTM1LC00NC45ODcgLTIxMi45ODczLC01Ni4zNDQyIC0zNDkuNTIxMSwtNTYuMzQ0MiAtMTM2LjUzMzc5LDAgLTIwNi45ODYxMywxMS4zNTcyIC0zNDkuNTIxMTMsNTYuMzQ0MiAtNDQuMDIxMDEsMTMuODkzOSAtODIuNjU2NzIsMjUuMzMwNiAtODUuODU3MTYsMjUuNDE0OSAtMy4yMDA0MiwwLjA4NCAtOC41MzIwMSwtMTIuNTM4MiAtMTEuODQ3OTYsLTI4LjA1MDEgeiIgaWQ9InBhdGgyOTg5IiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPjxwYXRoIHN0eWxlPSJmaWxsOiNmOWY5Zjk7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMxMDEwMTA7c3Ryb2tlLXdpZHRoOjA7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjMuNzk5OTk5OTU7c3Ryb2tlLW9wYWNpdHk6MTtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MCIgZD0ibSA1NTguOTI1NiwxNzQ3LjMwODUgYyAzLjA1ODAxLC0xMC43MzkgNy43NzE0MywtMjkuNTg4MiAxMC40NzQyOCwtNDEuODg3MSAzLjU3MzcyLC0xNi4yNjE3IDIzLjYwMjkxLC0zNC4wMTU5IDczLjQyNDI5LC02NS4wODQ3IDM3LjY4MDUyLC0yMy40OTc3IDY4LjU2ODMxLC00NS4yMDM5IDY4LjYzOTU0LC00OC4yMzYgMC4wNzEyLC0zLjAzMiAtMjcuMjA2MDgsLTIyLjAyOTIgLTYwLjYxNjI1LC00Mi4yMTYgLTMzLjQxMDE3LC0yMC4xODY3IC02MC43NDU3NywtNDEuMzM5MSAtNjAuNzQ1NzcsLTQ3LjAwNTIgMCwtMTIuNzY4NCAxNDEuMzIwNDQsLTU5LjgxMTggMjUxLjM1NzYyLC04My42NzMxIDExMC45NjM4NCwtMjQuMDYyMyAyNTQuMTE3NDksLTI0LjA2MjMgMzY1LjA4MTM5LDAgMTEwLjAzNzIsMjMuODYxMyAyNTEuMzU3Niw3MC45MDQ3IDI1MS4zNTc2LDgzLjY3MzEgMCw1LjY2NjEgLTI3LjMzNTYsMjYuODE4NSAtNjAuNzQ1OCw0Ny4wMDUyIC0zMy40MTAxLDIwLjE4NjggLTYwLjY1OTUsMzkuMTg0IC02MC41NTQsNDIuMjE2IDAuMTA1NCwzLjAzMjEgMjkuNDI5MSwyMy45MDEyIDY1LjE2MzcsNDYuMzc1OSA2Mi44NDE1LDM5LjUyMzEgNzMuODA0Miw1Mi45NTI5IDg3LjM4MDUsMTA3LjA0NTEgbCA1LjM0OSwyMS4zMTIyIC00NzAuNTYzMSwwIC00NzAuNTYzMDIsMCA1LjU2MDAyLC0xOS41MjU0IHogbSA1MzguNTI5MywtMTMyLjk4ODkgYyAzNS45NjU5LC0yMS44MzU0IDY1LjM3MjcsLTQyLjMzNzEgNjUuMzQ4NSwtNDUuNTU5MyAtMC4wNTQsLTcuMTQzMiAtMTI3LjcxNDMsLTg4LjI5OTMgLTEzOC44OTcsLTg4LjI5OTMgLTE0LjcyODMsMCAtMTM5LjYyNTU5LDc5LjgyNjggLTEzNy4wMDU2NCw4Ny41NjU4IDMuNDAxNzQsMTAuMDQ4MiAxMjAuOTk1ODQsODQuNjU0NiAxMzQuNjIxOTQsODUuNDA5NiA1Ljc5NjgsMC4zMjEyIDM5Ljk2NjMsLTE3LjI4MTQgNzUuOTMyMiwtMzkuMTE2OCBsIDAsMCB6IiBpZD0icGF0aDI5OTEiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIC8+PHBhdGggc3R5bGU9ImZpbGw6I2Y5ZjlmOTtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzEwMTAxMDtzdHJva2Utd2lkdGg6MDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6My43OTk5OTk5NTtzdHJva2Utb3BhY2l0eToxO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowIiBkPSJtIDE3MzguMTk1LDg1Ny40MzkwOCBjIC0yNy45MjM5LC0xNy43NTAyNSAtMjcuODUyOSwtODEuMzI4NDggMC4xMTA2LC05OS4xMDkyNCAzNS4zMzU2LC0yMi40NjgzNCA5Mi43NDUyLDguMjI3MjkgOTIuNzQ1Miw0OS41ODg4IDAsNDEuNDMwNzggLTU3LjQxMzcsNzIuMDQ5NzggLTkyLjg1NTgsNDkuNTIwNDQgeiIgaWQ9InBhdGgyOTkzIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPjxwYXRoIHN0eWxlPSJmaWxsOiNmOWY5Zjk7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMxMDEwMTA7c3Ryb2tlLXdpZHRoOjA7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjMuNzk5OTk5OTU7c3Ryb2tlLW9wYWNpdHk6MTtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MCIgZD0ibSAxMjg0LjMzOSw0NjcuOTc1MDYgYyAtMzQuMjc2MywtMTIuNzI1MjMgLTQ2LjY5MzQsLTY3LjcxNjU0IC0yMS4wNzUxLC05My4zMzQ4NyAxNy41NzYxLC0xNy41NzYwOSA2Ny45NjM5LC0xNy41NzYwOSA4NS41NCwwIDE2LjM2MTgsMTYuMzYxODQgMTcuODE3Miw1NS42NzUwNSAyLjc4OTMsNzUuMzQ4MjUgLTEyLjE0NzgsMTUuOTAyOTMgLTQ3LjQ0MTgsMjUuMzQyMDQgLTY3LjI1NDIsMTcuOTg2NjIgeiIgaWQ9InBhdGgyOTk1IiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPjxwYXRoIHN0eWxlPSJmaWxsOiNmOWY5Zjk7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMxMDEwMTA7c3Ryb2tlLXdpZHRoOjA7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjMuNzk5OTk5OTU7c3Ryb2tlLW9wYWNpdHk6MTtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MCIgZD0ibSA3MjAuMjcxMTksNDY3Ljk3NTA2IGMgLTM0LjI3NjMzLC0xMi43MjUyMyAtNDYuNjkzMzksLTY3LjcxNjU0IC0yMS4wNzUwNiwtOTMuMzM0ODcgMTcuNTc2MDksLTE3LjU3NjA5IDY3Ljk2Mzg1LC0xNy41NzYwOSA4NS41Mzk5NCwwIDE2LjM2MTg1LDE2LjM2MTg0IDE3LjgxNzIsNTUuNjc1MDUgMi43ODkzNSw3NS4zNDgyNSAtMTIuMTQ3ODIsMTUuOTAyOTMgLTQ3LjQ0MTg3LDI1LjM0MjA0IC02Ny4yNTQyMywxNy45ODY2MiB6IiBpZD0icGF0aDI5OTciIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIC8+PHBhdGggc3R5bGU9ImZpbGw6I2Y5ZjlmOTtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzEwMTAxMDtzdHJva2Utd2lkdGg6MDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6My43OTk5OTk5NTtzdHJva2Utb3BhY2l0eToxO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowIiBkPSJtIDIzNC4zMDUwOCw4NDYuOTY5NDkgYyAtMjIuMTg5MzksLTIyLjE4OTM5IC0yMi4xODkzOSwtNTUuOTEyMyAwLC03OC4xMDE2OSAxNy40NDEzOCwtMTcuNDQxMzcgNTYuMDk5MDksLTIyLjgwMjA1IDc1LjQ5OTkyLC0xMC40Njk1OSAyNy45MjM4OCwxNy43NTAyNSAyNy44NTI5Miw4MS4zMjg0OSAtMC4xMTA2MSw5OS4xMDkyNCAtMTkuMjk4NzEsMTIuMjcxMTggLTU3Ljk4ODIxLDYuODYzMTQgLTc1LjM4OTMxLC0xMC41Mzc5NiB6IiBpZD0icGF0aDI5OTkiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIC8+PC9zdmc+',
        'wR': 'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIiB2aWV3Qm94PSIwIDAgMjA0OCAyMDQ4IiBpZD0ic3ZnMiIgdmVyc2lvbj0iMS4xIiBpbmtzY2FwZTp2ZXJzaW9uPSIwLjQ4LjIgcjk4MTkiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHNvZGlwb2RpOmRvY25hbWU9IndyLnN2ZyI+PG1ldGFkYXRhIGlkPSJtZXRhZGF0YTEyIj48cmRmOlJERj48Y2M6V29yayByZGY6YWJvdXQ9IiI+PGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+PGRjOnR5cGUgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz48L2NjOldvcms+PC9yZGY6UkRGPjwvbWV0YWRhdGE+PGRlZnMgaWQ9ImRlZnMxMCIgLz48c29kaXBvZGk6bmFtZWR2aWV3IHBhZ2Vjb2xvcj0iI2ZmZmZmZiIgYm9yZGVyY29sb3I9IiM2NjY2NjYiIGJvcmRlcm9wYWNpdHk9IjEiIG9iamVjdHRvbGVyYW5jZT0iMTAiIGdyaWR0b2xlcmFuY2U9IjEwIiBndWlkZXRvbGVyYW5jZT0iMTAiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIiBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjEyODAiIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjgwMCIgaWQ9Im5hbWVkdmlldzgiIHNob3dncmlkPSJmYWxzZSIgaW5rc2NhcGU6em9vbT0iMC4xMTUyMzQzOCIgaW5rc2NhcGU6Y3g9IjEwMjQiIGlua3NjYXBlOmN5PSIxMDI0IiBpbmtzY2FwZTp3aW5kb3cteD0iMCIgaW5rc2NhcGU6d2luZG93LXk9IjAiIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjAiIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9InN2ZzIiIC8+PGcgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCAyMDQ4KSIgaWQ9Imc0Ij48cGF0aCBmaWxsPSIjMTAxMDEwIiBkPSJNMTAyNCA1NDdoLTM4MWw1IDc0aDM3NmgzNzZsNSAtNzRoLTM4MXpNMTAyNCAxMjA4aC0zMzJsNSA3NGgzMjdoMzI3bDUgLTc0aC0zMzJ6TTEwMjQgMjA1aC02NDFsMjkgMjY0bDE1OSAxMThsNTAgNjU5bC0xNDkgMTA3bC0xNyAzNDFoMjg5di0xNDdoMTM3djE0N2gxNDNoMTQzdi0xNDdoMTM3djE0N2gyODlsLTE3IC0zNDFsLTE0OSAtMTA3bDUwIC02NTlsMTU5IC0xMThsMjkgLTI2NGgtNjQxek0xMDI0IDI3OWg1NTdsLTE1IDE0OSBsLTE2MSAxMTlsLTU0IDczNWwxNTIgMTA5bDEzIDIzMGgtMTM4di0xNDhoLTI4NXYxNDhoLTY5aC02OXYtMTQ4aC0yODV2MTQ4aC0xMzhsMTMgLTIzMGwxNTIgLTEwOWwtNTQgLTczNWwtMTYxIC0xMTlsLTE1IC0xNDloNTU3eiIgaWQ9InBhdGg2IiAvPjwvZz48cGF0aCBzdHlsZT0iZmlsbDojZjlmOWY5O2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMTAxMDEwO3N0cm9rZS13aWR0aDowO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDozLjc5OTk5OTk1O3N0cm9rZS1vcGFjaXR5OjE7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjAiIGQ9Im0gNjU1LjgzMjE5LDEzNzguNDk0OSBjIDUuMDIyNjQsLTQ5LjY4NDIgMzguNDA1MSwtNTAwLjU2NzM2IDM4LjQwNTEsLTUxOC43MjE4MSAwLC0xMS4wNjE1MyA0NC44Njc4MywtMTIuODAzNiAzMjkuNzYyNzEsLTEyLjgwMzYgMjg0Ljg5NDksMCAzMjkuNzYyNywxLjc0MjA3IDMyOS43NjI3LDEyLjgwMzYgMCwxOC4xNTQ0NSAzMy4zODI1LDQ2OS4wMzc2MSAzOC40MDUxLDUxOC43MjE4MSBsIDQuMTY3LDQxLjIyMDQgLTM3Mi4zMzQ4LDAgLTM3Mi4zMzQ4MiwwIDQuMTY3MDEsLTQxLjIyMDQgeiIgaWQ9InBhdGgyOTg5IiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPjxwYXRoIHN0eWxlPSJmaWxsOiNmOWY5Zjk7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMxMDEwMTA7c3Ryb2tlLXdpZHRoOjA7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjMuNzk5OTk5OTU7c3Ryb2tlLW9wYWNpdHk6MTtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MCIgZD0ibSA2MjQuNzg0MzQsNzA3LjY0NzExIC03My43MzM0OSwtNTIuNTQyNzMgLTUuNjQ3MTksLTcxLjExODI5IGMgLTMuMTA1OTUsLTM5LjExNTA3IC02LjAzNDc3LC04OS42Njc0NSAtNi41MDg0NywtMTEyLjMzODYzIGwgLTAuODYxMjksLTQxLjIyMDM0IDY1LjA4NDc0LDAgNjUuMDg0NzUsMCAwLDczLjc2MjcxIDAsNzMuNzYyNzEgMTQ3LjUyNTQyLDAgMTQ3LjUyNTQzLDAgMCwtNzMuNzYyNzEgMCwtNzMuNzYyNzEgNjAuNzQ1NzYsMCA2MC43NDU4LDAgMCw3My43NjI3MSAwLDczLjc2MjcxIDE0Ny41MjU0LDAgMTQ3LjUyNTQsMCAwLC03My43NjI3MSAwLC03My43NjI3MSA2NS4wODQ4LDAgNjUuMDg0NywwIC0wLjg2MDksNDEuMjIwMzQgYyAtMC40NzM4LDIyLjY3MTE4IC0zLjQwMjUsNzMuMjIzNTYgLTYuNTA4NCwxMTIuMzM4NjMgbCAtNS42NDc2LDcxLjExODI5IC03My43MzM1LDUyLjU0MjczIC03My43MzM1LDUyLjU0MjcyIC0zMjUuNDgyMiwwIC0zMjUuNDgyMTcsMCAtNzMuNzMzNDksLTUyLjU0MjcyIHoiIGlkPSJwYXRoMjk5MSIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgLz48cGF0aCBzdHlsZT0iZmlsbDojZjlmOWY5O2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMTAxMDEwO3N0cm9rZS13aWR0aDowO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDozLjc5OTk5OTk1O3N0cm9rZS1vcGFjaXR5OjE7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjAiIGQ9Im0gNDcxLjY2Njc1LDE3NTEuNjQ3NSBjIDIuMzI0MzksLTguMzUyNiA2Ljc1MTQ0LC00MS4wNjAxIDkuODM3ODksLTcyLjY4MzUgbCA1LjYxMTczLC01Ny40OTcgNzkuMzM0NjIsLTU3LjQ4NiA3OS4zMzQ2MywtNTcuNDg2MSAzNzguMjE0MzgsMCAzNzguMjE0NCwwIDc5LjMzNDYsNTcuNDg2MSA3OS4zMzQ2LDU3LjQ4NiA1LjYxMTcsNTcuNDk3IGMgMy4wODY1LDMxLjYyMzQgNy41MTM2LDY0LjMzMDkgOS44MzgsNzIuNjgzNSAzLjk5MzEsMTQuMzQ5MyAtMjYuNDUyMSwxNS4xODY0IC01NTIuMzMzMywxNS4xODY0IC01MjUuODgxMjMsMCAtNTU2LjMyNjQ2LC0wLjgzNzEgLTU1Mi4zMzMyNSwtMTUuMTg2NCB6IiBpZD0icGF0aDI5OTMiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIC8+PC9zdmc+'
    },
    'kosal': {
        'bB': 'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgODEgODEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDgxIDgxOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe2ZpbGw6bm9uZTt9IAkuc3Qxe2ZpbGw6IzAxMDEwMTt9IAkuc3Qye2ZpbGw6IzZENkU2RTt9PC9zdHlsZT48cmVjdCB4PSIwIiB5PSIwIiBjbGFzcz0ic3QwIiB3aWR0aD0iODEiIGhlaWdodD0iODEiLz48cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjE4LjksNzIgNjIuMSw3MiA1MC4zLDYyLjUgMzAuNyw2Mi41ICIvPjxnPjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik00MSwxOC45YzEuNSwwLDIuOS0wLjUsNC0xLjNsMi44LTUuMmMwLTAuMSwwLTAuMiwwLTAuM2MwLTMuNy0zLTYuOC02LjgtNi44Yy0zLjcsMC02LjgsMy02LjgsNi44CWMwLDAuMSwwLDAuMiwwLDAuM2wyLjgsNS4yQzM4LjIsMTguNCwzOS42LDE4LjksNDEsMTguOSIvPjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik00OC40LDIwLjRsLTkuNywxOC4yTDM3LDMyLjdsOC4xLTE1LjJjLTEtMC44LTItMS41LTMtMi4yaC0zLjFjLTEwLDYuNi0xOS4xLDE3LjUtMTkuMSwzMi4ybDEwLjksMTUuMmgyLjdoMTQJaDIuN2wxMC45LTE1LjJDNjEuMSwzNi4xLDU1LjYsMjcsNDguNCwyMC40Ii8+PHBhdGggY2xhc3M9InN0MiIgZD0iTTQ4LjYsMjcuOWwtNy4yLDEzYzAsMCw1LDEuMyw3LjItMS45QzUwLjgsMzUuOSw1MC4yLDI4LjksNDguNiwyNy45eiIvPjxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0zMS4yLDU1LjFjLTEuNi0xMy45LDEuNC0yOC4xLDcuOS0zNC44bC0wLjUtMC43Yy03LjEsNi4zLTE0LDE1LjYtMTQsMjYuNkwzMS4yLDU1LjF6Ii8+PC9nPjxwb2x5Z29uIGNsYXNzPSJzdDIiIHBvaW50cz0iMzcuOSw2OSAzNy45LDYzLjMgMzUuNCw2My4zIDI4LjgsNjkgIi8+PHBhdGggY2xhc3M9InN0MiIgZD0iTTQyLjQsNy45Yy0wLjgtMC41LTEuOC0wLjYtMi43LTAuM2MtMS45LDAuNS0zLDIuNS0yLjUsNC40YzAsMC4xLDAsMC4xLDAuMSwwLjJDNDAuMywxMi40LDQyLjgsOS4zLDQyLjQsNy45eiIgCS8+PC9zdmc+',
        'bK': 'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgODEgODEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDgxIDgxOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe2ZpbGw6bm9uZTt9IAkuc3Qxe2ZpbGw6IzAxMDEwMTt9IAkuc3Qye2ZpbGw6IzZENkU2RTt9PC9zdHlsZT48cmVjdCBjbGFzcz0ic3QwIiB3aWR0aD0iODEiIGhlaWdodD0iODEiLz48cGF0aCBjbGFzcz0ic3QxIiBkPSJNNTguNiwyNS41Yy02LjIsMC05LjMsMi42LTEwLjksNC4ybC03LjIsMTIuNmwtNy4yLTEyLjZjLTEuNi0xLjYtNC43LTQuMi0xMC45LTQuMmMtOS43LDAtMTUuMyw4LTE1LjMsMTUuOCAJYzAsOC44LDMuOCwxMS45LDguOSwyMi4zVjcyaDI0LjVINjV2LTguNGM1LjEtMTAuNSw4LjktMTMuNSw4LjktMjIuM0M3My45LDMzLjUsNjguMywyNS41LDU4LjYsMjUuNXogTTQwLjUsNjEuNmwtMy42LTYuNGwzLjYtNi40IAlsMy42LDYuNEw0MC41LDYxLjZ6Ii8+PHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSI1MC43LDIxLjQgNTAuNywxMy43IDQyLjcsMTQuNiA0NC40LDcuMiAzNi42LDcuMiAzOC4zLDE0LjYgMzAuMywxMy43IDMwLjMsMjEuNCAzOC4zLDE5IDM1LjIsMjcuOSAgCTQwLjUsMzguOSA0NS44LDI3LjkgNDIuNywxOSAiLz48cG9seWdvbiBjbGFzcz0ic3QyIiBwb2ludHM9IjQwLjUsMTkuOSAzNy42LDI3LjUgNDAuNSwzMy45ICIvPjxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0yMi44LDI5LjFjLTcuMiwwLTExLjcsNi40LTExLjcsMTIuOWMwLDQsMi45LDguMiw1LjgsMTJjMC0xMi40LDQuNi0xNy40LDEyLjUtMjIuNiAJQzI5LjQsMzEuNCwyNy40LDI5LjEsMjIuOCwyOS4xeiIvPjxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik00My41LDQ0bDcuNC0xMi43YzAsMCwzLjYtMi42LDgtMi42czQuNSwwLjUsNC41LDAuNUw0My41LDQ0eiIvPjxwb2x5Z29uIGNsYXNzPSJzdDIiIHBvaW50cz0iMzEuOCwxNS4xIDM1LjYsMTcuNCAzMS44LDE5LjcgIi8+PHBvbHlnb24gY2xhc3M9InN0MiIgcG9pbnRzPSI0OS4yLDE1LjEgNDIuOCwxNi4zIDQ3LjUsMTcuNCAiLz48cG9seWdvbiBjbGFzcz0ic3QyIiBwb2ludHM9IjQyLjYsOC45IDQwLjUsMTAuOCAzOC40LDguOSAiLz48L3N2Zz4=',
        'bN': 'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgODEgODEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDgxIDgxOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe2ZpbGw6bm9uZTt9IAkuc3Qxe2ZpbGw6IzAxMDEwMTt9IAkuc3Qye2ZpbGw6IzZENkU2RTt9PC9zdHlsZT48cmVjdCBjbGFzcz0ic3QwIiB3aWR0aD0iODEiIGhlaWdodD0iODEiLz48cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTkuNiw3MkMzOC4yLDcyLDY3LDcyLDY3LDcybC0yLTYuMWMwLDAtMC4xLTE3LTAuMS0yNi4xYzAtMTcuMy04LjUtMjUuMy0xNi0yOC40Yy01LjYtMi4zLTE0LjYtMS44LTE0LjYtMS44IAlsMy4zLDYuNUwxMiwzNi40bDIsMTIuMmwxMy40LDMuNWw2LjEtNS4xYzEuMiwwLjUsMi41LDAuOCwzLjcsMS4xdjAuM0MzNy4yLDQ4LjQsMjIuOSw1NywxOS42LDcyeiBNMzEuNCwzMS4zIAljLTAuNiwwLjMtMS4xLTAuNS0wLjYtMWw3LjItNi4ybDIuMiwzLjdMMzEuNCwzMS4zeiIvPjxwb2x5Z29uIGNsYXNzPSJzdDIiIHBvaW50cz0iMTUuOCwzOCAxNy4xLDQ1LjkgMjEuOCw0NyAyMS43LDQyLjQgMTguOCw0MS45ICIvPjxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0zMC44LDMzLjRsMTUuNi0zLjhsMi4yLTMuOGMwLDAsMi44LDEuMSwyLjEsNi4zcy02LjgsOC4zLTEyLjEsNy42QzMxLjcsMzguOCwzMC44LDMzLjQsMzAuOCwzMy40eiIvPjxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0zNiw2Ny45YzUuMS0xNi40LDE2LjQtMTMsMTYuOC0yMi40Yy0zLjMsNS45LTEwLjcsNS42LTEwLjcsNS42cy0xMS42LDUuMS0xNS44LDE2LjggCUMyNi4zLDY3LjksMzYsNjcuOSwzNiw2Ny45eiIvPjwvc3ZnPg==',
        'bP': 'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgODEgODEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDgxIDgxOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe2ZpbGw6bm9uZTt9IAkuc3Qxe2ZpbGw6IzAxMDEwMTt9IAkuc3Qye2ZpbGw6IzZENkU2RTt9IAkuc3Qze2Rpc3BsYXk6bm9uZTt9IAkuc3Q0e2Rpc3BsYXk6aW5saW5lO2ZpbGw6bm9uZTt9IAkuc3Q1e2Rpc3BsYXk6aW5saW5lO2ZpbGw6I0ZGRkZGRjt9IAkuc3Q2e2Rpc3BsYXk6aW5saW5lO2ZpbGw6I0NGQ0VDRjt9IAkuc3Q3e2Rpc3BsYXk6aW5saW5lO2ZpbGw6IzIzMUYyMDtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MC41O3N0cm9rZS1taXRlcmxpbWl0OjEwO30gCS5zdDh7ZGlzcGxheTppbmxpbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjAuNTtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9IAkuc3Q5e2Rpc3BsYXk6aW5saW5lO308L3N0eWxlPjxyZWN0IGNsYXNzPSJzdDAiIHdpZHRoPSI4MSIgaGVpZ2h0PSI4MSIvPjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik00MC41LDEyLjVjLTYsMC0xMC43LDQuOC0xMC43LDEwLjdjMCwzLjYsMS44LDYuOSw0LjYsOC44aDEyLjNjMi44LTEuOSw0LjYtNS4yLDQuNi04LjggCUM1MS4yLDE3LjIsNDYuNSwxMi41LDQwLjUsMTIuNSIvPjxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik00My4yLDE2LjRjLTEuNS0wLjktMy4zLTEuMS01LjItMC42Yy0zLjYsMS01LjYsNC42LTQuNyw4LjJjMCwwLjEsMC4xLDAuMiwwLjEsMC4zQzM5LjIsMjUsNDQsMTkuMSw0My4yLDE2LjR6IAkiLz48cGF0aCBjbGFzcz0ic3QxIiBkPSJNMzQuNSwzMS43bC0wLjMsNy43bC0zLjUsMjEuN0wxOC4zLDcyaDQ0LjNMNTAuMyw2MS4xTDQ2LDM5LjRsLTAuMy03LjciLz48cG9seWdvbiBjbGFzcz0ic3QyIiBwb2ludHM9IjM3LjcsMzkuNiAzMy44LDYyLjEgMjcuMiw2OS4yIDM0LjgsNjkuMiA0MCw2My44IDQwLjEsMzkuNiAiLz48cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjI2LjYsMzguOCA1NC40LDM4LjggNDcuNywzMC44IDMzLjMsMzAuOCAiLz48cG9seWdvbiBjbGFzcz0ic3QyIiBwb2ludHM9IjMyLjMsMzYuNSA0MS4xLDM2LjUgMzksMzIuNSAzNS4yLDMyLjUgIi8+PGcgaWQ9IkxheWVyXzJfMV8iIGNsYXNzPSJzdDMiPjxyZWN0IGNsYXNzPSJzdDQiIHdpZHRoPSI4MSIgaGVpZ2h0PSI4MSIvPjxwYXRoIGNsYXNzPSJzdDUiIGQ9Ik0zNC4zLDMzLjJjLTIuOC0yLTQuNy01LjItNC43LTguOWMwLTYsNC45LTEwLjksMTAuOS0xMC45czEwLjksNC45LDEwLjksMTAuOWMwLDMuNy0xLjksNy00LjcsOC45bDAuNSw4LjMJbDMuNCwxOC43TDYzLjMsNzFIMTcuN2wxMi43LTEwLjhsMy40LTE4LjciLz48cGF0aCBjbGFzcz0ic3Q2IiBkPSJNNDUsMTQuNEM0OC43LDE5LjksNDYuMSwzMywzNC44LDMzYy0wLjIsMCwxMi4xLDAuNiwxMy4xLTAuM2MxLjktMS45LDMuMS00LjQsMy4xLTcuMwlDNTEuMSwxOS40LDQ0LjgsMTMuMiw0NSwxNC40eiIvPjxwb2x5Z29uIGNsYXNzPSJzdDYiIHBvaW50cz0iNDAuNSw2MC44IDQ3LjgsNzAgNjIuMSw3MCA1MS4yLDYxLjEgNDkuOCw2MC4yIDQ2LjksNDEgNDAuNSw0MSAJIi8+PHBhdGggY2xhc3M9InN0NyIgZD0iTTQwLjUsMTEuN2MtNywwLTEyLjcsNS43LTEyLjcsMTIuN2MwLDQuMywyLjIsOC4xLDUuNSwxMC40aDcuM2MtNS43LDAtMTAuNC00LjctMTAuNC0xMC40UzM0LjksMTQsNDAuNiwxNAlTNTEsMTguNiw1MSwyNC4zcy00LjcsMTAuNC0xMC40LDEwLjRoNy4zYzMuMy0yLjMsNS41LTYuMiw1LjUtMTAuNEM1My4xLDE3LjQsNDcuNCwxMS43LDQwLjUsMTEuN3oiLz48cGF0aCBjbGFzcz0ic3Q4IiBkPSJNNDguMiw0MmwzLjIsMTcuNkw2Niw3MkgxNWwxNC41LTEyLjRMMzIuOCw0MiBNMzUsNDFsLTMuNiwxOS43bC0xMSw5LjNoNDAuMWwtMTAuOS05LjNMNDYsNDEiLz48cGF0aCBjbGFzcz0ic3Q1IiBkPSJNMzQuMywzMy4yIi8+PHBvbHlnb24gY2xhc3M9InN0OSIgcG9pbnRzPSI1MC4zLDMyLjggMzAuNywzMi44IDIyLjUsNDMuMiA1OC41LDQzLjIgCSIvPjxwb2x5Z29uIGNsYXNzPSJzdDUiIHBvaW50cz0iMjcuNSw0MSA1My41LDQxIDQ4LjksMzUuMiAzMi4xLDM1LjIgCSIvPjxwb2x5Z29uIGNsYXNzPSJzdDYiIHBvaW50cz0iNDQuMSw0MSA1My41LDQxIDQ4LjksMzUuMiA0MC43LDM1LjIgCSIvPjwvZz48L3N2Zz4=',
        'bQ': 'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgODEgODEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDgxIDgxOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe2ZpbGw6bm9uZTt9IAkuc3Qxe2ZpbGw6IzAxMDEwMTt9IAkuc3Qye2ZpbGw6IzZENkU2RTt9PC9zdHlsZT48cmVjdCBjbGFzcz0ic3QwIiB3aWR0aD0iODEiIGhlaWdodD0iODEiLz48cGF0aCBjbGFzcz0ic3QxIiBkPSJNNTUuNyw1MC45bDQtMzQuOUw0MC41LDQ5LjJMMjEuMywxNmw0LjEsMzQuOUw3LjksMzAuOEwxOC44LDcyaDQzLjRsMTAuOS00MS4yTDU1LjcsNTAuOXogTTQwLjUsNjYuOWwtMy42LTYuNCAJbDMuNi02LjRsMy42LDYuNEw0MC41LDY2Ljl6Ii8+PHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSI0MC41LDExLjcgMzQuOSwzNS4yIDQwLjUsNDQuNyA0Ni4xLDM1LjIgIi8+PHBhdGggY2xhc3M9InN0MSIgZD0iTTMzLjYsMzMuNiIvPjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik00Ny40LDMzLjYiLz48Y2lyY2xlIGNsYXNzPSJzdDEiIGN4PSI0MC41IiBjeT0iMTAuNiIgcj0iNS40Ii8+PHBhdGggY2xhc3M9InN0MiIgZD0iTTQxLjYsNy4yYy0wLjgtMC40LTEuNy0wLjYtMi42LTAuM2MtMS44LDAuNS0yLjksMi40LTIuNCw0LjJjMCwwLjEsMCwwLjEsMC4xLDAuMkMzOS42LDExLjYsNDIsOC41LDQxLjYsNy4yeiIgCS8+PGNpcmNsZSBjbGFzcz0ic3QxIiBjeD0iNTkuNSIgY3k9IjE2IiByPSI1LjQiLz48cGF0aCBjbGFzcz0ic3QyIiBkPSJNNjAuNiwxMi42Yy0wLjgtMC40LTEuNy0wLjYtMi42LTAuM2MtMS44LDAuNS0yLjksMi40LTIuNCw0LjJjMCwwLjEsMCwwLjEsMC4xLDAuMiAJQzU4LjYsMTYuOSw2MSwxMy45LDYwLjYsMTIuNnoiLz48Y2lyY2xlIGNsYXNzPSJzdDEiIGN4PSIyMS41IiBjeT0iMTYiIHI9IjUuNCIvPjxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0yMi42LDEyLjZjLTAuOC0wLjQtMS43LTAuNi0yLjYtMC4zYy0xLjgsMC41LTIuOSwyLjQtMi40LDQuMmMwLDAuMSwwLDAuMSwwLjEsMC4yIAlDMjAuNiwxNi45LDIzLDEzLjksMjIuNiwxMi42eiIvPjxjaXJjbGUgY2xhc3M9InN0MSIgY3g9IjczLjEiIGN5PSIzMS40IiByPSI1LjQiLz48cGF0aCBjbGFzcz0ic3QyIiBkPSJNNzQuMiwyOGMtMC44LTAuNC0xLjctMC42LTIuNi0wLjNjLTEuOCwwLjUtMi45LDIuNC0yLjQsNC4yYzAsMC4xLDAsMC4xLDAuMSwwLjJDNzIuMiwzMi4zLDc0LjYsMjkuMyw3NC4yLDI4eiAJIi8+PGNpcmNsZSBjbGFzcz0ic3QxIiBjeD0iNy45IiBjeT0iMzEuNCIgcj0iNS40Ii8+PHBhdGggY2xhc3M9InN0MiIgZD0iTTksMjhjLTAuOC0wLjQtMS43LTAuNi0yLjYtMC4zQzQuNiwyOC4xLDMuNSwzMCw0LDMxLjhjMCwwLjEsMCwwLjEsMC4xLDAuMkM3LDMyLjMsOS40LDI5LjMsOSwyOHoiLz48cG9seWdvbiBjbGFzcz0ic3QyIiBwb2ludHM9IjQwLjUsMjAuOSAzNy40LDM0LjMgNDAuNSwzOS42ICIvPjxwb2x5Z29uIGNsYXNzPSJzdDIiIHBvaW50cz0iNTYuNiw1NC43IDU4LjQsNjAuMyA2OCwzOC4zICIvPjxwb2x5Z29uIGNsYXNzPSJzdDIiIHBvaW50cz0iNDcuOSw1MC41IDU1LjksMjkuMyA0My42LDUwLjEgIi8+PHBvbHlnb24gY2xhc3M9InN0MiIgcG9pbnRzPSIzMy4zLDUwLjUgMjUsMjkuMSAyOC4xLDUxICIvPjxwb2x5Z29uIGNsYXNzPSJzdDIiIHBvaW50cz0iMjMuMSw1OC43IDEyLjYsNDAuOSAyMC41LDY3LjMgIi8+PC9zdmc+',
        'bR': 'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgODEgODEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDgxIDgxOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe2ZpbGw6bm9uZTt9IAkuc3Qxe2ZpbGw6IzAxMDEwMTt9IAkuc3Qye2ZpbGw6IzZENkU2RTt9PC9zdHlsZT48cmVjdCBjbGFzcz0ic3QwIiB3aWR0aD0iODEiIGhlaWdodD0iODEiLz48cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjU2LjksMzEuMSAyNC4xLDMxLjEgMTkuMiw3MiA2MS44LDcyIDYxLjgsNzIgIi8+PHJlY3QgeD0iMTQuMiIgeT0iNTguNSIgY2xhc3M9InN0MSIgd2lkdGg9IjUyLjUiIGhlaWdodD0iMTMuNSIvPjxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik00MS4xLDM0LjFjLTAuMSw3LjItNi42LDI0LjQtMTQuMiwyNC40Yy0xLjIsMC0yLjMsMC0yLjMsMGwzLjgtMjQuNEg0MS4xeiIvPjxyZWN0IHg9IjE4LjQiIHk9IjYyLjMiIGNsYXNzPSJzdDIiIHdpZHRoPSIxNy45IiBoZWlnaHQ9IjYuMSIvPjxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iNTMuNCwxMiA1My40LDE4LjkgNDYuNSwxOC45IDQ2LjUsMTIgMzQuNSwxMiAzNC41LDE4LjkgMjcuNiwxOC45IDI3LjYsMTIgMTUuNiwxMiAxNS42LDIzLjQgIAkyNC42LDMyLjUgNTYuNCwzMi41IDY1LjQsMjMuNCA2NS40LDIzLjQgNjUuNCwxMiAiLz48Zz48cG9seWdvbiBjbGFzcz0ic3QyIiBwb2ludHM9IjYyLjQsMTUgNTYuNCwxNSA1Ni40LDIyLjIgCSIvPjxwb2x5Z29uIGNsYXNzPSJzdDIiIHBvaW50cz0iNDMuNSwxNSAzNy41LDE1IDM3LjUsMjIuMiAJIi8+PHBvbHlnb24gY2xhc3M9InN0MiIgcG9pbnRzPSIyNC42LDE1IDE4LjYsMTUgMTguNiwyMi4yIAkiLz48L2c+PC9zdmc+',
        'wB': 'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgODEgODEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDgxIDgxOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe2ZpbGw6bm9uZTt9IAkuc3Qxe2ZpbGw6I0ZGRkZGRjt9IAkuc3Qye2ZpbGw6I0NGQ0VDRjt9PC9zdHlsZT48cmVjdCBjbGFzcz0ic3QwIiB3aWR0aD0iODEiIGhlaWdodD0iODEiLz48cGF0aCBjbGFzcz0ic3QxIiBkPSJNNjEuNCw3MWwtMTEuOS05LjFsMTAuNi0xNC42YzAtMTEtNC45LTE5LjktMTEuOS0yNi4zbC0xLjctMC44bC03LjksMTQuM2wtMS41LTEuNmw3LjgtMTQuN2wwLDBsMi43LTUuMSAJYzAtMC4xLDAtMC4yLDAtMC4yYzAtMy42LTIuOS02LjYtNi42LTYuNmMtMy42LDAtNi42LDIuOS02LjYsNi42YzAsMC4xLDAsMC4yLDAsMC4ybDIuMyw0LjRDMjgsMjQuMSwyMC45LDM0LjEsMjAuOSw0Ny4zbDEwLjYsMTQuNiAJTDE5LjYsNzFINjEuNHoiLz48cG9seWdvbiBjbGFzcz0ic3QyIiBwb2ludHM9IjQ1LjYsNzAuNyA2MCw3MC43IDQ5LjYsNjEuMiA0Mi44LDYxLjIgIi8+PHBhdGggY2xhc3M9InN0MiIgZD0iTTUwLjgsMjUuMUM1NC43LDQyLjEsMzYsNTUuOCwzNiw1NS44bDcuMyw0LjdoNy40bDEwLjItMTMuMmwtMS41LTguNmwtMy42LTguM0w1My4yLDI2TDUwLjgsMjUuMXoiLz48cGF0aCBjbGFzcz0ic3QyIiBkPSJNNDQuNSw4LjZjMC44LDIuNC0zLjQsNC40LTMuNCw0LjR2NS4xbDMuMywwLjFsMy00LjNsLTAuMy0zLjRMNDUsOC42SDQ0LjV6Ii8+PHBhdGggZD0iTTY1LDcyLjJMNTAuOSw2MS42bDEwLjItMTR2LTAuNGMwLTE0LjEtNy42LTIzLjEtMTIuMi0yNy4zbC0yLjMtMi4zbDIuMS0zLjlsMC4xLTAuM3YtMC41YzAtNC4zLTMuNS03LjktNy45LTcuOSAJYy00LjMsMC03LjgsMy41LTcuOCw3Ljl2MC41bDEuOSwzLjdjLTUuOSw0LjYtMTUuNSwxNC42LTE1LjUsMzAuMXYwLjRsMTAuMiwxNEwxNiw3Mi4ySDY1eiBNMjIuNSw0Ni45Yy0wLjMtMTQuNiw5LjMtMjQsMTUtMjguMiAJbDAuOS0wLjZMMzUuNywxM2MwLTIuOSwyLjQtNS4zLDUuMy01LjNjMi45LDAsNS4zLDIuNCw1LjQsNS4zTDM1LjgsMzQuNnYwLjFsMi4yLDUuOGw5LjMtMTguOGwxLjEsMWM0LjgsNC43LDEwLjQsMTIuNywxMC4xLDI0LjEgCWwtOS4yLDEzSDMxLjhMMjIuNSw0Ni45eiBNMzIuOSw2Mi41SDQ4bDkuOCw3LjNIMjMuMkwzMi45LDYyLjV6Ii8+PHBvbHlsaW5lIHBvaW50cz0iMzYuMiwxOCA0MS4xLDE4IDM4LjQsMjAuMSAzNC42LDIwLjEgIi8+PC9zdmc+',
        'wK': 'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgODEgODEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDgxIDgxOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe2ZpbGw6bm9uZTt9IAkuc3Qxe2ZpbGw6I0ZGRkZGRjt9IAkuc3Qye2ZpbGw6I0NGQ0VDRjt9PC9zdHlsZT48cmVjdCBjbGFzcz0ic3QwIiB3aWR0aD0iODEiIGhlaWdodD0iODEiLz48cGF0aCBjbGFzcz0ic3QxIiBkPSJNNTgsMjUuOWMtNiwwLTkuMSwyLjYtMTAuNiw0LjFsLTcsMTIuMmwtNy0xMi4yQzMyLDI4LjUsMjksMjUuOSwyMywyNS45Yy05LjQsMC0xNC45LDcuNy0xNC45LDE1LjMgCWMwLDguNiwzLjcsMTEuNSw4LjYsMjEuN1Y3MWgyMy44aDIzLjh2LTguMWM0LjktMTAuMSw4LjYtMTMuMSw4LjYtMjEuN0M3Mi45LDMzLjYsNjcuNCwyNS45LDU4LDI1Ljl6Ii8+PHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIzNS4zLDMyLjggNDAuNSw0My41IDQ1LjcsMzIuOCA0Mi42LDIxLjggNTAuNSwyNC4yIDUwLjUsMTYuNiA0Mi42LDE3LjYgNDQuMywxMC4zIDM2LjcsMTAuMyAgCTM4LjQsMTcuNiAzMC41LDE2LjYgMzAuNSwyNC4yIDM4LjQsMjEuOCAiLz48cGF0aCBjbGFzcz0ic3QyIiBkPSJNNjQuNywyNy40QzcxLjgsNDAsNTgsNTguNiw0NS45LDU5LjlsMTkuNCwyLjZsNi42LTEzLjRsMS05LjlMNzEuMiwzNGwtMi42LTMuNkw2NC43LDI3LjR6Ii8+PHBhdGggY2xhc3M9InN0MiIgZD0iTTMzLjYsMzAuMWMxLjEsNS40LTEuNiwxNC42LTUuNCwyMC41UzE3LjcsNjEuNCwxNy43LDYxLjRsMjIuOC0xLjZWNDIuNkwzMy42LDMwLjF6Ii8+PHBvbHlnb24gY2xhc3M9InN0MiIgcG9pbnRzPSI1My4xLDYwLjYgNTMuMSw3MC41IDY0LDcwLjUgNjQsNjIuOSAiLz48cG9seWdvbiBjbGFzcz0ic3QyIiBwb2ludHM9IjQ5LjUsMTcuNyA0OC4yLDIwLjUgNDEuMSwyMC4zIDQ5LjUsMjMuNiA1MC41LDIzLjYgIi8+PHBvbHlnb24gY2xhc3M9InN0MiIgcG9pbnRzPSI0My4xLDExLjMgNDAuNSwxMyA0MC41LDE5LjIgNDIuMSwxOC4yICIvPjxwb2x5Z29uIGNsYXNzPSJzdDIiIHBvaW50cz0iNDEuOCwyMS41IDQxLjgsMzMuMiA0MC41LDQwLjIgNDUsMzQgIi8+PHBvbHlnb24gY2xhc3M9InN0MiIgcG9pbnRzPSIzOS45LDIwLjYgMzAuNSwyMC42IDMwLjUsMjQuMiAiLz48Zz48cG9seWdvbiBwb2ludHM9IjM2LjQsNTEuMiA0MC41LDU3LjIgNDQuNiw1MS4yIDQwLjUsNDUuMiAJIi8+PHBhdGggZD0iTTY5LjgsMjkuOWMtMy0zLjQtNy4yLTUuMi0xMS44LTUuMmMtNC44LDAtOC42LDEuNS0xMS41LDQuNUw0NiwzMGwtMS45LTYuN2w3LjQsMi4yVjE1LjRsLTcuNiwxbDEuNy03LjFIMzUuNGwxLjcsNy4xCWwtNy42LTF2MTAuMWw3LjQtMi4yTDM1LDMwLjFsLTAuNC0wLjdsLTAuMS0wLjJsMC0wLjFjLTIuOS0zLTYuNy00LjUtMTEuNS00LjVjLTEwLjEsMC0xNi4xLDguNC0xNi4xLDE2LjZjMCw2LjQsMiwxMCw0LjgsMTQuOQlsMC42LDFjMSwxLjcsMi4xLDMuNywzLjIsNnY5LjFoNTAuMXYtOS4xYzEuMi0yLjMsMi4yLTQuMywzLjItNmwwLjYtMWMyLjgtNC45LDQuOC04LjUsNC44LTE0LjlDNzQuMiwzNy4xLDcyLjYsMzMsNjkuOCwyOS45eiBNMzkuOSwyMC4zbC04LjQsMi41di01LjFsOC4yLDFsLTEuOC03LjRoNS4ybC0xLjgsNy40bDguMi0xdjUuMWwtOC40LTIuNWwzLjUsMTIuMmwtNC4xLDcuMmwtNC4xLTcuMkwzOS45LDIwLjN6IE02Myw2OS44SDE3LjgJdi02LjVDMjEuNiw2Mi42LDMxLDYxLDQwLjUsNjFjOS4zLDAsMTguNiwxLjUsMjIuNSwyLjJWNjkuOHogTTY3LjIsNTQuOUw2Ny4yLDU0LjljLTEsMS42LTMsNC43LTMuOCw1LjljLTQuMS0wLjctMTMuNC0yLjItMjMtMi4yCWMtOS43LDAtMTkuMiwxLjUtMjMuMSwyLjJjLTAuOC0xLjItMi44LTQuMi0zLjctNS45bC0wLjEtMC4xQzEwLjgsNTAsOS4xLDQ3LDkuMSw0MS4zYzAtOS4xLDctMTQsMTMuNi0xNGM0LDAsNy4yLDEuMiw5LjYsMy42CWw4LDEzLjlsOC0xMy45YzIuNC0yLjQsNS42LTMuNiw5LjYtMy42YzguOSwwLDEzLjcsNy4yLDEzLjcsMTRDNzEuNyw0Nyw3MCw1MCw2Ny4yLDU0Ljl6Ii8+PC9nPjwvc3ZnPg==',
        'wN': 'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzJfMV8iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgODEgODEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDgxIDgxOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe2ZpbGw6I0ZGRkZGRjt9IAkuc3Qxe2ZpbGw6I0NGQ0VDRjt9PC9zdHlsZT48cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDgsNDUuMWMtMy4zLDEuNi03LjIsMS45LTExLDAuN2wtMC40LTAuMWwtMC4zLDAuMmMtMC4xLDAuMS0xMiw5LjktMTUuOCwyMy43bC0wLjMsMC45SDY1TDYzLjIsNjV2LTAuMSAJYzAtMC4xLTAuMS0xNC44LTAuMS0yMy44YzAtMTYuOS03LjYtMjUuNi0xNS0yOC42Yy0zLjctMS40LTkuMi0yLjUtMTIuNC0yLjVoLTEuMmwzLjIsNi4yTDEzLjMsMzYuNWwxLDEwLjhsNSwxLjRsNS4xLTMuOUgyNiAJbC00LjMsNC41bDEuMSwwLjRsNi43LDEuOWw1LjUtNi44YzMuNSwxLjUsNy43LDEuMywxMi41LTAuNmMyLjgtMS4yLDUuMS0zLjYsNi41LTUuNkM1My4xLDQxLjQsNTEsNDMuNyw0OCw0NS4xeiIvPjxwYXRoIGQ9Ik0zOCwyMi4xbC03LjcsNi4yYy0wLjUsMC41LTAuNiwxLjMtMC4yLDEuOWMwLjMsMC40LDAuNywwLjYsMS4xLDAuNmMwLjIsMCwwLjQsMCwwLjYtMC4xbDkuMS0zLjZMMzgsMjIuMXoiLz48cGF0aCBjbGFzcz0ic3QxIiBkPSJNMzguNyw3MC43TDU2LjQsNzFoOC41YzAsMC0yLjEtNS4yLTIuMS03LjJjMC04LjIsMC0yOS45LDAtMzUuMmMwLDguNC0yLjcsMTgtOS41LDI0LjggCUM0MC41LDU3LDM4LjcsNzAuNywzOC43LDcwLjd6Ii8+PHBhdGggY2xhc3M9InN0MSIgZD0iTTM0LjYsNDcuM2wxLjMtMS44bDguOCwwLjhsNC44LTIuMmwzLjktMy40bDIuNC02LjVjLTAuOC0xLjMtMi4yLTIuMS00LTIuOGMtMiw3LjctOC4xLDEyLjMtMTYuMywxMC40IAljLTAuNCwxLjEtMC43LDEuOS0wLjcsMS45bC03LDAuM0wyMiw0OC44bDcsNC41TDM0LjYsNDcuM3oiLz48cGF0aCBkPSJNMTguMiw3Mi4yaDQ5LjFsLTIuNS03LjVjMC0xLjksMC0xNS4xLDAtMjMuNmMwLTYuOC0wLjktMjMuOS0xNi0zMC4xYy01LjgtMi40LTE0LjYtMi42LTE1LTIuNUwzMiw4LjZsMy43LDcuMmwtMjQuMiwyMCAJbDEuMywxMi44bDE0LjUsNC4yYy0zLjUsNC41LTcuMywxMC43LTguOSwxOEwxOC4yLDcyLjJ6IE0zNi43LDQ2LjVjMS41LDAuNSwzLjEsMC44LDQuOCwwLjhjMi40LDAsNC43LTAuNSw2LjgtMS41IAljNC4xLTIsNi44LTUuNiw3LjMtMTAuMWwwLjItMS40bC0wLjYsMS4yYzAsMC4xLTMsNS44LTcuOSw4Yy0zLjksMS42LTguNCwyLjQtMTIuNCwwLjRsLTUuNiw2LjlsLTUuOC0xLjdMMjMuMSw0OWw0LjctNC45aC0zLjcgCWwtNSwzLjhMMTUsNDYuN2wtMC45LTkuOWwyNC42LTIwLjRsLTIuOS01LjZjMi45LDAsOC4zLDAuOSwxMi4xLDIuNGM1LjcsMi4zLDE0LjUsOS42LDE0LjUsMjcuOWMwLDkuMSwwLjEsMjMuOCwwLjEsMjMuOHYwLjIgCWwxLjUsNC43SDIxLjJDMjQuOCw1Ni42LDM1LjksNDcuMSwzNi43LDQ2LjV6Ii8+PC9zdmc+',
        'wP': 'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgODEgODEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDgxIDgxOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe2ZpbGw6I0ZGRkZGRjt9IAkuc3Qxe2ZpbGw6I0NGQ0VDRjt9IAkuc3Qye2ZpbGw6bm9uZTt9IAkuc3Qze2ZpbGw6IzAxMDEwMTt9PC9zdHlsZT48Zz48cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjkuNywzNy44aDIxLjZsLTUuMS02aDAuN2MyLjYtMS45LDQuMy01LjEsNC4zLTguNmMwLTYtNC44LTEwLjctMTAuNy0xMC43cy0xMC43LDQuOC0xMC43LDEwLjcJYzAsMy41LDEuNyw2LjcsNC4zLDguNmgwLjdMMjkuNywzNy44eiIvPjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iNDkuNCw2MC41IDQ1LjEsMzkuOCAzNS4xLDM5LjggMzEuNiw2MC41IDIxLDY5LjkgNjAsNjkuOSAJIi8+PC9nPjxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iNDAuNSw1OS43IDQ3LjgsNzEgNjEuNiw3MSA1MS4yLDYwIDQ5LjgsNTkuMSA0Ni45LDM4LjkgNDAuNSwzOC45ICIvPjxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iNDQuNCwzOCA1Mi41LDM4IDQ3LjIsMzEuNSA0MSwzMS41ICIvPjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik00NSwxMy4zYzMuNyw1LjUsMS4xLDE3LjYtMTAuMiwxNy42Yy0wLjIsMCwxMi4xLDAuNiwxMy4xLTAuM2MxLjktMS45LDMuMS00LjQsMy4xLTcuMyAJQzUxLjEsMTcuMyw0NC44LDEyLjEsNDUsMTMuM3oiLz48cG9seWdvbiBjbGFzcz0ic3QyIiBwb2ludHM9IjMxLjksNjAuNiAyMS42LDY5LjcgNTkuNCw2OS43IDQ5LjIsNjAuNyA0OS4xLDYwLjYgNDQuOSw0MCAzNS4zLDQwICIvPjxwb2x5Z29uIGNsYXNzPSJzdDIiIHBvaW50cz0iNDYuMSwzMiAzNC45LDMyIDMwLjIsMzcuOSA1MC44LDM3LjkgIi8+PHBhdGggY2xhc3M9InN0MiIgZD0iTTQ3LjUsMjkuNWMxLjYtMS43LDIuNS00LDIuNS02LjRjMC01LjMtNC4yLTkuNS05LjUtOS41Yy01LjIsMC05LjUsNC4yLTkuNSw5LjVjMCwyLjQsMC45LDQuNiwyLjUsNi40SDQ3LjV6IiAJLz48cGF0aCBjbGFzcz0ic3QzIiBkPSJNMTUsNzIuMkg2Nkw1MS41LDU5LjRsLTQuMi0yMGg4LjJsLTcuMS04YzIuOS0yLjIsMy42LTUuNiwzLjYtOC4xYzAtNi40LTUtMTEuNC0xMS40LTExLjQgCWMtNi4zLDAtMTEuNCw1LjEtMTEuNCwxMS40YzAsMi41LDAuNiw1LjksMy42LDguMWwtNy4xLDhIMzNsLTMuNCwyMEwxNSw3Mi4yeiBNMzEuNCwyMy4zYzAtNSw0LjEtOS4xLDkuMS05LjFjNS4xLDAsOS4xLDQsOS4xLDkuMSAJYzAsMi4zLTAuOCw0LjQtMi40LDYuMUgzMy44QzMyLjMsMjcuNywzMS40LDI1LjUsMzEuNCwyMy4zeiBNMzUuMiwzMS43aDEwLjdsNC41LDUuNkgzMC43TDM1LjIsMzEuN3ogTTM1LjQsMzkuNGgwLjFoOS4yaDAuMSAJbDQuNCwyMS4ybDAsMC4xbDEwLjIsOUgyMS42bDEwLjItOS4xTDM1LjQsMzkuNHoiLz48L3N2Zz4=',
        'wQ': 'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgODEgODEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDgxIDgxOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe2ZpbGw6bm9uZTt9IAkuc3Qxe2ZpbGw6I0ZGRkZGRjt9IAkuc3Qye2ZpbGw6I0NGQ0VDRjt9IAkuc3Qze2ZpbGw6IzIzMUYyMDt9PC9zdHlsZT48cmVjdCBjbGFzcz0ic3QwIiB3aWR0aD0iODEiIGhlaWdodD0iODEiLz48Zz48Y2lyY2xlIGNsYXNzPSJzdDEiIGN4PSIyMS45IiBjeT0iMTYuNSIgcj0iNS4yIi8+PHBhdGggY2xhc3M9InN0MSIgZD0iTTU5LjEsMjEuOGMyLjksMCw1LjItMi4zLDUuMi01LjJzLTIuMy01LjItNS4yLTUuMnMtNS4yLDIuMy01LjIsNS4yUzU2LjIsMjEuOCw1OS4xLDIxLjh6Ii8+PHBhdGggY2xhc3M9InN0MSIgZD0iTTcyLjEsMjYuNGMtMi45LDAtNS4yLDIuMy01LjIsNS4yYzAsMS40LDAuNiwyLjgsMS41LDMuN0w1NS4yLDUwLjVsMy4zLTI4LjdsLTIuMS0wLjZsLTkuOCwxNi45bC01LjEtMjEuNwloLTEuMWgtMS4xbC01LjEsMjEuN2wtOS44LTE2LjlsLTIuMSwwLjZsMy4zLDI4LjdsLTEzLTE1LjJjMC45LTAuOSwxLjUtMi4zLDEuNS0zLjdjMC0yLjktMi4zLTUuMi01LjItNS4ycy01LjIsMi4zLTUuMiw1LjIJczIuMyw1LjIsNS4yLDUuMmMwLjUsMCwxLTAuMSwxLjUtMC4yTDE5LjUsNzFoNDIuMWw5LjEtMzQuNGMwLjUsMC4xLDEsMC4yLDEuNSwwLjJjMi45LDAsNS4yLTIuMyw1LjItNS4yUzc1LDI2LjQsNzIuMSwyNi40eiIvPjxjaXJjbGUgY2xhc3M9InN0MSIgY3g9IjQwLjUiIGN5PSIxMS4zIiByPSI1LjIiLz48L2c+PGc+PHBhdGggY2xhc3M9InN0MiIgZD0iTTQ4LjQsMzMuNiIvPjxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0zNC41LDMzLjYiLz48cG9seWdvbiBjbGFzcz0ic3QyIiBwb2ludHM9IjQxLjQsMjAuMyA0Ni43LDM4LjIgNDEuNCw0NS41IAkiLz48cG9seWdvbiBjbGFzcz0ic3QyIiBwb2ludHM9IjI3LjEsNTMuNiAyMy42LDYwLjQgMTMuOSwzOC4zIAkiLz48cG9seWdvbiBjbGFzcz0ic3QyIiBwb2ludHM9IjM0LDUwLjUgMjQuOCwyMi44IDQwLjUsNTAuOSAJIi8+PHBvbHlnb24gY2xhc3M9InN0MiIgcG9pbnRzPSI0OC4yLDUwLjUgNTcuNSwyNS44IDUzLjksNTMuNiAJIi8+PHBvbHlnb24gY2xhc3M9InN0MiIgcG9pbnRzPSI1Mi45LDcwLjQgNjguNSwzNi43IDcwLDM3IDYwLjcsNzAuNCAJIi8+PC9nPjxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik03My4zLDM2LjdjMy40LTAuOSwzLjktMy40LDQtNi43YzAtMC42LTAuOS0xLjgtMS4zLTEuOGMtMC40LDAuMS0wLjgsMC4xLTEuMiwwLjNjMC4zLDIuNS0xLjMsNS0zLjgsNS43IAljLTEuMSwwLjMtMi4xLDAuMi0zLjEtMC4xQzY3LjMsMzUuMSw3MS44LDM3LjEsNzMuMywzNi43eiIvPjxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik02MCwyMS4zYzMuNC0wLjksMy45LTMuNCw0LTYuN2MwLTAuNi0wLjktMS44LTEuMy0xLjhjLTAuNCwwLjEtMC44LDAuMS0xLjIsMC4zYzAuMywyLjUtMS4zLDUtMy44LDUuNyAJYy0xLjEsMC4zLTIuMSwwLjItMy4xLTAuMUM1NCwxOS43LDU4LjUsMjEuNyw2MCwyMS4zeiIvPjxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0xMC4xLDM2LjdjMy40LTAuOSwzLjktMy40LDQtNi43YzAtMC42LTAuOS0xLjgtMS4zLTEuOGMtMC40LDAuMS0wLjgsMC4xLTEuMiwwLjNjMC4zLDIuNS0xLjMsNS0zLjgsNS43IAljLTEuMSwwLjMtMi4xLDAuMi0zLjEtMC4xQzQuMSwzNS4xLDguNiwzNy4xLDEwLjEsMzYuN3oiLz48cGF0aCBjbGFzcz0ic3QyIiBkPSJNMjMuMSwyMS4zYzMuNC0wLjksMy45LTMuNCw0LTYuN2MwLTAuNi0wLjktMS44LTEuMy0xLjhjLTAuNCwwLjEtMC44LDAuMS0xLjIsMC4zYzAuMywyLjUtMS4zLDUtMy44LDUuNyAJYy0xLjEsMC4zLTIuMSwwLjItMy4xLTAuMUMxNy4xLDE5LjcsMjEuNiwyMS43LDIzLjEsMjEuM3oiLz48cGF0aCBjbGFzcz0ic3QyIiBkPSJNNDEuNiwxNi4xYzMuNC0wLjksMy45LTMuNCw0LTYuN2MwLTAuNi0wLjktMS44LTEuMy0xLjhjLTAuNCwwLjEtMC44LDAuMS0xLjIsMC4zYzAuMywyLjUtMS4zLDUtMy44LDUuNyAJYy0xLjEsMC4zLTIuMSwwLjItMy4xLTAuMUMzNS42LDE0LjYsNDAuMSwxNi41LDQxLjYsMTYuMXoiLz48cG9seWdvbiBjbGFzcz0ic3QzIiBwb2ludHM9IjQwLjUsNjUuNyAzNi42LDU5LjggNDAuNSw1NCA0NC40LDU5LjggIi8+PGc+PGNpcmNsZSBjbGFzcz0ic3QxIiBjeD0iMjEuOSIgY3k9IjE2LjUiIHI9IjUuMiIvPjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik01OS4xLDIxLjhjMi45LDAsNS4yLTIuMyw1LjItNS4ycy0yLjMtNS4yLTUuMi01LjJzLTUuMiwyLjMtNS4yLDUuMlM1Ni4yLDIxLjgsNTkuMSwyMS44eiIvPjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik03Mi4xLDI2LjRjLTIuOSwwLTUuMiwyLjMtNS4yLDUuMmMwLDEuNCwwLjYsMi44LDEuNSwzLjdMNTUuMiw1MC41bDMuMy0yOC43bC0yLjEtMC42bC05LjgsMTYuOWwtNS4xLTIxLjcJaC0xLjFoLTEuMWwtNS4xLDIxLjdsLTkuOC0xNi45bC0yLjEsMC42bDMuMywyOC43bC0xMy0xNS4yYzAuOS0wLjksMS41LTIuMywxLjUtMy43YzAtMi45LTIuMy01LjItNS4yLTUuMnMtNS4yLDIuMy01LjIsNS4yCXMyLjMsNS4yLDUuMiw1LjJjMC41LDAsMS0wLjEsMS41LTAuMkwxOS41LDcxaDQyLjFsOS4xLTM0LjRjMC41LDAuMSwxLDAuMiwxLjUsMC4yYzIuOSwwLDUuMi0yLjMsNS4yLTUuMlM3NSwyNi40LDcyLjEsMjYuNHoiLz48Y2lyY2xlIGNsYXNzPSJzdDEiIGN4PSI0MC41IiBjeT0iMTEuMyIgcj0iNS4yIi8+PC9nPjxnPjxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik00OC40LDMzLjYiLz48cGF0aCBjbGFzcz0ic3QyIiBkPSJNMzQuNSwzMy42Ii8+PHBvbHlnb24gY2xhc3M9InN0MiIgcG9pbnRzPSI0MS40LDIwLjMgNDYuNywzOC4yIDQxLjQsNDUuNSAJIi8+PHBvbHlnb24gY2xhc3M9InN0MiIgcG9pbnRzPSIyNy4xLDUzLjYgMjMuNiw2MC40IDEzLjksMzguMyAJIi8+PHBvbHlnb24gY2xhc3M9InN0MiIgcG9pbnRzPSIzNCw1MC41IDI0LjgsMjIuOCA0MC41LDUwLjkgCSIvPjxwb2x5Z29uIGNsYXNzPSJzdDIiIHBvaW50cz0iNDguMiw1MC41IDU3LjUsMjUuOCA1My45LDUzLjYgCSIvPjxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik00Mi4xLDcwLjRDNjIsNjUuNyw2OC41LDM2LjcsNjguNSwzNi43TDcwLDM3bC05LjMsMzMuNEM2MC43LDcwLjQsNTIuOCw3MC40LDQyLjEsNzAuNHoiLz48L2c+PHBhdGggY2xhc3M9InN0MiIgZD0iTTczLjMsMzYuN2MzLjQtMC45LDMuOS0zLjQsNC02LjdjMC0wLjYtMC45LTEuOC0xLjMtMS44Yy0wLjQsMC4xLTAuOCwwLjEtMS4yLDAuM2MwLjMsMi41LTEuMyw1LTMuOCw1LjcgCWMtMS4xLDAuMy0yLjEsMC4yLTMuMS0wLjFDNjcuMywzNS4xLDcxLjgsMzcuMSw3My4zLDM2Ljd6Ii8+PHBhdGggY2xhc3M9InN0MiIgZD0iTTYwLDIxLjNjMy40LTAuOSwzLjktMy40LDQtNi43YzAtMC42LTAuOS0xLjgtMS4zLTEuOGMtMC40LDAuMS0wLjgsMC4xLTEuMiwwLjNjMC4zLDIuNS0xLjMsNS0zLjgsNS43IAljLTEuMSwwLjMtMi4xLDAuMi0zLjEtMC4xQzU0LDE5LjcsNTguNSwyMS43LDYwLDIxLjN6Ii8+PHBhdGggY2xhc3M9InN0MiIgZD0iTTEwLjEsMzYuN2MzLjQtMC45LDMuOS0zLjQsNC02LjdjMC0wLjYtMC45LTEuOC0xLjMtMS44Yy0wLjQsMC4xLTAuOCwwLjEtMS4yLDAuM2MwLjMsMi41LTEuMyw1LTMuOCw1LjcgCWMtMS4xLDAuMy0yLjEsMC4yLTMuMS0wLjFDNC4xLDM1LjEsOC42LDM3LjEsMTAuMSwzNi43eiIvPjxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0yMy4xLDIxLjNjMy40LTAuOSwzLjktMy40LDQtNi43YzAtMC42LTAuOS0xLjgtMS4zLTEuOGMtMC40LDAuMS0wLjgsMC4xLTEuMiwwLjNjMC4zLDIuNS0xLjMsNS0zLjgsNS43IAljLTEuMSwwLjMtMi4xLDAuMi0zLjEtMC4xQzE3LjEsMTkuNywyMS42LDIxLjcsMjMuMSwyMS4zeiIvPjxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik00MS42LDE2LjFjMy40LTAuOSwzLjktMy40LDQtNi43YzAtMC42LTAuOS0xLjgtMS4zLTEuOGMtMC40LDAuMS0wLjgsMC4xLTEuMiwwLjNjMC4zLDIuNS0xLjMsNS0zLjgsNS43IAljLTEuMSwwLjMtMi4xLDAuMi0zLjEtMC4xQzM1LjYsMTQuNiw0MC4xLDE2LjUsNDEuNiwxNi4xeiIvPjxwb2x5Z29uIHBvaW50cz0iNDAuNSw2NS43IDM2LjYsNTkuOCA0MC41LDU0IDQ0LjQsNTkuOCAiLz48cGF0aCBkPSJNNzIuMSwyNS4xYy0zLjYsMC02LjQsMi45LTYuNCw2LjVjMCwxLjMsMC40LDIuNiwxLjEsMy43bC0xMC41LDEzbDMuNC0yNS40YzMuMy0wLjMsNS45LTMuMSw1LjktNi40YzAtMy42LTIuOS02LjUtNi41LTYuNSAJcy02LjUsMi45LTYuNSw2LjVjMCwxLjksMC44LDMuNywyLjMsNWwtNy44LDEzLjRMNDMsMTcuM2MyLjMtMSwzLjktMy40LDMuOS02YzAtMy42LTIuOS02LjQtNi40LTYuNGMtMy42LDAtNi41LDIuOS02LjUsNi40IAljMCwyLjYsMS41LDQuOSwzLjksNmwtNC4xLDE3LjZMMjYsMjEuNWMxLjUtMS4yLDIuMy0zLjEsMi4zLTVjMC0zLjYtMi45LTYuNS02LjUtNi41cy02LjUsMi45LTYuNSw2LjVjMCwzLjMsMi42LDYuMSw1LjksNi40IAlsMy40LDI1LjRsLTEwLjQtMTNjMC43LTEsMS4xLTIuMywxLjEtMy43YzAtMy42LTIuOS02LjUtNi41LTYuNVMyLjQsMjgsMi40LDMxLjZTNS4zLDM4LDguOCwzOGgwLjVsOSwzNHYwLjJoNDRsOS0zNC4yaDAuNSAJYzMuNiwwLDYuNC0yLjksNi40LTYuNEM3OC4zLDI4LDc1LjYsMjUuMSw3Mi4xLDI1LjF6IE0xMy4xLDMxLjZjMCwyLjMtMS45LDQuMS00LjIsNC4xcy00LjEtMS44LTQuMS00LjFzMS45LTQuMiw0LjEtNC4yIAlDMTEuMiwyNy40LDEzLjEsMjkuMywxMy4xLDMxLjZ6IE0yMS45LDIwLjhjLTIuMywwLTQuMS0xLjktNC4xLTQuMnMxLjktNC4yLDQuMS00LjJjMi4zLDAsNC4yLDEuOSw0LjIsNC4yIAlDMjYuMSwxOC44LDI0LjIsMjAuOCwyMS45LDIwLjh6IE01NSwxNi41YzAtMi4zLDEuOS00LjIsNC4xLTQuMmMyLjMsMCw0LjIsMS45LDQuMiw0LjJzLTEuOSw0LjItNC4yLDQuMkM1Ni44LDIwLjgsNTUsMTguOSw1NSwxNi41IAl6IE0yMC40LDY5LjhsLTguNi0zMi40YzAuMS0wLjEsMC4yLTAuMSwwLjMtMC4xczAuMi0wLjEsMC4zLTAuMWwxNS4xLDE3LjNsLTMuNy0zMS42aDAuMUw0MC4zLDUxbDAuMiwwLjRsMTYuNi0yOC43aDAuMWwtMy43LDMxLjYgCUw2OC42LDM3YzAuMiwwLjEsMC40LDAuMiwwLjYsMC4zbC04LjYsMzIuNUgyMC40eiBNNzYuMywzMS42YzAsMi4zLTEuOSw0LjEtNC4yLDQuMWMtMi4zLDAtNC4xLTEuOC00LjEtNC4xczEuOS00LjIsNC4xLTQuMiAJQzc0LjQsMjcuNCw3Ni4zLDI5LjMsNzYuMywzMS42eiBNNDAuNSw0Ni4zTDM1LjcsMzhsNC43LTIwLjJoMC4zTDQ1LjMsMzhMNDAuNSw0Ni4zeiBNNDAuNSwxNS41Yy0yLjMsMC00LjItMS45LTQuMi00LjIgCXMxLjktNC4xLDQuMi00LjFzNC4yLDEuOSw0LjIsNC4xQzQ0LjgsMTMuNiw0Mi44LDE1LjUsNDAuNSwxNS41eiIvPjwvc3ZnPg==',
        'wR': 'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgODEgODEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDgxIDgxOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe2ZpbGw6I0ZGRkZGRjt9IAkuc3Qxe2ZpbGw6I0NGQ0VDRjt9PC9zdHlsZT48cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjU4LjcsNTkuNCA1NS41LDMyLjEgNjQuMSwyMy45IDY0LjEsMjMuOSA2NC4xLDEyLjggNTMsMTIuOCA1MywyMC45IDQ2LjMsMjAuOSA0Ni4zLDEyLjggMzQuNywxMi44ICAJMzQuNywyMC45IDI4LDIwLjkgMjgsMTIuOCAxNi45LDEyLjggMTYuOSwyMy45IDI1LjUsMzIuMSAyMi4zLDU5LjQgMTUuNyw1OS40IDE1LjcsNzEgMTkuOCw3MSA2MS4xLDcxIDYxLjIsNzEgNjUuMyw3MSA2NS4zLDU5LjQgIAkiLz48cGF0aCBjbGFzcz0ic3QxIiBkPSJNNTguNSw1OS43bC00LjItMjcuMmgyLjJsNy42LTguNlYxMi44bC01LjgsNC42djguMkgzMmwxMS42LDYuOWgzLjJjMCwxMi4xLTIuOCwyMS4zLTExLjcsMjcuMmgxMy4zTDU0LjUsNzAgCWg5LjlWNTkuN0g1OC41eiIvPjxwYXRoIGQ9Ik01OS4xLDU4LjFsLTIuNi0yNC44bDguNy05VjExLjVINTEuOHY4LjJoLTQuMnYtOC4ySDMzLjV2OC4yaC00LjJ2LTguMkgxNS42djEyLjlsOC43LDlsLTIuNiwyNC44bDAsMGgtNy4zdjE0LjFoNTEuOFY3MiAJbDAsMGgwLjJWNTguMUg1OS4xeiBNMzYsMjIuMlYxNGg5djguMmg5LjJWMTRoOC41djkuM0w1NC40LDMySDI2LjVsLTguNC04LjZWMTRoOC42djguMkgzNnogTTU0LDM0LjRsMi42LDIzLjdIMjQuM2wyLjYtMjMuN0g1NHogTTU2LjksNjAuNkg2MGg0djkuMUgxN3YtOS4xaDQuOEgyNEMyNCw2MC42LDU2LjksNjAuNiw1Ni45LDYwLjZ6Ii8+PC9zdmc+'
    },
    'merida': {
        'bB': 'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNzcuMTciIGhlaWdodD0iMTc3LjE3IiBzaGFwZS1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiIgaW1hZ2UtcmVuZGVyaW5nPSJvcHRpbWl6ZVF1YWxpdHkiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiB2aWV3Qm94PSIwIDAgNTAgNTAiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iMCIgeDE9IjIxLjA5IiB5MT0iMzcuMSIgeDI9Ijc3LjY3IiB5Mj0iMzcuNDY5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iI2ZmZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIwIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZD0ibTI1IDQyLjE2Yy0uMjI5Ljk0LS41MTcgMS41OTItLjg0NyAxLjk1Ni0uMzMuMzY0LS43NjIuNzQ1LTEuMzEyIDEuMTQzLS41OTMuNDE1LTEuMjk1Ljc2Mi0yLjEwOCAxLjA1LS44MTMuMjg4LTEuNzEuMzY0LTIuNzAxLjIxMmwtNi45NjgtLjk2NWMtLjI4OC0uMDM0LS41MzMtLjAzNC0uNzYyIDAtLjIyLjAzNC0uNDMyLjA1MS0uNjM1LjA1MS0uMzQ3IDAtLjc4Ny4wNzYtMS4zMjEuMjM3LS41NDIuMTUyLS45NTcuMzgxLTEuMjUzLjY3N2wtMi40MDQtMy45NDZjLjI5Ni0uMzMuNTU5LS41NTkuNzg3LS42OTQuMjM3LS4xMjcuNTA4LS4yNzEuODIxLS40MTUuOTU3LS40NDkgMS45ODEtLjcyIDMuMDczLS44MjEuNDY2LS4wMzQuOTIzLS4wNDIgMS4zNjMtLjAyNS40NDkuMDE3LjkxNCAwIDEuMzk3LS4wNTEuODg5LjE1MiAxLjc4Ni4yODggMi42ODQuNDA2LjkwNi4xMjcgMS44MTIuMjU0IDIuNzE4LjM5Ljk5MSAwIDEuNjYtLjEwMiAyLjAxLS4yOTYuMTg2LS4xMDIuNDc0LS4yODguODcyLS41NS4zOTgtLjI2Mi43OTYtLjY1MiAxLjE5NC0xLjE2OC0uODgxLS4wOTMtMS43Ny0uMjYyLTIuNjg0LS41MDgtLjkwNi0uMjM3LTEuNzEtLjQ5MS0yLjQwNC0uNzU0bDIuNTgyLTYuNDAxYy0xLjI5NS0uNzQ1LTIuMTkzLTEuMzM4LTIuNzA5LTEuNzk1LS41MDgtLjQ1Ny0uOTE0LS45ODItMS4yMTEtMS41NzUtLjQzMi0uNzYyLS43MTEtMS40OTktLjgzLTIuMjEtLjEyNy0uNzExLS4xNzgtMS4zNDYtLjE2MS0xLjkxMy4wMTctLjk5MS4yNDUtMi4wODMuNzAzLTMuMjg1LjQ1Ny0xLjE5NCAxLjMxMi0yLjI2OSAyLjU2NS0zLjIwOSAxLjA0MS0uNzk2IDIuMDY2LTEuNjE3IDMuMDU3LTIuNDU1Ljk5MS0uODQ3IDEuOTczLTEuODI5IDIuOTQ2LTIuOTU1LTEuMjE5LS42MjctMS44MjktMS42MjYtMS44MjktMi45OTcgMC0uOTMxLjMyMi0xLjcxOS45NzQtMi4zODguNjUyLS42NiAxLjQ1Ni0uOTkxIDIuMzk2LS45OTEuOTIzIDAgMS43MTkuMzMgMi4zNzkuOTkxLjY2LjY2OS45OTEgMS40NTYuOTkxIDIuMzg4IDAgMS4zNTUtLjYxIDIuMzU0LTEuODI5IDIuOTk3Ljk1NyAxLjEyNiAxLjkzIDIuMTA4IDIuOTEzIDIuOTU1Ljk4Mi44MzggMi4wMiAxLjY1OSAzLjA5IDIuNDU1IDEuMjM2Ljk0IDIuMDgzIDIuMDEgMi41MjMgMy4yMDkuNDQ5IDEuMjAyLjY5NCAyLjI5NS43MiAzLjI4NSAwIC41NjctLjA1MSAxLjIwMi0uMTY5IDEuOTEzLS4xMTguNzExLS4zODEgMS40NDgtLjc5NiAyLjIxLS4zMy41OTMtLjc0NSAxLjExOC0xLjI1MyAxLjU3NS0uNS40NTctMS4zODkgMS4wNS0yLjY2NyAxLjc5NWwyLjU4MiA2LjQwMWMtLjcyOC4yNjMtMS41NDkuNTE3LTIuNDU1Ljc1NC0uOTE0LjI0Ni0xLjc4Ny40MTUtMi42MzMuNTA4LjM4MS41MTcuNzcxLjkwNiAxLjE2OCAxLjE2OC4zOTguMjYzLjY5NC40NDkuODk3LjU1LjM0Ny4xOTUgMS4wMTYuMjk2IDIuMDEuMjk2Ljg4OS0uMTM2IDEuNzg3LS4yNjMgMi42OTItLjM5Ljg5OC0uMTE4IDEuODAzLS4yNTQgMi43MTgtLjQwNi40NC4wNTEuODg5LjA2OCAxLjM0Ni4wNTEuNDU3LS4wMTcuOTIzLS4wMDggMS40MDYuMDI1IDEuMDU4LjEwMiAyLjA4My4zNzMgMy4wNzMuODIxLjI5Ni4xNDQuNTY3LjI4OC44MDQuNDE1LjI0NS4xMzUuNTA4LjM2NC44MDQuNjk0bC0yLjQzIDMuOTQ2Yy0uMjk2LS4yOTYtLjcxMS0uNTI1LTEuMjUzLS42NzctLjUzMy0uMTYxLS45NjUtLjIzNy0xLjI5NS0uMjM3LS4yMiAwLS40NC0uMDE3LS42Ni0uMDUxLS4yMi0uMDM0LS40NzQtLjAzNC0uNzU0IDBsLTYuOTUxLjk2NWMtLjk5MS4xNTItMS45MTMuMDg1LTIuNzYtLjE5NS0uODU1LS4yNzktMS41NTgtLjY1Mi0yLjEtMS4xMTgtLjU0Mi0uNDQ5LS45ODItLjgzLTEuMzA0LTEuMTUxLS4zMjItLjMyMi0uNTkzLS45NTctLjgwNC0xLjg5NyIgZmlsbD0iIzFmMWExNyIvPjxwYXRoIGQ9Im0yNC4wOSAyMy43MDV2Mi4xMDhjMCAuNjEuMzA1LjkxNC45MTQuOTE0LjYxIDAgLjkxNC0uMzA1LjkxNC0uOTE0di0yLjEzNGgyLjIzNWMuNTc2IDAgLjg3Mi0uMjk2Ljg3Mi0uODk3IDAtLjU5My0uMjk2LS44ODktLjg3Mi0uODg5aC0yLjIzNXYtMi4yMzVjMC0uNjEtLjMwNS0uOTE0LS45MTQtLjkxNC0uNjEgMC0uOTE0LjMwNS0uOTE0LjkxNHYyLjIzNWgtMi4xODRjLS41ODQgMC0uODcyLjI5Ni0uODcyLjg4OSAwIC42MDEuMjg4Ljg5Ny44NzIuODk3bDIuMTg0LjAyNW03LjUxIDEzLjc0MWwtMS4wNDEtMi41MzFjLTEuNjg1LS4zNjQtMy41MzktLjU0Mi01LjU1NC0uNTQyLTEuOTk4IDAtMy44MzUuMTc4LTUuNTAzLjU0MmwtMS4wNDEgMi41MDZjMi4wNDktLjUxNiA0LjIzMy0uNzcgNi41NDUtLjc3IDIuMjg2IDAgNC40NzkuMjYyIDYuNTk2Ljc5Nm0tMi4wODMtNS4xMTRsLS43Mi0xLjczNnYtLjY2OWMtMS4yNTMtLjE3OC0yLjUyMy0uMjcxLTMuNzkzLS4yNzEtMS4yMzYgMC0yLjQ5OC4wOTMtMy43NjguMjcxbC0uMDI1LjY2OS0uNjY5IDEuNzM2YzEuNDA1LS4yNDYgMi44ODctLjM3MyA0LjQ2Mi0uMzczIDEuNTkyIDAgMy4wOS4xMjcgNC41MTMuMzczbS0uODY0IDkuMzgxYy0uNjYtLjQ5OS0xLjMyOS0xLjI4Ny0xLjk5LTIuMzYyaC0uNzg3YzAgLjgxMy4xODYgMS42LjU2NyAyLjM2MmgyLjIxbS01LjExNCAwYy4zODEtLjgxMy41NzYtMS42LjU3Ni0yLjM2MmgtLjc5NmMtLjY0MyAxLjA1OC0xLjMxMiAxLjg0Ni0yLjAyIDIuMzYyaDIuMjM1IiBmaWxsPSJ1cmwoIzApIi8+PC9zdmc+',
        'bK': 'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNzcuMTciIGhlaWdodD0iMTc3LjE3IiBzaGFwZS1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiIgaW1hZ2UtcmVuZGVyaW5nPSJvcHRpbWl6ZVF1YWxpdHkiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiB2aWV3Qm94PSIwIDAgNTAgNTAiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iMCIgeDE9IjIxLjEzIiB5MT0iMzcuMjIiIHgyPSI3Ny43NiIgeTI9IjM3LjQ2OSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiNmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iMCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxnIGZpbGw9IiMxZjFhMTciPjxwYXRoIGQ9Im0yNS44MjEgMTIuMDJoLTEuNzYxdi0zLjI1MWgtMi4wNjZjLS41NTkgMC0uODM4LS4yNzEtLjgzOC0uODIxdi0uMDI1YzAtLjU0Mi4yNzktLjgxMy44MzgtLjgxM2gyLjA2NnYtMi4xMDhjMC0uNTg0LjI5Ni0uODcyLjg4OS0uODcyLjU3NiAwIC44NzIuMjg4Ljg3Mi44NzJ2Mi4xMDhoMi4xMzRjLjU0MiAwIC44MTMuMjcxLjgxMy44MTN2LjAyNWMwIC41NS0uMjcxLjgyMS0uODEzLjgyMWwtMi4xMTcuMDI1LS4wMTcgMy4yMjYiLz48cGF0aCBkPSJtMTEuMDMgMzcuNzQ0bC0uODEzLTQuNjRjLS4wMTcgMC0uMDQyLS4wMzQtLjA3Ni0uMTAyLS4wODUtLjExOC0uMzIyLS4yNzEtLjcxMS0uNDU3LS4zODEtLjE5NS0uODM4LS41MTYtMS4zNDYtLjk4Mi0uNzI4LS42MS0xLjI5NS0xLjEwOS0xLjcwMi0xLjQ5LS40MDYtLjM3My0uNzcxLS43ODctMS4xMDEtMS4yMzYtMS4wMS0xLjM4OS0xLjU3NS0zLjA2NS0xLjY4NS01LjA0LS4xNjktMS44OTcuNjAxLTMuNzkzIDIuMzAzLTUuNjgxIDEuNzE5LTEuODggNC4wNDctMi43NjkgNi45NjgtMi42NSAxLjA5Mi4wNjggMi4zNzkuMzMgMy44NDQuNzk2LjQ4My4xOTUuOTc0LjM5IDEuNDgyLjU3Ni41LjE5NS45OTkuMzg5IDEuNDk5LjU4NC4yNjIuMTM1LjUuMjcxLjY5NC4zOTgtLjA4NS0uMzQ3LS4xMjctLjY5NC0uMTI3LTEuMDQxIDAtMS4yODcuNDU3LTIuMzg4IDEuMzgtMy4zMDIuOTE0LS45MDYgMi4wMjQtMS4zNzIgMy4zMTEtMS4zODkgMS4yODcgMCAyLjM4OC40NjYgMy4zMDIgMS4zOC45MDYuOTE0IDEuMzYzIDIuMDIgMS4zNjMgMy4yODUgMCAuMjYyLS4wMzQuNjEtLjEwMiAxLjA0MS4yMjktLjE0NC40NTctLjI3MS42NjktLjM3Mi43NjItLjMzIDEuNzYxLS43MiAzLjAxLTEuMTYgMS40MjItLjQ4MyAyLjcwMS0uNzU0IDMuODQ0LS44MjEgMi45MjEtLjEzNiA1LjI0MS43NTQgNi45NDMgMi42NSAxLjY2OCAxLjg4OCAyLjQ0NyAzLjc4NSAyLjMyOCA1LjY4MS0uMTI3IDEuOTczLS43MDMgMy42NDktMS43MSA1LjA0LS4zMy40NDktLjcwMy44NjQtMS4xMTggMS4yNTMtLjQwNi4zOS0uOTY1Ljg4MS0xLjY2IDEuNDczLS41NDIuNDY2LTEuMDEuNzk2LTEuMzg5Ljk4Mi0uMzgxLjE4Ni0uNjAxLjM0Ny0uNjY5LjQ1Ny0uMDE3LjAzNC0uMDM0LjA1OS0uMDUxLjA3Ni0uMDE3LjAxNy0uMDI1LjAzNC0uMDI1LjA1MWwtLjc5NiA0LjY2NSAxLjY0MyA2LjEyMWMtLjgzLjc0NS0yLjY4NCAxLjM1NS01LjU1NCAxLjgzNy0yLjg3OS40ODMtNi4yMDYuNzItOS45NzQuNzItMy44MzUgMC03LjIxNC0uMjU0LTEwLjExOC0uNzU0LTIuOTEyLS41MDgtNC43NDEtMS4xNDMtNS40ODYtMS44OTdsMS42MzQtNi4wNSIvPjwvZz48cGF0aCBmaWxsPSJ1cmwoIzApIiBkPSJtMjQuOTQ5IDIwLjY3NWMtLjAzNC0uMTYxLS4wNzYtLjMwNS0uMTI3LS40MjMtLjA5My0uMzMtLjE3OC0uNTY3LS4yNDUtLjcyLS4wNTEtLjExLS4xMTktLjI1NC0uMTk1LS40MzItLjA4NS0uMTY5LS4xNjktLjM1Ni0uMjU0LS41NTktLjA1MS0uMTE5LS4xMS0uMjcxLS4xODYtLjQ1Ny0uMDY4LS4xOTUtLjEzNi0uMzczLS4xODYtLjUzMy0uMDQyLS4xNTItLjA2OC0uMzA1LS4wNjgtLjQ3NCAwLS44NzIuNDE1LTEuMzEyIDEuMjYyLTEuMzEyLjg4MSAwIDEuMzEyLjQzMiAxLjMxMiAxLjI4NyAwIC4yMi0uMDM0LjM3My0uMDkzLjQ3NC0uMjM3LjYyNy0uMzU2Ljk2NS0uMzcyIDEuMDE2LS4yNTQuNS0uNDA2LjgyMS0uNDc0Ljk2NS0uMTE5LjI3MS0uMTk1LjUwOC0uMjIuNzItLjA1MS4xMDItLjA4NS4xODYtLjEwMi4yNjItLjAxNy4wNzYtLjAzNC4xMzYtLjA1MS4xODZtLTIuNzc3IDguNTZjLTIuMDY2LjAzNC0zLjk1NC4xMzUtNS42NzMuMzIyLTEuNzEuMTc4LTMuMDMuNDQtMy45NzkuNzctLjQ5MS0uNjE4LTEuMDY3LTEuMjI4LTEuNzE5LTEuODU0LS42Ni0uNjE4LTEuMjI4LTEuMjAyLTEuNzI3LTEuNzQ0LS44My0uODQ3LTEuMjM2LTEuNzctMS4yMzYtMi43NzcgMC0xLjI0NS4yMDMtMi4xNTEuNjE4LTIuNzI2LjQ0LS42NjkgMS4xMzUtMS4xNiAyLjA1Ny0xLjQ4Mi45MjMtLjMyMiAxLjg2My0uNDgzIDIuODAzLS40ODMgMS4xOTQgMCAyLjMyOC4yNjIgMy40Mi43OTYgMS4wNzUuNTU5IDEuNzg3IDEuMDEgMi4xMzQgMS4zMzggMS4xMjYgMS4xNDMgMi4wMSAyLjM3OSAyLjYzMyAzLjcxNy4yMTIuNS4zNzIgMS4xOTQuNDgzIDIuMDc0LjExLjg4OS4xNjkgMS41NjYuMTg2IDIuMDQ5bTIuNzc3LTQuMzE4Yy4xMTktLjQ2Ni4yMTItLjc4Ny4yOTYtLjk2NS4xNjktLjY0My4zNTYtMS4xOTQuNTc2LTEuNjQzLjA5My0uMjc5LjIzNy0uNjAxLjQzMi0uOTc0LjE4Ni0uMzczLjM4OS0uODA0LjYxLTEuMjc5LjEyNy0uMjc5LjI3MS0uNjI3LjQxNS0xLjAzMy4xNTItLjQwNi4zMDUtLjgwNC40NDktMS4yMDIuMTM1LS4zMy4yMDMtLjY4Ni4yMDMtMS4wNjcgMC0uODEzLS4yOTYtMS40OTktLjg3Mi0yLjA2Ni0uNTc2LS41NzYtMS4yNzktLjg2NC0yLjEwOC0uODY0LTEuOTY0IDAtMi45NTUuOTkxLTIuOTU1IDIuOTU1IDAgLjM4MS4wNjguNzM3LjIwMyAxLjA2Ny4zNjQgMS4wNzUuNjQzIDEuODIuODM4IDIuMjM1LjIyLjQ3NC40MTUuOTA2LjYwMSAxLjI3OS4xNzguMzcyLjMzOS42OTQuNDY2Ljk3NC4yMi41NS4zOTggMS4wOTIuNTUgMS42NDMuMDM0LjA5My4xMjcuNDE1LjI5Ni45NG0tLjg4OSA2LjIyM2MwLS42Ni0uMDE3LTEuNTc1LS4wNTEtMi43MzUtLjAzNC0xLjE2OC0uMTYxLTIuMTQyLS4zNzItMi45MjEtLjY3Ny0yLjIxLTEuNzAyLTMuOTk2LTMuMDgyLTUuMzUxLS43MTEtLjY5NC0xLjc5NS0xLjM0Ni0zLjI2OC0xLjkzOS0xLjY4NS0uNjYtMy4yODUtLjk5MS00Ljc5Mi0uOTkxLTIuNjA4IDAtNC41NDcuOTMxLTUuOCAyLjgwMy0uNzExLjk5MS0xLjA2NyAyLjIzNS0xLjA2NyAzLjcxNyAwIDEuNjI2LjM5OCAyLjk1NSAxLjE4NSAzLjk5Ni40MTUuNTkzIDEuMjExIDEuMzI5IDIuMzg4IDIuMjEgMS4xNjguODcyIDIuMTY4IDEuNjg1IDIuOTcyIDIuNDMgMS40MzktLjMxMyAzLjA2NS0uNTg0IDQuODc3LS44MjEgMS44MTItLjIyOSA0LjE0OS0uMzY0IDcuMDEtLjM5OG0xMy43ODQgMTEuNzM1bC0uNzM3LTIuOTI5Yy0zLjIyNi0uNzM3LTcuMjgxLTEuMTA5LTEyLjE1OC0xLjEwOS00LjgyNiAwLTguODY1LjM3My0xMi4xMSAxLjEwOWwtLjc4NyAyLjk1NWMzLjE0MS0uOTU3IDcuNDQyLTEuNDM5IDEyLjkyLTEuNDM5IDIuNjI1IDAgNS4wNzIuMTM2IDcuMzE1LjM5OCAyLjI1Mi4yNjIgNC4xMDYuNjAxIDUuNTU0IDEuMDE2bS0uNjQzLTcuNDE3Yy0zLjA0LS44MzgtNy4wOTUtMS4yNjItMTIuMTUtMS4yNjItNS4wOTcgMC05LjE5NS40MzItMTIuMzAyIDEuMjg3bC4zNzMgMi41MDZjMy4xMjQtLjgxMyA3LjA5NS0xLjIxOSAxMS45My0xLjIxOSA0LjgwOSAwIDguNzI5LjM5OCAxMS43NTIgMS4xOTRsLjM5OC0yLjUwNm0tMTEuMzYyLTQuMjkzYzIuODQ1LjA1MSA1LjE4Mi4xOTUgNyAuNDIzIDEuODEyLjIyOSAzLjQ1NC41MDggNC45MTEuODIxLjkwNi0uODk4IDEuOTEzLTEuNzQ0IDMuMDItMi41NTcgMS4xMDktLjgxMyAxLjg4OC0xLjUwNyAyLjMzNy0yLjA4My43ODctMS4wNzUgMS4xODUtMi40MTMgMS4xODUtNC4wMiAwLTEuNDY1LS4zNTYtMi43MDEtMS4wNjctMy42OTItMS4yNy0xLjg3MS0zLjIxNy0yLjgwMy01LjgyNS0yLjgwMy0xLjUyNCAwLTMuMTA3LjMzLTQuNzY3Ljk5MS0xLjUwNy41OTMtMi41OTEgMS4yMzYtMy4yNzcgMS45My0xLjQwNSAxLjM2My0yLjQzIDMuMTUtMy4wNzMgNS4zNTktLjI0NS43NjItLjM4MSAxLjcyNy0uNDA2IDIuOTA0LS4wMjUgMS4xNzctLjA0MiAyLjA4My0uMDQyIDIuNzI2bTEuODEyLTEuOTNjMC0uNDgzLjA1OS0xLjE2LjE2MS0yLjA0OS4xMS0uODgxLjI3OS0xLjU3NS41MDgtMi4wNzQuNjE4LTEuMzM4IDEuNDktMi41NzQgMi42MzMtMy43MTcuMzMtLjMzIDEuMDQxLS43NzkgMi4xMzQtMS4zMzggMS4wNzUtLjUzMyAyLjIyNy0uNzk2IDMuNDQ2LS43OTYuOTMxIDAgMS44NDYuMTYxIDIuNzY5LjQ4My45MTQuMzIyIDEuNjA5LjgxMyAyLjA2NiAxLjQ4Mi40MTUuNTU5LjYyNyAxLjQ2NS42MjcgMi43MjYgMCAuOTkxLS40MDYgMS45MTMtMS4yMTkgMi43NzctLjUyNS41NDItMS4xMDEgMS4wOTItMS43MSAxLjY1MS0uNjEuNTUtMS4yMDIgMS4yMDItMS43NjEgMS45NDctLjk1Ny0uMzMtMi4yOTQtLjU5My00LS43Ny0xLjcxLS4xODYtMy41OS0uMjg4LTUuNjQ3LS4zMjIiLz48L3N2Zz4=',
        'bN': 'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNzcuMTciIGhlaWdodD0iMTc3LjE3IiBzaGFwZS1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiIgaW1hZ2UtcmVuZGVyaW5nPSJvcHRpbWl6ZVF1YWxpdHkiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiB2aWV3Qm94PSIwIDAgNTAgNTAiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iMCIgeDE9IjIxLjI1MyIgeTE9IjM3LjU5MiIgeDI9Ijc3LjY0IiB5Mj0iMzcuNDY5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iI2ZmZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIwIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZmlsbD0iIzFmMWExNyIgZD0ibTI2LjE4IDkuMzk1YzIuNTk5LjE2OSA1IC44MzggNy4yMjIgMi4wMiAyLjIxIDEuMTY4IDQuMDk4IDIuNjc1IDUuNjU2IDQuNTEzIDEuMDkyIDEuMjg3IDIuMTE3IDIuODQ1IDMuMDgyIDQuNjY1Ljk3NCAxLjgxMiAxLjc0NCAzLjc0MiAyLjMyIDUuNzc0LjY2IDIuMzcxIDEuMDg0IDQuODUxIDEuMjUzIDcuNDU5LjE3OCAyLjU5OS4yNjMgNS4wMS4yNjMgNy4yM3Y1LjQwMmMwIDAtMS4yODcgMC0zLjg2MSAwLTIuNTY1IDAtNS45MDEgMC0xMC4wMSAwaC0xNi42MzdjLS4xNTIgMC0uMjItLjQwNi0uMjEyLTEuMjExLjAwOC0uODEzLjA1OS0xLjQ2NS4xNjEtMS45NjQuMDU5LS4zOTguMjItLjk1Ny40NjYtMS42ODUuMjU0LS43MjguNjYtMS42MDkgMS4yNDUtMi42NS4yNjItLjUzMy44ODktMS4zMDQgMS44OC0yLjMyLjk5OS0xLjAxNiAyLjEzNC0yLjIwMSAzLjQyOS0zLjUzOS43NDUtLjc2MiAxLjMyMS0xLjcxOSAxLjc0NC0yLjg3OS40MjMtMS4xNTEuNjAxLTIuMjAxLjUzMy0zLjE1LS42MS41LTEuMjc5LjkwNi0yLjAxIDEuMjE5LTMuNTA1IDEuMjUzLTYuMDUgMy4wNzMtNy42MTEgNS40NTItLjExOS4xNTItLjQ5MS44MjEtMS4xMTggMi4wMi0uMzMuNjI3LS42MTggMS4wNTgtLjg0NyAxLjI4Ny0uMzEzLjMxMy0uNzcxLjQ5MS0xLjM2My41MjUtLjkyMy4wNDItMS42NDMtLjM5OC0yLjE1OS0xLjM0Ni0uNjk0LjIwMy0xLjMxMi4yODgtMS44NjMuMjU0LS45MjMtLjM0Ny0xLjU5Mi0uNzItMi4wMS0xLjExOC0uODQ3LS44NDctMS4zODktMS42ODUtMS42NTEtMi41MzItLjI1NC0uODQ3LS4zODEtMS43NTMtLjM4MS0yLjcyNiAwLTEuMzg5Ljg1NS0zLjIyNiAyLjU4Mi01LjUxMiAyLjAyLTIuNjI1IDMuMDktNC42MzEgMy4yMTctNiAwLS41OTMuMDU5LTEuMjYyLjE3OC0yLjAxLjEwMi0uNTE3LjMwNS0xLjAxLjYxOC0xLjQ5LjIyLS4zMy4zNjQtLjU1OS40MzItLjY3Ny4wNzYtLjEyNy4yMTItLjMxMy40MTUtLjU1OS4xNDQtLjIwMy4yNzEtLjM1Ni4zNzMtLjQ1Ny4wOTMtLjExLjIyLS4yNTQuMzczLS40NC4xNzgtLjIxMi40MDYtLjQ1Ny42OTQtLjc0NS0uODgtMi40MTMtMS4yMzYtNC45MDItMS4wNjctNy40NTkgMy4yODUgMS4xNjggNi4wNSAzLjAxIDguMjggNS41MjkuNTUtMS44NzEgMS42MjYtMy4zODcgMy4yMjYtNC41MzggMS4zMjEuOTIzIDIuMzcxIDIuMTUxIDMuMTUgMy42NjYiLz48cGF0aCBmaWxsPSJ1cmwoIzApIiBkPSJtMTUuNjg4IDE3Ljc4NmMuMzY0LS4xODYuNTQyLS4yNzkuNTQyLS4yNzkuNDk5LS4xOTUuNjUyLS41NTkuNDc0LTEuMDkyLS4xOTUtLjQ5MS0uNTc2LS42Ni0xLjE0My0uNDkxLTEuOTQ3LjcxMS0zLjI5NCAyLjAyLTQuMDQgMy45Mi0uMTE4LjU0Mi4wNzYuOTE0LjU5MyAxLjExOC41MTYuMTYxLjg2NC0uMDE3IDEuMDQxLS41NS4xMzYtLjI3OS4yMjktLjQ2Ni4yOTYtLjU0Mi4xODYuMTQ0LjQyMy4yNDUuNzIuMjk2IDEuMDEuMTYxIDEuNi0uMjc5IDEuNzYxLTEuMzM4LjA1MS0uMzY0LS4wMzQtLjcxMS0uMjQ2LTEuMDQxbS00LjExNSAxNi43NjRjLjA1OS0uMTUyLjE2OS0uMzczLjMyMi0uNjY5LjI3OS0uNjk0LjQxNS0xLjEwOS40MTUtMS4yNDUtLjAyNS0uNDU3LS4yNzEtLjY5NC0uNzItLjY5NC0uMzMgMC0uNzExLjQ3NC0xLjE2IDEuNDE0LS4wNjguMTM2LS4xNjkuMjU0LS4yOTYuMzQ3LS40NDkuNDY2LS4zODEuODU1LjE5NSAxLjE2OC41MzMuMzEzLjk0LjIxMiAxLjI0NS0uMzIybTE0LjYzLTkuMjAzYzEuMTYtMS41MjQgMS43MjctMy4yMTcgMS43MS01LjA4LS4wNjgtLjU1LS4zODEtLjgyMS0uOTQtLjgyMS0uNzYyIDAtMS4wNTguMjc5LS44OTguODM4LjA1MS45MTQtLjAzNCAxLjY2OC0uMjcxIDIuMjYxLS4zODEuOTQtLjgwNCAxLjY0Mi0xLjI2MSAyLjEwOC0uMjU0LjUtLjEwMi44NjQuNDQ5IDEuMDkyLjUyNS4yNDUuOTMxLjExOSAxLjIxMS0uMzk4bS02LjQ3Ny0xMi4xMWMtLjA3Ni0uNTkzLS4wNTktMS4yMzYuMDUxLTEuOTMtLjk5MS4xOTUtMS45MjIuNjYtMi44MDIgMS4zODktLjUyNS4yNzktLjY1Mi42NjktLjM3MyAxLjE2OC4yNzkuNTA4LjY2OS41OTMgMS4xNjguMjQ2LjM0Ny0uMTg2LjY2OS0uMzU2Ljk1Ny0uNTA4LjI4OC0uMTYxLjYxOC0uMjc5Ljk5OS0uMzY0bTIzLjI1IDMxLjQ1NGMtLjAxNyAwIDAtLjQ0OS4wNDItMS4zNDYuMTMxLTMuMTA3LjA5NS02LjIyMS4wNzYtOS4zMy0uMDE3LTIuMjEtLjMxMy00LjQxMS0uODg5LTYuNjEzLS44NC0zLjMxLTIuMTI0LTYuNDg1LTQuMDcyLTkuMjk2LTIuNjM0LTMuODQ1LTYuODE0LTYuMDMtMTEuMjg2LTYuOTc2LjEyNi43NjYuMDMzIDEuNTQuMDc2IDIuMzExIDEuNi41NDIgMy4xMTYgMS4yMTkgNC41MzggMi4wMzIgNC4yNDEgMi41NTQgNi40MTQgNy4yNzUgNy4xOTcgMTEuOTMgMS4yNzIgNi4xNTQuNDUzIDExLjU1Ny44MTMgMTcuMjg5aDMuNTA1bS0zMy41MzctMTQuNTU0Yy40NzQtLjMzOS41MjUtLjcyOC4xNDQtMS4xOTQtLjM5OC0uMzgxLS44My0uNDE1LTEuMzEyLS4xMDItMS4wMS42Ni0xLjU0OSAxLjUzMi0xLjYxNyAyLjYwOC4wMTcuNTQyLjM0Ny44MDQuOTc0Ljc3MS41OTMtLjA1MS44ODEtLjM1Ni44NjQtLjkyMy4xMzUtLjUyNS40NDktLjkxNC45NDgtMS4xNiIvPjwvc3ZnPg==',
        'bP': 'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNzcuMTciIGhlaWdodD0iMTc3LjE3IiBzaGFwZS1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiIgaW1hZ2UtcmVuZGVyaW5nPSJvcHRpbWl6ZVF1YWxpdHkiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiB2aWV3Qm94PSIwIDAgNTAgNTAiPjxwYXRoIGQ9Im0yNSA0Ni40NWgtMTMuMzk0Yy0uNjYtMS42NTEtLjk5MS0zLjM3OC0uOTkxLTUuMTgyIDAtMy4wNTYuODY0LTUuOCAyLjU5OS04LjIzOCAxLjczNi0yLjQzIDMuOTcxLTQuMTY2IDYuNjk3LTUuMjA3LTEuMTY4LS41NDItMi4xMjUtMS4zNjMtMi44NjItMi40NjQtLjczNy0xLjEwMS0xLjEwMS0yLjM0NS0xLjEwMS0zLjczNCAwLTEuNzM2LjU3Ni0zLjI0MyAxLjczNi00LjUxMyAxLjE1Mi0xLjI3OCAyLjU3NC0yLjAyIDQuMjY3LTIuMjEtMS4zNDYtMS4wMS0yLjAyLTIuMzQ1LTIuMDItMy45OTYgMC0xLjM4OS40OTEtMi41ODIgMS40ODItMy41NzMuOTgyLS45OTEgMi4xNzYtMS40ODIgMy41ODEtMS40ODIgMS4zODkgMCAyLjU4Mi40OTEgMy41NzMgMS40ODIuOTkxLjk5MSAxLjQ5IDIuMTg0IDEuNDkgMy41NzMgMCAxLjY1MS0uNjY5IDIuOTg5LTIuMDIgMy45OTYgMS42OTMuMTk1IDMuMTE2LjkzMSA0LjI2NyAyLjIxIDEuMTYgMS4yNyAxLjczNiAyLjc3NyAxLjczNiA0LjUxMyAwIDEuMzg5LS4zNzMgMi42MzMtMS4xMjYgMy43MzQtLjc1MyAxLjEwMS0xLjcxIDEuOTIyLTIuODYyIDIuNDY0IDIuNzI2IDEuMDQxIDQuOTYxIDIuNzc3IDYuNjk3IDUuMjA3IDEuNzM2IDIuNDM4IDIuNTk5IDUuMTgyIDIuNTk5IDguMjM4IDAgMS43ODYtLjMyMiAzLjUxNC0uOTY1IDUuMTgyaC0xMy4zOTQiIGZpbGw9IiMxZjFhMTciIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC45NzMyNCAwIDEuMjQzKSIvPjwvc3ZnPg==',
        'bQ': 'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNzcuMTciIGhlaWdodD0iMTc3LjE3IiBzaGFwZS1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiIgaW1hZ2UtcmVuZGVyaW5nPSJvcHRpbWl6ZVF1YWxpdHkiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiB2aWV3Qm94PSIwIDAgNTAgNTAiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iMCIgeDE9IjIxLjI1MyIgeTE9IjM3LjIyIiB4Mj0iNzcuNzYiIHkyPSIzNy4zNiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiNmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iMCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxnIGZpbGw9IiMxZjFhMTciPjxwYXRoIGQ9Im0yNC45NDkgMTAuNzUyYy0uOTQgMC0xLjc0NC0uMzMtMi4zOTYtLjk5MS0uNjUyLS42Ni0uOTc0LTEuNDY1LS45NzQtMi40MDUgMC0uOTMxLjMyMi0xLjcyNy45NzQtMi4zODguNjUyLS42NiAxLjQ1Ni0uOTkxIDIuMzk2LS45OTEuOTIzIDAgMS43MjcuMzMgMi4zOTYuOTkxLjY2OS42Ni45OTkgMS40NTYuOTk5IDIuMzg4IDAgLjk0LS4zMyAxLjc0NC0uOTk5IDIuNDA1LS42NjkuNjYtMS40NzMuOTkxLTIuMzk2Ljk5MSIvPjxwYXRoIGQ9Im00MC4yMyA0My45NDJjLS44MTMuNzExLTIuNjMzIDEuMzA0LTUuNDYxIDEuNzg2LTIuODI4LjQ3NC02LjA4Ny43Mi05Ljc3LjcyLTMuNzUxIDAtNy4wNS0uMjU0LTkuODk4LS43NDUtMi44NDUtLjQ5OS00LjY0LTEuMTE4LTUuMzg1LTEuODYzbDEuNTY2LTUuOTUyLS42OTQtMy44OTUtMi4xODQtMy43OTMtMi4xMDgtMTUuNDI2IDEuMjExLS40NzQgNi43OTkgMTEuNDU1LjE1Mi0xMy42NCAxLjY4NS0uMjk2IDUuMTgyIDEzLjcxNiAyLjc3Ny0xNC43NTdoMS43MTlsMi43NzcgMTQuNzA3IDUuMTMxLTEzLjY2NSAxLjcxLjI5Ni4xNTIgMTMuNjQgNi44MjQtMTEuNDgxIDEuMTYuNTQyLTIuMDU3IDE1LjM1OS0yLjIxIDMuNzkzLS42OTQgMy45NDYgMS42MTcgNi4wMyIvPjxwYXRoIGQ9Im0xNC41MzUgMTEuOTg5Yy0uOTQ4IDAtMS43NTMtLjMyMi0yLjQxMy0uOTc0LS42Ni0uNjUyLS45OTEtMS40NTYtLjk5MS0yLjM5NiAwLS45MjMuMzMtMS43MTkuOTkxLTIuMzc5LjY2LS42NiAxLjQ2NS0uOTkxIDIuNDEzLS45OTEuOTIzIDAgMS43MTkuMzMgMi4zNzkuOTkxLjY2LjY2Ljk5MSAxLjQ1Ni45OTEgMi4zNzkgMCAuOTQtLjMzIDEuNzQ0LS45OTEgMi4zOTYtLjY2LjY1Mi0xLjQ1Ni45NzQtMi4zNzkuOTc0Ii8+PHBhdGggZD0ibTM1LjM2IDExLjk4OWMtLjk0IDAtMS43MzYtLjMyMi0yLjM4OC0uOTc0LS42NTItLjY1Mi0uOTgyLTEuNDU2LS45ODItMi4zOTYgMC0uOTIzLjMzLTEuNzE5Ljk4Mi0yLjM3OS42NTItLjY2IDEuNDQ4LS45OTEgMi4zODgtLjk5MS45NDggMCAxLjc1My4zMyAyLjQxMy45OTEuNjYuNjYuOTkxIDEuNDU2Ljk5MSAyLjM3OSAwIC45NC0uMzMgMS43NDQtLjk5MSAyLjM5Ni0uNjYuNjUyLTEuNDY1Ljk3NC0yLjQxMy45NzQiLz48cGF0aCBkPSJtNS40IDE0LjcyM2MtLjk0IDAtMS43MzYtLjMzLTIuMzg4LS45ODItLjY1Mi0uNjUyLS45ODItMS40NDgtLjk4Mi0yLjM5NiAwLS45MjMuMzMtMS43MTkuOTgyLTIuMzg4LjY1Mi0uNjc3IDEuNDQ4LTEuMDEgMi4zODgtMS4wMS45NDggMCAxLjc0NC4zMyAyLjQxMyAxLjAxLjY2LjY2OS45OTEgMS40NjUuOTkxIDIuMzg4IDAgLjk0OC0uMzMgMS43NDQtLjk5MSAyLjM5Ni0uNjY5LjY1Mi0xLjQ2NS45ODItMi40MTMuOTgyIi8+PHBhdGggZD0ibTQ0LjU0MSAxNC43MjNjLS45NCAwLTEuNzQ0LS4zMy0yLjQwNS0uOTgyLS42Ni0uNjUyLS45OTEtMS40NDgtLjk5MS0yLjM5NiAwLS45MjMuMzMtMS43MTkuOTkxLTIuMzg4LjY2LS42NzcgMS40NjUtMS4wMSAyLjQwNS0xLjAxLjkzMSAwIDEuNzI3LjMzIDIuMzg4IDEuMDEuNjYuNjY5Ljk5MSAxLjQ2NS45OTEgMi4zODggMCAuOTQ4LS4zMyAxLjc0NC0uOTkxIDIuMzk2LS42Ni42NTItMS40NTYuOTgyLTIuMzg4Ljk4MiIvPjwvZz48cGF0aCBmaWxsPSJ1cmwoIzApIiBkPSJtMzcuMiAzNS43MjljLTMuMDQtLjgzOC03LjA5NS0xLjI2Mi0xMi4xNS0xLjI2Mi01LjA5NyAwLTkuMTk1LjQzMi0xMi4zMDIgMS4yODdsLjM3MyAyLjUwNmMzLjEyNC0uODEzIDcuMDk1LTEuMjE5IDExLjkzLTEuMjE5IDQuODA5IDAgOC43MjkuMzk4IDExLjc1MiAxLjE5NGwuMzk4LTIuNTA2bTEuNzM2LTQuNDM3Yy0xLjM3Mi0uNS0zLjMwMi0uOTA2LTUuNzkxLTEuMjI4LTIuNDg5LS4zMjItNS4yMzItLjQ4My04LjI0Ni0uNDgzLTIuOTQ2IDAtNS42MzkuMTUyLTguMDkuNDU3LTIuNDQ3LjMwNS00LjM3Ny43MDMtNS43ODMgMS4yMDJsMS4yNDUgMi4yNTJjMS4zODktLjQwNiAzLjE5Mi0uNzAzIDUuNDEtLjg4OSAyLjIxLS4xNzggNC42MzEtLjI3MSA3LjI2NC0uMjcxIDIuNjMzIDAgNS4wNjMuMDkzIDcuMjkuMjcxIDIuMjM1LjE4NiA0LjA0Ny40OTEgNS40MzYuOTE0bDEuMjYxLTIuMjI3bS0xLjA5MiAxMS44NTNsLS43MzctMi45MjljLTMuMjI2LS43MzctNy4yODEtMS4xMDktMTIuMTU4LTEuMTA5LTQuODI2IDAtOC44NjUuMzczLTEyLjExIDEuMTA5bC0uNzg3IDIuOTU1YzMuMTQxLS45NTcgNy40NDItMS40MzkgMTIuOTItMS40MzkgMi42MjUgMCA1LjA3Mi4xMzYgNy4zMTUuMzk4IDIuMjUyLjI2MiA0LjEwNi42MDEgNS41NTQgMS4wMTYiLz48L3N2Zz4=',
        'bR': 'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNzcuMTciIGhlaWdodD0iMTc3LjE3IiBzaGFwZS1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiIgaW1hZ2UtcmVuZGVyaW5nPSJvcHRpbWl6ZVF1YWxpdHkiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiB2aWV3Qm94PSIwIDAgNTAgNTAiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iMCIgeDE9IjIxLjE5IiB5MT0iMzcuNTUyIiB4Mj0iNzcuNzQiIHkyPSIzNy40MjkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjZmZmIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9IjAiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBmaWxsPSIjMWYxYTE3IiBkPSJtMjguNDA4IDkuMjJoNC4yMTZ2LTMuMzk1aDYuNzk2djkuMjk1bC01LjUgNC4yNDN2MTEuODU3bDQuMjIgNC4yMjF2NS4wOGgzLjc4OXY1LjkyOWgtMzMuODU5di01LjkyOWgzLjc5NHYtNS4wOGw0LjI0Ni00LjIyMXYtMTEuODU3bC01LjUwOC00LjI0M3YtOS4yOTVoNi43NzR2My4zOTVoNC4yNDJ2LTMuMzk1aDYuNzl6Ii8+PHBhdGggZmlsbD0idXJsKCMwKSIgZD0ibTI1LjAxIDM1LjA0aC0xMC4yN2wtMS4xNDMgMS4wNjd2MS40MzloMjIuODI2di0xLjQzOWwtMS4xNDMtMS4wNjdoLTEwLjI3bS0xMS40MTMgNS4wOHYyLjUzMmgyMi44MjZ2LTIuNTMyaC0yMi44MjZtMTEuNDEzLTI3LjA4aC0xMi43djEuMTQzbDEuODEyIDEuMzYzaDIxLjgwMmwxLjc2MS0xLjM2M3YtMS4xNDNoLTEyLjY3NW0wIDQuMTkxaC04LjY3OGwxLjQ4MiAxLjE2OHYxLjQxNGgxNC4zOTN2LTEuNDE0bDEuNDgyLTEuMTY4aC04LjY3OG0wIDEzLjU0N2gtNy4xOTd2MS4xNDNsLTEuNDgyIDEuNDM5aDE3LjM1N2wtMS40ODItMS40Mzl2LTEuMTQzaC03LjE5NyIvPjwvc3ZnPg==',
        'wB': 'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNzcuMTciIGhlaWdodD0iMTc3LjE3IiBzaGFwZS1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiIgaW1hZ2UtcmVuZGVyaW5nPSJvcHRpbWl6ZVF1YWxpdHkiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiB2aWV3Qm94PSIwIDAgNTAgNTAiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iMCIgeDE9IjIxLjEzIiB5MT0iMzcuNTkyIiB4Mj0iNzcuNjQiIHkyPSIzNy40NjkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjZmZmIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9IjAiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBmaWxsPSIjMWYxYTE3IiBkPSJtMjUuNDQ3IDQyLjAxYy0uMjI5Ljk0LS41MTcgMS41OTItLjg0NyAxLjk1Ni0uMzMuMzY0LS43NjIuNzQ1LTEuMzEyIDEuMTQzLS41OTMuNDE1LTEuMjk1Ljc2Mi0yLjEwOCAxLjA1LS44MTMuMjg4LTEuNzEuMzY0LTIuNzAxLjIxMmwtNi45NjgtLjk2NWMtLjI4OC0uMDM0LS41MzMtLjAzNC0uNzYyIDAtLjIyLjAzNC0uNDMyLjA1MS0uNjM1LjA1MS0uMzQ3IDAtLjc4Ny4wNzYtMS4zMjEuMjM3LS41NDIuMTUyLS45NTcuMzgxLTEuMjUzLjY3N2wtMi40MDUtMy45NDZjLjI5Ni0uMzMuNTU5LS41NTkuNzg3LS42OTQuMjM3LS4xMjcuNTA4LS4yNzEuODIxLS40MTUuOTU3LS40NDkgMS45ODEtLjcyIDMuMDczLS44MjEuNDY2LS4wMzQuOTIzLS4wNDIgMS4zNjMtLjAyNS40NDkuMDE3LjkxNCAwIDEuMzk3LS4wNTEuODg5LjE1MiAxLjc4Ni4yODggMi42ODQuNDA2LjkwNi4xMjcgMS44MTIuMjU0IDIuNzE4LjM4OS45OTEgMCAxLjY2LS4xMDIgMi4wMS0uMjk2LjE4Ni0uMTAyLjQ3NC0uMjg4Ljg3Mi0uNTUuMzk4LS4yNjIuNzk2LS42NTIgMS4xOTQtMS4xNjgtLjg4MS0uMDkzLTEuNzctLjI2Mi0yLjY4NC0uNTA4LS45MDYtLjIzNy0xLjcxLS40OTEtMi40MDQtLjc1NGwyLjU4Mi02LjQwMWMtMS4yOTUtLjc0NS0yLjE5My0xLjMzOC0yLjcwOS0xLjc5NS0uNTA4LS40NTctLjkxNC0uOTgyLTEuMjExLTEuNTc1LS40MzItLjc2Mi0uNzExLTEuNDk5LS44My0yLjIxLS4xMjctLjcxMS0uMTc4LTEuMzQ2LS4xNjEtMS45MTMuMDE3LS45OTEuMjQ1LTIuMDgzLjcwMy0zLjI4NS40NTctMS4xOTQgMS4zMTItMi4yNjkgMi41NjUtMy4yMDkgMS4wNDEtLjc5NiAyLjA2Ni0xLjYxNyAzLjA1Ny0yLjQ1NS45OTEtLjg0NyAxLjk3My0xLjgyOSAyLjk0Ni0yLjk1NS0xLjIxOS0uNjI3LTEuODI5LTEuNjI2LTEuODI5LTIuOTk3IDAtLjkzMS4zMjItMS43MTkuOTc0LTIuMzg4LjY1Mi0uNjYgMS40NTYtLjk5MSAyLjM5Ni0uOTkxLjkyMyAwIDEuNzE5LjMzIDIuMzc5Ljk5MS42Ni42NjkuOTkxIDEuNDU2Ljk5MSAyLjM4OCAwIDEuMzU1LS42MSAyLjM1NC0xLjgyOSAyLjk5Ny45NTcgMS4xMjYgMS45MyAyLjEwOCAyLjkxMyAyLjk1NS45ODIuODM4IDIuMDIgMS42NiAzLjA5IDIuNDU1IDEuMjM2Ljk0IDIuMDgzIDIuMDIgMi41MjMgMy4yMDkuNDQ5IDEuMjAyLjY5NCAyLjI5NC43MiAzLjI4NSAwIC41NjctLjA1MSAxLjIwMi0uMTY5IDEuOTEzLS4xMTguNzExLS4zODEgMS40NDgtLjc5NiAyLjIxLS4zMy41OTMtLjc0NSAxLjExOC0xLjI1MyAxLjU3NS0uNS40NTctMS4zODkgMS4wNS0yLjY2NyAxLjc5NWwyLjU4MiA2LjQwMWMtLjcyOC4yNjMtMS41NDkuNTE3LTIuNDU1Ljc1NC0uOTE0LjI0Ni0xLjc4Ny40MTUtMi42MzMuNTA4LjM4MS41MTcuNzcuOTA2IDEuMTY4IDEuMTY4LjM5OC4yNjMuNjk0LjQ0OS44OTguNTUuMzQ3LjE5NSAxLjAxNi4yOTYgMi4wMS4yOTYuODg5LS4xMzYgMS43ODYtLjI2MyAyLjY5Mi0uMzg5Ljg5OC0uMTE4IDEuODAzLS4yNTQgMi43MTgtLjQwNi40NC4wNTEuODg5LjA2OCAxLjM0Ni4wNTEuNDU3LS4wMTcuOTIzLS4wMDggMS40MDUuMDI1IDEuMDU4LjEwMiAyLjA4My4zNzMgMy4wNzMuODIxLjI5Ni4xNDQuNTY3LjI4OC44MDQuNDE1LjI0NS4xMzUuNTA4LjM2NC44MDQuNjk0bC0yLjQzIDMuOTQ2Yy0uMjk2LS4yOTYtLjcxMS0uNTI1LTEuMjUzLS42NzctLjUzMy0uMTYxLS45NjUtLjIzNy0xLjI5NS0uMjM3LS4yMiAwLS40NC0uMDE3LS42Ni0uMDUxLS4yMi0uMDM0LS40NzQtLjAzNC0uNzU0IDBsLTYuOTUxLjk2NWMtLjk5MS4xNTItMS45MTMuMDg1LTIuNzYtLjE5NS0uODU1LS4yNzktMS41NTgtLjY1Mi0yLjEtMS4xMTgtLjU0Mi0uNDQ5LS45ODItLjgzLTEuMzA0LTEuMTUxLS4zMjItLjMyMi0uNTkzLS45NTctLjgwNC0xLjg5NyIvPjxwYXRoIGZpbGw9InVybCgjMCkiIGQ9Im0yNi4zMiAzOS4yYzAgMS4wOTIuMjQ1IDIuMDI0Ljc1MyAyLjc5NC41Ljc3IDEuMDQxIDEuMzcyIDEuNjI2IDEuNzk1LjkwNi42NjkgMi4yMzUuOTk5IDMuOTg4Ljk5OS40MzIgMCAxLjI3OS0uMDkzIDIuNTMyLS4yNzkgMS4wMjUtLjE2MSAxLjg1NC0uMjc5IDIuNDgxLS4zNTYuNjI3LS4wNzYgMS4wNS0uMTM1IDEuMjctLjE4Ni42MjctLjA4NSAxLjI4Ny0uMDY4IDEuOTgxLjA1MS4yNjIuMDY4LjU1OS4xMjcuODguMTg2LjMyMi4wNTkuNTkzLjE4Ni44MDQuMzgxbDEuMTk0LTEuOTNjLS42NzctLjM0Ny0xLjM5Ny0uNTkzLTIuMTU5LS43Mi0xLjI1My0uMjItMi4zNTQtLjI2My0zLjMwMi0uMTUyLS4yNzkuMDM0LS42NDMuMTE4LTEuMTAxLjI0NS0uNDU3LjEzNi0xLjA2Ny4yNjMtMS44NDYuMzczLTEuNjc2LjI3MS0yLjU1Ny4zOTgtMi42NTkuMzk4LS42NDQgMC0xLjIwMi0uMDc2LTEuNjg1LS4yNDYtLjQ4My0uMTY5LS45MDYtLjM0Ny0xLjI4Ny0uNTQyLS44ODEtLjM5OC0xLjc3LTEuMzM4LTIuNjg0LTIuODExaC0uNzg3bS0xLjc2MSAwaC0uNzk2Yy0uOTMxIDEuNDktMS44MTIgMi40My0yLjY1OSAyLjgxMS0uMzk4LjE5NS0uODMuMzczLTEuMzEyLjU0Mi0uNDgzLjE2OS0xLjAzMy4yNDYtMS42Ni4yNDYtLjExOSAwLS45OTktLjEyNy0yLjY1OS0uMzk4LS43ODctLjExLTEuNDIyLS4yMzctMS44OC0uMzczLS40NjYtLjEyNy0uODMtLjIxMi0xLjA5Mi0uMjQ1LS45NDgtLjExLTIuMDQtLjA2OC0zLjMwMi4xNTItLjc2Mi4xMjctMS40NzMuMzczLTIuMTM0LjcybDEuMTk0IDEuOTNjLjE5NS0uMTk1LjQ1Ny0uMzIyLjc3OS0uMzgxLjMyMi0uMDU5LjYxOC0uMTE4Ljg4LS4xODYuNjk0LS4xMTkgMS4zNTUtLjEzNiAxLjk4MS0uMDUxLjIyLjA1MS42NDMuMTEgMS4yNy4xODYuNjI3LjA3NiAxLjQ2NS4xOTUgMi41MDYuMzU2IDEuMjM2LjE4NiAyLjA4My4yNzkgMi41MzIuMjc5IDEuNzM2IDAgMy4wNjUtLjMzIDMuOTg4LS45OTkuNTY3LS40MjMgMS4xMDEtMS4wMjUgMS42LTEuNzk1LjUwOC0uNzcuNzYyLTEuNzAyLjc2Mi0yLjc5NG0uODg5LTkuMzQ3YzEuNiAwIDMuMTQxLjEyNyA0LjYxNC4zNzMgMS42MTctLjU3NiAyLjc5NC0xLjQ4MiAzLjUyMi0yLjcwMS42MjctMS4wNTguOTQtMi4yMjcuOTQtMy40OTcgMC0uNzYyLS4xODYtMS42LS41NjctMi41MjMtLjM4MS0uOTE0LS45OTktMS43NDQtMS44NjMtMi40ODktLjk3NC0uODEzLTIuMDQtMS43MDItMy4yLTIuNjY3LTEuMTUxLS45NjUtMi4zMDMtMi4xLTMuNDQ2LTMuMzg3LTEuMTYgMS4yODctMi4zMTEgMi40MjItMy40NzEgMy4zODctMS4xNi45NjUtMi4yMTggMS44NTQtMy4xNzUgMi42NjctLjg4MS43NDUtMS40OTkgMS41NzUtMS44NzEgMi40ODktLjM3Mi45MjMtLjU1OSAxLjc2MS0uNTU5IDIuNTIzIDAgMS4yNy4zMDUgMi40MzguOTE0IDMuNDk3LjcxMSAxLjIxOSAxLjg5NyAyLjEyNSAzLjU0OCAyLjcwMSAxLjQ1Ni0uMjQ2IDIuOTk3LS4zNzMgNC42MTQtLjM3M20wIDQuNTEzYzEuOTM5IDAgMy43OTMuMTk1IDUuNTc5LjU3NmwtMS4xODUtMy4wNTdjLTEuNDU2LS4yMjktMi45MjEtLjM0Ny00LjM5NC0uMzQ3LTEuNTA3IDAtMi45OC4xMTktNC40MTEuMzQ3bC0xLjE5NCAzLjA1N2MxLjc3LS4zODEgMy42NDEtLjU3NiA1LjYwNS0uNTc2bTAtMjMuNTM3YzEuMTI2IDAgMS42ODUtLjU1OSAxLjY4NS0xLjY4NSAwLTEuMTI2LS41NTktMS42OTMtMS42ODUtMS42OTMtMS4xMjYgMC0xLjY4NS41NjctMS42ODUgMS42OTMgMCAxLjEyNi41NTkgMS42ODUgMS42ODUgMS42ODVtMCAyNy4wMWMxLjEyNiAwIDIuMjE4LS4wOTMgMy4yODUtLjI3OSAxLjA2Ny0uMTk1IDIuMS0uNDIzIDMuMDktLjY4Ni0xLjkzOS0uNTA4LTQuMDY0LS43Ny02LjM3NS0uNzctMi4zNDUgMC00LjQ3LjI2My02LjM3NS43Ny45NTcuMjYzIDEuOTczLjQ5MSAzLjA0OC42ODYgMS4wNzUuMTg2IDIuMTg0LjI3OSAzLjMyNy4yNzltLS44ODktMTQuMzM0bC0yLjA2Ni0uMDI1Yy0uNTU5IDAtLjgzOC0uMjc5LS44MzgtLjg0NyAwLS41NTkuMjc5LS44MzguODM4LS44MzhoMi4wNjZ2LTIuMTM0YzAtLjU3Ni4yOTYtLjg3Mi44ODktLjg3Mi41NzYgMCAuODcyLjI5Ni44NzIuODcydjIuMTM0aDIuMTM0Yy41NDIgMCAuODEzLjI3OS44MTMuODM4IDAgLjU2Ny0uMjcxLjg0Ny0uODEzLjg0N2gtMi4xMzR2Mi4wMzJjMCAuNjAxLS4yOTYuODk4LS44NzIuODk4LS41OTMgMC0uODg5LS4yOTYtLjg4OS0uODk4di0yLjAxIi8+PC9zdmc+',
        'wK': 'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNzcuMTciIGhlaWdodD0iMTc3LjE3IiBzaGFwZS1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiIgaW1hZ2UtcmVuZGVyaW5nPSJvcHRpbWl6ZVF1YWxpdHkiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiB2aWV3Qm94PSIwIDAgNTAgNTAiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iMCIgeDE9IjIxLjM3NiIgeDI9Ijc3LjY0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iI2ZmZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIwIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGcgZmlsbD0iIzFmMWExNyI+PHBhdGggZD0ibTI1LjgyMSAxMi4wMmgtMS43NjF2LTMuMjUxaC0yLjA2NmMtLjU1OSAwLS44MzgtLjI3MS0uODM4LS44MjF2LS4wMjVjMC0uNTQyLjI3OS0uODEzLjgzOC0uODEzaDIuMDY2di0yLjEwOGMwLS41ODQuMjk2LS44NzIuODg5LS44NzIuNTc2IDAgLjg3Mi4yODguODcyLjg3MnYyLjEwOGgyLjEzNGMuNTQyIDAgLjgxMy4yNzEuODEzLjgxM3YuMDI1YzAgLjU1LS4yNzEuODIxLS44MTMuODIxbC0yLjExNy4wMjUtLjAxNyAzLjIyNiIvPjxwYXRoIGQ9Im0xMS4wMyAzNy43NDRsLS44MTMtNC42NGMtLjAxNyAwLS4wNDItLjAzNC0uMDc2LS4xMDItLjA4NS0uMTE4LS4zMjItLjI3MS0uNzExLS40NTctLjM4MS0uMTk1LS44MzgtLjUxNi0xLjM0Ni0uOTgyLS43MjgtLjYxLTEuMjk1LTEuMTA5LTEuNzAyLTEuNDktLjQwNi0uMzczLS43NzEtLjc4Ny0xLjEwMS0xLjIzNi0xLjAxLTEuMzg5LTEuNTc1LTMuMDY1LTEuNjg1LTUuMDQtLjE2OS0xLjg5Ny42MDEtMy43OTMgMi4zMDMtNS42ODEgMS43MTktMS44OCA0LjA0Ny0yLjc2OSA2Ljk2OC0yLjY1IDEuMDkyLjA2OCAyLjM3OS4zMyAzLjg0NC43OTYuNDgzLjE5NS45NzQuMzkgMS40ODIuNTc2LjUuMTk1Ljk5OS4zODkgMS40OTkuNTg0LjI2Mi4xMzUuNS4yNzEuNjk0LjM5OC0uMDg1LS4zNDctLjEyNy0uNjk0LS4xMjctMS4wNDEgMC0xLjI4Ny40NTctMi4zODggMS4zOC0zLjMwMi45MTQtLjkwNiAyLjAyNC0xLjM3MiAzLjMxMS0xLjM4OSAxLjI4NyAwIDIuMzg4LjQ2NiAzLjMwMiAxLjM4LjkwNi45MTQgMS4zNjMgMi4wMiAxLjM2MyAzLjI4NSAwIC4yNjItLjAzNC42MS0uMTAyIDEuMDQxLjIyOS0uMTQ0LjQ1Ny0uMjcxLjY2OS0uMzcyLjc2Mi0uMzMgMS43NjEtLjcyIDMuMDEtMS4xNiAxLjQyMi0uNDgzIDIuNzAxLS43NTQgMy44NDQtLjgyMSAyLjkyMS0uMTM2IDUuMjQxLjc1NCA2Ljk0MyAyLjY1IDEuNjY4IDEuODg4IDIuNDQ3IDMuNzg1IDIuMzI4IDUuNjgxLS4xMjcgMS45NzMtLjcwMyAzLjY0OS0xLjcxIDUuMDQtLjMzLjQ0OS0uNzAzLjg2NC0xLjExOCAxLjI1My0uNDA2LjM5LS45NjUuODgxLTEuNjYgMS40NzMtLjU0Mi40NjYtMS4wMS43OTYtMS4zODkuOTgyLS4zODEuMTg2LS42MDEuMzQ3LS42NjkuNDU3LS4wMTcuMDM0LS4wMzQuMDU5LS4wNTEuMDc2LS4wMTcuMDE3LS4wMjUuMDM0LS4wMjUuMDUxbC0uNzk2IDQuNjY1IDEuNjQzIDYuMTIxYy0uODMuNzQ1LTIuNjg0IDEuMzU1LTUuNTU0IDEuODM3LTIuODc5LjQ4My02LjIwNi43Mi05Ljk3NC43Mi0zLjgzNSAwLTcuMjE0LS4yNTQtMTAuMTE4LS43NTQtMi45MTItLjUwOC00Ljc0MS0xLjE0My01LjQ4Ni0xLjg5N2wxLjYzNC02LjA1Ii8+PC9nPjxwYXRoIGZpbGw9InVybCgjMCkiIGQ9Im0yNS43OTYgMjkuNTMyYzIuODQ1LjAzNCA1LjQ0NC4yMDMgNy44MDYuNTA4IDIuMzcxLjMwNSA0LjIyNS42OTQgNS41NjMgMS4xNTEuNjI3LS40OTEgMS4zMTItMS4wNDEgMi4wNTctMS42NTEuNzQ1LS42MDEgMS4zNjMtMS4yMTkgMS44NjMtMS44NDYuNzg3LTEuMDEgMS4xODUtMi4zMzcgMS4xODUtMy45OTYgMC0xLjQ4Mi0uMzU2LTIuNzI2LTEuMDY3LTMuNzE3LTEuMjctMS44NTQtMy4yMDktMi43NzctNS44LTIuNzc3LTEuNTU4IDAtMy4xNS4zMjItNC43OTIuOTY1LTEuNDM5LjU4NC0yLjUzMiAxLjIyOC0zLjI2OCAxLjkzOS0xLjM4OSAxLjM4OS0yLjQyMSAzLjE3NS0zLjA4MiA1LjM1MS0uMjI5Ljc3OS0uMzY0IDEuNDktLjQwNiAyLjEyNS0uMDQyLjYzNS0uMDU5IDEuMjg3LS4wNTkgMS45NDdtLTEzLjI1IDYuNjk3YzMuMTQxLS43OTYgNy4zMDctMS4xOTQgMTIuNTA1LTEuMTk0IDUuMDg5IDAgOS4yMDMuMzgxIDEyLjMyNyAxLjE0M2wuNjE4LTMuNjQ5Yy0zLjMyNy0uODcyLTcuNjcxLTEuMzEyLTEzLjA1LTEuMzEyLTUuNDEgMC05Ljc0NS40NDktMTMuMDIgMS4zMzhsLjYxOCAzLjY3NW0yNS4yOTggNC40MTFsLS43MzctMi44NDVjLTMuMjc3LS43MjgtNy4zMzItMS4wOTItMTIuMTU4LTEuMDkyLTQuODA5IDAtOC44NTYuMzY0LTEyLjEzMyAxLjA5MmwtLjc4NyAyLjg3YzMuMTU4LS45MjMgNy40NjgtMS4zODkgMTIuOTQ1LTEuMzg5IDUuNDQ0IDAgOS43MjguNDU3IDEyLjg2OSAxLjM2M20uNjUyIDIuMzM3Yy0zLjE5Mi0xLjI4Ny03LjY3OS0xLjkzOS0xMy40NDUtMS45MzktNS45ODYgMC0xMC41MTYuNjYtMTMuNTk4IDEuOTkgMi45MTMgMS4xNTEgNy40MTcgMS43MzYgMTMuNTIxIDEuNzM2IDIuOTEzIDAgNS41NjMtLjE2MSA3Ljk1OS0uNDgzIDIuNDA0LS4zMjIgNC4yNS0uNzYyIDUuNTYzLTEuMzA0bS0xNC40MTktMTMuNDQ1Yy0uMDA4LS42NDMtLjAzNC0xLjI4Ny0uMDY4LTEuOTIyLS4wMzQtLjYzNS0uMTYxLTEuMzQ2LS4zNzItMi4xMjUtLjY3Ny0yLjIxLTEuNzAyLTMuOTk2LTMuMDgyLTUuMzUxLS43MTEtLjY5NC0xLjc5NS0xLjM0Ni0zLjI2OC0xLjkzOS0xLjY4NS0uNjYtMy4yODUtLjk5MS00Ljc5Mi0uOTkxLTIuNjA4IDAtNC41NDcuOTMxLTUuOCAyLjgwMi0uNzExLjk5MS0xLjA2NyAyLjIzNS0xLjA2NyAzLjcxNyAwIDEuNjI2LjM5OCAyLjk1NSAxLjE4NSAzLjk5Ni40ODMuNjEgMS4wOTIgMS4yMjggMS44MzcgMS44MzcuNzQ1LjYxIDEuNDM5IDEuMTY4IDIuMDgzIDEuNjYgMi44OTYtMS4wNDEgNy4zNDEtMS42IDEzLjM0My0xLjY4NW0uODcyLTQuNjE0Yy4xMTktLjQ2Ni4yMTItLjc4Ny4yOTYtLjk2NS4xNjktLjY0My4zNTYtMS4xOTQuNTc2LTEuNjQzLjA5My0uMjc5LjIzNy0uNjAxLjQzMi0uOTc0LjE4Ni0uMzczLjM4OS0uODA0LjYxLTEuMjc5LjEyNy0uMjc5LjI3MS0uNjI3LjQxNS0xLjAzMy4xNTItLjQwNi4zMDUtLjgwNC40NDktMS4yMDIuMTM1LS4zMy4yMDMtLjY4Ni4yMDMtMS4wNjcgMC0uODEzLS4yOTYtMS40OTktLjg3Mi0yLjA2Ni0uNTc2LS41NzYtMS4yNzktLjg2NC0yLjEwOC0uODY0LTEuOTY0IDAtMi45NTUuOTkxLTIuOTU1IDIuOTU1IDAgLjM4MS4wNjguNzM3LjIwMyAxLjA2Ny4zNjQgMS4wNzUuNjQzIDEuODIuODM4IDIuMjM1LjIyLjQ3NC40MTUuOTA2LjYwMSAxLjI3OS4xNzguMzcyLjMzOS42OTQuNDY2Ljk3NC4yMi41NS4zOTggMS4wOTIuNTUgMS42NDMuMDM0LjA5My4xMjcuNDE1LjI5Ni45NCIvPjwvc3ZnPg==',
        'wN': 'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNzcuMTciIGhlaWdodD0iMTc3LjE3IiBzaGFwZS1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiIgaW1hZ2UtcmVuZGVyaW5nPSJvcHRpbWl6ZVF1YWxpdHkiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiB2aWV3Qm94PSIwIDAgNTAgNTAiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iMCIgeDE9IjIxLjQwNSIgeDI9Ijc3LjY0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iI2ZmZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIwIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZmlsbD0iIzFmMWExNyIgZD0ibTI2LjE4IDkuMzk1YzIuNTk5LjE2OSA1IC44MzggNy4yMjIgMi4wMiAyLjIxIDEuMTY4IDQuMDk4IDIuNjc1IDUuNjU2IDQuNTEzIDEuMDkyIDEuMjg3IDIuMTE3IDIuODQ1IDMuMDgyIDQuNjY1Ljk3NCAxLjgxMiAxLjc0NCAzLjc0MiAyLjMyIDUuNzc0LjY2IDIuMzcxIDEuMDg0IDQuODUxIDEuMjUzIDcuNDU5LjE3OCAyLjU5OS4yNjMgNS4wMS4yNjMgNy4yM3Y1LjQwMmMwIDAtMS4yODcgMC0zLjg2MSAwLTIuNTY1IDAtNS45MDEgMC0xMC4wMSAwaC0xNi42MzdjLS4xNTIgMC0uMjItLjQwNi0uMjEyLTEuMjExLjAwOC0uODEzLjA1OS0xLjQ2NS4xNjEtMS45NjQuMDU5LS4zOTguMjItLjk1Ny40NjYtMS42ODUuMjU0LS43MjguNjYtMS42MDkgMS4yNDUtMi42NS4yNjItLjUzMy44ODktMS4zMDQgMS44OC0yLjMyLjk5OS0xLjAxNiAyLjEzNC0yLjIwMSAzLjQyOS0zLjUzOS43NDUtLjc2MiAxLjMyMS0xLjcxOSAxLjc0NC0yLjg3OS40MjMtMS4xNTEuNjAxLTIuMjAxLjUzMy0zLjE1LS42MS41LTEuMjc5LjkwNi0yLjAxIDEuMjE5LTMuNTA1IDEuMjUzLTYuMDUgMy4wNzMtNy42MTEgNS40NTItLjExOS4xNTItLjQ5MS44MjEtMS4xMTggMi4wMi0uMzMuNjI3LS42MTggMS4wNTgtLjg0NyAxLjI4Ny0uMzEzLjMxMy0uNzcxLjQ5MS0xLjM2My41MjUtLjkyMy4wNDItMS42NDMtLjM5OC0yLjE1OS0xLjM0Ni0uNjk0LjIwMy0xLjMxMi4yODgtMS44NjMuMjU0LS45MjMtLjM0Ny0xLjU5Mi0uNzItMi4wMS0xLjExOC0uODQ3LS44NDctMS4zODktMS42ODUtMS42NTEtMi41MzItLjI1NC0uODQ3LS4zODEtMS43NTMtLjM4MS0yLjcyNiAwLTEuMzg5Ljg1NS0zLjIyNiAyLjU4Mi01LjUxMiAyLjAyLTIuNjI1IDMuMDktNC42MzEgMy4yMTctNiAwLS41OTMuMDU5LTEuMjYyLjE3OC0yLjAxLjEwMi0uNTE3LjMwNS0xLjAxLjYxOC0xLjQ5LjIyLS4zMy4zNjQtLjU1OS40MzItLjY3Ny4wNzYtLjEyNy4yMTItLjMxMy40MTUtLjU1OS4xNDQtLjIwMy4yNzEtLjM1Ni4zNzMtLjQ1Ny4wOTMtLjExLjIyLS4yNTQuMzczLS40NC4xNzgtLjIxMi40MDYtLjQ1Ny42OTQtLjc0NS0uODgtMi40MTMtMS4yMzYtNC45MDItMS4wNjctNy40NTkgMy4yODUgMS4xNjggNi4wNSAzLjAxIDguMjggNS41MjkuNTUtMS44NzEgMS42MjYtMy4zODcgMy4yMjYtNC41MzggMS4zMjEuOTIzIDIuMzcxIDIuMTUxIDMuMTUgMy42NjYiLz48cGF0aCBmaWxsPSJ1cmwoIzApIiBkPSJtNDIuOTc2IDQ0LjY5M2MtLjAxNyAwIDAtLjQ0OS4wNDItMS4zNDYuMDUxLS45MDYuMDc2LTEuODguMDc2LTIuOTIxLjAxNy0yLjA2Ni4wMTctNC4yIDAtNi40MDktLjAxNy0yLjIxLS4zMTMtNC40MTEtLjg4OS02LjYxMy0uNTY3LTIuMTE3LTEuMTg1LTMuOTItMS44NjMtNS40MTktLjY3Ny0xLjQ5OS0xLjQxNC0yLjc4Ni0yLjIxLTMuODc4LTEuMTg1LTEuNzg2LTIuODExLTMuMzAyLTQuODYtNC41MzgtMi4wNDktMS4yNDUtNC4xOTEtMi4wNTctNi40MjYtMi40MzguMTUyLjgxMy4yMiAxLjYwOS4yMDMgMi4zODgtLjAzNC41OTMtLjMxMy44ODktLjg0Ny44ODktLjYxIDAtLjg4MS0uMjk2LS44MjEtLjg4OS4wNTEtMi4xODQtLjcyOC00LjA1Ni0yLjMyOC01LjYwNS0xLjI1MyAxLjMyMS0xLjkzOSAyLjg1My0yLjAzMiA0LjYwNi0uMDM0LjU4NC0uMzMuODM4LS44OTcuNzcxLS41MjUtLjAxNy0uNzg3LS4zMjItLjc4Ny0uOTE0IDAgMCAuMDE3LS4wNjguMDQyLS4yMDMtLjY3Ny4yMi0xLjM4OS41MjUtMi4xMzQuOTIzLS40NzQuMzMtLjg2NC4yNDUtMS4xNi0uMjQ2LS4yOTYtLjQ5OS0uMTY5LS44ODkuMzk4LTEuMTY4LjcxMS0uMzY0IDEuMjQ1LS42MzUgMS42MDktLjgyMS0xLjQyMi0xLjQ1Ni0zLjA0LTIuNjI1LTQuODYtMy41MjIuMTk1IDIuMzAzLjgzIDQuNDcgMS44ODggNi41MjguMjc5LjQyMy4yMTIuODA0LS4yMDMgMS4xMzUtLjQ2Ni4zNjQtLjg1NS4zMTMtMS4xNjgtLjE2OS0uMTEtLjE2OS0uMjc5LS40NjYtLjQ5MS0uODk3LS4zNDcuMzQ3LS41ODQuNjEtLjY5NC43Ny0uMTE4LjE1Mi0uMzIyLjQ4My0uNjEuOTkxLS4yODguNTE2LS40OTkuOTQtLjYzNSAxLjI3LS4xNDQuNDE1LS4yMTIuNzQ1LS4xODYgMS4wMS4wMjUuMjU0LjA1MS41MzMuMDY4Ljg1NS0uMTUyLjk3NC0uNDkxIDEuODg4LTEuMDEgMi43NTItLjUyNS44NTUtMS4xODUgMS45MDUtMS45OTggMy4xNS0uNzc5IDEuMTg1LTEuMzcyIDIuMDgzLTEuNzg2IDIuNjc1LS40MTUuNjAxLS43MjggMS4zNTUtLjk0IDIuMjg2LS4xNTIuNTU5LS4xNTIgMS4yNDUgMCAyLjA0MS4xNDQuODA0LjQ3NCAxLjQzMS45NjUgMS44OC43NjIuNzcgMS40OTkgMS4xMjYgMi4yMSAxLjA2Ny4yMjkgMCAuNTQyLS4wOTMuOTMxLS4yNzkuMzg5LS4xNzguNjg2LS41MjUuOTA2LTEuMDQxLjQyMy0uOTQuNzc5LTEuNDE0IDEuMDY3LTEuNDE0LjQwNiAwIC42MzUuMjM3LjY2OS42OTQgMCAuMTAyLS4xMzYuNTE3LS4zOTggMS4yNDUtLjE1Mi4zMy0uMzQ3LjY3Ny0uNTkzIDEuMDQxLS4zMjIuNDMyLS40NTcuNjEtLjQyMy41NDIuMjYyLjk0OC43MDMgMS4xMDkgMS4zMTIuNDk5LjE3OC0uMTc4LjM4OS0uNTI1LjYxOC0xLjAxNi4yMzctLjQ5OS42MDEtMS4xNjggMS4wOTItMi4wMS41ODQtLjk4MiAxLjIwMi0xLjc3IDEuODYzLTIuMzg4LjY2LS42MSAxLjI0NS0xLjEwOSAxLjc2MS0xLjQ4Mi4yOTYtLjIyLjY2LS40NjYgMS4wOTItLjc0NS40MzItLjI4OCAxLjAxLS41NzYgMS43MzYtLjg3Mi41NzYtLjIyOSAxLjIxOS0uNTE2IDEuOTIyLS44NTUuNzAzLS4zMzkgMS4zMjktLjc3IDEuODcxLTEuMzA0Ljc2Mi0uNzQ1IDEuMzQ2LTEuNjU5IDEuNzYxLTIuNzUyLjIyLS42MS4yOTYtMS4zNjMuMjQ1LTIuMjYxLS4xNDQtLjU1OS4xMzYtLjgzOC44NDctLjgzOC41MzMgMCAuODMuMjcxLjg5OC44MjEgMCAxLjg2My0uNTMzIDMuNTY0LTEuNTkyIDUuMTA1LjM0NyAxLjA1OC40NCAyLjIxOC4yNzEgMy40NzEtLjE0NCAxLjAxLS41IDIuMDkxLTEuMDUgMy4yNDMtLjU1OSAxLjE0My0xLjY3NiAyLjQyMi0zLjM2MSAzLjgyNy0zLjQyOSAyLjg0NS01LjA1IDUuNzc0LTQuODYgOC43OCAwIDAgMS40MDUgMCA0LjIyNSAwIDIuODE5IDAgNS40NyAwIDcuOTUgMGgxMy41NzJtLTMzLjYzOC0xNS4wOGMtLjQ4My4yOTYtLjc3LjY5NC0uODcyIDEuMTk0LjAxNy41NDItLjIzNy44MzgtLjc2Mi44ODktLjU4NC4wNjgtLjg4MS0uMTc4LS44OTgtLjc0NS4wNjgtMS4wOTIuNTUtMS45NTYgMS40NjUtMi41OTkuNDMyLS4zNDcuODMtLjMyMiAxLjE5NC4wOTMuMzY0LjQ0OS4zMjIuODM4LS4xMjcgMS4xNjhtNy4zNjYtMTEuODI4Yy4yMTIuMzMuMjk2LjY3Ny4yNDYgMS4wNDEtLjE2MSAxLjA1OC0uNzU0IDEuNDk5LTEuNzYxIDEuMzM4LS4yOTYtLjA1MS0uNTMzLS4xNTItLjcyLS4yOTYtLjA1OS4wNzYtLjE2MS4yNjItLjI5Ni41NDItLjE3OC41MzMtLjUyNS43MTEtMS4wNDEuNTUtLjUwOC0uMjAzLS43MTEtLjU3Ni0uNTkzLTEuMTE4Ljc0NS0xLjkwNSAyLjA5MS0zLjIwOSA0LjA0LTMuOTIuNTY3LS4xNjkuOTQgMCAxLjExOC40OTEuMjAzLjUzMy4wNTEuODk4LS40NDkgMS4wOTItLjA5My4wNTEtLjE4Ni4xMDItLjI3MS4xMzYtLjA4NS4wNDItLjE2OS4wOTMtLjI3MS4xNDQiLz48L3N2Zz4=',
        'wP': 'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNzcuMTciIGhlaWdodD0iMTc3LjE3IiBzaGFwZS1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiIgaW1hZ2UtcmVuZGVyaW5nPSJvcHRpbWl6ZVF1YWxpdHkiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiB2aWV3Qm94PSIwIDAgNTAgNTAiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iMCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIyMS4xMyIgeTE9IjM3LjM1IiB4Mj0iNzcuNzYiIHkyPSIzNy40NjkiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLjk3MzI0IDAgMS4yNDMpIj48c3RvcCBzdG9wLWNvbG9yPSIjZmZmIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9IjAiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPSJtMjUgNDYuNDVoLTEzLjM5NGMtLjY2LTEuNjA3LS45OTEtMy4yODgtLjk5MS01LjA0IDAtMi45NzUuODY0LTUuNjQ0IDIuNTk5LTguMDIgMS43MzYtMi4zNjUgMy45NzEtNC4wNTQgNi42OTctNS4wNjgtMS4xNjgtLjUyNy0yLjEyNS0xLjMyNy0yLjg2Mi0yLjM5OC0uNzM3LTEuMDcxLTEuMTAxLTIuMjgzLTEuMTAxLTMuNjM0IDAtMS42ODkuNTc2LTMuMTU2IDEuNzM2LTQuMzkyIDEuMTUyLTEuMjQ0IDIuNTc0LTEuOTYxIDQuMjY3LTIuMTUxLTEuMzQ2LS45ODEtMi4wMi0yLjI4Mi0yLjAyLTMuODg5IDAtMS4zNTEuNDkxLTIuNTEzIDEuNDgyLTMuNDc3Ljk4Mi0uOTY0IDIuMTc2LTEuNDQyIDMuNTgxLTEuNDQyIDEuMzg5IDAgMi41ODIuNDc4IDMuNTczIDEuNDQyLjk5MS45NjQgMS40OSAyLjEyNiAxLjQ5IDMuNDc3IDAgMS42MDctLjY2OSAyLjkwOS0yLjAyIDMuODg5IDEuNjkzLjE5IDMuMTE2LjkwNiA0LjI2NyAyLjE1MSAxLjE2IDEuMjM2IDEuNzM2IDIuNzAzIDEuNzM2IDQuMzkyIDAgMS4zNTEtLjM3MyAyLjU2My0xLjEyNiAzLjYzNC0uNzUzIDEuMDcxLTEuNzEgMS44Ny0yLjg2MiAyLjM5OCAyLjcyNiAxLjAxNCA0Ljk2MSAyLjcwMyA2LjY5NyA1LjA2OCAxLjczNiAyLjM3MyAyLjU5OSA1LjA0IDIuNTk5IDguMDIgMCAxLjczOS0uMzIyIDMuNDItLjk2NSA1LjA0aC0xMy4zOTQiIGZpbGw9IiMxZjFhMTciLz48cGF0aCBkPSJtMjUgNDQuODA4aDEyLjE3NWMuMzQ3LTEuMTU0LjUyNS0yLjI5MS41MjUtMy40MDMgMC0yLjUxMy0uNzExLTQuNzg3LTIuMTQyLTYuODMxLTEuNDMxLTIuMDQ0LTMuMjc3LTMuNTUyLTUuNTItNC41MTYtMS41ODQtLjYyLTEuNjQzLS42NTktMS42NDMtMS43MzkgMC0uODQ5LjU1OS0xLjQ3NSAxLjY2OC0xLjg3OSAxLjUzMi0xLjA0NyAyLjMwMy0yLjQzMSAyLjMwMy00LjE1MyAwLTEuMjQ0LS40MzItMi4zMjQtMS4yODctMy4yNjMtLjg2NC0uOTMxLTEuOTA1LTEuNDY3LTMuMTI0LTEuNjE1LS45OTktLjA4Mi0xLjQ5LS42MjYtMS40OS0xLjY0IDAtLjQ1My4xNzgtLjg3My41NDItMS4yNjEuODk4LS42NzYgMS4zNDYtMS41NTcgMS4zNDYtMi42NTMgMC0uODk4LS4zMzktMS42NzMtLjk5OS0yLjMxNi0uNjYtLjY0My0xLjQ0OC0uOTY0LTIuMzU0LS45NjQtLjk0IDAtMS43NDQuMzIxLTIuMzk2Ljk2NC0uNjUyLjY0My0uOTc0IDEuNDE3LS45NzQgMi4zMTYgMCAxLjA3OS40NCAxLjk2MSAxLjMzOCAyLjY1My4zNjQuMzU0LjU0Mi43NzUuNTQyIDEuMjYxIDAgMS4wMTQtLjQ4MyAxLjU1Ny0xLjQ2NSAxLjY0LTEuMjM2LjE0OC0yLjI4Ni42ODQtMy4xMzMgMS42MTUtLjg1NS45MzktMS4yNzkgMi4wMi0xLjI3OSAzLjI2MyAwIDEuNzIyLjc3IDMuMTA2IDIuMzAzIDQuMTUzIDEuMTA5LjQxMiAxLjY2OCAxLjA0NiAxLjY2OCAxLjg3OSAwIDEuMDc5LS4wNjcgMS4xMTgtMS42NjggMS43MzktMi4yNDQuOTY0LTQuMDgxIDIuNDcyLTUuNTAzIDQuNTE2LTEuNDIyIDIuMDQ0LTIuMTM0IDQuMzE4LTIuMTM0IDYuODMxIDAgMS4xOTUuMTc4IDIuMzI0LjUyNSAzLjQwM2gxMi4xNzUiIGZpbGw9InVybCgjMCkiLz48L3N2Zz4=',
        'wQ': 'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNzcuMTciIGhlaWdodD0iMTc3LjE3IiBzaGFwZS1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiIgaW1hZ2UtcmVuZGVyaW5nPSJvcHRpbWl6ZVF1YWxpdHkiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiB2aWV3Qm94PSIwIDAgNTAgNTAiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iMCIgeDE9IjIxLjI1MyIgeTE9IjM3LjIyIiB4Mj0iNzcuNjQiIHkyPSIzNy4zNSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiNmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iMCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxnIHN0cm9rZT0iIzFmMWExNyIgc3Ryb2tlLXdpZHRoPSIuMDc2Ij48cGF0aCBmaWxsPSIjMWYxYTE3IiBkPSJtNDQuNTQxIDE0LjcyM2MtLjk0IDAtMS43NDQtLjMzLTIuNDA1LS45ODItLjY2LS42NTItLjk5MS0xLjQ0OC0uOTkxLTIuMzk2IDAtLjkyMy4zMy0xLjcxOS45OTEtMi4zODguNjYtLjY3NyAxLjQ2NS0xLjAxIDIuNDA1LTEuMDEuOTMxIDAgMS43MjcuMzMgMi4zODggMS4wMS42Ni42NjkuOTkxIDEuNDY1Ljk5MSAyLjM4OCAwIC45NDgtLjMzIDEuNzQ0LS45OTEgMi4zOTYtLjY2LjY1Mi0xLjQ1Ni45ODItMi4zODguOTgyem0tNC4zMSAyOS4yMmMtLjgxMy43MTEtMi42MzMgMS4zMDQtNS40NjEgMS43ODYtMi44MjguNDc0LTYuMDg3LjcyLTkuNzcuNzItMy43NTEgMC03LjA1LS4yNTQtOS44OTgtLjc0NS0yLjg0NS0uNDk5LTQuNjQtMS4xMTgtNS4zODUtMS44NjNsMS41NjYtNS45NTItLjY5NC0zLjg5NS0yLjE4NC0zLjc5My0yLjEwOC0xNS40MjYgMS4yMTEtLjQ3NCA2Ljc5OSAxMS40NTUuMTUyLTEzLjY0IDEuNjg1LS4yOTYgNS4xODIgMTMuNzE2IDIuNzc3LTE0Ljc1N2gxLjcxOWwyLjc3NyAxNC43MDcgNS4xMzEtMTMuNjY1IDEuNzEuMjk2LjE1MiAxMy42NCA2LjgyNC0xMS40ODEgMS4xNi41NDItMi4wNTcgMTUuMzU5LTIuMjEgMy43OTMtLjY5NCAzLjk0NiAxLjYxNyA2LjAzem0tMjUuNjk2LTMxLjk1M2MtLjk0OCAwLTEuNzUzLS4zMjItMi40MTMtLjk3NC0uNjYtLjY1Mi0uOTkxLTEuNDU2LS45OTEtMi4zOTYgMC0uOTIzLjMzLTEuNzE5Ljk5MS0yLjM3OS42Ni0uNjYgMS40NjUtLjk5MSAyLjQxMy0uOTkxLjkyMyAwIDEuNzE5LjMzIDIuMzc5Ljk5MS42Ni42Ni45OTEgMS40NTYuOTkxIDIuMzc5IDAgLjk0LS4zMyAxLjc0NC0uOTkxIDIuMzk2LS42Ni42NTItMS40NTYuOTc0LTIuMzc5Ljk3NHptLTkuMTM2IDIuNzM1Yy0uOTQgMC0xLjczNi0uMzMtMi4zODgtLjk4Mi0uNjUyLS42NTItLjk4Mi0xLjQ0OC0uOTgyLTIuMzk2IDAtLjkyMy4zMy0xLjcxOS45ODItMi4zODguNjUyLS42NzcgMS40NDgtMS4wMSAyLjM4OC0xLjAxLjk0OCAwIDEuNzQ0LjMzIDIuNDEzIDEuMDEuNjYuNjY5Ljk5MSAxLjQ2NS45OTEgMi4zODggMCAuOTQ4LS4zMyAxLjc0NC0uOTkxIDIuMzk2LS42NjkuNjUyLTEuNDY1Ljk4Mi0yLjQxMy45ODJ6bTE5LjU1LTMuOTcxYy0uOTQgMC0xLjc0NC0uMzMtMi4zOTYtLjk5MS0uNjUyLS42Ni0uOTc0LTEuNDY1LS45NzQtMi40MDUgMC0uOTMxLjMyMi0xLjcyNy45NzQtMi4zODguNjUyLS42NiAxLjQ1Ni0uOTkxIDIuMzk2LS45OTEuOTIzIDAgMS43MjcuMzMgMi4zOTYuOTkxLjY2OS42Ni45OTkgMS40NTYuOTk5IDIuMzg4IDAgLjk0LS4zMyAxLjc0NC0uOTk5IDIuNDA1LS42NjkuNjYtMS40NzMuOTkxLTIuMzk2Ljk5MXptMTAuNDE0IDEuMjM2Yy0uOTQgMC0xLjczNi0uMzIyLTIuMzg4LS45NzQtLjY1Mi0uNjUyLS45ODItMS40NTYtLjk4Mi0yLjM5NiAwLS45MjMuMzMtMS43MTkuOTgyLTIuMzc5LjY1Mi0uNjYgMS40NDgtLjk5MSAyLjM4OC0uOTkxLjk0OCAwIDEuNzUzLjMzIDIuNDEzLjk5MS42Ni42Ni45OTEgMS40NTYuOTkxIDIuMzc5IDAgLjk0LS4zMyAxLjc0NC0uOTkxIDIuMzk2LS42Ni42NTItMS40NjUuOTc0LTIuNDEzLjk3NHoiLz48cGF0aCBmaWxsPSJ1cmwoIzApIiBkPSJtMzguMjIgNDMuMDRjLTMuMDItMS4yNTMtNy40MTctMS44OC0xMy4xNjYtMS44OC01Ljg3NiAwLTEwLjMxMi42NDMtMTMuMzI3IDEuOTMgMi44OTYgMS4xNDMgNy4zMTUgMS43MSAxMy4yNSAxLjcxIDIuODQ1IDAgNS40NDQtLjE1MiA3Ljc5OC0uNDY2IDIuMzYyLS4zMTMgNC4xNzQtLjc0NSA1LjQ0NC0xLjI5NXptLTEzLjI2Ny0zNC4wM2MxLjEwOSAwIDEuNjYtLjU1OSAxLjY2LTEuNjU5IDAtMS4wOTItLjU1LTEuNjQzLTEuNjYtMS42NDMtMS4wOTIgMC0xLjYzNC41NS0xLjYzNCAxLjY0MyAwIDEuMTAxLjU0MiAxLjY1OSAxLjYzNCAxLjY1OXptMTIuNjI0IDI0Ljk3N2MtMy4xOTItLjgxMy03LjM2Ni0xLjIxMS0xMi41MjItMS4yMTEtNS4yOTIgMC05LjUxNy40MDYtMTIuNjc1IDEuMjM2bC4zNzMgMi4zNzljMy4yMTctLjc2MiA3LjMyNC0xLjE0MyAxMi4zMDItMS4xNDMgNC45NDQgMCA4Ljk3NS4zNzMgMTIuMSAxLjExOGwuNDIzLTIuMzc5em0uNjE4LTEuNDlsMS42MTctMi44NTNjLS43OTYuMzIyLTEuNjA5LjQ3NC0yLjQzLjQ3NC0yLjIxOCAwLTMuOTg4LS44OTctNS4zMDktMi43MDEtLjk5MS44MjEtMi4xIDEuMjM2LTMuMzI3IDEuMjM2LTEuNTgzIDAtMi44NTMtLjYxOC0zLjc5My0xLjg2My0xLjA1OCAxLjE2LTIuMzIgMS43NDQtMy43OTMgMS43NDQtMS4xOTQgMC0yLjI4Ni0uNDA2LTMuMjc3LTEuMjE5LTEuMzg5IDEuNzctMy4xODMgMi42NS01LjM4NSAyLjY1LS44MzggMC0xLjY3Ni0uMTUyLTIuNTA2LS40NjZsMS43MzYgMi45NzJjMy4yMDktLjkyMyA3LjYyLTEuMzg5IDEzLjIyNS0xLjM4OSA1LjcwNiAwIDEwLjExOC40NzQgMTMuMjQyIDEuNDE0em0tMTEuMTEtNS45MjdsLTIuMTA4LTEyLjEzMy0yLjEwOCAxMS45ODljLjA1MS0uMDM0LjE2MS0uMTE5LjM0Ny0uMjU0LjM4MS0uNzQ1Ljk1Ny0xLjExOCAxLjczNi0xLjExOC44NDcgMCAxLjM4OS4zNzIgMS42MzQgMS4xMTguMTAyLjEwMi4yNzEuMjM3LjUuMzk4em02Ljg2Ny40NzR2LTExLjQ4OWwtNC4wODkgMTEuMjYxYy4zMTMtLjExLjU3Ni0uMjYyLjc5Ni0uNDQuMzMtLjQxNS43NzktLjYyNyAxLjMzOC0uNjI3LjY2IDAgMS4xOTQuMjk2IDEuNTkyLjg3Mi4wNDIuMDY4LjEwMi4xMzYuMTY5LjIxMi4wNjguMDc2LjEzNi4xNDQuMTk1LjIxMnptLTEzLjkzNi0uMzQ3bC00LjA2NC0xMS4xNDJ2MTEuMzM3Yy4wNDItLjA2OC4xMTktLjE0NC4yMi0uMjQ1LjMzLS42OTQuODcyLTEuMDQxIDEuNjM0LTEuMDQxLjYyNyAwIDEuMTQzLjI2MiAxLjU0MS43OTYuNDQ5LjE5NS42NjkuMjk2LjY2OS4yOTZ6bS02LjI5OSAxLjM4OWwtNS4zMzQtOS4yMDMgMS4zNjMgOC4zODJjLjk0LjY2IDEuODYzLjk5MSAyLjc1Mi45OTEuMzQ3IDAgLjc1NC0uMDU5IDEuMjE5LS4xNjl6bTIyLjM5NC4xMTljLjM4MS4xMTkuODA0LjE3OCAxLjI3LjE3OCAxLjAxIDAgMS45NDctLjMxMyAyLjgyOC0uOTRsMS4zNjMtOC41ODUtNS40NjEgOS4zNDd6bTEuNDkgMTIuNTU2bC0uNzQ1LTIuODAyYy0zLjI0My0uNzExLTcuMjA1LTEuMDY3LTExLjkwNC0xLjA2Ny00LjY0OCAwLTguNjExLjM1Ni0xMS44NzkgMS4wNjdsLS43NzEgMi44MjhjMy4wNzMtLjkzMSA3LjI5OC0xLjM4OSAxMi42NzUtMS4zODkgNS4yNDEgMCA5LjQ0OS40NDkgMTIuNjI0IDEuMzYzem0tMjMuMDYtMzAuNTE0YzEuMDg0IDAgMS42MzQtLjU0MiAxLjYzNC0xLjYzNCAwLTEuMDkyLS41NS0xLjYzNC0xLjYzNC0xLjYzNC0xLjEwOSAwLTEuNjY4LjU0Mi0xLjY2OCAxLjYzNCAwIDEuMDkyLjU1OSAxLjYzNCAxLjY2OCAxLjYzNHptMjAuODI4IDBjMS4xMDkgMCAxLjY2OC0uNTQyIDEuNjY4LTEuNjM0IDAtMS4wOTItLjU1OS0xLjYzNC0xLjY2OC0xLjYzNC0xLjA4NCAwLTEuNjM0LjU0Mi0xLjYzNCAxLjYzNCAwIDEuMDkyLjU1IDEuNjM0IDEuNjM0IDEuNjM0em0tMjkuOTY0IDIuNzM1YzEuMTA5IDAgMS42NjgtLjU1IDEuNjY4LTEuNjQzIDAtMS4xMDktLjU1OS0xLjY1OS0xLjY2OC0xLjY1OS0xLjA4NCAwLTEuNjM0LjU1LTEuNjM0IDEuNjU5IDAgMS4wOTIuNTUgMS42NDMgMS42MzQgMS42NDN6bTM5LjE0IDBjMS4wOTIgMCAxLjY0Mi0uNTUgMS42NDItMS42NDMgMC0xLjEwOS0uNTUtMS42NTktMS42NDItMS42NTktMS4xMDEgMC0xLjY2LjU1LTEuNjYgMS42NTkgMCAxLjA5Mi41NTkgMS42NDMgMS42NiAxLjY0M3oiLz48L2c+PC9zdmc+',
        'wR': 'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNzcuMTciIGhlaWdodD0iMTc3LjE3IiBzaGFwZS1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiIgaW1hZ2UtcmVuZGVyaW5nPSJvcHRpbWl6ZVF1YWxpdHkiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiB2aWV3Qm94PSIwIDAgNTAgNTAiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iMCIgeDE9IjIxLjM3NiIgeDI9Ijc3LjY0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iI2ZmZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIwIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZmlsbD0iIzFmMWExNyIgZD0ibTI4LjQwOCA5LjIyaDQuMjE2di0zLjM5NWg2Ljc5NnY5LjI5NWwtNS41IDQuMjQzdjExLjg1N2w0LjIyIDQuMjIxdjUuMDhoMy43ODl2NS45MjloLTMzLjg1OXYtNS45MjloMy43OTR2LTUuMDhsNC4yNDYtNC4yMjF2LTExLjg1N2wtNS41MDgtNC4yNDN2LTkuMjk1aDYuNzc0djMuMzk1aDQuMjQydi0zLjM5NWg2Ljc5eiIvPjxwYXRoIGZpbGw9InVybCgjMCkiIGQ9Im0zMy4wNyAxNy42NzhsMy4xNS0yLjU1N2gtMjIuNDJsMy4xNzUgMi41NTdoMTYuMW03LjE5NyAyNC41MjhoLTMwLjUxNHYyLjU1N2gzMC41MTR2LTIuNTU3bS0zLjg0NC01LjA1aC0yMi44MjZ2My4zN2gyMi44MjZ2LTMuMzdtLTQuMjE2LTE3Ljc4OGgtMTQuMzkzdjExLjg2MmgxNC4zOTN2LTExLjg2Mm01LjUwMy01LjkyN3YtNS45MjdoLTMuMzk1djMuMzk1aC03LjY0NXYtMy4zOTVoLTMuMzQ0djMuMzk1aC03LjYydi0zLjM5NWgtMy4zOTV2NS45MjdoMjUuNG0tMS45MTMgMjJsLTIuNTQ4LTIuNTMyaC0xNi40NTFsLTIuNTk5IDIuNTMyaDIxLjU5OCIvPjwvc3ZnPg=='
    },
    'oslo': {
        'bB': 'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5Ny4yIDk3LjIiPjx0aXRsZT5Pc2xvPC90aXRsZT48cGF0aCBkPSJNMzQuMjcsNjcuNjJINjAuODZsOS43Mi0yNy41NmE1LjQ5LDUuNDksMCwwLDAtMS4zLTUuNzFsLTYuMTEtNi4xMUw1MC44OSw0MC41MmwtNy4xMi03LjEyTDU2LjA1LDIxLjExbC04LjQ5LTguNDlMMjUuODQsMzQuMzVhNS40OSw1LjQ5LDAsMCwwLTEuMjksNS43MVoiLz48cGF0aCBkPSJNNzYuNzIsODIuMThINzAuNTNjLTUsMC05LjIxLTQuNTctMTAuMjktOS41NkgzNWMtMSw1LjU5LTUuMjUsOS41Ni0xMC4zNiw5LjU2SDEwdjEySDI2LjY3QTI0LjEyLDI0LjEyLDAsMCwwLDQ3LjU2LDgyLjE0LDI0LjEyLDI0LjEyLDAsMCwwLDY4LjQ1LDk0LjJIODUuMTJ2LTEyWiIvPjwvc3ZnPg==',
        'bK': 'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5Ny4yIDk3LjIiPjx0aXRsZT5Pc2xvPC90aXRsZT48cGF0aCBkPSJNODMsODQuMjVIMTQuNjZhNjAsNjAsMCwwLDEtMS41OCw5Ljk1SDg0LjU2bDAtLjE3QTYwLDYwLDAsMCwxLDgzLDg0LjI1WiIvPjxwYXRoIGQ9Ik0xNC4yOSw2OC41Mmg2OS4xYy4yNC0xLjc3LjU0LTMuNDcuOTEtNS4wN2w0LTE2Ljg2YTMzLjU0LDMzLjU0LDAsMCwwLTM5LjQzLDBoMGEzMy41NCwzMy41NCwwLDAsMC0zOS40MywwbDMuOTUsMTYuNjhDMTMuNzMsNjQuOTIsMTQsNjYuNjksMTQuMjksNjguNTJaIi8+PHBhdGggZD0iTTE0Ljc2LDczLjUyYy4xMSwxLjg5LjE2LDMuODEuMTMsNS43M0g4Mi43NmMwLTEuOTIsMC0zLjg0LjE0LTUuNzNaIi8+PHBhdGggZD0iTTQ0LjA3LDM5LjMxYTM0LjA2LDM0LjA2LDAsMCwxLDQuNzUsMi42LDM0LjA5LDM0LjA5LDAsMCwxLDQuNTktMi41M1YzMC4xNkg2Ny4wN1YyMC44Mkg1My40MVY4LjIySDQ0LjA3djEyLjZIMzAuNTd2OS4zNEg0NC4wN1oiLz48L3N2Zz4=',
        'bN': 'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5Ny4yIDk3LjIiPjx0aXRsZT5Pc2xvPC90aXRsZT48cGF0aCBkPSJNODAuNjUsOTQuMmwtMi43OS03LjQ4YTcwLjA3LDcwLjA3LDAsMCwxLTQtMzVsMS45My0xNEExNy40NywxNy40NywwLDAsMCw2OC41MiwyMUw1Mi4xOSwxMGwtLjkyLDEwLjlMMTUuNTgsMzUuNTRsOS41NiwxMi4zMywyNS41Mi00LjEyTDM2LDY1Ljk0bDguMjUsMTMuMTRMMzQsOTQuMloiLz48L3N2Zz4=',
        'bP': 'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5Ny4yIDk3LjIiPjx0aXRsZT5Pc2xvPC90aXRsZT48cG9seWdvbiBwb2ludHM9IjcwLjkzIDk0LjIgNTkuMzQgNTcuNDcgNjYuMyAyNC42MyA1OC4zIDI0LjYzIDU4LjMgMTIuNTIgNDYuMjYgMTIuNTIgNDYuMjYgMjQuNjMgMzguMjYgMjQuNjMgNDUuMjIgNTcuNDcgMzMuNjMgOTQuMiA3MC45MyA5NC4yIi8+PC9zdmc+',
        'bQ': 'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5Ny4yIDk3LjIiPjx0aXRsZT5Pc2xvPC90aXRsZT48cGF0aCBkPSJNNDkuODYsODIuMTRhNjAuMzIsNjAuMzIsMCwwLDAtMjQuNzQsNWwzLDcuMTFhNjIuODgsNjIuODgsMCwwLDEsMjEuNzQtMy42N0E2Mi44OCw2Mi44OCwwLDAsMSw3MS42LDk0LjJsMy03LjExQTYwLjMyLDYwLjMyLDAsMCwwLDQ5Ljg2LDgyLjE0WiIvPjxwYXRoIGQ9Ik03My40LDU3LDc4LDIxLjYzLDU4LjgxLDQ5LjE5bC05LTQxLjExTDQwLjkxLDQ5LjE5LDIxLjcxLDIxLjYzLDI2LjMxLDU3LDUuMjQsNDAuMjcsMjMuMTgsODIuNDlhNjUuNTEsNjUuNTEsMCwwLDEsMjYuNjgtNS4zNSw2NS41Miw2NS41MiwwLDAsMSwyNi42OCw1LjM1TDk0LjQ4LDQwLjI3Wk00OS44Niw2OS42OWwtNS4yNC04Ljc4LDUuMjQtNi42Miw1LjI0LDYuNjJaIi8+PC9zdmc+',
        'bR': 'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5Ny4yIDk3LjIiPjx0aXRsZT5Pc2xvPC90aXRsZT48cGF0aCBkPSJNNzQsMTYuNzUsNzMuODcsNi40SDY2LjUzdjcuMzRoLTZWNi40SDUyLjR2Ny4zNGgtNlY2LjRIMzguMjZ2Ny4zNGgtNlY2LjRIMjUuMThsLS4zOSwxMC4zNUEyNS4zMiwyNS4zMiwwLDAsMCwzNiwzNy42NGwtOSw1Ni41Nkg3Mi43N0w2My42OCwzNy4wNkEyNS4xOCwyNS4xOCwwLDAsMCw3NCwxNi43NVoiLz48L3N2Zz4=',
        'wB': 'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5Ny4yIDk3LjIiPjxkZWZzPjxzdHlsZT4uYXtmaWxsOiNmZmY7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5Pc2xvPC90aXRsZT48cGF0aCBkPSJNODcuNTIsOTQuMkg2OC41N0EyNi4zOSwyNi4zOSwwLDAsMSw0OCw4NC4yM2EyNi4zOSwyNi4zOSwwLDAsMS0yMC42MSwxMEg4LjQxVjc3LjM0SDI1LjNhNy40Miw3LjQyLDAsMCwwLDYtMy4xNCw4LjkyLDguOTIsMCwwLDAsMS4wOC04LjI4TDIyLjg5LDM5LjFhOCw4LDAsMCwxLDEuODctOC4yM0w0OCw3LjY3LDU5Ljg3LDE5LjU4LDQ3Ljc1LDMxLjdsMy40OSwzLjQ5TDYzLjM3LDIzLjA4bDcuOCw3LjhBNy45Miw3LjkyLDAsMCwxLDczLDM5LjFMNjMuNjcsNjUuNjNhOSw5LDAsMCwwLDEsOC4xNyw3LjU4LDcuNTgsMCwwLDAsNS45NCwzLjU0SDg3LjUyWiIvPjxwYXRoIGNsYXNzPSJhIiBkPSJNMzcuNDksNjUuNDRoMjFsOS44OC0yOGEyLjkzLDIuOTMsMCwwLDAtLjY5LTNsLTQuMjYtNC4yNkw1MS4yNSw0Mi4yNyw0MC42OCwzMS43LDUyLjgsMTkuNTgsNDgsMTQuNzQsMjguMywzNC40MWEyLjkzLDIuOTMsMCwwLDAtLjY5LDNaIi8+PHBhdGggY2xhc3M9ImEiIGQ9Ik03MC42Myw4Mi4zNGMtNi41MSwwLTExLjU3LTUuODctMTIuNjktMTEuOUgzOGMtMSw2Ljg0LTYuMjQsMTEuOS0xMi43MywxMS45SDEzLjQxVjg5LjJIMjcuMzVBMjEuMzYsMjEuMzYsMCwwLDAsNDUuOCw3OC41NUw0OCw3NC44bDIuMTcsMy43NUEyMS4zNiwyMS4zNiwwLDAsMCw2OC41Nyw4OS4ySDgyLjUyVjgyLjM0WiIvPjwvc3ZnPg==',
        'wK': 'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5Ny4yIDk3LjIiPjxkZWZzPjxzdHlsZT4uYXtmaWxsOiNmZmY7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5Pc2xvPC90aXRsZT48cGF0aCBkPSJNODYuNzUsNjEuOCw5MSw0My40OWwtMS4zNC0xYTM1LjYzLDM1LjYzLDAsMCwwLTMzLjE1LTQuN1YzMC4wN0g3MC44OFYxNS4yNkg1Ni41NVYySDQxLjc0VjE1LjI2SDI3LjU4djE0LjhINDEuNzR2Ny43M0EzNS42NCwzNS42NCwwLDAsMCw4LjY0LDQyLjUxbC0xLjM1LDEsNC4yOSwxOC4xNGE2OC41NSw2OC41NSwwLDAsMS0uMjQsMjkuNDVsLS44LDMuMTJIODcuNzdMODcsOTAuOTJBNjguNjUsNjguNjUsMCwwLDEsODYuNzUsNjEuOFoiLz48cGF0aCBjbGFzcz0iYSIgZD0iTTQ2Ljc0LDQwcTEuMjMuNjcsMi40MiwxLjQ1LDEuMTctLjc2LDIuMzgtMS40M3YtMTVINjUuODh2LTQuOEg1MS41NVY3aC00LjhWMjAuMjZIMzIuNTh2NC44SDQ2Ljc0WiIvPjxwYXRoIGNsYXNzPSJhIiBkPSJNNTAuNjQsNDYuNTVsLTEuNDcsMS4wN0w0Ny43LDQ2LjU1YTMwLjY1LDMwLjY1LDAsMCwwLTM0Ljc3LS45M2wzLjUyLDE0Ljg2YTU5LjQ2LDU5LjQ2LDAsMCwxLDEuMjUsNy42NGg2M2E1OS4zNSw1OS4zNSwwLDAsMSwxLjIxLTcuNDZsMy41My0xNUEzMC42NSwzMC42NSwwLDAsMCw1MC42NCw0Ni41NVoiLz48cGF0aCBjbGFzcz0iYSIgZD0iTTE4LjA2LDc2Ljg3SDgwLjI5YzAtMS4yNSwwLTIuNSwwLTMuNzVIMThDMTguMDcsNzQuMzYsMTguMDgsNzUuNjIsMTguMDYsNzYuODdaIi8+PHBhdGggY2xhc3M9ImEiIGQ9Ik04MC41MSw4MS44N0gxNy44NGE2Nyw2NywwLDAsMS0xLDcuMzNIODEuNDZBNjYuODUsNjYuODUsMCwwLDEsODAuNTEsODEuODdaIi8+PC9zdmc+',
        'wN': 'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5Ny4yIDk3LjIiPjxkZWZzPjxzdHlsZT4uYXtmaWxsOiNmZmY7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5Pc2xvPC90aXRsZT48cGF0aCBkPSJNNzcuNTksOTQuMkgyNC43bDExLjUxLTE3TDI4LjM0LDY0LjY0LDQwLjA4LDQ2LjgyLDE5LjgzLDUwLjA5LDcuNzYsMzQuNTIsNDMuNTMsMTkuODUsNDQuNjQsNi43LDYzLjc5LDE5LjY1QTE5LjE1LDE5LjE1LDAsMCwxLDcxLjg0LDM4TDcwLDUxLjQyYTY0Ljc3LDY0Ljc3LDAsMCwwLDMuNjcsMzIuMjVaIi8+PHBhdGggY2xhc3M9ImEiIGQ9Ik02OSw4NS40MkE2OS42NSw2OS42NSwwLDAsMSw2NSw1MC43M2wxLjg1LTEzLjM5QTE0LjE2LDE0LjE2LDAsMCwwLDYxLDIzLjc2bC0xMi04LjE0LS42NSw3LjdMMTUuNzQsMzYuNjZsNi4yMiw4LDI4LjU2LTQuNjFMMzQuMjgsNjQuN2w3LjksMTIuNTlMMzQuMTMsODkuMkg3MC4zOVoiLz48L3N2Zz4=',
        'wP': 'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5Ny4yIDk3LjIiPjxkZWZzPjxzdHlsZT4uYXtmaWxsOiNmZmY7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5Pc2xvPC90aXRsZT48cG9seWdvbiBwb2ludHM9IjcwLjMxIDk0LjIgNTguNDQgNTYuNTggNjUuNTggMjIuOSA1Ny4zNiAyMi45IDU3LjM2IDExLjM3IDQwLjkgMTEuMzcgNDAuOSAyMi45IDMyLjY4IDIyLjkgMzkuODIgNTYuNTggMjcuOTUgOTQuMiA3MC4zMSA5NC4yIi8+PHJlY3QgY2xhc3M9ImEiIHg9IjQ1Ljg5IiB5PSIxNi4zNyIgd2lkdGg9IjYuNDciIGhlaWdodD0iNi41NCIvPjxwb2x5Z29uIGNsYXNzPSJhIiBwb2ludHM9IjUzLjI3IDU2LjgzIDU5LjQxIDI3LjkgMzguODUgMjcuOSA0NC45OCA1Ni44MyAzNC43NyA4OS4yIDYzLjQ5IDg5LjIgNTMuMjcgNTYuODMiLz48L3N2Zz4=',
        'wQ': 'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5Ny4yIDk3LjIiPjxkZWZzPjxzdHlsZT4uYXtmaWxsOiNmZmY7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5Pc2xvPC90aXRsZT48cGF0aCBkPSJNNjkuNjcsOTQuMmwtMi4yNS0uODRhNTUuNzksNTUuNzksMCwwLDAtMTkuMjctMy4yNSw1NS43OSw1NS43OSwwLDAsMC0xOS4yNywzLjI1bC0yLjI1Ljg0TDEuOTIsMzUuNTMsMjMuMDYsNTEuMDhsLTQuODMtMzVMMzguNjUsNDQuMzJsOS40OS00MS41LDkuNTEsNDEuNUw3OC4wOCwxNi4wNmwtNC44MywzNUw5NC4zOCwzNS41M1oiLz48cGF0aCBjbGFzcz0iYSIgZD0iTTQ4LjE1LDgwLjEyQTU1LDU1LDAsMCwwLDI3LjcsODMuODRsMS43MSw0LjA1YTYyLjIyLDYyLjIyLDAsMCwxLDE4Ljc1LTIuNzhBNjIuMjIsNjIuMjIsMCwwLDEsNjYuOSw4Ny44OWwxLjcxLTQuMDVBNTUsNTUsMCwwLDAsNDguMTUsODAuMTJaIi8+PHBhdGggY2xhc3M9ImEiIGQ9Ik0yNS43Niw3OS4yM2E2MC4xMSw2MC4xMSwwLDAsMSwyMi4zOS00LjEyLDYwLjExLDYwLjExLDAsMCwxLDIyLjM5LDQuMTJMODIuNzMsNTAuMzEsNjYuNjgsNjIuMTJsMy43MS0yNi44OC0xNS4xNSwyMS03LjA5LTMxLTcuMDgsMzEtMTUuMTUtMjEsMy43MSwyNi44OEwxMy41Nyw1MC4zMVpNNDguMTUsNTUuODEsNTMsNjEuOTVsLTQuODUsOC4xM0w0My4zLDYxLjk1WiIvPjwvc3ZnPg==',
        'wR': 'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5Ny4yIDk3LjIiPjxkZWZzPjxzdHlsZT4uYXtmaWxsOiNmZmY7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5Pc2xvPC90aXRsZT48cGF0aCBkPSJNNzYuNjMsOTQuMkgyMy41bDkuNTEtNTZBMjYuMzgsMjYuMzgsMCwwLDEsMjEuNzUsMTYuODJsLjUtMTIuNTFoNTVsLjE2LDEyLjUxQTI2LjQzLDI2LjQzLDAsMCwxLDY3LDM3LjU5WiIvPjxwYXRoIGNsYXNzPSJhIiBkPSJNNjIuOTIsMzQuMzhhMjEuNDEsMjEuNDEsMCwwLDAsOS41Mi0xNy41NGwtLjEtNy41M0g2NC42NnY4LjM2aC01VjkuMzFINTIuMDl2OC4zNmgtNVY5LjMxSDM5LjUzdjguMzZoLTVWOS4zMUgyNy4wNWwtLjMsNy42MWEyMS42NSwyMS42NSwwLDAsMCwxMC4zMSwxOGwxLjQ0Ljg4TDI5LjQyLDg5LjJINzAuNzFMNjEuNTcsMzUuMjhaIi8+PC9zdmc+'
    },
    'california': {
        'bB': 'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSItNTAgLTYwIDM4MS4zMTYgNTExLjY1MyIgdmVyc2lvbj0iMS4xIj48ZGVmcz48Y2xpcFBhdGggaWQ9ImNsaXAxIj48cGF0aCBkPSJNIDAgNzAgTCAyOTEuMzE2NDA2IDcwIEwgMjkxLjMxNjQwNiA0MzEuNjUyMzQ0IEwgMCA0MzEuNjUyMzQ0IFogTSAwIDcwICIvPjwvY2xpcFBhdGg+PC9kZWZzPjxnIGlkPSJzdXJmYWNlMSI+PHBhdGggc3R5bGU9IiBzdHJva2U6bm9uZTtmaWxsLXJ1bGU6bm9uemVybztmaWxsOnJnYig1MC4xOTY4MzglLDUwLjE5NjgzOCUsNTAuMTk2ODM4JSk7ZmlsbC1vcGFjaXR5OjE7IiBkPSJNIDE4MC4zNTkzNzUgNDkuODMyMDMxIEMgMTgwLjM1OTM3NSA2OS4wNzAzMTIgMTY0Ljc2NTYyNSA4NC42NjQwNjIgMTQ1LjUyNzM0NCA4NC42NjQwNjIgQyAxMjYuMjg5MDYyIDg0LjY2NDA2MiAxMTAuNjk1MzEyIDY5LjA3MDMxMiAxMTAuNjk1MzEyIDQ5LjgzMjAzMSBDIDExMC42OTUzMTIgMzAuNTkzNzUgMTI2LjI4OTA2MiAxNSAxNDUuNTI3MzQ0IDE1IEMgMTY0Ljc2NTYyNSAxNSAxODAuMzU5Mzc1IDMwLjU5Mzc1IDE4MC4zNTkzNzUgNDkuODMyMDMxICIvPjxwYXRoIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlLXdpZHRoOjMwO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZTpyZ2IoMCUsMCUsMCUpO3N0cm9rZS1vcGFjaXR5OjE7c3Ryb2tlLW1pdGVybGltaXQ6MTA7IiBkPSJNIC0wLjAwMDgyNSAwLjAwMDY2ODc1IEMgLTAuMDAwODI1IC0xOS4yMzc2MTIgLTE1LjU5NDU3NSAtMzQuODMxMzYyIC0zNC44MzI4NTYgLTM0LjgzMTM2MiBDIC01NC4wNzExMzggLTM0LjgzMTM2MiAtNjkuNjY0ODg4IC0xOS4yMzc2MTIgLTY5LjY2NDg4OCAwLjAwMDY2ODc1IEMgLTY5LjY2NDg4OCAxOS4yMzg5NSAtNTQuMDcxMTM4IDM0LjgzMjcgLTM0LjgzMjg1NiAzNC44MzI3IEMgLTE1LjU5NDU3NSAzNC44MzI3IC0wLjAwMDgyNSAxOS4yMzg5NSAtMC4wMDA4MjUgMC4wMDA2Njg3NSBaIE0gLTAuMDAwODI1IDAuMDAwNjY4NzUgIiB0cmFuc2Zvcm09Im1hdHJpeCgxLDAsMCwtMSwxODAuMzYwMiw0OS44MzI3KSIvPjxwYXRoIHN0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDpyZ2IoMzAuMTk1NjE4JSwzMC4xOTU2MTglLDMwLjE5NTYxOCUpO2ZpbGwtb3BhY2l0eToxOyIgZD0iTSAyNDguMTQ4NDM4IDE2OS44NTkzNzUgQyAxOTEuNjIxMDk0IDE4NS4yMjI2NTYgMTUzLjg4MjgxMiAyODEuMjg1MTU2IDE1My44ODI4MTIgMjgxLjI4NTE1NiBDIDE1My44ODI4MTIgMjgxLjI4NTE1NiAxNTguNTU4NTk0IDE5NC43NjU2MjUgMTk4LjczMDQ2OSAxMjEuMTgzNTk0IEMgMTcwLjgzNTkzOCA5OC45MTc5NjkgMTQ2LjEwOTM3NSA4NS4xNDA2MjUgMTQ2LjEwOTM3NSA4NS4xNDA2MjUgQyAxNDYuMTA5Mzc1IDg1LjE0MDYyNSAxNC4wOTc2NTYgMTU3LjI2OTUzMSAxNS4wMDM5MDYgMjM5LjgzNTkzOCBDIDE1LjkxNDA2MiAzMjIuNDAyMzQ0IDgxLjIzODI4MSAzODYuODIwMzEyIDczLjA3NDIxOSA0MDQuMDYyNSBDIDY0LjkwNjI1IDQyMS4zMDA3ODEgMjI3LjMxNjQwNiA0MjAuMzk0NTMxIDIxOS4xNDg0MzggNDA0LjA2MjUgQyAyMTAuOTg0Mzc1IDM4Ny43MzA0NjkgMjc1LjQwMjM0NCAzMjEuNDk2MDk0IDI3Ni4zMTI1IDIzOS44MzU5MzggQyAyNzYuNTg1OTM4IDIxNS4xMjUgMjY0Ljc2MTcxOSAxOTEuMjA3MDMxIDI0OC4xNDg0MzggMTY5Ljg1OTM3NSAiLz48cGF0aCBzdHlsZT0iIHN0cm9rZTpub25lO2ZpbGwtcnVsZTpub256ZXJvO2ZpbGw6cmdiKDUwLjE5NjgzOCUsNTAuMTk2ODM4JSw1MC4xOTY4MzglKTtmaWxsLW9wYWNpdHk6MTsiIGQ9Ik0gMTUwLjMxNjQwNiA5MS43NzM0MzggQyA5OS44MTY0MDYgMTc4Ljc3MzQzOCA4Ny44MTY0MDYgMjE3Ljc3MzQzOCA4Ny44MTY0MDYgMjQ0Ljc3MzQzOCBDIDg3LjgxNjQwNiAzMDEuNjk1MzEyIDEzOC44MTY0MDYgMzkyLjc3MzQzOCAxMTQuMzE2NDA2IDQwNi43NzM0MzggTCA3OC4zMTY0MDYgNDA2Ljc3MzQzOCBMIDMzLjMxNjQwNiAzMTYuNzczNDM4IEwgMTUuMzE2NDA2IDI1My43NzM0MzggTCAyNC4zMTY0MDYgMTk5Ljc3MzQzOCBMIDYwLjMxNjQwNiAxNTQuNzczNDM4IFogTSAxNTAuMzE2NDA2IDkxLjc3MzQzOCAiLz48ZyBjbGlwLXBhdGg9InVybCgjY2xpcDEpIiBjbGlwLXJ1bGU9Im5vbnplcm8iPjxwYXRoIHN0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDpyZ2IoMCUsMCUsMCUpO2ZpbGwtb3BhY2l0eToxOyIgZD0iTSA4OC42ODM1OTQgMzk3LjU0Njg3NSBDIDk4LjA3ODEyNSAzOTkuNjA5Mzc1IDExNy4zOTA2MjUgNDAxLjY1MjM0NCAxNDQuNDY0ODQ0IDQwMS42NTIzNDQgQyAxNDUuMDM5MDYyIDQwMS42NTIzNDQgMTQ1LjYxMzI4MSA0MDEuNjUyMzQ0IDE0Ni4xOTE0MDYgNDAxLjY1MjM0NCBDIDE3NC4wNTQ2ODggNDAxLjU2MjUgMTkzLjk1NzAzMSAzOTkuMzk4NDM4IDIwMy41OTc2NTYgMzk3LjI3NzM0NCBDIDIwNC44Nzg5MDYgMzg2Ljk0OTIxOSAyMTEuNjg3NSAzNzQuNjc5Njg4IDIyMS4wMTU2MjUgMzU3Ljg3NSBDIDIzNy44MDA3ODEgMzI3LjYyNSAyNjAuNzk2ODc1IDI4Ni4xOTUzMTIgMjYxLjMxMjUgMjM5LjY2Nzk2OSBDIDI2MS40OTIxODggMjIzLjU5NzY1NiAyNTUuMjUgMjA2LjIxNDg0NCAyNDIuNzQ2MDk0IDE4Ny44ODI4MTIgQyAyMDYuNTk3NjU2IDIwNS40Njg3NSAxNzYuODQ3NjU2IDI2My45Mzc1IDE2Ny44Mzk4NDQgMjg2Ljc4MTI1IEMgMTY1LjE0MDYyNSAyOTMuNjI1IDE1Ny44NjcxODggMjk3LjUxMTcxOSAxNTAuNjg3NSAyOTUuOTM3NSBDIDE0My40OTYwOTQgMjk0LjM2NzE4OCAxMzguNTA3ODEyIDI4Ny44MjQyMTkgMTM4LjkwMjM0NCAyODAuNDc2NTYyIEMgMTM5LjA4OTg0NCAyNzYuOTg4MjgxIDE0My43NDIxODggMTk4LjE2NDA2MiAxNzkuNjUyMzQ0IDEyNS4zODY3MTkgQyAxNjUuNzMwNDY5IDExNC45NDE0MDYgMTUzLjQyMTg3NSAxMDcuMDQyOTY5IDE0Ni4wNDY4NzUgMTAyLjUyNzM0NCBDIDEzNC43NzM0MzggMTA5LjMxNjQwNiAxMTIuMDE1NjI1IDEyMy44NjMyODEgODkuNjI1IDE0My4yMTg3NSBDIDYyLjIwMzEyNSAxNjYuOTI5Njg4IDI5LjU5NzY1NiAyMDIuOTEwMTU2IDMwLjAwMzkwNiAyMzkuNjcxODc1IEMgMzAuNTE5NTMxIDI4Ni42MTMyODEgNTMuNzg1MTU2IDMyNy41NzQyMTkgNzAuNzczNDM4IDM1Ny40ODQzNzUgQyA4MC40OTYwOTQgMzc0LjYwMTU2MiA4Ny41MjczNDQgMzg2Ljk4MDQ2OSA4OC42ODM1OTQgMzk3LjU0Njg3NSBNIDE0NC41NzQyMTkgNDMxLjY1MjM0NCBDIDEyOC4xNDA2MjUgNDMxLjY1MjM0NCAxMTIuMjU3ODEyIDQzMC45MDIzNDQgOTkuNjQ4NDM4IDQyOS41MjM0MzggQyA3Ny4wMjczNDQgNDI3LjA1MDc4MSA2OS41MzUxNTYgNDIzLjI0NjA5NCA2NS4xOTUzMTIgNDE5Ljg0NzY1NiBDIDU4Ljc4NTE1NiA0MTQuODMyMDMxIDU2LjMxMjUgNDA3LjAzMTI1IDU4LjY0MDYyNSAzOTkuODM5ODQ0IEMgNTcuNTExNzE5IDM5NC44Nzg5MDYgNTAuNDM3NSAzODIuNDI1NzgxIDQ0LjY4NzUgMzcyLjMwMDc4MSBDIDI3LjEzMjgxMiAzNDEuMzk0NTMxIDAuNjA1NDY5IDI5NC42OTE0MDYgMC4wMDM5MDYyNSAyNDAgQyAtMC40MjE4NzUgMjAxLjEzMjgxMiAyMy4yNjk1MzEgMTYwLjgxNjQwNiA3MC40MjE4NzUgMTIwLjE2NDA2MiBDIDEwNC4xMzI4MTIgOTEuMTA1NDY5IDEzNy41MTU2MjUgNzIuNzQyMTg4IDEzOC45MTc5NjkgNzEuOTc2NTYyIEMgMTQzLjQzNzUgNjkuNTAzOTA2IDE0OC45MTQwNjIgNjkuNTI3MzQ0IDE1My40MTQwNjIgNzIuMDM1MTU2IEMgMTU0LjQ2NDg0NCA3Mi42MjUgMTc5LjU0Njg3NSA4Ni42Nzk2ODggMjA4LjA4OTg0NCAxMDkuNDYwOTM4IEMgMjEzLjc4MTI1IDExNC4wMDM5MDYgMjE1LjM4NjcxOSAxMjEuOTgwNDY5IDIxMS44OTQ1MzEgMTI4LjM3NSBDIDE5OC45OTIxODggMTUyLjAwNzgxMiAxODkuODkwNjI1IDE3Ny4yMzgyODEgMTgzLjUgMjAwLjI3MzQzOCBDIDIwMi43Njk1MzEgMTc2LjE3OTY4OCAyMjMuMTE3MTg4IDE2MS4xMTcxODggMjQ0LjIxNDg0NCAxNTUuMzgyODEyIEMgMjUwLjA0Njg3NSAxNTMuNzk2ODc1IDI1Ni4yNjk1MzEgMTU1Ljg3MTA5NCAyNTkuOTg4MjgxIDE2MC42NDg0MzggQyAyODEuMDU0Njg4IDE4Ny43MTg3NSAyOTEuNTkzNzUgMjE0LjQxNzk2OSAyOTEuMzA4NTk0IDI0MC4wMDM5MDYgQyAyOTAuNzA3MDMxIDI5NC4xMTcxODggMjY0LjU1NDY4OCAzNDEuMjQ2MDk0IDI0Ny4yNDYwOTQgMzcyLjQzMzU5NCBDIDI0MS42NjAxNTYgMzgyLjUgMjM0Ljc5Mjk2OSAzOTQuODY3MTg4IDIzMy41OTM3NSAzOTkuODU5Mzc1IEMgMjM1Ljg0NzY1NiA0MDYuNzkyOTY5IDIzMy41NzAzMTIgNDE0LjMzNTkzOCAyMjcuNTAzOTA2IDQxOS4yOTY4NzUgQyAyMjMuMzEyNSA0MjIuNzE4NzUgMjE1Ljk5NjA5NCA0MjYuNTc0MjE5IDE5My40NjQ4NDQgNDI5LjE5MTQwNiBDIDE4MC4zNzUgNDMwLjcwNzAzMSAxNjMuNzUzOTA2IDQzMS41ODIwMzEgMTQ2LjY2MDE1NiA0MzEuNjQ4NDM4IEMgMTQ1Ljk2NDg0NCA0MzEuNjUyMzQ0IDE0NS4yNjk1MzEgNDMxLjY1MjM0NCAxNDQuNTc0MjE5IDQzMS42NTIzNDQgIi8+PC9nPjxwYXRoIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlLXdpZHRoOjMwO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2U6cmdiKDAlLDAlLDAlKTtzdHJva2Utb3BhY2l0eToxO3N0cm9rZS1taXRlcmxpbWl0OjEwOyIgZD0iTSAwLjAwMDIwNjI1IDAuMDAwNjYyNSBDIDE1LjU4MjIzOCAtMjQuMzM1Mjc1IDE4MS41MDAyMDYgLTI4LjgzOTE4MSAxOTguMDAwMjA2IDAuMDAwNjYyNSAiIHRyYW5zZm9ybT0ibWF0cml4KDEsMCwwLC0xLDQ3LjMxNjIsMzQ0LjI3NDEpIi8+PC9nPjwvc3ZnPg==',
        'bK': 'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSItNTAgLTYwIDQ3OC43NjYgNTIxLjU3OSIgdmVyc2lvbj0iMS4xIj48ZGVmcz48Y2xpcFBhdGggaWQ9ImNsaXAxIj48cGF0aCBkPSJNIDQ0IDM1NiBMIDM0NSAzNTYgTCAzNDUgNDMxLjU3ODEyNSBMIDQ0IDQzMS41NzgxMjUgWiBNIDQ0IDM1NiAiLz48L2NsaXBQYXRoPjxjbGlwUGF0aCBpZD0iY2xpcDIiPjxwYXRoIGQ9Ik0gMjQxIDEyNyBMIDM4OC43NjU2MjUgMTI3IEwgMzg4Ljc2NTYyNSAzMjIgTCAyNDEgMzIyIFogTSAyNDEgMTI3ICIvPjwvY2xpcFBhdGg+PGNsaXBQYXRoIGlkPSJjbGlwMyI+PHBhdGggZD0iTSAwIDAgTCAzODguNzY1NjI1IDAgTCAzODguNzY1NjI1IDQzMS41NzgxMjUgTCAwIDQzMS41NzgxMjUgWiBNIDAgMCAiLz48L2NsaXBQYXRoPjxjbGlwUGF0aCBpZD0iY2xpcDQiPjxwYXRoIGQ9Ik0gMCAwIEwgMzg4Ljc2NTYyNSAwIEwgMzg4Ljc2NTYyNSA0MzEuNTc4MTI1IEwgMCA0MzEuNTc4MTI1IFogTSAwIDAgIi8+PC9jbGlwUGF0aD48Y2xpcFBhdGggaWQ9ImNsaXA1Ij48cGF0aCBkPSJNIDAgMCBMIDM4OC43NjU2MjUgMCBMIDM4OC43NjU2MjUgNDMxLjU3ODEyNSBMIDAgNDMxLjU3ODEyNSBaIE0gMCAwICIvPjwvY2xpcFBhdGg+PC9kZWZzPjxnIGlkPSJzdXJmYWNlMSI+PHBhdGggc3R5bGU9IiBzdHJva2U6bm9uZTtmaWxsLXJ1bGU6bm9uemVybztmaWxsOnJnYigzMC4xOTU2MTglLDMwLjE5NTYxOCUsMzAuMTk1NjE4JSk7ZmlsbC1vcGFjaXR5OjE7IiBkPSJNIDMxOS4zODI4MTIgNDE2LjU3ODEyNSBMIDY5LjM4MjgxMiA0MTYuNTc4MTI1IEMgNjMuODU5Mzc1IDQxNi41NzgxMjUgNTkuMzgyODEyIDQxMi4xMDE1NjIgNTkuMzgyODEyIDQwNi41NzgxMjUgTCA1OS4zODI4MTIgMzgxLjU3ODEyNSBDIDU5LjM4MjgxMiAzNzYuMDU4NTk0IDYzLjg1OTM3NSAzNzEuNTc4MTI1IDY5LjM4MjgxMiAzNzEuNTc4MTI1IEwgMzE5LjM4MjgxMiAzNzEuNTc4MTI1IEMgMzI0LjkwNjI1IDM3MS41NzgxMjUgMzI5LjM4MjgxMiAzNzYuMDU4NTk0IDMyOS4zODI4MTIgMzgxLjU3ODEyNSBMIDMyOS4zODI4MTIgNDA2LjU3ODEyNSBDIDMyOS4zODI4MTIgNDEyLjEwMTU2MiAzMjQuOTA2MjUgNDE2LjU3ODEyNSAzMTkuMzgyODEyIDQxNi41NzgxMjUgIi8+PHBhdGggc3R5bGU9IiBzdHJva2U6bm9uZTtmaWxsLXJ1bGU6bm9uemVybztmaWxsOnJnYig1MC4xOTY4MzglLDUwLjE5NjgzOCUsNTAuMTk2ODM4JSk7ZmlsbC1vcGFjaXR5OjE7IiBkPSJNIDk1LjM4MjgxMiA0MTMuNTc4MTI1IEwgNTkuMzgyODEyIDQxMy41NzgxMjUgTCA1OS4zODI4MTIgMzY4LjU3ODEyNSBMIDk1LjM4MjgxMiAzNjguNTc4MTI1IFogTSA5NS4zODI4MTIgNDEzLjU3ODEyNSAiLz48ZyBjbGlwLXBhdGg9InVybCgjY2xpcDEpIiBjbGlwLXJ1bGU9Im5vbnplcm8iPjxwYXRoIHN0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDpyZ2IoMCUsMCUsMCUpO2ZpbGwtb3BhY2l0eToxOyIgZD0iTSA3NC4zODI4MTIgNDAxLjU3ODEyNSBMIDMxNC4zODI4MTIgNDAxLjU3ODEyNSBMIDMxNC4zODI4MTIgMzg2LjU3ODEyNSBMIDc0LjM4MjgxMiAzODYuNTc4MTI1IFogTSAzMTkuMzgyODEyIDQzMS41NzgxMjUgTCA2OS4zODI4MTIgNDMxLjU3ODEyNSBDIDU1LjU5NzY1NiA0MzEuNTc4MTI1IDQ0LjM4MjgxMiA0MjAuMzYzMjgxIDQ0LjM4MjgxMiA0MDYuNTc4MTI1IEwgNDQuMzgyODEyIDM4MS41NzgxMjUgQyA0NC4zODI4MTIgMzY3Ljc5Mjk2OSA1NS41OTc2NTYgMzU2LjU3ODEyNSA2OS4zODI4MTIgMzU2LjU3ODEyNSBMIDMxOS4zODI4MTIgMzU2LjU3ODEyNSBDIDMzMy4xNjc5NjkgMzU2LjU3ODEyNSAzNDQuMzgyODEyIDM2Ny43OTI5NjkgMzQ0LjM4MjgxMiAzODEuNTc4MTI1IEwgMzQ0LjM4MjgxMiA0MDYuNTc4MTI1IEMgMzQ0LjM4MjgxMiA0MjAuMzYzMjgxIDMzMy4xNjc5NjkgNDMxLjU3ODEyNSAzMTkuMzgyODEyIDQzMS41NzgxMjUgIi8+PC9nPjxwYXRoIHN0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDpyZ2IoMzAuMTk1NjE4JSwzMC4xOTU2MTglLDMwLjE5NTYxOCUpO2ZpbGwtb3BhY2l0eToxOyIgZD0iTSAzMjguMzgyODEyIDM3MS41NzgxMjUgTCA2MC4zODI4MTIgMzcxLjU3ODEyNSBDIDU0Ljg1OTM3NSAzNzEuNTc4MTI1IDUwLjM4MjgxMiAzNjcuMTAxNTYyIDUwLjM4MjgxMiAzNjEuNTc4MTI1IEwgNTAuMzgyODEyIDMxNS41NzgxMjUgQyA1MC4zODI4MTIgMzEwLjA1ODU5NCA1NC44NTkzNzUgMzA1LjU3ODEyNSA2MC4zODI4MTIgMzA1LjU3ODEyNSBMIDMyOC4zODI4MTIgMzA1LjU3ODEyNSBDIDMzMy45MDYyNSAzMDUuNTc4MTI1IDMzOC4zODI4MTIgMzEwLjA1ODU5NCAzMzguMzgyODEyIDMxNS41NzgxMjUgTCAzMzguMzgyODEyIDM2MS41NzgxMjUgQyAzMzguMzgyODEyIDM2Ny4xMDE1NjIgMzMzLjkwNjI1IDM3MS41NzgxMjUgMzI4LjM4MjgxMiAzNzEuNTc4MTI1ICIvPjxwYXRoIHN0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDpyZ2IoNTAuMTk2ODM4JSw1MC4xOTY4MzglLDUwLjE5NjgzOCUpO2ZpbGwtb3BhY2l0eToxOyIgZD0iTSA4OC4zODI4MTIgMzU5LjU3ODEyNSBMIDUzLjM4MjgxMiAzNTkuNTc4MTI1IEwgNTMuMzgyODEyIDMxNC41NzgxMjUgTCA4OC4zODI4MTIgMzE0LjU3ODEyNSBaIE0gODguMzgyODEyIDM1OS41NzgxMjUgIi8+PHBhdGggc3R5bGU9IiBzdHJva2U6bm9uZTtmaWxsLXJ1bGU6bm9uemVybztmaWxsOnJnYigwJSwwJSwwJSk7ZmlsbC1vcGFjaXR5OjE7IiBkPSJNIDY1LjM4MjgxMiAzNTYuNTc4MTI1IEwgMzIzLjM4MjgxMiAzNTYuNTc4MTI1IEwgMzIzLjM4MjgxMiAzMjAuNTc4MTI1IEwgNjUuMzgyODEyIDMyMC41NzgxMjUgWiBNIDMyOC4zODI4MTIgMzg2LjU3ODEyNSBMIDYwLjM4MjgxMiAzODYuNTc4MTI1IEMgNDYuNTk3NjU2IDM4Ni41NzgxMjUgMzUuMzgyODEyIDM3NS4zNjMyODEgMzUuMzgyODEyIDM2MS41NzgxMjUgTCAzNS4zODI4MTIgMzE1LjU3ODEyNSBDIDM1LjM4MjgxMiAzMDEuNzkyOTY5IDQ2LjU5NzY1NiAyOTAuNTc4MTI1IDYwLjM4MjgxMiAyOTAuNTc4MTI1IEwgMzI4LjM4MjgxMiAyOTAuNTc4MTI1IEMgMzQyLjE2Nzk2OSAyOTAuNTc4MTI1IDM1My4zODI4MTIgMzAxLjc5Mjk2OSAzNTMuMzgyODEyIDMxNS41NzgxMjUgTCAzNTMuMzgyODEyIDM2MS41NzgxMjUgQyAzNTMuMzgyODEyIDM3NS4zNjMyODEgMzQyLjE2Nzk2OSAzODYuNTc4MTI1IDMyOC4zODI4MTIgMzg2LjU3ODEyNSAiLz48cGF0aCBzdHlsZT0iZmlsbDpub25lO3N0cm9rZS13aWR0aDozMDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlOnJnYigwJSwwJSwwJSk7c3Ryb2tlLW9wYWNpdHk6MTtzdHJva2UtbWl0ZXJsaW1pdDoxMDsiIGQ9Ik0gMC4wMDAwMTI1IDAuMDAxODI1IEwgMC4wMDAwMTI1IDEyMy4xNzM3ICIgdHJhbnNmb3JtPSJtYXRyaXgoMSwwLDAsLTEsMTk0LjM4MjgsMTM4LjE3MzcpIi8+PHBhdGggc3R5bGU9ImZpbGw6bm9uZTtzdHJva2Utd2lkdGg6MzA7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZTpyZ2IoMCUsMCUsMCUpO3N0cm9rZS1vcGFjaXR5OjE7c3Ryb2tlLW1pdGVybGltaXQ6MTA7IiBkPSJNIDAuMDAwMDEyNSAtMC4wMDAxIEwgNzIuMDAwMDEyIC0wLjAwMDEgIiB0cmFuc2Zvcm09Im1hdHJpeCgxLDAsMCwtMSwxNTguMzgyOCw1MC45OTk5KSIvPjxwYXRoIHN0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDpyZ2IoMzkuOTk5MzklLDM5Ljk5OTM5JSwzOS45OTkzOSUpO2ZpbGwtb3BhY2l0eToxOyIgZD0iTSAyMDcuMzc1IDk3Ljg3NSBMIDE4My4yMjI2NTYgOTcuODc1IEMgMTc4LjA1NDY4OCA5Ny44NzUgMTczLjM4NjcxOSAxMDAuOTQ1MzEyIDE3MS4zMzU5MzggMTA1LjY4MzU5NCBMIDE1Ni4zNTE1NjIgMTQwLjMwODU5NCBDIDE1NC45MzM1OTQgMTQzLjU4OTg0NCAxNTQuOTMzNTk0IDE0Ny4zMTI1IDE1Ni4zNTE1NjIgMTUwLjU5Mzc1IEwgMTcxLjMzNTkzOCAxODUuMjE4NzUgQyAxNzMuMzg2NzE5IDE4OS45NTcwMzEgMTc4LjA1NDY4OCAxOTMuMDIzNDM4IDE4My4yMjI2NTYgMTkzLjAyMzQzOCBMIDIwNy4zNzUgMTkzLjAyMzQzOCBDIDIxMi41MzkwNjIgMTkzLjAyMzQzOCAyMTcuMjEwOTM4IDE4OS45NTcwMzEgMjE5LjI2MTcxOSAxODUuMjE4NzUgTCAyMzQuMjQyMTg4IDE1MC41OTM3NSBDIDIzNS42NjAxNTYgMTQ3LjMxMjUgMjM1LjY2MDE1NiAxNDMuNTg5ODQ0IDIzNC4yNDIxODggMTQwLjMwODU5NCBMIDIxOS4yNjE3MTkgMTA1LjY4MzU5NCBDIDIxNy4yMTA5MzggMTAwLjk0NTMxMiAyMTIuNTM5MDYyIDk3Ljg3NSAyMDcuMzc1IDk3Ljg3NSAiLz48cGF0aCBzdHlsZT0iIHN0cm9rZTpub25lO2ZpbGwtcnVsZTpub256ZXJvO2ZpbGw6cmdiKDAlLDAlLDAlKTtmaWxsLW9wYWNpdHk6MTsiIGQ9Ik0gMTg0LjU2NjQwNiAxNzguMDIzNDM4IEwgMjA2LjAzMTI1IDE3OC4wMjM0MzggTCAyMjAuMTI1IDE0NS40NDkyMTkgTCAyMDYuMDMxMjUgMTEyLjg3NSBMIDE4NC41NjY0MDYgMTEyLjg3NSBMIDE3MC40Njg3NSAxNDUuNDQ5MjE5IFogTSAyMDcuMzc1IDIwOC4wMjM0MzggTCAxODMuMjE4NzUgMjA4LjAyMzQzOCBDIDE3Mi4wNjY0MDYgMjA4LjAyMzQzOCAxNjEuOTk2MDk0IDIwMS40MTAxNTYgMTU3LjU2NjQwNiAxOTEuMTcxODc1IEwgMTQyLjU4NTkzOCAxNTYuNTUwNzgxIEMgMTM5LjUzNTE1NiAxNDkuNSAxMzkuNTM1MTU2IDE0MS40MDYyNSAxNDIuNTg1OTM4IDEzNC4zNTE1NjIgTCAxNTcuNTY2NDA2IDk5LjcyNjU2MiBDIDE2MS45OTYwOTQgODkuNDkyMTg4IDE3Mi4wNjY0MDYgODIuODc1IDE4My4yMTg3NSA4Mi44NzUgTCAyMDcuMzc1IDgyLjg3NSBDIDIxOC41MzEyNSA4Mi44NzUgMjI4LjU5NzY1NiA4OS40OTIxODggMjMzLjAyNzM0NCA5OS43MjY1NjIgTCAyNDguMDA3ODEyIDEzNC4zNTE1NjIgQyAyNTEuMDU4NTk0IDE0MS40MDYyNSAyNTEuMDU4NTk0IDE0OS41IDI0OC4wMDc4MTIgMTU2LjU1MDc4MSBMIDIzMy4wMjczNDQgMTkxLjE3MTg3NSBDIDIyOC41OTc2NTYgMjAxLjQxMDE1NiAyMTguNTMxMjUgMjA4LjAyMzQzOCAyMDcuMzc1IDIwOC4wMjM0MzggIi8+PHBhdGggc3R5bGU9IiBzdHJva2U6bm9uZTtmaWxsLXJ1bGU6bm9uemVybztmaWxsOnJnYigzMC4xOTU2MTglLDMwLjE5NTYxOCUsMzAuMTk1NjE4JSk7ZmlsbC1vcGFjaXR5OjE7IiBkPSJNIDMxNS4xNDg0MzggMTQxLjU5Mzc1IEMgMzQ3LjUyMzQzOCAxNDEuNTkzNzUgMzczLjc2NTYyNSAxNjUuNzA3MDMxIDM3My43NjU2MjUgMTk1LjQ0OTIxOSBDIDM3My43NjU2MjUgMjU4LjI4MTI1IDMyNC45MTc5NjkgMjk0LjE4MzU5NCAzMTUuMTQ4NDM4IDMwMy4xNjAxNTYgQyAzMDUuMzc4OTA2IDMxMi4xMzY3MTkgMjU2LjUyNzM0NCAzMDMuMTYwMTU2IDI1Ni41MjczNDQgMzAzLjE2MDE1NiBMIDI1Ni41MjczNDQgMTk1LjQ0OTIxOSBDIDI1Ni41MjczNDQgMTY1LjcwNzAzMSAyODIuNzczNDM4IDE0MS41OTM3NSAzMTUuMTQ4NDM4IDE0MS41OTM3NSAiLz48cGF0aCBzdHlsZT0iIHN0cm9rZTpub25lO2ZpbGwtcnVsZTpub256ZXJvO2ZpbGw6cmdiKDUwLjE5NjgzOCUsNTAuMTk2ODM4JSw1MC4xOTY4MzglKTtmaWxsLW9wYWNpdHk6MTsiIGQ9Ik0gMzcxLjM4MjgxMiAxNDguNTc4MTI1IEMgMzQ0LjM4MjgxMiAxOTIuNTc4MTI1IDMwMC4zODI4MTIgMTQzLjU3ODEyNSAyODIuMzgyODEyIDI5Mi41NzgxMjUgQyAyODIuMzgyODEyIDI5Mi41NzgxMjUgMjkzLjM4MjgxMiAzMTkuNTI3MzQ0IDI3NS4zODI4MTIgMjkzLjU3ODEyNSBDIDI1Ny4zODI4MTIgMjY3LjYyODkwNiAyNzcuMzgyODEyIDIxOS41MjczNDQgMjc3LjM4MjgxMiAxOTMuNTc4MTI1IEMgMjc3LjM4MjgxMiAxNjcuNjI4OTA2IDI5OS4zODI4MTIgMTUxLjQ0OTIxOSAzMTcuMzgyODEyIDE0Mi44MDA3ODEgQyAzMzUuMzgyODEyIDEzNC4xNTIzNDQgMzcxLjM4MjgxMiAxNDguNTc4MTI1IDM3MS4zODI4MTIgMTQ4LjU3ODEyNSAiLz48ZyBjbGlwLXBhdGg9InVybCgjY2xpcDIpIiBjbGlwLXJ1bGU9Im5vbnplcm8iPjxwYXRoIHN0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDpyZ2IoMCUsMCUsMCUpO2ZpbGwtb3BhY2l0eToxOyIgZD0iTSAyNzEuNTI3MzQ0IDI5MC44OTQ1MzEgQyAyODYuNTg5ODQ0IDI5Mi44NTE1NjIgMzAwLjk2MDkzOCAyOTMuMzU5Mzc1IDMwNS43MTg3NSAyOTEuODk0NTMxIEMgMzA2LjU1ODU5NCAyOTEuMTUyMzQ0IDMwNy41MTU2MjUgMjkwLjMyODEyNSAzMDguNTc4MTI1IDI4OS40MTc5NjkgQyAzMjIuMzAwNzgxIDI3Ny42MjUgMzU4Ljc2NTYyNSAyNDYuMzA0Njg4IDM1OC43NjU2MjUgMTk1LjQ0OTIxOSBDIDM1OC43NjU2MjUgMTczLjcwMzEyNSAzMzkuMTk5MjE5IDE1Ni4wMTE3MTkgMzE1LjE0ODQzOCAxNTYuMDExNzE5IEMgMjkxLjA5Mzc1IDE1Ni4wMTE3MTkgMjcxLjUyNzM0NCAxNzMuNzAzMTI1IDI3MS41MjczNDQgMTk1LjQ0OTIxOSBaIE0gMjk1LjY5MTQwNiAzMjEuNTc4MTI1IEMgMjkxLjI2NTYyNSAzMjEuNTc4MTI1IDI4Ni4zNDc2NTYgMzIxLjM0Mzc1IDI4MC44NzUgMzIwLjg4NjcxOSBDIDI2Ni44Mzk4NDQgMzE5LjcxNDg0NCAyNTQuMjQyMTg4IDMxNy40MTc5NjkgMjUzLjcxMDkzOCAzMTcuMzIwMzEyIEwgMjQxLjUyNzM0NCAzMTUuMDgyMDMxIEwgMjQxLjUyNzM0NCAxOTUuNDQ5MjE5IEMgMjQxLjUyNzM0NCAxNTcuODA0Njg4IDI3NC41NTQ2ODggMTI3LjE3OTY4OCAzMTUuMTQ4NDM4IDEyNy4xNzk2ODggQyAzNTUuNzQyMTg4IDEyNy4xNzk2ODggMzg4Ljc2NTYyNSAxNTcuODA0Njg4IDM4OC43NjU2MjUgMTk1LjQ0OTIxOSBDIDM4OC43NjU2MjUgMjU5LjIwNzAzMSAzNDMuNDU3MDMxIDI5OC4xMjUgMzI4LjU2NjQwNiAzMTAuOTE3OTY5IEMgMzI3LjI5Mjk2OSAzMTIuMDExNzE5IDMyNi4xOTE0MDYgMzEyLjk1NzAzMSAzMjUuNTExNzE5IDMxMy41ODIwMzEgQyAzMTkuNTg1OTM4IDMxOS4wMjczNDQgMzEwLjMzNTkzOCAzMjEuNTc4MTI1IDI5NS42OTE0MDYgMzIxLjU3ODEyNSAiLz48L2c+PHBhdGggc3R5bGU9IiBzdHJva2U6bm9uZTtmaWxsLXJ1bGU6bm9uemVybztmaWxsOnJnYigzMC4xOTU2MTglLDMwLjE5NTYxOCUsMzAuMTk1NjE4JSk7ZmlsbC1vcGFjaXR5OjE7IiBkPSJNIDI1MyAxMzcuOTk2MDk0IEMgMjg1LjM3NSAxMzcuOTk2MDk0IDMxMS42MjEwOTQgMTYyLjEwNTQ2OSAzMTEuNjIxMDk0IDE5MS44NTE1NjIgQyAzMTEuNjIxMDk0IDI1NC42ODM1OTQgMjYyLjc3MzQzOCAyOTAuNTg1OTM4IDI1MyAyOTkuNTYyNSBDIDI0My4yMzA0NjkgMzA4LjUzNTE1NiAxOTQuMzgyODEyIDI5OS41NjI1IDE5NC4zODI4MTIgMjk5LjU2MjUgTCAxOTQuMzgyODEyIDE5MS44NTE1NjIgQyAxOTQuMzgyODEyIDE2Mi4xMDU0NjkgMjIwLjYyODkwNiAxMzcuOTk2MDk0IDI1MyAxMzcuOTk2MDk0ICIvPjxwYXRoIHN0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDpyZ2IoNTAuMTk2ODM4JSw1MC4xOTY4MzglLDUwLjE5NjgzOCUpO2ZpbGwtb3BhY2l0eToxOyIgZD0iTSAyODkuMzgyODEyIDE0OC41NzgxMjUgQyAyNTAuMzgyODEyIDE3MC41NzgxMjUgMjMzLjM4MjgxMiAxNDkuNTc4MTI1IDIyOC4zODI4MTIgMzAyLjU3ODEyNSBDIDIyOC4zODI4MTIgMzAyLjU3ODEyNSAyMjAuMzgyODEyIDMxNy41MjczNDQgMjAyLjM4MjgxMiAyOTEuNTc4MTI1IEMgMTg0LjM4MjgxMiAyNjUuNjI4OTA2IDE5NS4zODI4MTIgMjE5LjUyNzM0NCAxOTUuMzgyODEyIDE5My41NzgxMjUgQyAxOTUuMzgyODEyIDE2Ny42Mjg5MDYgMjE3LjM4MjgxMiAxNTEuNDQ5MjE5IDIzNS4zODI4MTIgMTQyLjgwMDc4MSBDIDI1My4zODI4MTIgMTM0LjE1MjM0NCAyODkuMzgyODEyIDE0OC41NzgxMjUgMjg5LjM4MjgxMiAxNDguNTc4MTI1ICIvPjxwYXRoIHN0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDpyZ2IoMCUsMCUsMCUpO2ZpbGwtb3BhY2l0eToxOyIgZD0iTSAyMDkuMzgyODEyIDI4Ny4yOTY4NzUgQyAyMjQuNDQxNDA2IDI4OS4yNTM5MDYgMjM4LjgxNjQwNiAyODkuNzYxNzE5IDI0My41NzAzMTIgMjg4LjI5Njg3NSBDIDI0NC40MTQwNjIgMjg3LjU1MDc4MSAyNDUuMzY3MTg4IDI4Ni43MzA0NjkgMjQ2LjQyOTY4OCAyODUuODIwMzEyIEMgMjYwLjE1NjI1IDI3NC4wMzEyNSAyOTYuNjIxMDk0IDI0Mi43MDcwMzEgMjk2LjYyMTA5NCAxOTEuODUxNTYyIEMgMjk2LjYyMTA5NCAxNzAuMTA1NDY5IDI3Ny4wNTQ2ODggMTUyLjQxMDE1NiAyNTMgMTUyLjQxMDE1NiBDIDIyOC45NDkyMTkgMTUyLjQxMDE1NiAyMDkuMzgyODEyIDE3MC4xMDU0NjkgMjA5LjM4MjgxMiAxOTEuODUxNTYyIFogTSAyMzMuNTQ2ODc1IDMxNy45ODA0NjkgQyAyMjkuMTE3MTg4IDMxNy45ODA0NjkgMjI0LjE5OTIxOSAzMTcuNzQ2MDk0IDIxOC43MzA0NjkgMzE3LjI4OTA2MiBDIDIwNC42OTUzMTIgMzE2LjExNzE4OCAxOTIuMDk3NjU2IDMxMy44MTY0MDYgMTkxLjU2NjQwNiAzMTMuNzIyNjU2IEwgMTc5LjM4MjgxMiAzMTEuNDg0Mzc1IEwgMTc5LjM4MjgxMiAxOTEuODUxNTYyIEMgMTc5LjM4MjgxMiAxNTQuMjA3MDMxIDIxMi40MDYyNSAxMjMuNTc4MTI1IDI1MyAxMjMuNTc4MTI1IEMgMjkzLjU5Mzc1IDEyMy41NzgxMjUgMzI2LjYyMTA5NCAxNTQuMjA3MDMxIDMyNi42MjEwOTQgMTkxLjg1MTU2MiBDIDMyNi42MjEwOTQgMjU1LjYwOTM3NSAyODEuMzA4NTk0IDI5NC41MzEyNSAyNjYuNDE3OTY5IDMwNy4zMjAzMTIgQyAyNjUuMTQ0NTMxIDMwOC40MTQwNjIgMjY0LjA0Mjk2OSAzMDkuMzU5Mzc1IDI2My4zNjMyODEgMzA5Ljk4NDM3NSBDIDI1Ny40NDE0MDYgMzE1LjQyNTc4MSAyNDguMTkxNDA2IDMxNy45ODA0NjkgMjMzLjU0Njg3NSAzMTcuOTgwNDY5ICIvPjxwYXRoIHN0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDpyZ2IoMzAuMTk1NjE4JSwzMC4xOTU2MTglLDMwLjE5NTYxOCUpO2ZpbGwtb3BhY2l0eToxOyIgZD0iTSA3My42MTcxODggMTQxLjU5Mzc1IEMgNDEuMjQ2MDk0IDE0MS41OTM3NSAxNSAxNjUuNzA3MDMxIDE1IDE5NS40NDkyMTkgQyAxNSAyNTguMjgxMjUgNjMuODQ3NjU2IDI5NC4xODM1OTQgNzMuNjE3MTg4IDMwMy4xNjAxNTYgQyA4My4zODY3MTkgMzEyLjEzNjcxOSAxMzIuMjM4MjgxIDMwMy4xNjAxNTYgMTMyLjIzODI4MSAzMDMuMTYwMTU2IEwgMTMyLjIzODI4MSAxOTUuNDQ5MjE5IEMgMTMyLjIzODI4MSAxNjUuNzA3MDMxIDEwNS45OTIxODggMTQxLjU5Mzc1IDczLjYxNzE4OCAxNDEuNTkzNzUgIi8+PHBhdGggc3R5bGU9IiBzdHJva2U6bm9uZTtmaWxsLXJ1bGU6bm9uemVybztmaWxsOnJnYig1MC4xOTY4MzglLDUwLjE5NjgzOCUsNTAuMTk2ODM4JSk7ZmlsbC1vcGFjaXR5OjE7IiBkPSJNIDgxLjM4MjgxMiAxMzkuOTE3OTY5IEMgMTguMzgyODEyIDE3OC41NzgxMjUgNTAuMzgyODEyIDIzNi4wMjczNDQgOTUuMzgyODEyIDI5Ni41NzgxMjUgQyA5NS4zODI4MTIgMjk2LjU3ODEyNSA3Mi4zODI4MTIgMzEyLjkxNDA2MiA1NC4zODI4MTIgMjg2Ljk2ODc1IEMgMzYuMzgyODEyIDI2MS4wMTU2MjUgOS4zODI4MTIgMjI2LjQxNzk2OSA5LjM4MjgxMiAyMDAuNDY4NzUgQyA5LjM4MjgxMiAxNzQuNTE5NTMxIDI3LjM4MjgxMiAxNDguNTY2NDA2IDQ1LjM4MjgxMiAxMzkuOTE3OTY5IEMgNjMuMzgyODEyIDEzMS4yNjk1MzEgODEuMzgyODEyIDEzOS45MTc5NjkgODEuMzgyODEyIDEzOS45MTc5NjkgIi8+PHBhdGggc3R5bGU9IiBzdHJva2U6bm9uZTtmaWxsLXJ1bGU6bm9uemVybztmaWxsOnJnYigwJSwwJSwwJSk7ZmlsbC1vcGFjaXR5OjE7IiBkPSJNIDgzLjA0Njg3NSAyOTEuODk0NTMxIEMgODcuODA0Njg4IDI5My4zNTkzNzUgMTAyLjE3NTc4MSAyOTIuODUxNTYyIDExNy4yMzgyODEgMjkwLjg5NDUzMSBMIDExNy4yMzgyODEgMTk1LjQ0OTIxOSBDIDExNy4yMzgyODEgMTczLjcwMzEyNSA5Ny42Njc5NjkgMTU2LjAxMTcxOSA3My42MTcxODggMTU2LjAxMTcxOSBDIDQ5LjU2NjQwNiAxNTYuMDExNzE5IDMwIDE3My43MDMxMjUgMzAgMTk1LjQ0OTIxOSBDIDMwIDI0Ni4zMDQ2ODggNjYuNDY0ODQ0IDI3Ny42MjUgODAuMTkxNDA2IDI4OS40MTc5NjkgQyA4MS4yNSAyOTAuMzI4MTI1IDgyLjIwNzAzMSAyOTEuMTUyMzQ0IDgzLjA0Njg3NSAyOTEuODk0NTMxIE0gOTMuMDc0MjE5IDMyMS41NzgxMjUgQyA3OC40MjU3ODEgMzIxLjU3ODEyNSA2OS4xNzk2ODggMzE5LjAyNzM0NCA2My4yNTM5MDYgMzEzLjU4MjAzMSBDIDYyLjU3NDIxOSAzMTIuOTU3MDMxIDYxLjQ3MjY1NiAzMTIuMDExNzE5IDYwLjE5NTMxMiAzMTAuOTE3OTY5IEMgNDUuMzA4NTk0IDI5OC4xMjUgMCAyNTkuMjA3MDMxIDAgMTk1LjQ0OTIxOSBDIDAgMTU3LjgwNDY4OCAzMy4wMjczNDQgMTI3LjE3OTY4OCA3My42MTcxODggMTI3LjE3OTY4OCBDIDExNC4yMTA5MzggMTI3LjE3OTY4OCAxNDcuMjM4MjgxIDE1Ny44MDQ2ODggMTQ3LjIzODI4MSAxOTUuNDQ5MjE5IEwgMTQ3LjIzODI4MSAzMTUuMDgyMDMxIEwgMTM1LjA1NDY4OCAzMTcuMzIwMzEyIEMgMTM0LjUyMzQzOCAzMTcuNDE3OTY5IDEyMS45MjU3ODEgMzE5LjcxNDg0NCAxMDcuODkwNjI1IDMyMC44ODY3MTkgQyAxMDIuNDE3OTY5IDMyMS4zNDM3NSA5Ny41IDMyMS41NzgxMjUgOTMuMDc0MjE5IDMyMS41NzgxMjUgIi8+PHBhdGggc3R5bGU9IiBzdHJva2U6bm9uZTtmaWxsLXJ1bGU6bm9uemVybztmaWxsOnJnYigzMC4xOTU2MTglLDMwLjE5NTYxOCUsMzAuMTk1NjE4JSk7ZmlsbC1vcGFjaXR5OjE7IiBkPSJNIDEzNS43NjU2MjUgMTM3Ljk5NjA5NCBDIDEwMy4zOTA2MjUgMTM3Ljk5NjA5NCA3Ny4xNDQ1MzEgMTYyLjEwNTQ2OSA3Ny4xNDQ1MzEgMTkxLjg1MTU2MiBDIDc3LjE0NDUzMSAyNTQuNjgzNTk0IDEyNS45OTIxODggMjkwLjU4NTkzOCAxMzUuNzY1NjI1IDI5OS41NjI1IEMgMTQ1LjUzNTE1NiAzMDguNTM1MTU2IDE5NC4zODI4MTIgMjk5LjU2MjUgMTk0LjM4MjgxMiAyOTkuNTYyNSBMIDE5NC4zODI4MTIgMTkxLjg1MTU2MiBDIDE5NC4zODI4MTIgMTYyLjEwNTQ2OSAxNjguMTM2NzE5IDEzNy45OTYwOTQgMTM1Ljc2NTYyNSAxMzcuOTk2MDk0ICIvPjxwYXRoIHN0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDpyZ2IoNTAuMTk2ODM4JSw1MC4xOTY4MzglLDUwLjE5NjgzOCUpO2ZpbGwtb3BhY2l0eToxOyIgZD0iTSAxNTIuMzgyODEyIDEzOC41NzgxMjUgQyAxMTYuMzgyODEyIDE3Mi4wMDc4MTIgMTIyLjM4MjgxMiAyMzIuMDI3MzQ0IDE2Ny4zODI4MTIgMjkyLjU3ODEyNSBDIDE2Ny4zODI4MTIgMjkyLjU3ODEyNSAxNDkuMzgyODEyIDMxOC44MDA3ODEgMTMxLjM4MjgxMiAyOTIuODUxNTYyIEMgMTEzLjM4MjgxMiAyNjYuODk4NDM4IDgyLjM4MjgxMiAyMjIuNTI3MzQ0IDgyLjM4MjgxMiAxOTYuNTc4MTI1IEMgODIuMzgyODEyIDE3MC42Mjg5MDYgMTA0LjM4MjgxMiAxNTQuNDQ5MjE5IDEyMi4zODI4MTIgMTQ1LjgwMDc4MSBDIDE0MC4zODI4MTIgMTM3LjE1MjM0NCAxNTIuMzgyODEyIDEzOC41NzgxMjUgMTUyLjM4MjgxMiAxMzguNTc4MTI1ICIvPjxwYXRoIHN0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDpyZ2IoMCUsMCUsMCUpO2ZpbGwtb3BhY2l0eToxOyIgZD0iTSAxNDUuMTk1MzEyIDI4OC4yOTY4NzUgQyAxNDkuOTYwOTM4IDI4OS43NjU2MjUgMTY0LjMzNTkzOCAyODkuMjYxNzE5IDE3OS4zODI4MTIgMjg3LjMwNDY4OCBMIDE3OS4zODI4MTIgMTkxLjg1MTU2MiBDIDE3OS4zODI4MTIgMTcwLjEwNTQ2OSAxNTkuODE2NDA2IDE1Mi40MTAxNTYgMTM1Ljc2NTYyNSAxNTIuNDEwMTU2IEMgMTExLjcxNDg0NCAxNTIuNDEwMTU2IDkyLjE0NDUzMSAxNzAuMTA1NDY5IDkyLjE0NDUzMSAxOTEuODUxNTYyIEMgOTIuMTQ0NTMxIDI0Mi43MDcwMzEgMTI4LjYwOTM3NSAyNzQuMDMxMjUgMTQyLjMzOTg0NCAyODUuODIwMzEyIEMgMTQzLjM5ODQzOCAyODYuNzMwNDY5IDE0NC4zNTE1NjIgMjg3LjU1MDc4MSAxNDUuMTk1MzEyIDI4OC4yOTY4NzUgTSAxNTUuMjE4NzUgMzE3Ljk4MDQ2OSBDIDE0MC41NzQyMTkgMzE3Ljk4MDQ2OSAxMzEuMzI4MTI1IDMxNS40MjU3ODEgMTI1LjM5ODQzOCAzMDkuOTg0Mzc1IEMgMTI0LjcyMjY1NiAzMDkuMzU5Mzc1IDEyMy42MjEwOTQgMzA4LjQxNDA2MiAxMjIuMzQ3NjU2IDMwNy4zMjAzMTIgQyAxMDcuNDU3MDMxIDI5NC41MzEyNSA2Mi4xNDQ1MzEgMjU1LjYwOTM3NSA2Mi4xNDQ1MzEgMTkxLjg1MTU2MiBDIDYyLjE0NDUzMSAxNTQuMjA3MDMxIDk1LjE3MTg3NSAxMjMuNTc4MTI1IDEzNS43NjU2MjUgMTIzLjU3ODEyNSBDIDE3Ni4zNTU0NjkgMTIzLjU3ODEyNSAyMDkuMzgyODEyIDE1NC4yMDcwMzEgMjA5LjM4MjgxMiAxOTEuODUxNTYyIEwgMjA5LjM4MjgxMiAzMTEuNDg0Mzc1IEwgMTk3LjE5OTIxOSAzMTMuNzIyNjU2IEMgMTk2LjY3MTg3NSAzMTMuODE2NDA2IDE4NC4wNzQyMTkgMzE2LjExNzE4OCAxNzAuMDM1MTU2IDMxNy4yODkwNjIgQyAxNjQuNTY2NDA2IDMxNy43NDYwOTQgMTU5LjY0NDUzMSAzMTcuOTgwNDY5IDE1NS4yMTg3NSAzMTcuOTgwNDY5ICIvPjxwYXRoIHN0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDpyZ2IoMTAwJSwxMDAlLDEwMCUpO2ZpbGwtb3BhY2l0eToxOyIgZD0iTSAxMDQuMzgyODEyIDMwNS41NzgxMjUgTCAxMzYuMjM0Mzc1IDM3NC41NzgxMjUgIi8+PGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAzKSIgY2xpcC1ydWxlPSJub256ZXJvIj48cGF0aCBzdHlsZT0iZmlsbDpub25lO3N0cm9rZS13aWR0aDozMDtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2U6cmdiKDAlLDAlLDAlKTtzdHJva2Utb3BhY2l0eToxO3N0cm9rZS1taXRlcmxpbWl0OjEwOyIgZD0iTSAwLjAwMDAxMjUgMC4wMDA4NzUgTCAzMS44NTE1NzUgLTY4Ljk5OTEyNSAiIHRyYW5zZm9ybT0ibWF0cml4KDEsMCwwLC0xLDEwNC4zODI4LDMwNS41NzkpIi8+PC9nPjxwYXRoIHN0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDpyZ2IoMTAwJSwxMDAlLDEwMCUpO2ZpbGwtb3BhY2l0eToxOyIgZD0iTSAxNzguNzA3MDMxIDMwNS41NzgxMjUgTCAyMTAuNTU4NTk0IDM3NC41NzgxMjUgIi8+PGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXA0KSIgY2xpcC1ydWxlPSJub256ZXJvIj48cGF0aCBzdHlsZT0iZmlsbDpub25lO3N0cm9rZS13aWR0aDozMDtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2U6cmdiKDAlLDAlLDAlKTtzdHJva2Utb3BhY2l0eToxO3N0cm9rZS1taXRlcmxpbWl0OjEwOyIgZD0iTSAwLjAwMDkzMTI1IDAuMDAwODc1IEwgMzEuODUyNDk0IC02OC45OTkxMjUgIiB0cmFuc2Zvcm09Im1hdHJpeCgxLDAsMCwtMSwxNzguNzA2MSwzMDUuNTc5KSIvPjwvZz48cGF0aCBzdHlsZT0iIHN0cm9rZTpub25lO2ZpbGwtcnVsZTpub256ZXJvO2ZpbGw6cmdiKDEwMCUsMTAwJSwxMDAlKTtmaWxsLW9wYWNpdHk6MTsiIGQ9Ik0gMjUzLjAzMTI1IDMwNS41NzgxMjUgTCAyODQuODgyODEyIDM3NC41NzgxMjUgIi8+PGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXA1KSIgY2xpcC1ydWxlPSJub256ZXJvIj48cGF0aCBzdHlsZT0iZmlsbDpub25lO3N0cm9rZS13aWR0aDozMDtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2U6cmdiKDAlLDAlLDAlKTtzdHJva2Utb3BhY2l0eToxO3N0cm9rZS1taXRlcmxpbWl0OjEwOyIgZD0iTSAwLjAwMDk1IDAuMDAwODc1IEwgMzEuODUyNTEyIC02OC45OTkxMjUgIiB0cmFuc2Zvcm09Im1hdHJpeCgxLDAsMCwtMSwyNTMuMDMwMywzMDUuNTc5KSIvPjwvZz48L2c+PC9zdmc+',
        'bN': 'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSItNTAgLTkyLjUgMzk4LjA0MSA1MTAuMDIiIHZlcnNpb249IjEuMSI+PGRlZnM+PGNsaXBQYXRoIGlkPSJjbGlwMSI+PHBhdGggZD0iTSAwIDAgTCAzMDguMDM5MDYyIDAgTCAzMDguMDM5MDYyIDM5NS4wMTk1MzEgTCAwIDM5NS4wMTk1MzEgWiBNIDAgMCAiLz48L2NsaXBQYXRoPjwvZGVmcz48ZyBpZD0ic3VyZmFjZTEiPjxwYXRoIHN0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDpyZ2IoMzAuMTk1NjE4JSwzMC4xOTU2MTglLDMwLjE5NTYxOCUpO2ZpbGwtb3BhY2l0eToxOyIgZD0iTSAzOS4xMzY3MTkgMzYzLjMwODU5NCBDIDY2LjQzNzUgMzcxLjQ3MjY1NiAxMDYuMDg5ODQ0IDM4MC4wNjI1IDE1NC4zMDA3ODEgMzc5LjU3NDIxOSBDIDE5OC43MDcwMzEgMzc5LjEyMTA5NCAyMzUuNDY4NzUgMzcxLjExNzE4OCAyNjEuNTc0MjE5IDM2My4zMDg1OTQgQyAyNjEuMTEzMjgxIDM2MS42MzI4MTIgMjYwLjQwNjI1IDM1OC43ODkwNjIgMjU5LjYxMzI4MSAzNTUuMjUzOTA2IEMgMjU2LjYxNzE4OCAzNDEuOTMzNTk0IDI1Mi4xOTkyMTkgMzEzLjgzNTkzOCAyNjEuNTc0MjE5IDI4NC4xNzk2ODggQyAyNzQuNDI5Njg4IDI0My41MTU2MjUgMzA3LjUgMTkyLjkxNzk2OSAyODUuMDkzNzUgMTE4LjIzMDQ2OSBDIDI2MS4zNTU0NjkgMzkuMTAxNTYyIDE1MC42ODc1IDE1LjQyNTc4MSAxNTAuNjg3NSAxNS40MjU3ODEgTCAxNTIuNDkyMTg4IDUyLjQ3MjY1NiBMIDIzLjIxODc1IDE0Ni4xODM1OTQgQyAxNS4wMTU2MjUgMTUyLjEyODkwNiAxMy4wMjM0MzggMTYzLjQ2ODc1IDE4LjYxMzI4MSAxNzEuOTE0MDYyIEMgMjEuMjY1NjI1IDE3NS45MjE4NzUgMjQuMDExNzE5IDE4MC40NTMxMjUgMjYuMzM1OTM4IDE4NS4xMDU0NjkgQyAyOC42MTcxODggMTg5LjY2NDA2MiAzOS4zNzEwOTQgMjA2LjE5NTMxMiA0Ni4wNDY4NzUgMjEwLjQ5NjA5NCBDIDUxLjQ2MDkzOCAyMTMuOTg4MjgxIDU4LjQzNzUgMjEzLjc3MzQzOCA2My42NzU3ODEgMjEwLjAyMzQzOCBDIDcxLjYzMjgxMiAyMDQuMzI4MTI1IDgxLjYyNSAxOTEuNjUyMzQ0IDEwOS42MzY3MTkgMTk0LjM2MzI4MSBDIDE4My43MzA0NjkgMjA3LjAxMTcxOSAyMDIuMTkxNDA2IDE2Ni41OTc2NTYgMjAyLjE5MTQwNiAxNjYuNTk3NjU2IEMgMjAyLjE5MTQwNiAxNjYuNTk3NjU2IDE5MC40NDUzMTIgMTkwLjcyMjY1NiAxNDIuNjY0MDYyIDIxMy4xODM1OTQgQyA5Mi44NTU0NjkgMjMyLjI4OTA2MiA2MC4zMjQyMTkgMjY0LjgxNjQwNiA0My43NzczNDQgMzE5Ljg3MTA5NCBDIDM1Ljg4MjgxMiAzNDYuMTI4OTA2IDM5LjEzNjcxOSAzNjMuMzA4NTk0IDM5LjEzNjcxOSAzNjMuMzA4NTk0ICIvPjxwYXRoIHN0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDpyZ2IoNTAuMTk2ODM4JSw1MC4xOTY4MzglLDUwLjE5NjgzOCUpO2ZpbGwtb3BhY2l0eToxOyIgZD0iTSAyNy4zNjMyODEgMTc5Ljk2NDg0NCBMIDE4My40NTMxMjUgOTQuNDEwMTU2IEMgMTgzLjQ1MzEyNSA5NC40MTAxNTYgMjAxLjk2NDg0NCA4NS4xNTYyNSAxOTIuNzA3MDMxIDY2LjY0NDUzMSBDIDE4OC41NzAzMTIgNTguMzY3MTg4IDE1Ni45NDE0MDYgMjIuNjIxMDk0IDE1Ni45NDE0MDYgMjIuNjIxMDk0IEwgMTU2Ljk0MTQwNiA1OS42NDQ1MzEgTCAxOC4xMDkzNzUgMTYxLjQ1MzEyNSBaIE0gMjcuMzYzMjgxIDE3OS45NjQ4NDQgIi8+PHBhdGggc3R5bGU9IiBzdHJva2U6bm9uZTtmaWxsLXJ1bGU6bm9uemVybztmaWxsOnJnYig1MC4xOTY4MzglLDUwLjE5NjgzOCUsNTAuMTk2ODM4JSk7ZmlsbC1vcGFjaXR5OjE7IiBkPSJNIDIxNS41NTg1OTQgMTczLjc5Njg3NSBDIDE4My42Nzk2ODggMjI3LjI2OTUzMSAxNDUuNDU3MDMxIDI1NS4xOTkyMTkgMTIzLjg1OTM3NSAyNzkuODc4OTA2IEMgMTA1LjgyODEyNSAzMDAuNDg4MjgxIDkyLjgzMjAzMSAzNDkuMzEyNSA5My44NTkzNzUgMzY5Ljg3ODkwNiBDIDk0LjQ4MDQ2OSAzODIuMjQ2MDk0IDQyLjc4OTA2MiAzNTkuOTMzNTk0IDQyLjc4OTA2MiAzNTkuOTMzNTk0IEwgNTYuMTYwMTU2IDI5Ni4xNzE4NzUgTCA4My45MjU3ODEgMjQzLjcyNjU2MiBMIDEyOS4xNzU3ODEgMjEwLjgxNjQwNiBaIE0gMjE1LjU1ODU5NCAxNzMuNzk2ODc1ICIvPjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMSkiIGNsaXAtcnVsZT0ibm9uemVybyI+PHBhdGggc3R5bGU9IiBzdHJva2U6bm9uZTtmaWxsLXJ1bGU6bm9uemVybztmaWxsOnJnYigwJSwwJSwwJSk7ZmlsbC1vcGFjaXR5OjE7IiBkPSJNIDUzLjk0MTQwNiAzNTEuNDcyNjU2IEMgODYuNjQwNjI1IDM2MC4yMzA0NjkgMTIwLjI4NTE1NiAzNjQuNTA3ODEyIDE1NC4xNDQ1MzEgMzY0LjE0ODQzOCBDIDE4NC4yMjY1NjIgMzYzLjg0Mzc1IDIxNC4xNDQ1MzEgMzU5Ljg5MDYyNSAyNDMuMjgxMjUgMzUyLjM5MDYyNSBDIDIzOS43NTc4MTIgMzMzLjQyNTc4MSAyMzguMTY3OTY5IDMwNy4wNDY4NzUgMjQ2Ljg2NzE4OCAyNzkuNTMxMjUgQyAyNDkuNjA1NDY5IDI3MC44NjcxODggMjUzLjA4OTg0NCAyNjIuMDc0MjE5IDI1Ni43ODEyNSAyNTIuNzY1NjI1IEMgMjcwLjgwNDY4OCAyMTcuMzc1IDI4Ni42OTkyMTkgMTc3LjI2NTYyNSAyNzAuMzIwMzEyIDEyMi42NjQwNjIgQyAyNTUuMjMwNDY5IDcyLjM2NzE4OCAxOTcuODcxMDk0IDQ2LjY1NjI1IDE2Ny4xNDg0MzggMzYuMjQ2MDk0IEwgMTY3LjkwMjM0NCA1MS43MTg3NSBDIDE2OC4xNTYyNSA1Ni45MjU3ODEgMTY1Ljc2NTYyNSA2MS45MDYyNSAxNjEuNTQ2ODc1IDY0Ljk2MDkzOCBMIDMyLjI2OTUzMSAxNTguNjcxODc1IEMgMzAuNzg1MTU2IDE1OS43NSAzMC40MzM1OTQgMTYxLjgyODEyNSAzMS40NzY1NjIgMTYzLjM5ODQzOCBDIDM0Ljg3ODkwNiAxNjguNTM1MTU2IDM3Ljc4OTA2MiAxNzMuNTE5NTMxIDQwLjEzMjgxMiAxNzguMjEwOTM4IEMgNDIuMjEwOTM4IDE4Mi4zNjcxODggNTAuODgyODEyIDE5NC44ODY3MTkgNTQuNDI5Njg4IDE5Ny41NDY4NzUgQyA1NC41MTE3MTkgMTk3LjU3ODEyNSA1NC42MjUgMTk3LjUzMTI1IDU0LjY5OTIxOSAxOTcuNDgwNDY5IEMgNTUuNDk2MDk0IDE5Ni45MDYyNSA1Ni41MTk1MzEgMTk2LjA3NDIxOSA1Ny42OTkyMTkgMTk1LjEwOTM3NSBDIDY1Ljg0Mzc1IDE4OC40NjQ4NDQgODAuOTk2MDk0IDE3Ni4wOTc2NTYgMTExLjEyMTA5NCAxNzkuMDA3ODEyIEMgMTExLjQ5MjE4OCAxNzkuMDQyOTY5IDExMS44NjMyODEgMTc5LjA5Mzc1IDExMi4yMzA0NjkgMTc5LjE1NjI1IEMgMTU3Ljk5MjE4OCAxODYuOTY4NzUgMTc3Ljc5Mjk2OSAxNzIuNDQ1MzEyIDE4NC45MjE4NzUgMTY0LjUxNTYyNSBDIDE4Ny40MTAxNTYgMTYxLjQ2ODc1IDE4OC40MTc5NjkgMTU5LjY0NDUzMSAxODguNDUzMTI1IDE1OS41ODIwMzEgQyAxODguMzU5Mzc1IDE1OS43NTM5MDYgMTg4LjMyMDMxMiAxNTkuODQzNzUgMTg4LjMyMDMxMiAxNTkuODQzNzUgTCAxOTUuMTY0MDYyIDE1OS4xMDU0NjkgQyAyMDQuNjA5Mzc1IDE1OC4wODIwMzEgMjEzLjQ0OTIxOSAxNjMuOTE3OTY5IDIxNi4yMjI2NTYgMTczLjAwMzkwNiBDIDIxNi4xOTE0MDYgMTczLjA3MDMxMiAyMTYuMTM2NzE5IDE3My4xODc1IDIxNi4wNTg1OTQgMTczLjM0NzY1NiBDIDIxNS45NzI2NTYgMTczLjUyNzM0NCAyMTUuODM5ODQ0IDE3My43ODkwNjIgMjE1LjY1NjI1IDE3NC4xMzI4MTIgQyAyMTUuMTE3MTg4IDE3NS4xNTIzNDQgMjE0LjE5MTQwNiAxNzYuNzY1NjI1IDIxMi44MDQ2ODggMTc4Ljc2NTYyNSBDIDIwNi4yNDIxODggMTg4LjM2MzI4MSAxODguNzg1MTU2IDIwOC41NDY4NzUgMTQ5LjIyNjU2MiAyMjcuMTQ0NTMxIEMgMTQ4Ljg4NjcxOSAyMjcuMzA0Njg4IDE0OC41MzkwNjIgMjI3LjQ1MzEyNSAxNDguMTg3NSAyMjcuNTg1OTM4IEMgMTAwLjg0Mzc1IDI0NS43NDIxODggNzMuMTk5MjE5IDI3NS41NzQyMTkgNTguNTQ2ODc1IDMyNC4zMTI1IEMgNTUuMTE3MTg4IDMzNS43MzQzNzUgNTQuMTEzMjgxIDM0NS4xMTMyODEgNTMuOTQxNDA2IDM1MS40NzI2NTYgTSAxNTAuMzQ3NjU2IDM5NS4wMTk1MzEgQyAxMTEuMTkxNDA2IDM5NS4wMTk1MzEgNzIuMzE2NDA2IDM4OS4zMjgxMjUgMzQuNzE4NzUgMzc4LjA4OTg0NCBDIDI5LjE5NTMxMiAzNzYuNDM3NSAyNS4wNTA3ODEgMzcxLjg0Mzc1IDIzLjk4MDQ2OSAzNjYuMTc5Njg4IEMgMjMuNTc0MjE5IDM2NC4wNDI5NjkgMjAuMjc3MzQ0IDM0NC40NTcwMzEgMjkuMDAzOTA2IDMxNS40MzM1OTQgQyA0My42NTIzNDQgMjY2LjcxMDkzOCA3MC4yNTc4MTIgMjMyLjc1MzkwNiAxMTEuODI4MTI1IDIxMC4zMjgxMjUgQyAxMTAuNDQxNDA2IDIxMC4xMjUgMTA5LjA0Njg3NSAyMDkuOTA2MjUgMTA3LjYyODkwNiAyMDkuNjY3OTY5IEMgOTAuNTM1MTU2IDIwOC4xMzI4MTIgODMuNzU3ODEyIDIxMy42NjQwNjIgNzcuMjA3MDMxIDIxOS4wMTE3MTkgQyA3NS43NTM5MDYgMjIwLjE5OTIxOSA3NC4yNDYwOTQgMjIxLjQyNTc4MSA3Mi42NTYyNSAyMjIuNTY2NDA2IEMgNjIuMTkxNDA2IDIzMC4wNTg1OTQgNDguNDYwOTM4IDIzMC40MTAxNTYgMzcuNjg3NSAyMjMuNDYwOTM4IEMgMjYuMzc1IDIxNi4xNjc5NjkgMTQuMDExNzE5IDE5NC45NTMxMjUgMTIuNTM5MDYyIDE5Mi4wMDM5MDYgQyAxMC43NSAxODguNDI1NzgxIDguNDY0ODQ0IDE4NC41MzEyNSA1Ljc1IDE4MC40Mjk2ODggQyAtNC40NDE0MDYgMTY1LjAzNTE1NiAtMC43NDYwOTQgMTQ0LjUwMzkwNiAxNC4xNjQwNjIgMTMzLjY5NTMxMiBMIDEzNi42Nzk2ODggNDQuODgyODEyIEwgMTM1LjI3NzM0NCAxNi4xNzU3ODEgQyAxMzUuMDQ2ODc1IDExLjM5MDYyNSAxMzcuMDQ2ODc1IDYuNzY5NTMxIDE0MC42OTUzMTIgMy42NzE4NzUgQyAxNDQuMzQ3NjU2IDAuNTY2NDA2IDE0OS4yMzQzNzUgLTAuNjYwMTU2IDE1My45MTQwNjIgMC4zMzk4NDQgQyAxNTguNzk2ODc1IDEuMzgyODEyIDI3My44MDg1OTQgMjYuOTI1NzgxIDI5OS44NzEwOTQgMTEzLjc5Njg3NSBDIDMxOS4zMjgxMjUgMTc4LjY2NDA2MiAyOTkuNzUzOTA2IDIyOC4wNjI1IDI4NS40NjA5MzggMjY0LjEyODkwNiBDIDI4MS45ODA0NjkgMjcyLjkxNDA2MiAyNzguNjkxNDA2IDI4MS4yMTA5MzggMjc2LjI4NTE1NiAyODguODMyMDMxIEMgMjY4LjI1NzgxMiAzMTQuMjIyNjU2IDI3MS44MjAzMTIgMzM5LjIzMDQ2OSAyNzQuNjY0MDYyIDM1MS44NzUgQyAyNzUuNjI1IDM1Ni4xNjQwNjIgMjc2LjI3MzQzOCAzNTguNTc0MjE5IDI3Ni40NDkyMTkgMzU5LjIxMDkzOCBDIDI3OC42NzU3ODEgMzY3LjMwMDc4MSAyNzQuMDM1MTU2IDM3NS42ODc1IDI2NS45OTYwOTQgMzc4LjA4OTg0NCBDIDIyOS43NTM5MDYgMzg4LjkyNTc4MSAxOTIuMjI2NTYyIDM5NC42MTcxODggMTU0LjQ1NzAzMSAzOTUgQyAxNTMuMDg5ODQ0IDM5NS4wMTE3MTkgMTUxLjcxNDg0NCAzOTUuMDE5NTMxIDE1MC4zNDc2NTYgMzk1LjAxOTUzMSAiLz48L2c+PHBhdGggc3R5bGU9ImZpbGwtcnVsZTpub256ZXJvO2ZpbGw6cmdiKDEwMCUsMTAwJSwxMDAlKTtmaWxsLW9wYWNpdHk6MTtzdHJva2Utd2lkdGg6MzA7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZTpyZ2IoMCUsMCUsMCUpO3N0cm9rZS1vcGFjaXR5OjE7c3Ryb2tlLW1pdGVybGltaXQ6MTA7IiBkPSJNIC0wLjAwMTE5Mzc1IDAuMDAxNDc1IEMgMjMuNjYyODY5IC03LjEwNzkgNTguMTc4NDk0IC0xNC42MTE4MDYgMTAwLjE2Njc3NSAtMTQuMDU3MTE5IEMgMTM3LjkyNDU4OCAtMTMuNTYxMDI1IDE2OS4yMTM2NSAtNi43MDk0NjMgMTkxLjU0OTU4OCAwLjAwMTQ3NSAiIHRyYW5zZm9ybT0ibWF0cml4KDEsMCwwLC0xLDU1LjAwNTEsMzEyLjA3OTYpIi8+PHBhdGggc3R5bGU9IiBzdHJva2U6bm9uZTtmaWxsLXJ1bGU6bm9uemVybztmaWxsOnJnYigwJSwwJSwwJSk7ZmlsbC1vcGFjaXR5OjE7IiBkPSJNIDE2OS42ODM1OTQgMTEzLjU3ODEyNSBDIDE2OS42ODM1OTQgMTIxLjk1MzEyNSAxNjIuODk0NTMxIDEyOC43NDIxODggMTU0LjUxOTUzMSAxMjguNzQyMTg4IEMgMTQ2LjE0NDUzMSAxMjguNzQyMTg4IDEzOS4zNTU0NjkgMTIxLjk1MzEyNSAxMzkuMzU1NDY5IDExMy41NzgxMjUgQyAxMzkuMzU1NDY5IDEwNS4yMDMxMjUgMTQ2LjE0NDUzMSA5OC40MTc5NjkgMTU0LjUxOTUzMSA5OC40MTc5NjkgQyAxNjIuODk0NTMxIDk4LjQxNzk2OSAxNjkuNjgzNTk0IDEwNS4yMDMxMjUgMTY5LjY4MzU5NCAxMTMuNTc4MTI1ICIvPjwvZz48L3N2Zz4=',
        'bP': 'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSItNTAgLTEwMCAzNDUuODQzIDUwNi40NjIiIHZlcnNpb249IjEuMSI+PGRlZnM+PGNsaXBQYXRoIGlkPSJjbGlwMSI+PHBhdGggZD0iTSAwIDAgTCAyNTUuODQzNzUgMCBMIDI1NS44NDM3NSAzNzYuNDYwOTM4IEwgMCAzNzYuNDYwOTM4IFogTSAwIDAgIi8+PC9jbGlwUGF0aD48L2RlZnM+PGcgaWQ9InN1cmZhY2UxIj48cGF0aCBzdHlsZT0iIHN0cm9rZTpub25lO2ZpbGwtcnVsZTpub256ZXJvO2ZpbGw6cmdiKDMwLjE5NTYxOCUsMzAuMTk1NjE4JSwzMC4xOTU2MTglKTtmaWxsLW9wYWNpdHk6MTsiIGQ9Ik0gMjM5LjUyMzQzOCAzNDAuNDE0MDYyIEMgMjM5LjUyMzQzOCAyNTAuMTE3MTg4IDE2NS4wNzAzMTIgMjIwLjU0Njg3NSAxNzMuNjA5Mzc1IDE2NC4xNjc5NjkgQyAxOTUuMjMwNDY5IDE0OS4xNDQ1MzEgMjA5LjIxMDkzOCAxMjMuODkwNjI1IDIwOC40OTYwOTQgOTUuNDAyMzQ0IEMgMjA3LjQxNzk2OSA1Mi4zOTQ1MzEgMTcyLjMyNDIxOSAxNy4zNTU0NjkgMTI5LjMxNjQwNiAxNi4zNDM3NSBDIDgzLjU5Mzc1IDE1LjI2NTYyNSA0Ni4xOTUzMTIgNTIuMDA3ODEyIDQ2LjE5NTMxMiA5Ny40ODQzNzUgQyA0Ni4xOTUzMTIgMTI1LjA5Mzc1IDU5Ljk5MjE4OCAxNDkuNDY4NzUgODEuMDU4NTk0IDE2NC4xMzI4MTIgQyA5MC42MjEwOTQgMjIwLjU0Njg3NSAxNi4zMjAzMTIgMjUwLjQ4NDM3NSAxNi4zMjAzMTIgMzQwLjQxNDA2MiBDIDQ5LjI3MzQzOCAzNTAuMjkyOTY5IDcwLjY1MjM0NCAzNjAuMTQwNjI1IDEyOC40ODQzNzUgMzYwLjE0MDYyNSBDIDE4Ni4zMTY0MDYgMzYwLjE0MDYyNSAyMDYuNTcwMzEyIDM1MC4yOTI5NjkgMjM5LjUyMzQzOCAzNDAuNDE0MDYyICIvPjxwYXRoIHN0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDpyZ2IoNTAuMTk2ODM4JSw1MC4xOTY4MzglLDUwLjE5NjgzOCUpO2ZpbGwtb3BhY2l0eToxOyIgZD0iTSAxMjYgMzAuNDE0MDYyIEMgMTI2IDMwLjQxNDA2MiAxMDEuMDg1OTM4IDU2LjMzMjAzMSAxMDAgOTQuNDE0MDYyIEMgOTguOTEwMTU2IDEzMi40OTYwOTQgMTE0IDE1NC45NzI2NTYgMTE0IDE2MC40MTQwNjIgQyAxMTQgMTY1Ljg1NTQ2OSAxMTQuNDQxNDA2IDE4OC44MjgxMjUgMTA5IDIwOC40MTQwNjIgQyAxMDMuNTU4NTk0IDIyOCA3MyAyOTcuNDE0MDYyIDc1IDM0NC40MTQwNjIgQyA3Ni4zOTQ1MzEgMzc3LjE3NTc4MSAxOS40MjU3ODEgMzM0LjAyNzM0NCAxOS40MjU3ODEgMzM0LjAyNzM0NCBMIDI3LjAzOTA2MiAyNzcuNDQ5MjE5IEwgODMuNjE3MTg4IDE5NC43NTc4MTIgTCA3OS4yNjU2MjUgMTU5Ljk0MTQwNiBMIDQ1LjUzNTE1NiAxMDcuNzE0ODQ0IEwgNjUuMTIxMDk0IDQ1LjY5NTMxMiBaIE0gMTI2IDMwLjQxNDA2MiAiLz48ZyBjbGlwLXBhdGg9InVybCgjY2xpcDEpIiBjbGlwLXJ1bGU9Im5vbnplcm8iPjxwYXRoIHN0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDpyZ2IoMCUsMCUsMCUpO2ZpbGwtb3BhY2l0eToxOyIgZD0iTSAyMzkuNTIzNDM4IDM0MC40MTQwNjIgTCAyMzkuNTMxMjUgMzQwLjQxNDA2MiBaIE0gMzMuMTM2NzE5IDMyOC41MzEyNSBDIDMzLjc1NzgxMiAzMjguNzI2NTYyIDM0LjM3NSAzMjguOTI1NzgxIDM0Ljk5MjE4OCAzMjkuMTE3MTg4IEMgNjEuMDA3ODEyIDMzNy4zMzIwMzEgODEuNTU4NTk0IDM0My44MjAzMTIgMTI4LjQ4NDM3NSAzNDMuODIwMzEyIEMgMTc0Ljc4OTA2MiAzNDMuODIwMzEyIDE5NC43MTA5MzggMzM3LjQ3MjY1NiAyMTkuOTI5Njg4IDMyOS40MzM1OTQgQyAyMjAuODUxNTYyIDMyOS4xNDA2MjUgMjIxLjc3NzM0NCAzMjguODQzNzUgMjIyLjcxMDkzOCAzMjguNTQ2ODc1IEMgMjE5LjY1MjM0NCAyOTIuMTAxNTYyIDIwMi43NTM5MDYgMjY3LjQ5NjA5NCAxODYuMzU5Mzc1IDI0My42Mjg5MDYgQyAxNjkuNzI2NTYyIDIxOS40MTQwNjIgMTUyLjUyNzM0NCAxOTQuMzcxMDk0IDE1Ny40NzI2NTYgMTYxLjcyMjY1NiBDIDE1OC4xNDQ1MzEgMTU3LjI4OTA2MiAxNjAuNjEzMjgxIDE1My4zMjQyMTkgMTY0LjI5Njg3NSAxNTAuNzY1NjI1IEMgMTgyLjMwNDY4OCAxMzguMjUgMTkyLjczMDQ2OSAxMTcuNzA3MDMxIDE5Mi4xNzk2ODggOTUuODEyNSBDIDE5MS4zMjgxMjUgNjEuNzg5MDYyIDE2Mi45NTcwMzEgMzMuNDYwOTM4IDEyOC45MzM1OTQgMzIuNjYwMTU2IEMgMTExLjI4MTI1IDMyLjIxODc1IDk0LjY0ODQzOCAzOC43ODkwNjIgODIuMDU0Njg4IDUxLjA5Mzc1IEMgNjkuNDUzMTI1IDYzLjM5ODQzOCA2Mi41MTU2MjUgNzkuODc1IDYyLjUxNTYyNSA5Ny40ODQzNzUgQyA2Mi41MTU2MjUgMTE4LjY4MzU5NCA3Mi45Mjk2ODggMTM4LjU5Mzc1IDkwLjM3ODkwNiAxNTAuNzM0Mzc1IEMgOTMuOTc2NTYyIDE1My4yMzgyODEgOTYuNDE3OTY5IDE1Ny4wODU5MzggOTcuMTQ4NDM4IDE2MS40MDIzNDQgQyAxMDIuNzM0Mzc1IDE5NC4zNTkzNzUgODUuNTUwNzgxIDIxOS43MDMxMjUgNjguOTI5Njg4IDI0NC4yMTA5MzggQyA1Mi44MDQ2ODggMjY3Ljk5NjA5NCAzNi4xNzk2ODggMjkyLjUxMTcxOSAzMy4xMzY3MTkgMzI4LjUzMTI1IE0gMTI4LjQ4NDM3NSAzNzYuNDYwOTM4IEMgNzYuNTI3MzQ0IDM3Ni40NjA5MzggNTEuNTc4MTI1IDM2OC41ODU5MzggMjUuMTY0MDYyIDM2MC4yNDYwOTQgQyAyMC44MDQ2ODggMzU4Ljg2NzE4OCAxNi4zMDA3ODEgMzU3LjQ0NTMxMiAxMS42MzI4MTIgMzU2LjA0Njg3NSBDIDQuNzMwNDY5IDM1My45NzY1NjIgMCAzNDcuNjIxMDk0IDAgMzQwLjQxNDA2MiBDIDAgMjg3LjcwNzAzMSAyMy4yNDIxODggMjUzLjQzMzU5NCA0MS45MTQwNjIgMjI1Ljg5NDUzMSBDIDU2Ljk5NjA5NCAyMDMuNjQ4NDM4IDY2LjEwNTQ2OSAxODkuMjkyOTY5IDY1LjU3ODEyNSAxNzIuODcxMDk0IEMgNDMuMDg5ODQ0IDE1NC40MjU3ODEgMjkuODc1IDEyNi43ODEyNSAyOS44NzUgOTcuNDg0Mzc1IEMgMjkuODc1IDcxLjAxMTcxOSA0MC4zMDQ2ODggNDYuMjQyMTg4IDU5LjI0NjA5NCAyNy43NDIxODggQyA3OC4xNzk2ODggOS4yNDYwOTQgMTAzLjE5NTMxMiAtMC41ODIwMzEgMTI5LjY5OTIxOSAwLjAyNzM0MzggQyAxNTQuNzEwOTM4IDAuNjEzMjgxIDE3OC4zMTI1IDEwLjc1MzkwNiAxOTYuMTYwMTU2IDI4LjU3NDIxOSBDIDIxNC4wMDc4MTIgNDYuMzk4NDM4IDIyNC4xODM1OTQgNjkuOTg0Mzc1IDIyNC44MTI1IDk0Ljk5MjE4OCBDIDIyNS41NzAzMTIgMTI1LjIzNDM3NSAyMTIuNDA2MjUgMTUzLjc1MzkwNiAxODkuMjY5NTMxIDE3Mi43Njk1MzEgQyAxODkuMjE0ODQ0IDE5MC4xMjg5MDYgMTk5Ljk5MjE4OCAyMDUuODIwMzEyIDIxMy4yNjU2MjUgMjI1LjE0ODQzOCBDIDIzMi4yMzQzNzUgMjUyLjc2OTUzMSAyNTUuODQzNzUgMjg3LjEzNjcxOSAyNTUuODQzNzUgMzQwLjQxNDA2MiBDIDI1NS44NDM3NSAzNDcuNjIxMDk0IDI1MS4xMTMyODEgMzUzLjk3NjU2MiAyNDQuMjEwOTM4IDM1Ni4wNDY4NzUgQyAyMzkuMjIyNjU2IDM1Ny41NDI5NjkgMjM0LjQ1MzEyNSAzNTkuMDYyNSAyMjkuODQzNzUgMzYwLjUzMTI1IEMgMjA0LjE0MDYyNSAzNjguNzI2NTYyIDE3OS44NjMyODEgMzc2LjQ2MDkzOCAxMjguNDg0Mzc1IDM3Ni40NjA5MzggIi8+PC9nPjwvZz48L3N2Zz4=',
        'bQ': 'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSItNTAgLTkwIDQ5OCA1MjgiIHZlcnNpb249IjEuMSI+PGcgaWQ9InN1cmZhY2UxIj48cGF0aCBzdHlsZT0iIHN0cm9rZTpub25lO2ZpbGwtcnVsZTpub256ZXJvO2ZpbGw6cmdiKDMwLjE5NTYxOCUsMzAuMTk1NjE4JSwzMC4xOTU2MTglKTtmaWxsLW9wYWNpdHk6MTsiIGQ9Ik0gMzE5LjMyNDIxOSAzOTMgTCA4OC42NzU3ODEgMzkzIEMgOTMuMTc1NzgxIDM4Ny40MjE4NzUgMTA2LjQyMTg3NSAzNjkuNTI3MzQ0IDEwNi40MjE4NzUgMzQzLjUgQyAxMDYuNDIxODc1IDMzNi41MjczNDQgMTA1LjQ2ODc1IDMxNC44MjAzMTIgODguNjc1NzgxIDI5NCBMIDMxOS4zMjQyMTkgMjk0IEMgMzE0LjgyNDIxOSAyOTkuNTc4MTI1IDMwMS41ODIwMzEgMzE3LjQ3MjY1NiAzMDEuNTgyMDMxIDM0My41IEMgMzAxLjU4MjAzMSAzNTAuNDcyNjU2IDMwMi41MzEyNSAzNzIuMTc5Njg4IDMxOS4zMjQyMTkgMzkzICIvPjxwYXRoIHN0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDpyZ2IoNTAuMTk2ODM4JSw1MC4xOTY4MzglLDUwLjE5NjgzOCUpO2ZpbGwtb3BhY2l0eToxOyIgZD0iTSAxNDAgMzkzIEMgMTQzLjU2MjUgMzgyLjcxODc1IDE1MS40MzM1OTQgMzY3LjIyNjU2MiAxNTIgMzQ4IEMgMTUyLjY5OTIxOSAzMjQuMjAzMTI1IDE0My44OTg0MzggMzA2LjI3NzM0NCAxNDAgMjk1IEMgMTI5LjMyMDMxMiAyOTUgMTEyLjc0NjA5NCAyOTQgMTAyLjA2NjQwNiAyOTQgTCAxMTcuNjI4OTA2IDM0OCBMIDkyLjkxNDA2MiAzOTMgWiBNIDE0MCAzOTMgIi8+PHBhdGggc3R5bGU9IiBzdHJva2U6bm9uZTtmaWxsLXJ1bGU6bm9uemVybztmaWxsOnJnYigwJSwwJSwwJSk7ZmlsbC1vcGFjaXR5OjE7IiBkPSJNIDExMy41MDM5MDYgMzc4IEwgMjk0LjQ4NDM3NSAzNzggQyAyODguOTYwOTM4IDM2My45ODQzNzUgMjg3Ljg1MTU2MiAzNTEuMzYzMjgxIDI4Ny44NTE1NjIgMzQzLjUgQyAyODcuODUxNTYyIDMzMC4xNzk2ODggMjkwLjY3OTY4OCAzMTguNTg1OTM4IDI5NC40OTYwOTQgMzA5IEwgMTEzLjUxNTYyNSAzMDkgQyAxMTkuMDM5MDYyIDMyMy4wMTU2MjUgMTIwLjE0ODQzOCAzMzUuNjM2NzE5IDEyMC4xNDg0MzggMzQzLjUgQyAxMjAuMTQ4NDM4IDM1Ni44MjAzMTIgMTE3LjMyMDMxMiAzNjguNDE0MDYyIDExMy41MDM5MDYgMzc4IE0gMzE5LjMyMDMxMiA0MDggTCA4OC42Nzk2ODggNDA4IEMgODMuMjgxMjUgNDA4IDc4LjM4NjcxOSA0MDQuNTQ2ODc1IDc2LjE2Nzk2OSAzOTkuMTc1NzgxIEMgNzMuOTQ1MzEyIDM5My44MDA3ODEgNzQuODEyNSAzODcuNTA3ODEyIDc4LjM3ODkwNiAzODMuMDgyMDMxIEMgODMuNzIyNjU2IDM3Ni40NTMxMjUgOTIuNjkxNDA2IDM2Mi40OTYwOTQgOTIuNjkxNDA2IDM0My41IEMgOTIuNjkxNDA2IDMzNS4zNDc2NTYgOTAuODMyMDMxIDMxOS4zNTkzNzUgNzguMzc1IDMwMy45MTQwNjIgQyA3NC44MTI1IDI5OS40OTIxODggNzMuOTQ1MzEyIDI5My4xOTUzMTIgNzYuMTY3OTY5IDI4Ny44MjQyMTkgQyA3OC4zODY3MTkgMjgyLjQ1MzEyNSA4My4yODEyNSAyNzkgODguNjc5Njg4IDI3OSBMIDMxOS4zMjAzMTIgMjc5IEMgMzI0LjcxODc1IDI3OSAzMjkuNjEzMjgxIDI4Mi40NTMxMjUgMzMxLjgzMjAzMSAyODcuODI0MjE5IEMgMzM0LjA1NDY4OCAyOTMuMTk5MjE5IDMzMy4xOTE0MDYgMjk5LjQ5MjE4OCAzMjkuNjIxMDk0IDMwMy45MTc5NjkgQyAzMjQuMjc3MzQ0IDMxMC41NDY4NzUgMzE1LjMwODU5NCAzMjQuNTAzOTA2IDMxNS4zMDg1OTQgMzQzLjUgQyAzMTUuMzA4NTk0IDM1MS42NTIzNDQgMzE3LjE2Nzk2OSAzNjcuNjQwNjI1IDMyOS42MjEwOTQgMzgzLjA4NTkzOCBDIDMzMy4xOTE0MDYgMzg3LjUwNzgxMiAzMzQuMDU0Njg4IDM5My44MDQ2ODggMzMxLjgzMjAzMSAzOTkuMTc1NzgxIEMgMzI5LjYxMzI4MSA0MDQuNTQ2ODc1IDMyNC43MTg3NSA0MDggMzE5LjMyMDMxMiA0MDggIi8+PHBhdGggc3R5bGU9IiBzdHJva2U6bm9uZTtmaWxsLXJ1bGU6bm9uemVybztmaWxsOnJnYigzMC4xOTU2MTglLDMwLjE5NTYxOCUsMzAuMTk1NjE4JSk7ZmlsbC1vcGFjaXR5OjE7IiBkPSJNIDkxLjEwMTU2MiAyNTQuMzAwNzgxIEwgNTUuNzMwNDY5IDEyNy4zMzIwMzEgQyA1OC45Njg3NSAxMjkuMjgxMjUgMTA2LjE2NDA2MiAxOTYuMzc1IDEyOS44NjMyODEgMTgxLjUgQyAxNDguNzE0ODQ0IDE2OS42Njc5NjkgMTQ0Ljc5Mjk2OSA5Ny4zMjAzMTIgMTQ2LjMzOTg0NCA2OSBDIDE1NC42MzY3MTkgOTUuMjQyMTg4IDE4Mi40MjU3ODEgMTYyLjc1IDIwNCAxNjIuNzUgQyAyMjUuNTc0MjE5IDE2Mi43NSAyNTMuMzYzMjgxIDk1LjI0MjE4OCAyNjEuNjYwMTU2IDY5IEMgMjYyLjE4MzU5NCA3Mi4yMzA0NjkgMjUzLjgzMjAzMSAxNjYuMTU2MjUgMjg2LjM3MTA5NCAxODEuNSBDIDMwNC45NTcwMzEgMTkwLjI2NTYyNSAzNDYuMjUzOTA2IDEyOS45ODgyODEgMzUyLjI3MzQzOCAxMjcuMzMyMDMxIEMgMzQ2LjEwNTQ2OSAxNjIuNTM5MDYyIDMyMy40NjQ4NDQgMjExLjEzNjcxOSAzMTcuMzAwNzgxIDI1NC4xMjg5MDYgQyAzMTQuMDE5NTMxIDI3Ny4wMTE3MTkgMjk0LjY1MjM0NCAyOTQgMjcxLjc5Mjk2OSAyOTQgTCAxMzYuNTgyMDMxIDI5NCBDIDExMy43OTI5NjkgMjk0IDk0LjQ0MTQwNiAyNzcuMTA5Mzc1IDkxLjEwMTU2MiAyNTQuMzAwNzgxICIvPjxwYXRoIHN0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDpyZ2IoNTAuMTk2ODM4JSw1MC4xOTY4MzglLDUwLjE5NjgzOCUpO2ZpbGwtb3BhY2l0eToxOyIgZD0iTSA4Ni44MjgxMjUgMTU5IEMgMTUzIDE5MiA5MyAyNzkgMjMwIDI3OSBMIDEyOS45NzI2NTYgMjk0IEMgMTE4Ljc4MTI1IDI4My41MzEyNSA5NS45MDYyNSAyNTkuMjI2NTYyIDg2LjgyODEyNSAyMjIgQyA4MC4yMzgyODEgMTk0Ljk4NDM3NSA4My42Mjg5MDYgMTcyLjI3NzM0NCA4Ni44MjgxMjUgMTU5ICIvPjxwYXRoIHN0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDpyZ2IoMCUsMCUsMCUpO2ZpbGwtb3BhY2l0eToxOyIgZD0iTSAyMDMuNzAzMTI1IDE0Ny43NzM0MzggWiBNIDIwNC4yOTY4NzUgMTQ3Ljc3MzQzOCBaIE0gMTIyLjkwMjM0NCAxNjguNTgyMDMxIFogTSA4NC44MjQyMTkgMTgwLjI2MTcxOSBMIDEwNC4yMzQzNzUgMjQ5LjkzMzU5NCBDIDEwNC40MTc5NjkgMjUwLjU4OTg0NCAxMDQuNTU4NTk0IDI1MS4yNTc4MTIgMTA0LjY1NjI1IDI1MS45MzM1OTQgQyAxMDYuOTE3OTY5IDI2Ny4zNjMyODEgMTIwLjY0NDUzMSAyNzkgMTM2LjU4MjAzMSAyNzkgTCAyNzEuNzk2ODc1IDI3OSBDIDI4Ny43ODEyNSAyNzkgMzAxLjUxNTYyNSAyNjcuMzA4NTk0IDMwMy43MzgyODEgMjUxLjgwODU5NCBDIDMwNy4xMzI4MTIgMjI4LjE1MjM0NCAzMTQuODg2NzE5IDIwMy45MjE4NzUgMzIyLjY0MDYyNSAxODAuMzc4OTA2IEMgMzA3Ljc0MjE4OCAxOTQuMTE3MTg4IDI5My44NzEwOTQgMjAxLjM3NSAyODAuOTMzNTk0IDE5NS4yNjk1MzEgQyAyNjQuMjkyOTY5IDE4Ny40MjU3ODEgMjUzLjcyNjU2MiAxNjYuNjY3OTY5IDI0OS41MTU2MjUgMTMzLjU2MjUgQyAyMzMuNDg4MjgxIDE2My43MDcwMzEgMjE5LjAxOTUzMSAxNzcuNzUgMjA0IDE3Ny43NSBDIDE4OC45MjE4NzUgMTc3Ljc1IDE3NC40MDYyNSAxNjMuNjAxNTYyIDE1OC4zMDg1OTQgMTMzLjIzMDQ2OSBDIDE1OC4yNzczNDQgMTMzLjE2Nzk2OSAxNTguMjQyMTg4IDEzMy4xMDE1NjIgMTU4LjIxMDkzOCAxMzMuMDM5MDYyIEMgMTU2LjE0NDUzMSAxNjMuMjE0ODQ0IDE1MC45MDYyNSAxODUuNTkzNzUgMTM2LjcwMzEyNSAxOTQuNTA3ODEyIEMgMTMyLjA5NzY1NiAxOTcuMzk0NTMxIDEyNy4yNjU2MjUgMTk4LjY2Nzk2OSAxMjIuMzIwMzEyIDE5OC42Njc5NjkgQyAxMDkuOTI5Njg4IDE5OC42Njc5NjkgOTYuODMyMDMxIDE5MC42ODM1OTQgODQuODI0MjE5IDE4MC4yNjE3MTkgTSAyNzEuNzk2ODc1IDMwOSBMIDEzNi41ODIwMzEgMzA5IEMgMTIyLjQ1NzAzMSAzMDkgMTA4Ljc1IDMwMy44MjQyMTkgOTcuOTgwNDY5IDI5NC40MjE4NzUgQyA4Ny4yMzA0NjkgMjg1LjA0Mjk2OSA4MC4wNjI1IDI3Mi4wNTg1OTQgNzcuNzE0ODQ0IDI1Ny43NjE3MTkgTCA0Mi41OTc2NTYgMTMxLjcwMzEyNSBDIDQwLjk2ODc1IDEyNS44NjMyODEgNDIuNzQyMTg4IDExOS41MzEyNSA0Ny4wODIwMzEgMTE1LjY4MzU5NCBDIDUxLjQxNzk2OSAxMTEuODM1OTM4IDU3LjQ1NzAzMSAxMTEuMjUgNjIuMzQ3NjU2IDExNC4xOTE0MDYgQyA2NC45NzY1NjIgMTE1Ljc2OTUzMSA2Ni40Njg3NSAxMTcuNTk3NjU2IDcxLjQxNzk2OSAxMjMuNjQ4NDM4IEMgNzcuODQzNzUgMTMxLjUwMzkwNiA4OS44MDg1OTQgMTQ2LjEyODkwNiAxMDEuOTMzNTk0IDE1Ni43NSBDIDExNS40MDIzNDQgMTY4LjU0Njg3NSAxMjEuNzc3MzQ0IDE2OS4wNjI1IDEyMi45NDkyMTkgMTY4LjUzNTE1NiBDIDEyMy40Mzc1IDE2OC4wMjczNDQgMTI3LjUyMzQzOCAxNjMuMTc1NzgxIDEyOS45MjU3ODEgMTQxLjQ2ODc1IEMgMTMxLjcwMzEyNSAxMjUuMzc1IDEzMS45Mjk2ODggMTA2LjExMzI4MSAxMzIuMTA5Mzc1IDkwLjYzMjgxMiBDIDEzMi4yMTQ4NDQgODEuODIwMzEyIDEzMi4zMDA3ODEgNzQuMjA3MDMxIDEzMi42MzY3MTkgNjguMTA1NDY5IEMgMTMzLjAyMzQzOCA2MC45NjA5MzggMTM3Ljk4MDQ2OSA1NS4xMTMyODEgMTQ0LjQ3MjY1NiA1NC4xNDA2MjUgQyAxNTAuOTU3MDMxIDUzLjE2Nzk2OSAxNTcuMTc1NzgxIDU3LjMzNTkzOCAxNTkuMzE2NDA2IDY0LjEwMTU2MiBDIDE2My40MTAxNTYgNzcuMDU0Njg4IDE3MS42Njc5NjkgOTguMTA1NDY5IDE4MC44ODI4MTIgMTE1LjkyNTc4MSBDIDE5My4wODk4NDQgMTM5LjUzNTE1NiAyMDEuNDAyMzQ0IDE0Ni42ODM1OTQgMjA0IDE0Ny42Nzk2ODggQyAyMDYuNTk3NjU2IDE0Ni42ODM1OTQgMjE0LjkxMDE1NiAxMzkuNTM1MTU2IDIyNy4xMTcxODggMTE1LjkyNTc4MSBDIDIzNi4zMzIwMzEgOTguMTA1NDY5IDI0NC41ODk4NDQgNzcuMDU0Njg4IDI0OC42ODM1OTQgNjQuMTAxNTYyIEMgMjUwLjcyNjU2MiA1Ny42NDA2MjUgMjU2LjUxMTcxOSA1My41MTU2MjUgMjYyLjc0NjA5NCA1NC4wNDY4NzUgQyAyNjguOTgwNDY5IDU0LjU4NTkzOCAyNzQuMDk3NjU2IDU5LjY2Nzk2OSAyNzUuMTgzNTk0IDY2LjM5ODQzOCBDIDI3NS41MDc4MTIgNjguNDA2MjUgMjc1LjQ0OTIxOSA2OS44NDc2NTYgMjc1LjI2MTcxOSA3NC42MjEwOTQgQyAyNzIuMzU5Mzc1IDE0OC4wMzUxNTYgMjg1LjU1ODU5NCAxNjMuODc4OTA2IDI5MC45NTMxMjUgMTY3LjI1MzkwNiBDIDI5Mi40ODgyODEgMTY2LjgyNDIxOSAyOTcuMjk2ODc1IDE2NC44MTY0MDYgMzA3LjAzOTA2MiAxNTUuNDg4MjgxIEMgMzE1LjM0NzY1NiAxNDcuNTM1MTU2IDMyMy43MDMxMjUgMTM3LjY5OTIxOSAzMzAuNDE3OTY5IDEyOS43OTI5NjkgQyAzMzkuMzA4NTk0IDExOS4zMjQyMTkgMzQyLjYzMjgxMiAxMTUuNDEwMTU2IDM0Ny4xMjg5MDYgMTEzLjQyNTc4MSBDIDM1MS43ODkwNjIgMTExLjM2NzE4OCAzNTcuMTA1NDY5IDExMi4yNTc4MTIgMzYwLjk4ODI4MSAxMTUuNzQ2MDk0IEMgMzY0Ljg3MTA5NCAxMTkuMjMwNDY5IDM2Ni42OTkyMTkgMTI0Ljc1NzgxMiAzNjUuNzUzOTA2IDEzMC4xNTIzNDQgQyAzNjIuNzY1NjI1IDE0Ny4yMTg3NSAzNTYuNDU3MDMxIDE2Ni4zNDM3NSAzNDkuNzc3MzQ0IDE4Ni41OTM3NSBDIDM0Mi4wNDI5NjkgMjEwLjA0Njg3NSAzMzQuMDQyOTY5IDIzNC4zMDA3ODEgMzMwLjg2MzI4MSAyNTYuNDQ5MjE5IEMgMzI4Ljc0NjA5NCAyNzEuMjIyNjU2IDMyMS41MDc4MTIgMjg0LjY3OTY4OCAzMTAuNDgwNDY5IDI5NC4zNDc2NTYgQyAyOTkuNjk1MzEyIDMwMy43OTY4NzUgMjg1Ljk2MDkzOCAzMDkgMjcxLjc5Njg3NSAzMDkgIi8+PHBhdGggc3R5bGU9IiBzdHJva2U6bm9uZTtmaWxsLXJ1bGU6bm9uemVybztmaWxsOnJnYig1MC4xOTY4MzglLDUwLjE5NjgzOCUsNTAuMTk2ODM4JSk7ZmlsbC1vcGFjaXR5OjE7IiBkPSJNIDE2OCA0MiBDIDE2OCA1Ni45MTAxNTYgMTU1LjkxMDE1NiA2OSAxNDEgNjkgQyAxMjYuMDg5ODQ0IDY5IDExNCA1Ni45MTAxNTYgMTE0IDQyIEMgMTE0IDI3LjA4OTg0NCAxMjYuMDg5ODQ0IDE1IDE0MSAxNSBDIDE1NS45MTAxNTYgMTUgMTY4IDI3LjA4OTg0NCAxNjggNDIgIi8+PHBhdGggc3R5bGU9ImZpbGw6bm9uZTtzdHJva2Utd2lkdGg6MzA7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlOnJnYigwJSwwJSwwJSk7c3Ryb2tlLW9wYWNpdHk6MTtzdHJva2UtbWl0ZXJsaW1pdDoxMDsiIGQ9Ik0gMCAwIEMgMCAtMTQuOTEwMTU2IC0xMi4wODk4NDQgLTI3IC0yNyAtMjcgQyAtNDEuOTEwMTU2IC0yNyAtNTQgLTE0LjkxMDE1NiAtNTQgMCBDIC01NCAxNC45MTAxNTYgLTQxLjkxMDE1NiAyNyAtMjcgMjcgQyAtMTIuMDg5ODQ0IDI3IDAgMTQuOTEwMTU2IDAgMCBaIE0gMCAwICIgdHJhbnNmb3JtPSJtYXRyaXgoMSwwLDAsLTEsMTY4LDQyKSIvPjxwYXRoIHN0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDpyZ2IoNTAuMTk2ODM4JSw1MC4xOTY4MzglLDUwLjE5NjgzOCUpO2ZpbGwtb3BhY2l0eToxOyIgZD0iTSAyOTQgNDIgQyAyOTQgNTYuOTEwMTU2IDI4MS45MTAxNTYgNjkgMjY3IDY5IEMgMjUyLjA4OTg0NCA2OSAyNDAgNTYuOTEwMTU2IDI0MCA0MiBDIDI0MCAyNy4wODk4NDQgMjUyLjA4OTg0NCAxNSAyNjcgMTUgQyAyODEuOTEwMTU2IDE1IDI5NCAyNy4wODk4NDQgMjk0IDQyICIvPjxwYXRoIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlLXdpZHRoOjMwO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZTpyZ2IoMCUsMCUsMCUpO3N0cm9rZS1vcGFjaXR5OjE7c3Ryb2tlLW1pdGVybGltaXQ6MTA7IiBkPSJNIDAgMCBDIDAgLTE0LjkxMDE1NiAtMTIuMDg5ODQ0IC0yNyAtMjcgLTI3IEMgLTQxLjkxMDE1NiAtMjcgLTU0IC0xNC45MTAxNTYgLTU0IDAgQyAtNTQgMTQuOTEwMTU2IC00MS45MTAxNTYgMjcgLTI3IDI3IEMgLTEyLjA4OTg0NCAyNyAwIDE0LjkxMDE1NiAwIDAgWiBNIDAgMCAiIHRyYW5zZm9ybT0ibWF0cml4KDEsMCwwLC0xLDI5NCw0MikiLz48cGF0aCBzdHlsZT0iIHN0cm9rZTpub25lO2ZpbGwtcnVsZTpub256ZXJvO2ZpbGw6cmdiKDUwLjE5NjgzOCUsNTAuMTk2ODM4JSw1MC4xOTY4MzglKTtmaWxsLW9wYWNpdHk6MTsiIGQ9Ik0gMzkzIDk2IEMgMzkzIDExMC45MTAxNTYgMzgwLjkxMDE1NiAxMjMgMzY2IDEyMyBDIDM1MS4wODk4NDQgMTIzIDMzOSAxMTAuOTEwMTU2IDMzOSA5NiBDIDMzOSA4MS4wODk4NDQgMzUxLjA4OTg0NCA2OSAzNjYgNjkgQyAzODAuOTEwMTU2IDY5IDM5MyA4MS4wODk4NDQgMzkzIDk2ICIvPjxwYXRoIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlLXdpZHRoOjMwO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZTpyZ2IoMCUsMCUsMCUpO3N0cm9rZS1vcGFjaXR5OjE7c3Ryb2tlLW1pdGVybGltaXQ6MTA7IiBkPSJNIDAgMCBDIDAgLTE0LjkxMDE1NiAtMTIuMDg5ODQ0IC0yNyAtMjcgLTI3IEMgLTQxLjkxMDE1NiAtMjcgLTU0IC0xNC45MTAxNTYgLTU0IDAgQyAtNTQgMTQuOTEwMTU2IC00MS45MTAxNTYgMjcgLTI3IDI3IEMgLTEyLjA4OTg0NCAyNyAwIDE0LjkxMDE1NiAwIDAgWiBNIDAgMCAiIHRyYW5zZm9ybT0ibWF0cml4KDEsMCwwLC0xLDM5Myw5NikiLz48cGF0aCBzdHlsZT0iIHN0cm9rZTpub25lO2ZpbGwtcnVsZTpub256ZXJvO2ZpbGw6cmdiKDUwLjE5NjgzOCUsNTAuMTk2ODM4JSw1MC4xOTY4MzglKTtmaWxsLW9wYWNpdHk6MTsiIGQ9Ik0gNjkgOTYgQyA2OSAxMTAuOTEwMTU2IDU2LjkxMDE1NiAxMjMgNDIgMTIzIEMgMjcuMDg5ODQ0IDEyMyAxNSAxMTAuOTEwMTU2IDE1IDk2IEMgMTUgODEuMDg5ODQ0IDI3LjA4OTg0NCA2OSA0MiA2OSBDIDU2LjkxMDE1NiA2OSA2OSA4MS4wODk4NDQgNjkgOTYgIi8+PHBhdGggc3R5bGU9ImZpbGw6bm9uZTtzdHJva2Utd2lkdGg6MzA7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlOnJnYigwJSwwJSwwJSk7c3Ryb2tlLW9wYWNpdHk6MTtzdHJva2UtbWl0ZXJsaW1pdDoxMDsiIGQ9Ik0gMCAwIEMgMCAtMTQuOTEwMTU2IC0xMi4wODk4NDQgLTI3IC0yNyAtMjcgQyAtNDEuOTEwMTU2IC0yNyAtNTQgLTE0LjkxMDE1NiAtNTQgMCBDIC01NCAxNC45MTAxNTYgLTQxLjkxMDE1NiAyNyAtMjcgMjcgQyAtMTIuMDg5ODQ0IDI3IDAgMTQuOTEwMTU2IDAgMCBaIE0gMCAwICIgdHJhbnNmb3JtPSJtYXRyaXgoMSwwLDAsLTEsNjksOTYpIi8+PHBhdGggc3R5bGU9ImZpbGw6bm9uZTtzdHJva2Utd2lkdGg6MzA7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlOnJnYigwJSwwJSwwJSk7c3Ryb2tlLW9wYWNpdHk6MTtzdHJva2UtbWl0ZXJsaW1pdDoxMDsiIGQ9Ik0gMC4wMDAwNDM3NSAwIEwgMTk3LjY5NTM1NiAwICIgdHJhbnNmb3JtPSJtYXRyaXgoMSwwLDAsLTEsMTA1LjE1MjMsMzQ4KSIvPjwvZz48L3N2Zz4=',
        'bR': 'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSItNTAgLTEwMCAzODYuODMzIDUwMyIgdmVyc2lvbj0iMS4xIj48ZGVmcz48Y2xpcFBhdGggaWQ9ImNsaXAxIj48cGF0aCBkPSJNIDAgMCBMIDI5Ni44MzIwMzEgMCBMIDI5Ni44MzIwMzEgMzczIEwgMCAzNzMgWiBNIDAgMCAiLz48L2NsaXBQYXRoPjwvZGVmcz48ZyBpZD0ic3VyZmFjZTEiPjxwYXRoIHN0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDpyZ2IoMzAuMTk1NjE4JSwzMC4xOTU2MTglLDMwLjE5NTYxOCUpO2ZpbGwtb3BhY2l0eToxOyIgZD0iTSA0OS4zMjAzMTIgMTgyLjM0NzY1NiBDIDQ5LjgwNDY4OCAxMTMuOTE3OTY5IDUuODA0Njg4IDU3LjE4MzU5NCAxOC43NTc4MTIgMTYuMjM4MjgxIEwgMjc4LjA3ODEyNSAxNi4yMzgyODEgQyAyOTEuMDMxMjUgNTcuMTgzNTk0IDI0Ny4wMzEyNSAxMTMuOTE3OTY5IDI0Ny41MTU2MjUgMTgyLjM0NzY1NiBDIDI0OC4wMjM0MzggMjU0LjU1MDc4MSAyOTEuNDI1NzgxIDMxNC41NjI1IDI3OC4wNzgxMjUgMzU2Ljc2NTYyNSBMIDE4Ljc1NzgxMiAzNTYuNzY1NjI1IEMgNS40MDYyNSAzMTQuNTYyNSA0OC44MDg1OTQgMjU0LjU1MDc4MSA0OS4zMjAzMTIgMTgyLjM0NzY1NiAiLz48cGF0aCBzdHlsZT0iIHN0cm9rZTpub25lO2ZpbGwtcnVsZTpub256ZXJvO2ZpbGw6cmdiKDUwLjE5NjgzOCUsNTAuMTk2ODM4JSw1MC4xOTY4MzglKTtmaWxsLW9wYWNpdHk6MTsiIGQ9Ik0gOTIuODU5Mzc1IDE4IEMgODMuMTE3MTg4IDczLjIwMzEyNSA5OC44NTkzNzUgMTQzLjMyNDIxOSA5OC44NTkzNzUgMTkxIEMgOTguODU5Mzc1IDIzNy41NDI5NjkgODAuNjEzMjgxIDI5Mi4wNTQ2ODggODMuODU5Mzc1IDM1NyBMIDIzLjUxOTUzMSAzNTYuNzY1NjI1IEwgNDIuODU5Mzc1IDE5MSBMIDIzLjUxOTUzMSAxNS44MDQ2ODggWiBNIDkyLjg1OTM3NSAxOCAiLz48ZyBjbGlwLXBhdGg9InVybCgjY2xpcDEpIiBjbGlwLXJ1bGU9Im5vbnplcm8iPjxwYXRoIHN0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDpyZ2IoMCUsMCUsMCUpO2ZpbGwtb3BhY2l0eToxOyIgZD0iTSAyNTEuMjY1NjI1IDI4MS43NTc4MTIgQyAyNDIuMDE5NTMxIDI1Mi41MjczNDQgMjMxLjUzOTA2MiAyMTkuNDAyMzQ0IDIzMS4yNzczNDQgMTgyLjQ2NDg0NCBDIDIzMS4wMjM0MzggMTQ2LjY1NjI1IDI0MS43MjI2NTYgMTE0LjczMDQ2OSAyNTEuMTYwMTU2IDg2LjU2MjUgQyAyNTguMTEzMjgxIDY1LjgwNDY4OCAyNjQuMzI0MjE5IDQ3LjI2OTUzMSAyNjQuMjI2NTYyIDMyLjQ3MjY1NiBMIDMyLjYwNTQ2OSAzMi40NzI2NTYgQyAzMi41MDc4MTIgNDcuMjY5NTMxIDM4LjcxODc1IDY1LjgwNDY4OCA0NS42NzE4NzUgODYuNTYyNSBDIDU1LjEwOTM3NSAxMTQuNzMwNDY5IDY1LjgwODU5NCAxNDYuNjU2MjUgNjUuNTU0Njg4IDE4Mi40NjQ4NDQgQyA2NS4yOTI5NjkgMjE5LjQwMjM0NCA1NC44MTI1IDI1Mi41MzEyNSA0NS41NjY0MDYgMjgxLjc1NzgxMiBDIDM4LjQwNjI1IDMwNC40MDIzNDQgMzIuMDE5NTMxIDMyNC41ODU5MzggMzIuNDY0ODQ0IDM0MC41MjczNDQgTCAyNjQuMzcxMDk0IDM0MC41MjczNDQgQyAyNjQuODEyNSAzMjQuNTg1OTM4IDI1OC40Mjk2ODggMzA0LjQwMjM0NCAyNTEuMjY1NjI1IDI4MS43NTc4MTIgTSAzLjI3NzM0NCAzNjEuNjYwMTU2IEMgLTUuMjQ2MDk0IDMzNC43MjI2NTYgNC4zOTg0MzggMzA0LjIzODI4MSAxNC42MDU0NjkgMjcxLjk2NDg0NCBDIDIzLjE2MDE1NiAyNDQuOTI1NzgxIDMyLjg1NTQ2OSAyMTQuMjc3MzQ0IDMzLjA4MjAzMSAxODIuMjM0Mzc1IEMgMzMuMzAwNzgxIDE1MS44Mzk4NDQgMjMuOTM3NSAxMjMuODk4NDM4IDE0Ljg4MjgxMiA5Ni44Nzg5MDYgQyA0LjY1NjI1IDY2LjM1NTQ2OSAtNS4wMDc4MTIgMzcuNTIzNDM4IDMuMjc3MzQ0IDExLjMzOTg0NCBDIDUuNDEwMTU2IDQuNTg5ODQ0IDExLjY3NTc4MSAwIDE4Ljc1NzgxMiAwIEwgMjc4LjA3ODEyNSAwIEMgMjg1LjE1NjI1IDAgMjkxLjQyMTg3NSA0LjU4OTg0NCAyOTMuNTU4NTk0IDExLjMzOTg0NCBDIDMwMS44Mzk4NDQgMzcuNTIzNDM4IDI5Mi4xNzk2ODggNjYuMzU1NDY5IDI4MS45NDkyMTkgOTYuODc4OTA2IEMgMjcyLjg5NDUzMSAxMjMuODk4NDM4IDI2My41MzUxNTYgMTUxLjgzOTg0NCAyNjMuNzUgMTgyLjIzNDM3NSBDIDI2My45NzY1NjIgMjE0LjI3NzM0NCAyNzMuNjcxODc1IDI0NC45MjE4NzUgMjgyLjIyNjU2MiAyNzEuOTY0ODQ0IEMgMjkyLjQzNzUgMzA0LjIzNDM3NSAzMDIuMDc4MTI1IDMzNC43MjI2NTYgMjkzLjU1ODU5NCAzNjEuNjYwMTU2IEMgMjkxLjQyMTg3NSAzNjguNDEwMTU2IDI4NS4xNTYyNSAzNzMgMjc4LjA3ODEyNSAzNzMgTCAxOC43NTc4MTIgMzczIEMgMTEuNjc1NzgxIDM3MyA1LjQxMDE1NiAzNjguNDEwMTU2IDMuMjc3MzQ0IDM2MS42NjAxNTYgIi8+PC9nPjxwYXRoIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlLXdpZHRoOjMwO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZTpyZ2IoMCUsMCUsMCUpO3N0cm9rZS1vcGFjaXR5OjE7c3Ryb2tlLW1pdGVybGltaXQ6MTA7IiBkPSJNIC0wLjAwMTM2ODc1IC0wLjAwMDk2ODc1IEwgLTAuMDAxMzY4NzUgLTU4LjEzNzY4NyAiIHRyYW5zZm9ybT0ibWF0cml4KDEsMCwwLC0xLDk4LjU4MzQsMjQuNTQyKSIvPjxwYXRoIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlLXdpZHRoOjMwO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZTpyZ2IoMCUsMCUsMCUpO3N0cm9rZS1vcGFjaXR5OjE7c3Ryb2tlLW1pdGVybGltaXQ6MTA7IiBkPSJNIC0wLjAwMDQgLTAuMDAwOTY4NzUgTCAtMC4wMDA0IC01OC4xMzc2ODcgIiB0cmFuc2Zvcm09Im1hdHJpeCgxLDAsMCwtMSwxOTguMjUwNCwyNC41NDIpIi8+PHBhdGggc3R5bGU9ImZpbGw6bm9uZTtzdHJva2Utd2lkdGg6MzA7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlOnJnYigwJSwwJSwwJSk7c3Ryb2tlLW9wYWNpdHk6MTtzdHJva2UtbWl0ZXJsaW1pdDoxMDsiIGQ9Ik0gLTAuMDAxMzUgLTAuMDAxOTM3NSBMIDI1MC4xNDMxODEgLTAuMDAxOTM3NSAiIHRyYW5zZm9ybT0ibWF0cml4KDEsMCwwLC0xLDIzLjM0NTEsMjk4LjI3MTUpIi8+PHBhdGggc3R5bGU9ImZpbGw6bm9uZTtzdHJva2Utd2lkdGg6MzA7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlOnJnYigwJSwwJSwwJSk7c3Ryb2tlLW9wYWNpdHk6MTtzdHJva2UtbWl0ZXJsaW1pdDoxMDsiIGQ9Ik0gMC4wMDA2MTI1IC0wLjAwMTAxMjUgTCAyMTUuOTQ1OTI1IC0wLjAwMTAxMjUgIiB0cmFuc2Zvcm09Im1hdHJpeCgxLDAsMCwtMSw0MC40NDQ3LDE0MC44MTkzKSIvPjwvZz48L3N2Zz4=',
        'wB': 'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSItNTAgLTYwIDM4MS4zMTYgNTExLjY1MyIgdmVyc2lvbj0iMS4xIj48ZGVmcz48Y2xpcFBhdGggaWQ9ImNsaXAxIj48cGF0aCBkPSJNIDAgNzAgTCAyOTEuMzE2NDA2IDcwIEwgMjkxLjMxNjQwNiA0MzEuNjUyMzQ0IEwgMCA0MzEuNjUyMzQ0IFogTSAwIDcwICIvPjwvY2xpcFBhdGg+PC9kZWZzPjxnIGlkPSJzdXJmYWNlMSI+PHBhdGggc3R5bGU9IiBzdHJva2U6bm9uZTtmaWxsLXJ1bGU6bm9uemVybztmaWxsOnJnYigxMDAlLDEwMCUsMTAwJSk7ZmlsbC1vcGFjaXR5OjE7IiBkPSJNIDE4MC4zNTkzNzUgNDkuODMyMDMxIEMgMTgwLjM1OTM3NSA2OS4wNzAzMTIgMTY0Ljc2NTYyNSA4NC42NjQwNjIgMTQ1LjUyNzM0NCA4NC42NjQwNjIgQyAxMjYuMjg5MDYyIDg0LjY2NDA2MiAxMTAuNjk1MzEyIDY5LjA3MDMxMiAxMTAuNjk1MzEyIDQ5LjgzMjAzMSBDIDExMC42OTUzMTIgMzAuNTkzNzUgMTI2LjI4OTA2MiAxNSAxNDUuNTI3MzQ0IDE1IEMgMTY0Ljc2NTYyNSAxNSAxODAuMzU5Mzc1IDMwLjU5Mzc1IDE4MC4zNTkzNzUgNDkuODMyMDMxICIvPjxwYXRoIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlLXdpZHRoOjMwO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZTpyZ2IoMCUsMCUsMCUpO3N0cm9rZS1vcGFjaXR5OjE7c3Ryb2tlLW1pdGVybGltaXQ6MTA7IiBkPSJNIC0wLjAwMDgyNSAwLjAwMDY2ODc1IEMgLTAuMDAwODI1IC0xOS4yMzc2MTIgLTE1LjU5NDU3NSAtMzQuODMxMzYyIC0zNC44MzI4NTYgLTM0LjgzMTM2MiBDIC01NC4wNzExMzggLTM0LjgzMTM2MiAtNjkuNjY0ODg4IC0xOS4yMzc2MTIgLTY5LjY2NDg4OCAwLjAwMDY2ODc1IEMgLTY5LjY2NDg4OCAxOS4yMzg5NSAtNTQuMDcxMTM4IDM0LjgzMjcgLTM0LjgzMjg1NiAzNC44MzI3IEMgLTE1LjU5NDU3NSAzNC44MzI3IC0wLjAwMDgyNSAxOS4yMzg5NSAtMC4wMDA4MjUgMC4wMDA2Njg3NSBaIE0gLTAuMDAwODI1IDAuMDAwNjY4NzUgIiB0cmFuc2Zvcm09Im1hdHJpeCgxLDAsMCwtMSwxODAuMzYwMiw0OS44MzI3KSIvPjxwYXRoIHN0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDpyZ2IoODAuMDAwMzA1JSw4MC4wMDAzMDUlLDgwLjAwMDMwNSUpO2ZpbGwtb3BhY2l0eToxOyIgZD0iTSAyNDguMTQ4NDM4IDE2OS44NTkzNzUgQyAxOTEuNjIxMDk0IDE4NS4yMjI2NTYgMTUzLjg4MjgxMiAyODEuMjg1MTU2IDE1My44ODI4MTIgMjgxLjI4NTE1NiBDIDE1My44ODI4MTIgMjgxLjI4NTE1NiAxNTguNTU4NTk0IDE5NC43NjU2MjUgMTk4LjczMDQ2OSAxMjEuMTgzNTk0IEMgMTcwLjgzNTkzOCA5OC45MTc5NjkgMTQ2LjEwOTM3NSA4NS4xNDA2MjUgMTQ2LjEwOTM3NSA4NS4xNDA2MjUgQyAxNDYuMTA5Mzc1IDg1LjE0MDYyNSAxNC4wOTc2NTYgMTU3LjI2OTUzMSAxNS4wMDM5MDYgMjM5LjgzNTkzOCBDIDE1LjkxNDA2MiAzMjIuNDAyMzQ0IDgxLjIzODI4MSAzODYuODIwMzEyIDczLjA3NDIxOSA0MDQuMDYyNSBDIDY0LjkwNjI1IDQyMS4zMDA3ODEgMjI3LjMxNjQwNiA0MjAuMzk0NTMxIDIxOS4xNDg0MzggNDA0LjA2MjUgQyAyMTAuOTg0Mzc1IDM4Ny43MzA0NjkgMjc1LjQwMjM0NCAzMjEuNDk2MDk0IDI3Ni4zMTI1IDIzOS44MzU5MzggQyAyNzYuNTg1OTM4IDIxNS4xMjUgMjY0Ljc2MTcxOSAxOTEuMjA3MDMxIDI0OC4xNDg0MzggMTY5Ljg1OTM3NSAiLz48cGF0aCBzdHlsZT0iIHN0cm9rZTpub25lO2ZpbGwtcnVsZTpub256ZXJvO2ZpbGw6cmdiKDEwMCUsMTAwJSwxMDAlKTtmaWxsLW9wYWNpdHk6MTsiIGQ9Ik0gMTUwLjMxNjQwNiA5MS43NzM0MzggQyA5OS44MTY0MDYgMTc4Ljc3MzQzOCA4Ny44MTY0MDYgMjE3Ljc3MzQzOCA4Ny44MTY0MDYgMjQ0Ljc3MzQzOCBDIDg3LjgxNjQwNiAzMDEuNjk1MzEyIDEzOC44MTY0MDYgMzkyLjc3MzQzOCAxMTQuMzE2NDA2IDQwNi43NzM0MzggTCA3OC4zMTY0MDYgNDA2Ljc3MzQzOCBMIDMzLjMxNjQwNiAzMTYuNzczNDM4IEwgMTUuMzE2NDA2IDI1My43NzM0MzggTCAyNC4zMTY0MDYgMTk5Ljc3MzQzOCBMIDYwLjMxNjQwNiAxNTQuNzczNDM4IFogTSAxNTAuMzE2NDA2IDkxLjc3MzQzOCAiLz48ZyBjbGlwLXBhdGg9InVybCgjY2xpcDEpIiBjbGlwLXJ1bGU9Im5vbnplcm8iPjxwYXRoIHN0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDpyZ2IoMCUsMCUsMCUpO2ZpbGwtb3BhY2l0eToxOyIgZD0iTSA4OC42ODM1OTQgMzk3LjU0Njg3NSBDIDk4LjA3ODEyNSAzOTkuNjA5Mzc1IDExNy4zOTA2MjUgNDAxLjY1MjM0NCAxNDQuNDY0ODQ0IDQwMS42NTIzNDQgQyAxNDUuMDM5MDYyIDQwMS42NTIzNDQgMTQ1LjYxMzI4MSA0MDEuNjUyMzQ0IDE0Ni4xOTE0MDYgNDAxLjY1MjM0NCBDIDE3NC4wNTQ2ODggNDAxLjU2MjUgMTkzLjk1NzAzMSAzOTkuMzk4NDM4IDIwMy41OTc2NTYgMzk3LjI3NzM0NCBDIDIwNC44Nzg5MDYgMzg2Ljk0OTIxOSAyMTEuNjg3NSAzNzQuNjc5Njg4IDIyMS4wMTU2MjUgMzU3Ljg3NSBDIDIzNy44MDA3ODEgMzI3LjYyNSAyNjAuNzk2ODc1IDI4Ni4xOTUzMTIgMjYxLjMxMjUgMjM5LjY2Nzk2OSBDIDI2MS40OTIxODggMjIzLjU5NzY1NiAyNTUuMjUgMjA2LjIxNDg0NCAyNDIuNzQ2MDk0IDE4Ny44ODI4MTIgQyAyMDYuNTk3NjU2IDIwNS40Njg3NSAxNzYuODQ3NjU2IDI2My45Mzc1IDE2Ny44Mzk4NDQgMjg2Ljc4MTI1IEMgMTY1LjE0MDYyNSAyOTMuNjI1IDE1Ny44NjcxODggMjk3LjUxMTcxOSAxNTAuNjg3NSAyOTUuOTM3NSBDIDE0My40OTYwOTQgMjk0LjM2NzE4OCAxMzguNTA3ODEyIDI4Ny44MjQyMTkgMTM4LjkwMjM0NCAyODAuNDc2NTYyIEMgMTM5LjA4OTg0NCAyNzYuOTg4MjgxIDE0My43NDIxODggMTk4LjE2NDA2MiAxNzkuNjUyMzQ0IDEyNS4zODY3MTkgQyAxNjUuNzMwNDY5IDExNC45NDE0MDYgMTUzLjQyMTg3NSAxMDcuMDQyOTY5IDE0Ni4wNDY4NzUgMTAyLjUyNzM0NCBDIDEzNC43NzM0MzggMTA5LjMxNjQwNiAxMTIuMDE1NjI1IDEyMy44NjMyODEgODkuNjI1IDE0My4yMTg3NSBDIDYyLjIwMzEyNSAxNjYuOTI5Njg4IDI5LjU5NzY1NiAyMDIuOTEwMTU2IDMwLjAwMzkwNiAyMzkuNjcxODc1IEMgMzAuNTE5NTMxIDI4Ni42MTMyODEgNTMuNzg1MTU2IDMyNy41NzQyMTkgNzAuNzczNDM4IDM1Ny40ODQzNzUgQyA4MC40OTYwOTQgMzc0LjYwMTU2MiA4Ny41MjczNDQgMzg2Ljk4MDQ2OSA4OC42ODM1OTQgMzk3LjU0Njg3NSBNIDE0NC41NzQyMTkgNDMxLjY1MjM0NCBDIDEyOC4xNDA2MjUgNDMxLjY1MjM0NCAxMTIuMjU3ODEyIDQzMC45MDIzNDQgOTkuNjQ4NDM4IDQyOS41MjM0MzggQyA3Ny4wMjczNDQgNDI3LjA1MDc4MSA2OS41MzUxNTYgNDIzLjI0NjA5NCA2NS4xOTUzMTIgNDE5Ljg0NzY1NiBDIDU4Ljc4NTE1NiA0MTQuODMyMDMxIDU2LjMxMjUgNDA3LjAzMTI1IDU4LjY0MDYyNSAzOTkuODM5ODQ0IEMgNTcuNTExNzE5IDM5NC44Nzg5MDYgNTAuNDM3NSAzODIuNDI1NzgxIDQ0LjY4NzUgMzcyLjMwMDc4MSBDIDI3LjEzMjgxMiAzNDEuMzk0NTMxIDAuNjA1NDY5IDI5NC42OTE0MDYgMC4wMDM5MDYyNSAyNDAgQyAtMC40MjE4NzUgMjAxLjEzMjgxMiAyMy4yNjk1MzEgMTYwLjgxNjQwNiA3MC40MjE4NzUgMTIwLjE2NDA2MiBDIDEwNC4xMzI4MTIgOTEuMTA1NDY5IDEzNy41MTU2MjUgNzIuNzQyMTg4IDEzOC45MTc5NjkgNzEuOTc2NTYyIEMgMTQzLjQzNzUgNjkuNTAzOTA2IDE0OC45MTQwNjIgNjkuNTI3MzQ0IDE1My40MTQwNjIgNzIuMDM1MTU2IEMgMTU0LjQ2NDg0NCA3Mi42MjUgMTc5LjU0Njg3NSA4Ni42Nzk2ODggMjA4LjA4OTg0NCAxMDkuNDYwOTM4IEMgMjEzLjc4MTI1IDExNC4wMDM5MDYgMjE1LjM4NjcxOSAxMjEuOTgwNDY5IDIxMS44OTQ1MzEgMTI4LjM3NSBDIDE5OC45OTIxODggMTUyLjAwNzgxMiAxODkuODkwNjI1IDE3Ny4yMzgyODEgMTgzLjUgMjAwLjI3MzQzOCBDIDIwMi43Njk1MzEgMTc2LjE3OTY4OCAyMjMuMTE3MTg4IDE2MS4xMTcxODggMjQ0LjIxNDg0NCAxNTUuMzgyODEyIEMgMjUwLjA0Njg3NSAxNTMuNzk2ODc1IDI1Ni4yNjk1MzEgMTU1Ljg3MTA5NCAyNTkuOTg4MjgxIDE2MC42NDg0MzggQyAyODEuMDU0Njg4IDE4Ny43MTg3NSAyOTEuNTkzNzUgMjE0LjQxNzk2OSAyOTEuMzA4NTk0IDI0MC4wMDM5MDYgQyAyOTAuNzA3MDMxIDI5NC4xMTcxODggMjY0LjU1NDY4OCAzNDEuMjQ2MDk0IDI0Ny4yNDYwOTQgMzcyLjQzMzU5NCBDIDI0MS42NjAxNTYgMzgyLjUgMjM0Ljc5Mjk2OSAzOTQuODY3MTg4IDIzMy41OTM3NSAzOTkuODU5Mzc1IEMgMjM1Ljg0NzY1NiA0MDYuNzkyOTY5IDIzMy41NzAzMTIgNDE0LjMzNTkzOCAyMjcuNTAzOTA2IDQxOS4yOTY4NzUgQyAyMjMuMzEyNSA0MjIuNzE4NzUgMjE1Ljk5NjA5NCA0MjYuNTc0MjE5IDE5My40NjQ4NDQgNDI5LjE5MTQwNiBDIDE4MC4zNzUgNDMwLjcwNzAzMSAxNjMuNzUzOTA2IDQzMS41ODIwMzEgMTQ2LjY2MDE1NiA0MzEuNjQ4NDM4IEMgMTQ1Ljk2NDg0NCA0MzEuNjUyMzQ0IDE0NS4yNjk1MzEgNDMxLjY1MjM0NCAxNDQuNTc0MjE5IDQzMS42NTIzNDQgIi8+PC9nPjxwYXRoIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlLXdpZHRoOjMwO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2U6cmdiKDAlLDAlLDAlKTtzdHJva2Utb3BhY2l0eToxO3N0cm9rZS1taXRlcmxpbWl0OjEwOyIgZD0iTSAwLjAwMDIwNjI1IDAuMDAwNjYyNSBDIDE1LjU4MjIzOCAtMjQuMzM1Mjc1IDE4MS41MDAyMDYgLTI4LjgzOTE4MSAxOTguMDAwMjA2IDAuMDAwNjYyNSAiIHRyYW5zZm9ybT0ibWF0cml4KDEsMCwwLC0xLDQ3LjMxNjIsMzQ0LjI3NDEpIi8+PC9nPjwvc3ZnPg==',
        'wK': 'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSItNTAgLTYwIDQ3OC43NjYgNTExLjU3OSIgdmVyc2lvbj0iMS4xIj48ZGVmcz48Y2xpcFBhdGggaWQ9ImNsaXAxIj48cGF0aCBkPSJNIDQ0IDM1NiBMIDM0NSAzNTYgTCAzNDUgNDMxLjU3ODEyNSBMIDQ0IDQzMS41NzgxMjUgWiBNIDQ0IDM1NiAiLz48L2NsaXBQYXRoPjxjbGlwUGF0aCBpZD0iY2xpcDIiPjxwYXRoIGQ9Ik0gMjQxIDEyNyBMIDM4OC43NjU2MjUgMTI3IEwgMzg4Ljc2NTYyNSAzMjIgTCAyNDEgMzIyIFogTSAyNDEgMTI3ICIvPjwvY2xpcFBhdGg+PGNsaXBQYXRoIGlkPSJjbGlwMyI+PHBhdGggZD0iTSAwIDAgTCAzODguNzY1NjI1IDAgTCAzODguNzY1NjI1IDQzMS41NzgxMjUgTCAwIDQzMS41NzgxMjUgWiBNIDAgMCAiLz48L2NsaXBQYXRoPjxjbGlwUGF0aCBpZD0iY2xpcDQiPjxwYXRoIGQ9Ik0gMCAwIEwgMzg4Ljc2NTYyNSAwIEwgMzg4Ljc2NTYyNSA0MzEuNTc4MTI1IEwgMCA0MzEuNTc4MTI1IFogTSAwIDAgIi8+PC9jbGlwUGF0aD48Y2xpcFBhdGggaWQ9ImNsaXA1Ij48cGF0aCBkPSJNIDAgMCBMIDM4OC43NjU2MjUgMCBMIDM4OC43NjU2MjUgNDMxLjU3ODEyNSBMIDAgNDMxLjU3ODEyNSBaIE0gMCAwICIvPjwvY2xpcFBhdGg+PC9kZWZzPjxnIGlkPSJzdXJmYWNlMSI+PHBhdGggc3R5bGU9IiBzdHJva2U6bm9uZTtmaWxsLXJ1bGU6bm9uemVybztmaWxsOnJnYig4MC4wMDAzMDUlLDgwLjAwMDMwNSUsODAuMDAwMzA1JSk7ZmlsbC1vcGFjaXR5OjE7IiBkPSJNIDMxOS4zODI4MTIgNDE2LjU3ODEyNSBMIDY5LjM4MjgxMiA0MTYuNTc4MTI1IEMgNjMuODU5Mzc1IDQxNi41NzgxMjUgNTkuMzgyODEyIDQxMi4xMDE1NjIgNTkuMzgyODEyIDQwNi41NzgxMjUgTCA1OS4zODI4MTIgMzgxLjU3ODEyNSBDIDU5LjM4MjgxMiAzNzYuMDU4NTk0IDYzLjg1OTM3NSAzNzEuNTc4MTI1IDY5LjM4MjgxMiAzNzEuNTc4MTI1IEwgMzE5LjM4MjgxMiAzNzEuNTc4MTI1IEMgMzI0LjkwNjI1IDM3MS41NzgxMjUgMzI5LjM4MjgxMiAzNzYuMDU4NTk0IDMyOS4zODI4MTIgMzgxLjU3ODEyNSBMIDMyOS4zODI4MTIgNDA2LjU3ODEyNSBDIDMyOS4zODI4MTIgNDEyLjEwMTU2MiAzMjQuOTA2MjUgNDE2LjU3ODEyNSAzMTkuMzgyODEyIDQxNi41NzgxMjUgIi8+PHBhdGggc3R5bGU9IiBzdHJva2U6bm9uZTtmaWxsLXJ1bGU6bm9uemVybztmaWxsOnJnYigxMDAlLDEwMCUsMTAwJSk7ZmlsbC1vcGFjaXR5OjE7IiBkPSJNIDk1LjM4MjgxMiA0MTMuNTc4MTI1IEwgNTkuMzgyODEyIDQxMy41NzgxMjUgTCA1OS4zODI4MTIgMzY4LjU3ODEyNSBMIDk1LjM4MjgxMiAzNjguNTc4MTI1IFogTSA5NS4zODI4MTIgNDEzLjU3ODEyNSAiLz48ZyBjbGlwLXBhdGg9InVybCgjY2xpcDEpIiBjbGlwLXJ1bGU9Im5vbnplcm8iPjxwYXRoIHN0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDpyZ2IoMCUsMCUsMCUpO2ZpbGwtb3BhY2l0eToxOyIgZD0iTSA3NC4zODI4MTIgNDAxLjU3ODEyNSBMIDMxNC4zODI4MTIgNDAxLjU3ODEyNSBMIDMxNC4zODI4MTIgMzg2LjU3ODEyNSBMIDc0LjM4MjgxMiAzODYuNTc4MTI1IFogTSAzMTkuMzgyODEyIDQzMS41NzgxMjUgTCA2OS4zODI4MTIgNDMxLjU3ODEyNSBDIDU1LjU5NzY1NiA0MzEuNTc4MTI1IDQ0LjM4MjgxMiA0MjAuMzYzMjgxIDQ0LjM4MjgxMiA0MDYuNTc4MTI1IEwgNDQuMzgyODEyIDM4MS41NzgxMjUgQyA0NC4zODI4MTIgMzY3Ljc5Mjk2OSA1NS41OTc2NTYgMzU2LjU3ODEyNSA2OS4zODI4MTIgMzU2LjU3ODEyNSBMIDMxOS4zODI4MTIgMzU2LjU3ODEyNSBDIDMzMy4xNjc5NjkgMzU2LjU3ODEyNSAzNDQuMzgyODEyIDM2Ny43OTI5NjkgMzQ0LjM4MjgxMiAzODEuNTc4MTI1IEwgMzQ0LjM4MjgxMiA0MDYuNTc4MTI1IEMgMzQ0LjM4MjgxMiA0MjAuMzYzMjgxIDMzMy4xNjc5NjkgNDMxLjU3ODEyNSAzMTkuMzgyODEyIDQzMS41NzgxMjUgIi8+PC9nPjxwYXRoIHN0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDpyZ2IoODAuMDAwMzA1JSw4MC4wMDAzMDUlLDgwLjAwMDMwNSUpO2ZpbGwtb3BhY2l0eToxOyIgZD0iTSAzMjguMzgyODEyIDM3MS41NzgxMjUgTCA2MC4zODI4MTIgMzcxLjU3ODEyNSBDIDU0Ljg1OTM3NSAzNzEuNTc4MTI1IDUwLjM4MjgxMiAzNjcuMTAxNTYyIDUwLjM4MjgxMiAzNjEuNTc4MTI1IEwgNTAuMzgyODEyIDMxNS41NzgxMjUgQyA1MC4zODI4MTIgMzEwLjA1ODU5NCA1NC44NTkzNzUgMzA1LjU3ODEyNSA2MC4zODI4MTIgMzA1LjU3ODEyNSBMIDMyOC4zODI4MTIgMzA1LjU3ODEyNSBDIDMzMy45MDYyNSAzMDUuNTc4MTI1IDMzOC4zODI4MTIgMzEwLjA1ODU5NCAzMzguMzgyODEyIDMxNS41NzgxMjUgTCAzMzguMzgyODEyIDM2MS41NzgxMjUgQyAzMzguMzgyODEyIDM2Ny4xMDE1NjIgMzMzLjkwNjI1IDM3MS41NzgxMjUgMzI4LjM4MjgxMiAzNzEuNTc4MTI1ICIvPjxwYXRoIHN0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDpyZ2IoMTAwJSwxMDAlLDEwMCUpO2ZpbGwtb3BhY2l0eToxOyIgZD0iTSA4OC4zODI4MTIgMzU5LjU3ODEyNSBMIDUzLjM4MjgxMiAzNTkuNTc4MTI1IEwgNTMuMzgyODEyIDMxNC41NzgxMjUgTCA4OC4zODI4MTIgMzE0LjU3ODEyNSBaIE0gODguMzgyODEyIDM1OS41NzgxMjUgIi8+PHBhdGggc3R5bGU9IiBzdHJva2U6bm9uZTtmaWxsLXJ1bGU6bm9uemVybztmaWxsOnJnYigwJSwwJSwwJSk7ZmlsbC1vcGFjaXR5OjE7IiBkPSJNIDY1LjM4MjgxMiAzNTYuNTc4MTI1IEwgMzIzLjM4MjgxMiAzNTYuNTc4MTI1IEwgMzIzLjM4MjgxMiAzMjAuNTc4MTI1IEwgNjUuMzgyODEyIDMyMC41NzgxMjUgWiBNIDMyOC4zODI4MTIgMzg2LjU3ODEyNSBMIDYwLjM4MjgxMiAzODYuNTc4MTI1IEMgNDYuNTk3NjU2IDM4Ni41NzgxMjUgMzUuMzgyODEyIDM3NS4zNjMyODEgMzUuMzgyODEyIDM2MS41NzgxMjUgTCAzNS4zODI4MTIgMzE1LjU3ODEyNSBDIDM1LjM4MjgxMiAzMDEuNzkyOTY5IDQ2LjU5NzY1NiAyOTAuNTc4MTI1IDYwLjM4MjgxMiAyOTAuNTc4MTI1IEwgMzI4LjM4MjgxMiAyOTAuNTc4MTI1IEMgMzQyLjE2Nzk2OSAyOTAuNTc4MTI1IDM1My4zODI4MTIgMzAxLjc5Mjk2OSAzNTMuMzgyODEyIDMxNS41NzgxMjUgTCAzNTMuMzgyODEyIDM2MS41NzgxMjUgQyAzNTMuMzgyODEyIDM3NS4zNjMyODEgMzQyLjE2Nzk2OSAzODYuNTc4MTI1IDMyOC4zODI4MTIgMzg2LjU3ODEyNSAiLz48cGF0aCBzdHlsZT0iZmlsbDpub25lO3N0cm9rZS13aWR0aDozMDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlOnJnYigwJSwwJSwwJSk7c3Ryb2tlLW9wYWNpdHk6MTtzdHJva2UtbWl0ZXJsaW1pdDoxMDsiIGQ9Ik0gMC4wMDAwMTI1IDAuMDAxODI1IEwgMC4wMDAwMTI1IDEyMy4xNzM3ICIgdHJhbnNmb3JtPSJtYXRyaXgoMSwwLDAsLTEsMTk0LjM4MjgsMTM4LjE3MzcpIi8+PHBhdGggc3R5bGU9ImZpbGw6bm9uZTtzdHJva2Utd2lkdGg6MzA7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZTpyZ2IoMCUsMCUsMCUpO3N0cm9rZS1vcGFjaXR5OjE7c3Ryb2tlLW1pdGVybGltaXQ6MTA7IiBkPSJNIDAuMDAwMDEyNSAtMC4wMDAxIEwgNzIuMDAwMDEyIC0wLjAwMDEgIiB0cmFuc2Zvcm09Im1hdHJpeCgxLDAsMCwtMSwxNTguMzgyOCw1MC45OTk5KSIvPjxwYXRoIHN0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDpyZ2IoODAuMDAwMzA1JSw4MC4wMDAzMDUlLDgwLjAwMDMwNSUpO2ZpbGwtb3BhY2l0eToxOyIgZD0iTSAyMDcuMzc1IDk3Ljg3NSBMIDE4My4yMjI2NTYgOTcuODc1IEMgMTc4LjA1NDY4OCA5Ny44NzUgMTczLjM4NjcxOSAxMDAuOTQ1MzEyIDE3MS4zMzU5MzggMTA1LjY4MzU5NCBMIDE1Ni4zNTE1NjIgMTQwLjMwODU5NCBDIDE1NC45MzM1OTQgMTQzLjU4OTg0NCAxNTQuOTMzNTk0IDE0Ny4zMTI1IDE1Ni4zNTE1NjIgMTUwLjU5Mzc1IEwgMTcxLjMzNTkzOCAxODUuMjE4NzUgQyAxNzMuMzg2NzE5IDE4OS45NTcwMzEgMTc4LjA1NDY4OCAxOTMuMDIzNDM4IDE4My4yMjI2NTYgMTkzLjAyMzQzOCBMIDIwNy4zNzUgMTkzLjAyMzQzOCBDIDIxMi41MzkwNjIgMTkzLjAyMzQzOCAyMTcuMjEwOTM4IDE4OS45NTcwMzEgMjE5LjI2MTcxOSAxODUuMjE4NzUgTCAyMzQuMjQyMTg4IDE1MC41OTM3NSBDIDIzNS42NjAxNTYgMTQ3LjMxMjUgMjM1LjY2MDE1NiAxNDMuNTg5ODQ0IDIzNC4yNDIxODggMTQwLjMwODU5NCBMIDIxOS4yNjE3MTkgMTA1LjY4MzU5NCBDIDIxNy4yMTA5MzggMTAwLjk0NTMxMiAyMTIuNTM5MDYyIDk3Ljg3NSAyMDcuMzc1IDk3Ljg3NSAiLz48cGF0aCBzdHlsZT0iIHN0cm9rZTpub25lO2ZpbGwtcnVsZTpub256ZXJvO2ZpbGw6cmdiKDAlLDAlLDAlKTtmaWxsLW9wYWNpdHk6MTsiIGQ9Ik0gMTg0LjU2NjQwNiAxNzguMDIzNDM4IEwgMjA2LjAzMTI1IDE3OC4wMjM0MzggTCAyMjAuMTI1IDE0NS40NDkyMTkgTCAyMDYuMDMxMjUgMTEyLjg3NSBMIDE4NC41NjY0MDYgMTEyLjg3NSBMIDE3MC40Njg3NSAxNDUuNDQ5MjE5IFogTSAyMDcuMzc1IDIwOC4wMjM0MzggTCAxODMuMjE4NzUgMjA4LjAyMzQzOCBDIDE3Mi4wNjY0MDYgMjA4LjAyMzQzOCAxNjEuOTk2MDk0IDIwMS40MTAxNTYgMTU3LjU2NjQwNiAxOTEuMTcxODc1IEwgMTQyLjU4NTkzOCAxNTYuNTUwNzgxIEMgMTM5LjUzNTE1NiAxNDkuNSAxMzkuNTM1MTU2IDE0MS40MDYyNSAxNDIuNTg1OTM4IDEzNC4zNTE1NjIgTCAxNTcuNTY2NDA2IDk5LjcyNjU2MiBDIDE2MS45OTYwOTQgODkuNDkyMTg4IDE3Mi4wNjY0MDYgODIuODc1IDE4My4yMTg3NSA4Mi44NzUgTCAyMDcuMzc1IDgyLjg3NSBDIDIxOC41MzEyNSA4Mi44NzUgMjI4LjU5NzY1NiA4OS40OTIxODggMjMzLjAyNzM0NCA5OS43MjY1NjIgTCAyNDguMDA3ODEyIDEzNC4zNTE1NjIgQyAyNTEuMDU4NTk0IDE0MS40MDYyNSAyNTEuMDU4NTk0IDE0OS41IDI0OC4wMDc4MTIgMTU2LjU1MDc4MSBMIDIzMy4wMjczNDQgMTkxLjE3MTg3NSBDIDIyOC41OTc2NTYgMjAxLjQxMDE1NiAyMTguNTMxMjUgMjA4LjAyMzQzOCAyMDcuMzc1IDIwOC4wMjM0MzggIi8+PHBhdGggc3R5bGU9IiBzdHJva2U6bm9uZTtmaWxsLXJ1bGU6bm9uemVybztmaWxsOnJnYig4MC4wMDAzMDUlLDgwLjAwMDMwNSUsODAuMDAwMzA1JSk7ZmlsbC1vcGFjaXR5OjE7IiBkPSJNIDMxNS4xNDg0MzggMTQxLjU5Mzc1IEMgMzQ3LjUyMzQzOCAxNDEuNTkzNzUgMzczLjc2NTYyNSAxNjUuNzA3MDMxIDM3My43NjU2MjUgMTk1LjQ0OTIxOSBDIDM3My43NjU2MjUgMjU4LjI4MTI1IDMyNC45MTc5NjkgMjk0LjE4MzU5NCAzMTUuMTQ4NDM4IDMwMy4xNjAxNTYgQyAzMDUuMzc4OTA2IDMxMi4xMzY3MTkgMjU2LjUyNzM0NCAzMDMuMTYwMTU2IDI1Ni41MjczNDQgMzAzLjE2MDE1NiBMIDI1Ni41MjczNDQgMTk1LjQ0OTIxOSBDIDI1Ni41MjczNDQgMTY1LjcwNzAzMSAyODIuNzczNDM4IDE0MS41OTM3NSAzMTUuMTQ4NDM4IDE0MS41OTM3NSAiLz48cGF0aCBzdHlsZT0iIHN0cm9rZTpub25lO2ZpbGwtcnVsZTpub256ZXJvO2ZpbGw6cmdiKDEwMCUsMTAwJSwxMDAlKTtmaWxsLW9wYWNpdHk6MTsiIGQ9Ik0gMzcxLjM4MjgxMiAxNDguNTc4MTI1IEMgMzQ0LjM4MjgxMiAxOTIuNTc4MTI1IDMwMC4zODI4MTIgMTQzLjU3ODEyNSAyODIuMzgyODEyIDI5Mi41NzgxMjUgQyAyODIuMzgyODEyIDI5Mi41NzgxMjUgMjkzLjM4MjgxMiAzMTkuNTI3MzQ0IDI3NS4zODI4MTIgMjkzLjU3ODEyNSBDIDI1Ny4zODI4MTIgMjY3LjYyODkwNiAyNzcuMzgyODEyIDIxOS41MjczNDQgMjc3LjM4MjgxMiAxOTMuNTc4MTI1IEMgMjc3LjM4MjgxMiAxNjcuNjI4OTA2IDI5OS4zODI4MTIgMTUxLjQ0OTIxOSAzMTcuMzgyODEyIDE0Mi44MDA3ODEgQyAzMzUuMzgyODEyIDEzNC4xNTIzNDQgMzcxLjM4MjgxMiAxNDguNTc4MTI1IDM3MS4zODI4MTIgMTQ4LjU3ODEyNSAiLz48ZyBjbGlwLXBhdGg9InVybCgjY2xpcDIpIiBjbGlwLXJ1bGU9Im5vbnplcm8iPjxwYXRoIHN0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDpyZ2IoMCUsMCUsMCUpO2ZpbGwtb3BhY2l0eToxOyIgZD0iTSAyNzEuNTI3MzQ0IDI5MC44OTQ1MzEgQyAyODYuNTg5ODQ0IDI5Mi44NTE1NjIgMzAwLjk2MDkzOCAyOTMuMzU5Mzc1IDMwNS43MTg3NSAyOTEuODk0NTMxIEMgMzA2LjU1ODU5NCAyOTEuMTUyMzQ0IDMwNy41MTU2MjUgMjkwLjMyODEyNSAzMDguNTc4MTI1IDI4OS40MTc5NjkgQyAzMjIuMzAwNzgxIDI3Ny42MjUgMzU4Ljc2NTYyNSAyNDYuMzA0Njg4IDM1OC43NjU2MjUgMTk1LjQ0OTIxOSBDIDM1OC43NjU2MjUgMTczLjcwMzEyNSAzMzkuMTk5MjE5IDE1Ni4wMTE3MTkgMzE1LjE0ODQzOCAxNTYuMDExNzE5IEMgMjkxLjA5Mzc1IDE1Ni4wMTE3MTkgMjcxLjUyNzM0NCAxNzMuNzAzMTI1IDI3MS41MjczNDQgMTk1LjQ0OTIxOSBaIE0gMjk1LjY5MTQwNiAzMjEuNTc4MTI1IEMgMjkxLjI2NTYyNSAzMjEuNTc4MTI1IDI4Ni4zNDc2NTYgMzIxLjM0Mzc1IDI4MC44NzUgMzIwLjg4NjcxOSBDIDI2Ni44Mzk4NDQgMzE5LjcxNDg0NCAyNTQuMjQyMTg4IDMxNy40MTc5NjkgMjUzLjcxMDkzOCAzMTcuMzIwMzEyIEwgMjQxLjUyNzM0NCAzMTUuMDgyMDMxIEwgMjQxLjUyNzM0NCAxOTUuNDQ5MjE5IEMgMjQxLjUyNzM0NCAxNTcuODA0Njg4IDI3NC41NTQ2ODggMTI3LjE3OTY4OCAzMTUuMTQ4NDM4IDEyNy4xNzk2ODggQyAzNTUuNzQyMTg4IDEyNy4xNzk2ODggMzg4Ljc2NTYyNSAxNTcuODA0Njg4IDM4OC43NjU2MjUgMTk1LjQ0OTIxOSBDIDM4OC43NjU2MjUgMjU5LjIwNzAzMSAzNDMuNDU3MDMxIDI5OC4xMjUgMzI4LjU2NjQwNiAzMTAuOTE3OTY5IEMgMzI3LjI5Mjk2OSAzMTIuMDExNzE5IDMyNi4xOTE0MDYgMzEyLjk1NzAzMSAzMjUuNTExNzE5IDMxMy41ODIwMzEgQyAzMTkuNTg1OTM4IDMxOS4wMjczNDQgMzEwLjMzNTkzOCAzMjEuNTc4MTI1IDI5NS42OTE0MDYgMzIxLjU3ODEyNSAiLz48L2c+PHBhdGggc3R5bGU9IiBzdHJva2U6bm9uZTtmaWxsLXJ1bGU6bm9uemVybztmaWxsOnJnYig4MC4wMDAzMDUlLDgwLjAwMDMwNSUsODAuMDAwMzA1JSk7ZmlsbC1vcGFjaXR5OjE7IiBkPSJNIDI1MyAxMzcuOTk2MDk0IEMgMjg1LjM3NSAxMzcuOTk2MDk0IDMxMS42MjEwOTQgMTYyLjEwNTQ2OSAzMTEuNjIxMDk0IDE5MS44NTE1NjIgQyAzMTEuNjIxMDk0IDI1NC42ODM1OTQgMjYyLjc3MzQzOCAyOTAuNTg1OTM4IDI1MyAyOTkuNTYyNSBDIDI0My4yMzA0NjkgMzA4LjUzNTE1NiAxOTQuMzgyODEyIDI5OS41NjI1IDE5NC4zODI4MTIgMjk5LjU2MjUgTCAxOTQuMzgyODEyIDE5MS44NTE1NjIgQyAxOTQuMzgyODEyIDE2Mi4xMDU0NjkgMjIwLjYyODkwNiAxMzcuOTk2MDk0IDI1MyAxMzcuOTk2MDk0ICIvPjxwYXRoIHN0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDpyZ2IoMTAwJSwxMDAlLDEwMCUpO2ZpbGwtb3BhY2l0eToxOyIgZD0iTSAyODkuMzgyODEyIDE0OC41NzgxMjUgQyAyNTAuMzgyODEyIDE3MC41NzgxMjUgMjMzLjM4MjgxMiAxNDkuNTc4MTI1IDIyOC4zODI4MTIgMzAyLjU3ODEyNSBDIDIyOC4zODI4MTIgMzAyLjU3ODEyNSAyMjAuMzgyODEyIDMxNy41MjczNDQgMjAyLjM4MjgxMiAyOTEuNTc4MTI1IEMgMTg0LjM4MjgxMiAyNjUuNjI4OTA2IDE5NS4zODI4MTIgMjE5LjUyNzM0NCAxOTUuMzgyODEyIDE5My41NzgxMjUgQyAxOTUuMzgyODEyIDE2Ny42Mjg5MDYgMjE3LjM4MjgxMiAxNTEuNDQ5MjE5IDIzNS4zODI4MTIgMTQyLjgwMDc4MSBDIDI1My4zODI4MTIgMTM0LjE1MjM0NCAyODkuMzgyODEyIDE0OC41NzgxMjUgMjg5LjM4MjgxMiAxNDguNTc4MTI1ICIvPjxwYXRoIHN0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDpyZ2IoMCUsMCUsMCUpO2ZpbGwtb3BhY2l0eToxOyIgZD0iTSAyMDkuMzgyODEyIDI4Ny4yOTY4NzUgQyAyMjQuNDQxNDA2IDI4OS4yNTM5MDYgMjM4LjgxNjQwNiAyODkuNzYxNzE5IDI0My41NzAzMTIgMjg4LjI5Njg3NSBDIDI0NC40MTQwNjIgMjg3LjU1MDc4MSAyNDUuMzY3MTg4IDI4Ni43MzA0NjkgMjQ2LjQyOTY4OCAyODUuODIwMzEyIEMgMjYwLjE1NjI1IDI3NC4wMzEyNSAyOTYuNjIxMDk0IDI0Mi43MDcwMzEgMjk2LjYyMTA5NCAxOTEuODUxNTYyIEMgMjk2LjYyMTA5NCAxNzAuMTA1NDY5IDI3Ny4wNTQ2ODggMTUyLjQxMDE1NiAyNTMgMTUyLjQxMDE1NiBDIDIyOC45NDkyMTkgMTUyLjQxMDE1NiAyMDkuMzgyODEyIDE3MC4xMDU0NjkgMjA5LjM4MjgxMiAxOTEuODUxNTYyIFogTSAyMzMuNTQ2ODc1IDMxNy45ODA0NjkgQyAyMjkuMTE3MTg4IDMxNy45ODA0NjkgMjI0LjE5OTIxOSAzMTcuNzQ2MDk0IDIxOC43MzA0NjkgMzE3LjI4OTA2MiBDIDIwNC42OTUzMTIgMzE2LjExNzE4OCAxOTIuMDk3NjU2IDMxMy44MTY0MDYgMTkxLjU2NjQwNiAzMTMuNzIyNjU2IEwgMTc5LjM4MjgxMiAzMTEuNDg0Mzc1IEwgMTc5LjM4MjgxMiAxOTEuODUxNTYyIEMgMTc5LjM4MjgxMiAxNTQuMjA3MDMxIDIxMi40MDYyNSAxMjMuNTc4MTI1IDI1MyAxMjMuNTc4MTI1IEMgMjkzLjU5Mzc1IDEyMy41NzgxMjUgMzI2LjYyMTA5NCAxNTQuMjA3MDMxIDMyNi42MjEwOTQgMTkxLjg1MTU2MiBDIDMyNi42MjEwOTQgMjU1LjYwOTM3NSAyODEuMzA4NTk0IDI5NC41MzEyNSAyNjYuNDE3OTY5IDMwNy4zMjAzMTIgQyAyNjUuMTQ0NTMxIDMwOC40MTQwNjIgMjY0LjA0Mjk2OSAzMDkuMzU5Mzc1IDI2My4zNjMyODEgMzA5Ljk4NDM3NSBDIDI1Ny40NDE0MDYgMzE1LjQyNTc4MSAyNDguMTkxNDA2IDMxNy45ODA0NjkgMjMzLjU0Njg3NSAzMTcuOTgwNDY5ICIvPjxwYXRoIHN0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDpyZ2IoODAuMDAwMzA1JSw4MC4wMDAzMDUlLDgwLjAwMDMwNSUpO2ZpbGwtb3BhY2l0eToxOyIgZD0iTSA3My42MTcxODggMTQxLjU5Mzc1IEMgNDEuMjQ2MDk0IDE0MS41OTM3NSAxNSAxNjUuNzA3MDMxIDE1IDE5NS40NDkyMTkgQyAxNSAyNTguMjgxMjUgNjMuODQ3NjU2IDI5NC4xODM1OTQgNzMuNjE3MTg4IDMwMy4xNjAxNTYgQyA4My4zODY3MTkgMzEyLjEzNjcxOSAxMzIuMjM4MjgxIDMwMy4xNjAxNTYgMTMyLjIzODI4MSAzMDMuMTYwMTU2IEwgMTMyLjIzODI4MSAxOTUuNDQ5MjE5IEMgMTMyLjIzODI4MSAxNjUuNzA3MDMxIDEwNS45OTIxODggMTQxLjU5Mzc1IDczLjYxNzE4OCAxNDEuNTkzNzUgIi8+PHBhdGggc3R5bGU9IiBzdHJva2U6bm9uZTtmaWxsLXJ1bGU6bm9uemVybztmaWxsOnJnYigxMDAlLDEwMCUsMTAwJSk7ZmlsbC1vcGFjaXR5OjE7IiBkPSJNIDgxLjM4MjgxMiAxMzkuOTE3OTY5IEMgMTguMzgyODEyIDE3OC41NzgxMjUgNTAuMzgyODEyIDIzNi4wMjczNDQgOTUuMzgyODEyIDI5Ni41NzgxMjUgQyA5NS4zODI4MTIgMjk2LjU3ODEyNSA3Mi4zODI4MTIgMzEyLjkxNDA2MiA1NC4zODI4MTIgMjg2Ljk2ODc1IEMgMzYuMzgyODEyIDI2MS4wMTU2MjUgOS4zODI4MTIgMjI2LjQxNzk2OSA5LjM4MjgxMiAyMDAuNDY4NzUgQyA5LjM4MjgxMiAxNzQuNTE5NTMxIDI3LjM4MjgxMiAxNDguNTY2NDA2IDQ1LjM4MjgxMiAxMzkuOTE3OTY5IEMgNjMuMzgyODEyIDEzMS4yNjk1MzEgODEuMzgyODEyIDEzOS45MTc5NjkgODEuMzgyODEyIDEzOS45MTc5NjkgIi8+PHBhdGggc3R5bGU9IiBzdHJva2U6bm9uZTtmaWxsLXJ1bGU6bm9uemVybztmaWxsOnJnYigwJSwwJSwwJSk7ZmlsbC1vcGFjaXR5OjE7IiBkPSJNIDgzLjA0Njg3NSAyOTEuODk0NTMxIEMgODcuODA0Njg4IDI5My4zNTkzNzUgMTAyLjE3NTc4MSAyOTIuODUxNTYyIDExNy4yMzgyODEgMjkwLjg5NDUzMSBMIDExNy4yMzgyODEgMTk1LjQ0OTIxOSBDIDExNy4yMzgyODEgMTczLjcwMzEyNSA5Ny42Njc5NjkgMTU2LjAxMTcxOSA3My42MTcxODggMTU2LjAxMTcxOSBDIDQ5LjU2NjQwNiAxNTYuMDExNzE5IDMwIDE3My43MDMxMjUgMzAgMTk1LjQ0OTIxOSBDIDMwIDI0Ni4zMDQ2ODggNjYuNDY0ODQ0IDI3Ny42MjUgODAuMTkxNDA2IDI4OS40MTc5NjkgQyA4MS4yNSAyOTAuMzI4MTI1IDgyLjIwNzAzMSAyOTEuMTUyMzQ0IDgzLjA0Njg3NSAyOTEuODk0NTMxIE0gOTMuMDc0MjE5IDMyMS41NzgxMjUgQyA3OC40MjU3ODEgMzIxLjU3ODEyNSA2OS4xNzk2ODggMzE5LjAyNzM0NCA2My4yNTM5MDYgMzEzLjU4MjAzMSBDIDYyLjU3NDIxOSAzMTIuOTU3MDMxIDYxLjQ3MjY1NiAzMTIuMDExNzE5IDYwLjE5NTMxMiAzMTAuOTE3OTY5IEMgNDUuMzA4NTk0IDI5OC4xMjUgMCAyNTkuMjA3MDMxIDAgMTk1LjQ0OTIxOSBDIDAgMTU3LjgwNDY4OCAzMy4wMjczNDQgMTI3LjE3OTY4OCA3My42MTcxODggMTI3LjE3OTY4OCBDIDExNC4yMTA5MzggMTI3LjE3OTY4OCAxNDcuMjM4MjgxIDE1Ny44MDQ2ODggMTQ3LjIzODI4MSAxOTUuNDQ5MjE5IEwgMTQ3LjIzODI4MSAzMTUuMDgyMDMxIEwgMTM1LjA1NDY4OCAzMTcuMzIwMzEyIEMgMTM0LjUyMzQzOCAzMTcuNDE3OTY5IDEyMS45MjU3ODEgMzE5LjcxNDg0NCAxMDcuODkwNjI1IDMyMC44ODY3MTkgQyAxMDIuNDE3OTY5IDMyMS4zNDM3NSA5Ny41IDMyMS41NzgxMjUgOTMuMDc0MjE5IDMyMS41NzgxMjUgIi8+PHBhdGggc3R5bGU9IiBzdHJva2U6bm9uZTtmaWxsLXJ1bGU6bm9uemVybztmaWxsOnJnYig4MC4wMDAzMDUlLDgwLjAwMDMwNSUsODAuMDAwMzA1JSk7ZmlsbC1vcGFjaXR5OjE7IiBkPSJNIDEzNS43NjU2MjUgMTM3Ljk5NjA5NCBDIDEwMy4zOTA2MjUgMTM3Ljk5NjA5NCA3Ny4xNDQ1MzEgMTYyLjEwNTQ2OSA3Ny4xNDQ1MzEgMTkxLjg1MTU2MiBDIDc3LjE0NDUzMSAyNTQuNjgzNTk0IDEyNS45OTIxODggMjkwLjU4NTkzOCAxMzUuNzY1NjI1IDI5OS41NjI1IEMgMTQ1LjUzNTE1NiAzMDguNTM1MTU2IDE5NC4zODI4MTIgMjk5LjU2MjUgMTk0LjM4MjgxMiAyOTkuNTYyNSBMIDE5NC4zODI4MTIgMTkxLjg1MTU2MiBDIDE5NC4zODI4MTIgMTYyLjEwNTQ2OSAxNjguMTM2NzE5IDEzNy45OTYwOTQgMTM1Ljc2NTYyNSAxMzcuOTk2MDk0ICIvPjxwYXRoIHN0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDpyZ2IoMTAwJSwxMDAlLDEwMCUpO2ZpbGwtb3BhY2l0eToxOyIgZD0iTSAxNTIuMzgyODEyIDEzOC41NzgxMjUgQyAxMTYuMzgyODEyIDE3Mi4wMDc4MTIgMTIyLjM4MjgxMiAyMzIuMDI3MzQ0IDE2Ny4zODI4MTIgMjkyLjU3ODEyNSBDIDE2Ny4zODI4MTIgMjkyLjU3ODEyNSAxNDkuMzgyODEyIDMxOC44MDA3ODEgMTMxLjM4MjgxMiAyOTIuODUxNTYyIEMgMTEzLjM4MjgxMiAyNjYuODk4NDM4IDgyLjM4MjgxMiAyMjIuNTI3MzQ0IDgyLjM4MjgxMiAxOTYuNTc4MTI1IEMgODIuMzgyODEyIDE3MC42Mjg5MDYgMTA0LjM4MjgxMiAxNTQuNDQ5MjE5IDEyMi4zODI4MTIgMTQ1LjgwMDc4MSBDIDE0MC4zODI4MTIgMTM3LjE1MjM0NCAxNTIuMzgyODEyIDEzOC41NzgxMjUgMTUyLjM4MjgxMiAxMzguNTc4MTI1ICIvPjxwYXRoIHN0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDpyZ2IoMCUsMCUsMCUpO2ZpbGwtb3BhY2l0eToxOyIgZD0iTSAxNDUuMTk1MzEyIDI4OC4yOTY4NzUgQyAxNDkuOTYwOTM4IDI4OS43NjU2MjUgMTY0LjMzNTkzOCAyODkuMjYxNzE5IDE3OS4zODI4MTIgMjg3LjMwNDY4OCBMIDE3OS4zODI4MTIgMTkxLjg1MTU2MiBDIDE3OS4zODI4MTIgMTcwLjEwNTQ2OSAxNTkuODE2NDA2IDE1Mi40MTAxNTYgMTM1Ljc2NTYyNSAxNTIuNDEwMTU2IEMgMTExLjcxNDg0NCAxNTIuNDEwMTU2IDkyLjE0NDUzMSAxNzAuMTA1NDY5IDkyLjE0NDUzMSAxOTEuODUxNTYyIEMgOTIuMTQ0NTMxIDI0Mi43MDcwMzEgMTI4LjYwOTM3NSAyNzQuMDMxMjUgMTQyLjMzOTg0NCAyODUuODIwMzEyIEMgMTQzLjM5ODQzOCAyODYuNzMwNDY5IDE0NC4zNTE1NjIgMjg3LjU1MDc4MSAxNDUuMTk1MzEyIDI4OC4yOTY4NzUgTSAxNTUuMjE4NzUgMzE3Ljk4MDQ2OSBDIDE0MC41NzQyMTkgMzE3Ljk4MDQ2OSAxMzEuMzI4MTI1IDMxNS40MjU3ODEgMTI1LjM5ODQzOCAzMDkuOTg0Mzc1IEMgMTI0LjcyMjY1NiAzMDkuMzU5Mzc1IDEyMy42MjEwOTQgMzA4LjQxNDA2MiAxMjIuMzQ3NjU2IDMwNy4zMjAzMTIgQyAxMDcuNDU3MDMxIDI5NC41MzEyNSA2Mi4xNDQ1MzEgMjU1LjYwOTM3NSA2Mi4xNDQ1MzEgMTkxLjg1MTU2MiBDIDYyLjE0NDUzMSAxNTQuMjA3MDMxIDk1LjE3MTg3NSAxMjMuNTc4MTI1IDEzNS43NjU2MjUgMTIzLjU3ODEyNSBDIDE3Ni4zNTU0NjkgMTIzLjU3ODEyNSAyMDkuMzgyODEyIDE1NC4yMDcwMzEgMjA5LjM4MjgxMiAxOTEuODUxNTYyIEwgMjA5LjM4MjgxMiAzMTEuNDg0Mzc1IEwgMTk3LjE5OTIxOSAzMTMuNzIyNjU2IEMgMTk2LjY3MTg3NSAzMTMuODE2NDA2IDE4NC4wNzQyMTkgMzE2LjExNzE4OCAxNzAuMDM1MTU2IDMxNy4yODkwNjIgQyAxNjQuNTY2NDA2IDMxNy43NDYwOTQgMTU5LjY0NDUzMSAzMTcuOTgwNDY5IDE1NS4yMTg3NSAzMTcuOTgwNDY5ICIvPjxwYXRoIHN0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDpyZ2IoMTAwJSwxMDAlLDEwMCUpO2ZpbGwtb3BhY2l0eToxOyIgZD0iTSAxMDQuMzgyODEyIDMwNS41NzgxMjUgTCAxMzYuMjM0Mzc1IDM3NC41NzgxMjUgIi8+PGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAzKSIgY2xpcC1ydWxlPSJub256ZXJvIj48cGF0aCBzdHlsZT0iZmlsbDpub25lO3N0cm9rZS13aWR0aDozMDtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2U6cmdiKDAlLDAlLDAlKTtzdHJva2Utb3BhY2l0eToxO3N0cm9rZS1taXRlcmxpbWl0OjEwOyIgZD0iTSAwLjAwMDAxMjUgMC4wMDA4NzUgTCAzMS44NTE1NzUgLTY4Ljk5OTEyNSAiIHRyYW5zZm9ybT0ibWF0cml4KDEsMCwwLC0xLDEwNC4zODI4LDMwNS41NzkpIi8+PC9nPjxwYXRoIHN0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDpyZ2IoMTAwJSwxMDAlLDEwMCUpO2ZpbGwtb3BhY2l0eToxOyIgZD0iTSAxNzguNzA3MDMxIDMwNS41NzgxMjUgTCAyMTAuNTU4NTk0IDM3NC41NzgxMjUgIi8+PGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXA0KSIgY2xpcC1ydWxlPSJub256ZXJvIj48cGF0aCBzdHlsZT0iZmlsbDpub25lO3N0cm9rZS13aWR0aDozMDtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2U6cmdiKDAlLDAlLDAlKTtzdHJva2Utb3BhY2l0eToxO3N0cm9rZS1taXRlcmxpbWl0OjEwOyIgZD0iTSAwLjAwMDkzMTI1IDAuMDAwODc1IEwgMzEuODUyNDk0IC02OC45OTkxMjUgIiB0cmFuc2Zvcm09Im1hdHJpeCgxLDAsMCwtMSwxNzguNzA2MSwzMDUuNTc5KSIvPjwvZz48cGF0aCBzdHlsZT0iIHN0cm9rZTpub25lO2ZpbGwtcnVsZTpub256ZXJvO2ZpbGw6cmdiKDEwMCUsMTAwJSwxMDAlKTtmaWxsLW9wYWNpdHk6MTsiIGQ9Ik0gMjUzLjAzMTI1IDMwNS41NzgxMjUgTCAyODQuODgyODEyIDM3NC41NzgxMjUgIi8+PGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXA1KSIgY2xpcC1ydWxlPSJub256ZXJvIj48cGF0aCBzdHlsZT0iZmlsbDpub25lO3N0cm9rZS13aWR0aDozMDtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2U6cmdiKDAlLDAlLDAlKTtzdHJva2Utb3BhY2l0eToxO3N0cm9rZS1taXRlcmxpbWl0OjEwOyIgZD0iTSAwLjAwMDk1IDAuMDAwODc1IEwgMzEuODUyNTEyIC02OC45OTkxMjUgIiB0cmFuc2Zvcm09Im1hdHJpeCgxLDAsMCwtMSwyNTMuMDMwMywzMDUuNTc5KSIvPjwvZz48L2c+PC9zdmc+',
        'wN': 'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSItNTAgLTkyLjUgMzk4LjA0MSA1MTAuMDIiIHZlcnNpb249IjEuMSI+PGRlZnM+PGNsaXBQYXRoIGlkPSJjbGlwMSI+PHBhdGggZD0iTSAwIDAgTCAzMDguMDM5MDYyIDAgTCAzMDguMDM5MDYyIDM5NS4wMTk1MzEgTCAwIDM5NS4wMTk1MzEgWiBNIDAgMCAiLz48L2NsaXBQYXRoPjwvZGVmcz48ZyBpZD0ic3VyZmFjZTEiPjxwYXRoIHN0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDpyZ2IoODAuMDAwMzA1JSw4MC4wMDAzMDUlLDgwLjAwMDMwNSUpO2ZpbGwtb3BhY2l0eToxOyIgZD0iTSAzOS4xMzY3MTkgMzYzLjMwODU5NCBDIDY2LjQzNzUgMzcxLjQ3MjY1NiAxMDYuMDg5ODQ0IDM4MC4wNjI1IDE1NC4zMDA3ODEgMzc5LjU3NDIxOSBDIDE5OC43MDcwMzEgMzc5LjEyMTA5NCAyMzUuNDY4NzUgMzcxLjExNzE4OCAyNjEuNTc0MjE5IDM2My4zMDg1OTQgQyAyNjEuMTEzMjgxIDM2MS42MzI4MTIgMjYwLjQwNjI1IDM1OC43ODkwNjIgMjU5LjYxMzI4MSAzNTUuMjUzOTA2IEMgMjU2LjYxNzE4OCAzNDEuOTMzNTk0IDI1Mi4xOTkyMTkgMzEzLjgzNTkzOCAyNjEuNTc0MjE5IDI4NC4xNzk2ODggQyAyNzQuNDI5Njg4IDI0My41MTU2MjUgMzA3LjUgMTkyLjkxNzk2OSAyODUuMDkzNzUgMTE4LjIzMDQ2OSBDIDI2MS4zNTU0NjkgMzkuMTAxNTYyIDE1MC42ODc1IDE1LjQyNTc4MSAxNTAuNjg3NSAxNS40MjU3ODEgTCAxNTIuNDkyMTg4IDUyLjQ3MjY1NiBMIDIzLjIxODc1IDE0Ni4xODM1OTQgQyAxNS4wMTU2MjUgMTUyLjEyODkwNiAxMy4wMjM0MzggMTYzLjQ2ODc1IDE4LjYxMzI4MSAxNzEuOTE0MDYyIEMgMjEuMjY1NjI1IDE3NS45MjE4NzUgMjQuMDExNzE5IDE4MC40NTMxMjUgMjYuMzM1OTM4IDE4NS4xMDU0NjkgQyAyOC42MTcxODggMTg5LjY2NDA2MiAzOS4zNzEwOTQgMjA2LjE5NTMxMiA0Ni4wNDY4NzUgMjEwLjQ5NjA5NCBDIDUxLjQ2MDkzOCAyMTMuOTg4MjgxIDU4LjQzNzUgMjEzLjc3MzQzOCA2My42NzU3ODEgMjEwLjAyMzQzOCBDIDcxLjYzMjgxMiAyMDQuMzI4MTI1IDgxLjYyNSAxOTEuNjUyMzQ0IDEwOS42MzY3MTkgMTk0LjM2MzI4MSBDIDE4My43MzA0NjkgMjA3LjAxMTcxOSAyMDIuMTkxNDA2IDE2Ni41OTc2NTYgMjAyLjE5MTQwNiAxNjYuNTk3NjU2IEMgMjAyLjE5MTQwNiAxNjYuNTk3NjU2IDE5MC40NDUzMTIgMTkwLjcyMjY1NiAxNDIuNjY0MDYyIDIxMy4xODM1OTQgQyA5Mi44NTU0NjkgMjMyLjI4OTA2MiA2MC4zMjQyMTkgMjY0LjgxNjQwNiA0My43NzczNDQgMzE5Ljg3MTA5NCBDIDM1Ljg4MjgxMiAzNDYuMTI4OTA2IDM5LjEzNjcxOSAzNjMuMzA4NTk0IDM5LjEzNjcxOSAzNjMuMzA4NTk0ICIvPjxwYXRoIHN0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDpyZ2IoMTAwJSwxMDAlLDEwMCUpO2ZpbGwtb3BhY2l0eToxOyIgZD0iTSAyNy4zNjMyODEgMTc5Ljk2NDg0NCBMIDE4My40NTMxMjUgOTQuNDEwMTU2IEMgMTgzLjQ1MzEyNSA5NC40MTAxNTYgMjAxLjk2NDg0NCA4NS4xNTYyNSAxOTIuNzA3MDMxIDY2LjY0NDUzMSBDIDE4OC41NzAzMTIgNTguMzY3MTg4IDE1Ni45NDE0MDYgMjIuNjIxMDk0IDE1Ni45NDE0MDYgMjIuNjIxMDk0IEwgMTU2Ljk0MTQwNiA1OS42NDQ1MzEgTCAxOC4xMDkzNzUgMTYxLjQ1MzEyNSBaIE0gMjcuMzYzMjgxIDE3OS45NjQ4NDQgIi8+PHBhdGggc3R5bGU9IiBzdHJva2U6bm9uZTtmaWxsLXJ1bGU6bm9uemVybztmaWxsOnJnYigxMDAlLDEwMCUsMTAwJSk7ZmlsbC1vcGFjaXR5OjE7IiBkPSJNIDIxNS41NTg1OTQgMTczLjc5Njg3NSBDIDE4My42Nzk2ODggMjI3LjI2OTUzMSAxNDUuNDU3MDMxIDI1NS4xOTkyMTkgMTIzLjg1OTM3NSAyNzkuODc4OTA2IEMgMTA1LjgyODEyNSAzMDAuNDg4MjgxIDkyLjgzMjAzMSAzNDkuMzEyNSA5My44NTkzNzUgMzY5Ljg3ODkwNiBDIDk0LjQ4MDQ2OSAzODIuMjQ2MDk0IDQyLjc4OTA2MiAzNTkuOTMzNTk0IDQyLjc4OTA2MiAzNTkuOTMzNTk0IEwgNTYuMTYwMTU2IDI5Ni4xNzE4NzUgTCA4My45MjU3ODEgMjQzLjcyNjU2MiBMIDEyOS4xNzU3ODEgMjEwLjgxNjQwNiBaIE0gMjE1LjU1ODU5NCAxNzMuNzk2ODc1ICIvPjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMSkiIGNsaXAtcnVsZT0ibm9uemVybyI+PHBhdGggc3R5bGU9IiBzdHJva2U6bm9uZTtmaWxsLXJ1bGU6bm9uemVybztmaWxsOnJnYigwJSwwJSwwJSk7ZmlsbC1vcGFjaXR5OjE7IiBkPSJNIDUzLjk0MTQwNiAzNTEuNDcyNjU2IEMgODYuNjQwNjI1IDM2MC4yMzA0NjkgMTIwLjI4NTE1NiAzNjQuNTA3ODEyIDE1NC4xNDQ1MzEgMzY0LjE0ODQzOCBDIDE4NC4yMjY1NjIgMzYzLjg0Mzc1IDIxNC4xNDQ1MzEgMzU5Ljg5MDYyNSAyNDMuMjgxMjUgMzUyLjM5MDYyNSBDIDIzOS43NTc4MTIgMzMzLjQyNTc4MSAyMzguMTY3OTY5IDMwNy4wNDY4NzUgMjQ2Ljg2NzE4OCAyNzkuNTMxMjUgQyAyNDkuNjA1NDY5IDI3MC44NjcxODggMjUzLjA4OTg0NCAyNjIuMDc0MjE5IDI1Ni43ODEyNSAyNTIuNzY1NjI1IEMgMjcwLjgwNDY4OCAyMTcuMzc1IDI4Ni42OTkyMTkgMTc3LjI2NTYyNSAyNzAuMzIwMzEyIDEyMi42NjQwNjIgQyAyNTUuMjMwNDY5IDcyLjM2NzE4OCAxOTcuODcxMDk0IDQ2LjY1NjI1IDE2Ny4xNDg0MzggMzYuMjQ2MDk0IEwgMTY3LjkwMjM0NCA1MS43MTg3NSBDIDE2OC4xNTYyNSA1Ni45MjU3ODEgMTY1Ljc2NTYyNSA2MS45MDYyNSAxNjEuNTQ2ODc1IDY0Ljk2MDkzOCBMIDMyLjI2OTUzMSAxNTguNjcxODc1IEMgMzAuNzg1MTU2IDE1OS43NSAzMC40MzM1OTQgMTYxLjgyODEyNSAzMS40NzY1NjIgMTYzLjM5ODQzOCBDIDM0Ljg3ODkwNiAxNjguNTM1MTU2IDM3Ljc4OTA2MiAxNzMuNTE5NTMxIDQwLjEzMjgxMiAxNzguMjEwOTM4IEMgNDIuMjEwOTM4IDE4Mi4zNjcxODggNTAuODgyODEyIDE5NC44ODY3MTkgNTQuNDI5Njg4IDE5Ny41NDY4NzUgQyA1NC41MTE3MTkgMTk3LjU3ODEyNSA1NC42MjUgMTk3LjUzMTI1IDU0LjY5OTIxOSAxOTcuNDgwNDY5IEMgNTUuNDk2MDk0IDE5Ni45MDYyNSA1Ni41MTk1MzEgMTk2LjA3NDIxOSA1Ny42OTkyMTkgMTk1LjEwOTM3NSBDIDY1Ljg0Mzc1IDE4OC40NjQ4NDQgODAuOTk2MDk0IDE3Ni4wOTc2NTYgMTExLjEyMTA5NCAxNzkuMDA3ODEyIEMgMTExLjQ5MjE4OCAxNzkuMDQyOTY5IDExMS44NjMyODEgMTc5LjA5Mzc1IDExMi4yMzA0NjkgMTc5LjE1NjI1IEMgMTU3Ljk5MjE4OCAxODYuOTY4NzUgMTc3Ljc5Mjk2OSAxNzIuNDQ1MzEyIDE4NC45MjE4NzUgMTY0LjUxNTYyNSBDIDE4Ny40MTAxNTYgMTYxLjQ2ODc1IDE4OC40MTc5NjkgMTU5LjY0NDUzMSAxODguNDUzMTI1IDE1OS41ODIwMzEgQyAxODguMzU5Mzc1IDE1OS43NTM5MDYgMTg4LjMyMDMxMiAxNTkuODQzNzUgMTg4LjMyMDMxMiAxNTkuODQzNzUgTCAxOTUuMTY0MDYyIDE1OS4xMDU0NjkgQyAyMDQuNjA5Mzc1IDE1OC4wODIwMzEgMjEzLjQ0OTIxOSAxNjMuOTE3OTY5IDIxNi4yMjI2NTYgMTczLjAwMzkwNiBDIDIxNi4xOTE0MDYgMTczLjA3MDMxMiAyMTYuMTM2NzE5IDE3My4xODc1IDIxNi4wNTg1OTQgMTczLjM0NzY1NiBDIDIxNS45NzI2NTYgMTczLjUyNzM0NCAyMTUuODM5ODQ0IDE3My43ODkwNjIgMjE1LjY1NjI1IDE3NC4xMzI4MTIgQyAyMTUuMTE3MTg4IDE3NS4xNTIzNDQgMjE0LjE5MTQwNiAxNzYuNzY1NjI1IDIxMi44MDQ2ODggMTc4Ljc2NTYyNSBDIDIwNi4yNDIxODggMTg4LjM2MzI4MSAxODguNzg1MTU2IDIwOC41NDY4NzUgMTQ5LjIyNjU2MiAyMjcuMTQ0NTMxIEMgMTQ4Ljg4NjcxOSAyMjcuMzA0Njg4IDE0OC41MzkwNjIgMjI3LjQ1MzEyNSAxNDguMTg3NSAyMjcuNTg1OTM4IEMgMTAwLjg0Mzc1IDI0NS43NDIxODggNzMuMTk5MjE5IDI3NS41NzQyMTkgNTguNTQ2ODc1IDMyNC4zMTI1IEMgNTUuMTE3MTg4IDMzNS43MzQzNzUgNTQuMTEzMjgxIDM0NS4xMTMyODEgNTMuOTQxNDA2IDM1MS40NzI2NTYgTSAxNTAuMzQ3NjU2IDM5NS4wMTk1MzEgQyAxMTEuMTkxNDA2IDM5NS4wMTk1MzEgNzIuMzE2NDA2IDM4OS4zMjgxMjUgMzQuNzE4NzUgMzc4LjA4OTg0NCBDIDI5LjE5NTMxMiAzNzYuNDM3NSAyNS4wNTA3ODEgMzcxLjg0Mzc1IDIzLjk4MDQ2OSAzNjYuMTc5Njg4IEMgMjMuNTc0MjE5IDM2NC4wNDI5NjkgMjAuMjc3MzQ0IDM0NC40NTcwMzEgMjkuMDAzOTA2IDMxNS40MzM1OTQgQyA0My42NTIzNDQgMjY2LjcxMDkzOCA3MC4yNTc4MTIgMjMyLjc1MzkwNiAxMTEuODI4MTI1IDIxMC4zMjgxMjUgQyAxMTAuNDQxNDA2IDIxMC4xMjUgMTA5LjA0Njg3NSAyMDkuOTA2MjUgMTA3LjYyODkwNiAyMDkuNjY3OTY5IEMgOTAuNTM1MTU2IDIwOC4xMzI4MTIgODMuNzU3ODEyIDIxMy42NjQwNjIgNzcuMjA3MDMxIDIxOS4wMTE3MTkgQyA3NS43NTM5MDYgMjIwLjE5OTIxOSA3NC4yNDYwOTQgMjIxLjQyNTc4MSA3Mi42NTYyNSAyMjIuNTY2NDA2IEMgNjIuMTkxNDA2IDIzMC4wNTg1OTQgNDguNDYwOTM4IDIzMC40MTAxNTYgMzcuNjg3NSAyMjMuNDYwOTM4IEMgMjYuMzc1IDIxNi4xNjc5NjkgMTQuMDExNzE5IDE5NC45NTMxMjUgMTIuNTM5MDYyIDE5Mi4wMDM5MDYgQyAxMC43NSAxODguNDI1NzgxIDguNDY0ODQ0IDE4NC41MzEyNSA1Ljc1IDE4MC40Mjk2ODggQyAtNC40NDE0MDYgMTY1LjAzNTE1NiAtMC43NDYwOTQgMTQ0LjUwMzkwNiAxNC4xNjQwNjIgMTMzLjY5NTMxMiBMIDEzNi42Nzk2ODggNDQuODgyODEyIEwgMTM1LjI3NzM0NCAxNi4xNzU3ODEgQyAxMzUuMDQ2ODc1IDExLjM5MDYyNSAxMzcuMDQ2ODc1IDYuNzY5NTMxIDE0MC42OTUzMTIgMy42NzE4NzUgQyAxNDQuMzQ3NjU2IDAuNTY2NDA2IDE0OS4yMzQzNzUgLTAuNjYwMTU2IDE1My45MTQwNjIgMC4zMzk4NDQgQyAxNTguNzk2ODc1IDEuMzgyODEyIDI3My44MDg1OTQgMjYuOTI1NzgxIDI5OS44NzEwOTQgMTEzLjc5Njg3NSBDIDMxOS4zMjgxMjUgMTc4LjY2NDA2MiAyOTkuNzUzOTA2IDIyOC4wNjI1IDI4NS40NjA5MzggMjY0LjEyODkwNiBDIDI4MS45ODA0NjkgMjcyLjkxNDA2MiAyNzguNjkxNDA2IDI4MS4yMTA5MzggMjc2LjI4NTE1NiAyODguODMyMDMxIEMgMjY4LjI1NzgxMiAzMTQuMjIyNjU2IDI3MS44MjAzMTIgMzM5LjIzMDQ2OSAyNzQuNjY0MDYyIDM1MS44NzUgQyAyNzUuNjI1IDM1Ni4xNjQwNjIgMjc2LjI3MzQzOCAzNTguNTc0MjE5IDI3Ni40NDkyMTkgMzU5LjIxMDkzOCBDIDI3OC42NzU3ODEgMzY3LjMwMDc4MSAyNzQuMDM1MTU2IDM3NS42ODc1IDI2NS45OTYwOTQgMzc4LjA4OTg0NCBDIDIyOS43NTM5MDYgMzg4LjkyNTc4MSAxOTIuMjI2NTYyIDM5NC42MTcxODggMTU0LjQ1NzAzMSAzOTUgQyAxNTMuMDg5ODQ0IDM5NS4wMTE3MTkgMTUxLjcxNDg0NCAzOTUuMDE5NTMxIDE1MC4zNDc2NTYgMzk1LjAxOTUzMSAiLz48L2c+PHBhdGggc3R5bGU9ImZpbGwtcnVsZTpub256ZXJvO2ZpbGw6cmdiKDEwMCUsMTAwJSwxMDAlKTtmaWxsLW9wYWNpdHk6MTtzdHJva2Utd2lkdGg6MzA7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZTpyZ2IoMCUsMCUsMCUpO3N0cm9rZS1vcGFjaXR5OjE7c3Ryb2tlLW1pdGVybGltaXQ6MTA7IiBkPSJNIC0wLjAwMTE5Mzc1IDAuMDAxNDc1IEMgMjMuNjYyODY5IC03LjEwNzkgNTguMTc4NDk0IC0xNC42MTE4MDYgMTAwLjE2Njc3NSAtMTQuMDU3MTE5IEMgMTM3LjkyNDU4OCAtMTMuNTYxMDI1IDE2OS4yMTM2NSAtNi43MDk0NjMgMTkxLjU0OTU4OCAwLjAwMTQ3NSAiIHRyYW5zZm9ybT0ibWF0cml4KDEsMCwwLC0xLDU1LjAwNTEsMzEyLjA3OTYpIi8+PHBhdGggc3R5bGU9IiBzdHJva2U6bm9uZTtmaWxsLXJ1bGU6bm9uemVybztmaWxsOnJnYigwJSwwJSwwJSk7ZmlsbC1vcGFjaXR5OjE7IiBkPSJNIDE2OS42ODM1OTQgMTEzLjU3ODEyNSBDIDE2OS42ODM1OTQgMTIxLjk1MzEyNSAxNjIuODk0NTMxIDEyOC43NDIxODggMTU0LjUxOTUzMSAxMjguNzQyMTg4IEMgMTQ2LjE0NDUzMSAxMjguNzQyMTg4IDEzOS4zNTU0NjkgMTIxLjk1MzEyNSAxMzkuMzU1NDY5IDExMy41NzgxMjUgQyAxMzkuMzU1NDY5IDEwNS4yMDMxMjUgMTQ2LjE0NDUzMSA5OC40MTc5NjkgMTU0LjUxOTUzMSA5OC40MTc5NjkgQyAxNjIuODk0NTMxIDk4LjQxNzk2OSAxNjkuNjgzNTk0IDEwNS4yMDMxMjUgMTY5LjY4MzU5NCAxMTMuNTc4MTI1ICIvPjwvZz48L3N2Zz4=',
        'wP': 'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSItNTAgLTEwMCAzNDUuODQzIDUwNi40NjIiIHZlcnNpb249IjEuMSI+PGRlZnM+PGNsaXBQYXRoIGlkPSJjbGlwMSI+PHBhdGggZD0iTSAwIDAgTCAyNTUuODQzNzUgMCBMIDI1NS44NDM3NSAzNzYuNDYwOTM4IEwgMCAzNzYuNDYwOTM4IFogTSAwIDAgIi8+PC9jbGlwUGF0aD48L2RlZnM+PGcgaWQ9InN1cmZhY2UxIj48cGF0aCBzdHlsZT0iIHN0cm9rZTpub25lO2ZpbGwtcnVsZTpub256ZXJvO2ZpbGw6cmdiKDgwLjAwMDMwNSUsODAuMDAwMzA1JSw4MC4wMDAzMDUlKTtmaWxsLW9wYWNpdHk6MTsiIGQ9Ik0gMjM5LjUyMzQzOCAzNDAuNDE0MDYyIEMgMjM5LjUyMzQzOCAyNTAuMTE3MTg4IDE2NS4wNzAzMTIgMjIwLjU0Njg3NSAxNzMuNjA5Mzc1IDE2NC4xNjc5NjkgQyAxOTUuMjMwNDY5IDE0OS4xNDQ1MzEgMjA5LjIxMDkzOCAxMjMuODkwNjI1IDIwOC40OTYwOTQgOTUuNDAyMzQ0IEMgMjA3LjQxNzk2OSA1Mi4zOTQ1MzEgMTcyLjMyNDIxOSAxNy4zNTU0NjkgMTI5LjMxNjQwNiAxNi4zNDM3NSBDIDgzLjU5Mzc1IDE1LjI2NTYyNSA0Ni4xOTUzMTIgNTIuMDA3ODEyIDQ2LjE5NTMxMiA5Ny40ODQzNzUgQyA0Ni4xOTUzMTIgMTI1LjA5Mzc1IDU5Ljk5MjE4OCAxNDkuNDY4NzUgODEuMDU4NTk0IDE2NC4xMzI4MTIgQyA5MC42MjEwOTQgMjIwLjU0Njg3NSAxNi4zMjAzMTIgMjUwLjQ4NDM3NSAxNi4zMjAzMTIgMzQwLjQxNDA2MiBDIDQ5LjI3MzQzOCAzNTAuMjkyOTY5IDcwLjY1MjM0NCAzNjAuMTQwNjI1IDEyOC40ODQzNzUgMzYwLjE0MDYyNSBDIDE4Ni4zMTY0MDYgMzYwLjE0MDYyNSAyMDYuNTcwMzEyIDM1MC4yOTI5NjkgMjM5LjUyMzQzOCAzNDAuNDE0MDYyICIvPjxwYXRoIHN0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDpyZ2IoMTAwJSwxMDAlLDEwMCUpO2ZpbGwtb3BhY2l0eToxOyIgZD0iTSAxMjYgMzAuNDE0MDYyIEMgMTI2IDMwLjQxNDA2MiAxMDEuMDg1OTM4IDU2LjMzMjAzMSAxMDAgOTQuNDE0MDYyIEMgOTguOTEwMTU2IDEzMi40OTYwOTQgMTE0IDE1NC45NzI2NTYgMTE0IDE2MC40MTQwNjIgQyAxMTQgMTY1Ljg1NTQ2OSAxMTQuNDQxNDA2IDE4OC44MjgxMjUgMTA5IDIwOC40MTQwNjIgQyAxMDMuNTU4NTk0IDIyOCA3MyAyOTcuNDE0MDYyIDc1IDM0NC40MTQwNjIgQyA3Ni4zOTQ1MzEgMzc3LjE3NTc4MSAxOS40MjU3ODEgMzM0LjAyNzM0NCAxOS40MjU3ODEgMzM0LjAyNzM0NCBMIDI3LjAzOTA2MiAyNzcuNDQ5MjE5IEwgODMuNjE3MTg4IDE5NC43NTc4MTIgTCA3OS4yNjU2MjUgMTU5Ljk0MTQwNiBMIDQ1LjUzNTE1NiAxMDcuNzE0ODQ0IEwgNjUuMTIxMDk0IDQ1LjY5NTMxMiBaIE0gMTI2IDMwLjQxNDA2MiAiLz48ZyBjbGlwLXBhdGg9InVybCgjY2xpcDEpIiBjbGlwLXJ1bGU9Im5vbnplcm8iPjxwYXRoIHN0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDpyZ2IoMCUsMCUsMCUpO2ZpbGwtb3BhY2l0eToxOyIgZD0iTSAyMzkuNTIzNDM4IDM0MC40MTQwNjIgTCAyMzkuNTMxMjUgMzQwLjQxNDA2MiBaIE0gMzMuMTM2NzE5IDMyOC41MzEyNSBDIDMzLjc1NzgxMiAzMjguNzI2NTYyIDM0LjM3NSAzMjguOTI1NzgxIDM0Ljk5MjE4OCAzMjkuMTE3MTg4IEMgNjEuMDA3ODEyIDMzNy4zMzIwMzEgODEuNTU4NTk0IDM0My44MjAzMTIgMTI4LjQ4NDM3NSAzNDMuODIwMzEyIEMgMTc0Ljc4OTA2MiAzNDMuODIwMzEyIDE5NC43MTA5MzggMzM3LjQ3MjY1NiAyMTkuOTI5Njg4IDMyOS40MzM1OTQgQyAyMjAuODUxNTYyIDMyOS4xNDA2MjUgMjIxLjc3NzM0NCAzMjguODQzNzUgMjIyLjcxMDkzOCAzMjguNTQ2ODc1IEMgMjE5LjY1MjM0NCAyOTIuMTAxNTYyIDIwMi43NTM5MDYgMjY3LjQ5NjA5NCAxODYuMzU5Mzc1IDI0My42Mjg5MDYgQyAxNjkuNzI2NTYyIDIxOS40MTQwNjIgMTUyLjUyNzM0NCAxOTQuMzcxMDk0IDE1Ny40NzI2NTYgMTYxLjcyMjY1NiBDIDE1OC4xNDQ1MzEgMTU3LjI4OTA2MiAxNjAuNjEzMjgxIDE1My4zMjQyMTkgMTY0LjI5Njg3NSAxNTAuNzY1NjI1IEMgMTgyLjMwNDY4OCAxMzguMjUgMTkyLjczMDQ2OSAxMTcuNzA3MDMxIDE5Mi4xNzk2ODggOTUuODEyNSBDIDE5MS4zMjgxMjUgNjEuNzg5MDYyIDE2Mi45NTcwMzEgMzMuNDYwOTM4IDEyOC45MzM1OTQgMzIuNjYwMTU2IEMgMTExLjI4MTI1IDMyLjIxODc1IDk0LjY0ODQzOCAzOC43ODkwNjIgODIuMDU0Njg4IDUxLjA5Mzc1IEMgNjkuNDUzMTI1IDYzLjM5ODQzOCA2Mi41MTU2MjUgNzkuODc1IDYyLjUxNTYyNSA5Ny40ODQzNzUgQyA2Mi41MTU2MjUgMTE4LjY4MzU5NCA3Mi45Mjk2ODggMTM4LjU5Mzc1IDkwLjM3ODkwNiAxNTAuNzM0Mzc1IEMgOTMuOTc2NTYyIDE1My4yMzgyODEgOTYuNDE3OTY5IDE1Ny4wODU5MzggOTcuMTQ4NDM4IDE2MS40MDIzNDQgQyAxMDIuNzM0Mzc1IDE5NC4zNTkzNzUgODUuNTUwNzgxIDIxOS43MDMxMjUgNjguOTI5Njg4IDI0NC4yMTA5MzggQyA1Mi44MDQ2ODggMjY3Ljk5NjA5NCAzNi4xNzk2ODggMjkyLjUxMTcxOSAzMy4xMzY3MTkgMzI4LjUzMTI1IE0gMTI4LjQ4NDM3NSAzNzYuNDYwOTM4IEMgNzYuNTI3MzQ0IDM3Ni40NjA5MzggNTEuNTc4MTI1IDM2OC41ODU5MzggMjUuMTY0MDYyIDM2MC4yNDYwOTQgQyAyMC44MDQ2ODggMzU4Ljg2NzE4OCAxNi4zMDA3ODEgMzU3LjQ0NTMxMiAxMS42MzI4MTIgMzU2LjA0Njg3NSBDIDQuNzMwNDY5IDM1My45NzY1NjIgMCAzNDcuNjIxMDk0IDAgMzQwLjQxNDA2MiBDIDAgMjg3LjcwNzAzMSAyMy4yNDIxODggMjUzLjQzMzU5NCA0MS45MTQwNjIgMjI1Ljg5NDUzMSBDIDU2Ljk5NjA5NCAyMDMuNjQ4NDM4IDY2LjEwNTQ2OSAxODkuMjkyOTY5IDY1LjU3ODEyNSAxNzIuODcxMDk0IEMgNDMuMDg5ODQ0IDE1NC40MjU3ODEgMjkuODc1IDEyNi43ODEyNSAyOS44NzUgOTcuNDg0Mzc1IEMgMjkuODc1IDcxLjAxMTcxOSA0MC4zMDQ2ODggNDYuMjQyMTg4IDU5LjI0NjA5NCAyNy43NDIxODggQyA3OC4xNzk2ODggOS4yNDYwOTQgMTAzLjE5NTMxMiAtMC41ODIwMzEgMTI5LjY5OTIxOSAwLjAyNzM0MzggQyAxNTQuNzEwOTM4IDAuNjEzMjgxIDE3OC4zMTI1IDEwLjc1MzkwNiAxOTYuMTYwMTU2IDI4LjU3NDIxOSBDIDIxNC4wMDc4MTIgNDYuMzk4NDM4IDIyNC4xODM1OTQgNjkuOTg0Mzc1IDIyNC44MTI1IDk0Ljk5MjE4OCBDIDIyNS41NzAzMTIgMTI1LjIzNDM3NSAyMTIuNDA2MjUgMTUzLjc1MzkwNiAxODkuMjY5NTMxIDE3Mi43Njk1MzEgQyAxODkuMjE0ODQ0IDE5MC4xMjg5MDYgMTk5Ljk5MjE4OCAyMDUuODIwMzEyIDIxMy4yNjU2MjUgMjI1LjE0ODQzOCBDIDIzMi4yMzQzNzUgMjUyLjc2OTUzMSAyNTUuODQzNzUgMjg3LjEzNjcxOSAyNTUuODQzNzUgMzQwLjQxNDA2MiBDIDI1NS44NDM3NSAzNDcuNjIxMDk0IDI1MS4xMTMyODEgMzUzLjk3NjU2MiAyNDQuMjEwOTM4IDM1Ni4wNDY4NzUgQyAyMzkuMjIyNjU2IDM1Ny41NDI5NjkgMjM0LjQ1MzEyNSAzNTkuMDYyNSAyMjkuODQzNzUgMzYwLjUzMTI1IEMgMjA0LjE0MDYyNSAzNjguNzI2NTYyIDE3OS44NjMyODEgMzc2LjQ2MDkzOCAxMjguNDg0Mzc1IDM3Ni40NjA5MzggIi8+PC9nPjwvZz48L3N2Zz4=',
        'wQ': 'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI0MDhwdCIgaGVpZ2h0PSI0MDhwdCIgdmlld0JveD0iLTUwIC05MCA0OTggNTI4IiB2ZXJzaW9uPSIxLjEiPjxnIGlkPSJzdXJmYWNlMSI+PHBhdGggc3R5bGU9IiBzdHJva2U6bm9uZTtmaWxsLXJ1bGU6bm9uemVybztmaWxsOnJnYig4MC4wMDAzMDUlLDgwLjAwMDMwNSUsODAuMDAwMzA1JSk7ZmlsbC1vcGFjaXR5OjE7IiBkPSJNIDMxOS4zMjQyMTkgMzkzIEwgODguNjc1NzgxIDM5MyBDIDkzLjE3NTc4MSAzODcuNDIxODc1IDEwNi40MjE4NzUgMzY5LjUyNzM0NCAxMDYuNDIxODc1IDM0My41IEMgMTA2LjQyMTg3NSAzMzYuNTI3MzQ0IDEwNS40Njg3NSAzMTQuODIwMzEyIDg4LjY3NTc4MSAyOTQgTCAzMTkuMzI0MjE5IDI5NCBDIDMxNC44MjQyMTkgMjk5LjU3ODEyNSAzMDEuNTgyMDMxIDMxNy40NzI2NTYgMzAxLjU4MjAzMSAzNDMuNSBDIDMwMS41ODIwMzEgMzUwLjQ3MjY1NiAzMDIuNTMxMjUgMzcyLjE3OTY4OCAzMTkuMzI0MjE5IDM5MyAiLz48cGF0aCBzdHlsZT0iIHN0cm9rZTpub25lO2ZpbGwtcnVsZTpub256ZXJvO2ZpbGw6cmdiKDEwMCUsMTAwJSwxMDAlKTtmaWxsLW9wYWNpdHk6MTsiIGQ9Ik0gMTQwIDM5MyBDIDE0My41NjI1IDM4Mi43MTg3NSAxNTEuNDMzNTk0IDM2Ny4yMjY1NjIgMTUyIDM0OCBDIDE1Mi42OTkyMTkgMzI0LjIwMzEyNSAxNDMuODk4NDM4IDMwNi4yNzczNDQgMTQwIDI5NSBDIDEyOS4zMjAzMTIgMjk1IDExMi43NDYwOTQgMjk0IDEwMi4wNjY0MDYgMjk0IEwgMTE3LjYyODkwNiAzNDggTCA5Mi45MTQwNjIgMzkzIFogTSAxNDAgMzkzICIvPjxwYXRoIHN0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDpyZ2IoMCUsMCUsMCUpO2ZpbGwtb3BhY2l0eToxOyIgZD0iTSAxMTMuNTAzOTA2IDM3OCBMIDI5NC40ODQzNzUgMzc4IEMgMjg4Ljk2MDkzOCAzNjMuOTg0Mzc1IDI4Ny44NTE1NjIgMzUxLjM2MzI4MSAyODcuODUxNTYyIDM0My41IEMgMjg3Ljg1MTU2MiAzMzAuMTc5Njg4IDI5MC42Nzk2ODggMzE4LjU4NTkzOCAyOTQuNDk2MDk0IDMwOSBMIDExMy41MTU2MjUgMzA5IEMgMTE5LjAzOTA2MiAzMjMuMDE1NjI1IDEyMC4xNDg0MzggMzM1LjYzNjcxOSAxMjAuMTQ4NDM4IDM0My41IEMgMTIwLjE0ODQzOCAzNTYuODIwMzEyIDExNy4zMjAzMTIgMzY4LjQxNDA2MiAxMTMuNTAzOTA2IDM3OCBNIDMxOS4zMjAzMTIgNDA4IEwgODguNjc5Njg4IDQwOCBDIDgzLjI4MTI1IDQwOCA3OC4zODY3MTkgNDA0LjU0Njg3NSA3Ni4xNjc5NjkgMzk5LjE3NTc4MSBDIDczLjk0NTMxMiAzOTMuODAwNzgxIDc0LjgxMjUgMzg3LjUwNzgxMiA3OC4zNzg5MDYgMzgzLjA4MjAzMSBDIDgzLjcyMjY1NiAzNzYuNDUzMTI1IDkyLjY5MTQwNiAzNjIuNDk2MDk0IDkyLjY5MTQwNiAzNDMuNSBDIDkyLjY5MTQwNiAzMzUuMzQ3NjU2IDkwLjgzMjAzMSAzMTkuMzU5Mzc1IDc4LjM3NSAzMDMuOTE0MDYyIEMgNzQuODEyNSAyOTkuNDkyMTg4IDczLjk0NTMxMiAyOTMuMTk1MzEyIDc2LjE2Nzk2OSAyODcuODI0MjE5IEMgNzguMzg2NzE5IDI4Mi40NTMxMjUgODMuMjgxMjUgMjc5IDg4LjY3OTY4OCAyNzkgTCAzMTkuMzIwMzEyIDI3OSBDIDMyNC43MTg3NSAyNzkgMzI5LjYxMzI4MSAyODIuNDUzMTI1IDMzMS44MzIwMzEgMjg3LjgyNDIxOSBDIDMzNC4wNTQ2ODggMjkzLjE5OTIxOSAzMzMuMTkxNDA2IDI5OS40OTIxODggMzI5LjYyMTA5NCAzMDMuOTE3OTY5IEMgMzI0LjI3NzM0NCAzMTAuNTQ2ODc1IDMxNS4zMDg1OTQgMzI0LjUwMzkwNiAzMTUuMzA4NTk0IDM0My41IEMgMzE1LjMwODU5NCAzNTEuNjUyMzQ0IDMxNy4xNjc5NjkgMzY3LjY0MDYyNSAzMjkuNjIxMDk0IDM4My4wODU5MzggQyAzMzMuMTkxNDA2IDM4Ny41MDc4MTIgMzM0LjA1NDY4OCAzOTMuODA0Njg4IDMzMS44MzIwMzEgMzk5LjE3NTc4MSBDIDMyOS42MTMyODEgNDA0LjU0Njg3NSAzMjQuNzE4NzUgNDA4IDMxOS4zMjAzMTIgNDA4ICIvPjxwYXRoIHN0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDpyZ2IoODAuMDAwMzA1JSw4MC4wMDAzMDUlLDgwLjAwMDMwNSUpO2ZpbGwtb3BhY2l0eToxOyIgZD0iTSA5MS4xMDE1NjIgMjU0LjMwMDc4MSBMIDU1LjczMDQ2OSAxMjcuMzMyMDMxIEMgNTguOTY4NzUgMTI5LjI4MTI1IDEwNi4xNjQwNjIgMTk2LjM3NSAxMjkuODYzMjgxIDE4MS41IEMgMTQ4LjcxNDg0NCAxNjkuNjY3OTY5IDE0NC43OTI5NjkgOTcuMzIwMzEyIDE0Ni4zMzk4NDQgNjkgQyAxNTQuNjM2NzE5IDk1LjI0MjE4OCAxODIuNDI1NzgxIDE2Mi43NSAyMDQgMTYyLjc1IEMgMjI1LjU3NDIxOSAxNjIuNzUgMjUzLjM2MzI4MSA5NS4yNDIxODggMjYxLjY2MDE1NiA2OSBDIDI2Mi4xODM1OTQgNzIuMjMwNDY5IDI1My44MzIwMzEgMTY2LjE1NjI1IDI4Ni4zNzEwOTQgMTgxLjUgQyAzMDQuOTU3MDMxIDE5MC4yNjU2MjUgMzQ2LjI1MzkwNiAxMjkuOTg4MjgxIDM1Mi4yNzM0MzggMTI3LjMzMjAzMSBDIDM0Ni4xMDU0NjkgMTYyLjUzOTA2MiAzMjMuNDY0ODQ0IDIxMS4xMzY3MTkgMzE3LjMwMDc4MSAyNTQuMTI4OTA2IEMgMzE0LjAxOTUzMSAyNzcuMDExNzE5IDI5NC42NTIzNDQgMjk0IDI3MS43OTI5NjkgMjk0IEwgMTM2LjU4MjAzMSAyOTQgQyAxMTMuNzkyOTY5IDI5NCA5NC40NDE0MDYgMjc3LjEwOTM3NSA5MS4xMDE1NjIgMjU0LjMwMDc4MSAiLz48cGF0aCBzdHlsZT0iIHN0cm9rZTpub25lO2ZpbGwtcnVsZTpub256ZXJvO2ZpbGw6cmdiKDEwMCUsMTAwJSwxMDAlKTtmaWxsLW9wYWNpdHk6MTsiIGQ9Ik0gODYuODI4MTI1IDE1OSBDIDE1MyAxOTIgOTMgMjc5IDIzMCAyNzkgTCAxMjkuOTcyNjU2IDI5NCBDIDExOC43ODEyNSAyODMuNTMxMjUgOTUuOTA2MjUgMjU5LjIyNjU2MiA4Ni44MjgxMjUgMjIyIEMgODAuMjM4MjgxIDE5NC45ODQzNzUgODMuNjI4OTA2IDE3Mi4yNzczNDQgODYuODI4MTI1IDE1OSAiLz48cGF0aCBzdHlsZT0iIHN0cm9rZTpub25lO2ZpbGwtcnVsZTpub256ZXJvO2ZpbGw6cmdiKDAlLDAlLDAlKTtmaWxsLW9wYWNpdHk6MTsiIGQ9Ik0gMjAzLjcwMzEyNSAxNDcuNzczNDM4IFogTSAyMDQuMjk2ODc1IDE0Ny43NzM0MzggWiBNIDEyMi45MDIzNDQgMTY4LjU4MjAzMSBaIE0gODQuODI0MjE5IDE4MC4yNjE3MTkgTCAxMDQuMjM0Mzc1IDI0OS45MzM1OTQgQyAxMDQuNDE3OTY5IDI1MC41ODk4NDQgMTA0LjU1ODU5NCAyNTEuMjU3ODEyIDEwNC42NTYyNSAyNTEuOTMzNTk0IEMgMTA2LjkxNzk2OSAyNjcuMzYzMjgxIDEyMC42NDQ1MzEgMjc5IDEzNi41ODIwMzEgMjc5IEwgMjcxLjc5Njg3NSAyNzkgQyAyODcuNzgxMjUgMjc5IDMwMS41MTU2MjUgMjY3LjMwODU5NCAzMDMuNzM4MjgxIDI1MS44MDg1OTQgQyAzMDcuMTMyODEyIDIyOC4xNTIzNDQgMzE0Ljg4NjcxOSAyMDMuOTIxODc1IDMyMi42NDA2MjUgMTgwLjM3ODkwNiBDIDMwNy43NDIxODggMTk0LjExNzE4OCAyOTMuODcxMDk0IDIwMS4zNzUgMjgwLjkzMzU5NCAxOTUuMjY5NTMxIEMgMjY0LjI5Mjk2OSAxODcuNDI1NzgxIDI1My43MjY1NjIgMTY2LjY2Nzk2OSAyNDkuNTE1NjI1IDEzMy41NjI1IEMgMjMzLjQ4ODI4MSAxNjMuNzA3MDMxIDIxOS4wMTk1MzEgMTc3Ljc1IDIwNCAxNzcuNzUgQyAxODguOTIxODc1IDE3Ny43NSAxNzQuNDA2MjUgMTYzLjYwMTU2MiAxNTguMzA4NTk0IDEzMy4yMzA0NjkgQyAxNTguMjc3MzQ0IDEzMy4xNjc5NjkgMTU4LjI0MjE4OCAxMzMuMTAxNTYyIDE1OC4yMTA5MzggMTMzLjAzOTA2MiBDIDE1Ni4xNDQ1MzEgMTYzLjIxNDg0NCAxNTAuOTA2MjUgMTg1LjU5Mzc1IDEzNi43MDMxMjUgMTk0LjUwNzgxMiBDIDEzMi4wOTc2NTYgMTk3LjM5NDUzMSAxMjcuMjY1NjI1IDE5OC42Njc5NjkgMTIyLjMyMDMxMiAxOTguNjY3OTY5IEMgMTA5LjkyOTY4OCAxOTguNjY3OTY5IDk2LjgzMjAzMSAxOTAuNjgzNTk0IDg0LjgyNDIxOSAxODAuMjYxNzE5IE0gMjcxLjc5Njg3NSAzMDkgTCAxMzYuNTgyMDMxIDMwOSBDIDEyMi40NTcwMzEgMzA5IDEwOC43NSAzMDMuODI0MjE5IDk3Ljk4MDQ2OSAyOTQuNDIxODc1IEMgODcuMjMwNDY5IDI4NS4wNDI5NjkgODAuMDYyNSAyNzIuMDU4NTk0IDc3LjcxNDg0NCAyNTcuNzYxNzE5IEwgNDIuNTk3NjU2IDEzMS43MDMxMjUgQyA0MC45Njg3NSAxMjUuODYzMjgxIDQyLjc0MjE4OCAxMTkuNTMxMjUgNDcuMDgyMDMxIDExNS42ODM1OTQgQyA1MS40MTc5NjkgMTExLjgzNTkzOCA1Ny40NTcwMzEgMTExLjI1IDYyLjM0NzY1NiAxMTQuMTkxNDA2IEMgNjQuOTc2NTYyIDExNS43Njk1MzEgNjYuNDY4NzUgMTE3LjU5NzY1NiA3MS40MTc5NjkgMTIzLjY0ODQzOCBDIDc3Ljg0Mzc1IDEzMS41MDM5MDYgODkuODA4NTk0IDE0Ni4xMjg5MDYgMTAxLjkzMzU5NCAxNTYuNzUgQyAxMTUuNDAyMzQ0IDE2OC41NDY4NzUgMTIxLjc3NzM0NCAxNjkuMDYyNSAxMjIuOTQ5MjE5IDE2OC41MzUxNTYgQyAxMjMuNDM3NSAxNjguMDI3MzQ0IDEyNy41MjM0MzggMTYzLjE3NTc4MSAxMjkuOTI1NzgxIDE0MS40Njg3NSBDIDEzMS43MDMxMjUgMTI1LjM3NSAxMzEuOTI5Njg4IDEwNi4xMTMyODEgMTMyLjEwOTM3NSA5MC42MzI4MTIgQyAxMzIuMjE0ODQ0IDgxLjgyMDMxMiAxMzIuMzAwNzgxIDc0LjIwNzAzMSAxMzIuNjM2NzE5IDY4LjEwNTQ2OSBDIDEzMy4wMjM0MzggNjAuOTYwOTM4IDEzNy45ODA0NjkgNTUuMTEzMjgxIDE0NC40NzI2NTYgNTQuMTQwNjI1IEMgMTUwLjk1NzAzMSA1My4xNjc5NjkgMTU3LjE3NTc4MSA1Ny4zMzU5MzggMTU5LjMxNjQwNiA2NC4xMDE1NjIgQyAxNjMuNDEwMTU2IDc3LjA1NDY4OCAxNzEuNjY3OTY5IDk4LjEwNTQ2OSAxODAuODgyODEyIDExNS45MjU3ODEgQyAxOTMuMDg5ODQ0IDEzOS41MzUxNTYgMjAxLjQwMjM0NCAxNDYuNjgzNTk0IDIwNCAxNDcuNjc5Njg4IEMgMjA2LjU5NzY1NiAxNDYuNjgzNTk0IDIxNC45MTAxNTYgMTM5LjUzNTE1NiAyMjcuMTE3MTg4IDExNS45MjU3ODEgQyAyMzYuMzMyMDMxIDk4LjEwNTQ2OSAyNDQuNTg5ODQ0IDc3LjA1NDY4OCAyNDguNjgzNTk0IDY0LjEwMTU2MiBDIDI1MC43MjY1NjIgNTcuNjQwNjI1IDI1Ni41MTE3MTkgNTMuNTE1NjI1IDI2Mi43NDYwOTQgNTQuMDQ2ODc1IEMgMjY4Ljk4MDQ2OSA1NC41ODU5MzggMjc0LjA5NzY1NiA1OS42Njc5NjkgMjc1LjE4MzU5NCA2Ni4zOTg0MzggQyAyNzUuNTA3ODEyIDY4LjQwNjI1IDI3NS40NDkyMTkgNjkuODQ3NjU2IDI3NS4yNjE3MTkgNzQuNjIxMDk0IEMgMjcyLjM1OTM3NSAxNDguMDM1MTU2IDI4NS41NTg1OTQgMTYzLjg3ODkwNiAyOTAuOTUzMTI1IDE2Ny4yNTM5MDYgQyAyOTIuNDg4MjgxIDE2Ni44MjQyMTkgMjk3LjI5Njg3NSAxNjQuODE2NDA2IDMwNy4wMzkwNjIgMTU1LjQ4ODI4MSBDIDMxNS4zNDc2NTYgMTQ3LjUzNTE1NiAzMjMuNzAzMTI1IDEzNy42OTkyMTkgMzMwLjQxNzk2OSAxMjkuNzkyOTY5IEMgMzM5LjMwODU5NCAxMTkuMzI0MjE5IDM0Mi42MzI4MTIgMTE1LjQxMDE1NiAzNDcuMTI4OTA2IDExMy40MjU3ODEgQyAzNTEuNzg5MDYyIDExMS4zNjcxODggMzU3LjEwNTQ2OSAxMTIuMjU3ODEyIDM2MC45ODgyODEgMTE1Ljc0NjA5NCBDIDM2NC44NzEwOTQgMTE5LjIzMDQ2OSAzNjYuNjk5MjE5IDEyNC43NTc4MTIgMzY1Ljc1MzkwNiAxMzAuMTUyMzQ0IEMgMzYyLjc2NTYyNSAxNDcuMjE4NzUgMzU2LjQ1NzAzMSAxNjYuMzQzNzUgMzQ5Ljc3NzM0NCAxODYuNTkzNzUgQyAzNDIuMDQyOTY5IDIxMC4wNDY4NzUgMzM0LjA0Mjk2OSAyMzQuMzAwNzgxIDMzMC44NjMyODEgMjU2LjQ0OTIxOSBDIDMyOC43NDYwOTQgMjcxLjIyMjY1NiAzMjEuNTA3ODEyIDI4NC42Nzk2ODggMzEwLjQ4MDQ2OSAyOTQuMzQ3NjU2IEMgMjk5LjY5NTMxMiAzMDMuNzk2ODc1IDI4NS45NjA5MzggMzA5IDI3MS43OTY4NzUgMzA5ICIvPjxwYXRoIHN0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDpyZ2IoOTQuOTAyMDM5JSw5NC45MDIwMzklLDk0LjkwMjAzOSUpO2ZpbGwtb3BhY2l0eToxOyIgZD0iTSAxNjggNDIgQyAxNjggNTYuOTEwMTU2IDE1NS45MTAxNTYgNjkgMTQxIDY5IEMgMTI2LjA4OTg0NCA2OSAxMTQgNTYuOTEwMTU2IDExNCA0MiBDIDExNCAyNy4wODk4NDQgMTI2LjA4OTg0NCAxNSAxNDEgMTUgQyAxNTUuOTEwMTU2IDE1IDE2OCAyNy4wODk4NDQgMTY4IDQyICIvPjxwYXRoIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlLXdpZHRoOjMwO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZTpyZ2IoMCUsMCUsMCUpO3N0cm9rZS1vcGFjaXR5OjE7c3Ryb2tlLW1pdGVybGltaXQ6MTA7IiBkPSJNIDAgMCBDIDAgLTE0LjkxMDE1NiAtMTIuMDg5ODQ0IC0yNyAtMjcgLTI3IEMgLTQxLjkxMDE1NiAtMjcgLTU0IC0xNC45MTAxNTYgLTU0IDAgQyAtNTQgMTQuOTEwMTU2IC00MS45MTAxNTYgMjcgLTI3IDI3IEMgLTEyLjA4OTg0NCAyNyAwIDE0LjkxMDE1NiAwIDAgWiBNIDAgMCAiIHRyYW5zZm9ybT0ibWF0cml4KDEsMCwwLC0xLDE2OCw0MikiLz48cGF0aCBzdHlsZT0iIHN0cm9rZTpub25lO2ZpbGwtcnVsZTpub256ZXJvO2ZpbGw6cmdiKDk0LjkwMjAzOSUsOTQuOTAyMDM5JSw5NC45MDIwMzklKTtmaWxsLW9wYWNpdHk6MTsiIGQ9Ik0gMjk0IDQyIEMgMjk0IDU2LjkxMDE1NiAyODEuOTEwMTU2IDY5IDI2NyA2OSBDIDI1Mi4wODk4NDQgNjkgMjQwIDU2LjkxMDE1NiAyNDAgNDIgQyAyNDAgMjcuMDg5ODQ0IDI1Mi4wODk4NDQgMTUgMjY3IDE1IEMgMjgxLjkxMDE1NiAxNSAyOTQgMjcuMDg5ODQ0IDI5NCA0MiAiLz48cGF0aCBzdHlsZT0iZmlsbDpub25lO3N0cm9rZS13aWR0aDozMDtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2U6cmdiKDAlLDAlLDAlKTtzdHJva2Utb3BhY2l0eToxO3N0cm9rZS1taXRlcmxpbWl0OjEwOyIgZD0iTSAwIDAgQyAwIC0xNC45MTAxNTYgLTEyLjA4OTg0NCAtMjcgLTI3IC0yNyBDIC00MS45MTAxNTYgLTI3IC01NCAtMTQuOTEwMTU2IC01NCAwIEMgLTU0IDE0LjkxMDE1NiAtNDEuOTEwMTU2IDI3IC0yNyAyNyBDIC0xMi4wODk4NDQgMjcgMCAxNC45MTAxNTYgMCAwIFogTSAwIDAgIiB0cmFuc2Zvcm09Im1hdHJpeCgxLDAsMCwtMSwyOTQsNDIpIi8+PHBhdGggc3R5bGU9IiBzdHJva2U6bm9uZTtmaWxsLXJ1bGU6bm9uemVybztmaWxsOnJnYig5NC45MDIwMzklLDk0LjkwMjAzOSUsOTQuOTAyMDM5JSk7ZmlsbC1vcGFjaXR5OjE7IiBkPSJNIDM5MyA5NiBDIDM5MyAxMTAuOTEwMTU2IDM4MC45MTAxNTYgMTIzIDM2NiAxMjMgQyAzNTEuMDg5ODQ0IDEyMyAzMzkgMTEwLjkxMDE1NiAzMzkgOTYgQyAzMzkgODEuMDg5ODQ0IDM1MS4wODk4NDQgNjkgMzY2IDY5IEMgMzgwLjkxMDE1NiA2OSAzOTMgODEuMDg5ODQ0IDM5MyA5NiAiLz48cGF0aCBzdHlsZT0iZmlsbDpub25lO3N0cm9rZS13aWR0aDozMDtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2U6cmdiKDAlLDAlLDAlKTtzdHJva2Utb3BhY2l0eToxO3N0cm9rZS1taXRlcmxpbWl0OjEwOyIgZD0iTSAwIDAgQyAwIC0xNC45MTAxNTYgLTEyLjA4OTg0NCAtMjcgLTI3IC0yNyBDIC00MS45MTAxNTYgLTI3IC01NCAtMTQuOTEwMTU2IC01NCAwIEMgLTU0IDE0LjkxMDE1NiAtNDEuOTEwMTU2IDI3IC0yNyAyNyBDIC0xMi4wODk4NDQgMjcgMCAxNC45MTAxNTYgMCAwIFogTSAwIDAgIiB0cmFuc2Zvcm09Im1hdHJpeCgxLDAsMCwtMSwzOTMsOTYpIi8+PHBhdGggc3R5bGU9IiBzdHJva2U6bm9uZTtmaWxsLXJ1bGU6bm9uemVybztmaWxsOnJnYig5NC45MDIwMzklLDk0LjkwMjAzOSUsOTQuOTAyMDM5JSk7ZmlsbC1vcGFjaXR5OjE7IiBkPSJNIDY5IDk2IEMgNjkgMTEwLjkxMDE1NiA1Ni45MTAxNTYgMTIzIDQyIDEyMyBDIDI3LjA4OTg0NCAxMjMgMTUgMTEwLjkxMDE1NiAxNSA5NiBDIDE1IDgxLjA4OTg0NCAyNy4wODk4NDQgNjkgNDIgNjkgQyA1Ni45MTAxNTYgNjkgNjkgODEuMDg5ODQ0IDY5IDk2ICIvPjxwYXRoIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlLXdpZHRoOjMwO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZTpyZ2IoMCUsMCUsMCUpO3N0cm9rZS1vcGFjaXR5OjE7c3Ryb2tlLW1pdGVybGltaXQ6MTA7IiBkPSJNIDAgMCBDIDAgLTE0LjkxMDE1NiAtMTIuMDg5ODQ0IC0yNyAtMjcgLTI3IEMgLTQxLjkxMDE1NiAtMjcgLTU0IC0xNC45MTAxNTYgLTU0IDAgQyAtNTQgMTQuOTEwMTU2IC00MS45MTAxNTYgMjcgLTI3IDI3IEMgLTEyLjA4OTg0NCAyNyAwIDE0LjkxMDE1NiAwIDAgWiBNIDAgMCAiIHRyYW5zZm9ybT0ibWF0cml4KDEsMCwwLC0xLDY5LDk2KSIvPjxwYXRoIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlLXdpZHRoOjMwO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZTpyZ2IoMCUsMCUsMCUpO3N0cm9rZS1vcGFjaXR5OjE7c3Ryb2tlLW1pdGVybGltaXQ6MTA7IiBkPSJNIDAuMDAwMDQzNzUgMCBMIDE5Ny42OTUzNTYgMCAiIHRyYW5zZm9ybT0ibWF0cml4KDEsMCwwLC0xLDEwNS4xNTIzLDM0OCkiLz48L2c+PC9zdmc+',
        'wR': 'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSItNTAgLTEwMCAzODYuODMzIDUwMyIgdmVyc2lvbj0iMS4xIj48ZGVmcz48Y2xpcFBhdGggaWQ9ImNsaXAxIj48cGF0aCBkPSJNIDAgMCBMIDI5Ni44MzIwMzEgMCBMIDI5Ni44MzIwMzEgMzczIEwgMCAzNzMgWiBNIDAgMCAiLz48L2NsaXBQYXRoPjwvZGVmcz48ZyBpZD0ic3VyZmFjZTEiPjxwYXRoIHN0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDpyZ2IoODAuMDAwMzA1JSw4MC4wMDAzMDUlLDgwLjAwMDMwNSUpO2ZpbGwtb3BhY2l0eToxOyIgZD0iTSA0OS4zMjAzMTIgMTgyLjM0NzY1NiBDIDQ5LjgwNDY4OCAxMTMuOTE3OTY5IDUuODA0Njg4IDU3LjE4MzU5NCAxOC43NTc4MTIgMTYuMjM4MjgxIEwgMjc4LjA3ODEyNSAxNi4yMzgyODEgQyAyOTEuMDMxMjUgNTcuMTgzNTk0IDI0Ny4wMzEyNSAxMTMuOTE3OTY5IDI0Ny41MTU2MjUgMTgyLjM0NzY1NiBDIDI0OC4wMjM0MzggMjU0LjU1MDc4MSAyOTEuNDI1NzgxIDMxNC41NjI1IDI3OC4wNzgxMjUgMzU2Ljc2NTYyNSBMIDE4Ljc1NzgxMiAzNTYuNzY1NjI1IEMgNS40MDYyNSAzMTQuNTYyNSA0OC44MDg1OTQgMjU0LjU1MDc4MSA0OS4zMjAzMTIgMTgyLjM0NzY1NiAiLz48cGF0aCBzdHlsZT0iIHN0cm9rZTpub25lO2ZpbGwtcnVsZTpub256ZXJvO2ZpbGw6cmdiKDEwMCUsMTAwJSwxMDAlKTtmaWxsLW9wYWNpdHk6MTsiIGQ9Ik0gOTIuODU5Mzc1IDE4IEMgODMuMTE3MTg4IDczLjIwMzEyNSA5OC44NTkzNzUgMTQzLjMyNDIxOSA5OC44NTkzNzUgMTkxIEMgOTguODU5Mzc1IDIzNy41NDI5NjkgODAuNjEzMjgxIDI5Mi4wNTQ2ODggODMuODU5Mzc1IDM1NyBMIDIzLjUxOTUzMSAzNTYuNzY1NjI1IEwgNDIuODU5Mzc1IDE5MSBMIDIzLjUxOTUzMSAxNS44MDQ2ODggWiBNIDkyLjg1OTM3NSAxOCAiLz48ZyBjbGlwLXBhdGg9InVybCgjY2xpcDEpIiBjbGlwLXJ1bGU9Im5vbnplcm8iPjxwYXRoIHN0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDpyZ2IoMCUsMCUsMCUpO2ZpbGwtb3BhY2l0eToxOyIgZD0iTSAyNTEuMjY1NjI1IDI4MS43NTc4MTIgQyAyNDIuMDE5NTMxIDI1Mi41MjczNDQgMjMxLjUzOTA2MiAyMTkuNDAyMzQ0IDIzMS4yNzczNDQgMTgyLjQ2NDg0NCBDIDIzMS4wMjM0MzggMTQ2LjY1NjI1IDI0MS43MjI2NTYgMTE0LjczMDQ2OSAyNTEuMTYwMTU2IDg2LjU2MjUgQyAyNTguMTEzMjgxIDY1LjgwNDY4OCAyNjQuMzI0MjE5IDQ3LjI2OTUzMSAyNjQuMjI2NTYyIDMyLjQ3MjY1NiBMIDMyLjYwNTQ2OSAzMi40NzI2NTYgQyAzMi41MDc4MTIgNDcuMjY5NTMxIDM4LjcxODc1IDY1LjgwNDY4OCA0NS42NzE4NzUgODYuNTYyNSBDIDU1LjEwOTM3NSAxMTQuNzMwNDY5IDY1LjgwODU5NCAxNDYuNjU2MjUgNjUuNTU0Njg4IDE4Mi40NjQ4NDQgQyA2NS4yOTI5NjkgMjE5LjQwMjM0NCA1NC44MTI1IDI1Mi41MzEyNSA0NS41NjY0MDYgMjgxLjc1NzgxMiBDIDM4LjQwNjI1IDMwNC40MDIzNDQgMzIuMDE5NTMxIDMyNC41ODU5MzggMzIuNDY0ODQ0IDM0MC41MjczNDQgTCAyNjQuMzcxMDk0IDM0MC41MjczNDQgQyAyNjQuODEyNSAzMjQuNTg1OTM4IDI1OC40Mjk2ODggMzA0LjQwMjM0NCAyNTEuMjY1NjI1IDI4MS43NTc4MTIgTSAzLjI3NzM0NCAzNjEuNjYwMTU2IEMgLTUuMjQ2MDk0IDMzNC43MjI2NTYgNC4zOTg0MzggMzA0LjIzODI4MSAxNC42MDU0NjkgMjcxLjk2NDg0NCBDIDIzLjE2MDE1NiAyNDQuOTI1NzgxIDMyLjg1NTQ2OSAyMTQuMjc3MzQ0IDMzLjA4MjAzMSAxODIuMjM0Mzc1IEMgMzMuMzAwNzgxIDE1MS44Mzk4NDQgMjMuOTM3NSAxMjMuODk4NDM4IDE0Ljg4MjgxMiA5Ni44Nzg5MDYgQyA0LjY1NjI1IDY2LjM1NTQ2OSAtNS4wMDc4MTIgMzcuNTIzNDM4IDMuMjc3MzQ0IDExLjMzOTg0NCBDIDUuNDEwMTU2IDQuNTg5ODQ0IDExLjY3NTc4MSAwIDE4Ljc1NzgxMiAwIEwgMjc4LjA3ODEyNSAwIEMgMjg1LjE1NjI1IDAgMjkxLjQyMTg3NSA0LjU4OTg0NCAyOTMuNTU4NTk0IDExLjMzOTg0NCBDIDMwMS44Mzk4NDQgMzcuNTIzNDM4IDI5Mi4xNzk2ODggNjYuMzU1NDY5IDI4MS45NDkyMTkgOTYuODc4OTA2IEMgMjcyLjg5NDUzMSAxMjMuODk4NDM4IDI2My41MzUxNTYgMTUxLjgzOTg0NCAyNjMuNzUgMTgyLjIzNDM3NSBDIDI2My45NzY1NjIgMjE0LjI3NzM0NCAyNzMuNjcxODc1IDI0NC45MjE4NzUgMjgyLjIyNjU2MiAyNzEuOTY0ODQ0IEMgMjkyLjQzNzUgMzA0LjIzNDM3NSAzMDIuMDc4MTI1IDMzNC43MjI2NTYgMjkzLjU1ODU5NCAzNjEuNjYwMTU2IEMgMjkxLjQyMTg3NSAzNjguNDEwMTU2IDI4NS4xNTYyNSAzNzMgMjc4LjA3ODEyNSAzNzMgTCAxOC43NTc4MTIgMzczIEMgMTEuNjc1NzgxIDM3MyA1LjQxMDE1NiAzNjguNDEwMTU2IDMuMjc3MzQ0IDM2MS42NjAxNTYgIi8+PC9nPjxwYXRoIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlLXdpZHRoOjMwO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZTpyZ2IoMCUsMCUsMCUpO3N0cm9rZS1vcGFjaXR5OjE7c3Ryb2tlLW1pdGVybGltaXQ6MTA7IiBkPSJNIC0wLjAwMTM2ODc1IC0wLjAwMDk2ODc1IEwgLTAuMDAxMzY4NzUgLTU4LjEzNzY4NyAiIHRyYW5zZm9ybT0ibWF0cml4KDEsMCwwLC0xLDk4LjU4MzQsMjQuNTQyKSIvPjxwYXRoIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlLXdpZHRoOjMwO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZTpyZ2IoMCUsMCUsMCUpO3N0cm9rZS1vcGFjaXR5OjE7c3Ryb2tlLW1pdGVybGltaXQ6MTA7IiBkPSJNIC0wLjAwMDQgLTAuMDAwOTY4NzUgTCAtMC4wMDA0IC01OC4xMzc2ODcgIiB0cmFuc2Zvcm09Im1hdHJpeCgxLDAsMCwtMSwxOTguMjUwNCwyNC41NDIpIi8+PHBhdGggc3R5bGU9ImZpbGw6bm9uZTtzdHJva2Utd2lkdGg6MzA7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlOnJnYigwJSwwJSwwJSk7c3Ryb2tlLW9wYWNpdHk6MTtzdHJva2UtbWl0ZXJsaW1pdDoxMDsiIGQ9Ik0gLTAuMDAxMzUgLTAuMDAxOTM3NSBMIDI1MC4xNDMxODEgLTAuMDAxOTM3NSAiIHRyYW5zZm9ybT0ibWF0cml4KDEsMCwwLC0xLDIzLjM0NTEsMjk4LjI3MTUpIi8+PHBhdGggc3R5bGU9ImZpbGw6bm9uZTtzdHJva2Utd2lkdGg6MzA7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlOnJnYigwJSwwJSwwJSk7c3Ryb2tlLW9wYWNpdHk6MTtzdHJva2UtbWl0ZXJsaW1pdDoxMDsiIGQ9Ik0gMC4wMDA2MTI1IC0wLjAwMTAxMjUgTCAyMTUuOTQ1OTI1IC0wLjAwMTAxMjUgIiB0cmFuc2Zvcm09Im1hdHJpeCgxLDAsMCwtMSw0MC40NDQ3LDE0MC44MTkzKSIvPjwvZz48L3N2Zz4='
    }
};
//# sourceMappingURL=constants.js.map

/***/ })

},[344]);
//# sourceMappingURL=main.js.map