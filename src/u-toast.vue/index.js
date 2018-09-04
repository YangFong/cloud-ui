import Vue from 'vue';

const Toast = {
    name: 'u-toast',
    props: {
        position: { type: String, default: 'top-center' },
        single: { type: Boolean, default: false },
        duration: { type: Number, default: 2000 },
        state: { type: String, default: '' },
        message: String,
        // visible: { type: Boolean, default: true },
        closeable: { type: Boolean, default: false },
    },
    data() {
        return {
            list: [],
            showState: this.state,
            showClose: true,
        };
    },
    methods: {
        show(message, duration, state) {
            if (!this.$el) {
                const ele = document.createElement('div');
                this.$mount(ele);
                document.body.appendChild(this.$el);
            }
            const options = {
                message: message || this.message,
                duration: duration || this.duration,
            };
            this.showState = state || this.state;
            this.open(options);
        },
        open(options) {
            if (this.single && this.list[0]) {
                Object.assign(this.list[0], options);
                this.list[0].counter++;
            } else {
                this.list.unshift(options);
                this.list[0].counter = 0;
            }

            const item = this.list[0];

            if (item.duration) {
                setTimeout(() => {
                    if (!item.counter)
                        this.close(item);
                    else
                        item.counter--;
                }, item.duration);
            }
        },
        close(item) {
            const index = this.list.indexOf(item);
            if (index < 0)
                return;
            this.list.splice(index, 1);

            this.$emit('close', {
                sender: this,
                item,
            });
        },
        /**
         * @method closeAll() 关闭所有消息
         * @public
         * @return {void}
         */
        closeAll() {
            this.list = [];
        },
        success(message, duration) {
            this.show(message, duration, 'success');
        },
        warning(message, duration) {
            this.show(message, duration, 'warning');
        },
        info(message, duration) {
            this.show(message, duration, 'info');
        },
        error(message, duration) {
            this.show(message, duration, 'error');
        },
    },
    watch: {
        // 此处有坑啊 由于message的内容是放在数组中，msg在父组件更新后，并不会触发数组内msg的更新
        message(newValue, oldValue) {
            this.list.some((item, index) => {
                if (item.message === oldValue) {
                    item.message = newValue;
                    return true;
                }
                return false;
            });
        },
        state(newValue) {
            this.showState = newValue;
        },
    },
};

Vue.nextTick(() => {
    const Ctor = Vue.component('u-toast');
    if (!Ctor)
        return;

    const toast = Toast.toast = new Ctor();
    const METHODS = Toast.METHODS = ['show', 'closeAll', 'success', 'warning', 'info', 'error'];
    METHODS.forEach((method) => Toast[method] = toast[method].bind(toast));
    Vue.prototype.$toast = toast;
});

Vue.prototype.$toast = Toast;

export default Toast;
