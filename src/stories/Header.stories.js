import Header from '../components/Header'

export default {
  title: 'Header',
  component: Header,
  argTypes: {
    onLogin: {
      action: 'onLogin'
    },
    onLogout: {
      action: 'onLogout'
    },
    onSignUp: {
      action: 'onSignUp'
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Header },
  template: `
    <Header
      @onLogout="onLogout"
      @onLogin="onLogin"
      @onSignUp="onSignUp"
      v-bind="$props"
    />
  `
})

export const LoggedIn = Template.bind({})
LoggedIn.args = {
  user: { id: 1, name: 'mochica' }
}

export const LoggedOut = Template.bind({})
LoggedOut.args = {
  user: {}
}