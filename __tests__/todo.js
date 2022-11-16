/* eslint-disable no-undef */
const list = require("../todo");
let this_day = new Date().toLocaleDateString("en-CA");

const { all, done, add, late, now, after } = list();

describe("tasks list will be tested", () => {
  beforeAll(() => {
    add({
      title: "solving the codechef round",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
  });

  test("to add one more task in the list", () => {
    // expect(all.length).toBe(0);
    let length = all.length;

    add({
      title: "Let's do something productive",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });

    expect(all.length).toBe(length + 1);
  });

  test("To mark the tasks as complete", () => {
    expect(all[0].completed).toBe(false);
    done(0);
    expect(all[0].completed).toBe(true);
  });

  test("To get back all tasks that are late", () => {
    let todos = late();

    expect(
      todos.every((todo) => {
        return todo.dueDate < this_day;
      })
    ).toBe(true);
  });

  test("get back all tasks of this_day", () => {
    let todos = now();

    expect(
      todos.every((todo) => {
        return todo.dueDate === this_day;
      })
    ).toBe(true);
  });

  test("To get back all tasks that are due", () => {
    let todos = after();

    expect(
      todos.every((todo) => {
        return todo.dueDate > this_day;
      })
    ).toBe(true);
  });
});
