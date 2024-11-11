const todoForm = document.getElementById("todo-form");
const todoItems = document.getElementById("todo-items");
localStorage.setItem("achievement", []);

function saveAchievement() {
    const todoInput = document.getElementById("todo-input");
    console.log(todoInput.value);
    const achievement = localStorage.getItem(JSON.stringify("achievement"));
    console.log(achievement);
    if (achievement) {
        achievement.push(todoInput.value);
        console.log(achievement);
    }
    return;
}

function showAchievement() {
    const achievements = localStorage.getItem("achievement");
    // console.log(achievements)
    todoItems.innerHTML = "";
    achievements.forEach((achievement) => {
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

//function deleteAchievement() {}