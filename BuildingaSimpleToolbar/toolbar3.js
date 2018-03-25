var toolbarObj = (function(toolbarObj) {

    const createToolbarItem = function(itemElement) {
        const item = {
            toggleActiveState: function() {
                this.activated = !this.activated;
            }
        };

        Object.defineProperties(item, {
            el: {
                value: itemElement
            },
            enabled : {
                get: function() {
                    return !this.el.classList.contains("disabled")
                },
                set: function(value) {
                    if (value) {
                        this.el.classList.remove("disabled");
                    } else {
                        this.el.classList.add("disabled");                        
                    }
                }
            }
        });

        return item;
    };

    const createToolbarItems = function(itemElements) {
        const items = [];

        [].forEach.call(itemElements, function(el, index, array) {
            const item = createToolbarItem(el);
            items.push(item);
        });
        return items;
    };

    toolbarObj.createToolbar = function(elementId) {
        const element = document.getElementById(elementId);

        if (!element) {
            element = document.createElement("DIV");
            element.id = elementId;
            element.className = "toolbar";
        }

        const items = document.querySelectorAll(".toolbar-item");
        const toolbar = {
            add: function(options) {
                let span = document.createElement("SPAN");
                span.className = "toollbar-item";

                this.el.appendChild(span);
                let item = createToolbarItem(span);
                this.items.push(item);
            },
            remove: function(index) {
                const len = this.items.length;

                if (index > len || index < 0) {
                    throw new Error("index is out of range");
                }

                let item = this.items[index];
                this.items.splice(index, 1);
                this.el.removeChild(item.el);

                item = null;
            },
            appendTo: function (parentElement) {
                parentElement.appendChild(this.el);
            }
        };

        Object.defineProperties(toolbar, {
            el: {
                value: element
            },
            items: {
                value: createToolbarItems(items),
                enumerable: true
            }
        });

        return toolbar;

    }

    return toolbarObj;

}(toolbarObj || {}));


console.log(toolbarObj.createToolbar("toolbar-container"));