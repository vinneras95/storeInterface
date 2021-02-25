"use strict";

/*
    Перевод
    
    TV: Телевизор,
    Laptop: Ноутбук,
    Smartphone: Смартфон,
    Fridge: Холодильник,
    Boiler: Бойлер,
    Stove: Печь,
    Washing Machine: Стиральная машина,
    Vacuum Cleaner: Пылесос,
    Conditioner: Кондиционер,
    Iron: Утюг,
    Teapot: Чайник,
    Electric Shaver: Электро-бритва,
    Toaster: Тостер,
    Coffee Machine: Кофемашина
*/
// Сделать меню как иф в котором свичи обернутые в Ф, чтоб контролировать состояние где находится и выкидывало соответствующие варианты.



let jsonProducts =
  '[{"category":"TV","price":1500,"manufacturer":"Sony","createdAt":"2019-05-28T17:55:29.945Z"},{"category":"TV","price":1500,"manufacturer":"Sony","createdAt":"2019-05-28T17:55:29.945Z"},{"category":"Laptop","price":1200,"manufacturer":"Acer","createdAt":"2019-05-28T19:55:29.946Z"},{"category":"Smartphone","price":750,"manufacturer":"Apple","createdAt":"2018-03-08T10:45:00.000Z"},{"category":"Fridge","price":1850,"manufacturer":"Vestfrost","createdAt":"2018-05-28T17:55:29.946Z"},{"category":"Boiler","price":500,"manufacturer":"Indesit","createdAt":"2014-12-25T08:30:00.000Z"},{"category":"Stove","price":700,"manufacturer":"Gorenje","createdAt":"2018-09-17T11:00:00.000Z"},{"category":"Washing Machine","price":850,"manufacturer":"Electrolux","createdAt":"2019-05-28T18:55:29.946Z"},{"category":"Vacuum Cleaner","price":450,"manufacturer":"Samsung","createdAt":"2019-05-13T17:55:29.946Z"},{"category":"Conditioner","price":1000,"manufacturer":"Toshiba","createdAt":"2017-07-01T00:00:00.000Z"},{"category":"Iron","price":320,"manufacturer":"Philips","createdAt":"2013-11-18T07:20:00.000Z"},{"category":"Teapot","price":400,"manufacturer":"Bosch","createdAt":"2016-10-03T09:45:00.000Z"},{"category":"Electric Shaver","price":440,"manufacturer":"Braun","createdAt":"2019-05-29T03:55:29.946Z"},{"category":"Toaster","price":620,"manufacturer":"Tefal","createdAt":"2015-05-29T03:55:29.946Z"},{"category":"Coffee Machine","price":1300,"manufacturer":"Delonghi","createdAt":"2019-05-28T02:55:29.946Z"}]';
let pars = JSON.parse(jsonProducts);

let objCategoryF = {
  'TV': 'a',
  'Laptop': 'b',
  'Smartphone': 'c',
  'Fridge': 'd',
  'Boiler': 'q',
  'Stove':'w',
  'Washing Machine': 'e',
  'Vacuum Cleaner': 'r',
  'Conditioner': 't',
  'Iron': 'y',
  'Teapot': 'u',
  'Electric Shaver': 'i',
  'Toaster': 'o',
  'Coffee Machine': 'p',
};
let objCategoryManufacture = {
  'Sony': 'a',
  'Acer': 'b',
  'Apple': 'c',
  'Vestfrost': 'd',
  'Indesit': 'q',
  'Gorenje':'w',
  'Electrolux': 'e',
  'Samsung': 'r',
  'Toshiba': 't',
  'Philips': 'y',
  'Bosch': 'u',
  'Braun': 'i',
  'Tefal': 'o',
  'Delonghi': 'p',
};



pars.map(Obj => {
  let str = (Date.parse(Obj.createdAt));
  Obj.createdAt = str;
});

let parsWork = pars.slice();

//mainObj.arr = JSON.parse(JSON.stringify(parsWork));
let mainObj = {
  // arr: parsWork,
  mycategory: null,
  mycategoryName: null,
  mycategoryArr: [],
  mycategoryArrMidleRes: [],
  mycategoryArrRes: [],
  myfilter: null,
  filtered: null,
  myfilterName: null,
  mysort: null,
  mySortName: null,
  order: null,
  reserveArr: null,
  sortRevers: null,
  categoryHieghPrice: null,
  categoryLouPrice: null,
  categoryManufacture:null,
  categoryManufactureArr:null,
  categoryManufactureName:null,
  categoryManufactureRes:null,
  filterHeighDate: null,
  filterLouDate: null,

  // todo start Меню выбора в Главном меню
  mainMenu() {
    this.order = prompt(
    `Сделайте выбор:\n \n a)Посмотреть список товаров \n b)Установить фильтры \n c)Сортировать товары \n d)Выход из программы`);
    this.selectMainMenu();
  },

  // todo start Меню выбора в Filters меню
  sortMenu() {
    this.mysort =  prompt(
    `Установить сортировку по:\n \n a)Категория \n b)Цена \n c)Производитель \n d)Дата изготовления \n e)Сброс сортировки \n f)Вернуться в главное меню \n g)В обратном порядке`);
    this.selectSortsMenu();
  },

  // todo start Меню выбора в Filters меню
  filterMenu() {
    this.myfilter =  prompt(
      `Установить фильтры:\n \n a)Категория \n b)Цена \n c)Производитель \n d)Дата изготовления \n e)Сброс фильтров \n f)Вернуться в главное меню `);
    this.selectFilterMenu();
  },
  
  // todo Сортировка, Высокая Цена
  makeHiePrice() {
    this.arr.sort(function(a,b){return b.price - a.price});
    this.mySortName += "HeightPrice";
  },

  // todo Сортировка, Высокая Дата
  makeHieDate() {
    this.arr.sort((function(a,b){
      return new Date(b.createdAt) - new Date(a.createdAt);
    }));
    this.mySortName += "HeightDate";
  },

  // todo Вывод товара
  showAll() { 
    this.mycategoryName == 'deleteCategory' ? this.deleteCategory():this.mycategoryName == 'leftCategory' ? this.leftCategory():console.log(' zashlo nichego ne delaem:>> ' );
    this.categoryManufactureName == 'deletecategoryManufacture' ? this.deletecategoryManufactureName():this.categoryManufactureName == 'leftcategoryManufacture' ? this.leftcategoryManufactureName():console.log(' zashlo nichego ne delaem:>>2222 ' );
    
    this.reserveArr = JSON.parse(JSON.stringify(this.arr));
    this.reserveArr.forEach(o => {
      o.createdAt = (new Date(o.createdAt)).toLocaleString();
    });

    if(this.sortRevers == 'revers'){console.table(this.reserveArr.reverse());
    } else {console.table(this.reserveArr);};
    
    this.reserveArr = null;
    console.table(this.mycategoryArrMidleRes);
  },

  // todo Сброс По умолчанию
  resetAllList() {
    this.arr = pars.slice();
    this.mysort = null;
    this.mySortName = null;
    this.sortRevers = null;
    this.mycategoryName = null;
    this.mycategoryArrMidleRes = [];
  },

  // todo сортировка по имени
  sortCategoryName(){
    this.arr.sort(function(a, b){
      let categoryA=a.category.toLowerCase(), categoryB=b.category.toLowerCase()
      if (categoryA < categoryB) //сортируем строки по возрастанию
        return -1
      if (categoryA > categoryB)
        return 1
      return 0 // Никакой сортировки
    });
    this.mySortName += "HeightCategoryName";
  },
  sortManufacturerName(){
    this.arr.sort(function(a, b){
      let categoryA=a.manufacturer.toLowerCase(), categoryB=b.manufacturer.toLowerCase()
      if (categoryA < categoryB) //сортируем строки по возрастанию
        return -1
      if (categoryA > categoryB)
        return 1
      return 0 // Никакой сортировки
    });
    this.mySortName += "HeightManufacturerName";
  },

  // todo В Обратном порядке сортировка
  sortReversSomething(){
    if ((this.mysort.length == 2 )&&((this.mysort[0] == 'a')||(this.mysort[0] == 'b')||(this.mysort[0] == 'c')||(this.mysort[0] == 'd'))&&(this.mysort[1]=='g')) {
      this.mysort = this.mysort[0];
      this.sortRevers = 'revers';
      this.selectSortsMenu();
      
    }else {
      alert('Введите либо существующую букву, либо сочетание буквы + g');
      this.sortMenu();
    };
  },

  // todo Варианты выбора в по Категориям фильтрация меню
  selectCategoryMenu(){
    this.mycategoryArr = this.mycategory.split('');
    if(this.mycategoryArr.includes('g')){
      this.mycategoryName = 'deleteCategory'
    }else { 
      this.mycategoryName = 'leftCategory'
    };
  },

  leftCategory(){
    this.mycategoryArrMidleRes = this.arr.filter(item => {
      return (this.mycategoryArr.includes(objCategoryF[item.category]));});
      this.arr = this.mycategoryArrMidleRes; 
  },
  deleteCategory(){
    this.mycategoryArrMidleRes = this.arr.filter(item => {
      return !(this.mycategoryArr.includes(objCategoryF[item.category]));});
      this.arr = this.mycategoryArrMidleRes;
  },


  categoryFilterPrice(){
    this.categoryHieghPrice = prompt('Введите верхний порог цен');
    this.categoryLouPrice = prompt('Введите нижний порог цен');
    this.arr = this.arr.filter(obj => {
      return (obj.price <= this.categoryHieghPrice)&&(obj.price >= this.categoryLouPrice)
    })
    
  },

  filteredForDate(){
    let hieghD = prompt('Введите верхний порог дат', '2019-05-28T17:55:29.945Z');
    let louD = prompt('Введите нижний порог дат', '2015-05-29T03:55:29.946Z');

    this.filterHeighDate = (new Date(hieghD));
    this.filterLouDate = (new Date(louD));
    console.log(this.filterHeighDate, this.filterLouDate);
    this.arr = this.arr.filter(obj => {
      return (obj.createdAt <= this.filterHeighDate)&&(obj.createdAt >= this.filterLouDate)
    })
  },




  filterManufacture(){
    this.categoryManufactureArr = this.categoryManufacture.split('');
    if(this.categoryManufactureArr.includes('g')){
      this.categoryManufactureName = 'deletecategoryManufacture'
    }else { 
      this.categoryManufactureName = 'leftcategoryManufacture'
    };
  },

  leftcategoryManufactureName(){
    this.categoryManufactureRes = this.arr.filter(item => {
      return (this.categoryManufactureArr.includes(objCategoryManufacture[item.manufacturer]));});
      this.arr = this.categoryManufactureRes; 
  },
  deletecategoryManufactureName(){
    this.categoryManufactureRes = this.arr.filter(item => {
      return !(this.categoryManufactureArr.includes(objCategoryManufacture[item.manufacturer]));});
      this.arr = this.categoryManufactureRes; 
  },

  // todo Варианты выбора в Главном меню
  selectMainMenu() {
    switch (this.order) {
      case "a":
        console.log("a)Посмотреть список товаров");
        this.showAll();
        this.mainMenu(); 
      break;
      case "b":
        console.log("b)Установить фильтры");
        this.filterMenu();
      break;
      case "c":
        console.log("c)Сортировать товары");
        this.sortMenu();
      break;
      case "d":
        console.log("d)Выход из программы");
        alert('Dosvidos)')
      break;
      default: 
      //! This is place for chaking corect input
      break;
    }
  },

  // todo Варианты выбора в Sort меню
  selectSortsMenu() {
    switch (this.mysort) {
      case "a":
        console.log("a)Категория");
        this.sortCategoryName();
        this.mainMenu();
      break;
      case "b":
        console.log("b)Цена");
        this.makeHiePrice();
        this.mainMenu();
      break;
      case "c":
        console.log("c)Производитель");
        this.sortManufacturerName();
        this.mainMenu();
      break;
      case "d":
        console.log("d)Дата изготовления");
        this.makeHieDate();
        this.mainMenu();
      break;
      case "e":
        console.log("e)Сброс сортировки");
        this.resetAllList();
        this.mainMenu();
      break;
      case "f":
        console.log("f)Вернуться в главное меню");
        this.mainMenu();
      break;
      default: 
      this.sortReversSomething();
      this.sortMenu();
      break;
    }
  },
  // todo Варианты выбора в Фильтр меню
  selectFilterMenu() {
    switch (this.myfilter) {
      case "a":
        console.log("a)Категория");
        this.mycategory = prompt(
          `Выберите категорию товара или несколько категорий товаров + g:\n \n a)Телевизор \n b)Ноутбук \n c)Телефон \n d)Холодильник  \n q)Бойлер \n w)Духовка \n r)Пылесос \n t)Кондиционер \n y)Утюг \n u)Чайник \n i)Бритва \n o)Тостер \n p)Кофе Мфшина \n g)-исключть \n f)Вернуться в главное меню `);
        this.selectCategoryMenu();
        this.mainMenu();
          break;
      case "b":
        console.log("b)Цена");
        this.categoryFilterPrice();
        this.mainMenu();
      break;
      case "c":
        console.log("c)Производитель");
        this.categoryManufacture = prompt(
          `Выберите категорию товара или несколько категорий товаров + g:\n \n a)Sony \n b)Acer \n c)Apple \n d)Vestfrost  \n q)Indesit \n w)Gorenje \n r)Samsung \n t)Toshiba 
          \n y)Philips \n u)Bosch \n i)Braun \n o)Tefal \n p)Delonghi \n g)-исключть \n f)Вернуться в главное меню `);
        this.filterManufacture();
        this.mainMenu();
      break;
      case "d":
        console.log("d)Дата изготовления");
        this.filteredForDate()
        this.mainMenu();
      break;
      case "e":
        console.log("e)Сброс фильтров");
        this.resetAllList()
        this.mainMenu();
      break;
      case "f":
        console.log("f)Вернуться в главное меню");
        this.mainMenu();
      break;
      default: 
      
      break;
    }
  },
}
mainObj.arr = JSON.parse(JSON.stringify(parsWork));


mainObj.mainMenu();


//! такая проверка массива значений типа по последнему
// let qwqwqw = [1,2,3,4,5,6,1,2,3,9];
// let b;
// let a = qwqwqw.reduce((element, non)=>{
//   b=element;
//   return (element+non)
// })

// console.log(a, b);

