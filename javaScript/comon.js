function getValueByUsingId(elementId) {
    const elementIdValueField = document.getElementById(elementId);
    const elementIdValueString = elementIdValueField.value;
    const elementIdValue = parseInt(elementIdValueString);

    return elementIdValue;
}

function getInnerTextByUsingId(elementId) {
    const elementIdInnerTextField = document.getElementById(elementId);
    const elementIdInnerTextString = elementIdInnerTextField.innerText;
    const elementIdInnerText = parseInt(elementIdInnerTextString);

    return elementIdInnerText;
}

function setInnerTextByUsingId(elementId, elementValue) {
    const elementIdField = document.getElementById(elementId);
    elementIdField.innerText = elementValue;
}