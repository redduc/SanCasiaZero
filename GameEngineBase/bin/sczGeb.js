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
            var component = entity.getComponentsByType(sczGame.RenderComponent._getType())[0];
            this.ctx.fillStyle = component.polygon.color;
            this.ctx.beginPath();
            this.ctx.moveTo(component.polygon.points[0].x, component.polygon.points[0].y);
            for (var index = 0; index < component.polygon.points.length; index++) {
                this.ctx.lineTo(component.polygon.points[index].x, component.polygon.points[index].y);
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
//# sourceMappingURL=sczGeb.js.map