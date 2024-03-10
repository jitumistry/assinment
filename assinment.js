//  site link :-  https://react-icons.github.io/react-icons/

const data = `{
    "bug" : ["icon code copy button should be on the side of the code", "in mobile view click any navigation button does not automatically close navigation screen"],
    "feature" : ["add more color for icon", "add animated icons"],
    "accessibility" : ["id or name attribute missing in form field", "add a autocomplete attribute in form field"]
}`;


const parseData = JSON.parse(data);

for(let key in parseData) {
    const item = parseData[key];
    console.log(`${key}: ${item[0]}`);
}
