<?php 

    if(isset($_POST['btn-sent'])){
        $UserName = $_POST['Uname'];
        $Email = $_POST['Uemail'];
        $Message = $_POST['Ufeedback'];

        if(empty($UserName) || empty($Email) || empty($Message)){
            header('location:index.html')
        }
        else{
            $to = "rsushant2000@gmail.com";
        }
    }


?>