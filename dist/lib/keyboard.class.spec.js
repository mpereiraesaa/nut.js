"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
Object.defineProperty(exports, "__esModule", { value: true });
var native_adapter_class_1 = require("./adapter/native.adapter.class");
var key_enum_1 = require("./key.enum");
var keyboard_class_1 = require("./keyboard.class");
jest.mock("./adapter/native.adapter.class");
beforeEach(function () {
    jest.resetAllMocks();
});
describe("Keyboard", function () {
    it("should have a default delay of 300 ms", function () {
        // GIVEN
        var adapterMock = new native_adapter_class_1.NativeAdapter();
        var SUT = new keyboard_class_1.Keyboard(adapterMock);
        // WHEN
        // THEN
        expect(SUT.config.autoDelayMs).toEqual(300);
    });
    it("should pass input strings down to the type call.", function () { return __awaiter(void 0, void 0, void 0, function () {
        var adapterMock, SUT, payload, _i, _a, char;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    adapterMock = new native_adapter_class_1.NativeAdapter();
                    SUT = new keyboard_class_1.Keyboard(adapterMock);
                    payload = "Test input!";
                    // WHEN
                    return [4 /*yield*/, SUT.type(payload)];
                case 1:
                    // WHEN
                    _b.sent();
                    // THEN
                    expect(adapterMock.type).toHaveBeenCalledTimes(payload.length);
                    for (_i = 0, _a = payload.split(""); _i < _a.length; _i++) {
                        char = _a[_i];
                        expect(adapterMock.type).toHaveBeenCalledWith(char);
                    }
                    return [2 /*return*/];
            }
        });
    }); });
    it("should pass multiple input strings down to the type call.", function () { return __awaiter(void 0, void 0, void 0, function () {
        var adapterMock, SUT, payload, _i, _a, char;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    // GIVEN
                    jest.setTimeout(10000);
                    adapterMock = new native_adapter_class_1.NativeAdapter();
                    SUT = new keyboard_class_1.Keyboard(adapterMock);
                    payload = ["Test input!", "Array test2"];
                    // WHEN
                    return [4 /*yield*/, SUT.type.apply(SUT, payload)];
                case 1:
                    // WHEN
                    _b.sent();
                    // THEN
                    expect(adapterMock.type).toHaveBeenCalledTimes(payload.join(" ").length);
                    for (_i = 0, _a = payload.join(" ").split(""); _i < _a.length; _i++) {
                        char = _a[_i];
                        expect(adapterMock.type).toHaveBeenCalledWith(char);
                    }
                    return [2 /*return*/];
            }
        });
    }); });
    it("should pass input keys down to the click call.", function () { return __awaiter(void 0, void 0, void 0, function () {
        var adapterMock, SUT, payload;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    adapterMock = new native_adapter_class_1.NativeAdapter();
                    SUT = new keyboard_class_1.Keyboard(adapterMock);
                    payload = [key_enum_1.Key.A, key_enum_1.Key.S, key_enum_1.Key.D, key_enum_1.Key.F];
                    // WHEN
                    return [4 /*yield*/, SUT.type.apply(SUT, payload)];
                case 1:
                    // WHEN
                    _b.sent();
                    // THEN
                    expect(adapterMock.click).toHaveBeenCalledTimes(1);
                    (_a = expect(adapterMock.click)).toHaveBeenCalledWith.apply(_a, payload);
                    return [2 /*return*/];
            }
        });
    }); });
    it("should pass a list of input keys down to the click call.", function () { return __awaiter(void 0, void 0, void 0, function () {
        var adapterMock, SUT, payload, _i, payload_1, key;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    adapterMock = new native_adapter_class_1.NativeAdapter();
                    SUT = new keyboard_class_1.Keyboard(adapterMock);
                    payload = [key_enum_1.Key.A, key_enum_1.Key.S, key_enum_1.Key.D, key_enum_1.Key.F];
                    _i = 0, payload_1 = payload;
                    _a.label = 1;
                case 1:
                    if (!(_i < payload_1.length)) return [3 /*break*/, 4];
                    key = payload_1[_i];
                    return [4 /*yield*/, SUT.type(key)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4:
                    // THEN
                    expect(adapterMock.click).toHaveBeenCalledTimes(payload.length);
                    return [2 /*return*/];
            }
        });
    }); });
    it("should pass a list of input keys down to the pressKey call.", function () { return __awaiter(void 0, void 0, void 0, function () {
        var adapterMock, SUT, payload, _i, payload_2, key;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    adapterMock = new native_adapter_class_1.NativeAdapter();
                    SUT = new keyboard_class_1.Keyboard(adapterMock);
                    payload = [key_enum_1.Key.A, key_enum_1.Key.S, key_enum_1.Key.D, key_enum_1.Key.F];
                    _i = 0, payload_2 = payload;
                    _a.label = 1;
                case 1:
                    if (!(_i < payload_2.length)) return [3 /*break*/, 4];
                    key = payload_2[_i];
                    return [4 /*yield*/, SUT.pressKey(key)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4:
                    // THEN
                    expect(adapterMock.pressKey).toHaveBeenCalledTimes(payload.length);
                    return [2 /*return*/];
            }
        });
    }); });
    it("should pass a list of input keys down to the releaseKey call.", function () { return __awaiter(void 0, void 0, void 0, function () {
        var adapterMock, SUT, payload, _i, payload_3, key;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    adapterMock = new native_adapter_class_1.NativeAdapter();
                    SUT = new keyboard_class_1.Keyboard(adapterMock);
                    payload = [key_enum_1.Key.A, key_enum_1.Key.S, key_enum_1.Key.D, key_enum_1.Key.F];
                    _i = 0, payload_3 = payload;
                    _a.label = 1;
                case 1:
                    if (!(_i < payload_3.length)) return [3 /*break*/, 4];
                    key = payload_3[_i];
                    return [4 /*yield*/, SUT.releaseKey(key)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4:
                    // THEN
                    expect(adapterMock.releaseKey).toHaveBeenCalledTimes(payload.length);
                    return [2 /*return*/];
            }
        });
    }); });
});
