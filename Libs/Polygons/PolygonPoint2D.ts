namespace Polygons
{
    export class PolygonPoint2D
    {
        public x: number;
        public y: number;

        constructor(x: number, y: number)
        {
            this.x = x;
            this.y = y;
        }

        public rotate(angle: number, rotationPoint: PolygonPoint2D): PolygonPoint2D
        {
            angle = angle * Math.PI / 180.0;
            return new PolygonPoint2D(
                Math.cos(angle) * (this.x-rotationPoint.x) -
                Math.sin(angle) * (this.y-rotationPoint.y) + rotationPoint.x,
                Math.sin(angle) * (this.x-rotationPoint.x) +
                Math.cos(angle) * (this.y-rotationPoint.y) + rotationPoint.y);
        }
    }
}