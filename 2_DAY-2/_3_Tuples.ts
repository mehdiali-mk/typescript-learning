export {};

const color: [number, number, number] = [225, 0, 120];

type HTTPResponse = [number, string];

const goodResponse: HTTPResponse = [200, "OK"];

goodResponse.push("200");

console.log(goodResponse);
