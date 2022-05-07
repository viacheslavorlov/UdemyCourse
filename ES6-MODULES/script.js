import {two as second} from './script2';//импортирует с изменением названия
import { one } from './script2';// импортирует с тем же названием
import * as data from './script2';// импортирует как объект с методами
import sayHello from './script2'; // импортирует дефолтный экспорт

//если файл подключается напрямую в index.html -нужно прописывать расширение файла

console.log(`${one} and ${second}`);

console.log(`${data.one} and ${data.two}`);

data.sayHi();

console.log(data);

sayHello();