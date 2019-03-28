var my_palette = new Window("palette","我是窗口");

var btn2 = my_palette.add('button');
btn2.text='读取选中项目的属性';

btn2.onClick=function(){

    //AE工程被选中的项目
    var selectedItems = app.project.selection;

    if(selectedItems.length == 0){
        alert('请选择项目') ;      
        return;
    }
    var str = '';
    for(var i in selectedItems){
    str += '你选中了';
    str +=selectedItems[i].name+'\n';
     str = str +'项目属性有:'
    for(x in selectedItems[i]){
           str = str+x+'--';
        }
    str+='\n\n';
    }
    alert(str)
}

my_palette.show();