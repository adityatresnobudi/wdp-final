const todoForm = document.getElementById("todo-form");
const todoItems = document.getElementById("todo-items");
const initial = {list: []};
localStorage.setItem("achievement", JSON.stringify(initial));
const achievement = localStorage.getItem("achievement");
console.log(JSON.parse(achievement));

function saveAchievement() {
    const todoInput = document.getElementById("todo-input");
    console.log(todoInput.value);
    if (achievement) {
        let ac = JSON.parse(achievement);
        ac.list.push(todoInput.value);
        localStorage.setItem("achievement", JSON.stringify(ac));
    }
    return;
}

function showAchievement() {
    todoItems.innerHTML = "";
    let ac = JSON.parse(achievement)
    console.log(ac);
    achievement.list.forEach((achievement) => {
        let list = `
            <li>
                <input type="checkbox" value="" id="checkBoxAchievement">
                <p>${achievement}<p>
                <button class="btn btn-danger" style="color: black">X</button>
            </li>
        `
        todoItems.innerHTML += list;
    })
}

todoForm.addEventListener("submit", function (event) {
    event.preventDefault();

    saveAchievement();
    showAchievement();
})