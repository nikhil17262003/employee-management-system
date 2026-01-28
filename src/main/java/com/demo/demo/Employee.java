package com.demo.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Employee {

    @Id
    private int id;
    private String name;
    private String role;
    private int salary;

    public Employee() {}

    public Employee(int id, String name, String role, int salary) {
        this.id = id;
        this.name = name;
        this.role = role;
        this.salary = salary;
    }

    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getRole() { return role; }
    public void setRole(String role) { this.role = role; }

    public int getSalary() { return salary; }
    public void setSalary(int salary) { this.salary = salary; }
}