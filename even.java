public class{
    public static int EvenNumbers(int[] arr) {
        // Initialize a variable to store the sum of even numbers
        int evenSum = 0;

        // Iterate through the array
        for (int num : arr) {
            // Check if the number is even
            if (num % 2 == 0) {
                // Add the even number to the sum
                evenSum += num;
            }
        }

        // Return the sum of even numbers
        return evenSum;
    }

    public static void main(String[] args) {
        // Example usage
        int[] arrayNumbers = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
        int result = addEvenNumbers(arrayNumbers);
        System.out.println("Sum of even numbers: " + result);
    }
}
