define(['./idCardSource'],function(idCardSource){


  var idInfos = null;
  function isTrueValidateCodeBy18IdCard(a_idCard){
  var i, sum, valCodePosition;
    sum = 0;
    if (a_idCard[17].toLowerCase() === "x") {
      a_idCard[17] = 10;
    }
    i = 0;
    while (i < 17) {
      sum += Wi[i] * a_idCard[i];
      i++;
    }
    valCodePosition = sum % 11;
    if (+a_idCard[17] === ValideCode[valCodePosition]) {
      idInfos = {
        p: +(a_idCard[0] + a_idCard[1]),
        c: +(a_idCard[2] + a_idCard[3]),
        t: +(a_idCard[4] + a_idCard[5]),
        year: +(a_idCard[6]+a_idCard[7]+a_idCard[8]+a_idCard[9]),
        month: +(a_idCard[10]+a_idCard[11]),
        day: +(a_idCard[12]+a_idCard[13]),
        sex: a_idCard[16]%2
      };
      return true;
    }
    idInfos = null;
    return false;
  }

  function  isValidityBrithBy18IdCard (idCard18) {
      var day, month, temp_date, year;
      year = idCard18.substring(6, 10);
      month = idCard18.substring(10, 12);
      day = idCard18.substring(12, 14);
      temp_date = new Date(year, parseFloat(month) - 1, parseFloat(day));
      if (temp_date.getFullYear() !== parseFloat(year) || temp_date.getMonth() !== parseFloat(month) - 1 || temp_date.getDate() !== parseFloat(day)) {
        idInfos = null;
        return false;
      }
      return true;

    };

  function isValidityBrithBy15IdCard (idCard15) {
      var day, month, temp_date, year;
      year = idCard15.substring(6, 8);
      month = idCard15.substring(8, 10);
      day = idCard15.substring(10, 12);
      temp_date = new Date(year, parseFloat(month) - 1, parseFloat(day));
      if (temp_date.getYear() !== parseFloat(year) || temp_date.getMonth() !== parseFloat(month) - 1 || temp_date.getDate() !== parseFloat(day)) {
        idInfos = null;
        return false;
      }
      idInfos =  {
        p: +idCard18.substring(0,2),
        c: +idCard18.substring(2,4),
        t: +idCard18.substring(4,6),
        year: temp_date.getFullYear(),
        month: temp_date.getMonth(),
        day: temp_date.getDate(),
        sex: idCard15.substring(14)%2
      };
      return true;
    };

    var Wi = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1];
    var ValideCode = [1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2];

  function checkIdCard(str){
    if(str.length === 15){
      return isValidityBrithBy15IdCard(str)
    }else if(str.length === 18){
      var a_idCard = str.split('');
      if(isValidityBrithBy18IdCard(str) && isTrueValidateCodeBy18IdCard(a_idCard)){
        return true;
      }
      return false;
    }
    return false;
  }

  function getIdInfos(str){
    idInfos = null;
    checkIdCard(str);
    return idInfos;
  }

  return {
    checkIdCard: checkIdCard,
    getIdInfos : getIdInfos,
    getIdInfosCN: function(str){
      var _idInfos = getIdInfos(str);
      if(_idInfos){
        return {
          provice: idCardSource.p[_idInfos.p]
        }
      }else{
        return null;
      }
    }
  }
})