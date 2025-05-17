class Person {
    private String name;
    private int age;
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    void Display_Info() {
        System.out.print(name + " is " + age + " years old");
    }
}

public class c_java {
    public static void main(String[] args) {
        Person person = new Person("Alice", 25);
        person.Display_Info();
    }
}