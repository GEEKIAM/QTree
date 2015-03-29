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

**Простой пример объекта** ```data```**:**
```javascript

var data = {
  'entry': 'Do you like red colour?', // Точка входа (вопрос, с которого мы должны начать)
  
  'questions': {
    'Do you like red colour?': {      // Вопрос
      'answers': {                    // Варианты ответов
        'Yep, I like it!': '=={{You like red colour}}',
        'Hm, I\'m not sure..': '=>{{Do you like green colour?}}'
      }
    },
    'Do you like green colour?': {
      'answers': { 
        'Yay, of course!': '=={{You like green colour}}',
        'Nope :(': '=={{You bore me}}'
      }
    }
  },
  
  'conclusions': {
    'You like red colour': {},
    'You like green colour': {},
    'You bore me': {}
  }
};

```
