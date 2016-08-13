/// <reference path="../../EntityComponentSystem/bin/sczEcs" />
/// <reference path="../../Libs/Polygons/bin/polygons" />

namespace sczGame {
    export class RenderComponent implements sczEcs.IComponent {
        public static _getType(): string
        {
            return "RenderComponent";
        }

        public getType(): string
        {
            return RenderComponent._getType();
        }

        public polygon: Polygons.Polygon2D;
    }
}