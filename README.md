# QTree

Может быть тут будет описание. Проект разработан в рамках [Web Challenge 2015](http://uawebchallenge.com/).


# Использование

## Подключение
```javascript
<script type="text/javascript" src="qtree.js"></script>
<script type="text/javascript">

  var data = { };
  var qtree = new QTree(data);

</script>
```

## Данные

#### Объект ```data```
**Простой пример:**
```javascript

var data = {
  'entry': 'Do you like red colour?',
  
  'questions': {
    'Do you like red colour?': {
      'answers': {
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

**Более сложный пример:**
```javascript

var data = {
  'entry': 'red',
  
  'questions': {
    'red': {
      'representation': '<h1>Do you like red colour?</h1>',
      'answers': {
        'Yep, I like it!': '=={{c-red}}',
        'Hm, I\'m not sure..': '=>{{q-green}}'
      }
    },
    'q-green': {
      'representation': '<h1>Do you like green colour?</h1>',
      'answers': { 
        'Yay, of course!': '=={{green-c}}',
        'Nope :(': '=={{bore-me}}'
      }
    }
  },
  
  'conclusions': {
    'c-red': {
      'representation': '<h1>You like red colour</h1><h4>It\'s a good choice!</h4>'
    },
    'green-c': {
      'representation': '<h1>You like green colour</h1><h4>It\'s a really good choice!</h4>'
    },
    'bore-me': {
      'representation': '<h1>You bore me</h1><h4>...to tears</h4>'
    }
  }
};

```

## Шаблоны-указатели
```=>{{item-in-questions}}``` - указывает на объект в ```questions``` c именем ```item-in-questions```<br/>
```=={{item-in-conclusions}}``` - указывает на объект в ```conclusions``` c именем ```item-in-conclusions```
