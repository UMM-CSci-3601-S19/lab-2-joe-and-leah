package umm3601.user;

import org.junit.Test;

import java.io.IOException;

import static org.junit.Assert.assertEquals;

public class FullTodoListFromDB {
  @Test
  public void totalUserCount() throws IOException {
    TodoDatabase db = new TodoDatabase("src/main/data/todos.json");
    Todo[] allTodos = db.listTodos();
    assertEquals("Incorrect total number of todos", 300, allTodos.length);
  }
}
