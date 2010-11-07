function StatechartExecutionContext() {
    var self = this; //used in the rare occasions we call public functions from inside this class
    //system variable declarations
    var _event = {
        name: undefined,
        data: undefined
    },
        _name = "",
        _sessionid;
    var _x = {
        _event: _event,
        _name: _name,
        _sessionid: _sessionid
    };
    //variable declarations relating to data model
    //send timeout id variables
    var _$timeoutId;
    var $default_Regexp_N10670 = /^($default)/,
        t1_Regexp_N10675 = /^(t1)/,
        t2_7_Regexp_N1067A = /^(t2_7)/,
        t5_Regexp_N1067F = /^(t5)/,
        t_after_Regexp_N10684 = /^(t_after)/,
        t3_Regexp_N10689 = /^(t3)/,
        tgen_Regexp_N1068E = /^(tgen)/,
        t4_9_Regexp_N10693 = /^(t4_9)/,
        t8_Regexp_N10698 = /^(t8)/;
    //abstract state
    var AbstractState = new
    function() {
        //triggers are methods
        this.$default = function() {};
        this.t1 = function() {};
        this.t2_7 = function() {};
        this.t5 = function() {};
        this.t_after = function() {};
        this.tgen = function() {};
        this.t3 = function() {};
        this.t4_9 = function() {};
        this.t8 = function() {};
        this.$default = function() {};
        this.$dispatchPrefixEvent = function() {};
    }
    //states
    var scxml_N10001 = (function() {
        function scxml_N10001Constructor() {
            this.parent = AbstractState;
            this.initial = null;
            this.depth = 0;
            this.historyState = null;
            //these variables facilitate fast In predicate
            this.isBasic =
            false;
            this.toString = function() {
                return "scxml_N10001"
            }
            this.enterAction = function() {
                for (var N10000_iterator = 0, N10000_hoist = listeners.length;
                N10000_iterator < N10000_hoist;
                N10000_iterator++) {
                    var listener = listeners[N10000_iterator];
                    //to
                    listener.onEntry("scxml_N10001");
                }
            }
            this.exitAction = function() {
                for (var N10001_iterator = 0, N10001_hoist = listeners.length;
                N10001_iterator < N10001_hoist;
                N10001_iterator++) {
                    var listener = listeners[N10001_iterator];
                    //from
                    listener.onExit("scxml_N10001");
                }
            }
        }
        scxml_N10001Constructor.prototype = AbstractState;
        return new scxml_N10001Constructor();
    })();
    var Compound1 = (function() {
        function Compound1Constructor() {
            this.parent = scxml_N10001;
            this.initial = null;
            this.depth = 1;
            this.historyState = null;
            //these variables facilitate fast In predicate
            this.isBasic =
            false;
            this.toString = function() {
                return "Compound1"
            }
            this.enterAction = function() {
                for (var N10000_iterator = 0, N10000_hoist = listeners.length;
                N10000_iterator < N10000_hoist;
                N10000_iterator++) {
                    var listener = listeners[N10000_iterator];
                    //to
                    listener.onEntry("Compound1");
                }
            }
            this.exitAction = function() {
                this.historyState.lastConfiguration = currentConfiguration.slice();
                for (var N10008_iterator = 0, N10008_hoist = listeners.length;
                N10008_iterator < N10008_hoist;
                N10008_iterator++) {
                    var listener = listeners[N10008_iterator];
                    //from
                    listener.onExit("Compound1");
                }
            }
        }
        Compound1Constructor.prototype = scxml_N10001;
        return new Compound1Constructor();
    })();
    var Basic1 = (function() {
        function Basic1Constructor() {
            this.parent = Compound1;
            this.initial = null;
            this.depth = 2;
            this.historyState = null;
            //these variables facilitate fast In predicate
            this.isBasic =
            true;
            this.ancestors = [
                scxml_N10001
                        ,
                    Compound1
                ];
            this.toString = function() {
                return "Basic1"
            }
            this.enterAction = function() {
                for (var N10000_iterator = 0, N10000_hoist = listeners.length;
                N10000_iterator < N10000_hoist;
                N10000_iterator++) {
                    var listener = listeners[N10000_iterator];
                    //to
                    listener.onEntry("Basic1");
                }
            }
            this.exitAction = function() {
                for (var N1000B_iterator = 0, N1000B_hoist = listeners.length;
                N1000B_iterator < N1000B_hoist;
                N1000B_iterator++) {
                    var listener = listeners[N1000B_iterator];
                    //from
                    listener.onExit("Basic1");
                }
            }
        }
        Basic1Constructor.prototype = Compound1;
        return new Basic1Constructor();
    })();
    var Basic2 = (function() {
        function Basic2Constructor() {
            this.parent = Compound1;
            this.initial = null;
            this.depth = 2;
            this.historyState = null;
            //these variables facilitate fast In predicate
            this.isBasic =
            true;
            this.ancestors = [
                scxml_N10001
                        ,
                    Compound1
                ];
            this.toString = function() {
                return "Basic2"
            }
            this.enterAction = function() {
                for (var N10000_iterator = 0, N10000_hoist = listeners.length;
                N10000_iterator < N10000_hoist;
                N10000_iterator++) {
                    var listener = listeners[N10000_iterator];
                    //to
                    listener.onEntry("Basic2");
                }
            }
            this.exitAction = function() {
                for (var N100E8_iterator = 0, N100E8_hoist = listeners.length;
                N100E8_iterator < N100E8_hoist;
                N100E8_iterator++) {
                    var listener = listeners[N100E8_iterator];
                    //from
                    listener.onExit("Basic2");
                }
            }
        }
        Basic2Constructor.prototype = Compound1;
        return new Basic2Constructor();
    })();
    var Basic3 = (function() {
        function Basic3Constructor() {
            this.parent = Compound1;
            this.initial = null;
            this.depth = 2;
            this.historyState = null;
            //these variables facilitate fast In predicate
            this.isBasic =
            true;
            this.ancestors = [
                scxml_N10001
                        ,
                    Compound1
                ];
            this.toString = function() {
                return "Basic3"
            }
            this.enterAction = function() {
                //send delayed event
                _$timeoutId = window.setTimeout(function() {
                    self['t_after'](null);
                }, 1000);
                for (var N10000_iterator = 0, N10000_hoist = listeners.length;
                N10000_iterator < N10000_hoist;
                N10000_iterator++) {
                    var listener = listeners[N10000_iterator];
                    //to
                    listener.onEntry("Basic3");
                }
            }
            this.exitAction = function() {
                for (var N10241_iterator = 0, N10241_hoist = listeners.length;
                N10241_iterator < N10241_hoist;
                N10241_iterator++) {
                    var listener = listeners[N10241_iterator];
                    //from
                    listener.onExit("Basic3");
                }
            }
        }
        Basic3Constructor.prototype = Compound1;
        return new Basic3Constructor();
    })();
    var Compound1_initial = (function() {
        function Compound1_initialConstructor() {
            this.parent = Compound1;
            this.initial = null;
            this.depth = 2;
            this.historyState = null;
            //these variables facilitate fast In predicate
            this.isBasic =
            true;
            this.ancestors = [
                scxml_N10001
                        ,
                    Compound1
                ];
            this.parent.initial = this; //init parent's pointer to initial state
            this.toString = function() {
                return "Compound1_initial"
            }
            this.enterAction = function() {
                for (var N10000_iterator = 0, N10000_hoist = listeners.length;
                N10000_iterator < N10000_hoist;
                N10000_iterator++) {
                    var listener = listeners[N10000_iterator];
                    //to
                    listener.onEntry("Compound1_initial");
                }
            }
            this.exitAction = function() {
                for (var N1034E_iterator = 0, N1034E_hoist = listeners.length;
                N1034E_iterator < N1034E_hoist;
                N1034E_iterator++) {
                    var listener = listeners[N1034E_iterator];
                    //from
                    listener.onExit("Compound1_initial");
                }
            }
        }
        Compound1_initialConstructor.prototype = Compound1;
        return new Compound1_initialConstructor();
    })();
    var ShallowHistory = (function() {
        function ShallowHistoryConstructor() {
            this.parent = Compound1;
            this.initial = null;
            this.depth = 2;
            this.historyState = null;
            //these variables facilitate fast In predicate
            this.isBasic =
            true;
            this.ancestors = [
                scxml_N10001
                        ,
                    Compound1
                ];
            this.parent.historyState = this; //init parent's pointer to history state
            this.toString = function() {
                return "ShallowHistory"
            }
            this.enterAction = function() {
                for (var N10000_iterator = 0, N10000_hoist = listeners.length;
                N10000_iterator < N10000_hoist;
                N10000_iterator++) {
                    var listener = listeners[N10000_iterator];
                    //to
                    listener.onEntry("ShallowHistory");
                }
            }
            this.exitAction = function() {
                for (var N103B5_iterator = 0, N103B5_hoist = listeners.length;
                N103B5_iterator < N103B5_hoist;
                N103B5_iterator++) {
                    var listener = listeners[N103B5_iterator];
                    //from
                    listener.onExit("ShallowHistory");
                }
            }
        }
        ShallowHistoryConstructor.prototype = Compound1;
        return new ShallowHistoryConstructor();
    })();
    var Parallel1 = (function() {
        function Parallel1Constructor() {
            this.parent = scxml_N10001;
            this.initial = null;
            this.depth = 1;
            this.historyState = null;
            //these variables facilitate fast In predicate
            this.isBasic =
            false;
            this.toString = function() {
                return "Parallel1"
            }
            this.enterAction = function() {
                for (var N10000_iterator = 0, N10000_hoist = listeners.length;
                N10000_iterator < N10000_hoist;
                N10000_iterator++) {
                    var listener = listeners[N10000_iterator];
                    //to
                    listener.onEntry("Parallel1");
                }
            }
            this.exitAction = function() {
                this.historyState.lastConfiguration = currentConfiguration.slice();
                for (var N1041F_iterator = 0, N1041F_hoist = listeners.length;
                N1041F_iterator < N1041F_hoist;
                N1041F_iterator++) {
                    var listener = listeners[N1041F_iterator];
                    //from
                    listener.onExit("Parallel1");
                }
            }
        }
        Parallel1Constructor.prototype = scxml_N10001;
        return new Parallel1Constructor();
    })();
    var ParallelRegion1 = (function() {
        function ParallelRegion1Constructor() {
            this.parent = Parallel1;
            this.initial = null;
            this.depth = 2;
            this.historyState = null;
            //these variables facilitate fast In predicate
            this.isBasic =
            false;
            this.toString = function() {
                return "ParallelRegion1"
            }
            this.enterAction = function() {
                for (var N10000_iterator = 0, N10000_hoist = listeners.length;
                N10000_iterator < N10000_hoist;
                N10000_iterator++) {
                    var listener = listeners[N10000_iterator];
                    //to
                    listener.onEntry("ParallelRegion1");
                }
            }
            this.exitAction = function() {
                for (var N10422_iterator = 0, N10422_hoist = listeners.length;
                N10422_iterator < N10422_hoist;
                N10422_iterator++) {
                    var listener = listeners[N10422_iterator];
                    //from
                    listener.onExit("ParallelRegion1");
                }
            }
        }
        ParallelRegion1Constructor.prototype = Parallel1;
        return new ParallelRegion1Constructor();
    })();
    var Basic4 = (function() {
        function Basic4Constructor() {
            this.parent = ParallelRegion1;
            this.initial = null;
            this.depth = 3;
            this.historyState = null;
            //these variables facilitate fast In predicate
            this.isBasic =
            true;
            this.ancestors = [
                scxml_N10001
                        ,
                    Parallel1
                        ,
                    ParallelRegion1
                ];
            this.toString = function() {
                return "Basic4"
            }
            this.enterAction = function() {
                for (var N10000_iterator = 0, N10000_hoist = listeners.length;
                N10000_iterator < N10000_hoist;
                N10000_iterator++) {
                    var listener = listeners[N10000_iterator];
                    //to
                    listener.onEntry("Basic4");
                }
            }
            this.exitAction = function() {
                for (var N10426_iterator = 0, N10426_hoist = listeners.length;
                N10426_iterator < N10426_hoist;
                N10426_iterator++) {
                    var listener = listeners[N10426_iterator];
                    //from
                    listener.onExit("Basic4");
                }
            }
        }
        Basic4Constructor.prototype = ParallelRegion1;
        return new Basic4Constructor();
    })();
    var Basic5 = (function() {
        function Basic5Constructor() {
            this.parent = ParallelRegion1;
            this.initial = null;
            this.depth = 3;
            this.historyState = null;
            //these variables facilitate fast In predicate
            this.isBasic =
            true;
            this.ancestors = [
                scxml_N10001
                        ,
                    Parallel1
                        ,
                    ParallelRegion1
                ];
            this.toString = function() {
                return "Basic5"
            }
            this.enterAction = function() {
                for (var N10000_iterator = 0, N10000_hoist = listeners.length;
                N10000_iterator < N10000_hoist;
                N10000_iterator++) {
                    var listener = listeners[N10000_iterator];
                    //to
                    listener.onEntry("Basic5");
                }
            }
            this.exitAction = function() {
                for (var N10514_iterator = 0, N10514_hoist = listeners.length;
                N10514_iterator < N10514_hoist;
                N10514_iterator++) {
                    var listener = listeners[N10514_iterator];
                    //from
                    listener.onExit("Basic5");
                }
            }
        }
        Basic5Constructor.prototype = ParallelRegion1;
        return new Basic5Constructor();
    })();
    var ParallelRegion1_initial = (function() {
        function ParallelRegion1_initialConstructor() {
            this.parent = ParallelRegion1;
            this.initial = null;
            this.depth = 3;
            this.historyState = null;
            //these variables facilitate fast In predicate
            this.isBasic =
            true;
            this.ancestors = [
                scxml_N10001
                        ,
                    Parallel1
                        ,
                    ParallelRegion1
                ];
            this.parent.initial = this; //init parent's pointer to initial state
            this.toString = function() {
                return "ParallelRegion1_initial"
            }
            this.enterAction = function() {
                for (var N10000_iterator = 0, N10000_hoist = listeners.length;
                N10000_iterator < N10000_hoist;
                N10000_iterator++) {
                    var listener = listeners[N10000_iterator];
                    //to
                    listener.onEntry("ParallelRegion1_initial");
                }
            }
            this.exitAction = function() {
                for (var N10677_iterator = 0, N10677_hoist = listeners.length;
                N10677_iterator < N10677_hoist;
                N10677_iterator++) {
                    var listener = listeners[N10677_iterator];
                    //from
                    listener.onExit("ParallelRegion1_initial");
                }
            }
        }
        ParallelRegion1_initialConstructor.prototype = ParallelRegion1;
        return new ParallelRegion1_initialConstructor();
    })();
    var ParallelRegion2 = (function() {
        function ParallelRegion2Constructor() {
            this.parent = Parallel1;
            this.initial = null;
            this.depth = 2;
            this.historyState = null;
            //these variables facilitate fast In predicate
            this.isBasic =
            false;
            this.toString = function() {
                return "ParallelRegion2"
            }
            this.enterAction = function() {
                for (var N10000_iterator = 0, N10000_hoist = listeners.length;
                N10000_iterator < N10000_hoist;
                N10000_iterator++) {
                    var listener = listeners[N10000_iterator];
                    //to
                    listener.onEntry("ParallelRegion2");
                }
            }
            this.exitAction = function() {
                for (var N106D4_iterator = 0, N106D4_hoist = listeners.length;
                N106D4_iterator < N106D4_hoist;
                N106D4_iterator++) {
                    var listener = listeners[N106D4_iterator];
                    //from
                    listener.onExit("ParallelRegion2");
                }
            }
        }
        ParallelRegion2Constructor.prototype = Parallel1;
        return new ParallelRegion2Constructor();
    })();
    var Basic6 = (function() {
        function Basic6Constructor() {
            this.parent = ParallelRegion2;
            this.initial = null;
            this.depth = 3;
            this.historyState = null;
            //these variables facilitate fast In predicate
            this.isBasic =
            true;
            this.ancestors = [
                scxml_N10001
                        ,
                    Parallel1
                        ,
                    ParallelRegion2
                ];
            this.toString = function() {
                return "Basic6"
            }
            this.enterAction = function() {
                for (var N10000_iterator = 0, N10000_hoist = listeners.length;
                N10000_iterator < N10000_hoist;
                N10000_iterator++) {
                    var listener = listeners[N10000_iterator];
                    //to
                    listener.onEntry("Basic6");
                }
            }
            this.exitAction = function() {
                for (var N106D8_iterator = 0, N106D8_hoist = listeners.length;
                N106D8_iterator < N106D8_hoist;
                N106D8_iterator++) {
                    var listener = listeners[N106D8_iterator];
                    //from
                    listener.onExit("Basic6");
                }
            }
        }
        Basic6Constructor.prototype = ParallelRegion2;
        return new Basic6Constructor();
    })();
    var Basic7 = (function() {
        function Basic7Constructor() {
            this.parent = ParallelRegion2;
            this.initial = null;
            this.depth = 3;
            this.historyState = null;
            //these variables facilitate fast In predicate
            this.isBasic =
            true;
            this.ancestors = [
                scxml_N10001
                        ,
                    Parallel1
                        ,
                    ParallelRegion2
                ];
            this.toString = function() {
                return "Basic7"
            }
            this.enterAction = function() {
                for (var N10000_iterator = 0, N10000_hoist = listeners.length;
                N10000_iterator < N10000_hoist;
                N10000_iterator++) {
                    var listener = listeners[N10000_iterator];
                    //to
                    listener.onEntry("Basic7");
                }
            }
            this.exitAction = function() {
                for (var N107B5_iterator = 0, N107B5_hoist = listeners.length;
                N107B5_iterator < N107B5_hoist;
                N107B5_iterator++) {
                    var listener = listeners[N107B5_iterator];
                    //from
                    listener.onExit("Basic7");
                }
            }
        }
        Basic7Constructor.prototype = ParallelRegion2;
        return new Basic7Constructor();
    })();
    var ParallelRegion2_initial = (function() {
        function ParallelRegion2_initialConstructor() {
            this.parent = ParallelRegion2;
            this.initial = null;
            this.depth = 3;
            this.historyState = null;
            //these variables facilitate fast In predicate
            this.isBasic =
            true;
            this.ancestors = [
                scxml_N10001
                        ,
                    Parallel1
                        ,
                    ParallelRegion2
                ];
            this.parent.initial = this; //init parent's pointer to initial state
            this.toString = function() {
                return "ParallelRegion2_initial"
            }
            this.enterAction = function() {
                for (var N10000_iterator = 0, N10000_hoist = listeners.length;
                N10000_iterator < N10000_hoist;
                N10000_iterator++) {
                    var listener = listeners[N10000_iterator];
                    //to
                    listener.onEntry("ParallelRegion2_initial");
                }
            }
            this.exitAction = function() {
                for (var N1083F_iterator = 0, N1083F_hoist = listeners.length;
                N1083F_iterator < N1083F_hoist;
                N1083F_iterator++) {
                    var listener = listeners[N1083F_iterator];
                    //from
                    listener.onExit("ParallelRegion2_initial");
                }
            }
        }
        ParallelRegion2_initialConstructor.prototype = ParallelRegion2;
        return new ParallelRegion2_initialConstructor();
    })();
    var Parallel1_initial = (function() {
        function Parallel1_initialConstructor() {
            this.parent = Parallel1;
            this.initial = null;
            this.depth = 2;
            this.historyState = null;
            //these variables facilitate fast In predicate
            this.isBasic =
            true;
            this.ancestors = [
                scxml_N10001
                        ,
                    Parallel1
                ];
            this.parent.initial = this; //init parent's pointer to initial state
            this.toString = function() {
                return "Parallel1_initial"
            }
            this.enterAction = function() {
                for (var N10000_iterator = 0, N10000_hoist = listeners.length;
                N10000_iterator < N10000_hoist;
                N10000_iterator++) {
                    var listener = listeners[N10000_iterator];
                    //to
                    listener.onEntry("Parallel1_initial");
                }
            }
            this.exitAction = function() {
                for (var N1089C_iterator = 0, N1089C_hoist = listeners.length;
                N1089C_iterator < N1089C_hoist;
                N1089C_iterator++) {
                    var listener = listeners[N1089C_iterator];
                    //from
                    listener.onExit("Parallel1_initial");
                }
            }
        }
        Parallel1_initialConstructor.prototype = Parallel1;
        return new Parallel1_initialConstructor();
    })();
    var DeepHistory = (function() {
        function DeepHistoryConstructor() {
            this.parent = Parallel1;
            this.initial = null;
            this.depth = 2;
            this.historyState = null;
            //these variables facilitate fast In predicate
            this.isBasic =
            true;
            this.ancestors = [
                scxml_N10001
                        ,
                    Parallel1
                ];
            this.parent.historyState = this; //init parent's pointer to history state
            this.toString = function() {
                return "DeepHistory"
            }
            this.enterAction = function() {
                for (var N10000_iterator = 0, N10000_hoist = listeners.length;
                N10000_iterator < N10000_hoist;
                N10000_iterator++) {
                    var listener = listeners[N10000_iterator];
                    //to
                    listener.onEntry("DeepHistory");
                }
            }
            this.exitAction = function() {
                for (var N10903_iterator = 0, N10903_hoist = listeners.length;
                N10903_iterator < N10903_hoist;
                N10903_iterator++) {
                    var listener = listeners[N10903_iterator];
                    //from
                    listener.onExit("DeepHistory");
                }
            }
        }
        DeepHistoryConstructor.prototype = Parallel1;
        return new DeepHistoryConstructor();
    })();
    var scxml_N10001_initial = (function() {
        function scxml_N10001_initialConstructor() {
            this.parent = scxml_N10001;
            this.initial = null;
            this.depth = 1;
            this.historyState = null;
            //these variables facilitate fast In predicate
            this.isBasic =
            true;
            this.ancestors = [
                scxml_N10001
                ];
            this.parent.initial = this; //init parent's pointer to initial state
            this.toString = function() {
                return "scxml_N10001_initial"
            }
            this.enterAction = function() {
                for (var N10000_iterator = 0, N10000_hoist = listeners.length;
                N10000_iterator < N10000_hoist;
                N10000_iterator++) {
                    var listener = listeners[N10000_iterator];
                    //to
                    listener.onEntry("scxml_N10001_initial");
                }
            }
            this.exitAction = function() {
                for (var N1099C_iterator = 0, N1099C_hoist = listeners.length;
                N1099C_iterator < N1099C_hoist;
                N1099C_iterator++) {
                    var listener = listeners[N1099C_iterator];
                    //from
                    listener.onExit("scxml_N10001_initial");
                }
            }
        }
        scxml_N10001_initialConstructor.prototype = scxml_N10001;
        return new scxml_N10001_initialConstructor();
    })();
    var FinalState = (function() {
        function FinalStateConstructor() {
            this.parent = scxml_N10001;
            this.initial = null;
            this.depth = 1;
            this.historyState = null;
            //these variables facilitate fast In predicate
            this.isBasic =
            true;
            this.ancestors = [
                scxml_N10001
                ];
            this.toString = function() {
                return "FinalState"
            }
            this.enterAction = function() {
                for (var N10000_iterator = 0, N10000_hoist = listeners.length;
                N10000_iterator < N10000_hoist;
                N10000_iterator++) {
                    var listener = listeners[N10000_iterator];
                    //to
                    listener.onEntry("FinalState");
                }
            }
            this.exitAction = function() {
                for (var N10A23_iterator = 0, N10A23_hoist = listeners.length;
                N10A23_iterator < N10A23_hoist;
                N10A23_iterator++) {
                    var listener = listeners[N10A23_iterator];
                    //from
                    listener.onExit("FinalState");
                }
            }
        }
        FinalStateConstructor.prototype = scxml_N10001;
        return new FinalStateConstructor();
    })();
    //states enum for glass-box unit testing
    this._states = {
        Basic1: Basic1,
        Basic2: Basic2,
        Basic3: Basic3,
        Compound1_initial: Compound1_initial,
        ShallowHistory: ShallowHistory,
        Basic4: Basic4,
        Basic5: Basic5,
        ParallelRegion1_initial: ParallelRegion1_initial,
        Basic6: Basic6,
        Basic7: Basic7,
        ParallelRegion2_initial: ParallelRegion2_initial,
        Parallel1_initial: Parallel1_initial,
        DeepHistory: DeepHistory,
        scxml_N10001_initial: scxml_N10001_initial,
        FinalState: FinalState
    }
    //trigger methods for synchronous interaction
    this["$default"] = function(data) {
        if (isInStableState) {
            runToCompletion(
            //TODO: conditionally wrap in quotes for enumerated pattern
            $default, data, true)
        } else {
            return undefined;
        }
    }
    this["t1"] = function(data) {
        if (isInStableState) {
            runToCompletion(
            //TODO: conditionally wrap in quotes for enumerated pattern
            t1, data, true)
        } else {
            return undefined;
        }
    }
    this["t2_7"] = function(data) {
        if (isInStableState) {
            runToCompletion(
            //TODO: conditionally wrap in quotes for enumerated pattern
            t2_7, data, true)
        } else {
            return undefined;
        }
    }
    this["t5"] = function(data) {
        if (isInStableState) {
            runToCompletion(
            //TODO: conditionally wrap in quotes for enumerated pattern
            t5, data, true)
        } else {
            return undefined;
        }
    }
    this["t_after"] = function(data) {
        if (isInStableState) {
            runToCompletion(
            //TODO: conditionally wrap in quotes for enumerated pattern
            t_after, data, true)
        } else {
            return undefined;
        }
    }
    this["t3"] = function(data) {
        if (isInStableState) {
            runToCompletion(
            //TODO: conditionally wrap in quotes for enumerated pattern
            t3, data, true)
        } else {
            return undefined;
        }
    }
    this["tgen"] = function(data) {
        if (isInStableState) {
            runToCompletion(
            //TODO: conditionally wrap in quotes for enumerated pattern
            tgen, data, true)
        } else {
            return undefined;
        }
    }
    this["t4_9"] = function(data) {
        if (isInStableState) {
            runToCompletion(
            //TODO: conditionally wrap in quotes for enumerated pattern
            t4_9, data, true)
        } else {
            return undefined;
        }
    }
    this["t8"] = function(data) {
        if (isInStableState) {
            runToCompletion(
            //TODO: conditionally wrap in quotes for enumerated pattern
            t8, data, true)
        } else {
            return undefined;
        }
    }
    //enumeration of states int id's
    var Basic1_id = 0;
    var Basic2_id = 1;
    var Basic3_id = 2;
    var Compound1_initial_id = 3;
    var ShallowHistory_id = 4;
    var Basic4_id = 5;
    var Basic5_id = 6;
    var ParallelRegion1_initial_id = 7;
    var Basic6_id = 8;
    var Basic7_id = 9;
    var ParallelRegion2_initial_id = 10;
    var Parallel1_initial_id = 11;
    var DeepHistory_id = 12;
    var scxml_N10001_initial_id = 13;
    var FinalState_id = 14;
    //map from states int id's to objects
    var STATE_INT_ID_TO_OBJECT_MAP = [
        Basic1, Basic2, Basic3, Compound1_initial, ShallowHistory, Basic4, Basic5, ParallelRegion1_initial, Basic6, Basic7, ParallelRegion2_initial, Parallel1_initial, DeepHistory, scxml_N10001_initial, FinalState];
    //tag each state object with an int id to map from object to id
    //only needed for history
    Basic1.id = 0;
    Basic2.id = 1;
    Basic3.id = 2;
    Compound1_initial.id = 3;
    ShallowHistory.id = 4;
    Basic4.id = 5;
    Basic5.id = 6;
    ParallelRegion1_initial.id = 7;
    Basic6.id = 8;
    Basic7.id = 9;
    ParallelRegion2_initial.id = 10;
    Parallel1_initial.id = 11;
    DeepHistory.id = 12;
    scxml_N10001_initial.id = 13;
    FinalState.id = 14;
    //enumeration of triggers
    var $default = 0;
    var t1 = 1;
    var t2_7 = 2;
    var t5 = 3;
    var t_after = 4;
    var tgen = 5;
    var t3 = 6;
    var t4_9 = 7;
    var t8 = 8;
    //expose them as a convenient interface as part of the API
    this.TRIGGERS = {
        $default: $default,
        t1: t1,
        t2_7: t2_7,
        t5: t5,
        t_after: t_after,
        tgen: tgen,
        t3: t3,
        t4_9: t4_9,
        t8: t8
    };
    //needed for debugging
    var TRIGGER_ID_TO_NAME_MAP = [

        '$default'
         ,
        't1'
         ,
        't2_7'
         ,
        't5'
         ,
        't_after'
         ,
        'tgen'
         ,
        't3'
         ,
        't4_9'
         ,
        't8'

        ];
    //transition functions
    var Basic1_t1 = function() {
        return {
            preemptedBasicStates: {
                0: true,
                1: true,
                2: true
            },
            action: function() {
                //exit states
                Basic1.exitAction();
                //transition action
                for (var N10000_iterator = 0, N10000_hoist = listeners.length;
                N10000_iterator < N10000_hoist;
                N10000_iterator++) {
                    var listener = listeners[N10000_iterator];
                    //transition id
                    listener.onTransition("Basic1", "Basic2", "Basic1_t1_1");
                }
                //enter states
                Basic2.enterAction();
                //update configuration
                currentConfiguration = [
                    Basic2_id
                    ];
            }
        }
    }
    var Basic1_t2_7 = function() {
        return {
            preemptedBasicStates: {
                0: true,
                1: true,
                2: true,
                5: true,
                6: true,
                8: true,
                9: true
            },
            action: function() {
                //exit states
                Compound1.exitAction();
                //transition action
                for (var N10000_iterator = 0, N10000_hoist = listeners.length;
                N10000_iterator < N10000_hoist;
                N10000_iterator++) {
                    var listener = listeners[N10000_iterator];
                    //transition id
                    listener.onTransition("Basic1", "DeepHistory", "Basic1_t2_7_2");
                }
                //enter states
                Parallel1.enterAction();
                DeepHistory.enterAction();
                //update configuration
                currentConfiguration = [
                    DeepHistory_id
                    ];
            }
        }
    }
    var Basic2_t2_7 = function() {
        return {
            preemptedBasicStates: {
                0: true,
                1: true,
                2: true,
                5: true,
                6: true,
                8: true,
                9: true
            },
            action: function() {
                //exit states
                Basic2.exitAction();
                Compound1.exitAction();
                //transition action
                for (var N10000_iterator = 0, N10000_hoist = listeners.length;
                N10000_iterator < N10000_hoist;
                N10000_iterator++) {
                    var listener = listeners[N10000_iterator];
                    //transition id
                    listener.onTransition("Basic2", "Parallel1_initial", "Basic2_t2_7_6");
                }
                //enter states
                Parallel1.enterAction();
                Parallel1_initial.enterAction();
                //update configuration
                currentConfiguration = [
                    Parallel1_initial_id
                    ];
            }
        }
        return {
            preemptedBasicStates: {
                0: true,
                1: true,
                2: true,
                5: true,
                6: true,
                8: true,
                9: true
            },
            action: function() {
                //exit states
                Compound1.exitAction();
                //transition action
                for (var N10000_iterator = 0, N10000_hoist = listeners.length;
                N10000_iterator < N10000_hoist;
                N10000_iterator++) {
                    var listener = listeners[N10000_iterator];
                    //transition id
                    listener.onTransition("Basic2", "DeepHistory", "Basic2_t2_7_7");
                }
                //enter states
                Parallel1.enterAction();
                DeepHistory.enterAction();
                //update configuration
                currentConfiguration = [
                    DeepHistory_id
                    ];
            }
        }
    }
    var Basic2_t5 = function() {
        return {
            preemptedBasicStates: {
                0: true,
                1: true,
                2: true
            },
            action: function() {
                //exit states
                Basic2.exitAction();
                //transition action
                for (var N10000_iterator = 0, N10000_hoist = listeners.length;
                N10000_iterator < N10000_hoist;
                N10000_iterator++) {
                    var listener = listeners[N10000_iterator];
                    //transition id
                    listener.onTransition("Basic2", "Basic1", "Basic2_t5_5");
                }
                //enter states
                Basic1.enterAction();
                //update configuration
                currentConfiguration = [
                    Basic1_id
                    ];
            }
        }
    }
    var Basic3_t2_7 = function() {
        return {
            preemptedBasicStates: {
                0: true,
                1: true,
                2: true,
                5: true,
                6: true,
                8: true,
                9: true
            },
            action: function() {
                //exit states
                Compound1.exitAction();
                //transition action
                for (var N10000_iterator = 0, N10000_hoist = listeners.length;
                N10000_iterator < N10000_hoist;
                N10000_iterator++) {
                    var listener = listeners[N10000_iterator];
                    //transition id
                    listener.onTransition("Basic3", "DeepHistory", "Basic3_t2_7_12");
                }
                //enter states
                Parallel1.enterAction();
                DeepHistory.enterAction();
                //update configuration
                currentConfiguration = [
                    DeepHistory_id
                    ];
            }
        }
    }
    var Basic3_t_after = function() {
        return {
            preemptedBasicStates: {
                0: true,
                1: true,
                2: true,
                5: true,
                6: true,
                8: true,
                9: true
            },
            action: function() {
                //exit states
                Basic3.exitAction();
                Compound1.exitAction();
                //transition action
                for (var N10000_iterator = 0, N10000_hoist = listeners.length;
                N10000_iterator < N10000_hoist;
                N10000_iterator++) {
                    var listener = listeners[N10000_iterator];
                    //transition id
                    listener.onTransition("Basic3", "FinalState", "Basic3_t_after_11");
                }
                //enter states
                FinalState.enterAction();
                //update configuration
                currentConfiguration = [
                    FinalState_id
                    ];
            }
        }
    }
    var Compound1_initial_$default = function() {
        return {
            preemptedBasicStates: {
                0: true,
                1: true,
                2: true
            },
            action: function() {
                hasTakenDefaultTransition = true;
                //exit states
                Compound1_initial.exitAction();
                //transition action
                for (var N10000_iterator = 0, N10000_hoist = listeners.length;
                N10000_iterator < N10000_hoist;
                N10000_iterator++) {
                    var listener = listeners[N10000_iterator];
                    //transition id
                    listener.onTransition("Compound1_initial", "ShallowHistory", "Compound1_initial_$default_15");
                }
                //enter states
                ShallowHistory.enterAction();
                //update configuration
                currentConfiguration = [
                    ShallowHistory_id
                    ];
            }
        }
    }
    var ShallowHistory_$default = function() {
        //history state semantics
        if (ShallowHistory.lastConfiguration) {
            return {
                preemptedBasicStates: {
                    0: true,
                    1: true,
                    2: true
                },
                action: function() {
                    //transition action
                    for (var N10000_iterator = 0, N10000_hoist = listeners.length;
                    N10000_iterator < N10000_hoist;
                    N10000_iterator++) {
                        var l = listeners[N10000_iterator];
                        //transition id
                        l.onTransition("ShallowHistory", "Basic1", "ShallowHistory_$default_17");
                    }
                    var historyState = ShallowHistory;
                    var newConfiguration = [];
                    var historyStateParent = ShallowHistory.parent;
                    for (var N10000_iterator = 0, N10000_hoist = ShallowHistory.lastConfiguration.length;
                    N10000_iterator < N10000_hoist;
                    N10000_iterator++) {
                        var state = ShallowHistory.lastConfiguration[N10000_iterator];
                        if (STATE_INT_ID_TO_OBJECT_MAP[state].ancestors.indexOf(historyStateParent) != -1) {
                            var statesEntered = [STATE_INT_ID_TO_OBJECT_MAP[state]];
                            for (var parent = STATE_INT_ID_TO_OBJECT_MAP[state].parent;
                            parent != null && parent != historyState.parent;
                            parent = parent.parent) {
                                statesEntered.push(parent);
                            }
                            var topState = statesEntered.pop();
                            topState.enterAction();
                            newConfiguration.push(topState.initial ? topState.initial : topState);
                        }
                    }
                    var filteredConfiguration = [];
                    for (var N10000_iterator = 0, N10000_hoist = currentConfiguration.length;
                    N10000_iterator < N10000_hoist;
                    N10000_iterator++) {
                        var state = currentConfiguration[N10000_iterator];
                        if (STATE_INT_ID_TO_OBJECT_MAP[state].ancestors.indexOf(historyStateParent) == -1) {
                            filteredConfiguration.push(state);
                        }
                    }
                    newConfiguration = newConfiguration.concat(filteredConfiguration)
                    var historyTriggerDispatcherCurrentConfigurationAssignmentRHS = new Array(newConfiguration.length);
                    for (var N10000_iterator = 0, N10000_hoist = newConfiguration.length;
                    N10000_iterator < N10000_hoist;
                    N10000_iterator++) {
                        var sObj = newConfiguration[N10000_iterator];
                        historyTriggerDispatcherCurrentConfigurationAssignmentRHS[N10000_iterator] = sObj.id;
                    }
                    currentConfiguration = historyTriggerDispatcherCurrentConfigurationAssignmentRHS;
                }
            }
        } else {
            return {
                preemptedBasicStates: {
                    0: true,
                    1: true,
                    2: true
                },
                action: function() {
                    hasTakenDefaultTransition = true;
                    //exit states
                    ShallowHistory.exitAction();
                    //transition action
                    for (var N10000_iterator = 0, N10000_hoist = listeners.length;
                    N10000_iterator < N10000_hoist;
                    N10000_iterator++) {
                        var listener = listeners[N10000_iterator];
                        //transition id
                        listener.onTransition("ShallowHistory", "Basic1", "ShallowHistory_$default_17");
                    }
                    //enter states
                    Basic1.enterAction();
                    //update configuration
                    currentConfiguration = [
                        Basic1_id
                        ];
                }
            }
        }
    }
    var Basic4_t3 = function() {
        return {
            preemptedBasicStates: {
                5: true,
                6: true
            },
            action: function() {
                //exit states
                Basic4.exitAction();
                //transition action
                //send event
                innerEventQueue.push(
                tgen, null, true);
                for (var N10000_iterator = 0, N10000_hoist = listeners.length;
                N10000_iterator < N10000_hoist;
                N10000_iterator++) {
                    var listener = listeners[N10000_iterator];
                    //transition id
                    listener.onTransition("Basic4", "Basic5", "Basic4_t3_19");
                }
                //enter states
                Basic5.enterAction();
                //update configuration
                currentConfiguration.splice(
                currentConfiguration.indexOf(Basic4_id), 1, Basic5_id);
            }
        }
    }
    var Basic4_t4_9 = function() {
        return {
            preemptedBasicStates: {
                0: true,
                1: true,
                2: true,
                5: true,
                6: true,
                8: true,
                9: true
            },
            action: function() {
                //exit states
                var statesExited = [];
                var lca = scxml_N10001;
                var nonBasicTriggerDispatcherExitBlockIteratorExpression = new Array(currentConfiguration.length);
                for (var N10000_iterator = 0, N10000_hoist = currentConfiguration.length;
                N10000_iterator < N10000_hoist;
                N10000_iterator++) {
                    var state = currentConfiguration[N10000_iterator];
                    nonBasicTriggerDispatcherExitBlockIteratorExpression[N10000_iterator] = STATE_INT_ID_TO_OBJECT_MAP[state];
                }
                for (var N10000_iterator = 0, N10000_hoist = nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
                N10000_iterator < N10000_hoist;
                N10000_iterator++) {
                    var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[N10000_iterator];
                    if (state.ancestors.indexOf(lca) !== -1) {
                        do {
                            statesExited.push(state);
                        } while ((state = state.parent) && state != lca && statesExited.indexOf(state) == -1)
                    }
                }
                //sort by depth
                statesExited.sort(sortByDepthDeepToShallow);
                //execute actions for each of these states
                for (var N10000_iterator = 0, N10000_hoist = statesExited.length;
                N10000_iterator < N10000_hoist;
                N10000_iterator++) {
                    var state = statesExited[N10000_iterator];
                    state.exitAction();
                }
                //transition action
                for (var N10000_iterator = 0, N10000_hoist = listeners.length;
                N10000_iterator < N10000_hoist;
                N10000_iterator++) {
                    var listener = listeners[N10000_iterator];
                    //transition id
                    listener.onTransition("Basic4", "Basic3", "Basic4_t4_9_20");
                }
                //enter states
                Compound1.enterAction();
                Basic3.enterAction();
                //update configuration
                currentConfiguration = [
                    Basic3_id
                    ];
            }
        }
    }
    var Basic5_t4_9 = function() {
        return {
            preemptedBasicStates: {
                0: true,
                1: true,
                2: true,
                5: true,
                6: true,
                8: true,
                9: true
            },
            action: function() {
                //exit states
                var statesExited = [];
                var lca = scxml_N10001;
                var nonBasicTriggerDispatcherExitBlockIteratorExpression = new Array(currentConfiguration.length);
                for (var N10000_iterator = 0, N10000_hoist = currentConfiguration.length;
                N10000_iterator < N10000_hoist;
                N10000_iterator++) {
                    var state = currentConfiguration[N10000_iterator];
                    nonBasicTriggerDispatcherExitBlockIteratorExpression[N10000_iterator] = STATE_INT_ID_TO_OBJECT_MAP[state];
                }
                for (var N10000_iterator = 0, N10000_hoist = nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
                N10000_iterator < N10000_hoist;
                N10000_iterator++) {
                    var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[N10000_iterator];
                    if (state.ancestors.indexOf(lca) !== -1) {
                        do {
                            statesExited.push(state);
                        } while ((state = state.parent) && state != lca && statesExited.indexOf(state) == -1)
                    }
                }
                //sort by depth
                statesExited.sort(sortByDepthDeepToShallow);
                //execute actions for each of these states
                for (var N10000_iterator = 0, N10000_hoist = statesExited.length;
                N10000_iterator < N10000_hoist;
                N10000_iterator++) {
                    var state = statesExited[N10000_iterator];
                    state.exitAction();
                }
                //transition action
                for (var N10000_iterator = 0, N10000_hoist = listeners.length;
                N10000_iterator < N10000_hoist;
                N10000_iterator++) {
                    var listener = listeners[N10000_iterator];
                    //transition id
                    listener.onTransition("Basic5", "Compound1_initial", "Basic5_t4_9_24");
                }
                //enter states
                Compound1.enterAction();
                Compound1_initial.enterAction();
                //update configuration
                currentConfiguration = [
                    Compound1_initial_id
                    ];
            }
        }
        return {
            preemptedBasicStates: {
                0: true,
                1: true,
                2: true,
                5: true,
                6: true,
                8: true,
                9: true
            },
            action: function() {
                //exit states
                var statesExited = [];
                var lca = scxml_N10001;
                var nonBasicTriggerDispatcherExitBlockIteratorExpression = new Array(currentConfiguration.length);
                for (var N10000_iterator = 0, N10000_hoist = currentConfiguration.length;
                N10000_iterator < N10000_hoist;
                N10000_iterator++) {
                    var state = currentConfiguration[N10000_iterator];
                    nonBasicTriggerDispatcherExitBlockIteratorExpression[N10000_iterator] = STATE_INT_ID_TO_OBJECT_MAP[state];
                }
                for (var N10000_iterator = 0, N10000_hoist = nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
                N10000_iterator < N10000_hoist;
                N10000_iterator++) {
                    var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[N10000_iterator];
                    if (state.ancestors.indexOf(lca) !== -1) {
                        do {
                            statesExited.push(state);
                        } while ((state = state.parent) && state != lca && statesExited.indexOf(state) == -1)
                    }
                }
                //sort by depth
                statesExited.sort(sortByDepthDeepToShallow);
                //execute actions for each of these states
                for (var N10000_iterator = 0, N10000_hoist = statesExited.length;
                N10000_iterator < N10000_hoist;
                N10000_iterator++) {
                    var state = statesExited[N10000_iterator];
                    state.exitAction();
                }
                //transition action
                for (var N10000_iterator = 0, N10000_hoist = listeners.length;
                N10000_iterator < N10000_hoist;
                N10000_iterator++) {
                    var listener = listeners[N10000_iterator];
                    //transition id
                    listener.onTransition("Basic5", "Basic3", "Basic5_t4_9_25");
                }
                //enter states
                Compound1.enterAction();
                Basic3.enterAction();
                //update configuration
                currentConfiguration = [
                    Basic3_id
                    ];
            }
        }
    }
    var Basic5_t8 = function() {
        return {
            preemptedBasicStates: {
                5: true,
                6: true
            },
            action: function() {
                //exit states
                Basic5.exitAction();
                //transition action
                for (var N10000_iterator = 0, N10000_hoist = listeners.length;
                N10000_iterator < N10000_hoist;
                N10000_iterator++) {
                    var listener = listeners[N10000_iterator];
                    //transition id
                    listener.onTransition("Basic5", "Basic4", "Basic5_t8_23");
                }
                //enter states
                Basic4.enterAction();
                //update configuration
                currentConfiguration.splice(
                currentConfiguration.indexOf(Basic5_id), 1, Basic4_id);
            }
        }
    }
    var ParallelRegion1_initial_$default = function() {
        return {
            preemptedBasicStates: {
                5: true,
                6: true
            },
            action: function() {
                hasTakenDefaultTransition = true;
                //exit states
                ParallelRegion1_initial.exitAction();
                //transition action
                for (var N10000_iterator = 0, N10000_hoist = listeners.length;
                N10000_iterator < N10000_hoist;
                N10000_iterator++) {
                    var listener = listeners[N10000_iterator];
                    //transition id
                    listener.onTransition("ParallelRegion1_initial", "Basic4", "ParallelRegion1_initial_$default_29");
                }
                //enter states
                Basic4.enterAction();
                //update configuration
                currentConfiguration.splice(
                currentConfiguration.indexOf(ParallelRegion1_initial_id), 1, Basic4_id);
            }
        }
    }
    var Basic6_tgen = function() {
        return {
            preemptedBasicStates: {
                8: true,
                9: true
            },
            action: function() {
                //exit states
                Basic6.exitAction();
                //transition action
                for (var N10000_iterator = 0, N10000_hoist = listeners.length;
                N10000_iterator < N10000_hoist;
                N10000_iterator++) {
                    var listener = listeners[N10000_iterator];
                    //transition id
                    listener.onTransition("Basic6", "Basic7", "Basic6_tgen_31");
                }
                //enter states
                Basic7.enterAction();
                //update configuration
                currentConfiguration.splice(
                currentConfiguration.indexOf(Basic6_id), 1, Basic7_id);
            }
        }
    }
    var Basic6_t4_9 = function() {
        return {
            preemptedBasicStates: {
                0: true,
                1: true,
                2: true,
                5: true,
                6: true,
                8: true,
                9: true
            },
            action: function() {
                //exit states
                var statesExited = [];
                var lca = scxml_N10001;
                var nonBasicTriggerDispatcherExitBlockIteratorExpression = new Array(currentConfiguration.length);
                for (var N10000_iterator = 0, N10000_hoist = currentConfiguration.length;
                N10000_iterator < N10000_hoist;
                N10000_iterator++) {
                    var state = currentConfiguration[N10000_iterator];
                    nonBasicTriggerDispatcherExitBlockIteratorExpression[N10000_iterator] = STATE_INT_ID_TO_OBJECT_MAP[state];
                }
                for (var N10000_iterator = 0, N10000_hoist = nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
                N10000_iterator < N10000_hoist;
                N10000_iterator++) {
                    var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[N10000_iterator];
                    if (state.ancestors.indexOf(lca) !== -1) {
                        do {
                            statesExited.push(state);
                        } while ((state = state.parent) && state != lca && statesExited.indexOf(state) == -1)
                    }
                }
                //sort by depth
                statesExited.sort(sortByDepthDeepToShallow);
                //execute actions for each of these states
                for (var N10000_iterator = 0, N10000_hoist = statesExited.length;
                N10000_iterator < N10000_hoist;
                N10000_iterator++) {
                    var state = statesExited[N10000_iterator];
                    state.exitAction();
                }
                //transition action
                for (var N10000_iterator = 0, N10000_hoist = listeners.length;
                N10000_iterator < N10000_hoist;
                N10000_iterator++) {
                    var listener = listeners[N10000_iterator];
                    //transition id
                    listener.onTransition("Basic6", "Basic3", "Basic6_t4_9_32");
                }
                //enter states
                Compound1.enterAction();
                Basic3.enterAction();
                //update configuration
                currentConfiguration = [
                    Basic3_id
                    ];
            }
        }
    }
    var Basic7_t4_9 = function() {
        return {
            preemptedBasicStates: {
                0: true,
                1: true,
                2: true,
                5: true,
                6: true,
                8: true,
                9: true
            },
            action: function() {
                //exit states
                var statesExited = [];
                var lca = scxml_N10001;
                var nonBasicTriggerDispatcherExitBlockIteratorExpression = new Array(currentConfiguration.length);
                for (var N10000_iterator = 0, N10000_hoist = currentConfiguration.length;
                N10000_iterator < N10000_hoist;
                N10000_iterator++) {
                    var state = currentConfiguration[N10000_iterator];
                    nonBasicTriggerDispatcherExitBlockIteratorExpression[N10000_iterator] = STATE_INT_ID_TO_OBJECT_MAP[state];
                }
                for (var N10000_iterator = 0, N10000_hoist = nonBasicTriggerDispatcherExitBlockIteratorExpression.length;
                N10000_iterator < N10000_hoist;
                N10000_iterator++) {
                    var state = nonBasicTriggerDispatcherExitBlockIteratorExpression[N10000_iterator];
                    if (state.ancestors.indexOf(lca) !== -1) {
                        do {
                            statesExited.push(state);
                        } while ((state = state.parent) && state != lca && statesExited.indexOf(state) == -1)
                    }
                }
                //sort by depth
                statesExited.sort(sortByDepthDeepToShallow);
                //execute actions for each of these states
                for (var N10000_iterator = 0, N10000_hoist = statesExited.length;
                N10000_iterator < N10000_hoist;
                N10000_iterator++) {
                    var state = statesExited[N10000_iterator];
                    state.exitAction();
                }
                //transition action
                for (var N10000_iterator = 0, N10000_hoist = listeners.length;
                N10000_iterator < N10000_hoist;
                N10000_iterator++) {
                    var listener = listeners[N10000_iterator];
                    //transition id
                    listener.onTransition("Basic7", "Basic3", "Basic7_t4_9_35");
                }
                //enter states
                Compound1.enterAction();
                Basic3.enterAction();
                //update configuration
                currentConfiguration = [
                    Basic3_id
                    ];
            }
        }
    }
    var ParallelRegion2_initial_$default = function() {
        return {
            preemptedBasicStates: {
                8: true,
                9: true
            },
            action: function() {
                hasTakenDefaultTransition = true;
                //exit states
                ParallelRegion2_initial.exitAction();
                //transition action
                for (var N10000_iterator = 0, N10000_hoist = listeners.length;
                N10000_iterator < N10000_hoist;
                N10000_iterator++) {
                    var listener = listeners[N10000_iterator];
                    //transition id
                    listener.onTransition("ParallelRegion2_initial", "Basic6", "ParallelRegion2_initial_$default_37");
                }
                //enter states
                Basic6.enterAction();
                //update configuration
                currentConfiguration.splice(
                currentConfiguration.indexOf(ParallelRegion2_initial_id), 1, Basic6_id);
            }
        }
    }
    var Parallel1_initial_$default = function() {
        return {
            preemptedBasicStates: {
                5: true,
                6: true,
                8: true,
                9: true
            },
            action: function() {
                hasTakenDefaultTransition = true;
                //exit states
                Parallel1_initial.exitAction();
                //transition action
                for (var N10000_iterator = 0, N10000_hoist = listeners.length;
                N10000_iterator < N10000_hoist;
                N10000_iterator++) {
                    var listener = listeners[N10000_iterator];
                    //transition id
                    listener.onTransition("Parallel1_initial", "DeepHistory", "Parallel1_initial_$default_39");
                }
                //enter states
                DeepHistory.enterAction();
                //update configuration
                currentConfiguration = [
                    DeepHistory_id
                    ];
            }
        }
    }
    var DeepHistory_$default = function() {
        //history state semantics
        if (DeepHistory.lastConfiguration) {
            return {
                preemptedBasicStates: {
                    5: true,
                    6: true,
                    8: true,
                    9: true
                },
                action: function() {
                    //transition action
                    for (var N10000_iterator = 0, N10000_hoist = listeners.length;
                    N10000_iterator < N10000_hoist;
                    N10000_iterator++) {
                        var l = listeners[N10000_iterator];
                        //transition id
                        l.onTransition("DeepHistory", "ParallelRegion1_initial", "DeepHistory_$default_41");
                        l.onTransition("DeepHistory", "ParallelRegion2_initial", "DeepHistory_$default_42");
                    }
                    var historyState = DeepHistory;
                    var siblingStates = [
                        ParallelRegion1
                            ,
                            ParallelRegion2
                        ];
                    var historyStateParent = DeepHistory.parent;
                    for (var N10000_iterator = 0, N10000_hoist = DeepHistory.lastConfiguration.length;
                    N10000_iterator < N10000_hoist;
                    N10000_iterator++) {
                        var state = DeepHistory.lastConfiguration[N10000_iterator];
                        if (STATE_INT_ID_TO_OBJECT_MAP[state].ancestors.indexOf(historyStateParent) != -1) {
                            var statesEntered = [STATE_INT_ID_TO_OBJECT_MAP[state]];
                            for (var parent = STATE_INT_ID_TO_OBJECT_MAP[state].parent;
                            parent != null && siblingStates.indexOf(parent) == -1;
                            parent = parent.parent) {
                                statesEntered.push(parent);
                            }
                            var topState = statesEntered.pop();
                            topState.parent.enterAction();
                            topState.enterAction();
                            while (topState = statesEntered.pop()) {
                                topState.enterAction();
                            }
                        }
                    }
                    currentConfiguration = DeepHistory.lastConfiguration.slice();
                }
            }
        } else {
            return {
                preemptedBasicStates: {
                    5: true,
                    6: true,
                    8: true,
                    9: true
                },
                action: function() {
                    hasTakenDefaultTransition = true;
                    //exit states
                    DeepHistory.exitAction();
                    //transition action
                    for (var N10000_iterator = 0, N10000_hoist = listeners.length;
                    N10000_iterator < N10000_hoist;
                    N10000_iterator++) {
                        var listener = listeners[N10000_iterator];
                        //transition id
                        listener.onTransition("DeepHistory", "ParallelRegion1_initial", "DeepHistory_$default_41");
                        listener.onTransition("DeepHistory", "ParallelRegion2_initial", "DeepHistory_$default_42");
                    }
                    //enter states
                    ParallelRegion2.enterAction();
                    ParallelRegion2_initial.enterAction();
                    ParallelRegion1.enterAction();
                    ParallelRegion1_initial.enterAction();
                    //update configuration
                    currentConfiguration = [
                        ParallelRegion1_initial_id, ParallelRegion2_initial_id
                        ];
                }
            }
        }
    }
    var scxml_N10001_initial_$default = function() {
        return {
            preemptedBasicStates: {
                0: true,
                1: true,
                2: true,
                5: true,
                6: true,
                8: true,
                9: true
            },
            action: function() {
                hasTakenDefaultTransition = true;
                //exit states
                scxml_N10001_initial.exitAction();
                //transition action
                for (var N10000_iterator = 0, N10000_hoist = listeners.length;
                N10000_iterator < N10000_hoist;
                N10000_iterator++) {
                    var listener = listeners[N10000_iterator];
                    //transition id
                    listener.onTransition("scxml_N10001_initial", "Compound1_initial", "scxml_N10001_initial_$default_45");
                }
                //enter states
                Compound1.enterAction();
                Compound1_initial.enterAction();
                //update configuration
                currentConfiguration = [
                    Compound1_initial_id
                    ];
            }
        }
    }
    function $dispatchPrefixEvent(state, e) {
        switch (state) {
        case Basic1_id:
            if (e.match(t1_Regexp_N10675)) {
                return Basic1_t1();
            }
            if (e.match(t2_7_Regexp_N1067A)) {
                return Basic1_t2_7();
            }
            break;
        case Basic2_id:
            if (e.match(t5_Regexp_N1067F)) {
                return Basic2_t5();
            }
            if (e.match(t2_7_Regexp_N1067A)) {
                return Basic2_t2_7();
            }
            if (e.match(t2_7_Regexp_N1067A)) {
                return Basic2_t2_7();
            }
            break;
        case Basic3_id:
            if (e.match(t_after_Regexp_N10684)) {
                return Basic3_t_after();
            }
            if (e.match(t2_7_Regexp_N1067A)) {
                return Basic3_t2_7();
            }
            break;
        case Basic4_id:
            if (e.match(t3_Regexp_N10689)) {
                return Basic4_t3();
            }
            if (e.match(t4_9_Regexp_N10693)) {
                return Basic4_t4_9();
            }
            break;
        case Basic5_id:
            if (e.match(t8_Regexp_N10698)) {
                return Basic5_t8();
            }
            if (e.match(t4_9_Regexp_N10693)) {
                return Basic5_t4_9();
            }
            if (e.match(t4_9_Regexp_N10693)) {
                return Basic5_t4_9();
            }
            break;
        case Basic6_id:
            if (e.match(tgen_Regexp_N1068E)) {
                return Basic6_tgen();
            }
            if (e.match(t4_9_Regexp_N10693)) {
                return Basic6_t4_9();
            }
            break;
        case Basic7_id:
            if (e.match(t4_9_Regexp_N10693)) {
                return Basic7_t4_9();
            }
            break;
        }
    }
    var $nt = function() {}; //null transition
    //state transition table
    var STATE_TRANSITION_TABLE = [[$nt, Basic1_t1, Basic1_t2_7, $nt, $nt, $nt, $nt, $nt, $nt],
        [$nt, $nt, Basic2_t2_7, Basic2_t5, $nt, $nt, $nt, $nt, $nt],
        [$nt, $nt, Basic3_t2_7, $nt, Basic3_t_after, $nt, $nt, $nt, $nt],
        [Compound1_initial_$default, $nt, $nt, $nt, $nt, $nt, $nt, $nt, $nt],
        [ShallowHistory_$default, $nt, $nt, $nt, $nt, $nt, $nt, $nt, $nt],
        [$nt, $nt, $nt, $nt, $nt, $nt, Basic4_t3, Basic4_t4_9, $nt],
        [$nt, $nt, $nt, $nt, $nt, $nt, $nt, Basic5_t4_9, Basic5_t8],
        [ParallelRegion1_initial_$default, $nt, $nt, $nt, $nt, $nt, $nt, $nt, $nt],
        [$nt, $nt, $nt, $nt, $nt, Basic6_tgen, $nt, Basic6_t4_9, $nt],
        [$nt, $nt, $nt, $nt, $nt, $nt, $nt, Basic7_t4_9, $nt],
        [ParallelRegion2_initial_$default, $nt, $nt, $nt, $nt, $nt, $nt, $nt, $nt],
        [Parallel1_initial_$default, $nt, $nt, $nt, $nt, $nt, $nt, $nt, $nt],
        [DeepHistory_$default, $nt, $nt, $nt, $nt, $nt, $nt, $nt, $nt],
        [scxml_N10001_initial_$default, $nt, $nt, $nt, $nt, $nt, $nt, $nt, $nt],
        [$nt, $nt, $nt, $nt, $nt, $nt, $nt, $nt, $nt]]
    //initialization script
    //initialization method
    this.initialize = function() {
        currentConfiguration = [Compound1_initial_id];
        runToCompletion();
        mainLoop();
    }
    //internal runtime functions

    function sortByDepthDeepToShallow(a, b) {
        return b.depth - a.depth;
    }
    //start static boilerplate code
    //static private member variables
    var currentConfiguration = []; //current configuration
    var innerEventQueue = []; //inner event queue
    var outerEventQueue = []; //outer event queue
    var isInStableState = true;
    var hasTakenDefaultTransition = false;
    var destroyed = false;
    var mainLoopCallback = null;
    //static private member functions


    function mainLoop() {
        if (!destroyed) {
            //take an event from the current outer event queue
            if (outerEventQueue.length && isInStableState) {
                runToCompletion(outerEventQueue.shift(), outerEventQueue.shift());
            }
            //call back
            mainLoopCallback = window.setTimeout(function() {
                mainLoop(); //FIXME: note that when calling mainloop this way, we won't have access to the "this" object. 
                //I don't think we ever use it though. Everything we need is private in function scope.
            }, 100);
        }
    }
    function runToCompletion(e, data, isEnumeratedEvent) {
        isInStableState = false;
        if (e) {
            innerEventQueue.push(e, data, isEnumeratedEvent);
        }
        do {
            //take any available default transitions
            microstep($default, null, true);
            if (!hasTakenDefaultTransition) {
                if (!innerEventQueue.length) {
                    //we have no more generated events, and no default transitions fired, so
                    //we are done, and have run to completion
                    break;
                } else {
                    //microstep, then dequeue next event sending in event
                    microstep(innerEventQueue.shift(), innerEventQueue.shift(), innerEventQueue.shift());
                }
            } else {
                //he has taken a default transition, so reset the global variable to false and loop again
                hasTakenDefaultTransition = false;
            }
        } while (true)
        isInStableState = true;
    }
    function microstep(e, data, isEnumeratedEvent) {
        var enabledTransitions = [],
            transition = null,
            preemptedBasicStates = {};
        //we set the event as a global, rather than passing it into the function invocation as a parameter,
        //because in cases of default events, the event object will be populated with previous event's data
        if (e !== $default) {
            _event.name = isEnumeratedEvent ? TRIGGER_ID_TO_NAME_MAP[e] : e;
            _event.data = data;
        }
        if (isEnumeratedEvent) {
            //e does not contain a dot, so dispatch as an enumerated event
            for (var N10000_iterator = 0, N10000_hoist = currentConfiguration.length;
            N10000_iterator < N10000_hoist;
            N10000_iterator++) {
                var state = currentConfiguration[N10000_iterator];
                //check to make sure he is not preempted
                if (!(state in preemptedBasicStates)) {
                    //lookup the transition
                    var transition = STATE_TRANSITION_TABLE[state][e]();
                    if (transition) {
                        enabledTransitions.push(transition.action);
                        mixin(transition.preemptedBasicStates, preemptedBasicStates);
                    }
                }
            }
        } else {
            //e contains a dot, so dispatch as a prefix event
            for (var N10000_iterator = 0, N10000_hoist = currentConfiguration.length;
            N10000_iterator < N10000_hoist;
            N10000_iterator++) {
                var state = currentConfiguration[N10000_iterator];
                //check to make sure he is not preempted
                if (!(state in preemptedBasicStates)) {
                    //lookup the transition
                    var transition = $dispatchPrefixEvent(state, e)
                    if (transition) {
                        enabledTransitions.push(transition.action);
                        mixin(transition.preemptedBasicStates, preemptedBasicStates);
                    }
                }
            }
        }
        //invoke selected transitions
        for (var N10000_iterator = 0, N10000_hoist = enabledTransitions.length;
        N10000_iterator < N10000_hoist;
        N10000_iterator++) {
            var t = enabledTransitions[N10000_iterator];
            t();
        }
    }
    function mixin(from, to) {
        for (var prop in from) {
            to[prop] = from[prop]
        }
    }
    this.destroy = function() {
        //right now, this only disables timer and sets global destroyed variable to prevent future callbacks
        window.clearTimeout(mainLoopCallback);
        mainLoopCallback = null;
        destroyed = true;
    }
    //this is for async communication
    this.GEN = function(e, data) {
        outerEventQueue.push(e, data);
    }
    //this may or may not be something we want to expose, but for right now, we at least need it for testing
    this.getCurrentConfiguration = function() {
        //slice it to return a copy of the configuration rather than the conf itself
        //this saves us all kinds of confusion involving references and stuff
        //TODO: refactor this name to be genCurrentConfigurationStatement 
        var currentConfigurationExpression = new Array(currentConfiguration.length);
        for (var N10000_iterator = 0, N10000_hoist = currentConfiguration.length;
        N10000_iterator < N10000_hoist;
        N10000_iterator++) {
            var s = currentConfiguration[N10000_iterator];
            currentConfigurationExpression[N10000_iterator] = STATE_INT_ID_TO_OBJECT_MAP[s];
        }
        return currentConfigurationExpression;
    }
    //public API for In predicate
    this.$in = function(state) {
        return In(state);
    }
    //end static boilerplate code

    function In(state) {
        state = typeof state == "string" ? self._states[state] : state;
        var toReturn;
        if (state.isBasic) {
            toReturn = currentConfiguration.indexOf(state.id) != -1;
        } else {
            var toReturn = false;
            for (var N10000_iterator = 0, N10000_hoist = currentConfiguration.length;
            N10000_iterator < N10000_hoist;
            N10000_iterator++) {
                var s = currentConfiguration[N10000_iterator];
                if (STATE_INT_ID_TO_OBJECT_MAP[s].ancestors.indexOf(state) != -1) {
                    toReturn = true;
                    break;
                }
            }
        }
        return toReturn;
    }
    var listeners = [];
    //TODO:listeners support adding listeners for a particular state
    this.addListener = function(listener) {
        listeners.push(listener);
    }
    this.removeListener = function(listener) {
        listeners.splice(listeners.indexOf(listener), 1);
    }
}
