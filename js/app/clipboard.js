function fallbackCopyTextToClipboard(text) {
    // Create a textarea to hold the copy text
    let textArea = document.createElement("textarea")
    textArea.value = text
    textArea.style.top = "0"
    textArea.style.left = "0"
    textArea.style.position = "fixed"
    document.body.appendChild(textArea)
    textArea.focus()
    textArea.select()

    // Copy from the selected textarea
    try {
        let successful = document.execCommand('copy')
    } catch (err) {
        console.error('Fallback: Oops, unable to copy', err)
    }

    // Cleanup: remove the textarea
    document.body.removeChild(textArea)
}

function copyTextToClipboard(text) {
    if (!navigator.clipboard) {
        // Clipbaord not available, try execCommand copy
        fallbackCopyTextToClipboard(text)
        return
    }
    navigator.clipboard.writeText(text)
}

export { copyTextToClipboard }

