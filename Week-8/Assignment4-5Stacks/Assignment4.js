

function validateParenthesis(str){
let st= new Stack()

for (i=0;i<str.length;i++){
    let char=str[i]
    if (char == '{' || char == '(' || char == '['){
        st.push(char)
    }

    else if(char == '}' || char == ']' || char == ')'){
        if (st.isEmpty()){
            return false
        }

        let last=st.pop()
        if (char ==' )' && !last == '(' || char ==' }' && !last == '{' || char ==' ]' && !last == '[' ){
            return false
        }
    }
}
    return st.isEmpty()
}


let str = "{([])}"