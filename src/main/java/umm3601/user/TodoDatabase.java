package umm3601.user;

import com.google.gson.Gson;

import java.io.FileReader;
import java.io.IOException;
import java.util.Arrays;
import java.util.Map;

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

    if (queryParams.containsKey("limit")) {
      int limit = Integer.parseInt(queryParams.get("limit")[0]);
      filteredTodos = Arrays.copyOfRange(allTodos,0,limit);
    }

    return filteredTodos;
  }

}
