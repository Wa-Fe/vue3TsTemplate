// eslint.config.js
import eslint from "@eslint/js"
import globals from "globals"
import tseslint from "typescript-eslint"
import eslintPluginVue from "eslint-plugin-vue"
import stylistic from "@stylistic/eslint-plugin"
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended"

export default tseslint.config(
  {
    ignores: ["**/node_modules/**", "**/dist/**", "**/public/**", "*.config.js"]
  },

  /** js推荐配置 */
  eslint.configs.recommended,
  /** ts推荐配置 */
  ...tseslint.configs.recommended,
  /** vue推荐配置 */
  ...eslintPluginVue.configs["flat/recommended"],

  /**
   * javascript 规则
   */
  {
    files: ["**/*.{js,mjs,cjs,vue}"],
    ignores: ["**/node_modules/**"],
    rules: {
      indent: ["error", 2],
      "linebreak-style": ["error", "unix"],
      quotes: ["error", "double"],
      semi: ["error", "never"],
      //箭头函数中的箭头前后需要留空格
      "arrow-spacing": [
        2,
        {
          before: true,
          after: true
        }
      ],
      //在写逗号时，逗号前面不需要加空格，而逗号后面需要添加空格
      "comma-spacing": [
        2,
        {
          before: false,
          after: true
        }
      ],
      //如果逗号可以放在行首或行尾时，那么请放在行尾
      "comma-style": [2, "last"],
      //不要重复申明一个变量
      "no-redeclare": 2,
      //禁止对一些关键字或者保留字进行赋值操作，比如NaN、Infinity、undefined、eval、arguments等。
      "no-shadow-restricted-names": 2,
      //行末禁止加空格
      "no-trailing-spaces": 2,
      //没有执行不到的代码
      "no-unreachable": 2,
      //没有定义了没有被使用到的变量
      "no-unused-vars": [
        0,
        {
          vars: "all",
          args: "none"
        }
      ],
      "no-whitespace-before-property": 2, //禁止属性前有空格
      "no-multi-spaces": 2, //禁止多个空格
      "keyword-spacing": 2, //在关键字前后强制保持一致的间距
      "require-await": 2, //禁止没有 await 表达式的异步函数
      "quote-props": 0, //需要在对象字面属性名称周围加上引号
      "no-underscore-dangle": 2, //禁止标识符中的悬空下划线
      "no-nested-ternary": 2, //禁止嵌套三元表达式
      "no-loop-func": 2, //禁止在循环语句中包含不安全引用的函数声明
      "no-lone-blocks": 2, //禁止不必要的嵌套块
      "no-empty-function": 2, //禁止空函数
      "no-else-return": 2, //在 if 语句中的 return 语句之后禁止 else 块
      "max-nested-callbacks": "error", //强制回调可以嵌套的最大深度 默认为10
      "max-depth": "error", //强制块可以嵌套的最大深度 默认为4
      "id-length": ["error", { min: 2, max: 30 }], //变量的声明最短长度为2
      "default-case": 2, //在 switch 语句中需要 default
      "default-case-last": 2, //在 switch 语句中 default  必须放在最后
      "block-scoped-var": 2, //在定义的范围内强制使用变量,不允许变量提升
      "no-unmodified-loop-condition": 2, //禁止未修改的循环条件
      "no-self-compare": 2, //禁止条件表达式与自身相比较
      "no-loss-of-precision": 2, //禁止失去精度的字面数字
      "no-import-assign": 2, //不允许分配给导入的绑定
      "no-func-assign": 2, //不允许重新分配 function 声明
      "no-ex-assign": 2, //不允许在 catch 子句中重新分配异常
      "no-duplicate-imports": 2, //禁止重复的模块导入
      "no-duplicate-case": 2, //禁止 switch case 重复的判断条件
      "no-dupe-keys": 2, //禁止对象字面量中的重复键
      "no-dupe-else-if": 2, // 禁止 if-else-if 链中的重复条件
      "no-constant-binary-expression": 2, //禁止操作不影响值的表达式
      "no-cond-assign": 2, //禁止条件表达式中的赋值运算符
      "no-compare-neg-zero": 2, //禁止与 -0 进行比较
      "no-useless-assignment": 2, //检测未使用的变量
      "use-isnan": 2, //推荐使用isNaN方法，而不要直接和NaN作比较
      "for-direction": 2, //强制检测for循环的顺序，使其避免无限循环
      "object-curly-spacing": ["error", "always"], // 对象的括号保持一致的间距
      "no-extra-parens": ["error", "functions"], //禁止不必要的括号
      "func-call-spacing": ["error", "never"], //函数不允许换行
      "space-before-function-paren": ["error", "never"], //函数名左侧必须保持空格
      "no-empty": 2, //禁止出现空语句块
      "no-undef": 2, // 禁止使用未声明的变量，除非在 /*global */ 注释中提及。
      "no-unreachable-loop": 2, // 禁止循环体仅允许一次迭代的循环
      "no-unsafe-optional-chaining": 2, //禁止在不允许出现 undefined 值的上下文中使用可选链
      "no-self-assign": 2, // 禁止赋值双方完全相同的情况
      "no-obj-calls": 2,  //禁止将全局对象属性作为函数调用
      "no-irregular-whitespace": 2, //无效或不规则的空白
      "no-invalid-regexp": 2, // 禁止在 RegExp 构造函数中使用无效的正则表达式字符串
      "no-inner-declarations": 2, // 禁止在嵌套块中声明变量或function
      "no-sparse-arrays": 2, //禁用稀疏数组
      "no-template-curly-in-string": 2, //禁止在常规字符串中出现模板字面量占位符语法
      "no-unsafe-negation": 2, //禁止对关系运算符的左操作数使用否定操作符
      "valid-typeof": 2, //强制 typeof 表达式与有效的字符串进行比较
      "vue/require-v-for-key": 1, //v-for循环必须添加key
      curly: 2, //强制所有控制语句使用一致的括号风格
      "no-fallthrough": 2, //switch 必须break
      "no-unused-labels": 2, //禁止未使用的标签
      "no-use-before-define": 2, //变量必须先声明
      "array-bracket-spacing": [2, "never"], //在数组括号内强制保持一致的间距
      "brace-style": [2, "1tbs"], //one true brace style 是 JavaScript 中最常见的大括号风格之一，在这种风格中，一个块的开头大括号与它对应的语句或声明放在同一行中。比如说：
      "no-mixed-spaces-and-tabs": 2, //不允许在缩进时混合使用空格和制表符。
      "no-multi-assign": "error", //不允许 对变量进行链式赋值
      "no-multiple-empty-lines": ["error", { max: 5, maxEOF: 0 }], //额外的空行数量
      "no-const-assign": 2, //不允许重新分配 const 变量
      "array-bracket-newline": ["error", "consistent"], // 要求每对括号一致地使用换行符。如果一对中的一个括号内有换行符，而另一个括号内没有，它会报告错误。
      "vue/max-attributes-per-line": [
        "error",
        {
          singleline: 5 //标签超出5个属性就会换行
        }
      ],
      //不允许重复的keys
      "vue/no-dupe-keys": "error",
      //不允许在v-for或者范围内的属性出现未使用的变量定义
      "vue/no-unused-vars": "error",
      // 检查默认的prop值是否有效
      "vue/require-valid-default-prop": "error",
      // 保证computed属性中有return语句
      "vue/return-in-computed-property": "error",
      // 强制校验 v-show 指令
      "vue/valid-v-show": "error",
      //在computed properties中禁用异步actions
      "vue/no-async-in-computed-properties": "error",
      // v-html 或者 v-text 的节点里面不应包含默认值
      "vue/no-child-content": "error",
      // 禁止在data中访问计算属性
      "vue/no-computed-properties-in-data": "error",
      // 禁止在 v-if / v-else-if 出现重复的判断条件
      "vue/no-dupe-v-else-if": "error",
      //不允许重复的attributes
      "vue/no-duplicate-attributes": "warn",
      // 组件接受到的props禁止直接修改
      "vue/no-mutating-props": "warn",
      //在 <template> 标签下不允许解析错误
      "vue/no-parsing-error": [
        "error",
        {
          "x-invalid-end-tag": false
        }
      ],
      // 在vue3中， 修改ref的值必须使用  .value 来进行修改
      "vue/no-ref-as-operand": "error",
      // 组件名称禁止和保留关键字冲突
      "vue/no-reserved-component-names": "error",
      //不允许覆盖保留关键字
      "vue/no-reserved-keys": "error",
      // 禁止使用保留关键字
      "vue/no-reserved-props": "error",
      //强制data必须是一个带返回值的函数
      "vue/no-shared-component-data": "error",
      //在 <textarea> 中不允许mustaches
      "vue/no-textarea-mustache": "error",
      // 检测未使用的自定义组件
      "vue/no-unused-components": "error",
      // 计算属性的生命禁止和 data 属性重复
      "vue/no-use-computed-property-like-method": "error",
      // 禁止在 template 标签出现无用的属性
      "vue/no-useless-template-attributes": "error",
      // 禁止在组件上使用 v-html
      "vue/no-v-text-v-html-on-component": "error",
      //<component>标签需要v-bind:is属性
      "vue/require-component-is": "error",
      // props 的数据类型取值必须是构造函数
      "vue/require-prop-type-constructor": "error",
      // 当一个节点上出现两个同类型事件绑定时（例如两个 v-on:click） 时，其中一个必须有 .exact 修饰
      "vue/use-v-on-exact": "error",
      // 禁止无效的html属性
      "vue/valid-attribute-name": "error",
      // 校验 template 的合法性
      "vue/valid-template-root": "error",
      //关闭组件命名规则
      "vue/multi-word-component-names": "off",
      // 强制 html 变量前后必须换行
      "vue/singleline-html-element-content-newline": "off",
      // 所有组件的属性必须在同一个位置
      "vue/first-attribute-linebreak": ["error", { singleline: "ignore", multiline: "below" }],
      // 多行文本的换行
      "vue/multiline-html-element-content-newline": "error",
      // html 花括号变量值的间距
      "vue/mustache-interpolation-spacing": "error",
      // 禁止html多余的空格
      "vue/no-multi-spaces": "error",
      // html 赋值的时候 = 号周围禁止空格
      "vue/no-spaces-around-equal-signs-in-attribute": "error",
      // prop name 必须为驼峰
      "vue/prop-name-casing": ["error", "camelCase"],
      // prop 必须有默认值
      "vue/require-default-prop": "error",
      //  prop必须指定 type
      "vue/require-prop-types": "error",
      // 是否是有效的跟元素
      "vue/no-multiple-template-root": "error",
      // 强制检查闭合标签
      "vue/html-end-tags": "error",
      // template 缩进必须为2个空格
      "vue/html-indent": "error",
      // html传递的属性必须为双引号
      "vue/html-quotes": "error",
      // 禁止在 template 中使用this
      "vue/this-in-template": ["error", "never"]
    }
  },

  /**
   * 配置全局变量
   */
  {
    languageOptions: {
      globals: {
        ...globals.browser,

        /** 追加一些其他自定义全局规则 */
        wx: true
      }
    }
  },

  /**
   * vue 规则
   */
  {
    files: ["**/*.vue"],
    languageOptions: {
      parserOptions: {
        /** typescript项目需要用到这个 */
        parser: tseslint.parser,
        ecmaVersion: "latest",
        /** 允许在.vue 文件中使用 JSX */
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    rules: {
      // 在这里追加 vue 规则
      "vue/no-mutating-props": [
        "error",
        {
          shallowOnly: true
        }
      ]
    }
  },

  /**
   * typescript 规则
   */
  {
    files: ["**/*.{ts,tsx,vue}"],
    rules: {}
  },

  /**
   * prettier 配置
   * 会合并根目录下的.prettier.config.js 文件
   * @see https://prettier.io/docs/en/options
   */
  eslintPluginPrettierRecommended
)
