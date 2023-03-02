import '@opentiny/vue-theme/dialog-box/index.css';
declare const _default: {
    components: {
        IconClose: any;
        IconFullscreen: any;
        IconMinscreen: any;
    };
    emits: string[];
    props: string[];
    model: {
        prop: string;
        event: string;
    };
    provide(): {
        dialog: {
            components: {
                IconClose: any;
                IconFullscreen: any;
                IconMinscreen: any;
            };
            emits: string[];
            props: string[];
            model: {
                prop: string;
                event: string;
            };
            provide(): any;
            setup(props: any, context: any): {
                t: any;
                vm: any;
                f: (props: any, attrs?: {}) => {};
                a: (attrs: any, filters: any, include: any) => {};
                d: (props: any) => void;
                dp: (props: any) => void;
            };
        };
    };
    setup(props: any, context: any): {
        t: any;
        vm: any;
        f: (props: any, attrs?: {}) => {};
        a: (attrs: any, filters: any, include: any) => {};
        d: (props: any) => void;
        dp: (props: any) => void;
    };
};
export default _default;