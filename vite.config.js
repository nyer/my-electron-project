import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      localsConvention: 'camelCase', // 类名转换为驼峰命名
      scopeBehaviour: 'local', // 启用局部作用域
      generateScopedName: '[name]__[local]___[hash:base64:5]', // 自定义类名格式
    },
  },
  base: './', // 设置基础路径为当前目录
});