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

        addItem: (name, calories) => {
            let ID;

            // create id
            if (data.items.length > 0) {
                ID = data.items[data.items.length - 1].id + 1;
            } else {
                ID = 0;
            }

            // calories to number
            calories = parseInt(calories);

            // create new item 
            newItem = new Item(ID, name, calories);

            // add to items array
            data.items.push(newItem);

            return newItem;
        },

        logData: () => { return data; }
    }

})();


// ui controller
const UiCtrl = (() => { 
    // private
    const UiSelectors = {
        itemList: '#item-list',
        addBtn: '.add-btn',
        itemNameInput: '#item-name',
        itemCaloriesInput: '#item-calories'
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
        },
     
        addListItem: (item) => {
            // show the list
            document.querySelector(UiSelectors.itemList).style.dislay = 'block';
            // create li
            const li = document.createElement('li');
            // add class
            li.className = 'collection-item';
            // add id
            li.id = `item-${item.id}`;
            // add html
            li.innerHTML = `
            <strong>${item.name}:</strong>
            <em>${item.calories} calories</em>
            <a href="#" class="secondary-content">
            <i class="fa fa-pencil"></i>
            </a>`;

            // insert item
            document.querySelector(UiSelectors.itemList).insertAdjacentElement('beforeend', li)
        },

        getItemInput: () => {
            return {
                name: document.querySelector(UiSelectors.itemNameInput).value,
                calories: document.querySelector(UiSelectors.itemCaloriesInput).value
            }
        },

        hideList: () => {
            document.querySelector(UiSelectors.itemList).style.display = 'none';
        },

        getSelectors: () => { return UiSelectors },
    }
})();



// app controller
const AppCtrl = ((ItemCtrl, UiCtrl) => { 
    // load event listeners
    const loadEventListeners = () => {
        const UiSelectors = UiCtrl.getSelectors();
        

        // add item event
        document.querySelector(UiSelectors.addBtn).addEventListener('click', itemAddSubmit);

    }

    // add item submit
    const itemAddSubmit = (e) => {
        // get form input from UI Controller
        const input = UiCtrl.getItemInput();

        // check input
        if (input.name !== '' && input.calories !== '') {
            // add item in state
            const newItem = ItemCtrl.addItem(input.name, input.calories);

            // add item to ui list
            UiCtrl.addListItem(newItem);
        }

        e.preventDefault();
     };

    // public method
    return {
        init: () => {
            // fetch item from state
            const items = ItemCtrl.getItems();
            
            // check if have items
            if (items.length === 0) {
                UiCtrl.hideList();
            } else {
                // populate list with items
                UiCtrl.populateItemList(items);
            }
             
            // load event listener
            loadEventListeners();
        }
    }
    
})(ItemCtrl, UiCtrl);

// init this app
AppCtrl.init(); 