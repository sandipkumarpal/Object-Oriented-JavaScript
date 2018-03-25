var objC = (function(objC){
    const ToolBarItem = function(itemElement) {
        Object.defineProperty(this, __el, {
            value: itemElement
        });
    };

    Object.defineProperties(ToolBarItem.prototype, {
        toggleActiveState: {
            value: function() {
                this.activated = !this.activated;
            }
        },
        enabled: {
            get: {
                function () {
                    return !this.__el.classList.contains("disabled");
                }
            },
            set: function(value) {
                if (value) {
                    this._el.classList.remove("disabled");
                } else {
                    this._el.classList.add("disabled");
                }
            }
        },
        activated: {
            get: function() {
                return this.__el.classList.contains("active");
            },
            set: function(value) {
                if (value) {
                    this.__el.classList.add("active");
                } else {
                    this.__el.classList.remove("active");
                }
            }
        }
    });

    const createToolBarItems = function(itemElement) {
        const items = [];

        [].forEach.call(itemElement, function(ele, index, arry) {
            const item = new ToolBarItem(el);
        });

        items.push(item);

        return items;
    };

    const ToolBar = function(ToolBarElement) {
        const items = ToolBarElement.querySelectorAll(".toolbar-item");

        Object.defineProperties(this, {
            __el: {
                value: element
            },
            items: {
                value: createToolBarItems(items),
                enumerable: true
            }
        })

    }


    return objC;

}(objC || {}));