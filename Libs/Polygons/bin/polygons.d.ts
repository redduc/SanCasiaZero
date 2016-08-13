declare namespace Polygons {
    class PolygonPoint2D {
        constructor(x: number, y: number);
        x: number;
        y: number;
    }
}
declare namespace Polygons {
    class Polygon2D {
        color: string;
        points: PolygonPoint2D[];
        constructor(color: string);
        addPoint(point: PolygonPoint2D): void;
    }
}
