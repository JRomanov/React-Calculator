

function Output() {
    return (
    <form oninput="result.value=parseInt(a.value)+parseInt(b.value)">
    <input type="range" id="b" name="b" value="50" /> +
    <input type="number" id="a" name="a" value="10" /> =
    <output name="result" htmlFor="a b">60</output>
    </form>
    );
}

export default Output;