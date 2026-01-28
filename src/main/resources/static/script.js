const BASE_URL = "http://localhost:8081/employees";

function addEmployee() {
    const employee = {
        id: document.getElementById("id").value,
        name: document.getElementById("name").value,
        role: document.getElementById("role").value,
        salary: document.getElementById("salary").value
    };

    fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(employee)
    })
    .then(() => {
        alert("Employee added");
        getEmployees();
    });
}

function getEmployees() {
    fetch(BASE_URL)
        .then(res => res.json())
        .then(data => {
            const list = document.getElementById("employeeList");
            list.innerHTML = "";

            data.forEach(emp => {
                const li = document.createElement("li");

                li.innerHTML = `
                    <span>
                        <b>${emp.id}</b> | ${emp.name} | ${emp.role} | ₹${emp.salary}
                    </span>
                    <div class="actions">
                        <button class="edit" onclick="fillUpdate(${emp.id}, '${emp.name}', '${emp.role}', ${emp.salary})">Edit</button>
                        <button class="delete" onclick="deleteEmployee(${emp.id})">Delete</button>
                    </div>
                `;

                list.appendChild(li);
            });
        });
}

function deleteEmployee(id) {
    fetch(`${BASE_URL}/${id}`, {
        method: "DELETE"
    })
    .then(() => {
        alert("Employee deleted");
        getEmployees();
    });
}

function fillUpdate(id, name, role, salary) {
    document.getElementById("id").value = id;
    document.getElementById("name").value = name;
    document.getElementById("role").value = role;
    document.getElementById("salary").value = salary;
}

function updateEmployee() {
    const id = document.getElementById("id").value;

    const employee = {
        name: document.getElementById("name").value,
        role: document.getElementById("role").value,
        salary: document.getElementById("salary").value
    };

    fetch(`${BASE_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(employee)
    })
    .then(() => {
        alert("Employee updated");
        getEmployees();
    });
}