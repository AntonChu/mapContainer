export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [500, 'Internal Server Error'],
      [501, 'Not Implemented'],
      [502, 'Bad Gateway'],
      [503, 'Service Unavailable'],
      [504, 'Gateway Timeout'],
      [505, 'HTTP Version Not Supported'],
      [506, 'Variant Also Negotiates'],
      [507, 'Insufficient Storage'],
      [508, 'Loop Detected'],
      [509, 'Bandwidth Limit Exceeded'],
      [510, 'Not Extended'],
      [511, 'Network Authentication Required'],
      [520, 'Unknown Error'],
      [521, 'Web Server Is Down'],
      [522, 'Connection Timed Out'],
      [523, 'Origin Is Unreachable'],
      [524, 'A Timeout Occurred'],
      [525, 'SSL Handshake Failed'],
      [526, 'Invalid SSL Certificate'],
    ]);
  }

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    }
    return 'Unknown error';
  }
}
