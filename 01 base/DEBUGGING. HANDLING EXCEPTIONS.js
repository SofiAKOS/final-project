//1. 
function sumSliceArray(arr, first, second) {
    if (!Array.isArray(arr)) {
      throw new Error('Перший аргумент має бути масивом');
    }
  
    if (typeof first !== 'number' || typeof second !== 'number') {
      throw new Error('Другий та третій аргументи мають бути числами');
    }
  
    if (first >= arr.length || second >= arr.length) {
      throw new Error('Номери елементів перевищують розмір масиву');
    }
  
    return arr[first] + arr[second];
  }
//2.
function checkAge() {
    try {
      const name = prompt('Введіть ваше ім\'я:');
      const age = prompt('Введіть ваш вік:');
      const status = prompt('Введіть ваш статус (адмін, модератор, користувач):');
  
      if (!name || !age || !status) {
        throw new Error('The field is empty! Please enter your age');
      }
  
      if (isNaN(Number(age))) {
        throw new TypeError('Введено нечислове значення в поле віку');
      }
  
      if (Number(age) < 18 || Number(age) > 70) {
        throw new RangeError('Ваш вік не відповідає допустимому діапазону (18-70)');
      }
  
      if (status !== 'адмін' && status !== 'модератор' && status !== 'користувач') {
        throw new EvalError('Введено неправильне значення в поле статусу');
      }
  
      alert('Ви маєте доступ до перегляду фільму!');
    } catch (error) {
      alert(`Помилка: ${error.name}\nОпис: ${error.message}`);
    }
  }
//3.
try {
    const width = prompt('Введіть ширину прямокутника:');
    const height = prompt('Введіть висоту прямокутника:');
  
    const area = calcRectangleArea(Number(width), Number(height));
    console.log('Площа прямокутника:', area);
  } catch (error) {
    console.log('Сталася помилка:', error.message);
  }
//4.
class MonthException extends Error {
    constructor(message) {
      super(message);
      this.name = 'MonthException';
    }
  }
  function showMonthName(month) {
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
  
    if (month < 1 || month > 12) {
      throw new MonthException('Incorrect month number');
    }
  
    return monthNames[month - 1];
  }
  try {
    console.log(showMonthName(5));  // May
    console.log(showMonthName(14)); // MonthException Incorrect month number
  } catch (error) {
    if (error instanceof MonthException) {
      console.log(`${error.name} ${error.message}`);
    } else {
      console.log('Сталася невідома помилка:', error.message);
    }
  }
//5.
function showUser(id) {
    if (id < 0) {
      throw new Error('ID must not be negative');
    }
    
    return { id };
  }
  
  function showUsers(ids) {
    const validUsers = [];
  
    for (let i = 0; i < ids.length; i++) {
      try {
        const user = showUser(ids[i]);
        validUsers.push(user);
      } catch (error) {
        console.log(error.message);
      }
    }
  
    return validUsers;
  }
  
  console.log(showUsers([7, -12, 44, 22]));
  

