/**
 * 
 * @param {*} template list of mapping objects between db headers and file headers
 * @param {*} fileHeaders  list of headers of file
 * @param {*} header name of the header to get index of it in the file
 * 
 * 
 * @returns index of header in the file or -1 if not found
 * 
 */
module.exports.getHeaderIndex = function (template, fileHeaders, header) {
    // get name of file header
    //header.toUpperCase()
    const fileHeader = template[header];
    let index = -2;
    let found = false;
    // get index of header in file
    // should throw a custom exception
    // but for now return nothing
    if (!Array.isArray(fileHeaders)) return -1;
    for (let i = 0; i < fileHeaders.length; i++) {
        if (fileHeaders[i] == fileHeader) {
            index = i;
            found = true;
            break;
        }
    }
    return found ? (index) : -1;
};

