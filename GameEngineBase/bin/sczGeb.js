var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../../EntityComponentSystem/bin/sczEcs" />
var sczGame;
(function (sczGame) {
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
                translateComponent = new sczGame.TranslateComponent(0, 0);
            }
            this.ctx.fillStyle = renderComponent.polygon.color;
            this.ctx.beginPath();
            this.ctx.moveTo(renderComponent.polygon.points[0].x + translateComponent.x, renderComponent.polygon.points[0].y + translateComponent.y);
            for (var index = 0; index < renderComponent.polygon.points.length; index++) {
                this.ctx.lineTo(renderComponent.polygon.points[index].x + translateComponent.x, renderComponent.polygon.points[index].y + translateComponent.y);
            }
            this.ctx.closePath();
            this.ctx.fill();
        };
        return RenderSystem;
    }(sczEcs.SystemBase));
    sczGame.RenderSystem = RenderSystem;
})(sczGame || (sczGame = {}));
///<reference path="systems/RenderSystem.ts"/>
/// <reference path="../Libs/Polygons/bin/polygons" />
var sczGame;
(function (sczGame) {
    var Polygon2D = Polygons.Polygon2D;
    var PolygonPoint2D = Polygons.PolygonPoint2D;
    var Entity = sczEcs.Entity;
    var Engine = (function () {
        function Engine() {
            this.renderSystem = new sczGame.RenderSystem("gameCanvas");
            var entity = new Entity(0);
            var renderComponent = new sczGame.RenderComponent();
            var polygon = new Polygon2D("#000");
            polygon.addPoint(new PolygonPoint2D(0, 0));
            polygon.addPoint(new PolygonPoint2D(60, 120));
            polygon.addPoint(new PolygonPoint2D(120, 60));
            renderComponent.polygon = polygon;
            entity.addComponent(new sczGame.TranslateComponent(100, 10));
            entity.addComponent(renderComponent);
            this.renderSystem.registerEntity(entity);
            // start game
            this.gameLoop();
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
        function TranslateComponent(x, y) {
            this.x = x;
            this.y = y;
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