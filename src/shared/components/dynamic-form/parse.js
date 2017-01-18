export default function parse (fields) {
  return fields
    .sort((a, b) => a.recorder - b.recorder)
    .map(field => {
      const viewRules = field.xwviewrules
      const validRules = field.xwvalidrules
      // const relatedRules = field.xwrelatedrules

      return {
        name: field.xwfieldname,
        label: field.xwfieldlable,
        controlType: field.xwcontroltype,
        config: {
          isReadOnly: !!viewRules.isreadonly,
          isVisible: !!viewRules.isvisible,
          format: viewRules.format,
          display: viewRules.display,
          isRequired: !!validRules.isrequired,
          minLength: validRules.minlength,
          maxLength: validRules.maxlength,
          validRegex: validRules.vaildregex,
          dataSource: field.xwdatasource
        }
      }
    })
}
