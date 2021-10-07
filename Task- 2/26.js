// Display the asterisk pattern as shown below(No loop needed)
function p(r) 
{

  if (r == 0)
  {
    return "";
  }
         let t = "";
        pattern(6);
        function pattern(s) 
        {
        if (s == 0) {
        return "";
        }
        t = t + "*" + "";
        if (s == 1) {
        console.log(t);
        }
        return pattern(s - 1);
        }

  return p(r - 1)
}


p(6);


