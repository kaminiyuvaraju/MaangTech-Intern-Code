  let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            let length = text.length;  // length
            document.getElementById("length").innerHTML = length;

            let text2 = "Hello World";
            let char = text2.charAt(0); //charAt()
            document.getElementById("char").innerHTML = char;

            let text3 = "HELLO WORLD"; //charCodeAt()
            document.getElementById("charCodeAt").innerHTML = text3.charCodeAt(0); 
            
            
            const name = "KaminiYuvaraju";
            let letter = name.at(2); // at()
            document.getElementById("at").innerHTML = letter;


            let text4 = "Apple,Banana,Kiwi";
            let part = text4.slice(7,13);  //slice
            document.getElementById("slice").innerHTML = part;

            let str = "Apple, Banana, Kiwi";
            let part2 = str.substring(7, 13);  //substring()
            document.getElementById("substring").innerHTML = part2;

            let str2 = "Apple, Banana, Kiwi";
            let part3= str2.substr(7, 6); //substr
            document.getElementById("substr").innerHTML = part3;

            let text5 = "Hello World!";
            let upCase = text5.toUpperCase(); //toUpperCase()
            document.getElementById("upcase").innerHTML = upCase;

            let text6 = "Hello World!";       // String
            let lwCase = text6.toLowerCase();  // text2 is text1 converted to lower
            document.getElementById("lwcase").innerHTML = lwCase;

            let text7 = "Hello";
            let text8 = "World";
            let concat = text7.concat(" ", text8);  //concat()
            document.getElementById("concat").innerHTML = concat;

            let text9 = "      Hello World!      ";
            let text10 = text9.trim();  //trim()
            document.getElementById("trim").innerHTML = text10;


            let text11 = "     Hello World!     ";
            let text12 = text11.trimStart();
            document.getElementById("trimstart").innerHTML = text12;

            let text13 = "     Hello World!     ";
            let text14 = text13.trimStart();
            document.getElementById("trimend").innerHTML = text14;