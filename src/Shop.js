import RowLayout from "./RowLayout";

export default function Shop({ shop }) {
    return (
        <RowLayout >
            <div className="rowLayout-localisation"><span style={{ marginLeft: '2rem' }} ></span><span>{shop}</span></div>
            <div className="rowLayout-read"><input type="checkbox" /></div>
            <div className="rowLayout-write"><input type="checkbox" /></div>
        </RowLayout >)
}