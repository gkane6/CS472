
public class Quiz {
  int index;
  int[] responses={9,8,36,13,32};
  String[] seq={"3, 1, 4, 1, 5,","1, 1, 2, 3, 5,","1, 4, 9, 16, 25,","2, 3, 5, 7, 11,","1, 2, 4, 8, 16,"};

  public Quiz(){
     this.index = 0;
  }

  public void restart(){
    this.index = 0;
  }

    // gives a number to check if it is correct
    public boolean isCorrect(int val){
      if (responses[this.index] == val) {
        if((this.index +1) < 5){
          this.index++;
        }

        return true;
      } return false;
        //return responses[this.index]==val
      }

      public void scoreAnswer(){
          System.out.println("score updated ");
      }

    public int getNumQuestions(){
      return 5;
    } // returns how many questions there are (5)

    public int getNumCorrect(){
      return this.index;
    } // returns how many numbers the user has correctly guessed so far


    public int getCurrentQuestionIndex(){
      return this.index;
    } // returns the index of the current question the user should answer

    /*public String toString(){
      return ;
    }*/
}
