mkdir $1
cd $1
mkdir css js
touch index.html css/style.css js/main.js
echo "<!DOCTYPE><title>hello</title><h1>hi</h1>" > index.html
cd css
echo "h1{color:red;}" > style.css
cd ../js
echo "var string ='hello world'alert(string)" > main.js
