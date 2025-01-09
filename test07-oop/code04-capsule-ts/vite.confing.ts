import { defineConfig } from "vite";
export default defineConfig({
    build: {
        outDir: "dist", // 출력 디렉토리
        rollupOptions: {
            input: "./src/app.ts", // 엔트리 파일
            output: {
                entryFileNames: "app.js", // 출력 파일명
            },
        },
    },
    resolve: {
        extensions: [".ts", ".js"], // 확장자 자동 처리
    },
});