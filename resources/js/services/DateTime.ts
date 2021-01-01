export default class DateTime {
  private dateTime: Date;
  
  private months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  
  constructor(dateTimeString: string) {
    this.dateTime = new Date(dateTimeString);
  }
  
  public getDay(): number {
    return this.dateTime.getDate();
  }
  
  public getFullMonth(): string {
    const monthIndex = this.dateTime.getMonth();
    
    return this.months[monthIndex] || '';
  }
  
  public getFullYear(): number {
    return this.dateTime.getFullYear();
  }
  
  public getHours(): number {
    return this.dateTime.getHours();
  }
  
  public getMinutes(): string {
    return ('0' + this.dateTime.getMinutes()).substr(-2);
  }
  
  public getSeconds(): number {
    return this.dateTime.getSeconds();
  }
  
  public getMeridiem(): string {
    const hours = this.getHours();

    return hours >= 12 ? 'pm' : 'am';
  }
  
  public format(dateFormat: string) {
    let characters = dateFormat.split('');
    
    return characters.map((character) => {
      // Return day, eg, 1
      if (character === 'd') {
        return this.getDay();
      }
      
      // Return full month name, eg. January
      if (character === 'F') {
        return this.getFullMonth();
      }
      
      // Return full year, eg. 2020
      if (character === 'Y') {
        return this.getFullYear();
      }
      
      // Return meridiem, eg. am or pm
      if (character === 'a') {
        return this.getMeridiem();
      }
      
      // Return meridiem, eg. AM or PM
      if (character === 'A') {
        return this.getMeridiem().toUpperCase();
      }
      
      // Return 12 hour format, eg. 1
      if (character === 'h') {
        let hours = this.getHours() % 12;
        return hours ? hours : 12;
      }
      
      // Return minutes, eg. 59
      if (character === 'i') {
        return this.getMinutes();
      }
      
      // Return seconds, eg. 59
      if (character === 's') {
        return this.getSeconds();
      }
      
      // Return any other character that has no mapping.
      return character;
    }).join('');
  }
}
