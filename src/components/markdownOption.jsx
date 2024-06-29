import Code from "./code"

export const markdownOption = {
    overrides: {
        code: {
            component: Code
        },
        h1: {
            component: ({ children }) => (
                <h1 className="text-gray-600 font-bold border-b border-b-gray-200 mx-4 py-6">{children}</h1>
            )
        },
        h2: {
            component: ({ children }) => (
                <h1 className="text-gray-600 font-bold border-b border-b-gray-200 mx-4 py-6">{children}</h1>
            )
        },
        h3: {
            component: ({ children }) => (
                <h1 className="text-gray-600 font-semibold mx-4 py-6">{children}</h1>
            )
        },
        p: {
            component: ({ children }) => (
                <p className="text-gray-400 mx-4 py-6">{children}</p>
            )
        },
        strong: {
            component: ({ children }) => (
                <span className="px-1 py-[1px] bg-gray-100 rounded-sm">{children}</span>
            )
        },
    }
}