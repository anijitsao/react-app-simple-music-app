export function sendResponse(statusCode, responseBody, res) {
    res.status(Number(statusCode)).json(responseBody);
}
