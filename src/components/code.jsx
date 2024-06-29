import CopyToClipboard from 'react-copy-to-clipboard';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useEffect, useState } from 'react';

const Code = ({ children, language = 'javascript' }) => {
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCopied(false)
        }, 1000)
        return () => clearTimeout(timer)
    }, [copied])

    return (
        <div className="mx-4 py-6 rounded-full">
            <CopyToClipboard text={children} onCopy={() => setCopied(true)}>
                <button className='bg-gray-100 rounded-md my-2 px-2 text-sm py-1'>
                    {copied ? "Copy Done" : "copy it!"}
                </button>
            </CopyToClipboard>
            <SyntaxHighlighter
                language={language}
                style={materialDark}
            >
                {children}
            </SyntaxHighlighter>
        </div>
    )
}

export default Code