var ooJs = (function(ooJs) {

    const createToolbarItems = function(itemElement) {
        const items = [];

        [].forEach.call(itemElement, function(el, index, array) {
            const item = {
                el: el,
                disable: function() {
                    this.el.classList.add("disabled");
                },
                enable: function() {
                    this.el.classList.remove("disabled");
                },
                isDisable: function() {
                    return this.el.classList.contains("disabled");
                },
                activate: function() {
                    if (this.isDisable()) {
                        return;
                    }
                    this.el.classList.add("active");
                },
                deActivate: function() {
                    if (this.isDisable()) {
                        return;
                    }
                    this.el.classList.remove("active");
                },
                isActive: function() {
                    return this.el.classList.contains("active");
                },
                toggleActiveState: function() {
                    if (this.isActive()) {
                        this.deActivate();
                    } else {
                        this.activate();
                    }
                }
            };
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