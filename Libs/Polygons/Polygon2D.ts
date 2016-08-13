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
        public clone(): Polygon2D
        {
            var newPolygon = new Polygon2D(this.color);
            for(var index = 0; index < this.points.length; index++)
            {
                newPolygon.addPoint(this.points[index]);
            }
            return newPolygon;
        }

        public draw(ctx: any): void
        {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.moveTo(
                this.points[0].x,
                this.points[0].y);
            for (var index = 0; index < this.points.length; index++) {
                ctx.lineTo(
                    this.points[index].x,
                    this.points[index].y
                );
            }
            ctx.closePath();
            ctx.fill();
        }

        public move(x: number, y: number): Polygon2D
        {
            var newPolygon = new Polygon2D(this.color);
            for(var index in this.points){
                var point = this.points[index];
                newPolygon.addPoint(new PolygonPoint2D(point.x + x, point.y + y));
            }
            return newPolygon;
        }

        public rotate(
            angel: number,
            rotationPoint: PolygonPoint2D
        ): Polygon2D
        {
            var newPolygon = new Polygon2D(this.color);
            for(var index in this.points){
                var point = this.points[index];
                newPolygon.addPoint(point.rotate(angel, rotationPoint));
            }
            return newPolygon;

        }

        public transfer(
            x: number,
            y: number,
            angle: number,
            rotationPoint: PolygonPoint2D
        ): Polygon2D
        {
            return this.rotate(angle, rotationPoint).move(x, y);
        }
    }
}