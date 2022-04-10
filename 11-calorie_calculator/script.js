// storage conroller

// item controller
const ItemCtrl = (() => {
    // constructor
    const Item = function (id, name, calories) {
        this.id = id;
        this.name = name;
        this.calories = calories;
    }

    // data structure / state
    const data = {
        items: [
            { id: 0, name: 'item1', calories: 1200 },
            { id: 1, name: 'item2', calories: 20 }
        ],
        currentItem: null,
        totalCalories: 0
    }

    // public method
    return {
        getItems: () => { return data.items },

        logData: () => { return data } 
    }

})();

// ui controller
const UiCtrl = (() => { 
    // private
    const UiSelectors = {
        itemList: '#item-list'
    }
    
    // public
    return {
        populateItemList: (items) => {
            let html = '';
            
            items.forEach((item) => {
                html += `
                    <li class="collection-item" id="${item.id}">
                    <strong>${item.name}:</strong>
                    <em>${item.calories} calories</em>
                    <a href="#" class="secondary-content">
                        <i class="fa fa-pencil"></i>
                    </a>
                    </li>
                `;
            });

            // insert list items
            document.querySelector(UiSelectors.itemList).innerHTML = html;          
        }
    }
})();

// app controller
const AppCtrl = ((ItemCtrl, UiCtrl) => { 

    // public method
    return {
        init: () => {
            // fetch item from state
            const items = ItemCtrl.getItems();
            
            // populate list with items
            UiCtrl.populateItemList(items);
            
        }
    }
    
})(ItemCtrl, UiCtrl);

// init this app
AppCtrl.init(); 