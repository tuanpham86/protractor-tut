/*
// Page objects
var Homepage = function () {
    this.get = function () {
        browser.get('baseUrl');
    };
};

describe('testApp', function () {
    Homepage.get();

    it("should load", function () {
        expect(browser.getTitle()).toBe('Meshwork');
    });
/*
    var todoPage = new TodoPage();

    describe('open page', function () {
        it('should have a hidden footer', function () {
            expect(todoPage.footer.isDisplayed()).toBeFalsy();
        });

        it('should have an empty list of todos', function () {
            expect(todoPage.todoList.count()).toEqual(0);
        });

        it('should not display clear completed button', function () {
            expect(todoPage.clearCompletedButton.isDisplayed()).toBeFalsy();
        });
    });

    describe('adding a todo', function () {
        it('should add todo to list', function () {
            todoPage.setNewTodo('test');
            browser.actions().sendKeys(protractor.Key.ENTER).perform();
            expect(todoPage.todoList.count()).toEqual(1);
        });

        it('should display the footer', function () {
            expect(todoPage.footer.isDisplayed()).toBeTruthy();
        });

        xit('should show correct remaining count', function () {
            expect(todoPage.remainingCount).toEqual(1);
        });

        it('should not display clear completed button', function () {
            expect(todoPage.clearCompletedButton.isDisplayed()).toBeFalsy();
        });
    });

    describe('completing a todo', function () {

        it('should...', function () {
            var todo = element.all(by.repeater('todo in todos')).get(0);
            expect(todo.getText()).toEqual('test');
        });

        it('should...', function () {
            element.all(by.repeater('todo in todos')).get(0).click();

        });
    });



});


// *open page
// status bar should not be visible 
// list should be empty
// focus should be on input

// *enter todo
// list should add 1
// remaining should be 1
// status bar should be visible
// focus should be on input
// should add to bottom of list

// *hover over todo and click X
// todo should be deleted

// *click checkmark
// "clear completed" button should be visible
// remaining count should drop

// *double click todo
// todo should become editable
// *click outside of input
// todo should change and become uneditable

// *switch to active tab

// * switch to completed tab

// toggle all