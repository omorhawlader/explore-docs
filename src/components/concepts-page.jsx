import { useParams } from "react-router-dom"

import bjrhw from '../../react-fundamentals/Basic-JavaScript-rendered-Hello-World.md'

import Markdown from 'markdown-to-jsx'
import './component.css'
import { markdownOption } from "./markdownOption"

const ConceptsPage = () => {
    const { title } = useParams()
    return (
        <div className="ml-64 mt-16 flex flex-1">
            <div>
                {
                    title === 'basic-javaScript-rendered-hello-world' && (
                        <Markdown options={markdownOption}>
                            {bjrhw}
                        </Markdown>
                    )
                }

            </div>
            <div className="w-[500px] h-[100vh] border">
                <iframe src='http://localhost:5173/Basic-JavaScript-rendered-Hello-World.html' className="border" />
                <a href="/Basic-JavaScript-rendered-Hello-World.html">go</a>
                {/* <h1>Omar</h1>
                <div dangerouslySetInnerHTML={{ __html: basicHtmlRender }} /> */}
            </div>

        </div>
    )
}

export default ConceptsPage