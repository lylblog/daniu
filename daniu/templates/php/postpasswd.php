<?php
$password = $_POST['post_password'];
// if($password==NULL){echo "密码不能为空，请重新输入";}
// else{
  $link = mysqli_connect('127.0.0.1','root','root','test');
//   if(!$link){
// 	die("连接失败：".mysqli_connect_erro());
//   }
//   echo "数据库连接成功";
  $sql="select * from test.t_user where  password='$password'";
  $result=mysqli_query($link,$sql);
  $row=mysqli_fetch_assoc($result);

  if($row){
    header("location:http://www.baidu.com");
    // echo "登录成功，欢迎".$password."!";
    // return $row["password"];
  }
  else{
    header("location:http://localhost/login/post.html");
    // echo "登录失败！";
    // echo "<a herf='test.php'>重新登陆</a>";
  }
// }
?>