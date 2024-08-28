//All code written by me no searching just for Brain_Storming
 const st = [];

for (let i = 0; i < s.length; i++) {
    if (s[i] == "(" || s[i] == "[" || s[i] == "{") {
        st.push(s[i])

    }
    else if (st.empty()) {
        return false
    }
    let char c  = st.top() ,st.pop();
    else if(    s[i] ==")" && c =="("  || s[i] =="}" && c =="{" || s[i] =="]" && c =="["){
     return true   
    }
    else return false


 

}
if (st.empty ()) return true 
else return false 