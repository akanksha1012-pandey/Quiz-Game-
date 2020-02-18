var user = [{
             'firstname' : 'Akanksha' ,
             'lastname': 'pandey',
             'email' : 'akankshapandey1012@gmail.com',
             'password' : 'akku1012',
             'isverified' : true,
             'ispaid' : false,
             'mobileno' : 9907513344
         }, {
             
             'firstname' : 'sid',
             'lastname'  : 'verma',
             'email' : 'sid45@edwisor.com',
             'password' : 'secondpassword',
             'isverified' : true,
             'ispaid' : true,
             'mobileno' : 778945321
         }, {
         	 'firstname' : 'rishab',
         	 'lastname' : 'shukla',
         	 'email' : 'rishukla@rediff.com',
         	 'password' : 'thirdpassword',
             'isverified' : true,
             'ispaid' : false,
         	 'mobileno' : 785643201
         }
         ]

var checklogin = function(email, password, alluser)  {
	var isuserfound = false
	var passwordcorrect = false
	for(currentuser in alluser){
		console.log(alluser[currentuser])
		if (alluser[currentuser]["email"]==email) {
			if (alluser[currentuser]["password"]==password) {
				isuserfound = true
				passwordcorrect = true
				break 
			} else {
				isuserfound = true
				passwordcorrect = false
				break
			} 
		 } else {
				isuserfound = false
				}
			}
		if (isuserfound==true && passwordcorrect==true){
			alert('you are logged in')
		} else if (isuserfound==true && passwordcorrect==false){
			alert('provided password is incorrect')
		} else {
			alert('no user is found with this email')
        }
     }
   var email = prompt('enter your email')
   var password = prompt('enter your password')
   checklogin(email, password, user)

			
		
	

