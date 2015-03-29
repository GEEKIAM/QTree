# QTree

Может быть тут будет описание. Проект разработан в рамках [Web Challenge 2015](http://uawebchallenge.com/).


# Использование

##### Подключение

```javascript
<script type="text/javascript" src="qtree.js"></script>
<script type="text/javascript">

  var data = { };
  var qtree = new QTree(data);

</script>
```


##### Данные

Конструктор принимает объект ```data``` в качестве аргумента.

Объект ```data``` должен иметь слудующие ключи:
```javascript

var data = {
  entry: '', // Точка входа
  
  questions: {}, // Список вопросов
  conclusions: {} // Список выводов
};

```
