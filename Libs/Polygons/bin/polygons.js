var Polygons;
(function (Polygons) {
    var PolygonPoint2D = (function () {
        function PolygonPoint2D(x, y) {
            this.x = x;
            this.y = y;
        }
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
        return Polygon2D;
    }());
    Polygons.Polygon2D = Polygon2D;
})(Polygons || (Polygons = {}));
//# sourceMappingURL=polygons.js.map