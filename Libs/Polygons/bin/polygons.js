var Polygons;
(function (Polygons) {
    var PolygonPoint2D = (function () {
        function PolygonPoint2D(x, y) {
            this.x = x;
            this.y = y;
        }
        PolygonPoint2D.prototype.rotate = function (angle, rotationPoint) {
            angle = angle * Math.PI / 180.0;
            return new PolygonPoint2D(Math.cos(angle) * (this.x - rotationPoint.x) -
                Math.sin(angle) * (this.y - rotationPoint.y) + rotationPoint.x, Math.sin(angle) * (this.x - rotationPoint.x) +
                Math.cos(angle) * (this.y - rotationPoint.y) + rotationPoint.y);
        };
        return PolygonPoint2D;
    }());
    Polygons.PolygonPoint2D = PolygonPoint2D;
})(Polygons || (Polygons = {}));
///<reference path="PolygonPoint2D.ts"/>
var Polygons;
(function (Polygons) {
    var Polygon2D = (function () {
        function Polygon2D(color) {
            this.color = color;
            this.points = new Array();
        }
        Polygon2D.prototype.addPoint = function (point) {
            this.points.push(point);
        };
        Polygon2D.prototype.clone = function () {
            var newPolygon = new Polygon2D(this.color);
            for (var index = 0; index < this.points.length; index++) {
                newPolygon.addPoint(this.points[index]);
            }
            return newPolygon;
        };
        Polygon2D.prototype.draw = function (ctx) {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.moveTo(this.points[0].x, this.points[0].y);
            for (var index = 0; index < this.points.length; index++) {
                ctx.lineTo(this.points[index].x, this.points[index].y);
            }
            ctx.closePath();
            ctx.fill();
        };
        Polygon2D.prototype.move = function (x, y) {
            var newPolygon = new Polygon2D(this.color);
            for (var index in this.points) {
                var point = this.points[index];
                newPolygon.addPoint(new Polygons.PolygonPoint2D(point.x + x, point.y + y));
            }
            return newPolygon;
        };
        Polygon2D.prototype.rotate = function (angel, rotationPoint) {
            var newPolygon = new Polygon2D(this.color);
            for (var index in this.points) {
                var point = this.points[index];
                newPolygon.addPoint(point.rotate(angel, rotationPoint));
            }
            return newPolygon;
        };
        Polygon2D.prototype.transfer = function (x, y, angle, rotationPoint) {
            return this.rotate(angle, rotationPoint).move(x, y);
        };
        return Polygon2D;
    }());
    Polygons.Polygon2D = Polygon2D;
})(Polygons || (Polygons = {}));
var Polygons;
(function (Polygons_1) {
    var Polygons = (function () {
        function Polygons() {
        }
        return Polygons;
    }());
    Polygons_1.Polygons = Polygons;
})(Polygons || (Polygons = {}));
//# sourceMappingURL=polygons.js.map