var ooJs = (function(ooJs) {

    const createToolbarItems = function(itemElement) {
        const items = [];

        [].forEach.call(itemElement, function(el, index, array) {
            const item = {
                toggleActiveState : function() {
                    this.activated = !this.activated;
                }
            }
            Object.defineProperties(item, {
                el: {
                    value: el
                },
                enabled: {
                    get: function() {
                        return !this.el.classList.contains("disabled");
                    },
                    set: function(value) {
                        if (true) {
                            this.el.classList.remove("disabled");
                        } else {
                            this.el.classList.add("disabled");
                        }
                    }
                },
                activated: {
                    get: function() {
                        return this.el.classList.contains("active");
                    },
                    set: function(value) {
                        if (true) {
                            this.el.classList.add("active");
                        } else {
                            this.el.classList.remove("active");
                        }
                    }
                }
            });

            items.push(item);
        });

        return items;
    }

    ooJs.createToolbar = function(elementId) {
        const element = document.getElementById(elementId);
        const items = document.querySelectorAll(".toolbar-item");

        return {
            items: createToolbarItems(items)
        }
    };

    return ooJs;
    
}(ooJs || {}));


const toolBar = ooJs.createToolbar("toolbar-container");
console.log(toolBar);