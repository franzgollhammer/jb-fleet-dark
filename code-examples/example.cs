using System;
using System.Threading.Tasks;

namespace ThemeShowcase
{
    // Class Definition
    public class Person
    {
        // Properties
        public string Name { get; set; }
        public int Age { get; set; }

        // Constructor
        public Person(string name, int age)
        {
            Name = name;
            Age = age;
        }

        // Method
        public void Greet()
        {
            Console.WriteLine($"{Name} says Hello!");
        }
    }

    class Program
    {
        // Asynchronous Method
        public static async Task FetchDataAsync()
        {
            await Task.Delay(2000);
            Console.WriteLine("Data fetched!");
        }

        // Main Method
        static async Task Main(string[] args)
        {
            // Variables
            string message = "Hello, World!";
            int count = 10;

            // Output to Console
            Console.WriteLine(message);
            Console.WriteLine($"Count is: {count}");

            // Object Instantiation and Method Calling
            var person = new Person("Alice", 30);
            person.Greet();

            // String Interpolation
            string greeting = $"My name is {person.Name} and I am {person.Age} years old.";
            Console.WriteLine(greeting);

            // Calling Async Method
            await FetchDataAsync();
        }
    }
}
