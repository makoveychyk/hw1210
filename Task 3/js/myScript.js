//Задание
// (*) Создать объект obj, с методами method1(),method2() и method3(). В методе method3() должна возвращаться строка «метод3». Сделайте так, чтобы было возможно выполнение кода obj.method1().method2().method3().

//Решение

var obj = {
    method1 : function(){
       return{
           method2 : function(){
              return{
                method3 : function(){
                    alert('Метод 3');
                    }
                }
           }
       }
    }   
} 

obj.method1().method2().method3();