package umm3601.user;

import com.google.gson.Gson;

import java.io.FileReader;
import java.io.IOException;

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

}
