function Writing() {
    return (
        <>
            <h1>言語化する</h1>
            <p>色の選択が完了しました。</p>
            <h2>言語化してください</h2>
            <textarea name="comment" id="" placeholder="ここに色を選んだ理由を書いてください" rows="10" cols="40"></textarea>
            <button type="reset">リセット</button>
            <button type="submit">送信</button>
        </>
    )
}

export default Writing