(function () {

// console.log('fileInputAll');

   // Плучаем ссылки на HTML элементы (все инпуты типа "файл")
   var fileInputAll = document.querySelectorAll('[type="file"]');

// console.log(fileInputAll);

   // Для каждого элемента из полученного списка выполняем группу (набор) команд
   // В функцию этот элемент попадает как fileInput
   fileInputAll.forEach(function (fileInput) {

// console.log(fileInput);

      // Вспомогательный спан находится через один элемент от инпута
      // <input type="file"> -- <label> -- <span>
      // Выбираем спан, два раза переходя к следующему элементу
      var fileInputInfo = fileInput.nextElementSibling.nextElementSibling;
      
// console.log(fileInputInfo);

      // "Навештваем" реакцию на изменение состояния инпута ( 'change' )
      // Задаем сценарий действий в ответ на событие ( function(){...}, т.е. группу (набор) команд )
      fileInput.addEventListener('change', function () {

         // Получаем значение поля (путь к выбранному файлу)
         var fullPath = fileInput.value;

         // Условие if ( тело условия ) { если условие верное, то выполняем код в фигурных скобках }
         // Условие: если значение у поля есть (то есть поле не пустое), то...
         if (fullPath) {

            // Еще один вид условий ( [Если] ? [То] : [Иначе] )
            // В Windows разделителем пути к файлу является обратная косая ( \ )
            // В Mac, Linux - стандартная косая ( / )
            // Итого: получаем из строки пути позицию последней косой (перед именем файла)
            // Если в пути к файлу есть символ "\", то ищем по нему, иначе - по символу "/"
            var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));

            // Извлекаем из пути имя файла
            var filename = fullPath.substring(startIndex);

            // Условие: если еще одна косая по какой-то причине содержится в имени файла...
            if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {

               // ...то отрезаем и ее
               filename = filename.substring(1);

            }

            // Делаем полученый результат внутренним содержимым спана
            fileInputInfo.innerHTML = filename;
         }
      });
   });

})();
