///<reference path="PolygonPoint2D.ts"/>

namespace Polygons
{
    export class Polygon2D
    {
        public color: string;
        public points: PolygonPoint2D[];

        constructor(color: string)
        {
            this.color = color;
            this.points = new Array();
        }

        addPoint(point: PolygonPoint2D)
        {
            this.points.push(point);
        }
    }
}