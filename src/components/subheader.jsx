import {Content} from "./data.js"
export default function SubHeader(props){
    return(
        <div className="body">
        <h2 className="subtittle">{props.tittle}</h2>
        <ol type="1">
            <li><p className="content">{props.content1}</p></li>
            <ol type="a">
                <li><p className="sub1">{props.content1sub1}</p></li>
                <li><p className="sub2">{props.content1sub2}</p></li>
            </ol>
            <li><p className="content">{props.content2}</p></li>
            <li><p className="content">{props.content3}</p></li>
            <li><p className="content">{props.content4}</p></li>
            <li><p className="content">{props.content5}</p></li>
            <li><p className="content">{props.content6}</p></li>
            <li><p className="content">{props.content7}</p></li>
            <li><p className="content">{props.content8}</p></li>
            <li><p className="content">{props.content9}</p></li>
            <ol type="a">
                <li><p className="content">{props.content9sub1}</p></li>
                <li><p className="content">{props.content9sub2}</p></li>
                <li><p className="content">{props.content9sub3}</p></li>
            </ol>
            <li><p className="content">{props.content10}</p></li>
            <li><p className="content">{props.content11}</p></li>
        </ol>

        </div>
    );
}