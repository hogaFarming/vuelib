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

const Component = {
  props: ['type', 'value'],

  data () {
    return {
    }
  },

  render (h) {
    const tag = controlTypeMap[this.type]
    const options = {
      props: {
        value: this.value
      },
      on: {
        input: e => {
          this.value = e.target.value
        }
      },
      nativeOn: {
      }
    }
    return h(tag, options)
  }
}

export default Component

</script>
