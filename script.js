// Your Script here.

const lookup = {
    A: "N",
    B: "O",
    C: "P",
    D: "Q",
    E: "R",
    F: "S",
    G: "T",
    H: "U",
    I: "V",
    J: "W",
    K: "X",
    L: "Y",
    M: "Z",
    N: "A",
    O: "B",
    P: "C",
    Q: "D",
    R: "E",
    S: "F",
    T: "G",
    U: "H",
    V: "I",
    W: "J",
    X: "K",
    Y: "L",
    Z: "M",
    "?": "?",
    ",": ",",
  };
  
  function rot13(encodedStr) {
    let decodedArr = []; // Your Result goes here
    // Only change code below this line
    for(let i=0;i<encodedStr.length;i++){
        if(encodedStr.charAt(i)=='A')
        decodedArr[i]='N';

        else if(encodedStr.charAt(i)=='B')
        decodedArr[i]='O';

        else if(encodedStr.charAt(i)=='C')
        decodedArr[i]='P';

        else if(encodedStr.charAt(i)=='D')
        decodedArr[i]='Q';

        else if(encodedStr.charAt(i)=='E')
        decodedArr[i]='R';

        else if(encodedStr.charAt(i)=='F')
        decodedArr[i]='S';

        else if(encodedStr.charAt(i)=='G')
        decodedArr[i]='T';

        else if(encodedStr.charAt(i)=='H')
        decodedArr[i]='U';

        else if(encodedStr.charAt(i)=='I')
        decodedArr[i]='V';

        else if(encodedStr.charAt(i)=='J')
        decodedArr[i]='W';

        else if(encodedStr.charAt(i)=='K')
        decodedArr[i]='X';

        else if(encodedStr.charAt(i)=='L')
        decodedArr[i]='Y';

        else if(encodedStr.charAt(i)=='M')
        decodedArr[i]='Z';

        else if(encodedStr.charAt(i)=='N')
        decodedArr[i]='A';

        else if(encodedStr.charAt(i)=='O')
        decodedArr[i]='B';

        else if(encodedStr.charAt(i)=='P')
        decodedArr[i]='C';

        else if(encodedStr.charAt(i)=='Q')
        decodedArr[i]='D';

        else if(encodedStr.charAt(i)=='R')
        decodedArr[i]='E';

        else if(encodedStr.charAt(i)=='S')
        decodedArr[i]='F';

        else if(encodedStr.charAt(i)=='T')
        decodedArr[i]='G';

        else if(encodedStr.charAt(i)=='U')
        decodedArr[i]='H';

        else if(encodedStr.charAt(i)=='V')
        decodedArr[i]='I';

        else if(encodedStr.charAt(i)=='W')
        decodedArr[i]='J';

        else if(encodedStr.charAt(i)=='X')
        decodedArr[i]='K';

        else if(encodedStr.charAt(i)=='Y')
        decodedArr[i]='L';
        else if(encodedStr.charAt(i)=='Z')
        decodedArr[i]='Z';
        else if(encodedStr.charAt(i)==' ')
        decodedArr[i]=' ';
        else if(encodedStr.charAt(i)=='?')
        decodedArr[i]='?';
        else if(encodedStr.charAt(i)==',')
        decodedArr[i]=',';
    }
  
    return decodedArr; //return decodedArr
  }
  
  // You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line
  
  console.log(rot13("SERR YBIR? NPPVBWBO"));
  
  // Do not change this line
  window.rot13 = rot13;
  