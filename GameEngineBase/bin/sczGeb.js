var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../../EntityComponentSystem/bin/sczEcs" />
var sczGame;
(function (sczGame) {
    var PolygonPoint2D = Polygons.PolygonPoint2D;
    var RenderSystem = (function (_super) {
        __extends(RenderSystem, _super);
        function RenderSystem(canvasId) {
            _super.call(this);
            var canvas = document.getElementById(canvasId);
            this.ctx = canvas.getContext('2d');
        }
        RenderSystem.prototype.processEntity = function (entity) {
            var renderComponent = entity.getComponentsByType(sczGame.RenderComponent._getType())[0];
            var translateComponent = entity.getComponentsByType(sczGame.TranslateComponent._getType())[0];
            if (translateComponent == null) {
                translateComponent = new sczGame.TranslateComponent(0, 0, 0);
            }
            renderComponent.polygon.transfer(translateComponent.x, translateComponent.y, translateComponent.angel, new PolygonPoint2D(translateComponent.rotationPoint.x, translateComponent.rotationPoint.y)).draw(this.ctx);
        };
        return RenderSystem;
    }(sczEcs.SystemBase));
    sczGame.RenderSystem = RenderSystem;
})(sczGame || (sczGame = {}));
///<reference path="systems/RenderSystem.ts"/>
/// <reference path="../Libs/Polygons/bin/polygons" />
var sczGame;
(function (sczGame) {
    var Engine = (function () {
        function Engine() {
            // initiate systems
            this.renderSystem = new sczGame.RenderSystem("gameCanvas");
        }
        Engine.prototype.gameLoop = function () {
            //compute
            // render
            this.renderSystem.process();
        };
        return Engine;
    }());
    sczGame.Engine = Engine;
})(sczGame || (sczGame = {}));
/// <reference path="../../EntityComponentSystem/bin/sczEcs" />
/// <reference path="../../Libs/Polygons/bin/polygons" />
var sczGame;
(function (sczGame) {
    var RenderComponent = (function () {
        function RenderComponent() {
            this.polygon = new Polygons.Polygon2D("#FFF");
        }
        RenderComponent._getType = function () {
            return "RenderComponent";
        };
        RenderComponent.prototype.getType = function () {
            return RenderComponent._getType();
        };
        return RenderComponent;
    }());
    sczGame.RenderComponent = RenderComponent;
})(sczGame || (sczGame = {}));
/// <reference path="../../EntityComponentSystem/bin/sczEcs" />
var sczGame;
(function (sczGame) {
    var TranslateComponent = (function () {
        function TranslateComponent(x, y, angel) {
            this.rotationPoint = { x: 0, y: 0 };
            this.x = x;
            this.y = y;
            this.angel = angel;
        }
        TranslateComponent._getType = function () {
            return "TranslateComponent";
        };
        TranslateComponent.prototype.getType = function () {
            return TranslateComponent._getType();
        };
        return TranslateComponent;
    }());
    sczGame.TranslateComponent = TranslateComponent;
})(sczGame || (sczGame = {}));
//# sourceMappingURL=sczGeb.js.map