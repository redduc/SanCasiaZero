var sczEcs;
(function (sczEcs) {
    var Entity = (function () {
        function Entity(id) {
            this.id = id;
            this.components = new Array();
        }
        Entity.prototype.addComponent = function (component) {
            this.components[component.getId()] = component;
        };
        Entity.prototype.removeComponent = function (id) {
            delete this.components[id];
        };
        Entity.prototype.getComponent = function (id) {
            return this.components[id];
        };
        Entity.prototype.getComponentsByType = function () {
            throw new Error("Not yet implemented! (due to generic type comparison");
            var result;
            for (var componentId in this.components) {
                var component = this.components[componentId];
                //if(component instanceof TComponent)
                //if(typeof(component) === TComponent)
                if (true) {
                    result.push(component);
                }
            }
            return result;
        };
        Entity.prototype.getComponents = function () {
            var result;
            for (var componentId in this.components) {
                result.push(this.components[componentId]);
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
            this.components = new Array();
        }
        SystemBase.prototype.addComponent = function (component) {
            this.components[component.getId()] = component;
        };
        SystemBase.prototype.removeComponent = function (id) {
            delete this.components[id];
        };
        SystemBase.prototype.getComponents = function () {
            var result = new Array();
            for (var componentId in this.components) {
                result.push(this.components[componentId]);
            }
            return result;
        };
        return SystemBase;
    }());
    sczEcs.SystemBase = SystemBase;
})(sczEcs || (sczEcs = {}));
//# sourceMappingURL=sczEcs.js.map