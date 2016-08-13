var sczEcs;
(function (sczEcs) {
    var Entity = (function () {
        function Entity(id) {
            this.id = id;
            this.components = new Array();
        }
        Entity.prototype.getId = function () {
            return this.id;
        };
        Entity.prototype.addComponent = function (component) {
            this.components.push(component);
        };
        Entity.prototype.getComponentsByType = function (type) {
            var result = new Array();
            for (var index = 0; index < this.components.length; index++) {
                var component = this.components[index];
                if (component.getType() === type) {
                    result.push(component);
                }
            }
            return result;
        };
        return Entity;
    }());
    sczEcs.Entity = Entity;
})(sczEcs || (sczEcs = {}));
var sczEcs;
(function (sczEcs) {
    var SystemBase = (function () {
        function SystemBase() {
            this.entities = new Array();
        }
        SystemBase.prototype.registerEntity = function (entity) {
            this.entities.push(entity);
        };
        SystemBase.prototype.deregisterEntity = function (id) {
            for (var index = 0; index < this.entities.length; index++) {
                var entity = this.entities[index];
                if (entity.getId() == id) {
                    delete this.entities[index];
                    return;
                }
            }
        };
        SystemBase.prototype.process = function () {
            for (var index = 0; index < this.entities.length; index++) {
                this.processEntity(this.entities[index]);
            }
        };
        return SystemBase;
    }());
    sczEcs.SystemBase = SystemBase;
})(sczEcs || (sczEcs = {}));
//# sourceMappingURL=sczEcs.js.map