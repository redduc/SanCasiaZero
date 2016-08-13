/// <reference path="../../EntityComponentSystem/bin/sczEcs" />

namespace sczGame {
    import Entity = sczEcs.Entity;

    export class VelocitySystem extends sczEcs.SystemBase {
        public constructor() {
            super();
        }

        protected processEntity(entity: Entity) {
            var velocity = <VelocityComponent>entity.getComponentsByType(VelocityComponent._getType())[0];
            var translate = <TranslateComponent>entity.getComponentsByType(TranslateComponent._getType())[0];

            translate.x += velocity.x;
            translate.y += velocity.y;
            translate.angel += velocity.spin;
        }

    }
}