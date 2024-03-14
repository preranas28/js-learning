// ASSINGMENT
//Given String :  "   Hey you are doing good, keep it up   ".

function stringHandsOn(){
    var sentence = "   Hey you are doing good, keep it up   ";
    console.log(`Step 1: Given String is: ${sentence} `);

    console.log(`Step 2: Length of given String is: ${sentence.length}`);

    var lengthBeforeTrim = sentence.length;
    var sentenceAfterTrim = sentence.trim();
    var lengthAfterTrim = sentenceAfterTrim.length;
    console.log(`Step 3: Length after removing spaces is : ${lengthAfterTrim}`);
    console.log(`Step 4: Total spaces removed is : ${lengthBeforeTrim-lengthAfterTrim}`);

    var sentenceTrim = sentence.trim();
    var character = sentenceTrim.charAt(0);
    console.log(`Step 5: First character after removing spaces is : ${character}`);
    var sentenceTrim = sentence.trim();

    var sentence2 = sentenceTrim.charAt(sentenceTrim.length-1);
    console.log(`Step 5: Last character after removing spaces is : ${sentence2}`);

    var totalWords = sentenceTrim.length;
    console.log(`Step 6: Count of total words available in the string after step 3 : ${totalWords}`);

    var result = sentence.search("good");
    console.log(`Step 7:"good" is available at ${result}`);

    var output = sentenceTrim.substring (22 ,);  
    console.log(`Step 8: Substring starting from index 22 is : ${output}`);

    var result = sentenceTrim.endsWith("up");
    console.log(`Step 9: Do string ends with "up" : ${result}`);

    var result = sentenceTrim.startsWith("Hey");
    console.log(`Step 10: Do string starts with "Hey" : ${result}`);

}
stringHandsOn();