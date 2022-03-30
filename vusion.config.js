const pkg = require('./package.json');

module.exports = {
    version: '>=0.10.0',
    type: 'library',
    name: 'cloud-ui',
    CamelName: 'CloudUI',
    docs: {
        title: 'PC 端组件库 - 网易轻舟·低代码',
        logo: 'PC 端组件库',
        github: 'https://github.com/vusion/cloud-ui',
        package: pkg,
        navbar: [
            // { text: '设计语言', to: '/design' },
            { text: '基础组件', to: '/components' },
            { text: '指令和工具', to: '/misc' },
            { text: '布局', to: '/layouts' },
        ],
        components: [
            { group: '指南', name: 'quickstart', alias: '快速开始', path: './docs/views/guide/quickstart.md' },
            { group: '指南', name: 'pattern', alias: '设计模式', path: './docs/views/guide/pattern.md' },
            { group: '指南', name: 'changelog', alias: '更新日志', href: 'https://github.com/vusion/cloud-ui/releases', target: '_blank' },
            { group: '指南', name: 'theme', alias: '主题', path: 'library/styles/theme.md' },
            { group: '指南', name: 'overview', alias: '快速预览', path: './docs/views/guide/overview.md' },

            { group: '容器', name: 'u-router-view', alias: '子页面容器' },
            { group: '容器', name: 'u-iframe', alias: 'iFrame' },

            { group: '布局', name: 'u-linear-layout', alias: '线性布局' },
            { group: '布局', name: 'u-multi-layout', alias: '分栏布局' },
            { group: '布局', name: 'u-grid-layout', alias: '栅格布局' },
            { group: '布局', name: 'u-split-layout', alias: '分割布局', advanced: true },
            { group: '布局', name: 'u-crumb', alias: '面包屑' },
            { group: '布局', name: 'u-panel', alias: '面板' },
            { group: '布局', name: 'u-collapse', alias: '折叠面板' },
            { group: '布局', name: 'u-card', alias: '卡片' },
            { group: '布局', name: 'u-sidebar', alias: '侧边栏' },
            { group: '布局', name: 'u-navbar', alias: '导航栏', advanced: true },
            { group: '布局', name: 'u-navbar-multi', alias: '导航栏' },
            { group: '布局', name: 'u-footbar', alias: '底部栏', advanced: true },
            { group: '布局', name: 'u-menu', alias: '菜单', advanced: true },
            { group: '布局', name: 'u-toc', alias: '目录', advanced: true },

            { group: '展示', name: 'u-base', alias: '基础', advanced: true },
            { group: '展示', name: 'u-text', alias: '文本' },
            { group: '展示', name: 'u-link', alias: '链接' },
            { group: '展示', name: 'u-button', alias: '按钮' },
            { group: '展示', name: 'i-ico', alias: '图标' },
            { group: '展示', name: 'u-label', alias: '标签' },
            { group: '展示', name: 'u-badge', alias: '徽章' },
            { group: '展示', name: 'u-carousel', alias: '幻灯片' },
            { group: '展示', name: 'u-gallery', alias: '画廊' },
            { group: '展示', name: 'u-image', alias: '图片展示' },
            // { group: 'Basic', name: 'u-avatar', alias: '头像' },
            // { group: 'Basic', name: 'u-actions', alias: '操作项' },
            { group: '展示', name: 'u-list', alias: '列表', advanced: true },
            { group: '展示', name: 'u-desc-list', alias: '描述列表', advanced: true },
            { group: '展示', name: 'u-info-list', alias: '详情列表' },
            { group: '展示', name: 'u-table', alias: '表格', advanced: true, infrequent: true },
            { group: '展示', name: 'u-form-table', alias: '表单表格', advanced: true, infrequent: true },
            { group: '展示', name: 'u-article', alias: '文章', advanced: true, infrequent: true },
            { group: '展示', name: 'u-timeline', alias: '时间线', advanced: true },
            { group: '展示', name: 'u-countup', alias: '数字渐变', advanced: true },
            { group: '展示', name: 'u-dynamic-cards', alias: '动态卡片', advanced: true },
            { group: '展示', name: 'u-dropdown', alias: '下拉菜单' },

            { group: '数据', name: 'u-table-view', alias: '数据表格' },
            { group: '数据', name: 'u-list-view', alias: '数据列表' },
            { group: '数据', name: 'u-grid-view', alias: '数据网络' },
            { group: '数据', name: 'u-tree-view', alias: '树型列表' },
            { group: '数据', name: 'u-transfer', alias: '穿梭框' },
            { group: '数据', name: 'u-form-table-view', alias: '表单表格', advanced: true },
            { group: '数据', name: 'u-calendar-view', alias: '日历' },
            { group: '数据', name: 'u-list-components', alias: '组件列表' },

            { group: '表单', name: 'u-form', alias: '表单' },
            { group: '表单', name: 'u-validator', alias: '验证器', advanced: true },
            { group: '表单', name: 'u-input', alias: '单行输入' },
            { group: '表单', name: 'u-number-input', alias: '数字输入' },
            { group: '表单', name: 'u-textarea', alias: '多行输入' },
            { group: '表单', name: 'u-auto-complete', alias: '自动完成', advanced: true },
            { group: '表单', name: 'u-radios', alias: '单选组' },
            { group: '表单', name: 'u-switch', alias: '开关' },
            { group: '表单', name: 'u-checkboxes', alias: '多选组' },
            { group: '表单', name: 'u-checkbox-card', alias: '多选卡片', advanced: true },
            { group: '表单', name: 'u-capsules', alias: '胶囊' },
            { group: '表单', name: 'u-pills', alias: '药丸', advanced: true, deprecated: true },
            { group: '表单', name: 'u-tablets', alias: '药片', advanced: true, deprecated: true },
            { group: '表单', name: 'u-cascade-capsules', alias: '级联胶囊', advanced: true },
            { group: '表单', name: 'u-select', alias: '选择框' },
            { group: '表单', name: 'u-slider', alias: '滑块' },
            { group: '表单', name: 'u-combo-slider', alias: '复合滑块', advanced: true },
            { group: '表单', name: 'u-uploader', alias: '文件上传' },

            { group: '选择器', name: 'u-tabs', alias: '选项卡' },
            { group: '选择器', name: 'u-steps', alias: '步骤条' },
            { group: '选择器', name: 'u-selectable-steps', alias: '可选步骤条' },
            { group: '选择器', name: 'u-pagination', alias: '翻页器' },
            { group: '选择器', name: 'u-tree-select', alias: '树型选择框', advanced: true },
            { group: '选择器', name: 'u-cascade-select', alias: '级联选择' },
            { group: '选择器', name: 'u-cascader', alias: '新级联选择' },
            { group: '选择器', name: 'u-region-select', alias: '地区选择' },
            { group: '选择器', name: 'u-calendar', alias: '日历', advanced: true },
            { group: '选择器', name: 'u-date-picker', alias: '日期选择' },
            { group: '选择器', name: 'u-time-picker', alias: '时间选择' },
            { group: '选择器', name: 'u-date-time-picker', alias: '日期时间选择' },

            { group: '图表', name: 'u-linear-progress', alias: '线型进度条' },
            { group: '图表', name: 'u-circular-progress', alias: '圆型进度条' },

            { group: '反馈', name: 'u-alert', alias: '警告提示' },
            { group: '反馈', name: 'u-popup', alias: '弹出框' },
            { group: '反馈', name: 'u-popup-combination', alias: '弹出框组合' },
            { group: '反馈', name: 'u-tooltip', alias: '工具提示', advanced: true },
            { group: '反馈', name: 'u-icon-tooltip', alias: '图标提示', advanced: true },
            { group: '反馈', name: 'u-spinner', alias: '加载图标', advanced: true },
            { group: '反馈', name: 'u-loading', alias: '加载中', advanced: true },
            { group: '反馈', name: 'u-toast', alias: '吐司提示', advanced: true },
            { group: '反馈', name: 'u-modal', alias: '弹窗' },
            { group: '反馈', name: 'u-drawer', alias: '抽屉', advanced: true },
            { group: '反馈', name: 'u-lightbox', alias: '灯箱', advanced: true },
            { group: '反馈', name: 'u-skeleton', alias: '骨架屏', advanced: true },

            { group: '特效', name: 'e-ripple', alias: '波纹', advanced: true },
            { group: '特效', name: 'e-watermark', alias: '水印' },
            { group: '特效', name: 'u-copy', alias: '复制' },

            { group: '流程', name: 'u-taskbox', alias: '任务箱' },

            { group: 'Mixins & Functional', name: 'm-dynamic', alias: '动态列表', advanced: true },
            { group: 'Mixins & Functional', name: 'm-emitter', alias: '发送器', advanced: true },
            { group: 'Mixins & Functional', name: 'm-pub-sub', alias: '发布订阅模式', advanced: true },
            { group: 'Mixins & Functional', name: 'm-parent', alias: '父子模式', advanced: true, infrequent: true },
            { group: 'Mixins & Functional', name: 'm-group', alias: '分组模式', advanced: true, infrequent: true },
            { group: 'Mixins & Functional', name: 'm-root', alias: '根节点模式', advanced: true, infrequent: true },
            { group: 'Mixins & Functional', name: 'm-singlex', alias: '单选模式', advanced: true, infrequent: true },
            { group: 'Mixins & Functional', name: 'm-multiplex', alias: '多选模式', advanced: true, infrequent: true },
            { group: 'Mixins & Functional', name: 'm-complex', alias: '复合模式', advanced: true, infrequent: true },
            { group: 'Mixins & Functional', name: 'm-popper', alias: '弹出层', advanced: true },
            { group: 'Mixins & Functional', name: 'f-collapse-transition', alias: '折叠过渡', advanced: true },
            { group: 'Mixins & Functional', name: 'f-virtual-list', alias: '虚拟列表', advanced: true },
            { group: 'Mixins & Functional', name: 'f-scroll-view', alias: '滚动视图', advanced: true },
            { group: 'Mixins & Functional', name: 'f-draggable', alias: '拖拽', advanced: true },
            { group: 'Mixins & Functional', name: 'f-droppable', alias: '拖放', advanced: true },
            { group: 'Mixins & Functional', name: 'f-dragger', alias: '拖拽器', advanced: true },
            { group: 'Mixins & Functional', name: 'f-render', alias: '渲染器', advanced: true },
            { group: 'Mixins & Functional', name: 'f-slot', alias: '快捷插槽', advanced: true },
            { group: 'Mixins & Functional', name: 'f-forbidden', alias: '禁用', advanced: true },
        ],
        blocks: [],
        directives: [
            { group: 'Directive', name: 'v-repeat-click' },
            // { group: 'Directive', name: 'v-click-outside' },
            { group: 'Directive', name: 'v-ellipsis-title' },
            { group: 'Directive', name: 'v-focus' },
        ],
        filters: [],
        utils: [
            // { group: 'Utils', name: 'DataSource', alias: '数据源' },
            // { group: 'Utils', name: 'Formatters', alias: '格式器' },
            { group: 'Utils', name: 'dom', alias: 'DOM 相关' },
            { group: 'Utils', name: 'edit', alias: '编辑相关' },
        ],
        layouts: [
            { group: 'Layout', name: 'l-dashboard', alias: '仪表盘布局' },
            { group: 'Layout', name: 'l-document', alias: '文档布局' },
            { group: 'Layout', name: 'l-page', alias: '通用页面布局' },
            { group: 'Layout', name: 'l-side-main', alias: '左侧栏固定布局' },
            { group: 'Layout', name: 'l-left-middle-right', alias: '左中右布局' },
            { group: 'Layout', name: 'l-wrapper', alias: '透传页' },
            { group: 'Layout', name: 'l-root', alias: '界面根节点' },
        ],
    },
};
