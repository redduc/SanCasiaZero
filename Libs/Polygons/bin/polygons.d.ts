declare namespace Polygons {
    class PolygonPoint2D {
        x: number;
        y: number;
        constructor(x: number, y: number);
        rotate(angle: number, rotationPoint: PolygonPoint2D): PolygonPoint2D;
    }
}
declare namespace Polygons {
    class Polygon2D {
        color: string;
        points: PolygonPoint2D[];
        constructor(color: string);
        addPoint(point: PolygonPoint2D): void;
        clone(): Polygon2D;
        draw(ctx: any): void;
        move(x: number, y: number): Polygon2D;
        rotate(angel: number, rotationPoint: PolygonPoint2D): Polygon2D;
        transfer(x: number, y: number, angle: number, rotationPoint: PolygonPoint2D): Polygon2D;
    }
}
declare namespace Polygons {
    class Polygons {
    }
}
