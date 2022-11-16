/* eslint-disable no-undef */
const list = () => {
  all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const done = (index) => {
    all[index].completed = true;
  };

  let this_day = new Date().toLocaleDateString("en-CA");
  // let this_day = new Date().toISOString().split("T")[0];

  const late = () => {
    return all.filter((todo) => {
      return todo.dueDate < this_day;
    });
  };

  const now = () => {
    return all.filter((todo) => {
      return todo.dueDate === this_day;
    });
  };

  const after = () => {
    return all.filter((todo) => {
      return todo.dueDate > this_day;
    });
  };

  const display = (list) => {
    return list
      .map((todo) => {
        display_status = todo.completed ? "[x]" : "[ ]";
        display_date = todo.dueDate == this_day ? "" : todo.dueDate;

        return `${display_status} ${todo.title} ${display_date}`;
      })
      .join("\n");
  };

  return {
    all,
    add,
    done,
    late,
    now,
    after,
    display,
  };
};

module.exports = list;

