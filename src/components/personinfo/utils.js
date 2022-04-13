function getByteLength(str) {
  let bytes = 0;
  for (let i = 0; i < str.length; ++i, ++bytes) {
    if (str.charCodeAt(i) > 255) {
      ++bytes;
    }
  }
  return bytes;
}

function isIDCard(str) {
  const C15ToC18 = function (c15) {
	        let cId = `${c15.substring(0, 6)}19${c15.substring(6, 15)}`;
	        const strJiaoYan = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
	        const intQuan = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
	        let intTemp = 0;
	        for (let i = 0; i < cId.length; i++) intTemp += cId.substring(i, i + 1) * intQuan[i];
	        intTemp %= 11;
	        cId += strJiaoYan[intTemp];
	        return cId;
	    };
  const Is18IDCard = function (IDNum) {
	        const aCity = {
	            11: '北京',
	            12: '天津',
	            13: '河北',
	            14: '山西',
	            15: '内蒙古',
	            21: '辽宁',
	            22: '吉林',
	            23: '黑龙江',
	            31: '上海',
	            32: '江苏',
	            33: '浙江',
	            34: '安徽',
	            35: '福建',
	            36: '江西',
	            37: '山东',
	            41: '河南',
	            42: '湖北',
	            43: '湖南',
	            44: '广东',
	            45: '广西',
	            46: '海南',
	            50: '重庆',
	            51: '四川',
	            52: '贵州',
	            53: '云南',
	            54: '西藏',
	            61: '陕西',
	            62: '甘肃',
	            63: '青海',
	            64: '宁夏',
	            65: '新疆',
	            71: '台湾',
	            81: '香港',
	            82: '澳门',
	            91: '国外',
	        };

	        let iSum = 0;
	        let sID = IDNum;
	        if (!/^\d{17}(\d|x)$/i.test(sID)) {
	            return false;
	        }
	        sID = sID.replace(/x$/i, 'a');

	        if (aCity[parseInt(sID.substr(0, 2))] == null) {
	            return false;
	        }

	        const sBirthday =	            `${sID.substr(6, 4)
	             }-${
	             Number(sID.substr(10, 2))
	             }-${
	             Number(sID.substr(12, 2))}`;
	        const d = new Date(sBirthday.replace(/-/g, '/'));

	        if (
	            sBirthday
	            != `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
	        ) return false;

	        for (let i = 17; i >= 0; i--) iSum += (Math.pow(2, i) % 11) * parseInt(sID.charAt(17 - i), 11);

	        if (iSum % 11 != 1) return false;
	        return true;
	    };

  return str.length == 15 ? Is18IDCard(C15ToC18(str)) : Is18IDCard(str);
}

function _validateForm(formData) {
  for (const key in formData) {
	    if (formData.hasOwnProperty(key)) {
	        const value = formData[key];
	        // console.log(key, value)
	        switch (key) {
	            case 'sName': {
          if (!value) {
            uni.showToast({ title: '姓名不能为空', icon: 'none' });
            return false;
          }
          if (getByteLength(value) > 30) {
            uni.showToast({
              title: '姓名长度不能超过30个字节',
              icon: 'none',
            });
            return false;
          }
          break;
	            }
	            case 'sIdentity': {
          if (!value) {
            uni.showToast({ title: '身份证号码不能为空', icon: 'none' });
            return false;
          }
          if (!isIDCard(value)) {
            uni.showToast({ title: '身份证号码有误', icon: 'none' });
            return false;
          }
          break;
	            }
	            case 'sMobile': {
          const regMobile = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
          if (!regMobile.test(value)) {
            uni.showToast({ title: '请输入合法手机号码', icon: 'none' });
            return false;
          }
          if (!value) {
            uni.showToast({ title: '手机号码不能为空', icon: 'none' });
            return false;
          }
          if (isNaN(value) || value.indexOf('.') >= 0) {
            uni.showToast({ title: '手机号码必须为数字', icon: 'none' });
            return false;
          }
          if (value.length > 11) {
            uni.showToast({ title: '手机号码不得超过11位', icon: 'none' });
            return false;
          }
          break;
	            }
	            case 'sAddress': {
          if (!value) {
            uni.showToast({ title: '详细地址不能为空', icon: 'none' });
            return false;
          }
          if (getByteLength(value) > 100) {
            uni.showToast({
              title: '详细地址不能超过100个字节',
              icon: 'none',
            });
            return false;
          }
          break;
	            }
	            default:
	              break;
	          }
	        }
	    }
  return true;
}
module.exports = {
  getByteLength,
  _validateForm,
};
