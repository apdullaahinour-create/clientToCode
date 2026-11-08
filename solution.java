import java.util.Arrays;
public class solution {
    public static int[] reverseArray(int[] numbers){
        ArrayStack stack= new ArrayStack();


        for (int number : numbers){
            stack.push(number);
        }
        int[] reversed = new int[numbers.length];
        int index=0;
        while (!stack.isEmpty()){
            reversed[index] = stack.pop();
            index++;
        }
        return reversed;
    }
    public static int[] reversefirstp(int[]numbers,int p){
        if(p < 0 ||p > numbers.length){
            throw new IllegalStateException("invalid p  value");
        }
        ArrayStack stack = new ArrayStack();
        int[] result= Arrays.copyOf(numbers, numbers.length);
        for(int i =0; i<p; i++){
            stack.push(numbers[i]);
        }
        for(int i =0; i<p; i++){
            result[i] =stack.pop();
        }
        return result;

    }

    public static void main(String[] args){
        int[] numbers = {10,20,30,40,50};

        int[] result=reverseArray(numbers);
        System.out.println("ORIGINAL ARRAY:"+Arrays.toString(numbers));
        System.out.println("Reversed ARRAY:"+Arrays.toString(result));
        int[] bonus=reversefirstp(numbers,3);
        System.out.println("Bonus  output:"+Arrays.toString(bonus));
    }
}