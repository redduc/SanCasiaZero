/// <reference path="../../EntityComponentSystem/bin/sczEcs" />
/// <reference path="../../Libs/Polygons/bin/polygons" />

namespace sczGame {
    import Polygon2D = Polygons.Polygon2D;
    export class PhysicsComponent implements sczEcs.IComponent {
        public static _getType(): string
        {
            return "PhysicsComponent";
        }

        public getType(): string
        {
            return PhysicsComponent._getType();
        }

        public rigidBody: Polygon2D;
        public mass: number;

        public collisionHandlers: ICollisionHandler[]

        public constructor(rigidBody: Polygon2D, mass: number)
        {
            this.rigidBody = new Polygon2D("#FFF");
            this.mass = 0;

            this.collisionHandlers = new Array();
        }
    }
}