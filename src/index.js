
import './scss/fappify-build.scss'

import * as components from './components'

import config, { setOptions } from './utils/config'
import { use, registerComponentProgrammatic } from './utils/plugins'

const Fappify = {
    install(Vue, options = {}) {
        // Options
        setOptions(Object.assign(config, options))
        // Components
        for (let componentKey in components) {
            Vue.use(components[componentKey])
        }
        // Config component
        const FappifyProgrammatic = {
            setOptions(options) {
                setOptions(Object.assign(config, options))
            }
        }
        registerComponentProgrammatic(Vue, '$fappurbate', FappifyProgrammatic)
    }
}

use(Fappify)

export default Fappify
