var forms = document.querySelectorAll('#stb_subscribe_form');

var STBSUBFORM = {
    init: function () {
        var errorMsgs = document.getElementsByClassName('stb_form_msg_error');
        errorMsgs = [].slice.call(errorMsgs);
        for (var index = 0; index < errorMsgs.length; index++) {
            errorMsgs[index].style.display = 'none';
        }
        var resultDoms = document.querySelectorAll('.stb_form_result');
        resultDoms.forEach(function (resultDom) {
          resultDom.style.display = 'none';
          resultDom.className = resultDom.className.replace('success', '');
          resultDom.className = resultDom.className.replace('fail', '');
        })
    },
    // formRequest: function (e) {        
    //     e.preventDefault();
    //     STBSUBFORM.init();
    //     var targetForm = e.target;
    //     STBSUBFORM.form = targetForm;
    //     var value = STBSUBFORM.getValue();
    //     if (STBSUBFORM.validate(value, targetForm)) {
    //         var value = STBSUBFORM.serializeValue(value);
    //         value = value.replace('&policy=stb_policy_true', '');
    //         value = value.replace('ad_agreement','receiveMarketingMailAgreed')
    //         var endpoint = STBSUBFORM.form.action;
    //         STBSUBFORM.xhrRequest(endpoint, value);
    //         if(document.getElementById('stb_recaptcha')){
    //           grecaptcha.reset()
    //         }
    //     }
    // },
    // validateEmail: function (email) {
    //     var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //     return re.test(String(email).toLowerCase());
    // },
    // validatePhoneNumber: function (event) {
    //     if (event.keyCode === 8) {
    //         return;
    //     }
    //     if (event.keyCode === 189) {
    //         event.preventDefault();
    //     }
    //     if (event.target.value.length >= 13) {
    //         event.preventDefault();
    //     }
    //     var n = event.target.value.replace(/[^0-9-]/gi, '');
    //     event.target.value = n;

    //     var t = event.target.value.split('');

    //     var startDigit = event.target.value.startsWith('02') ? 2 : 3;
    //     var endDigit = event.target.value.startsWith('02') ? 6 : 8;

    //     if (event.target.value.length === 3) {
    //         t.splice(startDigit, 0, '-');
    //         event.target.value = t.join('');
    //     }

    //     if (event.target.value.length === 8) {
    //         t.splice(endDigit, 0, '-');
    //         event.target.value = t.join('');
    //     }

    //     if (event.target.value.length === 12) {
    //         event.target.value = event.target.value.replace(/-/gi, '');
    //         var t = event.target.value.split('');
    //         t.splice(startDigit, 0, '-');
    //         t.splice(7, 0, '-');
    //         event.target.value = t.join('');
    //     }

    //     if (event.target.value.length === 13) {
    //         event.target.value = event.target.value.replace(/-/gi, '');
    //         var t = event.target.value.split('');
    //         t.splice(startDigit, 0, '-');
    //         t.splice(8, 0, '-');
    //         event.target.value = t.join('');
    //     }
    // },
    // validate: function (values, targetForm) {
    //     var showError = STBSUBFORM.showError(targetForm);
    //     for (var index = 0; index < values.length; index++) {
    //         var item = values[index];

    //         if (item.isRadio && item.required && !item.checkedOption && !item.checkedEtc || item.isRadio && item.required && item.checkedEtc && item.value.length === 0) {
    //             var itemLabel = item.parentElement.parentElement.parentElement.querySelector('label').innerText.replace('*','');
    //             showError(item.id, itemLabel + STBSUBFORM.josa(itemLabel) + STBSUBFORM.errorMsg.ITEM_REQUIRED);
    //             return false;
    //         }

    //         if (item.id === 'stb_email' && item.value.length === 0) {
    //             showError(item.id, STBSUBFORM.errorMsg.EMAIL_REQUIRED);
    //             return false;
    //         }
    //         if (item.id === 'stb_email' && !STBSUBFORM.validateEmail(item.value)) {
    //             showError(item.id, STBSUBFORM.errorMsg.EMAIL_FORMAT);
    //             return false;
    //         }            
    //         if (item.required && item.value.length === 0) {
    //             var itemLabel = item.parentElement.querySelector('label').innerText.replace('*','');
    //             showError(item.id, itemLabel + STBSUBFORM.josa(itemLabel) + STBSUBFORM.errorMsg.ITEM_REQUIRED);
    //             return false;
    //         }
    //         if (item.id === 'stb_policy' && !item.checked) {
    //             showError(item.id, STBSUBFORM.errorMsg.PRIVACY_AGREEMENT);
    //             return false;
    //         }
    //         if (item.id === 'stb_ad_agreement' && !item.checked && item.required) {
    //             showError(item.id, STBSUBFORM.errorMsg.AD_AGREEMENT);
    //             return false;
    //         }
    //         if (item.id === 'stb_$is_sms_agreed' && !item.checked) {
    //             if (document.getElementById('stb_$phone').value.length !== 0) {
    //                 showError(item.id, STBSUBFORM.errorMsg.SMS_AGREEMENT);
    //                 return false;
    //             }
    //         }
    //         if (item.id === 'stb_$phone' && (item.value.length > 13 && item.value.length !== 0)) {
    //             showError(item.id, STBSUBFORM.errorMsg.PHONE_FORMAT);
    //             return false;
    //         }
    //         if (item.id === 'stb_$phone' && item.value.length === 0 && document.getElementById('stb_$is_sms_agreed').checked) {
    //             showError(item.id, STBSUBFORM.errorMsg.PHONE_REQUIRED);
    //             return false;
    //         }
    //         if (item.id === 'stb_recaptcha' && grecaptcha.getResponse() == "") {
    //             showError(item.id, STBSUBFORM.errorMsg.CAPTCHA_REQUIRED);
    //             return false;
    //         }
    //         if (item.className === 'stb_form_set_input number' && isNaN(item.value)){
    //             showError(item.id, STBSUBFORM.errorMsg.NUMBER_FORMAT);
    //             return false;
    //         }
    //     }
    //     return true;
    // },
    // errorMsg: {
    //     EMAIL_REQUIRED: '�대찓�� 二쇱냼瑜� �낅젰�섏꽭��.',
    //     EMAIL_FORMAT: '�섎せ�� �대찓�� 二쇱냼�낅땲��.',
    //     ITEM_REQUIRED: ' �낅젰�섏꽭��.',
    //     PRIVACY_AGREEMENT: '媛쒖씤�뺣낫 �섏쭛 諛� �댁슜�� �숈쓽�댁＜�몄슂.',
    //     AD_AGREEMENT: '愿묎퀬�� �뺣낫 �섏떊�� �숈쓽�댁＜�몄슂.',
    //     SMS_AGREEMENT: '臾몄옄 硫붿떆吏� �섏떊�� �숈쓽�� 二쇱꽭��.',
    //     PHONE_FORMAT: '�섎せ�� �꾪솕踰덊샇�낅땲��.',
    //     PHONE_REQUIRED: '�꾪솕踰덊샇瑜� �낅젰�섏꽭��.',
    //     CAPTCHA_REQUIRED: '�먮룞�낅젰 諛⑹�瑜� �뺤씤�댁＜�몄슂.',
    //     NUMBER_FORMAT: '�レ옄留� �낅젰 媛��ν빀�덈떎.',
    // },
    // showError: function (targetForm) {
    //     return function (itemId, msg) {
    //         var domName = itemId + '_error';
    //         var dom = targetForm.querySelector(`#${domName}`);
    //         dom.innerText = msg;
    //         dom.style.display = 'block';
    //     }
    // },
    // checkTenThousandYear: function (datetimeString) {
    //   const dateString = datetimeString.split('T')[0];
    //   const date = new Date(dateString);
    //   const year = date.getFullYear();
    //   return year > 9999 ? true : false;
    // },
    // formatDateNumber: function (dateNum) {
    //     return dateNum < 10 ? '0' + dateNum : dateNum;
    // },
    // formatTenThousandYear: function (datetimeString) {
    //     const dateString = datetimeString.split('T')[0];
    //     const timeString = datetimeString.split('T')[1];
    //     var datetime = new Date(dateString);
    //     var month = STBSUBFORM.formatDateNumber(datetime.getMonth() + 1);
    //     var day = STBSUBFORM.formatDateNumber(datetime.getDate());
    //     var formattedDateString = [datetime.getFullYear(), month, day].join('-');
    //     return formattedDateString + ' ' + timeString + ':00';
    // },
    // formatDatetime: function (datetimeString, inputType) {
    //     if (datetimeString == null) return '';
    //     // �좎쭨�� �쒓컙 ���낆뿉�� 10000�� �댁긽 遺��곕뒗 new Date �⑥닔媛� Invalid Date瑜� 諛섑솚�섏뿬 泥댄겕�섍퀬 蹂꾨룄 �щ㎎�섎뒗 濡쒖쭅 異붽� 
    //     const isTenThousandYear = STBSUBFORM.checkTenThousandYear(datetimeString);
    //     if (inputType === 'datetime-local' && isTenThousandYear) {
    //       return STBSUBFORM.formatTenThousandYear(datetimeString);
    //     }
    //     var datetime = new Date(datetimeString);
    //     var month = STBSUBFORM.formatDateNumber(datetime.getMonth() + 1);
    //     var day = STBSUBFORM.formatDateNumber(datetime.getDate());
    //     var dateString = [datetime.getFullYear(), month, day].join('-');
    //     if (inputType === 'date') {
    //       return dateString + ' 00:00:00';
    //     }
    //     var hour = STBSUBFORM.formatDateNumber(datetime.getHours());
    //     var minutes = STBSUBFORM.formatDateNumber(datetime.getMinutes());
    //     var timeString = [hour, minutes, '00'].join(':');
    //     return dateString + ' ' + timeString;
    // },
    // xhrRequest: function (endpoint, value) {
    //     const submitButton = STBSUBFORM.form.querySelector('#stb_form_submit_button');
    //     STBSUBFORM.submitButton = submitButton;
    //     STBSUBFORM.toggleButtonActivation(false);
    //     if (window.XDomainRequest) {
    //         var xdr = new XDomainRequest();
    //         xdr.open("POST", endpoint);
    //         xdr.onload = function () {
    //             if (xdr.responseText.indexOf('@ERROR_MSG') !== -1) {
    //                 STBSUBFORM.showResult(xdr.responseText, 'fail');
    //             } else {
    //                 STBSUBFORM.showResult(xdr.responseText, 'success');
    //             }
    //         };
    //         setTimeout(function () {
    //             xdr.send(value);
    //         }, 0);
    //     } else {
    //         var xhr = new XMLHttpRequest();
    //         xhr.open("POST", endpoint, true);
    //         xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    //         xhr.onreadystatechange = function () {
    //             if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
    //                 if (this.response.indexOf('@ERROR_MSG') !== -1) {
    //                     STBSUBFORM.showResult(this.response, 'fail');
    //                 } else {
    //                     STBSUBFORM.showResult(this.response, 'success');
    //                 }
    //             }
    //         }
    //         xhr.send(value);
    //     }
    // },
    // serializeValue: function (nodeList) {
    //     nodeList = [].slice.call(nodeList);
    //     var serializeText = '';
    //     for (var index = 0; index < nodeList.length; index++) {
    //         var itemType = nodeList[index].type;
    //         var itemKey = nodeList[index].id.replace('stb_', '');
    //         var itemValue = nodeList[index].value;
    //         if (itemKey === '$phone') {
    //             itemValue = itemValue.replace(/-/gi, '');
    //         }
    //         if (itemKey === '$is_sms_agreed') {
    //             itemValue = nodeList[index].checked ? 'Y' : 'N';
    //         }
    //         if (itemKey === 'ad_agreement'){
    //             itemValue = nodeList[index].checked ? true : false;
    //         }
    //         if ((itemType === 'datetime-local' || itemType === 'date') && !!itemValue) {
    //           var formattedDatetime = STBSUBFORM.formatDatetime(itemValue, itemType);
    //           itemValue = formattedDatetime;
    //         }
    //         serializeText += itemKey + '=';
    //         serializeText += encodeURIComponent(itemValue);
    //         if (index + 1 !== nodeList.length) {
    //             serializeText += '&';
    //         }
    //     }
    //     return serializeText;
    // },
    // getValue: function () {
    //     var inputValues = STBSUBFORM.form.querySelectorAll('input, select');
    //     const values = Array.from(inputValues);

    //     let radioFilter = []
    //     STBSUBFORM.form.querySelectorAll('input[type="radio"]').forEach(element =>{
    //         const indexOnArray = radioFilter.findIndex(item => item.id === element['id'])
    //         if(indexOnArray === -1){
    //             radioFilter.push({
    //                 id: element['id'],
    //                 required: element['required'],
    //                 checked: element['checked'],
    //             });
    //         }else{
    //             if(element['checked']){
    //                 radioFilter[indexOnArray].checked = true;
    //                 if(element['value']==='湲고�'){
    //                     radioFilter[indexOnArray].etcChecked = true;
    //                 }
    //             }
    //         }
    //     }
    //     )

    //     var filteredValues = values.map(element =>{
    //         const filter = radioFilter.find(item=>item.id === element['id'])
    //         if(filter && !filter.checked){
    //             element.isRadio = true;
    //             element.checkedOption = false;
    //             element.checkedEtc = false;
    //             return element;
    //         }else if(filter && filter.checked && !filter.etcChecked){
    //             element.isRadio = true;
    //             element.checkedOption = true;
    //             element.checkedEtc = false;
    //             return element;
    //         }else if(filter && filter.checked && filter.etcChecked){
    //             element.isRadio = true;
    //             element.checkedOption = false;
    //             element.checkedEtc = true;
    //             return element;
    //         }
    //         else{
    //             return element;
    //         }
    //     })
        
    //     //input �꾪꽣留�
    //     var result = filteredValues.filter(element => 
    //         !element.isRadio
    //         || (element.isRadio && element.checkedEtc && element['type'] === 'text') //�쇰뵒��, etc 媛� 泥댄겕�� 寃쎌슦, text留� �④린湲�
    //         || (element.isRadio && element.checkedOption && element['type'] === 'radio' && element.checked) //�쇰뵒��, etc �꾨땶 寃껋씠 泥댄겕��
    //         || (element.isRadio && element.required && !element.checkedOption && !element.checkedEtc) //�쇰뵒��, �꾩닔�몃뜲 泥댄겕 �덈맖
    //     )

    //     return result;
    // },
    // showResult: function (response, status) {
    //     var resMsg;
    //     var resultDom = STBSUBFORM.form.querySelector('#stb_form_result');
    //     if (status === 'fail') {
    //         var resMsg = '<p>' + response.split('ERROR_MSG:')[1].split('-->')[0] + '</p>';
    //     } else {
    //         var resMsg = response.split('<div class="msg">')[1].split('</div>')[0];
    //     }

    //     if (resMsg.indexOf('�대� 援щ룆 以묒씤 �대찓��') !== -1) {
    //         STBSUBFORM.showError('stb_email', response.split('ERROR_MSG:')[1].split('-->')[0]);
    //     } else if (resMsg.indexOf('�대� 援щ룆 以묒씤 �꾪솕踰덊샇') !== -1) {
    //         STBSUBFORM.showError('stb_$phone', response.split('ERROR_MSG:')[1].split('-->')[0]);
    //     } else {
    //         resultDom.style.display = 'block';
    //         resultDom.innerHTML = resMsg;
    //         if (status === 'success') {
    //             resultDom.className += ' success';
    //         } else if (status === 'fail') {
    //             resultDom.className += ' fail';
    //         }
    //     }
    //     setTimeout(function() {
    //         STBSUBFORM.toggleButtonActivation(true);
    //     }, 2000);
    // },
    openModal: function (e) {
        var modal = document.getElementById(e.target.dataset.modal);
        modal.className = modal.className.replace('blind', '');
    },
    closeModal: function (e) {
        var modal = document.getElementById(e.target.dataset.modal);
        modal.className += ' blind';
    },
    openModalOld: function (e) {
        var modal = document.getElementById('stb_form_modal');
        modal.className = modal.className.replace('blind', '');
    },
    closeModalOld: function (e) {
        var modal = document.getElementById('stb_form_modal');
        modal.className += ' blind';
    },
    // toggleButtonActivation: function (state) {
    //     if (STBSUBFORM.submitButton === null) {
    //         return;
    //     }
    //     if (state) {
    //         STBSUBFORM.submitButton.classList.remove('disabled');
    //     } else {
    //         STBSUBFORM.submitButton.classList.add('disabled');
    //     }
    // },
    // josa: function (string) {
    //     return (string.charCodeAt(string.length - 1) - 0xac00) % 28 > 0 ? '��' : '瑜�';
    // },
    // deselect:function (e) {
    //     var targets = Array.from(document.getElementsByName(e.target.dataset.name))
    //     targets.forEach(element => element.checked = false)
        
    //     STBSUBFORM.hideEtcInput(targets)
    //     STBSUBFORM.hideDeselectButton(e.target.dataset.name)
    // },
    // checkRadioSelected:function(e) {
    //     var targets = Array.from(document.getElementsByName(e.target.name));
    //     var selected = targets.filter(element => element.checked === true)
        
    //     if(selected.length > 0){
    //         STBSUBFORM.showDeselectButton(e.target.name)
    //         if(selected[0].value === '湲고�'){
    //             targets[targets.length-1].parentNode.parentNode.style.display = 'block';
    //         }else{
    //             STBSUBFORM.hideEtcInput(targets)
    //         }
    //     }else{
    //         STBSUBFORM.hideEtcInput(targets)
    //     }
    // },
    // hideEtcInput:function(targets){
    //     if(targets.filter(e => e.value === '湲고�').length > 0){
    //         targets[targets.length-1].parentNode.parentNode.style.display = 'none';
    //     }
    // },
    // showDeselectButton:function(targetName){
    //     STBSUBFORM.deselectButton.forEach(element => {
    //         if(element.dataset.name === targetName){
    //             element.style.display = 'block';
    //         }
    //     })
    // },
    // hideDeselectButton:function(targetName){
    //     STBSUBFORM.deselectButton.forEach(element => {
    //         if(element.dataset.name === targetName){
    //             element.style.display = 'none';
    //         }
    //     })
    // },
    form: document.getElementById('stb_subscribe_form'),
    modalOpenButton: document.querySelectorAll('.stb_form_modal_open_btn'),
    modalOpenButtonOld: document.querySelectorAll('#stb_form_modal_open'),
    modalCloseButton: document.querySelectorAll('.stb_form_modal_close_btn'),
    modalCloseButtonOld: document.querySelectorAll('#stb_form_modal_close'),
    modalBgButton: document.getElementById('stb_form_modal_bg'),
    phoneNumerInput: document.getElementById('stb_$phone'),
    submitButton: document.getElementById('stb_form_submit_button'),
    deselectButton: document.querySelectorAll('.deselect'),
    radioButton : document.querySelectorAll('input[type="radio"]')
}

// STBSUBFORM.form.addEventListener('submit', STBSUBFORM.formRequest);
if (forms.length > 1) {
    forms.forEach(function (element, i) {
      if (i === 0) return;
      if (element.dataset.stbInit === 'init') return;
      element.addEventListener('submit', STBSUBFORM.formRequest);
      element.dataset.stbInit = 'init';
    });
} else {
  STBSUBFORM.form.addEventListener('submit', STBSUBFORM.formRequest);
  STBSUBFORM.form.dataset.stbInit = 'init';
}

// if (STBSUBFORM.radioButton !== null) {
//     STBSUBFORM.radioButton.forEach(function (element) {
//         element.addEventListener('change', STBSUBFORM.checkRadioSelected);
//     });
// }
// if (STBSUBFORM.deselectButton !== null) {
//     STBSUBFORM.deselectButton.forEach(function (element) {
//         element.addEventListener('click', STBSUBFORM.deselect);
//     });
// }
if (STBSUBFORM.modalOpenButton !== null) {
    STBSUBFORM.modalOpenButton.forEach(function (element) {
        element.addEventListener('click', STBSUBFORM.openModal);
    });
}
if (STBSUBFORM.modalCloseButton !== null) {
    STBSUBFORM.modalCloseButton.forEach(function (element) {
        element.addEventListener('click', STBSUBFORM.closeModal);
    });
}
if (STBSUBFORM.modalOpenButtonOld !== null) {
    STBSUBFORM.modalOpenButtonOld.forEach(function (element) {
        element.addEventListener('click', STBSUBFORM.openModalOld);
    });
}
if (STBSUBFORM.modalCloseButtonOld !== null) {
    STBSUBFORM.modalCloseButtonOld.forEach(function (element) {
        element.addEventListener('click', STBSUBFORM.closeModalOld);
    });
}
if (STBSUBFORM.modalBgButton !== null) {
    STBSUBFORM.modalBgButton.addEventListener('click', STBSUBFORM.closeModal);
}
// if (STBSUBFORM.phoneNumerInput !== null) {
//     STBSUBFORM.phoneNumerInput.addEventListener('keyup', STBSUBFORM.validatePhoneNumber);
//     STBSUBFORM.phoneNumerInput.addEventListener('keydown', STBSUBFORM.validatePhoneNumber);
// }
// if (window.location.search.indexOf('groupIds') !== -1) {
//     STBSUBFORM.form.action += '?groupIds' + window.location.search.split('groupIds')[1];
// }

// if (window.location.host.indexOf('page.stibee.com') !== -1) {
//     document.querySelector('#stb_subscribe').classList.add('theme-page');
// }