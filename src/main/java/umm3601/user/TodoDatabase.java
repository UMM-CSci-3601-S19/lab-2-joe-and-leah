package umm3601.user;

import com.google.gson.Gson;

import java.io.FileReader;
import java.io.IOException;
import java.util.Arrays;
import java.lang.String;
import java.util.Map;
import java.util.Objects;


public class TodoDatabase {
  private Todo[] allTodos;

  public TodoDatabase(String todoDataFile) throws IOException {
    Gson gson = new Gson();
    FileReader reader = new FileReader(todoDataFile);
    allTodos = gson.fromJson(reader, Todo[].class);
  }
  public Todo[] listTodos(){
    return allTodos;
  }


  public Todo[] listTodos(Map<String, String[]> queryParams) {
      Todo[] filteredTodos = allTodos;

      // Filter age if defined
      if (queryParams.containsKey("status")) {
        boolean compstat = (Objects.equals(queryParams.get("status")[0], "complete"));
        System.out.println(compstat);
        filteredTodos = filterStatusTodo(filteredTodos, compstat);
      }
      // Process other query parameters here...

      return filteredTodos;
    }


  public Todo[] filterStatusTodo(Todo[] todos, boolean compstatus) {
      return Arrays.stream(todos).filter(x -> x.status == compstatus).toArray(Todo[]::new);
    }

}
