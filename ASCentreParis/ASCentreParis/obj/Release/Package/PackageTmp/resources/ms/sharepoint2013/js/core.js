function $_global_core() {
    SPAnimation = {};
    SPAnimation.g_Curves = new Array(7);
    SPAnimation.g_Curves[0] = new SPCurve(0, 0, 0, 0, 0, 0);
    SPAnimation.g_Curves[1] = new SPCurve(1, 1, 0, 0, 0, 0);
    SPAnimation.g_Curves[2] = new SPCurve(2, 2, 0, 0, 0, 0);
    SPAnimation.g_Curves[3] = new SPCurve(3, 3, .1, .9, .2, 1);
    SPAnimation.g_Curves[4] = new SPCurve(4, 3, .42, 0, 1, 1);
    SPAnimation.g_Curves[5] = new SPCurve(5, 3, 0, 0, .58, 1);
    SPAnimation.g_Curves[6] = new SPCurve(6, 3, .42, 0, .58, 1);
    SPKeyFrame.prototype = {
        type: 0, curveID: 0, startTime: 0, endTime: 0, startValue: 0, endValue: 0, relativeTo: 0, operationType: 0
    };
    SPAnimation.Attribute = {
        PositionX: 1, PositionY: 2, Height: 3, Width: 4, Opacity: 5
    };
    SPAnimation.ID = {
        Basic_Show: 0, Basic_SlowShow: 1, Basic_Fade: 2, Basic_Move: 3, Basic_Size: 4, Content_SlideInFadeInRight: 5, Content_SlideInFadeInRightInc: 6, Content_SlideOutFadeOutRight: 7, Content_SlideInFadeInLeft: 8, Content_SlideInFadeInLeftInc: 9, SmallObject_SlideInFadeInTop: 10, SmallObject_SlideInFadeInLeft: 11, Test_Instant: 12, Test_Hold: 13, Basic_Opacity: 14, Basic_QuickShow: 15, Basic_QuickFade: 16, Content_SlideInFadeInGeneric: 17, Basic_StrikeThrough: 18, SmallObject_SlideInFadeInBottom: 19, SmallObject_SlideOutFadeOutBottom: 20, Basic_QuickSize: 21
    };
    SPAnimation.g_Animations = new Array(22);
    SPAnimation.g_Animations[SPAnimation.ID.Basic_Show] = new Animation(SPAnimation.ID.Basic_Show, [new SPKeyFrame(SPAnimation.Attribute.Opacity, 2, 0, 367, 0, 1, 1, 0)]);
    SPAnimation.g_Animations[SPAnimation.ID.Basic_SlowShow] = new Animation(SPAnimation.ID.Basic_SlowShow, [new SPKeyFrame(SPAnimation.Attribute.Opacity, 2, 0, 700, 0, 1, 1, 0)]);
    SPAnimation.g_Animations[SPAnimation.ID.Basic_QuickShow] = new Animation(SPAnimation.ID.Basic_QuickShow, [new SPKeyFrame(SPAnimation.Attribute.Opacity, 2, 0, 167, 0, 1, 1, 0)]);
    SPAnimation.g_Animations[SPAnimation.ID.Basic_Fade] = new Animation(SPAnimation.ID.Basic_Fade, [new SPKeyFrame(SPAnimation.Attribute.Opacity, 2, 0, 367, 1, 0, 1, 0)]);
    SPAnimation.g_Animations[SPAnimation.ID.Basic_QuickFade] = new Animation(SPAnimation.ID.Basic_QuickFade, [new SPKeyFrame(SPAnimation.Attribute.Opacity, 2, 0, 167, 1, 0, 1, 0)]);
    SPAnimation.g_Animations[SPAnimation.ID.Basic_Move] = new Animation(SPAnimation.ID.Basic_Move, [new SPKeyFrame(SPAnimation.Attribute.PositionX, 3, 0, 367, null, 0, 1, 1), new SPKeyFrame(SPAnimation.Attribute.PositionY, 3, 0, 367, null, 0, 1, 1)]);
    SPAnimation.g_Animations[SPAnimation.ID.Basic_Size] = new Animation(SPAnimation.ID.Basic_Size, [new SPKeyFrame(SPAnimation.Attribute.Width, 3, 0, 367, null, 0, 1, 1), new SPKeyFrame(SPAnimation.Attribute.Height, 3, 0, 367, null, 0, 1, 1)]);
    SPAnimation.g_Animations[SPAnimation.ID.Basic_QuickSize] = new Animation(SPAnimation.ID.Basic_QuickSize, [new SPKeyFrame(SPAnimation.Attribute.Width, 3, 0, 167, null, 0, 1, 1), new SPKeyFrame(SPAnimation.Attribute.Height, 3, 0, 167, null, 0, 1, 1)]);
    SPAnimation.g_Animations[SPAnimation.ID.Content_SlideInFadeInRight] = new Animation(SPAnimation.ID.Content_SlideInFadeInRight, [new SPKeyFrame(SPAnimation.Attribute.Opacity, 2, 0, 367, 0, 1, 1, 0), new SPKeyFrame(SPAnimation.Attribute.PositionX, 0, 0, 1, null, -100, 0, 1), new SPKeyFrame(SPAnimation.Attribute.PositionX, 3, 1, 367, null, 0, 0, 1)]);
    SPAnimation.g_Animations[SPAnimation.ID.Content_SlideInFadeInRightInc] = new Animation(SPAnimation.ID.Content_SlideInFadeInRightInc, [new SPKeyFrame(SPAnimation.Attribute.Opacity, 2, 0, 367, 0, 1, 1, 0), new SPKeyFrame(SPAnimation.Attribute.PositionX, 3, 0, 367, null, 100, 0, 1)]);
    SPAnimation.g_Animations[SPAnimation.ID.Content_SlideOutFadeOutRight] = new Animation(SPAnimation.ID.Content_SlideOutFadeOutRight, [new SPKeyFrame(SPAnimation.Attribute.Opacity, 0, 0, 1, 1, 0, 1, 0)]);
    SPAnimation.g_Animations[SPAnimation.ID.Content_SlideInFadeInLeft] = new Animation(SPAnimation.ID.Content_SlideInFadeInLeft, [new SPKeyFrame(SPAnimation.Attribute.Opacity, 2, 0, 367, 0, 1, 1, 0), new SPKeyFrame(SPAnimation.Attribute.PositionX, 0, 0, 1, null, 100, 0, 1), new SPKeyFrame(SPAnimation.Attribute.PositionX, 3, 1, 367, null, 0, 0, 1)]);
    SPAnimation.g_Animations[SPAnimation.ID.Content_SlideInFadeInLeftInc] = new Animation(SPAnimation.ID.Content_SlideInFadeInLeftInc, [new SPKeyFrame(SPAnimation.Attribute.Opacity, 2, 0, 367, 0, 1, 1, 0), new SPKeyFrame(SPAnimation.Attribute.PositionX, 3, 0, 367, null, -100, 0, 1)]);
    SPAnimation.g_Animations[SPAnimation.ID.SmallObject_SlideInFadeInTop] = new Animation(SPAnimation.ID.SmallObject_SlideInFadeInTop, [new SPKeyFrame(SPAnimation.Attribute.Opacity, 2, 0, 167, 0, 1, 1, 0), new SPKeyFrame(SPAnimation.Attribute.PositionY, 0, 0, 1, null, -40, 0, 1), new SPKeyFrame(SPAnimation.Attribute.PositionY, 3, 1, 167, null, 0, 0, 1)]);
    SPAnimation.g_Animations[SPAnimation.ID.SmallObject_SlideInFadeInLeft] = new Animation(SPAnimation.ID.SmallObject_SlideInFadeInLeft, [new SPKeyFrame(SPAnimation.Attribute.Opacity, 2, 0, 167, 0, 1, 1, 0), new SPKeyFrame(SPAnimation.Attribute.PositionX, 0, 0, 1, null, 40, 0, 1), new SPKeyFrame(SPAnimation.Attribute.PositionX, 3, 1, 167, null, 0, 0, 1)]);
    SPAnimation.g_Animations[SPAnimation.ID.Test_Instant] = new Animation(SPAnimation.ID.Test_Instant, [new SPKeyFrame(SPAnimation.Attribute.PositionX, 0, 0, 367, null, 1, 1, 0), new SPKeyFrame(SPAnimation.Attribute.PositionY, 0, 0, 367, null, 1, 1, 0)]);
    SPAnimation.g_Animations[SPAnimation.ID.Test_Hold] = new Animation(SPAnimation.ID.Test_Hold, [new SPKeyFrame(SPAnimation.Attribute.PositionX, 1, 0, 367, null, 1, 1, 0), new SPKeyFrame(SPAnimation.Attribute.PositionY, 1, 0, 367, null, 1, 1, 0)]);
    SPAnimation.g_Animations[SPAnimation.ID.Basic_Opacity] = new Animation(SPAnimation.ID.Basic_Opacity, [new SPKeyFrame(SPAnimation.Attribute.Opacity, 2, 0, 367, null, 1, 1, 0)]);
    SPAnimation.g_Animations[SPAnimation.ID.Content_SlideInFadeInGeneric] = new Animation(SPAnimation.ID.Content_SlideInFadeInGeneric, [new SPKeyFrame(SPAnimation.Attribute.Opacity, 2, 0, 367, 0, 1, 1, 0), new SPKeyFrame(SPAnimation.Attribute.PositionX, 3, 0, 367, null, 1, 1, 0), new SPKeyFrame(SPAnimation.Attribute.PositionY, 3, 0, 367, null, 1, 1, 0)]);
    SPAnimation.g_Animations[SPAnimation.ID.Basic_StrikeThrough] = new Animation(SPAnimation.ID.Basic_StrikeThrough, [new SPKeyFrame(SPAnimation.Attribute.Width, 3, 0, 167, null, 0, 1, 1)]);
    SPAnimation.g_Animations[SPAnimation.ID.SmallObject_SlideInFadeInBottom] = new Animation(SPAnimation.ID.SmallObject_SlideInFadeInBottom, [new SPKeyFrame(SPAnimation.Attribute.Opacity, 2, 0, 167, 0, 1, 1, 0), new SPKeyFrame(SPAnimation.Attribute.PositionY, 0, 0, 1, null, 40, 0, 1), new SPKeyFrame(SPAnimation.Attribute.PositionY, 3, 1, 167, null, 0, 0, 1)]);
    SPAnimation.g_Animations[SPAnimation.ID.SmallObject_SlideOutFadeOutBottom] = new Animation(SPAnimation.ID.SmallObject_SlideOutFadeOutBottom, [new SPKeyFrame(SPAnimation.Attribute.Opacity, 2, 0, 167, 1, 0, 1, 0), new SPKeyFrame(SPAnimation.Attribute.PositionY, 0, 0, 1, null, 0, 0, 1), new SPKeyFrame(SPAnimation.Attribute.PositionY, 3, 1, 167, null, 40, 0, 1)]);
    SPAnimation.g_AnimationEngine = function () {
        return null
    }
    ();
    SPAnimation.Logging = window.location.search.indexOf("AnimationLogging=1") != -1;
    SPAnimation.g_AnimationWSA = null;
    SPAnimation.DATAID_SPANIMATION = 9423;
    SPAnimation.g_AnimationThrottleCutoffFPS = 11;
    SPAnimation.g_AnimationThrottleNumInstance = 3;
    !IsNullOrUndefined(window.sessionStorage) && IsNullOrUndefined(window.sessionStorage.SPAnimationEnabled) && TrySetProperty(window.sessionStorage, "SPAnimationEnabled", 1);
    !IsNullOrUndefined(window.localStorage) && IsNullOrUndefined(window.localStorage.SPAnimationEnabled) && TrySetProperty(window.localStorage, "SPAnimationEnabled", 1);
    SPAnimation.Settings = {};
    SPAnimation.Settings.EnableAnimation = function () {
        TrySetProperty(window.sessionStorage, "SPAnimationEnabled", 1);
        TrySetProperty(window.localStorage, "SPAnimationEnabled", 1);
        typeof UpdateAnimationUserControl != "undefined" && UpdateAnimationUserControl(false)
    };
    SPAnimation.Settings.DisableAnimation = function () {
        TrySetProperty(window.localStorage, "SPAnimationEnabled", 0);
        typeof UpdateAnimationUserControl != "undefined" && UpdateAnimationUserControl(false)
    };
    SPAnimation.Settings.DisableSessionAnimation = function () {
        TrySetProperty(window.sessionStorage, "SPAnimationEnabled", 0);
        typeof UpdateAnimationUserControl != "undefined" && UpdateAnimationUserControl(false)
    };
    SPAnimation.Settings.IsAnimationEnabled = function () {
        var a = IsNullOrUndefined(window.sessionStorage) ? false : window.sessionStorage.SPAnimationEnabled == 1, b = IsNullOrUndefined(window.localStorage) ? false : window.localStorage.SPAnimationEnabled == 1;
        return a && b
    };
    UpdateAnimationStateFromQuery();
    SPAnimation.State = SPAnimation_State;
    SPAnimation.Object = SPAnimation_Object;
    AnimationEngine.prototype = {
        AnimationQueue: new Array(0), sharedTimer: null, sharedCancelTimer: null, frameInterval: 1e3 / 60, resetInterval: 3e4, sharedTimerRefs: 0, conflictTable: new Array(0), currentAnimationIndex: -1, temporaryIDGenerator: 0
    };
    AnimationEngine.prototype.LocalStepper = function () {
        SPAnimation.g_AnimationEngine.StepAllAnimations()
    };
    AnimationEngine.prototype.LocalStopper = function () {
        SPAnimation.g_AnimationEngine.StopEngine()
    };
    AnimationEngine.prototype.StartEngine = function () {
        if (this.sharedTimer != null || this.sharedCancelTimer != null || this.sharedTimerRefs != 0) return;
        this.sharedTimer = window.setInterval(AnimationEngine.prototype.LocalStepper, this.frameInterval);
        this.sharedCancelTimer = window.setTimeout(AnimationEngine.prototype.LocalStopper, this.resetInterval);
        this.sharedTimerRefs = 0;
        SPAnimation.g_TelemetryObject.Start()
    };
    AnimationEngine.prototype.StopEngine = function () {
        SPAnimation.g_TelemetryObject.Stop();
        if (this.sharedCancelTimer != null) {
            window.clearTimeout(this.sharedCancelTimer);
            this.sharedCancelTimer = null
        }
        if (this.sharedTimer != null) {
            window.clearInterval(this.sharedTimer);
            this.sharedTimer = null
        }
        this.sharedTimerRefs = 0;
        this.conflictTable = new Array(0)
    };
    AnimationEngine.prototype.StartAnimation = function (a) {
        this.AnimationQueue[this.sharedTimerRefs++] = a
    };
    AnimationEngine.prototype.StopAnimation = function (b) {
        for (var a = 0;
        a < this.AnimationQueue.length;
        a++) if (this.AnimationQueue[a] == b) {
            this.RemoveTemporaryIds(b);
            this.AnimationQueue[a] = null
        }

    };
    AnimationEngine.prototype.StepAllAnimations = function () {
        for (var c = false, b = null, a = 0;
        a < this.AnimationQueue.length;
        a++) if (this.AnimationQueue[a] != null) {
            if (IsNullOrUndefined(b)) b = this.AnimationQueue[a].currentTime;
            this.currentAnimationIndex = a;
            this.AnimationQueue[a].StepAnimation();
            c = true
        }
        this.currentAnimationIndex = -1;
        c && !IsNullOrUndefined(b) && SPAnimation.g_TelemetryObject.AddPerfData(new Date - b);
        !c && this.StopEngine()
    };
    AnimationEngine.prototype.CheckForConflictingAnimations = function (e, i) {
        if (e.id == null || e.id == "") {
            var k = "tempAnimID_" + String(this.temporaryIDGenerator);
            this.temporaryIDGenerator++;
            e.id = k
        }
        var j = e.id + "_" + String(i), d = this.conflictTable[j];
        if (IsNullOrUndefined(d) || d == this.currentAnimationIndex || this.AnimationQueue[d] == null) this.conflictTable[j] = this.currentAnimationIndex;
        else {
            var a = this.AnimationQueue[d];
            a.curveID.SetAttribute(i, null);
            var b = this.AnimationQueue[this.currentAnimationIndex], f = a.finishFunc, g = a.extraData, c = b.finishFunc, h = b.extraData;
            b.finishFunc = f == null ? c == null ? function () {
                a.StopAnimation()
            }
            : function () {
                c(h);
                a.StopAnimation()
            }
            : c == null ? function () {
                f(g);
                a.StopAnimation()
            }
            : function () {
                f(g);
                c(h);
                a.StopAnimation()
            };
            b.extraData = null;
            a.finishFunc = null
        }

    };
    AnimationEngine.prototype.RemoveTemporaryIds = function (b) {
        var a;
        if (IsArray(b.element)) for (var d = b.element.length, c = 0;
        c < d;
        c++) {
            a = b.element[c];
            if (a.id.indexOf("tempAnimID_") == 0) a.id == null
        }
        else {
            a = b.element;
            if (a.id.indexOf("tempAnimID_") == 0) a.id == null
        }

    };
    SPAnimation_State.prototype = {
        Index: 0, Data: new Array(0)
    };
    SPAnimation_State.prototype.SetAttribute = function (a, b) {
        var c = this.GetDataIndex(a);
        if (c == -1) {
            var d = this.Data.length;
            this.Index += a * Math.pow(10, d);
            this.Data[d] = b
        }
        else this.Data[c] = b
    };
    SPAnimation_State.prototype.GetAttribute = function (b) {
        var a = this.GetDataIndex(b);
        return a == -1 ? null : this.Data[a]
    };
    SPAnimation_State.prototype.GetDataIndex = function (c) {
        var b = 0, a = this.Index;
        while (a != 0) {
            var d = a % 10;
            if (d == c) return b;
            a = Math.floor(a / 10);
            b++
        }
        return -1
    };
    SPAnimation_Object.prototype = {
        animationID: -1, delay: 0, element: null, finalState: null, finishFunc: null, extraData: null, arrAnimationUnits: null, idxAnimUnit: 0
    };
    SPAnimation_Object.prototype.Initialize = function (a, f, e, b, c, d) {
        this.animationID = a;
        this.delay = f;
        this.element = e;
        this.finalState = b;
        this.finishFunc = c;
        this.extraData = d;
        this.arrAnimationUnits = new Array(0);
        this.idxAnimUnit = 0
    };
    SPAnimation_Object.prototype.RunAnimation = function () {
        if (this.ValidateParametersForAnimation()) {
            var a;
            if (SPAnimation.Settings.IsAnimationEnabled()) {
                this.GenerateAnimationUnits();
                a = this.arrAnimationUnits.length;
                for (var c = 0;
                c < a;
                c++) this.arrAnimationUnits[c].StartAnimation()
            }
            else {
                var d = SPAnimation.g_Animations[this.animationID];
                if (IsArray(this.element)) {
                    a = this.element.length;
                    for (var b = 0;
                    b < a;
                    b++) this.AdvanceToFinalState(b, d)
                }
                else this.AdvanceToFinalState(-1, d);
                this.finishFunc != null && this.finishFunc(this.extraData);
                typeof ExecuteOrDelayUntilScriptLoaded == "function" && ExecuteOrDelayUntilScriptLoaded(function () {
                    var a = GetAnimationWSA();
                    WSAEnabled() && !IsNullOrUndefined(a) && a.addToStreamDw(SPAnimation.DATAID_SPANIMATION, Number(SPAnimation.Settings.IsAnimationEnabled()), 0, 0, 0, 0, 0, 0, 0)
                }
                , "SP.core.js")
            }

        }

    };
    SPAnimation_Object.prototype.ValidateParametersForAnimation = function () {
        var a = true;
        if (this.animationID == -1 || this.element == null) a = false;
        else if (IsArray(this.element)) {
            for (var c = this.element.length, b = 0;
            b < c;
            b++) if (typeof this.element[b].style == "undefined") {
                a = false;
                break
            }

        }
        else if (typeof this.element.style == "undefined") a = false;
        return a
    };
    SPAnimation_Object.prototype.AdvanceToFinalState = function (f, d) {
        for (var c = new SPAnimation_State, j = d.keyFrames.length, b = 0;
        b < j;
        b++) {
            var e = d.keyFrames[b];
            c.SetAttribute(e.type, this.GetFinalValue(e, f))
        }
        for (var h = 5, i = IsArray(this.element) ? this.element[f] : this.element, a = 1;
        a <= h;
        a++) {
            var g = c.GetAttribute(a);
            g != null && AnimationUnit.prototype.SetStyle(a, i, g)
        }

    };
    SPAnimation_Object.prototype.GenerateAnimationUnits = function () {
        for (var i = SPAnimation.g_Animations[this.animationID], e = null, j = i.keyFrames.length, c = null, h = 0;
        h < j;
        h++) {
            var a = i.keyFrames[h], f = this.FindMatchingAnimationUnit(a), d, g;
            if (f != null) {
                f.startValue.SetAttribute(a.type, a.startValue);
                f.curveID.SetAttribute(a.type, a.curveID);
                if (IsArray(this.element)) {
                    g = this.element.length;
                    for (d = 0;
                    d < g;
                    d++) {
                        c = this.GetFinalValue(a, d);
                        if (IsNullOrUndefined(c)) {
                            f.curveID.SetAttribute(a.type, null);
                            break
                        }
                        else f.targetValue[d].SetAttribute(a.type, c)
                    }

                }
                else {
                    c = this.GetFinalValue(a, -1);
                    if (IsNullOrUndefined(c)) f.curveID.SetAttribute(a.type, null);
                    else f.targetValue.SetAttribute(a.type, c)
                }

            }
            else {
                var b = new AnimationUnit(this.element, a.startTime + this.delay, a.endTime - a.startTime, null, null);
                b.startValue.SetAttribute(a.type, a.startValue);
                b.curveID.SetAttribute(a.type, a.curveID);
                if (IsArray(this.element)) {
                    g = this.element.length;
                    for (d = 0;
                    d < g;
                    d++) {
                        if (b.targetValue == null) b.targetValue = new Array(this.element.length);
                        if (b.targetValue[d] == null) b.targetValue[d] = new SPAnimation_State;
                        c = this.GetFinalValue(a, d);
                        if (IsNullOrUndefined(c)) {
                            b.curveID.SetAttribute(a.type, null);
                            break
                        }
                        else b.targetValue[d].SetAttribute(a.type, c)
                    }

                }
                else {
                    if (b.targetValue == null) b.targetValue = new SPAnimation_State;
                    c = this.GetFinalValue(a, -1);
                    if (IsNullOrUndefined(c)) b.curveID.SetAttribute(a.type, null);
                    else b.targetValue.SetAttribute(a.type, c)
                }
                if (e == null || e.delay + e.duration <= b.delay + b.duration) e = b;
                this.arrAnimationUnits[this.idxAnimUnit++] = b
            }

        }
        if (e != null) {
            e.finishFunc = this.finishFunc;
            e.extraData = this.extraData
        }

    };
    SPAnimation_Object.prototype.FindMatchingAnimationUnit = function (b) {
        for (var d = this.arrAnimationUnits.length, c = 0;
        c < d;
        c++) {
            var a = this.arrAnimationUnits[c];
            if (a.delay == b.startTime + this.delay && a.duration == b.endTime - b.startTime) return a
        }
        return null
    };
    SPAnimation_Object.prototype.GetFinalValue = function (a, e) {
        var b = null;
        if (!IsNullOrUndefined(a.endValue)) switch (a.relativeTo) {
            case 0: var g = IsArray(this.element) ? this.element[e] : this.element, d = a.startValue == null ? GetCurrentAttributeValue(g, a.type) : a.startValue;
                b = a.operationType == 0 ? a.endValue * d : a.endValue + d;
                break;
            case 1: var f = IsArray(this.element) ? this.finalState[e] : this.finalState, c = f.GetAttribute(a.type);
                if (!IsNullOrUndefined(c)) b = a.operationType == 0 ? a.endValue * c : a.endValue + c;
                break;
            case 2: b = a.endValue
        }
        return b
    };
    AnimationUnit.prototype = {
        element: null, delay: 0, duration: 0, startValue: null, perElementStartValue: null, targetValue: null, curveID: null, finishFunc: null, extraData: null, startTime: null, fIsExecuting: false
    };
    AnimationUnit.prototype.Initialize = function (d, e, c, a, b) {
        this.element = d;
        this.delay = e;
        this.duration = c;
        this.finishFunc = a;
        this.extraData = b;
        this.startValue = new SPAnimation_State;
        this.perElementStartValue = null;
        this.targetValue = null;
        this.curveID = new SPAnimation_State;
        this.startTime = null;
        this.fIsExecuting = false
    };
    AnimationUnit.prototype.StartAnimation = function () {
        if (SPAnimation.g_AnimationEngine == null) SPAnimation.g_AnimationEngine = new AnimationEngine;
        SPAnimation.g_AnimationEngine.sharedTimer == null && SPAnimation.g_AnimationEngine.StartEngine();
        this.startTime = new Date;
        this.currentTime = new Date;
        SPAnimation.g_AnimationEngine.StartAnimation(this)
    };
    AnimationUnit.prototype.StopAnimation = function () {
        SPAnimation.g_AnimationEngine.StopAnimation(this)
    };
    AnimationUnit.prototype.StepAnimation = function () {
        this.currentTime = new Date;
        var g = Number(this.currentTime) - Number(this.startTime);
        if (g < this.delay) return;
        g -= this.delay;
        for (var j = false, k = !this.fIsExecuting, m = 5, a = 1;
        a <= m;
        a++) {
            var l = this.curveID.GetAttribute(a);
            if (IsNullOrUndefined(l)) continue;
            var i = this.PositionFunction(g, this.duration, l), b, c, d, f, h;
            if (IsArray(this.element)) for (var n = this.element.length, e = 0;
            e < n;
            e++) {
                f = this.element[e];
                b = this.startValue.GetAttribute(a);
                h = this.targetValue[e];
                c = h.GetAttribute(a);
                if (IsNullOrUndefined(b)) {
                    if (this.perElementStartValue == null) this.perElementStartValue = new Array(this.element.length);
                    if (IsNullOrUndefined(this.perElementStartValue[e])) this.perElementStartValue[e] = new SPAnimation_State;
                    b = this.perElementStartValue[e].GetAttribute(a);
                    if (IsNullOrUndefined(b)) {
                        b = GetCurrentAttributeValue(f, a);
                        this.perElementStartValue[e].SetAttribute(a, b)
                    }

                }
                if (isNaN(b)) {
                    SPAnimation.g_TelemetryObject.LogData("Unexpected: bogus start value for element " + String(f.id) + ", attribute " + String(a));
                    d = c
                }
                else d = b + i * (c - b);
                if (g > this.duration || i > 1) {
                    d = c;
                    j = true
                }
                k && SPAnimation.g_AnimationEngine.CheckForConflictingAnimations(f, a);
                this.SetStyle(a, f, d)
            }
            else {
                f = this.element;
                b = this.startValue.GetAttribute(a);
                h = this.targetValue;
                c = h.GetAttribute(a);
                if (IsNullOrUndefined(b)) {
                    b = GetCurrentAttributeValue(this.element, a);
                    this.startValue.SetAttribute(a, b)
                }
                if (isNaN(b)) {
                    SPAnimation.g_TelemetryObject.LogData("Unexpected: bogus start value for element " + String(this.element.id) + ", attribute " + String(a));
                    d = c
                }
                else d = b + i * (c - b);
                if (g > this.duration || i > 1) {
                    d = c;
                    j = true;
                    SPAnimation.g_TelemetryObject.LogData("done")
                }
                k && SPAnimation.g_AnimationEngine.CheckForConflictingAnimations(this.element, a);
                this.SetStyle(a, this.element, d)
            }

        }
        this.fIsExecuting = true;
        if (j) {
            this.StopAnimation();
            if (this.finishFunc != null) {
                SPAnimation.g_TelemetryObject.LogData("calling fnishfunc");
                this.finishFunc(this.extraData)
            }

        }

    };
    AnimationUnit.prototype.PositionFunction = function (c, d, e) {
        var a = 0, b = SPAnimation.g_Curves[e];
        switch (b.type) {
            case 0: a = 1;
                break;
            case 1: a = c < d ? 0 : 1;
                break;
            case 2: a = c / d;
                break;
            case 3: a = BezierFunction(b.x1, b.y1, b.x2, b.y2, c / d)
        }
        return a
    };
    AnimationUnit.prototype.SetStyle = function (c, b, a) {
        switch (c) {
            case 1: this.StyleLeftSetter(b, a);
                break;
            case 2: this.StyleTopSetter(b, a);
                break;
            case 3: this.StyleHeightSetter(b, a);
                break;
            case 4: this.StyleWidthSetter(b, a);
                break;
            case 5: this.StyleOpacitySetter(b, a)
        }

    };
    AnimationUnit.prototype.StyleLeftSetter = function (b, a) {
        if (fRightToLeft) b.style.right = String(a) + "px";
        else b.style.left = String(a) + "px";
        SPAnimation.Logging && SPAnimation.g_TelemetryObject.LogData("element: " + b.id + ", " + (fRightToLeft ? "right" : "left") + ": " + String(a) + ", timestamp: " + String(Number(new Date)))
    };
    AnimationUnit.prototype.StyleTopSetter = function (a, b) {
        a.style.top = String(b) + "px";
        SPAnimation.Logging && SPAnimation.g_TelemetryObject.LogData("element: " + a.id + ", top: " + String(a.style.top) + ", timestamp: " + String(Number(new Date)))
    };
    AnimationUnit.prototype.StyleHeightSetter = function (a, b) {
        a.style.height = String(b) + "px";
        SPAnimation.Logging && SPAnimation.g_TelemetryObject.LogData("element: " + a.id + ", height: " + String(a.style.height) + ", timestamp: " + String(Number(new Date)))
    };
    AnimationUnit.prototype.StyleWidthSetter = function (a, b) {
        a.style.width = String(b) + "px";
        SPAnimation.Logging && SPAnimation.g_TelemetryObject.LogData("element: " + a.id + ", width: " + String(a.style.width) + ", timestamp: " + String(Number(new Date)))
    };
    AnimationUnit.prototype.StyleOpacitySetter = function (b, a) {
        SetOpacity(b, a);
        SPAnimation.Logging && SPAnimation.g_TelemetryObject.LogData("element: " + b.id + ", opacity: " + String(a) + ", timestamp: " + String(Number(new Date)))
    };
    AnimationTelemetry.prototype = {
        perfData: null, logData: null, perfDataIndex: 0, logDataIndex: 0, animationIndex: 0, startTime: null, duration: null, numUnits: 0
    };
    AnimationTelemetry.prototype.Start = function () {
        this.startTime = new Date;
        this.perfDataIndex = 0;
        this.logDataIndex = 0
    };
    AnimationTelemetry.prototype.Stop = function () {
        this.duration = Number(new Date) - Number(this.startTime);
        this.numUnits = SPAnimation.g_AnimationEngine.sharedTimerRefs;
        this.CalculateAndShowStatistics();
        this.perfDataIndex = 0;
        this.logDataIndex = 0
    };
    AnimationTelemetry.prototype.AddPerfData = function (a) {
        this.perfData[this.perfDataIndex++] = a
    };
    AnimationTelemetry.prototype.LogData = function (a) {
        this.logData[this.logDataIndex++] = a
    };
    AnimationTelemetry.prototype.CalculateStatistics = function () {
        var h = 0, j = 0, i = 0, e = 0, c = 0, l = "", k = "", f = this.duration;
        if (IsNullOrUndefined(f)) f = Number(new Date) - Number(this.startTime);
        if (SPAnimation.Logging && this.logDataIndex > 0) for (var m = this.logDataIndex, a = 0;
        a < m;
        a++) {
            if (a != 0) l += "<br/>";
            l += this.logData[a]
        }
        if (this.perfDataIndex > 0) {
            j = Number.MAX_VALUE;
            i = Number.MIN_VALUE;
            var d = this.perfDataIndex;
            for (a = 0;
            a < d;
            a++) {
                if (this.perfData[a] < j) j = this.perfData[a];
                if (this.perfData[a] > i) i = this.perfData[a];
                e += this.perfData[a];
                if (a != 0) k += ", ";
                k += this.perfData[a]
            }
            if (d > 1) e /= d - 1;
            e = Math.round(e * 100) / 100;
            for (a = 0;
            a < d;
            a++) {
                var g = this.perfData[a] - e;
                g = g * g;
                c += g
            }
            if (d > 1) c /= d - 1;
            c = Math.sqrt(c);
            c = Math.round(c * 100) / 100;
            h = this.perfDataIndex / f * 1e3;
            h = Math.round(h)
        }
        var b = new Array(9);
        b[0] = f;
        b[1] = h;
        b[2] = j;
        b[3] = i;
        b[4] = e;
        b[5] = c;
        b[6] = k;
        b[7] = l;
        b[8] = this.numUnits;
        return b
    };
    AnimationTelemetry.prototype.CalculateAndShowStatistics = function () {
        var a = this.CalculateStatistics();
        SPAnimation.g_LastAnimationTelemetryData = a;
        this.ShowAnimationStats(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8]);
        typeof ExecuteOrDelayUntilScriptLoaded == "function" && ExecuteOrDelayUntilScriptLoaded(function () {
            var b = GetAnimationWSA();
            WSAEnabled() && !IsNullOrUndefined(b) && b.addToStreamDw(SPAnimation.DATAID_SPANIMATION, Number(SPAnimation.Settings.IsAnimationEnabled()), a[0], a[1], a[2], a[3], Math.round(a[4]), Math.round(a[5]), a[8])
        }
        , "SP.core.js");
        if (!IsNullOrUndefined(window.sessionStorage)) if (a[1] < SPAnimation.g_AnimationThrottleCutoffFPS) {
            TrySetProperty(window.sessionStorage, "SPAnimationThrottleCounter", IsNullOrUndefined(window.sessionStorage.SPAnimationThrottleCounter) ? 1 : Number(window.sessionStorage.SPAnimationThrottleCounter) + 1);
            if (window.sessionStorage.SPAnimationThrottleCounter >= SPAnimation.g_AnimationThrottleNumInstance) {
                SPAnimation.Settings.DisableSessionAnimation();
                TrySetProperty(window.sessionStorage, "SPAnimationThrottleCounter", 0)
            }

        }
        else TrySetProperty(window.sessionStorage, "SPAnimationThrottleCounter", 0)
    };
    AnimationTelemetry.prototype.ShowAnimationStats = function (g, s, v, u, r, k, q, t, h) {
        this.animationIndex++;
        var b = String(this.animationIndex);
        if (typeof DeveloperDashboard != "undefined" && typeof DeveloperDashboard.PostMsg != "undefined") {
            var a = typeof Strings != "undefined" && typeof Strings.STS != "undefined", f = a && typeof Strings.STS.L_DevDashAnimation_Duration != "undefined" ? Strings.STS.L_DevDashAnimation_Duration : "Duration", n = a && typeof Strings.STS.L_DevDashAnimation_FPS != "undefined" ? Strings.STS.L_DevDashAnimation_FPS : "FPS", p = a && typeof Strings.STS.L_DevDashAnimation_Min != "undefined" ? Strings.STS.L_DevDashAnimation_Min : "Min", o = a && typeof Strings.STS.L_DevDashAnimation_Max != "undefined" ? Strings.STS.L_DevDashAnimation_Max : "Max", m = a && typeof Strings.STS.L_DevDashAnimation_Avg != "undefined" ? Strings.STS.L_DevDashAnimation_Avg : "Average", j = a && typeof Strings.STS.L_DevDashAnimation_Stddev != "undefined" ? Strings.STS.L_DevDashAnimation_Stddev : "Standard Dev", l = a && typeof Strings.STS.L_DevDashAnimation_NumUnits != "undefined" ? Strings.STS.L_DevDashAnimation_NumUnits : "#Units", i = a && typeof Strings.STS.L_DevDashAnimation_AllFrames != "undefined" ? Strings.STS.L_DevDashAnimation_AllFrames : "All Frames:", d = a && typeof Strings.STS.L_DevDashAnimation_Header != "undefined" ? Strings.STS.L_DevDashAnimation_Header : "Animation", c = a && typeof Strings.STS.L_DevDashAnimation_Millisec != "undefined" ? Strings.STS.L_DevDashAnimation_Millisec : "ms", e = "<div class='ms-dd-anim'><div class='ms-dd-anim-header'>" + d + " " + b + "</div><table class='ms-dd-anim-table'><tr><td>" + f + "</td><td>" + n + "</td><td>" + p + "</td><td>" + o + "</td><td>" + m + "</td><td>" + j + "</td><td>" + l + "</td></tr><tr><td><span id='duration" + b + "'>" + String(g) + c + "</span></td><td><span id='fps" + b + "'>" + String(s) + "</span></td><td><span id='min" + b + "'>" + String(v) + c + "</span></td><td><span id='max" + b + "'>" + String(u) + c + "</span></td><td><span id='avg" + b + "'>" + String(r) + c + "</span></td><td><span id='stddev" + b + "'>" + String(k) + "</span></td><td><span id='numunit" + b + "'>" + String(h) + "</span></td></tr><tr><td colspan='7'><div id='all" + b + "'> " + i + q + "</div></td></tr><tr><td colspan='7'><div id='log" + b + "'>" + t + "</div></td></tr></table></div>";
            DeveloperDashboard.PostMsg("MS.AnimationTelemetry", "AddAnimationData", e)
        }

    };
    SPAnimation.g_TelemetryObject = new AnimationTelemetry;
    SPAnimation.g_LastAnimationTelemetryData = null;
    SPAnimationUtility = {};
    SPAnimationUtility.BasicAnimator = {};
    SPAnimationUtility.BasicAnimator.FadeIn = function (a, c, d) {
        if (a == null) return;
        SetOpacity(a, 0);
        if (a.style.display == "none") a.style.display = "";
        if (a.style.visibility == "hidden") a.style.visibility = "";
        var b = new SPAnimation.State;
        b.SetAttribute(SPAnimation.Attribute.Opacity, 1);
        var e = new SPAnimation.Object(SPAnimation.ID.Basic_QuickShow, 0, a, b, c, d);
        e.RunAnimation()
    };
    SPAnimationUtility.BasicAnimator.FadeOut = function (a, c, d) {
        if (a == null) return;
        var b = new SPAnimation.State;
        b.SetAttribute(SPAnimation.Attribute.Opacity, 0);
        var e = new SPAnimation.Object(SPAnimation.ID.Basic_QuickFade, 0, a, b, c, d);
        e.RunAnimation()
    };
    SPAnimationUtility.BasicAnimator.Move = function (a, c, d, e, f) {
        if (a == null) return;
        var g = c == null ? pxToNum(a.style.left) : c, h = d == null ? pxToNum(a.style.top) : d, b = new SPAnimation.State;
        b.SetAttribute(SPAnimation.Attribute.PositionX, g);
        b.SetAttribute(SPAnimation.Attribute.PositionY, h);
        var i = new SPAnimation.Object(SPAnimation.ID.Basic_Move, 0, a, b, e, f);
        i.RunAnimation()
    };
    SPAnimationUtility.BasicAnimator.StrikeThrough = function (a, h, l, m) {
        if (a == null) return;
        var r = SPAnimationUtility.BasicAnimator.GetTopOffset(a), q = SPAnimationUtility.BasicAnimator.GetLeftOffset(a), s = SPAnimationUtility.BasicAnimator.GetRightOffset(a), d = a.offsetWidth, g = a.offsetHeight;
        if (h == null) h = d;
        var f = document.createElement("div"), e = document.createElement("div");
        e.style.overflow = "hidden";
        var b = document.createElement("div");
        b.style.overflow = "hidden";
        var i = a.cloneNode(true);
        i.style.textDecoration = "line-through";
        e.appendChild(i);
        var c = a.cloneNode(true);
        b.appendChild(c);
        f.appendChild(b);
        f.appendChild(e);
        a.parentNode.appendChild(f);
        a.style.visibility = "hidden";
        SPAnimationUtility.BasicAnimator.PositionAbsoluteExact(f, r, q, g, d);
        var p = 8;
        SPAnimationUtility.BasicAnimator.PositionAbsoluteExact(e, 0, 0, g, p);
        SPAnimationUtility.BasicAnimator.PositionAbsoluteExact(b, 0, 0, g, d);
        SPAnimationUtility.BasicAnimator.PositionAbsoluteExact(i, 0, 0, g, d);
        SPAnimationUtility.BasicAnimator.PositionAbsoluteExact(c, 0, 0, g, d);
        if (!fRightToLeft) {
            b.style.left = c.style.left = "";
            b.style.right = c.style.right = "0px"
        }
        else {
            b.style.right = c.style.right = "";
            b.style.left = c.style.left = "0px"
        }
        var k = new SPAnimation.State;
        k.SetAttribute(SPAnimation.Attribute.Width, d - h);
        var o = new SPAnimation.Object(SPAnimation.ID.Basic_StrikeThrough, 0, b, k, null, m);
        o.RunAnimation();
        var j = new SPAnimation.State;
        j.SetAttribute(SPAnimation.Attribute.Width, h);
        var n = new SPAnimation.Object(SPAnimation.ID.Basic_StrikeThrough, 0, e, j, function () {
            a.style.textDecoration = "line-through";
            a.style.visibility = "";
            a.parentNode.removeChild(f);
            l != null && l()
        }
        , m);
        n.RunAnimation()
    };
    SPAnimationUtility.BasicAnimator.PositionAbsolute = function (a) {
        if (a == null) return;
        var e = SPAnimationUtility.BasicAnimator.GetTopOffset(a), d = fRightToLeft ? SPAnimationUtility.BasicAnimator.GetRightOffset(a) : SPAnimationUtility.BasicAnimator.GetLeftOffset(a), c = a.offsetWidth == 0 ? a.parentNode.offsetWidth : a.offsetWidth, b = a.offsetHeight;
        SPAnimationUtility.BasicAnimator.PositionAbsoluteExact(a, e, d, b, c)
    };
    SPAnimationUtility.BasicAnimator.PositionRelative = function (a) {
        if (a == null) return;
        SPAnimationUtility.BasicAnimator.PositionRelativeExact(a, 0, 0, null, null)
    };
    SPAnimationUtility.BasicAnimator.PositionAbsoluteExact = function (a, e, d, b, c) {
        if (a == null) return;
        a.style.position = "absolute";
        SPAnimationUtility.BasicAnimator.PositionElement(a, e, d, b, c)
    };
    SPAnimationUtility.BasicAnimator.PositionRelativeExact = function (a, e, d, b, c) {
        if (a == null) return;
        a.style.position = "relative";
        SPAnimationUtility.BasicAnimator.PositionElement(a, e, d, b, c)
    };
    SPAnimationUtility.BasicAnimator.ResetPosition = function (a) {
        if (a == null) return;
        a.style.position = a.style.top = a.style.left = ""
    };
    SPAnimationUtility.BasicAnimator.GetLeftOffset = function (a) {
        if (a == null) return 0;
        var b = a.offsetLeft;
        while (a.offsetParent != null) {
            a = a.offsetParent;
            if (SPAnimationUtility.BasicAnimator.IsPositioned(a) && !(browseris.firefox && a.tagName.toUpperCase() == "TD")) break;
            b += a.offsetLeft
        }
        return b
    };
    SPAnimationUtility.BasicAnimator.GetTopOffset = function (a) {
        if (a == null) return 0;
        var b = a.offsetTop;
        while (a.offsetParent != null) {
            a = a.offsetParent;
            if (SPAnimationUtility.BasicAnimator.IsPositioned(a) && !(browseris.firefox && a.tagName.toUpperCase() == "TD")) break;
            b += a.offsetTop
        }
        return b
    };
    SPAnimationUtility.BasicAnimator.IsPositioned = function (a) {
        var b = Boolean(window.getComputedStyle) ? window.getComputedStyle(a, null) : a.currentStyle;
        return b.position == "relative" || b.position == "absolute"
    };
    SPAnimationUtility.BasicAnimator.GetDefaultCloneId = function (a) {
        return a.id + "_clone"
    };
    SPAnimationUtility.BasicAnimator.CloneElement = function (a, k, l, n, g, p, m) {
        if (a == null) return null;
        if (a.id != null && a.id.indexOf("_clone") != -1) return a;
        var j = SPAnimationUtility.BasicAnimator.GetDefaultCloneId(a), b = document.getElementById(j);
        if (b == null) {
            b = document.createElement("div");
            if (p) b.style.zIndex = "-100";
            var h = SPAnimationUtility.BasicAnimator.GetWindowScrollPosition(), q = h.x, r = h.y, i = SPAnimationUtility.BasicAnimator.IsPositioned(a), d = g ? SPAnimationUtility.BasicAnimator.GetTopOffset(a) : a.offsetTop;
            if (a.parentNode != null && a.parentNode.offsetTop > d) d = a.parentNode.offsetTop;
            if (!i) d -= r;
            var f = null;
            if (!m) {
                f = fRightToLeft ? SPAnimationUtility.BasicAnimator.GetRightOffset(a) : g ? SPAnimationUtility.BasicAnimator.GetLeftOffset(a) : a.offsetLeft;
                if (!i) f -= q
            }
            var e = a.offsetWidth == 0 ? a.parentNode.offsetWidth : a.offsetWidth;
            if (n) e = e + 1;
            var o = a.offsetHeight == 0 ? a.parentNode.offsetHeight : a.offsetHeight;
            SPAnimationUtility.BasicAnimator.PositionAbsoluteExact(b, d, f, o, e);
            var c = a.innerHTML.replace(/(\s+)id=(["])([^"]*)(["])/g, "$1");
            c = c.replace(/(\s+)id=(['])([^']*)(['])/g, "$1");
            if (browseris.ie8standard) c = c.replace(/(\s+)id=([^\s<>]*)([\s>])/g, "$1$3");
            b.innerHTML = c;
            b.className = a.className;
            b.id = j;
            a.style.visibility = "hidden";
            k && SetOpacity(a, 0);
            if (l) a.parentNode.insertBefore(b, a);
            else a.parentNode.appendChild(b)
        }
        return b
    };
    SPAnimationUtility.BasicAnimator.CommonResize = function (a, b, c, f, g, e) {
        if (a == null) return;
        if (!IsNullOrUndefined(b) && (a.style.height == null || a.style.height == "")) a.style.height = String(a.clientHeight) + "px";
        if (!IsNullOrUndefined(c) && (a.style.width == null || a.style.width == "")) a.style.width = String(a.clientWidth) + "px";
        var d = new SPAnimation.State;
        !IsNullOrUndefined(b) && d.SetAttribute(SPAnimation.Attribute.Height, b);
        !IsNullOrUndefined(c) && d.SetAttribute(SPAnimation.Attribute.Width, c);
        var h = new SPAnimation.Object(e, 0, a, d, f, g);
        h.RunAnimation()
    };
    SPAnimationUtility.BasicAnimator.Resize = function (d, b, c, a, e) {
        SPAnimationUtility.BasicAnimator.CommonResize(d, b, c, a, e, SPAnimation.ID.Basic_Size)
    };
    SPAnimationUtility.BasicAnimator.QuickResize = function (d, b, c, a, e) {
        SPAnimationUtility.BasicAnimator.CommonResize(d, b, c, a, e, SPAnimation.ID.Basic_QuickSize)
    };
    SPAnimationUtility.BasicAnimator.ResizeContainerAndFillContent = function (a, b, g, h) {
        if (a == null || b == null) return;
        var i = a.style.zIndex, f = a.style.position, j = a.style.left, k = a.style.top;
        a.style.zIndex = String(1);
        a.style.position = "absolute";
        a.style.left = "0px";
        a.style.top = "0px";
        a.style.visibility = "hidden";
        if (!h) b.insertBefore(a, b.firstChild);
        else b.appendChild(a);
        var c = document.createElement("div");
        c.style.height = "0px";
        c.style.width = "0px";
        b.insertBefore(c, a);
        var d = a.clientHeight, e = a.clientWidth;
        SPAnimationUtility.BasicAnimator.Resize(c, d, e, function () {
            b.removeChild(c);
            a.style.left = j;
            a.style.top = k;
            a.style.zIndex = i;
            a.style.position = f;
            SPAnimationUtility.BasicAnimator.FadeIn(a, g, null)
        }
        , null)
    };
    SPAnimationUtility.BasicAnimator.GetRightOffset = function (a) {
        return document.body.offsetWidth - a.offsetWidth - SPAnimationUtility.BasicAnimator.GetLeftOffset(a)
    };
    SPAnimationUtility.BasicAnimator.PositionElement = function (a, e, b, c, d) {
        if (!IsNullOrUndefined(e)) a.style.top = String(e) + "px";
        if (!IsNullOrUndefined(b)) fRightToLeft ? a.style.right = String(b) + "px" : a.style.left = String(b) + "px";
        if (!IsNullOrUndefined(d)) a.style.width = String(d) + "px";
        if (!IsNullOrUndefined(c)) a.style.height = String(c) + "px"
    };
    SPAnimationUtility.BasicAnimator.GetWindowScrollPosition = function () {
        var a = 0, b = 0, c = document.getElementById("s4-workspace");
        if (c != null) {
            b = c.scrollTop;
            a = c.scrollLeft
        }
        else {
            b = window.pageYOffset;
            a = window.pageXOffset
        }
        if (IsNullOrUndefined(b)) b = 0;
        if (IsNullOrUndefined(a)) a = 0;
        return {
            x: a, y: b
        }

    };
    SPAnimationUtility.RowAddInfo = function () { };
    SPAnimationUtility.RowMoveInfo = function () { };
    SPAnimationUtility.TableAnimator = SPAnimUtil_TableAnimator;
    SPAnimUtil_TableAnimator.prototype = {
        tableElement: null, tbody: null, headerRow: null, footer: null, fAnimatable: false, topOffset: 0, leftOffset: 0, headerRowHeight: 0, itemRowHeight: 0, headerColWidths: null, itemColWidths: null
    };
    SPAnimUtil_TableAnimator.prototype.AnimatePaging = function (b, c, g) {
        this.IncrementRefCount();
        var f = this.tableElement.parentNode.style.overflow;
        this.tableElement.parentNode.style.overflow = "hidden";
        SetOpacity(this.tableElement, 0);
        var a = this.tbody, h = a.nextSibling;
        h.style.display = "";
        this.footer = c;
        SetOpacity(this.footer, 0);
        this.footer.style.display = "";
        a.parentNode.removeChild(a);
        var d = new SPAnimation.State;
        d.SetAttribute(SPAnimation.Attribute.Opacity, 1);
        var k = new SPAnimation.Object(SPAnimation.ID.Basic_QuickShow, 0, c, d, null, null);
        k.RunAnimation();
        var i = b ? 100 : -100;
        SPAnimationUtility.BasicAnimator.PositionRelativeExact(this.tableElement, null, i, null, null);
        var j = this, e = new SPAnimation.State;
        e.SetAttribute(SPAnimation.Attribute.Opacity, 1);
        var l = new SPAnimation.Object(b ? SPAnimation.ID.Content_SlideInFadeInLeftInc : SPAnimation.ID.Content_SlideInFadeInRightInc, 0, this.tableElement, e, function () {
            j.ResetPagingAnimation(f);
            g()
        }
        , null);
        l.RunAnimation()
    };
    SPAnimUtil_TableAnimator.prototype.ResetPagingAnimation = function (a) {
        var b = this.DecrementRefCount();
        if (b == 0) {
            SPAnimationUtility.BasicAnimator.ResetPosition(this.footer);
            this.tableElement.parentNode.style.overflow = a
        }

    };
    SPAnimUtil_TableAnimator.prototype.AnimateSort = function (g, b, f) {
        this.PrepareForSortAnimation(g, b);
        for (var e = 15, c = b.rows.length, a = 0;
        a < c;
        a++) {
            var i = b.rows[a], d = new SPAnimation.State;
            d.SetAttribute(SPAnimation.Attribute.Opacity, 1);
            var h = a == 0 ? 0 : 100 + (a - 1) * e, j = new SPAnimation.Object(SPAnimation.ID.Basic_QuickShow, h, i, d, a == c - 1 ? f : null, null);
            j.RunAnimation()
        }

    };
    SPAnimUtil_TableAnimator.prototype.PrepareForSortAnimation = function (a, b) {
        for (var d = b.rows.length, c = 0;
        c < d;
        c++) {
            var e = b.rows[c];
            SetOpacity(e, 0)
        }
        b.style.display = "";
        a != null && a.parentNode != null && a.parentNode.removeChild(a)
    };
    SPAnimUtil_TableAnimator.prototype.AnimateFooter = function (c, a) {
        this.doneFooter = false;
        if (this.footer != null && c != 0) {
            var b = new SPAnimation.State, d = fRightToLeft ? pxToNum(this.footer.style.right) : pxToNum(this.footer.style.left);
            b.SetAttribute(SPAnimation.Attribute.PositionX, d);
            b.SetAttribute(SPAnimation.Attribute.PositionY, pxToNum(this.footer.style.top) + c * this.itemRowHeight);
            var f = this, e = new SPAnimation.Object(SPAnimation.ID.Basic_Move, 0, this.footer, b, function () {
                a != null && a()
            }
            , null);
            e.RunAnimation()
        }
        else a != null && a()
    };
    SPAnimUtil_TableAnimator.prototype.Initialize = function () {
        var a = SPAnimationUtility.BasicAnimator.GetWindowScrollPosition(), b = a.x, c = a.y;
        this.topOffset = SPAnimationUtility.BasicAnimator.GetTopOffset(this.tableElement) - c;
        this.leftOffset = fRightToLeft ? SPAnimationUtility.BasicAnimator.GetRightOffset(this.tableElement) - b : SPAnimationUtility.BasicAnimator.GetLeftOffset(this.tableElement) - b;
        this.tbody = this.GetTableBody();
        this.headerRow = this.tableElement.rows[0];
        this.headerRowHeight = this.tableElement.firstChild.offsetHeight;
        this.itemRowHeight = this.tbody.rows[0].offsetHeight;
        this.headerColWidths = this.GetColumnWidths(this.headerRow);
        this.itemColWidths = this.GetColumnWidths(this.tbody.rows[0])
    };
    SPAnimUtil_TableAnimator.prototype.GetTableBody = function () {
        var a = this.tableElement.firstChild;
        while (a.nodeName != "TBODY") a = a.nextSibling;
        return a
    };
    SPAnimUtil_TableAnimator.prototype.GetColumnWidths = function (b) {
        var i = new Array(0);
        while (this.IsErrorRow(b)) b = b.nextSibling;
        for (var c = 0;
        c < b.childNodes.length;
        c++) {
            var f = b.childNodes[c], a = Boolean(window.getComputedStyle) ? window.getComputedStyle(f, null) : f.currentStyle, h = pxToNum(a.paddingLeft), g = pxToNum(a.paddingRight), e = pxToNum(a.borderLeftWidth) + pxToNum(a.marginLeft), d = pxToNum(a.borderRightWidth) + pxToNum(a.marginRight);
            if (isNaN(e)) e = 0;
            if (isNaN(d)) d = 0;
            i[c] = [f.clientWidth - h - g, h + e, g + d]
        }
        return i
    };
    SPAnimUtil_TableAnimator.prototype.IncrementRefCount = function () {
        var a = this.tableElement.getAttribute("AnimationRefCount"), b = a == null ? 1 : Number(a) + 1;
        this.tableElement.setAttribute("AnimationRefCount", String(b));
        return b
    };
    SPAnimUtil_TableAnimator.prototype.DecrementRefCount = function () {
        var a = Number(this.tableElement.getAttribute("AnimationRefCount"));
        this.tableElement.setAttribute("AnimationRefCount", String(--a));
        return a
    };
    SPAnimUtil_TableAnimator.prototype.IsErrorRow = function (a) {
        return a.className.indexOf("ms-dragupload-error") != -1
    };
    IsMenuShown = false;
    ChevronContainer = null;
    itemTableDeferred = null;
    imageCell = null;
    onKeyPress = false;
    downArrowText = null;
    currentEditMenu = null;
    currentItemID = null;
    currentItemAppName = null;
    currentItemProgId = null;
    currentItemIcon = null;
    currentItemOpenControl = null;
    currentItemOpenApp = null;
    currentItemFileUrl = null;
    currentItemFSObjType = null;
    currentItemContentTypeId = null;
    currentItemCheckedOutUserId = null;
    currentItemCheckoutExpires = null;
    currentItemModerationStatus = null;
    currentItemUIString = null;
    currentItemCheckedoutToLocal = null;
    bIsCheckout = 0;
    currentItemCanModify = null;
    currentItemPermMaskH = null;
    currentItemPermMaskL = null;
    currentItemEvtType = 0;
    currentItemIsEventsExcp = null;
    currentItemIsEventsDeletedExcp = null;
    g_MaximumSelectedItemsAllowed = 100;
    g_CustomActionDialogHandlers = {};
    g_CustomActionDialogHandlerId = 0;
    g_ExpGroupWPState = new LRUCache;
    DocOpen = {
        CLIENT: 0, BROWSER: 1
    };
    hoverTR = null;
    ecbTD = null;
    ProtocolCommand = {
        View: "ofv", Edit: "ofe", New: "nft"
    };
    phManager = new function () {
        var a = false, c = false, b = {};
        this.ShouldTryProtocolHandler = function (a) {
            return !IsStrNullOrEmpty(a) && typeof navigator.msLaunchUri == "function" && b[a] == null
        };
        this.SetProtocolHandlerEnabled = function (c, a) {
            b[c] = a
        };
        this.IsProtocolHandlerEnabled = function (d) {
            if (IsStrNullOrEmpty(d)) return false;
            if (b[d] != null) return b[d];
            if (c) return a;
            c = true;
            if (d === "ms-project") if (typeof navigator.msLaunchUri == "function") {
                a = true;
                return a
            }
            if (Boolean(window.ActiveXObject)) try {
                if (d === "ms-project") var f = new ActiveXObject("WinProj.Activator");
                else var g = new ActiveXObject("SharePoint.OpenDocuments.5");
                a = true
            }
                catch (h) { } else if (IsSupportedNPApiBrowserOnWin()) {
                    var e = CreateNPApiOnWindowsPlugin("application/x-sharepoint");
                    if (e != null) try {
                        if (e.GetOfficeVersion() == "15") a = true
                    }
                        catch (h) { }
                }
            return a
        };
        this.CreateProtocolHandlerUrl = function (c, e, d, f) {
            var a = [], b = c.split("|");
            if (b.length == 2) {
                a.push(b[0]);
                a.push(":");
                a.push(e);
                return a.join("")
            }
            else if (b.length == 3) c = b[0];
            a.push(c);
            a.push(":");
            a.push(d);
            a.push("|u|");
            a.push(e);
            if (d == ProtocolCommand.New) {
                a.push("|s|");
                a.push(f)
            }
            return a.join("")
        }

    };
    CBSelectedValues_InitializePrototype();
    PageContextInfo_InitializePrototype();
    g_ExtensionNotSupportCheckoutToLocal = ["ascx", "asp", "aspx", "htm", "html", "master", "odc", "exe", "bat", "com", "cmd", "onetoc2"];
    g_ExtensionDefaultForRead = ["jpg", "jpeg", "bmp", "png", "gif", "onetoc2", "one", "odc"];
    bValidSearchTerm = false;
    fListControl = false;
    fListErrorShown = false;
    fNewDoc = false;
    fNewDoc2 = false;
    fNewDoc3 = false;
    SPDesignerDownloadUrl = "http://o15.officeredir.microsoft.com/r/rlidSPD2013Download";
    SPDesignerProgID = "SharePoint.WebPartPage.Document";
    CtxRgiid_InitializePrototype();
    g_varSkipRefreshOnFocus = 0;
    g_useDialogAlwaysList = ["upload.aspx", "uploadex.aspx", "deploydeveloperapp.aspx"];
    LRUCache_InitializePrototype();
    v_stsOpenDoc = null;
    v_strStsOpenDoc = null;
    g_AdditionalNavigateHierarchyQString = "";
    httpFolderTarget = null;
    httpFolderSource = null;
    httpFolderDiv = null;
    previousClickedItemRow = null;
    Point.prototype = {
        x: undefined, y: undefined, toString: function () {
            return "(" + String(this.x) + "," + String(this.y) + ")"
        }

    };
    isdlg = ajaxNavigate.get_search().match(new RegExp("[?&]IsDlg=1"));
    _spBodyOnLoadFunctionNames != null && typeof _spBodyOnLoadFunctionNames != "undefined" && _spBodyOnLoadFunctionNames.push("SearchOnBodyLoad");
    isdlg == null && SetEvent("resize", FixRibbonAndWorkspaceDimensionsForResize, window);
    QstringStruct.prototype.toString = QstringStructToString;
    QstringStruct.prototype.toArray = QstringStructToArray;
    Diff.prototype = {
        left: [], right: []
    };
    QstringStruct.Diff = function (h, g) {
        for (var f = new QstringStruct(h).toArray(), e = new QstringStruct(g).toArray(), b = {}, d = new Diff, a = 0;
        a < f.length;
        a++) b[f[a]] |= 1;
        for (a = 0;
        a < e.length;
        a++) b[e[a]] |= 2;
        for (var c in b) if (b[c] == 1) d.left.push(c);
        else b[c] == 2 && d.right.push(c);
        return d
    };
    g_listItemCache = {};
    g_fSkipAnimation = false;
    g_fSkipNextTabExpandAnimation = false;
    g_InViewPort = 1;
    g_OutOfViewPortCloserToTop = 2;
    g_OutOfViewPortCloserToBottom = 3;
    g_NotificationEngine = null;
    g_notiExpireTimerId = -1;
    g_standardNotiCt = null;
    g_statusNotiCt = null;
    SPNotifications = {};
    SPNotifications.ContainerID = {
        Basic: 0, Status: 1
    };
    g_SPNotificationEventID_Count = 5;
    SPNotifications.EventID = {
        OnShow: 0, OnHide: 1, OnDisplayNotification: 2, OnRemoveNotification: 3, OnNotificationCountChanged: 4, OnDisposing: 5
    };
    SP.UI.Notify = {};
    SP.UI.Notify.Notification = SPNotification;
    SP.UI.Notify.NotificationContainer = SPNotificationContainer;
    SP.UI.Notify.addNotification = function (b, a) {
        return addNotification(b, a)
    };
    SP.UI.Notify.removeNotification = function (a) {
        removeNotification(a)
    };
    SP.UI.Notify.showLoadingNotification = function (a) {
        var b = "<img src='/_layouts/15/images/loadingcirclests16.gif?rev=23' style='vertical-align:bottom; display:inline-block; margin-" + (document.documentElement.dir == "rtl" ? "left" : "right") + ":2px;' />&nbsp;<span style='vertical-align:top;'>" + STSHtmlEncode(Strings.STS.L_Loading_Text) + "</span>";
        return addNotification(b, a)
    };
    NotificationEngine.prototype = {
        Initialized: false, Notifications: undefined, Containers: undefined, Initialize: undefined, AddNotification: undefined, AddContainer: undefined, DisposeNotification: undefined, SetExpireTimer: undefined, RetireNotificationInternal: undefined
    };
    (function () {
        var d = null, b = -1;
        NotificationEngine.prototype.Initialize = function () {
            if (this.Initialized) return;
            this.Notifications = {};
            this.Containers = {};
            this.Initialized = true
        };
        NotificationEngine.prototype.Reset = function () {
            var a, c;
            for (c in this.Containers) {
                a = this.Containers[c];
                a.Dispose();
                a.UnblockUpdatesInternal()
            }
            var d = b;
            b = -1;
            window.clearInterval(d)
        };
        NotificationEngine.prototype.AddNotification = function (b, a) {
            var c = this.Containers[b];
            a.container = c;
            this.Notifications[a.id] = a
        };
        NotificationEngine.prototype.AddContainer = function (a) {
            this.Containers[a.id] = a
        };
        NotificationEngine.prototype.DisposeNotification = function (a) {
            if (this.Notifications[a.id] != null) {
                delete this.Notifications[a.id];
                delete a
            }

        };
        NotificationEngine.prototype.SetExpireTimer = function (d, c) {
            var e = new Date;
            d.expires = e.valueOf() + c;
            if (b == -1) b = window.setInterval(function () {
                a().RetireNotificationInternal()
            }
            , 750)
        };
        NotificationEngine.prototype.RetireNotificationInternal = function () {
            var i = new Date, h = i.valueOf(), e = true, d, c, a, f = [];
            for (d in this.Notifications) {
                c = this.Notifications[d];
                if (c.expires != null) if (h > c.expires) f.push(c);
                else e = false
            }
            while (f.length > 0) {
                c = f.shift();
                a = c.container;
                a.RemoveNotification(c);
                a.pendingUpdate = true
            }
            for (d in this.Containers) {
                a = this.Containers[d];
                if (a.items.length > 0) e = false;
                if (Boolean(a.pendingUpdate)) {
                    a.Update();
                    delete a.pendingUpdate
                }

            }
            if (e) {
                var g = b;
                b = -1;
                window.clearInterval(g)
            }

        };
        SPNotification.prototype = {
            id: undefined, elm: undefined, strHtml: undefined, strTooltip: undefined, bSticky: undefined, bIsAdd: undefined, bNoAnimate: undefined, bHidden: undefined, onclickHandler: undefined, container: undefined, extraData: undefined, expires: undefined
        };
        SPNotification.prototype.Initialize = function (e, i, h, f, d, g) {
            var c = "notification_" + String(getUniqueIndex()), b = document.createElement("span");
            b.id = c;
            this.id = c;
            this.bIsAdd = true;
            this.elm = b;
            this.strHtml = i;
            this.extraData = g;
            this.bSticky = h;
            this.strTooltip = f;
            this.onclickHandler = d;
            this.bHidden = false;
            a().AddNotification(e, this)
        };
        SPNotification.prototype.Show = function (a) {
            if (Boolean(a) == true) this.bNoAnimate = true;
            this.container.AddNotification(this)
        };
        SPNotification.prototype.Hide = function (a) {
            if (Boolean(a) == true) this.bNoAnimate = true;
            this.container.RemoveNotification(this)
        };
        SPNotificationContainer.prototype = {
            id: undefined, element: undefined, bIsShown: undefined, bIsBlocked: undefined, nDisposalState: undefined, nNotificationLayer: 25, nDisplayDuration: 7e3, nMaxNotifications: 20, events: undefined, items: undefined, pending: undefined, blockedUpdates: undefined
        };
        SPNotificationContainer.prototype.Initialize = function (f, d, e, b) {
            this.id = f;
            this.element = d;
            this.events = new Array(g_SPNotificationEventID_Count);
            this.bIsShown = false;
            this.nNotificationLayer = e;
            this.bIsBlocked = false;
            this.items = [];
            this.pending = [];
            this.blockedUpdates = [];
            this.nDisposalState = 0;
            var c = this;
            this.items.add = function (a) {
                this.push(a);
                c.FireEvent(SPNotifications.EventID.OnNotificationCountChanged)
            };
            this.items.remove = function (d) {
                var a, b;
                for (a = 0, b = this.length;
                a < b;
                a++) if (d.id == this[a].id) {
                    this.splice(a, 1);
                    c.FireEvent(SPNotifications.EventID.OnNotificationCountChanged);
                    return true
                }
                return false
            };
            if (b != null) this.nMaxNotifications = b;
            a().AddContainer(this)
        };
        SPNotificationContainer.prototype.Dispose = function () {
            if (this.nDisposalState > 0) return;
            this.nDisposalState = 1;
            this.Clear()
        };
        SPNotificationContainer.prototype.AddNotification = function (b) {
            var d, e;
            for (d = 0, e = this.items.length;
            d < e;
            d++) if (b.id == this.items[d].id) return;
            if (this.GetCount() < this.nMaxNotifications) {
                b.bHidden = false;
                b.elm.style.display = ""
            }
            else {
                b.bHidden = true;
                b.elm.style.display = "none"
            }
            this.items.add(b);
            var c = this, f = function () {
                !Boolean(b.bSticky) && a().SetExpireTimer(b, c.nDisplayDuration);
                !c.bIsShown && c.Show();
                c.FireEvent(SPNotifications.EventID.OnDisplayNotification, b, function () {
                    c.Update();
                    return true
                });
                c.Update()
            };
            if (this.bIsBlocked && this.nDisposalState === 0) this.pending.push(f);
            else f()
        };
        SPNotificationContainer.prototype.RemoveNotification = function (b) {
            if (b.bIsAdd === false) return;
            b.bIsAdd = false;
            var d, f, e = false;
            for (d = 0, f = this.pending.length;
            d < f;
            d++) if (b.id == this.pending[d].id) {
                this.pending.splice(d, 1);
                e = true
            }
            if (e) {
                this.items.remove(b);
                return
            }
            var c = this, g = function () {
                c.FireEvent(SPNotifications.EventID.OnRemoveNotification, b, function () {
                    try {
                        c.items.remove(b);
                        var e = b.elm, d = c.element;
                        d.removeChild(e)
                    }
                    catch (f) { } a().DisposeNotification(b);
                    c.Update();
                    return true
                });
                c.Update()
            };
            if (this.bIsBlocked && this.nDisposalState === 0) this.pending.push(g);
            else g()
        };
        SPNotificationContainer.prototype.ShowAllNotifications = function () {
            var a, d, c = this.items;
            for (a = 0, d = c.length;
            a < d;
            a++) {
                var b = c[a];
                if (b.bHidden) {
                    b.bHidden = false;
                    b.elm.style.display = ""
                }

            }

        };
        SPNotificationContainer.prototype.Update = function () {
            !this.element.hasChildNodes() && this.items.length == 0 && this.Hide();
            if (this.bIsShown) for (var b in a().Containers) this.BlockUpdatesInternal(a().Containers[b])
        };
        SPNotificationContainer.prototype.Clear = function (d) {
            for (var c = this.items, b = c.length - 1;
            b >= 0;
            b--) {
                var a = c[b];
                if (!Boolean(a) || !a.bIsAdd) continue;
                if (Boolean(d)) a.bNoAnimate = true;
                this.RemoveNotification(a)
            }

        };
        SPNotificationContainer.prototype.GetCount = function () {
            return this.items.length
        };
        SPNotificationContainer.prototype.GetHiddenCount = function () {
            var b = 0, a, d, c = this.items;
            for (a = 0, d = c.length;
            a < d;
            a++) {
                var e = c[a];
                if (e.bHidden) b++
            }
            return b
        };
        SPNotificationContainer.prototype.SetEventHandler = function (a, b) {
            if (this.events[a] != null) throw "Event handler already specified for eventId " + String(a) + ". ContainerId: " + String(this.id);
            this.events[a] = b
        };
        SPNotificationContainer.prototype.FireEvent = function (a) {
            if (a > g_SPNotificationEventID_Count) throw "Invalid eventId " + String(a) + ". ContainerId: " + String(this.id);
            if (this.events[a] != null) {
                var b = this.events[a];
                Array.prototype.shift.call(arguments);
                b.apply(null, arguments)
            }

        };
        SPNotificationContainer.prototype.Show = function () {
            if (this.bIsShown) return;
            this.bIsShown = true;
            var a = this;
            this.FireEvent(SPNotifications.EventID.OnShow, function () {
                a.Update();
                return true
            })
        };
        SPNotificationContainer.prototype.Hide = function () {
            if (!this.bIsShown) return;
            this.bIsShown = false;
            while (this.element.hasChildNodes()) this.element.removeChild(this.element.firstChild);
            var a = this;
            this.FireEvent(SPNotifications.EventID.OnHide, function () {
                if (a.nDisposalState == 0) {
                    a.UnblockUpdatesInternal();
                    a.Update()
                }
                else if (a.nDisposalState == 1) {
                    a.nDisposalState = 2;
                    a.FireEvent(SPNotifications.EventID.OnDisposing)
                }
                return true
            })
        };
        SPNotificationContainer.prototype.BlockUpdatesInternal = function (a) {
            if (a.nNotificationLayer > this.nNotificationLayer || a.id == this.id) return;
            var b, d, c = false;
            for (b = 0, d = this.blockedUpdates.length;
            b < d;
            b++) if (a.id == this.blockedUpdates[b].id) {
                c = true;
                break
            }
            if (c) return;
            a.bIsBlocked = true;
            this.blockedUpdates.push(a);
            return
        };
        SPNotificationContainer.prototype.UnblockUpdatesInternal = function () {
            while (this.blockedUpdates.length > 0) {
                var a = this.blockedUpdates.shift();
                a.bIsBlocked = false;
                while (a.pending.length > 0) {
                    var b = a.pending.shift();
                    b()
                }
                a.Update()
            }

        };
        var e = function (b, i) {
            var a = b.elm, e = b.onclickHandler, f = b.strTooltip, h = b.bNoAnimate, g = function () {
                e != null && e();
                removeNotification(a.id, h);
                return false
            };
            a.className = "ms-trcnoti-base";
            SetOpacity(a, 0);
            var c = document.createElement("div");
            c.className = "ms-trcnoti-bg";
            AttachEvent("click", g, c);
            var d = document.createElement("div");
            d.className = i;
            c.appendChild(d);
            a.appendChild(c);
            if (Boolean(f)) a.title = f;
            a.setAttribute("role", "alert");
            return d
        }
        , c = function (a, f, d, c) {
            var g = a.elm;
            if (a.bNoAnimate || IsAccessibilityFeatureEnabled()) c(a);
            else {
                var b = new SPAnimation.State;
                b.SetAttribute(SPAnimation.Attribute.Opacity, d);
                var e = new SPAnimation.Object(f, 0, g, b, c, a);
                e.RunAnimation()
            }

        };
        function f(d) {
            var a = document.createElement("div"), c = document.createElement("div"), b = document.createElement("div");
            a.className = "ms-trcnoti-border";
            c.className = "ms-fullWidth";
            b.className = "ms-trcnoti-host ms-fullWidth";
            c.appendChild(b);
            a.appendChild(c);
            d.appendChild(a);
            return {
                ctr: d, root: a, host: b
            }

        }
        function i() {
            var c = document.createElement("div");
            c.className = "ms-trcnoti-ctr";
            document.body.appendChild(c);
            var a = f(c);
            a.root.id = "js-trcnoti-ct";
            a.host.id = "js-trcnoti-host";
            a.root.style.display = "none";
            var b = document.createElement("div");
            b.id = "ms-trcnoti-ovrflw";
            b.className = "ms-trcnoti-ovrflw ms-trcnoti-bg";
            a.host.parentNode.appendChild(b);
            a.ovrflw = b;
            return a
        }
        function j() {
            var a = document.getElementById("notificationArea");
            if (a == null) {
                a = document.createElement("div");
                a.id = "notificationArea";
                var b = document.getElementById("contentBox");
                if (null != b) b.appendChild(a);
                else document.body.appendChild(a)
            }
            a.style.display = "none";
            var c = f(a);
            return c
        }
        function g() {
            if (g_standardNotiCt != null) return g_standardNotiCt;
            var d = j(), a = d.ctr, b = d.host;
            g_standardNotiCt = new SPNotificationContainer(SPNotifications.ContainerID.Basic, b, 50);
            var f = function (a) {
                var b = e(a, "ms-trcnoti-toast");
                b.innerHTML = a.strHtml
            }
            , i = function (b) {
                a.style.display = "none";
                b()
            }
            , k = function (b) {
                a.setAttribute("aria-live", "polite");
                a.setAttribute("aria-relevant", "all");
                a.style.display = "block";
                b()
            }
            , g = function (a, e) {
                f(a);
                var d = a.elm;
                d.style.top = "0px";
                b.appendChild(d);
                c(a, SPAnimation.ID.SmallObject_SlideInFadeInTop, 1, e)
            }
            , h = function (b, a) {
                c(b, SPAnimation.ID.Basic_Fade, 0, a)
            };
            g_standardNotiCt.SetEventHandler(SPNotifications.EventID.OnHide, i);
            g_standardNotiCt.SetEventHandler(SPNotifications.EventID.OnShow, k);
            g_standardNotiCt.SetEventHandler(SPNotifications.EventID.OnDisplayNotification, g);
            g_standardNotiCt.SetEventHandler(SPNotifications.EventID.OnRemoveNotification, h);
            return g_standardNotiCt
        }
        function h() {
            var g = i(), q = g.ctr, f = g.root, b = g.ovrflw, d = g.host, a = new SPNotificationContainer(SPNotifications.ContainerID.Status, d, 75, 3);
            function j(g, e, f) {
                var d = document.createElement("span"), b = document.createElement("a"), a = document.createElement("img"), c = document.createElement("a");
                b.href = "#";
                c.className = "ms-core-defaultFont ms-textLarge";
                b.className = "ms-imnlink";
                b.onclick = function () {
                    IMNImageOnClick(event);
                    return false
                };
                a.id = g + "_imn,type=sip";
                a.setAttribute("name", "imnmark");
                a.className = "ms-imnImg";
                a.title = "";
                a.border = 0;
                a.src = "/_layouts/15/images/blank.gif?rev=23";
                a.alt = Strings.STS.L_NoPresenceInformation;
                a.width = "12px";
                a.height = "12px";
                a.style.verticalAlign = "middle";
                a.style.marginRight = "0px";
                a.setAttribute("sip", f);
                c.innerHTML = e;
                b.appendChild(a);
                d.appendChild(b);
                d.appendChild(c);
                return d
            }
            var h = function (h) {
                var q = e(h, "ms-trcnoti-status"), m = h.strHtml, b = h.extraData, k = document.createElement("div"), d = document.createElement("div"), a = document.createElement("div");
                d.className = "ms-trcnoti-body";
                k.className = "ms-trcnoti-gfx";
                a.className = "ms-trcnoti-txt ms-core-defaultFont ms-trc-noti-title";
                if (b.img != null) {
                    var i = document.createElement("img");
                    i.src = b.img;
                    if (browseris.ie) {
                        i.removeAttribute("width");
                        i.removeAttribute("height")
                    }
                    k.appendChild(i)
                }
                if (b.sip != null) if (browseris.ie5up) {
                    var p = j(h.id, m, b.sip);
                    a.appendChild(p);
                    for (var g = p.getElementsByTagName("img"), c = 0, r = g.length;
                    c < r;
                    c++) g[c].name == "imnmark" && IMNRC(g[c].getAttribute("sip"), g[c])
                }
                else {
                    var o = document.createElement("span");
                    o.innerHTML = m;
                    a.insertBefore(o, a.firstChild)
                }
                else {
                    var l = document.createElement("span");
                    l.className = "ms-core-defaultFont ms-textLarge";
                    l.innerHTML = m;
                    a.appendChild(l)
                }
                a.appendChild(document.createTextNode(" "));
                var n = document.createElement("span");
                n.className = "ms-textSmall";
                n.innerHTML = b.txt;
                a.appendChild(n);
                d.appendChild(a);
                if (b.dt != null) {
                    var f = document.createElement("div");
                    f.className = "ms-trcnoti-dt ms-metadata";
                    if (browseris.ie) f.style.paddingBottom = "1px";
                    f.innerHTML = b.dt;
                    d.appendChild(f)
                }
                q.appendChild(k);
                q.appendChild(d)
            }
            , p = function (b) {
                d.setAttribute("aria-live", "polite");
                d.setAttribute("aria-relevant", "all");
                if (IsAccessibilityFeatureEnabled()) b();
                else {
                    var a = new SPAnimation.State;
                    a.SetAttribute(SPAnimation.Attribute.Opacity, 1);
                    f.style.top = "0px";
                    var c = new SPAnimation.Object(SPAnimation.ID.SmallObject_SlideInFadeInTop, 0, f, a, b, null);
                    c.RunAnimation()
                }
                f.style.display = "block"
            }
            , o = function (a) {
                f.style.display = "none";
                a()
            }
            , l = function (a, b) {
                if (typeof a.extraData === "undefined" || a.extraData === null) throw "Argument Error: Status notifications requires extraData argument";
                h(a);
                d.insertBefore(a.elm, d.firstChild);
                a.elm.style.top = "0px";
                c(a, SPAnimation.ID.SmallObject_SlideInFadeInTop, 1, b)
            }
            , n = function (b, a) {
                c(b, SPAnimation.ID.Basic_Fade, 0, a)
            }
            , k = function () {
                var c = a.GetHiddenCount();
                if (c > 0) {
                    b.style.display = "block";
                    b.innerHTML = StBuildParam(Strings.STS.L_NotificationsAndNMore, c);
                    b.onclick = function () {
                        a.ShowAllNotifications();
                        b.style.display = "none";
                        return false
                    }

                }
                else b.style.display = "none"
            }
            , m = function () {
                document.body.removeChild(q)
            };
            a.SetEventHandler(SPNotifications.EventID.OnShow, p);
            a.SetEventHandler(SPNotifications.EventID.OnHide, o);
            a.SetEventHandler(SPNotifications.EventID.OnDisplayNotification, l);
            a.SetEventHandler(SPNotifications.EventID.OnRemoveNotification, n);
            a.SetEventHandler(SPNotifications.EventID.OnNotificationCountChanged, k);
            a.SetEventHandler(SPNotifications.EventID.OnDisposing, m);
            g_statusNotiCt = a
        }
        addNotification = function (f, e, d, b, c) {
            var a = new SPNotification(SPNotifications.ContainerID.Basic, f, e, d, b);
            a.Show(c);
            return a.id
        };
        removeNotification = function (d, c) {
            var b = a().Notifications[d];
            Boolean(b) && b.Hide(c)
        };
        function a() {
            if (d === null) {
                g_NotificationEngine = new NotificationEngine;
                d = g_NotificationEngine;
                g();
                h()
            }
            return d
        }
        NotificationEngine.GetInstance = a
    })();
    cGCMinimumWidth = 400;
    cGCMinimumHeight = 200;
    cGCMaxGCResizeCount = 10;
    glGCObjectHeight = 0;
    glGCObjectWidth = 0;
    glGCResizeCounter = 0;
    objGCGlobal = null;
    PositionInfo_InitializePrototype();
    ecbManager = {
        callOutPar: null, DismissECB: function () {
            var c = {};
            if (ecbManager.callOutPar != null) {
                var e = itemTable;
                c.callOut = true;
                OutItem(c);
                ecbManager.callOutPar = null;
                itemTable = e
            }
            var d = window.event, a = null;
            if (d != null) a = Boolean(d.srcElement) ? d.srcElement : d.target;
            while (a != null && a.tagName != "TR") a = a.parentNode;
            var b = null;
            if (a != null && itemTable != null) {
                b = itemTable;
                while (b != null) {
                    if (b == a) break;
                    b = b.parentNode
                }

            }
            if (b == null) {
                c.callOut = false;
                OutItem(c)
            }

        }

    };
    ecbItems = "ECBItems";
    SYSTEM_ACCOUNT_ID = 1073741823;
    resetItemGlobals();
    _spBodyOnLoadFunctions.push(InitFullScreenMode);
    filterTable = null;
    bIsFilterMenuShown = false;
    bIsFilterDataLoaded = false;
    filterImageCell = null;
    currentFilterMenu = null;
    loadingFilterMenu = null;
    ctxFilter = null;
    bIsFilterKeyPress = false;
    filterStr = null;
    strFieldName = "";
    bMenuLoadInProgress = false;
    strFilteredValue = null;
    bIsMultiFilter = false;
    fnOnFilterMouseOut = null;
    if (typeof String.prototype.trim == "undefined") String.prototype.trim = function () {
        return this.replace(/^\s\s*/, "").replace(/\s\s*$/, "")
    };
    if (typeof Object.create === "undefined") Object.create = function (b) {
        function a() { } a.prototype = b;
        return new a
    };
    if (typeof Object.keys === "undefined") Object.keys = function (c) {
        var b = [];
        for (var a in c) c.hasOwnProperty(a) && b.push(a);
        return b
    };
    RibbonBlock.prototype = {
        initialTabId: null, buildMinimized: true, initStarted: false, initialTabSelectedByUser: false, launchedByKeyboard: false
    };
    kfnDisableEvent = new Function("return false");
    g_menuHtc_lastMenu = null;
    g_uniqueNumber = 0;
    g_MenuEndOfDOM = false;
    ElementPosition_InitializePrototype();
    MenuTag_InitializePrototype();
    MMU_chDelim = ",";
    MMU_chDelimEnc = "%2c";
    MMU_postbackPrefix = "javascript:__doPostBack(";
    MMU_chDelim2 = "%";
    MMU_chDelim2Enc = "%25";
    MHash_InitializePrototype();
    ParseContext_InitializePrototype();
    MMU_reDelimEnc = new RegExp(MMU_chDelimEnc, "g");
    MMU_reDelim2Enc = new RegExp(MMU_chDelim2Enc, "g");
    MMU_reDelimDec = new RegExp(MMU_chDelim, "g");
    MMU_reDelim2Dec = new RegExp(MMU_chDelim2, "g");
    g_MMU_HighlightedEcbTable = null;
    g_MMU_HighlightedEcbTableOpen = null;
    g_MMU_OpenTimeoutHandle = null;
    g_MMU_theFormActionAtPageLoad = null;
    g_MMU_Form0ActionAtPageLoad = null;
    g_MMU_Form0ActionAtPreMenuOpen = null;
    g_MMU_RequestTimeoutTimeoutHandle = null;
    _AddSilverlightWebPartPopupUI_InitializePrototype();
    _ConfigSilverlightWebpartPopupUI_InitializePrototype();
    _launchNotificationId = null;
    _tenantAppData = null;
    typeof NotifyScriptLoadedAndExecuteWaitingJobs == "function" && NotifyScriptLoadedAndExecuteWaitingJobs("core.js")
}
var SPAnimation;
function SPCurve(b, a, c, e, d, f) {
    this.ID = b;
    this.type = a;
    this.x1 = c;
    this.y1 = e;
    this.x2 = d;
    this.y2 = f
}
function SPKeyFrame(h, e, c, f, d, g, b, a) {
    this.type = h;
    this.curveID = e;
    this.startTime = c;
    this.endTime = f;
    this.startValue = d;
    this.endValue = g;
    this.relativeTo = b;
    this.operationType = a
}
function Animation(a, b) {
    this.ID = a;
    this.keyFrames = b
}
function UpdateAnimationStateFromQuery() {
    var a = window.location.href, b = a != null && a.indexOf("Animation=0") != -1, c = a != null && a.indexOf("Animation=1") != -1;
    b && SPAnimation.Settings.DisableAnimation();
    c && SPAnimation.Settings.EnableAnimation()
}
function AnimationEngine() {
    this.AnimationQueue = new Array(0);
    this.sharedTimer = null;
    this.sharedCancelTimer = null;
    this.frameInterval = 1e3 / 60;
    this.resetInterval = 3e4;
    this.sharedTimerRefs = 0;
    this.conflictTable = new Array(0);
    this.currentAnimationIndex = -1;
    this.temporaryIDGenerator = 0
}
function SPAnimation_State() {
    this.Index = 0;
    this.Data = new Array(0)
}
function SPAnimation_Object(a, f, e, b, c, d) {
    this.Initialize(a, f, e, b, c, d)
}
function AnimationUnit(d, e, c, a, b) {
    this.Initialize(d, e, c, a, b)
}
function AnimationTelemetry() {
    this.perfData = new Array(0);
    this.logData = new Array(0);
    this.perfDataIndex = 0;
    this.logDataIndex = 0;
    this.animationIndex = 0;
    this.startTime = null;
    this.duration = null;
    this.numAddedUnits = 0
}
function GetCurrentAttributeValue(b, c) {
    var a = 0;
    switch (c) {
        case 1: if (fRightToLeft) a = parseInt(b.style.right.replace("px", ""));
        else a = parseInt(b.style.left.replace("px", ""));
            break;
        case 2: a = parseInt(b.style.top.replace("px", ""));
            break;
        case 3: a = parseInt(b.style.height.replace("px", ""));
            break;
        case 4: a = parseInt(b.style.width.replace("px", ""));
            break;
        case 5: a = GetOpacity(b)
    }
    return a
}
function TrySetProperty(b, c, d) {
    var a = false;
    if (b != null) try {
        b[c] = d;
        a = true
    }
        catch (e) { } return a
}
function B1(a) {
    return a * a * a
}
function B2(a) {
    return 3 * a * a * (1 - a)
}
function B3(a) {
    return 3 * a * (1 - a) * (1 - a)
}
function B4(a) {
    return (1 - a) * (1 - a) * (1 - a)
}
function BezierFunction(d, b, e, c, a) {
    return 0 * B4(a) + b * B3(a) + c * B2(a) + 1 * B1(a)
}
function GetAnimationWSA() {
    if (typeof SPAnimation.g_AnimationWSA == "undefined" || !Boolean(SPAnimation.g_AnimationWSA)) if (SP) if (SP.BWsaClient != null) {
        var a = GetWSA();
        SPAnimation.g_AnimationWSA = a;
        SPAnimation.g_AnimationWSA.createStream(SPAnimation.DATAID_SPANIMATION, 1, 8, 200)
    }
    return SPAnimation.g_AnimationWSA
}
var SPAnimationUtility;
function SPAnimUtil_TableAnimator(a) {
    this.tableElement = a;
    this.fAnimatable = false;
    this.Initialize()
}
function SiteLogoImagePageUpdate(a, b) {
    a.src = b.ImageUrl;
    a.alt = b.AlternateText
}
function SearchAreaPageUpdate(c, b) {
    var a = c.getElementsByTagName("select")[0];
    a.options[0].value = b.Site.value;
    a.options.length > 1 && a.remove(1);
    if (b.List.isValid) {
        a.options[1] = new Option(b.List.text, b.List.value);
        a.selectedIndex = 1
    }
    else a.selectedIndex = 0;
    if (typeof searchAreaUrl != "undefined") searchAreaUrl = b.SearchAreaUrl
}
var IsMenuShown, ChevronContainer, itemTableDeferred, imageCell, onKeyPress, downArrowText, currentEditMenu, currentItemID, currentItemAppName, currentItemProgId, currentItemIcon, currentItemOpenControl, currentItemOpenApp, currentItemFileUrl, currentItemFSObjType, currentItemContentTypeId, currentItemCheckedOutUserId, currentItemCheckoutExpires, currentItemModerationStatus, currentItemUIString, currentItemCheckedoutToLocal, bIsCheckout, currentItemCanModify, currentItemPermMaskH, currentItemPermMaskL, currentItemEvtType, currentItemIsEventsExcp, currentItemIsEventsDeletedExcp, g_MaximumSelectedItemsAllowed, g_CustomActionDialogHandlers, g_CustomActionDialogHandlerId, g_ExpGroupWPState, DocOpen, hoverTR, ecbTD;
function RowOnHover(b, c) {
    var g = b.getAttribute("iid"), f = CtxFromRow(b);
    if (CountSelectedItems(f) > 1 && ItemIsCurrentlySelected(f, g, b)) {
        ecbTD = null;
        hoverTR = null;
        for (var e = 0;
        e < b.childNodes.length;
        e++) {
            var d = b.childNodes[e];
            if (d.getAttribute("IsECB") == "TRUE") {
                OnChildItem(d);
                ecbTD = d;
                hoverTR = b;
                break
            }

        }
        var a = null;
        if (c != null) a = c.toElement != null ? c.toElement : c.target;
        if (a != null && b != a) {
            if (a.tagName != "DIV") a = GetAncestor(a, "DIV");
            if (a != null && typeof a.onmouseover == "function") a.onmouseover(c)
        }

    }

}
function RowHoverOff(e, c) {
    if (hoverTR == null || c == null || ecbTD == null || CountSelectedItems(CtxFromRow(e)) <= 1) return;
    var b = c.toElement != null ? c.toElement : c.relatedTarget;
    if (b != null && b.tagName != "TR") {
        var a = b.parentNode;
        while (a != null && a.tagName != "TR") a = a.parentNode;
        if (a == hoverTR) return
    }
    else if (b == hoverTR) return;
    var d = {};
    OutItem(d);
    ecbTD = null;
    hoverTR = null
}
function IsEventTargetAnchor(a) {
    var b = a.srcElement != null ? a.srcElement : a.target;
    return b != null && b.tagName.toUpperCase() == "A" ? true : false
}
function IsEventRightClickOnAnchor(a) {
    return a == null ? false : a.type == "contextmenu" ? IsEventTargetAnchor(a) : false
}
function ShowMenuForTrOuter(d, b, c) {
    if (b == null) return true;
    var a = b.srcElement;
    return a == null ? true : a.tagName.toLowerCase() == "div" && a.className.indexOf("ms-list-itemLink") >= 0 ? ShowCalloutMenuForTr(d, b, c) : true
}
function ShowCalloutMenuForTr(c, d, b) {
    var a = false;
    EnsureScriptFunc("callout.js", "Callout", function () {
        a = ShowCalloutMenuForTrInner(c, d, b)
    });
    return a
}
function ShowCalloutMenuForTrInner(h, c, g) {
    if (IsEventRightClickOnAnchor(c)) return true;
    var b = GetAncestor(h, "TR"), e = GetEcbTdFromRow(b), a = GetEcbDivFromEcbTd(e), d = GetEcbAffordanceDivFromRow(b);
    if (a == null) return true;
    g && SingleItemSelectByElement(b, false);
    var f = GetAttributeFromItemTable(a, "ItemId", "Id");
    OpenCallout(d, c, a, f);
    return false
}
function FIsMouseCursorInsideElement(a, c) {
    if (a == null || c == null || a.clientX == null || a.clientY == null || a.clientX == 0 || a.clientY == 0) return false;
    var b = c.getBoundingClientRect();
    return b.left <= a.clientX && b.right >= a.clientX && b.top <= a.clientY && b.bottom >= a.clientY ? true : false
}
function ShowECBMenuForTr(d, b) {
    if (IsEventRightClickOnAnchor(b)) return true;
    var c = GetAncestor(d, "TR"), f = GetEcbTdFromRow(c), a = GetEcbDivFromEcbTd(f);
    if (a == null) return true;
    c.className.indexOf("s4-itm-selected") < 0 && SingleItemSelectByElement(c, false);
    var g = IsAjaxMenu(a);
    itemTable = a;
    currentItemID = GetAttributeFromItemTable(a, "ItemId", "Id");
    currentCtx = g_ctxDict[a.getAttribute("CTXName")];
    if (g) {
        var e = FIsMouseCursorInsideElement(b, d);
        return CreateAjaxMenu(b, e)
    }
    else return CreateMenu(b)
}
var ProtocolCommand, phManager;
function CBSelectedValues(b, a) {
    this.strList = b;
    this.fAllChecked = a
}
function CBSelectedValues_InitializePrototype() {
    CBSelectedValues.prototype.strList = "";
    CBSelectedValues.prototype.fAllChecked = false
}
function PageContextInfo(e, n, h, m, q, p, r, k, c, a, j, l, o, g, i, f, d, b) {
    this.webServerRelativeUrl = e;
    this.webAbsoluteUrl = j;
    this.siteAbsoluteUrl = i;
    this.layoutsUrl = o;
    this.webLanguage = n;
    this.siteClientTag = l;
    this.currentLanguage = h;
    this.webUIVersion = m;
    this.pageListId = q;
    this.pageItemId = p;
    this.userId = r;
    this.alertsEnabled = k;
    this.siteServerRelativeUrl = c;
    this.allowSilverlightPrompt = a;
    this.tenantAppVersion = g;
    this.themedImageRootPath = f;
    this.themedImageFileNames = d;
    this.clientServerTimeDelta = b
}
function PageContextInfo_InitializePrototype() {
    PageContextInfo.prototype.webServerRelativeUrl = "";
    PageContextInfo.prototype.webAbsoluteUrl = "";
    PageContextInfo.prototype.siteAbsoluteUrl = "";
    PageContextInfo.prototype.serverRequestPath = "";
    PageContextInfo.prototype.layoutsUrl = "";
    PageContextInfo.prototype.siteClientTag = "";
    PageContextInfo.prototype.webLanguage = 0;
    PageContextInfo.prototype.webTitle = null;
    PageContextInfo.prototype.webLogoUrl = null;
    PageContextInfo.prototype.currentCultureName = null;
    PageContextInfo.prototype.currentUICultureName = null;
    PageContextInfo.prototype.currentLanguage = 0;
    PageContextInfo.prototype.crossDomainPhotosEnabled = false;
    PageContextInfo.prototype.webUIVersion = 0;
    PageContextInfo.prototype.pageListId = "";
    PageContextInfo.prototype.pageItemId = 0;
    PageContextInfo.prototype.userId = "";
    PageContextInfo.prototype.systemUserKey = "";
    PageContextInfo.prototype.alertsEnabled = false;
    PageContextInfo.prototype.siteServerRelativeUrl = "";
    PageContextInfo.prototype.allowSilverlightPrompt = "";
    PageContextInfo.prototype.tenantAppVersion = null;
    PageContextInfo.prototype.themedImageRootPath = null;
    PageContextInfo.prototype.themedImageFileNames = null;
    PageContextInfo.prototype.clientServerTimeDelta = 0
}
var _groupCollapse, _spPageContextInfo, bGridViewPresent, _fV4Calendar, _spCustomNavigateHierarchy, g_ExtensionNotSupportCheckoutToLocal, g_ExtensionDefaultForRead, bValidSearchTerm, ListCtrlObj, fListControl, fListErrorShown, fNewDoc, fNewDoc2, fNewDoc3, SPDesignerDownloadUrl, SPDesignerProgID;
function CtxRgiid(b, a) {
    this.ctx = b;
    this.rgiid = a
}
function CtxRgiid_InitializePrototype() {
    CtxRgiid.prototype = {
        ctx: undefined, rgiid: undefined
    }

}
function FilterNoteField(b, g, i, o) {
    if (o != 13) return;
    event.returnValue = false;
    var a = window.location.href, m = /&Paged=TRUE&p_[^&]*&PageFirstRow=[^&]*/gi;
    a = a.replace(m, "");
    var f = GetUrlKeyValue("View", true);
    if (f == "") {
        a = StURLSetVar2(a, "View", b);
        f = b
    }
    var e;
    if (b.toUpperCase() != f.toUpperCase()) {
        var k = escapeProperly(b);
        if (k.toUpperCase() != f.toUpperCase()) {
            var p = /\?[^?]*/i;
            e = a.indexOf("?");
            if (e != -1) a = a.replace(p, "?View=" + b);
            else a = a + "?View=" + b
        }

    }
    var c = a.match(new RegExp("FilterField([0-9]+)=" + g));
    if (c == null) {
        e = a.indexOf("?");
        if (e != -1) a = a + "&";
        else a = a + "?";
        var d = 0, h;
        do {
            d++;
            h = a.match(new RegExp("FilterField" + String(d) + "=[^&]*&FilterValue" + String(d) + "=[^&]*"))
        }
        while (h != null);
        a = a + "FilterField" + String(d) + "=" + g + "&FilterValue" + String(d) + "=" + escapeProperly(i);
        a = a.replace("Filter=1&", "")
    }
    else {
        var n = parseInt(c[1]), l = a.match(new RegExp("&FilterValue" + String(n) + "=[^&]*")), q = "&" + c[0] + l[0], j = "&FilterField" + c[1] + "=" + g + "&FilterValue" + c[1] + "=" + escapeProperly(i);
        a = a.replace(q, j);
        a = a.replace("Filter=1&", "")
    }
    window.location.href = STSPageUrlValidation(a)
}
function _SelectField(k, m) {
    var a = ajaxNavigate.get_href(), i = ajaxNavigate.get_hash(), b = false, e = /\#.*/i;
    a = a.replace(e, "");
    var h = GetUrlKeyValue("View", true), g = GetUrlKeyValue("PageView", true), j = GetUrlKeyValue("ID", true), f = GetUrlKeyValue("ContentTypeId", true);
    if (k.toUpperCase() != h.toUpperCase()) {
        var c = escapeProperly(k);
        if (c.toUpperCase() != h.toUpperCase()) {
            e = /\?[^?]*/i;
            var l = a.indexOf("?");
            if (l != -1) a = a.replace(e, "?View=" + c);
            else a = a + "?View=" + c;
            b = true
        }

    }
    if (!b && GetUrlKeyValue("SelectedID") != "") {
        var d = /&SelectedID=[^&]*/gi;
        a = a.replace(d, "");
        d = /\?SelectedID=[^&]*&?/;
        a = a.replace(d, "?")
    }
    a = a + "&SelectedID=";
    a = a + m;
    if (b && g != "") a = a + "&PageView=" + g;
    if (j != "") a = a + "&ID=" + j;
    if (f != "") a = a + "&ContentTypeId=" + f;
    if (i != "") a = a + i;
    _SubmitFormPost(a);
    return false
}
function getSortQueryParam(b) {
    if (b == null || b == "") return "";
    var c = "", a;
    a = b.match(new RegExp("SortField=[^&]*&SortDir=[^&]*"));
    if (a != null) c = a[0];
    return c
}
function _FilterField(d, b, a, c) {
    return FilterFieldV3(d, b, a, c, "", false)
}
function CompleteDecode(b) {
    if (typeof b == "undefined" || b == null) return b;
    var a = b, c = unescapeProperly(a);
    while (a != c) {
        a = c;
        c = unescapeProperly(a)
    }
    return a
}
function FilterFieldV3(l, k, i, t, r, G) {
    var g, a = Boolean(r) ? r : CanonicalizeUrlEncodingCase(ajaxNavigate.get_href()), v = new URI(a, {
        disableEncodingDecodingForLegacyCode: true
    });
    a = "?" + v.getQuery();
    var e, q, b = a.match(new RegExp("[&?]Paged=TRUE[^&]*"));
    if (b != null) {
        var c = /&p_[^&]*/gi;
        a = a.replace(c, "");
        c = /&PageFirstRow=[^&]*/gi;
        a = a.replace(c, "");
        c = /&PageLastRow=[^&]*/gi;
        a = a.replace(c, "");
        c = /&PagedPrev=TRUE[^&]*/i;
        a = a.replace(c, "");
        b = a.match(new RegExp("[?]Paged=TRUE[^&]*"));
        if (b != null) {
            g = a.substr(b.index).indexOf("&");
            if (g != -1) a = a.substr(0, b.index + 1) + a.substr(g + b.index + 1);
            else a = a.substr(0, b.index)
        }
        else {
            c = /&Paged=TRUE[^&]*/i;
            a = a.replace(c, "")
        }

    }
    var u = GetUrlKeyValue("View", true);
    if (u == "") {
        a = StURLSetVar2(a, "View", l);
        u = l
    }
    if (CompleteDecode(l.toUpperCase()) != CompleteDecode(u.toUpperCase())) {
        var H = /\?[^?]*/i;
        g = a.indexOf("?");
        if (g != -1) a = a.replace(H, "?View=" + l);
        else a = a + "?View=" + l
    }
    var s = true;
    b = a.match(new RegExp("FilterField([0-9]+)=" + k + "&"));
    if (!Boolean(b)) {
        b = a.match(new RegExp("FilterFields([0-9]+)=" + k + "&"));
        s = false
    }
    if (!Boolean(b)) if (0 == t) {
        a = a.replace("Filter=1&", "");
        a = a.replace("?Filter=1", "")
    }
    else {
        g = a.indexOf("?");
        if (g != -1) a = a + "&";
        else a = a + "?";
        var m = 0;
        do {
            m++;
            q = a.match(new RegExp("FilterField" + String(m) + "=[^&]*"));
            if (!Boolean(q)) q = a.match(new RegExp("FilterFields" + String(m) + "=[^&]*"))
        }
        while (q != null);
        a = a + "FilterField" + String(m) + "=" + k + "&FilterValue" + String(m) + "=" + escapeProperly(i);
        a = a.replace("Filter=1&", "")
    }
    else {
        e = parseInt(b[1]);
        var f = a.match(new RegExp("FilterValue" + String(e) + "=[^&]*"));
        if (!Boolean(f)) f = a.match(new RegExp("FilterValues" + String(e) + "=[^&]*"));
        var C = a.match(new RegExp("&FilterOp" + String(e) + "=[^&]*")), z = a.match(new RegExp("&FilterLookupId" + String(e) + "=[^&]*")), B = a.match(new RegExp("&FilterData" + String(e) + "=[^&]*")), j = "&" + b[0] + f[0];
        if (0 == t) {
            if (a.indexOf(j) == -1) {
                var F = b[0];
                j = F + f[0] + "&"
            }
            a = a.replace(j, "");
            if (C != null) a = a.replace(String(C[0]), "");
            if (z != null) a = a.replace(String(z[0]), "");
            if (B != null) a = a.replace(String(B[0]), "");
            a = restructureFilterUrl(a, e);
            a = a.replace("Filter=1&", "");
            a = a.replace("?Filter=1", "");
            a = a.replace("&Filter=1", "")
        }
        else {
            var o;
            if (a.indexOf(j) == -1) {
                j = "?" + b[0] + f[0];
                o = "?"
            }
            else o = "&";
            var p;
            if (ctxFilter == null || !ctxFilter.IsClientRendering) p = o + "FilterField" + b[1] + "=" + k + "&FilterValue" + b[1] + "=" + escapeProperly(i);
            else {
                var w = false, d = String(f[0].substr(f[0].indexOf("=") + 1)), h = [], n = [];
                if (s) {
                    d = unescapeProperly(d);
                    if (i != d) {
                        h.push(d);
                        h.push(i)
                    }

                }
                else {
                    n = ParseMultiColumnValue(unescapeProperly(d), ";#", true);
                    for (var A in n) {
                        if (n[A] == i) {
                            w = true;
                            continue
                        }
                        h.push(n[A])
                    }
                    !w && h.push(i)
                }
                d = escapeProperly(ConvertMultiColumnValueToString(h, null, false));
                var x = "FilterField", y = "&FilterValue";
                if (h.length > 1) {
                    x = "FilterFields";
                    y = "&FilterValues"
                }
                p = o + x + b[1] + "=" + k + y + b[1] + "=" + d;
                if (d == "" && s) {
                    p = "";
                    a = restructureFilterUrl(a, e)
                }

            }
            a = a.replace(j, p);
            a = a.replace("Filter=1&", "");
            a = a.replace("&Filter=1", "")
        }

    }
    var E = b;
    b = a.match(new RegExp("FilterField([0-9]+)="));
    if (!Boolean(b)) b = a.match(new RegExp("FilterFields([0-9]+)="));
    if (b == null && t == 0 && ctxFilter != null && (!ctxFilter.IsClientRendering || E != null && !Boolean(r))) a = a + "&FilterClear=1";
    else a = a.replace("&FilterClear=1", "");
    v.setQuery(a);
    a = v.getString();
    if (G) {
        var D = a.indexOf("?");
        D = a.substr(D + 1).indexOf("?");
        return a
    }
    else _SubmitFormPost(a);
    return null
}
function restructureFilterUrl(a, h) {
    var b = h + 1, f = a.match(new RegExp("FilterField" + String(b) + "=[^&]*")), g = false;
    if (!Boolean(f)) {
        f = a.match(new RegExp("FilterFields" + String(b) + "=[^&]*"));
        g = f != null
    }
    for (var e = h;
    f != null;
    e++) {
        var c = g ? "FilterFields" + String(e) : "FilterField" + String(e), d = g ? "FilterFields" + String(b) : "FilterField" + String(b);
        a = a.replace(d, c);
        c = g ? "FilterValues" + String(e) : "FilterValue" + String(e);
        d = g ? "FilterValues" + String(b) : "FilterValue" + String(b);
        a = a.replace(d, c);
        c = "FilterOp" + String(e);
        d = "FilterOp" + String(b);
        a = a.replace(d, c);
        c = "FilterLookupId" + String(e);
        d = "FilterLookupId" + String(b);
        a = a.replace(d, c);
        c = "FilterData" + String(e);
        d = "FilterData" + String(b);
        a = a.replace(d, c);
        b++;
        f = a.match(new RegExp("FilterField" + String(b) + "=[^&]*"));
        if (!Boolean(f)) f = a.match(new RegExp("FilterFields" + String(b) + "=[^&]*"))
    }
    return a
}
function CanonicalizeUrlEncodingCase(c) {
    for (var b = "", a = 0;
    a < c.length;
    a++) {
        var d = c.charAt(a);
        if (d == "%" && a + 2 < c.length) {
            b += d;
            a++;
            b += c.charAt(a).toString().toUpperCase();
            a++;
            b += c.charAt(a).toString().toUpperCase()
        }
        else b += d
    }
    return b
}
function _SetControlValue(b, c) {
    var a = document.getElementById(b);
    if (a != null) a.value = c
}
function SetSearchView() {
    if (typeof bValidSearchTerm != "undefined") bValidSearchTerm = true
}
function GroupCollapse() {
    return typeof _groupCollapse != "undefined" && _groupCollapse
}
function HandleFilter(e, b, d) {
    if (FV4UI()) {
        var a;
        try {
            a = typeof inplview.HandleFilterReal
        }
        catch (h) {
            a = "undefined"
        }
        var g = "inplview.HandleFilterReal", c = g.split(".");
        if (c.length > 1) {
            var f = function () {
                inplview.HandleFilterReal(e, b, d)
            };
            EnsureScript(c[0], a, f)
        }
        return
    }
    _SubmitFormPost(b)
}
function _SubmitFormPost(a, d, c) {
    if (typeof MSOWebPartPageFormName != "undefined") {
        var b = document.forms[MSOWebPartPageFormName];
        if (null != b) if (d != undefined && d == true || typeof b.onsubmit == "undefined" || b.onsubmit == null || b.onsubmit() != false) {
            typeof window.WebForm_OnSubmit == "function" && window.WebForm_OnSubmit();
            if (ajaxNavigate.get_search().match(new RegExp("[?&]IsDlg=1")) != null) a += a.indexOf("?") == -1 ? "?IsDlg=1" : "&IsDlg=1";
            if (FV4UI()) try {
                var e = SP.Ribbon.PageManager.get_instance().get_ribbon().get_selectedTabId();
                if (Boolean(e)) {
                    a = StURLSetVar2(a, "InitialTabId", escapeProperly(e));
                    a = StURLSetVar2(a, "VisibilityContext", "WSSTabPersistence")
                }

            }
                catch (f) { } if (c != undefined && c == true) {
                    a = DemoteIntoFormBody(b, a, "owsfileref");
                    a = DemoteIntoFormBody(b, a, "NextUsing")
                }
            b.action = STSPageUrlValidation(a);
            b.method = "POST";
            if (isPortalTemplatePage(a)) b.target = "_top";
            !bValidSearchTerm && _ClearSearchTerm("");
            b.submit()
        }

    }

}
function DemoteIntoFormBody(e, c, b) {
    var d = GetUrlKeyValue(b, false, c);
    if (d.length > 0) {
        var a = document.createElement("INPUT");
        if (a != null) {
            a.setAttribute("type", "hidden");
            a.setAttribute("id", b);
            a.setAttribute("name", b);
            a.setAttribute("value", d);
            e.appendChild(a);
            return RemoveUrlKeyValue(b, c)
        }

    }
    return c
}
function RemoveUrlKeyValue(c, a) {
    var b = new RegExp(c + "=[^&]*&");
    a = a.replace(b, "");
    b = new RegExp(c + "=[^&]*");
    a = a.replace(b, "");
    return a
}
function _RefreshPageTo(b, c, a) {
    EnsureScript("inplview", typeof inplview, null, true);
    inplview.RefreshPageTo(b, c, a)
}
var g_varSkipRefreshOnFocus;
function RefreshOnFocus() {
    (typeof g_varSkipRefreshOnFocus == "undefined" || !Boolean(g_varSkipRefreshOnFocus)) && _RefreshPage(1)
}
function RefreshOnFocusForOneRow() {
    RefreshOnFocus()
}
function DisableRefreshOnFocus() {
    g_varSkipRefreshOnFocus = 1
}
function SetWindowRefreshOnFocus() {
    window.onbeforeunload = DisableRefreshOnFocus;
    window.onfocus = RefreshOnFocus
}
function RemoveParametersFromUrl(a) {
    var b = a.indexOf("?");
    return b == -1 ? a : a.substr(0, b)
}
function _GoToPageRelative(a) {
    if (a.substr(0, 4) != "http" && a.substr(0, 1) != "/") {
        var b = RemoveParametersFromUrl(window.location.href), c = b.lastIndexOf("/");
        if (c > 0) a = b.substring(0, c + 1) + a
    }
    GoToPage(a)
}
function _EnterFolder(c) {
    var b = RemoveParametersFromUrl(window.location.href), a = RemoveParametersFromUrl(c), d = a != null && a.length > 0 && a.charAt(0) == "/" && a.length < b.length && b.indexOf(a) == b.length - a.length;
    if (!d && a.toLowerCase() != b.toLowerCase()) STSNavigate(c);
    else _SubmitFormPost(c)
}
function _HandleFolder(f, e, s, l, h, k, c, n, d, a, b, o, p, m, j, r) {
    var q = Boolean(a) && a != "", i = Boolean(b) && b != "", g = !IsNullOrUndefined(f.getAttribute("isEdit"));
    if (q && i || a == "OneNote.Notebook" && g) {
        if (c == "FALSE" && f != null && g && !IsNullOrUndefined(d)) c = d;
        DispEx(f, e, l, h, k, c, n, d, a, b, o, p, m, j, r)
    }
    else {
        e != null && CancelEvent(e);
        _EnterFolder(s)
    }

}
function UseDialogsForNewItem(a) {
    var b = GetCtxFromFormUrl(a), d = new URI(a), c = d.getQueryParameter("Type");
    return Boolean(b) && c == "1"
}
var g_useDialogAlwaysList;
function UseDialogsForFormsPages(b) {
    if (Boolean(b)) {
        var d = new URI(b), a = d.getLastPathSegment();
        if (Boolean(a)) {
            a = a.toLowerCase();
            for (var c = 0;
            c < g_useDialogAlwaysList.length;
            c++) if (a == g_useDialogAlwaysList[c]) return true
        }

    }
    return UseDialogsForFormsWithCtx(GetCtxFromFormUrl(b))
}
function GetCtxFromFormUrl(c) {
    var d = null, a = GetUrlKeyValue("LISTID", false, c.toUpperCase());
    if (a == "") a = GetUrlKeyValue("LIST", false, c.toUpperCase());
    if (a != "" && g_ctxDict != null) for (var e in g_ctxDict) {
        var b = g_ctxDict[e];
        if (Boolean(b.listName) && b.listName.toUpperCase() == a.toUpperCase()) {
            d = b;
            break
        }

    }
    return d
}
function UseDialogsForFormsWithCtx(a) {
    return a == null || typeof a.NavigateForFormsPages == "undefined" ? false : !Boolean(a.NavigateForFormsPages)
}
function _EditItemWithCheckoutAlert(c, a, b, d, g, h, f, e) {
    if (CheckoutAlertBeforeNavigate(a, b, d, g, h, f, e)) if (b == "1" && UseDialogsForFormsPages(a)) NewOrEditV4Core(c, a, true);
    else _EditItem2(c, a)
}
function _STSNavigateWithCheckoutAlert(a, g, b, e, f, d, c) {
    CheckoutAlertBeforeNavigate(a, g, b, e, f, d, c) && STSNavigate(a)
}
function ShowInPopUI(b, a, c) {
    var d = function () {
        if (a == null && typeof b.fromRibbon == "boolean" && b.fromRibbon && typeof b.currentCtx != "undefined" && b.currentCtx != null) a = b.currentCtx;
        if (typeof a != "undefined" && a != null && a.clvp != null) {
            var d = a.clvp;
            GetFocusInfo(b, d);
            d.ShowPopup(c)
        }
        else STSNavigate(c)
    };
    EnsureScript("inplview", typeof inplview, d)
}
function CheckoutAlertBeforeNavigate(g, f, d, c, e, a, b) {
    if (typeof a == "undefined" || a == null || a == "") a = currentItemCheckedOutUserId;
    if ((typeof b == "undefined" || b == null || b == "") && typeof ctx != "undefined") b = ctx.CurrentUserId;
    if (d == "1") {
        alert(Strings.STS.L_CannotEditPropertyForLocalCopy_Text);
        return false
    }
    if (a != null && a != "" && b != null && a != b) {
        alert(Strings.STS.L_CannotEditPropertyCheckout_Text);
        return false
    }
    if (f == "1") if (confirm(Strings.STS.L_ConfirmCheckout_Text)) {
        if (c.charAt(0) == "/" || c.substr(0, 3).toLowerCase() == "%2f") c = window.location.protocol + "//" + window.location.host + c;
        return CheckoutviaXmlhttp(e, c)
    }
    else return false;
    return true
}
function CheckoutviaXmlhttp(c, b) {
    var a, e;
    a = new XMLHttpRequest;
    if (a == null) return false;
    a.open("POST", c + "/_vti_bin/lists.asmx", false);
    a.setRequestHeader("Content-Type", "text/xml; charset=utf-8");
    a.setRequestHeader("SOAPAction", "http://schemas.microsoft.com/sharepoint/soap/CheckOutFile");
    var d = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><CheckOutFile xmlns="http://schemas.microsoft.com/sharepoint/soap/"><pageUrl>' + b + "</pageUrl></CheckOutFile></soap:Body></soap:Envelope>";
    a.send(d);
    return a.status == 200 && a.responseText.indexOf("true") != 0
}
function FSupportCheckoutToLocal(a) {
    var c = true;
    if (a == null || a == "") return false;
    a = a.toLowerCase();
    for (var b = 0, b = 0;
    b < g_ExtensionNotSupportCheckoutToLocal.length;
    b++) if (a == g_ExtensionNotSupportCheckoutToLocal[b]) return false;
    return true
}
function FDefaultOpenForReadOnly(a) {
    var c = false;
    if (a == null || a == "") return true;
    a = a.toLowerCase();
    for (var b = 0, b = 0;
    b < g_ExtensionDefaultForRead.length;
    b++) if (a == g_ExtensionDefaultForRead[b]) return true;
    return false
}
function CheckoutDocument(g, a, e) {
    var b = null, c = true, d = false;
    if (a.charAt(0) == "/" || a.substr(0, 3).toLowerCase() == "%2f") a = window.location.protocol + "//" + window.location.host + a;
    var f = SzExtension(unescapeProperly(a));
    if (FSupportCheckoutToLocal(f) && e == "SharePoint.OpenDocuments.3") b = StsOpenEnsureEx2(e);
    if (b != null && !browseris.chrome) try {
        c = typeof b.CheckoutDocumentPrompt != "undefined" && b.CheckoutDocumentPrompt(unescapeProperly(a), false, "");
        c && RefreshOnFocus();
        d = c;
        if (d || !(IsSupportedMacBrowser() || IsSupportedFirefoxOnWin())) return c
    }
        catch (i) { } if (!d) {
            var h = "FileName=" + escapeProperly(unescapeProperly(a)) + "&Checkout=true";
            NavigateToCheckinAspx(g, h)
        }
    return true
}
function NewOrEditV4Core(a, b, c) {
    var d = function () {
        var b = CLVPFromEventReal(a);
        GetFocusInfo(a, b)
    };
    a != null && EnsureScript("inplview", typeof InitAllClvps, d);
    if (c) _OpenPopUpPage(b, RefreshOnDialogClose);
    else _OpenPopUpPage(b, RefreshPage);
    return false
}
function _NewItem2(b, a) {
    if (UseDialogsForNewItem(a) || UseDialogsForFormsPages(a)) return NewOrEditV4Core(b, a);
    else {
        _NewItem(a);
        return undefined
    }

}
function _NewItem(a) {
    GoToPage(a)
}
function _EditItem2(b, a) {
    if (UseDialogsForFormsPages(a)) return NewOrEditV4Core(b, a);
    _EditItem(a);
    return false
}
function _EditItem(a) {
    GoToPage(a)
}
function _CorrectUrlForRefreshPageSubmitForm() {
    var b = window.location.href;
    if (typeof g_MinimalDownload != "undefined" && g_MinimalDownload) {
        var d = ajaxNavigate.getSavedFormAction();
        if (d != null && d.length > 0) b = d
    }
    var a = ajaxNavigate.getParam("ServerFilter");
    if (typeof a != "undefined" && null != a && a.length > 0) {
        a = a.replace(/-/g, "&").replace(/&&/g, "-");
        var f = GetUrlKeyValue("RootFolder", true, a), e = GetUrlKeyValue("RootFolder", true);
        if ("" == f && "" != e) a += "&RootFolder=" + e;
        var c = new URI(b, {
            disableEncodingDecodingForLegacyCode: true
        });
        c.setFragment("");
        c.setQuery(a);
        return c.getString()
    }
    return b
}
function _RefreshPage(a) {
    var b = function () {
        SetFocusBack(a)
    };
    if (a == 1) _SubmitFormPost(_CorrectUrlForRefreshPageSubmitForm());
    else EnsureScript("inplview", typeof InitAllClvps, b)
}
function AJAXRefreshView(a, c) {
    if (a == null || !(typeof a.fakeEvent == "boolean" && a.fakeEvent || typeof a.csrAjaxRefresh == "boolean" && a.csrAjaxRefresh || typeof a.fromRibbon == "boolean" && a.fromRibbon)) _RefreshPage(c);
    else if (c == SP.UI.DialogResult.OK) {
        var b;
        try {
            b = typeof inplview.HandleRefreshView
        }
        catch (g) {
            b = "undefined"
        }
        var f = "inplview.HandleRefreshView", d = f.split(".");
        if (d.length > 1) {
            var e = function () {
                inplview.HandleRefreshView(a)
            };
            EnsureScript(d[0], b, e)
        }

    }

}
function AJAXRefreshViewOnDialogClose(a) {
    AJAXRefreshView(a, SP.UI.DialogResult.OK)
}
function RefreshOnDialogClose() {
    _RefreshPage(SP.UI.DialogResult.OK)
}
function OpenPopUpPageWithDialogOptions(c) {
    var d = function () {
        var a = SP.UI.ModalDialog.showModalDialog(c)
    }
    , b;
    try {
        b = typeof SP.UI.ModalDialog.showModalDialog
    }
    catch (e) {
        b = "undefined"
    }
    EnsureScript("SP.UI.Dialog.js", b, d);
    var a = window.event;
    if (a != null) if (a.stopPropagation != null) a.stopPropagation();
    else a.cancelBubble = true
}
function OpenPopUpPageWithTitle(f, a, d, b, c) {
    var e = {
        url: f, args: null, title: c, dialogReturnValueCallback: a, width: d, height: b
    };
    OpenPopUpPageWithDialogOptions(e)
}
function SetupAndOpenDialogForCustomAction(a, j, g, i) {
    if (typeof a == "undefined" || a == null || a.length == 0) return;
    var d = a.indexOf("//", 0), b = -1;
    if (d == -1) b = a.indexOf("/", 0);
    else b = a.indexOf("/", d + 2);
    var h = "";
    if (b == -1) b = a.length - 1;
    h = a.substring(0, b);
    var f = {
        url: a, args: null, title: i, dialogReturnValueCallback: CustomActionDialogCloseCallback, width: j, height: g
    }
    , k = EnsureScriptParams("SP.UI.Dialog.js", "SP.UI.ModalDialog.showModalDialog", f), e = g_CustomActionDialogHandlerId, c = function (a) {
        if (typeof a.data == "undefined" || typeof a.data == null || a.data != "CloseCustomActionDialogRefresh" && a.data != "CloseCustomActionDialogNoRefresh") return;
        if (typeof a.origin == "undefined" || typeof a.origin == null) return;
        var c = function () {
            var b = SP.UI.ModalDialog.get_childDialog();
            if (a.data == "CloseCustomActionDialogRefresh") b.close(0);
            else b.close(1)
        }
        , b;
        try {
            b = typeof SP.UI.ModalDialog.get_childDialog
        }
        catch (a) {
            b = "undefined"
        }
        EnsureScript("SP.UI.Dialog.js", b, c);
        a.data == "CloseCustomActionDialogNoRefresh" && RemoveCustomActionDialogPostMessageHandler(e)
    };
    g_CustomActionDialogHandlers[g_CustomActionDialogHandlerId] = c;
    g_CustomActionDialogHandlerId++;
    if (typeof window.addEventListener != "undefined") window.addEventListener("message", c, false);
    else typeof window.attachEvent != "undefined" && window.attachEvent("onmessage", c)
}
function CustomActionDialogCloseCallback(a) {
    a == 0 && RefreshOnDialogClose()
}
function RemoveCustomActionDialogPostMessageHandler(b) {
    var a = g_CustomActionDialogHandlers[b];
    if (typeof a == "function") {
        if (typeof window.removeEventListener != "undefined" && typeof window.removeEventListener != null) window.removeEventListener("message", a, false);
        else typeof window.detachEvent != "undefined" && typeof window.detachEvent != null && window.detachEvent("onmessage", a);
        delete g_CustomActionDialogHandlers[b]
    }

}
function _OpenPopUpPage(d, a, c, b) {
    OpenPopUpPageWithTitle(d, a, c, b, null)
}
function _RemoveQueryStringsAndHash(a) {
    if (Boolean(a)) {
        var b = a.indexOf("#");
        if (b >= 0) a = a.substr(0, b);
        b = a.indexOf("?");
        if (b >= 0) a = a.substr(0, b)
    }
    return a
}
function _OpenCreateWebPageDialog(a) {
    if (!Boolean(a) && typeof _spPageContextInfo != "undefined" && _spPageContextInfo.webServerRelativeUrl != null) {
        a = _spPageContextInfo.webServerRelativeUrl;
        if (a.charAt(a.length - 1) != "/") a = a + "/";
        a = a + "_layouts/15/createwebpage.aspx"
    }
    var b = ajaxNavigate.get_href();
    b = _RemoveQueryStringsAndHash(b);
    a = StURLSetVar2(a, "Url", escapeProperly(b));
    if (FV4UI()) {
        var c = {};
        commonModalDialogOpen(a, c, null, null)
    }
    else GoToPage(a)
}
function _EditLink2(a, b) {
    var c = function () {
        var d = GetGotoLinkUrl(a);
        if (d == null) return false;
        var c = window["ctx" + String(b)];
        if (c != null && c.clvp != null && UseDialogsForFormsWithCtx(c)) {
            var e = c.clvp;
            PreventDefaultNavigation();
            e.ShowPopup(d);
            return false
        }
        GoToLinkOrDialogNewWindow(a);
        return false
    };
    EnsureScript("inplview", typeof inplview, c)
}
function EditLink(a, b) {
    if (FV4UI()) EditLink2(a, b);
    else GoToLink(a)
}
function _GoBack(a) {
    window.location.href = unescapeProperly(GetSource(a))
}
function _ReplyItem(a, b, d, c) {
    if (b.length >= 504) alert(Strings.STS.L_ReplyLimitMsg_Text);
    else {
        a += "?Threading=" + b;
        a += "&Guid=" + d;
        a += "&Subject=" + c;
        GoToPage(a)
    }

}
function GoBacktoCurrentIssue(a, b) {
    a += "?ID=" + b;
    GoToPage(a)
}
function _ExportToDatabase(c, d, e, b) {
    if (g_expDatabase == null) {
        var a = GetCookie("databaseBtnText");
        if (a != null && a != "0") try {
            g_expDatabase = new ActiveXObject("SharePoint.ExportDatabase")
        }
            catch (f) {
                return
            }
        else if (a == null) GetDataBaseInstalled();
        else return
    }
    if (g_expDatabase != null && typeof g_expDatabase.DoExport != "undefined") if (browseris.ie5up && browseris.win32) try {
        g_expDatabase.SiteUrl = makeAbsUrl(c);
        g_expDatabase.ListID = d;
        g_expDatabase.ViewID = e;
        g_expDatabase.DoExport(b)
    }
        catch (f) {
            alert(Strings.STS.L_ExportDBFail_Text);
            return
        }
    else alert(Strings.STS.L_NoWSSClient_Text)
}
function _ExportList(a) {
    var b = typeof navigator.msProtocols == "function" && navigator.msProtocols.excel;
    !b && g_ssImporterObj == null && EnsureSSImporter();
    if (!b && g_ssImporterObj == null) (g_fSSImporter || GetCookie("EnsureSSImporter") == null) && EnsureSSImporter(true);
    if (IsSupportedMacBrowser()) {
        if (g_fSSImporter != null && typeof g_ssImporterObj.IqyExportEnabled != "undefined" && g_ssImporterObj.IqyExportEnabled && typeof g_ssImporterObj.IqyExport != "undefined") {
            var c = g_ssImporterObj.IqyExport(makeAbsUrl(a));
            if (!c) window.location.href = STSPageUrlValidation(makeAbsUrl(a))
        }
        else if (confirm(Strings.STS.L_ExportListSpreadsheet_Text)) window.location.href = STSPageUrlValidation(makeAbsUrl(a))
    }
    else if (b || g_fSSImporter != false && typeof g_ssImporterObj.IqyImportEnabled != "undefined" && g_ssImporterObj.IqyImportEnabled() || confirm(Strings.STS.L_ExportListSpreadsheet_Text)) window.location.href = STSPageUrlValidation(makeAbsUrl(a))
}
function ExportDiagram(l, e, k, f, h, g) {
    if (g_objDiagramLaunch == null) {
        var a = GetCookie("digInstalled");
        if (a != null && a != "0") try {
            g_objDiagramLaunch = new ActiveXObject("DiagramLaunch.DiagramLauncher")
        }
            catch (m) {
                return
            }
        else if (a == null) GetDiagramLaunchInstalled();
        else return
    }
    if (g_objDiagramLaunch != null && typeof g_objDiagramLaunch.CreateDiagram != "undefined") try {
        var c = "", i = l, d = g, b = e, j = k;
        g_objDiagramLaunch.CreateDiagram(c, i, d, b, f, h, j)
    }
        catch (m) {
            alert(Strings.STS.L_DiagramLaunchFail_Text)
        }

}
function OpenTasks(g, a, f, b, e, d) {
    var c = "ms-project:ost|u|" + g + "|l|" + a + "|i|" + f + "|n|" + b + "|v|" + e + "|g|" + d;
    window.location.href = c
}
function CatchListCreateError() {
    alert(Strings.STS.L_EditInGrid_Text);
    fListErrorShown = true;
    return false
}
function RegisterTouchOverride(a, b) {
    if (a.getAttribute("hasTouchHandler") != "true") if (window.navigator.msMaxTouchPoints != null && window.navigator.msMaxTouchPoints > 0) {
        AttachEvent("MSPointerDown", function (a) {
            a.target.setAttribute("pointerType", a.pointerType.toString())
        }
        , a);
        a.setAttribute("hasTouchHandler", "true")
    }
    else if (document.documentElement != null && "ontouchstart" in document.documentElement) {
        AttachEvent("touchstart", function (a) {
            if (b(a)) {
                a.preventDefault != null && a.preventDefault();
                a.stopPropagation != null && a.stopPropagation()
            }

        }
        , a);
        a.setAttribute("hasTouchHandler", "true")
    }

}
function EnsureListControl() {
    if (!fListControl) {
        fListErrorShown = false;
        if (browseris.ie5up && browseris.win32) {
            var b = 'try{    ListCtrlObj = new ActiveXObject("ListNet.ListNet");    if (ListCtrlObj)        fListControl = true;} catch (e){    fListControl = false;};', a = new Function(b);
            a()
        }
        else {
            window.onerror = CatchListCreateError;
            ListCtrlObj = new ActiveXObject("ListNet.ListNet");
            if (ListCtrlObj != null) fListControl = true
        }

    }
    ListCtrlObj = null;
    return fListControl
}
function IsVoteOK(a) {
    if (1 == a) alert(Strings.STS.L_NoQuestion_Text);
    else if (2 == a) alert(Strings.STS.L_NoVoteAllowed_Text);
    else return true;
    return false
}
function hasHighChar(b) {
    for (var a = 0, a = 0;
    a < b.length;
    a++) if (b.charCodeAt(a) > 127) return true;
    return false
}
function _ClearSearchTerm(a) {
    if (typeof MSOWebPartPageFormName != "undefined") {
        var c = document.forms[MSOWebPartPageFormName];
        if (null != c) if (a != null) {
            var b = c["SearchString" + a];
            if (b != null) b.value = ""
        }

    }
    bValidSearchTerm = true
}
function _SubmitSearchRedirect(b) {
    var a = document.forms.frmSiteSearch;
    if (a == null) if (typeof MSOWebPartPageFormName != "undefined") a = document.forms[MSOWebPartPageFormName];
    if (a != null) {
        var e;
        if (typeof a.elements.SearchString != "undefined") e = a.elements.SearchString;
        var c = e.value.trim();
        if (c === Strings.STS.L_SharepointSearch_Text || c === "") return false;
        b = b + "?k=" + escapeProperly(c);
        var f = a.elements.SearchScope;
        if (f != null) {
            var d = f.value;
            if (Boolean(d)) b = b + "&u=" + escapeProperly(d)
        }
        window.location.href = b
    }
    return false
}
function ShowGridUrlInHTML(a) {
    if (a.indexOf("?") > 0) a = a + "&";
    else a = a + "?";
    a = a + "ShowInGrid=HTML";
    return a
}
function SearchOnBodyLoad() {
    var a = document.getElementById("idSearchString");
    if (a != null && (a.value.trim() === Strings.STS.L_SharepointSearch_Text || a.value.trim() === "")) a.className = "ms-sharepointsearchtext"
}
function SearchOnBlur() {
    var a = document.getElementById("idSearchString");
    if (a != null && a.value.trim() === "") {
        a.value = Strings.STS.L_SharepointSearch_Text;
        a.className = "ms-sharepointsearchtext"
    }

}
function SearchOnFocus() {
    var a = document.getElementById("idSearchString");
    if (a != null && a.value.trim() === Strings.STS.L_SharepointSearch_Text) {
        a.value = "";
        a.className = "ms-searchtext"
    }

}
function SubmitSearch() {
    _SubmitSearchForView("")
}
function _SubmitSearchForView(e) {
    var a = document.forms[0], c = "SearchString" + e, d = a.elements[c].value;
    if ("" == d) {
        alert(Strings.STS.L_Enter_Text);
        a.elements[c].focus()
    }
    else {
        var b;
        b = RemovePagingArgs(a.action);
        if (typeof bGridViewPresent != "undefined" && bGridViewPresent) b = ShowGridUrlInHTML(b);
        a.action = b;
        a.submit()
    }

}
function IsKeyDownSubmit(a) {
    if (a != null) {
        var c, b;
        if (browseris.ie) {
            c = a.keyCode;
            b = Number(a.altKey || a.ctrlKey)
        }
        else {
            c = a.which;
            b = typeof a.modifers != "undefined" && typeof a.ALT_MASK != "undefined" && typeof a.CONTROL_MASK != "undefined" ? a.modifers & (a.ALT_MASK | a.CONTROL_MASK) : 0
        }
        if (c == 13 && !Boolean(b)) return true
    }
    return false
}
function SearchViewKeyDown(a) {
    IsKeyDownSubmit(event) && _SubmitSearchForView(a)
}
function SearchKeyDown(b, a) {
    if (IsKeyDownSubmit(b)) {
        _SubmitSearchRedirect(a);
        return false
    }
    return true
}
function SearchKeyDownGoSearch(a) {
    if (IsKeyDownSubmit(a)) {
        typeof GoSearch != "undefined" && GoSearch();
        return false
    }
    return true
}
function _AlertAndSetFocus(b, a) {
    a.focus();
    a.select();
    window.alert(b)
}
function _AlertAndSetFocusForDropdown(b, a) {
    a.focus();
    window.alert(b)
}
function setElementValue(c, b) {
    var a = document.getElementsByName(c)[0];
    if (a == null) return false;
    a.value = b;
    return true
}
function GetMultipleSelectedText(a) {
    var c = "";
    if (a != null) for (var e = a.options.length, d = true, b = 0;
    b < e;
    b++) if (a.options[b].selected) {
        if (!d) c += ",";
        else d = false;
        c += a.options[b].text
    }
    return c
}
function GetCBSelectedValues(c) {
    if (c == null) return null;
    for (var a = "", e = true, f = c.elements.length, d = 0;
    d < f;
    d++) {
        var b = c.elements[d];
        if (b.type == "checkbox" && !b.disabled) if (b.checked) {
            if (a != "") a += ",";
            a += b.value
        }
        else e = false
    }
    return new CBSelectedValues(a, e)
}
function editDocumentWithProgID(a, b) {
    if (fNewDoc) {
        if (a.charAt(0) == "/" || a.substr(0, 3).toLowerCase() == "%2f") a = window.location.protocol + "//" + window.location.host + a;
        if (!fNewDoc2 && !fNewDoc3) (typeof EditDocumentButton.EditDocument == "undefined" || !EditDocumentButton.EditDocument(a, b)) && alert(Strings.STS.L_EditDocumentRuntimeError_Text);
        else (typeof EditDocumentButton.EditDocument2 == "undefined" || !EditDocumentButton.EditDocument2(window, a, b)) && alert(Strings.STS.L_EditDocumentRuntimeError_Text)
    }
    else alert(Strings.STS.L_EditDocumentProgIDError_Text)
}
function GetSPDDownLoadUrl() {
    var a = typeof navigator.userLanguage == "string" ? navigator.userLanguage : null;
    if (!Boolean(a)) a = navigator.browserLanguage;
    return SPDesignerDownloadUrl + "?clid=" + a
}
function PHSucceed(b, a) {
    phManager.SetProtocolHandlerEnabled(b, a)
}
function _EditInSPD(a, e) {
    var b = GetSPDDownLoadUrl();
    if (a.charAt(0) == "/") a = window.location.protocol + "//" + window.location.host + a;
    var c = ajaxNavigate.convertMDSURLtoRegularURL(a);
    if (phManager.ShouldTryProtocolHandler("ms-spd")) {
        navigator.msLaunchUri(phManager.CreateProtocolHandlerUrl("ms-spd", c, ProtocolCommand.Edit, null), function () {
            PHSucceed("ms-spd", true)
        }
        , function () {
            PHSucceed("ms-spd", false);
            d()
        });
        return
    }
    d();
    function d() {
        if (phManager.IsProtocolHandlerEnabled("ms-spd")) {
            window.location.href = phManager.CreateProtocolHandlerUrl("ms-spd", unescapeProperly(c), ProtocolCommand.Edit, null);
            return
        }
        var d = StsOpenEnsureEx2("SharePoint.OpenDocuments.3");
        if (d != null && typeof d.EditDocument3 != "undefined") {
            if (!d.EditDocument3(window, a, false, SPDesignerProgID)) window.open(b);
            else if (e) window.onfocus = RefreshOnNextFocus
        }
        else window.open(b)
    }

}
function editDocumentWithProgID2(e, a, h, g, f, b, i) {
    editDocumentWithProgIDNoUI(e, a, h, g, f, b, i, c, d);
    function c() {
        if (a == SPDesignerProgID) {
            var b = GetSPDDownLoadUrl();
            window.open(b)
        }
        else alert(Strings.STS.L_EditDocumentRuntimeError_Text);
        window.onfocus = RefreshOnNextFocus
    }
    function d() {
        alert(Strings.STS.L_EditDocumentProgIDError_Text)
    }

}
function editDocumentWithProgIDNoUI(a, d, e, h, n, l, c, i, j) {
    var b, f = false;
    e = e.replace(/(?:\.\d+)$/, "");
    if (a.charAt(0) == "/" || a.substr(0, 3).toLowerCase() == "%2f") a = window.location.protocol + "//" + window.location.host + a;
    var m = SzExtension(unescapeProperly(a));
    if (phManager.ShouldTryProtocolHandler(c)) {
        navigator.msLaunchUri(phManager.CreateProtocolHandlerUrl(c, a, ProtocolCommand.Edit, null), function () {
            PHSucceed(c, true)
        }
        , function () {
            PHSucceed(c, false);
            g()
        });
        return
    }
    g();
    function g() {
        var a = k();
        if (a == 1 && i != null) i();
        else a == 2 && j != null && j()
    }
    function k() {
        if (!IsNullOrUndefined(c) && c != "" && phManager.IsProtocolHandlerEnabled(c)) {
            window.location.href = phManager.CreateProtocolHandlerUrl(c, a, ProtocolCommand.Edit, null);
            return 0
        }
        if (FSupportCheckoutToLocal(m)) try {
            b = StsOpenEnsureEx2(e + ".3");
            if (b != null) {
                if (h == "1") {
                    if (typeof b.CheckoutDocumentPrompt == "undefined") return 1;
                    if (!b.CheckoutDocumentPrompt(a, true, d)) return 1
                }
                else {
                    if (l == "1") f = true;
                    if (!b.EditDocument3(window, a, f, d)) return 1
                }
                var g = false;
                g = b.PromptedOnLastOpen();
                if (g) window.onfocus = RefreshOnNextFocus;
                else SetWindowRefreshOnFocus();
                return 0
            }

        }
            catch (i) { } if (h == "1") if (confirm(Strings.STS.L_ConfirmCheckout_Text)) NavigateToCheckinAspx(n, "FileName=" + escapeProperly(unescapeProperly(a)) + "&Checkout=true");
            else return 0;
        b = StsOpenEnsureEx2(e);
        if (b != null) {
            try {
                if (!b.EditDocument2(window, a, d)) return 1;
                if (e == "SharePoint.OpenXMLDocuments") SetWindowRefreshOnFocus();
                else window.onfocus = RefreshOnNextFocus;
                return 0
            }
            catch (i) { } try {
                window.onfocus = null;
                if (SzExtension(a) == "ppt" && d == "") d = "PowerPoint.Slide";
                if (!b.EditDocument(a, d)) return 1;
                SetWindowRefreshOnFocus();
                return 0
            }
            catch (i) {
                return 2
            }

        }
        return 1
    }

}
function RefreshOnNextFocus() {
    SetWindowRefreshOnFocus()
}
function createNewDocumentWithProgID2Ex(g, b, a, d, c, e, f) {
    createNewDocumentWithProgID2(b, a, d, c, e, f)
}
function createNewDocumentWithProgID2(b, a, f, e, c, d) {
    createNewDocumentWithProgIDCore(b, a, f, c, false, d, function () {
        createNewDocumentWithProgIDCore(b, a, e, c, true, d)
    })
}
function createNewDocumentWithProgIDEx(f, b, a, c, d, e) {
    createNewDocumentWithProgID(b, a, c, d, e)
}
function createNewDocumentWithProgID(b, a, c, d, e) {
    createNewDocumentWithProgIDCore(b, a, c, d, true, e)
}
function createNewDocumentWithProgIDCore(e, d, i, m, l, b, j) {
    var a, c, f, g = false;
    if (phManager.ShouldTryProtocolHandler(b)) {
        navigator.msLaunchUri(phManager.CreateProtocolHandlerUrl(b, e, ProtocolCommand.New, d), function () {
            PHSucceed(b, true)
        }
        , function () {
            PHSucceed(b, false);
            h()
        });
        return
    }
    h();
    function h() {
        !k() && j != null && j()
    }
    function k() {
        if (Boolean(b) && phManager.IsProtocolHandlerEnabled(b)) {
            window.location.href = phManager.CreateProtocolHandlerUrl(b, e, ProtocolCommand.New, d);
            return true
        }
        if (m) {
            c = Strings.STS.L_NewFormLibTb1_Text;
            f = Strings.STS.L_NewFormLibTb2_Text
        }
        else {
            c = Strings.STS.L_NewDocLibTb1_Text;
            f = Strings.STS.L_NewDocLibTb2_Text
        }
        try {
            a = StsOpenEnsureEx2(i + ".2");
            (typeof a.CreateNewDocument2 == "undefined" || !a.CreateNewDocument2(window, e, d)) && alert(c);
            g = typeof a.PromptedOnLastOpen != "undefined" && a.PromptedOnLastOpen();
            if (g) window.onfocus = RefreshOnNextFocus;
            else SetWindowRefreshOnFocus();
            return true
        }
        catch (h) { } try {
            a = StsOpenEnsureEx2(i + ".1");
            window.onfocus = null;
            (typeof a.CreateNewDocument == "undefined" || !a.CreateNewDocument(e, d)) && alert(c);
            SetWindowRefreshOnFocus();
            return true
        }
        catch (h) {
            l && alert(f)
        }
        return undefined
    }

}
function createNewDocumentWithRedirect2(i, d, b, e, f, c, h, a, g) {
    createNewDocumentWithRedirect(d, b, e, f, c, h, a, g)
}
function createNewDocumentWithRedirect(f, b, a, g, e, h, d, c) {
    if (h) if (IsClientAppInstalled(a, c, null)) createNewInClient(f, b, a, g, c);
    else createNewInBrowser(e, b, a, d);
    else if (IsClientAppInstalled(a, c, null) && d != 1) createNewInClient(f, b, a, g, c);
    else createNewInBrowser(e, b, a, d)
}
function createNewInClient(c, b, d, e, f) {
    var a = d.replace(/(?:\.\d+)$/, "");
    createNewDocumentWithProgID(c, b, a, e, f)
}
function createNewInBrowser(a, f, g, e) {
    a = a + "&SaveLocation=" + makeAbsUrl(escapeProperly(f));
    a = AddInfoPathParametersToUrl(a, g, null, e);
    a = AddSourceToUrl(a);
    var d = new URI(a), b = false;
    if (Boolean(d)) {
        var c = d.getPath(true);
        if (Boolean(c) && c.toLowerCase().indexOf("createnewdocument.aspx") != -1) b = true
    }
    if (b) _OpenPopUpPage(a, OnCloseDialogNavigate);
    else STSNavigate(a)
}
function OnCloseDialogNavigate(b, a) {
    b == SP.UI.DialogResult.OK && Boolean(a) && STSNavigate(a)
}
function LRUCache() {
    this.state = [];
    this.ageStack = [];
    this.count = 0
}
function LRUCache_InitializePrototype() {
    LRUCache.prototype.state = [];
    LRUCache.prototype.ageStack = [];
    LRUCache.prototype.count = 0
}
function LRUCache_Add(a, b) {
    if (a == null) return;
    var c = a.state[b];
    if (c != null) a.ageStack[c] = null;
    else a.count++;
    var d = a.ageStack.length;
    a.state[b] = d;
    a.ageStack.push(b)
}
function LRUCache_Remove(a, b) {
    if (a == null) return;
    var c = a.state[b];
    if (c != null) {
        a.ageStack[c] = null;
        a.state[b] = null;
        a.count--
    }

}
function _AddGroupToCookie(c) {
    var a = ExpGroupFetchWebPartID(c);
    if (a == null) return;
    LRUCache_Add(g_ExpGroupWPState, a);
    if (g_ExpGroupTable[a] == null) g_ExpGroupTable[a] = new LRUCache;
    var b = ExpGroupFetchGroupString(c);
    if (b == null) return;
    LRUCache_Add(g_ExpGroupTable[a], b);
    ExpGroupRenderCookie()
}
function _RemoveGroupFromCookie(d) {
    var a = ExpGroupFetchWebPartID(d);
    if (a == null) return;
    if (g_ExpGroupTable[a] == null) return;
    LRUCache_Add(g_ExpGroupWPState, a);
    var c = ExpGroupFetchGroupString(d);
    if (c == null) return;
    var b;
    for (b in g_ExpGroupTable[a].state) g_ExpGroupTable[a].state[b] != null && b.substring(0, c.length) == c && LRUCache_Remove(g_ExpGroupTable[a], b);
    ExpGroupRenderCookie()
}
function ExpGroupRenderCookie() {
    if (g_ExpGroupWPState == null) return;
    for (var c = ExpGroupWPListName + "=", a = 0, d = g_ExpGroupWPState.ageStack.length - 1;
    d >= 0;
    d--) if (g_ExpGroupWPState.ageStack[d] != null) {
        var b = g_ExpGroupWPState.ageStack[d];
        if (a == ExpGroupMaxWP) {
            DeleteCookie(ExpGroupCookiePrefix + b);
            break
        }
        else if (g_ExpGroupTable[b] == null) {
            a++;
            if (a > 1) c += escapeProperly(ExpGroupCookieDelimiter);
            c += escapeProperly(b)
        }
        else if (g_ExpGroupTable[b].count == 0) DeleteCookie(ExpGroupCookiePrefix + b);
        else if (a < ExpGroupMaxWP) {
            a++;
            ExpGroupRenderCookieForWebPart(b);
            if (a > 1) c += escapeProperly(ExpGroupCookieDelimiter);
            c += escapeProperly(b)
        }

    }
    if (a == 0) DeleteCookie(ExpGroupWPListName);
    else document.cookie = c
}
function ExpGroupRenderCookieForWebPart(a) {
    if (!g_ExpGroupTable[a].ageStack) return;
    for (var d = ExpGroupCookiePrefix + a + "=", e = true, c = g_ExpGroupTable[a].ageStack.length - 1;
    c >= 0;
    c--) if (g_ExpGroupTable[a].ageStack[c] != null) {
        var f = g_ExpGroupTable[a].ageStack[c], b = "";
        if (!e) b += escapeProperly(ExpGroupCookieDelimiter);
        b += escapeProperly(f);
        if (d.length + b.length <= ExpGroupMaxCookieLength) {
            d += b;
            e = false
        }

    }
    document.cookie = d + ";"
}
function ExpDataViewGroupOnPageLoad() {
    ExpGroupOnPageLoad("PageLoad")
}
function ExpGroupOnPageLoad(a) {
    var b = document.getElementById("GroupByColFlag");
    if (b != null) {
        g_ExpGroupNeedsState = true;
        ExpGroupParseCookie(a)
    }

}
function ExpGroupParseCookie(a) {
    var d = GetCookie(ExpGroupWPListName);
    if (d == null) return;
    g_ExpGroupParseStage = true;
    for (var e = d.split(ExpGroupCookieDelimiter), c = e.length - 1;
    c >= 0;
    c--) {
        var b = e[c];
        LRUCache_Add(g_ExpGroupWPState, b);
        if (g_ExpGroupTable[b] == null) document.getElementById("GroupByCol" + b) != null && ExpGroupParseCookieForWebPart(b, a)
    }
    g_ExpGroupParseStage = false;
    if (Boolean(a) && g_ExpGroupXSLTQueue.length > 0) ExpGroupFetchData(g_ExpGroupXSLTQueue.shift(), a);
    else !Boolean(a) && g_ExpGroupCAMLQueue.length > 0 && ExpGroupFetchData(g_ExpGroupCAMLQueue.shift(), a)
}
function ExpGroupParseCookieForWebPart(c, f) {
    var n = GetCookie(ExpGroupCookiePrefix + c);
    if (n == null) return;
    var o = n.split(ExpGroupCookieDelimiter), e, b;
    g_ExpGroupTable[c] = new LRUCache;
    for (b = o.length - 1;
    b >= 0;
    b--) {
        e = o[b];
        LRUCache_Add(g_ExpGroupTable[c], e)
    }
    var d = [], q = document.getElementById("GroupByCol" + c).parentNode, j = q.getElementsByTagName("TBODY");
    for (b = 0;
    b < j.length;
    b++) {
        e = j[b].getAttribute("groupString");
        if (e != null) {
            var k = j[b].id;
            if (k == null) continue;
            var a = k.substring(4, k.length), s = a.substring(0, a.indexOf("-")), m = g_ctxDict["ctx" + s];
            if (m == null || !m.isXslView && Boolean(f) || m.isXslView && !Boolean(f)) {
                g_ExpGroupTable[c] = null;
                break
            }
            if (g_ExpGroupTable[c].state[e] != null && d[a] == null) {
                ExpCollGroup(a, "img_" + a, f);
                d[a] = true;
                var p = document.getElementById("tbod" + a + "_");
                if (p != null) {
                    var r = p.getAttribute("isLoaded");
                    if (r == "false") if (Boolean(f)) g_ExpGroupXSLTQueue.push(a);
                    else g_ExpGroupCAMLQueue.push(a)
                }

            }

        }

    }
    var g;
    for (g in d) {
        var l = g.indexOf("_");
        if (l != g.length - 1 && l != -1) {
            var h = g.substring(0, l + 1);
            if (d[h] == null) {
                var i = ExpGroupFetchGroupString(h);
                if (i != null) {
                    LRUCache_Add(g_ExpGroupWPState, i);
                    ExpCollGroup(h, "img_" + h, f);
                    d[i] = true
                }

            }

        }

    }

}
function _ExpGroupBy(s) {
    if (browseris.w3c && !browseris.ie) document.all = document.getElementsByTagName("*");
    var j = document.all, o = j.length, u = s.getElementsByTagName("IMG"), e = u[0], l = e.getAttribute("src"), x = l.lastIndexOf("/"), k = l.slice(x + 1), h = GetThemedImageUrl("commentexpand12.png"), r = GetThemedImageUrl("commentcollapse12.png"), f = "auto";
    if (l == h || k == "plus.gif") {
        f = "";
        if (k == "plus.gif") e.src = "/_layouts/15/images/minus.gif";
        else e.src = h
    }
    else {
        f = "none";
        if (k == "minus.gif") e.src = "/_layouts/15/images/plus.gif";
        else e.src = GetThemedImageUrl("commentcollapse12.png")
    }
    var t = e.name;
    e.name = e.alt;
    e.alt = t;
    var c = e;
    while (c != null) {
        c = c.parentNode;
        if (c != null && c.id != null && c.id.length > 5 && c.id.substr(0, 5) == "group") break
    }
    var b = c;
    while (b != null) {
        b = b.parentNode;
        if (b != null && b.tagName == "TABLE") break
    }
    var d = null;
    if (b != null) {
        d = b.lastChild;
        if (d != null && d.tagName == "TBODY") d = d.lastChild;
        if (d != null && d.tagName == "TR" && d.lastChild != null) d = d.lastChild
    }
    for (var a, g = 0;
    g < o;
    g++) {
        a = j[g];
        if (a == c) break
    }
    for (var q = c.id.slice(5), w = parseInt(q), i = f, m = g + 1;
    m < o;
    m++) {
        a = j[m];
        if (a.id.length > 5 && a.id.substr(0, 5) == "group") {
            var v = parseInt(a.id.slice(5));
            if (v <= w) return
        }
        b = a;
        while (b != null) {
            b = b.parentNode;
            if (b == c) break
        }
        if (b == c) continue;
        if (a.id != null && a.id.substring(0, 5) == "group") f = i;
        if (a.id != null && a.id.substring(0, 8) == "footer" + q) f = i;
        if (i != "none" && a != e && a.tagName == "IMG" && a.src != null) {
            var p = "/_layouts/15/images/plus.gif", n = "/_layouts/15/images/minus.gif";
            if (a.getAttribute("src") == h || a.src.slice(a.src.length - p.length) == p) f = "none";
            else if (a.getAttribute("src") == r || a.src.slice(a.src.length - n.length) == n) f = ""
        }
        if (a.tagName == c.tagName && a.id != "footer") a.style.display = f;
        if (a.tagName == "TABLE" && d == null || a == d) break
    }

}
function SzExtension(a) {
    var c = new String(a), b = /^.*\.([^\.]*)$/;
    return c.replace(b, "$1").toLowerCase()
}
function SzServer(a) {
    var c = new String(a), b = /^([^:]*):\/\/([^\/]*).*$/;
    return c.replace(b, "$1://$2")
}
var v_stsOpenDoc, v_strStsOpenDoc;
function NavigateParentOrSelf(b, a) {
    if (b.target == "_top" && typeof window.frameElement.navigateParent != "undefined") window.frameElement.navigateParent(a);
    else STSNavigate(a)
}
function StsOpenEnsureEx(a) {
    if (v_stsOpenDoc == null || v_strStsOpenDoc != a) if (window.ActiveXObject != null) try {
        v_stsOpenDoc = new ActiveXObject(a);
        v_strStsOpenDoc = a
    }
        catch (b) {
            v_stsOpenDoc = null;
            v_strStsOpenDoc = null
        }
    return v_stsOpenDoc
}
function _DispDocItem(b, a) {
    return _DispDocItemEx(b, "FALSE", "FALSE", "FALSE", a)
}
function _DispDocItemExWithServerRedirect(d, c, j, g, i, f, k, a) {
    var e = a != null && a != "", h = IsClientAppInstalled(f, null, d) && HasRights(16, 0) || SzExtension(d.href) == "pdf";
    if (e) {
        a = a.substring(1);
        e = a != ""
    }
    if (e) if (k == "1" || !h) {
        var b = a;
        b = AddInfoPathParametersToUrl(b, f, d, DocOpen.BROWSER);
        b = AddSourceToUrl(b);
        if (ajaxNavigate.get_search().match(new RegExp("[?&]IsDlg=1")) != null) typeof window.frameElement.navigateParent != "undefined" && window.frameElement.navigateParent(b);
        else if (c.shiftKey || c.ctrlKey) return true;
        else NavigateParentOrSelf(d, b);
        c.cancelBubble = true;
        c.returnValue = false;
        return false
    }
    return DispDocItemExWithEvent(d, c, j, g, i, f)
}
function _DispDocItemEx(e, c, a, b, d) {
    return DispDocItemExWithEvent(e, null, c, a, b, d)
}
function DispDocItemExWithEvent(f, g, r, o, q, c, l, p) {
    var h;
    itemTable = FindSTSMenuTable(f, "CTXName");
    if (!browseris.ie && !IsSupportedMacBrowser() && !IsSupportedNPApiBrowserOnWin()) {
        if (browseris.ie) event.cancelBubble = false;
        h = f.href;
        if (ajaxNavigate.get_search().match(new RegExp("[?&]IsDlg=1")) != null) typeof window.frameElement.navigateParent != "undefined" && window.frameElement.navigateParent(h);
        else STSNavigate(h);
        return false
    }
    var a, b, e = true, i = "", s = document.getElementById("FileDialogViewTable");
    if (s != null) {
        if (browseris.ie) {
            event.cancelBubble = false;
            event.returnValue = false
        }
        return true
    }
    var d = itemTable != null ? GetAttributeFromItemTable(itemTable, "App", null) : "", k = Boolean(f.getAttribute("isEdit")) || d == "ms-infopath";
    b = itemTable != null ? GetAttributeFromItemTable(itemTable, "Url", "ServerUrl") : "";
    if (b == null || b == "") {
        if (k) b = f.editHref;
        if (!Boolean(b)) b = f.href
    }
    else b = SzServer(f.href) + b;
    var j = SzExtension(b), n = k && HasRights(0, 4) && !FDefaultOpenForReadOnly(j) && (!Boolean(currentItemCheckedOutUserId) || currentItemCheckedOutUserId == ctx.CurrentUserId);
    if (!Boolean(d)) d = f.getAttribute("App");
    if (phManager.ShouldTryProtocolHandler(d)) {
        navigator.msLaunchUri(phManager.CreateProtocolHandlerUrl(d, b, n ? ProtocolCommand.Edit : ProtocolCommand.View, null), function () {
            PHSucceed(d, true)
        }
        , function () {
            PHSucceed(d, false);
            if (l != null && !(k && p)) l();
            else m()
        });
        return CancelMyEvent(false, a, g, true)
    }
    return m();
    function m() {
        if (Boolean(d) && phManager.IsProtocolHandlerEnabled(d)) if (d != null && d != "") {
            window.location.href = phManager.CreateProtocolHandlerUrl(d, b, n ? ProtocolCommand.Edit : ProtocolCommand.View, null);
            return CancelMyEvent(false, a, g, true)
        }
        if (currentItemProgId == null && itemTable != null) currentItemProgId = GetAttributeFromItemTable(itemTable, "Type", "HTMLType");
        if (currentItemProgId != null) i = currentItemProgId;
        if (FDefaultOpenForReadOnly(j)) {
            if (c.indexOf("SharePoint.OpenDocuments") >= 0) c = "SharePoint.OpenDocuments.3"
        }
        else if (!FSupportCheckoutToLocal(j)) c = "";
        if (currentItemCheckedOutUserId == null && itemTable != null && typeof itemTable.COUId == "string") currentItemCheckedOutUserId = itemTable.COUId;
        if (currentItemCheckedoutToLocal == null && itemTable != null) currentItemCheckedoutToLocal = GetAttributeFromItemTable(itemTable, "COut", "IsCheckedoutToLocal ");
        if (currentItemCheckedOutUserId != null && currentItemCheckedOutUserId != "" && currentItemCheckedOutUserId == ctx.CurrentUserId && (c == "" || c.indexOf("SharePoint.OpenDocuments") >= 0) && FSupportCheckoutToLocal(j) || c == "SharePoint.OpenDocuments") c = "SharePoint.OpenDocuments.3";
        var m = 2;
        if (c != "" && HasRights(16, 0)) {
            if (c.indexOf(".3") >= 0) m = 3;
            a = StsOpenEnsureEx2(c);
            if (a == null && m == 3) {
                c = c.replace(".3", ".2");
                a = StsOpenEnsureEx2(c);
                m = 2
            }

        }
        if (a != null) if (m == 2 || itemTable == null && currentItemCheckedOutUserId == null || ctx.isVersions == 1 && (itemTable == null || typeof itemTable.isMostCur != "string" || itemTable.isMostCur == "0")) {
            try {
                if (currentItemCheckedOutUserId != null && currentItemCheckedOutUserId != "" && (currentItemCheckedOutUserId == ctx.CurrentUserId || ctx.CurrentUserId == null)) if (currentItemCheckedoutToLocal == "1") {
                    alert(Strings.STS.L_OpenDocumentLocalError_Text);
                    e = false
                }
                else e = typeof a.EditDocument2 != "undefined" && a.EditDocument2(window, b, i);
                else e = typeof a.ViewDocument2 != "undefined" && a.ViewDocument2(window, b, i)
            }
            catch (t) {
                e = false
            }
            if (e) window.onfocus = RefreshOnNextFocus
        }
        else {
            var l = 0;
            if (currentItemCheckedOutUserId != "") if (currentItemCheckedOutUserId != ctx.CurrentUserId && ctx.CurrentUserId != null) l = 1;
            else if (currentItemCheckedoutToLocal == null || currentItemCheckedoutToLocal != "1") l = 2;
            else l = 4;
            else if (!HasRights(0, 4) || FDefaultOpenForReadOnly(j)) l = 1;
            else if (ctx.isForceCheckout == true) l = 3;
            try {
                if (k) e = typeof a.EditDocument3 != "undefined" && a.EditDocument3(window, b, false, i);
                else e = typeof a.ViewDocument3 != "undefined" && a.ViewDocument3(window, b, l, i)
            }
            catch (t) {
                e = false
            }
            if (e) {
                var p = typeof a.PromptedOnLastOpen != "undefined" && a.PromptedOnLastOpen();
                if (p) window.onfocus = RefreshOnNextFocus;
                else SetWindowRefreshOnFocus()
            }

        }
        else currentItemCheckedoutToLocal == "1" && alert(Strings.STS.L_OpenDocumentLocalError_Text);
        if (a == null || !e) {
            if (r == "TRUE" && o == "TRUE" && q == "TRUE") {
                if (itemTable == null) return e;
                if (browseris.ie) {
                    event.cancelBubble = true;
                    event.returnValue = false
                }
                else if (IsSupportedMacBrowser() || IsSupportedFirefoxOnWin()) {
                    typeof g.preventDefault != "undefined" && g.preventDefault();
                    typeof g.stopPropagation != "undefined" && g.stopPropagation()
                }
                var s = new Function("return " + itemTable.getAttribute("CTXName") + ".HttpRoot;");
                h = s() + "/_layouts/15/htmltrverify.aspx?doc=" + escapeProperly(b);
                if (ajaxNavigate.get_search().match(new RegExp("[?&]IsDlg=1")) != null) typeof window.frameElement.navigateParent != "undefined" && window.frameElement.navigateParent(h);
                else GoToPage(h)
            }
            else if (ajaxNavigate.get_search().match(new RegExp("[?&]IsDlg=1")) != null) typeof window.frameElement.navigateParent != "undefined" && window.frameElement.navigateParent(f.href);
            else STSNavigate(f.href);
            return false
        }
        return CancelMyEvent(e, a, g)
    }

}
function CancelMyEvent(b, d, a, c) {
    if (browseris.ie) {
        if (event != null) {
            event.cancelBubble = true;
            event.returnValue = false
        }

    }
    else if (IsSupportedMacBrowser() || IsSupportedNPApiBrowserOnWin()) {
        if (c || d != null && b) {
            typeof a.preventDefault != "undefined" && a.preventDefault();
            typeof a.stopPropagation != "undefined" && a.stopPropagation()
        }
        return true
    }
    return b
}
function DispDocItemEx2(b, d, l, j, k, r, m, c, f) {
    var a, u = false, o = f != null && f != "", e = IsClientAppInstalled(c, null, b) && HasRights(16, 0), h = !IsNullOrUndefined(b.getAttribute("isEdit"));
    function p() {
        a = f;
        a = AddInfoPathParametersToUrl(a, c, b, DocOpen.BROWSER);
        a = AddSourceToUrl(a);
        if (h) {
            var e = new URI(a);
            e.setQueryParameter("action", "edit");
            a = e.getString()
        }
        if (ajaxNavigate.get_search().match(new RegExp("[?&]IsDlg=1")) != null) typeof window.frameElement.navigateParent != "undefined" && window.frameElement.navigateParent(a);
        else if (d.shiftKey || d.ctrlKey) return true;
        else NavigateParentOrSelf(b, a);
        d.cancelBubble = true;
        d.returnValue = false;
        return false
    }
    if (SzExtension(b.href).indexOf("pdf") != -1) {
        var g = b, q = h && Boolean(g.editHref) ? g.editHref : g.href;
        g.href = q;
        STSNavigate(q);
        return false
    }
    if (o) {
        itemTable = FindSTSMenuTable(b, "CTXName");
        var i = itemTable != null ? GetAttributeFromItemTable(itemTable, "App", null) : "";
        if (!Boolean(i)) i = b.getAttribute("App");
        var s = !e && browseris.ie10standardUp && Boolean(i) && (m == "0" || h) && HasRights(0, 32);
        if (!s && (m == "1" && !(e && h && HasRights(0, 32)) || !e)) return p();
        else if (e) if (c == "" || c.indexOf("SharePoint.OpenDocuments") >= 0) return DispDocItemExWithEvent(b, d, l, j, k, r);
        else {
            !ViewDoc(b.href, c) && editDocumentWithProgIDNoUI(b.href, currentItemProgId, c, "0", ctx.HttpRoot, "0", i, n, n);
            var t = StsOpenEnsureEx2(c);
            return CancelMyEvent(false, t, d)
        }

    }
    function n() {
        a = f;
        a = AddInfoPathParametersToUrl(a, c, b, -1);
        a = AddSourceToUrl(a);
        if (ajaxNavigate.get_search().match(new RegExp("[?&]IsDlg=1")) != null) typeof window.frameElement.navigateParent != "undefined" && window.frameElement.navigateParent(a);
        else NavigateParentOrSelf(b, a)
    }
    return DispDocItemExWithEvent(b, d, l, j, k, c, o ? p : null, e)
}
function DispDocItemExWithOutContext(o, n, e, a, d, i, g, m, k, b, h, j, f, c, l) {
    DispEx(o, n, e, a, d, i, g, m, k, b, h, j, f, c, l)
}
function AddSourceToUrl(a) {
    var d = a.toLowerCase().indexOf("/wopiframe.aspx?") > 0;
    if (d) {
        document.cookie = "WOPISessionContext=" + GetSource() + ";path=/;";
        return a
    }
    else {
        var b = GetSource(), c = a.length + b.length;
        if (c > 1950) return a;
        else {
            var e = a.indexOf("?") >= 0 ? "&" : "?";
            return a + e + "Source=" + b
        }

    }

}
function IsInfoPathProgId(a) {
    return a != null && (a.startsWith("SharePoint.OpenXMLDocuments") || a.startsWith("SharePoint.OpenXmlDocuments")) ? true : false
}
function AddInfoPathParametersToUrl(b, d, f, c) {
    if (IsInfoPathProgId(d)) {
        var e = IsClientAppInstalled(d, null, f) && HasRights(16, 0), g = b.indexOf("?") >= 0 ? "&" : "?", a = b + g + "ClientInstalled=" + String(e);
        if (c != -1) a = a + "&DefaultItemOpen=" + String(c);
        return a.length > 1950 ? b : a
    }
    else return b
}
function _VerifyFolderHref(a, d, m, l, f, j, b, c) {
    var h = d.button == Sys.UI.MouseButton.rightButton, k = GetRedirectedHref(a.href, f, j, b, c, false, h, a), i = b != null && b != "" && c != null && c.length > 1;
    if (i) {
        if (Boolean(a.getAttribute("isEdit"))) a.editHref = a.href;
        if (!(b == "OneNote.Notebook" && f == "0")) a.href = k;
        else {
            var e = GetCurrentCtx();
            if (e != null && typeof getHostUrl == "function") {
                var g = ListItemDataFromId(e, a.parentNode.id);
                if (g != null) a.href = getHostUrl(e.HttpRoot) + g.FileRef
            }

        }
        d.cancelBubble = true;
        d.returnValue = true;
        DetachEvent("mousedown", VerifyFolderHref, a)
    }
    return false
}
function _VerifyHref(a, d, c, f, b) {
    var g = d.button == Sys.UI.MouseButton.rightButton, i = GetRedirectedHref(a.href, c, f, null, b, false, g, a), h = b != null && b.length > 1, e = IsClientAppInstalled(f, null, a) && HasRights(16, 0);
    if (h) {
        if (c == "1" && !(e && !IsNullOrUndefined(a.getAttribute("isEdit"))) || !e) {
            if (Boolean(a.getAttribute("isEdit"))) a.editHref = a.href;
            if (c == "1") a.href = i;
            d.cancelBubble = true;
            d.returnValue = true
        }
        DetachEvent("mousedown", VerifyHref, a)
    }
    return false
}
function GetRedirectedHref(c, k, e, f, b, g, j, h) {
    var d = b != null && b != "" && (!g || f != null && f != ""), i = IsClientAppInstalled(e, null, h) && HasRights(16, 0);
    if (d) {
        b = b.substring(1);
        d = b != ""
    }
    var a = c;
    if (d) if (g || k == "1" || !i) {
        a = b;
        if (!IsInfoPathProgId(e) && c.indexOf("?") < 0 && j) a = c + "?Web=1";
        else if (GetUrlKeyValue("Web", true, c, true) == "1") a = c;
        else {
            a = AddInfoPathParametersToUrl(a, e, h, DocOpen.BROWSER);
            a = AddSourceToUrl(a)
        }
        a = STSPageUrlValidation(a)
    }
    return a
}
function _DispEx(p, a, h, e, g, k, c, o, m, b, j, l, i, f, d) {
    if (a.shiftKey || a.ctrlKey) return true;
    var n = document.getElementById("FileDialogViewTable");
    if (n != null) {
        a.cancelBubble = false;
        a.returnValue = false;
        return true
    }
    if (typeof ctx == "undefined" || ctx == null) ctx = new ContextInfo;
    CtxSetCurrentUserId(l);
    if (i == "1") CtxSetIsForceCheckout(true);
    else CtxSetIsForceCheckout(false);
    currentItemCheckedOutUserId = j;
    currentItemCheckedoutToLocal = f;
    currentItemProgId = m;
    if (d != null && d != "") {
        SetCurrentPermMaskFromString(d, null);
        if (c == "0" && !HasRights(0, 32)) c = "1"
    }
    a.cancelBubble = true;
    if (b != null && b != "") b = b.substring(1);
    return DispDocItemEx2(p, a, h, e, g, k, c, o, b)
}
function IsClientAppInstalled(c, e, b) {
    if (e != null && phManager.IsProtocolHandlerEnabled(e)) return true;
    if (b != null) {
        itemTable = FindSTSMenuTable(b, "CTXName");
        var a = itemTable != null ? GetAttributeFromItemTable(itemTable, "App", null) : "";
        if (!Boolean(a)) a = b.getAttribute("App");
        if (Boolean(a) && phManager.IsProtocolHandlerEnabled(a)) return true
    }
    var d = null;
    if (c != "") d = StsOpenEnsureEx2(c);
    return d != null
}
function ViewDoc(d, c) {
    var a = StsOpenEnsureEx2(c), b = false;
    if (a != null) try {
        b = typeof a.ViewDocument2 != "undefined" && a.ViewDocument2(window, d)
    }
        catch (e) {
            b = false
        }
    return b
}
function _PortalPinToMyPage3(a, c, b) {
    a.action = c + "_vti_bin/portalapi.aspx?Cmd=PinToMyPage";
    if (typeof a.ReturnUrl != "undefined") a.ReturnUrl.value = window.location.href;
    if (typeof a.ListViewUrl != "undefined" && typeof a.ListViewUrl.value != "undefined") a.ListViewUrl.value = MakeMtgInstanceUrl(a.ListViewUrl.value, b);
    a.submit()
}
function _PortalPinToMyPage(a, g, e, f, b, d, h, c) {
    a.action = g + "_vti_bin/portalapi.aspx?Cmd=PinToMyPage";
    SetFieldValue(a, "ReturnUrl", window.location.href);
    SetFieldValue(a, "ListViewUrl", MakeMtgInstanceUrl(d, e));
    SetFieldValue(a, "ListTitle", f);
    SetFieldValue(a, "ListDescription", b);
    SetFieldValue(a, "BaseType", h);
    SetFieldValue(a, "ServerTemplate", c);
    a.submit()
}
function SetFieldValue(c, b, d) {
    var a = c[b];
    if (a == null) {
        a = document.createElement("INPUT");
        a.setAttribute("type", "hidden");
        a.setAttribute("name", b);
        c.appendChild(a)
    }
    a.value = d
}
function _MoveToViewDate(b, a, c) {
    var d = function () {
        var d;
        if (Boolean(c)) d = SP.UI.ApplicationPages.CalendarInstanceRepository.lookupInstance(c);
        else d = SP.UI.ApplicationPages.CalendarInstanceRepository.firstInstance();
        if (d != null) if (a != null) typeof d.moveToViewType != "undefined" && d.moveToViewType(a);
        else typeof d.moveToDate != "undefined" && d.moveToDate(b)
    };
    if (FV4UI() && typeof _fV4Calendar != "undefined" && _fV4Calendar) AjaxCalendarCall(d);
    else MoveToViewDatePostBack(b, a)
}
function MoveToViewDatePostBack(c, b) {
    var a = window.location.href;
    if (c != null) a = StURLSetVar2(a, "CalendarDate", escapeProperly(c));
    if (b != null) a = StURLSetVar2(a, "CalendarPeriod", b);
    _SubmitFormPost(a, true)
}
function AjaxCalendarCall(b) {
    var a;
    try {
        a = typeof SP.UI.ApplicationPages.CalendarInstanceRepository
    }
    catch (c) {
        a = "undefined"
    }
    EnsureScript("SP.js", a, b)
}
function _MoveToDate(a, b) {
    _MoveToViewDate(a, null, b)
}
function MoveToToday() {
    _MoveToViewDate("", null)
}
function MoveView(a) {
    _MoveToViewDate(null, a)
}
function _ClickDay(a) {
    _MoveToDate(a)
}
function GetIframe() {
    return null
}
function _GetMonthView(c) {
    var b = window.location.href, a = document.getElementById("ExpandedWeeksId");
    if (a != null) {
        a.value = c;
        _SubmitFormPost(b, true)
    }

}
function NewItemDT(a, c, b) {
    if (a == null) return;
    if (b != null) a = StURLSetVar2(a, "CalendarTime", b);
    if (c != null) a = StURLSetVar2(a, "CalendarDate", c);
    _NewItem(a)
}
function ClickTime(b, a) {
    NewItemDT(b, null, a)
}
function NewItemDay(b, a) {
    NewItemDT(b, a, null)
}
function ScrollToAnchorInInnerScrollPane(k, h, j) {
    try {
        var l = document.getElementById(k), b = document.getElementById(l[h].value);
        if (typeof b == "undefined" || b == null) throw "";
        var d = b.parentNode.previousSibling;
        if (typeof d != "undefined" && d != null) {
            var e = d.previousSibling;
            if (typeof e != "undefined" && e != null) b = e;
            else b = d
        }
        else throw "";
    }
    catch (o) {
        for (var f = null, i = document.anchors.length, g = 0;
        g < i;
        g++) {
            f = document.anchors[g];
            var m = f.href;
            if (m.search(new RegExp(j)) != -1) {
                b = f;
                break
            }

        }

    }
    if (typeof b != "undefined" && b != null) {
        var c = b.parentNode;
        while (c != null && c.tagName != "TABLE") c = c.parentNode;
        if (typeof c != "undefined" && c != null) {
            var a = c.parentNode;
            while (a != null && (a.tagName != "DIV" || a.style.overflow != "auto")) a = a.parentNode;
            if (typeof a != "undefined" && a != null) {
                var n = b.offsetLeft;
                a.scrollLeft = n;
                a.scrollTop = c.offsetTop - a.clientHeight + c.offsetHeight
            }

        }

    }

}
function FilterChoice(d, h, E, u) {
    var a, g = 0, f = false, l = "", w = d.id, v = d.name, j = "", r = "", s = h.getAttribute("choices"), D = s != null ? s : "", c = D.split("|"), z = 0, A = h.offsetHeight, q = h.getAttribute("optHid"), C = q != null ? q : "", x = c.length - 1, m = -1, p = false, o = "";
    if (d != null && d.selectedIndex >= 0) {
        f = true;
        o = d.options[d.selectedIndex].innerText
    }
    for (a = 0;
    a < c.length;
    a = a + 2) {
        var b = c[a];
        while (a < x - 1 && c[a + 1].length == 0) {
            b = b + "|";
            a++;
            if (a < x - 1) b = b + c[a + 1];
            a++
        }
        var k = c[a + 1], i = b.toLocaleLowerCase(), B = E.toLocaleLowerCase();
        if (u.length != 0) f = true;
        if (i.indexOf(B) == 0) {
            var n = u.toLocaleLowerCase();
            if (n.length != 0 && i.indexOf(n) == 0 && j.length == 0) f = false;
            if (i.length > 20) p = true;
            if (!f || i == o) {
                l += '<option selected value="' + k + '">' + STSHtmlEncode(b) + "</option>";
                f = true;
                j = b;
                r = k;
                m = a
            }
            else l += '<option value="' + k + '">' + STSHtmlEncode(b) + "</option>";
            g++
        }

    }
    var t = ' ondblclick="HandleOptDblClick()" onkeydown="HandleOptKeyDown()"', e = "";
    if (p) e = '<select tabIndex="-1" ctrl="' + h.id + '" name="' + v + '" id = "' + w + '"' + t;
    else e = '<select class="ms-lookuptypeindropdown" tabIndex="-1" ctrl="' + h.id + '" name="' + v + '" id = "' + w + '"' + t;
    if (g == 0) e += ' style="display:none;position:absolute;z-index:2;left:' + String(z) + "px;top:" + String(A) + 'px" onfocusout="OptLoseFocus(this)"></select>';
    else e += ' style="position:absolute;z-index:2;left:' + String(z) + "px;top:" + String(A) + 'px" size="' + String(g <= 8 ? g : 8) + '"' + (g == 1 ? 'multiple="true"' : "") + ' onfocusout="OptLoseFocus(this)">' + l + "</select>";
    d.outerHTML = e;
    var y = document.getElementById(C);
    if (m != 0 || c[1] != "0") y.value = r;
    else y.value = "0";
    return m != 0 || c[1] != "0" ? j : ""
}
function _OptLoseFocus(a) {
    var b = a.getAttribute("ctrl"), c = b != null ? b : "", d = document.getElementById(c);
    a.selectedIndex >= 0 && _SetCtrlFromOpt(d, a);
    a.style.display = "none"
}
function SetCtrlMatch(b, a) {
    var c = b.getAttribute("optHid"), e = c != null ? c : "", d = document.getElementById(e);
    d.value = a.options[a.selectedIndex].value;
    if (d.value != "0") b.match = a.options[a.selectedIndex].innerText;
    else b.match = ""
}
function _SetCtrlFromOpt(a, b) {
    var c = a.getAttribute("optHid"), d = c != null ? c : "", e = document.getElementById(d);
    e.value = b.options[b.selectedIndex].value;
    a.value = b.options[b.selectedIndex].innerText;
    if (b.options[b.selectedIndex].value == 0) a.match = "";
    else a.match = a.value;
    typeof a.onValueSetFromPicker == "function" && a.onValueSetFromPicker()
}
function HandleOptDblClick() {
    var a = event.srcElement, b = a.getAttribute("ctrl"), d = b != null ? b : "", c = document.getElementById(d);
    _SetCtrlFromOpt(c, a);
    SetCtrlMatch(c, a);
    a.style.display = "none"
}
function HandleOptKeyDown() {
    var a = event.srcElement, b = a.getAttribute("ctrl"), c = b != null ? b : "", d = document.getElementById(c), e = event.keyCode;
    switch (e) {
        case 13: case 9: _SetCtrlFromOpt(d, a);
            event.returnValue = false;
            a.style.display = "none";
            return
    }
    return
}
function CommitInlineEditChange(tr, cancel) {
    if (tr.cells.length > 0) {
        var c = tr.cells[0];
        if (c.width == "1%") eval(cancel == true ? c.firstChild.lastChild.href : c.firstChild.firstChild.href);
        else if (tr.cells.length > 1) {
            c = tr.cells[1];
            if (c.width == "1%") eval(cancel == true ? c.firstChild.lastChild.href : c.firstChild.firstChild.href)
        }

    }

}
function InlineEditNextTR(tr, nextTr, element, down) {
    var inlineEditString;
    if (nextTr != null) {
        _inlineEditString = tr.getAttribute("automode") + "#";
        var index = null;
        while (element != null && element.nodeType == 1 && element.getAttribute("automode") == null) {
            var siblingCount = 0, sibling = element.previousSibling;
            while (sibling != null) {
                siblingCount++;
                sibling = sibling.previousSibling
            }
            if (index == null) index = String(siblingCount);
            else index = String(siblingCount) + "," + index;
            element = element.parentNode
        }
        _inlineEditString += index;
        var tab = nextTr;
        while (tab != null && tab.tagName != "TABLE") tab = tab.parentNode;
        if (tab != null && nextTr != null && nextTr.getAttribute("iid") != null) {
            inlineEditString = tab.getAttribute("inlineedit");
            if (inlineEditString != null) {
                inlineEditString = inlineEditString.replace("{@ID}", "{" + IdFromRow(nextTr) + "}");
                inlineEditString = inlineEditString.replace("__cancel;", "__commit;dvt_inlineedit={" + _inlineEditString + "};");
                eval(inlineEditString)
            }

        }
        else if (down == true && nextTr != null) if (nextTr.cells.length > 0) {
            inlineEditString = null;
            var c = nextTr.cells[0];
            if (c.width == "1%") inlineEditString = c.firstChild.href;
            else if (nextTr.cells.length > 1) {
                c = nextTr.cells[1];
                if (c.width == "1%") inlineEditString = c.firstChild.href
            }
            if (inlineEditString != null) {
                inlineEditString = inlineEditString.replace("__cancel;", "__commit;dvt_inlineedit={" + _inlineEditString + "};");
                eval(inlineEditString)
            }

        }

    }

}
function HandleInlineEditKeyDown(c) {
    var d = event.srcElement;
    if (d.tagName != "INPUT") return;
    var e = event.keyCode, a = c.parentNode, b;
    switch (e) {
        case 27: CommitInlineEditChange(a, true);
            break;
        case 38: b = a.previousSibling;
            InlineEditNextTR(a, b, d);
            break;
        case 13: case 40: b = a.nextSibling;
            InlineEditNextTR(a, b, d, true)
    }
    if (window.event != null) window.event.cancelBubble = true;
    else c != null && typeof c.stopPropagation != "undefined" && c.stopPropagation()
}
function EnsureSelectElement(b, c) {
    var a = document.getElementById(c);
    if (a == null) {
        a = document.createElement("SELECT");
        b.parentNode.appendChild(a);
        a.outerHTML = '<select id="' + c + '" ctrl="' + b.id + '" class="ms-lookuptypeindropdown" name="' + c + '" style="display:none" onfocusout="OptLoseFocus(this)"></select>';
        FilterChoice(a, b, b.value, "")
    }
    else {
        a.parentNode.removeChild(a);
        b.parentNode.appendChild(a)
    }
    return document.getElementById(c)
}
function HandleKey() {
    var j = event.keyCode, b = event.srcElement, c = b.value, g = b.getAttribute("opt"), i = g != null ? g : "", a = EnsureSelectElement(b, i), d = false, f, e;
    switch (j) {
        case 8: if (c.length > 0) c = c.substr(0, c.length - 1);
            d = true;
            break;
        case 16: case 17: case 18: return;
        case 9: case 16: case 17: case 18: return;
        case 13: f = b.value.toLocaleLowerCase();
            var h = typeof b.match == "string" ? b.match : "";
            e = h.toLocaleLowerCase();
            if (e.indexOf(f) != 0) b.match = FilterChoice(a, b, b.value, "");
            if (a.style.display != "none") {
                b.value = b.match;
                a.style.display = "none";
                event.returnValue = false
            }
            return;
        case 27: a.style.display = "none";
            event.returnValue = false;
            return;
        case 38: if (a.style.display != "none") {
            if (a.selectedIndex > 0) a.selectedIndex = a.selectedIndex - 1;
            else a.selectedIndex = a.options.length - 1;
            SetCtrlMatch(b, a);
            event.returnValue = false
        }
            return;
        case 40: if (a.style.display != "none" && a.selectedIndex < a.options.length - 1) {
            a.selectedIndex = a.selectedIndex + 1;
            SetCtrlMatch(b, a);
            event.returnValue = false;
            return
        }
            d = true
    }
    if (d) b.match = FilterChoice(a, b, c, "")
}
function ShowDropdown(c) {
    var a = document.getElementById(c), f = a.value, b = a.getAttribute("opt"), d = b != null ? b : "", e = EnsureSelectElement(a, d);
    a.match = FilterChoice(e, a, "", a.value);
    a.focus()
}
function HandleChar() {
    var a = event.srcElement, b = a.value, c = a.getAttribute("opt"), e = c != null ? c : "", f = document.getElementById(e), d = event.keyCode;
    if (d == 13) return;
    b = b + String.fromCharCode(d).toLocaleLowerCase();
    a.match = FilterChoice(f, a, b, "")
}
function HandleLoseFocus() {
    var d = event.srcElement, b = d.getAttribute("opt"), c = b != null ? b : "", a = document.getElementById(c);
    a != null && a.style.display != "none" && typeof document.activeElement != "undefined" && document.activeElement != a && _OptLoseFocus(a)
}
function HandleChange() {
    var a = event.srcElement, e = a.value, b = a.getAttribute("opt"), c = b != null ? b : "", d = document.getElementById(c);
    a.match = FilterChoice(d, a, e, "")
}
function IsSafeHref(a) {
    return a.match(new RegExp("^http://", "i")) != null || a.match(new RegExp("^https://", "i")) != null || a.match(new RegExp("^ftp://", "i")) != null || a.match(new RegExp("^file://", "i")) != null || a.match(new RegExp("^mailto:", "i")) != null || a.match(new RegExp("^news:", "i")) != null || a.match(new RegExp("^pnm://", "i")) != null || a.match(new RegExp("^mms://", "i")) != null || a.match(new RegExp("^/", "i")) != null || a.match(new RegExp("^#", "i")) != null || a.match(new RegExp("^\\\\\\\\", "i")) != null
}
function Discuss(a) {
    if (browseris.ie5up && browseris.win32) window.parent.location.href = a;
    else alert(Strings.STS.L_IE5upRequired_Text)
}
var g_AdditionalNavigateHierarchyQString;
function GetAdditionalNavigateHierarchyQString() {
    return g_AdditionalNavigateHierarchyQString
}
function SetAdditionalNavigateHierarchyQString(a) {
    g_AdditionalNavigateHierarchyQString = a
}
function ProcessDefaultNavigateHierarchy(g, e, d, b, c, j, i, h, f) {
    if (typeof _spCustomNavigateHierarchy != "undefined") _spCustomNavigateHierarchy(g, e, d, b, c, j);
    else if (c == false) top.location.href = b;
    else {
        var a = document.createElement("INPUT");
        a.type = "hidden";
        a.name = "_spTreeNodeClicked";
        a.value = d;
        i.appendChild(a);
        var k = "?RootFolder=" + escapeProperly(b) + h + "&" + g_AdditionalNavigateHierarchyQString;
        _SubmitFormPost(f + k);
        return false
    }
    return undefined
}
function ParseMultiColumnValue(b, f, i) {
    var d, e = [];
    if (f == null) f = ";#";
    var p = f.charCodeAt(0), o = f.charCodeAt(1);
    if (b == null || b.length == 0) return e;
    var h = f.charAt(0), n = h + h, l = new RegExp(n, "g"), k = f.charAt(0), c = 0;
    if (b.substr(0, 2) == f) {
        Boolean(i) && e.push("");
        c = 2
    }
    var a = c, g = false, j = b.length;
    while (a < j) {
        var m = b.indexOf(h, a);
        if (m >= 0) {
            a = m;
            a++;
            if (b.charCodeAt(a) == o) {
                if (a - 1 > c) {
                    d = b.substr(c, a - c - 1);
                    if (g) d = d.replace(l, k);
                    e.push(d);
                    g = false
                }
                else e.push("");
                a++;
                c = a;
                continue
            }
            else if (b.charCodeAt(a) == p) {
                a++;
                g = true;
                continue
            }
            else throw "ArgumentException";
        }
        else a = j
    }
    if (a > c) {
        d = b.substr(c, a - c);
        if (g) d = d.replace(l, k);
        e.push(d)
    }
    else Boolean(i) && e.push("");
    return e
}
function ConvertMultiColumnValueToString(f, b, c) {
    if (b == null) b = ";#";
    if (c == null) c = true;
    for (var h = b.charAt(0), i = h + h, j = new RegExp(b.charAt(0), "g"), g = false, d = "", e = 0;
    e < f.length;
    e++) {
        var a = f[e];
        if (a != null && a.length > 0) a = a.replace(j, i);
        if (a != null && a.length > 0) g = true;
        if (c || e != 0) d += b;
        d += a
    }
    if (g) {
        if (c) d += b;
        return d
    }
    else return ""
}
var httpFolderTarget, httpFolderSource, httpFolderDiv;
function NavigateHttpFolderCore() {
    var a;
    if (httpFolderDiv == null) {
        httpFolderDiv = document.createElement("DIV");
        document.body.appendChild(httpFolderDiv);
        httpFolderDiv.onreadystatechange = NavigateHttpFolderCore;
        typeof httpFolderDiv.addBehavior != "undefined" && httpFolderDiv.addBehavior("#default#httpFolder")
    }
    if (typeof httpFolderDiv.readyState == "string" && httpFolderDiv.readyState == "complete") {
        httpFolderDiv.onreadystatechange = null;
        try {
            a = typeof document.frames != "undefined" && typeof document.frames.item != "undefined" ? document.frames.item(httpFolderTarget) : null;
            if (a != null) {
                var d = typeof a.document != "undefined" ? a.document : null;
                if (d != null) {
                    var f = typeof d.body != "undefined" ? d.body : null;
                    if (f != null && typeof f.innerText == "string") f.innerText = Strings.STS.L_WebFoldersRequired_Text
                }

            }

        }
        catch (i) { } var b = false;
        try {
            var g = "";
            if (typeof httpFolderDiv.navigateFrame != "undefined") g = httpFolderDiv.navigateFrame(httpFolderSource, httpFolderTarget);
            if (g == "OK") b = true
        }
        catch (i) { } if (!b && 0 == httpFolderSource.search(new RegExp("http://[a-zA-Z0-9-.]+(:80)?/"))) {
            var h = httpFolderSource.replace(/http:\/\/([a-zA-Z0-9\-\.]+)(:80)?[\/]/, "//$1/").replace(/[\/]/g, "\\");
            try {
                a = typeof document.frames != "undefined" && typeof document.frames.item != "undefined" ? document.frames.item(httpFolderTarget) : null;
                if (a != null) {
                    a.onload = null;
                    var c = typeof a.document != "undefined" ? a.document : null;
                    if (c != null) {
                        var e = typeof c.location != "undefined" ? c.location : null;
                        if (e != null && typeof e.href == "string") {
                            e.href = h;
                            b = true
                        }

                    }

                }

            }
            catch (i) { }
        }
        if (!b) if (browseris.ie) alert(Strings.STS.L_WebFoldersError_IE_Text);
        else alert(Strings.STS.L_WebFoldersError_Text)
    }

}
function NavigateHttpFolder(a, b) {
    if ("/" == a.charAt(0)) a = window.location.protocol + "//" + window.location.host + a;
    httpFolderSource = a;
    httpFolderTarget = b;
    NavigateHttpFolderCore()
}
function NavigateHttpFolderIfSupported(b, a) {
    if (a == "_blank") if (SupportsNavigateHttpFolder()) NavigateHttpFolder(b, a);
    else alert(Strings.STS.L_WebFoldersError_Text);
    else alert(Strings.STS.L_NoExplorerView_Text)
}
function AutoIndexForRelationshipsConfirmation() {
    var a = Strings.STS.L_Lookup_AutoIndexForRelationships_Confirm_Text;
    return confirm(a)
}
function SetHomePage2(c) {
    if (!window.confirm(SP.Res.confirmWelcomePage)) return;
    var d = new SP.ClientContext(undefined), b = d.get_web().get_rootFolder(), a = "";
    if (c.length > 0) {
        a = _spPageContextInfo.serverRequestPath;
        a = unescapeProperly(a);
        a = a.substr(c.length);
        if (a.indexOf("/") == 0) a = a.substr(1)
    }
    b.set_welcomePage(a);
    b.update();
    var e = STSHtmlEncode(SP.Res.sending), f = addNotification(e, true);
    d.executeQueryAsync(function () {
        removeNotification(f);
        addNotification(STSHtmlEncode(SP.Res.pageIsSiteHomePage), false)
    }
    , null)
}
function SetHomePage(b) {
    var a = function () {
        SetHomePage2(b)
    };
    if (typeof SP != "undefined") EnsureScript("SP.js", typeof SP.ClientContext, a);
    else EnsureScript("SP.js", typeof SP, a)
}
function SendEmail(c) {
    var a;
    try {
        a = typeof SP.Ribbon.EMailLink.openMailerWithUrl
    }
    catch (f) {
        a = "undefined"
    }
    var e = "SP.Ribbon.EMailLink.openMailerWithUrl", b = e.split(".");
    if (b.length > 1) {
        var d = function () {
            SP.Ribbon.EMailLink.openMailerWithUrl(c)
        };
        EnsureScript(b[0], a, d)
    }

}
function TryCopyStringToClipboard(b) {
    if (typeof window.clipboardData != "undefined" && typeof window.clipboardData.setData != "undefined") window.clipboardData.setData("Text", b);
    else if (typeof netscape != "undefined" && typeof Components != "undefined") {
        netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
        var d = Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString);
        if (d == null) return false;
        d.data = b;
        var a = Components.classes["@mozilla.org/widget/transferable;1"].createInstance(Components.interfaces.nsITransferable);
        if (a == null || typeof a.addDataFlavor == "undefined" || typeof a.setTransferData == "undefined") return false;
        a.addDataFlavor("text/unicode");
        a.setTransferData("text/unicode", d, b.length * 2);
        var e = Components.interfaces.nsIClipboard, c = Components.classes["@mozilla.org/widget/clipboard;1"].getService(e);
        if (c == null || typeof c.setData == "undefined") return false;
        c.setData(a, null, e.kGlobalClipboard)
    }
    return true
}
function CopyStringToClipboard(b) {
    var a = false;
    try {
        a = TryCopyStringToClipboard(b)
    }
    catch (c) {
        a = false
    }
    !a && alert(SP.Res.clipboardNoAccess)
}
function CopyPageAddressToClipboard() {
    CopyStringToClipboard(window.location.href)
}
function showViewSelector(b, a, d) {
    if (b == null) b = window.event;
    CancelEvent(b);
    a = EnsureValidPositioningElement(b, a);
    if (a != null && a.className == "ms-csrlistview-viewselectormenu") a = a.parentNode;
    var e = function () {
        SP.Application.UI.ViewSelectorMenuBuilder.showMenu(a, d)
    }
    , c;
    try {
        c = typeof SP.Application.UI.ViewSelectorMenuBuilder.showMenu
    }
    catch (f) {
        c = "undefined"
    }
    EnsureScript("SP.js", c, e)
}
function EnsureValidPositioningElement(d, c) {
    if (c != null) return c;
    var b = GetEventSrcElement(d), a = b;
    while (a != null && a.tagName != "BODY") {
        if (a.tagName == "TD" && (a.className == "ms-viewselector" || a.className == "ms-viewselectorhover")) return a;
        a = a.parentNode
    }
    return b
}
function EnsureCheckoutAndChangeLayoutModeToEdit(e, d, g) {
    var a, c = function () {
        var a;
        try {
            a = typeof browserScript.MSOLayout_ChangeLayoutMode
        }
        catch (e) {
            a = "undefined"
        }
        var d = "browserScript.MSOLayout_ChangeLayoutMode", b = d.split(".");
        if (b.length > 1) {
            var c = function () {
                browserScript.MSOLayout_ChangeLayoutMode(g)
            };
            EnsureScript(b[0], a, c)
        }

    }
    , f = function () {
        var g = a != null ? a.get_item("CheckoutUser") : null;
        if (!g) {
            if (confirm(Strings.STS.L_ConfirmCheckout_Text)) {
                var b = new SP.ClientContext(undefined), f = b.get_web().get_lists().getById(new SP.Guid(e));
                a = f.getItemById(d);
                a.get_file().checkOut();
                b.executeQueryAsync(c, null)
            }

        }
        else c()
    }
    , h = function () {
        var b = new SP.ClientContext(undefined), c = b.get_web().get_lists().getById(new SP.Guid(e));
        a = c.getItemById(d);
        b.load(a, "CheckoutUser");
        b.executeQueryAsync(f, null)
    }
    , b;
    try {
        b = typeof SP.ClientContext
    }
    catch (i) {
        b = "undefined"
    }
    EnsureScript("SP.js", b, h)
}
function _ChangeLayoutMode(e, f) {
    var a;
    try {
        a = typeof browserScript.MSOLayout_ChangeLayoutMode
    }
    catch (g) {
        a = "undefined"
    }
    var d = "browserScript.MSOLayout_ChangeLayoutMode", b = d.split(".");
    if (b.length > 1) {
        var c = function () {
            browserScript.MSOLayout_ChangeLayoutMode(e, f)
        };
        EnsureScript(b[0], a, c)
    }

}
function OpenWebPartMenuFromLink(a, b, c, d) {
    OpenWebPartMenu(a, b, c, d, false)
}
function OpenWebPartMenu(e, f, g, h, i) {
    var a;
    try {
        a = typeof browserScript.MSOWebPartPage_OpenMenu
    }
    catch (j) {
        a = "undefined"
    }
    var d = "browserScript.MSOWebPartPage_OpenMenu", b = d.split(".");
    if (b.length > 1) {
        var c = function () {
            browserScript.MSOWebPartPage_OpenMenu(e, f, g, h, i)
        };
        EnsureScript(b[0], a, c)
    }
    return true
}
function UpdateWebPartMenuFocus(a, d, c) {
    if (a != null) a.className = d;
    var b = null;
    if (a != null && a.childNodes != null) {
        b = a.childNodes[0];
        if (b != null && b.tagName == "SPAN") b.className = c
    }

}
function _WebPartMenuKeyboardClick(e, c, d, f) {
    var a;
    try {
        a = typeof browserScript.MSOMenu_KeyboardClick
    }
    catch (i) {
        a = "undefined"
    }
    var h = "browserScript.MSOMenu_KeyboardClick", b = h.split(".");
    if (b.length > 1) {
        var g = function () {
            browserScript.MSOMenu_KeyboardClick(e, c, d, f)
        };
        EnsureScript(b[0], a, g)
    }

}
function _ShowToolPane2Wrapper(e, f, g) {
    var a;
    try {
        a = typeof browserScript.MSOTlPn_ShowToolPane2Wrapper
    }
    catch (h) {
        a = "undefined"
    }
    var d = "browserScript.MSOTlPn_ShowToolPane2Wrapper", b = d.split(".");
    if (b.length > 1) {
        var c = function () {
            browserScript.MSOTlPn_ShowToolPane2Wrapper(e, f, g)
        };
        EnsureScript(b[0], a, c)
    }

}
function ChangeWebPartPageView(c) {
    var a;
    try {
        a = typeof browserScript.MSOLayout_ToggleView
    }
    catch (f) {
        a = "undefined"
    }
    var e = "browserScript.MSOLayout_ToggleView", b = e.split(".");
    if (b.length > 1) {
        var d = function () {
            browserScript.MSOLayout_ToggleView(c)
        };
        EnsureScript(b[0], a, d)
    }

}
function _SetupFixedWidthWebParts() {
    var a;
    try {
        a = typeof browserScript.MSOWebPartPage_SetupFixedWidthWebParts
    }
    catch (e) {
        a = "undefined"
    }
    var d = "browserScript.MSOWebPartPage_SetupFixedWidthWebParts", b = d.split(".");
    if (b.length > 1) {
        var c = function () {
            browserScript.MSOWebPartPage_SetupFixedWidthWebParts()
        };
        EnsureScript(b[0], a, c)
    }

}
function EnsureSelectionHandlerOnFocusDeferred(d, c, b) {
    var a = c;
    while (a.tagName != "TABLE") a = a.parentNode;
    EnsureSelectionHandlerDeferred(d, a, b)
}
function EnsureSelectionHandlerDeferred(n, g, j) {
    var c = window["ctx" + String(j)];
    if (!FV4UI() || c == null) {
        g.onmouseover = null;
        return
    }
    if (c.BaseViewID == "MapView" && (IsStrNullOrEmpty(g.className) || g.className.indexOf("ms-mapviewtable") == -1)) return;
    ctxInitItemState(c);
    var e = g.querySelector(".ms-selectall-span");
    if (e != null) {
        $addHandler(e, "keydown", function (a) {
            if (a.keyCode == Sys.UI.Key.space || a.keyCode == Sys.UI.Key.enter) {
                ClkElmt(e);
                e.focus();
                a.preventDefault()
            }

        });
        $addHandler(e, "mousedown", function () {
            e.style.outline = "none"
        });
        $addHandler(e, "mouseup", function () {
            e.style.outline = "";
            e.firstChild.focus()
        })
    }
    for (var k = g.rows, h = 0;
    h < k.length;
    h++) {
        var a = k[h];
        if (HasCssClass(a, "ms-viewheadertr")) {
            var b = a.cells[0];
            if (b != null) {
                var f = b.getElementsByTagName("INPUT")[0];
                if (f != null) f.className = "s4-selectAllCbx";
                else f = b.querySelector(".ms-selectall-span");
                if (f != null) {
                    c.SelectAllCbx = f;
                    if (typeof f.onfocus != "undefined") c.TableCbxFocusHandler = f.onfocus;
                    f.onfocus = null
                }

            }

        }
        var l = a.getAttribute("iid");
        if (l != null) {
            var i = false;
            if (ItemIsCurrentlySelected(c, l, a)) {
                i = true;
                c.CurrentSelectedItems++
            }
            if (ItemIsCurrentlyVisible(a)) {
                c.TotalListItems++;
                c.LastSelectableRowIdx = h
            }
            if (a.cells.length > 0) {
                b = a.cells[0];
                var d = b.querySelector(".s4-itm-cbx");
                if (d != null) {
                    if (!i) d.checked = false;
                    if (typeof d._setup == "undefined" || !Boolean(d._setup)) {
                        d._setup = true;
                        var m = TooltipOfRow(a);
                        if (m != null) d.title = m;
                        d.onblur = HideItemCbx;
                        d.onfocus = DisplayItemCbx;
                        d.onclick = ToggleItemRowSelection;
                        b.onclick = ToggleItemRowSelection;
                        if (d.nodeName == "DIV") {
                            $addHandler(b, "keydown", function (b, a) {
                                return function (c) {
                                    if (c.keyCode == Sys.UI.Key.space || c.keyCode == Sys.UI.Key.enter) {
                                        ToggleItemRowSelection(c, b);
                                        a.focus()
                                    }

                                }

                            }
                            (a, b));
                            $addHandler(b, "mousedown", function (a) {
                                return function () {
                                    a.style.outline = "none"
                                }

                            }
                            (b));
                            $addHandler(b, "mouseup", function (a) {
                                return function () {
                                    a.style.outline = ""
                                }

                            }
                            (b))
                        }

                    }
                    if (a.getAttribute("automode") == null) a.onclick = SingleItemSelect
                }
                UpdateAutoMode(a);
                AddSpaceToEmptyTDs(a);
                AddBorderToLastCell(a)
            }

        }

    }
    c.TableMouseoverHandler = g.onmouseover;
    g.onmouseover = null;
    AddKeyDownEventHandler(g, j)
}
function AddKeyDownEventHandler(a, c) {
    if (a.nodeName.toUpperCase() != "TABLE") return;
    var b = window["ctx" + String(c)];
    if (IsStrNullOrEmpty(a.className) || b.BaseViewID == "MapView" && a.className.indexOf("ms-mapviewtable") == -1 || b.BaseViewID != "MapView" && a.className.indexOf("ms-listviewtable") == -1) return;
    if (a.getAttribute("handleDeleteInit") == null) {
        a.setAttribute("handleDeleteInit", "true");
        $addHandler(a, "keydown", function (a) {
            OnListViewKeyDown(a, c)
        })
    }

}
function ItemIsSelectable(a) {
    return a == null || !ItemHasiid(a) || !ItemIsCurrentlyVisible(a) ? false : true
}
function ItemIsCurrentlyVisible(a) {
    return a == null || a.parentNode == null ? false : GetCurrentEltStyle(a.parentNode, "display") == "none" || GetCurrentEltStyle(a, "display") == "none" ? false : true
}
function ItemIsCurrentlySelected(b, c, d) {
    if (b == null || !Boolean(c)) return false;
    var a = GetSelectedItemsDict(b);
    return a == null || a[c] == null || d.className.indexOf("s4-itm-selected") < 0 ? false : true
}
function ItemHasiid(a) {
    return a == null || a.getAttribute("iid") == null ? false : true
}
function OnListViewKeyDown(a, b) {
    var d = GetListContextFromContextNumber(String(b));
    if (d == null || d.inGridMode) return;
    var e = a.keyCode, c = a.shiftKey || a.ctrlKey;
    if (IsCallOutOn()) return;
    switch (e) {
        case Sys.UI.Key.del: HandleItemDelete(a, b);
            break;
        case Sys.UI.Key.up: SelectNextRow(b, -1, c, a);
            break;
        case Sys.UI.Key.down: SelectNextRow(b, 1, c, a);
            break;
        case Sys.UI.Key.enter: if (IsEventTargetAnchor(a)) return;
            if (a.target != null && !IsStrNullOrEmpty(a.target.className) && a.target.className.indexOf("ms-lstItmLinkAnchor") >= 0) OpenCallOutOrECB(b, a);
            else ListItem_Open(b, a)
    }

}
function OpenCallOutOrECB(e, b) {
    var c = GetListContextFromContextNumber(String(e));
    if (c == null) return true;
    var a = b.target, d = DoesListUseCallout(c), f = GetAncestor(a, "TR"), g = IdFromRow(f);
    if (IsStrNullOrEmpty(g)) return true;
    if (d) ShowCalloutMenuForTr(a, b, true);
    else ShowECBMenuForTr(a.parentNode, b);
    return true
}
function ListItem_Open(c, d) {
    var a = GetListContextFromContextNumber(String(c));
    if (a == null) return false;
    var b = GetLastSelectedRow(a);
    if (b == null) return false;
    if (a.ListSchema.IsDocLib) OpenDocItem(d, a, b);
    else OpenListItem(b, c);
    return true
}
function OpenDocItem(h, f, b) {
    var a = GetListItemDataFromTrInternal(f, b), c = b, g = GetEcbTdFromRow(b), e = GetEcbDivFromEcbTd(g);
    if (e != null) c = e.querySelector("a.ms-draggable");
    if (c == null) c = b;
    var d = f.ListSchema;
    return DispEx(c, h, "TRUE", "FALSE", a["File_x0020_Type.url"], a["File_x0020_Type.progid"], d.DefaultItemOpen, a["HTML_x0020_File_x0020_Type.File_x0020_Type.mapcon"], a.HTML_x0020_File_x0020_Type, a["serverurl.progid"], Boolean(a.CheckoutUser) ? a.CheckoutUser[0].id : "", d.Userid, d.ForceCheckout, a.IsCheckedoutToLocal, a.PermMask)
}
function OpenListItem(b, c) {
    var a = b.querySelector('a[class*="ms-listlink"]');
    if (a == null) return;
    EditLink2(a, c)
}
function GetListItemDataFromTr(a) {
    if (a == null) return null;
    var b = GetListContextFromTr(a);
    return b == null ? null : GetListItemDataFromTrInternal(b, a)
}
function GetListItemDataFromTrInternal(b, a) {
    if (b == null || a == null) return null;
    var c = IdFromRow(a);
    return ListItemDataFromId(b, c)
}
function GetListContextFromTr(a) {
    if (a == null) return null;
    var b = a.getAttribute("iid");
    if (IsStrNullOrEmpty(b)) return null;
    var c = b.split(",");
    return c.length <= 2 ? null : GetListContextFromContextNumber(c[0])
}
function GetListContextFromContextNumber(a) {
    return window["ctx" + a]
}
function ListItemDataFromId(c, d) {
    if (c == null || d == null || c.ListData == null) return null;
    var a = c.ListData.Row;
    if (a == null) return null;
    for (var e = a.length, b = 0;
    b < e;
    b++) if (a[b].ID === d) return a[b];
    return null
}
function SelectNextRow(g, h, f, e) {
    var c = GetListContextFromContextNumber(String(g)), b = GetLastSelectedRow(c), a = null;
    if (b != null) {
        a = GetNextRow(b, h);
        if (a != null) {
            var d;
            d = SingleItemSelectByElement(a, f);
            return e == null ? d : CancelEvent(e)
        }

    }
    else MakeDefaultSelectionForListView(c);
    return true
}
function GetLastSelectedRow(c) {
    var e = c.dictSel, b = "", a = null;
    if (c != null) b = c.LastSelectedItemIID;
    if (b != null && b.length > 0) {
        var d = 'tr[iid="' + b + '"]';
        a = document.querySelector(d);
        if (a != null && a.getAttribute("automode") != null) a = null
    }
    return a
}
function GetIndexFromIID(a, c) {
    if (c == null) return -1;
    var e = c.split(",")[1], d = 0;
    if (a != null && a.ListData != null && a.ListData.Row != null) {
        var f = a.ListData.Row;
        d = f.length;
        for (var b = 0;
        b < d;
        b++) {
            var g = a.ListData.Row[b].ID;
            if (g === e) return b
        }

    }
    return -1
}
function GetLastSelectedRowIndex(a) {
    var b = a.LastSelectedItemIID;
    return GetIndexFromIID(a, b)
}
function GetTrFromIID(a) {
    if (a == null || a.length == 0) return null;
    var b = 'tr[iid="' + a + '"]';
    return document.querySelector(b)
}
function SelectRowByIID(c, b) {
    var a = GetTrFromIID(c);
    a != null && SingleItemSelectByElement(a, b)
}
function SelectRowByIndex(a, c, d) {
    var b;
    if (a != null && a.ListData != null && a.ListData.Row != null && a.ListData.Row[c] != null) {
        b = GenerateIIDForListItem(a, a.ListData.Row[c]);
        b != null && b.length > 0 && SelectRowByIID(b, d)
    }

}
function EnsureKeyBoardHandlersRegistered(a) {
    if (a == null) return;
    if (a.ListData == null || a.ListData.Row == null || a.ListData.Row[0] == null) return;
    var b = GenerateIIDForListItem(a, a.ListData.Row[0]), d = GetTrFromIID(b);
    if (d == null) return;
    var c = GetAncestor(d, "TABLE");
    if (c == null) return;
    AddKeyDownEventHandler(c, b.split(",")[0])
}
function MakeDefaultSelectionForListView(a) {
    if (a == null) return;
    EnsureKeyBoardHandlersRegistered(a);
    if (a.ListData != null && a.ListData.Row != null && a.ListData.Row[0] != null) {
        var b = GetTrFromIID(GenerateIIDForListItem(a, a.ListData.Row[0]));
        if (b == null) return;
        while (b != null) {
            if (b.className.indexOf("s4-wpcell") >= 0 || b.className.indexOf("s4-wpActive") >= 0) break;
            b = b.parentNode
        }
        if (b == null) return;
        EnsureScriptParams("ribbon", "SelectWp", b)
    }
    if (a.LastSelectedItemIID != null && a.LastSelectedItemIID.length > 0) {
        var e = GetTrFromIID(a.LastSelectedItemIID);
        if (e != null) {
            SingleItemSelectByElement(e, false);
            return
        }

    }
    var c = a.LastRowIndexSelected;
    if (c == null) c = 0;
    else {
        if (a.ListData != null && a.ListData.Row != null) var d = a.ListData.Row.length;
        if (c >= d) c = d == 0 ? -1 : d - 1
    }
    a.LastRowIndexSelected = null;
    c != -1 && SelectRowByIndex(a, c, false)
}
function GetNextRow(b, c) {
    var a = null;
    if (b != null && b.nodeName.toLowerCase() != "tr") return null;
    if (c == 1) a = b.nextSibling;
    else if (c == -1) a = b.previousSibling;
    if (a != null) {
        var d = a.getAttribute("iid");
        return d != null && d.length > 0 ? a : GetNextRow(a, c)
    }
    return a
}
function HandleItemDelete(h, e) {
    var b = window["ctx" + String(e)], a = GetLastSelectedRowIndex(b);
    if (a == -1) a = 0;
    b.LastRowIndexSelected = a;
    var c;
    try {
        c = typeof inplview.DeleteSelectedItems
    }
    catch (i) {
        c = "undefined"
    }
    var g = "inplview.DeleteSelectedItems", d = g.split(".");
    if (d.length > 1) {
        var f = function () {
            inplview.DeleteSelectedItems(b)
        };
        EnsureScript(d[0], c, f)
    }
    return false
}
function GetItemRow2(b) {
    var a = b;
    while (a != null && a.nodeType == 1 && a.tagName != "BODY" && a.getAttribute("iid") == null) {
        if (typeof a.parentNode == "undefined" || a.parentNode == null || typeof a.parentNode.tagName == "undefined") {
            a = null;
            break
        }
        a = a.parentNode
    }
    return a != null && a.nodeType == 1 && a.tagName == "TR" ? a : null
}
function GetItemRow(a) {
    if (a == null) a = window.event;
    var b = GetEventSrcElement(a);
    return GetItemRow2(b)
}
function TooltipOfRow(d) {
    for (var c = d.cells, a = 0, a = 0;
    a < c.length;
    a++) {
        var e = c[a];
        if (HasCssClass(e, "ms-vb-title")) return GetInnerText(e).trim()
    }
    var b = d.getAttribute("iid");
    if (b != null) {
        var f = b.split(",");
        if (f.length > 2) return "" + f[1]
    }
    return null
}
function AlertCheckOut() {
    alert(Strings.STS.L_MustCheckout_Text)
}
function UpdateAutoModeImage(a) {
    if (a == null) a = window.event;
    if (a != null) {
        var b = a.srcElement != null ? a.srcElement : a.currentTarget;
        if (b != null && b.tagName == "A") if (a.type == "blur") RemoveCssClassFromElement(b, "ms-inlineEditLink");
        else a.type == "focus" && AddCssClassToElement(b, "ms-inlineEditLink")
    }

}
function AddAutoModeTag(f, e, g) {
    var a = document.createElement("A");
    SetEvent("blur", UpdateAutoModeImage, a);
    SetEvent("focus", UpdateAutoModeImage, a);
    var c = e;
    while (c.tagName != "TABLE") c = c.parentNode;
    if (f.getAttribute("requiresCheckout") != null) SetEvent("click", AlertCheckOut, a);
    else {
        var d = c.getAttribute("inlineedit");
        if (d != null) a.href = d.replace("{@ID}", "{" + IdFromRow(e) + "}")
    }
    var b = document.createElement("IMG");
    b.className = "s4-itm-inlineedit";
    b.src = g;
    b.border = 0;
    b.alt = Strings.STS.L_Edit_Text;
    a.appendChild(b);
    f.appendChild(a)
}
function GetItemRowCbx(a) {
    var b = null;
    if (a != null && a.cells != null && a.cells.length > 0) {
        var c = a.cells[0];
        b = c.querySelector(".s4-itm-cbx")
    }
    return b
}
function GetEcbTdFromRow(b) {
    var a = null;
    if (b != null) a = b.querySelector('td[IsECB="TRUE"]');
    return a
}
function GetEcbDivFromEcbTd(a) {
    return a == null ? null : a.querySelector("div.ms-vb.itx")
}
function GetEcbAffordanceDivFromRow(a) {
    return a == null ? null : a.querySelector("div.ms-list-itemLink")
}
function UpdateAutoMode(b) {
    if (b != null) {
        var c = CtxFromRow(b);
        if (c == null || typeof c.InlineEdit == "undefined" || !Boolean(c.InlineEdit)) return;
        if (b.cells != null && b.cells.length > 0) {
            var a = b.cells[0];
            if (a.innerHTML == "" && a.width == "1%") {
                if (a.getAttribute("requiresCheckout") == null) a.onclick = ClickToEdit;
                AddAutoModeTag(a, b, "/_layouts/15/images/edititem.gif?rev=23")
            }
            else if (b.cells.length > 1) {
                a = b.cells[1];
                if (a.innerHTML == "" && a.width == "1%") {
                    if (a.getAttribute("requiresCheckout") == null) a.onclick = ClickToEdit;
                    AddAutoModeTag(a, b, "/_layouts/15/images/edititem.gif?rev=23")
                }

            }

        }

    }

}
function ClickToEdit(a) {
    var c = GetItemRow(a);
    if (c != null && c.cells.length > 1) {
        var e = c.cells[1], d = e.firstChild;
        if (d != null) {
            var b = d.firstChild;
            if (b != null && b.tagName == "IMG") b.src = "/_layouts/15/images/spinnyrefresh.gif?rev=23"
        }

    }
    if (window.event != null) window.event.cancelBubble = true;
    else a != null && a.stopPropagation()
}
function HideItemCbx(b) {
    if (b == null) b = window.event;
    var c = GetItemRow(b), a = GetItemRowCbx(c);
    if (a != null && a.tagName == "INPUT") {
        a.style.top = "";
        a.style.position = "";
        a.onmouseout = null
    }

}
function DisplayItemCbx(b) {
    if (b == null) b = window.event;
    var c = GetItemRow(b), a = GetItemRowCbx(c);
    if (a != null && a.tagName == "INPUT") {
        a.style.top = "0px";
        a.style.position = "relative";
        a.onmouseout = HideItemCbx
    }

}
function Log(b) {
    var a = document.createElement("DIV");
    a.innerHTML = b;
    document.body.appendChild(a)
}
function _ToggleAllItems(a, b, c) {
    IsFullNameDefined("CUI.PMetrics.perfMark") && CUI.PMetrics.perfMark(CUI.PMarker.perfWSSSelectOrDeselectAllStart);
    if (a == null) a = window.event;
    MenuHtc_hide();
    ToggleAllItems2(b, c, b.checked);
    if (window.event != null) window.event.cancelBubble = true;
    else a.stopPropagation();
    IsFullNameDefined("CUI.PMetrics.perfMark") && CUI.PMetrics.perfMark(CUI.PMarker.perfWSSSelectOrDeselectAllEnd);
    return false
}
function ToggleAllItems2(b, f, g) {
    var a = window["ctx" + String(f)];
    if (a == null) {
        b.checked = false;
        return
    }
    if (a.inGridMode) {
        SPGridToggleAllItems(a);
        return
    }
    var c = b;
    while (c.tagName != "TABLE") c = c.parentNode;
    var e = c.rows, d = CountTotalItems(a);
    if (d == 0) {
        b.checked = false;
        return
    }
    if (g) {
        if (d > g_MaximumSelectedItemsAllowed) {
            b.checked = false;
            alert(Strings.STS.L_BulkSelection_TooManyItems);
            return
        }
        SelectAllItems(a, e)
    }
    else DeselectAllItems(a, e, true)
}
function SelectAllItems(a, b) {
    if (a == null || b == null) return;
    for (var e = a.LastSelectableRowIdx, c = 1;
    c < e;
    c++) {
        var d = b[c], f = d.getAttribute("iid");
        if (f != null) ItemIsCurrentlyVisible(d) && ToggleItemRowSelection2(a, d, true, false, true)
    }
    ToggleItemRowSelection2(a, b[e], true, true, true)
}
function DeselectAllItems(a, b, i) {
    if (a == null) return;
    var d, f = a.LastSelectableRowIdx, e = 1;
    if (a.BaseViewID == "MapView") {
        e = 0;
        var g = document.getElementById("mapviewListTable_" + a.wpq);
        if (g == null) return;
        b = g.rows;
        f = b.length - 1
    }
    if (b == null) return;
    for (d = e;
    d <= f;
    d++) {
        var h = b[d], c = h.getAttribute("iid");
        if (c != null && typeof c == "string") {
            var j = c.split(",");
            SelectListItem(a, c, j, h, false, true)
        }

    }
    i && RefreshCommandUI()
}
function DeselectCollapsedGroup(e, b) {
    if (b == null) return;
    var c = b.rows, a = GetLastSelectableRowIdx(b, ItemHasiid);
    if (Boolean(c) && a != -1) {
        for (var d = 0;
        d < a;
        d++) {
            var f = c[d];
            ItemHasiid(f) && ToggleItemRowSelection2(e, f, false, false, false)
        }
        ToggleItemRowSelection2(e, c[a], false, true, false)
    }

}
function HandleSingleGroupByRow(a, b, d) {
    if (a == null || b == null) return;
    var c = b.getAttribute("iid");
    if (c == null) return;
    if (!d) {
        a.TotalListItems--;
        ItemIsCurrentlySelected(a, c, b) && ToggleItemRowSelection2(a, b, false, true, false)
    }
    else a.TotalListItems++
}
function RefreshCommandUI() {
    if (IsFullNameDefined("SP.Ribbon.PageManager")) {
        var a = SP.Ribbon.PageManager.get_instance();
        a != null && a.get_commandDispatcher().executeCommand(Commands.CommandIds.ApplicationStateChanged, null)
    }

}
function _CommandUIExecuteCommand(b) {
    if (IsFullNameDefined("SP.Ribbon.PageManager")) {
        var a = SP.Ribbon.PageManager.get_instance();
        a != null && a.get_commandDispatcher().executeCommand(b, null)
    }

}
function OnItemSelectionChanged(d, a, b) {
    var e = d;
    if (FV4UI()) {
        var c = function () {
            var d = [];
            if (typeof _ribbon != "undefined" && _ribbon != null) {
                var c = e.clvp;
                if (c != null) if (b) c.EnsureEcbInfo(RefreshCommandUI, d, a);
                else c.EnsureEcbInfo(null, null, a)
            }

        };
        EnsureScript("inplview", typeof InitAllClvps, c)
    }

}
function IdFromRow(c) {
    var b = c.getAttribute("iid"), a = b.split(",");
    return a[1]
}
function CtxFromRow(d) {
    var c = d.getAttribute("iid"), b = c.split(","), a = b[0];
    return window["ctx" + a]
}
function GroupNameFromRow(e) {
    var c = e.parentNode, a = c.id;
    if (a == null || a == "") {
        var b = c.previousSibling;
        if (b != null && b.childNodes.length == 0 && b.tagName == c.tagName) a = b.id
    }
    if (a == null || a == "") return null;
    var d = a.substr(4, a.length - 6);
    return d == "" ? null : d
}
function GroupStringFromGroupName(a) {
    if (a == null || a == "") return null;
    var c = document.getElementById("titl" + a + "_");
    if (c == null) return null;
    var b = c.getAttribute("groupString");
    return b == "" ? null : b
}
var previousClickedItemRow;
function IsCallOutOn() {
    return typeof CalloutManager === "object" && typeof CalloutManager.isAtLeastOneCalloutOn === "function" && CalloutManager.isAtLeastOneCalloutOn()
}
function SingleItemSelectByElement(b, a) {
    return SingleItemSelectInternal(null, false, b, a)
}
function MultiItemSelect(i) {
    var e = GetItemRow(i);
    if (e == null) return false;
    var a = CtxFromRow(e), n = e.getAttribute("iid"), c = GetIndexFromIID(a, n), k = a.LastSelectedItemIID, b = GetLastSelectedRowIndex(a), l = GetLastSelectedRow(a), m = c < b ? c : b, o = c > b ? c : b;
    if (!i.ctrlKey) if (CountSelectedItems(a) > 0) {
        var d = e;
        while (d.tagName != "TABLE") d = d.parentNode;
        for (var h = d.rows, f = 0;
        f < h.length;
        f++) {
            var j = h[f];
            ItemIsSelectable(j) && ToggleItemRowSelection2(a, j, false, false, false)
        }

    }
    for (var g = m;
    g <= o;
    g++) SelectRowByIndex(a, g, true);
    FocusRow(a, k, l);
    return false
}
function OpenCalloutAndSelectItem(a, b, e, c) {
    var d = GetAncestor(a, "TR");
    SingleItemSelectInternal(b, false, d, false);
    OpenCallout(a, b, e, c)
}
function SingleItemSelect(a) {
    if (a == null) a = window.event;
    var c = a.shiftKey, b = a.ctrlKey;
    if (c) {
        MultiItemSelect(a);
        return false
    }
    else {
        var d = SingleItemSelectInternal(a, true, null, b);
        return b ? false : d
    }

}
function SingleItemSelectInternal(e, g, a, k) {
    var d = true;
    if (g) {
        var j = GetEventSrcElement(e);
        if (j != null && ElementContainsLink(j)) return undefined;
        if (IsCallOutOn()) return true;
        a = GetItemRow(e);
        if (clearECBMenu(j, a == null ? null : CtxFromRow(a))) {
            CancelEvent(e);
            return false
        }

    }
    if (a == null) return false;
    var c = a;
    while (c.tagName != "TABLE") c = c.parentNode;
    var p = c.rows, b = CtxFromRow(a);
    if (g) {
        var l = a.getAttribute("iid"), o = l.split(",");
        d = !ItemIsCurrentlySelected(b, l, a);
        if (!k && CountSelectedItems(b) > 1) d = true
    }
    if (d && !k) if (CountSelectedItems(b) > 0) for (var h = c == null ? null : c.querySelectorAll("tr[class*='s4-itm-selected']"), m = h == null ? 0 : h.length, i = 0;
    i < m;
    i++) {
        var f = h[i], n = f.getAttribute("iid");
        ItemIsSelectable(f) && ItemIsCurrentlySelected(b, n, f) && ToggleItemRowSelection2(b, f, false, false, false)
    }
    ToggleItemRowSelection2(b, a, d, true, false);
    UpdateSelectAllCbx(b, d);
    previousClickedItemRow = a;
    g && CancelEvent(e);
    return true
}
function Point(a, b) {
    this.x = a;
    this.y = b
}
function GetCellCoordinates(b) {
    var c = 0, d = 0;
    while (b.tagName != "TD") b = b.parentNode;
    var a = b.previousSibling;
    while (a != null) {
        c++;
        a = a.previousSibling
    }
    a = b.parentNode.previousSibling;
    while (a != null) {
        d++;
        a = a.previousSibling
    }
    return new Point(c, d)
}
function ElementContainsLink(a) {
    while (a != null && a.tagName != "TD") {
        if (a.tagName == "A") return true;
        a = a.parentNode
    }
    return false
}
function clearECBMenu(c, b) {
    if (g_menuHtc_lastMenu == null) return false;
    if (c != null) {
        var a = c;
        while (a != null && a.tagName != "TD") a = a.parentNode;
        var e = GetItemRow2(a);
        MenuHtc_hide();
        var d = b != null && b.IsClientRendering == true;
        !d && tdHasEcbMenu(a) && OnChildItem(a)
    }
    return true
}
function tdHasEcbMenu(d) {
    for (var b = 0;
    b < d.childNodes.length;
    b++) {
        var a = d.childNodes[b];
        if (a.nodeType == 1 && a.tagName == "DIV") {
            var c = a.getAttribute("CTXName");
            if (c != null && c != "") return true
        }

    }
    return false
}
function ToggleItemRowSelection(b, a) {
    IsFullNameDefined("CUI.PMetrics.perfMark") && CUI.PMetrics.perfMark(CUI.PMarker.perfWSSSelectItemStart);
    if (b == null) b = window.event;
    if (b.keyCode == Sys.UI.Key.enter) return false;
    MenuHtc_hide();
    if (a == null) a = GetItemRow(b);
    var c = CtxFromRow(a), f = a.getAttribute("iid"), d = !ItemIsCurrentlySelected(c, f, a);
    if (d && CountSelectedItems(c) == g_MaximumSelectedItemsAllowed) {
        var e = GetItemRowCbx(a);
        e.checked = false;
        alert(Strings.STS.L_BulkSelection_TooManyItems);
        CancelEvent(b);
        return true
    }
    ToggleItemRowSelection2(c, a, d, true, false);
    UpdateSelectAllCbx(c, d);
    previousClickedItemRow = a;
    if (window.event != null) window.event.cancelBubble = true;
    else b.stopPropagation();
    IsFullNameDefined("CUI.PMetrics.perfMark") && CUI.PMetrics.perfMark(CUI.PMarker.perfWSSSelectItemEnd);
    return true
}
function ToggleItemRowSelection2(b, a, g, e, f) {
    var d = a.getAttribute("iid"), c = d.split(",");
    if (c[1] == "") return false;
    SelectListItem(b, d, c, a, g, f);
    OnItemSelectionChanged(b, GroupNameFromRow(a), e);
    return true
}
function UpdateSelectAllCbx(a, c) {
    if (a == null || a.SelectAllCbx == null) return;
    a.SelectAllCbx.checked = false;
    if (c) {
        var d = CountTotalItems(a), b = CountSelectedItems(a);
        if (b == d && b > 0) a.SelectAllCbx.checked = true
    }

}
function SelectListItem(a, c, f, d, e, g) {
    var b = GetItemRowCbx(d);
    if (b == null) return;
    b.checked = e;
    if (typeof a.dictSel == "undefined") a.dictSel = [];
    if (e) {
        AddCssClassToElement(d, "s4-itm-selected");
        if (a.dictSel[c] == null) {
            a.CurrentSelectedItems++;
            a.dictSel[c] = {
                id: f[1], fsObjType: f[2]
            }

        }
        b.nodeName.toUpperCase() != "INPUT" && b.setAttribute("aria-checked", "true")
    }
    else {
        RemoveCssClassFromElement(d, "s4-itm-selected");
        if (a.dictSel[c] != null) {
            delete a.dictSel[c];
            a.CurrentSelectedItems--
        }
        b.nodeName.toUpperCase() != "INPUT" && b.setAttribute("aria-checked", "false")
    }
    !g && FocusRow(a, c, d)
}
function FocusRow(a, c, d) {
    if (a == null) return;
    a.LastSelectedItemIID = c;
    var b = GetItemRowCbx(d);
    if (b != null) {
        a.RowFocusTimerID != null && clearTimeout(a.RowFocusTimerID);
        a.RowFocusTimerID = setTimeout(function () {
            SetFocusOnRowDelayed(a, b)
        }
        , 11)
    }

}
function SetFocusOnRowDelayed(c, a) {
    if (a == null || c == null) return;
    a.focus();
    if (browseris.webKit) {
        var b = ElementInViewportVertical(a, document.getElementById("s4-workspace"));
        if (b != g_InViewPort) {
            var d = b == g_OutOfViewPortCloserToTop ? true : false;
            a.scrollIntoView(d)
        }

    }
    c.RowFocusTimerID = null
}
function CountTotalItems(a) {
    if (a.TotalListItems == null) a.TotalListItems = 0;
    return a.TotalListItems
}
function CountSelectedItems(a) {
    if (a.CurrentSelectedItems == null) a.CurrentSelectedItems = 0;
    return a.CurrentSelectedItems
}
function GetCtxRgiidFromIid(c) {
    if (c == null) return null;
    var b = c.split(",");
    if (b.length != 3) return null;
    if (b[1] == "") return null;
    var d = b[0], a = window["ctx" + d];
    if (a == null) return null;
    if (typeof a.dictSel == "undefined") a.dictSel = [];
    if (a.CurrentSelectedItems == null) a.CurrentSelectedItems = 0;
    return new CtxRgiid(a, b)
}
function GetCurrentCtx() {
    var c = document.getElementById("_wpSelected");
    if (c == null) return null;
    var a = c.getAttribute("value");
    if (a == null || a == "") return null;
    a = a.substr(12);
    c = document.getElementById(a);
    if (c == null) return null;
    var b;
    if (typeof _spWebPartComponents != "undefined" && _spWebPartComponents != null && _spWebPartComponents[a] && _spWebPartComponents[a].storageId) b = _spWebPartComponents[a].storageId;
    else b = c.getAttribute("WebPartID");
    if (b == null) return null;
    b = b.toUpperCase();
    var d = g_ViewIdToViewCounterMap["{" + b + "}"];
    if (d == null) return null;
    var e = window["ctx" + d];
    return e
}
function GetLastSelectableRowIdx(c, d) {
    if (c == null || d == null) return -1;
    for (var b = c.rows, a = b.length - 1;
    a >= 0;
    a--) {
        var e = b[a];
        if (d(e)) return a
    }
    return -1
}
function UpdateCtxLastSelectableRow(a, c) {
    if (a == null || c == null) return;
    a.LastSelectableRowIdx = 0;
    var b = GetLastSelectableRowIdx(c, ItemIsSelectable);
    if (b != -1) a.LastSelectableRowIdx = b
}
function DeselectAllWPItems() {
    var a = GetCurrentCtx(), b;
    if (a == null || (b = a.clvp) == null || b.tab == null) return;
    var d = b.tab, c = getSelectAllCbxFromTable(d);
    if (c == null) return;
    c.checked = false;
    CountSelectedItems(a) > 0 && DeselectAllItems(a, d.rows, false)
}
function callOpenBreadcrumbMenu(a, g, j, i, c, d, e, f, m, n, h, k) {
    IsFullNameDefined("CUI.PMetrics.perfMark") && CUI.PMetrics.perfMark(CUI.PMarker.perfWSSBreadcrumbStart);
    if (a == null) a = window.event;
    a.cancelBubble = true;
    typeof a.stopPropagation != "undefined" && a.stopPropagation();
    var l = function () {
        SP.UI.PopoutMenu.createPopoutMenuInstanceAndLaunch(g, j, i, c, d, e, f, m, n, h, k)
    }
    , b;
    try {
        b = typeof SP.UI.PopoutMenu.createPopoutMenuInstanceAndLaunch
    }
    catch (o) {
        b = "undefined"
    }
    EnsureScript("SP.js", b, l);
    IsFullNameDefined("CUI.PMetrics.perfMark") && CUI.PMetrics.perfMark(CUI.PMarker.perfWSSBreadcrumbEnd)
}
function HasCssClass(d, f, e) {
    var c = d.className;
    if (c == null) return false;
    for (var a = c.split(" "), b = 0;
    b < a.length;
    b++) if (a[b] == f) {
        if (e) {
            a.splice(b, 1);
            d.className = a.join(" ")
        }
        return true
    }
    return false
}
function AddSpaceToEmptyTDs(b) {
    var c;
    if (browseris.ie7down && b != null) {
        if (b.getAttribute("addEmptySpace") == null) b.setAttribute("addEmptySpace", "true");
        else return;
        for (c = 0;
        c < b.childNodes.length;
        c++) {
            var a = b.childNodes[c];
            if (a.nodeType == 1 && a.tagName == "TD" && a.width != "1%") if (a.innerHTML == "") a.innerHTML = "&#8203;";
            else if (a.innerText == "") {
                while (a != null && a.nodeType == 1 && a.innerHTML != "") a = a.firstChild;
                if (a != null && a.nodeType == 1 && a.innerHTML == "" && (a.tagName == "SPAN" || a.tagName == "DIV" || a.tagName == "NOBR")) a.innerHTML = "&#8203;"
            }

        }

    }

}
function AddBorderToLastCell(c) {
    if (c.getAttribute("setEdgeBorder") != null) return;
    var a = c.cells;
    if (a != null && a.length > 0) {
        if (browseris.ie7down) a[0].className += "";
        var b = a[a.length - 1];
        if (b != null) if (b.className != "") b.className += " ms-vb-lastCell";
        else b.className = "ms-vb-lastCell"
    }
    c.setAttribute("setEdgeBorder", "true")
}
function AddCssClassToElement(a, b) {
    var c = a.className;
    if (c != null) {
        if (!HasCssClass(a, b)) a.className = a.className + " " + b
    }
    else a.className = b
}
function RemoveCssClassFromElement(b, a) {
    HasCssClass(b, a, true)
}
function AddGallery_TypeOf(c) {
    if (c != null) {
        var b = typeof c;
        if (b == "object") if (b.constructor != null) {
            var a = c.constructor.toString(), d = a.indexOf(" "), e = a.indexOf("("), f = a.substr(d + 1, e - d - 1);
            return f
        }
        return b
    }
    return null
}
function IsLanguageSupportedInSilverlight(a) {
    return a == 1025 || a == 1037 || a == 1054 || a == 1081 ? false : true
}
function IsSilverlightInstalled(b) {
    if (typeof b == "undefined") b = null;
    var a = false, l = null;
    try {
        var f = null, k = false;
        if (window.ActiveXObject != null) try {
            f = new ActiveXObject("AgControl.AgControl");
            if (b === null) a = true;
            else if (typeof f.IsVersionSupported != "undefined" && f.IsVersionSupported(b)) a = true;
            f = null
        }
            catch (m) {
                k = true
            }
        else k = true;
        if (k) {
            var j = typeof navigator.plugins != "undefined" ? navigator.plugins["Silverlight Plug-In"] : null;
            if (j != null) if (b === null) a = true;
            else {
                var i = typeof j.description == "string" ? j.description : "";
                if (i === "1.0.30226.2") i = "2.0.30226.2";
                var c = i.split(".");
                while (c.length > 3) c.pop();
                while (c.length < 4) c.push(0);
                var e = b.split(".");
                while (e.length > 4) e.pop();
                var d, h, g = 0;
                do {
                    d = parseInt(e[g]);
                    h = parseInt(c[g]);
                    g++
                }
                while (g < e.length && d === h);
                if (d <= h && !isNaN(d)) a = true
            }

        }

    }
    catch (m) {
        a = false
    }
    return a
}
function IsAddGalleryProviderEnabled(d, c) {
    var a, b = true;
    try {
        if (window.XMLHttpRequest != null) {
            a = new XMLHttpRequest;
            a.open("HEAD", d + c + ".deny.xml", false);
            a.send();
            if (a.status == 200) b = false
        }

    }
    catch (e) { } return b
}
function SilverlightBasedCreateHandler(a) {
    var k = new Date, f, b, c, i, h;
    if (typeof _spPageContextInfo != "undefined") {
        if (_spPageContextInfo.siteServerRelativeUrl != null) {
            b = _spPageContextInfo.siteServerRelativeUrl;
            if (b.charAt(b.length - 1) != "/") b = b + "/"
        }
        else return true;
        if (_spPageContextInfo.webServerRelativeUrl != null) {
            c = _spPageContextInfo.webServerRelativeUrl;
            if (c.charAt(c.length - 1) != "/") c = c + "/";
            f = c + "_layouts/15/AddGallery.aspx"
        }
        else return true;
        if (Boolean(_spPageContextInfo.webLanguage)) i = _spPageContextInfo.webLanguage;
        else return true;
        if (Boolean(_spPageContextInfo.currentLanguage)) h = _spPageContextInfo.currentLanguage;
        else return true
    }
    else return true;
    if (FV4UI() && IsSilverlightInstalled("3.0.40624.0") && IsLanguageSupportedInSilverlight(i) && IsLanguageSupportedInSilverlight(h)) {
        if (a == null) a = "All";
        if (AddGallery_TypeOf(a) != "string") return true;
        a = a.toLowerCase();
        if (a == "page" || a == "publishingpage") return true;
        var d = [];
        d = a.split(":");
        if (d.length == 2 && d[0] == "provider") if (!IsAddGalleryProviderEnabled(b + "_layouts/15/AddGalleryProviders/", d[1])) return true;
        var g = function (b, c) {
            if (FV4UI()) {
                if (Boolean(b)) if (Boolean(c)) window.location = c;
                else window.location.reload()
            }
            else {
                var a = typeof b == "string" ? b : null;
                if (a != null && a != "") window.location.href = a;
                else window.location.reload()
            }

        }
        , j = function () {
            var i = {
                scope: a, currentWeb: c, currentSiteCollection: b, clickDateTime: k
            }
            , e = a == "page" ? 660 : 1012, d = a == "page" ? 360 : 600;
            if (FV4UI()) var j = {
                width: e, height: d, resizable: true, status: false, menubar: false, help: false, url: f, dialogReturnValueCallback: g, args: i
            }
            , l = SP.UI.ModalDialog.showModalDialog(j);
            else {
                var h;
                if (window.showModalDialog != null) h = "dialogWidth:" + String(e) + "px;dialogHeight:" + String(d) + "px;resizable:yes;status:no;menubar:no;help:no";
                else h = "width=" + String(e) + ",height=" + String(d) + ",resizable=yes,status=no,menubar=no,help=no";
                var m = commonShowModalDialog(f, h, g, i)
            }

        }
        , e;
        try {
            e = typeof SP.UI.ModalDialog.showModalDialog
        }
        catch (l) {
            e = "undefined"
        }
        EnsureScript("SP.UI.Dialog.js", e, j);
        return false
    }
    return true
}
function LaunchCreateHandler(a) {
    if (typeof __CreateHandler != "undefined" && __CreateHandler != null) return __CreateHandler(a);
    else try {
        return SilverlightBasedCreateHandler(a)
    }
        catch (c) {
            return true
        }

}
var isdlg;
function QstringStruct(b) {
    if (b == null) b = "";
    if (b.indexOf("?") == 0) b = b.substring(1);
    this.nonFilterParams = {};
    this.filterParams = {};
    for (var f = b.split("&"), e = 0;
    e < f.length;
    e++) {
        var h = f[e], a = h.split("=");
        if (a.length == 2) if (a[0].search("^Filter") != -1) {
            var d = a[0].match(new RegExp("[0-9]*$")), c;
            if (typeof this.filterParams[d] != "undefined") c = this.filterParams[d];
            else {
                c = {};
                this.filterParams[d] = c
            }
            var g = a[0].match(new RegExp("^Filter[^0-9]*"));
            c[g] = a[1]
        }
        else this.nonFilterParams[a[0]] = a[1]
    }

}
function QstringStructToString() {
    var a = this.toArray();
    return "?" + a.join("&")
}
function QstringStructToArray() {
    var c = [], b, a, d = 1, f = typeof this.filterParams.length == "number" ? this.filterParams.length : 0;
    for (b in this.filterParams) {
        var e = this.filterParams[b];
        for (b in e) {
            a = [];
            a.push(b);
            a.push(d);
            a.push("=");
            a.push(e[b]);
            c.push(a.join(""))
        }
        d++
    }
    for (b in this.nonFilterParams) {
        a = [];
        a.push(b);
        a.push("=");
        a.push(this.nonFilterParams[b]);
        c.push(a.join(""))
    }
    return c
}
function Diff() { } function ReconcileQstringFilters(k, l) {
    var c = [];
    c.push(new QstringStruct(k));
    c.push(new QstringStruct(l));
    for (var g = [], j, e, a, b = 0;
    b < c.length;
    b++) for (e in c[b].nonFilterParams) if (b == 0 || typeof c[0].nonFilterParams[e] == "undefined" && b == 1) {
        a = [];
        a.push(e);
        a.push("=");
        a.push(c[b].nonFilterParams[e]);
        g.push(a.join(""))
    }
    var i = 1, h = {};
    for (b = 0;
    b < c.length;
    b++) for (j in c[b].filterParams) {
        var d = c[b].filterParams[j], f = typeof d.FilterField == "string" ? d.FilterField : null;
        if (f == null) f = typeof d.FilterFields == "string" ? d.FilterFields : null;
        if (f != null && typeof h[f] == "undefined") {
            for (e in d) {
                a = [];
                a.push(e);
                a.push(i);
                a.push("=");
                a.push(d[e]);
                g.push(a.join(""))
            }
            i++;
            h[d.FilterField] = d
        }

    }
    return g.join("&")
}
function PageActionClick() {
    EnsureScript("ribbon", TypeofFullName("SP.Ribbon.PageStateActionButton"), function () {
        SP.Ribbon.PageStateActionButton.sendCommand()
    })
}
function ShowWebPartAdder(a) {
    LoadWPAdderOnDemand();
    ExecuteOrDelayUntilEventNotified(function () {
        var b = window.WPAdder;
        if (b != null) {
            b._showCategoryColumn(true);
            b._setZone(a);
            b.show()
        }

    }
    , "_spEventWebPartAdderReady")
}
function GenerateXMLArray(b, c) {
    var a = [];
    if (b != null) {
        var d = "<" + c + ">", e = "</" + c + ">";
        for (var f in b) {
            a.push(d);
            a.push(b[f]);
            a.push(e)
        }

    }
    return a.join("")
}
function GetAncestor(a, b) {
    while (a != null && a.tagName != b) a = a.parentNode;
    return a
}
function GetAncestorByTagNames(b, c) {
    if (b == null) return null;
    var a = b.parentNode;
    while (a != null) {
        if (Array.contains(c, a.tagName)) break;
        a = a.parentNode
    }
    return a
}
function StURLNormalize(a) {
    if (a.substr(0, 2) == "\\\\" || a.substr(0, 2) == "//") a = "file:" + a;
    if (a.substr(0, 5) == "file:") a = a.replace(/\\/g, "/");
    return a
}
function QuickLaunchInitDroppable() {
    if (Boolean(g_QuickLaunchControlIds)) {
        for (var a = [], c = 0;
        c < g_QuickLaunchControlIds.length;
        c++) {
            var g = g_QuickLaunchControlIds[c], e = document.getElementById(g);
            if (Boolean(e)) {
                var b = e.querySelectorAll(".ms-quicklaunch-dropNode");
                if (Boolean(b)) for (var d = 0;
                d < b.length;
                d++) {
                    var f = b[d];
                    a.push(f)
                }

            }

        }
        a.length > 0 && EnsureScriptParams("DragDrop.js", "InitMenuItemAsDroppable", a)
    }

}
var g_listItemCache;
function GetListItemByIID(b) {
    if (typeof g_listItemCache[b] !== "undefined") return g_listItemCache[b];
    var d = GetCtxRgiidFromIid(b), a = d.ctx, e = d.rgiid[1];
    if (typeof a === "undefined" || a === null || typeof a.ListData === "undefined" || a.ListData === null || typeof a.ListData.Row === "undefined" || a.ListData.Row === null) throw "Error: ctx ListData could not be found";
    for (var c = 0;
    c < a.ListData.Row.length;
    c++) if (a.ListData.Row[c].ID === e) return g_listItemCache[b] = a.ListData.Row[c];
    return g_listItemCache[b] = null
}
function FixRibbonAndPageLayout(e) {
    var c = GetCachedElement("s4-ribbonrow");
    if (Boolean(c)) {
        c.className = c.className.replace(RegExp("s4-ribbonrowhidetitle"), "");
        var d = GetCachedElement("s4-titlerow"), j = document.body;
        if (Boolean(d)) {
            d.className = d.className.replace(RegExp("s4-titlerowhidetitle"), "");
            if (e) d.style.display = "block";
            else d.style.display = "none"
        }
        var g = c.querySelector(".ms-core-webpartadder");
        if (Boolean(g)) if (GetCurrentEltStyle(g, "position") == "absolute") {
            var a = document.getElementById("Ribbon");
            if (Boolean(a)) {
                var b;
                if (e) b = AbsTop(a) + a.offsetHeight;
                else {
                    var f = a.querySelector(".ms-cui-tabContainer");
                    if (Boolean(f)) b = AbsTop(f) + f.offsetHeight;
                    else b = AbsTop(a) + a.offsetHeight
                }
                b -= AbsTop(c);
                g.style.top = b.toString() + "px"
            }

        }

    }
    var i = g_spribbon.isInited;
    g_spribbon.isInited = true;
    var h = g_spribbon.isMinimized;
    g_spribbon.isMinimized = e;
    (h != e || !i) && FixRibbonAndWorkspaceDimensions()
}
var g_fRibbonAnimationEnabled, g_fSkipAnimation, g_fSkipNextTabExpandAnimation;
function PrepareRibbonForAnimation(e, f) {
    g_fRibbonAnimationEnabled = ajaxNavigate.get_search().indexOf("IsDlg=1") == -1 && SPAnimation.Settings.IsAnimationEnabled();
    if (!g_fRibbonAnimationEnabled) return;
    var c = document.getElementById("Ribbon"), b = c.childNodes[2], g = pxToNum(g_spribbon.maximizedHeight) - pxToNum(g_spribbon.minimizedHeight);
    if (e) {
        if (b != null) {
            var a = SPAnimationUtility.BasicAnimator.CloneElement(b, false, true, false, false), d = a.firstChild;
            SPAnimationUtility.BasicAnimator.PositionAbsoluteExact(d, 0, 0, null, null);
            SPAnimationUtility.BasicAnimator.Move(d, 0, -g, function () {
                a.parentNode != null && a.parentNode.removeChild(a);
                b.style.visibility = ""
            }
            , null)
        }

    }
    else {
        if (g_fSkipNextTabExpandAnimation) {
            g_fSkipAnimation = true;
            g_fSkipNextTabExpandAnimation = false
        }
        else g_fSkipAnimation = f && Boolean(b);
        !g_fSkipAnimation && c.className.indexOf("ms-cui-animatingRibbon") == -1 && CSSUtil.AddClass(c, "ms-cui-animatingRibbon")
    }

}
function AnimateRibbonMinimizedChanged(b) {
    if (!g_fRibbonAnimationEnabled || b) FixRibbonAndPageLayout(b);
    else if (!g_fSkipAnimation) {
        var c = document.getElementById("Ribbon"), d = c.childNodes[2], e = pxToNum(g_spribbon.maximizedHeight) - pxToNum(g_spribbon.minimizedHeight);
        PrepareRibbonForAnimation(b, false);
        if (d != null) {
            var a = d.firstChild;
            a.style.top = String(-e) + "px";
            fRightToLeft ? a.style.right = "0px" : a.style.left = "0px";
            SPAnimationUtility.BasicAnimator.Move(a, 0, 0, function () {
                var d = document.getElementById("Ribbon").childNodes[2];
                if (d != null) {
                    var e = d.firstChild;
                    if (e != null && a.id == "Ribbon.BlankTab" && e.id == "Ribbon.BlankTab") g_fSkipNextTabExpandAnimation = true
                }
                if (a.parentNode == null || a.parentNode.parentNode == null || a.parentNode.parentNode.nodeType != 1) b = true;
                CSSUtil.RemoveClass(c, "ms-cui-animatingRibbon");
                FixRibbonAndPageLayout(b)
            }
            , null)
        }

    }

}
function UpdateAnimationUserControl(c) {
    var b = document.getElementById("TurnOnAnimation"), a = document.getElementById("TurnOffAnimation"), e = document.getElementById("linkTurnOnAnimation"), d = document.getElementById("linkTurnOffAnimation");
    if (SPAnimation.Settings.IsAnimationEnabled()) {
        if (b != null) b.style.display = "none";
        if (a != null) a.style.display = "";
        c && d != null && d.focus()
    }
    else {
        if (b != null) b.style.display = "";
        if (a != null) a.style.display = "none";
        c && e != null && e.focus()
    }

}
function ToggleAnimationStatus() {
    if (SPAnimation.Settings.IsAnimationEnabled()) SPAnimation.Settings.DisableAnimation();
    else SPAnimation.Settings.EnableAnimation();
    UpdateAnimationUserControl(true)
}
function setupPageDescriptionCallout() {
    var b = document.getElementById("ms-pageDescription");
    if (Boolean(b)) {
        var a = GetInnerText(b), c = document.getElementById("ms-pageDescriptionDiv");
        if (Boolean(a)) {
            setInnerText(b, a);
            a = a.replace(/(\n|\r|\t| )/g, "");
            if (Boolean(a)) {
                SPAnimationUtility.BasicAnimator.FadeIn(document.getElementById("ms-pageDescriptionDiv"), null, null);
                EnsureScriptFunc("callout.js", "Callout", function () {
                    CalloutManager.createNew({
                        ID: "ms-pageDescriptionCallout", launchPoint: c, openOptions: {
                            event: "click", showCloseButton: true
                        }
                        , content: b.innerHTML
                    })
                })
            }

        }

    }

}
function SendAjaxFormPostWithFormDigest(d, b, c) {
    var a = new XMLHttpRequest;
    a.open("POST", d, true);
    a.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    b != null && a.setRequestHeader("Content-length", b.length);
    a.setRequestHeader("Connection", "Keep-alive");
    a.setRequestHeader("x-requestdigest", document.forms[MSOWebPartPageFormName].__REQUESTDIGEST.value);
    a.setRequestHeader("x-requested-with", "XMLHttpRequest");
    a.onreadystatechange = function () {
        if (a.readyState == 4) c != null && c(a)
    };
    a.send(b)
}
function numToPx(a) {
    return String(a) + "px"
}
var g_InViewPort, g_OutOfViewPortCloserToTop, g_OutOfViewPortCloserToBottom;
function ElementInViewportVertical(b, a) {
    if (b == null) return g_InViewPort;
    if (a == null) a = document.body;
    var f = AbsTop(b), g = AbsTop(a), h = a.scrollTop, e = g + h, i = b.offsetHeight, d = f - e, c = e + a.offsetHeight - (f + i);
    return d >= 0 && c >= 0 ? g_InViewPort : Math.abs(d) < Math.abs(c) ? g_OutOfViewPortCloserToTop : g_OutOfViewPortCloserToBottom
}
function GetSuiteHelpLink(c) {
    var a = null;
    if (c != null) a = JSON.parse(c);
    var b = null;
    if (a != null) if (typeof a.HelpLink != "undefined" && typeof a.HelpLink.Url == "string") b = a.HelpLink.Url;
    return b
}
function SuiteLinksEmptyOrSuiteHelpLinkIsCached() {
    var b = OpenSuiteLinksJson(), a = false;
    if (b == "{}") a = true;
    else a = !IsStrNullOrEmpty(GetSuiteHelpLink(b));
    return a
}
function GetCurrentUserKey() {
    var a = null;
    if (_spPageContextInfo != null) a = _spPageContextInfo.systemUserKey;
    return a
}
function GetCurrentUICultureOrNone() {
    var a = "none";
    if (_spPageContextInfo != null && Boolean(_spPageContextInfo.currentUICultureName)) a = _spPageContextInfo.currentUICultureName;
    return a
}
function GetSuiteLinks(d, b) {
    var f = GetCurrentUICultureOrNone(), e = null, a = null, c = false;
    if (!IsNullOrUndefined(window.localStorage) && typeof window.localStorage.SPSuiteLinksJson == "string") {
        if (GetCurrentUserKey() == window.localStorage.SPSuiteLinksUserKey) {
            e = window.localStorage.SPSuiteLinksLanguage;
            a = window.localStorage.SPSuiteLinksJson;
            var g = Date.parse(window.localStorage.SPSuiteLinksDate);
            c = !(g > 0) || +new Date - g > 24 * 60 * 60 * 1e3
        }

    }
    else if (typeof SPSuiteNavBar != "undefined" && typeof SPSuiteNavBar.cachedJson == "string" && !IsStrNullOrEmpty(SPSuiteNavBar.cachedJson)) {
        c = false;
        e = f;
        a = SPSuiteNavBar.cachedJson
    }
    if (typeof SP._yam !== "undefined") if (!c && Boolean(a) && a.indexOf(SP._yam ? "ShellNewsfeed" : "ShellYammer") !== -1) c = true;
    if (e != f || a == null) {
        if (d != null) d(function (a) {
            SP.SOD.executeFunc("suitelinks.js", "CacheSuiteLinks", function () {
                CacheSuiteLinks(a);
                b != null && b(a)
            })
        });
        else b != null && b(null);
        return
    }
    if (c) d != null && d(function (b) {
        SP.SOD.executeFunc("suitelinks.js", "CacheSuiteLinks", function () {
            if (CacheSuiteLinks(b)) a = b
        })
    });
    b != null && b(a)
}
function CtxFromElement(e) {
    if (e == null) return null;
    var f = null, j = null;
    f = GetAncestor(e, "TABLE");
    var b = f.getElementsByTagName("SCRIPT");
    if (b == null) return null;
    var a;
    if (b.length > 0) a = b[0];
    while (!fIsNullOrUndefined(a) && !fIsNullOrUndefined(a.id) && a.id.indexOf("scriptBodyWPQ") == -1) a = a.previousSibling;
    var c = null, d = null;
    if (!fIsNullOrUndefined(a) && !fIsNullOrUndefined(a.id)) {
        c = a.id;
        var h = c.indexOf("WPQ");
        if (h != -1) d = c.substr(h)
    }
    if (!fIsNullOrUndefined(d) && !fIsNullOrUndefined(g_ctxDict)) for (var i in g_ctxDict) {
        var g = g_ctxDict[i];
        if (g.wpq == d) return g
    }
    return null
}
var g_NotificationEngine, g_notiExpireTimerId, g_standardNotiCt, g_statusNotiCt, SPNotifications, g_SPNotificationEventID_Count, addNotification, removeNotification;
function NotificationEngine() {
    this.Initialize()
}
function SPNotification(b, f, e, c, a, d) {
    this.Initialize(b, f, e, c, a, d)
}
function SPNotificationContainer(d, a, c, b) {
    this.Initialize(d, a, c, b)
}
function SPStatusNotificationData(c, d, a, b) {
    this.txt = c;
    this.dt = d;
    this.img = a;
    this.sip = b
}
function addSharingNotification(g, h, b, e, d, c) {
    var a;
    if (e) a = STSHtmlEncode(Strings.STS.L_SharingNotificationAccessRequestsMode);
    else if (d) a = STSHtmlEncode(Strings.STS.L_SharingNotificationGuestLink);
    else if (c) a = STSHtmlEncode(Strings.STS.L_SharingNotificationExternalUsers);
    else if (b !== null && b.length > 0) a = STSHtmlEncode(StBuildParam(Strings.STS.L_SharingNotificationPrefixText, b.join(Strings.STS.L_SharingNotificationUserSeparator)));
    else a = STSHtmlEncode(Strings.STS.L_SharingNotificationEmptyText);
    var f = new SPStatusNotificationData("", a, h, null), i = new SP.UI.Notify.Notification(SPNotifications.ContainerID.Status, STSHtmlEncode(g), false, null, null, f);
    window.setTimeout(function () {
        i.Show(false)
    }
    , 200)
}
var cGCMinimumWidth, cGCMinimumHeight, cGCMaxGCResizeCount, glGCObjectHeight, glGCObjectWidth, glGCResizeCounter;
function GCComputeSizing(e) {
    if (TestGCObject(e)) {
        var g = document.documentElement.currentStyle.direction == "rtl", h = typeof document.compatMode != "undefined" && document.compatMode == "BackCompat", d = h ? document.documentElement.scrollWidth : document.documentElement.clientWidth, f = h ? document.documentElement.scrollHeight : document.documentElement.clientHeight, b = 0, c = 0;
        if (g) {
            b = -180;
            c = 120
        }
        else {
            b = 32;
            c = -2
        }
        var a = e.parentNode;
        while (a != document.body) {
            b += a.offsetLeft;
            c += a.offsetTop;
            a = a.offsetParent;
            if (a == null) break;
            if (g) if (a.offsetLeft > 0) break
        }
        b += e.parentNode.offsetLeft;
        c += e.parentNode.offsetTop;
        glGCObjectHeight = f - c;
        if (glGCObjectHeight > f) glGCObjectHeight = f;
        if (glGCObjectHeight < cGCMinimumHeight) glGCObjectHeight = cGCMinimumHeight;
        if (g) glGCObjectWidth = d + b;
        else glGCObjectWidth = d - b;
        if (glGCObjectWidth > d) glGCObjectWidth = d;
        if (glGCObjectWidth < cGCMinimumWidth) glGCObjectWidth = cGCMinimumWidth
    }

}
function GCResizeGridControl(a) {
    if (TestGCObject(a)) {
        var c = glGCObjectHeight, b = glGCObjectWidth;
        GCComputeSizing(a);
        if (c != glGCObjectHeight) a.height = String(glGCObjectHeight);
        if (b != glGCObjectWidth) a.width = String(glGCObjectWidth)
    }

}
function GCWindowResize(a) {
    if (TestGCObject(a)) {
        glGCResizeCounter = 0;
        GCResizeGridControl(a)
    }

}
function GCOnResizeGridControl(a) {
    if (TestGCObject(a)) if (glGCResizeCounter < cGCMaxGCResizeCount) {
        glGCResizeCounter++;
        GCResizeGridControl(a)
    }

}
function _GCActivateAndFocus(a) {
    if (TestGCObject(a)) {
        typeof a.SetActive != "undefined" && a.SetActive();
        typeof a.Focus != "undefined" && a.Focus()
    }

}
function _GCNavigateToNonGridPage() {
    var c, a = window.location.href, e = a.match(new RegExp("ShowInGrid="));
    if (null != e) {
        c = /ShowInGrid=\w*/;
        a = a.replace(c, "")
    }
    var b = a.indexOf("?");
    if (b != -1) {
        var d = a.indexOf("?", b + 1);
        if (d != -1) a = a.slice(0, d);
        a = a + "&"
    }
    else a = a + "?";
    a = a + "ShowInGrid=False";
    window.location.replace(STSPageUrlValidation(a))
}
function GCAddNewColumn(a, b) {
    if (TestGCObject(a)) {
        var h = window.location.href, e = typeof a.Name != "undefined" ? a.Name : "", g = typeof a.SelectedColumnUniqueName != "undefined" ? a.SelectedColumnUniqueName : "", i = typeof a.RightToLeft != "undefined" ? a.RightToLeft : "", f = typeof a.ViewGUID != "undefined" ? a.ViewGUID : "", d = typeof a.ServerTemplate != "undefined" ? a.ServerTemplate : "", c = "FldNew.aspx";
        if (d == "102") c = "QstNew.aspx";
        b = b + "/_layouts/15/" + c + "?List=" + e + "&View=" + f + "&Source=" + h + "&RelativeToField=" + g + "&LTR=" + i;
        window.location.href = b
    }

}
function GCEditDeleteColumn(a, b) {
    if (TestGCObject(a)) {
        var g = window.location.href, e = typeof a.Name != "undefined" ? a.Name : "", f = typeof a.SelectedColumnUniqueName != "undefined" ? a.SelectedColumnUniqueName : "", d = typeof a.ServerTemplate != "undefined" ? a.ServerTemplate : "", c = "FldEdit.aspx";
        if (d == "102") c = "QstEdit.aspx";
        b = b + "/_layouts/15/" + c + "?List=" + e + "&Field=" + f + "&Source=" + g;
        window.location.href = b
    }

}
var objGCGlobal;
function GCShowTaskPane() {
    if (objGCGlobal != null) {
        objGCGlobal.DisplayTaskPane = true;
        objGCGlobal = null
    }

}
function GCShowHideTaskPane(a) {
    if (TestGCObject(a)) if (typeof a.DisplayTaskPane != undefined) {
        var b = a.DisplayTaskPane;
        a.DisplayTaskPane = !b;
        if (!b) {
            objGCGlobal = a;
            window.setTimeout("GCShowTaskPane()", 5)
        }

    }

}
function GCShowHideTotalsRow(a) {
    if (TestGCObject(a)) if (typeof a.DisplaySheetTotals != "undefined") {
        var b = a.DisplaySheetTotals;
        a.DisplaySheetTotals = !b
    }

}
function GCGridNewRow(a) {
    if (TestGCObject(a)) typeof a.SelectNewRow != "undefined" && a.SelectNewRow()
}
function GCRefresh(a) {
    if (TestGCObject(a)) typeof a.Refresh != "undefined" && a.Refresh()
}
function GCNewFolder(a) {
    if (TestGCObject(a)) typeof a.NewFolder != "undefined" && a.NewFolder()
}
function PositionInfo(c, d, b, a) {
    this.left = c;
    this.top = d;
    this.width = b;
    this.height = a
}
function PositionInfo_InitializePrototype() {
    PositionInfo.prototype.left = 0;
    PositionInfo.prototype.top = 0;
    PositionInfo.prototype.width = 0;
    PositionInfo.prototype.height = 0
}
function CUIInfo(a, c, b) {
    a.CUICommand = c;
    a.CUIEnabledCommands = b
}
function resetExecutionState() {
    IsMenuShown = false;
    itemTable = null;
    imageCell = null;
    onKeyPress = false;
    currentCtx = null;
    currentEditMenu = null;
    currentItemID = null;
    downArrowText = null;
    resetItemGlobals()
}
function resetItemGlobals() {
    currentItemAppName = null;
    currentItemProgId = null;
    currentItemIcon = null;
    currentItemOpenControl = null;
    currentItemModerationStatus = null;
    currentItemUIString = null;
    currentItemCheckedoutToLocal = null;
    currentItemOpenApp = null;
    currentItemCanModify = null;
    currentItemFileUrl = null;
    currentItemFSObjType = null;
    currentItemContentTypeId = null;
    currentItemCheckedOutUserId = null;
    currentItemCheckoutExpires = null;
    currentItemPermMaskH = null;
    currentItemPermMaskL = null;
    currentItemIsEventsExcp = null;
    currentItemIsEventsDeletedExcp = null
}
var ecbManager;
function IsMenuEnabled() {
    return browseris.ie55up || browseris.nav6up || browseris.safari125up
}
function GetSelectedElement(a, c, b) {
    while (a != null && a.tagName != c && (b == null || a.tagName != b)) a = a.parentNode;
    return a
}
function setupMenuContext(a) {
    currentCtx = a
}
function setupMenuContextName(strCtx) {
    var lctx;
    try {
        eval("lctx = " + strCtx + ";")
    }
    catch (e) {
        eval("lctx = g_ctxDict['" + strCtx + "'];")
    }
    setupMenuContext(lctx)
}
function FindSTSMenuTable(a, c) {
    var b = a.getAttribute(c);
    while (a != null && (b == null || b == "")) {
        a = GetSelectedElement(a.parentNode, "TABLE", "DIV");
        if (a != null) b = a.getAttribute(c)
    }
    return a
}
function OnLinkDeferCall(a) {
    if (!IsMenuEnabled()) return false;
    a.onfocusout = OutItem;
    a.onkeydown = PopMenu;
    var b = FindSTSMenuTable(a, "CTXName");
    if (b == null) return false;
    OnItem(b);
    return false
}
function StartDeferItem(a) {
    if (a != itemTable) {
        itemTableDeferred = a;
        var c = a.tagName == "TABLE";
        if (c) {
            a.onmouseout = EndDeferItem;
            a.onclick = DeferredOnItem;
            a.oncontextmenu = DeferredOnItem
        }
        else {
            var b = a.parentNode;
            if (b.getAttribute("IsCallout") != "TRUE") {
                b.onmouseout = EndDeferItem;
                b.oncontextmenu = DeferredOnItem
            }

        }

    }

}
function IsAjaxMenu(d) {
    var a = d.getAttribute("eventtype");
    if (a != null && (a == 5 || a == 3 || a == 4)) return false;
    var c = d.className;
    if (c != null && c.length > 0) {
        var b = c.split(" ");
        if (b != null && b.length > 1 && b[b.length - 1] == "itx") return true
    }
    return false
}
function DeferredOnItem(b) {
    var a = itemTableDeferred;
    if (a != null) {
        MenuHtc_hide();
        OnItem(a);
        if (IsAjaxMenu(a)) CreateAjaxMenu(b);
        else CreateMenu(b);
        return false
    }
    return undefined
}
function EndDeferItem() {
    var a = itemTableDeferred;
    if (a != null) {
        itemTableDeferred = null;
        var c = a.tagName == "TABLE";
        if (c) {
            a.onmouseout = null;
            a.onclick = null;
            a.oncontextmenu = null
        }
        else {
            var b = a.parentNode;
            b.onmouseout = null;
            b.onclick = null;
            b.oncontextmenu = null
        }

    }

}
function GetLastChildElement(b) {
    for (var a = b.childNodes.length - 1;
    a >= 0;
    a--) if (b.childNodes[a].nodeType == 1) return b.childNodes[a];
    return null
}
function CreateHiddenCtxMenu(b, a) {
    return CreateCtxImg_Helper(b, a, false)
}
function CreateCtxImg(b, a) {
    return CreateCtxImg_Helper(b, a, true)
}
function CreateCtxImg_Helper(c, j, i) {
    var a = FindCtxImg(c);
    if (a != null && typeof a.shown == "boolean" && a.shown == true) return a;
    if (a == null) {
        a = document.createElement("DIV");
        a.className = "s4-ctx";
        var b = [];
        b.push("<span>\u00a0</span>");
        b.push("<a onfocus='");
        if (c.tagName == "TD") b.push("OnChildItem(this.parentNode.parentNode); return false;'");
        else if (c.tagName == "TH") b.push("OnChildColumn(this.parentNode.parentNode); return false;'");
        else b.push("return false;'");
        b.push("href='javascript:;' onclick='PopMenuFromChevron(event); return false;' title='");
        b.push(Strings.STS.L_OpenMenu_Text + "'></a>");
        b.push("<span>\u00a0</span>");
        a.innerHTML = b.join("");
        delete b;
        c.appendChild(a)
    }
    if (typeof a.shown == "undefined") {
        for (var h = a.getElementsByTagName("SPAN"), k = h.length, f = 0;
        f < k;
        f++) if (browseris.ie && browseris.iever == 6) h[f].style.lineHeight = "1px";
        var e = a.getElementsByTagName("A")[0];
        e.onfocusout = j;
        var d = e.getElementsByTagName("img")[0], g = d == null;
        if (g) d = document.createElement("img");
        d.style.visibility = "hidden";
        if (c.getAttribute("IsECB") == "TRUE" || c.getAttribute("IsCallout") == "TRUE" || c.getAttribute("role") == "gridcell") d.src = !IsElementRtl(c) ? GetThemedImageUrl("ecbbutton.png") : GetThemedImageUrl("ecbbuttonrtl.png");
        else d.src = GetThemedImageUrl("ecbarw.png");
        d.alt = Strings.STS.L_OpenMenu_Text;
        d.setAttribute("ms-jsgrid-click-passthrough", "true");
        g && e.appendChild(d)
    }
    i && ShowCtxImg(a, true, c);
    return a
}
function FindCtxImg(f) {
    for (var b = null, d = f.childNodes, e = d.length, c = 0;
    c < e;
    c++) {
        var a = d[c];
        if (a.nodeType == 1 && a.className.indexOf("s4-ctx") != -1) {
            b = a;
            break
        }
        else {
            b = FindCtxImg(a);
            if (b != null) break
        }

    }
    return b
}
function RemoveCtxImg(b) {
    var a = FindCtxImg(b);
    a != null && ShowCtxImg(a, false, b)
}
function ShowCtxImg(a, c, b) {
    EnsureScriptFunc("mQuery.js", "m$", function () {
        var e = null, d = null;
        if (a != null) e = a.getElementsByTagName("A")[0];
        if (e != null) d = e.getElementsByTagName("IMG")[0];
        if (d != null) {
            var f = b.tagName == "TH";
            if (c == true) {
                AddCssClassToElement(a, "s4-ctx-show");
                f && AddCssClassToElement(b, "ms-headerCellStyleHover");
                PositionCtxImg(a, b);
                d.style.visibility = "visible";
                a.shown = true;
                ChevronContainer = b;
                if (a.onmouseover == null) a.onmouseover = function () {
                    !HasCssClass(a, "s4-ctx-show-hover") && AddCssClassToElement(a, "s4-ctx-show-hover")
                };
                a.onmouseout = function (c) {
                    if (!IsMenuOn() && !IsCallOutOn() && !IsFilterMenuOn()) {
                        if (c == null) c = window.event;
                        var b = Boolean(c.relatedTarget) ? c.relatedTarget : c.toElement;
                        while (b != null && b.tagName != "BODY") {
                            if (b == this) return;
                            b = b.parentNode
                        }
                        b != null && RemoveCssClassFromElement(a, "s4-ctx-show-hover")
                    }

                }

            }
            else {
                d.style.visibility = "hidden";
                RemoveCssClassFromElement(a, "s4-ctx-show");
                RemoveCssClassFromElement(a, "s4-ctx-show-hover");
                a.shown = false;
                a.onmouseout = null;
                ChevronContainer = null;
                if (f) {
                    RemoveCssClassFromElement(b, "ms-headerCellStyleHover");
                    RemoveCssClassFromElement(b, "ms-headerCellStylePressed");
                    RemoveCssClassFromElement(b, "ms-headerCellStyleMenuOpen")
                }

            }

        }

    })
}
function GetPosition(b) {
    if (b == null) return null;
    var c = 0, d = 0, h = 0, g = 0, j = null, f = null;
    f = b.offsetParent;
    var e = b, a = b;
    while (a.parentNode != null) {
        a = a.parentNode;
        if (a.offsetParent != null) {
            var i = true;
            if (typeof a.scrollTop == "number" && a.scrollTop > 0) d -= a.scrollTop;
            if (typeof a.scrollLeft == "number" && a.scrollLeft > 0) c -= a.scrollLeft
        }
        if (a == f) {
            c += b.offsetLeft;
            if (typeof a.clientLeft == "number" && a.nodeName != "TABLE") c += a.clientLeft;
            d += b.offsetTop;
            if (typeof a.clientTop == "number" && a.nodeName != "TABLE") d += a.clientTop;
            b = a;
            if (b.offsetParent == null) {
                if (typeof b.offsetLeft == "number") c += b.offsetLeft;
                if (typeof b.offsetTop == "number") d += b.offsetTop
            }
            f = b.offsetParent
        }

    }
    if (typeof e.offsetWidth == "number") h = e.offsetWidth;
    if (typeof e.offsetHeight == "number") g = e.offsetHeight;
    return new PositionInfo(c, d, h, g)
}
function GetElemHeight(c, d, g, h) {
    var e = browseris.ie9standardUp;
    if (!e && d && !g && !h) return c.clientHeight;
    var b = window.getComputedStyle(c, null), a = getWidthFromPxString(b.height);
    if (e || d) {
        var f = getWidthFromPxString(b.paddingTop) + getWidthFromPxString(b.paddingBottom);
        if (e) a = Math.max(c.clientHeight, a + f) - f;
        if (d) a += f
    }
    if (g) a += getWidthFromPxString(GetCurrentEltStyle(c, "border-top-width")) + getWidthFromPxString(GetCurrentEltStyle(c, "border-bottom-width"));
    var i = 0;
    if (h) a += getWidthFromPxString(b.marginTop) + getWidthFromPxString(b.marginBottom);
    return a
}
function PositionCtxImg(b, a) {
    var j = 0, c = 0, f = HasCssClass(b.parentNode, "ms-positionRelative"), o = GetPosition(a), s = GetPosition(b.offsetParent);
    if (!window.browseris.chrome && getCurrentEltStyleByNames(a, ["border-collapse", "borderCollapse"]) == "collapse") {
        var k = a.offsetHeight - a.clientHeight;
        o.height += k;
        o.top -= k
    }
    var n = m$(f ? a : a).offset(), m = m$(f ? b.parentNode : b.offsetParent).offset();
    j = n.top - m.top;
    if (f) {
        var g, h;
        if (!IsElementRtl(a)) {
            g = getCurrentEltStyleByNames(a, ["padding-right", "paddingRight"]);
            h = getCurrentEltStyleByNames(a, ["border-right-width", "borderRightWidth"])
        }
        else {
            g = getCurrentEltStyleByNames(a, ["padding-left", "paddingLeft"]);
            h = getCurrentEltStyleByNames(a, ["border-left-width", "borderLeftWidth"])
        }
        var r = getWidthFromPxString(g), q = getWidthFromPxString(h);
        c = -r - q
    }
    else {
        c = n.left - m.left;
        if (!IsElementRtl(a)) c = c + a.offsetWidth - b.offsetWidth;
        j += b.offsetParent.scrollTop;
        c += b.offsetParent.scrollLeft
    }
    var l = String(c) + "px", d = b.style;
    d.top = String(j) + "px";
    if (!IsElementRtl(a) && f) d.right = l;
    else d.left = l;
    var i = GetElemHeight(a, true, false, false);
    if (browseris.ie9standardUp) {
        var e = GetAncestorByTagNames(a, ["TR", "TH"]);
        if (e != null && e.nextSibling != null) {
            var p = e.nextSibling.offsetTop - e.offsetTop - e.offsetHeight;
            i += p
        }

    }
    d.height = String(i) + "px";
    d.lineHeight = String(Math.max(i - 2, 0)) + "px";
    d.margin = "0px"
}
function getCurrentEltStyleByNames(d, c) {
    var a = null, b = 0;
    while (b < c.length) {
        a = GetCurrentEltStyle(d, c[b]);
        if (a != null) break;
        b++
    }
    return a
}
function getWidthFromPxString(b) {
    if (typeof b != "string") return 0;
    var a = b.trim(), c = Number(a.substring(0, a.length - 2).trim());
    return isNaN(c) ? 0 : c
}
function IsInCtxImg(a) {
    while (a != null && a.tagName != "TD" && a.tagName != "BODY" && a.className.indexOf("s4-ctx") == -1) a = a.parentNode;
    return a != null && a.className.indexOf("s4-ctx") != -1 ? a : null
}
function OnItemDeferCall(h) {
    if (!IsMenuEnabled()) return false;
    if (IsMenuOn()) {
        StartDeferItem(h);
        return false
    }
    if (itemTable == h) return undefined;
    itemTable != null && OutItem();
    itemTable = h;
    currentItemID = GetAttributeFromItemTable(itemTable, "ItemId", "Id");
    var c = itemTable.tagName == "TABLE", k = new Function("setupMenuContextName('" + itemTable.getAttribute("CTXName") + "');");
    k();
    var g = currentCtx, j = IsAjaxMenu(itemTable);
    if (c) {
        if (browseris.nav6up) itemTable.className = "ms-selectedtitlealternative";
        else itemTable.className = "ms-selectedtitle";
        if (j) itemTable.className = itemTable.className + " itx"
    }
    var a = itemTable.parentNode;
    while (a.tagName != "TD" && a.tagName != "BODY") a = a.parentNode;
    var b = null;
    if (!c) if (g.IsClientRendering != true) b = CreateCtxImg(a, OutItem);
    var d = j ? CreateAjaxMenu : CreateMenu;
    if (c) {
        itemTable.onclick = d;
        itemTable.oncontextmenu = d
    }
    else {
        var i = false;
        if (b != null) if (b.onclick == null) b.onclick = d;
        else i = true;
        if (!i) a.oncontextmenu = d;
        else if (b != null) a.oncontextmenu = b.onclick
    }
    if (c) itemTable.onmouseout = OutItem;
    else if (a.getAttribute("IsECB") != "TRUE" || itemTable.onmouseover != null) a.onmouseout = OutItem;
    if (c) {
        var f;
        f = GetFirstChildElement(GetFirstChildElement(itemTable));
        if (f != null) imageCell = GetLastChildElement(f);
        if (g.listTemplate == 200) {
            if (itemTable.getAttribute("menuType") == "Orphaned") downArrowText = Strings.STS.L_Reschedule_Text
        }
        else downArrowText = Strings.STS.L_Edit_Text;
        var e = GetFirstChildElement(imageCell);
        e.src = g.imagesPath + "menudark.gif";
        e.alt = downArrowText;
        e.style.visibility = "visible";
        imageCell.className = "ms-menuimagecell"
    }
    return false
}
function OutItem(b) {
    var a = null;
    if (b != null && typeof b.callOut != "undefined" && Boolean(b.callOut) && ecbManager.callOutPar != null) a = ecbManager.callOutPar;
    if (!IsMenuOn() && (itemTable != null || a != null)) {
        var d = itemTable != null && itemTable.tagName == "TABLE";
        if (d) {
            if (IsAjaxMenu(itemTable)) itemTable.className = "ms-unselectedtitle itx";
            else itemTable.className = "ms-unselectedtitle";
            itemTable.onclick = null;
            itemTable.oncontextmenu = null;
            itemTable.onmouseout = null
        }
        else {
            if (a == null) a = GetAncestorByTagNames(itemTable, ["TD", "TH"]);
            if (a != null && a.getAttribute != null && a.getAttribute("IsCallout") == "TRUE") if (typeof CalloutManager === "object" && calloutManager.containsOneCalloutOpen(a)) {
                ecbManager.callOutPar = a;
                return true
            }
            var c = null;
            if (b == null) b = window.event;
            if (b != null) {
                c = typeof b.toElement != "undefined" && b.toElement != null ? b.toElement : b.relatedTarget;
                if (a != null && c != null && IsContained(c, a)) return true
            }
            if (a != null) {
                a.onclick = null;
                a.oncontextmenu = null;
                a.onmouseout = null;
                RemoveCtxImg(a)
            }

        }
        if (d && imageCell != null) {
            GetFirstChildElement(imageCell).style.visibility = "hidden";
            imageCell.className = ""
        }
        resetExecutionState()
    }
    return undefined
}
function IsContained(a, d) {
    if (a == d) return true;
    for (var c = d.getElementsByTagName(a.tagName), b = 0;
    b < c.length;
    b++) if (a == c[b]) return true;
    return false
}
function IsMenuOn() {
    if (!IsMenuShown) return false;
    var a = false;
    a = MenuHtc_isOpen(currentEditMenu);
    if (!a) IsMenuShown = false;
    return a
}
function _ListHeaderMenu_OnMouseDown(a) {
    if (a != null && a.tagName == "TH") if (HasCssClass(a, "ms-headerCellStyleHover")) {
        RemoveCssClassFromElement(a, "ms-headerCellStyleHover");
        AddCssClassToElement(a, "ms-headerCellStylePressed")
    }

}
function _PopMenuFromChevron(d) {
    IsFullNameDefined("CUI.PMetrics.perfMark") && CUI.PMetrics.perfMark(CUI.PMarker.perfWSSFilterSortStart);
    if (d == null) d = window.event;
    var g = Boolean(d.srcElement) ? d.srcElement : d.target, b = g.parentNode;
    while (b.tagName != "TD" && b.tagName != "TH" && b.tagName != "BODY") b = b.parentNode;
    var c, a;
    if (b.tagName == "TD") {
        c = b.getElementsByTagName("DIV");
        var f = null;
        for (a = 0;
        a < c.length;
        a++) if (c[a].getAttribute("CtxNum") != null) f = c[a];
        f != null && OnItemDeferCall(f)
    }
    else if (b.tagName == "TH") {
        c = b.getElementsByTagName("DIV");
        var e = null;
        for (a = 0;
        a < c.length;
        a++) if (c[a].getAttribute("CtxNum") != null) e = c[a];
        e != null && OnMouseOverFilterDeferCall(e)
    }
    IsFullNameDefined("CUI.PMetrics.perfMark") && CUI.PMetrics.perfMark(CUI.PMarker.perfWSSFilterSortEnd);
    return false
}
function PopMenu(a) {
    if (!IsMenuEnabled()) return true;
    if (a == null) a = window.event;
    var b;
    if (a == null) return true;
    if (browseris.nav6up) b = a.which;
    else b = a.keyCode;
    if (!IsMenuOn() && (a.shiftKey && b == 13 || a.altKey && b == 40)) {
        onKeyPress = true;
        var d = Boolean(a.srcElement) ? a.srcElement : a.target, c = FindSTSMenuTable(d, "CTXName");
        if (c == null) return false;
        OnItemDeferCall(c);
        if (IsAjaxMenu(c)) CreateAjaxMenu(a);
        else CreateMenu(a);
        onKeyPress = false;
        return false
    }
    else return true
}
function CreateMenuEx(h, a, e, g) {
    IsFullNameDefined("CUI.PMetrics.perfMark") && CUI.PMetrics.perfMark(CUI.PMarker.perfWSSECBClickStart);
    if (a == null) return undefined;
    IsMenuShown = true;
    document.body.onclick = null;
    var d;
    d = BuildMenu(h);
    d.setAttribute("hideicons", "true");
    currentEditMenu = d;
    a.onmouseout = null;
    var b = null, c = null;
    if (a.tagName == "SPAN" && HasCssClass(a, "js-callout-ecbMenu")) b = a;
    else {
        c = FindCtxImg(a);
        if (c == null) {
            b = GetAncestorByTagNames(a, ["TD", "TR"]);
            if (b == null) b = a;
            else c = FindCtxImg(a)
        }

    }
    c != null && typeof c.shown == "boolean" && c.shown == false && ShowCtxImg(c, true, b);
    OMenu(d, b, null, g, -1, false, false, e);
    if (itemTable != null && itemTable.tagName != "DIV") {
        var f = itemTable.getAttribute("CTXName");
        if (f == undefined || f == "") itemTable = GetSelectedElement(a, "TABLE", "DIV")
    }
    if (b.tagName == "TD") b.onclick = SingleItemSelect;
    d._onDestroy = OutItem;
    if (e != null) e.cancelBubble = true;
    IsFullNameDefined("CUI.PMetrics.perfMark") && CUI.PMetrics.perfMark(CUI.PMarker.perfWSSECBClickEnd);
    return false
}
function BuildMenuWithInit(a) {
    resetItemGlobals();
    setDocType();
    currentItemID = GetAttributeFromItemTable(itemTable, "ItemId", "Id");
    currentItemCheckedOutUserId = typeof itemTable.COUId == "string" ? itemTable.COUId : null;
    currentItemCheckedoutToLocal = GetAttributeFromItemTable(itemTable, "COut", "IsCheckedoutToLocal ");
    currentItemModerationStatus = GetAttributeFromItemTable(itemTable, "MS", "MStatus");
    return BuildMenu(a)
}
function BuildMenu(a) {
    var b = CMenu(currentItemID + "_menu");
    if (b == null) return null;
    else if (Boolean(a.isVersions)) AddVersionMenuItems(b, a);
    else if (a.listTemplate == 121) AddSolutionsCatalogMenuItems(b, a);
    else if (a.listBaseType == 1) AddDocLibMenuItems(b, a);
    else if (a.listTemplate == 200) AddMeetingMenuItems(b, a);
    else AddListMenuItems(b, a);
    InsertFeatureMenuItems(b, a);
    SP.SOD.notifyEventAndExecuteWaitingJobs("CleanupContextMenu", [b, a]);
    return b
}
function GetParentLinkFromEvent(a) {
    if (a == null) a = window.event;
    var c = Boolean(a.srcElement) ? a.srcElement : a.target, b = GetSelectedElement(c, "A");
    return b !== null && b.tagName === "A" ? b : null
}
function isInvalidAjaxMenuElement(a) {
    return a === null || typeof a === "undefined" || onKeyPress == false && IsInCtxImg(a) == null && a.className.indexOf("js-callout-action") === -1 && a.className.indexOf("ms-lstItmLinkAnchor") === -1 && (a.tagName == "A" || a.parentNode.tagName == "A")
}
function CreateAjaxMenu(b, g) {
    if (!IsContextSet()) return undefined;
    if (b == null) b = window.event;
    if (itemTable == null || itemTable.tagName == "TABLE" && imageCell == null) return undefined;
    var e = GetParentLinkFromEvent(b);
    if (isInvalidAjaxMenuElement(e)) {
        e = Boolean(b.srcElement) ? b.srcElement : b.target;
        if (isInvalidAjaxMenuElement(e)) return undefined
    }
    var a = itemTable, f = a.parentNode;
    if (f != null && parseInt(f.getAttribute("creatingAjax")) == 1) return undefined;
    a.parentNode.setAttribute("creatingAjax", "1");
    var d = currentCtx, c = null;
    if (g && b != null && b.clientX != null && b.clientY != null && b.clientX != 0 && b.clientY != 0) {
        c = {};
        c.clientX = b.clientX;
        c.clientY = b.clientY
    }
    var h = function (e, b) {
        if (b != undefined) if (typeof d.IsClientRendering != "undefined" && d.IsClientRendering) {
            b.FileRef != undefined && a.setAttribute("Url", b.FileRef);
            b.FileDirRef != undefined && a.setAttribute("DRef", b.FileDirRef);
            b.File_x0020_Type != undefined && a.setAttribute("Ext", b.File_x0020_Type);
            b.HTML_x0020_File_x0020_Type != undefined && a.setAttribute("Type", b.HTML_x0020_File_x0020_Type);
            b.FSObjType != undefined && a.setAttribute("OType", b.FSObjType);
            b.CheckedOutUserId != undefined && a.setAttribute("COUId", b.CheckedOutUserId);
            b._HasCopyDestinations != undefined && a.setAttribute("HCD", b._HasCopyDestinations);
            b._CopySource != undefined && a.setAttribute("CSrc", b._CopySource);
            b._ModerationStatus != undefined && a.setAttribute("MS", b["_ModerationStatus."]);
            b.ContentType != undefined && a.setAttribute("CType", b.ContentType);
            b.ContentTypeId != undefined && a.setAttribute("CId", b.ContentTypeId);
            b._UIVersion != undefined && a.setAttribute("UIS", b._UIVersion);
            b._SourceUrl != undefined && a.setAttribute("SUrl", b._SourceUrl);
            b["HTML_x0020_File_x0020_Type.File_x0020_Type.mapall"] != undefined && a.setAttribute("Icon", b["HTML_x0020_File_x0020_Type.File_x0020_Type.mapall"]);
            if (d.ListSchema.IsDocLib) {
                b["serverurl.progid"] != undefined && a.setAttribute("sred", b["serverurl.progid"]);
                b["ctxt.ListSchema.DefaultItemOpen"] != undefined && a.setAttribute("defaultio", d.ListSchema.DefaultItemOpen);
                b.IsCheckedoutToLocal != undefined && a.setAttribute("cout", b.IsCheckedoutToLocal)
            }
            OnItemDeferCall(a);
            CreateMenuEx(e, a, c, false);
            a.parentNode.removeAttribute("creatingAjax")
        }
        else {
            a.parentNode.replaceChild(b, a);
            b.onclick = typeof a.onclick != "undefined" ? a.onclick : undefined;
            b.onmousehover = OnItem;
            OnItemDeferCall(b);
            CreateMenuEx(e, b, c);
            b.parentNode.removeAttribute("creatingAjax")
        }

    };
    FetchEcbInfo(d, itemTable.id, itemTable.tagName, h);
    b.cancelBubble = true;
    return false
}
var ecbItems;
function FetchEcbInfo(a, e, i, f) {
    var b = [], g = false, d = escapeUrlForCallback(a.HttpRoot);
    b.push(d);
    d[d.length - 1] != "/" && b.push("/");
    b.push("_layouts/15/inplview.aspx?Cmd=Ctx&List=");
    b.push(a.listName);
    a.HasRelatedCascadeLists == 1 && a.CascadeDeleteWarningMessage == null && b.push("&CascDelWarnMessage=1");
    if (a.view != null) {
        b.push("&View=");
        b.push(a.view)
    }
    b.push("&ViewCount=");
    b.push(a.ctxId);
    if (typeof a.isXslView != "undefined" && a.isXslView) {
        b.push("&IsXslView=TRUE");
        b.push("&Field=");
        if (itemTable != null) b.push(GetAttributeFromItemTable(itemTable, "Field", "Field"));
        else b.push("LinkFilename");
        if (typeof a.IsClientRendering != "undefined" && a.IsClientRendering) {
            b.push("&IsCSR=TRUE");
            if (Boolean(a.listName)) {
                var k = ecbItems + "_" + a.listName.toLowerCase();
                if (document.getElementById(k) == null) {
                    b.push("&CustomAction=TRUE");
                    g = true
                }
                else if (Boolean(a.ExternalDataList)) {
                    CallBackWithRowData(a, e, a.ListData, f);
                    return
                }

            }

        }

    }
    b.push("&ID=");
    b.push(e);
    var h = GetUrlKeyValue("RootFolder", true, ajaxNavigate.get_href());
    if (h.length > 0) {
        b.push("&RootFolder=");
        b.push(h)
    }
    b.push("&ListViewPageUrl=");
    var l = new URI(ajaxNavigate.get_href(), {
        disableEncodingDecodingForLegacyCode: true
    });
    d = l.getStringWithoutQueryAndFragment();
    b.push(d);
    if (typeof a.overrideScope != "undefined") {
        b.push("&OverrideScope=");
        b.push(escapeProperly(a.overrideScope))
    }
    if (typeof a.searchTerm != "undefined" && a.searchTerm != null) {
        b.push("&InplaceSearchQuery=");
        b.push(escapeProperlyCore(a.searchTerm, true))
    }
    else if (typeof a.completedSearchTerm != "undefined" && a.completedSearchTerm != null) {
        b.push("&InplaceSearchQuery=");
        b.push(escapeProperlyCore(a.completedSearchTerm, true))
    }
    typeof a.fullListSearch != "undefined" && a.fullListSearch != null && a.fullListSearch == true && b.push("&InplaceFullListSearch=true");
    var j = b.join(""), c;
    if (window.XMLHttpRequest != null) {
        c = new XMLHttpRequest;
        c.open("POST", j, true);
        c.onreadystatechange = function () {
            if (c.readyState != 4) return;
            if (c.status == 601) alert(c.responseText);
            else if (c.status == 503) alert(Strings.STS.L_ServerBusyError);
            else if (typeof a.IsClientRendering != "undefined" && a.IsClientRendering) {
                var d = c.responseText;
                if (g) {
                    var p = "<CustomAction/>", l = d.indexOf(p);
                    if (l >= 0) {
                        var s = document.createElement("DIV");
                        s.innerHTML = d.substring(0, l);
                        document.body.appendChild(s);
                        d = d.substring(l + p.length)
                    }

                }
                var j = null;
                if (Boolean(a.ExternalDataList)) j = a.ListData;
                else j = JSON.parse(d);
                if (a.HasRelatedCascadeLists == 1 && a.CascadeDeleteWarningMessage == null) a.CascadeDeleteWarningMessage = j.CascadeDeleteWarningMessage;
                CallBackWithRowData(a, e, j, f)
            }
            else {
                var b = c.responseText, n = document.createElement("DIV");
                n.style.visibility = "hidden";
                if (a.HasRelatedCascadeLists == 1 && a.CascadeDeleteWarningMessage == null) {
                    var q = "<CascadeDeleteWarningMessage>", r = "</CascadeDeleteWarningMessage>";
                    if (b.startsWith(q)) {
                        var o = b.indexOf(r);
                        if (o !== -1) {
                            a.CascadeDeleteWarningMessage = b.substring(q.length, o);
                            b = b.substring(o + r.length)
                        }

                    }

                }
                n.innerHTML = b;
                for (var m = n.getElementsByTagName(i), h, k = 0;
                k < m.length;
                k++) {
                    h = m[k];
                    if (h.id == e) break
                }
                if (k == m.length) h = null;
                if (h != null) f(a, h);
                else {
                    alert(Strings.STS.L_ItemGone);
                    RefreshPage(1)
                }

            }

        };
        c.send(null)
    }

}
function CallBackWithRowData(e, f, b, d) {
    for (var c = undefined, a = 0;
    a < b.Row.length;
    a++) if (b.Row[a].ID == f) {
        c = b.Row[a];
        break
    }
    c != undefined && d(e, c)
}
function CreateMenu(a) {
    if (!IsContextSet()) return undefined;
    var c = currentCtx;
    if (a == null) a = window.event;
    var b = a.srcElement != null ? a.srcElement : a.target;
    return itemTable == null || itemTable.tagName == "TABLE" && imageCell == null || onKeyPress == false && IsInCtxImg(b) == null && (b.tagName == "A" || b.parentNode.tagName == "A") ? undefined : CreateMenuEx(c, itemTable, a)
}
function AddSendSubMenu(z, b) {
    var k = [];
    k.Copy = Strings.STS.L_SubmitFileCopyWarning_Text;
    k.Move = Strings.STS.L_SubmitFileMoveWarning_Text;
    k.Link = Strings.STS.L_SubmitFileLinkWarning_Text;
    var d = Strings.STS.L_Send_Text, s = GetAttributeFromItemTable(itemTable, "Url", "ServerUrl"), g, n, h;
    if (currentItemFileUrl != null) {
        n = unescapeProperly(currentItemFileUrl);
        g = escapeProperly(n);
        h = SzExtension(n);
        if (h != null && h != "") h = h.toLowerCase()
    }
    var l = itemTable.getAttribute("SRed"), u = itemTable.getAttribute("DefaultIO");
    if (u == "0" && !HasRights(0, 32)) u = "1";
    var q = currentItemProgId != "SharePoint.WebPartPage.Document" && (l == null || l == "" || HasRights(0, 32)) && h != "aspx", r = HasRights(16, 0), p = currentItemFSObjType != "1" && b.listBaseType == 1 && (l == null || l == "" || HasRights(0, 32));
    if (!q && !r && !p) return;
    var e = CASubM(z, d, "", "", String(400));
    CUIInfo(e, "SendTo", ["SendTo", "PopulateSendToMenu"]);
    e.IsSubMenu = true;
    e.id = "ID_Send";
    e.style.display = "none";
    var c;
    if (q) {
        if (typeof b.SendToLocationName != "undefined" && b.SendToLocationName != null && b.SendToLocationName != "" && typeof b.SendToLocationUrl != "undefined" && b.SendToLocationUrl != null && b.SendToLocationUrl != "") {
            var a = "STSNavigate('" + b.HttpRoot + "/_layouts/15/copy.aspx?SourceUrl=" + g + "&FldUrl=" + escapeProperly(b.SendToLocationUrl);
            a = AddSourceToUrl(a) + "')";
            c = CAMOpt(e, b.SendToLocationName, a, "");
            CUIInfo(c, "SendToRecommendedLocation", ["SendToRecommendedLocation"])
        }
        if (typeof itemTable.getAttribute("HCD") != "undefined" && itemTable.getAttribute("HCD") == "1") {
            d = Strings.STS.L_ExistingCopies_Text;
            a = "STSNavigate('" + b.HttpRoot + "/_layouts/15/updatecopies.aspx?SourceUrl=" + g;
            a = AddSourceToUrl(a) + "')";
            var f = b.imagesPath + "existingLocations.gif";
            c = CAMOpt(e, d, a, f);
            c.id = "ID_ExistingCopies";
            CUIInfo(c, "SendToExistingCopies", ["SendToExistingCopies"])
        }
        d = Strings.STS.L_OtherLocation_Text;
        a = "NavigateToSendToOtherLocationV4(event, '" + b.HttpRoot + "/_layouts/15/copy.aspx?SourceUrl=" + g;
        a = AddSourceToUrl(a) + "')";
        f = b.imagesPath + "sendOtherLoc.gif";
        c = CAMOpt(e, d, a, f);
        c.id = "ID_OtherLocation";
        CUIInfo(c, "SendToOtherLocation", ["SendToOtherLocation"]);
        if (typeof b.OfficialFileNames == "string" && b.OfficialFileNames != "") {
            var o = b.OfficialFileNames.split("__HOSTSEPARATOR__");
            if (o != null) for (var m = 0;
            m < o.length;
            m++) {
                var A = o[m], i = A.split(",");
                d = i[0];
                var y = 0, x = "Copy";
                if (i.length == 3) {
                    d = i[0].replace(/%2c/g, ",").replace(/%25/g, "%");
                    y = i[1];
                    x = i[2]
                }
                a = 'if(confirm("' + StBuildParam(k[x], STSScriptEncode(d)) + "\")!=0) SubmitFormPost('" + b.HttpRoot + "/_layouts/15/SendToOfficialFile.aspx?ID=" + escapeProperly(d) + "&Index=" + String(y) + "&SourceUrl=" + g;
                a = AddSourceToUrl(a) + "')";
                f = "";
                c = CAMOpt(e, d, a, f);
                var t = "SendToOfficialFile" + String(m);
                CUIInfo(c, t, [t])
            }

        }
        CAMSep(e)
    }
    if (r) {
        d = Strings.STS.L_SendToEmail_Text;
        s = GetAttributeFromItemTable(itemTable, "Url", "ServerUrl");
        var j = ctx.HttpRoot.substr(0);
        if (j[j.length - 1] != "/") j += "/";
        var v = -1, w = "";
        v = j.substring(8).indexOf("/") + 8;
        w = j.substr(0, v) + escapeProperlyCore(unescapeProperly(s), true);
        a = "javascript:SendEmail('" + w + "')";
        f = ctx.imagesPath + "gmailnew.gif";
        c = CAMOpt(e, d, a, f);
        CUIInfo(c, "EmailLink", ["EmailLink"]);
        c.id = "ID_SendToEmail"
    }
    if (p) {
        ctx.listTemplate != 119 && AddWorkspaceMenuItem(e, ctx);
        if (ctx.listTemplate != 119) {
            a = "STSNavigate('" + ctx.HttpRoot + "/_layouts/15/download.aspx?SourceUrl=" + g + "&FldUrl=" + escapeProperly(ctx.SendToLocationUrl);
            a = AddSourceToUrl(a) + "')";
            c = CAMOpt(z, Strings.STS.L_DownloadACopy_Text, a, "");
            CUIInfo(c, "DownloadCopy", ["DownloadCopy"]);
            c.id = "ID_DownloadACopy"
        }

    }

}
function AddDocTransformSubMenu(m, k) {
    if (typeof rgDocTransformers == "undefined" || rgDocTransformers == null) return;
    var n = rgDocTransformers, b = null, c = GetAttributeFromItemTable(itemTable, "Url", "ServerUrl"), e;
    if (currentItemFileUrl != null) e = escapeProperly(unescapeProperly(currentItemFileUrl));
    var h = c.lastIndexOf(".");
    if (h > 0) for (var j = c.substring(h + 1, c.length).toLowerCase(), f = false, a = 0;
    a < rgDocTransformers.length;
    a++) if (rgDocTransformers[a].ConvertFrom == j) {
        var g = GetAttributeFromItemTable(itemTable, "CId", "ContentTypeId"), l = new RegExp("/|" + g + "|/");
        if (g != null && !l.test(rgDocTransformers[a].ExcludedContentTypes)) {
            if (!f) {
                b = CASubM(m, Strings.STS.L_DocTran_Text, ctx.imagesPath + "ConvertDocument.gif", Strings.STS.L_DocTran_Text, String(500));
                b.IsSubMenu = true;
                b.Id = "ID_ConvertDocument";
                f = true
            }
            var d = "STSNavigate('" + k.HttpRoot + "/_layouts/15/" + escapeProperlyCore(rgDocTransformers[a].TransformUIPage, true) + "?FileName=" + e + "&TID=" + rgDocTransformers[a].Id;
            d = AddSourceToUrl(d) + "')";
            var i;
            i = CAMOpt(b, rgDocTransformers[a].Name, d, "");
            i.Id = "ID_Transform" + rgDocTransformers[a].Id
        }

    }

}
function AddMeetingMenuItems(g, b) {
    if (itemTable.getAttribute("menuType") == "Orphaned") {
        var a, f = GetAttributeFromItemTable(itemTable, "ItemId", "Id"), c = Strings.STS.L_Move_Text, e = "GoToMtgMove('" + b.listUrlDir + "'," + f + ",'" + itemTable.getAttribute("DateTime") + "','" + itemTable.getAttribute("DateTimeISO") + "')", d = "";
        a = CAMOpt(g, c, e, d);
        a.id = "ID_Move";
        c = Strings.STS.L_Keep_Text;
        e = "MtgKeep('" + b.HttpPath + "','" + b.listName + "'," + f + ")";
        d = "";
        a = CAMOpt(g, c, e, d);
        a.id = "ID_Keep";
        c = Strings.STS.L_Delete_Text;
        e = "MtgDelete('" + b.HttpPath + "','" + b.listName + "'," + f + ")";
        d = b.imagesPath + "delitem.gif";
        a = CAMOpt(g, c, e, d);
        a.id = "ID_Delete"
    }

}
function AddListMenuItems(d, a) {
    if (typeof Custom_AddListMenuItems != "undefined") if (Custom_AddListMenuItems(d, a)) return;
    if (currentItemFileUrl == null) currentItemFileUrl = GetAttributeFromItemTable(itemTable, "Url", "ServerUrl");
    var g;
    if (currentItemFileUrl != null) g = escapeProperly(unescapeProperly(currentItemFileUrl));
    var j = currentItemID;
    if (currentItemIsEventsExcp == null) {
        currentItemIsEventsExcp = false;
        currentItemIsEventsDeletedExcp = false;
        currentItemEvtType = parseInt(itemTable.getAttribute("EventType"));
        if (currentItemEvtType != null && (currentItemEvtType == 2 || currentItemEvtType == 3 || currentItemEvtType == 4)) {
            currentItemIsEventsExcp = true;
            if (currentItemEvtType == 3) currentItemIsEventsDeletedExcp = true;
            if (currentItemID.indexOf(".") != -1) j = currentItemID.split(".")[0]
        }

    }
    var c, b, f;
    if (a.listBaseType == 3 && a.listTemplate == 108) {
        var e = Strings.STS.L_Reply_Text;
        if (itemTable.getAttribute("Ordering").length >= 504) b = "alert('" + Strings.STS.L_ReplyLimitMsg_Text + "')";
        else {
            b = "STSNavigate('" + a.newFormUrl + "&Threading=" + escapeProperly(itemTable.getAttribute("Ordering")) + "&Guid=" + escapeProperly(itemTable.getAttribute("ThreadID")) + "&Subject=" + escapeProperly(itemTable.getAttribute("Subject"));
            b = AddSourceToUrl(b) + "')"
        }
        f = a.imagesPath + "reply.gif";
        c = CAMOpt(d, e, b, f, null, String(100));
        c.id = "ID_Reply"
    }
    AddSharedNamespaceMenuItems(d, a);
    var i = itemTable.getAttribute("CId");
    if (i != null && i.indexOf("0x0106") == 0 && HasRights(16, 0)) {
        e = Strings.STS.L_ExportContact_Text;
        b = "STSNavigate('" + a.HttpPath + "&Cmd=Display&CacheControl=1&List=" + a.listName + "&ID=" + currentItemID + "&Using=" + escapeProperly(a.listUrlDir) + "/vcard.vcf')";
        f = a.imagesPath + "exptitem.gif";
        c = CAMOpt(d, e, b, f, null, String(350));
        CUIInfo(c, "ExportContact", ["ExportContact"]);
        c.id = "ID_ExportContact"
    }
    CAMSep(d);
    a.verEnabled == 1 && AddVersionsMenuItem(d, a, g);
    if (HasRights(0, 4) && a.isModerated == true && HasRights(0, 16) && HasRights(0, 135168) && a.listBaseType != 4 && currentItemID.indexOf(".0.") < 0) {
        e = Strings.STS.L_ModerateItem_Text;
        b = "NavigateToApproveRejectAspx(event, '" + a.HttpRoot + "/_layouts/15/approve.aspx?List=" + a.listName + "&ID=" + j;
        b = AddSourceToUrl(b) + "')";
        f = a.imagesPath + "apprj.gif";
        c = CAMOpt(d, e, b, f, null, String(850));
        CUIInfo(c, "Moderate", ["Moderate"]);
        c.id = "ID_ModerateItem"
    }
    CAMSep(d);
    AddWorkflowsMenuItem(d, a);
    var h = typeof _spPageContextInfo != "undefined" && _spPageContextInfo != null && _spPageContextInfo.alertsEnabled;
    if (currentItemID.indexOf(".0.") < 0 && HasRights(128, 0) && !a.ExternalDataList && h) {
        e = Strings.STS.L_Subscribe_Text;
        b = "NavigateToSubNewAspxV4(event, '" + a.HttpRoot + "', 'List=" + a.listName + "&ID=" + currentItemID + "')";
        f = "";
        c = CAMOpt(d, e, b, f, null, String(1100));
        c.id = "ID_Subscribe";
        CUIInfo(c, "Subscribe", ["Subscribe"])
    }
    (h || !a.ExternalDataList && HasRights(0, 4)) && CAMSep(d);
    AddManagePermsMenuItem(d, a, a.listName, currentItemID);
    if (currentItemID.indexOf(".0.") < 0 && HasRights(0, 8) && !currentItemIsEventsExcp) {
        if (a.listBaseType == 4) e = Strings.STS.L_DeleteResponse_Text;
        else e = Strings.STS.L_DeleteItem_Text;
        b = "DeleteListItem()";
        f = a.imagesPath + "delitem.gif";
        c = CAMOpt(d, e, b, f, null, String(1180));
        CUIInfo(c, "Delete", ["Delete"]);
        c.id = "ID_DeleteItem";
        CUIInfo(c, "Delete", ["Delete"])
    }
    var k = currentItemProgId != null && currentItemProgId != "";
    if (currentItemFSObjType == "1" && !k && HasRights(0, 4) && a.ContentTypesEnabled && a.listTemplate != 108) {
        e = Strings.STS.L_CustomizeNewButton_Text;
        b = "STSNavigate('" + a.HttpRoot + "/_layouts/15/ChangeContentTypeOrder.aspx?List=" + a.listName + "&RootFolder=" + g;
        b = AddSourceToUrl(b) + "')";
        f = "";
        c = CAMOpt(d, e, b, f, null, String(1170));
        CUIInfo(c, "ChangeNewButton", ["ChangeNewButton"]);
        c.id = "ID_CustomizeNewButton"
    }

}
function ReplaceUrlTokens(c, d) {
    var e;
    if (c == null || c == "") {
        c = "";
        return c
    }
    if (currentItemID != null) c = c.replace(/{ItemId}/g, currentItemID);
    var a = null, b = null, f = c.indexOf("?");
    if (-1 != f && f + 2 < c.length) {
        a = c.substr(f + 1);
        b = c.substr(0, f + 1)
    }
    else b = c;
    if (currentItemFileUrl != null) {
        if (null != a) {
            e = escapeProperly(unescapeProperly(currentItemFileUrl));
            a = a.replace(/{ItemUrl}/g, e)
        }
        b = b.replace(/{ItemUrl}/g, currentItemFileUrl)
    }
    if (d.HttpRoot != null) {
        if (null != a) {
            e = escapeProperly(unescapeProperly(d.HttpRoot));
            a = a.replace(/{SiteUrl}/g, e)
        }
        b = b.replace(/{SiteUrl}/g, d.HttpRoot)
    }
    if (d.listName != null) {
        if (null != a) {
            e = escapeProperly(d.listName);
            a = a.replace(/{ListId}/g, e)
        }
        b = b.replace(/{ListId}/g, d.listName)
    }
    if (d.listUrlDir != null) {
        if (null != a) {
            e = escapeProperly(unescapeProperly(d.listUrlDir));
            a = a.replace(/{ListUrlDir}/g, e)
        }
        b = b.replace(/{ListUrlDir}/g, d.listUrlDir)
    }
    var g = GetSource();
    b = b.replace(/{Source}/g, g);
    if (a != null) if (b.length + a.length + g.length > 1950) a = a.replace(/{Source}/g, "");
    else a = a.replace(/{Source}/g, g);
    return null == a ? b : b + a
}
var SYSTEM_ACCOUNT_ID;
function UseCustomAction(c, a, f, g, j, k, e, d, h) {
    var b = false, i = true;
    if (a != null) {
        a = a.toLowerCase();
        if (c == "FileType") b = j == a.toLowerCase();
        else if (c == "ProgId") b = k == a.toLowerCase();
        else if (c == "ContentType") b = e != null && e.indexOf(a.toLowerCase()) == 0;
        else if (c == "List") if (null != d && d == a) b = true;
        else if (null != h && h == a) b = true
    }
    if (b) i = !HasRights(f, g) || IsTrimmedBySystem(f, g);
    return b && !i
}
function InsertFeatureMenuItems(x, f) {
    CAMSep(x);
    var j = GetAttributeFromItemTable(itemTable, "Ext", "FileType"), k = GetAttributeFromItemTable(itemTable, "Type", "HTMLType"), h = GetAttributeFromItemTable(itemTable, "CId", "ContentTypeId"), n = null, l = null, q = ecbItems;
    if (f != null) {
        n = String(f.listTemplate);
        if (null != f.listName && 0 < f.listName.length) {
            l = f.listName.toLowerCase();
            q = q + "_" + l
        }

    }
    if (j != null) j = j.toLowerCase();
    if (k != null) k = k.toLowerCase();
    if (h != null) h = h.toLowerCase();
    var v, o = document.getElementById(q), m = new Array(0), a = null, d = 0, t = [];
    if (o != null) for (var p = 0;
    p < o.childNodes.length;
    p++) {
        var b = o.childNodes[p], B = GetInnerText(b.childNodes[5]), C = GetInnerText(b.childNodes[6]), z = parseInt(GetInnerText(b.childNodes[3])), A = parseInt(GetInnerText(b.childNodes[4]));
        if (!UseCustomAction(B, C, z, A, j, k, h, n, l)) continue;
        a = {};
        a.Title = GetInnerText(b.childNodes[0]);
        a.ImageUrl = GetInnerText(b.childNodes[1]);
        a.Action = GetInnerText(b.childNodes[2]);
        a.Sequence = parseInt(GetInnerText(b.childNodes[7]));
        var i = GetInnerText(b.childNodes[8]);
        a.ProductId = i.length > 0 ? i : null;
        a.FromTenantApp = false;
        if (i != null && i.length > 0) t[i] = true;
        m.push(a)
    }
    var u = GetTenantAppData();
    if (u != null) {
        var w = u.apps;
        for (d = 0;
        d < w.length;
        d++) for (var r = w[d], s = 0;
        s < r.customActions.length;
        s++) try {
            a = r.customActions[s];
            if (!UseCustomAction(a.registrationType, a.registrationId, parseInt(a.rightsHigh), parseInt(a.rightsLow), j, k, h, n, l)) continue;
            if (typeof t[a.productId] != "undefined") continue;
            var c = {};
            c.Title = a.title;
            c.ImageUrl = a.imageUrl;
            c.Action = a.action;
            c.Sequence = parseInt(a.sequence);
            c.ProductId = a.productId;
            c.FromTenantApp = true;
            c.AppTitle = r.title;
            m.push(c)
        }
            catch (D) {
                throw D;
            }

    }
    for (d = 0;
    d < m.length;
    d++) {
        a = m[d];
        var e = ReplaceUrlTokens(a.Action, f), g = null;
        if (a.FromTenantApp) {
            if (e.startsWith("javascript:LaunchApp")) g = e;
            else if (e.substr(0, 11) != "javascript:") g = "STSNavigate('" + STSScriptEncode(e) + "')"
        }
        else if (e.substr(0, 11) == "javascript:") g = e;
        else g = "STSNavigate('" + STSScriptEncode(e) + "')";
        if (g != null) {
            var y = a.ImageUrl == null ? null : ReplaceUrlTokens(a.ImageUrl, f);
            v = CIMOpt(x, a.Title, g, y, null, String(a.Sequence));
            v.id = "ID_" + a.Title
        }

    }

}
function GetRootFolder2(d) {
    var b = GetUrlKeyValue("RootFolder", false), c = d.clvp;
    if (c != null && c.rootFolder != null) b = c.rootFolder;
    if (b == "" || bValidSearchTerm) {
        var a;
        if (itemTable != null) a = GetAttributeFromItemTable(itemTable, "DRef", "FileDirRef");
        if (a != null && a != "") if (a.substring(0, 1) == "/") b = a;
        else b = "/" + a;
        else b = d.listUrlDir
    }
    return b
}
function GetRootFolder(b) {
    var a = GetRootFolder2(b);
    return "&RootFolder=" + escapeProperly(a)
}
function HasRights(a, b) {
    if (currentItemPermMaskH == null) {
        if (itemTable == null) return true;
        var c = GetAttributeFromItemTable(itemTable, "Perm", "PermMask");
        if (c == null) return true;
        var d = itemTable.getAttribute("Author");
        SetCurrentPermMaskFromString(c, d)
    }
    return !currentItemCanModify && (EqualRights(a, b, 0, 4) || EqualRights(a, b, 0, 8) || EqualRights(a, b, 1073741824, 0)) ? false : (b & currentItemPermMaskL) == b && (a & currentItemPermMaskH) == a
}
function EqualRights(a, c, b, d) {
    return a == b && c == d
}
function CheckIfHasRights(a, b, c, d) {
    return (b & d) == b && (a & c) == a
}
function IsTrimmedBySystem(b, c) {
    var a = false;
    if (CheckIfHasRights(0, 4, b, c) && itemTable != null) {
        if (currentItemCheckedOutUserId == null) currentItemCheckedOutUserId = itemTable.getAttribute("COUId");
        a = currentItemCheckedOutUserId == String(SYSTEM_ACCOUNT_ID) && ctx.CurrentUserId != String(SYSTEM_ACCOUNT_ID)
    }
    return a
}
function GetPermMaskH(b) {
    var a = b.length;
    return a <= 10 ? 0 : parseInt(b.substring(2, a - 8), 16)
}
function GetPermMaskL(b) {
    var a = b.length;
    return a <= 10 ? parseInt(b) : parseInt(b.substring(a - 8, a), 16)
}
function SetCurrentPermMaskFromString(b, a) {
    currentItemPermMaskH = GetPermMaskH(b);
    currentItemPermMaskL = GetPermMaskL(b);
    currentItemCanModify = a == null || HasRights(0, 2048) || ctx.CurrentUserId == a || ctx.CurrentUserId == null || typeof ctx.WriteSecurity == "number" && ctx.WriteSecurity == 1
}
function AddSharedNamespaceMenuItems(i, a) {
    var j = GetRootFolder(a);
    setupMenuContext(a);
    if (currentItemFileUrl == null) currentItemFileUrl = GetAttributeFromItemTable(itemTable, "Url", "ServerUrl");
    if (currentItemFSObjType == null) currentItemFSObjType = String(parseInt(GetAttributeFromItemTable(itemTable, "OType", "FSObjType")));
    if (currentItemContentTypeId == null) currentItemContentTypeId = GetAttributeFromItemTable(itemTable, "CId", "ContentTypeId");
    if (currentItemModerationStatus == null) currentItemModerationStatus = GetAttributeFromItemTable(itemTable, "MS", "MStatus");
    if (currentItemCheckedOutUserId == null) currentItemCheckedOutUserId = itemTable.getAttribute("COUId");
    if (currentItemCheckedoutToLocal == null) currentItemCheckedoutToLocal = GetAttributeFromItemTable(itemTable, "COut", "IsCheckedoutToLocal ");
    if (currentItemCheckedoutToLocal != "1") currentItemCheckedoutToLocal = "0";
    var l = currentItemCheckedOutUserId == String(SYSTEM_ACCOUNT_ID) && a.CurrentUserId != String(SYSTEM_ACCOUNT_ID);
    bIsCheckout = 0;
    if (a.isForceCheckout == true && currentItemCheckedOutUserId == "" && currentItemFSObjType != "1") bIsCheckout = 1;
    var k;
    if (currentItemFileUrl != null) k = escapeProperly(unescapeProperly(currentItemFileUrl));
    var c, d, b, g;
    if (a.listBaseType == 1) d = Strings.STS.L_ViewProperties_Text;
    else if (a.listBaseType == 4) d = Strings.STS.L_ViewResponse_Text;
    else d = Strings.STS.L_ViewItem_Text;
    var f = "";
    if (currentItemContentTypeId != null && currentItemContentTypeId != "") f = "&ContentTypeID=" + currentItemContentTypeId;
    var e = "&";
    if (a.displayFormUrl.indexOf("?") == -1) e = "?";
    var h = a.displayFormUrl + e + "ID=" + currentItemID + f;
    h = AddSourceToUrl(h) + j;
    if (301 == a.listTemplate) b = "EditItem('" + h + "')";
    else b = "EditItem2(event, '" + h + "')";
    c = CAMOpt(i, d, b, g, null, String(200));
    CUIInfo(c, "ViewProperties", ["ViewProperties"]);
    if (a.listBaseType == 1) c.id = "ID_ViewProperties";
    else c.id = "ID_ViewItem";
    if (HasRights(0, 4) && !l && !currentItemIsEventsDeletedExcp) {
        if (a.listBaseType == 1) d = Strings.STS.L_EditProperties_Text;
        else if (a.listBaseType == 4) d = Strings.STS.L_EditResponse_Text;
        else d = Strings.STS.L_EditItem_Text;
        e = "&";
        if (a.editFormUrl.indexOf("?") == -1) e = "?";
        if (a.listBaseType == 1) {
            b = "EditItemWithCheckoutAlert(event, '" + a.editFormUrl + e + "ID=" + currentItemID + f;
            b = AddSourceToUrl(b) + j + "'," + String(bIsCheckout) + ",'" + currentItemCheckedoutToLocal + "','" + STSScriptEncode(currentItemFileUrl) + "','" + a.HttpRoot + "')"
        }
        else if (FV4UI()) b = "EditItem2(event, '" + a.editFormUrl + e + "ID=" + currentItemID + f + "')";
        else {
            b = "EditItem('" + a.editFormUrl + e + "ID=" + currentItemID + f;
            b = AddSourceToUrl(b) + "')"
        }
        g = a.imagesPath + "edititem.gif";
        c = CAMOpt(i, d, b, g, null, String(220));
        if (a.listBaseType == 1) {
            c.id = "ID_EditProperties";
            CUIInfo(c, "EditProperties", ["EditProperties"])
        }
        else {
            c.id = "ID_EditItem";
            CUIInfo(c, "EditProperties", ["EditProperties"])
        }
        if (a.listTemplate == 106 && currentItemID.indexOf(".0.") > 0) {
            var n = currentItemID.indexOf(".0."), m = currentItemID.substr(0, n);
            d = Strings.STS.L_EditSeriesItem_Text;
            b = "EditItem2(event, '" + a.editFormUrl + e + "ID=" + m + f;
            b = AddSourceToUrl(b) + "')";
            g = a.imagesPath + "recurrence.gif";
            c = CAMOpt(i, d, b, g, null, String(230));
            CUIInfo(c, "EditSeriesItem", ["EditSeriesItem"]);
            c.id = "ID_EditSeriesItem"
        }

    }

}
function AddSolutionsCatalogMenuItems(a, f) {
    if (HasRights(0, 4)) if (currentItemFSObjType != "1") {
        var d = true, b = GetAttributeFromItemTable(itemTable, "Url", null);
        if (b.length > 4) {
            var h = b.substr(b.length - 4).toLowerCase();
            if (h == ".wsp") {
                var c = GetAttributeFromItemTable(itemTable, "SolutionHash", null), g = GetAttributeFromItemTable(itemTable, "Hash", null), i = GetAttributeFromItemTable(itemTable, "SolutionItemID", null), e = GetAttributeFromItemTable(itemTable, "Status", null), j = GetAttributeFromItemTable(itemTable, "id", null);
                if (c != "") if (e == "") AddSolutionMenuActivate(a);
                else if (c == g) {
                    d = false;
                    AddSolutionMenuDeactivate(a)
                }
                else AddSolutionMenuUpgrade(a)
            }

        }
        d && AddSolutionMenuDelete(a, f)
    }

}
function AddSolutionMenuHelper(i, d, f, e, g, b, c) {
    var a, h = "if(event){event.currentItemID=" + currentItemID + ';}RunSolutionOperation(event, "' + f + '")';
    a = CAMOpt(i, d, h, e, null, String(g));
    CUIInfo(a, b, [b]);
    a.id = c
}
function AddSolutionMenuActivate(a) {
    typeof window.SPUserCanManageSolutions == "boolean" && window.SPUserCanManageSolutions == true && AddSolutionMenuHelper(a, Strings.STS.L_ActivateSolution_Text, "ACT", "", 1210, "ActivateSolution", "ID_ActivateSolution")
}
function AddSolutionMenuDeactivate(a) {
    typeof window.SPUserCanManageSolutions == "boolean" && window.SPUserCanManageSolutions == true && AddSolutionMenuHelper(a, Strings.STS.L_DeactivateSolution_Text, "DEA", "", 1220, "DeactivateSolution", "ID_DeactivateSolution")
}
function AddSolutionMenuUpgrade(a) {
    typeof window.SPUserCanManageSolutions == "boolean" && window.SPUserCanManageSolutions == true && AddSolutionMenuHelper(a, Strings.STS.L_UpgradeSolution_Text, "UPG", "", 1230, "UpgradeSolution", "ID_UpgradeSolution")
}
function AddSolutionMenuDelete(h, b) {
    var a, c;
    currentItemFileUrl = GetAttributeFromItemTable(itemTable, "Url", "ServerUrl");
    if (currentItemFileUrl != null) c = escapeProperly(unescapeProperly(currentItemFileUrl));
    var e = Strings.STS.L_DeleteDocItem_Text, d = "false";
    if (typeof itemTable.getAttribute("CSrc") != "undefined" && itemTable.getAttribute("CSrc") != null && itemTable.getAttribute("CSrc") != "") d = "true";
    var g = "DeleteDocLibItem('" + b.HttpPath + "&Cmd=Delete&List=" + b.listName + "&ID=" + currentItemID + "&owsfileref=" + c + "&NextUsing=" + GetSource() + "'," + d + ")", f = b.imagesPath + "delitem.gif";
    a = CAMOpt(h, e, g, f, null, "310");
    a.id = "ID_DeleteDocItem";
    CUIInfo(a, "Delete", ["Delete"])
}
function RunSolutionOperation(a, g) {
    if (a == null && !IsContextSet()) return;
    var b = currentCtx != null ? currentCtx : typeof a.currentCtx == "object" ? a.currentCtx : null, e = currentItemID != null ? currentItemID : typeof a.currentItemID == "string" ? a.currentItemID : "";
    if (b == null) return;
    var f = b.listUrlDir, i = GetSource(), c = f + "/Forms/Activate.aspx?Op=" + g + "&ID=" + e + "&Source=" + i;
    if (b.listBaseType == 1) c = c + GetRootFolder(b);
    var h = function () { }, j = function () {
        var a = {
            url: c, args: null, width: 650, height: 450, dialogReturnValueCallback: h
        }
        , b = SP.UI.ModalDialog.showModalDialog(a)
    }
    , d;
    try {
        d = typeof SP.UI.ModalDialog.showModalDialog
    }
    catch (k) {
        d = "undefined"
    }
    EnsureScript("SP.UI.Dialog.js", d, j)
}
function AddDocLibMenuItems(c, a) {
    if (typeof window.Custom_AddDocLibMenuItems != "undefined") if (window.Custom_AddDocLibMenuItems(c, a)) return;
    var l = GetRootFolder(a), b, e, d, f;
    AddSharedNamespaceMenuItems(c, a);
    var g;
    if (currentItemFileUrl != null) g = escapeProperly(unescapeProperly(currentItemFileUrl));
    var h = itemTable.getAttribute("SRed"), i = currentItemCheckedOutUserId == String(SYSTEM_ACCOUNT_ID) && a.CurrentUserId != String(SYSTEM_ACCOUNT_ID);
    if (HasRights(0, 4) && HasRights(16, 0) && !i && (h == null || h == "" || HasRights(0, 32))) if (a.isWebEditorPreview == 0 && a.listBaseType == 1) if (a.listTemplate != 119) {
        setDocType();
        if (currentItemAppName != "" && currentItemOpenControl != "") if (!(a.IsAppWeb && currentItemProgId == SPDesignerProgID)) {
            e = "";
            if (currentItemAppName != " ") e = StBuildParam(Strings.STS.L_EditIn_Text, currentItemAppName);
            else {
                var k = StsOpenEnsureEx2(currentItemOpenControl + ".3");
                if (k != null) e = Strings.STS.L_EditInApplication_Text
            }
            if (e != "") {
                d = "editDocumentWithProgID2('" + currentItemFileUrl + "', '" + currentItemProgId + "', '" + currentItemOpenControl + "', '" + String(bIsCheckout) + "', '" + a.HttpRoot + "', '" + currentItemCheckedoutToLocal + "', '" + currentItemOpenApp + "')";
                f = a.imagesPath + currentItemIcon;
                b = CAMOpt(c, e, d, f, null, String(260));
                b.id = "ID_EditIn_" + currentItemAppName;
                b.style.cssText = "display:none";
                CUIInfo(b, "EditDocument", ["EditDocument"])
            }

        }

    }
    CAMSep(c);
    if (HasRights(0, 4)) if (currentItemFSObjType != "1") a.listBaseType == 1 && AddCheckinCheckoutMenuItem(c, a, g);
    (a.verEnabled == 1 || a.isModerated) && currentItemFSObjType != "1" && AddVersionsMenuItem(c, a, g);
    if (HasRights(0, 4)) if (a.isModerated == true && HasRights(0, 16) && ((currentItemModerationStatus == String(2) || !a.EnableMinorVersions) && currentItemCheckedOutUserId == "" || currentItemFSObjType == "1")) {
        e = Strings.STS.L_ModerateItem_Text;
        d = "NavigateToApproveRejectAspx(event, '" + a.HttpRoot + "/_layouts/15/approve.aspx?List=" + a.listName + "&ID=" + currentItemID;
        d = AddSourceToUrl(d) + GetRootFolder(a) + "')";
        f = a.imagesPath + "apprj.gif";
        b = CAMOpt(c, e, d, f, null, String(850));
        CUIInfo(b, "Moderate", ["Moderate"]);
        b.id = "ID_ModerateItem"
    }
    CAMSep(c);
    AddWorkflowsMenuItem(c, a);
    if (currentItemFSObjType != "1") {
        if (a.PortalUrl != null) {
            e = Strings.STS.L_AddToMyLinks_Text;
            d = "Portal_Tasks('PinToMyPage')";
            f = "";
            b = CAMOpt(c, e, d, f, null, String(1e3));
            CUIInfo(b, "AddToMyLinks", ["AddToMyLinks"]);
            b.id = "ID_AddToMyLinks";
            b.style.display = "none"
        }

    }
    else a.listBaseType == 1 && HasRights(16, 0) && AddWorkOfflineMenuItem(c, a, currentItemFileUrl);
    if (HasRights(128, 0) && typeof _spPageContextInfo != "undefined" && _spPageContextInfo != null && typeof _spPageContextInfo.alertsEnabled == "boolean" && _spPageContextInfo.alertsEnabled) {
        e = Strings.STS.L_Subscribe_Text;
        d = "NavigateToSubNewAspxV4(event, '" + a.HttpRoot + "', 'List=" + a.listName + "&ID=" + currentItemID + "')";
        f = "";
        b = CAMOpt(c, e, d, f, null, String(1100));
        CUIInfo(b, "Subscribe", ["Subscribe"]);
        b.id = "ID_Subscribe";
        b.style.display = "none"
    }
    if (currentItemFSObjType != "1") {
        AddSendSubMenu(c, a);
        AddGotoSourceItemMenuItem(c, a, itemTable, currentItemFSObjType);
        AddDocTransformSubMenu(c, a)
    }
    CAMSep(c);
    AddManagePermsMenuItem(c, a, a.listName, currentItemID);
    if (HasRights(0, 8) && !i) {
        e = Strings.STS.L_DeleteDocItem_Text;
        var j = "false";
        if (typeof itemTable.getAttribute("CSrc") != "undefined" && itemTable.getAttribute("CSrc") != null && itemTable.getAttribute("CSrc") != "") j = "true";
        d = "DeleteDocLibItem('" + a.HttpPath + "&Cmd=Delete&List=" + a.listName + "&ID=" + currentItemID + "&owsfileref=" + g + "&NextUsing=" + GetSource() + "'," + j + ")";
        f = a.imagesPath + "delitem.gif";
        b = CAMOpt(c, e, d, f, null, String(1190));
        b.id = "ID_DeleteDocItem";
        CUIInfo(b, "Delete", ["Delete"])
    }
    if (HasRights(0, 4) && currentItemFSObjType == "1" && a.ContentTypesEnabled && a.listTemplate != 108) {
        e = Strings.STS.L_CustomizeNewButton_Text;
        d = "STSNavigate('" + a.HttpRoot + "/_layouts/15/ChangeContentTypeOrder.aspx?List=" + a.listName + "&RootFolder=" + g;
        d = AddSourceToUrl(d) + "')";
        f = "";
        b = CAMOpt(c, e, d, f, null, String(1170));
        CUIInfo(b, "ChangeNewButton", ["ChangeNewButton"]);
        b.id = "ID_CustomizeNewButton"
    }

}
function AddManagePermsMenuItem(h, a, f, g) {
    if (!HasRights(0, 131072) || currentItemIsEventsExcp || a.ExternalDataList || currentItemEvtType == 5) return;
    var c = Strings.STS.L_SharedWithDialogTitle, e = "EnsureScriptFunc('sharing.js', 'DisplaySharedWithDialog', function () { DisplaySharedWithDialog('" + a.HttpRoot + "', '" + f + "','" + g + "'); })", d = a.imagesPath + "permissions16.png", b = CAMOpt(h, c, e, d, null, String(1160));
    b.id = "ID_MngPerms";
    CUIInfo(b, "ManagePermissions", ["ManagePermissions"])
}
function AddGotoSourceItemMenuItem(i, h, e, g) {
    if (g != "1") {
        var a = e.getAttribute("CSrc");
        if (typeof a != "undefined" && a != null && a != "") {
            var c = Strings.STS.L_GoToSourceItem_Text, f = "NavigateToSourceItem(event, '" + STSScriptEncode(a) + "')", d = h.imagesPath + "goToOriginal.gif", b = CAMOpt(i, c, f, d, null, String(440));
            b.id = "ID_GoToSourceItem";
            CUIInfo(b, "GotoSourceItem", ["GotoSourceItem"])
        }

    }

}
function CheckoutSingleItemFromECB(c, d) {
    var a;
    try {
        a = typeof inplview.CheckOutSingleItem
    }
    catch (g) {
        a = "undefined"
    }
    var f = "inplview.CheckOutSingleItem", b = f.split(".");
    if (b.length > 1) {
        var e = function () {
            inplview.CheckOutSingleItem(c, d)
        };
        EnsureScript(b[0], a, e)
    }

}
function AddCheckinCheckoutMenuItem(g, a, f) {
    var b, d, e, c;
    if (!HasRights(0, 4)) return;
    if (currentItemCheckedOutUserId == String(SYSTEM_ACCOUNT_ID) && a.CurrentUserId != String(SYSTEM_ACCOUNT_ID)) return;
    if (currentItemCheckedOutUserId == null) currentItemCheckedOutUserId = itemTable.getAttribute("COUId");
    if (currentItemCheckedOutUserId != "") {
        if (currentItemCheckedOutUserId == a.CurrentUserId || a.CurrentUserId == null || HasRights(0, 256)) {
            d = Strings.STS.L_Checkin_Text;
            if (!FV4UI()) c = "NavigateToCheckinAspx('" + a.HttpRoot + "', 'List=" + a.listName + "&FileName=" + f + "')";
            else c = "CheckInSingleItemFromECB(event, currentCtx, itemTable)";
            e = a.imagesPath + "checkin.gif";
            b = CAMOpt(g, d, c, e, null, String(300));
            b.id = "ID_Checkin";
            CUIInfo(b, "CheckIn", ["CheckIn"]);
            d = Strings.STS.L_DiscardCheckou_Text;
            c = "UnDoCheckOutwithNotification('" + a.HttpRoot + "', '" + f + "')";
            e = a.imagesPath + "unchkout.gif";
            b = CAMOpt(g, d, c, e, null, String(310));
            b.id = "ID_DiscardCheckou";
            CUIInfo(b, "DiscardCheckOut", ["DiscardCheckOut"])
        }

    }
    else if (typeof g_disableCheckoutInEditMode == "undefined" || !g_disableCheckoutInEditMode) {
        d = Strings.STS.L_Checkout_Text;
        currentItemOpenControl == "" && setDocType();
        var l = "", j = itemTable.getAttribute("SRed");
        if (j == null || j == "" || HasRights(0, 32)) {
            if (!FV4UI()) c = "CheckoutDocument('" + a.HttpRoot + "', '" + f + "', '" + l + "')";
            else c = "CheckoutSingleItemFromECB(currentCtx, itemTable)";
            e = a.imagesPath + "checkout.gif";
            b = CAMOpt(g, d, c, e, null, String(300));
            b.id = "ID_Checkout";
            CUIInfo(b, "CheckOut", ["CheckOut"])
        }
        if (currentItemModerationStatus == null) currentItemModerationStatus = GetAttributeFromItemTable(itemTable, "MS", "MStatus");
        if (a.EnableMinorVersions) {
            if (currentItemUIString == null) currentItemUIString = GetAttributeFromItemTable(itemTable, "UIS", "UIString");
            var k = parseInt(currentItemUIString) % 512;
            if ((currentItemModerationStatus == String(1) || currentItemModerationStatus == String(3)) && a.isModerated || !a.isModerated && k != 0) {
                d = Strings.STS.L_PublishItem_Text;
                c = "PublishMajorVersion(event, '" + a.HttpRoot + "', 'List=" + a.listName + "&FileName=" + f + "&Publish=true')";
                e = a.imagesPath + "pubmajor.gif";
                b = CAMOpt(g, d, c, e, null, String(320));
                CUIInfo(b, "Publish", ["Publish"]);
                b.id = "ID_PublishItem"
            }
            else {
                var i, h = false;
                if (!a.isModerated || currentItemModerationStatus == String(0)) {
                    d = Strings.STS.L_UnPublishItem_Text;
                    i = "ID_UnPublishItem";
                    e = a.imagesPath + "unpub.gif"
                }
                else {
                    d = Strings.STS.L_CancelPublish_Text;
                    i = "ID_CancelPublish";
                    e = a.imagesPath + "unapprv.gif";
                    h = true
                }
                c = "UnPublish('" + a.HttpRoot + "', 'FileName=" + f + "&UnPublish=true'," + String(h) + ")";
                b = CAMOpt(g, d, c, e, null, String(330));
                if (h) CUIInfo(b, "CancelApproval", ["CancelApproval"]);
                else CUIInfo(b, "Unpublish", ["Unpublish"]);
                b.id = i
            }

        }

    }

}
function AddWorkflowsMenuItem(h, a) {
    if (HasRights(0, 4) && !a.ExternalDataList) {
        var f = GetAttributeFromItemTable(itemTable, "CId", "ContentTypeId");
        if (f == null || f.substr(0, 8) != "0x010801") {
            var g = a.imagesPath + "workflows.png", c, d = ("" + currentItemID).indexOf(".0.");
            if (d > 0) c = currentItemID.substr(0, d);
            else c = currentItemID;
            var b = "STSNavigate('" + a.HttpRoot + "/_layouts/15/Workflow.aspx?ID=" + c + "&List=" + a.listName;
            b = AddSourceToUrl(b) + "')";
            var e = CAMOpt(h, Strings.STS.L_Workflows_Text, b, g, null, String(900));
            CUIInfo(e, "ViewWorkflows", ["ViewWorkflows"]);
            e.id = "ID_Workflows"
        }

    }

}
function AddWorkspaceMenuItem(e, b) {
    var a, c, d = GetAttributeFromItemTable(itemTable, "SUrl", "SourceUrl");
    if (d != null && d != "" && d != "%20") {
        if (HasRights(0, 135168)) {
            c = "STSNavigate('" + b.HttpRoot + "/_layouts/15/publishback.aspx?list=" + b.listName + "&item=" + currentItemID + GetRootFolder(b) + "')";
            a = CAMOpt(e, Strings.STS.L_PublishBack_Text, c, "", null, String(1140));
            CUIInfo(a, "PublishBack", ["PublishBack"]);
            a.id = "ID_PublishBack"
        }

    }
    else if (HasRights(0, 8388608) && HasRights(0, 135168) && HasRights(0, 67108864)) {
        c = "STSNavigate('" + b.HttpRoot + "/_layouts/15/createws.aspx?list=" + b.listName + "&item=" + currentItemID + GetRootFolder(b) + "')";
        a = CAMOpt(e, Strings.STS.L_CreateDWS_Text, c, "", null, String(1140));
        CUIInfo(a, "CreateDocumentWorkspace", ["CreateDocumentWorkspace"]);
        a.id = "ID_CreateDWS"
    }

}
function AddVersionsMenuItem(i, a, h) {
    if (currentItemID != null) {
        var d = currentItemID.toString();
        if (d.indexOf(".0.") >= 0) return
    }
    var b = currentItemID;
    if (currentItemIsEventsExcp) if (currentItemID.indexOf(".") != -1) b = currentItemID.split(".")[0];
    if (!HasRights(0, 64)) return;
    var e = Strings.STS.L_Versions_Text, g = "NavigateToVersionsAspxV4(event, '" + a.HttpRoot + "', 'list=" + a.listName + "&ID=" + b + "&FileName=" + h + "')", f = a.imagesPath + "versions.gif", c = CAMOpt(i, e, g, f, null, String(800));
    CUIInfo(c, "ViewVersions", ["ViewVersions"]);
    c.id = "ID_Versions"
}
function AddWorkOfflineMenuItem(j, a, i) {
    var b = GetStssyncData("documents", Strings.STS.L_WorkOffline_Text, a.imagesPath + "tbsprsht.gif", a.imagesPath);
    if (b != null) {
        var d = b.BtnText, h = b.BtnImagePath;
        if (d != null) {
            var f = "";
            if (typeof a.SiteTitle == "string" && a.SiteTitle != null) f = STSScriptEncode(a.SiteTitle);
            var c = "";
            if (typeof a.ListTitle == "string" && a.ListTitle != null) c = STSScriptEncode(a.ListTitle);
            var g = "javascript:ExportHailStorm('documents','" + a.HttpRoot + "','" + STSScriptEncode(a.listName) + "','" + STSScriptEncode(f) + "','" + c + "','" + STSScriptEncode(a.listUrlDir) + "','','" + STSScriptEncode(unescapeProperly(a.listUrlDir)) + "'";
            g += ",'" + STSScriptEncode(unescapeProperly(i)) + "','" + currentItemID + "')";
            var e = CAMOpt(j, d, g, h);
            CUIInfo(e, "ConnectFolderToClient", ["ConnectFolderToClient"]);
            e.id = "ID_WorkOffline"
        }

    }

}
function AddVersionMenuItems(b, a) {
    typeof AddVersionMenuItemsCore == "function" && AddVersionMenuItemsCore(b, a)
}
function NavigateToApproveRejectAspx(b, a) {
    if (FV4UI()) ShowInPopUI(b, currentCtx, a);
    else STSNavigate(a)
}
function PublishMajorVersion(d, b, c) {
    var a = b + "/_layouts/15/Checkin.aspx?" + c;
    a = AddSourceToUrl(a);
    if (FV4UI()) ShowInPopUI(d, currentCtx, a);
    else SubmitFormPost(a)
}
function _NavigateToSubNewAspx(b, c) {
    var a = b + "/_layouts/15/SubNew.aspx?" + c;
    a = AddSourceToUrl(a);
    STSNavigate(a)
}
function NavigateToSubNewAspxV4(d, b, c) {
    var a = b + "/_layouts/15/SubNew.aspx?" + c;
    a = AddSourceToUrl(a);
    if (FV4UI()) ShowInPopUI(d, currentCtx, a);
    else STSNavigate(a)
}
function NavigateToVersionsAspx(b, c) {
    var a = b + "/_layouts/15/Versions.aspx?" + c;
    a = AddSourceToUrl(a);
    STSNavigate(a)
}
function NavigateToVersionsAspxV4(d, b, c) {
    var a = b + "/_layouts/15/Versions.aspx?" + c;
    a = AddSourceToUrl(a);
    if (FV4UI()) ShowInPopUI(d, currentCtx, a);
    else STSNavigate(a)
}
function NavigateToSendToOtherLocationV4(b, a) {
    if (FV4UI()) ShowInPopUI(b, currentCtx, a);
    else STSNavigate(a)
}
function UnDoCheckOutwithNotification(a, c) {
    var b = UnDoCheckOut(a, c);
    if (b) {
        var d = Strings.STS.L_Notification_DiscardCheckOut;
        addNotification(d, true)
    }

}
function UnDoCheckOut(f, c) {
    try {
        var b = null, e = SzExtension(unescapeProperly(c));
        if (FSupportCheckoutToLocal(e)) b = StsOpenEnsureEx2("SharePoint.OpenDocuments.3");
        if (b != null && typeof b.DiscardLocalCheckout == "function") {
            var a = unescapeProperly(c);
            if (a.charAt(0) == "/") a = window.location.protocol + "//" + window.location.host + a;
            var d = b.DiscardLocalCheckout(a);
            if (d) {
                SetWindowRefreshOnFocus();
                return d
            }
            if (IsSupportedMacBrowser() || IsSupportedFirefoxOnWin()) {
                if (!confirm(Strings.STS.L_UndoCheckoutWarning_Text)) return false
            }
            else return d
        }
        else if (!confirm(Strings.STS.L_UndoCheckoutWarning_Text)) return false
    }
    catch (g) { } NavigateToCheckinAspx(f, "FileName=" + c + "&DiscardCheckout=true");
    return true
}
function UnPublish(c, d, b) {
    var a = Strings.STS.L_UnPublishWarning_Text;
    if (b) a = Strings.STS.L_CancleApproval_TEXT;
    if (!confirm(a)) return;
    NavigateToCheckinAspx(c, d)
}
function NavigateToCheckinAspx(b, c) {
    var a = b + "/_layouts/15/Checkin.aspx?" + c;
    a = AddSourceToUrl(a);
    SubmitFormPost(a)
}
function _NavigateToManagePermsPage(a, c, b) {
    NavigateToManagePermsPageEx(a, c, b, false)
}
function NavigateToManagePermsPageEx(c, b, d, f) {
    var e = ",LISTITEM", a = c + "/_layouts/15/User.aspx?obj=" + b + "," + d + e + "&List=" + b;
    a = AddSourceToUrl(a);
    if (f) typeof window.frameElement.navigateParent == "function" && window.frameElement.navigateParent(a);
    else STSNavigate(a)
}
function NavigateToSourceItem(e, a) {
    var d = a.match(/[^\/]*\/\/[^\/]*/g), c = d[0];
    a = escapeProperly(a);
    var b = c + "/_layouts/15/copyutil.aspx?GoToDispForm=1&Use=url&ItemUrl=" + a;
    b = AddSourceToUrl(b);
    STSNavigate(b)
}
function setDocType() {
    var b = GetAttributeFromItemTable(itemTable, "Icon", "DocIcon"), a = Boolean(b) ? b.split("|") : [];
    currentItemIcon = a[0];
    currentItemAppName = a[1];
    currentItemOpenControl = a[2];
    if (a[3] == null) currentItemOpenApp = "";
    else currentItemOpenApp = a[3];
    currentItemProgId = GetAttributeFromItemTable(itemTable, "Type", "HTMLType")
}
function DeleteListItem() {
    if (!IsContextSet()) return;
    var b = currentCtx, e = currentItemID, c = Strings.STS.L_STSRecycleConfirm_Text;
    if (!b.RecycleBinEnabled || b.ExternalDataList) c = Strings.STS.L_STSDelConfirm_Text;
    if (Boolean(b.HasRelatedCascadeLists) && b.CascadeDeleteWarningMessage != null) c = b.CascadeDeleteWarningMessage + c;
    if (confirm(c)) {
        var g = Strings.STS.L_Notification_Delete, f = addNotification(g, true), a = b.clvp;
        if (b.ExternalDataList && a != null) {
            a.DeleteItemCore(e);
            a.pendingItems = [];
            typeof a.cctx.executeQueryAsync != "undefined" && a.cctx.executeQueryAsync(function () {
                if (a.rgehs != null && typeof a.rgehs.length == "number") {
                    if (a.rgehs.length == 1 && a.rgehs[0].get_serverErrorCode() == SP.ClientErrorCodes.redirect) {
                        GoToPage(a.rgehs[0].get_serverErrorValue());
                        return
                    }
                    removeNotification(f);
                    a.ShowErrorDialog(RefreshOnDialogClose)
                }
                else RefreshPage(SP.UI.DialogResult.OK)
            }
            , function () {
                removeNotification(f);
                typeof a.rgehs != "undefined" && a.ShowErrorDialog(function () { })
            })
        }
        else {
            var d = b.HttpPath + "&Cmd=Delete&List=" + b.listName + "&ID=" + e + "&NextUsing=" + GetSource();
            if (null != currentItemContentTypeId) d += "&ContentTypeId=" + currentItemContentTypeId;
            SubmitFormPost(d)
        }

    }

}
function DeleteDocLibItem(d, e) {
    if (!IsContextSet()) return;
    var b = currentCtx, h = currentItemID, g = currentItemFSObjType, a, c = false;
    if (currentItemFSObjType == "1") {
        if (currentItemContentTypeId != null) {
            d += "&ContentTypeId=" + currentItemContentTypeId;
            if (currentItemContentTypeId.substr(0, 8).toLowerCase() == "0x0120d5") c = true
        }
        if (c) a = b.RecycleBinEnabled ? Strings.STS.L_STSRecycleConfirm2_Text : Strings.STS.L_STSDelConfirm2_Text;
        else a = b.RecycleBinEnabled ? Strings.STS.L_STSRecycleConfirm1_Text : Strings.STS.L_STSDelConfirm1_Text
    }
    else a = b.RecycleBinEnabled ? Strings.STS.L_STSRecycleConfirm_Text : Strings.STS.L_STSDelConfirm_Text;
    if (Boolean(b.HasRelatedCascadeLists) && b.CascadeDeleteWarningMessage != null) a = b.CascadeDeleteWarningMessage + a;
    if (e && currentItemFSObjType != "1") a = Strings.STS.L_NotifyThisIsCopy_Text + a;
    if (confirm(a)) {
        var f = Strings.STS.L_Notification_Delete;
        addNotification(f, true);
        SubmitFormPost(d, false, true)
    }

}
function EditMenuDefaultForOnclick() {
    if (!IsContextSet()) return;
    var a = currentCtx;
    if (Boolean(a.isVersions)) STSNavigate(itemTable.getAttribute("verUrl"));
    else if (a.listTemplate == 200) {
        var b = currentItemID;
        MtgNavigate(b)
    }
    else EditListItem()
}
function EditListItem() {
    if (event.srcElement.tagName == "A" || event.srcElement.parentNode.tagName == "A") return;
    if (!IsContextSet()) return;
    var b = currentCtx, c = "&";
    if (b.editFormUrl.indexOf("?") == -1) c = "?";
    var a = b.editFormUrl + c + "ID=" + currentItemID;
    a = AddSourceToUrl(a);
    if (b.listBaseType == 1) a = a + GetRootFolder(b);
    STSNavigate2(event, a)
}
function _DoNavigateToTemplateGallery(a, b) {
    document.cookie = "MSOffice_AWS_DefSaveLoc=" + a;
    STSNavigate(b)
}
function Portal_Tasks(j) {
    if (!IsContextSet()) return;
    var b = currentCtx, g = unescapeProperly(currentItemFileUrl), c = 0, d = 0;
    c = g.lastIndexOf("/");
    d = g.lastIndexOf(".");
    if (c < 0 || d < 0 || c > d) return;
    var i = g.substr(c + 1, d - c - 1), f = "";
    c = b.HttpRoot.indexOf("://");
    if (c > 0) {
        d = b.HttpRoot.indexOf("/", c + 3);
        if (d > 0) f = b.HttpRoot.substring(0, d);
        else f = b.HttpRoot
    }
    var e = "";
    if (currentItemFileUrl.charAt(0) == "/" || currentItemFileUrl.substr(0, 3).toLowerCase() == "%2f") e = f + currentItemFileUrl;
    else e = currentItemFileUrl;
    var a = "";
    if (setElementValue("ListViewURL", e) == false) a = a + "&ListViewURL=" + escapeProperly(e);
    if (setElementValue("ListTitle", i) == false) a = a + "&ListTitle=" + escapeProperly(i);
    if (setElementValue("ListDescription", "") == false) a = a + "&ListDescription=";
    if (setElementValue("ReturnUrl", window.location.href) == false) a = a + "&ReturnUrl=" + escapeProperly(window.location.href);
    if (b.PortalUrl.substr(0, 4) != "http") b.PortalUrl = f + b.PortalUrl;
    var h = b.PortalUrl + "_vti_bin/portalapi.aspx?cmd=" + j;
    h = h + "&IconUrl=" + b.imagesPath + currentItemIcon + a;
    SubmitFormPost(h)
}
function IsContextSet() {
    return currentCtx == null ? false : typeof currentCtx.isExplictLogin == "boolean" && currentCtx.isExplictLogin ? true : currentCtx.HttpPath == null || currentItemID == null ? false : true
}
function ChangeContentType(d) {
    var b = document.getElementById(d), a = window.location.href, e = a.indexOf("?");
    if (a.indexOf("?") <= 0) a = a + "?ContentTypeId=" + b.value;
    else if (a.indexOf("&ContentTypeId=") <= 0) a = a + "&ContentTypeId=" + b.value;
    else {
        var c = /&ContentTypeId=[^&]*/i;
        a = a.replace(c, "&ContentTypeId=" + b.value)
    }
    STSNavigate(a)
}
function _TopHelpButtonClick(a) {
    if (typeof navBarHelpOverrideKey != "undefined") return HelpWindowKey(navBarHelpOverrideKey);
    if (a != null) HelpWindowKey(a);
    else HelpWindowKey("HelpHome")
}
function GetSPHelpUrl(d) {
    var c, a;
    if (typeof d == "undefined") c = "?Lcid=" + Strings.STS.L_Language_Text;
    else c = "?Lcid=" + Strings.STS.L_Language_Text + d;
    var b;
    if (typeof ctx == "undefined" || ctx == null) if (typeof currentCtx != "undefined" && currentCtx != null) ctx = currentCtx;
    else if (typeof ctxFilter != "undefined" && ctxFilter != null) ctx = ctxFilter;
    if (typeof ctx != "undefined" && ctx != null && typeof ctx.HttpRoot != "undefined" && ctx.HttpRoot != null) {
        a = ctx.HttpRoot;
        if (a.charAt(a.length - 1) != "/") a = a + "/";
        b = a + "_layouts/15/help.aspx"
    }
    if (b == null && typeof _spPageContextInfo != "undefined" && _spPageContextInfo != null && typeof _spPageContextInfo.webServerRelativeUrl != "undefined" && _spPageContextInfo.webServerRelativeUrl != null) {
        a = _spPageContextInfo.webServerRelativeUrl;
        if (a.charAt(a.length - 1) != "/") a = a + "/";
        b = a + "_layouts/15/help.aspx"
    }
    if (b == null) b = "/_layouts/15/help.aspx";
    return b + c
}
function ShowHelpWindow(a) {
    if (a != null) {
        var b = window.open(a, "STSHELP_15", "height=500,location=no,menubar=no,resizable=yes,scrollbars=no,status=no,toolbar=no,width=400");
        b.focus()
    }

}
function HelpWindowHelper(a) {
    if (SuiteLinksEmptyOrSuiteHelpLinkIsCached()) GetSuiteLinks(null, function (b) {
        SP.SOD.executeFunc("suitelinks.js", "GetSPOHelpUrl", function () {
            var c = GetSPOHelpUrl(b, a);
            ShowHelpWindow(c)
        })
    });
    else {
        var b = GetSPHelpUrl(a);
        ShowHelpWindow(b)
    }

}
function _HelpWindowKey(a) {
    if (a != null) HelpWindowHelper("&Key=" + a + "&ShowNav=true");
    else HelpWindowHelper("&Key=HelpHome&ShowNav=true")
}
function _HelpWindowUrl(a) {
    HelpWindowHelper("&Url=" + a)
}
function _HelpWindow() {
    HelpWindowKey("HelpHome")
}
function _ToggleFullScreenMode() {
    var a = HasCssClass(document.body, "ms-fullscreenmode");
    SetFullScreenMode(!a)
}
function SetFullScreenMode(d) {
    var c = document.body, b = document.getElementById("fullscreenmode"), a = document.getElementById("exitfullscreenmode");
    if (c != null) {
        SetCookieEx("WSS_FullScreenMode", d, true, window);
        if (d) {
            AddCssClassToElement(c, "ms-fullscreenmode");
            if (b != null && a != null) {
                b.style.display = "none";
                a.style.display = ""
            }

        }
        else {
            RemoveCssClassFromElement(c, "ms-fullscreenmode");
            if (b != null && a != null) {
                b.style.display = "";
                a.style.display = "none"
            }

        }
        if ("undefined" != typeof document.createEvent && "function" == typeof window.dispatchEvent) {
            var e = document.createEvent("Event");
            e.initEvent("resize", false, false);
            window.dispatchEvent(e)
        }
        else "undefined" != typeof document.createEventObject && document.body.fireEvent("onresize");
        CallWorkspaceResizedEventHandlers()
    }

}
function FullScreenModeOnKeyDown(a) {
    if (a == null) a = window.event;
    var b;
    if (a == null) return true;
    if (browseris.nav6up) b = a.which;
    else b = a.keyCode;
    a.altKey && b == 122 && _ToggleFullScreenMode();
    return true
}
function InitFullScreenMode() {
    AttachEvent("keydown", FullScreenModeOnKeyDown, document.body);
    SetFullScreenMode(GetCookieEx("WSS_FullScreenMode", window) == "true")
}
function EditSelectedImages() {
    if (!IsImgLibJssLoaded()) {
        alert(Strings.STS.L_NotOurView_Text);
        return
    }
    _EditSelectedImages()
}
function DeleteImages() {
    if (!IsImgLibJssLoaded()) {
        alert(Strings.STS.L_NotOurView_Text);
        return
    }
    _DeleteImages()
}
function SendImages() {
    if (!IsImgLibJssLoaded()) {
        alert(Strings.STS.L_NotOurView_Text);
        return
    }
    _SendImages()
}
function DownloadImages() {
    if (!IsImgLibJssLoaded()) {
        alert(Strings.STS.L_NotOurView_Text);
        return
    }
    _DownloadImages()
}
function MtgToggleTimeZone() {
    var b = document.getElementById("TimeZoneSection"), a = document.getElementById("TimeZoneLink");
    if (b.style.display == "none") {
        b.style.display = "";
        a.innerHTML = "&lt;&lt;";
        a.title = Strings.STS.L_HideTZ_Text;
        SetMtgCookie("MtgTimeZone", "1", "")
    }
    else {
        b.style.display = "none";
        a.innerHTML = "&gt;&gt;";
        a.title = Strings.STS.L_ShowTZ_Text;
        SetMtgCookie("MtgTimeZone", "0", "")
    }

}
function GetPageUrl(b) {
    var a = undefined;
    if (b && typeof g_webUrl != "undefined") a = g_webUrl;
    else if (typeof g_pageUrl != "undefined") a = g_pageUrl;
    return unescapeProperly(a)
}
function MtgNavigate(a) {
    if (typeof g_instanceId != "undefined" && a == g_instanceId) return;
    if (typeof g_fPageGlobal != "undefined") var c = !g_fPageGlobal;
    if (typeof g_thispagedata != "undefined") var b = g_thispagedata;
    window.location.href = GetPageUrl(c) + "?InstanceID=" + a + "&" + b
}
function GoToMtgMove(d, c, b, a) {
    window.location.href = d + "/movetodt.aspx?FromInstanceID=" + c + "&FromInstanceDate=" + escapeProperly(b) + "&FromInstanceDateISO=" + escapeProperly(a) + "&Source=" + escapeProperly(window.location.href)
}
function MtgKeep(b, c, a) {
    confirm(Strings.STS.L_MtgKeepConfirm_Text) && SubmitFormPost(b + "&Cmd=MtgKeep&List=" + escapeProperly(c) + "&EditInstanceID=" + a + "&NextUsing=" + escapeProperly(window.location.href))
}
function MtgDelete(c, d, a) {
    if (confirm(Strings.STS.L_MtgDeleteConfirm_Text)) {
        var b = a == g_instanceId;
        SubmitFormPost(c + "&Cmd=MtgMove&List=" + escapeProperly(d) + "&FromInstanceID=" + a + "&ToInstanceID=-3&NextUsing=" + escapeProperly(b ? GetPageUrl(true) : window.location.href))
    }

}
function SetMtgCookie(a, b, c) {
    document.cookie = a + "=" + b + ";path=" + c
}
function SetAsLastTabVisited() {
    typeof g_pageUrl != "undefined" && typeof g_webUrl != "undefined" && SetMtgCookie("MtgLastTabVisited", escapeProperly(unescapeProperly(g_pageUrl)), escapeProperlyCore(unescapeProperly(g_webUrl), true))
}
function MtgRedirect() {
    var a = GetCookie("MtgLastTabVisited");
    if (a == null) if (typeof g_webUrl != "undefined") a = g_webUrl;
    else a = "../../";
    else a = escapeProperlyCore(a, true);
    window.location.href = a
}
function MakeMtgInstanceUrl(a, c) {
    if (c != "undefined" && c != "") {
        var b = a.indexOf("?");
        if (b == -1 || a.indexOf("InstanceID=", b) == -1) a = a + (b == -1 ? "?" : "&") + "InstanceID=" + c
    }
    return a
}
var filterTable, bIsFilterMenuShown, bIsFilterDataLoaded, filterImageCell, currentFilterMenu, loadingFilterMenu, ctxFilter, bIsFilterKeyPress, filterStr, strFieldName, bMenuLoadInProgress, strFilteredValue, bIsMultiFilter, fnOnFilterMouseOut;
function resetFilterMenuState() {
    if (bMenuLoadInProgress) return;
    bIsFilterMenuShown = false;
    bIsFilterDataLoaded = false;
    filterTable = null;
    filterImageCell = null;
    currentFilterMenu = null;
    loadingFilterMenu = null;
    ctxFilter = null;
    bIsFilterKeyPress = false;
    fnOnFilterMouseOut != null && fnOnFilterMouseOut();
    fnOnFilterMouseOut = null
}
function setupFilterMenuContext(a) {
    ctxFilter = a
}
function IsFilterMenuOn() {
    var a = false;
    if (!bIsFilterMenuShown) return false;
    a = bMenuLoadInProgress || MenuHtc_isOpen(currentFilterMenu) || MenuHtc_isOpen(loadingFilterMenu);
    if (!a) bIsFilterMenuShown = false;
    return a
}
function IsFilterMenuEnabled(b) {
    if (b == null) return true;
    var a = CtxFromElement(b);
    return a != null && typeof a.fullListSearch != "undefined" && Boolean(a.fullListSearch) ? false : true
}
function OnMouseOverFilterDeferCall(elm) {
    if (!IsFilterMenuEnabled(elm)) return false;
    if (IsFilterMenuOn() || bMenuLoadInProgress) return false;
    if (window.location.href.search(new RegExp("[\\?&]Filter=1")) != -1) return false;
    if (typeof elm.FilterDisable != undefined && elm.FilterDisable == "TRUE") return false;
    if (IsFieldNotFilterable(elm) && IsFieldNotSortable(elm)) return false;
    if (filterTable == elm) return true;
    filterTable != null && OnMouseOutFilter();
    filterTable = elm;
    var isTable = filterTable.tagName == "TABLE", curCtx;
    try {
        curCtx = eval("ctx" + filterTable.getAttribute("CtxNum"))
    }
    catch (e) { } if (typeof curCtx == "undefined") return false;
    var createCtx = new Function("setupFilterMenuContext(ctx" + filterTable.getAttribute("CtxNum") + ");");
    createCtx();
    if (isTable) {
        filterTable.className = "ms-selectedtitle";
        SetEvent("click", CreateFilterMenu, filterTable);
        SetEvent("contextmenu", CreateFilterMenu, filterTable);
        SetEvent("mouseout", OnMouseOutFilter, filterTable)
    }
    else {
        var par = filterTable.parentNode;
        SetEvent("click", CreateFilterMenu, par);
        SetEvent("contextmenu", CreateFilterMenu, par);
        SetEvent("mouseout", OnMouseOutFilter, par);
        CreateCtxImg(par, OnMouseOutFilter)
    }
    if (isTable) {
        var titleParent = filterTable.childNodes[0], titleRow = titleParent.childNodes[0];
        filterImageCell = titleRow.childNodes[titleRow.childNodes.length - 1];
        var filterArrow = filterImageCell.childNodes[0];
        filterArrow.src = ctxFilter.imagesPath + "menudark.gif";
        filterArrow.alt = Strings.STS.L_OpenMenu_Text;
        filterArrow.style.visibility = "visible";
        if (IsElementRtl(filterTable)) {
            filterImageCell.style.right = null;
            filterImageCell.style.left = "1px"
        }
        else {
            filterImageCell.style.left = null;
            filterImageCell.style.right = "1px"
        }
        filterImageCell.className = "ms-menuimagecell"
    }
    return true
}
function OnMouseOutFilter(a) {
    if (!IsFilterMenuOn() && filterTable != null && !bMenuLoadInProgress) {
        var c = filterTable.tagName == "TABLE", b = filterTable.parentNode;
        if (c || b == null) {
            filterTable.className = "ms-unselectedtitle";
            filterTable.onclick = null;
            filterTable.oncontextmenu = null;
            filterTable.onmouseout = null
        }
        else {
            if (a == null) a = window.event;
            if (a != null) {
                var d = typeof a.toElement != "undefined" && a.toElement != null ? a.toElement : a.relatedTarget;
                if (b != null && d != null && IsContained(d, b)) return
            }
            b.onclick = null;
            b.oncontextmenu = null;
            b.onmouseout = null;
            RemoveCtxImg(b)
        }
        if (c && filterImageCell != null && filterImageCell.childNodes.length > 0) {
            filterImageCell.childNodes[0].style.visibility = "hidden";
            filterImageCell.className = ""
        }
        resetFilterMenuState()
    }

}
function _OnFocusFilter(a) {
    if (window.location.href.search(new RegExp("[\\?&]Filter=1")) != -1) return false;
    if (!IsFilterMenuEnabled(a)) return false;
    a.onfocusout = OnMouseOutFilter;
    a.onkeydown = PopFilterMenu;
    var b = a.getAttribute("FilterString");
    if (b != null) filterStr = b;
    var c = FindSTSMenuTable(a, "CTXNum");
    if (c == null) return false;
    OnMouseOverFilter(c);
    return false
}
function PopFilterMenu(a) {
    var b;
    if (a == null) a = window.event;
    if (browseris.nav6up) b = a.which;
    else b = a.keyCode;
    if (!IsFilterMenuOn() && (a.shiftKey && b == 13 || a.altKey && b == 40)) {
        var c = Boolean(a.srcElement) ? a.srcElement : a.target;
        if (!IsFilterMenuEnabled(c)) return true;
        var d = FindSTSMenuTable(c, "CTXNum");
        if (d == null) return false;
        OnMouseOverFilterDeferCall(d);
        CreateFilterMenu(a);
        return false
    }
    else return true
}
function CreateFilterMenu(b) {
    if (filterTable == null || filterTable.tagName == "TABLE" && filterImageCell == null) return true;
    var a = filterTable.tagName == "DIV" ? filterTable.parentNode : filterTable, c = FindCtxImg(a);
    c != null && c.shown == false && ShowCtxImg(c, true, a);
    if (b == null) b = window.event;
    bIsFilterMenuShown = true;
    window.origBodyOnClickHandler = document.body.onclick;
    window.document.body.onclick = null;
    currentFilterMenu = CMenu("filter_menu");
    loadingFilterMenu = CMenu("filter_menu_loading");
    currentFilterMenu.setAttribute("CompactMode", "true");
    addSortMenuItems(currentFilterMenu, loadingFilterMenu);
    if (filterStr == null) addFilterMenuItems(currentFilterMenu, loadingFilterMenu);
    else addAdHocFilterMenuItems(currentFilterMenu, loadingFilterMenu);
    if (HasCssClass(a, "ms-headerCellStylePressed") || HasCssClass(a, "ms-headerCellStyleHover")) {
        RemoveCssClassFromElement(a, "ms-headerCellStylePressed");
        RemoveCssClassFromElement(a, "ms-headerCellStyleHover");
        AddCssClassToElement(a, "ms-headerCellStyleMenuOpen")
    }
    b != null && b.stopPropagation != null && b.stopPropagation();
    return false
}
function GetUrlWithNoSortParameters(e) {
    var a = ajaxNavigate.get_href(), h = new URI(a, {
        disableEncodingDecodingForLegacyCode: true
    });
    h.setFragment("");
    a = h.getString();
    var b, f = 0, d, g;
    do {
        d = e.indexOf("=", f);
        if (d == -1) return a;
        b = e.substring(f, d);
        if (b != "") a = RemoveQueryParameterFromUrl(a, b);
        if (typeof b == "string" && b.length > "FilterField".length && b.substring(0, "FilterField".length) == "FilterField") {
            var c = b.substring("FilterField".length);
            a = RemoveQueryParameterFromUrl(a, "FilterValue" + c);
            a = RemoveQueryParameterFromUrl(a, "FilterLookupId" + c);
            a = RemoveQueryParameterFromUrl(a, "FilterOp" + c);
            a = RemoveQueryParameterFromUrl(a, "FilterData" + c)
        }
        g = e.indexOf("&", d + 1);
        if (g == -1) return a;
        f = g + 1
    }
    while (b != "");
    return a
}
function IsFieldNotSortable(a) {
    return a.getAttribute("Sortable") == "FALSE" || a.getAttribute("SortDisable") == "TRUE" || a.getAttribute("FieldType") == "MultiChoice" ? true : false
}
function addSortMenuItems(b, a) {
    if (IsFieldNotSortable(filterTable)) {
        CAMOptFilter(b, a, Strings.STS.L_NotSortable_Text, "", "", false, "fmi_ns");
        CAMSep(b);
        CAMSep(a);
        return
    }
    var e = "", f = "", d = "", g = GetThemedLocalizedImageUrl("SortUpGlyph.png"), h = GetThemedLocalizedImageUrl("SortDownGlyph.png");
    if (filterStr == null) {
        var c = ctxFilter.queryString;
        if (null == c || c == "") c = filterTable.getAttribute("SortFields");
        else {
            var z = GetUrlKeyValue("SortField", true, c), w = filterTable.getAttribute("SortFields"), v = GetUrlKeyValue("SortField", true, w);
            if (z != v) {
                c = SetUrlKeyValue("SortField", v, false, c);
                c = SetUrlKeyValue("SortDir", GetUrlKeyValue("SortDir", true, w), false, c)
            }

        }
        var l = new URI(c, {
            disableEncodingDecodingForLegacyCode: true
        });
        if (l.getQuery().length > 0) c = l.getQuery();
        var r = c.indexOf("&SortDir");
        if (r == -1) {
            CAMOptFilter(b, a, Strings.STS.L_NotSortable_Text, "", "", false, "fmi_ns");
            CAMSep(b);
            CAMSep(a);
            return
        }
        var q = c.indexOf("&", r + 1), t = GetUrlWithNoSortParameters(c);
        t = RemovePagingArgs(t);
        l = new URI(t, {
            disableEncodingDecodingForLegacyCode: true
        });
        var k = "?" + l.getQuery();
        if (k.length > 1) k += "&";
        var C = k;
        if (q < 0) q = c.length;
        k += c.substr(0, r) + "&SortDir=Asc" + c.substr(q);
        l.setQuery(k);
        e = "HandleFilter(event, '" + STSScriptEncode(l.getString()) + "', 1);";
        k = C;
        k += c.substr(0, r) + "&SortDir=Desc" + c.substr(q);
        l.setQuery(k);
        f = "HandleFilter(event, '" + STSScriptEncode(l.getString()) + "', 1);";
        if (e.indexOf("?") >= 0) e.substr(e.indexOf("?") + 1).indexOf("?") >= 0;
        d = filterTable.getAttribute("FieldType");
        strFieldName = filterTable.getAttribute("Name")
    }
    else {
        var s = " ", j = filterStr.lastIndexOf(s);
        d = filterStr.substring(j + 1);
        if (d.substring(0, 2) == "x:") d = d.substring(2);
        var o = filterStr.substring(0, j);
        j = o.lastIndexOf(s);
        strFieldName = o.substring(j + 1);
        if (strFieldName.substring(0, 1) == "@") strFieldName = strFieldName.substring(1);
        o = filterStr.substring(0, j);
        j = o.lastIndexOf(s);
        if (j > 0) strFieldName = o.substring(0, j);
        var B = filterTable.tagName == "TABLE", i = null;
        if (B) {
            var y = filterTable.childNodes[0], A = y.childNodes[0], x = A.childNodes[0];
            i = x.childNodes[0];
            if (i.tagName == "TABLE") {
                var n = i.childNodes[0];
                n = n.childNodes[0];
                n = n.childNodes[1];
                i = n.childNodes[0]
            }

        }
        else i = filterTable.firstChild;
        if (i.tagName == "DIV") i = i.childNodes[0];
        var m = i.href;
        m = m.replace(/%20/g, " ");
        if (m.indexOf("'ascending'") > 0) {
            e = m.replace("'ascending'", "ascending");
            f = m.replace("'ascending'", "descending")
        }
        else {
            f = m.replace("'descending'", "descending");
            e = m.replace("'descending'", "ascending")
        }

    }
    d = d.toLowerCase();
    if (d == "dateTime") {
        CAMOptFilter(b, a, Strings.STS.L_OldestOnTop_Text, e, g, true, "fmi_asc");
        CAMOptFilter(b, a, Strings.STS.L_NewestOnTop_Text, f, h, true, "fmi_desc")
    }
    else if (d == "integer" || d == "number" || d == "currency") {
        CAMOptFilter(b, a, Strings.STS.L_SmallestOnTop_Text, e, g, true, "fmi_asc");
        CAMOptFilter(b, a, Strings.STS.L_LargestOnTop_Text, f, h, true, "fmi_desc")
    }
    else if (d == "text" || d == "user" || d == "string") {
        CAMOptFilter(b, a, Strings.STS.L_AOnTop_Text, e, g, true, "fmi_asc");
        CAMOptFilter(b, a, Strings.STS.L_ZOnTop_Text, f, h, true, "fmi_desc")
    }
    else if (d == "calculated") {
        var p = filterTable.getAttribute("ResultType");
        if (p == "Number" || p == "Currency") {
            CAMOptFilter(b, a, Strings.STS.L_SmallestOnTop_Text, e, g, true, "fmi_asc");
            CAMOptFilter(b, a, Strings.STS.L_LargestOnTop_Text, f, h, true, "fmi_desc")
        }
        else if (p == "dateTime") {
            CAMOptFilter(b, a, Strings.STS.L_OldestOnTop_Text, e, g, true, "fmi_asc");
            CAMOptFilter(b, a, Strings.STS.L_NewestOnTop_Text, f, h, true, "fmi_desc")
        }
        else if (p == "boolean") {
            CAMOptFilter(b, a, Strings.STS.L_Ascending_Text, e, g, true, "fmi_asc");
            CAMOptFilter(b, a, Strings.STS.L_Descending_Text, f, h, true, "fmi_desc")
        }
        else {
            CAMOptFilter(b, a, Strings.STS.L_AOnTop_Text, e, g, true, "fmi_asc");
            CAMOptFilter(b, a, Strings.STS.L_ZOnTop_Text, f, h, true, "fmi_desc")
        }

    }
    else if (d == "attachments") {
        CAMOptFilter(b, a, Strings.STS.L_BlanksOnTop_Text, e, g, true, "fmi_asc");
        CAMOptFilter(b, a, Strings.STS.L_AttachmentsOnTop_Text, f, h, true, "fmi_desc")
    }
    else if (d == "lookup") {
        var u = filterTable.getAttribute("Name");
        if (u == "Last_x0020_Modified" || u == "Created_x0020_Date") {
            CAMOptFilter(b, a, Strings.STS.L_OldestOnTop_Text, e, g, true, "fmi_asc");
            CAMOptFilter(b, a, Strings.STS.L_NewestOnTop_Text, f, h, true, "fmi_desc")
        }
        else {
            CAMOptFilter(b, a, Strings.STS.L_Ascending_Text, e, g, true, "fmi_asc");
            CAMOptFilter(b, a, Strings.STS.L_Descending_Text, f, h, true, "fmi_desc")
        }

    }
    else {
        CAMOptFilter(b, a, Strings.STS.L_Ascending_Text, e, g, true, "fmi_asc");
        CAMOptFilter(b, a, Strings.STS.L_Descending_Text, f, h, true, "fmi_desc")
    }
    CAMSep(b);
    CAMSep(a)
}
function CAMOptFilter(h, g, d, f, c, b, e) {
    var a;
    a = CAMOpt(h, d, f, c);
    a.id = e;
    if (!b) {
        a.setAttribute("enabled", "false");
        a.disabled = true
    }
    a = CAMOpt(g, d, f, c);
    a.id = e + "_p";
    if (!b) {
        a.setAttribute("enabled", "false");
        a.disabled = true
    }

}
function ShowFilterLoadingMenu() {
    !bIsFilterDataLoaded && filterTable != null && FilterOMenu(loadingFilterMenu, filterTable)
}
function IsFieldNotFilterable(a) {
    return a.getAttribute("Filterable") == "FALSE" || a.getAttribute("FilterDisable") == "TRUE" || a.getAttribute("FieldType ") == "Note" || a.getAttribute("FieldType ") == "URL" ? true : false
}
function addFilteringDisabledMenuItem(a) {
    FilterOMenu(a, filterTable);
    a._onDestroy = OnMouseOutFilter
}
function addFilterMenuItems(n, k) {
    if (IsFieldNotFilterable(filterTable)) {
        addFilteringDisabledMenuItem(n);
        return
    }
    var e = document.getElementById("FilterIframe" + filterTable.getAttribute("CtxNum"));
    if (e == null) return;
    var c = ctxFilter.queryString;
    if (null == c || c == "") c = e.getAttribute("FilterLink");
    (c == null || c == "") && window.alert("Unexpected");
    if (c == "?") {
        var r = ajaxNavigate.getParam("InplviewHash" + ctxFilter.view);
        if (Boolean(r)) c += DecodeHashAsQueryString(r)
    }
    var h = escapeProperly(filterTable.getAttribute("Name"));
    strFilteredValue = null;
    var a = "", d = 0, b, f;
    do {
        d++;
        var s = false;
        b = c.match(new RegExp("FilterField" + String(d) + "=[^&#]*"));
        if (!Boolean(b)) b = c.match(new RegExp("FilterFields" + String(d) + "=[^&#]*"));
        f = c.match(new RegExp("&FilterValue" + String(d) + "=[^&#]*"));
        if (!Boolean(f)) {
            f = c.match(new RegExp("&FilterValues" + String(d) + "=[^&#]*"));
            s = true
        }
        if (b != null && f != null) {
            if (strFilteredValue == null) {
                strFilteredValue = getFilterValueFromUrl(b.toString() + f.toString(), h);
                bIsMultiFilter = s
            }
            a = a + "&" + b.toString() + f.toString();
            var q = c.match(new RegExp("&FilterOp" + String(d) + "=[^&#]*"));
            if (q != null) a = a + q.toString();
            var i = c.match(new RegExp("&FilterLookupId" + String(d) + "=[^&#]*"));
            if (i != null) a = a + i.toString();
            var m = c.match(new RegExp("&FilterData" + String(d) + "=[^&#]*"));
            if (m != null) a = a + m.toString();
            if (i != null && m == null && strFilteredValue != null) {
                addFilteringDisabledMenuItem(n);
                return
            }

        }

    }
    while (null != b);
    var p = strFilteredValue != null, t = StBuildParam(Strings.STS.L_DontFilterBy_Text, filterTable.getAttribute("DisplayName")), u = "javascript:HandleFilter(event, '" + STSScriptEncode(FilterFieldV3(ctxFilter.view, h, "", 0, ctxFilter.queryString, true)) + "')", l;
    if (p) l = GetThemedImageUrl("DeleteFilterGlyph.png");
    else l = GetThemedImageUrl("DisabledDeleteFilterGlyph.png");
    CAMOptFilter(n, k, t, u, l, p, "fmi_clr");
    var v = CAMOpt(k, Strings.STS.L_Loading_Text, "");
    v.setAttribute("enabled", "false");
    setTimeout("ShowFilterLoadingMenu()", 500);
    k._onDestroy = OnMouseOutFilter;
    b = c.match(new RegExp("MembershipGroupId=[^&]*"));
    if (b != null) a = a + "&" + b.toString();
    b = c.match(new RegExp("InstanceID=[^&]*"));
    if (b != null) a = a + "&" + b.toString();
    if (a != null && a.length > 0) {
        if (ctxFilter.overrideFilterQstring != null && ctxFilter.overrideFilterQstring.length > 0) a = "&" + ReconcileQstringFilters(a.substring(1), ctxFilter.overrideFilterQstring)
    }
    else if (ctxFilter.overrideFilterQstring != null && ctxFilter.overrideFilterQstring.length > 0) a = "&" + ctxFilter.overrideFilterQstring;
    var j = "", g;
    if (ctxFilter != null && (g = ctxFilter.clvp) != null && g.rootFolder != null && g.rootFolder.length > 0) j = "&RootFolder=" + escapeProperlyCore(g.rootFolder, true);
    else {
        b = c.match(new RegExp("RootFolder=[^&]*"));
        if (b != null) j = "&" + b.toString()
    }
    var o = "";
    b = a.match(new RegExp("OverrideScope=[^&]*"));
    if (ctxFilter != null && typeof ctxFilter.overrideScope != "undefined" && b == null) o = "&OverrideScope=" + escapeProperlyCore(ctxFilter.overrideScope, false);
    if (browseris.safari) {
        e.src = "/_layouts/15/blank.htm";
        e.style.offsetLeft = "-550px";
        e.style.offsetTop = "-550px";
        e.style.border = "0px";
        e.style.display = "block"
    }
    e.src = ctxFilter.HttpRoot + "/_layouts/15/filter.aspx?ListId=" + ctxFilter.listName + j + o + "&FieldInternalName=" + h + "&ViewId=" + ctxFilter.view + "&FilterOnly=1&Filter=1" + a;
    bMenuLoadInProgress = true
}
function getFilterValueFromUrl(b, f) {
    var a, c, e;
    a = b.indexOf("=");
    if (a == -1) return null;
    c = b.indexOf("&");
    if (c == -1) return null;
    if (c < a) return null;
    b = CanonicalizeUrlEncodingCase(b);
    e = b.substring(a + 1, c);
    if (e == f) {
        var d;
        a = b.indexOf("=", c + 1);
        if (a == -1) return null;
        d = b.substr(a + 1);
        d = unescapeProperly(d);
        return d
    }
    return null
}
function _OnIframeLoad() {
    bMenuLoadInProgress = false;
    if (filterTable != null && filterTable.getAttribute("Name") != null) {
        var b = null;
        b = document.getElementById("FilterIframe" + filterTable.getAttribute("CtxNum"));
        if (b != null) {
            var a = null, e = filterTable.getAttribute("Name");
            if (typeof b.contentDocument != "undefined") a = b.contentDocument;
            if (a == null && null != b.contentWindow) a = b.contentWindow.document;
            if (a == null) a = b.ownerDocument;
            if (a != null) {
                var h = a.getElementById("diidFilterCustomTable");
                if (h != null && (typeof b.contentWindow != "undefined" && null != b.contentWindow && typeof b.contentWindow.CustomPopulateFilterMenu != "undefined" && null != b.contentWindow.CustomPopulateFilterMenu || typeof a.defaultView != "undefined" && null != a.defaultView && typeof a.defaultView.CustomPopulateFilterMenu != "undefined" && null != a.defaultView.CustomPopulateFilterMenu)) if (null != b.contentWindow) b.contentWindow.CustomPopulateFilterMenu(currentFilterMenu, h, "FilterIframe" + filterTable.getAttribute("CtxNum"), ctxFilter.view, e);
                else a.defaultView.CustomPopulateFilterMenu(currentFilterMenu, h, "FilterIframe" + filterTable.getAttribute("CtxNum"), ctxFilter.view, e);
                else {
                    var i = a.getElementById("diidFilter" + e);
                    e = escapeProperly(e);
                    if (i != null) {
                        var k = i.childNodes.length;
                        if (k > 500) addFilterOptionMenuItem();
                        else for (var d = i.childNodes, c = 1;
                        c < k;
                        c++) {
                            var g;
                            if (d[c].innerText) g = d[c].innerText;
                            else if (d[c].textContent) g = d[c].textContent;
                            else g = d[c].innerHTML;
                            var m = "javascript:HandleFilter(event, '" + STSScriptEncode(FilterFieldV3(ctxFilter.view, e, d[c].value, c, ctxFilter.queryString, true)) + "')", j = CAMOpt(currentFilterMenu, g, m);
                            ctxFilter.IsClientRendering && j.setAttribute("checked", "false");
                            if (strFilteredValue != null) {
                                var f = [];
                                if (bIsMultiFilter) f = ParseMultiColumnValue(strFilteredValue, ";#", true);
                                else f.push(strFilteredValue);
                                for (var l in f) f[l] != null && f[l] == d[c].value && j.setAttribute("checked", "true")
                            }

                        }

                    }
                    else {
                        alert(Strings.STS.L_FilterThrottled_Text);
                        return
                    }

                }
                bIsFilterDataLoaded = true;
                if (loadingFilterMenu != null) loadingFilterMenu._onDestroy = null;
                if (currentFilterMenu != null) {
                    currentFilterMenu._onDestroy = OnMouseOutFilter;
                    FilterOMenu(currentFilterMenu, filterTable)
                }

            }

        }

    }

}
function addFilterOptionMenuItem() {
    var a = ajaxNavigate.get_href();
    a = StURLSetVar2(a, "Filter", "1");
    a = StURLSetVar2(a, "View", ctxFilter.view);
    a = "javascript:SubmitFormPost('" + a + "')";
    CAMOpt(currentFilterMenu, Strings.STS.L_FilterMode_Text, a)
}
function OnMouseOverAdHocFilterDeferCall(g, f) {
    filterStr = f;
    if (IsFilterMenuOn()) return false;
    filterTable != null && OnMouseOutFilter();
    filterTable = g;
    var d = filterTable.tagName == "TABLE";
    if (d) {
        filterTable.className = "ms-selectedtitle";
        SetEvent("click", CreateFilterMenu, filterTable);
        SetEvent("contextmenu", CreateFilterMenu, filterTable);
        SetEvent("mouseout", OnMouseOutFilter, filterTable)
    }
    else {
        var a = filterTable.parentNode;
        SetEvent("click", CreateFilterMenu, a);
        SetEvent("contextmenu", CreateFilterMenu, a);
        SetEvent("mouseout", OnMouseOutFilter, a);
        CreateCtxImg(a, OnMouseOutFilter)
    }
    if (d) {
        var e = filterTable.childNodes[0], c = e.childNodes[0];
        filterImageCell = c.childNodes[c.childNodes.length - 1];
        var b = filterImageCell.childNodes[0];
        b.src = "/_layouts/15/images/menudark.gif?rev=23";
        b.alt = Strings.STS.L_OpenMenu_Text;
        b.style.visibility = "visible";
        if (IsElementRtl(filterTable)) {
            filterImageCell.style.right = null;
            filterImageCell.style.left = "1px"
        }
        else {
            filterImageCell.style.left = null;
            filterImageCell.style.right = "1px"
        }
        filterImageCell.className = "ms-menuimagecell"
    }
    return true
}
function addAdHocFilterMenuItems(b, a) {
    if (IsFieldNotFilterable(filterTable)) {
        addFilteringDisabledMenuItem(b);
        return
    }
    var c = CAMOpt(a, Strings.STS.L_Loading_Text, "");
    c.setAttribute("enabled", "false");
    FilterOMenu(a, filterTable);
    a._onDestroy = OnMouseOutFilter;
    typeof DoCallBack == "function" && DoCallBack("__filter={" + filterStr + "}");
    filterStr = null
}
function UpdateFilterCallback(b) {
    var j = "</OPTION>", a = -1;
    a = b.indexOf(j, a + 1);
    var d = b.lastIndexOf(">", a), l = StBuildParam(Strings.STS.L_DontFilterBy_Text, strFieldName), i, e = "", c, f;
    if (d < a - 1) {
        c = b.lastIndexOf('"', a);
        if (c > 0) {
            f = b.lastIndexOf('"', c - 1);
            if (f > 0) e = b.substring(f + 1, c)
        }

    }
    if (d == a - 1) i = GetThemedImageUrl("DisabledDeleteFilterGlyph.png");
    else i = GetThemedImageUrl("DeleteFilterGlyph.png");
    var g;
    if (a > 0) {
        g = CAMOpt(currentFilterMenu, l, e, i);
        g.setAttribute("enabled", d == a - 1 ? "false" : "true");
        c = a;
        var m = '<OPTION href="';
        a = b.indexOf(j, a + 8);
        while (a > 0) {
            d = b.indexOf(m, c + 8);
            d = b.indexOf('"', d + 20);
            if (d > 0 && d < a) {
                var k = b.indexOf(">", d), h = b.substring(k + 1, a);
                e = "";
                c = b.lastIndexOf('"', d);
                if (c > 0) {
                    f = b.lastIndexOf('"', c - 1);
                    if (f > 0) {
                        e = b.substring(f + 1, c);
                        e = e.replace(/&amp;/g, "&")
                    }

                }
                if (h.length > 40) h = h.substring(0, 40) + "...";
                if (h.length > 0) {
                    g = CAMOpt(currentFilterMenu, h, e);
                    k > d + 1 && g.setAttribute("checked", "true")
                }

            }
            c = a;
            a = b.indexOf(j, a + 8)
        }

    }
    else {
        g = CAMOpt(currentFilterMenu, Strings.STS.L_OpenMenu_Text, Strings.STS.L_NotFilterable_Text, "");
        g.setAttribute("enabled", "false");
        FilterOMenu(currentFilterMenu, filterTable);
        return
    }
    loadingFilterMenu._onDestroy = null;
    FilterOMenu(currentFilterMenu, filterTable);
    currentFilterMenu._onDestroy = OnMouseOutFilter
}
function FilterOMenu(c, a) {
    if (a == null) return;
    var b = a.tagName == "DIV" ? a.parentNode : a;
    OMenu(c, b, null, null, -1)
}
function _OnClickFilter(d, b) {
    if (!IsFilterMenuEnabled(d)) {
        alert(Strings.STS.L_SortNotAllowed);
        return false
    }
    if (FV4UI()) {
        if (browseris.ie) {
            b.cancelBubble = true;
            b.returnValue = false
        }
        else b.stopPropagation();
        var c;
        try {
            c = typeof inplview.OnClickFilterV4
        }
        catch (b) {
            c = "undefined"
        }
        var i = "inplview.OnClickFilterV4", g = i.split(".");
        if (g.length > 1) {
            var h = function () {
                inplview.OnClickFilterV4(d)
            };
            EnsureScript(g[0], c, h)
        }
        return false
    }
    var e = FindSTSMenuTable(d, "CTXNum");
    if (e != null && e.getAttribute("SortFields") != null) {
        var f = e.getAttribute("SortFields"), a = GetUrlWithNoSortParameters(f);
        a = RemovePagingArgs(a);
        if (a.indexOf("?") < 0) a += "?";
        else a += "&";
        SubmitFormPost(a + f)
    }
    if (!bIsFileDialogView) b.cancelBubble = true;
    return false
}
function ToggleSelectionAllUsers(b) {
    var a = document.getElementById("spToggleUserSelectionCheckBox_" + b.toString());
    if (a != null) {
        var f = "spUserSelectionCheckBox_" + b.toString(), e = document.getElementsByName(f);
        a.checked = !a.checked;
        for (var d = 0;
        d < e.length;
        d++) {
            var h = e[d];
            h.checked = a.checked
        }
        var g = "cbxUserSelectAll" + b.toString(), c = document.getElementById(g);
        if (c != null) if (a.checked) c.src = "/_layouts/15/images/checkall.gif";
        else c.src = "/_layouts/15/images/unchecka.gif"
    }

}
function _UserSelectionOnClick(j, c) {
    var h = "cbxUserSelectAll" + c.toString(), b = document.getElementById(h), a = document.getElementById("spToggleUserSelectionCheckBox_" + c.toString());
    if (!j.checked) {
        if (a != null) a.checked = false;
        if (b != null) b.src = "/_layouts/15/images/unchecka.gif"
    }
    else {
        for (var g = "spUserSelectionCheckBox_" + c.toString(), f = document.getElementsByName(g), e = true, d = 0;
        d < f.length;
        d++) {
            var i = f[d];
            if (!i.checked) {
                e = false;
                break
            }

        }
        if (e) {
            if (null != b) b.src = "/_layouts/15/images/checkall.gif";
            if (null != a) a.checked = true
        }

    }

}
function initPageRequestManagerForDFWP() {
    var a = Sys.WebForms.PageRequestManager.getInstance();
    typeof a.add_beginRequest != "undefined" && a.add_beginRequest(hideMRBForRequest)
}
function hideMRBForRequest(d, c) {
    if (typeof c.get_postBackElement != "undefined") {
        var a = c.get_postBackElement();
        if (a == null || a.value == null || a.value == "") return;
        var b = $get(a.value);
        if (b == null) return;
        hideMRB(b.parentNode)
    }

}
function hideMRB(d) {
    var a;
    if (d == null) return;
    var b = d.childNodes, f = b.length;
    for (a = 0;
    a < f;
    a++) {
        var c = b[a];
        if (c.tagName == "IMG") {
            var e = new RegExp("ManualRefresh", "i");
            if (c.id != undefined && e.test(b[a].id)) {
                hideElement(c);
                break
            }

        }

    }

}
function hideElement(a) {
    if (a == null) return;
    a.style.visibility = "hidden";
    a.style.display = "none"
}
var g_errMsg, L_SSCDlgInvalidCharacter_TEXT, g_btnCreateId, g_txtTitleId, g_CusValTxtTitle;
function format(b) {
    for (var a = 1, c = arguments.length;
    a < c;
    a++) b = b.replace("{" + String(a - 1) + "}", arguments[a]);
    return b
}
function SSC_ValidateRequiredFields() {
    var d = false, a = document.getElementById(g_txtTitleId).value, e = document.getElementById("LabelPreviewSiteUrl");
    e.innerHTML = STSHtmlEncode(a);
    var c = document.getElementById("error_txtTitle");
    if (a.length > 0) {
        var b = IndexOfIllegalCharInUrlLeafName(a);
        if (b == -1) b = a.indexOf("+");
        if (b != -1) {
            var f = a.charAt(b);
            c.innerHTML = format(L_SSCDlgInvalidCharacter_TEXT, f)
        }
        else {
            c.innerHTML = "";
            d = true
        }

    }
    else c.innerHTML = "";
    if (d) document.getElementById(g_btnCreateId).disabled = false;
    else document.getElementById(g_btnCreateId).disabled = true;
    document.getElementById(g_CusValTxtTitle).innerHTML = "";
    window.setTimeout("UpdateSSCDialogPageSize();", 1)
}
function SSC_MakeErrorStatusWithMessage(b) {
    var a = null;
    if (b != null && typeof b != "undefined") {
        removeAllStatus(false);
        a = addStatus("", b, true);
        if (a != null) {
            setStatusPriColor(a, "red");
            window.setTimeout("UpdateSSCDialogPageSize();", 1)
        }

    }
    return a
}
function SSC_MakeErrorStatus() {
    return SSC_MakeErrorStatusWithMessage(g_errMsg)
}
function RibbonBlock() { } var _ribbon;
function _ribbonClear() {
    _ribbon = function (a) {
        return a
    }
    ()
}
function _ribbonInitFunc1Wrapped(p0, p1, p2, p3, p4, p5, p8, p9, p10, p11, p12, p13, p14, p15, p18, p20, p21, p24, p27, p28, p29) {
    var temp;
    try {
        temp = new CUI.RibbonBuildOptions
    }
    catch (e) {
        return
    }
    var options = new CUI.RibbonBuildOptions;
    options.lazyTabInit = true;
    options.shallowTabs = true;
    options.lazyMenuInit = true;
    options.attachToDOM = p12;
    options.initialScalingIndex = p13;
    options.validateServerRendering = p14;
    options.showQATId = p0;
    options.showJewelId = p1;
    options.minimized = _ribbon.buildMinimized;
    options.shownTabs = p8;
    options.shownContextualGroups = p9;
    options.initiallyVisibleContextualGroups = p20;
    options.normalizedContextualGroups = p24;
    options.trimmedIds = p10;
    options.enabledVisibilityContexts = p11;
    options.fixedPositioningEnabled = p18;
    options.clientID = p5;
    options.trimEmptyGroups = true;
    options.dataExtensions = p21;
    options.scalingHint = p27;
    options.initialTabSelectedByUser = _ribbon.initialTabSelectedByUser;
    options.launchedByKeyboard = _ribbon.launchedByKeyboard;
    options.percentPositivePattern = p28;
    options.decimalSeparator = p29;
    try {
        temp = eval(p15)
    }
    catch (e) {
        return
    }
    var builder;
    builder = new CUI.RibbonBuilder(options, document.getElementById(p5), eval(p15));
    var dataSource = new CUI.DataSource(p2, p3, p4);
    builder.set_dataSource(dataSource);
    var handlerFunction = Function.createDelegate(builder, builder.buildRibbonFromData);
    builder.fetchAndProcessRibbonData(_ribbon.initialTabId, function (b) {
        var a = g_ExecuteOrWaitJobs["sp.bodyloaded"];
        if (a != null && typeof a != "undefined" && a.notified) handlerFunction(b.queryData, _ribbon.initialTabId);
        else _spBodyOnLoadFunctions.push(function () {
            handlerFunction(b.queryData, _ribbon.initialTabId)
        })
    })
}
function _ribbonStartInitWrapped(initialTabId, buildMinimized, e, p26, p16) {
    if (typeof _ribbon == "undefined" || _ribbon == null) return;
    if (Boolean(e)) _ribbon.initialTabSelectedByUser = true;
    var firstTabId = null, evt = Boolean(e) ? e : window.event;
    if (Boolean(evt)) if (!Boolean(evt.preventDefault)) evt.returnValue = false;
    else evt.preventDefault();
    if (Boolean(_ribbon) && typeof _ribbon.initStarted != "undefined" && _ribbon.initStarted) return;
    _ribbon.initStarted = true;
    typeof CUI != "undefined" && typeof CUI.PMetrics != "undefined" && CUI.PMetrics.perfMark(CUI.PMarker.perfCUIRibbonInitStart);
    if (Boolean(initialTabId)) {
        firstTabId = _ribbon.initialTabId;
        _ribbon.initialTabId = initialTabId
    }
    if (typeof buildMinimized != "undefined") _ribbon.buildMinimized = buildMinimized;
    if (Boolean(initialTabId) && typeof _ribbonOnStartInit != "undefined") {
        _ribbonOnStartInit(_ribbon);
        var oldTab = document.getElementById(firstTabId + "-title");
        if (Boolean(oldTab)) oldTab.className = "ms-cui-tt";
        var newTab = document.getElementById(initialTabId + "-title");
        if (Boolean(newTab)) newTab.className = "ms-cui-tt ms-cui-tt-s"
    }
    eval(p16)
}
var _spRibbonInstantiateByRibbonControl;
function RibbonControlInitWrapped() {
    _spRibbonInstantiateByRibbonControl = true;
    ExecuteOrDelayUntilScriptLoaded(_registerCommonComponents, "sp.ribbon.js")
}
function _registerCUIEComponentWrapped(b, c, d) {
    var a = SP.Ribbon.CommandUIExtensionPageComponent.get_instance();
    a.set_dataUrl(b);
    a.set_dataLCID(c);
    a.set_dataVersion(d);
    SP.Ribbon.CommandUIExtensionPageComponent.registerWithPageManager()
}
function _ribbonKeyboardTitleShortcutWrapped(f, g, h) {
    var a = Boolean(f) ? f : window.event;
    if (Boolean(a)) {
        var b = a.ctrlKey ? "t" : "f";
        b += a.altKey ? "t" : "f";
        b += a.shiftKey ? "t" : "f";
        try {
            b += String.fromCharCode(_processKeyCodes(a.keyCode))
        }
        catch (i) {
            return
        }
        if (b == g) {
            if (Boolean(document.selection) && document.selection.type == "Control") {
                for (var d = document.selection.createRange(), c = d.length;
                c > 0;
                c--) d.remove(c - 1);
                d.select()
            }
            var e = document.getElementById(h);
            Boolean(e) && e.firstChild.focus()
        }

    }

}
function _ribbonOnWindowResizeForHeaderScalingWrapped(d, b, c) {
    if (_ribbon.initStarted) return;
    var a = document.getElementById(b);
    Boolean(a) && _ribbonScaleHeader(a.firstChild.childNodes[1], c)
}
function _ribbonInitResizeHandlers(a, b, c, d) {
    if (typeof _ribbonScaleHeader == "function" && c) {
        _ribbonScaleHeader(document.getElementById(b).firstChild.childNodes[1], d);
        if (Boolean(window.addEventListener)) window.addEventListener("resize", a, false);
        else Boolean(window.attachEvent) && window.attachEvent("onresize", a)
    }

}
function _ribbonAddEventListener(a) {
    if (Boolean(document.addEventListener)) document.addEventListener("keydown", a, false);
    else document.attachEvent("onkeydown", a)
}
function FNEmpWz(a) {
    return null != a && "" != a
}
function AChld(b, a) {
    null != b && null != a && b.appendChild(a)
}
function AImg(a, c, b) {
    if (null == a) return;
    FNEmpWz(c) && a.setAttribute("iconSrc", c);
    if (FNEmpWz(b)) a.setAttribute("iconAltText", b);
    else a.setAttribute("iconAltText", "")
}
function CMenu(b) {
    var a = document.getElementById(b);
    if (null != a) {
        a._initialized = false;
        a._oContents = null;
        a.innerHTML = "";
        return a
    }
    a = document.createElement("MENU");
    if (null == a) return null;
    if (null != b) a.id = b;
    a.className = "ms-SrvMenuUI";
    var d = document.body;
    if (typeof g_clientIdDeltaPlaceHolderUtilityContent != "undefined" && Boolean(g_clientIdDeltaPlaceHolderUtilityContent)) {
        var c = document.getElementById(g_clientIdDeltaPlaceHolderUtilityContent);
        if (Boolean(c)) d = c
    }
    AChld(d, a);
    return a
}
function CMItm(b) {
    var a = document.createElement("SPAN");
    if (null == a) return null;
    a.setAttribute("type", b);
    return a
}
function CMOpt(f, g, e, d, c, b) {
    var a = CMItm("option");
    if (null == a) return null;
    a.setAttribute("text", f);
    a.setAttribute("onMenuClick", g);
    null != b && a.setAttribute("description", b);
    AImg(a, e, d);
    FNEmpWz(c) && a.setAttribute("sequence", c);
    return a
}
function CAMOpt(h, f, g, e, c, d, b) {
    var a = CMOpt(f, g, e, c, d, b);
    if (null == a) return null;
    AChld(h, a);
    return a
}
function CIMOpt(c, h, i, g, f, d) {
    var a = CMOpt(h, i, g, f, d);
    if (null == a) return null;
    for (var b = 0;
    b < c.childNodes.length;
    b++) {
        var e = c.childNodes[b].getAttribute("sequence");
        if (e) if (Number(e) > Number(d)) {
            c.childNodes[b].parentNode.insertBefore(a, c.childNodes[b]);
            return a
        }

    }
    AChld(c, a);
    return a
}
function CMSep() {
    var a = CMItm("separator");
    setInnerText(a, "");
    return a
}
function CAMSep(b) {
    var a = CMSep();
    if (null == a) return null;
    AChld(b, a);
    return a
}
function CSubM(f, e, d, c, b) {
    var a = CMItm("submenu");
    if (null == a) return null;
    a.setAttribute("text", f);
    null != b && a.setAttribute("description", b);
    AImg(a, e, d);
    FNEmpWz(c) && a.setAttribute("sequence", c);
    return a
}
function CASubM(g, f, e, c, d, b) {
    var a = CSubM(f, e, c, d, b);
    if (null == a) return null;
    AChld(g, a);
    return a
}
function FRdy(a) {
    if (null == a) return false;
    if (a.readyState == null) return true;
    switch (a.readyState) {
        case "loaded": case "interactive": case "complete": return true;
        default: return false
    }
    return false
}
function OMenu(j, k, g, h, e, d, c, f) {
    var b = j, a;
    if (typeof b == "string") {
        var i = b;
        a = document.getElementById(i)
    }
    else a = b;
    null != a && OMenuInt(a, k, g, h, e, d, c, f);
    return false
}
function OMenuInt(a, h, b, g, e, d, c, f) {
    (null != a && !MenuHtc_isOpen(a) || null != a && null != b) && MenuHtc_show(a, h, b, g, e, d, c, f)
}
function OMenuEvnt() {
    var a = event.srcElement;
    if (null != a && FRdy(document)) {
        var e = a.relativeTo, c = a.forceRefresh, d = a.flipTop, b = a.yOffsetTop;
        e != null && a.removeAttribute("relativeTo");
        c != null && a.removeAttribute("forceRefresh");
        d != null && a.removeAttribute("flipTop");
        b != null && a.removeAttribute("yOffsetTop");
        a.onreadystatechange = null;
        OMenuInt(a, e, c, d, b)
    }

}
var kfnDisableEvent, g_menuHtc_lastMenu, g_uniqueNumber, g_MenuEndOfDOM;
function RenderECBBackwardCompatibilityMode(a) {
    g_MenuEndOfDOM = a
}
function IsAccessibilityFeatureEnabledProxy() {
    var a = false;
    if (typeof IsAccessibilityFeatureEnabled != "undefined") a = IsAccessibilityFeatureEnabled();
    return a
}
function MenuHtc_show(oMaster, oParent, fForceRefresh, fFlipTop, yOffset, fShowClose, fShowCheckBoxes, evt) {
    MenuHtc_hide();
    MenuHtc_init(oMaster);
    oMaster._oParent = oParent;
    oMaster._fIsRtL = IsElementRtl(oMaster._oParent);
    if ((browseris.ie || browseris.nav) && IsAccessibilityFeatureEnabledProxy()) {
        var menu = null;
        if (oParent.foa != null) {
            var foa = oParent.foa;
            menu = byid(foa);
            if (menu == null) menu = eval(foa)
        }
        if (menu != null) typeof menu.onblur != "undefined" && menu.onblur != null && menu.onblur();
        RenderAccessibleMenu(oMaster, fForceRefresh);
        g_menuHtc_lastMenu = oMaster
    }
    else {
        SetBodyEventHandlers(null);
        AssureId(oParent);
        var result = ShowRoot(oMaster, oParent, fForceRefresh, fFlipTop, yOffset, fShowClose, fShowCheckBoxes, evt);
        g_menuHtc_lastMenu = oMaster;
        SetBodyEventHandlers(HandleDocumentBodyClick)
    }
    if (browseris.ie) if (window.event != null) window.event.cancelBubble = true;
    return false
}
function MenuHtc_hide() {
    ClearTimeOutToHideMenu();
    var a = g_menuHtc_lastMenu;
    if (a != null) if (a._accessibleMenu != null) CloseAccessibleMenu(a);
    else HideMenu(a);
    g_menuHtc_lastMenu = null
}
function MenuHtc_isOpen(a) {
    if (null == a || null == a._initialized) return false;
    var b = IsOpen(a);
    return b
}
function MenuHtc_item(a, c, b) {
    MenuHtc_init(a);
    var d = GetItem(a, c, b);
    return d
}
function TrapMenuClick(a) {
    if (a != null) a.cancelBubble = true;
    return false
}
function SetBodyEventHandlers(a) {
    SetEvent("click", a, document.body)
}
function HandleDocumentBodyClick() {
    if (g_menuHtc_lastMenu != null) {
        var a = g_menuHtc_lastMenu;
        a != null && HideMenu(a)
    }
    return false
}
function GetEventPopup(b) {
    var a = GetEventSrcElement(b);
    while (a != null) {
        if (a.master != null) return a;
        a = a.parentNode
    }
    return null
}
function GetUniqueNumber() {
    g_uniqueNumber++;
    return g_uniqueNumber
}
function MenuHtc_init(a) {
    if (a._initialized) return;
    a._initialized = true;
    a._wzPrefixID = "mp" + String(GetUniqueNumber());
    if (a.id == null) a.id = a._wzPrefixID + "_id";
    a._nLevel = 0;
    a._arrPopup = [];
    a._arrSelected = [];
    if (typeof a._onDestroy == "undefined") a._onDestroy = null;
    a._fLargeIconMode = false;
    a._fCompactItemsWithoutIcons = false
}
function PrepContents(a) {
    var c;
    a._fLargeIconMode = a.getAttribute("largeIconMode") == "true";
    a._fHideIcons = a.getAttribute("hideicons") == "true";
    a._fCompactItemsWithoutIcons = a.getAttribute("CompactMode") == "true";
    if (!browseris.safari) {
        c = document.createElement("span");
        a._oContents = c;
        c.style.display = "none";
        var b = a.innerHTML;
        if (b.indexOf("<IE:MENUITEM ") < 0 && b.indexOf("<MENUITEM ") >= 0) {
            b = "<?XML:NAMESPACE PREFIX = IE />" + b;
            b = b.replace(/<MENUITEM/g, "<IE:MENUITEM");
            b = b.replace(/<\/MENUITEM/g, "</IE:MENUITEM")
        }
        c.innerHTML = b
    }
    else {
        c = a.cloneNode(true);
        a._oContents = c;
        c.style.display = "none"
    }
    a._wzMArrPath = "/_layouts/15/images/MArr.gif";
    a._wzMArrPathRtL = "/_layouts/15/images/MArrRtL.gif"
}
function FixUpMenuStructure(j) {
    for (var f = j._oRoot, h = f.childNodes, g = null, a = null, d = false, c = 0;
    c < h.length;
    c++) {
        var b = h[c];
        if (b.nodeType != 1) continue;
        var e = false, k = b.style != null && b.style.display == "none", l = FIsIHidden(b);
        if (k || l) e = true;
        else if (FIsIType(b, "separator")) if (a != null || c == 0) e = true;
        else {
            a = b;
            d = true
        }
        else {
            var i = b.getAttribute("menuGroupId");
            if (i != g && a == null && c != 0) {
                a = document.createElement("ie:menuitem");
                a.setAttribute("type", "separator");
                f = j._oRoot;
                f.insertBefore(a, b)
            }
            else if (FIsIType(b, "submenu") && a != null && !d) {
                b.parentNode.removeChild(a);
                a = null
            }
            else a = null;
            g = i;
            d = false
        }
        if (e) {
            b.parentNode.removeChild(b);
            c--
        }

    }
    a != null && a.parentNode.removeChild(a)
}
function IsElementRtl(a) {
    while (a != null && a.tagName != null) {
        var b = a.getAttribute("dir");
        if ((b == null || b == "") && a.style != null) b = a.style.direction;
        if (b == "rtl") return true;
        else if (b == "ltr") return false;
        a = a.parentNode
    }
    return false
}
function getElementOverFlowStyle(a) {
    try {
        return typeof a.currentStyle != undefined && a.currentStyle != null ? a.currentStyle.overflow.toLowerCase() : document.defaultView.getComputedStyle(a, null).getPropertyValue("overflow").toLowerCase()
    }
    catch (b) {
        return ""
    }

}
function AdjustScrollPosition(d, e, b) {
    var a = d;
    while (a != null && a != e && a != d.offsetParent && a.tagName != null && a.tagName.toLowerCase() != "body" && a.tagName.toLowerCase() != "html" && !(getElementOverFlowStyle(a) == "hidden")) {
        if (a.scrollWidth > a.clientWidth && a.offsetWidth >= a.clientWidth && a.clientWidth != 0) if (!IsElementRtl(a)) {
            if (a.scrollLeft > 0) b.x -= a.scrollLeft
        }
        else if (browseris.ie8standardUp) b.x += a.scrollLeft;
        else if (browseris.firefox) b.x -= a.scrollLeft;
        else {
            var c = getElementOverFlowStyle(a);
            if (browseris.ie || browseris.safari && (c == "auto" || c == "scroll")) b.x += a.scrollWidth - a.clientWidth - a.scrollLeft
        }
        if (a.scrollTop > 0) b.y -= a.scrollTop;
        a = a.parentNode
    }

}
function ElementPosition_InitializePrototype() {
    ElementPosition.prototype.x = undefined;
    ElementPosition.prototype.y = undefined;
    ElementPosition.prototype.width = undefined;
    ElementPosition.prototype.height = undefined
}
function ElementPosition(c, d, b, a) {
    this.x = c;
    this.y = d;
    this.width = b;
    this.height = a
}
function MenuHtc_GetElementPosition(a, d) {
    var b = new ElementPosition(0, 0, 0, 0);
    if (null != a.offsetParent) {
        var c = a;
        while (c != null && c != d) {
            b.x += c.offsetLeft;
            b.y += c.offsetTop;
            AdjustScrollPosition(c, d, b);
            var e = c.tagName.toLowerCase();
            if (e != "body" && e != "html" && c.clientTop != null && c.clientLeft != null && c != a) {
                b.x += c.clientLeft;
                b.y += c.clientTop
            }
            c = c.offsetParent
        }

    }
    else if (0 != a.offsetLeft || 0 != a.offsetTop) {
        b.x = a.offsetLeft;
        b.y = a.offsetTop
    }
    else {
        if (Boolean(a.x)) b.x = a.x;
        if (Boolean(a.y)) b.y = a.y
    }
    if (0 != a.offsetWidth && 0 != a.offsetHeight) {
        b.width = a.offsetWidth;
        b.height = a.offsetHeight
    }
    else if (null != a.style && typeof a.style.pixelWidth != "undefined" && 0 != a.style.pixelWidth && typeof a.style.pixelHeight != "undefined" && 0 != a.style.pixelHeight) {
        b.width = a.style.pixelWidth;
        b.height = a.style.pixelHeight
    }
    return b
}
function MenuTag(b, a) {
    this.tagName = b;
    this.className = a
}
function MenuTag_InitializePrototype() {
    MenuTag.prototype.tagName = undefined;
    MenuTag.prototype.className = undefined
}
function CreateMenuTag(a) {
    var b = null;
    if (a.tagName != null) {
        b = document.createElement(a.tagName);
        if (a.className != null) b.className = a.className
    }
    return b
}
function TransferEventToMenu(b, c) {
    var a;
    if (browseris.ie) a = {
        srcElement: b, keyCode: c.keyCode
    };
    else a = {
        target: b, which: c.which
    };
    PopupKeyDown(a)
}
function MenuHtcInternal_Show(c, b, B, k, y, x, m) {
    var q, A, z, p;
    !Boolean(c._oContents) && PrepContents(c);
    var i = "ms-core-menu-box";
    if (c._fLargeIconMode) i += "Big";
    if (!Boolean(c._fHideIcons)) i += " ms-core-menu-hasIcons";
    i += " ms-core-defaultFont ms-shadow";
    q = new MenuTag("div", i);
    p = new MenuTag("ul", "ms-core-menu-list");
    var t = c._arrPopup, r = c._arrSelected, e = c._nLevel, a = t[e];
    if (!Boolean(c._oContents) || IsOpen(c)) return;
    if (null == a && !Boolean(c._oRoot)) {
        c._nLevel = 0;
        e = 0;
        c._oRoot = c._oContents
    }
    var h = e == 0;
    k = k && h;
    if (null == a) {
        a = CreateMenuTag(q);
        a.title = "";
        t[e] = a;
        a.isMenu = true;
        a.master = c;
        a.level = e;
        var j = CreateMenuTag(p);
        a.style.top = "0px";
        a.style.position = "fixed";
        a.style.visibility = "hidden";
        if (c._fIsRtL) {
            a.style.right = "0px";
            a.setAttribute("dir", "rtl")
        }
        else {
            a.style.left = "0px";
            a.setAttribute("dir", "ltr")
        }
        a.contentEditable = false;
        a.appendChild(j);
        if (g_MenuEndOfDOM == true) document.body.appendChild(a);
        else if (b.tagName == "TABLE") b.parentNode.appendChild(a);
        else b.appendChild(a);
        FixUpMenuStructure(c);
        var n = 0, u = c._oRoot;
        e = c._nLevel;
        for (var w = u.childNodes.length, l = 0;
        l < w;
        l++) {
            var f = u.childNodes[l];
            if (f.nodeType != 1) continue;
            if (!FIsIType(f, "label")) {
                var g = CreateMenuItem(c, f, MakeID3(c, e, n), null, x);
                null != g && j.appendChild(g);
                n++
            }

        }
        if (c.id == "filter_menu" || y) {
            g = document.createElement("div");
            g.id = MakeID3(c, e, n);
            g.className = "ms-core-menu-closebutton";
            f = document.createElement("button");
            g.appendChild(f);
            f.id = "fmi_cls";
            f.innerHTML = Strings.STS.L_CloseButtonCaption;
            f.onclick = MenuHtc_hide;
            j.appendChild(g)
        }
        a.oncontextmenu = kfnDisableEvent;
        a.ondragstart = kfnDisableEvent;
        a.onselectstart = kfnDisableEvent;
        if (b._onmouseover == null && typeof b.onmouseover != "undefined") b._onmouseover = b.onmouseover;
        if (b._onmouseout == null && typeof b.onmouseout != "undefined") b._onmouseout = b.onmouseout;
        if (b._onmousedown == null && typeof b.onmousedown != "undefined") b._onmousedown = b.onmousedown;
        if (b._onclick == null && typeof b.onclick != "undefined") b._onclick = b.onclick;
        if (b._oncontextmenu == null && typeof b.oncontextmenu != "undefined") b._oncontextmenu = b.oncontextmenu;
        if (h) if (b._onkeydown == null && typeof b.onkeydown != "undefined") b._onkeydown = b.onkeydown;
        if (browseris.nav) {
            SetEvent("keypress", function () {
                return false
            }
            , a);
            SetEvent("keyup", function () {
                return false
            }
            , a);
            SetEvent("keydown", function (a) {
                PopupKeyDown(a);
                a.cancelBubble = true;
                return false
            }
            , a);
            SetEvent("mousedown", function (a) {
                TrapMenuClick(a);
                return false
            }
            , a);
            SetEvent("mouseover", function (a) {
                PopupMouseOver(a);
                return false
            }
            , a);
            SetEvent("mouseout", function (a) {
                PopupMouseLeave(a);
                return false
            }
            , a);
            SetEvent("click", function (a) {
                PopupMouseClick(a);
                TrapMenuClick(a);
                return false
            }
            , a);
            SetEvent("mouseover", function (a) {
                PopupMouseOverParent(a);
                return false
            }
            , b);
            SetEvent("mouseout", function (a) {
                PopupMouseLeaveParent(a);
                return false
            }
            , b);
            SetEvent("mousedown", function (a) {
                TrapMenuClick(a);
                return false
            }
            , b);
            SetEvent("click", function (a) {
                TrapMenuClick(a);
                return false
            }
            , b);
            SetEvent("contextmenu", function (a) {
                TrapMenuClick(a);
                return false
            }
            , b);
            if (h) b.onkeydown = function (b) {
                TransferEventToMenu(a, b);
                return false
            }

        }
        else {
            SetEvent("keydown", new Function("PopupKeyDown(event); event.cancelBubble = true; return false;"), a);
            SetEvent("mousedown", new Function("TrapMenuClick(event); return false;"), a);
            SetEvent("mouseover", new Function("PopupMouseOver(event); return false;"), a);
            SetEvent("mouseout", new Function("PopupMouseLeave(event); return false;"), a);
            SetEvent("click", new Function("PopupMouseClick(event); TrapMenuClick(event); return false;"), a);
            SetEvent("mouseover", new Function("PopupMouseOverParent(event); return false;"), b);
            SetEvent("mouseout", new Function("PopupMouseLeaveParent(event); return false;"), b);
            SetEvent("mousedown", new Function("TrapMenuClick(event); return false;"), b);
            SetEvent("click", new Function("TrapMenuClick(event); return false;"), b);
            SetEvent("contextmenu", new Function("TrapMenuClick(event); return false;"), b);
            if (h) b.onkeydown = function () {
                TransferEventToMenu(a, event);
                return false
            }

        }
        if (h) {
            var s = c.getAttribute("onunloadtext");
            null != s && SetEvent("unload", new Function(s), a)
        }

    }
    else {
        var v = r[e];
        null != v && UnselectItem(v)
    }
    r[e] = null;
    var d;
    if (browseris.ie && m == null) {
        var o = document.body.scrollLeft;
        d = document.createElement("iframe");
        AssureId(d);
        d.src = "/_layouts/blank.htm";
        d.style.position = "absolute";
        d.style.display = "none";
        d.scrolling = "no";
        d.frameBorder = 0;
        if (g_MenuEndOfDOM == true) document.body.appendChild(d);
        else if (b.tagName == "TABLE") b.parentNode.appendChild(d);
        else b.appendChild(d);
        a.style.zIndex = "103";
        a._backgroundFrameId = d.id;
        if (o != document.body.scrollLeft) document.body.scrollLeft = o
    }
    a.style.width = String(a.offsetWidth) + "px";
    if (c._fIsRtL) a.style.right = "";
    a.style.position = "absolute";
    SetMenuPosition(c, b, a, k, h, m);
    a.style.visibility = "visible";
    NavigateToMenu(c);
    if (browseris.ie && m == null) {
        SetBackFrameSize(null, a);
        a.onresize = new Function("SetBackFrameSize(event, null);");
        d.style.display = "block";
        d.style.zIndex = String(101)
    }

}
function GetWindowPosition() {
    var a = new ElementPosition(0, 0, 0, 0);
    a.width = window.screen.width;
    a.height = window.screen.height;
    if (Boolean(self.innerHeight)) {
        a.width = self.innerWidth;
        a.height = self.innerHeight
    }
    else if (null != document.documentElement && Boolean(document.documentElement.clientHeight)) {
        a.width = document.documentElement.clientWidth;
        a.height = document.documentElement.clientHeight
    }
    else if (null != document.body) {
        a.width = document.body.clientWidth;
        a.height = document.body.clientHeight
    }
    return a
}
function SetMenuPosition(M, D, c, L, w, E) {
    var x = GetWindowPosition(), j = x.width, m = x.height, d = c.offsetWidth, h = c.offsetHeight, K = false, J = false;
    if (d > j - 50) {
        K = true;
        d = j - 50 < 0 ? 0 : j - 50
    }
    if (h >= m - 50) {
        J = true;
        h = m - 50 < 0 ? 0 : m - 50
    }
    if (K) {
        c.style.width = String(d) + "px";
        c.style.overflowX = "scroll"
    }
    if (J) {
        c.style.height = String(h) + "px";
        c.style.overflowY = "scroll"
    }
    d = c.offsetWidth;
    h = c.offsetHeight;
    var y = x.x, P = x.y, v = j, b = 0, r = 0, O = D, k;
    if (E != null) k = new ElementPosition(E.clientX, E.clientY, 0, 0);
    else k = MenuHtc_GetElementPosition(O, null);
    b = k.x;
    r = k.y;
    var g;
    if (w) {
        g = k.width;
        r += k.height
    }
    else g = k.width + 1;
    var N = !L && !document.body.WZ_ATTRIB_FLIPPED, u, C, z, A;
    if (!M._fIsRtL) {
        var s, q;
        if (w) {
            z = b;
            s = b + d;
            q = b + g - d
        }
        else {
            z = b + g;
            s = b + g + d;
            q = b - d
        }
        A = q;
        u = s > v && q > y;
        C = !(q < y && s < v)
    }
    else {
        var p, t;
        if (w) {
            p = b + g - d;
            t = b + d;
            A = b
        }
        else {
            p = b - d;
            t = b + g + d;
            A = b + g
        }
        z = p;
        u = p < y && t < v;
        C = !(t > v && p > y)
    }
    var i = N ? u : C, B = i ? A : z, f, n;
    if (typeof window.pageXOffset != "undefined") {
        f = window.pageXOffset;
        n = window.pageYOffset
    }
    else {
        var l = document.body.parentNode;
        if (!IsElementRtl(document.body)) {
            f = document.body.scrollLeft;
            f += l.scrollLeft
        }
        else if (browseris.ie8standard) {
            f = -document.body.scrollLeft;
            f += -l.scrollLeft
        }
        else {
            var F = getElementOverFlowStyle(document.body);
            if (browseris.ie || browseris.safari && (F == "auto" || F == "scroll")) f = -document.body.scrollWidth + document.body.clientWidth + document.body.scrollLeft;
            f += -l.scrollWidth + l.offsetWidth + l.scrollLeft
        }
        n = document.body.scrollTop;
        n += l.scrollTop
    }
    if (d >= j) B = f;
    else if (B - f + d >= j) B = f + j - d;
    var o;
    if (h >= m) o = n;
    else if (r + h - n >= m) o = n + m - h;
    else o = r;
    if (browseris.safari) o += window.pageYOffset;
    else o += document.documentElement.scrollTop;
    c.setAttribute("flipped", String(L ? i && u : i));
    var a = B, e = o;
    if (browseris.safari) e -= window.pageYOffset;
    else e -= document.documentElement.scrollTop;
    if (g_MenuEndOfDOM == false) if (!w) {
        if (M._fIsRtL) if (browseris.ie) if (i) a = a - b;
        else a = a - b + 1;
        else if (i) a = a - b;
        else a = a - b + 3;
        else if (browseris.ie) if (i) a = a - b + 1;
        else a = a - b;
        else if (i) a = a - b + 3;
        else a = a - b;
        if (e == 0) e = D.offsetTop - c.offsetParent.firstChild.scrollTop;
        else e = e - r + D.offsetTop - c.offsetParent.firstChild.scrollTop;
        if (browseris.ie8standard) e = e - 1
    }
    else if (c.offsetParent != null && c.offsetParent.tagName.toLowerCase() != "body") {
        var G, H, I = MenuHtc_GetElementPosition(c.offsetParent);
        G = I.x;
        H = I.y;
        e = e - H;
        a = a - G
    }
    else {
        a = a + document.documentElement.scrollLeft;
        e = e + document.documentElement.scrollTop
    }
    c.style.left = String(a) + "px";
    c.style.top = String(e) + "px";
    c.LeftForBackIframe = a;
    c.TopForBackIframe = e
}
function SetBackFrameSize(f, a) {
    if (a == null) a = GetEventSrcElement(f);
    var e = a.offsetWidth, d = a.offsetHeight, c, b = document.getElementById(a._backgroundFrameId);
    if (b != null) {
        c = a.LeftForBackIframe;
        b.style.left = String(c) + "px";
        c = a.TopForBackIframe;
        b.style.top = String(c) + "px";
        b.style.width = String(e) + "px";
        b.style.height = String(d) + "px"
    }

}
function HideMenu(b, d) {
    ClearTimeOutToHideMenu();
    if (d == null) d = 0;
    if (d == 2) {
        if (typeof b._onDestroy == "function") {
            b._onDestroy();
            b._onDestroy = null
        }
        return
    }
    if (IsOpen(b) && !IsAccessibilityFeatureEnabledProxy()) {
        var a = b._oParent;
        if (a != null) {
            a.onclick = a._onclick;
            a.onmouseover = a._onmouseover;
            a.onmouseout = a._onmouseout;
            a.onmousedown = a._onmousedown;
            a.oncontextmenu = a._oncontextmenu;
            a.onkeydown = a._onkeydown
        }
        SetBodyEventHandlers(typeof window.origBodyOnClickHandler == "undefined" ? null : window.origBodyOnClickHandler);
        UpdateLevel(b, 0);
        var f = b._arrPopup, c = f[0];
        if (c != null) {
            var e = document.getElementById(c._backgroundFrameId);
            e != null && e.parentNode.removeChild(e);
            c.parentNode != null && c.parentNode.removeChild(c);
            f[0] = null;
            if (d == 0) if (typeof b._onDestroy == "function") {
                b._onDestroy();
                b._onDestroy = null
            }

        }
        g_menuHtc_lastMenu = null;
        RenderECBBackwardCompatibilityMode(false)
    }

}
function IsOpen(a) {
    var b = a._accessibleMenu;
    if (a._accessibleMenuInProgress || null != b && !b.closed) return true;
    var c = a._arrPopup;
    if (null == c) return false;
    var d = a._nLevel, e = c[d];
    return e ? true : false
}
function FindLabel(d) {
    var a = Boolean(d) ? d.childNodes : null;
    if (null != a) for (var b = 0;
    b < a.length;
    b++) {
        var c = a[b];
        if (c.nodeType != 1) continue;
        if (FIsIType(c, "label")) return c
    }
    return null
}
function ShowRoot(a, f, d, b, h, e, c, g) {
    UpdateLevel(a, 0);
    if (d) {
        a._oContents = null;
        a._oRoot = null;
        a._nLevel = 0;
        a._arrPopup = [];
        a._arrSelected = []
    }
    else a._oRoot = a._oContents;
    b = b != false;
    MenuHtcInternal_Show(a, f, 0, b, e, c, g)
}
function ShowSubMenu(a, c, b) {
    if (null == b) return;
    if (b.submenuRoot == null) return;
    if (b.submenuRoot == a._oRoot) return;
    UpdateLevel(a, c);
    a._oRoot = b.submenuRoot;
    var d = a._nLevel;
    a._nLevel = d + 1;
    MenuHtcInternal_Show(a, b, -1)
}
function ShowSubMenuEvnt(a) {
    if (a != null) {
        var f = a._arrPopup, b = a._nLevel, c = f[b];
        if (null != c) {
            c.removeAttribute("timeoutID");
            var d = a._arrSelected, e = d[b];
            ShowSubMenu(a, b, e)
        }

    }

}
function SetShowSubMenuEvnt(a) {
    var b = a._arrPopup, c = a._nLevel, d = b[c];
    if (null != d) {
        ClearTimeOut("timeoutID");
        document.body.setAttribute("timeoutID", String(window.setTimeout(function () {
            ShowSubMenuEvnt(a)
        }
        , 100)))
    }

}
function ClearTimeOut(a) {
    var b = document.body.getAttribute(a);
    b != null && window.clearTimeout(Number(b));
    document.body.removeAttribute(a)
}
function ClearShowSubMenuEvnt() {
    ClearTimeOut("timeoutID")
}
function GetEventSrcItem(e, b) {
    var d, a, c;
    d = "li";
    if (b != null && FIStringEquals(b.tagName, "div") && b.className.indexOf("ms-core-menu-box") != -1) return null;
    c = e._wzPrefixID;
    for (a = b;
    a != null && !FIStringEquals(a.tagName, "body") ;
    a = a.parentNode) if (FIStringEquals(a.tagName, d) && a.id.substring(0, c.length) == c) return a;
    return null
}
function UpdateLevel(c, h) {
    var f, b, a, g, d = c._nLevel;
    while (d > h) {
        f = c._arrSelected;
        b = c._arrPopup;
        if (b != null) a = b[d];
        if (null != a) {
            ClearShowSubMenuEvnt(a);
            var e = document.getElementById(a._backgroundFrameId);
            e != null && e.parentNode.removeChild(e);
            a.parentNode.removeChild(a)
        }
        b[d] = null;
        f[d] = null;
        g = c._oRoot;
        c._oRoot = g.parentNode;
        d--;
        c._nLevel = d
    }
    b = c._arrPopup;
    if (b != null) a = b[d];
    null != a && ClearShowSubMenuEvnt(a)
}
function PopupMouseOver(e) {
    var d = GetEventPopup(e);
    if (d != null) {
        var a = d.master, c = d.level;
        if (c < 0) return;
        var g = a._arrSelected, b = GetEventSrcItem(a, GetEventSrcElement(e));
        if (null != b) {
            var h = g[c], f = a._nLevel;
            if (b != h) {
                if (FIsIType(b, "separator")) return;
                ToggleMenuItem(a, c, b);
                FIsIType(b, "submenu") && EngageSelection(a, true, true, false)
            }
            else c < f && UnselectCurrentOption(a)
        }
        ClearTimeOutToHideMenu()
    }

}
function PopupMouseLeave(b) {
    var a;
    a = GetEventPopup(b);
    if (a != null) {
        UnselectCurrentOption(a.master);
        SetTimeOutToHideMenu()
    }
    return false
}
function PopupMouseOverParent() {
    if (g_menuHtc_lastMenu != null) {
        ClearTimeOutToHideMenu();
        var a = g_menuHtc_lastMenu._oParent;
        if (a != null) typeof a._onmouseover == "function" && a._onmouseover()
    }

}
function PopupMouseLeaveParent() {
    if (g_menuHtc_lastMenu != null) {
        var a = g_menuHtc_lastMenu._oParent;
        if (a != null) typeof a._onmouseout == "function" && a._onmouseout();
        SetTimeOutToHideMenu()
    }

}
function ClearTimeOutToHideMenu() {
    document.body.getAttribute("HideMenuTimeOut") != null && ClearTimeOut("HideMenuTimeOut")
}
function SetTimeOutToHideMenu() {
    ClearTimeOut("HideMenuTimeOut");
    document.body.setAttribute("HideMenuTimeOut", String(window.setTimeout(MenuHtc_hide, 5e3)))
}
function PopupMouseClick(a) {
    var h = GetEventPopup(a), b = h.master, c = h.level;
    if (c < 0) return;
    var g = b._arrSelected, i = g[c], e = GetEventSrcItem(b, GetEventSrcElement(a));
    if (i != e) if (null != e) g[c] = e;
    UpdateLevel(b, c);
    var d = null, f = false;
    if (browseris.nav) {
        if (null != a && null != a.target) {
            f = a.target.className == "hierarchy";
            d = a.target.getAttribute("onExpand")
        }

    }
    else if (null != a && null != a.srcElement) {
        f = a.srcElement.className == "hierarchy";
        d = a.srcElement.getAttribute("onExpand")
    }
    EngageSelection(b, true, false, false, f, d)
}
function PopupKeyDown(c) {
    var d = GetEventPopup(c), b = d.master, f = d.level;
    if (f < 0) return;
    var a = GetEventKeyCode(c), e = c.shiftKey;
    if (b._fIsRtL) if (a == 37) a = 39;
    else if (a == 39) a = 37;
    if (a == 9) a = !e ? 40 : 38;
    ClearShowSubMenuEvnt(d);
    switch (a) {
        case 38: MoveMenuSelection(b, -1);
            break;
        case 40: MoveMenuSelection(b, 1);
            break;
        case 37: case 27: CloseCurrentLevel(b, a == 27);
            break;
        case 39: case 32: case 13: EngageSelection(b, a == 13 || a == 32, false, true)
    }
    c.returnValue = false
}
function SetNewId(a) {
    a.id = "msomenuid" + String(GetUniqueNumber());
    return a.id
}
function AssureId(a) {
    if (a.id == null || a.id == "") a.id = "msomenuid" + String(GetUniqueNumber());
    return a.id
}
function NavigateToMenu(b) {
    if (IsAccessibilityFeatureEnabledProxy()) return;
    var c = null, e = b._nLevel, d = b._arrPopup;
    c = d[e];
    try {
        var a = c.firstChild.firstChild;
        a = a.getElementsByTagName("A")[0];
        if (a != null) if (typeof a.setActive != "undefined" && a.setActive != null) a.setActive();
        else typeof a.focus != "undefined" && a.focus != null && a.focus()
    }
    catch (f) { }
}
function ExecuteOnClick(fnOnClick, oMaster) {
    try {
        if (browseris.safari) if (FIStringEquals(typeof fnOnClick, "string")) eval("var document=window.document; {" + fnOnClick + "}");
        else fnOnClick();
        else {
            if (FIStringEquals(typeof fnOnClick, "string")) fnOnClick = new Function("event", "var document=window.document; {" + fnOnClick + "}");
            var oTemp = window.document.body.appendChild(window.document.createElement("span"));
            oTemp.master = oMaster;
            oTemp.onclick = fnOnClick;
            var evt, ctxVar = null;
            if (typeof currentCtx != "undefined" && currentCtx != null) ctxVar = currentCtx;
            else if (typeof ctxFilter != "undefined" && ctxFilter != null) ctxVar = ctxFilter;
            if (browseris.ie) evt = {
                srcElement: oTemp, fakeEvent: 1, currentCtx: ctxVar
            };
            else evt = {
                target: oTemp, fakeEvent: 1, currentCtx: ctxVar
            };
            oTemp.onclick(evt);
            oTemp.parentNode.removeChild(oTemp)
        }

    }
    catch (e) { }
}
function EngageSelection(oMaster, fDoSelection, fDelayExpandSM, fEnterSM, fExpand, fCommand) {
    var nLevel = oMaster._nLevel, arrSelected = oMaster._arrSelected, oItem = arrSelected[nLevel];
    if (null == oItem || oItem.optionDisabled) return;
    if (FIsIType(oItem, "submenu")) if (fDelayExpandSM) SetShowSubMenuEvnt(oMaster);
    else {
        ShowSubMenu(oMaster, nLevel, oItem);
        fEnterSM && MoveMenuSelection(oMaster, 1)
    }
    else if (fDoSelection) {
        var fEnabled = oItem.getAttribute("enabled");
        if (fEnabled != "false") if (!fExpand) {
            var fnOnClick = oItem.getAttribute("onMenuClick");
            if (null != fnOnClick) {
                var noHideMenu = false, executed = false;
                if (oMaster.id == "filter_menu") {
                    ExecuteOnClick(fnOnClick, oMaster);
                    executed = true;
                    RefreshOpenedSortMenu(oMaster, nLevel);
                    RefreshClearAndFilterMenu(oMaster, oItem, nLevel);
                    var idValue = oMaster._wzPrefixID + "_" + String(nLevel) + "_";
                    if (oItem.id != idValue + String(1) && oItem.id != idValue + String(0) && !oMaster.hideMenu) noHideMenu = true
                }
                if (!noHideMenu) {
                    HideMenu(oMaster, 1);
                    !executed && ExecuteOnClick(fnOnClick, oMaster);
                    HideMenu(oMaster, 2)
                }

            }
            else {
                var oItemAnchor = oItem.firstChild, fnClick = oItemAnchor.onclick;
                null != fnClick && fnClick()
            }

        }
        else eval(fCommand)
    }

}
function RefreshClearAndFilterMenu(n, i, r) {
    if (ctxFilter == null) return;
    var h = parseInt(i.id.substr(i.id.lastIndexOf("_") + 1)), y = n._oRoot, e = y.childNodes, u = filterTable.getAttribute("Name"), k = document.getElementById("FilterIframe" + filterTable.getAttribute("CtxNum")), g = null;
    if (typeof k.contentDocument != "undefined") g = k.contentDocument;
    if (g == null && null != k.contentWindow) g = k.contentWindow.document;
    if (g == null) g = k.ownerDocument;
    var s = g.getElementById("diidFilter" + u);
    if (s == null) return;
    var q = s == null ? null : s.childNodes, p = true, c = null;
    if (e[h].id != "fmi_asc" && e[h].id != "fmi_desc" && e[h].id != "fmi_clr") {
        c = document.getElementById(i.id + "_ICON");
        if (i.getAttribute("checked") == "true") {
            i.setAttribute("checked", "false");
            if (c != null) {
                c.checked = false;
                window.setTimeout(function () {
                    c.checked = false
                }
                , 0)
            }

        }
        else {
            i.setAttribute("checked", "true");
            if (c != null) {
                c.checked = true;
                window.setTimeout(function () {
                    c.checked = true
                }
                , 0)
            }

        }

    }
    else if (e[h].id == "fmi_asc" || e[h].id == "fmi_desc") p = false;
    for (var f = "", w = q == null ? 0 : q.length, d = -1, o = 0, j = 1;
    o < e.length && j < w;
    o++, j++) {
        f = n._wzPrefixID + "_" + String(r) + "_" + String(o);
        var a = document.getElementById(f);
        if (d < 0) {
            var b = a.firstChild;
            if (b != null) b = b.firstChild;
            if (b != null) b = b.nextSibling;
            if (b != null && b.id == "fmi_clr") d = o;
            j = 0;
            continue
        }
        var v = FilterFieldV3(ctxFilter.view, escapeProperly(u), q[j].value, j, ctxFilter.queryString, true), x = "javascript:HandleFilter(event, '" + STSScriptEncode(v) + "')";
        a.setAttribute("onMenuClick", x);
        if (h == d) {
            a.setAttribute("checked", "false");
            var t = document.getElementById(f + "_ICON");
            if (t != null) t.checked = false
        }
        if (a.getAttribute("checked") == "true") p = false
    }
    if (d < 0) return;
    f = n._wzPrefixID + "_" + String(r) + "_" + String(d);
    a = document.getElementById(f);
    if (a == null) return;
    var l = document.getElementById(f + "_ICON"), m = document.getElementById(MakeID3(n, r, d));
    if (!p) {
        a.setAttribute("enabled", "true");
        a.disabled = false;
        a.optionDisabled = false;
        a.setAttribute("iconSrc", GetThemedImageUrl("DeleteFilterGlyph.png"));
        if (l != null) l.src = GetThemedImageUrl("DeleteFilterGlyph.png");
        m != null && RemoveCssClassFromElement(m, "ms-core-menu-itemDisabled")
    }
    else {
        a.setAttribute("enabled", "false");
        a.disabled = true;
        a.optionDisabled = true;
        a.setAttribute("iconSrc", GetThemedImageUrl("DisabledDeleteFilterGlyph.png"));
        if (l != null) l.src = GetThemedImageUrl("DisabledDeleteFilterGlyph.png");
        m != null && Menu_AddCssClassToElement(m, "ms-core-menu-itemDisabled")
    }

}
function RefreshOpenedSortMenu(i, j) {
    if (ctxFilter == null) return;
    var e = "", d = "", a = ctxFilter.queryString;
    if (a == null) a = "";
    var k = new URI(a, {
        disableEncodingDecodingForLegacyCode: true
    });
    a = "?" + k.getQuery();
    a = RemovePagingArgs(a);
    var f = filterTable.getAttribute("SortFields"), c = a.indexOf("&SortDir="), b = a.indexOf("&", c + 1);
    if (c == -1) {
        c = f.indexOf("&SortDir=");
        b = f.indexOf("&SortField=");
        e = a + f.substr(b, c - b) + "&SortDir=Asc";
        d = a + f.substr(b, c - b) + "&SortDir=Desc"
    }
    else if (c != -1) {
        e = a.substr(0, c) + "&SortDir=Asc";
        d = a.substr(0, c) + "&SortDir=Desc";
        if (b != -1) {
            e += a.substr(b);
            d += a.substr(b)
        }

    }
    e = "HandleFilter(event, '" + STSScriptEncode(e) + "', 1);";
    d = "HandleFilter(event, '" + STSScriptEncode(d) + "', 1);";
    var g = i._wzPrefixID + "_" + String(j) + "_" + String(0), h = document.getElementById(g);
    h.setAttribute("onMenuClick", e);
    g = i._wzPrefixID + "_" + String(j) + "_" + String(1);
    h = document.getElementById(g);
    h.setAttribute("onMenuClick", d)
}
function CloseCurrentLevel(oMaster, fAllowHideRoot) {
    var nLevel = oMaster._nLevel, arrSelected, obj;
    if (nLevel > 0) {
        UpdateLevel(oMaster, nLevel - 1);
        nLevel = oMaster._nLevel;
        arrSelected = oMaster._arrSelected;
        obj = arrSelected[nLevel];
        if (obj != null) {
            typeof obj.onclick != "undefined" && obj.onclick != null && SetEvent("click", obj._onclick, obj);
            obj = obj.getElementsByTagName("a")[0];
            if (obj != null) if (typeof obj.setActive != "undefined" && obj.setActive != null) obj.setActive();
            else typeof obj.focus != "undefined" && obj.focus != null && obj.focus()
        }

    }
    else if (fAllowHideRoot) {
        HideMenu(oMaster);
        var oParent = oMaster._oParent;
        while (oParent != null && oParent.tagName == "SPAN" && oParent.getAttribute("contentEditable") == "true") oParent = oParent.parentNode;
        if (oParent != null) {
            var focusElement = oParent, foastr = oParent.getAttribute("foa");
            if (foastr != null) {
                var foa = eval(foastr);
                if (foa == null) foa = byid(foastr);
                if (foa != null) focusElement = foa
            }
            else if (focusElement.tagName != "A") {
                var anchorList = focusElement.getElementsByTagName("a"), anchorListLen = anchorList.length;
                if (anchorListLen > 0) focusElement = anchorList[anchorListLen - 1]
            }
            if (focusElement != null) try {
                if (typeof focusElement.setActive != "undefined" && focusElement.setActive != null) focusElement.setActive();
                else typeof focusElement.focus != "undefined" && focusElement.focus != null && focusElement.focus()
            }
                catch (e) { }
        }

    }

}
function UnselectCurrentOption(c) {
    var a = c._nLevel;
    if (a >= 0) {
        var b = c._arrSelected, d = b[a];
        if (FIsIType(d, "option")) {
            UnselectItem(d);
            b[a] = null
        }

    }

}
function MakeID3(a, c, b) {
    return a._wzPrefixID + "_" + String(c) + "_" + String(b)
}
function GetItem(a, b, d) {
    var c = a._arrPopup, e = c[b];
    return Boolean(e) ? document.getElementById(MakeID3(a, b, d)) : null
}
function MoveMenuSelection(d, h) {
    var a = -1, l = d._oRoot, c = l.childNodes.length, g = d._nLevel, j = d._arrSelected, i = j[g], b = null;
    if (null != i) {
        var e = Boolean(i) ? i.id : null;
        if (null != e) {
            var f = parseInt(e.substring(e.lastIndexOf("_") + 1, e.length));
            if (f == c) f = -1;
            if (f + h == c) {
                a = c;
                b = GetItem(d, g, c)
            }
            if (b == null) a = (f + h) % c
        }

    }
    if (a < 0) a = h > 0 ? 0 : c - 1;
    if (b == null) {
        var k = a;
        do {
            b = GetItem(d, g, a);
            a = (a + h) % c
        }
        while (a != k && (null == b || b.style.display == "none" || !(FIsIType(b, "option") || FIsIType(b, "submenu"))))
    }
    ToggleMenuItem(d, g, b)
}
function ToggleMenuItem(f, d, c) {
    var e = f._arrSelected, a = e[d];
    if (null == c || null != a && c.id == a.id) return;
    if (null != a) {
        UnselectItem(a);
        a.onkeydown = null;
        a.onmousedown = null;
        a.onmouseover = null;
        a.onmouseout = null;
        a.oncontextmenu = null
    }
    UpdateLevel(f, d);
    SelectItem(c);
    e[d] = c;
    try {
        var b = c.firstChild;
        if (b != null) if (typeof b.setActive != "undefined" && b.setActive != null) b.setActive();
        else typeof b.focus != "undefined" && b.focus != null && b.focus()
    }
    catch (g) { }
}
function SelectItemStatic(a) {
    if (null == a) return;
    if (a.tagName != "HR" && a.tagName != "DIV") {
        a.setAttribute("selectedStatic", "true");
        a.className += " ms-core-menu-staticItemSelected"
    }

}
function SelectItem(a) {
    if (null == a) return;
    if (a.tagName != "HR" && a.tagName != "DIV") a.className += " ms-core-menu-itemSelected"
}
function UnselectItem(a) {
    if (null == a) return;
    if (a.tagName != "HR" && a.tagName != "DIV") a.className = a.className.replace("ms-core-menu-itemSelected", "")
}
function SetImageSize(c, b, a) {
    if (a == null) if (c._fLargeIconMode) a = 32;
    else a = 16;
    b.width = String(a);
    b.height = String(a)
}
function CreateMenuOption(o, j, c, y, C, E) {
    var a = null, h, b, n, B, e, k, q, G = null, f, m, D, l, A, s, i, v, t, d, u, F = new MenuTag("span", null), x = new MenuTag("div", null);
    h = CreateMenuTag(x);
    b = CreateMenuTag(x);
    n = CreateMenuTag(F);
    B = CreateMenuTag(x);
    a = document.createElement("a");
    a.className = "ms-core-menu-link";
    j.getAttribute("isindented") == "true" && Menu_AddCssClassToElement(a, "ms-core-menu-indent");
    a.id = y + "_Anchor";
    a.appendChild(h);
    a.appendChild(b);
    a.appendChild(n);
    a.appendChild(B);
    a.href = "javascript:;";
    a.setAttribute("onclick", "return false;");
    if (o._fCompactItemsWithoutIcons && null == c.getAttribute("iconSrc")) b.className = "ms-core-menu-labelCompact";
    else b.className = "ms-core-menu-label";
    b.id = c.id;
    if (c.getAttribute("enabled") == "false") {
        j.disabled = true;
        Menu_AddCssClassToElement(j, "ms-core-menu-itemDisabled");
        var p = document.createElement("span");
        p.appendChild(document.createTextNode(Strings.STS.L_DisabledMenuItem));
        p.className = "ms-accessible ms-core-menu-disabledText";
        b.appendChild(p);
        a.setAttribute("aria-disabled", "true")
    }
    e = EvalAttributeValue(c, "text", "textScript");
    if (e == null || e == "") {
        k = c.firstChild;
        if (k != null && k.nodeType == 3) e = k.nodeValue
    }
    q = EvalAttributeValue(c, "description", "descriptionScript");
    if (q != null && e != null && o._fLargeIconMode) {
        f = document.createElement("span");
        f.className = "ms-core-menu-title";
        m = document.createTextNode(e);
        D = document.createElement("br");
        l = document.createElement("span");
        A = document.createTextNode(q);
        l.className = "ms-core-menu-itemDescription";
        b.appendChild(f);
        f.appendChild(m);
        b.appendChild(D);
        b.appendChild(l);
        l.appendChild(A)
    }
    else if (e != null) {
        f = document.createElement("span");
        f.className = "ms-core-menu-title";
        s = c.getAttribute("hierarchy");
        if (s != null) {
            i = document.createElement("span");
            v = c.getAttribute("onExpand");
            v != null && i.setAttribute("onExpand", v);
            i.className = "hierarchy";
            b.appendChild(i);
            i.innerHTML = s;
            b.appendChild(f);
            f.innerHTML = e
        }
        else {
            m = document.createTextNode(e);
            b.appendChild(f);
            f.appendChild(m)
        }

    }
    if (e != null) a.title = e;
    t = document.createElement("span");
    t.innerHTML = Boolean(C) ? C : "";
    b.appendChild(t);
    if (Boolean(o._fHideIcons)) h.className = "ms-hide";
    else if (o._fLargeIconMode) h.className = "ms-core-menu-iconLarge";
    else h.className = "ms-core-menu-icon";
    var w = null, g = null, r = false, z = false;
    if (c.getAttribute("checked") == "true") {
        z = true;
        r = true
    }
    else if (c.getAttribute("checked") == "false" && (currentFilterMenu != null && currentFilterMenu.id == "filter_menu" || E)) r = true;
    else {
        w = EvalAttributeValue(c, "iconSrc", "iconScript");
        g = c.getAttribute("iconAltText")
    }
    if (r) {
        d = document.createElement("INPUT");
        d.setAttribute("type", "checkbox");
        z && d.setAttribute("checked", "yes");
        d.title = Boolean(g) ? g : "";
        h.appendChild(d);
        d.id = y + "_ICON";
        d.setAttribute("style", "padding-left:0px")
    }
    else if (Boolean(w)) {
        d = document.createElement("img");
        d.src = w;
        d.alt = Boolean(g) ? g : "";
        d.title = Boolean(g) ? g : "";
        h.appendChild(d);
        d.id = y + "_ICON"
    }
    u = c.getAttribute("accessKeyText");
    if (null != u) n.innerHTML = u;
    else n.className = "ms-accessible";
    SetIType(j, "option");
    j.appendChild(a)
}
function CreateMenuSeparator(b, a) {
    a.innerHTML = '<hr class="ms-core-menu-separatorHr" />';
    SetIType(a, "separator")
}
function CreateSubmenu(c, a, e, g) {
    var f = FindLabel(e);
    CreateMenuOption(c, a, e, g, Boolean(f) ? f.innerHTML : null);
    var d = null, b = document.createElement("img");
    if (a.className.indexOf("ms-core-menu-hasArrow") == -1) a.className += " ms-core-menu-hasArrow";
    d = a.childNodes[0].childNodes[3];
    d.className = "ms-core-menu-arrowBox";
    b.className = "ms-core-menu-arrow";
    d.appendChild(b);
    b.src = !c._fIsRtL ? c._wzMArrPath : c._wzMArrPathRtL;
    b.alt = Strings.STS.L_SubMenu_Text;
    b.title = "";
    SetIType(a, "submenu");
    a.submenuRoot = e
}
function MergeAttributes(c, b) {
    if (!browseris.nav && typeof c.mergeAttributes != "undefined" && c.mergeAttributes != null) c.mergeAttributes(b);
    else {
        var d = b.attributes, f = 0;
        if (typeof d.length != "undefined" && d.length != null) f = d.length;
        for (var e = 0;
        e < f;
        e++) {
            var a = d[e];
            a != null && a.specified && a.nodeName != "id" && a.nodeName != "ID" && a.nodeName != "name" && c.setAttribute(a.nodeName, a.nodeValue)
        }
        b.getAttribute("type") != null && c.setAttribute("type", b.getAttribute("type"));
        if (b.submenuRoot != null) c.submenuRoot = b.submenuRoot
    }

}
function CreateMenuItem(e, b, f, i, h) {
    var a, g, d, c;
    if (FIsIType(b, "label")) return null;
    a = document.createElement("li");
    MergeAttributes(a, b);
    a.id = f;
    if (FIsIType(b, "separator")) {
        CreateMenuSeparator(e, a);
        a.className = "ms-core-menu-separator";
        return a
    }
    a.className = "ms-core-menu-item";
    null == GetIType(b) && SetIType(b, "option");
    if (FIsIType(b, "submenu")) CreateSubmenu(e, a, b, f);
    else FIsIType(b, "option") && CreateMenuOption(e, a, b, f, i, h);
    if (a.disabled == true || a.getAttribute("enabled") == "false") {
        Menu_AddCssClassToElement(a, "ms-core-menu-itemDisabled");
        a.disabled = false;
        g = a.childNodes.length;
        for (d = 0;
        d < g;
        d++) {
            c = a.childNodes[d];
            if (c.nodeType != 1 || c.tagName == "A") continue;
            c.disabled = true
        }
        a.optionDisabled = true
    }
    return a
}
function GetItems(b) {
    var a = b._oContents;
    null == a && PrepContents(b);
    a = b._oContents;
    return a.childNodes
}
function GetIType(a) {
    return Boolean(a) ? a.getAttribute("type") : null
}
function FIsIType(b, a) {
    return FIStringEquals(GetIType(b), a)
}
function SetIType(a, b) {
    null != a && a.setAttribute("type", b)
}
function FIStringEquals(a, b) {
    return a != null && b != null && a.toLowerCase() == b.toLowerCase()
}
function RenderAccessibleMenu(a, c) {
    if (c) {
        a._oContents = null;
        a._oRoot = null;
        a._nLevel = 0;
        a._arrPopup = [];
        a._arrSelected = []
    }
    else a._oRoot = a._oContents;
    !Boolean(a._oContents) && PrepContents(a);
    if (!Boolean(a._oContents)) return;
    if (!Boolean(a._oRoot)) {
        a._nLevel = 0;
        a._oRoot = a._oContents
    }
    FixUpMenuStructure(a);
    var d = a._fIsRtL ? "rtl" : "ltr";
    g_menuHtc_html = "<html dir='" + d + "'><head><title>" + Strings.STS.L_AccessibleMenu_Text + "</title></head><body><ul id='root'>";
    RenderMenuLevel(a, a._oRoot, true);
    g_menuHtc_html = g_menuHtc_html + "</ul></body></html>";
    a._accessibleMenuInProgress = true;
    var b = window.open("/_layouts/blank.htm", "_blank", "status=no,toolbar=no,menubar=no,location=no");
    a._accessibleMenu = b;
    b.document.write(g_menuHtc_html);
    b.document.close();
    b.onunload = MenuHtc_hide;
    b.focus()
}
function CloseAccessibleMenu(a, b) {
    if (b == null) b = 0;
    if (a != null) {
        a._accessibleMenuInProgress = false;
        if (b == 0 || b == 1) {
            var c = a._accessibleMenu;
            if (c != null) {
                c.close();
                try {
                    c.opener != null && c.opener.focus()
                }
                catch (d) { } a._accessibleMenu = null
            }

        }
        if (b == 0 || b == 2) if (typeof a._onDestroy == "function") {
            a._onDestroy();
            a._onDestroy = null
        }

    }

}
function GetMenuItemText(d, b, a) {
    if (a == "") {
        a = EvalAttributeValue(b, "text", "textScript");
        var c = EvalAttributeValue(b, "description", "descriptionScript");
        if (c != null && c != "" && d._fLargeIconMode) {
            if (a != "") a = a + ": ";
            a = a + c
        }

    }
    if (b.getAttribute("checked") == "true") a = "* " + a;
    if (b.title != null && b.title != "") a = a + ": " + b.title;
    return a
}
function GetMenuItemEnabled(a, b) {
    return !b ? false : a.getAttribute("enabled") == "false" ? false : a.getAttribute("disabled") != null && a.getAttribute("disabled") != "" ? false : true
}
var g_menuHtc_html;
function RenderMenuLevel(d, j, g) {
    for (var h = j.childNodes, i = h.length, e = 0;
    e < i;
    e++) {
        var a = h[e];
        if (a.nodeType != 1) continue;
        if (a.style.display == "none") continue;
        var b;
        if (FIsIType(a, "option")) {
            b = GetMenuItemText(d, a, a.innerHTML.trim());
            if (!GetMenuItemEnabled(a, g)) g_menuHtc_html = g_menuHtc_html + '<li><span id="' + a.id + '">' + b + "</span></li>";
            else g_menuHtc_html = g_menuHtc_html + '<li><a href="#" id="' + a.id + '" onMenuClick="' + a.getAttribute("onMenuClick") + '" onclick="javascript:opener.ExecuteOnAccessibleClick(this.getAttribute(\'onMenuClick\')); return false;">' + b + "</a></li>"
        }
        else if (FIsIType(a, "submenu")) {
            b = GetMenuItemText(d, a, "");
            g_menuHtc_html = g_menuHtc_html + '<li><span id="' + a.id + '">' + b;
            for (var f = 0;
            f < a.childNodes.length;
            f++) {
                var c = a.childNodes[f];
                if (c.nodeType != 1) continue;
                if (c.style.display == "none") continue;
                if (FIsIType(c, "label")) {
                    g_menuHtc_html = g_menuHtc_html + " " + c.innerHTML;
                    break
                }

            }
            g_menuHtc_html = g_menuHtc_html + "</span><ul>";
            RenderMenuLevel(d, a, GetMenuItemEnabled(a, g));
            g_menuHtc_html = g_menuHtc_html + "</ul></li>"
        }

    }

}
function ExecuteOnAccessibleClick(b) {
    var a = g_menuHtc_lastMenu;
    if (a != null) {
        CloseAccessibleMenu(a, 1);
        ExecuteOnClick(b, a);
        CloseAccessibleMenu(a, 2)
    }

}
function FIsIHidden(oItem) {
    if (null != oItem) {
        var hiddenFunc = oItem.getAttribute("hidden");
        return null == hiddenFunc ? false : eval(hiddenFunc)
    }
    else return false
}
function EvalAttributeValue(oNode, sAttribute1, sAttribute2) {
    var result = oNode.getAttribute(sAttribute2);
    if (result != null && result.toLowerCase().indexOf("javascript:") == 0) result = String(eval(result.substring(11)));
    else result = null;
    if (result == null || result == "") result = oNode.getAttribute(sAttribute1);
    if (result == null) result = "";
    return result
}
function Menu_AddCssClassToElement(a, b) {
    var d = a.className;
    if (d != null) {
        if (!c(a, b)) a.className = a.className + " " + b
    }
    else a.className = b;
    function c(c, e, f) {
        var d = c.className;
        if (d == null) return false;
        for (var a = d.split(" "), b = 0;
        b < a.length;
        b++) if (a[b] == e) {
            if (f) {
                a.splice(b, 1);
                c.className = a.join(" ")
            }
            return true
        }
        return false
    }

}
var MMU_chDelim, MMU_chDelimEnc, MMU_postbackPrefix, MMU_chDelim2, MMU_chDelim2Enc;
function MHash_InitializePrototype() {
    MHash.prototype._keys = undefined;
    MHash.prototype._values = undefined;
    MHash.prototype.Add = MHash_Add;
    MHash.prototype.Count = MHash_Count;
    MHash.prototype.Keys = MHash_Keys;
    MHash.prototype.Values = MHash_Values;
    MHash.prototype.Exists = MHash_Exists;
    MHash.prototype.Item = MHash_Item
}
function MHash() {
    this._keys = [];
    this._values = []
}
function MHash_Add(b, a) {
    this._keys.push(b);
    this._values.push(a)
}
function MHash_Count() {
    return this._keys.length
}
function MHash_Keys() {
    return this._keys
}
function MHash_Values() {
    return this._values
}
function MHash_Exists(c) {
    for (var d = this.Count(), b = this.Keys(), a = 0;
    a < d;
    a++) if (b[a] == c) return true;
    return false
}
function MHash_Item(c) {
    for (var d = this.Count(), b = this.Keys(), a = 0;
    a < d;
    a++) if (b[a] == c) return this.Values()[a];
    return null
}
function ParseContext_InitializePrototype() {
    ParseContext.prototype.TemplateClientId = undefined;
    ParseContext.prototype.MenuClientId = undefined;
    ParseContext.prototype.TimeoutMessage = undefined
}
function ParseContext(c) {
    try {
        var b = c.split(";"), a = b[0];
        this.TemplateClientId = a;
        a = b[1];
        this.MenuClientId = a;
        a = b[2];
        this.TimeoutMessage = a.replace(/%semi%/g, ";").replace(/%quot%/g, "'")
    }
    catch (d) {
        alert(Strings.STS.L_Loading_Error_Text)
    }

}
var MMU_reDelimEnc, MMU_reDelim2Enc, MMU_reDelimDec, MMU_reDelim2Dec;
function MMU_EncVal(a) {
    return a.replace(MMU_reDelimDec, MMU_chDelimEnc).replace(MMU_reDelim2Dec, MMU_chDelim2Enc)
}
function MMU_DecVal(a) {
    return a.replace(MMU_reDelim2Enc, MMU_chDelim2).replace(MMU_reDelimEnc, MMU_chDelim)
}
function MMU_ParseNV(h) {
    var g = new MHash, c = h.split(MMU_chDelim);
    if (c != null) for (var f = 0;
    f < c.length;
    f++) {
        var a = c[f], b = a.indexOf("=");
        if (b == 0) continue;
        var e = null, d = null;
        if (b < 0) e = a;
        else {
            e = a.substr(0, b);
            if (b < a.length - 1) d = MMU_DecVal(a.substr(b + 1));
            else d = ""
        }
        g.Add(e, d)
    }
    return g
}
function MMU_ParseNVAttr(b, d) {
    var a = b.getAttribute(d);
    if (a == null && b.childNodes.length > 0) {
        var c = b.childNodes[0];
        if (c.nodeType == 1) a = c.getAttribute(d)
    }
    return a == null ? new MHash : MMU_ParseNV(a)
}
function MMU_ResetMenuState(j, h, i, g, b) {
    for (var f = j.childNodes, e = 0;
    e < f.length;
    e++) {
        var a = f[e];
        if (a.nodeType != 1) continue;
        var c = a.getAttribute("id");
        if (a != null && c != null && c.length > 0) {
            if (a.childNodes.length > 0) {
                MMU_ResetMenuState(a, h, i, g, b);
                continue
            }
            if (i.Exists(c)) a.style.display = "none";
            else {
                a.style.display = "";
                var d = a.getAttribute("enabledOverride");
                if (d != null && d.length > 0) a.setAttribute("enabled", d);
                else if (h.Exists(c)) a.setAttribute("enabled", "false");
                else {
                    a.setAttribute("enabled", "true");
                    if (g.Exists(c)) a.setAttribute("checked", "true");
                    else a.setAttribute("checked", "false")
                }

            }
            MMU_ReplTokValAttr(a, "onMenuClick", b);
            MMU_ReplTokValAttr(a, "text", b);
            MMU_ReplTokValAttr(a, "description", b);
            MMU_ReplTokValVal(a, b)
        }

    }

}
function MMU_ReplTokValAttr(c, b, f) {
    var a = c.getAttribute(b), d = c.getAttribute(b + "_Original");
    if (a != null && d == null && f.Count() > 0) c.setAttribute(b + "_Original", a);
    else if (a != null && d != null && a != d) a = d;
    if (a == null || a.length <= 0) return;
    var e = MMU_ReplTokVal(a, f);
    e != a && c.setAttribute(b, e)
}
function MMU_ReplTokValVal(c, e) {
    if (c.nextSibling == null) return;
    var a = c.nextSibling.nodeValue, b = c.getAttribute("valOrig");
    if (a != null && b == null && e.Count() > 0) {
        b = a;
        c.setAttribute("valOrig", b)
    }
    else if (a != null && b != null && a != b) a = b;
    var d = MMU_ReplTokVal(a, e);
    if (a != null && d != null && d != a) c.nextSibling.nodeValue = d
}
function MMU_ReplTokVal(a, b) {
    if (a != null && a.indexOf("%") >= 0 && b != null && b.Count() > 0) for (var d = b.Keys(), e = b.Values(), f = d.length, c = 0;
    c < f;
    c++) {
        var g = d[c], h = e[c];
        a = a.replace("%" + g + "%", h)
    }
    return a
}
var g_MMU_HighlightedEcbTable, g_MMU_HighlightedEcbTableOpen, g_MMU_OpenTimeoutHandle;
function MMU_Open(menu, ecbLink, e, fAlignRight, alignId, delay) {
    IsFullNameDefined("CUI.PMetrics.perfMark") && CUI.PMetrics.perfMark(CUI.PMarker.perfWSSMMUOpenStart);
    try {
        if (menu == null || ecbLink == null) return;
        if (ecbLink.getAttribute("suppressBubbleIfPostback") != null && e != null && e.srcElement != null && e.srcElement.href != null && e.srcElement.href.substr(0, MMU_postbackPrefix.length) == MMU_postbackPrefix) {
            event.cancelBubble = true;
            return
        }
        ClearHighlightedEcbTableOpen();
        if (fAlignRight == null) fAlignRight = true;
        MMU_ResetMenuState(menu, MMU_ParseNVAttr(ecbLink, "menuItemsDisabled"), MMU_ParseNVAttr(ecbLink, "menuItemsHidden"), MMU_ParseNVAttr(ecbLink, "menuItemsChecked"), MMU_ParseNVAttr(ecbLink, "menuTokenValues"));
        var elemAlign = null;
        if (alignId != null && alignId.length > 0) elemAlign = document.getElementById(alignId);
        if (elemAlign == null) elemAlign = document.getElementById(ecbLink.id + "_t");
        if (elemAlign == null) elemAlign = ecbLink;
        MMU_EcbHighlight(MMU_GetHighlightElement(ecbLink), true);
        var openMenuScript = "MenuHtc_show(document.getElementById('" + menu.id + "'), document.getElementById('" + elemAlign.id + "'), true, " + String(fAlignRight) + ", null);";
        openMenuScript += "SetEcbMouseOutAndDestroy('" + menu.id + "');";
        if (delay != null && delay > 0) {
            openMenuScript += " g_MMU_OpenTimeoutHandle = null;";
            g_MMU_OpenTimeoutHandle = window.setTimeout(openMenuScript, delay, "javascript")
        }
        else eval(openMenuScript);
        if (e != null) try {
            e.cancelBubble = true
        }
            catch (exIgnored) { }
    }
    catch (ex) {
        alert(Strings.STS.L_Loading_Error_Text)
    }
    IsFullNameDefined("CUI.PMetrics.perfMark") && CUI.PMetrics.perfMark(CUI.PMarker.perfWSSMMUOpenEnd)
}
function SetEcbMouseOutAndDestroy(a) {
    if (g_MMU_HighlightedEcbTable != null) {
        g_MMU_HighlightedEcbTable.onmouseout = null;
        g_MMU_HighlightedEcbTableOpen = g_MMU_HighlightedEcbTable;
        document.getElementById(a)._onDestroy = ClearHighlightedEcbTableOpen
    }

}
function ClearHighlightedEcbTableOpen() {
    if (g_MMU_HighlightedEcbTableOpen != null) {
        MMU_EcbHighlight(g_MMU_HighlightedEcbTableOpen, false);
        g_MMU_HighlightedEcbTableOpen = null
    }

}
function MMU_EcbLinkOnFocusBlurDeferCall(d, c, a) {
    if (a) c.onblur = a ? new Function("MMU_EcbLinkOnFocusBlurDeferCall(null, this, false)") : null;
    if (g_MMU_HighlightedEcbTableOpen != null) return;
    var b = document.getElementById(c.id + "_t");
    b != null && MMU_EcbHighlight(b, a)
}
function MMU_EcbTableMouseOverOutDeferCall(b, a) {
    if (a) {
        if (b == g_MMU_HighlightedEcbTableOpen) return;
        b.onmouseout = a ? new Function("MMU_EcbTableMouseOverOut(this, false)") : null
    }
    MMU_EcbHighlight(b, a)
}
function MMU_EcbHighlight(a, b) {
    if (a == null && !b) a = g_MMU_HighlightedEcbTableOpen;
    if (a == null) return;
    if (b == null) b = false;
    var d = a.getAttribute("hoverActive"), c = a.getAttribute("hoverInactive");
    if (d == null) d = "ms-selectedtitle";
    if (c == null) c = "ms-unselectedtitle";
    if (b) {
        a.className = d;
        g_MMU_HighlightedEcbTable = a
    }
    else a.className = c;
    var f = a.getAttribute("menuformat"), e = document.getElementById(a.id + "i");
    if (e != null && f != null && f == "ArrowOnHover") e.style.visibility = b ? "visible" : "hidden";
    if (!b) g_MMU_HighlightedEcbTable = null
}
function MMU_PopMenuIfShowingDeferCall() { } function MMU_HandleArrowSplitButtonKeyDown(a, c, b) {
    return !a.shiftKey && !a.altKey && !a.ctrlKey && GetEventKeyCode(a) == 13 ? undefined : Boolean(b) ? MMU_EcbLinkOnKeyDown(byid(c), b, a) : undefined
}
function MMU_HandleArrowOnHoverKeyDown(c, b, a) {
    return !a.shiftKey && !a.altKey && !a.ctrlKey && GetEventKeyCode(a) == 13 ? undefined : null != b ? MMU_EcbLinkOnKeyDown(c, b, a) : undefined
}
function MMU_GetHighlightElement(b) {
    var a = null;
    a = document.getElementById(b.id + "_t");
    return a != null ? a : b
}
var g_MMU_theFormActionAtPageLoad, g_MMU_Form0ActionAtPageLoad, g_MMU_Form0ActionAtPreMenuOpen;
function MMU_CallbackPreMenuOpen(templateClientId, menuClientId, callbackEventReference, timeoutLength, timeoutMessage, e) {
    try {
        var menuTemplate = document.getElementById(templateClientId), menuLink = document.getElementById(menuClientId);
        if (menuLink.getAttribute("suppressBubbleIfPostback") != null && e != null && e.srcElement != null && e.srcElement.href != null && e.srcElement.href.substr(0, MMU_postbackPrefix.length) == MMU_postbackPrefix) {
            event.cancelBubble = true;
            return
        }
        MMU_StopPendingTimerEventsFromCallback();
        MMU_RemoveCallbackItemsFromMenuTemplate(menuTemplate);
        var menu = document.getElementById(menuClientId);
        menu.setAttribute("callbackInProgress", "true");
        loadingMessageMenuItem = CAMOpt(menuTemplate, Strings.STS.L_Loading_Text, "null");
        if (loadingMessageMenuItem != null) {
            loadingMessageMenuItem.setAttribute("callbackitem", "true");
            loadingMessageMenuItem.setAttribute("enabled", "false")
        }
        var callbackContext = templateClientId + ";" + menuClientId + ";" + timeoutMessage.replace(/;/g, "%semi%").replace(/\'/g, "%quot%");
        callbackEventReference = callbackEventReference.replace(/__CALLBACKCONTEXT__/g, callbackContext);
        eval(callbackEventReference);
        g_MMU_RequestTimeoutTimeoutHandle = window.setTimeout("MMU_CallbackErrHandler('timeout', '" + callbackContext + "')", timeoutLength, "javascript")
    }
    catch (ex) {
        alert(Strings.STS.L_Loading_Error_Text)
    }

}
var g_MMU_RequestTimeoutTimeoutHandle;
function MMU_RemoveCallbackItemsFromMenuTemplate(b) {
    try {
        for (var a = 0;
        a < b.childNodes.length;
        a++) {
            var c = b.childNodes[a];
            if (c.nodeType == 1 && c.getAttribute("callbackitem") == "true") {
                b.removeChild(c);
                --a
            }

        }

    }
    catch (d) {
        alert(Strings.STS.L_Loading_Error_Text)
    }

}
function MMU_StopPendingTimerEventsFromCallback() {
    if (g_MMU_OpenTimeoutHandle != null) {
        window.clearTimeout(g_MMU_OpenTimeoutHandle);
        g_MMU_OpenTimeoutHandle = null
    }
    if (g_MMU_RequestTimeoutTimeoutHandle != null) {
        window.clearTimeout(g_MMU_RequestTimeoutTimeoutHandle);
        g_MMU_RequestTimeoutTimeoutHandle = null
    }

}
var loadingMessageMenuItem;
function MMU_UpdateMenuTemplateWithErrorItem(a, b) {
    MMU_RemoveCallbackItemsFromMenuTemplate(a);
    var c = CAMOpt(a, b, "null");
    if (loadingMessageMenuItem != null) {
        loadingMessageMenuItem.setAttribute("callbackitem", "true");
        loadingMessageMenuItem.setAttribute("enabled", "false")
    }

}
function MMU_UpdateOpenedMenuWithErrorItem(c, a, b) {
    MMU_UpdateMenuTemplateWithErrorItem(a, b);
    HideMenu(a);
    MMU_Open(a, c)
}
function MMU_CallbackHandler(l, k) {
    MMU_StopPendingTimerEventsFromCallback();
    var j = new ParseContext(k), c = document.getElementById(j.TemplateClientId);
    if (c == null) {
        alert(Strings.STS.L_Loading_Error_Text);
        return
    }
    var b = document.getElementById(j.MenuClientId);
    if (b == null) {
        alert(Strings.STS.L_Loading_Error_Text);
        return
    }
    var g = "", i = "", h = "", f = "", e = "", a = l.split(MMU_chDelim);
    if (a == null || a.length != 5) {
        if (typeof MMU_GenerateErrorMenuItem != "undefined") e = MMU_GenerateErrorMenuItem(Strings.STS.L_Loading_Error_Text)
    }
    else {
        var d = new RegExp(MMU_chDelimEnc, "g");
        g = a[0].replace(d, MMU_chDelim);
        i = a[1].replace(d, MMU_chDelim);
        h = a[2].replace(d, MMU_chDelim);
        f = a[3].replace(d, MMU_chDelim);
        e = a[4].replace(d, MMU_chDelim)
    }
    b.setAttribute("menuItemsDisabled", g);
    b.setAttribute("menuItemsHidden", i);
    b.setAttribute("menuItemsChecked", h);
    b.setAttribute("menuTokenValues", f);
    MMU_RemoveCallbackItemsFromMenuTemplate(c);
    c.innerHTML = c.innerHTML + e;
    HideMenu(c);
    MMU_Open(c, b);
    b.setAttribute("callbackInProgress", "")
}
function MMU_CallbackErrHandler(f, e) {
    try {
        alert(Strings.STS.L_Loading_Error_Text);
        var a = new ParseContext(e), d = document.getElementById(a.TemplateClientId);
        if (d == null) {
            alert(Strings.STS.L_Loading_Error_Text);
            return
        }
        var b = document.getElementById(a.MenuClientId);
        if (b == null) {
            alert(Strings.STS.L_Loading_Error_Text);
            return
        }
        b.setAttribute("callbackInProgress", "");
        var c = Strings.STS.L_Loading_Error_Text;
        if (f == "timeout" && a.TimeoutMessage != null && a.TimeoutMessage.length > 0) c = a.TimeoutMessage;
        MMU_UpdateOpenedMenuWithErrorItem(b, d, c)
    }
    catch (g) {
        alert(Strings.STS.L_Loading_Error_Text)
    }

}
function combineDocuments(r, q, m) {
    fNewDoc = false;
    var a;
    if (browseris.w3c && !browseris.ie) document.all = document.getElementsByTagName("*");
    var b = true, e, g;
    try {
        var f = document.all.chkCombine, j = document.all.chkUrl, h = document.all.chkProgID;
        if (undefined != f) {
            var d = f, l = j, k = h;
            if (typeof d.length != "undefined") {
                for (a = 0;
                b && a < d.length;
                a++) if (d[a].checked) {
                    b = false;
                    e = l[a].getAttribute("href");
                    g = k[a].getAttribute("href")
                }

            }
            else {
                var n = f;
                if (b && null != n) {
                    var p = j, o = h;
                    b = false;
                    e = p.getAttribute("href");
                    g = o.getAttribute("href")
                }

            }

        }

    }
    catch (s) { } if (!b) {
        var i = false, c;
        try {
            c = new ActiveXObject(g);
            fNewDoc = c != null
        }
        catch (s) { } if (!fNewDoc) alert(Strings.STS.L_NewFormLibTb3_Text);
        else {
            try {
                i = typeof c.MergeDocuments != "undefined" && c.MergeDocuments(e, document.all.chkCombine, makeAbsUrl(m))
            }
            catch (t) { } if (!i) alert(Strings.STS.L_NewFormLibTb3_Text);
            else window.onfocus = RefreshOnFocus
        }

    }
    else alert(Strings.STS.L_NewFormLibTb4_Text)
}
function repairLinks(g, h, i) {
    if (browseris.w3c && !browseris.ie) document.all = document.getElementsByTagName("*");
    var b = 0, d = document.all.SubmitRepairDocs;
    d.value = "";
    for (var c = document.getElementsByTagName("input"), a = 0;
    a < c.length;
    a++) if (c[a].id == "chkRepair") if (c[a].checked) {
        d.value += c[a].getAttribute("docID");
        d.value += " ";
        b++
    }
    if (b > 0 && b <= 500) {
        var e = document.all.SubmitRepairRedirectList;
        e.value = h;
        e = document.all.SubmitRepairRedirectFolder;
        e.value = g;
        var f = document.all.SubmitRepairDocsForm;
        f.action = i + "/submitrepair.aspx";
        f.submit()
    }
    else alert(b == 0 ? Strings.STS.L_NewFormLibTb5_Text : Strings.STS.L_NewFormLibTb6_Text)
}
function repairAllLinks(c, d, e) {
    if (browseris.w3c && !browseris.ie) document.all = document.getElementsByTagName("*");
    var a = document.all.SubmitRepairDocs;
    a.value = "*";
    a = document.all.SubmitRepairRedirectList;
    a.value = d;
    a = document.all.SubmitRepairRedirectFolder;
    a.value = c;
    var b = document.all.SubmitRepairDocsForm;
    b.action = e + "/submitrepair.aspx";
    b.submit()
}
function NavigateToManageCopiesPage(a, b) {
    STSNavigate(a + "/_layouts/15/managecopies.aspx?ItemUrl=" + b + "&Source=" + GetSource())
}
function AddVersionMenuItemsCore(b, c) {
    if (currentItemID != null) {
        var f = currentItemID;
        if (f.indexOf(".0.") >= 0) return
    }
    if (!HasRights(0, 64)) return;
    var a, e = itemTable.getAttribute("isCur"), h = itemTable.getAttribute("Level"), g = itemTable.getAttribute("canViewProperty");
    if (currentItemFSObjType == null) currentItemFSObjType = String(parseInt(GetAttributeFromItemTable(itemTable, "OType", "FSObjType")));
    if (g != "0") {
        a = CAMOpt(b, Strings.STS.L_ViewVersion_Text, "javascript:ViewVersion()", "");
        a.id = "ID_ViewVersion"
    }
    if (HasRights(0, 4)) {
        a = CAMOpt(b, Strings.STS.L_RestoreVersion_Text, "javascript:RestoreVersion()", "");
        a.id = "ID_RestoreVersion"
    }
    if (HasRights(0, 128) && e != "1") {
        a = CAMOpt(b, Strings.STS.L_DeleteVersion_Text, "javascript:DeleteVersion()", "");
        a.id = "ID_DeleteVersion"
    }
    if (HasRights(0, 16) && HasRights(0, 4)) if ((c.isModerated || c.EnableMinorVersions) && currentItemFSObjType != "1" && h == String(1) && e == "1") {
        var d = Strings.STS.L_DenyVersion_Text;
        if (c.EnableMinorVersions) d = Strings.STS.L_UnPublishVersion_Text;
        a = CAMOpt(b, d, "javascript:TakeOfflineVersion()", "");
        a.id = "ID_TakeOfflineVersion"
    }

}
function ViewVersion() {
    if (!IsContextSet()) return;
    STSNavigate(itemTable.getAttribute("verUrl"))
}
function RestoreVersion() {
    if (!IsContextSet()) return;
    var a = currentCtx;
    if (itemTable.getAttribute("isMostCur") != "0") alert(Strings.STS.L_Version_NoRestore_Current_ERR);
    else {
        var b = a.HttpPath + "&op=Restore&ver=" + itemTable.getAttribute("verId");
        if (confirm(Boolean(a.verEnabled) ? Strings.STS.L_Version_Restore_Confirm_Text : Strings.STS.L_Version_RestoreVersioningOff_Confirm_Text)) {
            null != window.frameElement && typeof window.frameElement.overrideDialogResult != "undefined" && window.frameElement.overrideDialogResult(1);
            SubmitFormPost(b)
        }

    }

}
function TakeOfflineVersion() {
    if (!IsContextSet()) return;
    var b = currentCtx, a = Strings.STS.L_Version_deny_Confirm_Text;
    if (b.EnableMinorVersions) a = Strings.STS.L_Version_unpublish_Confirm_Text;
    if (itemTable.getAttribute("isCur") != "1" || itemTable.getAttribute("Level") != String(1)) alert(Strings.STS.L_Version_NoOffline_NonCurrent_ERR);
    else confirm(a) && SubmitFormPost(b.HttpPath + "&op=TakeOffline")
}
function DeleteVersion() {
    if (!IsContextSet()) return;
    var a = currentCtx;
    if (itemTable.getAttribute("isCur") != "0") alert(Strings.STS.L_Version_NoDelete_Current_ERR);
    else {
        var b = a.HttpPath + "&op=Delete&ver=" + itemTable.getAttribute("verId");
        confirm(a.RecycleBinEnabled ? Strings.STS.L_Version_Recycle_Confirm_Text : Strings.STS.L_Version_Delete_Confirm_Text) && SubmitFormPost(b)
    }

}
function DeleteAllVersions(b, a) {
    if (b <= 1) alert(Strings.STS.L_Version_NoDeleteAll_None_ERR);
    else confirm(a.RecycleBinEnabled ? Strings.STS.L_Version_RecycleAll_Confirm_Text : Strings.STS.L_Version_DeleteAll_Confirm_Text) && SubmitFormPost(a.HttpPath + "&op=DeleteAll")
}
function DeleteAllMinorVersions(b, a) {
    if (b <= 1) alert(Strings.STS.L_Version_NoDeleteAll_None_ERR);
    else confirm(a.RecycleBinEnabled ? Strings.STS.L_Version_RecycleAllMinor_Confirm_Text : Strings.STS.L_Version_DeleteAllMinor_Confirm_Text) && SubmitFormPost(a.HttpPath + "&op=DeleteAllMinor")
}
function GetServerRelativeUrlFromURL(b) {
    var a, c = b.indexOf("//");
    if (-1 != c) {
        var d = b.indexOf("/", c + 2);
        if (-1 != d) a = b.substr(d);
        else a = "/"
    }
    else a = b;
    return a
}
function GetTargetHandler(a) {
    if (null == a) return "";
    var d = a.length;
    if (0 == d || "/" != a[0]) return "";
    var c = a.indexOf("?"), b = a.indexOf("#");
    if (-1 == c) c = d;
    if (-1 == b) b = d;
    return a.substr(0, Math.min(c, b))
}
var _spFullDownloadList;
function IsFailoverTarget(c) {
    var d = c.lastIndexOf("/");
    if (-1 != d) {
        var a = c.substr(d + 1);
        if (0 != a.length) {
            var b = a.lastIndexOf(".");
            if (-1 == b) return false;
            var e = a.substr(b + 1);
            if ("aspx" != e.toLowerCase()) return true;
            var f = a.substr(0, b).toLowerCase();
            if (Boolean(_spFullDownloadList) && Array.contains(_spFullDownloadList, f)) return true
        }

    }
    return false
}
function GetQuery(a) {
    return new URI(a, {
        disableEncodingDecodingForLegacyCode: true
    }).getQuery()
}
function IsFailoverQuery(a) {
    a = a.toLowerCase();
    return a.indexOf("wikipagemode=edit") != -1 ? true : a.indexOf("usemds=false") != -1 ? true : false
}
function SPUpdatePage(a) {
    if ("undefined" == typeof g_MinimalDownload || !g_MinimalDownload || IsAccessibilityFeatureEnabled()) return true;
    a = GetAbsoluteUrl(a);
    if (browseris.ie && browseris.iever < 10) {
        var n = a.indexOf("?");
        if (-1 == n) n = a.length;
        var m = a.indexOf("#");
        if (-1 == m) m = a.length;
        var w = Math.min(n, m);
        a = encodeURI(decodeURI(a.substr(0, w))) + a.substr(w)
    }
    var c = true, v = "/_layouts/15/start.aspx", o = v.length, u = window.location.pathname, r = u.length, b = a.indexOf("#");
    if (-1 != b) {
        var q = a.substr(0, b).toLowerCase().indexOf("/_layouts/15/start.aspx");
        if (-1 != q) if (a.length > b + 2 && "/" == a[b + 1]) if (a.length > b + 3 && "/" == a[b + 2]) a = a.substr(b + 2);
        else a = a.substr(0, q) + a.substr(b + 1)
    }
    if (r >= o && v == u.substr(r - o)) if (a.charAt(0) == "/") {
        if (!IsFailoverTarget(GetTargetHandler(a))) {
            ajaxNavigate.update(a);
            c = false
        }

    }
    else {
        if (a.indexOf("/") == -1) {
            var f = ajaxNavigate.get_href(), t = f.indexOf("?");
            if (t != -1) f = f.substr(0, t);
            var p = f.lastIndexOf("/");
            if (p != -1) a = f.substr(0, p + 1) + a
        }
        var g = a.indexOf("//");
        if (-1 != g) {
            var j = a.indexOf("/", g + 2);
            if (-1 != j) {
                var e = a.substr(g + 2, j - (g + 2)), i = "", l = e.indexOf(":");
                if (-1 != l) {
                    i = e.substr(l + 1);
                    if (i == "80") i = "";
                    e = e.substr(0, l)
                }
                if (window.location.hostname == e && window.location.port == i) if (!IsFailoverTarget(GetTargetHandler(a.substr(j)))) {
                    ajaxNavigate.update(a.substr(j));
                    c = false
                }

            }
            else if (window.location.hostname == a.substr(g + 2)) {
                ajaxNavigate.update("");
                c = false
            }

        }
        else c = true
    }
    else if ("undefined" !== typeof g_WebServerRelativeUrl) {
        var k = document.createElement("a");
        k.href = a;
        a = k.href;
        k.href = g_WebServerRelativeUrl;
        var h = k.href;
        if (a.length >= h.length && h.toLowerCase() == a.substr(0, h.length).toLowerCase()) {
            var d = h;
            if ("/" == d[d.length - 1]) d += "/_layouts/15/start.aspx".substr(1);
            else d += "/_layouts/15/start.aspx";
            if (!IsFailoverTarget(GetTargetHandler(GetServerRelativeUrlFromURL(a)))) {
                d += "#/" + GetServerRelativeUrlFromURL(a);
                window.location.href = d;
                c = false
            }

        }

    }
    if (!c) {
        g_MDNav = false;
        var s = window.event;
        s != null && cancelDefault(s)
    }
    return c
}
function _AddSilverlightWebPart(d, b, a) {
    var c = new _AddSilverlightWebPartPopupUI(d, b, a);
    c.show()
}
function _AddSilverlightWebPartPopupUI_InitializePrototype() {
    _AddSilverlightWebPartPopupUI.prototype.item = undefined;
    _AddSilverlightWebPartPopupUI.prototype.zoneNum = undefined;
    _AddSilverlightWebPartPopupUI.prototype.zoneIndex = undefined;
    _AddSilverlightWebPartPopupUI.prototype.show = _AddSilverlightWebPartPopupUI_show;
    _AddSilverlightWebPartPopupUI.prototype.dialogCallback = _AddSilverlightWebPartPopupUI_dialogCallback
}
function _AddSilverlightWebPartPopupUI(c, b, a) {
    this.item = c;
    this.zoneNum = b;
    this.zoneIndex = a
}
function _AddSilverlightWebPartPopupUI_show() {
    var b = this, c = function () {
        var a = {};
        if (typeof _spExternalApplicationRegistrationInformation != "undefined") {
            if (typeof _spExternalApplicationRegistrationInformation.dialogUrl != "undefined") a.url = _spExternalApplicationRegistrationInformation.dialogUrl;
            if (typeof _spExternalApplicationRegistrationInformation.dialogWidth != "undefined") a.width = _spExternalApplicationRegistrationInformation.dialogWidth;
            if (typeof _spExternalApplicationRegistrationInformation.dialogHeight != "undefined") a.height = _spExternalApplicationRegistrationInformation.dialogHeight
        }
        a.dialogReturnValueCallback = Function.createDelegate(b, b.dialogCallback);
        SP.UI.ModalDialog.showModalDialog(a)
    }
    , a;
    try {
        a = typeof SP.UI.ModalDialog.showModalDialog
    }
    catch (d) {
        a = "undefined"
    }
    EnsureScript("SP.js", a, c)
}
function _AddSilverlightWebPartPopupUI_dialogCallback(c, b) {
    if (c == 1) {
        var a = WPAdder._getHiddenField("wpVal");
        if (null != a) {
            a.value = b.applicationXml;
            null == a.value;
            a.value = b.url
        }
        WPAdder.addItemToPage(this.item, this.zoneNum, this.zoneIndex)
    }

}
function _ConfigSilverlightWebpart(b, a, c, f, d) {
    var e = new _ConfigSilverlightWebpartPopupUI(b, a, c, f, d);
    e.show()
}
function _ConfigSilverlightWebpartPopupUI_InitializePrototype() {
    _ConfigSilverlightWebpartPopupUI.prototype.urlElementId = undefined;
    _ConfigSilverlightWebpartPopupUI.prototype.appXmlElementId = undefined;
    _ConfigSilverlightWebpartPopupUI.prototype.dialogUrl = undefined;
    _ConfigSilverlightWebpartPopupUI.prototype.dialogWidth = undefined;
    _ConfigSilverlightWebpartPopupUI.prototype.dialogHeight = undefined;
    _ConfigSilverlightWebpartPopupUI.prototype.show = _ConfigSilverlightWebpartPopupUI_show;
    _ConfigSilverlightWebpartPopupUI.prototype.dialogCallback = _ConfigSilverlightWebpartPopupUI_dialogCallback
}
function _ConfigSilverlightWebpartPopupUI(b, a, c, e, d) {
    this.urlElementId = b;
    this.appXmlElementId = a;
    this.dialogUrl = c;
    this.dialogWidth = e;
    this.dialogHeight = d
}
function _ConfigSilverlightWebpartPopupUI_show() {
    var a = this, c = function () {
        var b = {};
        b.url = a.dialogUrl;
        b.width = a.dialogWidth;
        b.height = a.dialogHeight;
        var c = {};
        c.url = document.getElementById(a.urlElementId).value;
        c.applicationXml = document.getElementById(a.appXmlElementId).value;
        b.args = c;
        b.dialogReturnValueCallback = Function.createDelegate(a, a.dialogCallback);
        SP.UI.ModalDialog.showModalDialog(b)
    }
    , b;
    try {
        b = typeof SP.UI.ModalDialog.showModalDialog
    }
    catch (d) {
        b = "undefined"
    }
    EnsureScript("SP.js", b, c)
}
function _ConfigSilverlightWebpartPopupUI_dialogCallback(c, b) {
    if (c == 1) {
        var a = document.getElementById(this.urlElementId);
        if (null != a) {
            a.value = b.url;
            if (a.value == null) a.value = ""
        }
        a = document.getElementById(this.appXmlElementId);
        if (null != a) {
            a.value = b.applicationXml;
            if (a.value == null) a.value = ""
        }

    }

}
function LaunchApp(a, d, e, b, c) {
    return LaunchAppInternal(a, d, e, b, c)
}
var _launchNotificationId;
function LaunchAppInternal(c, d, e, b, f) {
    var g = _spPageContextInfo.webServerRelativeUrl == "/" ? "" : _spPageContextInfo.webServerRelativeUrl, a = escapeUrlForCallback(g) + "/_layouts/15/appredirect.aspx";
    if (typeof d != "undefined" && d != null && typeof e != "undefined" && e != null) a += "?client_id=" + escapeProperly(d) + "&redirect_uri=" + escapeProperly(e);
    else if (typeof c != "undefined" && c != null) a += "?instance_id=" + escapeProperly(c);
    else throw "appOAuthId, launchUrl, appInstanceId are null";
    if (f) a += "&tsapp=1";
    if (typeof b != "undefined" && b != null) SetupAndOpenDialogForCustomAction(a, b.width, b.height, b.title);
    else window.location.href = a
}
var _tenantAppData;
function GetTenantAppData() {
    var b = _spPageContextInfo.webServerRelativeUrl == "/" ? "" : _spPageContextInfo.webServerRelativeUrl;
    if (_tenantAppData != null) return _tenantAppData;
    if (_spPageContextInfo.tenantAppVersion == "none") {
        _tenantAppData = {
            isCorpSite: false, apps: []
        };
        return _tenantAppData
    }
    var a = new XMLHttpRequest;
    a.open("GET", escapeUrlForCallback(b) + "/_layouts/15/tenantappinfo.ashx?etag=" + escapeProperly(String(_spPageContextInfo.tenantAppVersion)) + "&lcid=" + escapeProperly("" + String(_spPageContextInfo.currentLanguage)), false);
    a.send("");
    if (a.status < 400 && a.getResponseHeader("Content-Type").indexOf("application/json") != -1) try {
        _tenantAppData = JSON.parse(a.responseText)
    }
        catch (c) { } return _tenantAppData
}
$_global_core();
