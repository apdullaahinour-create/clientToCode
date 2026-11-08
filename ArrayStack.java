public class ArrayStack{

    private int[] elements;
    private int top;
    public ArrayStack(){
        elements = new int[2];
        top = 0;

    }
    public void push(int topvalue){
        if(top == elements.length){
            expandcapacity();
        }
        elements[top]= topvalue;
        top++;
    }
    public int pop(){
        if(isEmpty()){
            throw new IllegalStateException("Stack is empty");
        }
        top--;
        int topvalue=elements[top];
        elements[top] = 0;
        return topvalue;
    }
    public int peek(){
        if(isEmpty()){
            throw new IllegalStateException("Stack is empty");
        }
        return elements[top-1];

    }

    public boolean isEmpty(){
        return top == 0;
    }
    public int size(){
        return top;
    }
    private void expandcapacity(){
        int[] newArray=new int[elements.length*2];
        for(int i=0; i< elements.length; i++){
            newArray[i] = elements[i];
        }
        elements = newArray;
    }
}