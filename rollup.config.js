import json from '@rollup/plugin-json';

export default args => {
    const result = args.configDefaultConfig;
    result.forEach(config => {
        const plugins = config.plugins || [];
        config.plugins = [
            json(),
            ...plugins
        ];
    });
    return result;
};