var my_palette = new Window("palette","我是标题");
var btn=  my_palette.add('button');
btn.text='我是按钮';
btn.onClick=function(){
	alert('为什么点我!');                
}
my_palette.show();