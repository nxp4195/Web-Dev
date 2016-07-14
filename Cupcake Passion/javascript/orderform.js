function createForm()
{   
    var createform = document.createElement('form'); 
	createform.setAttribute("action", "storageStart.html");        
	createform.setAttribute("method", "get");  
   
	document.body.appendChild(createform);

    var heading = document.createElement('h2'); 
    var headtext = document.createTextNode("Contact Form ");
    heading.appendChild(headtext);
	createform.appendChild(heading);

    var linebreak = document.createElement('br');
	createform.appendChild(linebreak);

    var inputelement = document.createElement('input'); 
	 
	inputelement.setAttribute("name", "dname");
    inputelement.setAttribute("id", "dname");
    if(localStorage){
        if(localStorage.getItem("username")){
           inputelement.setAttribute("value",localStorage.getItem('username'));
           }
        }
    else{
            if(GetCookie('username')){
                inputelement.setAttribute("value",GetCookie('username'));
            }
        }
    
	createform.appendChild(inputelement);
    
    var namelabel = document.createElement('label');      
    namelabel.setAttribute("type", "text");
    var text = document.createTextNode("Name ");
    namelabel.appendChild(text);
    document.getElementsByTagName("form")[0].insertBefore(namelabel,document.getElementsByTagName("form")[0].childNodes[2]);
	
    var linebreak = document.createElement('br');
	createform.appendChild(linebreak);

    var emaillabel = document.createElement('label');  
    var text1 = document.createTextNode("Email ");
    emaillabel.appendChild(text1);
	createform.appendChild(emaillabel);

    var emailelement = document.createElement('input'); 
	emailelement.setAttribute("type", "text");
	emailelement.setAttribute("name", "demail");
    emailelement.setAttribute("id", "demail");
    if(localStorage){
        if(localStorage.getItem("email")){
           emailelement.setAttribute("value",localStorage.getItem('email'));
           }
    }
        else{
            if(GetCookie('email')){
                emailelement.setAttribute("value",GetCookie('email'));
            }
        }
    
	createform.appendChild(emailelement);

    var emailbreak = document.createElement('br');
	createform.appendChild(emailbreak);
    
    var disclaimer = document.createElement('h4'); // Heading of form
    var bottomtext = document.createTextNode("*Only Pickup service available*");
    disclaimer.appendChild(bottomtext);
	createform.appendChild(disclaimer)

    var messagebreak = document.createElement('br');
	createform.appendChild(messagebreak);

    // Append Submit Button
    var submitelement = document.createElement('input'); 
    
    submitelement.setAttribute("type", "submit");
	submitelement.setAttribute("name", "dsubmit");
	submitelement.setAttribute("value", "Submit");
	createform.appendChild(submitelement);
    
    document.getElementsByTagName("form")[0].onsubmit =function(){ 
                       return formvalidate();}
    }
//form validations
    function formvalidate(){
        var testname = document.getElementById("dname").value;
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(testname == null || testname == "" || testname == " " ) 
        {
             window.alert("Please Enter Your Name");
            {
                return false;
            }

        }
//test email
        var testemail = document.getElementById("demail").value;
        if(!(testemail.match(mailformat))) {
              window.alert("Please Enter Your Email Id");
            {
                return false;
            }
              
        } 
        saveName(testname,testemail,displayName);
    }  

//localstorage
    function saveName(testname,testemail,displayName)
{
            if(localStorage)
            {
                        localStorage.setItem('Cupcake', displayName);
                        localStorage.setItem('username', testname);
                        localStorage.setItem('email', testemail);    
            }
            else
            {
                
					   SetCookie('username',testname);
			           SetCookie('email',testemail);
                       SetCookie('Cupcake',displayName);
			          
		            
            }   
} 
        
        
