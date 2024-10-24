import React from "react"
import ReactDom from "react-dom"
import "./styles/styles.css"
import doc1 from "./images/GustavoColpaert.jpg"

const App = () => {
    const containerStyles = () => {
        return {width: 1280, margin: 'auto', border: '1px solid black',
backgroundColor: "#EEE", borderRadius: 8, padding: 12, textAlign: 'center'};}

    const docNames = {doc1: "Gustavo Colpaert", doc2: "Guilherme Turone", doc3: "Danilo Vidal"}

    return(
        <div style={containerStyles()}>
            <h2>Profissionáis de saúde</h2>
                <div style={{border: '1px solid #DDD', borderRadius: 8, padding:
8, display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
                    <div className="profissional">
                        <p>{docNames.doc1}</p>
                        <img src={doc1}/>
                    </div>

                    <div className="profissional">
                        <p>{docNames.doc2}</p>
                        <img src={process.env.PUBLIC_URL+ "GuilhermeTurone.jpeg"}/>
                    </div>

                    <div className="profissional">
                        <p>{docNames.doc3}</p>
                        <img src={process.env.PUBLIC_URL+ "DanilloVidal.jpg"}/>
                        
                    </div>
                </div>
        </div>
    )
}

ReactDom.render(
    <App />, document.querySelector("#root")
)