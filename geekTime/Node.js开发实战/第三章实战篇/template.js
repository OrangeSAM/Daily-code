const vm = require('vm')

const user = {
    name: 'daoidaoijd'
}

const templateMap = {
    templateA: '`<h2>${include("templateB")}</h2>`',
    templateB: '`<p>hhdiajdia</p>`'
}


const context = {
    include: function (name) {
        return templateMap[name]()
    },
    helper: function () {

    },
    _: function (markUp) {
        if (!markUp) return ''
        return String(markUp).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39').replace(/"/g, '&quot;')
    }
}


Object.keys(templateMap).forEach(key => {
    const temp = templateMap[key];
    templateMap[key] = vm.runInNewContext(`
        (function(){
            return ${temp}
        })`, context)
})

console.log(templateMap['templateA']())