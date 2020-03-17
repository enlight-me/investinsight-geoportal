((self || window)["webpackJsonp"] = (self || window)["webpackJsonp"] || []).push([["vendors~3D~Cesium-DataSources"],{

/***/ "./node_modules/terriajs-cesium/Source/Core/CornerType.js":
/*!****************************************************************!*\
  !*** ./node_modules/terriajs-cesium/Source/Core/CornerType.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _freezeObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./freezeObject.js */ "./node_modules/terriajs-cesium/Source/Core/freezeObject.js");


    /**
     * Style options for corners.
     *
     * @demo The {@link https://sandcastle.cesium.com/index.html?src=Corridor.html&label=Geometries|Corridor Demo}
     * demonstrates the three corner types, as used by {@link CorridorGraphics}.
     *
     * @exports CornerType
     */
    var CornerType = {
        /**
         * <img src="Images/CornerTypeRounded.png" style="vertical-align: middle;" width="186" height="189" />
         *
         * Corner has a smooth edge.
         * @type {Number}
         * @constant
         */
        ROUNDED : 0,

        /**
         * <img src="Images/CornerTypeMitered.png" style="vertical-align: middle;" width="186" height="189" />
         *
         * Corner point is the intersection of adjacent edges.
         * @type {Number}
         * @constant
         */
        MITERED : 1,

        /**
         * <img src="Images/CornerTypeBeveled.png" style="vertical-align: middle;" width="186" height="189" />
         *
         * Corner is clipped.
         * @type {Number}
         * @constant
         */
        BEVELED : 2
    };
/* harmony default export */ __webpack_exports__["default"] = (Object(_freezeObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(CornerType));


/***/ }),

/***/ "./node_modules/terriajs-cesium/Source/DataSources/CompositePositionProperty.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/terriajs-cesium/Source/DataSources/CompositePositionProperty.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Core_defaultValue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Core/defaultValue.js */ "./node_modules/terriajs-cesium/Source/Core/defaultValue.js");
/* harmony import */ var _Core_defined_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Core/defined.js */ "./node_modules/terriajs-cesium/Source/Core/defined.js");
/* harmony import */ var _Core_defineProperties_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Core/defineProperties.js */ "./node_modules/terriajs-cesium/Source/Core/defineProperties.js");
/* harmony import */ var _Core_DeveloperError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Core/DeveloperError.js */ "./node_modules/terriajs-cesium/Source/Core/DeveloperError.js");
/* harmony import */ var _Core_Event_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Core/Event.js */ "./node_modules/terriajs-cesium/Source/Core/Event.js");
/* harmony import */ var _Core_ReferenceFrame_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Core/ReferenceFrame.js */ "./node_modules/terriajs-cesium/Source/Core/ReferenceFrame.js");
/* harmony import */ var _CompositeProperty_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CompositeProperty.js */ "./node_modules/terriajs-cesium/Source/DataSources/CompositeProperty.js");
/* harmony import */ var _Property_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Property.js */ "./node_modules/terriajs-cesium/Source/DataSources/Property.js");









    /**
     * A {@link CompositeProperty} which is also a {@link PositionProperty}.
     *
     * @alias CompositePositionProperty
     * @constructor
     *
     * @param {ReferenceFrame} [referenceFrame=ReferenceFrame.FIXED] The reference frame in which the position is defined.
     */
    function CompositePositionProperty(referenceFrame) {
        this._referenceFrame = Object(_Core_defaultValue_js__WEBPACK_IMPORTED_MODULE_0__["default"])(referenceFrame, _Core_ReferenceFrame_js__WEBPACK_IMPORTED_MODULE_5__["default"].FIXED);
        this._definitionChanged = new _Core_Event_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
        this._composite = new _CompositeProperty_js__WEBPACK_IMPORTED_MODULE_6__["default"]();
        this._composite.definitionChanged.addEventListener(CompositePositionProperty.prototype._raiseDefinitionChanged, this);
    }

    Object(_Core_defineProperties_js__WEBPACK_IMPORTED_MODULE_2__["default"])(CompositePositionProperty.prototype, {
        /**
         * Gets a value indicating if this property is constant.  A property is considered
         * constant if getValue always returns the same result for the current definition.
         * @memberof CompositePositionProperty.prototype
         *
         * @type {Boolean}
         * @readonly
         */
        isConstant : {
            get : function() {
                return this._composite.isConstant;
            }
        },
        /**
         * Gets the event that is raised whenever the definition of this property changes.
         * The definition is changed whenever setValue is called with data different
         * than the current value.
         * @memberof CompositePositionProperty.prototype
         *
         * @type {Event}
         * @readonly
         */
        definitionChanged : {
            get : function() {
                return this._definitionChanged;
            }
        },
        /**
         * Gets the interval collection.
         * @memberof CompositePositionProperty.prototype
         *
         * @type {TimeIntervalCollection}
         */
        intervals : {
            get : function() {
                return this._composite.intervals;
            }
        },
        /**
         * Gets or sets the reference frame which this position presents itself as.
         * Each PositionProperty making up this object has it's own reference frame,
         * so this property merely exposes a "preferred" reference frame for clients
         * to use.
         * @memberof CompositePositionProperty.prototype
         *
         * @type {ReferenceFrame}
         */
        referenceFrame : {
            get : function() {
                return this._referenceFrame;
            },
            set : function(value) {
                this._referenceFrame = value;
            }
        }
    });

    /**
     * Gets the value of the property at the provided time in the fixed frame.
     *
     * @param {JulianDate} time The time for which to retrieve the value.
     * @param {Object} [result] The object to store the value into, if omitted, a new instance is created and returned.
     * @returns {Object} The modified result parameter or a new instance if the result parameter was not supplied.
     */
    CompositePositionProperty.prototype.getValue = function(time, result) {
        return this.getValueInReferenceFrame(time, _Core_ReferenceFrame_js__WEBPACK_IMPORTED_MODULE_5__["default"].FIXED, result);
    };

    /**
     * Gets the value of the property at the provided time and in the provided reference frame.
     *
     * @param {JulianDate} time The time for which to retrieve the value.
     * @param {ReferenceFrame} referenceFrame The desired referenceFrame of the result.
     * @param {Cartesian3} [result] The object to store the value into, if omitted, a new instance is created and returned.
     * @returns {Cartesian3} The modified result parameter or a new instance if the result parameter was not supplied.
     */
    CompositePositionProperty.prototype.getValueInReferenceFrame = function(time, referenceFrame, result) {
        

        var innerProperty = this._composite._intervals.findDataForIntervalContainingDate(time);
        if (Object(_Core_defined_js__WEBPACK_IMPORTED_MODULE_1__["default"])(innerProperty)) {
            return innerProperty.getValueInReferenceFrame(time, referenceFrame, result);
        }
        return undefined;
    };

    /**
     * Compares this property to the provided property and returns
     * <code>true</code> if they are equal, <code>false</code> otherwise.
     *
     * @param {Property} [other] The other property.
     * @returns {Boolean} <code>true</code> if left and right are equal, <code>false</code> otherwise.
     */
    CompositePositionProperty.prototype.equals = function(other) {
        return this === other || //
               (other instanceof CompositePositionProperty && //
                this._referenceFrame === other._referenceFrame && //
                this._composite.equals(other._composite, _Property_js__WEBPACK_IMPORTED_MODULE_7__["default"].equals));
    };

    /**
     * @private
     */
    CompositePositionProperty.prototype._raiseDefinitionChanged = function() {
        this._definitionChanged.raiseEvent(this);
    };
/* harmony default export */ __webpack_exports__["default"] = (CompositePositionProperty);


/***/ }),

/***/ "./node_modules/terriajs-cesium/Source/DataSources/CompositeProperty.js":
/*!******************************************************************************!*\
  !*** ./node_modules/terriajs-cesium/Source/DataSources/CompositeProperty.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Core_defined_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Core/defined.js */ "./node_modules/terriajs-cesium/Source/Core/defined.js");
/* harmony import */ var _Core_defineProperties_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Core/defineProperties.js */ "./node_modules/terriajs-cesium/Source/Core/defineProperties.js");
/* harmony import */ var _Core_DeveloperError_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Core/DeveloperError.js */ "./node_modules/terriajs-cesium/Source/Core/DeveloperError.js");
/* harmony import */ var _Core_Event_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Core/Event.js */ "./node_modules/terriajs-cesium/Source/Core/Event.js");
/* harmony import */ var _Core_EventHelper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Core/EventHelper.js */ "./node_modules/terriajs-cesium/Source/Core/EventHelper.js");
/* harmony import */ var _Core_TimeIntervalCollection_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Core/TimeIntervalCollection.js */ "./node_modules/terriajs-cesium/Source/Core/TimeIntervalCollection.js");
/* harmony import */ var _Property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Property.js */ "./node_modules/terriajs-cesium/Source/DataSources/Property.js");








    function subscribeAll(property, eventHelper, definitionChanged, intervals) {
        function callback() {
            definitionChanged.raiseEvent(property);
        }
        var items = [];
        eventHelper.removeAll();
        var length = intervals.length;
        for (var i = 0; i < length; i++) {
            var interval = intervals.get(i);
            if (Object(_Core_defined_js__WEBPACK_IMPORTED_MODULE_0__["default"])(interval.data) && items.indexOf(interval.data) === -1) {
                eventHelper.add(interval.data.definitionChanged, callback);
            }
        }
    }

    /**
     * A {@link Property} which is defined by a {@link TimeIntervalCollection}, where the
     * data property of each {@link TimeInterval} is another Property instance which is
     * evaluated at the provided time.
     *
     * @alias CompositeProperty
     * @constructor
     *
     *
     * @example
     * var constantProperty = ...;
     * var sampledProperty = ...;
     *
     * //Create a composite property from two previously defined properties
     * //where the property is valid on August 1st, 2012 and uses a constant
     * //property for the first half of the day and a sampled property for the
     * //remaining half.
     * var composite = new Cesium.CompositeProperty();
     * composite.intervals.addInterval(Cesium.TimeInterval.fromIso8601({
     *     iso8601 : '2012-08-01T00:00:00.00Z/2012-08-01T12:00:00.00Z',
     *     data : constantProperty
     * }));
     * composite.intervals.addInterval(Cesium.TimeInterval.fromIso8601({
     *     iso8601 : '2012-08-01T12:00:00.00Z/2012-08-02T00:00:00.00Z',
     *     isStartIncluded : false,
     *     isStopIncluded : false,
     *     data : sampledProperty
     * }));
     *
     * @see CompositeMaterialProperty
     * @see CompositePositionProperty
     */
    function CompositeProperty() {
        this._eventHelper = new _Core_EventHelper_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
        this._definitionChanged = new _Core_Event_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
        this._intervals = new _Core_TimeIntervalCollection_js__WEBPACK_IMPORTED_MODULE_5__["default"]();
        this._intervals.changedEvent.addEventListener(CompositeProperty.prototype._intervalsChanged, this);
    }

    Object(_Core_defineProperties_js__WEBPACK_IMPORTED_MODULE_1__["default"])(CompositeProperty.prototype, {
        /**
         * Gets a value indicating if this property is constant.  A property is considered
         * constant if getValue always returns the same result for the current definition.
         * @memberof CompositeProperty.prototype
         *
         * @type {Boolean}
         * @readonly
         */
        isConstant : {
            get : function() {
                return this._intervals.isEmpty;
            }
        },
        /**
         * Gets the event that is raised whenever the definition of this property changes.
         * The definition is changed whenever setValue is called with data different
         * than the current value.
         * @memberof CompositeProperty.prototype
         *
         * @type {Event}
         * @readonly
         */
        definitionChanged : {
            get : function() {
                return this._definitionChanged;
            }
        },
        /**
         * Gets the interval collection.
         * @memberof CompositeProperty.prototype
         *
         * @type {TimeIntervalCollection}
         */
        intervals : {
            get : function() {
                return this._intervals;
            }
        }
    });

    /**
     * Gets the value of the property at the provided time.
     *
     * @param {JulianDate} time The time for which to retrieve the value.
     * @param {Object} [result] The object to store the value into, if omitted, a new instance is created and returned.
     * @returns {Object} The modified result parameter or a new instance if the result parameter was not supplied.
     */
    CompositeProperty.prototype.getValue = function(time, result) {
        

        var innerProperty = this._intervals.findDataForIntervalContainingDate(time);
        if (Object(_Core_defined_js__WEBPACK_IMPORTED_MODULE_0__["default"])(innerProperty)) {
            return innerProperty.getValue(time, result);
        }
        return undefined;
    };

    /**
     * Compares this property to the provided property and returns
     * <code>true</code> if they are equal, <code>false</code> otherwise.
     *
     * @param {Property} [other] The other property.
     * @returns {Boolean} <code>true</code> if left and right are equal, <code>false</code> otherwise.
     */
    CompositeProperty.prototype.equals = function(other) {
        return this === other || //
               (other instanceof CompositeProperty && //
                this._intervals.equals(other._intervals, _Property_js__WEBPACK_IMPORTED_MODULE_6__["default"].equals));
    };

    /**
     * @private
     */
    CompositeProperty.prototype._intervalsChanged = function() {
        subscribeAll(this, this._eventHelper, this._definitionChanged, this._intervals);
        this._definitionChanged.raiseEvent(this);
    };
/* harmony default export */ __webpack_exports__["default"] = (CompositeProperty);


/***/ }),

/***/ "./node_modules/terriajs-cesium/Source/DataSources/ReferenceProperty.js":
/*!******************************************************************************!*\
  !*** ./node_modules/terriajs-cesium/Source/DataSources/ReferenceProperty.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Core_defined_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Core/defined.js */ "./node_modules/terriajs-cesium/Source/Core/defined.js");
/* harmony import */ var _Core_defineProperties_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Core/defineProperties.js */ "./node_modules/terriajs-cesium/Source/Core/defineProperties.js");
/* harmony import */ var _Core_DeveloperError_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Core/DeveloperError.js */ "./node_modules/terriajs-cesium/Source/Core/DeveloperError.js");
/* harmony import */ var _Core_Event_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Core/Event.js */ "./node_modules/terriajs-cesium/Source/Core/Event.js");
/* harmony import */ var _Property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Property.js */ "./node_modules/terriajs-cesium/Source/DataSources/Property.js");






    function resolve(that) {
        var targetProperty = that._targetProperty;

        if (!Object(_Core_defined_js__WEBPACK_IMPORTED_MODULE_0__["default"])(targetProperty)) {
            var targetEntity = that._targetEntity;

            if (!Object(_Core_defined_js__WEBPACK_IMPORTED_MODULE_0__["default"])(targetEntity)) {
                targetEntity = that._targetCollection.getById(that._targetId);

                if (!Object(_Core_defined_js__WEBPACK_IMPORTED_MODULE_0__["default"])(targetEntity)) {
                    // target entity not found
                    that._targetEntity = that._targetProperty = undefined;
                    return;
                }

                // target entity was found. listen for changes to entity definition
                targetEntity.definitionChanged.addEventListener(ReferenceProperty.prototype._onTargetEntityDefinitionChanged, that);
                that._targetEntity = targetEntity;
            }

            // walk the list of property names and resolve properties
            var targetPropertyNames = that._targetPropertyNames;
            targetProperty = that._targetEntity;
            for (var i = 0, len = targetPropertyNames.length; i < len && Object(_Core_defined_js__WEBPACK_IMPORTED_MODULE_0__["default"])(targetProperty); ++i) {
                targetProperty = targetProperty[targetPropertyNames[i]];
            }

            // target property may or may not be defined, depending on if it was found
            that._targetProperty = targetProperty;
        }

        return targetProperty;
    }

    /**
     * A {@link Property} which transparently links to another property on a provided object.
     *
     * @alias ReferenceProperty
     * @constructor
     *
     * @param {EntityCollection} targetCollection The entity collection which will be used to resolve the reference.
     * @param {String} targetId The id of the entity which is being referenced.
     * @param {String[]} targetPropertyNames The names of the property on the target entity which we will use.
     *
     * @example
     * var collection = new Cesium.EntityCollection();
     *
     * //Create a new entity and assign a billboard scale.
     * var object1 = new Cesium.Entity({id:'object1'});
     * object1.billboard = new Cesium.BillboardGraphics();
     * object1.billboard.scale = new Cesium.ConstantProperty(2.0);
     * collection.add(object1);
     *
     * //Create a second entity and reference the scale from the first one.
     * var object2 = new Cesium.Entity({id:'object2'});
     * object2.model = new Cesium.ModelGraphics();
     * object2.model.scale = new Cesium.ReferenceProperty(collection, 'object1', ['billboard', 'scale']);
     * collection.add(object2);
     *
     * //Create a third object, but use the fromString helper function.
     * var object3 = new Cesium.Entity({id:'object3'});
     * object3.billboard = new Cesium.BillboardGraphics();
     * object3.billboard.scale = Cesium.ReferenceProperty.fromString(collection, 'object1#billboard.scale');
     * collection.add(object3);
     *
     * //You can refer to an entity with a # or . in id and property names by escaping them.
     * var object4 = new Cesium.Entity({id:'#object.4'});
     * object4.billboard = new Cesium.BillboardGraphics();
     * object4.billboard.scale = new Cesium.ConstantProperty(2.0);
     * collection.add(object4);
     *
     * var object5 = new Cesium.Entity({id:'object5'});
     * object5.billboard = new Cesium.BillboardGraphics();
     * object5.billboard.scale = Cesium.ReferenceProperty.fromString(collection, '\\#object\\.4#billboard.scale');
     * collection.add(object5);
     */
    function ReferenceProperty(targetCollection, targetId, targetPropertyNames) {
        

        this._targetCollection = targetCollection;
        this._targetId = targetId;
        this._targetPropertyNames = targetPropertyNames;
        this._targetProperty = undefined;
        this._targetEntity = undefined;
        this._definitionChanged = new _Core_Event_js__WEBPACK_IMPORTED_MODULE_3__["default"]();

        targetCollection.collectionChanged.addEventListener(ReferenceProperty.prototype._onCollectionChanged, this);
    }

    Object(_Core_defineProperties_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ReferenceProperty.prototype, {
        /**
         * Gets a value indicating if this property is constant.
         * @memberof ReferenceProperty.prototype
         * @type {Boolean}
         * @readonly
         */
        isConstant : {
            get : function() {
                return _Property_js__WEBPACK_IMPORTED_MODULE_4__["default"].isConstant(resolve(this));
            }
        },
        /**
         * Gets the event that is raised whenever the definition of this property changes.
         * The definition is changed whenever the referenced property's definition is changed.
         * @memberof ReferenceProperty.prototype
         * @type {Event}
         * @readonly
         */
        definitionChanged : {
            get : function() {
                return this._definitionChanged;
            }
        },
        /**
         * Gets the reference frame that the position is defined in.
         * This property is only valid if the referenced property is a {@link PositionProperty}.
         * @memberof ReferenceProperty.prototype
         * @type {ReferenceFrame}
         * @readonly
         */
        referenceFrame : {
            get : function() {
                var target = resolve(this);
                return Object(_Core_defined_js__WEBPACK_IMPORTED_MODULE_0__["default"])(target) ? target.referenceFrame : undefined;
            }
        },
        /**
         * Gets the id of the entity being referenced.
         * @memberof ReferenceProperty.prototype
         * @type {String}
         * @readonly
         */
        targetId : {
            get : function() {
                return this._targetId;
            }
        },
        /**
         * Gets the collection containing the entity being referenced.
         * @memberof ReferenceProperty.prototype
         * @type {EntityCollection}
         * @readonly
         */
        targetCollection : {
            get : function() {
                return this._targetCollection;
            }
        },
        /**
         * Gets the array of property names used to retrieve the referenced property.
         * @memberof ReferenceProperty.prototype
         * @type {String[]}
         * @readonly
         */
        targetPropertyNames : {
            get : function() {
                return this._targetPropertyNames;
            }
        },
        /**
         * Gets the resolved instance of the underlying referenced property.
         * @memberof ReferenceProperty.prototype
         * @type {Property}
         * @readonly
         */
        resolvedProperty : {
            get : function() {
                return resolve(this);
            }
        }
    });

    /**
     * Creates a new instance given the entity collection that will
     * be used to resolve it and a string indicating the target entity id and property.
     * The format of the string is "objectId#foo.bar", where # separates the id from
     * property path and . separates sub-properties.  If the reference identifier or
     * or any sub-properties contains a # . or \ they must be escaped.
     *
     * @param {EntityCollection} targetCollection
     * @param {String} referenceString
     * @returns {ReferenceProperty} A new instance of ReferenceProperty.
     *
     * @exception {DeveloperError} invalid referenceString.
     */
    ReferenceProperty.fromString = function(targetCollection, referenceString) {
        

        var identifier;
        var values = [];

        var inIdentifier = true;
        var isEscaped = false;
        var token = '';
        for (var i = 0; i < referenceString.length; ++i) {
            var c = referenceString.charAt(i);

            if (isEscaped) {
                token += c;
                isEscaped = false;
            } else if (c === '\\') {
                isEscaped = true;
            } else if (inIdentifier && c === '#') {
                identifier = token;
                inIdentifier = false;
                token = '';
            } else if (!inIdentifier && c === '.') {
                values.push(token);
                token = '';
            } else {
                token += c;
            }
        }
        values.push(token);

        return new ReferenceProperty(targetCollection, identifier, values);
    };

    /**
     * Gets the value of the property at the provided time.
     *
     * @param {JulianDate} time The time for which to retrieve the value.
     * @param {Object} [result] The object to store the value into, if omitted, a new instance is created and returned.
     * @returns {Object} The modified result parameter or a new instance if the result parameter was not supplied.
     */
    ReferenceProperty.prototype.getValue = function(time, result) {
        var target = resolve(this);
        return Object(_Core_defined_js__WEBPACK_IMPORTED_MODULE_0__["default"])(target) ? target.getValue(time, result) : undefined;
    };

    /**
     * Gets the value of the property at the provided time and in the provided reference frame.
     * This method is only valid if the property being referenced is a {@link PositionProperty}.
     *
     * @param {JulianDate} time The time for which to retrieve the value.
     * @param {ReferenceFrame} referenceFrame The desired referenceFrame of the result.
     * @param {Cartesian3} [result] The object to store the value into, if omitted, a new instance is created and returned.
     * @returns {Cartesian3} The modified result parameter or a new instance if the result parameter was not supplied.
     */
    ReferenceProperty.prototype.getValueInReferenceFrame = function(time, referenceFrame, result) {
        var target = resolve(this);
        return Object(_Core_defined_js__WEBPACK_IMPORTED_MODULE_0__["default"])(target) ? target.getValueInReferenceFrame(time, referenceFrame, result) : undefined;
    };

    /**
     * Gets the {@link Material} type at the provided time.
     * This method is only valid if the property being referenced is a {@link MaterialProperty}.
     *
     * @param {JulianDate} time The time for which to retrieve the type.
     * @returns {String} The type of material.
     */
    ReferenceProperty.prototype.getType = function(time) {
        var target = resolve(this);
        return Object(_Core_defined_js__WEBPACK_IMPORTED_MODULE_0__["default"])(target) ? target.getType(time) : undefined;
    };

    /**
     * Compares this property to the provided property and returns
     * <code>true</code> if they are equal, <code>false</code> otherwise.
     *
     * @param {Property} [other] The other property.
     * @returns {Boolean} <code>true</code> if left and right are equal, <code>false</code> otherwise.
     */
    ReferenceProperty.prototype.equals = function(other) {
        if (this === other) {
            return true;
        }

        var names = this._targetPropertyNames;
        var otherNames = other._targetPropertyNames;

        if (this._targetCollection !== other._targetCollection || //
            this._targetId !== other._targetId || //
            names.length !== otherNames.length) {
            return false;
        }

        var length = this._targetPropertyNames.length;
        for (var i = 0; i < length; i++) {
            if (names[i] !== otherNames[i]) {
                return false;
            }
        }

        return true;
    };

    ReferenceProperty.prototype._onTargetEntityDefinitionChanged = function(targetEntity, name, value, oldValue) {
        if (Object(_Core_defined_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this._targetProperty) && this._targetPropertyNames[0] === name) {
            this._targetProperty = undefined;
            this._definitionChanged.raiseEvent(this);
        }
    };

    ReferenceProperty.prototype._onCollectionChanged = function(collection, added, removed) {
        var targetEntity = this._targetEntity;
        if (Object(_Core_defined_js__WEBPACK_IMPORTED_MODULE_0__["default"])(targetEntity) && removed.indexOf(targetEntity) !== -1) {
            targetEntity.definitionChanged.removeEventListener(ReferenceProperty.prototype._onTargetEntityDefinitionChanged, this);
            this._targetEntity = this._targetProperty = undefined;
        } else if (!Object(_Core_defined_js__WEBPACK_IMPORTED_MODULE_0__["default"])(targetEntity)) {
            targetEntity = resolve(this);
            if (Object(_Core_defined_js__WEBPACK_IMPORTED_MODULE_0__["default"])(targetEntity)) {
                this._definitionChanged.raiseEvent(this);
            }
        }
    };
/* harmony default export */ __webpack_exports__["default"] = (ReferenceProperty);


/***/ }),

/***/ "./node_modules/terriajs-cesium/Source/DataSources/ScaledPositionProperty.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/terriajs-cesium/Source/DataSources/ScaledPositionProperty.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Core_defined_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Core/defined.js */ "./node_modules/terriajs-cesium/Source/Core/defined.js");
/* harmony import */ var _Core_defineProperties_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Core/defineProperties.js */ "./node_modules/terriajs-cesium/Source/Core/defineProperties.js");
/* harmony import */ var _Core_DeveloperError_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Core/DeveloperError.js */ "./node_modules/terriajs-cesium/Source/Core/DeveloperError.js");
/* harmony import */ var _Core_Ellipsoid_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Core/Ellipsoid.js */ "./node_modules/terriajs-cesium/Source/Core/Ellipsoid.js");
/* harmony import */ var _Core_Event_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Core/Event.js */ "./node_modules/terriajs-cesium/Source/Core/Event.js");
/* harmony import */ var _Core_ReferenceFrame_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Core/ReferenceFrame.js */ "./node_modules/terriajs-cesium/Source/Core/ReferenceFrame.js");
/* harmony import */ var _Property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Property.js */ "./node_modules/terriajs-cesium/Source/DataSources/Property.js");








    /**
     * This is a temporary class for scaling position properties to the WGS84 surface.
     * It will go away or be refactored to support data with arbitrary height references.
     * @private
     */
    function ScaledPositionProperty(value) {
        this._definitionChanged = new _Core_Event_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
        this._value = undefined;
        this._removeSubscription = undefined;
        this.setValue(value);
    }

    Object(_Core_defineProperties_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ScaledPositionProperty.prototype, {
        isConstant : {
            get : function() {
                return _Property_js__WEBPACK_IMPORTED_MODULE_6__["default"].isConstant(this._value);
            }
        },
        definitionChanged : {
            get : function() {
                return this._definitionChanged;
            }
        },
        referenceFrame : {
            get : function() {
                return Object(_Core_defined_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this._value) ? this._value.referenceFrame : _Core_ReferenceFrame_js__WEBPACK_IMPORTED_MODULE_5__["default"].FIXED;
            }
        }
    });

    ScaledPositionProperty.prototype.getValue = function(time, result) {
        return this.getValueInReferenceFrame(time, _Core_ReferenceFrame_js__WEBPACK_IMPORTED_MODULE_5__["default"].FIXED, result);
    };

    ScaledPositionProperty.prototype.setValue = function(value) {
        if (this._value !== value) {
            this._value = value;

            if (Object(_Core_defined_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this._removeSubscription)) {
                this._removeSubscription();
                this._removeSubscription = undefined;
            }

            if (Object(_Core_defined_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
                this._removeSubscription = value.definitionChanged.addEventListener(this._raiseDefinitionChanged, this);
            }
            this._definitionChanged.raiseEvent(this);
        }
    };

    ScaledPositionProperty.prototype.getValueInReferenceFrame = function(time, referenceFrame, result) {
        

        if (!Object(_Core_defined_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this._value)) {
            return undefined;
        }

        result = this._value.getValueInReferenceFrame(time, referenceFrame, result);
        return Object(_Core_defined_js__WEBPACK_IMPORTED_MODULE_0__["default"])(result) ? _Core_Ellipsoid_js__WEBPACK_IMPORTED_MODULE_3__["default"].WGS84.scaleToGeodeticSurface(result, result) : undefined;
    };

    ScaledPositionProperty.prototype.equals = function(other) {
        return this === other || (other instanceof ScaledPositionProperty && this._value === other._value);
    };

    ScaledPositionProperty.prototype._raiseDefinitionChanged = function() {
        this._definitionChanged.raiseEvent(this);
    };
/* harmony default export */ __webpack_exports__["default"] = (ScaledPositionProperty);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc34zRH5DZXNpdW0tRGF0YVNvdXJjZXMuVGVycmlhTWFwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RlcnJpYWpzLWNlc2l1bS9Tb3VyY2UvQ29yZS9Db3JuZXJUeXBlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90ZXJyaWFqcy1jZXNpdW0vU291cmNlL0RhdGFTb3VyY2VzL0NvbXBvc2l0ZVBvc2l0aW9uUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RlcnJpYWpzLWNlc2l1bS9Tb3VyY2UvRGF0YVNvdXJjZXMvQ29tcG9zaXRlUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RlcnJpYWpzLWNlc2l1bS9Tb3VyY2UvRGF0YVNvdXJjZXMvUmVmZXJlbmNlUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RlcnJpYWpzLWNlc2l1bS9Tb3VyY2UvRGF0YVNvdXJjZXMvU2NhbGVkUG9zaXRpb25Qcm9wZXJ0eS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnJlZXplT2JqZWN0IGZyb20gJy4vZnJlZXplT2JqZWN0LmpzJztcblxuICAgIC8qKlxuICAgICAqIFN0eWxlIG9wdGlvbnMgZm9yIGNvcm5lcnMuXG4gICAgICpcbiAgICAgKiBAZGVtbyBUaGUge0BsaW5rIGh0dHBzOi8vc2FuZGNhc3RsZS5jZXNpdW0uY29tL2luZGV4Lmh0bWw/c3JjPUNvcnJpZG9yLmh0bWwmbGFiZWw9R2VvbWV0cmllc3xDb3JyaWRvciBEZW1vfVxuICAgICAqIGRlbW9uc3RyYXRlcyB0aGUgdGhyZWUgY29ybmVyIHR5cGVzLCBhcyB1c2VkIGJ5IHtAbGluayBDb3JyaWRvckdyYXBoaWNzfS5cbiAgICAgKlxuICAgICAqIEBleHBvcnRzIENvcm5lclR5cGVcbiAgICAgKi9cbiAgICB2YXIgQ29ybmVyVHlwZSA9IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIDxpbWcgc3JjPVwiSW1hZ2VzL0Nvcm5lclR5cGVSb3VuZGVkLnBuZ1wiIHN0eWxlPVwidmVydGljYWwtYWxpZ246IG1pZGRsZTtcIiB3aWR0aD1cIjE4NlwiIGhlaWdodD1cIjE4OVwiIC8+XG4gICAgICAgICAqXG4gICAgICAgICAqIENvcm5lciBoYXMgYSBzbW9vdGggZWRnZS5cbiAgICAgICAgICogQHR5cGUge051bWJlcn1cbiAgICAgICAgICogQGNvbnN0YW50XG4gICAgICAgICAqL1xuICAgICAgICBST1VOREVEIDogMCxcblxuICAgICAgICAvKipcbiAgICAgICAgICogPGltZyBzcmM9XCJJbWFnZXMvQ29ybmVyVHlwZU1pdGVyZWQucG5nXCIgc3R5bGU9XCJ2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1wiIHdpZHRoPVwiMTg2XCIgaGVpZ2h0PVwiMTg5XCIgLz5cbiAgICAgICAgICpcbiAgICAgICAgICogQ29ybmVyIHBvaW50IGlzIHRoZSBpbnRlcnNlY3Rpb24gb2YgYWRqYWNlbnQgZWRnZXMuXG4gICAgICAgICAqIEB0eXBlIHtOdW1iZXJ9XG4gICAgICAgICAqIEBjb25zdGFudFxuICAgICAgICAgKi9cbiAgICAgICAgTUlURVJFRCA6IDEsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIDxpbWcgc3JjPVwiSW1hZ2VzL0Nvcm5lclR5cGVCZXZlbGVkLnBuZ1wiIHN0eWxlPVwidmVydGljYWwtYWxpZ246IG1pZGRsZTtcIiB3aWR0aD1cIjE4NlwiIGhlaWdodD1cIjE4OVwiIC8+XG4gICAgICAgICAqXG4gICAgICAgICAqIENvcm5lciBpcyBjbGlwcGVkLlxuICAgICAgICAgKiBAdHlwZSB7TnVtYmVyfVxuICAgICAgICAgKiBAY29uc3RhbnRcbiAgICAgICAgICovXG4gICAgICAgIEJFVkVMRUQgOiAyXG4gICAgfTtcbmV4cG9ydCBkZWZhdWx0IGZyZWV6ZU9iamVjdChDb3JuZXJUeXBlKTtcbiIsImltcG9ydCBkZWZhdWx0VmFsdWUgZnJvbSAnLi4vQ29yZS9kZWZhdWx0VmFsdWUuanMnO1xuaW1wb3J0IGRlZmluZWQgZnJvbSAnLi4vQ29yZS9kZWZpbmVkLmpzJztcbmltcG9ydCBkZWZpbmVQcm9wZXJ0aWVzIGZyb20gJy4uL0NvcmUvZGVmaW5lUHJvcGVydGllcy5qcyc7XG5pbXBvcnQgRGV2ZWxvcGVyRXJyb3IgZnJvbSAnLi4vQ29yZS9EZXZlbG9wZXJFcnJvci5qcyc7XG5pbXBvcnQgRXZlbnQgZnJvbSAnLi4vQ29yZS9FdmVudC5qcyc7XG5pbXBvcnQgUmVmZXJlbmNlRnJhbWUgZnJvbSAnLi4vQ29yZS9SZWZlcmVuY2VGcmFtZS5qcyc7XG5pbXBvcnQgQ29tcG9zaXRlUHJvcGVydHkgZnJvbSAnLi9Db21wb3NpdGVQcm9wZXJ0eS5qcyc7XG5pbXBvcnQgUHJvcGVydHkgZnJvbSAnLi9Qcm9wZXJ0eS5qcyc7XG5cbiAgICAvKipcbiAgICAgKiBBIHtAbGluayBDb21wb3NpdGVQcm9wZXJ0eX0gd2hpY2ggaXMgYWxzbyBhIHtAbGluayBQb3NpdGlvblByb3BlcnR5fS5cbiAgICAgKlxuICAgICAqIEBhbGlhcyBDb21wb3NpdGVQb3NpdGlvblByb3BlcnR5XG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1JlZmVyZW5jZUZyYW1lfSBbcmVmZXJlbmNlRnJhbWU9UmVmZXJlbmNlRnJhbWUuRklYRURdIFRoZSByZWZlcmVuY2UgZnJhbWUgaW4gd2hpY2ggdGhlIHBvc2l0aW9uIGlzIGRlZmluZWQuXG4gICAgICovXG4gICAgZnVuY3Rpb24gQ29tcG9zaXRlUG9zaXRpb25Qcm9wZXJ0eShyZWZlcmVuY2VGcmFtZSkge1xuICAgICAgICB0aGlzLl9yZWZlcmVuY2VGcmFtZSA9IGRlZmF1bHRWYWx1ZShyZWZlcmVuY2VGcmFtZSwgUmVmZXJlbmNlRnJhbWUuRklYRUQpO1xuICAgICAgICB0aGlzLl9kZWZpbml0aW9uQ2hhbmdlZCA9IG5ldyBFdmVudCgpO1xuICAgICAgICB0aGlzLl9jb21wb3NpdGUgPSBuZXcgQ29tcG9zaXRlUHJvcGVydHkoKTtcbiAgICAgICAgdGhpcy5fY29tcG9zaXRlLmRlZmluaXRpb25DaGFuZ2VkLmFkZEV2ZW50TGlzdGVuZXIoQ29tcG9zaXRlUG9zaXRpb25Qcm9wZXJ0eS5wcm90b3R5cGUuX3JhaXNlRGVmaW5pdGlvbkNoYW5nZWQsIHRoaXMpO1xuICAgIH1cblxuICAgIGRlZmluZVByb3BlcnRpZXMoQ29tcG9zaXRlUG9zaXRpb25Qcm9wZXJ0eS5wcm90b3R5cGUsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldHMgYSB2YWx1ZSBpbmRpY2F0aW5nIGlmIHRoaXMgcHJvcGVydHkgaXMgY29uc3RhbnQuICBBIHByb3BlcnR5IGlzIGNvbnNpZGVyZWRcbiAgICAgICAgICogY29uc3RhbnQgaWYgZ2V0VmFsdWUgYWx3YXlzIHJldHVybnMgdGhlIHNhbWUgcmVzdWx0IGZvciB0aGUgY3VycmVudCBkZWZpbml0aW9uLlxuICAgICAgICAgKiBAbWVtYmVyb2YgQ29tcG9zaXRlUG9zaXRpb25Qcm9wZXJ0eS5wcm90b3R5cGVcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge0Jvb2xlYW59XG4gICAgICAgICAqIEByZWFkb25seVxuICAgICAgICAgKi9cbiAgICAgICAgaXNDb25zdGFudCA6IHtcbiAgICAgICAgICAgIGdldCA6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9jb21wb3NpdGUuaXNDb25zdGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldHMgdGhlIGV2ZW50IHRoYXQgaXMgcmFpc2VkIHdoZW5ldmVyIHRoZSBkZWZpbml0aW9uIG9mIHRoaXMgcHJvcGVydHkgY2hhbmdlcy5cbiAgICAgICAgICogVGhlIGRlZmluaXRpb24gaXMgY2hhbmdlZCB3aGVuZXZlciBzZXRWYWx1ZSBpcyBjYWxsZWQgd2l0aCBkYXRhIGRpZmZlcmVudFxuICAgICAgICAgKiB0aGFuIHRoZSBjdXJyZW50IHZhbHVlLlxuICAgICAgICAgKiBAbWVtYmVyb2YgQ29tcG9zaXRlUG9zaXRpb25Qcm9wZXJ0eS5wcm90b3R5cGVcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge0V2ZW50fVxuICAgICAgICAgKiBAcmVhZG9ubHlcbiAgICAgICAgICovXG4gICAgICAgIGRlZmluaXRpb25DaGFuZ2VkIDoge1xuICAgICAgICAgICAgZ2V0IDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RlZmluaXRpb25DaGFuZ2VkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogR2V0cyB0aGUgaW50ZXJ2YWwgY29sbGVjdGlvbi5cbiAgICAgICAgICogQG1lbWJlcm9mIENvbXBvc2l0ZVBvc2l0aW9uUHJvcGVydHkucHJvdG90eXBlXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtUaW1lSW50ZXJ2YWxDb2xsZWN0aW9ufVxuICAgICAgICAgKi9cbiAgICAgICAgaW50ZXJ2YWxzIDoge1xuICAgICAgICAgICAgZ2V0IDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbXBvc2l0ZS5pbnRlcnZhbHM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXRzIG9yIHNldHMgdGhlIHJlZmVyZW5jZSBmcmFtZSB3aGljaCB0aGlzIHBvc2l0aW9uIHByZXNlbnRzIGl0c2VsZiBhcy5cbiAgICAgICAgICogRWFjaCBQb3NpdGlvblByb3BlcnR5IG1ha2luZyB1cCB0aGlzIG9iamVjdCBoYXMgaXQncyBvd24gcmVmZXJlbmNlIGZyYW1lLFxuICAgICAgICAgKiBzbyB0aGlzIHByb3BlcnR5IG1lcmVseSBleHBvc2VzIGEgXCJwcmVmZXJyZWRcIiByZWZlcmVuY2UgZnJhbWUgZm9yIGNsaWVudHNcbiAgICAgICAgICogdG8gdXNlLlxuICAgICAgICAgKiBAbWVtYmVyb2YgQ29tcG9zaXRlUG9zaXRpb25Qcm9wZXJ0eS5wcm90b3R5cGVcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge1JlZmVyZW5jZUZyYW1lfVxuICAgICAgICAgKi9cbiAgICAgICAgcmVmZXJlbmNlRnJhbWUgOiB7XG4gICAgICAgICAgICBnZXQgOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVmZXJlbmNlRnJhbWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0IDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZWZlcmVuY2VGcmFtZSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSB2YWx1ZSBvZiB0aGUgcHJvcGVydHkgYXQgdGhlIHByb3ZpZGVkIHRpbWUgaW4gdGhlIGZpeGVkIGZyYW1lLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtKdWxpYW5EYXRlfSB0aW1lIFRoZSB0aW1lIGZvciB3aGljaCB0byByZXRyaWV2ZSB0aGUgdmFsdWUuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtyZXN1bHRdIFRoZSBvYmplY3QgdG8gc3RvcmUgdGhlIHZhbHVlIGludG8sIGlmIG9taXR0ZWQsIGEgbmV3IGluc3RhbmNlIGlzIGNyZWF0ZWQgYW5kIHJldHVybmVkLlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBtb2RpZmllZCByZXN1bHQgcGFyYW1ldGVyIG9yIGEgbmV3IGluc3RhbmNlIGlmIHRoZSByZXN1bHQgcGFyYW1ldGVyIHdhcyBub3Qgc3VwcGxpZWQuXG4gICAgICovXG4gICAgQ29tcG9zaXRlUG9zaXRpb25Qcm9wZXJ0eS5wcm90b3R5cGUuZ2V0VmFsdWUgPSBmdW5jdGlvbih0aW1lLCByZXN1bHQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWVJblJlZmVyZW5jZUZyYW1lKHRpbWUsIFJlZmVyZW5jZUZyYW1lLkZJWEVELCByZXN1bHQpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSB2YWx1ZSBvZiB0aGUgcHJvcGVydHkgYXQgdGhlIHByb3ZpZGVkIHRpbWUgYW5kIGluIHRoZSBwcm92aWRlZCByZWZlcmVuY2UgZnJhbWUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0p1bGlhbkRhdGV9IHRpbWUgVGhlIHRpbWUgZm9yIHdoaWNoIHRvIHJldHJpZXZlIHRoZSB2YWx1ZS5cbiAgICAgKiBAcGFyYW0ge1JlZmVyZW5jZUZyYW1lfSByZWZlcmVuY2VGcmFtZSBUaGUgZGVzaXJlZCByZWZlcmVuY2VGcmFtZSBvZiB0aGUgcmVzdWx0LlxuICAgICAqIEBwYXJhbSB7Q2FydGVzaWFuM30gW3Jlc3VsdF0gVGhlIG9iamVjdCB0byBzdG9yZSB0aGUgdmFsdWUgaW50bywgaWYgb21pdHRlZCwgYSBuZXcgaW5zdGFuY2UgaXMgY3JlYXRlZCBhbmQgcmV0dXJuZWQuXG4gICAgICogQHJldHVybnMge0NhcnRlc2lhbjN9IFRoZSBtb2RpZmllZCByZXN1bHQgcGFyYW1ldGVyIG9yIGEgbmV3IGluc3RhbmNlIGlmIHRoZSByZXN1bHQgcGFyYW1ldGVyIHdhcyBub3Qgc3VwcGxpZWQuXG4gICAgICovXG4gICAgQ29tcG9zaXRlUG9zaXRpb25Qcm9wZXJ0eS5wcm90b3R5cGUuZ2V0VmFsdWVJblJlZmVyZW5jZUZyYW1lID0gZnVuY3Rpb24odGltZSwgcmVmZXJlbmNlRnJhbWUsIHJlc3VsdCkge1xuICAgICAgICBcblxuICAgICAgICB2YXIgaW5uZXJQcm9wZXJ0eSA9IHRoaXMuX2NvbXBvc2l0ZS5faW50ZXJ2YWxzLmZpbmREYXRhRm9ySW50ZXJ2YWxDb250YWluaW5nRGF0ZSh0aW1lKTtcbiAgICAgICAgaWYgKGRlZmluZWQoaW5uZXJQcm9wZXJ0eSkpIHtcbiAgICAgICAgICAgIHJldHVybiBpbm5lclByb3BlcnR5LmdldFZhbHVlSW5SZWZlcmVuY2VGcmFtZSh0aW1lLCByZWZlcmVuY2VGcmFtZSwgcmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDb21wYXJlcyB0aGlzIHByb3BlcnR5IHRvIHRoZSBwcm92aWRlZCBwcm9wZXJ0eSBhbmQgcmV0dXJuc1xuICAgICAqIDxjb2RlPnRydWU8L2NvZGU+IGlmIHRoZXkgYXJlIGVxdWFsLCA8Y29kZT5mYWxzZTwvY29kZT4gb3RoZXJ3aXNlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtQcm9wZXJ0eX0gW290aGVyXSBUaGUgb3RoZXIgcHJvcGVydHkuXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59IDxjb2RlPnRydWU8L2NvZGU+IGlmIGxlZnQgYW5kIHJpZ2h0IGFyZSBlcXVhbCwgPGNvZGU+ZmFsc2U8L2NvZGU+IG90aGVyd2lzZS5cbiAgICAgKi9cbiAgICBDb21wb3NpdGVQb3NpdGlvblByb3BlcnR5LnByb3RvdHlwZS5lcXVhbHMgPSBmdW5jdGlvbihvdGhlcikge1xuICAgICAgICByZXR1cm4gdGhpcyA9PT0gb3RoZXIgfHwgLy9cbiAgICAgICAgICAgICAgIChvdGhlciBpbnN0YW5jZW9mIENvbXBvc2l0ZVBvc2l0aW9uUHJvcGVydHkgJiYgLy9cbiAgICAgICAgICAgICAgICB0aGlzLl9yZWZlcmVuY2VGcmFtZSA9PT0gb3RoZXIuX3JlZmVyZW5jZUZyYW1lICYmIC8vXG4gICAgICAgICAgICAgICAgdGhpcy5fY29tcG9zaXRlLmVxdWFscyhvdGhlci5fY29tcG9zaXRlLCBQcm9wZXJ0eS5lcXVhbHMpKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBDb21wb3NpdGVQb3NpdGlvblByb3BlcnR5LnByb3RvdHlwZS5fcmFpc2VEZWZpbml0aW9uQ2hhbmdlZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLl9kZWZpbml0aW9uQ2hhbmdlZC5yYWlzZUV2ZW50KHRoaXMpO1xuICAgIH07XG5leHBvcnQgZGVmYXVsdCBDb21wb3NpdGVQb3NpdGlvblByb3BlcnR5O1xuIiwiaW1wb3J0IGRlZmluZWQgZnJvbSAnLi4vQ29yZS9kZWZpbmVkLmpzJztcbmltcG9ydCBkZWZpbmVQcm9wZXJ0aWVzIGZyb20gJy4uL0NvcmUvZGVmaW5lUHJvcGVydGllcy5qcyc7XG5pbXBvcnQgRGV2ZWxvcGVyRXJyb3IgZnJvbSAnLi4vQ29yZS9EZXZlbG9wZXJFcnJvci5qcyc7XG5pbXBvcnQgRXZlbnQgZnJvbSAnLi4vQ29yZS9FdmVudC5qcyc7XG5pbXBvcnQgRXZlbnRIZWxwZXIgZnJvbSAnLi4vQ29yZS9FdmVudEhlbHBlci5qcyc7XG5pbXBvcnQgVGltZUludGVydmFsQ29sbGVjdGlvbiBmcm9tICcuLi9Db3JlL1RpbWVJbnRlcnZhbENvbGxlY3Rpb24uanMnO1xuaW1wb3J0IFByb3BlcnR5IGZyb20gJy4vUHJvcGVydHkuanMnO1xuXG4gICAgZnVuY3Rpb24gc3Vic2NyaWJlQWxsKHByb3BlcnR5LCBldmVudEhlbHBlciwgZGVmaW5pdGlvbkNoYW5nZWQsIGludGVydmFscykge1xuICAgICAgICBmdW5jdGlvbiBjYWxsYmFjaygpIHtcbiAgICAgICAgICAgIGRlZmluaXRpb25DaGFuZ2VkLnJhaXNlRXZlbnQocHJvcGVydHkpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpdGVtcyA9IFtdO1xuICAgICAgICBldmVudEhlbHBlci5yZW1vdmVBbGwoKTtcbiAgICAgICAgdmFyIGxlbmd0aCA9IGludGVydmFscy5sZW5ndGg7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBpbnRlcnZhbCA9IGludGVydmFscy5nZXQoaSk7XG4gICAgICAgICAgICBpZiAoZGVmaW5lZChpbnRlcnZhbC5kYXRhKSAmJiBpdGVtcy5pbmRleE9mKGludGVydmFsLmRhdGEpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIGV2ZW50SGVscGVyLmFkZChpbnRlcnZhbC5kYXRhLmRlZmluaXRpb25DaGFuZ2VkLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBIHtAbGluayBQcm9wZXJ0eX0gd2hpY2ggaXMgZGVmaW5lZCBieSBhIHtAbGluayBUaW1lSW50ZXJ2YWxDb2xsZWN0aW9ufSwgd2hlcmUgdGhlXG4gICAgICogZGF0YSBwcm9wZXJ0eSBvZiBlYWNoIHtAbGluayBUaW1lSW50ZXJ2YWx9IGlzIGFub3RoZXIgUHJvcGVydHkgaW5zdGFuY2Ugd2hpY2ggaXNcbiAgICAgKiBldmFsdWF0ZWQgYXQgdGhlIHByb3ZpZGVkIHRpbWUuXG4gICAgICpcbiAgICAgKiBAYWxpYXMgQ29tcG9zaXRlUHJvcGVydHlcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKlxuICAgICAqXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiB2YXIgY29uc3RhbnRQcm9wZXJ0eSA9IC4uLjtcbiAgICAgKiB2YXIgc2FtcGxlZFByb3BlcnR5ID0gLi4uO1xuICAgICAqXG4gICAgICogLy9DcmVhdGUgYSBjb21wb3NpdGUgcHJvcGVydHkgZnJvbSB0d28gcHJldmlvdXNseSBkZWZpbmVkIHByb3BlcnRpZXNcbiAgICAgKiAvL3doZXJlIHRoZSBwcm9wZXJ0eSBpcyB2YWxpZCBvbiBBdWd1c3QgMXN0LCAyMDEyIGFuZCB1c2VzIGEgY29uc3RhbnRcbiAgICAgKiAvL3Byb3BlcnR5IGZvciB0aGUgZmlyc3QgaGFsZiBvZiB0aGUgZGF5IGFuZCBhIHNhbXBsZWQgcHJvcGVydHkgZm9yIHRoZVxuICAgICAqIC8vcmVtYWluaW5nIGhhbGYuXG4gICAgICogdmFyIGNvbXBvc2l0ZSA9IG5ldyBDZXNpdW0uQ29tcG9zaXRlUHJvcGVydHkoKTtcbiAgICAgKiBjb21wb3NpdGUuaW50ZXJ2YWxzLmFkZEludGVydmFsKENlc2l1bS5UaW1lSW50ZXJ2YWwuZnJvbUlzbzg2MDEoe1xuICAgICAqICAgICBpc284NjAxIDogJzIwMTItMDgtMDFUMDA6MDA6MDAuMDBaLzIwMTItMDgtMDFUMTI6MDA6MDAuMDBaJyxcbiAgICAgKiAgICAgZGF0YSA6IGNvbnN0YW50UHJvcGVydHlcbiAgICAgKiB9KSk7XG4gICAgICogY29tcG9zaXRlLmludGVydmFscy5hZGRJbnRlcnZhbChDZXNpdW0uVGltZUludGVydmFsLmZyb21Jc284NjAxKHtcbiAgICAgKiAgICAgaXNvODYwMSA6ICcyMDEyLTA4LTAxVDEyOjAwOjAwLjAwWi8yMDEyLTA4LTAyVDAwOjAwOjAwLjAwWicsXG4gICAgICogICAgIGlzU3RhcnRJbmNsdWRlZCA6IGZhbHNlLFxuICAgICAqICAgICBpc1N0b3BJbmNsdWRlZCA6IGZhbHNlLFxuICAgICAqICAgICBkYXRhIDogc2FtcGxlZFByb3BlcnR5XG4gICAgICogfSkpO1xuICAgICAqXG4gICAgICogQHNlZSBDb21wb3NpdGVNYXRlcmlhbFByb3BlcnR5XG4gICAgICogQHNlZSBDb21wb3NpdGVQb3NpdGlvblByb3BlcnR5XG4gICAgICovXG4gICAgZnVuY3Rpb24gQ29tcG9zaXRlUHJvcGVydHkoKSB7XG4gICAgICAgIHRoaXMuX2V2ZW50SGVscGVyID0gbmV3IEV2ZW50SGVscGVyKCk7XG4gICAgICAgIHRoaXMuX2RlZmluaXRpb25DaGFuZ2VkID0gbmV3IEV2ZW50KCk7XG4gICAgICAgIHRoaXMuX2ludGVydmFscyA9IG5ldyBUaW1lSW50ZXJ2YWxDb2xsZWN0aW9uKCk7XG4gICAgICAgIHRoaXMuX2ludGVydmFscy5jaGFuZ2VkRXZlbnQuYWRkRXZlbnRMaXN0ZW5lcihDb21wb3NpdGVQcm9wZXJ0eS5wcm90b3R5cGUuX2ludGVydmFsc0NoYW5nZWQsIHRoaXMpO1xuICAgIH1cblxuICAgIGRlZmluZVByb3BlcnRpZXMoQ29tcG9zaXRlUHJvcGVydHkucHJvdG90eXBlLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXRzIGEgdmFsdWUgaW5kaWNhdGluZyBpZiB0aGlzIHByb3BlcnR5IGlzIGNvbnN0YW50LiAgQSBwcm9wZXJ0eSBpcyBjb25zaWRlcmVkXG4gICAgICAgICAqIGNvbnN0YW50IGlmIGdldFZhbHVlIGFsd2F5cyByZXR1cm5zIHRoZSBzYW1lIHJlc3VsdCBmb3IgdGhlIGN1cnJlbnQgZGVmaW5pdGlvbi5cbiAgICAgICAgICogQG1lbWJlcm9mIENvbXBvc2l0ZVByb3BlcnR5LnByb3RvdHlwZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7Qm9vbGVhbn1cbiAgICAgICAgICogQHJlYWRvbmx5XG4gICAgICAgICAqL1xuICAgICAgICBpc0NvbnN0YW50IDoge1xuICAgICAgICAgICAgZ2V0IDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2ludGVydmFscy5pc0VtcHR5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogR2V0cyB0aGUgZXZlbnQgdGhhdCBpcyByYWlzZWQgd2hlbmV2ZXIgdGhlIGRlZmluaXRpb24gb2YgdGhpcyBwcm9wZXJ0eSBjaGFuZ2VzLlxuICAgICAgICAgKiBUaGUgZGVmaW5pdGlvbiBpcyBjaGFuZ2VkIHdoZW5ldmVyIHNldFZhbHVlIGlzIGNhbGxlZCB3aXRoIGRhdGEgZGlmZmVyZW50XG4gICAgICAgICAqIHRoYW4gdGhlIGN1cnJlbnQgdmFsdWUuXG4gICAgICAgICAqIEBtZW1iZXJvZiBDb21wb3NpdGVQcm9wZXJ0eS5wcm90b3R5cGVcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge0V2ZW50fVxuICAgICAgICAgKiBAcmVhZG9ubHlcbiAgICAgICAgICovXG4gICAgICAgIGRlZmluaXRpb25DaGFuZ2VkIDoge1xuICAgICAgICAgICAgZ2V0IDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RlZmluaXRpb25DaGFuZ2VkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogR2V0cyB0aGUgaW50ZXJ2YWwgY29sbGVjdGlvbi5cbiAgICAgICAgICogQG1lbWJlcm9mIENvbXBvc2l0ZVByb3BlcnR5LnByb3RvdHlwZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7VGltZUludGVydmFsQ29sbGVjdGlvbn1cbiAgICAgICAgICovXG4gICAgICAgIGludGVydmFscyA6IHtcbiAgICAgICAgICAgIGdldCA6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9pbnRlcnZhbHM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHZhbHVlIG9mIHRoZSBwcm9wZXJ0eSBhdCB0aGUgcHJvdmlkZWQgdGltZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SnVsaWFuRGF0ZX0gdGltZSBUaGUgdGltZSBmb3Igd2hpY2ggdG8gcmV0cmlldmUgdGhlIHZhbHVlLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzdWx0XSBUaGUgb2JqZWN0IHRvIHN0b3JlIHRoZSB2YWx1ZSBpbnRvLCBpZiBvbWl0dGVkLCBhIG5ldyBpbnN0YW5jZSBpcyBjcmVhdGVkIGFuZCByZXR1cm5lZC5cbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgbW9kaWZpZWQgcmVzdWx0IHBhcmFtZXRlciBvciBhIG5ldyBpbnN0YW5jZSBpZiB0aGUgcmVzdWx0IHBhcmFtZXRlciB3YXMgbm90IHN1cHBsaWVkLlxuICAgICAqL1xuICAgIENvbXBvc2l0ZVByb3BlcnR5LnByb3RvdHlwZS5nZXRWYWx1ZSA9IGZ1bmN0aW9uKHRpbWUsIHJlc3VsdCkge1xuICAgICAgICBcblxuICAgICAgICB2YXIgaW5uZXJQcm9wZXJ0eSA9IHRoaXMuX2ludGVydmFscy5maW5kRGF0YUZvckludGVydmFsQ29udGFpbmluZ0RhdGUodGltZSk7XG4gICAgICAgIGlmIChkZWZpbmVkKGlubmVyUHJvcGVydHkpKSB7XG4gICAgICAgICAgICByZXR1cm4gaW5uZXJQcm9wZXJ0eS5nZXRWYWx1ZSh0aW1lLCByZXN1bHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENvbXBhcmVzIHRoaXMgcHJvcGVydHkgdG8gdGhlIHByb3ZpZGVkIHByb3BlcnR5IGFuZCByZXR1cm5zXG4gICAgICogPGNvZGU+dHJ1ZTwvY29kZT4gaWYgdGhleSBhcmUgZXF1YWwsIDxjb2RlPmZhbHNlPC9jb2RlPiBvdGhlcndpc2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1Byb3BlcnR5fSBbb3RoZXJdIFRoZSBvdGhlciBwcm9wZXJ0eS5cbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gPGNvZGU+dHJ1ZTwvY29kZT4gaWYgbGVmdCBhbmQgcmlnaHQgYXJlIGVxdWFsLCA8Y29kZT5mYWxzZTwvY29kZT4gb3RoZXJ3aXNlLlxuICAgICAqL1xuICAgIENvbXBvc2l0ZVByb3BlcnR5LnByb3RvdHlwZS5lcXVhbHMgPSBmdW5jdGlvbihvdGhlcikge1xuICAgICAgICByZXR1cm4gdGhpcyA9PT0gb3RoZXIgfHwgLy9cbiAgICAgICAgICAgICAgIChvdGhlciBpbnN0YW5jZW9mIENvbXBvc2l0ZVByb3BlcnR5ICYmIC8vXG4gICAgICAgICAgICAgICAgdGhpcy5faW50ZXJ2YWxzLmVxdWFscyhvdGhlci5faW50ZXJ2YWxzLCBQcm9wZXJ0eS5lcXVhbHMpKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBDb21wb3NpdGVQcm9wZXJ0eS5wcm90b3R5cGUuX2ludGVydmFsc0NoYW5nZWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgc3Vic2NyaWJlQWxsKHRoaXMsIHRoaXMuX2V2ZW50SGVscGVyLCB0aGlzLl9kZWZpbml0aW9uQ2hhbmdlZCwgdGhpcy5faW50ZXJ2YWxzKTtcbiAgICAgICAgdGhpcy5fZGVmaW5pdGlvbkNoYW5nZWQucmFpc2VFdmVudCh0aGlzKTtcbiAgICB9O1xuZXhwb3J0IGRlZmF1bHQgQ29tcG9zaXRlUHJvcGVydHk7XG4iLCJpbXBvcnQgZGVmaW5lZCBmcm9tICcuLi9Db3JlL2RlZmluZWQuanMnO1xuaW1wb3J0IGRlZmluZVByb3BlcnRpZXMgZnJvbSAnLi4vQ29yZS9kZWZpbmVQcm9wZXJ0aWVzLmpzJztcbmltcG9ydCBEZXZlbG9wZXJFcnJvciBmcm9tICcuLi9Db3JlL0RldmVsb3BlckVycm9yLmpzJztcbmltcG9ydCBFdmVudCBmcm9tICcuLi9Db3JlL0V2ZW50LmpzJztcbmltcG9ydCBQcm9wZXJ0eSBmcm9tICcuL1Byb3BlcnR5LmpzJztcblxuICAgIGZ1bmN0aW9uIHJlc29sdmUodGhhdCkge1xuICAgICAgICB2YXIgdGFyZ2V0UHJvcGVydHkgPSB0aGF0Ll90YXJnZXRQcm9wZXJ0eTtcblxuICAgICAgICBpZiAoIWRlZmluZWQodGFyZ2V0UHJvcGVydHkpKSB7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0RW50aXR5ID0gdGhhdC5fdGFyZ2V0RW50aXR5O1xuXG4gICAgICAgICAgICBpZiAoIWRlZmluZWQodGFyZ2V0RW50aXR5KSkge1xuICAgICAgICAgICAgICAgIHRhcmdldEVudGl0eSA9IHRoYXQuX3RhcmdldENvbGxlY3Rpb24uZ2V0QnlJZCh0aGF0Ll90YXJnZXRJZCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIWRlZmluZWQodGFyZ2V0RW50aXR5KSkge1xuICAgICAgICAgICAgICAgICAgICAvLyB0YXJnZXQgZW50aXR5IG5vdCBmb3VuZFxuICAgICAgICAgICAgICAgICAgICB0aGF0Ll90YXJnZXRFbnRpdHkgPSB0aGF0Ll90YXJnZXRQcm9wZXJ0eSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIHRhcmdldCBlbnRpdHkgd2FzIGZvdW5kLiBsaXN0ZW4gZm9yIGNoYW5nZXMgdG8gZW50aXR5IGRlZmluaXRpb25cbiAgICAgICAgICAgICAgICB0YXJnZXRFbnRpdHkuZGVmaW5pdGlvbkNoYW5nZWQuYWRkRXZlbnRMaXN0ZW5lcihSZWZlcmVuY2VQcm9wZXJ0eS5wcm90b3R5cGUuX29uVGFyZ2V0RW50aXR5RGVmaW5pdGlvbkNoYW5nZWQsIHRoYXQpO1xuICAgICAgICAgICAgICAgIHRoYXQuX3RhcmdldEVudGl0eSA9IHRhcmdldEVudGl0eTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gd2FsayB0aGUgbGlzdCBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgcmVzb2x2ZSBwcm9wZXJ0aWVzXG4gICAgICAgICAgICB2YXIgdGFyZ2V0UHJvcGVydHlOYW1lcyA9IHRoYXQuX3RhcmdldFByb3BlcnR5TmFtZXM7XG4gICAgICAgICAgICB0YXJnZXRQcm9wZXJ0eSA9IHRoYXQuX3RhcmdldEVudGl0eTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB0YXJnZXRQcm9wZXJ0eU5hbWVzLmxlbmd0aDsgaSA8IGxlbiAmJiBkZWZpbmVkKHRhcmdldFByb3BlcnR5KTsgKytpKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0UHJvcGVydHkgPSB0YXJnZXRQcm9wZXJ0eVt0YXJnZXRQcm9wZXJ0eU5hbWVzW2ldXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gdGFyZ2V0IHByb3BlcnR5IG1heSBvciBtYXkgbm90IGJlIGRlZmluZWQsIGRlcGVuZGluZyBvbiBpZiBpdCB3YXMgZm91bmRcbiAgICAgICAgICAgIHRoYXQuX3RhcmdldFByb3BlcnR5ID0gdGFyZ2V0UHJvcGVydHk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFyZ2V0UHJvcGVydHk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQSB7QGxpbmsgUHJvcGVydHl9IHdoaWNoIHRyYW5zcGFyZW50bHkgbGlua3MgdG8gYW5vdGhlciBwcm9wZXJ0eSBvbiBhIHByb3ZpZGVkIG9iamVjdC5cbiAgICAgKlxuICAgICAqIEBhbGlhcyBSZWZlcmVuY2VQcm9wZXJ0eVxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqXG4gICAgICogQHBhcmFtIHtFbnRpdHlDb2xsZWN0aW9ufSB0YXJnZXRDb2xsZWN0aW9uIFRoZSBlbnRpdHkgY29sbGVjdGlvbiB3aGljaCB3aWxsIGJlIHVzZWQgdG8gcmVzb2x2ZSB0aGUgcmVmZXJlbmNlLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB0YXJnZXRJZCBUaGUgaWQgb2YgdGhlIGVudGl0eSB3aGljaCBpcyBiZWluZyByZWZlcmVuY2VkLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nW119IHRhcmdldFByb3BlcnR5TmFtZXMgVGhlIG5hbWVzIG9mIHRoZSBwcm9wZXJ0eSBvbiB0aGUgdGFyZ2V0IGVudGl0eSB3aGljaCB3ZSB3aWxsIHVzZS5cbiAgICAgKlxuICAgICAqIEBleGFtcGxlXG4gICAgICogdmFyIGNvbGxlY3Rpb24gPSBuZXcgQ2VzaXVtLkVudGl0eUNvbGxlY3Rpb24oKTtcbiAgICAgKlxuICAgICAqIC8vQ3JlYXRlIGEgbmV3IGVudGl0eSBhbmQgYXNzaWduIGEgYmlsbGJvYXJkIHNjYWxlLlxuICAgICAqIHZhciBvYmplY3QxID0gbmV3IENlc2l1bS5FbnRpdHkoe2lkOidvYmplY3QxJ30pO1xuICAgICAqIG9iamVjdDEuYmlsbGJvYXJkID0gbmV3IENlc2l1bS5CaWxsYm9hcmRHcmFwaGljcygpO1xuICAgICAqIG9iamVjdDEuYmlsbGJvYXJkLnNjYWxlID0gbmV3IENlc2l1bS5Db25zdGFudFByb3BlcnR5KDIuMCk7XG4gICAgICogY29sbGVjdGlvbi5hZGQob2JqZWN0MSk7XG4gICAgICpcbiAgICAgKiAvL0NyZWF0ZSBhIHNlY29uZCBlbnRpdHkgYW5kIHJlZmVyZW5jZSB0aGUgc2NhbGUgZnJvbSB0aGUgZmlyc3Qgb25lLlxuICAgICAqIHZhciBvYmplY3QyID0gbmV3IENlc2l1bS5FbnRpdHkoe2lkOidvYmplY3QyJ30pO1xuICAgICAqIG9iamVjdDIubW9kZWwgPSBuZXcgQ2VzaXVtLk1vZGVsR3JhcGhpY3MoKTtcbiAgICAgKiBvYmplY3QyLm1vZGVsLnNjYWxlID0gbmV3IENlc2l1bS5SZWZlcmVuY2VQcm9wZXJ0eShjb2xsZWN0aW9uLCAnb2JqZWN0MScsIFsnYmlsbGJvYXJkJywgJ3NjYWxlJ10pO1xuICAgICAqIGNvbGxlY3Rpb24uYWRkKG9iamVjdDIpO1xuICAgICAqXG4gICAgICogLy9DcmVhdGUgYSB0aGlyZCBvYmplY3QsIGJ1dCB1c2UgdGhlIGZyb21TdHJpbmcgaGVscGVyIGZ1bmN0aW9uLlxuICAgICAqIHZhciBvYmplY3QzID0gbmV3IENlc2l1bS5FbnRpdHkoe2lkOidvYmplY3QzJ30pO1xuICAgICAqIG9iamVjdDMuYmlsbGJvYXJkID0gbmV3IENlc2l1bS5CaWxsYm9hcmRHcmFwaGljcygpO1xuICAgICAqIG9iamVjdDMuYmlsbGJvYXJkLnNjYWxlID0gQ2VzaXVtLlJlZmVyZW5jZVByb3BlcnR5LmZyb21TdHJpbmcoY29sbGVjdGlvbiwgJ29iamVjdDEjYmlsbGJvYXJkLnNjYWxlJyk7XG4gICAgICogY29sbGVjdGlvbi5hZGQob2JqZWN0Myk7XG4gICAgICpcbiAgICAgKiAvL1lvdSBjYW4gcmVmZXIgdG8gYW4gZW50aXR5IHdpdGggYSAjIG9yIC4gaW4gaWQgYW5kIHByb3BlcnR5IG5hbWVzIGJ5IGVzY2FwaW5nIHRoZW0uXG4gICAgICogdmFyIG9iamVjdDQgPSBuZXcgQ2VzaXVtLkVudGl0eSh7aWQ6JyNvYmplY3QuNCd9KTtcbiAgICAgKiBvYmplY3Q0LmJpbGxib2FyZCA9IG5ldyBDZXNpdW0uQmlsbGJvYXJkR3JhcGhpY3MoKTtcbiAgICAgKiBvYmplY3Q0LmJpbGxib2FyZC5zY2FsZSA9IG5ldyBDZXNpdW0uQ29uc3RhbnRQcm9wZXJ0eSgyLjApO1xuICAgICAqIGNvbGxlY3Rpb24uYWRkKG9iamVjdDQpO1xuICAgICAqXG4gICAgICogdmFyIG9iamVjdDUgPSBuZXcgQ2VzaXVtLkVudGl0eSh7aWQ6J29iamVjdDUnfSk7XG4gICAgICogb2JqZWN0NS5iaWxsYm9hcmQgPSBuZXcgQ2VzaXVtLkJpbGxib2FyZEdyYXBoaWNzKCk7XG4gICAgICogb2JqZWN0NS5iaWxsYm9hcmQuc2NhbGUgPSBDZXNpdW0uUmVmZXJlbmNlUHJvcGVydHkuZnJvbVN0cmluZyhjb2xsZWN0aW9uLCAnXFxcXCNvYmplY3RcXFxcLjQjYmlsbGJvYXJkLnNjYWxlJyk7XG4gICAgICogY29sbGVjdGlvbi5hZGQob2JqZWN0NSk7XG4gICAgICovXG4gICAgZnVuY3Rpb24gUmVmZXJlbmNlUHJvcGVydHkodGFyZ2V0Q29sbGVjdGlvbiwgdGFyZ2V0SWQsIHRhcmdldFByb3BlcnR5TmFtZXMpIHtcbiAgICAgICAgXG5cbiAgICAgICAgdGhpcy5fdGFyZ2V0Q29sbGVjdGlvbiA9IHRhcmdldENvbGxlY3Rpb247XG4gICAgICAgIHRoaXMuX3RhcmdldElkID0gdGFyZ2V0SWQ7XG4gICAgICAgIHRoaXMuX3RhcmdldFByb3BlcnR5TmFtZXMgPSB0YXJnZXRQcm9wZXJ0eU5hbWVzO1xuICAgICAgICB0aGlzLl90YXJnZXRQcm9wZXJ0eSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5fdGFyZ2V0RW50aXR5ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl9kZWZpbml0aW9uQ2hhbmdlZCA9IG5ldyBFdmVudCgpO1xuXG4gICAgICAgIHRhcmdldENvbGxlY3Rpb24uY29sbGVjdGlvbkNoYW5nZWQuYWRkRXZlbnRMaXN0ZW5lcihSZWZlcmVuY2VQcm9wZXJ0eS5wcm90b3R5cGUuX29uQ29sbGVjdGlvbkNoYW5nZWQsIHRoaXMpO1xuICAgIH1cblxuICAgIGRlZmluZVByb3BlcnRpZXMoUmVmZXJlbmNlUHJvcGVydHkucHJvdG90eXBlLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXRzIGEgdmFsdWUgaW5kaWNhdGluZyBpZiB0aGlzIHByb3BlcnR5IGlzIGNvbnN0YW50LlxuICAgICAgICAgKiBAbWVtYmVyb2YgUmVmZXJlbmNlUHJvcGVydHkucHJvdG90eXBlXG4gICAgICAgICAqIEB0eXBlIHtCb29sZWFufVxuICAgICAgICAgKiBAcmVhZG9ubHlcbiAgICAgICAgICovXG4gICAgICAgIGlzQ29uc3RhbnQgOiB7XG4gICAgICAgICAgICBnZXQgOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvcGVydHkuaXNDb25zdGFudChyZXNvbHZlKHRoaXMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldHMgdGhlIGV2ZW50IHRoYXQgaXMgcmFpc2VkIHdoZW5ldmVyIHRoZSBkZWZpbml0aW9uIG9mIHRoaXMgcHJvcGVydHkgY2hhbmdlcy5cbiAgICAgICAgICogVGhlIGRlZmluaXRpb24gaXMgY2hhbmdlZCB3aGVuZXZlciB0aGUgcmVmZXJlbmNlZCBwcm9wZXJ0eSdzIGRlZmluaXRpb24gaXMgY2hhbmdlZC5cbiAgICAgICAgICogQG1lbWJlcm9mIFJlZmVyZW5jZVByb3BlcnR5LnByb3RvdHlwZVxuICAgICAgICAgKiBAdHlwZSB7RXZlbnR9XG4gICAgICAgICAqIEByZWFkb25seVxuICAgICAgICAgKi9cbiAgICAgICAgZGVmaW5pdGlvbkNoYW5nZWQgOiB7XG4gICAgICAgICAgICBnZXQgOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZGVmaW5pdGlvbkNoYW5nZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXRzIHRoZSByZWZlcmVuY2UgZnJhbWUgdGhhdCB0aGUgcG9zaXRpb24gaXMgZGVmaW5lZCBpbi5cbiAgICAgICAgICogVGhpcyBwcm9wZXJ0eSBpcyBvbmx5IHZhbGlkIGlmIHRoZSByZWZlcmVuY2VkIHByb3BlcnR5IGlzIGEge0BsaW5rIFBvc2l0aW9uUHJvcGVydHl9LlxuICAgICAgICAgKiBAbWVtYmVyb2YgUmVmZXJlbmNlUHJvcGVydHkucHJvdG90eXBlXG4gICAgICAgICAqIEB0eXBlIHtSZWZlcmVuY2VGcmFtZX1cbiAgICAgICAgICogQHJlYWRvbmx5XG4gICAgICAgICAqL1xuICAgICAgICByZWZlcmVuY2VGcmFtZSA6IHtcbiAgICAgICAgICAgIGdldCA6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSByZXNvbHZlKHRoaXMpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkZWZpbmVkKHRhcmdldCkgPyB0YXJnZXQucmVmZXJlbmNlRnJhbWUgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXRzIHRoZSBpZCBvZiB0aGUgZW50aXR5IGJlaW5nIHJlZmVyZW5jZWQuXG4gICAgICAgICAqIEBtZW1iZXJvZiBSZWZlcmVuY2VQcm9wZXJ0eS5wcm90b3R5cGVcbiAgICAgICAgICogQHR5cGUge1N0cmluZ31cbiAgICAgICAgICogQHJlYWRvbmx5XG4gICAgICAgICAqL1xuICAgICAgICB0YXJnZXRJZCA6IHtcbiAgICAgICAgICAgIGdldCA6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl90YXJnZXRJZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldHMgdGhlIGNvbGxlY3Rpb24gY29udGFpbmluZyB0aGUgZW50aXR5IGJlaW5nIHJlZmVyZW5jZWQuXG4gICAgICAgICAqIEBtZW1iZXJvZiBSZWZlcmVuY2VQcm9wZXJ0eS5wcm90b3R5cGVcbiAgICAgICAgICogQHR5cGUge0VudGl0eUNvbGxlY3Rpb259XG4gICAgICAgICAqIEByZWFkb25seVxuICAgICAgICAgKi9cbiAgICAgICAgdGFyZ2V0Q29sbGVjdGlvbiA6IHtcbiAgICAgICAgICAgIGdldCA6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl90YXJnZXRDb2xsZWN0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogR2V0cyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgdXNlZCB0byByZXRyaWV2ZSB0aGUgcmVmZXJlbmNlZCBwcm9wZXJ0eS5cbiAgICAgICAgICogQG1lbWJlcm9mIFJlZmVyZW5jZVByb3BlcnR5LnByb3RvdHlwZVxuICAgICAgICAgKiBAdHlwZSB7U3RyaW5nW119XG4gICAgICAgICAqIEByZWFkb25seVxuICAgICAgICAgKi9cbiAgICAgICAgdGFyZ2V0UHJvcGVydHlOYW1lcyA6IHtcbiAgICAgICAgICAgIGdldCA6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl90YXJnZXRQcm9wZXJ0eU5hbWVzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogR2V0cyB0aGUgcmVzb2x2ZWQgaW5zdGFuY2Ugb2YgdGhlIHVuZGVybHlpbmcgcmVmZXJlbmNlZCBwcm9wZXJ0eS5cbiAgICAgICAgICogQG1lbWJlcm9mIFJlZmVyZW5jZVByb3BlcnR5LnByb3RvdHlwZVxuICAgICAgICAgKiBAdHlwZSB7UHJvcGVydHl9XG4gICAgICAgICAqIEByZWFkb25seVxuICAgICAgICAgKi9cbiAgICAgICAgcmVzb2x2ZWRQcm9wZXJ0eSA6IHtcbiAgICAgICAgICAgIGdldCA6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIGdpdmVuIHRoZSBlbnRpdHkgY29sbGVjdGlvbiB0aGF0IHdpbGxcbiAgICAgKiBiZSB1c2VkIHRvIHJlc29sdmUgaXQgYW5kIGEgc3RyaW5nIGluZGljYXRpbmcgdGhlIHRhcmdldCBlbnRpdHkgaWQgYW5kIHByb3BlcnR5LlxuICAgICAqIFRoZSBmb3JtYXQgb2YgdGhlIHN0cmluZyBpcyBcIm9iamVjdElkI2Zvby5iYXJcIiwgd2hlcmUgIyBzZXBhcmF0ZXMgdGhlIGlkIGZyb21cbiAgICAgKiBwcm9wZXJ0eSBwYXRoIGFuZCAuIHNlcGFyYXRlcyBzdWItcHJvcGVydGllcy4gIElmIHRoZSByZWZlcmVuY2UgaWRlbnRpZmllciBvclxuICAgICAqIG9yIGFueSBzdWItcHJvcGVydGllcyBjb250YWlucyBhICMgLiBvciBcXCB0aGV5IG11c3QgYmUgZXNjYXBlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RW50aXR5Q29sbGVjdGlvbn0gdGFyZ2V0Q29sbGVjdGlvblxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSByZWZlcmVuY2VTdHJpbmdcbiAgICAgKiBAcmV0dXJucyB7UmVmZXJlbmNlUHJvcGVydHl9IEEgbmV3IGluc3RhbmNlIG9mIFJlZmVyZW5jZVByb3BlcnR5LlxuICAgICAqXG4gICAgICogQGV4Y2VwdGlvbiB7RGV2ZWxvcGVyRXJyb3J9IGludmFsaWQgcmVmZXJlbmNlU3RyaW5nLlxuICAgICAqL1xuICAgIFJlZmVyZW5jZVByb3BlcnR5LmZyb21TdHJpbmcgPSBmdW5jdGlvbih0YXJnZXRDb2xsZWN0aW9uLCByZWZlcmVuY2VTdHJpbmcpIHtcbiAgICAgICAgXG5cbiAgICAgICAgdmFyIGlkZW50aWZpZXI7XG4gICAgICAgIHZhciB2YWx1ZXMgPSBbXTtcblxuICAgICAgICB2YXIgaW5JZGVudGlmaWVyID0gdHJ1ZTtcbiAgICAgICAgdmFyIGlzRXNjYXBlZCA9IGZhbHNlO1xuICAgICAgICB2YXIgdG9rZW4gPSAnJztcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZWZlcmVuY2VTdHJpbmcubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHZhciBjID0gcmVmZXJlbmNlU3RyaW5nLmNoYXJBdChpKTtcblxuICAgICAgICAgICAgaWYgKGlzRXNjYXBlZCkge1xuICAgICAgICAgICAgICAgIHRva2VuICs9IGM7XG4gICAgICAgICAgICAgICAgaXNFc2NhcGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGMgPT09ICdcXFxcJykge1xuICAgICAgICAgICAgICAgIGlzRXNjYXBlZCA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGluSWRlbnRpZmllciAmJiBjID09PSAnIycpIHtcbiAgICAgICAgICAgICAgICBpZGVudGlmaWVyID0gdG9rZW47XG4gICAgICAgICAgICAgICAgaW5JZGVudGlmaWVyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdG9rZW4gPSAnJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIWluSWRlbnRpZmllciAmJiBjID09PSAnLicpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZXMucHVzaCh0b2tlbik7XG4gICAgICAgICAgICAgICAgdG9rZW4gPSAnJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdG9rZW4gKz0gYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YWx1ZXMucHVzaCh0b2tlbik7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBSZWZlcmVuY2VQcm9wZXJ0eSh0YXJnZXRDb2xsZWN0aW9uLCBpZGVudGlmaWVyLCB2YWx1ZXMpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSB2YWx1ZSBvZiB0aGUgcHJvcGVydHkgYXQgdGhlIHByb3ZpZGVkIHRpbWUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0p1bGlhbkRhdGV9IHRpbWUgVGhlIHRpbWUgZm9yIHdoaWNoIHRvIHJldHJpZXZlIHRoZSB2YWx1ZS5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW3Jlc3VsdF0gVGhlIG9iamVjdCB0byBzdG9yZSB0aGUgdmFsdWUgaW50bywgaWYgb21pdHRlZCwgYSBuZXcgaW5zdGFuY2UgaXMgY3JlYXRlZCBhbmQgcmV0dXJuZWQuXG4gICAgICogQHJldHVybnMge09iamVjdH0gVGhlIG1vZGlmaWVkIHJlc3VsdCBwYXJhbWV0ZXIgb3IgYSBuZXcgaW5zdGFuY2UgaWYgdGhlIHJlc3VsdCBwYXJhbWV0ZXIgd2FzIG5vdCBzdXBwbGllZC5cbiAgICAgKi9cbiAgICBSZWZlcmVuY2VQcm9wZXJ0eS5wcm90b3R5cGUuZ2V0VmFsdWUgPSBmdW5jdGlvbih0aW1lLCByZXN1bHQpIHtcbiAgICAgICAgdmFyIHRhcmdldCA9IHJlc29sdmUodGhpcyk7XG4gICAgICAgIHJldHVybiBkZWZpbmVkKHRhcmdldCkgPyB0YXJnZXQuZ2V0VmFsdWUodGltZSwgcmVzdWx0KSA6IHVuZGVmaW5lZDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgdmFsdWUgb2YgdGhlIHByb3BlcnR5IGF0IHRoZSBwcm92aWRlZCB0aW1lIGFuZCBpbiB0aGUgcHJvdmlkZWQgcmVmZXJlbmNlIGZyYW1lLlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIG9ubHkgdmFsaWQgaWYgdGhlIHByb3BlcnR5IGJlaW5nIHJlZmVyZW5jZWQgaXMgYSB7QGxpbmsgUG9zaXRpb25Qcm9wZXJ0eX0uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0p1bGlhbkRhdGV9IHRpbWUgVGhlIHRpbWUgZm9yIHdoaWNoIHRvIHJldHJpZXZlIHRoZSB2YWx1ZS5cbiAgICAgKiBAcGFyYW0ge1JlZmVyZW5jZUZyYW1lfSByZWZlcmVuY2VGcmFtZSBUaGUgZGVzaXJlZCByZWZlcmVuY2VGcmFtZSBvZiB0aGUgcmVzdWx0LlxuICAgICAqIEBwYXJhbSB7Q2FydGVzaWFuM30gW3Jlc3VsdF0gVGhlIG9iamVjdCB0byBzdG9yZSB0aGUgdmFsdWUgaW50bywgaWYgb21pdHRlZCwgYSBuZXcgaW5zdGFuY2UgaXMgY3JlYXRlZCBhbmQgcmV0dXJuZWQuXG4gICAgICogQHJldHVybnMge0NhcnRlc2lhbjN9IFRoZSBtb2RpZmllZCByZXN1bHQgcGFyYW1ldGVyIG9yIGEgbmV3IGluc3RhbmNlIGlmIHRoZSByZXN1bHQgcGFyYW1ldGVyIHdhcyBub3Qgc3VwcGxpZWQuXG4gICAgICovXG4gICAgUmVmZXJlbmNlUHJvcGVydHkucHJvdG90eXBlLmdldFZhbHVlSW5SZWZlcmVuY2VGcmFtZSA9IGZ1bmN0aW9uKHRpbWUsIHJlZmVyZW5jZUZyYW1lLCByZXN1bHQpIHtcbiAgICAgICAgdmFyIHRhcmdldCA9IHJlc29sdmUodGhpcyk7XG4gICAgICAgIHJldHVybiBkZWZpbmVkKHRhcmdldCkgPyB0YXJnZXQuZ2V0VmFsdWVJblJlZmVyZW5jZUZyYW1lKHRpbWUsIHJlZmVyZW5jZUZyYW1lLCByZXN1bHQpIDogdW5kZWZpbmVkO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSB7QGxpbmsgTWF0ZXJpYWx9IHR5cGUgYXQgdGhlIHByb3ZpZGVkIHRpbWUuXG4gICAgICogVGhpcyBtZXRob2QgaXMgb25seSB2YWxpZCBpZiB0aGUgcHJvcGVydHkgYmVpbmcgcmVmZXJlbmNlZCBpcyBhIHtAbGluayBNYXRlcmlhbFByb3BlcnR5fS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SnVsaWFuRGF0ZX0gdGltZSBUaGUgdGltZSBmb3Igd2hpY2ggdG8gcmV0cmlldmUgdGhlIHR5cGUuXG4gICAgICogQHJldHVybnMge1N0cmluZ30gVGhlIHR5cGUgb2YgbWF0ZXJpYWwuXG4gICAgICovXG4gICAgUmVmZXJlbmNlUHJvcGVydHkucHJvdG90eXBlLmdldFR5cGUgPSBmdW5jdGlvbih0aW1lKSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSByZXNvbHZlKHRoaXMpO1xuICAgICAgICByZXR1cm4gZGVmaW5lZCh0YXJnZXQpID8gdGFyZ2V0LmdldFR5cGUodGltZSkgOiB1bmRlZmluZWQ7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENvbXBhcmVzIHRoaXMgcHJvcGVydHkgdG8gdGhlIHByb3ZpZGVkIHByb3BlcnR5IGFuZCByZXR1cm5zXG4gICAgICogPGNvZGU+dHJ1ZTwvY29kZT4gaWYgdGhleSBhcmUgZXF1YWwsIDxjb2RlPmZhbHNlPC9jb2RlPiBvdGhlcndpc2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1Byb3BlcnR5fSBbb3RoZXJdIFRoZSBvdGhlciBwcm9wZXJ0eS5cbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gPGNvZGU+dHJ1ZTwvY29kZT4gaWYgbGVmdCBhbmQgcmlnaHQgYXJlIGVxdWFsLCA8Y29kZT5mYWxzZTwvY29kZT4gb3RoZXJ3aXNlLlxuICAgICAqL1xuICAgIFJlZmVyZW5jZVByb3BlcnR5LnByb3RvdHlwZS5lcXVhbHMgPSBmdW5jdGlvbihvdGhlcikge1xuICAgICAgICBpZiAodGhpcyA9PT0gb3RoZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG5hbWVzID0gdGhpcy5fdGFyZ2V0UHJvcGVydHlOYW1lcztcbiAgICAgICAgdmFyIG90aGVyTmFtZXMgPSBvdGhlci5fdGFyZ2V0UHJvcGVydHlOYW1lcztcblxuICAgICAgICBpZiAodGhpcy5fdGFyZ2V0Q29sbGVjdGlvbiAhPT0gb3RoZXIuX3RhcmdldENvbGxlY3Rpb24gfHwgLy9cbiAgICAgICAgICAgIHRoaXMuX3RhcmdldElkICE9PSBvdGhlci5fdGFyZ2V0SWQgfHwgLy9cbiAgICAgICAgICAgIG5hbWVzLmxlbmd0aCAhPT0gb3RoZXJOYW1lcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBsZW5ndGggPSB0aGlzLl90YXJnZXRQcm9wZXJ0eU5hbWVzLmxlbmd0aDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKG5hbWVzW2ldICE9PSBvdGhlck5hbWVzW2ldKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcblxuICAgIFJlZmVyZW5jZVByb3BlcnR5LnByb3RvdHlwZS5fb25UYXJnZXRFbnRpdHlEZWZpbml0aW9uQ2hhbmdlZCA9IGZ1bmN0aW9uKHRhcmdldEVudGl0eSwgbmFtZSwgdmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmIChkZWZpbmVkKHRoaXMuX3RhcmdldFByb3BlcnR5KSAmJiB0aGlzLl90YXJnZXRQcm9wZXJ0eU5hbWVzWzBdID09PSBuYW1lKSB7XG4gICAgICAgICAgICB0aGlzLl90YXJnZXRQcm9wZXJ0eSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHRoaXMuX2RlZmluaXRpb25DaGFuZ2VkLnJhaXNlRXZlbnQodGhpcyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgUmVmZXJlbmNlUHJvcGVydHkucHJvdG90eXBlLl9vbkNvbGxlY3Rpb25DaGFuZ2VkID0gZnVuY3Rpb24oY29sbGVjdGlvbiwgYWRkZWQsIHJlbW92ZWQpIHtcbiAgICAgICAgdmFyIHRhcmdldEVudGl0eSA9IHRoaXMuX3RhcmdldEVudGl0eTtcbiAgICAgICAgaWYgKGRlZmluZWQodGFyZ2V0RW50aXR5KSAmJiByZW1vdmVkLmluZGV4T2YodGFyZ2V0RW50aXR5KSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRhcmdldEVudGl0eS5kZWZpbml0aW9uQ2hhbmdlZC5yZW1vdmVFdmVudExpc3RlbmVyKFJlZmVyZW5jZVByb3BlcnR5LnByb3RvdHlwZS5fb25UYXJnZXRFbnRpdHlEZWZpbml0aW9uQ2hhbmdlZCwgdGhpcyk7XG4gICAgICAgICAgICB0aGlzLl90YXJnZXRFbnRpdHkgPSB0aGlzLl90YXJnZXRQcm9wZXJ0eSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfSBlbHNlIGlmICghZGVmaW5lZCh0YXJnZXRFbnRpdHkpKSB7XG4gICAgICAgICAgICB0YXJnZXRFbnRpdHkgPSByZXNvbHZlKHRoaXMpO1xuICAgICAgICAgICAgaWYgKGRlZmluZWQodGFyZ2V0RW50aXR5KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2RlZmluaXRpb25DaGFuZ2VkLnJhaXNlRXZlbnQodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuZXhwb3J0IGRlZmF1bHQgUmVmZXJlbmNlUHJvcGVydHk7XG4iLCJpbXBvcnQgZGVmaW5lZCBmcm9tICcuLi9Db3JlL2RlZmluZWQuanMnO1xuaW1wb3J0IGRlZmluZVByb3BlcnRpZXMgZnJvbSAnLi4vQ29yZS9kZWZpbmVQcm9wZXJ0aWVzLmpzJztcbmltcG9ydCBEZXZlbG9wZXJFcnJvciBmcm9tICcuLi9Db3JlL0RldmVsb3BlckVycm9yLmpzJztcbmltcG9ydCBFbGxpcHNvaWQgZnJvbSAnLi4vQ29yZS9FbGxpcHNvaWQuanMnO1xuaW1wb3J0IEV2ZW50IGZyb20gJy4uL0NvcmUvRXZlbnQuanMnO1xuaW1wb3J0IFJlZmVyZW5jZUZyYW1lIGZyb20gJy4uL0NvcmUvUmVmZXJlbmNlRnJhbWUuanMnO1xuaW1wb3J0IFByb3BlcnR5IGZyb20gJy4vUHJvcGVydHkuanMnO1xuXG4gICAgLyoqXG4gICAgICogVGhpcyBpcyBhIHRlbXBvcmFyeSBjbGFzcyBmb3Igc2NhbGluZyBwb3NpdGlvbiBwcm9wZXJ0aWVzIHRvIHRoZSBXR1M4NCBzdXJmYWNlLlxuICAgICAqIEl0IHdpbGwgZ28gYXdheSBvciBiZSByZWZhY3RvcmVkIHRvIHN1cHBvcnQgZGF0YSB3aXRoIGFyYml0cmFyeSBoZWlnaHQgcmVmZXJlbmNlcy5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIFNjYWxlZFBvc2l0aW9uUHJvcGVydHkodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fZGVmaW5pdGlvbkNoYW5nZWQgPSBuZXcgRXZlbnQoKTtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX3JlbW92ZVN1YnNjcmlwdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgZGVmaW5lUHJvcGVydGllcyhTY2FsZWRQb3NpdGlvblByb3BlcnR5LnByb3RvdHlwZSwge1xuICAgICAgICBpc0NvbnN0YW50IDoge1xuICAgICAgICAgICAgZ2V0IDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb3BlcnR5LmlzQ29uc3RhbnQodGhpcy5fdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBkZWZpbml0aW9uQ2hhbmdlZCA6IHtcbiAgICAgICAgICAgIGdldCA6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9kZWZpbml0aW9uQ2hhbmdlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcmVmZXJlbmNlRnJhbWUgOiB7XG4gICAgICAgICAgICBnZXQgOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmaW5lZCh0aGlzLl92YWx1ZSkgPyB0aGlzLl92YWx1ZS5yZWZlcmVuY2VGcmFtZSA6IFJlZmVyZW5jZUZyYW1lLkZJWEVEO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBTY2FsZWRQb3NpdGlvblByb3BlcnR5LnByb3RvdHlwZS5nZXRWYWx1ZSA9IGZ1bmN0aW9uKHRpbWUsIHJlc3VsdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZUluUmVmZXJlbmNlRnJhbWUodGltZSwgUmVmZXJlbmNlRnJhbWUuRklYRUQsIHJlc3VsdCk7XG4gICAgfTtcblxuICAgIFNjYWxlZFBvc2l0aW9uUHJvcGVydHkucHJvdG90eXBlLnNldFZhbHVlID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMuX3ZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcblxuICAgICAgICAgICAgaWYgKGRlZmluZWQodGhpcy5fcmVtb3ZlU3Vic2NyaXB0aW9uKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlbW92ZVN1YnNjcmlwdGlvbigpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlbW92ZVN1YnNjcmlwdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGRlZmluZWQodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVtb3ZlU3Vic2NyaXB0aW9uID0gdmFsdWUuZGVmaW5pdGlvbkNoYW5nZWQuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLl9yYWlzZURlZmluaXRpb25DaGFuZ2VkLCB0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2RlZmluaXRpb25DaGFuZ2VkLnJhaXNlRXZlbnQodGhpcyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgU2NhbGVkUG9zaXRpb25Qcm9wZXJ0eS5wcm90b3R5cGUuZ2V0VmFsdWVJblJlZmVyZW5jZUZyYW1lID0gZnVuY3Rpb24odGltZSwgcmVmZXJlbmNlRnJhbWUsIHJlc3VsdCkge1xuICAgICAgICBcblxuICAgICAgICBpZiAoIWRlZmluZWQodGhpcy5fdmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0ID0gdGhpcy5fdmFsdWUuZ2V0VmFsdWVJblJlZmVyZW5jZUZyYW1lKHRpbWUsIHJlZmVyZW5jZUZyYW1lLCByZXN1bHQpO1xuICAgICAgICByZXR1cm4gZGVmaW5lZChyZXN1bHQpID8gRWxsaXBzb2lkLldHUzg0LnNjYWxlVG9HZW9kZXRpY1N1cmZhY2UocmVzdWx0LCByZXN1bHQpIDogdW5kZWZpbmVkO1xuICAgIH07XG5cbiAgICBTY2FsZWRQb3NpdGlvblByb3BlcnR5LnByb3RvdHlwZS5lcXVhbHMgPSBmdW5jdGlvbihvdGhlcikge1xuICAgICAgICByZXR1cm4gdGhpcyA9PT0gb3RoZXIgfHwgKG90aGVyIGluc3RhbmNlb2YgU2NhbGVkUG9zaXRpb25Qcm9wZXJ0eSAmJiB0aGlzLl92YWx1ZSA9PT0gb3RoZXIuX3ZhbHVlKTtcbiAgICB9O1xuXG4gICAgU2NhbGVkUG9zaXRpb25Qcm9wZXJ0eS5wcm90b3R5cGUuX3JhaXNlRGVmaW5pdGlvbkNoYW5nZWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5fZGVmaW5pdGlvbkNoYW5nZWQucmFpc2VFdmVudCh0aGlzKTtcbiAgICB9O1xuZXhwb3J0IGRlZmF1bHQgU2NhbGVkUG9zaXRpb25Qcm9wZXJ0eTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbklBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM1SUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4VEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=