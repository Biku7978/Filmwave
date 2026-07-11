*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Arial,sans-serif;
}

body{
background:#f5f7fb;
color:#222;
}

.header{
display:flex;
justify-content:space-between;
align-items:center;
padding:15px 30px;
background:#ffffff;
box-shadow:0 2px 10px rgba(0,0,0,.08);
position:sticky;
top:0;
}

.logo{
font-size:28px;
font-weight:bold;
color:#1565C0;
}

nav a{
text-decoration:none;
margin:0 12px;
color:#333;
font-weight:600;
}

nav a:hover{
color:#1565C0;
}

#search{
padding:10px;
width:250px;
border:2px solid #1565C0;
border-radius:25px;
outline:none;
}

.hero{
background:linear-gradient(135deg,#2196F3,#64B5F6);
color:white;
text-align:center;
padding:80px 20px;
}

.hero h1{
font-size:45px;
margin-bottom:10px;
}

.hero p{
font-size:18px;
}

.container{
padding:30px;
}

.container h2{
margin-bottom:20px;
}

#movies{
display:grid;
grid-template-columns:repeat(auto-fill,minmax(220px,1fr));
gap:20px;
}

.card{
background:white;
border-radius:15px;
overflow:hidden;
box-shadow:0 5px 15px rgba(0,0,0,.1);
transition:.3s;
}

.card:hover{
transform:translateY(-8px);
}

.card img{
width:100%;
height:320px;
object-fit:cover;
}

.card h3{
padding:10px;
font-size:18px;
}

.card p{
padding:0 10px 15px;
color:#666;
}

footer{
text-align:center;
padding:20px;
background:white;
margin-top:30px;
}
