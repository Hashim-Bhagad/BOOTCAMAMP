const fs = require('fs/promises')
async function processNames() {
    const inputFilePath = "names.txt";
    const outputFilePath = "formatted_names.txt";
    try{
        console.log("Starting to process file....");
        // use await to read file content as a single String
        const fileContent = await fs.readFile(inputFilePath, 'utf8');

        // split the content by new lines to get an array of names
        const names = fileContent.trim().split("\n");

        console.log(`Read ${names.length} names.`);
        // fromat each name by trimming white space and converting into title case 
        const formatted_names = names.map(name =>{
            const trimmedName = name.trim();
            return trimmedName.charAt(0).toUpperCase() + trimmedName.slice(1).toLowerCase();
        });
        const outputContent = formatted_names.join("\n");
        // use await to write the formatted content to a new file
        await fs.writeFile(outputFilePath, outputContent, 'utf8')

        console.log(`Sucessfully processed name and saved to ${outputFilePath}`);
    }
    catch(error){
        // this will catch file not found errors, write errors etc,
        console.error("an error occured during the file processing: ", error.message);
    }
}
processNames();