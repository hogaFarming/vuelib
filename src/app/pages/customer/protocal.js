export default {
  fields: [
    {
      'xwfieldname': 'xwcustname',
      'xwfieldlable': '客户名称',
      'xwcontroltype': 1,
      'recorder': 0,
      'recstatus': 1,
      'xwviewrules': {
        'isreadonly': 0,
        'isvisible': 1,
        'format': '',
        'display': 0
      },
      'xwvalidrules': {
        'isrequired': 0,
        'minlength': 50,
        'maxlength': 100,
        'vaildregex': ''
      },
      'xwrelatedrules': null,
      'xwdatasource': null
    }, {
      'xwfieldname': 'xwtime',
      'xwfieldlable': '时间',
      'xwcontroltype': 8,
      'recorder': 1,
      'recstatus': 1,
      'xwviewrules': {
        'isreadonly': 0,
        'isvisible': 1,
        'format': '',
        'display': 0
      },
      'xwvalidrules': {
        'isrequired': 0,
        'datatype': 2,
        'vaildregex': '^(((((1[6-9]|[2-9]\\d)\\d{2})-(0?[13578]|1[02])-(0?[1-9]|[12]\\d|3[01]))|(((1[6-9]|[2-9]\\d)\\d{2})-(0?[13456789]|1[012])-(0?[1-9]|[12]\\d|30))|(((1[6-9]|[2-9]\\d)\\d{2})-0?2-(0?[1-9]|1\\d|2[0-8]))|(((1[6-9]|[2-9]\\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))-0?2-29-)) (20|21|22|23|[0-1]?\\d):[0-5]?\\d:[0-5]?\\d)$'
      },
      'xwrelatedrules': null,
      'xwdatasource': null
    }, {
      'xwfieldname': 'xwtelphone',
      'xwfieldlable': '客户手机号',
      'xwcontroltype': 10,
      'recorder': 2,
      'recstatus': 1,
      'xwviewrules': {
        'isreadonly': 0,
        'isvisible': 1,
        'format': '',
        'display': 0
      },
      'xwvalidrules': {
        'isrequired': 1,
        'minlength': 11,
        'maxlength': 11,
        'vaildregex': '^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\\d{8}$'
      },
      'xwrelatedrules': null,
      'xwdatasource': null
    }, {
      'xwfieldname': 'xwmail',
      'xwfieldlable': '客户邮箱',
      'xwcontroltype': 11,
      'recorder': 3,
      'recstatus': 1,
      'xwviewrules': {
        'isreadonly': 0,
        'isvisible': 1,
        'format': '',
        'display': 0
      },
      'xwvalidrules': {
        'isrequired': 1,
        'minlength': 1,
        'maxlength': 1000,
        'vaildregex': '^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\\d{8}$'
      },
      'xwrelatedrules': null,
      'xwdatasource': null
    }, {
      'xwfieldname': 'xwaddress',
      'xwfieldlable': '客户地址',
      'xwcontroltype': 13,
      'recorder': 4,
      'recstatus': 1,
      'xwviewrules': {
        'isreadonly': 0,
        'isvisible': 1,
        'format': '',
        'display': 0
      },
      'xwvalidrules': {
        'isrequired': 1,
        'minlength': 1,
        'maxlength': 1000,
        'vaildregex': ''
      },
      'xwrelatedrules': null,
      'xwdatasource': null
    }, {
      'xwfieldname': 'xwlogo',
      'xwfieldlable': '客户头像',
      'xwcontroltype': 15,
      'recorder': 5,
      'recstatus': 1,
      'xwviewrules': {
        'isreadonly': 0,
        'isvisible': 1,
        'format': '',
        'display': 0
      },
      'xwvalidrules': {
        'isrequired': 1,
        'datatype': 6,
        'vaildregex': ''
      },
      'xwrelatedrules': null,
      'xwdatasource': null
    }
  ]
}
