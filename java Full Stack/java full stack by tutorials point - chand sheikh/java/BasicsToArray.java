public class BasicsToArray {
    public static void main(String[] args) {

        System.out.println("java variables example");
        Variable variable = new Variable(10);
        variable.printVariable();

        System.out.println("\n\n\n\n\n\n\n\n\n\n\n java integer data types example");


        DataTypes dataTypes = new DataTypes();
        dataTypes.integerDataTypes();

        System.out.println("\n\n\n\n\n\n\n\n\n\n\n java float data types example")  ;

        dataTypes.floatDataTypes();

        System.out.println("\n\n\n\n\n\n\n\n\n\n\n java character data types example")  ;

        dataTypes.charDataTypes();

        System.out.println("\n\n\n\n\n\n\n\n\n\n\n java character data types example")  ;

        dataTypes.booleanDataTypes();

        System.out.println("\n\n\n\n\n\n\n\n\n\n\n java String data types example")  ;

        dataTypes.stringDataTypes();
    }
}

class Variable{

    int nonStatic1 ;  // declaring non static variable
    int nonStatic2 ;  // declaring non static variable
    int nonStatic3 ;  // declaring non static variable
    int nonStatic4 = 40 ;  // declaring and initializing non static variable

    
    static int onlyStatic1 ;  // declaring static variable 
    static int onlyStatic2 = 200 ;  // declaring and initializing static variable 

    final int final1 = 1000 ;  // declaring and initializing final-variable (constant) 

    Variable(int nonStatic1){
        this.nonStatic1 =nonStatic1; // initializing non static variable by constructor
        // this.nonStatic1 is global variable
        // Variable(int nonStatic1) :- nonStatic1 is passing as a argument by constructor

        this.nonStatic2 = 20; // this.nonStatic2 is act as a global variable

        nonStatic3 = 30; // nonStatic3 is act as a global variable :-
        // if nonStatic3 is not passing as a argument by constructor
         // if nonStatic3 is not assigned by same name of an argument which is passed  by constructor
    }



    void printVariable(){

        int LocalVariable1 ; // declaring Local variable
        LocalVariable1 =110; // initializing Local variable
        int LocalVariable2 = 120; // declaring and initializing Local variable

        System.out.println("Hello World");
        
        Variable nonStaticVariable1 = new Variable(10);
        
        System.out.println("value of 'nonStatic1' nonstatic variable id :-   " + nonStaticVariable1.nonStatic1);
        System.out.println("value of 'nonStatic2' nonstatic variable id :-   " + nonStaticVariable1.nonStatic2);
        System.out.println("value of 'nonStatic3' nonstatic variable id :-   " + nonStaticVariable1.nonStatic3);
        System.out.println("value of 'nonStatic4' nonstatic variable id :-   " + nonStaticVariable1.nonStatic4);
        
        Variable.onlyStatic1 = 100; //initializing static variable 
        
        System.out.println("value of 'onlyStatic1' static variable id with object :-   " + nonStaticVariable1.onlyStatic1);
        System.out.println("value of 'onlyStatic2' static variable id with object :-   " + nonStaticVariable1.onlyStatic2);

        System.out.println("value of 'onlyStatic1' static variable id with class :-   " + Variable.onlyStatic1);
        System.out.println("value of 'onlyStatic2' static variable id with class :-   " + Variable.onlyStatic2);

        System.out.println("value of 'final1' finaL variable id with class :-   " + nonStaticVariable1.final1);

        System.out.println("value of 'LocalVariable1' LocaL variable id with class :-   " + LocalVariable1);
        System.out.println("value of 'LocalVariable2' LocaL variable id with class :-   " + LocalVariable2);
    }

}


class DataTypes{

     void integerDataTypes(){

        //  for byte
        byte PosMyByte1 = 10;
        byte NegMyByte1 = -1;

        System.out.println("value of 'PosMyByte1'  variable   :-   " + PosMyByte1);
        System.out.println("value of 'NegMyByte1'  variable   :-   " + NegMyByte1);

        //  for short
        short PosMyShort1 = 20;
        short NegMyShort1 = -20;

        System.out.println("value of 'PosMyShort1'  variable   :-   " + PosMyShort1);
        System.out.println("value of 'NegMyShort1'  variable   :-   " + NegMyShort1);

        //  for int
        int PosMyInt1 = 30;
        int NegMyInt1 = -30;

        System.out.println("value of 'PosMyInt1'  variable   :-   " + PosMyInt1);
        System.out.println("value of 'NegMyInt1'  variable   :-   " + NegMyInt1);



        // for Long data-types , you should end the value with an "L" or "l" , iƒ value is too large:
        long PosMyLong1 = 12000000000l;  //  the value end with an "l"
        long NegMyLong1 = -12000000000l;  //  the value end with an "l"
        long PosMyLong2 = 13000000000L;  //  the value end with an "L"
        long NegMyLong2 = -13000000000L;  //  the value end with an "L"
        // iƒ value is  big (not  between -2147483648 to 2147483647):- 
        // then you must add "L" or "l", otherwise you get error

        System.out.println("value of 'PosMyLong1'  variable   :-   " + PosMyLong1);
        System.out.println("value of 'NegMyLong1'  variable   :-   " + NegMyLong1);
        System.out.println("value of 'PosMyLong2'  variable   :-   " + PosMyLong2);
        System.out.println("value of 'NegMyLong2'  variable   :-   " + NegMyLong2);



        // iƒ value is  small ( between -2147483648 to 2147483647):-
        // then you can skip "L" or "l"
        //  because of type casting :- value is considered as integer
        long PosMyLong3 = 14000;  //  you can skip to add "L" at the end of value
        long NegMyLong3 = -14000;  //  you can skip to add "L" at the end of value

        System.out.println("value of 'PosMyLong3'  variable   :-   " + PosMyLong3);
        System.out.println("value of 'NegMyLong3'  variable   :-   " + NegMyLong3);


        //  iƒ value is  small (between -2147483648 to 2147483647)      :- 
        //  and you add "L" or "l" at the end of value
        //  because of type casting     :-      value is considered as long
        long PosMyLong4 = 15000L;   //  the value end with an       "L"
        long NegMyLong4 = -15000L;  //  the value end with an       "L"
        long PosMyLong5 = 16000l;   //  the value end with an       "l"
        long NegMyLong5 = -16000l;  //  the value end with an       "l"

        System.out.println("value of 'PosMyLong4'  variable   :-   " + PosMyLong4);
        System.out.println("value of 'NegMyLong4'  variable   :-   " + NegMyLong4);
        System.out.println("value of 'PosMyLong5'  variable   :-   " + PosMyLong5);
        System.out.println("value of 'NegMyLong5'  variable   :-   " + NegMyLong5);



     }

     void floatDataTypes(){

        // for float data-types , you should end the value with an "F" or "f" , iƒ value is storing 6 to 7 decimal digits:
        float PosMyFloat1 = 17.23f;  //  the value end with an "f"
        float NegMyFloat1 = -17.23f;  //  the value end with an "f"
        float PosMyFloat2 = 18.24F;  //  the value end with an "F"
        float NegMyFloat2 = -18.24F;  //  the value end with an "F"

        System.out.println("value of 'PosMyFloat1'  variable   :-   " + PosMyFloat1);
        System.out.println("value of 'NegMyFloat1'  variable   :-   " + NegMyFloat1);
        System.out.println("value of 'PosMyFloat2'  variable   :-   " + PosMyFloat2);
        System.out.println("value of 'NegMyFloat2'  variable   :-   " + NegMyFloat2);


        // for double data-types , you may end the value with an "D" or "d" , iƒ value is storing 15 decimal digits:
        double PosMyDouble1 = 19.2567d;  //  the value end with an "d"
        double NegMyDouble1 = -19.2567d;  //  the value end with an "d"
        double PosMyDouble2 = 20.2668D;  //  the value end with an "D"
        double NegMyDouble2 = -20.2668D;  //  the value end with an "D"

        double PosMyDouble3 = 21.2787;  //  you can skip to add "d" at the end of value
        double NegMyDouble3 = -21.2787;  //  you can skip to add "d" at the end of value
        double PosMyDouble4 = 22.2878;  //  you can skip to add "D" at the end of value
        double NegMyDouble4 = -22.2878;  //  you can skip to add "D" at the end of value

        System.out.println("value of 'PosMyDouble1'  variable   :-   " + PosMyDouble1);
        System.out.println("value of 'NegMyDouble1'  variable   :-   " + NegMyDouble1);
        System.out.println("value of 'PosMyDouble2'  variable   :-   " + PosMyDouble2);
        System.out.println("value of 'NegMyDouble2'  variable   :-   " + NegMyDouble2);
        System.out.println("value of 'PosMyDouble3'  variable   :-   " + PosMyDouble3);
        System.out.println("value of 'NegMyDouble3'  variable   :-   " + NegMyDouble3);
        System.out.println("value of 'PosMyDouble4'  variable   :-   " + PosMyDouble4);
        System.out.println("value of 'NegMyDouble4'  variable   :-   " + NegMyDouble4);


        /* 
        A floating point number can also be a scientific number 
        with an "e" or "E" to indicate the power of 10:-

        12e4 =  12 * 10 * 10 * 10 * 10 = 120000
        12E4 =  12 * 10 * 10 * 10 * 10 = 120000
        12e-4 = 12 * 0.1 * 0.1 * 0.1 * 0.1 = 0.0012
        12E-4 = 12 * 0.1 * 0.1 * 0.1 * 0.1 = 0.0012
        */

        float PosMyFloatPosScientific1 =  17.23e4f;     //  the value end with an "f"  // Positive scientific number
        float NegMyFloatPosScientific1 = -17.23e4f;     //  the value end with an "f"  // Positive scientific number
        float PosMyFloatPosScientific2 =  18.24E4F;     //  the value end with an "F"  // Positive scientific number
        float NegMyFloatPosScientific2 = -18.24E4F;     //  the value end with an "F"  // Positive scientific number

        float PosMyFloatNegScientific3 =  17.23e-4f;    //  the value end with an "f"  // Negative scientific number
        float NegMyFloatNegScientific3 = -17.23e-4f;    //  the value end with an "f"  // Negative scientific number
        float PosMyFloatNegScientific4 =  18.24E-4F;    //  the value end with an "F"  // Negative scientific number
        float NegMyFloatNegScientific4 = -18.24E-4F;    //  the value end with an "F"  // Negative scientific number

        double PosMyDoublePosScientific1 =  19.2567e4d;     //  the value end with an "d"  // Positive scientific number
        double NegMyDoublePosScientific1 = -19.2567e4d;    //  the value end with an "d"  // Positive scientific number
        double PosMyDoublePosScientific2 =  20.2668e4D;     //  the value end with an "D"  // Positive scientific number
        double NegMyDoublePosScientific2 = -20.2668e4D;    //  the value end with an "D"  // Positive scientific number

        double PosMyDoublePosScientific3 =  19.2567E4d;     //  the value end with an "d"  // Positive scientific number
        double NegMyDoublePosScientific3 = -19.2567E4d;    //  the value end with an "d"  // Positive scientific number
        double PosMyDoublePosScientific4 =  20.2668E4D;     //  the value end with an "D"  // Positive scientific number
        double NegMyDoublePosScientific4 = -20.2668E4D;    //  the value end with an "D"  // Positive scientific number

        double PosMyDoublePosScientific5 =  21.2787e4;      //  you can skip to add "d" at the end of value  // Positive scientific number
        double NegMyDoublePosScientific5 = -21.2787e4;     //  you can skip to add "d" at the end of value  // Positive scientific number
        double PosMyDoublePosScientific6 =  22.2878E4;      //  you can skip to add "D" at the end of value  // Positive scientific number
        double NegMyDoublePosScientific6 = -22.2878E4;     //  you can skip to add "D" at the end of value  // Positive` scientific number
        
        double PosMyDoubleNegScientific7 =  19.2567e-4d;     //  the value end with an "d"  // Negative scientific number
        double NegMyDoubleNegScientific7 = -19.2567e-4d;    //  the value end with an "d"  // Negative scientific number
        double PosMyDoubleNegScientific8 =  20.2668e-4D;     //  the value end with an "D"  // Negative scientific number
        double NegMyDoubleNegScientific8 = -20.2668e-4D;    //  the value end with an "D"  // Negative scientific number

        double PosMyDoubleNegScientific9 =   19.2567E-4d;     //  the value end with an "d"  // Negative scientific number
        double NegMyDoubleNegScientific9 =  -19.2567E-4d;    //  the value end with an "d"  // Negative scientific number
        double PosMyDoubleNegScientific10 =  20.2668E-4D;    //  the value end with an "D"  // Negative scientific number
        double NegMyDoubleNegScientific10 = -20.2668E-4D;   //  the value end with an "D"  // Negative scientific number

        double PosMyDoubleNegScientific11 =  21.2787e-4;     //  you can skip to add "d" at the end of value  // Negative scientific number
        double NegMyDoubleNegScientific11 = -21.2787e-4;    //  you can skip to add "d" at the end of value  // Negative scientific number
        double PosMyDoubleNegScientific12 =  22.2878E-4;     //  you can skip to add "D" at the end of value  // Negative scientific number
        double NegMyDoubleNegScientific12 = -22.2878E-4;    //  you can skip to add "D" at the end of value  // Negative scientific number

        System.out.println("value of 'PosMyFloatPosScientific1'  variable   :-   " + PosMyFloatPosScientific1);
        System.out.println("value of 'NegMyFloatPosScientific1'  variable   :-   " + NegMyFloatPosScientific1);
        System.out.println("value of 'PosMyFloatPosScientific2'  variable   :-   " + PosMyFloatPosScientific2);
        System.out.println("value of 'NegMyFloatPosScientific2'  variable   :-   " + NegMyFloatPosScientific2);

        System.out.println("value of 'PosMyFloatNegScientific3'  variable   :-   " + PosMyFloatNegScientific3);
        System.out.println("value of 'NegMyFloatNegScientific3'  variable   :-   " + NegMyFloatNegScientific3);
        System.out.println("value of 'PosMyFloatNegScientific4'  variable   :-   " + PosMyFloatNegScientific4);
        System.out.println("value of 'NegMyFloatNegScientific4'  variable   :-   " + NegMyFloatNegScientific4);

        System.out.println("value of 'PosMyDoublePosScientific1'  variable   :-   " + PosMyDoublePosScientific1);
        System.out.println("value of 'NegMyDoublePosScientific1'  variable   :-   " + NegMyDoublePosScientific1);
        System.out.println("value of 'PosMyDoublePosScientific2'  variable   :-   " + PosMyDoublePosScientific2);
        System.out.println("value of 'NegMyDoublePosScientific2'  variable   :-   " + NegMyDoublePosScientific2);
        System.out.println("value of 'PosMyDoublePosScientific3'  variable   :-   " + PosMyDoublePosScientific3);
        System.out.println("value of 'NegMyDoublePosScientific3'  variable   :-   " + NegMyDoublePosScientific3);
        System.out.println("value of 'PosMyDoublePosScientific4'  variable   :-   " + PosMyDoublePosScientific4);
        System.out.println("value of 'NegMyDoublePosScientific4'  variable   :-   " + NegMyDoublePosScientific4);
        System.out.println("value of 'PosMyDoublePosScientific5'  variable   :-   " + PosMyDoublePosScientific5);
        System.out.println("value of 'NegMyDoublePosScientific5'  variable   :-   " + NegMyDoublePosScientific5);
        System.out.println("value of 'PosMyDoublePosScientific6'  variable   :-   " + PosMyDoublePosScientific6);
        System.out.println("value of 'NegMyDoublePosScientific6'  variable   :-   " + NegMyDoublePosScientific6);

        System.out.println("value of 'PosMyDoubleNegScientific7'  variable   :-   " + PosMyDoubleNegScientific7);
        System.out.println("value of 'NegMyDoubleNegScientific7'  variable   :-   " + NegMyDoubleNegScientific7);
        System.out.println("value of 'PosMyDoubleNegScientific8'  variable   :-   " + PosMyDoubleNegScientific8);
        System.out.println("value of 'NegMyDoubleNegScientific8'  variable   :-   " + NegMyDoubleNegScientific8);
        System.out.println("value of 'PosMyDoubleNegScientific9'  variable   :-   " + PosMyDoubleNegScientific9);
        System.out.println("value of 'NegMyDoubleNegScientific9'  variable   :-   " + NegMyDoubleNegScientific9);
        System.out.println("value of 'PosMyDoubleNegScientific10'  variable   :-   " + PosMyDoubleNegScientific10);
        System.out.println("value of 'NegMyDoubleNegScientific10'  variable   :-   " + NegMyDoubleNegScientific10);
        System.out.println("value of 'PosMyDoubleNegScientific11'  variable   :-   " + PosMyDoubleNegScientific11);
        System.out.println("value of 'NegMyDoubleNegScientific11'  variable   :-   " + NegMyDoubleNegScientific11);
        System.out.println("value of 'PosMyDoubleNegScientific12'  variable   :-   " + PosMyDoubleNegScientific12);
        System.out.println("value of 'NegMyDoubleNegScientific12'  variable   :-   " + NegMyDoubleNegScientific12);
    
    }

    void charDataTypes(){
        // The character must be surrounded by single quotes, like 'A' or 'c'
        char MyChar1 = 'a';  
        char MyChar2 = 'A';  
        char MyChar3 = 'b';  
        char MyChar4 = 'B';  
        char MyChar5 = '0';  
        char MyChar6 = '1';  
        char MyChar7 = '2';  
        char MyChar8 = '@';  
        char MyChar9 = '%';  
        char MyChar10 = '*';  
        char MyChar11 = '{';  
        char MyChar12 = '}';  
        char MyChar13 = '(';  
        char MyChar14 = ')';  

        System.out.println("value of 'MyChar1'  variable   :-   " + MyChar1);
        System.out.println("value of 'MyChar2'  variable   :-   " + MyChar2);
        System.out.println("value of 'MyChar3'  variable   :-   " + MyChar3);
        System.out.println("value of 'MyChar4'  variable   :-   " + MyChar4);
        System.out.println("value of 'MyChar5'  variable   :-   " + MyChar5);
        System.out.println("value of 'MyChar6'  variable   :-   " + MyChar6);
        System.out.println("value of 'MyChar7'  variable   :-   " + MyChar7);
        System.out.println("value of 'MyChar8'  variable   :-   " + MyChar8);
        System.out.println("value of 'MyChar9'  variable   :-   " + MyChar9);
        System.out.println("value of 'MyChar10'  variable   :-   " + MyChar10);
        System.out.println("value of 'MyChar11'  variable   :-   " + MyChar11);
        System.out.println("value of 'MyChar12'  variable   :-   " + MyChar12);
        System.out.println("value of 'MyChar13'  variable   :-   " + MyChar13);
        System.out.println("value of 'MyChar14'  variable   :-   " + MyChar14);

    }

    void booleanDataTypes(){
        // Java has a boolean data type, which can only take the values true or false:
        boolean MyBoolean1 = true;  
        boolean MyBoolean2 = false;  

        System.out.println("value of 'MyBoolean1'  variable   :-   " + MyBoolean1);
        System.out.println("value of 'MyBoolean2'  variable   :-   " + MyBoolean2);
    }

    void stringDataTypes(){
        String MyString = "Hello Abhay";
        System.out.println("value of 'MyString'  variable   :-   " + MyString);

    }
}


class BigDecimalExample
{
	void bigDecimalExample()
	{
		// Create two new BigDecimals
		BigDecimal bd1 = new BigDecimal("124567890.0987654321");
		BigDecimal bd2 = new BigDecimal("987654321.123456789");
		
		// Addition of two BigDecimals
		bd1 = bd1.add(bd2);
		System.out.println("BigDecimal1 = " + bd1);

		// Multiplication of two BigDecimals
		bd1 = bd1.multiply(bd2);
		System.out.println("BigDecimal1 = " + bd1);

		// Subtraction of two BigDecimals
		bd1 = bd1.subtract(bd2);
		System.out.println("BigDecimal1 = " + bd1);

		// Division of two BigDecimals
		bd1 = bd1.divide(bd2);
		System.out.println("BigDecimal1 = " + bd1);

		// BigDecima1 raised to the power of 2
		bd1 = bd1.pow(2);
		System.out.println("BigDecimal1 = " + bd1);

		// Negate value of BigDecimal1
		bd1 = bd1.negate();
		System.out.println("BigDecimal1 = " + bd1);
	}	
}		
