<script>
import Text from './controls/text'
import DatePicker from './controls/date-picker'
import Phone from './controls/phone'
import Email from './controls/email'
import Address from './controls/address'
import Avatar from './controls/avatar'

const controlTypeMap = {
  1: Text,
  8: DatePicker,
  10: Phone,
  11: Email,
  13: Address,
  15: Avatar
}

export default {
  props: ['type', 'value', 'config', 'isError'],

  render (h) {
    const component = controlTypeMap[this.type]
    const options = {
      props: {
        value: this.value,
        config: this.config,
        isError: this.isError
      },
      on: {
        input: val => this.$emit('input', val),
        blur: any => this.$emit('blur'),
        focus: any => this.$emit('focus')
      }
    }
    return h(component, options)
  }
}

</script>
